---
title: "On Zero-Initialized Attention: Optimal Prompt and Gating Factor Estimation"
title_zh: 关于零初始化注意力：最优提示与门控因子估计
authors: "Nghiem Tuong Diep, Huy Nguyen, Chau Nguyen, Minh Le, Duy Minh Ho Nguyen, Daniel Sonntag, Mathias Niepert, Nhat Ho"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=auc4Ng6h4R"
tags: ["query:pe"]
score: 9.0
evidence: 为LLaMA-Adapter中零初始化注意力的提示提供理论分析与最优估计，是提升LLM性能的提示调优方法。
tldr: 零初始化注意力在LLaMA-Adapter中广泛应用但缺乏理论基础。本文首次将零初始化注意力与混合专家模型联系起来，证明了线性和非线性提示均可最优估计，且非线性提示更具灵活性。在多个LLM基准上的实验验证了理论结论，非线性提示性能更优，为基于注意力的提示调优提供了坚实的理论支撑和设计指导。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-auc4ng6h4r/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 801, \"height\": 742, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-auc4ng6h4r/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 818, \"height\": 608, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-auc4ng6h4r/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 767, \"height\": 571, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-auc4ng6h4r/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1241, \"height\": 595, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-auc4ng6h4r/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1239, \"height\": 595, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-auc4ng6h4r/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1212, \"height\": 713, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-auc4ng6h4r/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1613, \"height\": 310, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-auc4ng6h4r/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1696, \"height\": 478, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-auc4ng6h4r/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 862, \"height\": 257, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-auc4ng6h4r/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1074, \"height\": 131, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-auc4ng6h4r/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1429, \"height\": 1132, \"label\": \"Table\"}]"
motivation: 零初始化注意力虽实证成功，但理论基础空白，限制了其进一步发展。
method: 通过理论分析，将零初始化注意力与混合专家模型关联，推导提示和门控函数的最优估计。
result: 实验表明非线性提示优于线性提示，验证了理论预测的正确性和实用价值。
conclusion: 为提示调优方法提供了理论基石，指导未来设计更有效的自适应提示。
---

## Abstract
LLaMA-Adapter has recently emerged as an efficient fine-tuning technique for LLaMA models, leveraging zero-initialized attention to stabilize training and enhance performance. However, despite its empirical success, the theoretical foundations of zero-initialized attention remain largely unexplored. In this paper, we provide a rigorous theoretical analysis, establishing a connection between zero-initialized attention and mixture-of-expert models. We prove that both linear and non-linear prompts, along with gating functions, can be optimally estimated, with non-linear prompts offering greater flexibility for future applications. Empirically, we validate our findings on the open LLM benchmarks, demonstrating that non-linear prompts outperform linear ones. Notably, even with limited training data, both prompt types consistently surpass vanilla attention, highlighting the robustness and adaptability of zero-initialized attention.

---

## 论文详细总结（自动生成）

# 论文总结：零初始化注意力最优提示与门控因子估计

## 1. 研究动机与核心问题
- LLaMA‑Adapter 利用**零初始化注意力**在指令微调中取得了显著的经验成功，它通过将可学习的提示（prompts）以零初始化方式和独立的门控因子注入原始注意力计算，避免了训练不稳定和灾难性遗忘。
- 然而，**零初始化注意力的理论基础缺失**，其为何有效、提示与门控因子能否被最优估计、非线性提示有何优势等问题尚无严格分析。
- 本文旨在**建立零初始化注意力与混合专家模型的等价性**，并从理论上证明线性与非线性提示均可被最优估计，为后续应用提供理论支持与设计指导。

---

## 2. 方法论

### 2.1 核心思想：将零初始化注意力形式化为混合专家模型
- 将 LLaMA‑Adapter 中的零初始化注意力重新解释为一个**特殊的混合专家模型**：
  - 预训练 Transformer 中的键、值投影及已有的输入 token 构成**一组固定的专家及其门控函数**，无需训练。
  - 新加入的适应提示（prompts）作为**另一组可学习的专家**，其门控权重由提示嵌入与查询的 softmax 独立计算，并乘以一个可学习的门控因子 `tanh(α)`。
  - 最终输出为两组专家输出的加权和：
    ```
    y = Σ_j G_j(X) f_j(X) + tanh(α) Σ_j' G_{N+1+j'}(X) f_{N+1+j'}(X)
    ```
  其中 `G` 为基于 softmax 的专家权重，`f` 为专家响应。

### 2.2 理论分析框架与最优估计
- 在回归模型设定下（高斯噪声），将提示估计问题转化为**混合测度的最小二乘估计**。
- 引入 **Voronoi 损失函数** 衡量估计提示与真实提示之间的差异，推导出：
  - **回归函数估计本身达到参数速率** `O(√(log n/n))`（命题 4.1）。
  - **提示参数的收敛速率**为多项式阶 `O(n^{-1/2})` 或 `O(n^{-1/4})`（最多对数因子），即仅需 `O(ϵ^{-2})` 或 `O(ϵ^{-4})` 样本即可达到误差 `ϵ`。
  - 对比之下，随机初始化注意力下的提示收敛速率仅为 `O(1/log^τ n)`，需要指数级样本，**零初始化注意力在样本效率上具有显著优势**。
- **非线性提示扩展**：将提示替换为经过 MLP 或其他非线性激活后的表示 `σ(P)`，在类似假设下证明同样的最优收敛速率，且非线性形式提供更大应用灵活性。

---

## 3. 实验设计

### 3.1 数据集与基准
- **训练数据**：Alpaca 数据集（52K 指令跟随样本）。
- **评测基准**（Open LLM benchmarks）：
  - AI2 Reasoning Challenge（ARC，含 Easy 和 Challenge 子集）
  - HellaSwag（常识推理）
  - MMLU（大规模多任务语言理解）
  - TruthfulQA（真实性问答）
- 评测方式：ARC、MMLU、TruthfulQA 采用零样本，HellaSwag 采用 10‑shot。

### 3.2 对比方法
- **线性提示**（LLaMA‑Adapter 原版，提示直接零初始化）。
- **非线性提示**：用轻量 MLP（2 层 + 非线性激活如 ReLU/Leaky‑ReLU）处理提示嵌入，层间共享 MLP。
- **随机初始化提示**（即不使用零初始化注意力，沿用常规注意力）。
- 其他参数高效微调基线：LoRA、VeRA、Prompt Tuning、IA3。
- 全量微调 LLaMA（Fully Fine‑tuning）作为上限。

### 3.3 模型与训练设置
- **模型**：LLaMA‑7B（32 层，提示长度 `L=10`，插入最后 30 层）与 LLaMA‑13B（40 层，插入最后 38 层）。
- **训练超参**：4 张 A100‑80GB，5 epoch，warmup 2 epoch，batch size 64，学习率 0.009，权重衰减 0.02。

---

## 4. 算力与资源消耗
- 训练使用 **4 块 A100‑80GB GPU**。
- 单次训练耗时：
  - LLaMA‑7B + 零初始化（线性/非线性）：约 **1 小时 54 分钟**。
  - LLaMA‑13B + 零初始化（线性/非线性）：约 **3 小时 17 分钟**。
（详见论文 Table 3）

---

## 5. 实验充分性与公平性
- **实验数量**：
  - 主实验对比表格（Table 1, Table 2）涉及 4 个数据集、2 种模型规模、6 种微调方法。
  - 数据效率分析（Figure 2, Figure 3）：在 1%、10%、30%、50%、100% 训练子集上评估三种提示策略。
  - 效率对比表（Table 3）包括参数量、存储占用、训练时间。
- **公平性**：所有方法均在相同 Alpaca 数据集上微调，评测指标统一；随机初始化作为直接消融基线；除提示外其余骨干参数冻结。实验设计全面，对比客观。

---

## 6. 主要结论与发现
1. **零初始化注意力显著优于随机初始化**：
   - LLaMA‑7B 上，线性提示在 TruthfulQA 上领先 7.71%，在 HellaSwag 上领先 4.17%，平均提升约 3.77%。
   - LLaMA‑13B 同样观察到一致但幅度稍小的优势。
2. **非线性提示进一步提升性能**：
   - 非线性提示在多数基准上较线性提示额外提升 1‑2%，尤其在 MMLU 和 TruthfulQA 上表现突出（例如 LLaMA‑13B MMLU 51.32 vs. 49.64）。
   - 非线性提示接近全量微调性能，同时显著优于 LoRA、Prompt Tuning、IA3 等 PEFT 方法。
3. **样本效率优势**：
   - 在不同训练数据比例下，零初始化（线性和非线性）均优于随机初始化，且非线性提示在极低数据率时更具优势。
   - 验证了理论中多项式样本复杂度带来的好处。
4. **训练开销几乎不变**：非线性提示仅小幅增加参数和存储，但不增加训练时间。

---

## 7. 方法优点与亮点
- **坚实的理论支撑**：首次将零初始化注意力严格形式化为混合专家模型，并提供精细的收敛速率分析，弥补了理论空白。
- **非线性提示的创新与有效性**：继承了前缀调优中 MLP 重参数化的经验，同时保持与线性提示相同的理论最优性，增强了实际性能与灵活性。
- **全面的实验验证**：覆盖多个主流 LLM 理解任务、两种规模的模型、多种训练数据量，并对比了多种 PEFT 方法，验证了理论的普适性。
- **透明的资源报告**：公开 GPU 数量、训练时长，有利于复现与成本评估。

---

## 8. 不足与局限
- **模态局限**：仅测试于纯文本单模态 LLaMA 模型，未探索多模态 LLM 场景，理论框架向多模态的迁移性待验证。
- **超参数探索有限**：提示嵌入的最优层数、提示长度、MLP 结构等未做系统化的消融研究；适配器与提示的联合使用未深入探讨。
- **可解释性与稳定性**：非线性提示在真实部署中可能引入的偏差、脆性以及其对输出分布的影响缺乏深入分析。
- **识别性假设**：理论依赖较强的注入性、Lipschitz 等假设，在极端或对抗情况下是否仍然鲁棒有待研究。

---

（完）
