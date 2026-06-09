---
title: "Iterative Vectors: In-Context Gradient Steering without Backpropagation"
title_zh: 迭代向量：无需反向传播的上下文梯度引导
authors: "Yiting Liu, Zhi-Hong Deng"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=1v3XEcRMyP"
tags: ["query:pe"]
score: 8.0
evidence: 迭代向量在推理过程中精炼基于激活的元梯度以增强上下文学习。
tldr: 针对上下文学习中高质量示例选择耗时的问题，提出迭代向量方法，在推理时通过提取并迭代精炼激活空间的元梯度，模拟梯度更新以提升上下文学习性能。实验在多个模型和任务上验证了显著改进，为无需反向传播的上下文激活引导开辟了新方向。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-1v3xecrmyp/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 702, \"height\": 472, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-1v3xecrmyp/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1333, \"height\": 544, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-1v3xecrmyp/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1573, \"height\": 748, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-1v3xecrmyp/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1766, \"height\": 633, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1v3xecrmyp/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1415, \"height\": 201, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1v3xecrmyp/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1591, \"height\": 203, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1v3xecrmyp/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 816, \"height\": 200, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1v3xecrmyp/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 963, \"height\": 757, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1v3xecrmyp/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1765, \"height\": 630, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1v3xecrmyp/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1765, \"height\": 630, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1v3xecrmyp/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1765, \"height\": 230, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1v3xecrmyp/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1774, \"height\": 452, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1v3xecrmyp/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1792, \"height\": 1985, \"label\": \"Table\"}]"
motivation: 上下文学习中高质量示例选择耗时且困难，制约了性能提升。
method: 提出迭代向量方法，在激活空间中提取并迭代精炼元梯度，模拟梯度更新。
result: 在四个模型和多项任务上评估，均取得显著性能改进。
conclusion: 上下文激活引导是一种有前景的方向，为未来研究开辟新途径。
---

## Abstract
In-context learning has become a standard approach for utilizing language models.
However, selecting and processing suitable demonstration examples can be challenging and time-consuming, especially when dealing with large numbers of them.
We propose Iterative Vectors (IVs), a technique that explores activation space to enhance in-context performance by simulating gradient updates during inference.
IVs extract and iteratively refine activation-based meta-gradients, applying them during inference without requiring backpropagation at any stage.
We evaluate IVs across various tasks using four popular models and observe significant improvements.
Our findings suggest that in-context activation steering is a promising direction, opening new avenues for future research.

---

## 论文详细总结（自动生成）

好的，以下是根据论文《Iterative Vectors: In-Context Gradient Steering without Backpropagation》生成的结构化中文总结。

### 1. 论文的核心问题与整体含义
*   **研究动机**：上下文学习（ICL）已成为利用语言模型的标准方法，但其性能高度依赖提示词中示例的选择、排列和模板，具有不稳定性。此外，处理大量示例受到模型上下文长度和推理时间二次增长的限制，影响其可靠性和效率。
*   **核心问题**：如何在不增加提示长度、无需反向传播或参数更新的前提下，更稳定、高效地利用多个示例中的信息来增强模型的上下文学习能力。
*   **整体含义**：本文旨在探索一条新路径，通过直接在模型的激活空间中进行操作，模拟梯度下降优化过程，以提取和精炼示例中的任务知识，从而提升ICL的性能和鲁棒性。

### 2. 论文提出的方法论
*   **核心思想**：基于“语言模型作为元优化器”的理论，将ICL中的示例视为模型通过注意力机制生成的“元梯度”。本文提出的**迭代向量（Iterative Vectors, IVs）**方法，旨在从模型激活中**提取**这些元梯度，并通过**迭代精炼**使其更稳定有效，最后在推理时**应用**这些精炼后的元梯度来引导模型预测。
*   **关键技术细节**：
    *   **元梯度提取**：对于一个k-shot任务，构建两个序列：(1) 完整的ICL序列和 (2) 仅包含查询的零样本序列。计算两者在输入-输出分隔符位置的注意力激活差异（\(\Delta Act_l\)），并将其视为示例引起的元梯度。同类示例的元梯度取平均，得到每类及查询的激活向量 \(v_j^l\) 和 \(v_q^l\)。
    *   **迭代精炼（核心创新）**：
        1.  将训练集分批。
        2.  第一批直接计算得到初始向量 \(V_1^l\)。
        3.  在提取后续批次 \(i\) 的向量时，先用先前所有批次的平均向量 \(\bar{V}_{i-1}^l\) 和**提取强度** \(\alpha_1\) 去编辑模型的激活，然后再进行新的提取，得到 \(V_i^l\)。这模拟了批量梯度下降中参数的迭代更新。
        4.  最终将所有批次的向量取平均，得到最终的迭代向量。
    *   **推理应用**：在测试时，使用最终的迭代向量和**推理强度** \(\alpha_2\)，对查询序列中每个输入-输出分隔符的注意力激活进行编辑（公式：`EditedAttn_l(x_i) = Attn_l(x_i) + \alpha_2 \times v_{\text{Class}(x_i)}^l`）。

### 3. 实验设计
*   **数据集/场景**：在13个真实世界的文本分类数据集上进行评估，涵盖情感分析（如SST-5, Rotten Tomatoes）、主题分类（如AG News, TREC）、推文分类（如TweetEval基准下的多个任务）等。
*   **Benchmark（基准方法）**：
    *   **Clean**：标准的少样本（1-shot）ICL。
    *   **Function Vectors (FV)**：通过因果效应筛选最优注意力头来提取向量。
    *   **Task Vectors (TV)**：选择最优层来提取和应用向量。
*   **对比方法**：将IVs与上述两种适应到ICL评估框架下的激活向量方法，以及标准ICL（Clean）进行性能对比。
*   **评估指标**：主要使用宏平均F1（Macro-F1）分数，辅以微平均F1（Micro-F1）和加权F1（Weighted-F1）。

### 4. 资源与算力
*   **GPU配置**：文中说明，除部分特别说明的实验（如Llama-2-70b使用了3块A6000 GPU）外，所有实验均可在**单块Nvidia RTX A6000 GPU**上完成。
*   **运行时长**：论文对比了推理时间和提取时间。例如，在一个20分类任务上，IVs方法在取得接近2-shot ICL的性能时，推理时间比后者快约41%。提取200个episode的IVs耗时约23.75分钟，而同等条件下提取FVs则耗时438.3分钟。
*   **未明确说明的计算量**：未报告所有实验的总GPU时或提取所有任务向量的总耗时。

### 5. 实验数量与充分性
*   **实验数量**：本文实验设计较为丰富，主要包括：
    *   **主实验**：在4种模型（GPT-J-6B, Llama 2-7B, Llama 3.1-8B, Llama 2-13B）和13个数据集上的性能对比（表1）。
    *   **时间效率分析**：对比不同方法的推理与提取时间（表2）。
    *   **多示例扩展性实验**：测试在2-shot至5-shot场景下叠加IVs的效果（表3）。
    *   **数据规模扩展性实验**：测试不同数量的提取episode对性能的影响（表4）。
    *   **消融实验**：详细分析了批次大小 \(b\)、提取强度 \(\alpha_1\) 和推理强度 \(\alpha_2\) 等关键超参数的影响（图3）。
    *   **补充实验**：包括使用Micro/Weighted-F1指标的额外结果、在70B参数模型上的结果等。
*   **充分性与公平性**：实验设计较为**充分且公平**。通过多模型、多任务的广泛测试验证了方法的有效性。对比基准方法时，均进行了相应的超参数搜索，并控制了随机种子。消融研究有力地支撑了迭代精炼机制的有效性。

### 6. 论文的主要结论与发现
*   **性能提升显著**：IVs在4个模型和13个任务上平均性能提升3.2%，且在大模型上表现更佳，超越了标准ICL及FV、TV两种激活向量的基准方法。
*   **推理效率高**：IVs能在保持高精度的同时，大幅减少推理时间，因为它允许使用1-shot提示取得比拟多shot的效果。
*   **可扩展性好**：IVs能有效利用更多示例进行提取，性能随提取episode增加而持续提升，超越了传统ICL受上下文窗口限制的局限。
*   **验证了迭代机制的有效性**：消融实验证实，禁用迭代（\(b=0\)）会导致性能大幅下降，而适当的批量大小和强度设定对于稳定向量、模拟梯度更新至关重要。这证明了IVs确实执行了有原则的梯度模拟。

### 7. 优点
*   **理论驱动**：方法设计有明确的公式推导和理论依据，即从“语言模型作为元优化器”的视角出发，将操作解释为对元梯度的模拟。
*   **方法新颖高效**：提出的迭代精炼机制是一个重要创新，它无需反向传播就能在推理阶段模拟梯度更新，既稳定了提取的向量，又保持了高效性。
*   **实验扎实**：实验覆盖面广（多个模型、数据集、基准方法），并对关键超参数进行了深入的消融分析，结论可信度高。
*   **实用性强**：方法即插即用，不改变模型参数，计算和内存开销小，能有效节省推理时间，具有直接的应用价值。

### 8. 不足与局限
*   **任务类型局限**：所有实验均集中在文本分类这一判别式任务上，其生成式任务上的效果未知。
*   **未探索零样本场景**：方法目前依赖至少一个带标签的示例（1-shot）才能有效工作，未能解决在完全无示例的零样本场景下提升性能的挑战。
*   **超参数依赖**：方法引入了新的超参数（\(k, b, \alpha_1, \alpha_2\)），虽然论文给出了调优指南，但其最优值可能因任务和模型而异，增加了调参负担。
*   **比较对象局限**：主要对比了同样处理激活向量的方法。若能进一步与Prompt Tuning、PEFT（如LoRA）等基于参数训练的方法在经济性和性能上做更直接、深入的对比，论证会更加完整。

（完）
