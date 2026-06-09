---
title: "SolverLLM: Leveraging Test-Time Scaling for Optimization Problem via LLM-Guided Search"
title_zh: SolverLLM：通过LLM引导搜索利用测试时扩展解决优化问题
authors: "Dong Li, Xujiang Zhao, Linlin Yu, Yanchi Liu, Wei Cheng, Zhengzhang Chen, Zhong Chen, Feng Chen, Chen Zhao, Haifeng Chen"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=mN3CMpfWR6"
tags: ["query:pe"]
score: 6.0
evidence: 在MCTS中融入提示反向传播，迭代优化问题表述提示，实现自动提示精炼。
tldr: 现有LLM解决优化问题依赖提示工程但泛化差，或需昂贵训练。本文提出SolverLLM，一种免训练框架，通过改进的MCTS策略（含动态扩展和提示反向传播）自动生成数学公式并求解。其中提示反向传播机制可在搜索过程中自动改进提示，提升优化求解性能，为LLM在复杂推理任务中的提示自动调整提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-mn3cmpfwr6/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 596, \"height\": 859, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-mn3cmpfwr6/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1445, \"height\": 854, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-mn3cmpfwr6/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1383, \"height\": 825, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-mn3cmpfwr6/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1426, \"height\": 352, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-mn3cmpfwr6/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1240, \"height\": 762, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-mn3cmpfwr6/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 603, \"height\": 303, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-mn3cmpfwr6/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 810, \"height\": 334, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-mn3cmpfwr6/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1457, \"height\": 251, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-mn3cmpfwr6/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 654, \"height\": 284, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-mn3cmpfwr6/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1182, \"height\": 386, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-mn3cmpfwr6/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 984, \"height\": 381, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-mn3cmpfwr6/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1456, \"height\": 175, \"label\": \"Table\"}]"
motivation: 现有LLM求解优化问题的方法在泛化性和训练成本上存在矛盾，提示工程缺乏适应性。
method: 提出SolverLLM，采用改进MCTS进行测试时搜索，通过提示反向传播自动调整问题表述提示。
result: 在多种优化问题上，SolverLLM无需训练即取得有竞争力的结果，提示反向传播提升了搜索效率。
conclusion: SolverLLM展示了测试时扩展与提示自动调整结合的潜力，为LLM推理任务中提示进化提供了参考。
---

## Abstract
Large Language Models (LLMs) offer promising capabilities for tackling complex reasoning tasks, including optimization problems. However, existing methods either rely on prompt engineering, which leads to poor generalization across problem types, or require costly supervised training. We introduce SolverLLM, a training-free framework that leverages test-time scaling to solve diverse optimization problems. Rather than solving directly, SolverLLM generates mathematical formulations and translates them into solver-ready code, guided by a novel Monte Carlo Tree Search (MCTS) strategy. To enhance the search process, we modify classical MCTS with (1) dynamic expansion for adaptive formulation generation, (2) prompt backpropagation to guide exploration via outcome-driven feedback, and (3) uncertainty backpropagation to incorporate reward reliability into decision-making. Experiments on six standard benchmark datasets demonstrate that SolverLLM outperforms both prompt-based and learning-based baselines, achieving strong generalization without additional training.

---

## 论文详细总结（自动生成）

好的，以下是对论文《SolverLLM: Leveraging Test-Time Scaling for Optimization Problem via LLM-Guided Search》的结构化中文总结。

### 1. 论文的核心问题与整体含义 (研究动机和背景)

*   **核心问题**: 如何利用大语言模型 (LLMs) 高效、准确地解决各类优化问题。现有方法存在明显不足：
    *   **基于提示工程的方法**: 依赖精心设计的、针对特定任务的提示和多代理工作流，泛化能力差，且对提示选择敏感。
    *   **基于学习的方法**: 需要昂贵的、任务特定的数据集标注和模型微调，对未见过的复杂问题泛化能力有限。
*   **整体含义**: 论文提出了一种新的“免训练”范式，通过在推理阶段（测试时）分配额外算力进行搜索，而不是依赖预先训练的提示或模型，来提升LLM解决优化问题的能力。这旨在找到一个在泛化能力与成本之间更优的平衡点，降低使用门槛。

### 2. 论文提出的方法论 (核心思想与关键技术)

*   **核心思想**: 将优化问题的数学公式化过程视为一个结构化决策问题，并使用**LLM引导的蒙特卡洛树搜索 (MCTS)** 在推理时探索最优的公式表述，而非直接生成解决方案。
*   **流程分解**: 采用“Type（类型）, Sets（集合）, Parameters（参数）, Variables（变量）, Objective（目标）, Constraints（约束）”六要素架构，将公式化过程分解为六个层次，LLM依次生成每个要素。
*   **关键技术 - 改进的MCTS框架**:
    *   **动态扩展**:
        *   **非叶节点扩展**: 允许MCTS在**非叶节点**上扩展新子节点（而非仅叶节点）。这使得搜索过程可以回溯并修正前期要素（如变量和约束）的定义，以适应后续推导出的新需求或修正错误，实现要素间的双向影响。
        *   **LLM引导的推理扩展**: LLM会根据当前部分公式化的内容生成新的候选节点，而不是从预定义的动作空间中选择。
    *   **提示反向传播**:
        *   在评估阶段，LLM不仅给出奖励，还对每个层次的公式化元素生成推理信号（是否正确、原因、修改建议）。
        *   在反向传播阶段，这些层次化的推理信号作为“提示指导”被反向传播并累积到对应层的知识库（`G`）中，用于指导未来同一层次节点的动态扩展。这实现了从结果中学习并动态调整提示。
    *   **不确定性反向传播**:
        *   **全局不确定性**: 由于使用LLM评估奖励具有主观性和高方差，通过多次采样计算“语义不确定性”，并在反向传播中用它来**衰减**高不确定性奖励对树节点统计量的影响，使搜索更稳定。
        *   **局部不确定性**: 通过计算层推理信号（如原因说明）的预测熵，仅当不确定性低于阈值且存在有效触发信号时，才将节点激活并执行提示反向传播，防止噪声反馈污染知识库。
*   **算法流程文字说明**:
    1.  **选择**: 从根节点开始，使用UCT算法在树中向下遍历，直到到达一个适合扩展的节点（一个可扩展的叶节点，或一个触发了“激活”状态的非叶节点）。
    2.  **动态扩展**: 在选定的节点上，LLM根据当前的部分公式化内容、该层的知识库（来自过去的提示反馈）和全局指令，生成新的子节点（即公式化的下一个要素或对当前要素的新候选）。
    3.  **模拟与评估**: 从扩展的节点开始，通过多次调用LLM随机完成整个六要素公式化（rollout）。将生成的完整数学公式转化为Pyomo等求解器代码执行，并根据是否可行、解的质量等计算一个加权奖励。同时，LLM作为一个评判器，对整个公式化进行评估，为每个要素层生成推理信号（`S_l`）、计算局部不确定性，并对整体评估计算全局语义不确定性。
    4.  **反向传播**: 将奖励、激活节点状态、推理信号和不确定性沿路径向根节点反向传播。使用不确定性对奖励进行加权平均来更新节点的价值（`Q`）和访问计数（`N`），并通过推理信号更新各层的知识库，实现提示的自动精炼。

### 3. 实验设计 (数据集、基准、对比方法)

*   **数据集**: 使用了六个标准的真实世界优化任务基准数据集，覆盖不同难度和类型：`NL4Opt`、`Mamo` (EasyLP, ComplexLP)、`NLP4LP`、`ComplexOR`、`IndustryOR`。
*   **评估指标**: **求解准确率 (Solving Accuracy, SA)**、**代码执行率 (Execution Rate, ER)**、**平均生成时间 (Average Generation Times, AGT)**。
*   **对比基准方法**:
    *   **直接调用LLM**: GPT-4, GPT-4o。
    *   **基于提示的方法**: Reflexion, Chain-of-Experts, OptiMUS。
    *   **基于训练的方法**: ORLM (基于Mistral-7B, Deepseek-Math-7B, LLaMa3-8B微调), LLMOPT (基于Qwen1.5-14B微调)。
    *   **测试时扩展方法**: AutoFormulation (同样使用MCTS，但采用四要素公式化)。
*   **主要发现**:
    *   SolverLLM在求解准确率上显著优于所有基于提示的方法（提升超过10%）。
    *   作为一个免训练方法，SolverLLM匹配甚至超越了先进的基于训练的方法（LLMOPT），在复杂数据集上（MamoComplex, IndustryOR）优势更明显（分别高出8%和10%）。
    *   与同类测试时方法AutoFormulation相比，SolverLLM在所有六个数据集上均有更优的求解准确率和代码执行率。

### 4. 资源与算力
*   **文中明确说明**: 论文在“实验计算资源”部分提到，该工作**主要依赖服务器API而非本地计算，因此未报告任何计算资源（如GPU型号、数量、内存等）**。研究核心是LLM的推理能力，没有进行模型训练。

### 5. 实验数量与充分性
*   **实验数量**: 实验设计较为全面，可概括为以下几大类：
    1.  **主要性能对比**: G×M×D 组实验（G种对比方法 × M个测试集 × D个指标）。
    2.  **同类方法对比**: 与AutoFormulation在6个数据集上的SA和ER详细对比。
    3.  **消融实验**: 为研究三个关键组件（动态扩展/PR，不确定性反向传播/UP，类型元素/TE）的影响，创建了三个变体，并在6个数据集上评估SA, ER, AGT三项指标。
    4.  **Token预算分析**: 在MamoComplex数据集上，分析不同最大搜索迭代次数（10-50次）下，Token消耗量与SA的关系。
    5.  **模型鲁棒性分析**: 将骨干LLM从GPT-4o替换为更轻量的GPT-4o-mini，在6个数据集上评估SA。
    6.  **案例研究**: 提供了针对具体问题（如TSP）的搜索树可视化案例，定性地分析了各组件的运作机制。
*   **充分性与公平性**: **实验充分且公平**。对比方法多样，涵盖了所有主流解决方案，基线结果大多直接引自原论文，确保了公平性。消融实验设计合理，能有效分离各组件的贡献。Token分析回应了对测试时方法成本的关键关切，鲁棒性分析验证了框架的普适性。案例研究为理解复杂机制提供了直观解释。

### 6. 论文的主要结论与发现
*   **免训练框架的优越性**: SolverLLM展示了无需任何监督训练或微调，仅通过在推理时进行结构化搜索，就能在多个优化基准上达到或超越经过专门训练的最先进模型的性能。
*   **各组件的有效性**:
    *   **提示反向传播（动态扩展）**: 是实现复杂问题建模的关键，它能让搜索回溯并修正早期的公式化决策，显著提升了解决复杂优化问题的能力。
    *   **不确定性反向传播**: 主要提升了搜索效率，通过剪枝和衰减不可靠的奖励信号，以更少的时间和Token消耗达到相同甚至更优的求解精度。
    *   **类型元素 (Type Element)**: 通过提供全局指导，对提升性能有帮助，尤其在复杂或图结构问题上效果显著。
*   **测试时扩展的潜力**: 论文证明了将LLM与算法搜索框架（MCTS）深度耦合，并辅以反馈驱动的提示自动调整，是一种强大且通用的解决复杂推理任务的范式。

### 7. 优点 (亮点)
*   **创新的范式**: “训练自由”+“测试时扩展”组合，有效解决了泛化性和高训练成本之间的矛盾，为LLM应用提供了新思路。
*   **精妙的MCTS改造**: 将经典MCTS与LLM的非结构化、迭代式生成特性深度融合。特别是**提示反向传播**机制，实现了**提示的自动进化**，这是与LLM特性结合的亮点。
*   **全面的不确定性处理**: 不仅考虑奖励的全局不确定性来做衰减，还精细地处理了局部推理信号的可靠性，防止噪声反馈，提高了搜索的鲁棒性。
*   **扎实的实验论证**: 实验设计非常全面、系统，从多维度对比、深度消融到成本分析，论证充分，说服力强。案例研究直观展示了方法原理。

### 8. 不足与局限
*   **推理延迟**: 作者承认，由于依赖MCTS进行大量搜索，**推理延迟较高**，不适合实时性要求高的应用。这是测试时扩展方法的一个固有权衡。
*   **评估噪声**: 尽管引入了不确定性处理，但奖励评估的有效性仍受限于LLM本身的**主观性和非确定性**，这可能在更复杂或开放式问题上成为瓶颈。
*   **问题类型局限**: 当前评估仅限于**结构清晰、约束明确的优化问题**。对于自然语言描述极度模糊、具有对抗性干扰或更高阶逻辑的问题，其鲁棒性尚待探索。
*   **依赖API**: 基于商业API（如GPT-4）进行评估，其性能可能受API版本更新、响应策略变化等不可控因素影响，给复现和长期稳定性带来风险。
*   **可解释性**: 尽管有搜索树，但LLM生成公式化元素的决策过程本身仍是“黑盒”，基于提示反向传播的修正逻辑可能不够透明，调试困难。

（完）
