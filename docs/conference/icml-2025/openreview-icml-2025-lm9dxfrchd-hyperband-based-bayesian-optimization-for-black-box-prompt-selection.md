---
title: Hyperband-based Bayesian Optimization for Black-box Prompt Selection
title_zh: 基于Hyperband的贝叶斯优化用于黑盒提示选择
authors: "Lennart Schneider, Martin Wistuba, Aaron Klein, Jacek Golebiowski, Giovanni Zappella, Felice Antonio Merra"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=Lm9DXFrcHD"
tags: ["query:pe"]
score: 10.0
evidence: 提出结合Hyperband的贝叶斯优化方法，将指令和示例视为模块化组件，高效选择黑盒LLM的最优提示。
tldr: 黑盒提示选择面临巨大搜索空间、无梯度和高评估代价的挑战。本文提出HbBoPs，结合结构感知的深度核高斯过程与Hyperband多保真度调度器，将指令和少样本示例视为模块化组件并利用其嵌入，提高替代模型预测最佳提示的能力，在样本效率上表现优异。该方法为LLM在API访问受限场景下的提示优化提供了一种实用解决方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-lm9dxfrchd/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1756, \"height\": 507, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-lm9dxfrchd/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1754, \"height\": 508, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-lm9dxfrchd/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1756, \"height\": 1051, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-lm9dxfrchd/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1705, \"height\": 406, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-lm9dxfrchd/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 874, \"height\": 434, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-lm9dxfrchd/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1757, \"height\": 508, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-lm9dxfrchd/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1758, \"height\": 509, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 865, \"height\": 1101, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1778, \"height\": 482, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 870, \"height\": 309, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 868, \"height\": 337, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 911, \"height\": 552, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1431, \"height\": 536, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1776, \"height\": 325, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1777, \"height\": 325, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1772, \"height\": 319, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1775, \"height\": 326, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1775, \"height\": 326, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-lm9dxfrchd/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1774, \"height\": 322, \"label\": \"Table\"}]"
motivation: 黑盒LLM的最优提示选择对性能至关重要，但面临搜索空间大、无梯度信息和评估成本高的挑战。
method: 提出HbBoPs方法，结合结构感知深度核高斯过程与Hyperband多保真调度器，利用指令和示例嵌入进行提示选择。
result: 实验表明HbBoPs能高效地发现高质量提示，显著降低评估预算。
conclusion: 该方法为黑盒提示优化提供了有效的样本高效方案，推动了LLM在受限API环境下的应用。
---

## Abstract
Optimal prompt selection is crucial for maximizing large language model (LLM) performance on downstream tasks, especially in black-box settings where models are only accessible via APIs.
Black-box prompt selection is challenging due to potentially large, combinatorial search spaces, absence of gradient information, and high evaluation cost of prompts on a validation set.
We propose HbBoPs, a novel method that combines a structural-aware deep kernel Gaussian Process with Hyperband as a multi-fidelity scheduler to efficiently select prompts.
HbBoPs uses embeddings of instructions and few-shot exemplars, treating them as modular components within prompts.
This enhances the surrogate model's ability to predict which prompt to evaluate next in a sample-efficient manner.
Hyperband improves query-efficiency by adaptively allocating resources across different fidelity levels, reducing the number of validation instances required for evaluating prompts.
Extensive experiments across ten diverse benchmarks and three LLMs demonstrate that HbBoPs outperforms state-of-the-art methods in both performance and efficiency.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **研究背景**：大型语言模型（LLM）在下游任务上的性能极度依赖精心设计的提示（prompt），尤其在仅通过API访问的黑盒场景下，无法获取模型梯度或内部状态。
- **核心问题**：**黑盒提示选择**——从预先给定的指令（instructions）与少样本示例（few-shot exemplars）组合成的候选提示池中，高效地选出在验证集上表现最优的提示。该问题面临三大挑战：
  - 组合搜索空间庞大（指令×示例数量乘积）；
  - 无法利用梯度信息；
  - 提示评估成本高昂（每条提示需多次调用LLM）。
- **研究意义**：提出一种样本高效且查询高效的方法，在有限的LLM调用预算内找到高质量提示，直接降低实际API使用开销。

### 2. 方法论
- **核心思想**：将提示的指令与示例视为**模块化组件**，分别抽取语义嵌入并输入结构感知的深度核高斯过程（structural-aware deep kernel GP），同时利用Hyperband作为多保真度调度器，自适应地分配不同数量的验证实例来评估提示，实现快速淘汰与重点评估的结合。
- **关键技术细节**：
  - **结构感知深度核GP**：
    - 对每条提示的指令和示例分别用BERT的`[CLS]`嵌入，分别通过两层全连接网络（`d→64→32`，ReLU激活）得到低维表示。
    - 拼接后输入另一个前馈网络（`64→32→10`）学习联合隐空间，使隐空间与提示的下游性能对齐。
    - 将该隐表示作为GP的输入，使用ARD Matérn 5/2核，通过最大化对数边际似然端到端地优化核参数与特征提取器参数。
    - 该GP作为替代模型，预测未评估提示的验证误差及不确定性。
  - **Hyperband多保真调度**：
    - 将验证实例数量视为保真度参数，设置最低实例数`b_min`和减半因子`η`。
    - 运行多个Successive Halving（SH）的“bracket”，各bracket起始的提示数量和每提示实例数不同，兼顾探索与利用。
    - 同一bracket内，劣质提示在低保真度下被提前淘汰，优异提示获得更多验证实例；高保真度阶段的实例集合为低保真度实例的超集，并缓存评估结果以降低总调用量。
  - **HbBoPs整体流程**：
    - 在Hyperband每个bracket的提示提议步骤，用已训练的结构感知DK-GP（基于当前最高保真度且有足够观测的设计数据）计算**期望改进（EI）**采集函数：  
      `α_EI(p|D_t|b) = E[max{v_{min,b} - f(z_p), 0}]`  
      穷举地选出使EI最大化的提示作为下一个候选。
    - 对采集函数的建议以10%的概率随机穿插，防止模型偏差。
  - 最终返回在完整验证集上评估的所有提示中误差最低者作为最优提示。

### 3. 实验设计
- **基准任务**：10个常用LLM评测任务。
  - AI2的推理挑战（ARC）：多选问答。
  - Grade School Math 8K（GSM8K）：数学应用题。
  - BIG-bench / Instruction Induction中的8项：反义词（antonyms）、较大动物（larger animal）、否定（negation）、单词第二个字母（second word letter）、情感分析（sentiment）、物体计数（object counting）、以某字母开头（orthography starts with）、单词整理（word unscrambling）。
- **LLM模型**：Claude 3 Haiku、LLAMA3 8B Instruct、Mistral 7B Instruct（均设为温度0.5等默认参数，5-shot设置）。
- **候选提示构造**：每任务用APE自动生成5条指令，从训练集采样25组5样本实例，每种实例组排列两次产生50个不同的示例元组，最终构成5×50=250条候选提示。
- **对比方法**：
  - 全保真度（评估全部验证实例）：随机搜索（RS）、标准BO（Vanilla BO）、高维BO（HDBO）、PCA降维BO（BOPCA）、EASE（基于NeuralUCB的示例选择）、MIPROv2（基于TPE的联合选择）。
  - 多保真度：TRIPLE-SH（Successive Halving）、TRIPLE-GSE（广义Successive Elimination + 集成回归）。
- **评估预算与指标**：每种方法总预算相当于25次全保真评估（全验证集评估）的LLM调用总量。以归一化验证误差和测试误差（均基于精确匹配损失）衡量最终选中提示的质量，并考察任意时刻（anytime）性能。每组实验重复30次，共计30个任务-模型组合。

### 4. 资源与算力
- 论文**未明确给出**实验用的GPU型号、数量或训练时长等信息。
- 文中提及使用Claude 3 Sonnet生成指令，并在三个不同的商用/开源LLM上执行评估，但未报告相关算力消耗或基础设施配置。

### 5. 实验数量与充分性
- **实验规模极大**：10个任务 × 3个LLM = 30种核心场景，每种场景所有方法独立运行30次（随机种子不同）。
- **对比系统**：9种方法（含HbBoPs）在同预算、同候选池、同嵌入模型下横向比较，公平且充分。
- **消融研究**：
  - 针对HbBoPs四大组件逐一移除测试（无结构感知的DK-GP、无DK、无Hyperband、纯Hyperband随机提议），明确各部分的贡献。
  - 更换编码器（BERT、MPNet、DistillRoBERTa）测试鲁棒性。
  - 对Hyperband的现任选择策略、验证实例采样方式、超集结构等设计决策进行额外消融。
- **统计检验**：使用线性混合效应模型（任务-模型组合作为随机截距）和Tukey事后检验，在α=0.01水平下严格评估方法间差异，结论严谨客观。

### 6. 主要结论与发现
- **整体效果**：HbBoPs在所有预算比例下，平均归一化验证和测试误差均低于所有对比方法；在总预算为1.0时，平均归一化测试误差为0.150，优于最佳全保真方法HDBO的0.185和最佳多保真方法TRIPLE-SH的0.159。
- **收敛速度**：尤其在0.25预算时，HbBoPs相比HDBO（全保真最优）提升约35%，相比TRIPLE-SH（多保真最优）提升约24%，展示出极强的anytime性能。
- **组件贡献**：
  - 结构感知DK-GP相较无结构DK-GP和标准GP显著提升预测能力，验证其对高维嵌入和组合结构的处理优势。
  - 添加Hyperband多保真调度带来大幅额外收益。
  - 将贝叶斯优化提议融入Hyperband（形成HbBoPs）进一步提高了选中最佳提示的概率。
- **编码器鲁棒性**：更换为MPNet或DistillRoBERTa后，性能无显著变化，表明方法不依赖于特定编码器。
- **关键设计验证**：Hyperband中坚持“选择在最高保真度上评估过的提示中误差最小者作为现任”以及“采用超集验证实例+固定提示间评估实例配对”等设计至关重要，否则性能显著下降。

### 7. 优点
- **创新性组合**：首次将结构感知深度核GP与Hyperband多保真调度结合用于黑盒提示选择，同时提升样本效率和查询效率。
- **对提示结构显式建模**：单独处理指令和示例的嵌入，利用深度核学习性能相关的低维表示，优于传统的整块文本嵌入或PCA降维。
- **实验极其全面**：涵盖多个LLM、多个任务、多种对比方法，并进行了多维度消融和统计检验，结论可信度高。
- **务实的设计考量**：如缓存评估结果、超集验证实例、基于最高保真度选优等，使方法在现实约束下可高效执行。

### 8. 不足与局限
- **提示结构的依赖性**：当前仅将提示分解为指令与少样本示例，未涵盖输出格式指引、上下文其他约束等组件，通用性有待扩展（虽然框架理论上可融入）。
- **静态候选池假设**：实验在预先生成的250条候选提示上进行，尽管作者指出HbBoPs可结合动态生成策略，但现有实验未验证其在迭代式提示演化中的表现。
- **计算开销未量化**：训练深度核GP需要额外的优化步骤，虽作者声称该开销可控，但未与其他方法对比运行时或FLOPs等。
- **多目标未考虑**：选择更多示例会提高性能但增加推断延迟，提示选择中的多目标权衡（性能vs.效率）未纳入研究。
- **编码器依赖**：方法需要预训练编码器提供嵌入，尽管鲁棒性得到验证，但在完全无编码器环境的适用性受限。

（完）
