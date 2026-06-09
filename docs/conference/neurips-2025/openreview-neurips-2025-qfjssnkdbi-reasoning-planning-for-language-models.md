---
title: Reasoning Planning for Language Models
title_zh: 面向语言模型的推理规划
authors: "Bao Nguyen, Hieu Trung Nguyen, Ruifeng She, Xiaojin Fu, Viet Anh Nguyen"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=QFjssnKdBI"
tags: ["query:pe"]
score: 8.0
evidence: EPIC通过对比学习学习选择最佳推理方法，并利用概率界进行优化
tldr: 针对语言模型推理中盲目使用多个候选答案的问题，本文提出EPIC框架，通过对比学习构建查询与推理方法兼容性的表示空间，并利用概率界正则化优化选择。实验证明该方法能更智能地选择推理策略，提升生成质量，为自适应推理规划提供了有效途径。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-qfjssnkdbi/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1130, \"height\": 681, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qfjssnkdbi/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 898, \"height\": 541, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qfjssnkdbi/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1435, \"height\": 1268, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-qfjssnkdbi/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1101, \"height\": 973, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qfjssnkdbi/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 627, \"height\": 316, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qfjssnkdbi/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 636, \"height\": 386, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qfjssnkdbi/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1277, \"height\": 315, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qfjssnkdbi/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1353, \"height\": 1161, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qfjssnkdbi/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 905, \"height\": 172, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qfjssnkdbi/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1027, \"height\": 166, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qfjssnkdbi/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 747, \"height\": 315, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qfjssnkdbi/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1441, \"height\": 385, \"label\": \"Table\"}]"
motivation: 现有方法盲目生成多个候选答案，忽视最优推理方法选择。
method: 提出EPIC框架，基于对比学习学习查询与推理方法的兼容性表示，融入概率界正则化。
result: 实验表明该方法能有效提升推理准确率，超越固定聚合策略。
conclusion: EPIC为语言模型推理规划提供了新范式，增强了推理方法选择的智能化。
---

## Abstract
Selecting an appropriate reasoning method for a given query remains a key challenge in language model generation. Existing approaches typically generate multiple candidate responses and use an aggregation strategy to select the output answer, often assuming that more candidate answers yield higher accuracy. We revisit this assumption through a rigorous theoretical analysis, deriving accuracy bounds for standard aggregation methods under fixed generation distributions and candidate sizes. Building on these insights, we introduce EPIC, an Ensemble Planning with Contrastive learning framework to learn a shared representation space that captures both model reasoning abilities and query-method compatibility. EPIC incorporates our probability bounds as a regularizer in a utility-driven optimization that balances accuracy and computational cost. Experiments on diverse mathematical reasoning tasks show that EPIC consistently selects optimal reasoning methods, improving accuracy while reducing computational overhead. Our code can be found at https://github.com/nguyenngocbaocmt02/EPIC.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义

- **研究背景**：大语言模型处理复杂推理任务时，单次生成的准确性有限，因此常需借助“推理方法”（如最佳-N采样、蒙特卡洛树搜索、束搜索等）生成多个候选答案，再通过聚合策略选出最终回答。
- **核心问题**：现有的推理方法通常对**所有查询无差别地采用同一种固定策略**，忽视了不同查询对不同推理方法的适用性差异。这导致高计算开销，却未必获得更高的准确率。论文提出“能否为每个查询在推理前自动选择最合适的推理方法，以平衡准确性与计算成本？”
- **整体含义**：提出 **EPIC（Ensemble Planning with Contrastive Learning）** 框架，通过学习一个共享表示空间，将查询与推理方法进行匹配，并结合概率理论指导学习，实现成本–效果动态最优的推理规划。

## 2. 论文提出的方法论

### 2.1 总体框架
EPIC 包含两个核心学习目标：
- **对比学习目标**：将查询嵌入拉近对其效用最高的推理方法嵌入，同时远离其他方法。
- **概率界正则化目标**：利用理论推导的聚合准确率界，约束仅候选数量N不同但其他配置相同的方法之间的相对相似关系，提升样本效率。

### 2.2 关键组件
- **查询特征**：对每个问题`x_j`提取轻量级句子嵌入`f_j`（维度低，如384），再通过一个浅层网络`gθ`映射到低维嵌入空间`d`（如64维）。
- **方法嵌入**：为推理方法宇宙`M`中的每种方法分配一个可训练的嵌入向量`v_i`。
- **效用函数**：`u(ai,j, ci,j) = λ·ai,j + (1-λ)·(1 - ci,j)`，其中`ai,j`是准确率，`ci,j`是归一化成本（令牌数）。`λ`控制准确率与成本的权衡。
- **损失函数**：
  - **对比损失（InfoNCE）**：最大化查询嵌入与正方法嵌入的相似度。
  - **正则化项（基于概率界）**：强制仅N不同的方法对的相似度之比逼近其理论（或经验）准确率之比。
  - 总损失为两者的加权和，超参数`τ`调节正则化强度。

### 2.3 理论支撑
论文推导了三类常见聚合方法的准确率界（定理3.1–3.3）：
- **多数投票**：指数界，当正确答案概率大于所有错误答案时，随N增大准确率趋于1。
- **基于过程奖励模型（PRM）的分数求和投票**：类似指数界。
- **基于PRM的分数最大值投票**：当正确答案的PRM分数标准差最大时，准确率趋于1。
这些界不仅用于分析，还被用作正则化中的目标值。

### 2.4 推理时的选择
对于新问题，只需将其经过`gθ`得到嵌入，然后选择与所有方法嵌入中相似度最高的方法`m*`进行实际推理。

## 3. 实验设计

### 3.1 数据集与场景
- **主实验**：数学推理——使用MATH数据集（训练集7,500题，测试集MATH500共500题）。
- **迁移实验**：GSM8K（算术推理）作为跨数据集测试。
- **领域扩展**：LiveCodeBench（代码生成任务）。

### 3.2 Benchmark与方法对比
- **宇宙M**：构造了包含81种不同配置的推理方法，涵盖贪婪解码、最佳-N、束搜索、MCTS，不同的温度、N（1,2,4,8,16）和5种聚合策略。
- **对比基准**：
  - 宇宙中的单一推理方法。
  - 大型参考模型：DeepSeek-V3, OpenAI-o1-mini。
  - 其他选择方法：随机分配（RA）、离线自适应BoK、分布随机分配（DRA‑λ）、多类分类器（CL‑λ）。
- **评价指标**：测试准确性（自动评分）和平均生成令牌数。

### 3.3 超参数设置
- 对比学习嵌入维度`d`：16–128，主实验用64。
- 权衡参数`λ`：0到1，典型取值0.25, 0.5, 0.75, 1.0。
- 正则化系数`τ`：10⁻³。

## 4. 资源与算力

- 所有实验在**单台机器**上进行，配备**8块NVIDIA RTX A5000 GPU**和Intel Xeon Gold 6148 CPU。
- 论文**未明确训练时长**，提及因计算资源有限未重复多次实验以计算误差条。
- 推理方法生成候选时使用最多2048个新令牌。

## 5. 实验数量与充分性

### 5.1 实验数量
- 主要对比实验：与单一方法及多种选择基线在MATH500上的完整结果（表1/4）。
- 消融实验：
  - 表示维度`d`的影响（4种取值）。
  - 效用权衡参数`λ`的敏感性（5种取值）。
  - 正则化参数`τ`的影响（附录提到≥3个值）。
  - 不同效用函数形式（幂平均 vs. 线性组合）。
- 迁移实验：
  - 跨数据集：MATH → GSM8K。
  - 跨模型规模：引入Qwen2.5‑Math‑1.5B与7B共存。
- 跨任务实验：代码生成（LiveCodeBench）。
- 总计约10余组对比/消融实验。

### 5.2 实验充分性与公平性评价
- **充分性**：覆盖了核心维度（网络容量、效用平衡、正则化、可迁移性），结果趋势一致，结论可信。
- **客观性**：对比了多样化基线，使用标准公开数据集和模型，代码开源。
- **局限性**：未提供误差条或统计检验（因计算资源不足），个别实验（如GSM8K）仅展示单一`λ`值结果。

## 6. 论文的主要结论与发现

- EPIC能在消耗**更少计算资源**的情况下达到甚至超越高成本方法的准确率。
  - 例如：λ=0.25时，EPIC准确率86.4%，与Best‑of‑16相同，但令牌消耗减少约81%（1859 vs 10036）。
  - λ=1.0时，准确率最高89.4%，令牌消耗6921，仍远低于Best‑of‑16。
- 对比学习嵌入空间能有效捕捉查询–方法的兼容性，并支持清晰的可视化。
- 方法具有良好的**泛化能力**：在GSM8K和不同规模模型上仍能保持优势，在代码生成任务上同样有效。
- 理论分析为不同聚合方法提供了准确的概率界，并指导正则化设计，提升样本效率。

## 7. 优点

- **理论创新**：首次为多种聚合方法推导出与候选数N直接相关的准确率界，结果简洁且具有明确趋势。
- **方法设计巧妙**：将推理方法选择建模为嵌入空间中的对比学习问题，少样本即可训练。
- **灵活的成本–效果权衡**：通过单个参数`λ`控制准确率和计算开销的平衡，实用性强。
- **高效且轻量**：查询嵌入网络仅需少量参数，推理时无需额外调用大模型。
- **可扩展性**：添加新推理方法只需增加一个嵌入向量，不必重训练全部模块。
- **实验扎实**：涵盖多种推理策略、多个数据集和任务，结果有说服力。

## 8. 不足与局限

- **统计显著性缺失**：受算力限制，未进行多次独立实验计算置信区间或p值。
- **实验领域较窄**：主要在数学推理和代码生成上验证，未涉及自然语言问答、文本摘要等其他类型任务。
- **奖励模型依赖**：聚合方法中大量依赖了PRM，PRM本身的质量和偏差会直接影响上限。
- **方法宇宙构建的静态性**：M中81种方法覆盖尚不全，且未设方法智能搜索或在线生成机制。
- **未讨论可解释性**：虽然嵌入可视化提供了直观理解，但所选方法的决策理由仍是隐式的。
- **真实部署考量有限**：成本仅为令牌数，未考虑不同模型的内存占用、时延等实际因素。

（完）
