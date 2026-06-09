---
title: "Reasoning-as-Logic-Units: Scaling Test-Time Reasoning in Large Language Models Through Logic Unit Alignment"
title_zh: 推理即逻辑单元：通过逻辑单元对齐扩展大语言模型测试时推理能力
authors: "Cheryl Li, Tianyuan Xu, Steven Y. Guo"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=mMgSxbO4H0"
tags: ["query:pe"]
score: 7.0
evidence: 通过逻辑单元对齐解决思维链推理幻觉，提升测试时推理性能。
tldr: 针对思维链提示中自然语言推理步骤与生成程序逻辑不一致导致的“推理幻觉”问题，本文提出一种测试时推理扩展框架，将大语言模型的推理步骤与逻辑单元对齐。该方法通过逻辑单元对齐提升推理的严谨性，改善思维链提示的推理质量。实验表明，该框架有效减少了推理不一致现象，增强了模型的推理能力，为改进逐步推理提示提供了新思路。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-mmgsxbo4h0/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1717, \"height\": 984, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mmgsxbo4h0/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1426, \"height\": 582, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mmgsxbo4h0/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1410, \"height\": 698, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mmgsxbo4h0/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 733, \"height\": 440, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mmgsxbo4h0/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 729, \"height\": 439, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mmgsxbo4h0/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1418, \"height\": 573, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-mmgsxbo4h0/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1721, \"height\": 1028, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-mmgsxbo4h0/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1729, \"height\": 198, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-mmgsxbo4h0/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1732, \"height\": 109, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-mmgsxbo4h0/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 862, \"height\": 126, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-mmgsxbo4h0/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1824, \"height\": 386, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-mmgsxbo4h0/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1558, \"height\": 248, \"label\": \"Table\"}]"
motivation: 思维链推理存在自然语言与程序逻辑不一致的“推理幻觉”。
method: 提出推理即逻辑单元框架，在测试时对齐推理步骤与逻辑单元。
result: 有效减少推理幻觉，提升推理质量。
conclusion: 逻辑单元对齐能增强思维链推理的严谨性，对提示工程有启发。
---

## Abstract
Chain-of-Thought (CoT) prompting has shown promise in enhancing the reasoning capabilities of large language models (LLMs) by generating natural language (NL) rationales that lead to the final answer. However, it struggles with numerical computation, which has somehow led to the development of program-aided techniques.
Despite their potential, a persistent challenge remains: inconsistencies between LLM-reported reasoning steps and the logic in generated programs, which we term ``reasoning hallucinations." This stems from the inherent ambiguities of NL and the statistical nature of LLMs, which often lack rigorous logical coherence.
To address this challenge, we propose a novel test-time scaling framework, Reasoning-as-Logic-Units (RaLU), which constructs a more reliable reasoning path by aligning logical units between the generated program and their corresponding NL descriptions.
By decomposing the initially generated program into discrete units using static analysis, RaLU engages in an iterative dialogue with the LLM to judge, refine, and explain each unit.
A rewind-and-correct mechanism ensures alignment between code statements and task requirements in each unit, ultimately forming a cohesive reasoning path under the program's logic, from which the model reaches a final solution.
Our experiments demonstrate that RaLU significantly outperforms existing baselines in mathematical reasoning (GSM8K, MATH) and algorithmic reasoning (HumanEval+, MBPP+), underscoring its potential to advance LLM reasoning and programming by offering enhanced accuracy and interpretability.

---

## 论文详细总结（自动生成）

好的，请查收以下基于论文内容生成的结构化中文总结。

---

### 论文结构化总结：Reasoning-as-Logic-Units (RaLU)

#### 1. 论文的核心问题与整体含义

- **核心问题（“推理幻觉”）**：
  - 当前提升大语言模型（LLM）推理能力的方法，如思维链（CoT）和程序辅助思维（PoT），各有侧重。前者依赖自然语言，后者利用程序处理计算，但二者组合时，其内部逻辑常常不一致。
  - **主要缺陷**：论文将这种不一致性定义为 **“推理幻觉”（Reasoning Hallucinations）**，具体表现为：
    - 自然语言描述正确，但生成的代码表述有逻辑错误。
    - 遗漏关键步骤或包含无关步骤。
    - 单个步骤正确，但彼此间的顺序或连接关系错误。
  - 根源在于自然语言的模糊性和LLM基于概率生成文本的本质，缺乏严密的逻辑连贯性。

- **整体含义与目标**：
  - 旨在提出一个测试时推理（Test-Time Reasoning）扩展框架，通过**强制对齐程序逻辑单元与自然语言描述**，构建一条更可靠、更可解释的推理路径，从根本上减轻推理幻觉。

#### 2. 论文提出的方法论 (RaLU)

- **核心思想**：
  - RaLU 将程序作为逻辑骨架，自然语言作为解释内容，通过提取、对齐、合成三个阶段，构建一条兼具程序严谨性和自然语言可读性的推理路径。

- **关键技术细节与三阶段流程**：
  1.  **逻辑单元提取（Logic Unit Extraction）**：
      - 首先让LLM直接生成一个初步解决问题的程序。
      - 利用**静态代码分析**构建该程序的**控制流图（CFG）**，以可视化代码的执行逻辑。
      - 沿CFG，在条件分支、循环边界等关键节点处，将程序**分解为一系列结构上原子化的逻辑单元**。每个单元封装了一个独立的计算意图。

  2.  **逻辑单元对齐（Logic Unit Alignment）**：
      - 进入一个**多轮迭代对话**阶段，LLM对每个逻辑单元执行以下操作：
        - **自我判断（Self-judge）**: 评估单元是否正确，并输出判断标记（`OK`或`WRONG`）。
        - **自我解释（Self-explain）**: 用自然语言解释该单元的操作，并将其行为映射到任务规范，实现双向对齐。
        - **自我修正（Self-correct）**: 若单元被判定为错误，LLM会对其进行修正。
      - **回退与纠正（Rewind-and-Correct）机制**: 当一个单元被修正后，对话会“回退”，基于修正后的单元重新进行验证，防止错误级联传播，确保所有通过的单元都是自我一致的。
      - **终止条件**: 包括所有单元通过验证的“定点收敛”，或达到预设的迭代次数/置信度阈值。在后一种情况下，会根据LLM输出的token对数概率或自一致性检查来选择最优的候选单元。

  3.  **解决方案合成（Solution Synthesis）**：
      - 在对齐阶段完成后，形成一个由已验证的逻辑单元及其自然语言解释组成的、连贯的混合推理路径。
      - 将此路径作为历史对话上下文，指导LLM**生成最终的、正确的解决方案（程序或答案）**。

- **公式化描述（文字说明）**：
  - 框架通过贝叶斯视角建模：将每个对齐的、自我验证的逻辑单元视为一个证据 `Oi`。由于一个正确的解决方案（事件 `C`）更可能产生逻辑连贯的单元，因此，观察到一系列经过验证的单元（`O1， ...， On`）会显著提升解决方案正确的后验概率，即 `P(C|O1， ..., On) > P(C)`，从而论证了该方法在统计学上提升了正确率。

#### 3. 实验设计

- **数据集与场景**：
  - **数学推理**: GSM8K, MATH（使用子集MATH-np）, AQUA。
  - **代码推理**: HumanEval, MBPP, 以及它们增加了更多测试用例的增强版（HumanEval+, MBPP+）。

- **评估基准（Benchmark）**：
  - 数学任务：最终答案准确率（Accuracy）。
  - 代码任务：`pass@1` 分数。

- **对比方法**：
  - **通用提示方法**: 直接提示（Direct Prompting）, 零样本思维链（Zero-Shot CoT）, 思维树（Tree-of-Thoughts, ToT）, 自一致性（Self-Consistency, SC）。
  - **自我修正方法**: 自校准（Self-Calibration, SCal）, 自我优化（Self-Refine, SR）。
  - **特定任务方法**: 程序思维（PoT）， 自检（Self-Check, SCheck）， 橡胶鸭调试法（源自Self-Debug, SD）。

#### 4. 资源与算力

- 论文**未明确提及**使用的GPU型号、数量或总训练时长。由于该框架是测试时（test-time）扩展方法，不涉及模型微调或训练，因此其主要资源消耗是推理（inference）过程中的token使用量和API调用次数。文中对比了推理token消耗，指出RaUL比CoT多消耗15倍token，但比ToT、Self-Check等多路径方法节省约10倍token。

#### 5. 实验数量与充分性

- **主实验**: 在**三个不同的LLM骨架**（Deepseek-V3, Qwen2.5-72B, Llama3.3-70B）上，针对**5个基准数据集**（共7项任务）对比了**8种基线方法**，并报告了三次独立运行的平均值和标准差（±σ），实验规模较大，结果具有一定统计可靠性。
- **消融研究**:
  1.  **逻辑单元粒度**: 对比了基于CFG的分解与基于“逐行”（Line-by-line）的分解。结果显示，基于CFG的方法性能更优，且token消耗更低。
  2.  **单元抽象内容**: 对比了基于“程序逻辑单元”与基于“纯自然语言步骤”（即CoT步骤）的效果。结果显示，移除程序引导会导致性能显著下降，证明了程序逻辑作为骨架的必要性。
  3.  **候选单元选择策略**: 在达到迭代上限的复杂案例中，对比了置信度得分、随机选择、最低困惑度和选择最后生成的单元四种策略。结果显示不同策略影响很小，表明模型的自我校验迭代已过滤了大部分严重错误。
- **额外对比**: 与GPT-4o, o1-preview等闭源模型的公开结果进行了比较。
- **实验评价**: 实验设计较为**全面、客观和公平**。它不仅测试了多个主流开源模型和广泛使用的基准，还通过详尽的消融实验揭示了框架各关键设计的贡献，结果呈现透明（含标准差）。

#### 6. 论文的主要结论与发现

1.  **显著提升性能**: RaLU在所有基准测试和LLM骨架上，均一致性地优于所有现有基线方法。尤其在更严苛的增强版代码基准（HumanEval+, MBPP+）上表现出色，甚至超过了一些特定的闭源模型。
2.  **有效缓解推理幻觉**: 通过将推理过程分解为逻辑单元并进行结构对齐，RaLU成功减少了自然语言推理与代码执行之间的不一致性。
3.  **优于多路径与自修正方法**: RaLU通过精细化的单元级迭代验证与修正，比简单的多路径采样（如SC， ToT）或整体性自我修正（如Self-Refine）更高效、更准确，因为它能局部化错误并防止其传播。
4.  **程序引导的必要性**: 消融实验证明，以程序为骨架的逻辑单元分解方法，远比纯自然语言步骤或简单的逐行代码分解更可靠，后者反而会加剧推理幻觉和增加开销。
5.  **有条件的提升**: 理论分析和实验表明，当模型的初始正确率不高（p远小于1）时，RaLU的自我修正机制最有效；若模型近乎完美（p≈1），则提升空间有限。

#### 7. 优点（亮点）

- **创新的方法论**: 提出了将程序逻辑与自然语言深层次对齐来解决“推理幻觉”的新思路，构建了结构化、可解释的推理路径。
- **机制设计精巧**: “提取-对齐-合成”的三阶段流程以及“回退与纠正”的迭代修正机制，有效地实现了错误隔离与逻辑一致性的强制达成。
- **实验全面且扎实**: 涵盖了广泛的任务类型、多个模型骨干、详尽的消融研究，并与多种主流基线进行了公平对比，结论可信度高。
- **可解释性与可调试性**: 将黑箱推理过程变为由逻辑单元组成的白盒路径，便于诊断错误，提升了人机协作的潜力。

#### 8. 不足与局限

- **计算开销**: 尽管比一些多路径方法高效，但RaLU仍是一个测试时扩展框架，其token消耗量（文中显示为CoT的15倍）显著高于单次推理方法，增加了延迟和使用成本。
- **依赖初始程序质量**: 整个推理链建立在LLM首次生成的程序之上。如果初始程序的核心逻辑完全错误，后续的迭代修正可能难以挽救，导致推理走向错误方向。
- **依赖LLM的自我评估能力**: 框架的有效性高度依赖于LLM本身判别对错（即作为“法官”）的能力。对于自我评估能力较差的模型，其效果可能会打折扣。
- **需要外部代码解释器**: 方法需要一个外部环境来执行或静态分析代码，这增加了系统的复杂度，并非一个纯文本的、完全内生的解决方案。
- **闭源模型对比局限性**: 与闭源模型的对比实验不是在同一环境下直接运行的，而是引用了公开报告的结果，可能无法完全公平地反映实时性能对比。

（完）
