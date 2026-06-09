---
title: "FedOne: Query-Efficient Federated Learning for Black-box Discrete Prompt Learning"
title_zh: FedOne：面向黑盒离散提示学习的查询高效联邦学习
authors: "Ganyu Wang, Jinjie Fang, Maxwell Juncheng Yin, Bin Gu, Xi Chen, Boyu Wang, Yi Chang, Charles Ling"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=QwTDQXllam"
tags: ["query:pe"]
score: 8.0
evidence: 提出用于黑盒离散提示优化的查询高效联邦学习方法
tldr: 联邦黑盒离散提示学习(BDPL)通过不访问模型参数的方式优化离散提示，但现有联邦方法忽略了云端LLM服务的高昂查询成本。本文提出查询高效的联邦学习策略，理论分析对FedAvg进行退化，每轮仅激活一个客户端，并证明其收敛性。实验表明，该方法在多个基准上大幅减少查询次数，同时保持提示性能，为在云服务上经济部署提示调整提供了重要支撑。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-qwtdqxllam/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1745, \"height\": 650, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-qwtdqxllam/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 673, \"height\": 570, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-qwtdqxllam/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 699, \"height\": 517, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-qwtdqxllam/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1036, \"height\": 779, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-qwtdqxllam/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1034, \"height\": 776, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-qwtdqxllam/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1024, \"height\": 780, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-qwtdqxllam/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1332, \"height\": 420, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-qwtdqxllam/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1594, \"height\": 523, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-qwtdqxllam/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1555, \"height\": 267, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-qwtdqxllam/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1782, \"height\": 1274, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-qwtdqxllam/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1412, \"height\": 403, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-qwtdqxllam/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 986, \"height\": 335, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-qwtdqxllam/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1329, \"height\": 306, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-qwtdqxllam/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 975, \"height\": 187, \"label\": \"Table\"}]"
motivation: 现有联邦黑盒提示调优忽视云端LLM查询成本高昂的问题。
method: 提出FedOne策略：每轮仅激活一个客户端，减少查询次数。
result: 在多个基准上，查询开销大幅降低且保持提示性能。
conclusion: 为联邦场景下高效提示优化提供了经济可行的方案。
---

## Abstract
Black-Box Discrete Prompt Learning (BDPL) is a prompt-tuning method that optimizes discrete prompts without accessing model parameters or gradients, making the prompt tuning on a cloud-based Large Language Model (LLM) feasible.
Adapting Federated Learning (FL) to BDPL could further enhance prompt tuning performance by leveraging data from diverse sources. 
However, all previous research on federated black-box prompt tuning had neglected the substantial query cost associated with the cloud-based LLM service. 
To address this gap, we conducted a theoretical analysis of query efficiency within the context of federated black-box prompt tuning. Our findings revealed that degrading FedAvg to activate only one client per round, a strategy we called \textit{FedOne}, enabled optimal query efficiency in federated black-box prompt learning. 
Building on this insight, we proposed the FedOne framework, a federated black-box discrete prompt learning method designed to maximize query efficiency when interacting with cloud-based LLMs.
We conducted numerical experiments on various aspects of our framework, demonstrating a significant improvement in query efficiency, which aligns with our theoretical results.

---

## 论文详细总结（自动生成）

好的，这是根据提供的论文内容生成的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **研究背景**：黑盒离散提示学习 (BDPL) 允许在不访问模型内部参数（如闭源云端大模型API）的情况下，通过优化离散文本提示来调优大语言模型 (LLM)。将其与联邦学习 (FL) 结合，可以利用分散的客户端数据进一步提升性能，同时保护数据隐私。
*   **核心问题**：现有的联邦黑盒提示调优研究**忽略了与云端LLM服务交互时产生的巨大查询成本**。此前的聚合算法 (如FedAvg) 需要在每轮通信中激活多个客户端，每个客户端都需要向云端LLM发送大量查询，导致高昂的经济和时间开销。
*   **整体含义**：本文旨在发现并解决联邦黑盒提示调优中的查询效率瓶颈，通过理论分析和算法设计，提出一种最大化查询效率的新框架，使得在云端LLM上进行经济高效的联邦提示学习成为可能。

### 2. 论文提出的方法论

*   **核心思想：FedOne策略**
    通过对联邦黑盒离散提示学习场景进行理论收敛分析，发现增加每轮激活的客户端数量 ($K^*$) 对收敛速度的提升是次线性的，但向云端LLM的查询开销却呈线性增长。因此，查询效率的最优解是每轮通信只激活一个客户端，即**将传统的FedAvg退化为FedOne策略**。
*   **关键技术细节：联邦GS-BDPL框架**
    1.  **本地客户端训练**：每个客户端维护一个可学习的参数矩阵 $\alpha^k$，通过Gumbel-Softmax技巧将其重参数化为离散提示标记的概率分布 $p^k$。然后，采用基于强化的策略梯度方法（特别是MB-SVRP估计器）来优化 $\alpha^k$，梯度估计需要通过查询云端LLM服务来获得提示的损失值。此过程完全黑盒，无需模型参数或梯度。
    2.  **服务器端聚合**：在每轮联邦通信中，服务器仅随机选择一个客户端（$K^*=1$），下发当前全局参数。该客户端在本地利用自身数据进行多步本地更新（通过多次查询云端LLM），然后将更新后的参数回传至服务器进行聚合（平均），进入下一轮。
*   **算法流程**：
    *   `算法1 (Fed-BDPL)`：描述了完整的联邦BDPL流程，其中高亮展示了FedOne通过设置激活客户端数 `K* ← 1` 来实现。
*   **理论贡献**：
    *   **定理3.4 & 推论3.5**：对联邦BDPL在非凸设置下的收敛性进行了分析，证明了算法能达到 $O(1/\sqrt{T})$ 的次线性收敛率。
    *   **推论3.6**：推导了达到 $\epsilon$-解所需的最小查询次数 $Q_\epsilon(K^*)$ 的显式表达式，在理论上证明了当 $K^*=1$ 时 $Q_\epsilon$ 取得最小值，从而严格论证了FedOne的查询最优性。

### 3. 实验设计

*   **数据集/场景**：使用了自然语言理解基准 **GLUE benchmark**，覆盖了7个不同的文本分类与推理任务，包括MNLI、QQP、SST-2、MRPC、CoLA、QNLI和RTE。为模拟联邦学习中的数据少样本与非独立同分布场景，采用了**k-shot框架**（每个客户端每类k个样本）并将数据分发给100个客户端。
*   **Benchmark与对比方法**：
    *   **单机方法基线**：手动提示、上下文学习、全量微调。
    *   **联邦白盒提示调优**：将White-Box方法Prompt-tuning和P-tuning v2适配到联邦学习场景。
    *   **联邦黑盒提示调优**：将Black-Box Tuning (BBT)和BDPL（及基于Gumbel-Softmax的GS-BDPL）适配到联邦学习场景。所有联邦黑盒方法都部署在FedOne框架下进行比较。
    *   **模型架构**：实验基于 **RoBERTa-large** 模型，并在一个真实世界的云端LLM实验中使用 **GPT-3.5 Turbo** API。
*   **评估指标**：主要评估了各种任务对应的测试准确率/ F1分数/ Matthews相关系数，并详细对比了计算效率（训练时间）、资源占用（GPU显存）、通信成本（传输数据量）和查询成本（查询次数）。

### 4. 资源与算力

*   论文正文中并未明确提及实验具体使用了何种GPU型号、数量以及详细的训练时长。

### 5. 实验数量与充分性

*   **实验数量与覆盖度**：
    *   包含一个用于说明核心直觉的**玩具实验**（MNIST + MLP）。
    *   在**7个GLUE任务**上对**9种不同方法**进行了性能对比（表1）。
    *   对**9种联邦方法**做了全面的**计算效率和资源利用分析**（表2），对比了训练时间、通信成本、查询数、GPU显存等。
    *   利用**GPT-3.5 Turbo**进行了**真实场景**验证（表3）。
    *   补充材料中包含在不同程度的**客户端异质性**、**不同的激活客户端数 $K^*$**、**不同的提示长度**下的额外实验。
*   **充分性与公平性**：实验设计较为充分和客观。它不仅对比了最终任务性能，还深入分析了提出方法的核心优势——查询效率及相关资源开销。对比方法的选取覆盖了从单机到联邦，从白盒到黑盒的多种范式。在不同设置下的消融和扩展实验丰富了论证维度，使得结论更具说服力。所有实验均使用多随机种子以报告均值和标准差，保证了结果的可靠性。

### 6. 论文的主要结论与发现

*   **查询效率是核心瓶颈**：在联邦黑盒提示学习中，云端LLM的查询开销是比传统通信开销更为关键的成本因素。
*   **FedOne策略是最优解**：理论与实验一致证明，将FedAvg退化为每轮仅激活一个客户端的FedOne策略，能够在缓慢的收敛速度提升与急剧增长的查询成本之间取得最佳平衡，从而实现最优的查询效率。此发现对客户端异质性情况依然成立。
*   **方法性能与效率俱佳**：FedOne框架下的GS-BDPL方法在多个GLUE任务上取得了与白盒方法可比或更优的性能，同时在计算效率、通信成本和客户端资源需求（特别是无需加载完整模型）方面展现出巨大优势，特别适合边缘设备。

### 7. 优点

*   **问题新颖且实际**：首次识别并系统性解决了联邦黑盒提示调优中关键的查询效率问题，具有极强的现实意义。
*   **理论坚实**：提供了严谨的收敛性分析和查询效率的理论证明，有力地支撑了FedOne策略的提出。
*   **方法简单有效**：FedOne策略的核心思想非常简单，即“只选一个客户端”，但效果显著，易于实现和复现。
*   **实验全面且客观**：实验不仅关注精度，更聚焦于效率（查询次数、时间、资源），提供了多维度的对比分析。在真实API（GPT-3.5）上的验证进一步增强了工作的实用价值。
*   **实用性强**：所提方法显著降低了客户端的计算负担，使得资源受限设备（如手机、IoT设备）也能参与针对大模型的提示学习任务。

### 8. 不足与局限

*   **收敛速度的权衡**：FedOne策略虽然查询效率最优，但其代价是牺牲了多客户端并行计算带来的**每轮收敛速度**。论文在讨论部分也承认了这一点。在客户端与服务器通信开销远小于查询开销的场景下，这是合理的权衡。
*   **实验模型的广度**：实验主要基于RoBERTa-large和一个版本的GPT-3.5，虽然具有代表性，但在其他更广泛的大语言模型（如不同规模的GPT系列、Llama系列等）上的泛化性能尚未被验证。
*   **客户端异构性的程度**：虽然补充实验探索了Dirichlet分布下的数据异构，但真实世界的客户端异构可能更加复杂和极端，其影响有待深入。
*   **单客户端激活的风险**：每轮只激活一个客户端可能导致训练过程对单个客户端的数据分布更加敏感，可能需要更长的训练轮次来平滑这种偏差，尽管总查询次数更少。

（完）
