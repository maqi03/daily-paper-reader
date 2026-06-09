---
title: "ReCAP: Recursive Context-Aware Reasoning and Planning for Large Language Model Agents"
title_zh: ReCAP：面向大语言模型智能体的递归上下文感知推理与规划
authors: "Zhenyu Zhang, Tianyi Chen, Weiran Xu, Alex Pentland, Jiaxin Pei"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=r2ykUnzuGt"
tags: ["query:pe"]
score: 9.0
evidence: 提出层次化提示框架，实现递归分步推理与规划，应对长程任务。
tldr: 长程任务中，顺序提示易致上下文漂移，层次化提示则连续性弱。本文提出ReCAP框架，结合计划前分解、父计划再注入和递归优化，实现上下文一致的逐步推理。实验表明，ReCAP在多个复杂任务上优于现有提示方法，显著提升LLM智能体的多步推理与规划能力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-r2ykunzugt/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1273, \"height\": 191, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r2ykunzugt/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1349, \"height\": 350, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r2ykunzugt/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1362, \"height\": 330, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r2ykunzugt/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 674, \"height\": 554, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r2ykunzugt/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 692, \"height\": 572, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r2ykunzugt/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1418, \"height\": 1010, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r2ykunzugt/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 688, \"height\": 541, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r2ykunzugt/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1115, \"height\": 1027, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r2ykunzugt/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1113, \"height\": 975, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-r2ykunzugt/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1162, \"height\": 317, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-r2ykunzugt/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1405, \"height\": 196, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-r2ykunzugt/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1312, \"height\": 157, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-r2ykunzugt/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1115, \"height\": 1027, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-r2ykunzugt/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1113, \"height\": 975, \"label\": \"Table\"}]"
motivation: 长程任务中顺序提示易上下文漂移，层次化提示则连续性弱，亟需更好的推理规划方法。
method: 提出ReCAP框架，融合计划前分解、父计划再注入和递归优化，实现上下文一致的逐步推理。
result: 实验表明，ReCAP在多步骤任务中显著优于顺序和层次提示基线，提升了智能体的规划与推理表现。
conclusion: ReCAP为LLM智能体提供了一种强大的推理与规划提示范式，推动了复杂任务解决能力。
---

## Abstract
Long-horizon tasks requiring multi-step reasoning and dynamic re-planning remain challenging for large language models (LLMs). Sequential prompting methods are prone to context drift, loss of goal information, and recurrent failure cycles, while hierarchical prompting methods often weaken cross-level continuity or incur substantial runtime overhead. We introduce ReCAP (Recursive Context-Aware Reasoning and Planning), a hierarchical framework with shared context for reasoning and planning in LLMs. ReCAP combines three key mechanisms: (i) plan-ahead decomposition, in which the model generates a full subtask list, executes the first item, and refines the remainder; (ii) structured re-injection of parent plans, maintaining consistent multi-level context during recursive return; and (iii) memory-efficient execution, bounding the active prompt so costs scale linearly with task depth. Together these mechanisms align high-level goals with low-level actions, reduce redundant prompting, and preserve coherent context updates across recursion. Experiments demonstrate that ReCAP substantially improves subgoal alignment and success rates on various long-horizon reasoning benchmarks, achieving a 32\% gain on synchronous Robotouille and a 29\% improvement on asynchronous Robotouille under the strict pass@1 protocol.

---

## 论文详细总结（自动生成）

好的，这是对上述论文的结构化总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：大语言模型在处理需要多步推理和动态重规划的长期任务（长程任务）时面临重大挑战。现有的两种主流提示方法各有缺陷：
    *   **顺序提示方法**：容易导致“上下文漂移”，即早期的目标和计划在长篇对话历史中丢失，并陷入重复性的失败循环。
    *   **层次化提示方法**：虽然结构化了推理，但常在不同层级间割裂上下文，导致跨级推理连续性差，或引入巨大的运行时开销。
*   **整体含义**：论文旨在解决LLM智能体在高层次抽象推理（规划）与低层次任务执行（行动）之间难以平滑过渡与自适应调整的根本性问题。这关系到能否创建出在复杂动态环境中既能坚持全局目标，又能灵活应对反馈的强智能系统。

### 2. 论文提出的方法论

该论文提出了**ReCAP**，一个基于共享上下文的递归、上下文感知推理与规划框架。其核心思想是通过在单一、动态的LLM对话上下文内维护一颗任务树，来实现连贯的多层级推理。

*   **核心思想与关键技术细节**：
    1.  **计划前任务分解**：
        *   给定当前上下文 \( C \)，模型通过规划函数 \( \pi(C) \) 一次性生成一个内部思考 \( T \) 和一个完整的有序子任务列表 \( S = \langle s_0, s_1, \ldots, s_{m-1} \rangle \)。
        *   仅执行列表中的第一个子任务 \( S[0] \)，保留剩余部分 \( S[1:] \)。执行完毕后，模型会根据新观察结果细化剩余的整个计划，防止患上“规划短视”。
    2.  **一致的跨层级上下文与结构化注入**：
        *   所有递归层级的推理都在同一个共享的LLM上下文中进行，从而保持高层目标与低层行动的对齐。
        *   **向下传递**：当处理一个非原子子任务 \( S[0] \) 时，父任务的计划 \( S \) 被追加到上下文中，然后发起递归调用。
        *   **回溯与再注入**：子任务解决后，父计划中的剩余部分 \( S[1:] \) 和最新思考会被“结构化地再注入”回当前上下文。这确保了从子任务返回时，父级计划的关键信息（高级意图与剩余步骤）能被重新激活并置于接近当前决策点的位置，避免了上下文割裂。
    3.  **内存高效的可扩展性**：
        *   采用滑动窗口机制限制活动上下文大小（如64轮对话），并用结构化注入来补充因截断而消失的高层规划信息，避免上下文无限积累。
        *   由于所有递归在共享上下文中运行，小样本示例仅在初始化时放置一次，避免重复占用令牌资源。

*   **算法流程（Algorithm 1）简述**：
    1.  **开始**：输入任务描述和初始观察。
    2.  **规划**：LLM基于当前上下文生成内部思考 \( T \) 和子任务列表 \( S \)。
    3.  **循环执行**：当 \( S \) 不为空时：
        *   若 \( S[0] \) 是可直接执行的原语，则由环境执行 \( E(S[0]) \)，并将结果追加到上下文。
        *   若 \( S[0] \) 是一个复合任务，则以扩展后的上下文发起递归调用 `ReCAP`。
        *   将父计划 \( S[1:] \) 再注入上下文，调用细化函数 \( \rho \) 来修订思考和子任务列表。
    4.  **结束**：子任务列表为空或环境返回终止信号时，循环结束。

### 3. 实验设计

*   **数据集/场景与基准**：
    *   **ALFWorld**：文本形式的具身家务模拟，任务步数短（5-15步），动作空间小。用于测试框架在浅层任务中的表现。
    *   **Robotouille**：复杂的具身烹饪模拟，分为**同步**（10-57步）和**异步**（21-82步）两种模式，任务步数长，需处理并发目标和资源占用。这是评估长程规划能力的核心基准。
    *   **FEVER**：知识密集型事实验证任务，动作步数浅（<10步）。用于检验框架在短序列检索任务中是否有额外开销。
    *   **SWE-bench Verified**：真实世界的代码仓库级问题修复任务，动作空间（代码编辑）近乎无限，任务步数长。
*   **对比方法**：
    *   **顺序提示基线**: Standard, CoT, ReAct, Act (仅行动)。
    *   **层次化提示基线**: ADaPT。
*   **评估协议**：采用严格的 **pass@1** 协议，即每个任务实例仅有一次完整的推理-执行轨迹机会，不允许重试、自我集成等策略，以反映真实部署场景。

### 4. 资源与算力

*   论文中**未明确提及**使用的GPU型号、数量或具体训练时长。
*   所有实验均通过API调用商用或开源模型（如GPT-4o, GPT-4.1, Qwen2.5, LLaMA-4, DeepSeek-V3）完成，不涉及本地训练或GPU推理。计算资源消耗以API调用次数和成本（美元）的形式量化。

### 5. 实验数量与充分性

*   **实验数量**：实验覆盖全面，包括：
    *   在4个不同类型的基准数据集上的主实验。
    *   对Robotouille上不同难度的同步和异步任务进行了详细的性能分解。
    *   跨5个不同模型系列的泛化性测试（Table 2）。
    *   在特定任务上的结构消融实验（Table 3），对比了不同推理深度、思考格式、历史长度等变体。
    *   成本与效率分析。
*   **充分性与客观性**：实验设计相当充分且客观。
    *   **充分性**：通过覆盖短程/长程、具身/知识/代码等多元化任务，全面验证了方法的有效性和适用边界。消融实验清晰地揭示了框架中“推理痕迹”和“递归深度”等关键组件的作用。
    *   **客观性与公平性**：采用严格的Pass@1和单样本提示协议，对所有方法应用相同的步数限制和模型配置，并纠正了基线方法中的错误（如FEVER的标签错误），确保了对比的公平性。

### 6. 论文的主要结论与发现

1.  **长程任务大幅提升**：ReCAP在长程任务上显著优于顺序提示和层次化提示基线。在同步和异步Robotouille上，相比ReAct，成功率分别提升了32%和29%。
2.  **短程任务保持竞争力**：在ALFWorld和FEVER等任务步数较短的基准上，ReCAP的性能未退化，甚至略有提升（ALFWorld上提升7%），说明其递归架构并未引入不必要的开销。
3.  **有效防止无限循环**：通过案例（Figure 3）表明，ReCAP的回溯和计划细化机制能有效检测并打破像ReAct那样陷入重复无效动作的循环，转而生成修正性计划。
4.  **模型泛化性强**：跨模型实验（Table 2）表明，ReCAP的架构优势在不同规模和家族的LLM上均一致有效，具有良好的鲁棒性。
5.  **推理痕迹至关重要**：消融实验表明，移除推理痕迹（No Think/Name Only）或限制递归深度会显著降低成功率，肯定了显式推理在协调多步计划中的作用。

### 7. 优点

*   **方法创新性**：巧妙地结合了“计划前生成”、“递归分解”和“结构化上下文再注入”，在不依赖外部工具或训练的情况下，解决了顺序与层次化提示的核心矛盾——保持了全局一致性又实现了局部自适应。
*   **内存与上下文管理**：通过滑动窗口和关键信息再注入机制，巧妙地管理了长上下文，避免了冗余，并使成本与任务深度而非总步长成线性关系，这是一个基础且优雅的设计。
*   **零训练与强泛化**：作为一个纯提示框架，无需任何微调即可部署，并在多种模型上展现了强大的泛化能力。
*   **实验评估严谨**：采用严格的Pass@1协议、多领域基准测试、公平的基线对比以及详尽的消融研究，使得结论极具说服力。

### 8. 不足与局限

*   **对基础模型的高依赖性**：整个框架的分解、执行和回溯决策完全依赖底层LLM，缺乏外部验证。若LLM本身质量不佳或指令遵循能力弱，错误可能被传播和放大。
*   **推理成本较高**：递归设计和额外的推理步骤导致交互轮次增加，带来了比顺序方法更高的API调用开销和更长的端到端延迟，在成本或时延敏感的应用中可能成为瓶颈。
*   **外部工具依赖受限**：文中提到，由于工具链不匹配等问题，难以将ReCAP与依赖外部代码解释器（如Ada-Planner, REPL-Plan）或需要多轮记忆（如Reflexion）的方法进行公平比较，这限定了其对比范围。
*   **场景局限性**：虽然覆盖了多样化任务，但其在需要长期记忆和背景知识贯穿整个轨迹的持续性任务上的表现有待探索。

（完）
