---
title: "All You Need is One: Capsule Prompt Tuning with a Single Vector"
title_zh: 一个足矣：基于单向量的胶囊提示微调
authors: "Yiyang Liu, James Chenhao Liang, Heng Fan, Wenhao Yang, Yiming Cui, Xiaotian Han, Lifu Huang, Dongfang Liu, Qifan Wang, Cheng Han"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=WZS7sJiSUm"
tags: ["query:pe"]
score: 9.0
evidence: 提出了一种结合实例感知信息的单向量提示微调方法，以提升提示微调模型的性能。
tldr: 当前提示微调方法依赖大量提示向量并需网格搜索最佳长度，计算负担大，且设计缺乏实例感知。本文提出胶囊提示微调，仅用一个向量并融入实例信息，显著降低计算开销且提升性能。实验显示，该方法参数更少但性能超越多提示基线，证明了实例信息在提示学习中的价值。该工作为高效、实例自适应的提示微调提供了新方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1445, \"height\": 661, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 646, \"height\": 427, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1432, \"height\": 640, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1438, \"height\": 377, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1425, \"height\": 267, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 617, \"height\": 950, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1400, \"height\": 643, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1402, \"height\": 643, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1437, \"height\": 709, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1447, \"height\": 650, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wzs7sjisum/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1452, \"height\": 284, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-wzs7sjisum/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1455, \"height\": 1432, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wzs7sjisum/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 800, \"height\": 239, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wzs7sjisum/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 660, \"height\": 235, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wzs7sjisum/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1000, \"height\": 332, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wzs7sjisum/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1448, \"height\": 220, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wzs7sjisum/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1196, \"height\": 243, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wzs7sjisum/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 925, \"height\": 279, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wzs7sjisum/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1105, \"height\": 158, \"label\": \"Table\"}]"
motivation: 现有提示微调需要大量提示和网格搜索最优长度，计算负担大；且任务级提示设计忽视实例信息，制约性能。
method: 提出胶囊提示微调，用单个向量表示提示，并注入实例感知信息，实现高效且自适应的提示学习。
result: 实验显示，该方法在使用更少参数的情况下，性能超越现有需要多个提示向量的方法，提升了模型适应性。
conclusion: 本工作表明，融入实例感知信息的单向量提示微调是一种高效且实用的方法，为提示设计提供了新方向。
---

## Abstract
Prompt-based learning has emerged as a parameter-efficient finetuning (PEFT) approach to facilitate Large Language Model (LLM) adaptation to downstream tasks by conditioning generation with task-aware guidance. Despite its successes, current prompt-based learning methods heavily rely on laborious grid searching for optimal prompt length and typically require considerable number of prompts, introducing additional computational burden. Worse yet, our pioneer findings indicate that the task-aware prompt design is inherently limited by its absence of instance-aware information, leading to a subtle attention interplay with the input sequence. In contrast, simply incorporating instance-aware information as a part of the guidance can enhance the prompt-tuned model performance without additional fine-tuning. Moreover, we find an interesting phenomenon, namely "attention anchor", that incorporating instance-aware tokens at the earliest position of the sequence can successfully preserve strong attention to critical structural information and exhibit more active attention interaction with all input tokens. In light of our observation, we introduce Capsule Prompt-Tuning (CaPT), an efficient and effective solution that leverages off-the-shelf, informative instance semantics into prompt-based learning. Our approach innovatively integrates both instance-aware and task-aware information in a nearly parameter-free manner (i.e., one single capsule prompt).
Empirical results demonstrate that our method can exhibit superior performance across various language tasks (e.g., 84.03\% average accuracy on T5-Large), serving as an "attention anchor," while enjoying high parameter efficiency (e.g., 0.003\% of model parameters on Llama3.2-1B).

---

## 论文详细总结（自动生成）

## 论文总结：All You Need is One: Capsule Prompt Tuning with a Single Vector

### 1. 论文的核心问题与整体含义
- **研究动机**  
  当前基于提示的参数高效微调方法存在两个关键局限：  
  - **能力受限**：任务感知的软提示主要关注自身，与输入序列中的关键结构信息交互微弱，缺乏实例感知信息，难以适应不同输入样本。  
  - **搜索低效**：通常需要繁重的网格搜索来确定最优提示长度，导致大量额外计算开销。
- **整体含义**  
  本文旨在解决上述问题，发现引入**实例感知语义**能够形成“注意力锚点”（Attention Anchor），使提示与输入产生强交互。基于此提出 **Capsule Prompt‑Tuning (CaPT)** ——仅使用**单个胶囊向量**集成任务与实例信息，在近乎零参数的条件下消除长度搜索，提升性能与效率。

### 2. 方法论
- **核心思想**  
  用一个可学习的“胶囊”向量 \(p_i\)（每层）替换传统的多个软提示。通过将该向量与**输入序列或前一层的平均表示**相加，动态注入实例感知特征，构成胶囊提示 \(S_i\)。该设计无需搜索提示长度，且单向量即可同时编码任务先验和实例语义。
- **关键公式（文字说明）**  
  对Transformer第 \(i\) 层：  
  - 首层：\(S_1 = p_1 + \text{Mean}(E)\)，然后 \(S_1, H_1 = L_1(S_1, E)\)。  
  - 后续层：\(S_i = p_i + \text{Mean}(S_{i-1} \oplus H_{i-1})\)，然后 \(S_i, H_i = L_i(S_i, H_{i-1})\)。  
  其中 \(E\) 为输入嵌入，\(H_{i-1}\) 为序列表示，\(\oplus\) 表示拼接。\(S_i\) 作为附加的“胶囊”提示token，与序列一起输入Transformer层。
- **变体**  
  除默认的**加法**融合外，还探索了前置（拼接平均表示）、提取（1D卷积）和投影（低秩线性层）等方案，但加法在参数效率与效果上最具平衡性。

### 3. 实验设计
- **数据集**：SuperGLUE 中的六个自然语言理解任务——BoolQ、CB、COPA、MRC、RTE、WiC；另在 CommonsenseQA (CSQA) 上进一步验证。数据分割统一为：原始训练集按 90%/10% 划分训练/验证，原验证集作为测试集。
- **基线方法**：与全量微调、分类头微调、以及 **Prompt‑Tuning、P‑Tuning v2、XPrompt、ResPrompt、SMoP、VFPT、DePT、EPT、LoPA、M‑IDPG** 等大量参数高效基线对比，同时对比了 Adapter、LoRA 等非提示类方法。
- **模型规模**：覆盖编码器‑解码器架构（T5‑Base 220M、T5‑Large 770M）与仅解码器架构（Llama3.2‑1B、Qwen2.5‑1.5B），并在 Qwen2.5‑7B 上进行了更大规模验证。
- **评估指标**：平均准确率（Average Score），对多个指标的任务取宏平均，所有结果报告三次运行均值。

### 4. 资源与算力
- 所有实验使用 **NVIDIA RTX 6000 Ada 48GB GPU**，PyTorch 实现。
- 训练设置：大至 50 个 epoch（采用早停），批次大小 16–32，Adafactor 优化器。
- 论文以相对训练时间比较效率（Table 2），**CaPT 耗时设为 1.00×**，而 Prompt‑Tuning 为 8.77×，LoPA 为 14.93×，但**未给出绝对训练时长或 GPU 数量**。计算资源部分注明使用了 ACCESS 分配计算。

### 5. 实验数量与充分性
- **主实验**：4 种模型 × 6 数据集，与十余种基线全面对比（Table 1）。
- **消融实验**：  
  - CaPT 变体（加法、前置、提取、投影）对比。  
  - 提示长度与放置深度的影响。  
  - 任务感知与实例感知信号的独立贡献。
- **分析实验**：多组注意力图可视化（平均注意力、分层注意力、解码器注意力）、训练效率对比、与其它 PEFT 范式（Adapter, LoRA）的比较、CSQA 扩展验证等。  
- 总体实验数量丰富，覆盖不同模型架构与任务类型，变体与消融设计合理。所有 SOTA 基线均严格遵循统一数据划分与训练策略，并报告标准差，具备较好的**客观性与公平性**。

### 6. 主要结论与发现
- **现象揭示**：常规任务软提示主要关注自身，与输入序列交互微弱；插入一个实例感知 token 即可形成“注意力锚点”——该 token 既强烈关注输入中的结构性关键 token，又被所有输入 token 广泛关注，无需额外微调即可提升性能。
- **方法有效性**：CaPT 仅用一个可学习向量（占模型参数的 0.003%–0.004%），在 **T5‑Large 上平均达到 84.03% 准确率，超越全量微调**；在 Llama3.2‑1B 上较 P‑Tuning v2 提升 24.44%；同时彻底省去长度网格搜索，训练效率大幅领先。
- **通用性**：胶囊提示在编码器‑解码器和仅解码器模型上均表现鲁棒，验证了注意力锚点角色不依赖于特定架构。

### 7. 优点
- **极简高效**：单向量提示设计，参数极少，免去长度搜索，实现极低的训练与存储开销。
- **可解释性强**：通过细致的注意力分析，首度提出并验证“注意力锚点”现象，为提示学习的设计提供了新洞见。
- **性能突出**：在同等甚至更少参数下，超越多种先进提示方法与部分全量微调结果，具有很好的实用前景。
- **实验扎实**：横跨多模型、多任务，包含丰富的分析、消融和横向对比，结果稳健。

### 8. 不足与局限
- **模态扩展受限**：作者指出，视觉模态缺乏类似文本固定结构指令的 token，CaPT 直接迁移可能困难。
- **模型泛化边界**：虽在多种模型上有效，但在更大的模型（如 70B+）及更广泛数据集上的表现仍需进一步验证。
- **实验细节**：部分基线结果引用公开报告，非完全自主复现；训练时间对比仅给出相对值，缺乏绝对时钟时间。对于极低资源或小样本场景未单独评估。
- **潜在偏差**：方法依赖预训练模型的质量与偏见，尽管论文讨论了伦理风险及缓解措施，但实际应用中仍可能存在偏见传递问题。

（完）
