---
title: "AdaCoT: Pareto-Optimal Adaptive Chain-of-Thought Triggering via Reinforcement Learning"
title_zh: AdaCoT：基于强化学习的帕累托最优自适应思维链触发
authors: "Chenwei Lou, Zewei Sun, Xinnian Liang, Meng Qu, Wei Shen, Yuntao Li, Wenqi Wang, Qingping Yang, Shuangzhi Wu"
date: 2025-05-11
pdf: "https://openreview.net/pdf?id=obXGSmmG70"
tags: ["query:pe"]
score: 9.0
evidence: AdaCoT自适应决定何时使用思维链提示，通过帕累托优化平衡性能与成本
tldr: 针对思维链提示计算成本高且对简单查询冗余的问题，本文提出AdaCoT，将自适应触发思维链建模为帕累托优化问题，通过强化学习动态决定何时使用思维链。实验表明该方法能在保持推理性能的同时大幅减少计算开销，实现了效率与效果的自适应平衡。
source: NeurIPS-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-obxgsmmg70/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1154, \"height\": 821, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-obxgsmmg70/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1212, \"height\": 422, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-obxgsmmg70/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1460, \"height\": 511, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-obxgsmmg70/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1361, \"height\": 267, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-obxgsmmg70/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1182, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-obxgsmmg70/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1445, \"height\": 319, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-obxgsmmg70/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1510, \"height\": 2253, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-obxgsmmg70/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1539, \"height\": 2378, \"label\": \"Table\"}]"
motivation: CoT提示普遍应用但计算成本高，简单查询也生成长推理链。
method: 提出AdaCoT，将自适应推理建模为帕累托优化，利用强化学习决定何时触发CoT。
result: 实验显示该方法在保持性能的同时显著降低计算开销。
conclusion: AdaCoT实现了推理效率与性能的自动平衡，为按需使用CoT提供了可行方案。
---

## Abstract
Large Language Models (LLMs) have demonstrated remarkable capabilities but often face challenges with tasks requiring sophisticated reasoning. While Chain-of-Thought (CoT) prompting significantly enhances reasoning, it indiscriminately generates lengthy reasoning steps for all queries, leading to substantial computational costs and inefficiency, especially for simpler inputs. To address this critical issue, we introduce AdaCoT (Adaptive Chain-of-Thought), a novel framework enabling LLMs to adaptively decide when to invoke CoT. AdaCoT framed adaptive reasoning as a Pareto optimization problem that seeks to balance model performance with the costs associated with CoT invocation (both frequency and computational overhead). We propose a reinforcement learning (RL) based method, specifically utilizing Proximal Policy Optimization (PPO), to dynamically control the CoT triggering decision boundary by adjusting penalty coefficients, thereby allowing the model to determine CoT necessity based on implicit query complexity. A key technical contribution is Selective Loss Masking (SLM), designed to counteract decision boundary collapse during multi-stage RL training, ensuring robust and stable adaptive triggering. Experimental results demonstrate that AdaCoT successfully navigates the Pareto frontier, achieving substantial reductions in CoT usage for queries not requiring elaborate reasoning. For instance, on our production traffic testset, AdaCoT reduced CoT triggering rates to as low as 3.18% and decreased average response tokens by 69.06% on APP, while maintaining high performance on complex tasks. This substantial token decrease directly translates to a significant reduction in inference computational load. AdaCoT pioneers adaptive CoT triggering, offering a practical and principled solution for developing more efficient, responsive, and cost-effective LLMs, particularly crucial for interactive and resource-sensitive applications.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将使用中文、以 Markdown 形式，对给定的论文《AdaCoT: Pareto-Optimal Adaptive Chain-of-Thought Triggering via Reinforcement Learning》进行结构化、深入且客观的总结。

### **1. 论文的核心问题与整体含义 (研究动机和背景)**

*   **核心问题**：当前大语言模型（LLM）在应用思维链（Chain-of-Thought, CoT）提示时存在“一刀切”的问题。无论是复杂的推理任务还是简单的常识问答，模型都会生成冗长的推理步骤，这导致了巨大的计算资源浪费和高昂的推理成本，尤其是在对延迟敏感和资源受限的应用中。
*   **整体含义**：论文旨在探索一种更高效的推理方式，即让 LLM **自适应地决定何时需要触发 CoT**。其核心目标是在保持模型高性能（尤其是复杂任务上）的同时，最大限度地减少在简单查询上不必要的 CoT 使用，从而在模型性能和推理成本之间取得最佳平衡。

### **2. 论文提出的方法论：核心思想与关键技术细节**

*   **理论框架：帕累托优化 (Pareto Optimization)**
    *   将自适应推理问题形式化为一个多目标优化问题，目标有两个：最大化模型性能 `P(θ)` 和最小化思维链触发率 `T(θ)`。
    *   通过公式 `θ* = arg max θ {λP * P(θ) − λT * T(θ)}` 来寻找帕累托前沿，即在给定性能下成本最低，或在给定成本下性能最高的参数配置。这为后续的强化学习训练提供了原则性的指导。

*   **训练流程：AdaCoT Training Pipeline**
    *   **第一阶段：监督微调预热 (SFT Warm-up)**
        *   **数据准备**：利用一个辅助模型，根据预定义的“原则引导评估”（如查询复杂性、所需推理深度、领域）对训练数据进行标注，判断每个样本是否需要 CoT。
        *   **数据格式**：需要 CoT 的样本，其回答结构为 `<think>推理步骤</think>答案`；不需要 CoT 的样本，结构为 `<think></think>答案`。这种方式统一了输出格式，并让模型初步学习区分何时使用 CoT。
    *   **第二阶段：基于强化学习的自适应控制 (RL-based Adaptive Control)**
        *   **算法**：使用近端策略优化（PPO）算法。
        *   **奖励函数设计**：核心在于精心设计的奖励函数 `R(x, r) = Rbase(x, r) - α1 * Pmiss(x, r) - α2 * Pover(x, r) - γ * Pfmt(r)`。
            *   `Rbase`：基础质量奖励。
            *   `Pmiss`：对“遗漏推理”（应该用 CoT 但没用）的惩罚项，由系数 `α1` 控制。
            *   `Pover`：对“过度推理”（不该用 CoT 却用了）的惩罚项，由系数 `α2` 控制。
            *   `Pfmt`：格式错误惩罚。
        *   **动态调整**：通过调节 `α1` 和 `α2` 的惩罚系数，可以动态控制模型的 CoT 触发决策边界，从而探索性能与成本之间的不同权衡点（即帕累托前沿）。

*   **关键技术贡献：选择性损失掩码 (Selective Loss Masking, SLM)**
    *   **解决的核心痛点**：“决策边界崩塌” (Decision Boundary Collapse)。在多阶段强化学习训练中，尤其是当遇到 CoT 分布严重倾斜的数据集（如数学题集，几乎总是需要 CoT）时，模型会遗忘先前学到的自适应能力，退化为“总是”或“从不”使用 CoT 的单一模式。
    *   **技术实现**：SLM 旨在保护“决策令牌”（定义为 `<think>` 标签后的第一个令牌）。在 PPO 的损失计算中，通过公式 `LSLM = Σ k≠kdecision ℓk`，**显式地屏蔽掉该决策令牌的损失贡献**。这防止了有偏数据集对决策边界的破坏，稳定了自适应触发能力。

### **3. 实验设计**

*   **基座模型**：内部参数量为 15B/150B 的混合专家（MoE）模型。
*   **评估基准**：
    *   **综合基准**：使用 15 个多样化的开源基准数据集，包括 LiveBench、MMLU Pro、SuperGPQA、AIME24/25、MATH、LiveCodeBench、SWE-bench Agentless、SimpleQA 等，涵盖数学、代码、知识、推理等多个领域。
    *   **自定义日常查询集**：一个包含 1000 条提示的高质量、平衡的测试集，用于精准评估 CoT 触发决策的正确性，标签经人工核验。
    *   **生产环境流量测试集**：用于评估在真实用户场景下的效率提升，如平均响应 Token 数和 CoT 触发率。
*   **对比基线**：
    *   **Full CoT SFT Baseline**: 经 SFT 后总是生成 CoT 的模型。
    *   **Full CoT RL Baseline**: 在 Full CoT SFT 基础上经 RL 训练，总是生成 CoT 的模型。
    *   **No CoT SFT Baseline**: 经 SFT 后从不生成 CoT 的模型。
    *   **No CoT RL Baseline**: 在 No CoT SFT 基础上经 RL 训练，从不生成 CoT 的模型。
    *   **AdaCoT SFT Model**: 仅经过 AdaCoT 的 SFT 阶段，具备基础自适应能力的模型。
*   **主要模型变体**：通过调整惩罚系数 (`α1`, `α2`) 训练了四个 AdaCoT RL 变体 (Exp1-Exp4)，以探索不同的帕累托最优点。

### **4. 资源与算力**

*   **明确说明**：论文在附录 E 的训练与测试细节中明确提到，部分具体的训练资源配置（GPU 型号、数量、训练时长）因“公司保密政策”而**未予公开**。这是一个明显的透明度局限。
*   **已公开信息**：
    *   基座模型规模为 15B/150B MoE。
    *   SFT 阶段使用余弦衰减学习率，峰值为 2e-5，衰减至 2e-6，所有训练样本截断至 32000 tokens。
    *   RL 阶段使用 PPO 算法。
    *   测试时推理温度设为 1.0，top-p 设为 0.7，每个测试样本推理至少 5 次取平均。

### **5. 实验数量与充分性**

*   **实验数量**：
    *   在 **15 个**公开 benchmark 上进行了全面评估，并与 **5 个**基线模型及 **4 个**AdaCoT 变体进行了对比，构成了丰富的性能矩阵。
    *   在 **1000 条**自定义日常查询集上进行了**消融研究**，验证了 SLM 模块、元推理策略（Meta-Reasoning）的有效性。
    *   分别在**移动端和PC端**的生产环境数据上测试了效率，增强了结论的实用性。
    *   探索了**系统提示（System Prompt）控制**实验，用于测试模型的性能上限。
*   **充分性与客观性**：
    *   **充分**：实验设计全面，覆盖了不同复杂度、不同领域的测试集，并从性能、成本、决策准确性、效率等多个维度进行衡量。消融实验充分证明了关键模块（SLM）的必要性。
    *   **客观公平**：对比的基线选取合理，涵盖了从“永远不用”到“一直使用” CoT 的静态策略，清晰地展示了自适应策略的优势。每个测试样本推理 5 次取平均分的方法也增强了结果的稳定性。但由于内部模型和数据未公开，结果的**可复现性受到限制**，这是客观性的一个潜在缺陷。

### **6. 论文的主要结论与发现**

*   **成功探索帕累托前沿**：AdaCoT RL 模型在性能和 CoT 触发率之间实现了有效的权衡。相较于总是使用 CoT 的模型，能以近一半的 CoT 使用率（53.3%）达到相近的分数（62.8% vs. 65.0%）。
*   **显著的效率提升**：在生产环境中，自适应模型能将 CoT 触发率降至极低水平（移动端 3.18%），平均响应 Token 数减少约 69%，直接转化为巨大的推理成本节约。
*   **SLM 的效果**：选择性损失掩码（SLM）被证实是防止决策边界崩塌的关键技术，保证了多阶段 RL 训练的稳定性和自适应性。
*   **自适应不减峰值性能**：通过“始终推理”的系统提示，验证了 AdaCoT 的 RL 训练并未损害模型进行深度推理的潜力，当被强制要求进行 CoT 时，其性能甚至能略优于一直使用 CoT 的 RL 基线。
*   **元推理的潜力**：在 SFT 阶段引入元推理（先评估问题复杂度再决定是否推理）能提升决策 F1 值，并带来用户可通过提示词控制推理行为的“涌现能力”，但其额外的 Token 开销使其不适合作为默认策略。

### **7. 优点：方法或实验设计上的亮点**

*   **新颖的问题形式化**：将自适应推理严谨地建模为帕累托优化问题，为后续的 RL 训练提供了清晰的理论基础。
*   **精巧的RL设计**：通过可调节的惩罚系数（`α1`, `α2`）来动态控制 CoT 的决策边界，是一种简单而有效的机制，使得训练不同权衡点的模型成为可能。
*   **创新的 SLM 技术**：精准地识别并解决了 RL 训练中“决策边界崩塌”这一关键痛点，该技术简单、高效且有坚实的逻辑支撑。
*   **全面的实验设计**：实验不仅停留在学术 Benchmark 上，还引入了模拟真实场景的日常查询集和生产流量测试，多维度地验证了方法的实用价值。
*   **性能上限测试**：通过系统提示（SP）来测试模型的峰值能力，这是一个非常重要的分析角度，有力证明了 AdaCoT 在获得效率的同时并未牺牲模型潜力。

### **8. 不足与局限**

*   **可复现性差**：模型、数据、代码和具体算力均为企业内部资产，完全无法复现，这是最大的局限。
*   **基座模型依赖性强**：研究仅在一个内部 15B/150B MoE 模型上进行，方法在不同规模和架构的开源模型上的泛化能力未知。
*   **二元决策的简化**：目前方法做出的是“用/不用”CoT 的二元决策，未能捕捉到现实世界中推理深度的连续谱系（如：简单推理解析、中等深度推理、复杂多步推理等）。
*   **性能瓶颈**：自适应模型的平均最高分仍略低于“一直使用 CoT”的模型，说明在追求对所有查询的平均最优决策时，可能会牺牲掉少数极难案例的绝对峰值性能。
*   **数据标注的局限性**：初始的 SFT 数据依赖于“原则引导评估”，该方法的准确性和泛化能力依赖于辅助模型能力及原则本身，需要持续迭代。
*   **透明度不足**：未公开训练资源，且对 SFT 和 RL 数据的具体构成、比例等细节披露不足，影响了对其训练动态的深入理解。

（完）
