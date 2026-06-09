---
title: "Don’t Forget the Enjoin: FocalLoRA for Instruction Hierarchical Alignment in Large Language Models"
title_zh: 勿忘指令：FocalLoRA用于大语言模型中的层级指令对齐
authors: "Zitong Shi, Guancheng Wan, Haixin Wang, Ruoyan Li, Zijie Huang, Wanjia Zhao, Yijia Xiao, Xiao Luo, Carl Yang, Yizhou Sun, Wei Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=o2y6BS6mm0"
tags: ["query:pe"]
score: 7.0
evidence: 通过参数高效微调提升模型对层级提示指令的遵循
tldr: 针对大语言模型在层级提示中忽视系统指令导致安全隐患的问题，提出FocalLoRA框架，以参数高效的方式选择性优化关键注意力头，强化指令层级遵循能力。实验表明该方法在安全和对齐测试中显著提升了提示遵守度，为提示设计提供了模型侧保障。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-o2y6bs6mm0/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 758, \"height\": 528, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-o2y6bs6mm0/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1433, \"height\": 349, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-o2y6bs6mm0/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 637, \"height\": 648, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-o2y6bs6mm0/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1385, \"height\": 634, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-o2y6bs6mm0/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1448, \"height\": 288, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-o2y6bs6mm0/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1154, \"height\": 649, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-o2y6bs6mm0/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1441, \"height\": 699, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-o2y6bs6mm0/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1453, \"height\": 583, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-o2y6bs6mm0/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1358, \"height\": 1696, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-o2y6bs6mm0/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1436, \"height\": 733, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-o2y6bs6mm0/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1439, \"height\": 531, \"label\": \"Table\"}]"
motivation: 模型容易混淆层级提示中的冲突指令，削弱系统级安全性。
method: 提出FocalLoRA，选择性微调关键注意力头以增强层级指令遵循。
result: 在安全对齐任务上，FocalLoRA明显改善了模型对系统指令的遵从。
conclusion: 结构化微调可有效提升提示效能，对安全关键应用尤其重要。
---

## Abstract
Recent studies reveal that large language models (LLMs) often struggle to resolve conflicting instructions embedded within hierarchical prompts, resulting in decreased compliance with system-level directives and compromising the reliability of safety-critical applications. While earlier approaches attempt to improve instruction hierarchy awareness through prompt engineering or embedding-level modifications, they typically lack structural modeling and either offer limited gains or require extensive fine-tuning. In this work, we introduce $\textbf{FocalLoRA}$, a parameter-efficient and structure-aware framework that strengthens hierarchical instruction adherence by selectively optimizing structurally critical attention heads, referred to as $\textit{focal heads}$, which exhibit heightened sensitivity to instruction conflicts. Experiments across multiple models and a dedicated benchmark demonstrate that FocalLoRA markedly enhances system instruction compliance with minimal tuning cost. For instance, on Llama-8B, fine-tuning only 0.0188\% of parameters yields a 35.52\% $\uparrow$ in system instruction compliance.

---

## 论文详细总结（自动生成）

# 论文总结：FocalLoRA — 增强大语言模型层级指令对齐的参数高效微调框架

## 1. 核心问题与研究动机
- **背景**：大语言模型（LLM）通常通过层级提示（instruction hierarchy）区分系统指令、用户指令与任务，以维持安全合规的行为。但在存在**指令冲突**时，LLM常常无法正确解析优先级，导致系统级指令被忽略。
- **核心问题**：现有方法（如角色标记、嵌入层注入）缺乏对模型内部结构的显式建模，提升有限或需要大规模微调；急需一种参数高效、结构敏感的解决方案。
- **整体含义**：本文旨在通过识别并选择性优化模型中“冲突敏感”的注意力头（focal heads），在不改变架构、极少参数更新的前提下，显著增强LLM对系统指令的遵循能力。

## 2. 方法论
### 2.1 核心思想
- 观察发现：在指令冲突时，注意力分布与正常情况**有显著差异**；存在少量“焦点头”（Focal Heads）对这一变化高度敏感。
- 提出**FocalLoRA**：先识别冲突敏感头（CSHI），再对这些头施加低秩适配（SAHO），引导注意力向系统指令集中。

### 2.2 冲突敏感头识别（CSHI）
- 构造冲突与一致两个输入版本，提取每层每头的注意力矩阵 **A**(ℓ,h)。
- 综合三个维度的差异度量：
  - **幅值差** ∆mag = ‖Aconf – Acons‖₁
  - **方向偏移** ∆dir = 1 – cos(a_conf, a_cons) （向量化后余弦相似度）
  - **分布散度** ∆dist = 平均对称KL散度（按行计算）
- 归一化后加权求和得到综合分数 **S**(ℓ,h)，取 top 10% 作为焦点头。

### 2.3 系统感知头优化（SAHO）
- 仅对焦点头的 **q_proj** 和 **k_proj** 权重添加 LoRA 低秩适配器（r=8, α=16）。
- 定义关注损失（Focus Loss）：
  - 构造系统段掩码 **m**（标识系统指令 token）。
  - 计算最后生成 token 在系统段上的注意力比率 **R**(ℓ,h)_b。
  - 损失为负均值：L_focus = – mean(R)，鼓励更多注意力分配给系统段。
- 总损失 L = λ_f · L_focus（省略标准语言建模损失，因参数极少）。

## 3. 实验设计
### 3.1 数据集
- **自建冲突数据集**：基于8类可编程验证的约束类型（如语言、格式、字数、大小写等）×200任务×简洁/详细版式×角色互换，共6400个样本。
- **公开基准**：Clean Alpaca（注入攻击场景），用于评估跨域泛化。

### 3.2 对比方法
- **Baseline 格式**：
  - **Ordinary**：纯文本直接拼接（无角色标签）
  - **Template**：标准指令模板（<|system|>, [INST] 等）
- **对比方法**：
  - **+ISE**（Instructional Segment Embedding，Wu et al.）：顶层级嵌入增强方法
  - 自身消融：不同 rank、不同头数量

### 3.3 评估协议
- **系统指令合规率**：自动脚本检查输出是否满足系统约束。
- 场景覆盖：
  - 简单/丰富指令格式
  - 域内/域外对抗注入（Naive, Ignore, Escape）

## 4. 资源与算力
- 硬件：NVIDIA GeForce RTX 3090 GPU，Intel Xeon Gold 6240 CPU。
- 框架：PyTorch 2.0.1 + CUDA 11.7。
- 微调策略：4-bit QLoRA（NF4量化），极大降低显存占用。
- **未见详细训练时间或 GPU 数量说明**。

## 5. 实验数量与充分性
- **模型规模覆盖**：5个开源LLM（Qwen‑1.5B, Phi‑3.8B, Mistral‑7B, Llama‑8B, Qwen‑14B）。
- **实验组数**：
  - 不同格式（2种）× 不同指令复杂度
  - 不同 LoRA rank (8, 16, 32) 和 focal head 数量（10/50/100）
  - 域内/域外对抗注入 × 三种攻击策略 × 不同方法
  - 消融分析：头数、秩大小
  - 额外测试MMLU基准验证通用能力不下降
- **公平性与客观性**：基于可编程自动评估，排除人工偏见；角色互换避免位置偏差；随机分割确保泛化。实验设计较为系统、全面。

## 6. 主要结论与发现
- **显著提升系统指令合规**：仅微调 0.0188% 参数，Llama‑8B 在 Template 基线 17.62% 的基础上提升至 78.96%（+61.34 个百分点）。
- **跨模型一致有效**：小至 Qwen‑1.5B，大至 14B 均获得稳定增益。
- **对抗鲁棒性**：在注入攻击下仍可恢复甚至超越原始性能，如 Mistral‑7B 在 Escape 攻击下达到 76.37%，优于 +ISE 5.24 个百分点。
- **选择性头的重要性**：过多调参会稀释效果；LoRA rank 增至 32 后收益递减。

## 7. 优点
- **结构感知设计**：直接基于注意力机制差异定位关键头，而非仅修改输入/嵌入层。
- **极高参数效率**：仅 0.02% 参数更新，兼容 4-bit 量化，便于部署。
- **多维度评估指标**：融合幅值、方向、分布差异的焦点头定位更鲁棒。
- **自动化评估**：可编程验证，避免人工评判的主观性。

## 8. 不足与局限
- **依赖静态模板解析**：需要通过标记分隔系统/用户段，无法处理无结构或变体格式。
- **未探索多轮对话冲突**：当前仅限于单轮双指令场景，实际对话的累积冲突未验证。
- **可能的高资源冲突场景未涵盖**：如长上下文、工具调用等复杂交互。
- **训练成本模糊**：未提供具体训练时长和参数量的精确计算，影响复现的便利性。
- **通用能力影响**：尽管 MMLU 未明显下降，但更广泛的下游任务影响仍需验证。

（完）
