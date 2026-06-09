---
title: "SCOUT: Teaching Pre-trained Language Models to Enhance Reasoning via Flow Chain-of-Thought"
title_zh: SCOUT：通过流式思维链让预训练语言模型增强推理
authors: "Guanghao Li, Wenhao Jiang, Mingfeng Chen, Yan Li, Hao Yu, Shuting Dong, Tao Ren, Ming Tang, Chun Yuan"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=eXckZbaYma"
tags: ["query:pe"]
score: 9.0
evidence: 提出流式思维链，一种新颖的分步推理提示范式
tldr: 针对传统思维链依赖中间推理步骤、可扩展性差的问题，提出流式思维链（Flow CoT）范式，将递归推理建模为潜在认知状态的渐进轨迹。无需显式监督即可提升推理性能，实验表明在多个推理任务上优于标准CoT，为提示设计提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-exckzbayma/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1303, \"height\": 809, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-exckzbayma/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1345, \"height\": 348, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-exckzbayma/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 495, \"height\": 413, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-exckzbayma/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 653, \"height\": 572, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-exckzbayma/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 742, \"height\": 519, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-exckzbayma/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1460, \"height\": 865, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-exckzbayma/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1001, \"height\": 217, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-exckzbayma/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1447, \"height\": 279, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-exckzbayma/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1365, \"height\": 132, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-exckzbayma/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1455, \"height\": 805, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-exckzbayma/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1031, \"height\": 725, \"label\": \"Table\"}]"
motivation: 传统CoT方法依赖显式中间步骤，限制扩展性和泛化能力。
method: 提出Flow CoT，将递归推理过程定义为潜在认知状态的连续流动。
result: 在多个推理基准上，Flow CoT优于标准CoT，提升推理性能。
conclusion: 流式思维链有效提升了模型内在推理能力，改进了提示推理方法。
---

## Abstract
Chain-of-Thought (CoT) prompting improves the reasoning performance of large language models (LLMs) by encouraging step-by-step thinking. However, CoT-based methods depend on  intermediate reasoning steps, which limits scalability and generalization. Recent work explores recursive reasoning, where LLMs reuse internal layers across iterations to refine latent representations without explicit CoT supervision. While promising, these approaches often require costly pretraining and lack a principled framework for how reasoning should evolve across iterations.
We address this gap by introducing **Flow Chain-of-Thought (Flow CoT)**, a reasoning paradigm that models recursive inference as a progressive trajectory of latent cognitive states. Flow CoT frames each iteration as a distinct cognitive stage—deepening reasoning across iterations without relying on manual supervision. To realize  this, we propose **SCOUT** (*Stepwise Cognitive Optimization Using Teachers*), a lightweight fine-tuning framework that enables Flow CoT-style reasoning without the need for pretraining. SCOUT uses progressive distillation to align each iteration with a teacher of appropriate capacity, and a cross-attention-based retrospective module that integrates outputs from previous iterations while preserving the model’s original computation flow.
Experiments across eight reasoning benchmarks show that SCOUT consistently improves both accuracy and explanation quality, achieving up to 1.8\% gains under fine-tuning. Qualitative analyses further reveal that SCOUT enables progressively deeper reasoning across iterations—refining both belief formation and explanation granularity. These results not only validate the effectiveness of SCOUT, but also demonstrate the practical viability of Flow CoT as a scalable framework for enhancing reasoning in LLMs.

---

## 论文详细总结（自动生成）

好的，请查收以下对论文《SCOUT: Teaching Pre-trained Language Models to Enhance Reasoning via Flow Chain-of-Thought》的详细中文总结。

### 1. 论文的核心问题与整体含义

*   **研究背景**：现有的大语言模型推理增强方法，如思维链（Chain-of-Thought, CoT）提示，虽然有效，但高度依赖人工标注的、显式的中间推理步骤作为监督信号，这限制了其可扩展性和在新领域的泛化能力。
*   **核心问题**：如何在不依赖显式CoT标注数据和昂贵预训练的情况下，让预训练语言模型（PLM）通过微调即可获得深层次、可迭代优化的内在推理能力？现有的递归推理方法存在两个主要缺陷：
    1.  **监督信号错配**：对所有迭代步骤使用相同的硬标签，忽略了模型在不同迭代阶段具有不同的表征能力和认知功能（早期步骤可能被过强的监督“过度正则化”）。
    2.  **信息融合机制生硬**：简单地复用之前迭代的输出作为输入，可能破坏原有模型的计算流程，难以适配标准微调管线。
*   **整体含义**：本文提出了一种新的推理范式 **“流式思维链”（Flow CoT）**，旨在将递归推理过程建模为一个从浅入深、逐步演进的潜在认知状态轨迹，而非黑箱重复。它提供了一种更结构化、认知科学的替代方案，并展示了其无需预训练即可通过微调实现的潜力。

### 2. 论文提出的方法论

论文的核心贡献是 **SCOUT（Stepwise Cognitive Optimization Using Teachers）**框架，它是一个轻量级的微调框架，用于在预训练语言模型中实例化Flow CoT范式。其关键思想和技术细节如下：

*   **模型架构分解**：将预训练LLM（例如Qwen2.5）在结构上分解为三个功能模块：
    *   **头模块（Head Block）**：`f_head`，负责一次性编码输入提示（Prompt），产生初始潜在状态 `z(0)`。
    *   **递归推理模块（Recursive Block）**：`f_θ`，核心迭代模块。它接收由初始状态 `z(0)` 和上一轮状态 `z(t-1)` 融合后的信息，通过自注意力（Self-Attention）和回溯模块（见下文）进行迭代精炼，生成新的潜在状态 `z(t)`。
    *   **尾模块（Tail Block）**：`f_tail`，负责将最终迭代的潜在状态 `z(T)` 解码为具体输出（如答案文本）。

*   **两大关键机制**：
    1.  **渐进式蒸馏（Progressive Distillation）**：
        *   **核心思想**：为每一次推理迭代 `t` 分配一个能力相匹配的教师模型（Teacher Model）。早期迭代使用较弱的教师模型（如0.5B），后期迭代使用更强的教师模型（如7B），从而让监督信号的难度与模型当前的认知能力相匹配。
        *   **实现方式**：对于每个第 `t` 步产生的学生输出分布 `p_θ(t)`，计算其与对应教师模型输出分布 `q(t)` 之间的 KL 散度损失 `L(t) = KL(q(t) || p_θ(t)) + α * L_hard`，其中 `L_hard` 是可选的硬标签交叉熵损失。这样就避免了早期步骤被一个复杂的终极目标所过度约束。
    2.  **基于交叉注意力的回溯模块（Cross-Attention-based Retrospective Module）**：
        *   **核心思想**：以一种非侵入式的方式，让当前迭代步骤能够选择性地“回顾”并利用上一步的推理痕迹 `z(t-1)`，同时保持对原始问题 `z(0)` 的稳定计算流。
        *   **实现方式**：在递归模块 `f_θ` 中，模型对初始状态 `z(0)` 执行标准的**自注意力（SA）**，以保持对原始输入的专注；同时，将上一状态 `z(t-1)` 视为外部记忆，通过一个额外的**交叉注意力（CA）** 模块来查询和融合相关信息。这种方法无需修改原始输入输出结构，与预训练权重完全兼容。

### 3. 实验设计

*   **数据集与场景**：
    *   **训练数据**：使用一个包含5个多样指令微调数据集的混合语料库进行训练，包括 Alpaca GPT4 (通用指令)、Alpaca CoT (思维链推理)、WikiQA (开放域问答)、CodeAlpaca (代码生成) 和 MathInstruct (多步数学推理)。
    *   **评估基准（Benchmarks）**：在8个涵盖不同推理能力的标准基准上进行评估：
        *   **常识问答**：ARC-Easy, ARC-Challenge, OpenBookQA, TruthfulQA
        *   **多步推理**：GSM8K, MMLU
        *   **阅读理解与对话**：CoQA, GLUE
        *   **代码生成**：MBPP

*   **对比方法**：为隔离递归设计和监督策略的影响，论文将 **SCOUT**（使用3次递归迭代，教师模型按1.5B -> 3B -> 7B递增）与以下基线进行了对比：
    *   **SFT**：标准监督微调，无递归。
    *   **DSFT**：使用单一强教师（7B）进行蒸馏微调，无递归。
    *   **R-SFT**：带递归的硬标签监督（每步都使用相同的地面实况标签）。
    *   **R-Distill-EQ**：带递归的蒸馏，但所有迭代步骤都使用同一个固定的强教师（7B）和相等的损失权重。
    *   **R-Distill-WT**：与R-Distill-EQ类似，但对后期步骤施加更大的损失权重。
    *   **R-SCOUT**：颠倒的SCOUT变体，教师模型顺序为7B -> 3B -> 1.5B，以测试渐进式顺序的重要性。

### 4. 资源与算力

*   **明确信息**：论文明确提到，所有实验在**单张** NVIDIA H20 NVLink GPU (96GB显存) 上完成，搭配Intel Xeon Platinum 8457C CPU和200GB内存。训练采用bf16精度。
*   **未明确信息**：论文没有报告单次实验或全部实验的总训练时长。

### 5. 实验数量与充分性

*   **实验数量**：论文进行了大量的实验，包括：
    *   **主实验结果**：1个主表格（Table 1），对比了SCOUT及其多个变体在8个数据集上、多个递归步数下的性能。
    *   **消融实验**：
        1.  对不同的**回溯模块机制**（Init, Add, CatProj, Gate, ModInj, XAttn）在不同迭代步数下的性能进行了消融研究（Table 2）。
        2.  对模型结构**分区策略**进行了消融分析（Table 5）。
    *   **预实验分析**：通过测量KL散度（Figure 3）验证了不同规模教师模型提供不同强度信号的假设。
    *   **定性分析**：通过词元概率热力图（Figure 4）和推理链路对比（Figure 5）展示了SCOUT如何实现逐步深化的推理。
*   **充分性与公平性**：实验设计较为充分和公平。
    *   **对比全面**：基线设置合理，从无递归的SFT到有递归但监督策略不同的变体，层层递进，能有效隔离出“渐进式蒸馏”和“回溯模块”的贡献。
    *   **评估标准统一**：所有模型使用相同的训练数据、评估框架 (`lm-evaluation-harness`) 和性能指标。
    *   **统计显著性**：主实验结果表格仅报告了均值，未提供多次运行的置信区间或标准差，这是一个不足。但在图3中为KL散度提供了误差带。

### 6. 论文的主要结论与发现

*   **SCOUT有效性**：SCOUT在所有递归方法中表现最佳，且性能随迭代步数增加**单调递增**（从+0.23到+1.05再到+1.81），最终平均准确率最高达到39.03%。
*   **“渐进式”优于“一刀切”**：
    *   单纯递归而不调整监督策略（如R-Distill-EQ）性能会停滞甚至衰退。
    *   仅调整损失权重（R-Distill-WT）效果有限。
    *   颠倒教师模型顺序（R-SCOUT）会导致后期性能崩溃。
    这证明容量匹配的渐进式蒸馏是实现有效深度推理的关键。
*   **回溯模块设计至关重要**：基于交叉注意力（XAttn）的回溯模块是唯一一个在所有迭代步骤中保持性能稳定提升的机制，而其他简单融合策略（如相加、拼接）在深层迭代中性能会急剧下降。
*   **认知精炼可视化**：定性分析证实，SCOUT的迭代并非简单重复，而是在迭代中逐渐修正错误信念（如数学题答案从错误选项转向正确选项），并提升解释的结构化与粒度。

### 7. 优点

*   **概念创新**：提出了“流式思维链”（Flow CoT）范式，为递归推理提供了清晰的认知模型和理论框架，超越了简单的黑箱重复。
*   **实用性强**：SCOUT作为一个纯微调框架，无需昂贵的预训练，只需增加少量交叉注意力模块，与现有预训练LLM和微调管线完全兼容，大大降低了应用门槛。
*   **设计缜密**：“渐进式蒸馏”和“基于交叉注意力的回溯模块”这两个核心设计直击现有递归方法的两大痛点，动机清晰且相互补充。
*   **实验扎实**：通过丰富的对比实验和消融研究,系统性地验证了每个设计组件的有效性，结论有说服力。

### 8. 不足与局限

*   **固定推理步数**：SCOUT使用固定的递归迭代次数 (T=3) 和预先规划好的教师模型顺序，无法根据不同问题的复杂度进行动态调整，可能造成计算冗余或推理不足。
*   **计算开销**：虽然无需预训练，但在推理时需要执行多次递归前向传播，计算成本是单次推理的数倍，论文未充分讨论这在实际推理速度上的开销。
*   **教师模型选择依赖**：方法有效性依赖一组规模分层的教师模型。当资源受限，无法获得多个模型或大型教师模型时，该方法的适用性存疑。
*   **统计稳健性缺失**：主要实验表格中未报告多次运行的误差范围，无法评估性能提升的统计显著性，这是实验严谨性上的一个缺陷。
*   **教师模型偏差**：学生模型通过逐步蒸馏学习大型教师模型，可能会继承甚至放大教师模型中存在的偏见和错误。

（完）
