---
title: Sample Efficient Demonstration Selection for In-Context Learning
title_zh: 高效采样演示选择用于上下文学习
authors: "Kiran Purohit, Venktesh V, Sourangshu Bhattacharya, Avishek Anand"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=cuqvlLBQK6"
tags: ["query:pe"]
score: 9.0
evidence: 提出样本高效的少示例选择策略，用于预算约束下的上下文学习提示构建
tldr: 针对上下文学习中少示例选择面临的组合爆炸和低效问题，本文将示例选择建模为top-m最佳臂识别问题，提出选择性探索策略CASE。该策略通过维护挑战者短列表，在有限查询下高效筛选高质量示例。实验表明CASE在多种任务上以更少的样本显著提升了提示效果。这为优化提示内容、改善上下文学习提供了实用方法。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-cuqvllbqk6/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 866, \"height\": 825, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cuqvllbqk6/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1729, \"height\": 547, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cuqvllbqk6/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1701, \"height\": 528, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cuqvllbqk6/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 503, \"height\": 445, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cuqvllbqk6/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1748, \"height\": 518, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cuqvllbqk6/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1750, \"height\": 522, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cuqvllbqk6/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1621, \"height\": 680, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1774, \"height\": 948, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 782, \"height\": 277, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 864, \"height\": 221, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1767, \"height\": 588, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 864, \"height\": 294, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1554, \"height\": 1085, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1765, \"height\": 2180, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1785, \"height\": 2148, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1781, \"height\": 2121, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1785, \"height\": 2114, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cuqvllbqk6/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1790, \"height\": 1905, \"label\": \"Table\"}]"
motivation: 有限的上下文预算下，高效选择最优少示例是提升提示效果的关键。
method: 将示例选择形式化为top-m最佳臂问题，提出挑战者臂采样策略CASE。
result: 以远少于基线的查询次数，选出高质量示例，提升下游任务表现。
conclusion: CASE为上下文学习中的示例选择提供了高效且有效的解决方案。
---

## Abstract
The in-context learning paradigm with LLMs has been instrumental in advancing a wide range of natural language processing tasks. The selection of few-shot examples (exemplars / demonstration samples) is essential for constructing effective prompts under context-length budget constraints. In this paper, we formulate the exemplar selection task as a top-m best arms identification problem. A key challenge in this setup is the exponentially large number of arms that need to be evaluated to identify the m-best arms. We propose CASE (Challenger Arm Sampling for Exemplar selection), a novel sample-efficient selective exploration strategy that maintains a shortlist of “challenger” arms, which are current candidates for the top-m arms. In each iteration, only one of the arms from this shortlist or the current top-m set is pulled, thereby reducing sample complexity and, consequently, the number of LLM evaluations. Furthermore, we model the scores of exemplar subsets (arms) using a parameterized linear scoring function, leading to stochastic linear bandits setting. CASE achieves remarkable efficiency gains of up to 7× speedup in runtime while requiring 7× fewer LLM calls (87% reduction) without sacrificing performance compared to state-of-the-art exemplar selection methods. We release our code and data (https://github.com/kiranpurohit/CASE).

---

## 论文详细总结（自动生成）

## 一、论文的核心问题与整体含义

- **核心问题**：在大型语言模型（LLM）的上下文学习（In-Context Learning, ICL）范式下，如何**在有限的上下文长度预算内，高效且高质量地选择少量示例（demonstration exemplars）**，以构建出最优的提示（prompt）来提升下游任务表现。
- **研究动机与背景**：
  - ICL 使 LLM 无需参数更新即可适应任务，但示例选择的好坏直接影响效果。
  - 现有方法（如 LENS、EXPLORA）虽能在任务级选出一组固定的示例（避免推理时开销），但存在**计算开销大、LLM 调用次数多、样本效率低**的问题。
  - 示例选择可被看作是一个**指数级候选子集**上的组合优化问题，很难通过穷举或简单启发式方法高效求解。

## 二、论文提出的方法论

- **问题形式化**：将“选择最优的 top-m 个示例子集（每个子集大小为 k）”任务建模为**随机线性赌博机（stochastic linear bandit）中 top-m 最佳臂识别问题**。
  - 每个臂（arm）对应一个候选示例子集，臂的奖励（reward）定义为该子集在验证集上的准确率。
  - 奖励采用线性结构：`ρ(a) = α^T x_a`，其中 `x_a` 是基于示例与验证样本语义相似度（SentenceBERT）构造的特征向量。
- **核心方法**：提出 **CASE（Challenger Arm Sampling for Exemplar selection）** 算法。
  - 维护两组候选臂：当前估计的 **top-m 集合** `U_t` 和**挑战者短名单** `N_t`（包含当前次优的 m′ 个臂）。
  - **选择性探索**：在每一轮，从 `U_t` 与 `N_t` 之外随机采样一批臂，并结合已有臂的高分者更新 `N_t`，从而**大幅压缩需要计算的候选臂空间**，避免在全指数空间上进行 gap-index 比较。
  - **臂的选择与参数更新**：基于 gap-index 准则从 `U_t` 和 `N_t` 中挑出最模糊的臂对，并调用 LLM 获取实际奖励以更新设计矩阵和线性系数的最小二乘估计。
  - 理论上给出了在该挑战者短名单框架下的**样本复杂度上界**（以高概率停止时的总臂拉动次数），证明了算法的收敛性和样本高效性。
- **关键流程**（伪代码描述）：
  1. 初始化随机 top-m 集、系数 `α`、时间步 t。
  2. 重复直到 gap-index 小于阈值 ε：
      - 若 `N_{t-1}` 中最高分臂优于 `U_{t-1}` 中最低分臂，则交换。
      - 随机采样一批新臂，与 `N_{t-1}` 合并取前 m′ 组成新的 `N_t`。
      - 在 `U_t` 和 `N_t` 中计算最模糊的臂对 `b_t` 与 `s_t`。
      - 通过选择规则（最小化方差）拉动一个臂并调用 LLM 评估其奖励。
      - 更新设计矩阵 `V_{t+1}` 和线性参数 `α_{t+1}`。
  3. 输出最终的 top-m 臂。

## 三、实验设计

- **数据集与场景**：
  - **数值推理**：GSM8K、FinQA、TabMWP、AquaRAT。
  - **常识推理**：StrategyQA。
- **评估指标**：
  - 准确率：精确匹配（Exact Match）与 Cover-EM（用于 TabMWP 等）。
  - 效率：总 LLM 调用次数、平均每次迭代 LLM 调用次数、运行时间。
- **对比的基线方法**：
  - **实例级选择**：KNN（基于相似度）、MMR（多样性+相似度）、KNN+SC、MMR+SC、PromptPG。
  - **任务级选择**：Manual Few-Shot CoT、随机选择、GraphCut、Facility Location、Active-prompt、LENS、EXPLORA。
  - **合成实验**：与 LinGapE、LinGIFA 对比 gap-index 计算量、运行时间、收敛性。
- **混合变体**：CASE 与实例级方法结合（CASE+KNN+SC、CASE+MMR+SC）以进一步缩小搜索空间。

## 四、资源与算力

- **使用的 LLM**：
  - 闭源模型：GPT-3.5-turbo、GPT-4o-mini。
  - 开源模型：Mistral-7B、Llama2-7B。
- **算力细节**：
  - 论文**未明确说明** GPU 型号、数量或训练总时长。主要计算开销来自 LLM 推理调用，而非传统模型训练。文中重点报告的是**LLM 调用次数的减少**（最高降低 87%）和**运行时间的 speedup**（最高 7 倍）。
  - 合成实验在 CPU 上运行，未提及特殊硬件需求。

## 五、实验数量与充分性

- **实验数量**：
  - 在 5 个不同领域的真实数据集上进行了主实验和对比。
  - 针对 4 种 LLM 模型（2 个闭源、2 个开源）评估。
  - 合成实验包含 3 种不同臂数（K=7,10,20），每种进行 500 次仿真。
  - 包含消融实验：一次性采样、无探索的 CASE 变体。
  - 包含鲁棒性分析（跨评估集子集的标准差）和定性示例对比。
  - 包含小模型到更大模型的示例迁移实验。
- **充分性与公平性**：
  - 对比基线丰富，涵盖了任务级和实例级的主流方法。
  - 所有方法使用相同的训练/验证集划分和相同的 LLM 推理参数设置，**保证了公平性**。
  - 在多个维度验证了效率与效果，**实验较为充分**。

## 六、论文的主要结论与发现

- CASE 在**不牺牲任务性能**的前提下，实现了**最高 7 倍的 LLM 调用减少和 7 倍运行时间加速**，在样本效率上远超 LENS 和 EXPLORA。
- 与现有 gap-index 方法（LinGapE、LinGIFA）相比，CASE 通过挑战者臂采样**大幅降低了 gap-index 计算次数**，收敛更快。
- CASE 选出的任务级示例**比实例级选择方法更鲁棒**（跨测试集切分的方差更小），且**混合使用**（CASE + 实例级选择器）能进一步提升性能，最高相对 EXPLORA 提升 19.85%。
- 使用较小 LLM（如 Mistral-7B）由 CASE 选出的示例，可**有效迁移到更大的 LLM（如 GPT-3.5-turbo）** 中，进一步节约选例成本。

## 七、优点

- **样本高效且实用**：显著降低了珍贵的 LLM 调用次数，对黑盒模型同样适用。
- **理论支撑**：提供了基于线性赌博机框架的 top-m 识别算法及样本复杂度分析，方法有坚实的理论依据。
- **选择性探索策略**：创新地引入挑战者短名单替代全部补集，解决了指数级臂空间带来的计算不可行问题。
- **实验设计全面**：涵盖多个任务类型、多种 LLM、合成与真实数据、消融与鲁棒性分析，验证了方法的通用性和有效性。
- **可迁移性**：展示了小模型选例、大模型使用的策略，进一步降低了实际应用成本。

## 八、不足与局限

- **线性假设限制**：奖励模型假设为线性结构，对于复杂的 ICL 交互（如示例间的非线性作用）可能不够精确，需要进一步探索更复杂的奖励建模。
- **理论 regret 界未完全给出**：文中仅提供了基于已有 SETC 算法的平均 regret 假设，未针对 CASE 推导出严格的 regret 上界。
- **合成实验规模有限**：臂数最大仅测试到 20，与真实任务中巨大候选集相比规模较小。
- **验证集依赖**：方法需要使用额外的标注验证集来估算奖励，对于标签稀缺的任务可能存在局限性。
- **超参数敏感度未深入探讨**：如挑战者集大小 m’、阈值 ε、验证集比例等超参数对效果的影响未做详细灵敏度分析。
- **未在最新超大模型上验证**：实验使用的闭源模型为 GPT-3.5 和 GPT-4o-mini，缺少在 GPT-4 或更大规模模型上的对比。

（完）
