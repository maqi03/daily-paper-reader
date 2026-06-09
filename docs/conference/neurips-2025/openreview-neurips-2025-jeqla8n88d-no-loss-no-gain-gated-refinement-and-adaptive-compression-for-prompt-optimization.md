---
title: "No Loss, No Gain: Gated Refinement and Adaptive Compression for Prompt Optimization"
title_zh: 不损失则无收获：门控精炼与自适应压缩实现高效提示优化
authors: "Wenhang Shi, Yiren Chen, Shuqing Bian, Xinyi Zhang, Kai Tang, Pengfei Hu, Zhe Zhao, WEI LU, Xiaoyong Du"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=JEqlA8N88d"
tags: ["query:pe"]
score: 10.0
evidence: 提出GRACE框架，通过门控优化和自适应压缩自动进化提示词，稳定高效地提升提示效果。
tldr: 自动提示优化常因生成不稳定和陷入局部最优而效果受限。本文提出GRACE框架，结合门控精炼策略（引入反馈调节门和更新拒绝门）与自适应压缩，实现稳定高效的提示优化。实验表明GRACE在多个任务上显著超越现有自动提示方法，生成的高质量提示有效提升了大语言模型的输出质量。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-jeqla8n88d/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1439, \"height\": 438, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jeqla8n88d/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 677, \"height\": 425, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jeqla8n88d/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 726, \"height\": 316, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jeqla8n88d/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 564, \"height\": 375, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jeqla8n88d/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1433, \"height\": 1031, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jeqla8n88d/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1421, \"height\": 660, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jeqla8n88d/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1453, \"height\": 563, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1441, \"height\": 511, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1465, \"height\": 1060, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 687, \"height\": 290, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 778, \"height\": 749, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1445, \"height\": 303, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1429, \"height\": 830, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 692, \"height\": 393, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1429, \"height\": 399, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1465, \"height\": 903, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1459, \"height\": 2031, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1370, \"height\": 336, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1443, \"height\": 167, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1439, \"height\": 276, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1383, \"height\": 182, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1400, \"height\": 261, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1437, \"height\": 199, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1436, \"height\": 348, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1424, \"height\": 1310, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jeqla8n88d/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1434, \"height\": 515, \"label\": \"Table\"}]"
motivation: 现有自动提示优化方法生成不稳定且易陷入局部最优，导致低效和次优结果。
method: 提出GRACE，集成门控精炼（反馈调节与更新拒绝）和自适应压缩，提升提示优化的稳定性与效率。
result: 在多个基准上，GRACE生成的提示词质量显著优于现有方法，使LLM性能得到稳定提升。
conclusion: GRACE为自动提示进化提供了稳健高效的框架，有效推动提示工程自动化的发展。
---

## Abstract
Prompt engineering is crucial for leveraging the full potential of large language models (LLMs). While automatic prompt optimization offers a scalable alternative to costly manual design, generating effective prompts remains challenging. Existing methods often struggle to stably generate improved prompts, leading to low efficiency, and overlook that prompt optimization easily gets trapped in local optima. Addressing this, we propose GRACE, a framework that integrates two synergistic strategies: Gated Refinement and Adaptive Compression, achieving Efficient prompt optimization. The gated refinement strategy introduces a feedback regulation gate and an update rejection gate, which refine update signals to produce stable and effective prompt improvements. When optimization stagnates, the adaptive compression strategy distills the prompt’s core concepts, restructuring the optimization trace and opening new paths. By strategically introducing information loss through refinement and compression, GRACE delivers substantial gains in performance and efficiency. In extensive experiments on 11 tasks across three practical domains, including BIG-Bench Hard (BBH), domain-specific, and general NLP tasks, GRACE achieves significant average relative performance improvements of 4.7\%, 4.4\% and 2.7\% over state-of-the-art methods, respectively. Further analysis shows that GRACE achieves these gains using only 25\% of the prompt generation budget required by prior methods, highlighting its high optimization efficiency and low computational overhead. Our code is available at https://github.com/Eric8932/GRACE.

---

## 论文详细总结（自动生成）

好的，作为资深学术论文分析助手，我将基于您提供的论文内容，以中文 Markdown 形式生成一份结构化的详细总结。

### 论文核心问题与整体含义 (研究动机与背景)

*   **核心问题**：大语言模型 (LLM) 的性能高度依赖于提示词（Prompt）的质量，但自动提示优化面临两大挑战：1) **优化效率低下**，现有方法（如基于搜索或反思的方法）难以稳定地生成改进的提示，往往需要生成大量候选才能找到有效更新；2) **易陷入局部最优**，优化过程很快停滞，导致性能不再提升，这一现象在现有方法中常被忽视。
*   **研究动机**：为了解决上述不稳定和低效问题，本文提出了一种全新的理念，即通过有策略地**引入信息损失（Information Loss）** 来实现性能增益，从而更加高效、稳定地优化提示词。
*   **整体含义**：论文提出了 **GRACE** 框架，该框架通过“门控精炼”和“自适应压缩”两种协同策略，实现了稳定、高效的提示优化。其核心思想是“No Loss, No Gain”，即通过去除冗余或有害信息，来获得更稳定、更泛化的提示，并跨越局部最优陷阱。

---

### 方法论 (核心思想与关键技术)

*   **核心思想**：GRACE 框架通过交替执行局部精炼和全局重构，在庞大的提示词空间中实现探索与利用的平衡。它将“信息损失”转化为一种提升效率和性能的策略。
*   **关键技术细节**：
    1.  **门控精炼 (Gated Refinement)**: 一种两阶段的信息过滤机制，用于生成稳定的局部更新。
        *   **反馈调节门 (Feedback Regulation Gate)**: 在生成候选更新时，不仅分析失败样本的错误信号，还同时利用成功样本的反馈对这些信号进行**正则化**，以防止过度修正和语义偏移。优化器 LLM (`O`) 会基于当前提示 (`P_t`)、失败与成功样本组成的更新批次 (`B_t`) 来生成候选提示 (`P_c^t`)。
        *   **更新拒绝门 (Update Rejection Gate)**: 候选更新 (`P_c^t`) 会与当前提示 (`P_t`) 一起在验证集上评估。只有当候选更新的性能优于当前提示时，更新才会被接受，否则将被拒绝。公式表示为: `P_{t+1} = argmax_{P∈{P_t, P_c^t}} f(P, D_{val})`。这确保了只有有益的更新信息才会被采纳。
    2.  **自适应压缩 (Adaptive Compression)**: 一种全局重构策略，用于跳出局部最优。
        *   **触发条件**: 当更新被连续拒绝 `K` 次时，表明优化陷入停滞。
        *   **压缩操作**: 优化器 LLM (`O`) 会收到一个元提示 (`m_2`)，要求它将当前的提示词 (`P_t`) 精简，去除冗余、具体案例的细节，抽象出核心的通用指导原则。
        *   **公式表示为**: `P_{t+1} ∼ p_O(P | P_t, m_2), 当 ∑_{j=t-K+1}^{t} I[P_j = P_{j-1}] = K`。
        *   这一步骤重置了优化轨迹，为后续的门控精炼提供了新的起点，有助于**逃离局部最优**，并从信息瓶颈理论的角度提高了提示的泛化能力。

*   **整体流程**：
    算法循环执行 `T` 次迭代。每次迭代首先执行“门控精炼”生成并筛选候选更新；若更新被接受，则替换当前提示；若被连续拒绝 `K` 次，则触发“自适应压缩”产出精简后的提示。整个过程形成一个“精炼-压缩-再精炼”的协同优化循环。

---

### 实验设计 (数据集 / 场景 / Benchmark / 对比方法)

*   **数据集与场景**: 实验覆盖三大领域的 **11 个任务**，以全面验证方法的通用性。
    *   **复杂推理 (BIG-Bench Hard)**: 5个任务（几何形状、显著翻译错误检测、讽刺检测、电影推荐、认知推理）。
    *   **领域专家 (生物医学)**: 3个任务（NCBI 疾病识别、Biosses 句子相似度、MedQA 医学问答）。
    *   **通用 NLP**: 3个任务（TREC 问题分类、Subj 主观性分类、CB 承诺银行逻辑推理）。
    此外，在附录中还补充了在GPT-4.1基座模型上的实验和摘要任务上的实验。
*   **基座模型与优化器**: 被优化的**基座模型 (Base LLM)** 为 DeepSeek-V3-0324 (和 GPT-4.1)；**优化器 LLM (Optimizer LLM)** 为 DeepSeek-R1。
*   **对比方法 (Baselines)**:
    *   **手工提示**: 任务零样本 (Task ZS)、任务少样本 (Task FS)、思维链零/少样本 (CoT ZS/FS)。
    *   **自动优化方法**:
        *   基于搜索的：**EvoPrompt** (进化算法)。
        *   混合型/基于历史的：**OPRO**。
        *   基于反思的：**APO** (文本梯度)、**PromptAgent** (蒙特卡洛树搜索)。

---

### 资源与算力

*   **显式说明**：论文在正文及附录的“实验设置 & 资源”部分明确指出，其所有实验均通过**API 调用**完成，并未使用本地 GPU。
*   **成本分析**: 论文提供了一个基于 API 输入/输出 Token 数量计算的成本对比表（Table 3, Table 11）。结果显示，GRACE 在达到**最优性能 (94.2 分)** 的同时，其总费用（基座模型+优化器模型）仅为 **$2.8**，远低于 PromptAgent 的 $10.5 和 OPRO 的 $8.6，体现了极高的成本效率。

---

### 实验数量与充分性

*   **实验数量与类型**:
    *   **主实验 (Table 1)**: 11 个任务 × 9 种方法对比，展示了全面的性能领先性。
    *   **收敛性分析 (Figure 4)**: 对比不同方法的性能随搜索预算增加的变化曲线，证明了 GRACE 的高效率。
    *   **消融实验 (Figure 5, 6, 7)**:
        *   拆解了“反馈调节门”、“更新拒绝门”、“自适应压缩”三大组件各自的作用。
        *   分析了正负样本比例、压缩触发阈值 (`K`）、最大步数 (`T`) 等关键超参数的影响。
    *   **定性分析 (Table 2)**: 通过案例展示了 GRACE 如何通过“信息损失”（拒绝/压缩）来纠正错误、逃离局部最优。
    *   **跨模型泛化实验 (Table 7)**: 验证了在DeepSeek-V3上优化的提示词迁移到Llama3.3-70B和GPT-4.1上的效果。
    *   **资源/成本分析 (Table 3, Figure 6)**: 对比API成本，指导资源高效的超参数选择。
*   **充分性与公平性判断**: 实验设计**非常充分且客观**。
    *   **公平性**: 所有方法使用相同的基座模型、优化器模型、初始提示和评估函数。搜索预算上限对基线设为300，而GRACE仅设定为80，使得对比结果更具说服力。
    *   **充分性**: 任务选择横跨多领域、多类型。消融实验详尽地证明了每个组件的必要性和`信息损失`概念的有效性。收敛曲线和成本分析从效率和资源角度补充了实验的完整性。

---

### 主要结论与发现

*   **性能显著提升**: GRACE 在 11 项任务上均显著优于所有基线方法，相比最强自动优化方法，在 BBH、领域和通用 NLP 任务上分别平均提升 4.7%、4.4% 和 2.7%。
*   **极致的优化效率**: GRACE 仅需先前方法约 **25%** 的提示生成次数（搜索预算）即可达到更优的性能，从收敛曲线看，它在更少的 API 调用下就能实现快速增长。
*   **"损失"带来"增益"**:
    *   **反馈调节门**: 成功样本的反馈如同正则化器，能够稳定更新过程，防止过度拟合错误样本。
    *   **更新拒绝门**: 拒绝有害或无益的更新是维持稳定上升轨迹的关键。
    *   **自适应压缩**: 是打破局部最优、实现性能二次增长的核心策略。压缩后的提示更简洁、更具泛化性，为后续优化开辟了空间。

---

### 优点 (方法或实验设计亮点)

*   **创新的 "No Loss, No Gain" 理念**: 反直觉地将“信息损失”作为优化工具，通过过滤和压缩实现增益，为解决提示优化中的过拟合和局部最优问题提供了新视角。
*   **高效的两阶耦合架构**: 门控精炼（局部利用）与自适应压缩（全局探索）的协同设计非常巧妙，使整个优化过程变得极其高效和稳定，生成的提示词质量极高。
*   **扎实且全面的实验验证**: 实验设计极为严谨，不仅覆盖多领域任务，还通过详尽的消融实验、成本分析和跨模型迁移分析，充分证明了方法的有效性、高效性和泛化性。
*   **资源消耗极低**: 相比于需要大量抽样的方法（如MCTS），GRACE 的单步生成和拒绝采样策略极大地降低了 API 调用成本，实用性很强。

---

### 不足与局限

*   **缺乏误差线**: 由于 API 成本高昂，论文没有进行多次随机实验来报告标准差或置信区间，这在一定程度上降低了统计严谨性。
*   **对优化器 LLM 的依赖性**: 方法的效果很大程度上依赖于优化器 LLM 的推理和反思能力。特别是自适应压缩步骤的效果，取决于 LLM 能否精确地抽象和去除冗余信息。虽然附录测试了对不同元提示（Meta-Prompt）的敏感性，但优化器模型能力本身仍是潜在瓶颈。
*   **对特定领域知识的局限性**: 论文在局限部分指出，对于需要高度专业领域知识（如 MedQA）的任务，GRACE 的提升相对有限。这是因为优化器和基座模型本身可能就缺乏相关知识，这是当前基于 LLM 系统的普遍限制，而非 GRACE 架构特有的缺陷。
*   **安全风险**: 论文承认，任何高效的自动提示优化技术都可能被滥用来快速发现“越狱”提示，但此风险主要继承自合成用的优化器 LLM 本身的安全性。

（完）
