---
title: LAST SToP for Modeling Asynchronous Time Series
title_zh: LAST SToP：用于异步时间序列建模的语言模型提示设计
authors: "Shubham Gupta, Thibaut Durand, Graham W. Taylor, Lilian Bialokozowicz"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=TpP47EH1xG"
tags: ["query:pe"]
score: 7.0
evidence: 提出针对非同步时间序列的提示设计与随机软提示方法，提升LLM在该领域的性能
tldr: 针对非同步时间序列数据的特点，本文设计了一种新颖的提示结构，并引入随机软提示机制，使大语言模型能有效利用自然语言事件描述进行推理。该方法不仅提升了预测性能，还将分析范围扩展到异常检测与缺失值填充。实验验证了提示工程在非传统NLP领域提升模型能力的潜力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 868, \"height\": 484, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 828, \"height\": 231, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1730, \"height\": 385, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 852, \"height\": 299, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 846, \"height\": 742, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 689, \"height\": 816, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 842, \"height\": 434, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1512, \"height\": 457, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1766, \"height\": 593, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1659, \"height\": 510, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1410, \"height\": 699, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1755, \"height\": 590, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tpp47eh1xg/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1543, \"height\": 491, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-tpp47eh1xg/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 855, \"height\": 1089, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tpp47eh1xg/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1769, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tpp47eh1xg/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1359, \"height\": 472, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tpp47eh1xg/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1358, \"height\": 471, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tpp47eh1xg/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1253, \"height\": 472, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tpp47eh1xg/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1780, \"height\": 389, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tpp47eh1xg/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1781, \"height\": 391, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tpp47eh1xg/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1782, \"height\": 648, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tpp47eh1xg/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1772, \"height\": 1279, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tpp47eh1xg/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1766, \"height\": 1352, \"label\": \"Table\"}]"
motivation: 现有提示方法不适配非同步时间序列的自然语言描述，限制了LLM的应用。
method: 提出特定提示结构及随机软提示微调，充分利用事件描述与LLM知识。
result: 在多项时间序列任务上性能显著优于基线，拓展了应用范围。
conclusion: 针对性提示设计可有效释放LLM在时间序列等领域的潜力。
---

## Abstract
We present a novel prompt design for Large Language Models (LLMs) tailored to **Asynchronous Time Series**. Unlike regular time series, which assume values at evenly spaced time points, asynchronous time series consist of timestamped events occurring at irregular intervals, each described in natural language. Our approach effectively utilizes the rich natural language of event descriptions, allowing LLMs to benefit from their broad world knowledge for reasoning across different domains and tasks. This allows us to extend the scope of asynchronous time series analysis beyond forecasting to include tasks like anomaly detection and data imputation. We further introduce **Stochastic Soft Prompting**, a novel prompt-tuning mechanism that significantly improves model performance, outperforming existing finetuning methods such as QLORA. Through extensive experiments on real-world datasets, we demonstrate that our approach achieves state-of-the-art performance across different tasks and datasets.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容撰写的结构化中文总结。

### 1. 研究动机与核心问题

*   **核心问题**：现有的大语言模型（LLM）在时间序列上的应用主要集中在**规则时间序列**（数值等间隔采样），无法直接应用于**异步时间序列**。异步时间序列由不规则时间间隔发生的事件组成，且事件包含丰富的自然语言描述（例如：医疗、电商、社交媒体中的用户行为）。
*   **现有方法局限**：传统的时序点过程（TPP）方法通常将事件归为固定的、少量的类别，忽略了事件的自然语言描述、事件间的复杂交互，且难以扩展到异常检测和数据填充等任务。
*   **研究动机**：本文旨在探索如何让LLM利用其**广泛的先验知识**和**自然语言理解能力**，直接处理包含文本描述的异步时间序列，并统一解决预测、异常检测和数据填充等多个任务。

### 2. 方法论

论文提出了一个名为 **LASTS** 的框架，包含一种新颖的提示词设计以及一种名为**随机软提示（Stochastic Soft Prompting, StoP）**的参数高效微调技术。

*   **核心思想**：
    *   保持LLM主体结构不变，通过精心设计的提示词模板，将异步时间序列建模任务转化为LLM的文本生成任务。
    *   使用一种创新的软提示微调方法（StoP），高效地将LLM适配到异步时间序列数据上，同时学习到更鲁棒的提示表示。

*   **关键技术细节**：
    1.  **LASTS 提示词结构**：
        *   **系统提示**：包含任务描述（预测、填充或异常检测）和数据集背景。
        *   **用户提示**：输入的时间序列被表示为逗号分隔的元组序列`(事件描述, 间隔时间)`，充分利用文本信息。
        *   **助手提示**：包含正确答案（训练时用），或在推理时由LLM生成。
    2.  **随机软提示（StoP）**：
        *   **基础概念**：在输入序列前添加一段可学习的连续向量（软提示），通过梯度下降优化，引导模型行为。
        *   **核心创新**：在**训练时**，对于每个批次的数据，从完整的软提示中**随机截取一个前缀**（长度从均匀分布中采样）作为实际使用的提示。**推理时**则使用完整的软提示。
        *   **设计理念**：类似于Dropout和随机深度，这种“从粗到细”的随机截断训练范式强制软提示的不同前缀都能成为有效的独立提示，提升了泛化能力，并学习到更多样化的表示。

### 3. 实验设计

*   **数据集与场景**：
    *   **文本动作数据集**（事件具有丰富文本描述）：Breakfast（早餐准备）、EPIC-KITCHENS-100（厨房日常活动）、Multi-THUMOS（人类活动）。
    *   **标准时序点过程数据集**（事件为类别索引，无语义）：Amazon（产品评论）、Retweet（转发）、Taxi（出租车行程）、Taobao（商品点击）、StackOverflow（徽章获取）。
*   **Benchmark 对比方法**：
    *   **零样本基线**：随机猜测、时间序列基础模型Chronos、LLM时间序列预测方法（LLMTime， LLMProcesses）。
    *   **时序点过程模型**：RMTPP， NHP， SAHP， THP， AttNHP。
    *   **参数高效微调（PEFT）方法**：QLoRA、标准软提示（SP）与本文提出的随机软提示（StoP）进行对比。
*   **评价指标**：事件类型预测使用**宏观F1**，时间预测使用**平均绝对误差**或**均方根误差**。

### 4. 资源与算力

*   论文明确提到了使用的LLM骨干模型是 **Llama-3-8B-Instruct**。
*   训练使用了**QLoRA**和提示微调等参数高效方法，并提及了训练参数规模（约1.6M）和训练速度比较。
*   **论文未明确说明**所使用的**GPU型号、数量以及具体的总训练时长**。

### 5. 实验数量与充分性

*   **实验数量巨大且设计充分**。
*   **多任务评估**：在**预测、填充、异常检测**三个不同任务上均进行了实验。
*   **多数据集覆盖**：在**8个**特性各异的数据集上进行了评估。
*   **多层次对比**：
    *   与**零样本、少样本、全参数微调**（如QLoRA）和**软提示微调**等多种训练范式对比。
    *   与**通用基础模型、专用时序点过程模型和LLM时序模型**等不同类型的方法进行对比。
*   **消融与分析实验**：
    *   **StoP机理分析**：通过t-SNE可视化和余弦相似度分析StoP与SP学习到的标记表示差异（图5）。
    *   **前缀有效性验证**：证明StoP中任意长度的前缀都是有效提示（图6）。
    *   **解耦实验**：验证了“随机截取前缀”这一策略的重要性，而非单纯的随机性（附录A.7）。
    *   **模型规模缩放**：验证了StoP在1B、3B、8B模型上的性能增长趋势（图7）。
    *   **少样本影响**：探究了不同数量上下文样本对性能的影响（附录A.11）。
    *   **文本知识作用**：通过用乱码替换事件描述，验证了LLM世界知识的重要性（附录A.4）。
*   实验设计客观公正，对比全面，并通过大量消融实验深入分析了方法各组成部分的有效性。

### 6. 主要结论与发现

*   **LASTS 提示有效**：提出的提示词框架能有效利用LLM处理异步时间序列，其零样本性能显著优于其他零样本基线方法。
*   **StoP 性能最优**：随机软提示（StoP）在事件类型预测和时间预测上均表现最佳，超越了传统微调方法（QLoRA）和标准软提示（SP）。
*   **多任务泛化能力强**：同一套框架无需修改即可应用于预测、异常检测和数据填充等多个任务。
*   **处理海量事件类型**：LASTS能够有效处理像EPIC-KITCHENS这样拥有近2万种事件类型的复杂数据集，而传统TPP方法在此类数据集上运行困难或内存溢出。
*   **LLM先验知识价值高**：消融实验证实，LLM对自然语言事件描述的理解是其优于数值模型的关键因素之一。

### 7. 优点与亮点

*   **方法新颖**：首次将LLM应用于包含自然语言描述的异步时间序列多任务分析，构思巧妙。
*   **技术创新**：提出的随机软提示（StoP）是一种优雅且高效的微调范式，其“从粗到细”的学习机制和“前缀皆有效”的特性具有理论和实践价值，可推广至其他领域。
*   **实验翔实**：实验设计极为全面，涵盖多种数据集、任务和基线，多角度的消融分析深入揭示了方法有效性的内在原因，说服力强。
*   **实用性强**：该方法无需设计专用模型，仅通过提示工程和少量参数微调就能达到SOTA性能，极大降低了异步时间序列分析的门槛。

### 8. 不足与局限

*   **时间预测能力有待提升**：在部分数据集上（如Amazon），模型的时间预测误差高于传统的TPP模型。作者分析认为这是由于LLM缺乏对时间分布的明确先验假设所致。
*   **对LLM基座模型的依赖**：性能与底层LLM的规模和质量密切相关（如图7缩放实验所示），虽然这是利用LLM的必然特征，但也意味着其下限受基座模型制约。
*   **偏差与隐私风险**：论文自身的“影响声明”也指出，LLM中存在的偏差可能会传播到时序预测中，影响决策。在隐私敏感领域应用中需采取额外安全措施。
*   **算力细节缺失**：论文未提供训练所消耗的具体算力资源（如GPU型号/小时数），这为评估其计算成本和可复现性带来了一些不便。

（完）
