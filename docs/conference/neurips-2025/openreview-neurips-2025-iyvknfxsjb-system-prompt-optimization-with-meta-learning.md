---
title: System Prompt Optimization with Meta-Learning
title_zh: 基于元学习的系统提示优化
authors: "Yumin Choi, Jinheon Baek, Sung Ju Hwang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=IYVknFxsJb"
tags: ["query:pe"]
score: 9.0
evidence: 基于元学习的框架优化系统提示，使其鲁棒且可迁移，最大化语言模型跨任务性能。
tldr: 现有提示优化工作忽略了对系统提示的优化。本文将系统提示优化形式化为双层问题，并提出元学习框架，学习对多样化用户提示鲁棒、对未见任务可迁移的系统提示。实验表明，该方法能跨任务提升模型输出质量，填补了系统提示自动优化的研究空白。该研究为通用提示设计提供了自动化途径，有望提升大语言模型的通用性。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1379, \"height\": 488, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1397, \"height\": 606, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 355, \"height\": 337, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 474, \"height\": 336, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 557, \"height\": 330, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 791, \"height\": 279, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 455, \"height\": 261, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 449, \"height\": 258, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 508, \"height\": 247, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1408, \"height\": 796, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1399, \"height\": 927, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 712, \"height\": 479, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 705, \"height\": 519, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 712, \"height\": 448, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iyvknfxsjb/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1386, \"height\": 467, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1447, \"height\": 399, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 560, \"height\": 247, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 706, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 702, \"height\": 286, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1356, \"height\": 743, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1375, \"height\": 630, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1370, \"height\": 842, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1369, \"height\": 539, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1367, \"height\": 535, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 642, \"height\": 435, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1352, \"height\": 321, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1394, \"height\": 1086, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1389, \"height\": 2060, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1386, \"height\": 2076, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1397, \"height\": 826, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1435, \"height\": 721, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1029, \"height\": 178, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 879, \"height\": 382, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1031, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1031, \"height\": 377, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1529, \"height\": 1884, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iyvknfxsjb/table-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1530, \"height\": 2122, \"label\": \"Table\"}]"
motivation: 现有提示优化集中于用户提示，忽略了系统提示的通用优化潜力，限制模型在多任务场景下的性能。
method: 引入双层系统提示优化问题，提出元学习框架，学习对用户提示鲁棒且跨任务可迁移的系统提示。
result: 实验表明，元学习优化的系统提示在多种任务和未见任务上均能提升模型性能，优于基线方法。
conclusion: 本工作验证了系统提示元优化的有效性，为通用提示设计提供了自动化方案，有望提升LLM的普适性。
---

## Abstract
Large Language Models (LLMs) have shown remarkable capabilities, with optimizing their input prompts playing a pivotal role in maximizing their performance. However, while LLM prompts consist of both the task-agnostic system prompts and task-specific user prompts, existing work on prompt optimization has focused on user prompts specific to individual queries or tasks, and largely overlooked the system prompt that is, once optimized, applicable across different tasks and domains. Motivated by this, we introduce the novel problem of bilevel system prompt optimization, whose objective is to design system prompts that are robust to diverse user prompts and transferable to unseen tasks. To tackle this problem, we then propose a meta-learning framework, which meta-learns the system prompt by optimizing it over various user prompts across multiple datasets, while simultaneously updating the user prompts in an iterative manner to ensure synergy between them. We conduct experiments on 14 unseen datasets spanning 5 different domains, on which we show that our approach produces system prompts that generalize effectively to diverse user prompts. Also, our findings reveal that the optimized system prompt enables rapid adaptation even to unseen tasks, requiring fewer optimization steps for test-time user prompts while achieving improved performance.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化总结。

### 1. 论文的核心问题与整体含义

*   **研究背景**：大型语言模型的输入提示通常包含两部分：任务无关的**系统提示**（定义模型基本行为）和任务特定的**用户提示**（指导具体任务）。
*   **现有问题**：当前的提示优化研究几乎完全集中在优化**用户提示**上，忽略了**系统提示**的优化潜力。一个精心设计的系统提示可以跨任务、跨领域地提升模型性能，但这一领域尚未被充分探索。
*   **核心挑战**：直接优化系统提示面临独特挑战，因为其目标是与多样化的用户提示协同工作，并且需要泛化到未见任务。这个问题比优化单一任务的用户提示更为复杂。
*   **研究目标**：本文旨在解决**双层系统提示优化**问题，即设计一个既能与各类用户提示有效耦合，又能泛化到广泛任务（包括未见任务）的系统提示。

### 2. 论文提出的方法论

*   **核心思想**：将系统提示优化形式化为一个**双层优化问题**，并引入**元学习框架（MetaSPO）** 来解决。
    *   **上层（外层）优化**：目标是找到一个能够泛化到不同任务分布的系统提示。
    *   **下层（内层）优化**：目标是针对特定任务优化用户提示，并确保其与当前系统提示协同工作。
*   **框架流程 (MetaSPO)**：该框架包含两个交替迭代的循环，如下图所示（基于论文Figure 2描述）。
    *   **内层循环（用户提示优化）**：
        1.  **错误分析**：利用当前系统提示和用户提示，在目标任务的样本上进行预测，并收集预测错误的案例。
        2.  **提示生成**：利用LLM分析错误案例（失败分析），并基于分析结果生成多个优化后的候选用户提示。
        3.  **提示评估与选择**：在目标任务的样本上评估这些候选提示的性能，保留表现最佳的k个提示。
    *   **外层循环（系统提示优化）**：
        1.  **聚合错误**：使用当前系统提示，搭配各任务在内层循环中已优化的用户提示，在**全部分布的任务**上进行预测，聚合所有任务上的错误案例。
        2.  **提示生成**：利用LLM分析这些聚合的错误案例，并生成多个优化的候选系统提示。
        3.  **跨任务评估与选择**：在所有任务分布上，用各任务各自的优化用户提示来评估候选系统提示的性能，选出表现最佳的k个系统提示。
*   **关键公式**：论文将目标形式化为一个双层优化公式，上层目标是最大化系统提示s在任务分布T上的期望性能，下层目标是针对每个任务Ti最大化其用户提示ui的性能。`s* = argmax E_{Ti~T} [f(LLM(s, u*_i, q), a)]`，其中`u*_i = argmax E_{(q,a)~Ti} [f(LLM(s, u, q), a)]`。

### 3. 实验设计

*   **数据集**：实验覆盖了来自**5个不同领域**的**14个未见数据集**（目标任务）：
    *   **医疗**：MedMCQA（解剖学、儿科学等）
    *   **评论分析**：Amazon Reviews（电子产品、宠物用品等）
    *   **推理**：BigBench（逻辑推理、对象计数等）
    *   **安全性**：TweetEval, HateCheck等（检测有害内容等）
    *   **事实基础**：SQuAD, HotpotQA等（基于上下文的问答）
*   **评估场景**：
    1.  **未见泛化**：直接将优化好的系统提示应用于未见的目标任务，**不**对目标任务的用户提示做任何优化。
    2.  **测试时自适应**：在目标任务的少量样本上优化用户提示，但优化的**系统提示保持不变**，以评估其作为良好起点的泛化能力。
*   **基准方法**：
    *   **Default**：使用最简单的系统提示：“You are a helpful assistant.”
    *   **Chain-of-Thought (CoT)**：在系统提示中加入“Let's think step by step”。
    *   **Service**：使用商业化的、手工设计的系统提示。
    *   **SPRIG**：一种基于遗传算法的系统提示自动优化方法。
    *   **Outer Loop / MetaSPO variants**：消融实验，仅使用外层循环或更换内/外层优化算法。
*   **基础模型**：使用Llama 3.2 (3B) 作为答案生成的基座模型，GPT-4o mini作为提示优化器。

### 4. 资源与算力

*   论文在附录中明确指出，实验主要使用 **NVIDIA A5000 GPU** 进行计算。

### 5. 实验数量与充分性

*   **实验数量庞大且充分**：实验设计非常全面，从多个维度验证了方法的有效性。
    *   **多场景**：在“未见泛化”和“测试时自适应”两个关键且实际的应用场景下进行了评估。
    *   **多领域与多任务**：横跨5个领域共14个未见目标任务。
    *   **多基线对比**：与4种具有代表性的方法（从手工设计到自动优化）进行了对比。
    *   **丰富的分析实验**：包含大量深入的消融和分析，例如：
        *   分析源任务与目标任务相似度对性能的影响。
        *   探索跨完全陌生领域的泛化能力。
        *   测试源任务数量对性能的影响。
        *   进行效率分析（迭代步数、数据量）。
        *   对比系统/用户角色分离与合并的影响。
        *   分析模型的注意力分布。
        *   验证跨不同骨架模型和优化模型的稳健性。
        *   更换框架内优化算法组件。
*   **实验客观公平**：所有对比方法都使用相同的基础模型和优化器，并在多个领域上报告平均结果及标准差，确保了比较的公平性与统计意义。

### 6. 论文的主要结论与发现

*   **性能优异且泛化性强**：在**未见泛化**场景下，MetaSPO优化的系统提示在所有领域上的表现都显著优于所有基线方法。即便搭配各种不同的用户提示，MetaSPO系统提示也能在85%的情况下提升性能。
*   **任务相似度正相关**：源任务与目标任务的相似度越高，优化后的系统提示带来的性能提升越大，但即便对于低相似度任务，MetaSPO仍然有效。
*   **测试时自适应高效**：在**测试时自适应**场景下，使用MetaSPO优化的系统提示作为起点，能以**更少的优化迭代步骤（减少80%）和更少的数据量（减少75%）** 达到与Default基线最终相近甚至更优的性能。
*   **角色分离至关重要**：实验表明，将系统提示和用户提示分别赋予其指定的“系统”和“用户”角色，比将它们拼接在一起作为用户输入效果更好。
*   **框架灵活性高**：MetaSPO框架可以集成各种现有的提示优化技术（如APE、EVO），并且均能带来性能提升，展示了其高度的通用性。

### 7. 优点

*   **问题定义新颖且重要**：首次系统性地提出了“双层系统提示优化”问题，将研究焦点从局限于单一任务的用户提示扩展到了通用系统提示，具有重要的理论意义和实用价值。
*   **方法论创新且符合直觉**：采用双层优化和元学习框架来解决问题，对系统提示（泛化）和用户提示（特定）的关系进行精细建模，逻辑清晰，设计巧妙。
*   **实验全面且扎实**：实验设计极其详尽，覆盖了多领域、多场景、多维度分析，证明了方法的有效性、稳健性、高效性和灵活性，得出的结论极具说服力。
*   **实用性强**：优化后的系统提示可直接部署以提升多种任务的性能，且能在数据稀缺时加速自适应，具备良好的实际应用前景。

### 8. 不足与局限

*   **依赖优化器能力**：论文承认方法的性能上限取决于用于优化的LLM（优化器）本身的能力。使用能力较弱的开源模型优化时，最终效果可能会受影响。
*   **跨域泛化性能有限**：尽管MetaSPO在跨完全不同领域的任务上仍能超越基线，但其表现仍弱于同领域泛化的结果，说明其泛化能力仍有提升空间，尤其是当源域与目标域差异极大时。
*   **安全风险**：与所有提示优化方法一样，MetaSPO可能被滥用于生成有害或不道德的系统提示，存在操纵模型行为的风险。
*   **细节与指令长度**：通过MetaSPO优化出的系统提示往往较长且包含详细指令（如附录C所示）。虽然这带来了性能提升，但也增加了提示的复杂度和token消耗，其在简洁性与性能之间的权衡可以进一步探讨。

（完）
