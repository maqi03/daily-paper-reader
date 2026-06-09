---
title: Scaling Code-Assisted Chain-of-Thoughts and Instructions for Model Reasoning
title_zh: 为模型推理扩展代码辅助的思维链和指令
authors: "Honglin Lin, Qizhi Pei, Zhuoshi Pan, Yu Li, Xin Gao, Juntao Li, Conghui He, Lijun Wu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=b7bOWd3kUL"
tags: ["query:pe"]
score: 9.0
evidence: 代码辅助自动合成多样且可验证的思维链推理数据
tldr: 现有CoT方法存在生成不可控、质量不足和多样性有限等问题，基于代码的方法通常局限于数学问题。提出Caco框架，利用代码辅助自动合成高质量、可验证的多样化指令-思维链数据，将推理步骤转化为可执行代码，显著提升了推理路径的可靠性和任务通用性，实现了可扩展的推理能力提升。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-b7bowd3kul/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1151, \"height\": 367, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-b7bowd3kul/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1263, \"height\": 733, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-b7bowd3kul/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1307, \"height\": 652, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-b7bowd3kul/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1282, \"height\": 431, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-b7bowd3kul/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1440, \"height\": 429, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-b7bowd3kul/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1352, \"height\": 575, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-b7bowd3kul/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 68, \"height\": 100, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-b7bowd3kul/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1443, \"height\": 1108, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-b7bowd3kul/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1448, \"height\": 227, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-b7bowd3kul/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1161, \"height\": 154, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-b7bowd3kul/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1444, \"height\": 331, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-b7bowd3kul/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1009, \"height\": 344, \"label\": \"Table\"}]"
motivation: 现有思维链方法生成质量参差、多样性不足，且基于代码的方法难以扩展。
method: 提出Caco框架，通过代码辅助自动合成可验证、多样化的指令-思维链数据。
result: 在多个任务上生成高质量推理路径，提升模型推理性能与通用性。
conclusion: 代码辅助的自动化CoT合成突破现有局限，为可扩展推理提供新范式。
---

## Abstract
Reasoning capability is pivotal for Large Language Models (LLMs) to solve complex tasks, yet achieving reliable and scalable reasoning remains challenging. While Chain-of-Thought (CoT) prompting has become a mainstream approach, existing methods often suffer from uncontrolled generation, insufficient quality, and limited diversity in reasoning paths. 
Recent efforts leverage code to enhance CoT by grounding reasoning in executable steps, but such methods are typically constrained to predefined mathematical problems, hindering scalability and generalizability. 
In this work, we propose \texttt{Caco} (Code-Assisted Chain-of-ThOught), a novel framework that automates the synthesis of high-quality, verifiable, and diverse instruction-CoT reasoning data through code-driven augmentation. Unlike prior work, \texttt{Caco} first fine-tunes a code-based CoT generator on existing math and programming solutions in a unified code format, then scales the data generation to a large amount of diverse reasoning traces. Crucially, we introduce automated validation via code execution and rule-based filtering to ensure logical correctness and structural diversity, followed by reverse-engineering filtered outputs into natural language instructions and language CoTs to enrich task adaptability. This closed-loop process enables fully automated, scalable synthesis of reasoning data with guaranteed executability. 
Experiments on our created \texttt{Caco}-1.3M dataset demonstrate that \texttt{Caco}-trained models achieve strong competitive performance on mathematical reasoning benchmarks, outperforming existing strong baselines. Further analysis reveals that \texttt{Caco}’s code-anchored verification and instruction diversity contribute to superior generalization across unseen tasks. Our work establishes a paradigm for building self-sustaining, trustworthy reasoning systems without human intervention.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将以 Markdown 格式对这篇论文进行结构化、深入且客观的总结。

### 论文深度分析总结

#### 1. 研究动机与核心问题
*   **核心问题**：当前主流的大语言模型（LLM）链式思维（CoT）推理方法存在三大固有缺陷：**不可验证性**（自然语言推理步骤易出错且无法自动检查）、**可扩展性差**（高质量 CoT 数据依赖昂贵的人工标注）以及**推理路径多样性有限**。
*   **现有限制**：近年来虽有研究尝试用代码增强 CoT，将推理步骤”落地”为可执行代码以提供验证，但这些方法普遍局限于**预定义好的数学问题**，缺乏向其他任务和新问题泛化的能力，同样面临可扩展性瓶颈。
*   **研究动机**：本文旨在提出一个通用框架，能够**自动化、可扩展地合**成高质量、可验证且多样化的推理数据，从而突破现有方法的限制，构建无需人工干预、自我进化的可信推理系统。

#### 2. 方法论：Caco 框架
Caco 的核心思想是”**代码辅助的思维链**”，通过一个闭环流程，利用代码作为媒介来自动生成和筛选高质量的指令-推理数据。

*   **第一阶段：统一 Code CoT**
    *   **核心思想**：将数学和算法问题的解决方案，统一重写为一种**标准化的、可执行的结构化 Python 代码模板**。该模板会定义输入（`input`字典）、调用核心逻辑函数、并将结果赋值给`output`变量并打印。
    *   **操作步骤**：使用一个通用的大模型（`G_p->c`）将不同来源和形式的问题与答案，转换为统一的代码格式。然后通过**执行代码并验证输出结果**是否正确（`F(c) = a*`）来筛选，保留下高质量的”种子代码 CoT”集合（`C_seed`）。同时，也纳入了算法问题（如排序、动态规划）的代码方案，统一了数学与算法推理的格式。

*   **第二阶段：用 CodeGen 模型规模化扩展 Code CoT**
    *   **核心思想**：训练一个专门的**代码生成模型（CodeGen）**，它不仅学习解决具体问题，而是学习**生成通用推理逻辑模板本身**。
    *   **关键技术与流程**：
        1.  **无条件训练**：仅使用第一阶段生成的纯净代码 CoT（不包含原始问题上下文），通过标准语言模型损失函数（公式1）微调一个基础模型（如 Qwen2.5-Coder-7B），使其掌握统一代码模板的语法结构和逻辑抽象模式。
        2.  **多样性采样**：使用训练好的 CodeGen 模型，通过**温度采样**大规模生成新的代码 CoT 候选集（`C_samp`，约 530 万个）。
        3.  **自动过滤**：对生成的代码进行四项严格过滤：**可执行性**、**执行效率**（10秒超时）、**代码长度**（至少6行有效代码）以及 **AST 语义校验**（确保输入变量被实际使用）。此阶段不要求答案匹配，因为问题尚未生成。过滤后得到约 460 万个高质量代码模板。
    *   **实现两种增强**：CodeGen 模型在采样时既能进行**问题层面的增强**（同一逻辑生成不同情境的问题），也能进行**模式层面的增强**（生成全新的、种子数据中未见的推理结构）。

*   **第三阶段：指令回译与语言 CoT 生成**
    *   **核心思想**：将验证过的代码逻辑，通过一个两阶段过程，逆向还原为自然语言问题和逐步的语言 CoT，并通过双重验证确保两者对齐。
    *   **两阶段 QA 生成流程**：
        1.  **问题生成（`G_c->p`）**：将代码及其输入输出示例提供给一个通用大模型（如 Qwen3-8B），生成对应的自然语言问题（`p'`）。
        2.  **答案生成（`G_p->s`）**：将新生成的**问题**（`p'`）再次输入大模型，生成详细的、逐步的自然语言 CoT 推理过程（`s'`）。这样做是为了避免模型在看到完整代码后（“懒惰模式”）直接生成错误推理。
    *   **双重验证机制**（对应公式2）：
        1.  **答案一致性过滤**：执行代码得到的结果（`Exec(c')`）必须与从语言 CoT 中抽取的最终答案（`Ans(s')`）完全一致。
        2.  **CoT 一致性过滤**：使用大模型判断（`Con(s', c')`）自然语言推理步骤的逻辑与代码逻辑是否一致。
        3.  只保留同时通过两者验证的（`p', s', c'`）三元组。最终构建成约 130 万条高质量数据 `D_final`，即 **Caco-1.3M 数据集**。

#### 3. 实验设计
*   **模型与数据规模**：
    *   **基座模型**：在三个不同级别的 7-8B 模型上进行实验，包括数学专用模型 **DeepSeekMath-7B**、**Qwen2.5-Math-7B** 和通用模型 **LLaMA3-8B**。
    *   **训练数据**：使用 Caco 生成的数据集，包含三种规模：Caco-Seed109K（仅种子数据）、Caco-596K 和 Caco-1.3M。
*   **评估基准（Benchmark）**：
    *   **数学推理**：MATH, GSM8K, CollegeMath, DeepMind-Mathematics, OlympiadBench-Math, TheoremQA。
    *   **领域泛化**：AIME24 (数学), HumanEval+ (代码), ARC-c (科学问答), BBH (逻辑推理), KorBench (逻辑推理), AGIEval (通用知识/科学), MMLU-STEM (科学)。
*   **对比方法**：
    *   **主流数据增强方法**：MetaMath, MMIQC, NuminaMath, RFT, DART-Math, MathFusion。
    *   **强指令微调/强化学习模型**：LLaMA3-8B-Instruct, Qwen2.5-Math-7B-Instruct, DeepSeekMath-7B-RL。

#### 4. 资源与算力
*   **硬件配置**：论文明确指出，生成 **Caco-1.3M 数据集的全过程**均在单台配备 **8块 NVIDIA A100 GPU** 的机器上完成。
*   **各阶段耗时**：
    *   **统一 Code CoT**：处理33.9万样本，耗时 **2 小时**。
    *   **规模化 Code CoT 生成与过滤**：处理530万样本，耗时 **8 小时**。
    *   **问题回译**：处理460万样本，耗时 **6 小时**。
    *   **答案生成**：处理460万样本，耗时 **40 小时**。
    *   **总计**：约 **55 小时**。
*   **模型训练**：模型微调均在**8块 NVIDIA A100 GPU** 上进行，训练 3 个 epoch。

#### 5. 实验数量与充分性
*   **实验数量**：
    1.  **主要结果实验**：在 3 个基座模型上，对比了 3 种数据规模的 Caco 与 6-7 种强基线方法在 6 个数学基准上的表现，构成一个庞大且全面的对比矩阵。
    2.  **多样性分析**：通过 t-SNE 可视化和 K-Means 聚类 12 个类别来分析生成问题的分布和主题多样性。
    3.  **可扩展性分析**：通过改变训练数据量（109K, 300K, 596K, 1.3M）展示了性能与数据规模的线性增长关系。
    4.  **消融实验**：定量分析了”代码验证”机制对数据质量（可解率、正确率）和最终模型性能的提升。
    5.  **泛化性实验**：评估了 Caco 模型在**数学之外**的 6 个不同领域基准（代码、科学、逻辑）上的表现，并展示了 Caco 方法在**科学推理**领域的应用可行性。
*   **充分性与公平性**：实验设计**非常全面、客观且公平**。作者在三个不同能力的基座模型上进行了验证，证明了方法的鲁棒性。对比基线既包括数据合成方法，也包括强力的开源指令模型和强化学习模型，评价维度全面。关键结论（如验证的作用、规模化的效果）均有对应实验支持。

#### 6. 主要结论与发现
*   **性能优越**：在使用相同基座模型时，Caco 训练出的模型在数学推理任务上**一致且显著地超过**所有对比基线方法。例如，Caco-1.3M 训练的 LLaMA3-8B，平均分（57.3）远超 DartMath（39.7）。
*   **强大的可扩展性**：模型性能随着 Caco 合成数据量的增长而**持续稳定提升**，证明了该框架具备大规模数据合成的能力与价值。
*   **领域可泛化性**：Caco 不仅提升了数学能力，其训练的模型在**代码、科学、逻辑推理等非数学任务上也表现出显著提升**，证明了其生成数据蕴含了通用的推理能力。Caco 框架本身也被成功应用于科学推理领域，展现出方法论层面的通用性。
*   **验证是关键**：代码辅助的自动验证机制是 Caco 成功的关键组件，有效提升了数据质量和最终模型性能。

#### 7. 创新点与优点
*   **闭环自动化范式**：构建了从”代码生成 -> 代码验证 -> 问题回译 -> 双重校验”的全自动数据合成闭环，彻底摆脱了对人工标注的依赖，是一个重大的方法论贡献。
*   **统一代码作为抽象层**：将问题和解决方案抽象为统一的代码模板，这一设计精巧地实现了**逻辑内核与语言外壳的解耦**，使得生成既具有深层结构多样性（模式级增强），又具有表层形式多样性（问题级增强）。
*   **双重验证保障质量**：提出的”答案一致性”和”CoT 一致性”双重验证，强有力地保证了合成数据中指令、语言推理过程和代码逻辑三者之间的严格对齐，质量远超简单的蒸馏或自改进方法。
*   **无条件的 CodeGen 模型**：训练 CodeGen 时不依赖问题输入，迫使其学习更抽象、更可泛化的推理模式，而非”问题-代码”对的简单记忆，这是实现模式级增强的巧思。
*   **成本效益高**：约 55 小时即可在 8xA100 上生成 130 万条高质量数据，成本可控，易于社区复现和采纳。

#### 8. 不足与局限
*   **生成任务类型的局限**：论文承认，Caco 目前的有效性受限于其种子数据中使用的**模板和问题类型**。对于高度创新、非结构化的非常见问题类型，可能难以生成高质量的推理路径。
*   **代码未直接用于最终训练**：验证后的代码 CoT 仅作为数据筛选和保证质量的媒介，**并未直接包含在最终用于训练语言模型的指令数据中**。如何有效利用这些代码来增强训练过程本身，是尚未探索的环节。
*   **自然语言回译的保真度风险**：将精确的代码逻辑逆向还原为自然语言时，可能存在**细节丢失或语义简化**的问题，导致最终的语言 CoT 不如原始代码逻辑丰富和严谨。
*   **实验覆盖的局限性**：
    *   **模型的局限性**：实验仅集中在 7-8B 参数规模的模型，缺乏在更大规模模型（如 30B、70B）或最新的混合专家（MoE）模型上的验证。
    *   **错误分析的缺失**：论文虽然展示了强大的整体性能，但缺少对失败案例的定性分析，例如在哪些类型的问题上 Caco 模型仍会出错，错误模式是什么。
    *   **统计误差报告缺失**：作者明确指出因资源限制未报告实验结果的误差棒或标准差，使得性能提升的统计显著性无法精确评估。

（完）
