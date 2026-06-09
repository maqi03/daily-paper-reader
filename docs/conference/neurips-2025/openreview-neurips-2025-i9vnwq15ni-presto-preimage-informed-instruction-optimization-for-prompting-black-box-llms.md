---
title: "PRESTO: Preimage-Informed Instruction Optimization for Prompting Black-Box LLMs"
title_zh: PRESTO：面向黑盒LLM的原像信息指导指令优化
authors: "Jaewon Chu, Seunghun Lee, Hyunwoo J. Kim"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=I9VNWQ15Ni"
tags: ["query:pe"]
score: 10.0
evidence: 利用原像信息优化黑盒LLM指令
tldr: 针对黑盒大语言模型指令优化中冗余查询问题，PRESTO将软提示到指令的多对一映射视为有用先验，通过白盒模型辅助搜索更优指令。实验表明该方法显著减少了查询次数并提升了找到高质量提示的效率，为自动提示进化提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-i9vnwq15ni/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1406, \"height\": 520, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-i9vnwq15ni/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1428, \"height\": 985, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-i9vnwq15ni/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1216, \"height\": 435, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-i9vnwq15ni/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 480, \"height\": 408, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-i9vnwq15ni/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1306, \"height\": 396, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-i9vnwq15ni/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 466, \"height\": 394, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-i9vnwq15ni/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1456, \"height\": 735, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-i9vnwq15ni/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1196, \"height\": 600, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-i9vnwq15ni/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1173, \"height\": 266, \"label\": \"Table\"}]"
motivation: 现有方法生成指令时存在大量冗余查询，效率低下。
method: 利用白盒模型的多对一映射先验知识指导黑盒指令优化。
result: 在多个基准上，PRESTO以更少查询找到更优的提示指令。
conclusion: 原像信息可作为有效先验，推动黑盒提示自动进化。
---

## Abstract
Large language models (LLMs) have achieved remarkable success across diverse domains, due to their strong instruction-following capabilities. This raised interest in optimizing instructions for black-box LLMs, whose internal parameters are inaccessible but popular for their strong performance and ease of use. Recent approaches leverage white-box LLMs to assist instruction optimization for black-box LLMs by generating instructions from soft prompts. However, white-box LLMs often map different soft prompts to the same instruction, leading to redundant queries to the black-box model. While previous studies regarded this many-to-one mapping as a redundancy to be avoided, we reinterpret it as useful prior knowledge that can enhance the optimization performance. To this end, we introduce PREimage-informed inSTruction Optimization (PRESTO), a novel framework that leverages the preimage structure of soft prompts to improve query efficiency. PRESTO consists of three key components: (1) score sharing, which shares the evaluation score with all soft prompts in a preimage; (2) preimage-based initialization, which select initial data points that maximize search space coverage using preimage information; and (3) score consistency regularization, which enforces prediction consistency within each preimage. By leveraging preimages, PRESTO observes 14 times more scored data under the same query budget, resulting in more efficient optimization. Experimental results on 33 instruction optimization tasks demonstrate the superior performance of PRESTO.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **核心问题**：在使用黑盒大语言模型（如GPT-4）时，如何高效地优化指令（prompt），因为模型内部参数不可见，只能通过查询API来评估指令质量。
- **背景与动机**：现有方法利用白盒LLM（参数可访问的开源模型）生成候选指令，通过优化软提示（soft prompt）来间接搜索最优指令。然而，白盒LLM经常将不同的软提示映射到相同的指令（多对一映射），导致大量冗余查询，浪费查询预算。
- **核心思路**：传统方法视这种多对一映射为冗余并设法消除，本文则将其重新解释为一种有用的先验知识——“原像”（preimage）结构，即生成同一指令的所有软提示构成该指令的原像。利用这一结构可以加速优化过程，使得在黑盒查询预算不变的情况下，有效评分数据量大幅增加。

### 2. 方法论
PRESTO框架包含三个关键组件，均基于原像结构：

- **原像定义**：
  - 从软提示空间采样一组候选软提示集合 \( Z = \{z_i\}_{i=1}^N \)，通过白盒LLM生成对应的指令集合 \( V = \{v_i\}_{i=1}^M \)，其中 \( M \leq N \)。
  - 定义指令 \( v \) 的原像 \( f_w^{-1}(v) = \{ z \in Z \mid f_w(z) = v \} \)，即所有生成同一指令的软提示集合。

- **原像分数共享（Score Sharing）**：
  - 当某个指令 \( v \) 通过黑盒LLM评估获得分数后，将该分数自动分配给其原像中的所有软提示。
  - 效果：在相同的黑盒查询次数下，用于训练分数预测器的标注数据量成倍增加（文中指出可增加约14倍）。

- **基于原像的初始化（Preimage-based Initialization）**：
  - 目标：在优化开始时选择初始数据点以最大化搜索空间覆盖。
  - 方法：在嵌入空间中为每个原像计算覆盖分数 \( S_{\text{cov}} = S_{\text{size}} + S_{\text{rep}} \)，其中 \( S_{\text{size}} \) 为相对原像大小，\( S_{\text{rep}} \) 基于MMD²度量表示与全体候选集的分布相似度。
  - 通过贪心算法迭代选择原像，直到达到所需的初始点数 \( N_{\text{init}} \)。

- **分数一致性正则化（Score Consistency Regularization）**：
  - 对于尚未被黑盒评估的原像，施加无监督一致性损失：
    \[
    L_{\text{cons}} = \mathbb{E}_{v \in V_{\text{unseen}}} \mathbb{E}_{z, z' \in f_w^{-1}(v)} |m(g(z); \theta) - m(g(z'); \theta)|^2
    \]
  - 总损失：\( L = L_{\text{MSE}} + \gamma L_{\text{cons}} \)，\( \gamma \) 采用线性预热调度，使模型先学习已有评分数据，再逐步约束未评分原像内的预测一致性。

- **整体流程**：预计算所有候选软提示的嵌入及其原像分组，然后依次进行基于原像的初始化、训练分数预测器（MLP，使用白盒LLM最后一层嵌入作为输入）、通过NeuralUCB选择下一个查询点，每次查询后触发分数共享。

### 3. 实验设计
- **主要测试数据集**：
  - 30个指令归纳任务（Instruction Induction benchmark）
  - 3个算术推理任务：GSM8K、AQUA-RAT、SVAMP（用于测试链式思维提示）
- **对比方法（基线）**：
  - APE, InstructZero, INSTINCT, EvoPrompt, ZOPO, OPRO
- **实验设置**：
  - 白盒LLM：LLaMA3.1-8B-Instruct
  - 黑盒LLM：GPT-4.1
  - 总查询预算：165次，初始点40个，随机种子重复3次
  - 评价指标：准确率，平均排名，得胜任务数

### 4. 资源与算力
- 文中未明确说明所用GPU型号、数量及训练时长，仅在补充材料中提及硬件细节（但提供的文本中未进一步展开）。

### 5. 实验数量与充分性
- **实验分组**：
  - 主实验：20个归纳任务（正文） + 全部30个任务（附录）的对比结果
  - 链式思维提示实验：3个数学数据集
  - 消融实验：逐步添加分数共享、初始化、一致性正则化，共5种配置在20个任务上评估
  - 分析实验：分数共享带来的评分数据量对比、初始化可视化、分数预测器RMSE对比
- **充分性与客观性**：
  - 任务数量多（33个），各实验均有多次随机种子运行，报告了均值和标准误差。
  - 与多个代表性基线进行比较，采用了统一的查询预算和评估协议，较为公平。

### 6. 主要结论与发现
- PRESTO在20项归纳任务中最佳任务数（12个）远超第二名（ZOPO的4个），平均排名最优（1.90），并在全部30个任务上保持领先。
- 在链式思维提示实验中，PRESTO在三个数学数据集上达到或并列最佳。
- 消融实验证实三个组件各自带来显著增益，特别是分数共享大幅提升准确率。
- 通过分数共享，PRESTO在相同查询预算下获得的评分软提示数量平均超过2300个，是传统方法的14倍，极大改善了分数预测器训练。

### 7. 优点
- **视角创新**：将多对一映射从缺陷转为可利用的先验，提出原像概念。
- **高效利用查询**：分数共享显著增加训练数据，无需额外黑盒开销。
- **全面技术组合**：初始化策略增强空间覆盖，一致性正则化约束未观测数据，形成协同效应。
- **实验扎实**：跨多种任务和模型，结果一致性强，统计报告完整。

### 8. 不足与局限
- **计算开销**：原像构建和分数共享带来额外计算成本（文中提及“轻度计算开销”）。
- **对候选集规模的依赖**：方法在候选集较大时优势明显，当候选集较小或软提示映射重复率低时，效果可能减弱。
- **实验覆盖局限性**：仅在LLaMA3.1-8B作为白盒模型、GPT-4.1作为黑盒模型下测试，跨模型泛化性尚未验证。
- **潜在风险**：任何指令优化技术都可能被用于强化偏见或生成有害内容，需遵守AI伦理原则。

（完）
