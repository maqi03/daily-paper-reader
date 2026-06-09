---
title: "FoGE: Fock Space inspired encoding for graph prompting"
title_zh: FoGE：受Fock空间启发的图提示编码
authors: "Sotirios Panagiotis Chytas, Rudrasis Chakraborty, Vikas Singh"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=GSAKL9tc7L"
tags: ["query:pe"]
score: 9.0
evidence: 提出无参图编码方法，为提示词增加图结构上下文以提升图推理。
tldr: 现有图提示方法依赖序列化或可训练编码器，难以高效表示图结构。本文提出FoGE，一种受Fock空间启发的无参数图编码，可直接作为提示词注入大语言模型，提升对图问题的回答能力。实验表明该方法在多个图推理任务上达到或超越专用基线，为图提示提供了简单高效的新途径。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-gsakl9tc7l/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 440, \"height\": 375, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-gsakl9tc7l/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 585, \"height\": 308, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-gsakl9tc7l/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 533, \"height\": 362, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-gsakl9tc7l/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 874, \"height\": 233, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-gsakl9tc7l/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 882, \"height\": 240, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-gsakl9tc7l/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 874, \"height\": 549, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-gsakl9tc7l/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1438, \"height\": 306, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-gsakl9tc7l/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1435, \"height\": 407, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-gsakl9tc7l/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 717, \"height\": 699, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-gsakl9tc7l/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1145, \"height\": 384, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1452, \"height\": 209, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 581, \"height\": 473, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 902, \"height\": 429, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 499, \"height\": 607, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 859, \"height\": 331, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 812, \"height\": 405, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 849, \"height\": 378, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 585, \"height\": 261, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 635, \"height\": 279, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1451, \"height\": 268, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1328, \"height\": 100, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 631, \"height\": 130, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-gsakl9tc7l/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1011, \"height\": 1744, \"label\": \"Table\"}]"
motivation: 现有图提示方法在编码效率和泛化性上存在局限，需训练参数或复杂序列化。
method: 提出FoGE，一种基于Fock空间的无参数图编码方法，将图结构直接转化为提示词中的张量表示。
result: 在多个图问答数据集上，FoGE与预训练LLM结合取得与专用模型相当甚至更好的性能。
conclusion: 无参数图编码为图提示提供了简洁有效的方案，无需额外训练即可增强LLM的图推理能力。
---

## Abstract
Recent results show that modern Large Language Models (LLM) are indeed capable of understanding and answering questions about structured data such as graphs. This new paradigm can lead to solutions that require less supervision while, at the same time, providing a model that can generalize and answer questions beyond the training labels. Existing proposals often use some description of the graph to create an ``augmented'' prompt fed to the LLM. For a chosen class of graphs, if a well-tailored graph encoder is deployed to play together with a pre-trained LLM, the model can answer graph-related questions well. Existing solutions to graph-based prompts range from graph serialization to graph transformers. In this work, we show that the use of a parameter-free graph encoder based on Fock space representations, a concept  borrowed from mathematical physics, is remarkably versatile in this problem setting. The simple construction, inherited directly from the theory with a few small adjustments, can provide rich and informative graph encodings, for a wide range of different graphs. We investigate the use of this idea for prefix-tuned prompts leveraging the capabilities of a pre-trained, frozen LLM. The modifications lead to a model that can answer graph-related questions -- from simple graphs to proteins to hypergraphs -- effectively and  with minimal, if any, adjustments to the architecture. Our work significantly simplifies existing solutions and generalizes well to multiple different graph-based structures effortlessly.

---

## 论文详细总结（自动生成）

# FoGE: Fock Space 启发的图提示编码 —— 论文核心分析

## 1. 核心问题与整体意义
- **研究动机**：大型语言模型（LLM）能够通过提示理解结构化数据（如图），但目前的方法主要依赖**图序列化**或**专用图编码器（GNN / 图Transformer）进行前缀调优**。
- **核心问题**：这些专用编码器通常需要大量训练，结构固定，难以适配多样化的图类型（简单图、蛋白质图、超图等）。任务更换时往往需要重新设计模型。
- **整体含义**：本文试图回答：“能否设计一种**无参数、通用、信息丰富**的图表示，并能通过轻量适配器注入到冻结的 LLM 中，以实现对各种图的有效提示和推理？” 该方法将大幅降低计算和工程成本，同时保持或超越专用模型的性能。

## 2. 方法论：关键技术与流程
### 2.1 理论基础：从 Clifford 代数到 Fock 空间
- 利用图的**关联矩阵**和 Hodge 拉普拉斯算子，将图元素（节点、边、面）映射到 Clifford 代数中的**多向量**。
- 通过 Dirac 算子与拉普拉斯的关系，将图的代数结构表达为 **Fock 空间中的产生/湮灭算符**（创建操作增加阶数，湮灭操作降低阶数）。

### 2.2 实践近似：向量符号架构（VSA）
- 为了避免 Fock 空间实现时的指数维爆炸，采用 **VSA** 进行高效近似：
  - 每个**概念**（节点）分配一个高维随机向量（近正交）。
  - **绑定操作（⊗）**：用循环卷积（频域点乘）模拟产生算符。
  - **叠加操作（⊕）**：元素级加法。
- 这组操作保证了**无损表示**：可通过逆向量恢复出所有边。

### 2.3 图编码公式（FoGE 核心）
- **简单图**：  
  \( g = (s \otimes p_n) \oplus \bigoplus_{(i,j)\in E} (p_i \otimes p_j) \)  
  （\(s\) 为尺寸向量，\(p_i\) 为节点向量）
- **属性图**：额外叠加 \( \bigoplus_{i\in V} (p_i \otimes a_i) \)。
- **超图**：为每个超边分配唯一向量 \(e_i\)，做多重合并：  
  \( g = (s \otimes p_n) \oplus \bigoplus_{i=1}^{|E|} \left( e_i \otimes \bigotimes_{j \in E_i} p_j \right) \)。

### 2.4 与 LLM 的集成（FoGE-LLM）
- 采用**冻结 LLM**（如 Llama 2 7B），仅训练一个或多个**线性适配器**将图嵌入映射到 LLM 的 embedding 空间，进行**前缀调优**。
- 整个图结构仅使用**1 个 token** 表示，极大减少推断开销。

## 3. 实验设计
### 3.1 数据集与场景
- **图理解**：GraphQA（6 个任务/7 种图生成模型）、GraphReasoning（高级图推理，带节点文本描述）
- **超图**：HyperGraphQA（自行构建，含节点数、边数、度、边存在性任务）
- **蛋白质**：Jaffe（160 万抗体序列）、PPI（24 张人体蛋白互作网络）、OBNB（19 个真实生物网络）
- **分子图**：mol‑HIV（OGB 分子性质预测）
- **亲和性可视化**：SabDab（抗体结构数据库）

### 3.2 对比方法
- **图提示专用模型**：GraphToken（GNN 编码）、GraphLLM（Transformer+GNN，约 100M 参数）
- **上下文学习方法**：零样本/少样本图文本化
- **经典图嵌入/监督方法**：Node2Vec, LapEigMap, GCN, GAT, GCNII, GraphSAGE 等

### 3.3 评估指标
准确率、F1、ROC‑AUC（mol‑HIV）、APOP（OBNB）等。

## 4. 资源与算力
- 冻结 LLM：**Llama 2 (7B)**。
- 训练方式：仅训练线性适配器，利用 **FSDP** 实现了在消费级 GPU 上的训练（如文中指出代码可运行于普通 GPU，但未明确给出 GPU 数量和训练时长）。
- 显存对比：GraphLLM 需 **A100 80GB**；而 FoGE‑LLM 采用无参编码+轻量适配器，推断时间仅 0.031 秒/样本，远低于 GraphLLM（0.052 秒）和 few‑shot（0.54 秒）。

## 5. 实验数量与充分性
- 共展示了 **10+ 张表格** 和多个消融/可视化实验：
  - 基础图属性预测（表1）
  - 分子性质分类 OGB 对标（表2）
  - 生物网络节点标签预测（表3、表4、附录表12）
  - 图提示理解（表5 vs GraphToken）
  - 高级图推理（表6 vs GraphLLM）
  - 超图/蛋白质与 ICL 对比（表7）
  - 推断效率对比（表8）
  - 向量维度消融（图9）
  - 边缘重构能力验证（图7）
- 实验覆盖多种图结构，对比基线全面、公平，验证了方法的通用性和稳定性。

## 6. 主要结论与发现
- **无参图编码足够强大**：只用一层隐藏层的 FFN 就可在节点/边计数、环存在等任务上取得近乎完美的结果。
- **FoGE‑LLM 达到甚至超越专用模型**：在 GraphQA 和 GraphReasoning 上使用单一图嵌入，即可匹配使用节点级/边级嵌入的 GraphToken 或 GraphLLM。
- **跨类型泛化能力强**：超图、蛋白质、分子图均能轻松适配，无需结构调整。
- **计算效率极高**：参数少、推断快，可在资源受限环境下部署。

## 7. 方法亮点
- **无损且通用**：图表示可精确恢复原图，天然支持多种图类型。
- **完全无参**：编码过程无需学习，避免了对特定数据集和任务的过拟合。
- **模块化插拔**：可配合任意文本编码器（如 RoBERTa），处理带文本描述的大规模节点。
- **极低推断开销**：每个图仅占一个 token，不使用 Transformer 二次方依赖，具有强烈的实际应用价值。

## 8. 不足与局限
- **无参编码的固定性**：无法根据特定任务或领域进行微调，当编码信息不足时性能可能低于高效监督模型。
- **超大向量集合的挑战**：当节点数量极大且需要区分性强的向量时，随机生成不再适用，必须接入预训练文本编码器，但这引入了一定的试错选择和外部依赖。
- **绑定操作的近似误差**：VSA 近似实现（循环卷积）在大规模边聚合时可能产生干扰或表示精度下降（论文提到超图聚合不稳定已用替代方法）。
- **评估的绝对性能**：在部分任务（如蛋白质链数预测）上，FoGE‑LLM 的准确率仍不高（约 13%），需更多研究来提升 LLM 对复杂图结构的深度理解。

（完）
