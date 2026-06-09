---
title: Understanding Prompt Tuning and In-Context Learning via Meta-Learning
title_zh: 通过元学习理解提示微调与上下文学习
authors: "Tim Genewein, Li Kevin Wenliang, Jordi Grau-Moya, Anian Ruoss, Laurent Orseau, Marcus Hutter"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=avRktRfQ8c"
tags: ["query:pe"]
score: 8.0
evidence: 提出贝叶斯最优提示框架，为提示设计和上下文学习提供原则性指导。
tldr: 本文从贝叶斯元学习视角阐释提示微调与上下文学习，指出最优提示等价于对贝叶斯预测器的条件化。该框架揭示了提示设计的根本原则，同时也指出了仅靠提示的性能局限，需结合权重调整来克服。该工作为理解提示有效性提供了理论支撑，有助于指导更有效的提示方法设计。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 547, \"height\": 649, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 822, \"height\": 984, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1419, \"height\": 693, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 519, \"height\": 585, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 850, \"height\": 1009, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1439, \"height\": 430, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1444, \"height\": 1755, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1445, \"height\": 1716, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 685, \"height\": 243, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 682, \"height\": 243, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1411, \"height\": 279, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1403, \"height\": 283, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1444, \"height\": 1722, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1443, \"height\": 1756, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1443, \"height\": 930, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1444, \"height\": 974, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-avrktrfq8c/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1445, \"height\": 977, \"label\": \"Figure\"}]"
motivation: 提示优化方法多由经验驱动，缺乏理论基础，难以深入理解提示的原理与局限。
method: 利用贝叶斯元学习框架，将提示形式化为对贝叶斯预测器的条件化，分析最优提示的性质。
result: 理论分析揭示了提示设计的核心原则及其固有限制，指明权重调整可克服这些限制。
conclusion: 该工作为提示工程提供了理论根基，帮助设计更有效的提示策略，并明确了提示与微调的组合必要。
---

## Abstract
Prompting is one of the main ways to adapt a pretrained model to target tasks. Besides manually constructing prompts, many prompt optimization methods have been proposed in the literature. Method development is mainly empirically driven, with less emphasis on a conceptual understanding of prompting. In this paper we discuss how optimal prompting can be understood through a Bayesian view, which also implies some fundamental limitations of prompting that can only be overcome by tuning weights. The paper explains in detail how meta-trained neural networks behave as Bayesian predictors over the pretraining distribution, whose hallmark feature is rapid in-context adaptation. Optimal prompting can be studied formally as conditioning these Bayesian predictors, yielding criteria for target tasks where optimal prompting is and is not possible. We support the theory with educational experiments on LSTMs and Transformers, where we compare different versions of prefix-tuning and different weight-tuning methods. We also confirm that soft prefixes, which are sequences of real-valued vectors outside the token alphabet, can lead to very effective prompts for trained and even untrained networks by manipulating activations in ways that are not achievable by hard tokens. This adds an important mechanistic aspect beyond the conceptual Bayesian theory.

---

## 论文详细总结（自动生成）

好的，这是根据您提供的论文内容生成的结构化中文总结。

### 1. 论文的核心问题与研究动机

*   **核心问题**：预训练大模型如何通过“提示”（Prompting）快速适应新任务？如何从理论层面理解提示优化（Prompt Tuning）的工作机制、能力上限与根本局限？
*   **研究动机**：
    *   **理论缺失**：当前提示优化方法的开发主要由经验驱动，缺乏对其工作原理的概念性理解。
    *   **寻求统一框架**：文章旨在提供一个贝叶斯视角，将提示（尤其是前缀微调，Prefix-Tuning）理解为对一个元学习得到的贝叶斯预测器进行条件化，从而形式化地研究最优提示的可行性条件。
    *   **探究软提示的独特作用**：在概念性贝叶斯理论之外，探究软前缀（Soft Prefixes，即实数向量序列）如何通过操纵网络内部激活，实现离散硬标记（Hard Tokens）无法达到的卓越效果。

### 2. 论文提出的方法论

*   **核心思想：基于记忆的元学习与贝叶斯预测器**
    *   文章首先回顾了基于记忆的元学习框架：一个序列预测器（如神经网络）在多样化任务分布上进行元训练（优化对数损失），其收敛后会在功能上逼近该任务分布上的**贝叶斯最优预测器**。
    *   这种预测器的标志性特征是不通过权重更新，仅通过上下文信息就能实现**最快速的上下文适应（In-Context Learning）**。
    *   **公式化表达**：元学习过程本质上是在最小化网络分布 $\pi_{\theta}$ 与真实贝叶斯混合分布 $\xi$ 的KL散度：
        $$\underset{\theta}{\operatorname{arg min}} \ D_{KL}(\xi || \pi_{\theta}) = \underset{\theta}{\operatorname{arg min}} \ \mathbb{E}_{\xi}[\mathcal{L}_{\theta}(x_{1:N})]$$
        收敛后，网络预测近似于贝叶斯预测：$\pi_{\hat{\theta}}(x_n|x_{<n}) \approx \xi(x_n|x_{<n})$。

*   **关键技术细节：前缀微调作为条件化**
    *   前缀微调的目标是找到一个长度为 $L$ 的前缀序列 $s_{1:L}$（可以是硬标记、软向量或嵌入向量），将其置于观测序列 $x_{<n}$ 之前输入给网络，以最大化后续预测的准确率。
    *   优化目标是最小化前缀在目标分布上的期望对数损失：
        $$\min_{s_{1:L} \in \mathcal{S}^L} \mathbb{E}_{\xi_{\text{Target}}}[\mathcal{L}_{\theta}(x_{1:N}|s_{1:L})]$$
    *   **最优提示的可行性条件**：
        1.  **正面案例**：当目标分布是预训练任务分布 (Pretraining Distribution) 中一个单点任务（即目标分布是 $\tau$ 上的狄拉克分布），且该任务在预训练时有非零支持度时，理论上总是存在一个硬标记序列，使网络在该任务上实现最优预测。
        2.  **局限一（多模态目标分布）**：如果目标分布是多模态的（如两个不同任务的等权混合），在后验分布会坍缩为单点的常见情况下，最优提示是不可能的。
        3.  **局限二（全新原子任务）**：如果目标任务是预训练分布中完全不存在、且行为模式与预训练预测器完全不同的全新任务，最优提示同样是不可能的。
    *   **软前缀的独特机制**：软前缀是词表外的输入（Off-distribution Inputs），它们可以绕过硬标记对网络状态的更新限制，通过灵活操纵网络激活，更有效地向网络注入任务信息。

### 3. 实验设计

*   **数据集/场景**：实验全部在**硬币抛掷序列**任务上进行，这是一个可控、可解释的玩具设定。
    *   **数据生成器**：伯努利分布 (Bernoulli process)。
    *   **预训练分布**：随机硬币 (`Random Coins`)：硬币偏差从 Beta(1,1) 分布中均匀采样。
    *   **目标任务分布**：
        1.  单一硬币 (`Single Coin`)：偏差固定为0.2，用于测试最优提示的正面案例。
        2.  双币混合 (`Two-Coin Mixture`)：偏差0.2和0.8的硬币按1:1等权混合，用于测试最优提示的局限性（多模态目标分布）。
*   **基准 (Benchmark) 与方法对比**：性能指标是**相对于真实数据生成器的累计 regret (Cumulative Regret)**，即超额对数损失，越低越好。
    *   **前缀微调方法 (Prefix-Tuning)**：
        *   `HardPT`：穷举搜索最优硬标记序列。
        *   `SimplexPT`：优化一个概率单纯形上的向量前缀。
        *   `RealPT`：优化一个实数向量前缀。
        *   `SoftPT`：优化嵌入空间中的向量前缀（即 "Soft Prompting"）。
    *   **权重微调方法 (Weight-Tuning)**：
        *   `FullWT`（全参数微调）, `LoRAWT`（低秩适配, 仅用于Transformer）, `EmbedWT`（仅调嵌入层）, `UnembedWT`（仅调解嵌层）, `Un+EmbedWT`。
    *   **基线 (Baselines)**：
        *   `TargetBayes`：目标分布上的精确贝叶斯预测器（性能上限）。
        *   `NoTuning`：不做任何微调的预训练或随机初始化网络。
        *   `PreBayes`/`PreBayesPT`：预训练分布上的贝叶斯预测器及其前缀微调版本。
*   **模型架构**：评估了**LSTM** 和**仅解码器 Transformer**。两种模型都配备可训练的嵌入层和解嵌层。

### 4. 资源与算力

*   **算力说明**：文中明确提到，所有展示的教育性实验均在**单个V100 GPU**上运行，总耗时**不到6小时**。

### 5. 实验数量与充分性

*   **实验组数**：实验设计覆盖全面，包括：
    *   2种模型架构（LSTM, Transformer）
    *   2种微调目标（`Single Coin`, `Two-Coin Mixture`）
    *   3种网络状态（预训练后微调、未预训练直接微调）
    *   超过10种不同的微调方法和基线
    *   共计13种前缀和权重微调方法（不含不同随机种子的重复）
*   **充分性与客观性**：
    *   **统计健壮性**：每种方法的微调过程使用不同随机种子重复了**10次**，并报告中位数和25%/75%分位数作为置信区间，确保了结果的统计意义。
    *   **全面对比**：实验系统地对比了硬提示、多种软提示和多种权重微调方法，与多个理论上下界进行比较，能够清晰地分离出不同方法的能力。
    *   **控制变量分析**：通过改变**嵌入维度**（128降至4）和**前缀长度**（6增至25），验证了实验结论的归因和稳健性，例如证明`SoftPT`的优势主要源于高维嵌入空间。

### 6. 论文的主要结论与发现

*   **理论框架的有效性**：通过贝叶斯元学习视角，成功解释了提示微调的工作原理。最优提示等价于将（元学习得到的）贝叶斯预测器条件化于目标任务。
*   **提示微调的能力与局限**：
    *   **有效性**：实验证实，对于一个在预训练分布中的**单一任务**，前缀微调（尤其是`SoftPT`）可以实现**贝叶斯最优**性能。
    *   **根本局限**：实验也证实，对于**多模态目标分布**（如双币混合），任何前缀微调方法（包括软前缀）均**无法达到**贝叶斯最优性能，印证了理论的局限性。而权重微调方法可以克服此局限。
*   **软提示的强大与机制**：
    *   软提示（特别是`SoftPT`）的性能远超同等长度的最优硬标记序列，甚至可以有效操控**未经训练的随机网络**，使其表现出良好的序列预测能力。这揭示了软提示除了概念性贝叶斯理论之外的**重要机制性作用**。
    *   对Transformer和LSTM的对比发现，此现象在Transformer上尤为显著。
*   **跨长度泛化**：成功的微调方法（`SoftPT`和大部分权重微调方法）展示了良好的泛化能力，在超过微调序列长度（50步）的评估序列（200步）上依然保持优秀性能。

### 7. 优点

*   **坚实的理论基础**：将经验性的提示微调方法扎根于贝叶斯元学习理论，为理解其工作机制和边界提供了清晰的框架。这是其最突出的亮点。
*   **实验设计清晰、有教育意义**：通过简化的可控实验，直接对比网络行为与精确的贝叶斯预测器，使得复杂的理论预言得以清晰、定量地验证。
*   **分析深入且系统**：不仅对比了方法间的性能差异，还通过可视化技术（PCA of internal states）揭示了不同微调方法如何从根本上影响模型的内部动力学，尤其是软提示的“离分布”操控特性。
*   **结论的鲁棒性强**：通过网格强化实验、统计重复和其他控制变量等手段，确保了核心发现的可靠性。

### 8. 不足与局限

*   **规模差距与可推广性**：
    *   **实验规模较小**：所用模型（LSTM/Transformer）和任务（硬币投掷）的规模远小于现代前沿模型和自然语言数据。作者坦承，结论在多大程度上能直接推广到LLM等大模型尚需谨慎研究和验证。
*   **任务复杂性不足**：
    *   **任务定义过于简单**：硬币投掷序列中的“任务”是一个标量参数。而在前沿模型环境中，“任务”的构成（如一段文本背后的意图、风格、知识）是复杂、多层次且未被明确定义的，这使得理论中的“预训练任务支持度”等概念在实践中极难界定。
*   **理论覆盖的非完备性**：
    *   **难以解释全部现象**：概念性贝叶斯理论无法完全解释软提示对**未训练网络**的强大操控能力，这体现了网络架构本身（如Transformer）中包含的与数据无关的归纳偏置或可操控电路。本文仅指出这一重要方面，未作深入建模。
*   **性能归因的局限性**：后续控制实验表明，`SoftPT`以显著性能优势主要归因于嵌入空间的高维度，而非其方法学上的根本优度。在大模型中，输入维度通常远高于嵌入维度，这章开头的结论可能不再适用。

（完）
