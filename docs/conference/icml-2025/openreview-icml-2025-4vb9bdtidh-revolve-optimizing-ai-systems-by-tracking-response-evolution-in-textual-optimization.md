---
title: "Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization"
title_zh: Revolve：通过追踪文本优化中的响应演化优化AI系统
authors: "Peiyan Zhang, Haibo Jin, Leyang Hu, Xinnuo Li, Liying Kang, Man Luo, Yangqiu Song, Haohan Wang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=4vb9BDTIDh"
tags: ["query:pe"]
score: 9.0
evidence: 通过追踪响应演化自动优化提示，减少人工提示工程并提升系统性能。
tldr: 针对基于大语言模型的系统优化中人工提示工程负担重的问题，本文提出Revolve方法，通过追踪响应在迭代优化过程中的演化轨迹，实现自动文本优化。该方法克服了现有文本反馈方法仅关注即时反馈的局限，能够更稳定地调整提示和超参数。实验表明，Revolve在多种任务上有效提升了系统性能，为自动化提示优化提供了一种实用方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-4vb9bdtidh/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1602, \"height\": 684, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4vb9bdtidh/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 855, \"height\": 286, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-4vb9bdtidh/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1329, \"height\": 417, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4vb9bdtidh/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1330, \"height\": 590, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4vb9bdtidh/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1336, \"height\": 549, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4vb9bdtidh/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 574, \"height\": 174, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4vb9bdtidh/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1759, \"height\": 1717, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4vb9bdtidh/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 572, \"height\": 176, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4vb9bdtidh/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1765, \"height\": 743, \"label\": \"Table\"}]"
motivation: LLM系统优化依赖人工提示工程，现有自动方法仅关注即时反馈。
method: 提出Revolve，通过追踪响应演化历史进行自动文本优化。
result: 在多种任务上实现了优于现有自动方法的系统性能。
conclusion: Revolve为减少提示工程人工干预提供了有效途径。
---

## Abstract
Recent advancements in large language models (LLMs) have significantly enhanced the ability of LLM-based systems to perform complex tasks through natural language processing and tool interaction. However, optimizing these LLM-based systems for specific tasks remains challenging, often requiring manual interventions like prompt engineering and hyperparameter tuning.
Existing automatic optimization methods, such as textual feedback-based techniques (*e.g.*, TextGrad), tend to focus on immediate feedback, analogous to using immediate derivatives in traditional numerical gradient descent.
However, relying solely on such feedback can be limited when the adjustments made in response to this feedback are either too small or fluctuate irregularly, potentially slowing down or even stalling the optimization process. In this paper, we introduce $\textbf{REVOLVE}$, an optimization method that tracks how $\textbf{R}$esponses $\textbf{EVOLVE}$
across iterations in LLM systems. By focusing on the evolution of responses over time, REVOLVE enables more stable and effective optimization by making thoughtful, progressive adjustments at each step. Experiments across three tasks demonstrate the adaptability and efficiency of our proposal. Beyond its practical contributions, REVOLVE highlights a promising direction, where the rich knowledge from established optimization principles can be leveraged to enhance LLM systems, which paves the way for further advancements in this hybrid domain. Code is available at: https://llm-revolve.netlify.app.

---

## 论文详细总结（自动生成）

# REVOLVE 论文总结

## 1. 核心问题与研究动机
- **核心问题**：当前基于大语言模型（LLM）的智能系统在特定任务上的优化高度依赖人工提示工程与超参数调优，自动化程度不足。
- **现有方法的局限**：以 TextGrad 为代表的文本反馈式自动优化方法仅依据**即时反馈**（类比传统数值优化中的一阶梯度）调整系统行为。当迭代调整过小或反馈波动大时，这些方法容易陷入局部最优、出现停滞甚至性能退化。
- **本文出发点**：借鉴传统优化中二阶方法的思想，提出通过追踪 LLM 响应在迭代过程中的**演化轨迹**，进行更稳定、渐进的自动调整，从而突破一阶方法的瓶颈。

## 2. 方法论
### 2.1 核心思想
- 在 TextGrad 的基础上，引入**响应相似度函数** \( S\big(r(p_t), r(p_{t-1})\big) \)，捕获连续两次迭代产生的响应之间的变化幅度，以此模拟二阶导数中梯度变化率的作用。
- 将即时反馈（一阶梯度）与响应演化信息相结合，形成新的优化梯度，进而指导提示、解或代码的更新。

### 2.2 关键技术细节与公式
- 设 \( p_t \) 为第 \( t \) 次迭代的输入提示，\( r(p_t) \) 为模型响应，\( \tilde{\partial} \) 表示文本式导数。
- **一阶文本梯度**（TextGrad）：
  \[
  \nabla L\big(r(p_t)\big) = \frac{\tilde{\partial} L\big(r(p_t)\big)}{\tilde{\partial} p_t}
  \]
- **REVOLVE 梯度**：
  \[
  \text{REVOLVE}\Big(L\big(r(p_t)\big)\Big) = \frac{\tilde{\partial} L\big(r(p_t)\big)}{\tilde{\partial} p_t} + S\big(r(p_t), r(p_{t-1})\big) \cdot \frac{\tilde{\partial} L\big(r(p_t)\big)}{\tilde{\partial} p_t}
  \]
- 通过 LLM 评估损失函数变化与提示变化之比，该相似度可近似为二阶导数，因此整体梯度含有“一阶 + 二阶”信息，但**不显式计算数值型的 Hessian 矩阵**。

### 2.3 算法流程概述
1. **前向传递**：系统执行任务，记录输入、输出、提示与工具使用轨迹。
2. **语言损失计算**：由评估 LLM 对输出质量生成自然语言反馈（损失）。
3. **反向传递**：沿计算图反向传播文本梯度。
4. **REVOLVE 更新**：在更新每个变量时，不仅使用当前反馈，还结合该变量引起的响应在历史上的演化相似度，进行更谨慎、渐进的调整。

## 3. 实验设计
### 3.1 评估场景与数据集
- **提示优化（推理任务）**：Big Bench Hard 的 Object Counting 子集（50/100/100 划分）和 GSM8K（200/300/1399 划分）。度量采用最终数值的字符串精确匹配准确率。
- **解优化（科学问答）**：Google-proof QA (GPQA) Diamond 子集（198 题）、MMLU 的 Machine Learning（112 题）与 College Physics（92 题）。精确匹配四个选项的字母答案。
- **代码优化**：LeetCode Hard 数据集，以提交后通过全部测试用例的完成率（Completion Rate）为指标。

### 3.2 对比基线
- **零样本思维链（CoT）**：直接使用“让我们一步一步思考”作为提示或解的基础。
- **TextGrad**：仅使用一阶文本梯度进行优化。
- **动量增强 TextGrad（M-TextGrad）**：在 TextGrad 中引入动量窗口，增大相似反馈下的更新幅度。
- **Reflexion**（仅代码优化）：基于自我反思的迭代代码优化方法，带一次样例示范。

### 3.3 模型后端与优化引擎
- 被优化的 LLM 包括：gpt-3.5-turbo-0125、GPT-4-0125-preview、Gemini 1.5 Pro、Llama 3.1 8B Instruct。
- 优化引擎（计算梯度、评估损失）：多数实验用 GPT-4o；部分解优化实验用被优化模型自身。
- 一些设置：训练样本数 36（提示优化），迭代 12 次（提示优化）或 3 次（解优化）或 5 次（代码优化）。

## 4. 资源与算力
- 文中附录 G 报告了与基线方法的计算资源对比。
- 使用 **4 块 NVIDIA RTX 3090 GPU**，以 Llama 3.1 8B Instruct 为例测量。
- REVOLVE 的单次迭代耗时略高于 TextGrad，但因收敛所需迭代次数更少，**总收敛时间可节省 16%–50%**（视任务而定），GPU 内存消耗与基线相当（约 3.2 GB 或 6.5 GB）。
- 未涉及模型参数训练，仅为推理阶段的迭代优化。

## 5. 实验充分性与公平性
- 共涉及 **3 大类任务、6 个数据集**，在 **4 个不同 LLM** 上开展多轮实验，部分实验报告了 **误差范围**（±标准差）。
- 对比方法涵盖了 SOTA 的自动优化方案（TextGrad、M-TextGrad、Reflexion）及强基线（CoT）。
- 额外进行了 **消融实验**，对比 REVOLVE 提示设计、变体提示（强制多样性）和 TextGrad 原版提示，验证了设计有效性。
- 绘制了**解优化任务的损失曲线**，以观察优化过程中的停滞突破与稳定性。
- 使用与已发表工作相同的数据集划分和评估指标，种子固定，保证了**客观且可复现的比较**。

## 6. 主要结论与发现
- REVOLVE 在所有三大任务上**普遍优于**仅使用一阶反馈的 TextGrad 及动量变体：
  - 提示优化：Object Counting 最高提升 7.8%（Llama 3.1 8B），GSM8K 提升 1.6%–6.2%。
  - 解优化：在 Llama 3.1 8B 上相对 TextGrad 平均提升 17.79%，并能克服 TextGrad 的性能退化与 M-TextGrad 的波动。
  - 代码优化：Llama 3.1 8B 完成率达 31%，相对 TextGrad 提升 29.17%，且超过 Reflexion。
- 响应演化信息能有效帮助**逃离局部最优**，使优化过程更**平滑稳定**，而不会像动量方法那样产生剧烈振荡。

## 7. 优点
- **创新性强**：首次在文本优化领域模拟二阶优化效果，无需数值 Hessian。
- **即插即用**：在 TextGrad 框架基础上仅增加响应演化追踪，易于实现。
- **通用性高**：在提示优化、解优化、代码优化上均有显著提升，跨多种 LLM 有效。
- **高效**：虽单次开销略增，但收敛快，总计算时间更短，内存开销平齐。
- **理论与实践结合**：通过与传统优化概念的类比，为 LLM 系统的自动优化提供了可解释的路径。

## 8. 不足与局限
- **依赖 LLM 评估相似度**：相似度函数依赖另一个 LLM 计算，可能引入噪声或偏差。
- **个别 case 未提升**：在 Gemini 1.5 Pro 的 GSM8K 任务上 REVOLVE 略逊于 TextGrad，表明跨模型迁移的优化策略仍有局限。
- **任务覆盖有限**：实验集中于推理、科学问答、代码生成，对其他类型的语言任务（如翻译、摘要）未验证。
- **理论分析薄弱**：尽管给出二阶类比，但未严格证明其收敛性或与数值二阶方法的等价性。
- **资源消耗**：仍需多次调用优化 LLM（例如 GPT-4o），推理成本可能较高，尽管总时间缩短，但调用次数仍然可观。
- **超参数敏感性**：优化迭代次数、批大小等需预设，面对极端复杂的系统可能需进一步调参。

（完）
