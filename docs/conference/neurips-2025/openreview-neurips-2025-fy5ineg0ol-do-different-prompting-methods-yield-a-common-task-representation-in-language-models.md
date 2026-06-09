---
title: Do different prompting methods yield a common task representation in language models?
title_zh: 不同的提示方法是否在语言模型中产生共同的任务表示？
authors: "Guy Davidson, Todd M. Gureckis, Brenden Lake, Adina Williams"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=fy5InEg0OL"
tags: ["query:pe"]
score: 6.0
evidence: 提取指令函数向量提升零样本准确率，揭示不同提示类型间共享的任务表示
tldr: 本文探索不同提示方法是否产生共同任务表示，通过将函数向量扩展到指令提示，提取指令函数向量。研究发现示例与指令提示的函数向量相似，能提升零样本任务准确率，表明两种方式共享任务表示机制，为基于原理的提示设计提供了新见解。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1452, \"height\": 566, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1412, \"height\": 405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1337, \"height\": 610, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 724, \"height\": 398, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 689, \"height\": 376, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1446, \"height\": 1120, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1443, \"height\": 539, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1428, \"height\": 154, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1443, \"height\": 555, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1413, \"height\": 406, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1397, \"height\": 407, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1419, \"height\": 410, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1420, \"height\": 410, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 697, \"height\": 399, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1437, \"height\": 403, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1442, \"height\": 408, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1441, \"height\": 408, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1441, \"height\": 408, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1444, \"height\": 407, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 721, \"height\": 1606, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1439, \"height\": 472, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1439, \"height\": 990, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 1438, \"height\": 939, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 1442, \"height\": 1026, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 1439, \"height\": 1021, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 1148, \"height\": 1027, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-027.webp\", \"caption\": \"\", \"page\": 0, \"index\": 27, \"width\": 581, \"height\": 869, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-028.webp\", \"caption\": \"\", \"page\": 0, \"index\": 28, \"width\": 1166, \"height\": 874, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-029.webp\", \"caption\": \"\", \"page\": 0, \"index\": 29, \"width\": 1432, \"height\": 406, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-030.webp\", \"caption\": \"\", \"page\": 0, \"index\": 30, \"width\": 1429, \"height\": 408, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-031.webp\", \"caption\": \"\", \"page\": 0, \"index\": 31, \"width\": 1429, \"height\": 408, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-032.webp\", \"caption\": \"\", \"page\": 0, \"index\": 32, \"width\": 1440, \"height\": 405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-033.webp\", \"caption\": \"\", \"page\": 0, \"index\": 33, \"width\": 724, \"height\": 399, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fy5ineg0ol/fig-034.webp\", \"caption\": \"\", \"page\": 0, \"index\": 34, \"width\": 690, \"height\": 380, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-fy5ineg0ol/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1449, \"height\": 490, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fy5ineg0ol/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1451, \"height\": 1183, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fy5ineg0ol/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1434, \"height\": 2073, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fy5ineg0ol/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1443, \"height\": 539, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fy5ineg0ol/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1447, \"height\": 569, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fy5ineg0ol/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 922, \"height\": 1912, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fy5ineg0ol/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1447, \"height\": 439, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fy5ineg0ol/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1447, \"height\": 794, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fy5ineg0ol/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1516, \"height\": 649, \"label\": \"Table\"}]"
motivation: 不同提示方法（示例与指令）是否产生相似的任务表示尚不清楚。
method: 将函数向量推广到指令提示，提取指令函数向量，比较与示例函数向量的异同。
result: 发现两种方式产生的函数向量相似，能提升零样本准确率。
conclusion: 研究揭示了不同提示方法下共享的任务表示机制，为提示设计提供理论指导。
---

## Abstract
Demonstrations and instructions are two primary approaches for prompting language models to perform in-context learning (ICL) tasks.
Do identical tasks elicited in different ways result in similar representations of the task? An improved understanding of task representation mechanisms would offer interpretability insights and may aid in steering models. We study this through function vectors (FVs), recently proposed as a mechanism to extract few-shot ICL task representations. We generalize FVs to alternative task presentations, focusing on short textual instruction prompts, and successfully extract instruction function vectors that promote zero-shot task accuracy. We find evidence that demonstration- and instruction-based function vectors leverage different model components, and offer several controls to dissociate their contributions to task performance. Our results suggest that different task prompting forms do not induce a common task representation through FVs but elicit different, partly overlapping mechanisms. Our findings offer principled support to the practice of combining instructions and task demonstrations, imply challenges in universally monitoring task inference across presentation forms, and encourage further examinations of LLM task inference mechanisms.

---

## 论文详细总结（自动生成）

好的，下面是根据你提供的论文内容生成的结构化中文总结。

### 论文核心问题与整体含义
本论文的核心研究问题是：**对于同一个任务，采用“示例演示”和“文本指令”这两种不同的提示方法，是否会在大语言模型内部形成相同的任务表示？**
理解这一点对于模型的可解释性、任务引导与机制透明化具有重要意义，也能从原理解释为何在提示中同时使用指令和示例通常能提升模型表现。作者从函数向量的视角切入，系统性地对比了两种主流提示方式在内部机制层面的异同。

### 方法论
论文的核心方法论是对**函数向量**框架的推广。原方法从示例中提取任务表示，作者将其扩展到任意形式的任务提示（尤其是短文本指令）。
- **核心思想**：通过因果中介分析（causal mediation analysis）定位一组注意力头，这些注意力头的平均激活值（针对特定任务）可以作为任务表示。将这个表示作为一个向量加回模型残差流中，就能在无任务提示或误导性提示下仍使模型执行该任务。
- **关键技术细节**：
    1.  **指令生成**：使用更大的模型（如Llama-3.1-405B）根据任务的示例生成多条文本指令。
    2.  **无信息基线构建**：为计算注意力头的因果效应，必须构建不含任务信息的指令基线。论文提出了三种方法：等概率 token 序列采样、真实文本语料匹配、其他任务的指令匹配。
    3.  **函数向量构建**：首先，在模型正确执行任务时，记录下各注意力头在最后 token 上的平均激活值（任务条件激活）。然后，将任务指令替换为无信息基线（如随机 token 序列），计算将每个注意力头的输出替换为任务条件激活值后，模型预测正确结果的概率提升。概率提升最大的前k个注意力头被选出，它们的平均任务条件激活之和即为该任务的指令函数向量。
    4.  **干预方式**：将函数向量作为一个加性项，干预到模型某一中间层的残差流上，以引导模型行为。

### 实验设计
- **数据集/场景**：使用约50个相对简单的自然语言处理任务，如反义词、国家-首都映射、翻译等，任务集延续了原函数向量论文的选择，但排除了一些输出格式过于依赖示例的分类任务。自然语言处理
- **基准模型**：主要评测了Llama-3.2-3B、Llama-3.1-8B及其指令微调版本，辅以Llama-2-7B和OLMo-2-7B等模型，涵盖了基础与后训练（如监督微调基座模型、DPO偏好优化）阶段的多个变体。
- **对比方法**：
    - **核心对比**：从“示例演示”提取的函数向量 vs. 从“文本指令”提取的函数向量。
    - **效果评估**：分别在两种评测设置下检验函数向量效果：
        1.  **匹配设置**：示例函数向量在随机标签的示例提示下评测，指令函数向量在零样本（无任何提示）下评测。
        2.  **不匹配设置**：示例函数向量在零样本下评测，指令函数向量在随机标签示例下评测。
    - **消融与控制实验**：
        -   **联合干预**：同时加上两种函数向量，观察效果变化。
        -   **异构函数向量**：使用指令定位的注意力头搭配示例的平均激活值（反之亦然）来构建函数向量，探究机制的差异。
        -   **跨模型引导**：使用后训练模型的指令函数向量干预其对应的基础模型，检验表示的迁移性。
        -   **追加控制**：使用了最少重要或最低因果效应的注意力头构建函数向量作为对照。

### 资源与算力
- 论文明确提到实验在多个GPU上运行，但**没有具体说明GPU的型号和数量**。只提及使用的是“Volta and Pascal-series GPUs”，且每个实验使用单张GPU即可运行。实验的总计算量保守估计为数千次实验运行，每次从数小时到一天不等。未提供总运行时长或总浮点运算次数的具体估算。

### 实验数量与充分性
- **实验数量巨大**：从统计看，主要的头因果效应计算涉及约12个模型 × 50个任务 × 2种指令长度 × 3种基线 = 3600次作业。后续的评测和控制实验涉及另外数以千计的独立运行。
- **充分性与客观性**：实验设计非常充分和系统。
    - **公平性**：评估在相同的任务和数据划分上进行，结论的得出基于多模型、多任务的平均表现，并配有误差线。
    - **客观性**：通过引入“不匹配评测”设置、异构函数向量控制、最少重要头部对照等多种方法论，确保了对比分析的客观性，从而支撑起“两种提示方式引发不同机制”这一核心结论。

### 主要结论与发现
1.  **方法可行性**：成功将函数向量提取方法从示例推广到文本指令，提取出的指令函数向量能显著提升模型的零样本任务准确率。
2.  **表示的部分重叠而非共同**：示例和指令引发的任务表示并不一致。它们调动了大部分不同的注意力头（只有少数重合），且后训练模型的指令函数向量能更好地引导基础模型，进一步证明了它们是部分重叠的不同机制。
3.  **信息互补**：同时施加两种函数向量比单独施加任何一种效果都更好，表明两种表示包含互补的任务信息。这为结合使用指令和示例提供了原理解释。
4.  **机制不对称**：用指令定位的注意力头和示例的平均激活值构建的“异构”函数向量，其性能优于反向组合。这说明指令的任务推理机制可能利用了在示例推理中仅起辅助作用的一些注意力头。
5.  **后训练的作用**：基础模型难以提取有效的指令函数向量，这一能力主要在后训练的监督微调和偏好优化阶段涌现，且后训练似乎不影响基于示例的函数向量效果。

### 优点
- **方法创新**：创造性地将原本用于示例的函数向量框架推广到零样本文本指令分析，并设计了巧妙的“无信息指令”构建方法来计算因果效应。
- **结论深刻且有实践价值**：明确地揭示了两种核心提示方式在大模型内部机制上的差异和互补性，为常见的“指令+示例”联合提示策略提供了坚实的理论依据。
- **实验设计周密**：通过引入多种不匹配评测、联合干预、异构函数向量以及跨模型引导等多种控制实验，使得论证严谨而系统，结论可靠。

### 不足与局限
- **任务集合有限**：使用的任务相对简单、格式规整，未涉及复杂的、开放式的或更长上下文的自然主义任务（如MMLU或BBH数据集中的任务），这限制了结论的通用性。
- **任务表示方法的单一性**：研究仅聚焦于函数向量这一种任务表示方法，无法断言在其他表示方法（如“任务向量”）下，两种提示方式是否会呈现为共同表示。
- **干预深度的选择**：函数向量的干预深度虽有实践依据，但选择上仍存在一定任意性，最优层选择具有一定启发式性质。
- **模型规模和普适性**：实验主要在3B到8B参数规模的模型上进行，虽然作者引用了其他工作证明函数向量与模型规模存在正相关关系，但未在更大规模模型上直接验证其核心发现，结论是否随模型参数规模变化仍有待检验。

（完）
