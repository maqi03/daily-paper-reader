---
title: Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs
title_zh: 奖励引导的提示进化用于大语言模型强化学习
authors: "Ziyu Ye, Rishabh Agarwal, Tianqi Liu, Rishabh Joshi, Sarmishta Velury, Quoc V Le, Qijun Tan, Yuan Liu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=CQp36039EM"
tags: ["query:pe"]
score: 10.0
evidence: 通过奖励引导的创建者-求解者博弈在RL中自适应进化提示，实现自动提示改进
tldr: 现有LLM强化学习方法依赖静态提示集，忽略提示对训练的作用。本文提出eva，将训练建模为创建者与求解者的对称自博弈，创建者利用奖励信号自适应地生成和进化训练提示。实验表明eva无需额外人工提示，在多个基准上达到新SOTA，验证了通过奖励引导自动进化提示的有效性。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 653, \"height\": 248, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1746, \"height\": 521, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 858, \"height\": 288, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 847, \"height\": 317, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 842, \"height\": 276, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 673, \"height\": 386, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 682, \"height\": 273, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 792, \"height\": 518, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 617, \"height\": 398, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 790, \"height\": 522, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cqp36039em/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 529, \"height\": 492, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 878, \"height\": 494, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 880, \"height\": 587, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 867, \"height\": 148, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 885, \"height\": 406, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 881, \"height\": 252, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 874, \"height\": 289, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 881, \"height\": 243, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1084, \"height\": 564, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 663, \"height\": 395, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1055, \"height\": 396, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1089, \"height\": 234, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1079, \"height\": 190, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1081, \"height\": 201, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 561, \"height\": 265, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 561, \"height\": 418, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 559, \"height\": 417, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 561, \"height\": 322, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 778, \"height\": 347, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1189, \"height\": 1387, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cqp36039em/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1426, \"height\": 1847, \"label\": \"Table\"}]"
motivation: 静态提示集无法适应强化学习过程，限制模型训练效果。
method: 设计eva框架，通过奖励信号引导创建者博弈生成并进化训练提示。
result: 在无额外人工提示下，eva在多基准上取得最优性能。
conclusion: 自适应提示进化显著提升了LLM强化学习的效率和效果。
---

## Abstract
Existing reinforcement learning (RL) methods for large language models (LLMs) rely on static prompt sets, where prompts are curated a priori, and sampled in a fixed schedule for training, regardless of their usefulness to the RL process. We design `eva`, the first method that allows LLMs to prioritize and adaptively create useful prompts during RL training by reward signals. In principle, `eva` (Evolving via A symmetric Self-Play) casts language model training as a game between: (1) a creator, who samples and generates training prompts, and (2) a solver, who generates responses to the prompts. `eva` is simple, suits both offline and online RL for LLMs, and sets a new state-of-the-art on challenging benchmarks without extra human prompts: it improves gemma-2-9b-it’s win-rate on Arena-Hard from 51.6% to 60.1% by DPO and 52.6% to 62.4% by RLOO, surpassing claude-3-opus and nearing gemini-1.5-pro, both are orders of magnitude larger. Further ablation studies show `eva` can induce meaningful learning curriculum, and effectively scale RL for LLMs beyond static human prompts.

---

## 论文详细总结（自动生成）

### 论文总结：奖励引导的提示进化用于大语言模型强化学习

#### 1. 核心问题与研究动机
现有针对大语言模型（LLMs）的强化学习（RL）后训练方法存在一个根本性缺陷：它们依赖于一个**预先策划的、静态的提示（Prompt）集**，并在训练中以固定的调度进行采样。这种做法忽略了不同提示在训练过程中的有用性是动态变化的，导致两个核心问题：
*   **训练效率低下**：静态集对所有提示一视同仁，而实际上，随着LLM状态变化，并非所有提示都对学习有同等贡献。
*   **模型泛化能力受限**：一旦模型在静态提示集上达到饱和，学习便会停止，阻碍模型获取预定义分布之外的新技能或知识。

因此，本文旨在探索一个更高效、更具适应性的范式，核心动机是让LLM在RL训练中能够自适应地控制训练提示的分布。

#### 2. 方法论：`eva` 框架
论文提出了名为 `eva`（**Evo**lving **v**ia **A**symmetric Self-Play，通过非对称自我博弈进化）的框架。其核心思想是将LLM训练建模为一个**创建者（Creator）** 和**求解者（Solver）** 之间的无限博弈游戏，并由奖励信号引导。

*   **核心思想与博弈设计**：
    *   **求解者**：负责针对给定的提示生成响应，其目标是传统RLHF目标，即最大化奖励的同时与基础策略保持接近。
    *   **创建者**：负责生成训练提示，目标是使求解者在未知的真实世界提示分布上表现最优。`eva` 采用**极小化极大遗憾（Minimax Regret）**准则来指导创建者：寻找一个训练分布，使求解者在所有可能分布下的最坏情况遗憾最小化。

*   **关键技术细节与算法流程**：
    创建者通过一个三步循环来近似实现遗憾最大化，从而生成新的提示分布：
    1.  **估计信息量（Estimate）**：为当前提示集 `Xt` 中的每个提示 `x`，使用求解者策略生成多个响应 `yi`，并根据奖励模型 `r(x, y)` 计算**奖励优势（Reward Advantage）**作为提示的信息量代理 `infoθ(x)`。其公式通常为最佳响应奖励减去最差或平均响应奖励，代表该提示的“学习潜力”或当前遗憾。
        *   `infoθ(x) := r(x, y_best) - r(x, y_baseline)`
    2.  **采样（Sample）**：以信息量作为权重，从当前提示集中进行加权采样，选出一个更具信息量的提示子集 `X_info_t`。
    3.  **进化（Evolve）**：对选出的高信息量提示应用进化操作（如 `EvolInstruct`，通过深化思维链、增加约束、拓宽领域等方式）生成新的、更具挑战性的提示变体，形成下一轮的训练提示集 `X_{t+1}`。

    该过程可与离线RL（每轮迭代后更新提示集）和在线RL（每个小批次后更新）结合。在线模式下采用了“**优先化生成缓冲区**”技术，在热身、混合和自主阶段持续进化和管理提示，以实现在策略（on-policy）训练。

#### 3. 实验设计
*   **数据集与场景**：
    *   **训练数据**：使用 `UltraFeedback` 数据集作为初始的、主要来自人类的提示集。
    *   **基础模型**：使用指令微调后的 `gemma-2-9b-it` 模型作为求解器的初始策略。

*   **评估基准（Benchmark）**：
    *   **AlpacaEval 2.0**：评估通用指令遵循能力（805个问题）。
    *   **MT-Bench**：评估多轮指令遵循能力（80个难题，8个类别）。
    *   **Arena-Hard**：评估挑战性对话能力（500个问题，来自真实用户查询），是该论文的主要测试基准。

*   **对比方法**：
    *   **在线RL算法**：`RLOO`， `OAIF`（即在线DPO）。
    *   **离线RL算法**：`DPO`， `SPPO`， `SimPO`， `ORPO`。
    *   **基线比较**：与不使用 `eva`（即静态提示集）进行标准训练、使用额外新人工提示进行训练、以及进行均匀提示进化等方法进行对比。

#### 4. 资源与算力
*   **硬件配置**：所有实验均在 **8 块 NVIDIA H100 SXM GPU** 上进行。
*   **软件与框架**：主要使用 `transformers==4.40.0`，训练阶段响应生成使用 `vllm==0.5.4`，提示进化使用 `distilabel==1.3.2`，评估使用 `sglang==0.2.10` 和 `GPT-4` 作为裁判模型。

#### 5. 实验数量与充分性
论文进行了大量且系统的实验来验证 `eva` 的有效性和鲁棒性，覆盖全面，充分且客观：
*   **主实验**：在3个基准上测试了6种主流RL算法（在线2种，离线4种），对比了 `eva` 与静态训练及使用额外人工提示的效果。
*   **广泛消融研究（以DPO为代表）**：
    *   **信息量度量选择**：对比了奖励方差、奖励均值、逆优势等7种不同指标，证明奖励优势最优。
    *   **进化操作效果**：对比了有无进化步骤、以及重要性采样与贪心选择，证明自适应进化是关键。
    *   **奖励模型规模效应**：测试了点式和成对两种、不同规模的奖励模型，表明 `eva` 性能随奖励模型质量提升。
    *   **持续训练能力**：对比了增量训练与从头训练，以及多轮迭代下的效果，证明 `eva` 能带来单调增益。
    *   **课程学习效果**：分析了多轮迭代中提示的类别分布和质量复杂度变化，证实形成了有意义的自动课程。
    *   **进化方法鲁棒性**：测试了 `EvolInstruct`， `EvolQuality`, `EvolComplexity`, `SelfInstruct` 等多种提示生成方法，表明 `eva` 框架对其不敏感。
    *   **在线超参数影响**：分析了在线模式下进化提示数量和采样比例的影响。

#### 6. 主要结论与发现
*   **`eva` 能带来显著的、一致的性能提升**：在多种在线和离线RL算法上均观察到大幅提升，尤其是在最具挑战性的 Arena-Hard 基准上。例如，`gemma-2-9b-it` 使用 `eva` + `DPO` 将胜率从 51.6% 提升到 60.1%，超越了更大的 `claude-3-opus` 模型。
*   **`eva` 生成的课程优于人工提示**：通过自适应进化得到的提示训练出的模型，其性能可以媲美甚至超越使用额外全新人工提示训练的模型。
*   **奖励优势是有效的提示选择信号**：消融实验证明，基于最小-最大遗憾的奖励优势指标在识别对学习最有用的提示方面，优于其他启发式方法。
*   **进化和自适应采样缺一不可**：仅仅在固定集内进行主动数据选择效果有限，必须结合生成性的提示探索（即进化步骤），才能获得显著的性能头筹。
*   **`eva` 能形成有意义的自动课程**：随着训练迭代，创建者会优先进化出更具挑战性的数学、编程类提示，引导模型能力逐步提升。

#### 7. 优点（亮点）
*   **范式新颖**：首次在RL后训练中系统性地研究并实现了通过奖励信号引导的、自适应的提示生成与进化，将静态训练转变为动态的自我博弈过程。
*   **方法简单且通用**：`eva` 框架与具体的RL优化算法和提示进化方法解耦，可以作为“插件”轻松集成到任何现有流程中，同时支持在线和离线设置。
*   **效果显著且效率高**：无需额外人工标注，仅通过自我进化提示就能在多个强基准上达到SOTA，并且显著优于使用额外人工数据的方法，展现了极高的数据效率和学习潜力。
*   **理论与直觉结合**：有明确的极小化极大遗憾博弈论作为设计指导，并提供了诸如“对比课程学习假说”等直观解释，理论扎实。

#### 8. 不足与局限
*   **依赖于奖励模型质量**：整个自适应过程由奖励信号引导，`eva` 的性能会随着奖励模型质量的提升而提升，这意味着如果奖励模型存在偏差或不准确，可能会引导模型进化出不良行为。论文也提及需要研究鲁棒奖励模型和透明评估协议。
*   **策略外推风险**：随着模型策略更新，`eva` 生成的提示可能会超出初始奖励模型的可靠分布范围，导致奖励信号失真，因此可能需要联合训练奖励模型。
*   **只验证了中等规模模型**：主要实验在 9B 参数的 `gemma-2-9b-it` 上完成，其在更大规模模型（如 70B 或更大）上的表现和计算开销尚待验证。
*   **创建者是间接优化的**：目前的框架中，创建者策略并非一个可直接微分的模型，而是通过启发式采样和进化步骤来间接优化，这可能不是最优解，限制了其潜力。

（完）
