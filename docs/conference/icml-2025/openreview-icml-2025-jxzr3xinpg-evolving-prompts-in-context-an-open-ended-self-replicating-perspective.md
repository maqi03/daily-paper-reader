---
title: "Evolving Prompts In-Context: An Open-ended, Self-replicating Perspective"
title_zh: 上下文提示进化：一种开放的自复制视角
authors: "Jianyu Wang, Zhiqiang Hu, Lidong Bing"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=jXZR3XinPg"
tags: ["query:pe"]
score: 10.0
evidence: 通过将示例修剪为乱码进化提示，超越自动提示优化
tldr: 挑战上下文学习需精心设计示例的传统观念，提出通过将随机示例修剪为看似无意义的乱码来进化提示的新范式。实验表明该方法能匹配或超越现有自动提示优化技术，显著提升多种任务性能。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 862, \"height\": 303, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 784, \"height\": 318, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 855, \"height\": 282, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 821, \"height\": 233, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1627, \"height\": 504, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1625, \"height\": 501, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1735, \"height\": 546, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1747, \"height\": 1200, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1268, \"height\": 556, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1132, \"height\": 512, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jxzr3xinpg/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1752, \"height\": 546, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1683, \"height\": 582, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 815, \"height\": 203, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 748, \"height\": 476, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 894, \"height\": 354, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1764, \"height\": 717, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1756, \"height\": 809, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1514, \"height\": 476, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1686, \"height\": 282, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1260, \"height\": 289, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1081, \"height\": 509, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1734, \"height\": 323, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1412, \"height\": 2148, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1149, \"height\": 443, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1081, \"height\": 782, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 864, \"height\": 479, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 889, \"height\": 426, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 869, \"height\": 666, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 905, \"height\": 295, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1241, \"height\": 758, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1734, \"height\": 1573, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1741, \"height\": 85, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1738, \"height\": 1159, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 1742, \"height\": 85, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 1732, \"height\": 2265, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 1729, \"height\": 1160, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 1740, \"height\": 841, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-027.webp\", \"caption\": \"\", \"page\": 0, \"index\": 27, \"width\": 1733, \"height\": 1727, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-028.webp\", \"caption\": \"\", \"page\": 0, \"index\": 28, \"width\": 1755, \"height\": 84, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-029.webp\", \"caption\": \"\", \"page\": 0, \"index\": 29, \"width\": 1735, \"height\": 2038, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-030.webp\", \"caption\": \"\", \"page\": 0, \"index\": 30, \"width\": 1731, \"height\": 1032, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-031.webp\", \"caption\": \"\", \"page\": 0, \"index\": 31, \"width\": 1737, \"height\": 882, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-032.webp\", \"caption\": \"\", \"page\": 0, \"index\": 32, \"width\": 1733, \"height\": 1591, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-033.webp\", \"caption\": \"\", \"page\": 0, \"index\": 33, \"width\": 1548, \"height\": 515, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-034.webp\", \"caption\": \"\", \"page\": 0, \"index\": 34, \"width\": 870, \"height\": 455, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-035.webp\", \"caption\": \"\", \"page\": 0, \"index\": 35, \"width\": 1741, \"height\": 1526, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-036.webp\", \"caption\": \"\", \"page\": 0, \"index\": 36, \"width\": 1545, \"height\": 451, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-037.webp\", \"caption\": \"\", \"page\": 0, \"index\": 37, \"width\": 1540, \"height\": 2231, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-038.webp\", \"caption\": \"\", \"page\": 0, \"index\": 38, \"width\": 1535, \"height\": 2159, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jxzr3xinpg/table-039.webp\", \"caption\": \"\", \"page\": 0, \"index\": 39, \"width\": 1544, \"height\": 305, \"label\": \"Table\"}]"
motivation: 发现传统精心设计的提示并非最优，探索简化示例提示的潜力。
method: 提出修剪随机示例以生成乱码提示的自动进化策略。
result: 乱码提示在多种任务中达到或优于最先进自动提示优化。
conclusion: 揭示提示设计中简单修剪可能比复杂指令更有效。
---

## Abstract
We propose a novel prompt design paradigm that challenges conventional wisdom in large language model (LLM) prompting. While conventional wisdom prioritizes well-crafted instructions and demonstrations for in-context learning (ICL), we show that pruning random demonstrations into seemingly incoherent ''gibberish'' can remarkably improve performance across diverse tasks. Notably, the ''gibberish'' always matches or surpasses state-of-the-art automatic prompt optimization techniques, achieving substantial gains regardless of LLM alignment. Nevertheless, discovering an effective pruning strategy is non-trivial, as existing attribution methods and prompt compression algorithms fail to deliver robust results, let alone human intuition. In terms of this, we propose a self-discover prompt optimization framework, PromptQuine, an evolutionary search framework that automatically searches for the pruning strategy by itself using only low-data regimes. Much like the emergent complexity in nature—such as symbiosis and self-organization—arising in response to resource constraints, our framework evolves and refines unconventional yet highly effective prompts by leveraging only the tokens present within the context. We demonstrate its effectiveness across classification, multi-choice question answering, generation and math reasoning tasks across LLMs, while achieving decent runtime efficiency. We hope our findings can guide mechanistic studies on in-context learning, and provide a call to action, to pave the way for more open-ended search algorithms for more effective LLM prompting.

---

## 论文详细总结（自动生成）

# 论文总结：Evolving Prompts In-Context: An Open-ended, Self-replicating Perspective

## 1. 论文核心问题与整体含义
- **挑战传统上下文学习（ICL）范式**：通常认为，精心设计、语义完整的指令和示例能带来最佳提示效果；本文却证明，把随机示例修剪成句法和语义上几乎不可读的“胡言乱语”，反而能够大幅提升性能，且**匹配甚至超越当前最先进的自动提示优化技术**。
- **动机与背景**：
  - LLM 对提示极其敏感，细微变化能引起输出剧烈波动，自动提示优化成为热点。
  - 已有研究零星发现不自然的“秘密语言”能胜过自然指令，但缺乏系统方法将其大规模发掘。
  - 作者提出“部分上下文假设”：自然语言 ICL 提示中存在冗余或干扰特征，仅通过删减部分 token，就可能获得性能更强的提示。
- **整体含义**：将提示设计从“精心编写自然语言”转向一种**受资源约束的自复制进化过程**，即利用上下文内已有的 token，通过剪枝演化出非人类直觉的“LLM 语言空间”提示，从而开辟更开放的端到端提示搜索方向。

## 2. 方法论
- **核心思想**：将提示压缩重新定义为**引导式提示搜索**——从原始 ICL 提示中寻找一个子序列，使下游任务性能最大化；子序列长度不固定，随优化动态调整。
- **基线方法：TAPruning（阈值接受爬山法）**
  - 从左到右依次尝试删除每个 token，若性能不降低（或下降不超过阈值）则接受删除。
  - 重复多轮直到没有 token 可移除。该法作为快速验证“部分上下文假设”的工具，表现已颇具竞争力。
- **PROMPT QUINE：进化搜索框架**
  - **遗传算法（GA）设计**：
    - **个体**：二进制 token 掩码（基因型），决定哪些 token 保留，修剪后的 ICL 提示为表现型。
    - **变异**：位翻转（1→0），即随机删除若干 token（数量从 {1,2,3,4} 中均匀选取）。
    - **选择**：锦标赛选择 + 精英策略，采用**正则化进化**（新子代直接与当前种群竞争），有效防止早熟收敛。
    - **两种实现**：代际 GA（GGA，适合并行化）和稳态 GA（SSGA，更探索性）；1-shot 实验主要用 SSGA，4-shot 用 GGA。
  - **适应度函数**：
    - 分类任务：基于 RLPrompt 的分段奖励，利用正确预测与次高类概率的差距；
    - 生成任务：风格迁移用 Joint Score（内容、风格、流畅度乘积的平均）；越狱用精确匹配或 LLM‑as‑Judge 的攻击成功率；并探索了基于 steering vector 相似度的代理。
  - **校准重排序**：使用少量验证样本对进化历史中的精英个体重新评估，挑选最终提示，减少适应度代理的偏差。
- **算法流程归结**：初始化种群 → 循环进化（选择、复制、变异、评价）→ 收敛后，对历史精英校准、排序，输出最优提示。

## 3. 实验设计
- **数据集与场景**：
  - **分类**：SST‑2、Subj、AG’s News、Yelp‑5、SNLI、Yahoo（不同类别数、不同领域）。
  - **多选问答**：PIQA（常识推理）。
  - **文本生成**：Yelp 情感迁移（双向）；越狱攻击（AdvBench）。
  - **数学推理**：GSM8K、MAWPS（链式思维 CoT）。
- **基准方法**：
  - 原始 1‑shot/4‑shot ICL、LLMLingua、LLMLingua2（压缩）；
  - RLPrompt、EvoPrompt、Promptbreeder（提示优化）；
  - SAHCPruning（纯贪心爬山基线）。
- **模型范围**：RoBERTa‑large、GPT‑2、Gemma‑7b‑it、Meta‑Llama‑3‑8B/70B（base 和 instruct）、Vicuna‑7b、Mistral‑7B‑Instruct、Llama‑2‑7b‑chat 等，涵盖不同规模和对齐程度。
- **评估设置**：所有方法使用相同的训练/验证/测试划分，避免数据泄漏；提示优化时利用验证集一部分样本计算适应度，最终在独立测试集上报告结果；多数实验重复多次并报告标准差。

## 4. 资源与算力
- **硬件**：文中明确提到在 **NVIDIA A100 GPU** 上进行实验（如运行时效率表格），未提及多卡并行（虽方法支持并行）。
- **运行时间**：
  - 1‑shot 分类任务中：TAPruning 约 4.5‑12 分钟，PROMPT QUINE（GGA）约 4‑35 分钟，SSGA 约 18‑51 分钟。
  - 风格迁移：PROMPT QUINE（GGA）~40 分钟，SSGA 约 1.8‑5.2 小时。
  - 与传统方法相比（如 RLPrompt 需数小时至一天），效率提升显著。
- **搜索规模**：1‑shot 分类通常 10K 次提示评估；4‑shot 分类可达 100K 步，但多数早停。整体算力要求中等，未达到大集群级别。

## 5. 实验数量与充分性
- **大量实验组合**：6 个分类数据集 × 多模型 × 多个基线；PIQA；双方向风格迁移；越狱（多模型、多适应度代理）；数学推理 2 个数据集。
- **消融与分析**：
  - 搜索景观多峰性分析、爬山法随机序影响；
  - 标签词干预实验（移除标签、移除整个输出）；
  - 随机 verbalizer 与修剪效果；
  - 指令类型影响（任务指令、随机句、正交任务指令）；
  - 遗传算法变体比较（简单 GA、减少选择压、禁忌表、移民策略、随机重启、适应度共享）；
  - Shot 数缩放实验（1‑shot 至 8‑shot）。
- **客观性与公平性**：使用统一的数据划分、相同的测试协议，对比方法均按原论文最优设置或重新实现（如 Promptbreeder），并对关键结果给出均值和标准差，整体实验设计充分、对比公平。

## 6. 主要结论与发现
1. **修剪 → “胡言乱语” 效果显著且通用**：无论模型是否经过对齐，这种简单剪枝都能稳定提升 ICL 性能，甚至与 Promptbreeder 等复杂自动优化方法持平或更优。
2. **标签词仍重要，但修剪可突破**：修剪后的提示中标签词保留率高；移除标签会降低性能，但移除整个输出（打破输入‑标签对）影响更大；甚至在随机 verbalizer 下，修剪也能带来接近非随机 verbalizer 的准确率，尤其在大模型上。
3. **搜索景观多峰、爬山法易陷入局部最优**，而以正则化进化为基础的 PROMPT QUINE 能更有效地探索，找到更优子序列。
4. **非自然指令甚至随机句可超过任务本身指令**，进一步说明当前 LLM 对齐只是表面的。
5. **越狱攻击中修剪同样显著提升成功率**，凸显非自然语言可被恶意利用。
6. **限制**：修剪效果对 ICL 模板敏感，稳定性不足；目前仅支持固定顺序子序列搜索，缺少 token 插入/替换等更丰富操作；适应度代理仍有改善空间。

## 7. 优点
- **视角新颖**：用剪枝生成反直觉的“无用”提示来提升性能，颠覆了“提示必须自然流畅”的认知。
- **理论类比深刻**：将提示设计映射为受资源约束的进化、自复制过程，增强了方法的解释力。
- **方法简洁高效**：无需额外归因模型，不引入新 token，完全在上下文内通过进化搜索自动发现优化策略，且可并行，运行时优于多数对比方法。
- **实验完备且严谨**：跨任务、跨模型、多基线，包含丰富的消融与机制探索，统计汇报规范，并严格确保数据分离。

## 8. 不足与局限
- **模板敏感性强**：不同 ICL 模板下性能波动大，鲁棒性有待提升。
- **突变操作受限**：仅允许删除 token，未探索替换、插入等更丰富变异，限制了搜索空间的广度。
- **任务‑适应度代理匹配**：在数学推理任务中，PROMPT QUINE 有时不如 TAPruning，提示现有代理不够精准；某些生成任务需较多验证样本。
- **机制解释仍不充分**：虽分析了标签词，但对乱码为何有效、模型内部如何处理这类非自然输入，缺乏更深层机理

- **生成任务稳定性不足**：风格迁移、越狱等生成任务中，修剪带来的性能增益波动较大，部分设置下甚至不及原始完整提示，对适应度代理的选择极为敏感。
- **可扩展性讨论有限**：虽然在 1‑shot 和 4‑shot 上证明了效率，但 prompt 长度显著增加（如 8‑shot 或更长的链式思维）时，搜索空间指数增长，现有进化策略的伸缩性未深入量化。
- **超参数鲁棒性未系统考察**：种群大小、锦标赛压力、变异强度等遗传算法关键超参数多采用经验默认值，缺少消融实验证明最终提示对这些设置的鲁棒性。
- **伦理与防御缺失**：论文明确展示了修剪可大幅强化越狱攻击，但对如何防御这种“非自然语言武器化”未给出任何对策，存在被恶意利用的风险。
- **机理浅层化**：对“胡言乱语”为何超越自然语言、模型内部如何理解修剪后的序列，仅停留在现象报告和标签词保留率的统计层面，缺乏表征空间或注意力层面的深度分析。
- **受限的搜索操作**：仅允许固定顺序的 token 删除，无法调整顺序、插入、替换或重组片段，限制了发现更优、更紧凑提示的可能性，且忽略了 token 间交互结构的重建。

（完）
