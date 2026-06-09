---
title: "metaTextGrad: Automatically optimizing language model optimizers"
title_zh: metaTextGrad：自动优化语言模型优化器
authors: "Guowei Xu, Mert Yuksekgonul, Carlos Guestrin, James Zou"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=10s01YrlKp"
tags: ["query:pe"]
score: 9.0
evidence: 对提示优化器进行元优化以实现自动提示进化
tldr: 现有LLM优化器由人工设计且通用，无法针对特定任务优化。本文提出metaTextGrad，一个元优化器，自动改进基于LLM的提示优化器，提升自动提示进化的效果和任务特定性。实验表明，该方法能进一步提升优化性能，推动自动提示工程发展。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-10s01yrlkp/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1437, \"height\": 479, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-10s01yrlkp/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1420, \"height\": 750, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-10s01yrlkp/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1459, \"height\": 752, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-10s01yrlkp/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 708, \"height\": 221, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-10s01yrlkp/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 720, \"height\": 474, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-10s01yrlkp/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1438, \"height\": 182, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-10s01yrlkp/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 714, \"height\": 222, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-10s01yrlkp/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 706, \"height\": 475, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-10s01yrlkp/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1460, \"height\": 754, \"label\": \"Table\"}]"
motivation: 手工设计的LLM优化器缺乏任务针对性和自动优化能力。
method: 设计元优化器metaTextGrad，自动优化基于LLM的提示优化器。
result: 提升了提示优化的效果和任务适应性。
conclusion: 该方法为自动提示进化提供了更高效、更专业的优化途径。
---

## Abstract
Large language models (LLMs) are increasingly used in learning algorithms, evaluations, and optimization tasks. Recent studies have shown that using LLM-based optimizers to automatically optimize model prompts, demonstrations, predictions themselves, or other components can significantly enhance the performance of AI systems, as demonstrated by frameworks such as DSPy and TextGrad. However, optimizers built on language models themselves are usually designed by humans with manual design choices; optimizers themselves are not optimized. Moreover, these optimizers are general purpose by design, to be useful to a broad audience, and are not tailored for specific tasks. To address these challenges, we propose metaTextGrad, which focuses on designing a meta-optimizer to further enhance existing optimizers and align them to be good optimizers for a given task. Our approach consists of two key components: a meta prompt optimizer and a meta structure optimizer. The combination of these two significantly improves performance across multiple benchmarks, achieving an average absolute performance improvement of up to 6% compared to the best baseline.

---

## 论文详细总结（自动生成）

好的，请查阅以下基于提供的论文元数据生成的中文总结。

### **1. 论文的核心问题与整体含义**

*   **研究背景与动机：**
    *   大语言模型（LLM）日益被用于构建学习算法、评估和优化任务。例如，DSPy和TextGrad等框架利用基于LLM的优化器，自动优化模型的提示词、示例等，能够显著提升AI系统性能。
    *   然而，现有LLM优化器（如TextGrad的TGD、DSPy的MIPROv2）面临两大挑战：
        1.  **人工设计，自身未被优化**：这些优化器由人工设计，其内部的提示词和结构是固定的、通用的，没有针对特定任务进行过调优。
        2.  **通用性强，缺乏任务针对性**：为了服务广泛的用户，优化器设计得过于通用，无法根据具体下游任务的特点进行调整。
*   **核心问题：**
    *   如何自动优化这些基于LLM的优化器，使其更好地与特定任务对齐，从而进一步提升优化效果？即，实现“元优化”（Meta-Optimization）。
*   **整体含义：**
    *   本文提出了一个名为`metaTextGrad`的元优化器框架，旨在自动化和改进LLM优化器的设计，使其从通用的优化器转变为一个针对特定任务定制的、更强大的优化器。

### **2. 论文提出的方法论**

*   **核心思想：**
    *   `metaTextGrad`的核心思想是进行**元优化**，即设计一个“优化器的优化器”。给定一个任务和一组现有的优化器作为初始化，元优化器的目标是找到一个更优的优化器（`M*`），使得用这个优化器优化出的程序（`Φ`）在给定任务上表现更好。
*   **理论洞见：**
    *   论文通过一个定理（Theorem 1）给出了理论动机：如果在训练集上通过元学习得到一个与任务对齐的优化器，那么其优化出的程序在测试集上的表现，有很高的概率会接近理论最优优化器的表现。这为元优化提供了理论保证。
*   **关键技术细节与组件：**
    `metaTextGrad`框架由两个核心组件构成，通常按顺序执行：
    1.  **元提示优化器（Meta Prompt Optimizer）：**
        *   **目标**：优化单个LLM优化器内部的提示词，使其更贴合特定任务的需求。
        *   **流程**：
            *   **初始化**：评估初始优化器的性能。
            *   **提出（Propose）**：从训练集中采样数据，分析任务特征，并基于当前最优的优化器提示，调用LLM提出一个改进的新提示。
            *   **更新（Update）**：在验证集上测试新优化器的性能，如果优于当前最优，则进行替换。
            *   **提取（Extract）**：返回找到的最佳优化器提示。
    2.  **元结构优化器（Meta Structure Optimizer）：**
        *   **目标**：自动决定不同优化器或优化模块的最佳组合与执行顺序，构建一个更强大的复合优化器。
        *   **流程**：
            *   **初始化**：评估所有输入优化器的性能，选择最佳者作为初始值。
            *   **提出（Propose）**：给定一组参考优化器的代码，调用LLM整合它们的功能，提出一个改进后的优化器结构（代码实现）。
            *   **更新（Update）**：在验证集上评估新提出的复合优化器，若性能提升则更新。
            *   **提取（Extract）**：返回找到的最佳优化器结构。
*   **算法流程（文字描述）：**
    整个过程是一个双层循环。**外层循环（算法2）** 是`metaTextGrad`的元优化过程：输入一组初始优化器`{M(1), M(2), ...}`，在每次迭代中，元优化器`ĈM`提出一个改进后的优化器`Mj`。**内层循环（算法1）** 是标准优化过程：使用提出的优化器`Mj`对初始程序`Φ`进行`I`次优化迭代，得到优化后的程序`Φ*j`及其在验证集上的得分`σj`。外层循环根据`σj`更新最佳优化器，并指导下一次优化器提案。最终返回一个经过优化的元优化器`M*`。

### **3. 实验设计**

*   **使用数据集/场景：**
    *   **BBH（BIG-Bench Hard）**：使用了其中的`Word Sorting`（单词排序）和`Dyck Languages`（括号匹配）两个逻辑推理子任务。
    *   **MMLU（Massive Multitask Language Understanding）**：使用了其中的`Abstract Algebra`（抽象代数）子集。
    *   **GPQA Diamond**：研究生水平的“谷歌防搜”问答基准测试。
    *   **ARC-AGI**（额外实验）：抽象推理挑战。
*   **对比方法（Baselines）：**
    *   **原生提示方法**：`Zero-shot CoT`, `8-shot CoT`, `Self-consistency (8)`, `Best of N (8)`。
    *   **TextGrad优化器**：`TGD Optimizer`（提示优化）, `ADAS-TG`（结构优化）。
    *   **DSPy优化器**：`Zero-shot MIPROv2`, `8-shot MIPROv2`（提示与示例优化）。
*   **提出的方法：** `metaTextGrad`。

### **4. 资源与算力**

*   论文明确指出实验主要消耗的是**LLM API调用**，而非本地GPU算力。
*   **模型使用策略（分层设计）**：
    *   **程序模型（Program-level）**：使用较为经济的**GPT-4o-mini**。
    *   **优化器模型（Optimizer-level）**：使用能力更强的**GPT-4o**。
    *   **元优化器模型（Meta-optimizer-level）**：使用能力最强的**o1模型**或Claude 3.5 Sonnet。
*   **成本分析**：以MMLU抽象代数为例，单次优化周期消耗的token量大约是程序级400k、优化器级100k、元优化器级2.5k。对比来看，一次`Zero-shot CoT`需要约140k token。论文还通过实验（Table 3）证明，通过优化，在便宜的`GPT-4o-mini`上实现的性能可以超过直接在`GPT-4o`上使用`Zero-shot CoT`的效果，同时成本更低。

### **5. 实验数量与充分性**

*   **主实验**：在4个基准数据集上，对比了提出的方法与7个基线方法，并报告了验证集和测试集上的平均准确率，每个结果均基于5次随机种子运行取平均。
*   **消融实验**：在BBH Dyck Languages任务上，分析了`metaTextGrad`不同组件（元提示优化、元结构优化及其组合）的单独贡献。
*   **可迁移性分析**：
    1.  **跨模型迁移**：将在GPT-4o-mini上优化得到的优化器，直接用于Claude 3 Haiku模型，评估性能。
    2.  **跨数据集迁移**：将在GPQA Diamond上优化得到的优化器，直接用于MMLU抽象代数任务，评估性能。
*   **泛化能力实验**：
    1.  使用了全开源模型（Qwen3-8B和Qwen3-235B-A22B）在Dyck Languages上验证框架。
    2.  在更具挑战性的ARC-AGI基准上测试方法。
*   **实验充分性评价**：实验设计相对全面。它不仅包含了与多种强基线的性能对比，还通过消融实验验证了各组件的有效性，并探讨了优化器在不同模型和不同任务间的泛化能力。使用开源模型和更难的基准测试进一步证明了方法的鲁棒性，实验评估较为充分、客观。

### **6. 论文的主要结论与发现**

*   `metaTextGrad`在所有4个主要基准测试上均优于所有基线方法，包括其自身的候选优化器（TGD, ADAS-TG），平均绝对性能提升最高可达6%（Table 1）。
*   由`metaTextGrad`优化出的优化器表现出三个有趣的特性：(1) **更贴合特定任务**，例如为括号匹配任务生成栈验证器。(2) **能处理更细粒度的信息**，如在多步任务中同时传递全局和子问题。(3) **优化效率更高**，由于任务对齐性强，通常在少数几步内就能实现显著提升。
*   元优化器的**可迁移性强**：针对一个模型或一个数据集优化出的优化器，可以有效地应用到另一个模型或数据集上，甚至可能超越在该目标上从头训练的结果。
*   通过分层设计，可以用经济的模型支撑程序的反复调用，用顶级模型支撑次数较少的元优化，在提升性能的同时有效控制成本。

### **7. 优点**

*   **创新性强**：首次系统性提出了“优化LLM优化器”的元优化概念，并给出了具体的实现框架，超越了直接寻找最优提示或结构的传统范式。
*   **方法合理且有效**：通过元提示优化和元结构优化的双重机制，分别从“内容”和“形式”上对齐特定任务，提升显著且可解释。
*   **实验扎实全面**：实验覆盖了多个不同的推理和知识基准，对比了大量基线，并进行了完善的消融和可迁移性分析，令人信服。
*   **高性价比的优化策略**：其分层的模型调用策略（经济模型→强模型→最强模型）具有很高的实践价值，能在有限的预算内实现性能最大化。

### **8. 不足与局限**

*   **依赖基础模型能力**：当底层模型本身缺乏完成任务所需的基础知识或推理能力时（如在数学竞赛基准AIME 2024上），`metaTextGrad`无法带来显著收益。
*   **对元优化器模型要求高**：元优化过程本身对LLM的指令遵循和问题分析能力要求很高，目前仅适用于最前沿的模型（如o1, Claude 3.5 Sonnet），限制了其普及性。
*   **黑盒风险**：优化过程高度自动化，可能导致用户对其形成的“黑盒”系统产生过度依赖或自动化偏见，而对其内部行为和局限性缺乏理解。
*   **潜在的滥用风险**：该技术可能被用于构建更具说服力或操纵性的系统。
*   **本人未优化**：论文承认，提出的元优化器本身也是人工设计的，理论上也可以被进一步优化，这是未来工作可以探索的方向。

（完）
