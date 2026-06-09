---
title: Neural Genetic Search in Discrete Spaces
title_zh: 神经遗传搜索在离散空间中的应用
authors: "Hyeonah Kim, Sanghyeok Choi, Jiwoo Son, Jinkyoo Park, Changhyun Kwon"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=u8kFBce69J"
tags: ["query:pe"]
score: 9.0
evidence: 将神经遗传算法应用于对抗提示生成，实现提示的自动搜索与改进
tldr: 深度生成模型在测试时搜索性能受限。本文提出神经遗传搜索(NGS)，将遗传算法融入生成过程，通过父代条件生成实现交叉，可通用于路由问题、对抗提示生成和分子设计。在对抗提示生成中，NGS自动探索并生成有效攻击提示，实验证明该方法在离散空间搜索中的高效性，展示了进化算法在提示自动演化中的潜力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-u8kfbce69j/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 855, \"height\": 483, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u8kfbce69j/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1349, \"height\": 388, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u8kfbce69j/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1767, \"height\": 274, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u8kfbce69j/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1758, \"height\": 404, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u8kfbce69j/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1759, \"height\": 982, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u8kfbce69j/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1736, \"height\": 872, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-u8kfbce69j/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 843, \"height\": 952, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u8kfbce69j/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 845, \"height\": 256, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u8kfbce69j/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 853, \"height\": 761, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u8kfbce69j/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1676, \"height\": 558, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u8kfbce69j/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 876, \"height\": 380, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u8kfbce69j/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1588, \"height\": 853, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u8kfbce69j/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1585, \"height\": 855, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u8kfbce69j/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1145, \"height\": 646, \"label\": \"Table\"}]"
motivation: 测试时搜索方法对提升生成模型性能至关重要，但现有方法缺乏高效进化机制。
method: 提出神经遗传搜索，通过父代条件生成实现交叉，融入遗传算法进行离散空间搜索。
result: 在对抗提示生成任务中，NGS自动生成高质量对抗提示，性能优于基线。
conclusion: 为提示自动生成和进化提供了通用高效的进化算法框架。
---

## Abstract
Effective search methods are crucial for improving the performance of deep generative models at test time. In this paper, we introduce a novel test-time search method, Neural Genetic Search (NGS), which incorporates the evolutionary mechanism of genetic algorithms into the generation procedure of deep models. The core idea behind NGS is its crossover, which is defined as parent-conditioned generation using trained generative models. This approach offers a versatile and easy-to-implement search algorithm for deep generative models. We demonstrate the effectiveness and flexibility of NGS through experiments across three distinct domains: routing problems, adversarial prompt generation for language models, and molecular design.

---

## 论文详细总结（自动生成）

# 论文总结：Neural Genetic Search in Discrete Spaces

## 1. 核心问题与整体含义（研究动机和背景）
- 深度生成模型在测试时（inference time）的搜索方法对最终生成质量至关重要，但现有方法（如采样、束搜索、蒙特卡洛树搜索等）往往独立于模型训练过程，或需要为不同任务设计专用搜索算子。
- 遗传算法（GA）通过种群进化能高效探索离散空间，但传统GA需要针对问题手动设计交叉、变异等算子，泛化能力弱。
- 已有工作尝试将GA与深度模型结合，但大多只是用GA对模型输出进行后处理或依赖模型辅助GA，未能将进化机制直接**融入**生成过程。
- 本文提出 **Neural Genetic Search (NGS)**，一种通用的测试时搜索算法，将遗传算法的进化思想与预训练生成模型的序列生成能力融为一体，旨在不依赖领域特定规则的前提下，系统性提升多种任务的解的质量、多样性和鲁棒性。

## 2. 方法论
### 2.1 核心思想
- 把生成模型的**逐步采样**过程视为遗传算法中**子代染色体**的构造过程，模型学到的条件分布作为“进化算子”。
- **交叉（Crossover）**：给定两个父代序列，将生成过程中的词汇表限制为两父代出现过的符元（token）的并集，然后由预训练模型在该受限词汇表上采样生成子代。即 `pcross(s1,s2)(st|s<t) ∝ I(st ∈ Vs1,s2) pθ*(st|s<t)`。
- **变异（Mutation）**：分两类：
  - **约束强制变异**：若父代符元集合中已无任何符元能生成合法序列（满足约束），则自动解除词汇表限制。
  - **随机变异**：以概率 μ 随机解除词汇表限制，恢复为原模型的全词汇表采样。
- 通过二值指示变量 M 统一控制交叉与变异的切换，最终子代生成分布为两者的混合。

### 2.2 选择与替换
- 采用基于排名的优先采样：选择概率正比于 `(κ * |P| + rank(s))^{-1}`，其中 rank 按奖励（或奖励与新颖性的组合）从高到低排序。
- 每代从当前种群中按上述概率无放回选取父母，生成一定数量的子代，再从“种群 ∪ 子代”中用同种排名的采样进行替换，维持种群大小不变。

### 2.3 算法流程
1. 用预训练策略 `pθ*` 初始化种群。
2. 迭代进行：
   - 选择父母。
   - 通过 NGS（带交叉和变异规则）生成子代。
   - 用排名采样更新种群。
3. 迭代结束后返回最优解或种群。

## 3. 实验设计
论文在三个截然不同的离散空间任务上验证 NGS：

### 3.1 路由问题
- **数据集**：随机生成的 TSP、CVRP、PCTSP、OP 实例（200/500/1000 节点），以及真实基准 TSPLIB 和 CVRPLib。
- **基础模型**：用图神经网络生成边热力图作为序列生成策略。
- **对比基线**：在相同预训练模型下比较 **采样（best-of-N）**、**束搜索（BS）**、**蒙特卡洛树搜索（MCTS）**、**蚁群优化（ACO）**；部分实验中还包括自回归模型 LEHD + 随机重构（RRC）。
- 评价指标：优化目标值（例：路径长度）及与已知最优解的间隙（gap）。

### 3.2 对抗提示生成（红队语言模型）
- **场景**：微调攻击者语言模型（GPT-2）以生成有害提示，诱导受害者 LLM 产生不安全回复。
- **受害者模型**：训练阶段使用 Llama-3.2-3B-Instruct，测试时同时评估训练中未见过的模型（Llama-3.1-8B-Instruct, Llama-3.3-70B-Instruct, Gemma-2-9b-it, Qwen2.5-7B-Instruct, phi-4）。
- **对比基线**：采样、温度采样（τ=0.5,0.8）、top-k 采样（k=5,10）、top-p 采样（p=0.5,0.8）、束搜索（w=4,8）。
- 评价指标：提示毒性（由安全分类器 Llama-Guard-3 判断）与多样性（提示嵌入的平均成对余弦距离）。

### 3.3 分子设计
- **基准**：PMO（Practical Molecular Optimization）基准，包含性质优化（qed, jnk3, drd2, gsk3b）、多性质优化（perindopril mpo 等）和结构导向优化（isomers, deco hop, scaffold hop）共 10 个任务。
- **模型**：LSTM 序列生成器，使用 SMILES 字符串表示，用 GFlowNets 在 8000 次评估预算内训练。
- **对比的 GA 方法**：Graph GA、SMILES GA、STONED、SynNet，均为针对分子设计特化的遗传算法。
- 评价指标：Top‑10 分子的平均得分。

## 4. 资源与算力
- 文中明确说明了使用的硬件：
  - 路由问题和分子设计实验：服务器配备 **双 AMD EPYC 7542 32‑核 CPU**，**单块 NVIDIA RTX A6000 GPU**。
  - 语言模型红队实验：**4 块 NVIDIA A100 HBM2e 80GB PCIe GPU** 的云服务器。
- **未提供**各实验的具体训练或推理时间（墙上时间），但表格中给出了求解单个实例的平均时间（秒或分钟），例如 TSP500 的 NGS 约 17 秒，长期运行约 170 秒。

## 5. 实验数量与充分性
- **实验组数**：
  - 路由问题：4 个问题 × 多种规模（200/500/1000 节点） × 短运行与长运行（100 vs 1000 个样本预算） × 多个基线，外加真实数据集评估、自回归模型融合实验、超参数敏感性分析（种群大小、子代数、变异率），整体实验量大且覆盖广。
  - 红队攻击：2 种源受害者模型 × 6 种迁移受害者模型 × 8 种解码基线，共数十组对比，含多样性指标。
  - 分子设计：10 个任务，与 4 种专用 GA 比较；还补充了“完全训练 vs 训练+NGS”的消融实验。
- **公平性与客观性**：所有对比均在相同的预训练模型上使用不同的解码/搜索算法，消除了模型差异的混杂；路由实验中还控制了采样数量预算；遗传算法参数经过敏感性分析且表现稳健；红队任务同时报告毒性与多样性，避免单维度优势的误导。实验设计较为系统、客观。

## 6. 主要结论与发现
- NGS 在路由问题上，以相同或更少的计算预算，显著优于采样、束搜索、MCTS、ACO 等常用搜索方法，最优性间隙大幅缩小。
- 在对抗提示生成中，NGS 作为解码策略能在毒性与多样性间取得良好平衡，并在**迁移至未见受害者模型时展现出更强的鲁棒性**，有力证明了种群迭代式生成对分布偏移的适应能力。
- 在分子设计中，NGS 在 8/10 项任务中取得最佳分数，平均表现超越传统专用 GA，表明其作为“自动化遗传算法”的潜力。
- NGS 实现简单，仅需预训练序列生成模型，无需针对问题手工设计进化算子，具备高度通用性。

## 7. 优点
- **通用性**：方法仅依赖于序列生成模型的逐步采样，可无缝应用于路由、文本生成、分子设计等不同离散领域。
- **轻量易集成**：只需在生成过程中加入父代条件掩码和种群管理，几乎不改动模型架构和训练流程。
- **性能突出**：在多个任务中实现优于强基线的搜索效果，尤其在对抗提示的分布偏移下表现优异。
- **双重视角**：既可视为增强的遗传算法（学习算子），也可视为一种种群进化解码策略，提供两种研究视角。
- **超参数鲁棒性**：通过敏感性分析表明 NGS 在较广的超参数范围内均保持良好性能，具有实用价值。

## 8. 不足与局限
- **依赖预训练质量**：若基础模型的分布未覆盖高质量解区域，NGS 的改善幅度受限；文中亦建议未来可通过联合微调缓解。
- **引入超参数**：种群大小、子代数、变异率、排名系数等需要调节，尽管实验显示对这些参数鲁棒，但仍需一定经验。
- **缺乏理论保证**：作为两类启发式方法（深度学习 + 遗传算法）的组合，没有收敛性或生成分布渐近最优性的理论证明。
- **分子设计中的有效性间接保证**：未显式在每一步强制 SMILES 语法约束，生成有效性依赖于模型从训练数据中习得的规律。
- **大规模 CVRP1000 效果不佳**：当模型表示能力不足且后处理（局部搜索）占主导时，搜索算法之间的差异被掩盖，NGS 并未表现出优势。
- **计算复杂度**：当 mini‑batch 远大于子代数时，总推理次数可能增加；维持种群需额外内存（在路由问题中需存储边矩阵），但文中指出通常可接受。

（完）
