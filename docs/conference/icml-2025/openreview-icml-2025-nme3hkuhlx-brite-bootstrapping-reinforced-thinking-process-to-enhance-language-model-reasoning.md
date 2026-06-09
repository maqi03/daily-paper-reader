---
title: "BRiTE: Bootstrapping Reinforced Thinking Process to Enhance Language Model Reasoning"
title_zh: BRiTE：引导增强思维过程提升语言模型推理能力
authors: "Han Zhong, Yutong Yin, Shenao Zhang, Xiaojun Xu, Yuanxin Liu, Yifei Zuo, Zhihan Liu, Boyi Liu, Sirui Zheng, Hongyi Guo, Liwei Wang, Mingyi Hong, Zhaoran Wang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=NME3HKUHLX"
tags: ["query:pe"]
score: 6.0
evidence: 通过算法自动生成高质量推理过程，类似分步推理提示的增强
tldr: 针对大语言模型推理过程不可靠的问题，提出统一概率框架和BRiTE算法，通过迭代生成高质量推理过程并融入后训练，理论证明1/T收敛速度。该方法为自动增强推理提供了新途径。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-nme3hkuhlx/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 532, \"height\": 523, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nme3hkuhlx/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 862, \"height\": 302, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nme3hkuhlx/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 812, \"height\": 310, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-nme3hkuhlx/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1765, \"height\": 356, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-nme3hkuhlx/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 891, \"height\": 329, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-nme3hkuhlx/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1765, \"height\": 371, \"label\": \"Table\"}]"
motivation: 解决大语言模型生成可靠推理过程的挑战。
method: 提出BRiTE算法，通过概率图模型和迭代引导增强推理过程。
result: 理论收敛速率为1/T，自动生成高质量推理。
conclusion: 提升了推理过程的自动生成质量，可用于后训练。
---

## Abstract
Large Language Models (LLMs) have demonstrated remarkable capabilities in complex reasoning tasks, yet generating reliable reasoning processes remains a significant challenge. We present a unified probabilistic framework that formalizes LLM reasoning through a novel graphical model incorporating latent thinking processes and evaluation signals. Our framework addresses two critical questions: (1) how to generate high-quality reasoning processes during inference automatically, and (2) how to integrate these processes into post-training. We propose the \emph{Bootstrapping Reinforced Thinking Process} (BRiTE) algorithm and demonstrate its theoretical convergence at a rate of $1/T$, where $T$ is the number of iterations. The algorithm operates in two steps. First, it generates high-quality rationales by approximating the desired posterior distribution using a reinforcement learning approach with a novel reward shaping mechanism. Second, it fine-tunes the base LLM by maximizing the joint probability of rationale generation with respect to LLM parameters. Empirical evaluation on GSM8K and MATH benchmarks demonstrates that our approach consistently improves performance across different model sizes without requiring human-annotated thinking processes, outperforming standard chain-of-thought prompting while enhancing existing post-training methods.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- 大语言模型（LLM）在复杂推理任务中表现突出，但生成**可靠的推理过程**（链式思考，CoT）仍是一大挑战，生成的论据常缺乏逻辑完整性，且高度依赖任务特定的提示模板。
- 现有推理时缩放技术（如多数投票）仅缓解表面问题，未触及“如何自动生成高质量推理过程”这一核心。
- 论文旨在构建一个**统一概率框架**，将 LLM 推理形式化为包含潜在思考过程（Z）与评价信号（O）的图模型，从而自动生成高质量推理，并将其无缝集成到后训练阶段，提升模型推理能力。

### 2. 论文提出的方法论
核心思想是将 LLM 推理看作一种概率图模型：给定提示 X，先采样潜在推理链 Z，再生成答案 Y，最后基于（X，Z，Y）获得评价信号 O。目标为最大化高质量推理‑答案对的联合对数似然 L(θ)。

**BRiTE 算法流程**
- 基于 EM（期望最大化）思想，迭代优化两个模型：
    1. **ψ‑更新（E‑步近似）**：学习一个分布 Q，用于近似目标后验 P(Z, Y, O | X, θ) ∝ P(correct | X, Z, Y)。该分布通过 **强化学习（RL）** 获得，而非简单的拒绝采样。
    2. **θ‑更新（M‑步）**：利用从 Q 采样得到的高质量推理链，通过 **监督微调（SFT）** 或 **DPO** 更新基础 LLM 的参数 θ，最大化联合生成概率。
- **关键技术点**：
    - **奖励塑形**：将困难的贝叶斯推理问题转化为熵正则化 MDP，设计 token 级奖励 log P(aⱼ | a₁:ⱼ₋₁, x)，利用 PPO/GRPO 优化，使最优策略显式近似目标分布 Q。
    - **理论保证**：在 RKHS 假设下，证明算法以 O(1/T) 速率收敛到全局最优（T 为迭代次数）。

**统一多种现有算法**
- 该框架可自然退化为：预训练 / SFT、PPO‑RLHF、DPO（含潜在变量版本）、以及基于拒绝采样的 ReST EM 等算法，并为其提供统一的理论分析。

### 3. 实验设计
**主要场景及数据集**
- **数学推理**：GSM8K（1.3k 测试题）、MATH（5k 竞赛级题），并使用 MATH500、Minerva Math、OlympiadBench、AIME24、AMC23、GPQA Diamond 作为扩充评测。
- **代码生成**：以 OpenCoder‑LLM/opc‑sft‑stage2 为训练集，评估 HumanEval（EvalPlus）与 BigCodeBench 的 instruct 划分。

**基准模型**
- Gemma‑2‑9b‑it、Gemma‑1.1‑7B‑it、Mistral‑7B‑Instruct‑v0.2、Llama‑3‑8B‑Instruct、Qwen2.5‑7B、deepseek‑coder‑6.7b‑instruct 等指令微调模型。

**对比方法**
- **拒绝采样微调（RS）**：生成 N=30 条推理链，保留正确最终答案的样本进行 SFT。
- **监督微调（SFT）**：使用人工标注推理链数据。
- **迭代 DPO**：基于策略自身采样构建偏好对，进行 DPO 训练。
- **BRiTE 变体**：BRiTE‑SFT（ψ‑更新生成推理链，θ‑更新做 SFT）；BRiTE‑DPO（Q 采样→构建偏好对→DPO）；带有外部验证器的 BRiTE（ψ‑与 θ‑更新分离）。

### 4. 资源与算力
- 数学任务：BRiTE 的 PPO 训练与后续 SFT 在 **4 块 NVIDIA H100** 上完成。
- 代码任务：所有训练基于 **4 块 NVIDIA A100**。
- 训练细节：PPO 学习率 5e‑7，批大小 1；SFT 学习率 5e‑5（部分模型更低），批大小 2；均采用 LoRA（r=32, alpha=128）高效微调；DPO 每迭代采样 N=30 条，使用 6k 数据。**论文未明确给出总训练时长或 GPU 小时数**。

### 5. 实验数量与充分性
- 论文在 **4 个不同系列、多种规模** 的基座模型上评估，覆盖 7B‑9B 参数范围。
- 涉及 **6 个以上数学基准** 和 **2 个代码基准**（HumanEval+、BigCodeBench），并额外测试了带外部验证器的大规模数据（40k）训练版本。
- 包含多类对比：基础模型、SFT、RS、迭代 DPO，以及 BRiTE 的不同配置（SFT/DPO、仅 ψ‑更新 / 仅 θ‑更新），并进行了迭代轮次分析。
- 实验设计相对**充分且公平**：所有方法使用相同基座模型、采样温度、随机种子，并报告 pass@1 准确率；数学部分还展示了训练过程中的损失与平均准确率曲线（图 3）。各方法间对比维度清晰，结论可复现。

### 6. 论文的主要结论与发现
- **BRiTE 显著优于拒绝采样方法**：在所有模型上实现 1‑10 个点的准确率提升（如 Gemma‑1.1‑7B‑it 在 GSM8K 上提升 10 点），且在扩展基准（AIME、Minerva 等）上提升可达 15 点以上。
- **BRiTE 匹配或超越人工 SFT**：在某些任务上，RL 生成的推理链质量可比肩甚至优于人工标注，展示出替代昂贵人工标注的潜力。
- **BRiTE 增强 RLHF 阶段**：BRiTE‑DPO 在多个基座模型上一致优于传统迭代 DPO，说明更优的推理过程生成了更高质量的偏好数据。
- **理论收敛保证**：证明了 1/T 的收敛速率，为算法提供了原理性支撑。
- **通用性**：方法同时适用于数学推理和代码生成，表现出跨任务迁移能力。

### 7. 优点
- **方法论创新**：首次在统一概率框架下用强化学习自动生成高质量推理链，并给出收敛证明，理论坚实。
- **奖励塑形设计巧妙**：将后验采样转化为熵正则化 MDP 优化，自然地复用 token 级对数概率作为奖励，规避了难解采样问题。
- **实验广泛且一致**：覆盖多种基座模型、多个困难基准和不同训练范式（SFT、DPO、外部验证器），性能提升稳定，验证了方法的**鲁棒性**。
- **工程友好**：可与 EM 类算法自然结合，且无需人工标注推理链，降低了数据获取成本。
- **统一视角**：将预训练、SFT、PPO、DPO、ReST 等算法纳入同一理论谱系，升华了对相关工作的理解。

### 8. 不足与局限
- **计算开销较高**：每个 ψ‑更新需运行完整的 RL（PPO/GRPO）训练，虽未直接对比训练时长，但显然比简单拒绝采样更耗时。
- **任务域覆盖有限**：实验仅聚焦数学与代码推理，未在常识问答、科学推理等更广泛任务上验证。
- **依赖正确性信号**：方法假设存在可判断答案正确性的外部信号（如数学答案匹配、代码单测通过），在开放生成或无标准答案任务中难以直接应用。
- **奖励塑形的局限性**：当仅使用最终答案正确性作为奖励时，可能鼓励模型“捷径”推理而非学习真实的逻辑连贯性；引入外部过程奖励模型可能缓解，但未被本工作深入探讨。
- **消融实验不足**：未系统分析不同 RL 算法、奖励温度、MDP 步数等超参数对最终性能的影响。
- **潜在偏差**：理论假设对数线性模型与 RKHS，实际 Transformer 不一定满足，可能导致收敛行为的偏离。

（完）
