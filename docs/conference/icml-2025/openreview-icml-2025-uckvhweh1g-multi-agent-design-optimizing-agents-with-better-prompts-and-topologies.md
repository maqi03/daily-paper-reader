---
title: "Multi-Agent Design: Optimizing Agents with Better Prompts and Topologies"
title_zh: 多智能体设计：利用更好的提示和拓扑优化智能体
authors: "Han Zhou, Xingchen Wan, Ruoxi Sun, Hamid Palangi, Shariq Iqbal, Ivan Vulić, Anna Korhonen, Sercan O Arik"
date: 2025-01-23
pdf: "https://openreview.net/pdf?id=uCKvHweh1g"
tags: ["query:pe"]
score: 9.0
evidence: MASS自动优化多智能体系统的提示和拓扑结构以最大化任务性能。
tldr: 多智能体系统中提示和拓扑设计复杂且耗时。MASS框架通过深入分析设计空间，自动搜索优化提示与交互拓扑，大幅提升多智能体系统性能。实验证明优化后的系统在复杂任务上显著优于手动设计，揭示了提示与拓扑的协同作用，为自动化智能体设计开辟了新途径。
source: ICML-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-uckvhweh1g/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 854, \"height\": 507, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uckvhweh1g/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 842, \"height\": 576, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uckvhweh1g/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 841, \"height\": 433, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uckvhweh1g/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1672, \"height\": 724, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uckvhweh1g/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 841, \"height\": 399, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uckvhweh1g/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 838, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uckvhweh1g/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1786, \"height\": 670, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uckvhweh1g/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1673, \"height\": 691, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uckvhweh1g/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1130, \"height\": 746, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uckvhweh1g/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1870, \"height\": 2155, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-uckvhweh1g/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1769, \"height\": 929, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uckvhweh1g/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1773, \"height\": 469, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uckvhweh1g/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1757, \"height\": 329, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uckvhweh1g/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1754, \"height\": 472, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uckvhweh1g/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1758, \"height\": 477, \"label\": \"Table\"}]"
motivation: 多智能体系统的提示和拓扑设计复杂，依赖手动试错，效率低。
method: 提出MASS框架，自动搜索优化提示和交互拓扑。
result: 优化后的多智能体系统在复杂任务上表现显著优于手动设计。
conclusion: 自动化的提示与拓扑协同设计极大提升多智能体系统性能，潜力巨大。
---

## Abstract
Large language models, employed as multiple agents that interact and collaborate with each other, have excelled at solving complex tasks. The agents are programmed with prompts that declare their functionality, along with the topologies that orchestrate interactions across agents. Designing prompts and topologies for multi-agent systems (MAS) is inherently complex. To automate the entire design process, we first conduct an in-depth analysis of the design space aiming to understand the factors behind building effective MAS. We reveal that prompts together with topologies play critical roles in enabling more effective MAS design. Based on the insights, we propose Multi-Agent System Search (MASS), a MAS optimization framework that efficiently exploits the complex MAS design space by interleaving its optimization stages, from local to global, from prompts to topologies, over three stages: 1) block-level (local) prompt optimization; 2) workflow topology optimization; 3) workflow-level (global) prompt optimization, where each stage is conditioned on the iteratively optimized prompts/topologies from former stages. We show that MASS-optimized multi-agent systems outperform a spectrum of existing alternatives by a substantial margin. Based on the MASS-found systems, we finally propose design principles behind building effective multi-agent systems.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **研究背景**：基于大语言模型的多智能体系统在解决复杂任务方面表现出色，但其设计（包括定义单个智能体功能的**提示**和协调智能体间交互的**拓扑结构**）异常复杂，目前高度依赖手动试错。
*   **核心问题**：现有研究要么专注于提示优化，要么专注于拓扑搜索，但未能理解并利用两者之间的相互作用进行联合优化，导致多智能体系统的整体设计效率低下且可能次优。
*   **研究动机**：论文旨在探索多智能体设计空间中的关键影响因素，揭示提示与拓扑的协同重要性，并基于此提出一个能够自动且高效地联合优化这两者的框架，从而生成性能卓越的多智能体系统。

### 2. 论文提出的方法论

论文提出了一种名为 **MASS** 的多阶段优化框架，其核心思想是“从局部到全局，从提示到拓扑”，通过将复杂的联合优化问题分解为三个相互关联的阶段来高效搜索设计空间。

*   **设计空间分析**：首先，论文通过定量分析揭示了两个关键洞察：
    *   **提示至关重要**：优化单个智能体的提示，其性能提升和效率远超单纯增加智能体数量（如自一致性、多智能体辩论）。
    *   **有效拓扑稀疏**：并非所有拓扑结构都对系统有益，只有一小部分能带来性能提升。基于此，MASS采用“影响力加权”的剪枝搜索空间，只专注于有益的拓扑构建块。
*   **MASS三阶段优化算法**：
    1.  **第一阶段：块级（局部）提示预热**
        *   在将智能体组合成系统之前，首先对每个独立的构建块进行提示优化。例如，分别优化“预测器”、“反思者”、“辩论者”等基本角色的指令和少样本示例。
        *   通过计算每个构建块优化后相对于基准智能体的性能增益，来量化其“影响力”，为下一阶段的拓扑搜索提供先验知识。
    2.  **第二阶段：工作流拓扑优化**
        *   基于第一阶段得到的最优提示和构建块影响力分数，在一个剪枝后的拓扑空间中进行搜索，以确定最佳的智能体排列和连接方式。
        *   采用拒绝采样策略，根据构建块的影响力进行概率性选择，并自动拒绝无效或超出预算的拓扑组合，从而高效探索有效配置。
    3.  **第三阶段：工作流级（全局）提示优化**
        *   在找到最佳拓扑结构后，将其视为一个整体，再次进行一轮全局提示优化。
        *   此步骤旨在微调各个智能体的提示，使其更好地适应协作环境，解决智能体间的依赖性问题，进一步提升整体系统性能。

### 3. 实验设计

*   **数据集与场景**：实验覆盖了广泛的任务类型，以验证方法的普适性。
    *   **推理**：MATH， DROP
    *   **长上下文多跳理解**：HotpotQA， MuSiQue， 2WikiMultiHopQA
    *   **代码生成**：MBPP， HumanEval， LiveCodeBench
*   **基准模型**：主要实验基于 **Gemini 1.5**（Pro和Flash版本）进行，并在 **Claude 3.5 Sonnet** 上进行了关键验证。
*   **对比方法**：MASS与两大类基线方法进行了比较：
    *   **手动设计的** **MAS** **基线**：零样本思维链、自一致性、自我 refine、多智能体辩论。
    *   **自动智能体设计基线**：ADAS（通过元智能体生成新拓扑）和 AFlow（使用蒙特卡洛树搜索优化工作流）。

### 4. 资源与算力

*   论文**未明确说明**进行搜索优化和评估所消耗的具体GPU型号、数量或总训练/搜索时长。
*   文中提到了控制搜索成本的措施，例如限制bootstrapped示范数为3个、指令候选数为10个、搜索不同拓扑的数量为10个，以及将总智能体数上限设为10，但这属于搜索空间和预算约束，而非对所用算力资源的汇报。

### 5. 实验数量与充分性

*   **实验数量**：论文进行了多组实验，包括：
    *   在2种模型、8个数据集上与6种或以上的基线方法进行主要性能对比。
    *   详尽的**消融实验**，量化了MASS每个优化阶段的增量收益，并分析了剪枝和提示预热对拓扑搜索的影响。
    *   **成本效益分析**，展示了MASS相对于其他自动设计方法的优化轨迹和效率。
    *   展示了MASS发现的最佳多智能体系统架构和提示，并提出了设计原则。
*   **充分性与公平性**：实验设计相当充分和客观。对比基线涵盖了主流的手动和自动设计方法。为公平比较，所有方法的推理智能体数量上限均设为10。通过在多模型、多类型任务上的广泛评估和详细的消融研究，有力地支撑了论文的结论。

### 6. 论文的主要结论与发现

*   MASS框架能自动发现性能远超现有手工设计和自动生成方法的多智能体系统。
*   **提示和拓扑的协同优化至关重要**。单纯优化其中一个方面都会导致性能瓶颈，而MASS的分阶段联合优化策略是成功的关键。
*   在组合成复杂系统之前，**先优化个体智能体的提示是构建高效** **MAS** **的基础**。
*   通过识别并专注于具有正面影响的**有效拓扑子集进行搜索，比在完整空间中盲目搜索更高效**。
*   基于MASS发现的系统，论文提炼出设计有效的MAS的原则：
    1.  组合前先优化个体。
    2.  组合有影响力的拓扑结构。
    3.  对组合后的系统进行全局优化以建模智能体间的依赖性。

### 7. 优点

*   **深刻的洞察**：通过定量分析揭示了提示与拓扑在MAS设计中的具体作用，为算法设计提供了坚实基础。
*   **方法论创新**：MASS框架设计精妙，其“局部到全局，提示到拓扑”的交叉优化策略有效解决了组合爆炸问题，逻辑清晰且高效。
*   **实验全面且具说服力**：通过跨多模型、多领域任务的广泛评估、与多种基线对比以及详尽的消融研究，强有力地验证了方法的优越性和各阶段设计的合理性。
*   **实用性强**：提出的设计原则简洁明了，对未来的MAS研究和开发具有直接的指导意义。

### 8. 不足与局限

*   **搜索空间局限性**：虽然覆盖了主流拓扑，但文中也承认可能遗漏其他有益的拓扑（如稀疏通信拓扑），包含更灵活的拓扑可能会进一步提升性能。
*   **搜索算法可改进**：采用的搜索算法（如基于影响力的剪枝采样）相对简单，未来可使用更先进的贝叶斯优化等方法提高搜索的样本效率。
*   **算力成本不透明**：未报告具体算力开销，使得第三方难以精确评估和复现其资源需求。
*   **对优化器性能的依赖**：MASS是一个元框架，其最终性能高度依赖于其内部集成的提示优化器和拓扑优化器的效果。

（完）
