---
title: Premise-Augmented Reasoning Chains Improve Error Identification in Math reasoning with LLMs
title_zh: 前提增强的推理链改进LLM数学推理中的错误识别
authors: "Sagnik Mukherjee, Abhinav Chinta, Takyoung Kim, Tarun Anoop Sharma, Dilek Hakkani Tur"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=4tYckHNVXV"
tags: ["query:pe"]
score: 9.0
evidence: 用前提增强的推理链改进逐步推理验证的Chain-of-Thought提示方法
tldr: 针对大语言模型数学推理中推理链冗长、难以验证的问题，本文提出将传统线性推理链重构为前提增强的推理链，明确每个步骤所依赖的前提步骤，从而改善错误识别和推理验证。实验表明该方法能有效提升数学推理的可解释性与可靠性。该工作为通过提示设计增强模型推理能力提供了新思路。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-4tyckhnvxv/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1629, \"height\": 532, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4tyckhnvxv/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1657, \"height\": 922, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1556, \"height\": 376, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1212, \"height\": 361, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1744, \"height\": 928, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 820, \"height\": 426, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 722, \"height\": 372, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 778, \"height\": 492, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 777, \"height\": 494, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1749, \"height\": 962, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1221, \"height\": 375, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1218, \"height\": 375, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1221, \"height\": 375, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4tyckhnvxv/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1221, \"height\": 372, \"label\": \"Table\"}]"
motivation: 长推理链导致验证困难，步骤间依赖关系不明显。
method: 识别每个推理步骤的前提，重构为带依赖标注的推理链。
result: 在数学推理任务上，错误识别和验证效果得到提升。
conclusion: 前提增强的CoT提示有效提高了推理的透明性和可检验性。
---

## Abstract
Chain-of-Thought (CoT) prompting enhances mathematical reasoning in large language models (LLMs) by enabling detailed step-by-step solutions. However, due to the verbosity of LLMs, the resulting reasoning chains can be long, making it harder to verify the reasoning steps and trace issues resulting from dependencies between the steps that may be farther away in the sequence of steps. Importantly, mathematical reasoning allows each step to be derived from a small set of premises, which are a subset of the preceding steps in the reasoning chain. In this paper, we present a framework that identifies the premises for each step, to improve the evaluation of reasoning. We restructure conventional linear reasoning chains into Premise Augmented Reasoning Chains (PARC) by introducing premise links, resulting in a directed acyclic graph where the nodes are the steps and the edges are the premise links. Through experiments with a PARC-based dataset that we built, namely (Premises and ERrors identification in LLMs), we demonstrate that LLMs can reliably identify premises within complex reasoning chains. In particular, even open-source LLMs achieve 90% recall in premise identification.  We also show that PARC helps to identify errors in reasoning chains more reliably. The accuracy of error identification improves by 6% to 16% absolute when step-by-step verification is carried out in PARC under the premises.
Our findings highlight the utility of premise-centric representations in addressing complex problem-solving tasks and open new avenues for improving the reliability of LLM-based reasoning evaluations.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大型语言模型（LLMs）在数学推理中广泛使用链式思维（Chain-of-Thought, CoT）提示，生成长推理链。但这类长链条的验证非常困难：步骤之间可能存在远距离依赖，现有自动化评估容易漏掉错误，尤其是“累积错误”（某一步本身逻辑正确但因依赖错误前提而错误）。
- **研究动机**：传统线性推理链（LRC）没有显式标注每一步依赖的前提步骤，导致验证时要么只检查最终答案，要么给整个链打分而无法定位具体错误。作者观察到数学推理的每一步通常只依赖少量前置步骤（前提），认为如果能把这些前提显式识别出来，就可以让验证只在相关上下文中进行，从而提升错误识别的准确性。
- **整体含义**：提出将线性推理链重构为“前提增强的推理链”（Premise Augmented Reasoning Chains, PARC），通过建立步骤间的显式依赖关系，提升对推理过程的细粒度、可解释的错误识别，并推动更可靠的LLM推理评估。

### 2. 论文提出的方法论

#### 2.1 核心思想
- 将传统CoT生成的线性步骤序列 `[s1, s2, …, st]` 转换为有向无环图（PARC），其中节点是推理步骤，边是“前提链”（premise links），即步骤 `s_i` 依赖的前置步骤集合 `P_i ⊆ {s_j | j < i}`。
- 定义前提的两个性质：
  1. **可验证性**：仅基于 `P_i` 就能验证 `s_i` 的正确性。
  2. **最小性**：去除 `P_i` 中任何一步会导致 `s_i` 不可验证。

- 验证时，步骤的错误分类分为三类：
  - **正确**：无逻辑/数学错误，且依赖的前提均正确。
  - **原生错误**：步骤本身包含数学错误或逻辑不一致。
  - **累积错误**：步骤本身逻辑正确，但至少一个前提步骤是错误的。

#### 2.2 关键技术细节
- **前提识别（Premise Mapping）**：采用两种方案：
  - **聚合式（Aggregative）**：将问题、当前步骤之前的所有步骤和当前步骤一起输入LLM，直接让LLM输出当前步骤的前提集合 `P_k`。
  - **成对式（Dyadic）**：对每个前置步骤 `s_i`（`i<k`），询问LLM它是否是当前步骤的前提，最终得到 `P_k = {s_i | F(s_k|s_i)=1}`。由于成对式会导致精度下降且计算复杂度为 `O(n^2)`，最终主要采用聚合式。

- **错误识别流程（Algorithm 1）**：
  1. 对每个步骤 `s_k` 分别用LLM检测**数学错误**（仅看步骤本身）和**逻辑不一致**（仅依据前提 `P_k` 判断步骤是否与前提一致）。
  2. 通过图遍历（深度优先搜索）检测**累积错误**：如果一个步骤本身标记为正确，但其前提集合中存在错误步骤，则将该步骤重新标记为累积错误。

- **上下文控制**：验证时只向LLM提供当前步骤及其前提（而非完整的上文链），减少无关信息的干扰，缓解LLM对分心内容敏感的问题。

### 3. 实验设计

#### 3.1 数据集
- **来源**：GSM8K、MATH、Orca-Math、MetaMathQA四个数学应用题数据集。
- **构建PERL（Premises and ERrors identification in LLMs）数据集**：
  - 从四个数据集中各随机抽取1000条例子，用Llama-3.1-8B-Instruct生成逐步推理链。
  - 根据最终答案是否正确分为“正向”与“负向”链，各保留50个正向、50个负向样本。
  - 用GPT-4o在正确链中人工注入数学或逻辑错误，并调整后续步骤以保持一致性，得到190个“合成负向”样本。
  - 使用OpenAI o1-preview模型标注前提和错误类型（正确/数学错误/逻辑不一致/累积错误），并经人工校验（10%的样本，差异率低）。
- 总计：607条推理链，含203正、214负、190合成负，覆盖5种错误类型标签。

#### 3.2 评估基准与对比方法
- **前提识别评估**：使用精确率、召回率、F1（强调召回率更重要，因为漏掉前提会破坏可验证性）。对比聚合式与成对式，并在不同模型间比较。
- **错误识别评估**：平均步骤级错误分类准确率，合并“数学错误”与“逻辑不一致”为单一“错误”类，保留“累积错误”类。
  - **基线**：将完整上下文（全链）输入LLM，直接让模型输出步骤的错误类型（零样本提示）。
  - **本文方法**：分别提供仅前提的上下文进行数学和逻辑错误检测，再通过图遍历识别累积错误。实验分为“Oracle Premises”（使用人工标注的前提）和“Model Premises”（先用LLM推断前提，再用这些前提做错误识别）两种设置。

#### 3.3 额外验证
- 在ProcessBench（含人工逐步错误标注的数学推理数据集，但仅标到第一个错误）上测试，采用与其一致的错误识别协议，对比基线critic模型与本文的PARC验证。

### 4. 资源与算力
- 论文**未明确报告GPU用量、训练时长或具体的算力消耗**。只提到使用vLLM（高效LLM服务框架）进行模型服务，API调用Azure OpenAI的GPT-4o和GPT-4o1-preview模型，以及使用Llama等开源模型的指令版本。没有提及任何训练或微调过程，所有实验均为基于提示的零样本或少样本的推理与评估，因此算力主要用于推理而非训练。

### 5. 实验数量与充分性
- **实验组数极多**：
  - 前提识别：4个数据集 × 多种模型（Llama 3.1 8B/70B、Qwen 2.5 7B/32B、GPT-4o-mini、GPT-4o） × 两种方法（聚合/成对），还细分正/负/合成负。
  - 错误识别：同样4个数据集 × 相同模型组 × 三种设置（完整上下文、Oracle Premises、Model Premises），且每种再分正/负/合成负子集。
  - 另加ProcessBench两个子集（GSM8K和MATH）的错误识别实验。
- **实验充分性与客观性**：
  - 多来源数据集、多种模型规模（7B到70B）验证了方法的泛化性。
  - 对比了完整上下文与仅前提的设定，并引入Oracle前提作为上限参考，消融设计合理。
  - 使用真实负例与合成负例进行比较，揭示了合成负例可能高估性能，分析较为深入。
  - 总体而言，实验设计全面，结果对比客观，统计指标清晰。

### 6. 主要结论与发现
- **前提识别高可靠**：聚合式前提映射即使在开源模型上也达到90%以上的召回率（如Llama 3.1 70B在GSM8K上召回率97.55%），表明LLM能够准确地将线性推理链转换为PARC。
- **PARC有效改善错误识别**：在前提上下文下验证步骤，错误识别准确率相比完整上下文提高6%~16%（绝对值），尤其对GPT-4o、Llama-70B等大模型提升显著。
- **累积错误检测是难点**：基线方法在累积错误上表现尤其差（准确率往往只有10%~20%），而本文方法通过前提依赖图遍历显著提升了这类错误的检出率（如Llama 3.1 70B从12%提升至57%以上）。
- **合成负例可能高估能力**：所有模型在合成负例上的性能均高于真实负例，说明现有依赖扰动生成的评估可能过于乐观。
- **模型生成的前提接近Oracle效果**：由于前提识别召回率极高，使用模型自行识别的前提与使用人工标注Oracle前提在错误识别上的表现几乎相当。

### 7. 优点
- **方法论简洁有效**：无需训练或自监督，仅通过提示工程即可将线性链转化为结构化依赖图，显著提升错误定位能力。
- **错误分类细致**：引入“累积错误”类别，区分步骤本身正确但与错误前提相关的错误，填补了现有工作的空白。
- **评估维度全面**：构建了多源、多类型错误的PERL数据集，并对合成与真实错误进行了区分，增强了评估的可信度。
- **可解释性强**：PARC通过显式的依赖边提供了更透明的推理结构，便于后续分析和人为审查。
- **模型无关性**：提出的框架适用于各种语言模型，实验覆盖了多个开源及商业模型，显示具有良好的通用性。

### 8. 不足与局限
- **依赖LLM的自我一致性**：整个验证流程依赖LLM自身的识别能力，若前提识别本身出错（尽管召回率高，但精确率约80%左右），错误检测也可能受影响，尤其在复杂推理中。
- **仅限于数学领域**：实验完全在数学应用题上进行，虽然推理结构具有普遍性，但未在其他学科（如科学推理、代码生成）上验证。
- **静态前提假设**：当前PARC构建假定前提仅来自前序步骤，但在某些推理中可能需要外部知识或更复杂的依赖关系，该方法未处理此类情况。
- **错误分类简并**：实验中因边界模糊合并了“数学错误”与“逻辑不一致”，可能丢失一些细粒度的诊断信息。
- **算力信息缺失**：未报告推理实验的具体计算资源消耗，难以评估实际应用的成本。
- **仅处理错误识别，未涉及修正**：论文只针对错误识别进行优化，未探讨如何利用PARC结构进行自动纠错或生成更优的推理路径。

（完）
