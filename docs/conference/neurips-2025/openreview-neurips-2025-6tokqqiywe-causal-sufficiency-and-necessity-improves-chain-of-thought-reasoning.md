---
title: Causal Sufficiency and Necessity Improves Chain-of-Thought Reasoning
title_zh: 因果充分性与必要性提升思维链推理
authors: "Xiangning Yu, Zhuohan Wang, Linyi Yang, Haoxuan Li, Anjie Liu, Xiao Xue, Jun Wang, Mengyue Yang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=6tOKqqiyWE"
tags: ["query:pe"]
score: 9.0
evidence: 引入因果充分性与必要性分析，改进思维链推理步骤，增强逐步推理质量。
tldr: 思维链推理面临中间步骤不充分或不必要的挑战。本文从因果视角出发，定义推理步骤的充分性与必要性，提出基于因果概率的评估与优化方法。实验表明，该方法能识别并增强关键推理步骤，从而稳定提升大语言模型的复杂推理性能，为设计更可靠的思维链提示提供了理论工具。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-6tokqqiywe/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1415, \"height\": 511, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6tokqqiywe/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1430, \"height\": 584, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6tokqqiywe/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1397, \"height\": 908, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6tokqqiywe/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1005, \"height\": 603, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6tokqqiywe/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1162, \"height\": 392, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6tokqqiywe/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1161, \"height\": 395, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6tokqqiywe/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1163, \"height\": 389, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6tokqqiywe/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1164, \"height\": 394, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-6tokqqiywe/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1441, \"height\": 1101, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6tokqqiywe/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1458, \"height\": 575, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6tokqqiywe/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1452, \"height\": 778, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6tokqqiywe/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1448, \"height\": 875, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6tokqqiywe/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 700, \"height\": 382, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6tokqqiywe/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1591, \"height\": 277, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6tokqqiywe/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 724, \"height\": 223, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6tokqqiywe/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1285, \"height\": 678, \"label\": \"Table\"}]"
motivation: 思维链提示的中间步骤常缺乏充分支撑或包含冗余，影响推理可靠性。
method: 构建因果框架，定义并量化推理步骤的充分性与必要性，用于评估和优化思维链。
result: 方法能有效筛选关键步骤，改善思维链质量，在多个推理任务上提升LLM准确率。
conclusion: 因果分析为思维链优化提供了新视角，有助于构建更严谨的逐步推理提示。
---

## Abstract
Chain-of-Thought (CoT) prompting plays an indispensable role in endowing large language models (LLMs) with complex reasoning capabilities. However, CoT currently faces two fundamental challenges: (1) Sufficiency, which ensures that the generated intermediate inference steps comprehensively cover and substantiate the final conclusion; and (2) Necessity, which identifies the inference steps that are truly indispensable for the soundness of the resulting answer. We propose a causal framework that characterizes CoT reasoning through the dual lenses of sufficiency and necessity. Incorporating causal Probability of Sufficiency and Necessity allows us not only to determine which steps are logically sufficient or necessary to the prediction outcome, but also to quantify their actual influence on the final reasoning outcome under different intervention scenarios, thereby enabling the automated addition of missing steps and the pruning of redundant ones. Extensive experimental results on various mathematical and commonsense reasoning benchmarks confirm substantial improvements in reasoning efficiency and reduced token usage without sacrificing accuracy. Our work provides a promising direction for improving LLM reasoning performance and cost-effectiveness. The code will be publicly available upon acceptance at: https://anonymous.4open.science/r/causalmath-1CEF.

---

## 论文详细总结（自动生成）

好的，作为资深学术论文分析助手，我将基于提供的论文内容，为您生成一份结构化、深入、客观的中文总结。

### **1. 研究动机与核心问题**

本论文聚焦于改善大语言模型在**思维链推理**中的两个根本性挑战：
*   **充分性不足**：生成的中间推理步骤可能不完整，无法全面支撑最终结论，导致推理失败。
*   **必要性缺失**：生成的推理链中包含冗余或无关步骤，引发“过度思考”，这不仅浪费计算资源，甚至可能损害推理准确性。

论文的核心洞见在于，现有的CoT优化方法多依赖相关性指标（如注意力权重、似然分数），而未能从**因果性**角度严谨评估每个推理步骤对最终答案的逻辑贡献。因此，论文提出引入**因果充分性与必要性**的框架，旨在系统性地构建既**精简**又**准确**的思维链，以提升大模型的推理效率与可靠性。

### **2. 方法论：基于因果概率的思维链优化**

论文的方法论核心是引入因果推断中的**充分因与必要因概率**概念，并将其应用于思维链的逐步评估与优化。其关键思想与技术流程如下：

*   **核心概念定义**：论文基于反事实框架，在推理步骤层面形式化定义了：
    *   **充分性概率**：衡量完整的推理链`S`是否足以产生正确答案`y`。
    *   **必要性概率**：量化某个特定推理步骤`s_t`对于产生正确答案是否必不可少。
    *   **充分因与必要因概率**：衡量一个步骤既是正确答案的充分条件又是必要条件的总概率。
*   **两步因果优化策略**：由于直接最大化PNS计算量过大，论文提出了一种两阶段优化策略：
    1.  **第一步：提升链级充分性**：首先确保整条思维链能得到正确答案。
    2.  **第二步：节点级必要性剪枝**：在充分性满足后，逐步骤评估其必要性，并移除不必要的步骤。

*   **PNS估计算法**：论文设计了**算法1**来系统化地重构思维链：
    *   对于一个初始思维链，首先通过执行（rollout）验证其充分性。
    *   若充分性为真，则对链中的每个步骤`s_t`执行**反事实干预**：将`s_t`替换为语义不同的变体`\tilde{s}_t`，并使用一个独立的“rollout模型”生成后续推理步骤，形成干预后的新链`S'`。
    *   通过多次（k次）rollout采样，利用验证模型`V`评估新链`S'`的连贯性与正确性。
    *   通过蒙特卡洛方法估算该步骤的PNS值： `PNS(S, s_t) ≈ 1 - (1/k) * Σ V(S^{(i)})`。若PNS值低于阈值α，则认为该步骤不必要，予以剪枝。
*   **应用优化后的思维链**：通过上述算法构建的高质量（高PNS）思维链数据，被用于：
    *   **上下文学习**：作为少样本示例直接嵌入提示词中，引导模型生成更高效、准确的推理。
    *   **监督微调**：作为训练数据对推理型大模型进行微调，使其内化因果性的推理模式。

### **3. 实验设计**

论文设计了详尽的实验来回答两个核心研究问题：方法能否构建出因果充分且必要的CoT数据，以及这些优化数据能否提升模型的推理表现。

*   **数据集与场景**：实验覆盖了不同领域和难度的推理基准测试，以评估方法的鲁棒性。
    *   **数学推理**：**GSM-8k**（小学数学应用题）、**MATH-500**（中等难度数学题）、**AIME**（高难度竞赛题）。
    *   **常识推理**：**CommonsenseQA**（多选常识推断题）。
*   **基线方法**：
    *   **针对RQ1（CoT优化）**：将未经优化的原始CoT与经过PNS优化的版本进行性能比较。
    *   **针对RQ2（应用优化CoT）**：
        *   **上下文学习场景**：将本方法（Ours-ICL）与`Standard CoT`、`Fast-Solve`、`Reduction`（快捷推理）、`Chain-of-Draft`等基线进行对比。
        *   **监督微调场景**：将“因果微调”模型与“原始基础模型”和“非因果微调”模型进行对比。
*   **评估指标**：
    *   **推理效率**：平均**Token长度**和**推理步数**。
    *   **推理准确性**：最终答案的准确率。
    *   **因果性指标**：平均PNS值（评估保留步骤的因果重要性）。
*   **模型配置**：
    *   针对CoT优化任务，使用了Qwen和DeepSeek系列的不同组合作为基础模型和rollout模型。
    *   针对ICL任务，使用了`Qwen-2.5-72B-Instruct`、`DeepSeek-V3`、`Llama-3.1-8B-Instruct`等非推理模型。
    *   针对SFT任务，对`DeepSeek-R1-Distill-Qwen-1.5B`、`DeepScaleR-1.5B-Preview`、`Phi-4-mini-reasoning`等推理型小模型进行了微调。

### **4. 资源与算力**

论文在附录中明确提及了SFT实验阶段的算力配置：
*   **监督微调**：所有SFT训练均在**8块NVIDIA RTX 3090 GPU**上完成，使用了ZeRO-3优化器进行显存优化，并以bf16混合精度进行训练。训练总周期为3个epoch，上下文最大长度为16,384个token。这说明该方法的SFT部分在当前主流研究硬件上是可行的。

对于ICL和CoT优化阶段，论文未明确说明所用GPU型号及数量。

### **5. 实验数量与充分性**

本论文实验设计**相当充分**，通过大量对比和多维度评估有力地支撑了其论点。
*   **数据集组合**：覆盖了4个不同类型和难度的数据集，从简单常识到高难奥数，确保了跨域泛化性评估。
*   **实验范式多样**：同时评估了在**CoT优化、上下文学习、监督微调**三种不同范式下的性能，验证了方法在数据构建和模型增强两个层面的有效性。
*   **模型组合丰富**：实验涉及Qwen、DeepSeek、Llama、Phi等多个主流开源模型家族的多种型号，验证了方法的模型无关性。
*   **基线对比全面**：与多达4种以上的不同策略基线进行对比，公平地展示了本方法在准确率和效率上的综合优势。
*   **消融与分析实验**：除主要结果外，还包括了PNS值变化的分析、不同rollout策略的比较、验证器精度的分析以及人类对推理质量的人工评估（84%的优化CoT被判定为充分且必要），这些共同加深了对方法有效性的理解。

整体来看，实验设计客观、公平、对比充分，结论具有高度可信性。

### **6. 主要结论与发现**

*   **成功整合PNS框架**：本研究成功将因果PNS理论融入到CoT推理中，为推理步骤的评估提供了一个严谨的量化工具。
*   **显著的效率与准确性提升**：PNS优化能够系统性地剪除冗余推理步骤，在多个数学和常识推理基准上，**大幅减少Token使用量（通常减少50%以上）和推理步数，同时保持甚至提升准确率**。
*   **优化的CoT是高价值监督信号**：用PNS筛选后的小型高质量数据集进行SFT（1,229条数据），也能让推理模型产生更精简、更准确的推理链，证明了该方法能以较低成本重塑模型的推理模式。
*   **因果性原则是关键**：实验证明，专注于步骤的**因果贡献**（充分与必要），比单纯追求简洁或依赖相关性剪枝更有效，能产生更可靠、可解释的思维链。

### **7. 优点与亮点**

*   **理论创新性强**：首次将因果PNS理论系统性地应用于LLM推理步骤的内部评估，是因果推断与XAI领域的前沿结合。
*   **方法论扎实**：该方法建立在严谨的定义和数学公式之上，提出的算法具有清晰的理论基础，并且模型无关，具有广泛的适用性。
*   **问题导向明确**：直击CoT“过度思考”和“推理不足”的实际痛点，将解决方案落地于对推理链的重构上，具有很强的实践意义。
*   **实验设计全面**：实验覆盖了多种任务、模型和实验范式，消融研究和个人工评估确保了结论的可靠性和深度。

### **8. 不足与局限**

*   **高复杂性任务挑战**：论文坦诚在AIME这类高难度竞赛题上绝对性能较低，且优化效果存在瓶颈，固定的剪枝阈值α可能是原因之一。
*   **PNS计算开销**：算法1的PNS估算过程计算复杂性为`O(k·n²)`（k为采样次数，n为推理步数），这涉及多次模型调用，导致优化CoT的**单次生成成本较高**。尽管论文指出这是一次性支出，但在构建大规模数据集时仍是一个挑战。
*   **对生成质量依赖性强**：方法的效果高度依赖于rollout模型生成反事实后续推理步骤的能力以及验证模型的评估准确性。低质量的干预或评估会直接影响PNS估计和最终剪枝效果。
*   **阈值依赖**：剪枝阈值α对最终效果有决定性影响，论文未深入探讨其最优设置策略，可能在不同任务中需要人工调整。

（完）
