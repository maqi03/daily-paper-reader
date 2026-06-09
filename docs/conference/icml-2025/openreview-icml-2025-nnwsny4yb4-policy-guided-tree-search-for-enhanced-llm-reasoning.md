---
title: Policy Guided Tree Search for Enhanced LLM Reasoning
title_zh: 策略引导树搜索增强大语言模型推理
authors: Yang Li
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=NNWSNy4YB4"
tags: ["query:pe"]
score: 7.0
evidence: 策略引导树搜索通过学习的导航策略增强了大语言模型推理能力，超越了标准思维链提示。
tldr: 针对大语言模型在复杂推理中依赖预定义启发式或昂贵搜索策略的问题，提出策略引导树搜索框架，利用强化学习训练策略网络动态决定探索动作，如扩展、回溯等。在数学推理和逻辑推理等任务上，PGTS高效探索推理路径，取得优于传统思维链提示的性能，为结合学习与搜索提升推理能力提供了新方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 863, \"height\": 372, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1500, \"height\": 422, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 820, \"height\": 361, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1422, \"height\": 1368, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1319, \"height\": 1780, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1302, \"height\": 1982, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1324, \"height\": 2212, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-nnwsny4yb4/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1750, \"height\": 804, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-nnwsny4yb4/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 867, \"height\": 255, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-nnwsny4yb4/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 698, \"height\": 345, \"label\": \"Table\"}]"
motivation: 现有思维链提示依赖预定义启发式或昂贵搜索，限制了推理性能。
method: 提出PGTS框架，用强化学习训练策略网络动态决策探索动作以导航推理树。
result: 在数学推理、逻辑推理等任务上，PGTS高效且优于传统方法。
conclusion: 学习策略与树搜索结合有效提升LLM推理，无需手动设计启发式。
---

## Abstract
Despite their remarkable capabilities, large language models often struggle with tasks requiring complex reasoning and planning. While existing approaches like Chain-of-Thought prompting and tree search techniques show promise, they are limited by their reliance on predefined heuristics and computationally expensive exploration strategies. We propose Policy-Guided Tree Search (PGTS), a framework that combines reinforcement learning with structured tree exploration to efficiently navigate reasoning paths. Our key innovation is a learned policy that dynamically decides between expanding, branching, backtracking, or terminating exploration, eliminating the need for manual heuristics or exhaustive search. Experiments across mathematical reasoning, logical deduction, and planning benchmarks demonstrate that PGTS achieves superior reasoning performance while significantly reducing computational costs compared to existing methods. These results establish PGTS as a scalable and effective solution for tackling complex reasoning tasks with LLMs.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将以 Markdown 形式，对提供的论文《Policy Guided Tree Search for Enhanced LLM Reasoning》进行结构化、深入、客观的总结。

### **1. 论文的核心问题与整体含义**

- **核心问题**：大语言模型在处理复杂推理与规划任务（如多步数学问题、逻辑演绎）时表现不佳。现有方法，如思维链提示和树搜索技术，虽然有所改善，但存在关键局限：
    - **启发式依赖**：搜索策略依赖预定义的规则和奖励，需要大量专家知识，缺乏灵活性。
    - **计算昂贵**：对庞大推理步骤空间的试探性探索（如穷举搜索）计算成本高昂，尤其是在使用自我评估作为奖励信号时。
- **整体含义**：论文旨在提出一个更高效、更智能的推理框架，通过引入**学习型策略**来动态指导树搜索过程，从而在提升推理性能的同时，大幅降低计算开销，并解决传统搜索方法难以从错误路径中恢复的问题。

### **2. 论文提出的方法论**

核心思想是构建一个**策略引导树搜索（PGTS）** 框架，将大语言模型的推理过程建模为一棵推理树，并训练一个外部策略网络来导航这棵树。

- **核心思想与建模**：
    - 将推理过程形式化为一个**树搜索马尔可夫决策过程**。环境是逐步揭示的完整推理树，状态是当前已探索的树结构，动作是导航树的操作。
    - 大语言模型本身被视为“环境”，负责生成树节点（推理步骤），而PGTS策略网络则是“智能体”，负责决定如何探索这棵树。

- **关键技术细节**：
    - **结构化动作空间**：策略网络动态选择以下四种动作之一，而非逐 token 生成：
        1.  **扩展**：在当前节点下，继续生成下一个推理步骤。
        2.  **分支**：横向探索当前节点的兄弟节点，开辟替代推理路径。
        3.  **回溯**：纵向返回至先前的某个节点，以纠正次优路径并尝试其他可能性。
        4.  **终止**：在获得充分证据后立即结束探索，防止“过度思考”并节省计算。
    - **奖励函数设计**：为每种动作定义了即时奖励，其核心公式为 `R(s, a) = 任务相关奖励 - 动作成本 C(a)`。
        - **任务相关奖励**：对于“扩展”，评估新步骤的质量；对于“分支”和“回溯”，评估新路径相较旧路径的潜在提升。
        - **动作成本 `C(a)`**：作为超参数，为不同动作设定计算成本（如回溯成本高于扩展），引导策略进行高效探索。
    - **策略网络架构**：采用**图神经网络（基于GPS架构的图Transformer）** 来处理结构化的树状状态。该架构结合了局部消息传递和全局注意力机制，能同时捕捉推理步骤间的局部关系和整棵树的全局模式。网络输入为节点特征（LLM隐藏状态）和边特征（步骤奖励），输出为动作概率分布和状态价值。
    - **训练算法**：使用**近端策略优化算法**训练策略网络和价值网络，目标是最大化累积奖励，以鼓励产生高质量推理链的同时最小化不必要的探索。训练过程中使用约束掩码确保只采样有效动作。

- **算法流程摘要**：
    1.  从一个推理任务的初始根节点开始。
    2.  策略网络观察当前推理树状态和有效动作约束向量。
    3.  从策略输出的分类分布中采样一个动作（如扩展、回溯）。
    4.  执行动作，LLM 环境生成新的推理步骤或改变当前焦点节点，并获得即时奖励。
    5.  重复步骤 2-4，直到策略选择“终止”或达到最大步数。
    6.  收集轨迹（状态、动作、奖励），使用 PPO 算法更新策略和价值网络参数。

### **3. 实验设计**

- **数据集与场景**：覆盖了四个主要的推理领域，共7个基准数据集：
    - **数学推理**：GSM8K, MATH500, AQUA
    - **常识推理**：StrategyQA
    - **逻辑推理**：PrOntoQA, GPQA
    - **现实世界规划**：Blocksworld（4步和8步版本）
- **基准对比方法**：
    - **思维链（CoT）** ：基础链式推理。
    - **思维链自一致性（CoT-SC）**：生成多条思维链并通过多数投票聚合结果。
    - **蒙特卡洛树搜索（MCTS）**：作为树搜索方法的代表，并设置了多种变体：
        - `MCTS (Best)`: 报告奖励最高的单条推理链结果。
        - `MCTS (Agg)`: 使用加权投票聚合多条链的结果。
        - `MCTS (Oracle)`: 一个上限基准，允许其在搜索过程中访问真实标签作为额外奖励。
    - **PGTS 及其变体**：`PGTS`（单次运行）和 `PGTS (SC4/SC8)`（生成多个探索轨迹并聚合结果）。

### **4. 资源与算力**

- **提及情况**：论文**未明确提及**所使用的具体 GPU 型号、数量或详细的训练时长。文中仅在方法部分提到了“减少推理成本”作为核心目标，并通过实验中的生成 Token 数量来衡量效率，但未报告模型训练所需的计算资源。

### **5. 实验数量与充分性**

- **实验数量**：
    - **主实验**：在 **7个数据集** 上对 **2种不同规模的LLaMA3.1模型（8B和70B）** 与多个基线方法进行了性能对比，生成了综合的主结果表格。
    - **消融实验**：
        1.  **训练样本数**：分析了不同训练样本量对策略收敛的影响。
        2.  **树约束**：研究了不同树广度对性能和生成Token数的影响。
        3.  **策略网络组件**：对比了完整的 GPS 策略与去除边特征、全局注意力、局部消息传递，以及使用 SAN、小型语言模型、LLM Agent 等替代架构的性能。
        4.  **效率分析**：通过柱状图对比了不同方法在不同数据集上相对于 CoT 的生成 Token 数。
- **充分性与公平性评估**：
    - **充分性**：实验设计较为全面。覆盖了多种推理任务和不同规模模型，并且进行了关键组件的消融研究，有效地验证了方法的有效性和各组件的贡献。效率分析也直观地展示了其核心优势。
    - **客观与公平性**：对比基线清晰，包括基础方法和强大的树搜索方法（MCTS）。所有对比均使用相同的LLaMA3.1基础模型和生成设置，确保了比较的公平性。

### **6. 论文的主要结论与发现**

- **性能优越**：PGTS 在多数任务上显著优于 CoT，并在结合自一致性（SC）后通常能接近或超越 MCTS 的性能。例如，在 MATH 数据集上，8B 模型下 PGTS 准确率从 CoT 的 34.40% 提升到 41.00%，且显著优于 CoT-SC (8) 的 48.20% 和 MCTS(Agg)。
- **效率显著**：PGTS 的核心优势在于计算效率。相比于 MCTS，PGTS 大幅减少了所需的生成 Token 数。在 MATH 数据集上，MCTS 的 Token 消耗是 CoT 的 16.25 倍，而 PGTS 仅为 5.28 倍；在 GSM8K 上，差距更大。
- **策略学习的有效性**：学习到的策略能自适应地决策，有效克服了传统搜索方法的不足，如从次优路径中回溯、适时终止以防止“过度思考”，并能在有限样本（1000个）下快速收敛。

### **7. 优点**

- **方法论创新**：将搜索策略从人工定义的启发式转变为**学习型策略**，这是一个重要的范式提升。将 LLM 视为环境而非策略的思想也颇具新意。
- **动作空间设计**：**扩展、分支、回溯、终止**这四个高层次动作定义清晰，模拟了人类解决问题时的思维过程，使探索过程比低层次的 token 级搜索更高效、更具可解释性。
- **效率与性能的平衡**：在显著提升推理性能的同时，大幅降低了计算开销，这是其成为实用解决方案的关键亮点。
- **架构适配性**：采用**图神经网络**处理状态，能够自然地捕捉推理树的复杂结构化信息，优于将树序列化后处理的方案（实验已证明）。

### **8. 不足与局限**

- **算力成本未透明**：论文强调了推理效率，但**完全没有提及训练策略网络本身的算力成本**，这使得全面评估其总体资源消耗变得困难。
- **奖励函数依赖**：方法依赖于即时的过程奖励 `R(s, a)`，而实验为了简化成本，直接使用了语言模型的对数似然。这种奖励信号的可靠性可能在某些任务中不足，限制了策略发现真正优质推理路径的上限。
- **复杂任务挑战**：在如 GPQA 这类极为复杂、知识覆盖广的任务上，PGTS 表现欠佳，低于 MCTS。作者将其归因于训练样本有限，这也暴露了该方法在需要极强世界知识或推理深度复杂的任务上的潜在扩展瓶颈。
- **泛化能力未知**：策略是针对特定数据集训练的，其跨任务、跨领域的泛化能力尚未得到验证。训练一个能适用于所有推理任务的通用策略可能是一个更大的挑战。

（完）
