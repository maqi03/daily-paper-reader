---
title: Rethinking Chain-of-Thought from the Perspective of Self-Training
title_zh: 重新思考思维链：从自我训练的角度
authors: "Zongqian Wu, Baoduo Xu, Ruochen Cui, Mengmeng Zhan, Xiaofeng Zhu, Lei Feng"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ksdPdnwKGi"
tags: ["query:pe"]
score: 10.0
evidence: 提出包含任务特定提示模块的思维链框架，优化初始推理过程，直接提升逐步提示效果。
tldr: 本文从自我训练视角重新思考思维链（CoT）推理，指出两者均通过迭代利用模型生成信息降低预测不确定性。基于此，提出新型CoT框架，包含一个任务特定提示模块以优化初始推理过程，以及一个自适应推理迭代模块以动态细化推理。该框架解决了以往CoT方法中过度推理和推理轮次相似度高等问题。实验表明，该框架显著提升了推理性能，为设计高效逐步推理提示提供了新方法。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-ksdpdnwkgi/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 851, \"height\": 719, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ksdpdnwkgi/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 822, \"height\": 468, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ksdpdnwkgi/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 850, \"height\": 328, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ksdpdnwkgi/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1703, \"height\": 863, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ksdpdnwkgi/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 854, \"height\": 405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ksdpdnwkgi/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1739, \"height\": 693, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ksdpdnwkgi/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1651, \"height\": 689, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ksdpdnwkgi/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1645, \"height\": 710, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-ksdpdnwkgi/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1774, \"height\": 550, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ksdpdnwkgi/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 855, \"height\": 345, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ksdpdnwkgi/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1695, \"height\": 639, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ksdpdnwkgi/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1766, \"height\": 544, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ksdpdnwkgi/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 986, \"height\": 247, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ksdpdnwkgi/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1761, \"height\": 711, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ksdpdnwkgi/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1761, \"height\": 713, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ksdpdnwkgi/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1748, \"height\": 2361, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ksdpdnwkgi/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1756, \"height\": 2017, \"label\": \"Table\"}]"
motivation: 现有CoT推理存在过度推理和迭代相似度高的问题，缺乏有效提示优化。
method: 结合自我训练思想，设计任务特定提示模块与自适应迭代模块。
result: 在多个推理任务上提升了准确性并减少了冗余推理。
conclusion: 优化提示与动态迭代是提升逐步推理性能的关键。
---

## Abstract
Chain-of-thought (CoT) reasoning has emerged as an effective approach for activating latent capabilities in LLMs. Interestingly, we observe that both CoT reasoning and self-training share the core objective: iteratively leveraging model-generated information to progressively reduce prediction uncertainty. Building on this insight, we propose a novel CoT framework to improve reasoning performance. Our framework integrates two key components: (i) a task-specific prompt module that optimizes the initial reasoning process, and (ii) an adaptive reasoning iteration module that dynamically refines the reasoning process and addresses the limitations of previous CoT approaches, i.e., over-reasoning and high similarity between consecutive reasoning iterations. Extensive experiments show that the proposed method achieves significant advantages in both performance and computational efficiency. Our code is available at: https://github.com/zongqianwu/ST-COT.

---

## 论文详细总结（自动生成）

# 重新思考思维链：从自我训练的角度 —— 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：思维链（Chain-of-Thought, CoT）推理虽然能有效激发大语言模型的潜在能力，但现有方法存在**过度推理**（正确预测在后续迭代中变为错误）和**连续迭代推理过程高度相似**两大缺陷。
- **整体含义**：作者观察到 CoT 与经典的半监督学习方法 **self-training** 在本质上都遵循“迭代利用模型自身生成的信息（伪标签 / 中间推理过程）**逐步降低预测不确定性**”这一共同目标。基于该洞察，论文从 self-training 的角度重新审视 CoT，通过理论和实验揭示 CoT 中的**语义熵**变化规律，进而提出具有任务自适应提示和动态迭代机制的 CoT 框架，以提升推理性能和计算效率。

## 2. 论文提出的方法论
### 2.1 核心思想
- 将 CoT 的迭代推理看作与 self-training 中熵最小化类似的过程，利用语义熵度量推理不确定性，并据此动态控制迭代次数、优化提示、增强推理路径多样性。

### 2.2 关键技术细节
- **任务特定提示（Task-Specific Prompt, TSP）模块**：
  1. 从任务数据集中采样一小部分问题作为 query，输入 LLM 生成多个候选提示（如“Let’s think step by step, %s”的变体）。
  2. 用另一不相交的问题集评估每个候选提示的**平均语义熵**，选择熵最低的提示作为该任务的最优提示 `p_hat`。
  3. 测试时使用 `p_hat` 引导 LLM 进行多轮采样并生成初始推理过程和答案。
- **自适应推理迭代（Adaptive Reasoning Iteration, ARI）模块**：
  1. 计算当前答案集的**语义熵** `e`，若 `e ≤ δ`（阈值）则直接输出最终预测，停止迭代，避免**过度推理**。
  2. 若 `e > δ`，进入下一轮迭代。为避免与上一次推理高度相似，引入**全新的多样性提示 `p*`**，并配合原始问题、过往推理和答案构建新输入，引导 LLM 从不同视角重新推理。
  3. 使用 **Jaccard 相似度**衡量新旧推理过程的集合相似性，若相似度超过阈值 `τ` 则重新采样，确保推理差异显著。
  4. 迭代继续直到语义熵满足条件或达到最大迭代次数 `T`；若达到上限仍未收敛，采用**所有迭代中预测的多数投票**作为最终输出。
- **理论支撑**：论文给出了 self-training 中信息熵变化的定理（Theorem 3.2），并将类似动态推广到 CoT 的语义熵，定义初始路径、最优路径和迭代推理的形式化模型。

### 2.3 算法流程（文字说明）
1. **离线**：利用少量任务样本生成并选择任务最优提示。
2. **在线推理（第 1 轮）**：用最优提示对问题采样 N 条推理，生成 N 个答案，计算语义熵；若熵低则输出多数答案，否则进入迭代。
3. **迭代轮次**：用多样性提示重构输入、生成新推理和答案，检查相似度确保路径差异性，再评估熵并决定是否继续。
4. **终止**：语义熵达标或达到最大迭代次数时输出最终预测。

## 3. 实验设计
### 3.1 数据集
- **算术推理**（6个）：MultiArith, GSM8K, SingleEq, AddSub, AQuA, SVAMP。
- **常识推理**（2个）：StrategyQA, CommonsenseQA。
- **符号推理**（2个）：LastLetter, CoinFlip。
- 同时构造了零样本（zero-shot）和少样本（few-shot）任务。

### 3.2 基准方法
- 直接零样本推理（Zero-Shot）。
- 零样本 CoT + 贪心解码。
- 零样本 CoT + 自一致性（Self-Consistency, SC）。
- 对比性 CoT（Contrastive-CoT）和重读推理（RE2）等近期方法。

### 3.3 实验环境
- 基础模型：GPT-3.5-turbo-0125（用于生成推理和答案）。
- SC 采样次数固定为 3（多数情况）。
- 评估指标：准确率（accuracy），并记录了时间成本。

## 4. 资源与算力
- **论文未明确提及所用 GPU 型号、数量或训练时长**。所有实验均基于调用 GPT-3.5-turbo 的 API 完成推理，没有进行模型微调或预训练，因此不涉传统意义上的算力消耗报告。文中仅给出了不同迭代次数下的总耗时（小时级别），以反映效率对比。

## 5. 实验数量与充分性
- **主要实验**：10 个数据集 × 多个对比方法（约 6 种基准），全面覆盖算术、常识、符号推理，并分别在零样本和少样本设置下验证。
- **消融实验**：逐步叠加 TSP 和 ARI 模块，单独分析每个模块的贡献（Table 1, Table 2）。
- **迭代方式对比**：自适应迭代 vs. 固定次数迭代，比较准确率和时间成本（Figure 5）。
- **超参数敏感性**：分析了最大迭代次数 `T` 和采样路径数 `N` 对准确率和时间的影响（Figure 7）。
- **语义熵与准确率关联性分析**：展示不同熵水平下的准确率变化（Figure 3）。
- 总体而言，实验**数量丰富、对比方式系统、公平**，能够充分支撑论文结论。

## 6. 论文的主要结论与发现
- 理论分析与实验共同揭示：CoT 推理本质上是一个**语义熵逐步降低**的过程，与 self-training 的熵最小化具有高度一致性。
- 语义熵的降低主要由部分样本从错误转为正确驱动，但并非所有样本都单调下降，存在熵升导致正确变错误的“过度推理”风险。
- 提出的 **TSP 模块**可自动生成与任务特性对齐的最优提示，大幅提升初始推理质量，减少所需迭代次数。
- **ARI 模块**通过语义熵监控和多样性提示，有效缓解了过度推理和连续迭代过于相似的问题，在多个基准上同时提升了**准确率**和**计算效率**。
- 方法可作为一种即插即用的插件，应用于各类 CoT 方法（包括零样本和少样本）。

## 7. 优点
- **视角新颖**：将 self-training 的熵最小化观点成功迁移到 CoT 推理，给出形式化定义和理论分析。
- **机制自适应**：用语义熵作为不确定性指标，智能决定迭代终止时机，避免固定次数的低效或过度推理。
- **提示自动优化**：无需人工设计，通过最小化语义熵自动从数据中搜索最优任务提示，具有较好的泛化性。
- **多样性显式控制**：引入新提示和 Jaccard 相似度约束，保证迭代过程中推理路径的分化，提升探索能力。
- **实验扎实**：覆盖多个领域和设置，对比基线充分，效率评估完整，代码开源保证可复现性。

## 8. 不足与局限
- **模型依赖性强**：实验仅在 GPT-3.5-turbo 上验证，未在更大规模或不同架构的模型（如 GPT-4、开源模型）上测试，泛化能力未知。
- **阈值敏感性**：语义熵阈值 `δ` 和相似度阈值 `τ` 可能需要针对任务调参，文中未给出通用选取策略。
- **常识推理收益有限**：在常识 QA 任务上提升微弱，方法受限于 LLM 内部先验知识的储备，无法仅通过推理过程解决知识缺陷。
- **提示生成依赖数据**：TSP 模块需要少量标注样本用于语义熵评估，在彻底零资源场景下可能难以应用。
- **计算开销递增**：虽然相比固定迭代更高效，但每次迭代仍需要多次 LLM 调用，极端情况下的成本依然较高。
- **未考虑成本分析**：缺乏对 API 调用费用或推理延迟的定量比较。

（完）
