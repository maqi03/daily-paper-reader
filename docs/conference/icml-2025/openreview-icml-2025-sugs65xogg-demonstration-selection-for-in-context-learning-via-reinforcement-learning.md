---
title: Demonstration Selection for In-Context Learning via Reinforcement Learning
title_zh: 基于强化学习的上下文学习示范选择
authors: "Xubin Wang, Jianfei Wu, Yuan Yichen, Deyu Cai, Mingzhe Li, Weijia Jia"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=sugs65XoGg"
tags: ["query:pe"]
score: 9.0
evidence: 通过强化学习选择多样性示范以增强上下文学习提示
tldr: 针对上下文学习中示范集构造难题，提出RDES方法，利用Q学习和PPO强化学习动态优化示范选择，同时最大化多样性与任务相关性。实验表明在文本分类和推理任务中提升了少样本性能。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-sugs65xogg/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 855, \"height\": 472, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sugs65xogg/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 840, \"height\": 436, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sugs65xogg/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 869, \"height\": 627, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sugs65xogg/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1074, \"height\": 1406, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sugs65xogg/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1076, \"height\": 1563, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-sugs65xogg/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1769, \"height\": 813, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-sugs65xogg/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1770, \"height\": 1376, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-sugs65xogg/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 900, \"height\": 243, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-sugs65xogg/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 909, \"height\": 282, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-sugs65xogg/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1762, \"height\": 327, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-sugs65xogg/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1111, \"height\": 457, \"label\": \"Table\"}]"
motivation: 多样性示范选择对提高模型泛化至关重要，但现有方法难以兼顾多样性与相关性。
method: 提出RDES框架，通过Q学习或PPO优化示范选择过程。
result: 实现示范集多样性与任务匹配度的联合优化。
conclusion: 为少样本提示场景提供了更有效的示范增强策略。
---

## Abstract
Diversity in demonstration selection is critical for enhancing model generalization by enabling broader coverage of structures and concepts. Constructing appropriate demonstration sets remains a key research challenge. This paper introduces the Relevance-Diversity Enhanced Selection (RDES), an innovative approach that leverages reinforcement learning (RL) frameworks to optimize the selection of diverse reference demonstrations for tasks amenable to in-context learning (ICL), particularly text classification and reasoning, in few-shot prompting scenarios. RDES employs frameworks like Q-learning and a PPO-based variant to dynamically identify demonstrations that maximize both diversity (quantified by label distribution) and relevance to the task objective. This strategy ensures a balanced representation of reference data, leading to improved accuracy and generalization. Through extensive experiments on multiple benchmark datasets, including diverse reasoning tasks, and involving 14 closed-source and open-source LLMs, we demonstrate that RDES significantly enhances performance compared to ten established baselines. Our evaluation includes analysis of performance across varying numbers of demonstrations on selected datasets. Furthermore, we investigate incorporating Chain-of-Thought (CoT) reasoning, which further boosts predictive performance. The results highlight the potential of RL for adaptive demonstration selection and addressing challenges in ICL.

---

## 论文详细总结（自动生成）

好的，我将以资深学术论文分析助手的身份，使用中文、以 Markdown 形式，对该论文进行结构化、深入、客观的总结。

---

### 论文核心问题与整体含义

本论文聚焦于**上下文学习中的示范选择问题**。在少样本提示场景下，为大型语言模型提供一组高质量的示范是提升其性能的关键。论文指出，现有的示范选择方法通常只关注示范与查询的相似性（相关性），而忽视了**示范集的多样性**，这容易导致模型过拟合于某些特定模式，泛化能力受限。

-   **研究动机**：传统基于相似度的选择策略可能导致示范集缺乏对数据分布广度的覆盖，使得模型在面对未见过的、位于决策边界或偏离主流分布的数据时表现不佳。因此，如何构造一个既与任务相关又具备足够多样性的示范集，是一个核心挑战。
-   **整体含义**：论文提出了**相关性-多样性增强选择框架（RDES）**，其核心思想是将示范选择问题形式化为一个**序列决策过程**，并利用强化学习来动态地平衡相关性（保证准确度）和多样性（保证泛化性），从而为每个测试样本定制最优的示范集。

### 论文提出的方法论

RDES 的核心创新在于构建了一个强化学习驱动的自适应示范选择框架，主要由以下三部分构成：

-   **问题形式化 - 马尔可夫决策过程**：
    -   **状态**：由四部分拼接而成：输入文本的 TF-IDF 向量、已选示范的聚合嵌入、模型预测历史、以及当前示范集的标签多样性分数。
    -   **动作**：从知识库中选择一个候选样本添加到当前示范集中。
    -   **奖励函数**：设计为双目标奖励，旨在同时最大化准确性和多样性增益：
        `奖励 = (预测是否准确)+ λ * (加入新样本后多样性分数的提升)`
        其中 `λ` 是一个动态的多样性系数，通过模拟退火策略从初始的高探索值逐渐衰减，以在早期鼓励多样性探索，后期聚焦准确性优化。
-   **优化算法**：
    -   **基于 Q 学习的方法**：适用于状态空间可离散化的场景。通过维护一个 Q 表，学习在不同状态采取不同动作的价值，并使用 `ϵ`-贪心策略平衡探索与利用。
    -   **基于近端策略优化的变体**：为处理高维连续状态空间而设计。采用演员-评论家架构，利用神经网络分别拟合策略函数和状态价值函数，通过裁剪的目标函数进行稳定策略更新。
-   **推理增强**：框架可无缝集成**思维链提示**，即 RDES/C 版本。它允许 LLM 在生成最终答案前先生成推理链，进一步提升复杂任务的预测性能。

### 实验设计

实验设计全面,覆盖了多个维度以验证模型的有效性。

-   **数据集与场景**:：实验在两个层次上进行：
    1.  **文本分类基准**：使用了 `BANKING77`、`CLINC150`、`HWU64`、`LIU54` 四个标准意图分类数据集。
    2.  **复杂推理基准**：为评估泛化能力，使用了 `BigBenchHard`（布尔表达式和谎言网络子任务）、`GSM-8K`（数学推理）和 `SST5`（情感分析）等更具挑战性的数据集。
-   **基线方法**：与多达 **10 种**基线方法进行了对比，分为两类：
    -   **提示工程方法**：零样本提示（ZS）、知识提示（KP）、从少到多提示（L2M）、思维链（CoT）、自我优化（SF）。
    -   **示范选择方法**：少样本提示（FS）、带 CoT 的少样本提示（FSC）、主动示范选择（AES）、代表性示范选择（RDS）、自适应示范选择（ADA）。
-   **评估模型**：在 **14 个**主流闭源和开源 LLM 上进行测试，涵盖 GPT-3.5-turbo、Gemma、LLaMA、Qwen 等系列不同量级的模型，确保了结论的普适性。

### 资源与算力

-   **文中未明确提及**：论文在正文、附录及致谢部分详细说明了所使用的基础模型（LLMs），但**没有提供任何关于训练或运行 RDES 框架本身所需的 GPU 型号、数量、显存或具体训练时长的信息**。这是一个在资源消耗和可复现性方面的信息缺失。

### 实验数量与充分性

-   **实验数量庞大且充分**：实验矩阵非常庞大，覆盖了 **4个主数据集 + 4个补充推理数据集**，在 **14个LLMs** 上对比了 **10个基线方法和3个RDES变体**。此外，还进行了**消融实验**（对比有无多样性机制）、**不同示范数量（k=3, 5, 7, 10）下的性能分析**，以及与 CoT 推理的融合实验。整体来看，实验设计全面、系统，评估维度丰富，充分证明了方法的有效性和鲁棒性。对比方法选择客观、公平，涵盖了主流基线。

### 主要结论与发现

-   **RDES 性能显著优越**：在绝大多数文本分类任务和模型上，RDES（特别是集成 CoT 的 RDES/C）的准确率显著优于所有提示工程和示范选择的基线方法。
-   **多样性至关重要**：消融研究表明，引入多样性机制相比无多样性或仅考虑相似性的方法，能持续带来性能提升，验证了其对于增强模型泛化能力的关键作用。
-   **PPO 变体在复杂任务上展现潜力**：在 BigBenchHard 等复杂推理任务上，基于 PPO 的 RDES/PPO 变体表现出极具竞争力的结果，有时甚至超越了 Q-learning 版本，说明处理复杂状态空间时策略梯度方法的优势。
-   **动态平衡优于静态策略**：RDES 通过动态调整多样性系数 `λ`，能够根据学习阶段自适应地平衡探索与利用，这比固定策略（如 ADA）更灵活有效。

### 优点

-   **创新性问题建模**：将示范选择建模为序列决策过程，并通过强化学习动态求解，思想和角度新颖。
-   **精巧的奖励设计**：直接优化“相关性+多样性”的双重目标，奖励函数设计简洁有效，命中问题本质。
-   **方法自适应性**：能够为每个测试查询学习定制化的示范选择策略，而非采用全局固定的选择方式。
-   **实验验证极其扎实**：在广泛的模型、多样化的任务和全面的基线对比下，方法均表现出一致且显著的提升，结论可信度高。
-   **良好的可扩展性**：框架可无缝集成 CoT 等高级推理技术。

### 不足与局限

-   **计算成本问题**：强化学习训练过程需要成千上万次调用 LLM 进行交互以获取奖励和更新策略，计算开销巨大，文中未对此进行分析或优化，可能限制了其实际应用，尤其对于资源有限的用户。
-   **任务类型局限性**：当前框架主要用于分类和部分推理任务，对于文本生成、摘要等更开放的任务，如何定义状态、动作和奖励（尤其是多样性）仍有待探索。
-   **状态空间构建的泛化性**：状态表示依赖于 TF-IDF 等手工特征和标签多样性，当面对跨领域、跨语言或标签空间巨大的任务时，这种表示方式可能需要重新设计，其通用性未经验证。
-   **多样性度量的单一性**：论文仅依赖标签分布的均衡度来定义多样性，这是一种浅层多样性的度量。它忽略了语义空间上的多样性（如句法、主题、风格的多样性），可能导致对深层多样性的覆盖不足。

（完）
