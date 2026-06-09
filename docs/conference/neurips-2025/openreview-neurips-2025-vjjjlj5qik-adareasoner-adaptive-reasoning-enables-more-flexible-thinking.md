---
title: "AdaReasoner: Adaptive Reasoning Enables More Flexible Thinking"
title_zh: AdaReasoner：自适应推理实现更灵活的思维
authors: "Xiangqi Wang, Yue Huang, Yanbo Wang, Xiaonan Luo, Kehan Guo, Yujun Zhou, Xiangliang Zhang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=VjjJlJ5qik"
tags: ["query:pe"]
score: 7.0
evidence: AdaReasoner通过强化学习自动化自适应推理配置，优化温度和推理步骤以提升任务特定性能
tldr: 针对LLM在不同任务中需要灵活推理配置的问题，本文提出AdaReasoner插件，利用强化学习自动化自适应推理配置，包括温度和推理步骤选择。实验显示该方法在多种推理任务上提升性能，无需人工调参，为提升模型推理灵活性提供了通用方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-vjjjlj5qik/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 495, \"height\": 373, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vjjjlj5qik/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1308, \"height\": 521, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vjjjlj5qik/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 609, \"height\": 349, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vjjjlj5qik/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1134, \"height\": 282, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vjjjlj5qik/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 497, \"height\": 299, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vjjjlj5qik/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1452, \"height\": 459, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vjjjlj5qik/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1528, \"height\": 354, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-vjjjlj5qik/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1445, \"height\": 1761, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vjjjlj5qik/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1311, \"height\": 581, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vjjjlj5qik/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 724, \"height\": 332, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vjjjlj5qik/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1038, \"height\": 198, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vjjjlj5qik/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1401, \"height\": 679, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vjjjlj5qik/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1487, \"height\": 391, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vjjjlj5qik/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1297, \"height\": 170, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vjjjlj5qik/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1497, \"height\": 1048, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vjjjlj5qik/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1452, \"height\": 255, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vjjjlj5qik/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1438, \"height\": 280, \"label\": \"Table\"}]"
motivation: LLM任务需要灵活配置推理步骤，现有方法固定配置无法达到任务最优。
method: 提出AdaReasoner插件，基于强化学习自适应选择推理配置（如温度、推理步数）。
result: 实验表明该方法能提升多种推理任务的性能。
conclusion: AdaReasoner提供了一种任务自适应的推理配置方法，增强LLM的思维灵活性。
---

## Abstract
LLMs often need effective configurations, like temperature and reasoning steps, to handle tasks requiring sophisticated reasoning and problem-solving, ranging from joke generation to mathematical reasoning. Existing prompting approaches usually adopt general-purpose, fixed configurations that work “well enough” across tasks but seldom achieve task-specific optimality.
To address this gap, we introduce AdaReasoner, an LLM-agnostic plugin designed for any LLM to automate adaptive reasoning configurations for tasks requiring different types of thinking. AdaReasoner is trained using a reinforcement learning (RL) framework, combining a factorized action space with a targeted exploration strategy, along with  a pretrained reward model to optimize the policy model for reasoning configurations with only a few-shot guide.
AdaReasoner is backed by theoretical guarantees and experiments of fast convergence and a sublinear policy gap. Across six different LLMs and a variety of reasoning tasks, it consistently outperforms standard baselines, preserves out-of-distribution robustness, 
and yield gains on knowledge-intensive tasks through tailored prompts.

---

## 论文详细总结（自动生成）

好的，现将论文《AdaReasoner: Adaptive Reasoning Enables More Flexible Thinking》的结构化总结如下：

---

# 《AdaReasoner：自适应推理实现更灵活的思维》论文详细总结

### 1. 研究动机与核心问题
*   **核心问题**：大型语言模型（LLMs）在处理不同推理任务时，其表现高度依赖于如推理指令格式、生成温度、推理步数等**推理配置**。现有方法（如思维链CoT、思维树ToT等）通常采用“一刀切”的固定配置，无法针对具体任务进行优化。
*   **研究背景与动机**：
    *   **配置敏感性**：实验表明，即便是如 GPT-4o 等先进模型，在不同配置下于同一任务上的准确率也可能剧烈波动。
    *   **现有方法的局限**：固定推理结构的 CoT/ToT 难以泛化到创意或主观任务；Best-of-N 采样易受“垃圾进，垃圾出”效应影响；上下文学习（ICL）对上下文扰动敏感。
*   **整体目标**：旨在解决大模型推理过程中“一刀切”配置的局限，通过提出一个**模型无关的自适应插件**，依据输入问题动态地选择和优化推理配置，实现更灵活、更优的推理表现。

### 2. 方法论核心思想与技术细节
*   **核心思想**：将自适应推理配置问题建模为一个**多臂赌博机**问题下的**强化学习**任务，训练一个名为 AdaReasoner 的策略网络。
*   **问题形式化**：
    *   **状态**：当前输入问题 `q` 及目标大模型 `Φ`。
    *   **动作 `a`**：一个三维向量，包括生成温度 `at`、推理指令格式 `ap` 和推理步数 `as`。动作空间被离散化以简化探索。
    *   **奖励**：使用一个预训练的语言模型（如基于 DeBERTa）作为**奖励模型 `r`**，通过比较模型生成的答案 `Φ(q|a)` 与真实答案 `R` 来提供反馈信号。
*   **模型架构与训练**：
    *   **网络结构**：采用“共享特征提取器 + 三个独立策略头”的设计。输入问题经 BERT 嵌入后，通过一个共享的 MLP 层，再分别输入到负责温度、步数、指令的三个策略头中，输出对应动作。
    *   **探索策略**：采用**玻尔兹曼探索**来平衡利用与探索，并以指数方式退火其温度系数，实现从广泛探索到精细优化的过渡。
    *   **优化算法**：使用 REINFORCE 算法更新策略网络参数。损失函数为各策略头的负对数概率与奖励的乘积之和。
*   **理论支撑**：
    *   论文提供了非凸随机梯度下降（SGD）下的收敛性分析，给出了误差界。
    *   通过遗憾分析，证明了在因子化动作空间下，每步遗憾随时间步数 `K` 呈亚线性减小，为少样本快速收敛提供了理论保证。

### 3. 实验设计
*   **数据集与场景**：
    *   **主评估基准**：覆盖不同认知过程的四个数据集：**MMLU（数学推理）、Metaphor（隐喻识别）、TruthfulQA（可信问答）、LogiQA（逻辑推理）**。
    *   **知识密集型测试**：**GPQA、MMLUChem、MedExQA**。
    *   **分布外泛化测试**：**BRIGHTER（多语言情感分析）、StepGame（空间规划）、CRoW（常识推理）**。
    *   **少样本设置**：从主基准数据中抽取1000个样本，仅使用100个作为训练集，其余900个用于测试。
*   **对比方法**：
    *   **标准基线**：Chain-of-Thought (CoT)、Think Short、In-context CoT (ICL)。
    *   **先进推理框架**：Tree-of-Thought (ToT)、Best-of-N、Auto-CoT。
*   **评估方式**：采用“**LLM-as-a-Judge**”范式，使用 GPT-4o 对生成的答案与标准答案进行语义等价性判断，并通过人工标注（F1分数>98%）验证了该评估方式的可靠性。

### 4. 资源与算力
*   论文中**未明确提及**具体的 GPU 型号、数量或详细的训练时长。文中仅指出 AdaReasoner 本身是一个轻量级的 RL 适配器，其少样本微调过程是轻量级的。

### 5. 实验数量与充分性
*   **实验数量**：
    *   在 **6种主流大模型**（GPT-4o, Llama-3.3-70B, Qwen-2.5-72B 等）上进行了主实验。
    *   进行了 **1组消融实验**，考察不同动作（仅调温度/步数/指令）、不同探索策略（汤普森采样）、奖励扰动（加噪声/缩放）、跨模型迁移、策略扰动等多种变体。
    *   开展了 **1组分布外泛化实验**和 **1组知识密集型任务实验**。
    *   对数据进行统计显著性分析（如 t 检验、动作分布箱线图、热力图等）。
*   **充分性与公平性**：
    *   **充分性**：实验设计详尽，覆盖了多模型、多任务、消融、泛化能力等多个维度，验证较为全面。
    *   **公平性**：所有基线方法均采用其标准设置，AdaReasoner 在统一的少样本数据下训练，对比条件客观、公平。

### 6. 主要结论与发现
*   **性能领先**：AdaReasoner 在所有六个测试模型上，平均准确率均**一致地优于**所有基线方法。
*   **少样本高效性**：仅需约100个训练样本，AdaReasoner 即可学到有效的自适应策略，验证了其**数据高效性**。
*   **组件有效性**：消融实验证实，**同时优化三项推理配置**比单独调整任何一项更好，其中推理指令 `ap` 的贡献最为关键；玻尔兹曼探索策略和预训练奖励模型对最终性能有显著正面影响。
*   **良好泛化性**：在未见过的新数据集上，AdaReasoner 仍展现出**稳定的分布外（OOD）鲁棒性**。
*   **配置自适应特征**：分析表明，AdaReasoner 为不同任务类型（如逻辑 vs. 创造性）学到了**数据特异性**的配置偏好（如逻辑任务倾向自我审查式指令，创意任务倾向发散性指令）。

### 7. 优点与亮点
*   **模型无关性**：作为一个插件，可灵活应用于任何 LLM，增强了其普适性。
*   **动态自适应能力**：突破固定模板的限制，能够根据问题本质动态组合推理指令、温度与步数，实现“因题制宜”。
*   **精巧的 RL 设计**：将配置选择建模为多臂赌博机问题，并采用因子化动作空间与玻尔兹曼探索，有效解决了搜索空间巨大的问题，实现了数据高效的训练。
*   **理论实践结合**：不仅有充分的实验验证，还提供了收敛性和遗憾界的理论分析，论据扎实。

### 8. 不足与局限
*   **任务特异性微调**：目前方法需要为每个新任务提供少量训练样本进行微调，无法实现完全即插即用。
*   **模型间迁移性差**：消融实验表明，在一个模型上训练的策略直接迁移到另一个模型会导致性能显著下降，突显了**奖励景观的模型特异性**。
*   **计算开销**：强化学习的训练过程引入了额外的计算开销。
*   **动作空间是离散的**：当前的动作空间（推理指令、步数等）为手动定义的离散选项，可能限制了策略表达的细腻度，未来可探索连续动作空间或梯度式提示生成。
*   **知识任务增益有限**：对于纯粹依赖领域知识的任务，自适应推理配置的增益有限，无法弥补模型本身知识的匮乏。

（完）
