---
title: Large Language Models are Demonstration Pre-Selectors for Themselves
title_zh: 大语言模型作为自身的示范预选择器
authors: "Jiarui Jin, Yuwei Wu, Haoxuan Li, Xiaoting He, Weinan Zhang, Yiming Yang, Yong Yu, Jun Wang, Mengyue Yang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=YgfpMhNYnW"
tags: ["query:pe"]
score: 9.0
evidence: 预选择信息量高的示范来高效增强提示，提升上下文学习。
tldr: FEEDER预选择框架从全量训练数据中筛选出信息量最高的少数核心示范，替代每次查询的相似度检索，大幅降低计算开销，同时在少样本任务中保持强劲性能，为提示词增强提供了高效的范例选择方法。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-ygfpmhnynw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1775, \"height\": 430, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ygfpmhnynw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 670, \"height\": 578, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ygfpmhnynw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1786, \"height\": 892, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ygfpmhnynw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 856, \"height\": 499, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ygfpmhnynw/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1776, \"height\": 735, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ygfpmhnynw/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 865, \"height\": 302, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ygfpmhnynw/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 823, \"height\": 613, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ygfpmhnynw/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 771, \"height\": 580, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ygfpmhnynw/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 757, \"height\": 578, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ygfpmhnynw/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1768, \"height\": 885, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1768, \"height\": 1013, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1764, \"height\": 1011, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1768, \"height\": 714, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1762, \"height\": 412, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1766, \"height\": 1921, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1768, \"height\": 687, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1765, \"height\": 1921, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1766, \"height\": 686, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1768, \"height\": 1016, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1061, \"height\": 990, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1768, \"height\": 266, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1768, \"height\": 363, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ygfpmhnynw/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1768, \"height\": 608, \"label\": \"Table\"}]"
motivation: 现有少样本学习因每次查询都需检索全量数据而计算开销大，且忽视示范间信息冗余。
method: 提出FEEDER，一种少且必要的示范预选择器，通过识别核心示范子集来简化检索。
result: 在大规模数据集上显著降低检索成本，同时保持与全量检索相当的少样本性能。
conclusion: 预选择核心示范是提升上下文学习效率的有效策略。
---

## Abstract
In-context learning with large language models (LLMs) delivers strong few-shot performance by choosing few-shot demonstrations from the entire training dataset. However, previous few-shot in-context learning methods, which calculate similarity scores for choosing demonstrations, incur high computational costs by repeatedly retrieving large-scale datasets for each query. This is due to their failure to recognize that not all demonstrations are equally informative, and many less informative demonstrations can be inferred from a core set of highly informative ones. To this end, we propose FEEDER (FEw yet Essential Demonstration prE-selectoR), a novel \emph{pre-selection} framework that identifies a core subset of demonstrations containing the most informative examples. This subset, referred to as the FEEDER set, consists of demonstrations that capture both the ''sufficiency'' and ''necessity'' information to infer the entire dataset. Notice that FEEDER is selected before the few-shot in-context learning, enabling more efficient few-shot demonstrations choosing in a smaller set. To identify FEEDER, we propose a novel effective tree based algorithm. Once selected, it can replace the original dataset, leading to improved efficiency and prediction accuracy in few-shot in-context learning. Additionally, FEEDER also benefit fine-tuning LLMs, we propose a bi-level optimization method enabling more efficient training without sacrificing performance when datasets become smaller. Our experiments are on 6 text classification datasets, 1 reasoning dataset, and 1 semantic-parsing dataset, across 6 LLMs (ranging from 335M to 7B parameters), demonstrate that: (i) In few-shot inference, FEEDER achieves superior (or comparable) performance while utilizing only half the input training data. (ii) In fine-tuning, FEEDER significantly boosts the performance of LLMs.

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义（研究动机和背景）
- **问题背景**：大语言模型（LLM）的上下文学习（In-Context Learning, ICL）通过从训练数据中选择少量示范（demonstration）作为提示，实现高效少样本学习。
- **现有方法痛点**：
  - 多数方法针对每一次查询都需要从大规模训练数据中检索相似或多样的示例，计算开销巨大。
  - 不同 LLM 的知识和能力各异，同一个示范在不同模型上的效果差异显著，现有方法通常忽略模型特异性。
- **核心思想**：引入**预选择阶段**，即在实际 ICL 或微调之前，就为特定 LLM 挑选出一个规模小但信息高度浓缩的“核心示范子集”（FEEDER set），该子集可以替代完整训练库，降低下游检索成本并保证（甚至提升）性能。

## 2. 方法论
### 2.1 充分性与必要性度量
- **充分性（sufficiency）**：将一个数据点插入上下文，能否让 LLM 对另一个数据点产生正确答案。
- **必要性（necessity）**：从上下文中移除一个数据点，是否会导致原本正确的回答变错。
- 基于因果启发的插拔操作 `plug`/`unplug` 进行判断，并扩展到集合层面。

### 2.2 FEEDER 子集定义与树搜索算法
- **FEEDER 子集**：对完整训练集同时满足“充分性”和“必要性”的最小代表子集。
- 由于精确搜索复杂度为 $O(2^N)$，提出**基于树的近似算法**：
  - 自底向上合并节点：每个节点为一个示例集合。
  - 每轮检查成对节点之间的充分性关系：
    - 若相互充分，保留较小的节点；
    - 若单向充分，保留“充分者”；
    - 若均不充分，将二者合并。
  - 算法复杂度为 $O(K \log|\mathcal{D}|^2)$（实际取树深 $K=1$，运行轮数 $R=1$ 即可取得良好效果）。
- 最终输出的根节点即为预选出的 FEEDER 子集，被证明保证“充分性”。

### 2.3 双层优化框架（用于微调场景）
- 外循环：固定 LLM，利用上述算法更新 FEEDER 子集。
- 内循环：固定 FEEDER 子集，在此少量高质量数据上微调 LLM。
- 迭代上述两步，可以实现数据预选与模型微调的协同优化。

## 3. 实验设计
### 3.1 数据集与任务
- **文本分类**：SST-2, SST-5, COLA, TREC, SUBJ, FPB。
- **推理**：GSM8K。
- **语义解析**：SMCALFlow。
- **科学问答**：GPQA。
- 所有数据集使用官方训练/测试划分。

### 3.2 基础模型
- GPT-2（335M/774M）、GPT-neo（1.3B）、GPT-3（6B）、Gemma-2（2B）、Llama-2（7B）、Llama-3（8B）、Qwen-2.5（32B），覆盖从 3.35 亿到 320 亿参数规模。

### 3.3 对比方法
- **下游示范选择器**：Random、Similarity、Diversity、Uncertainty、Clustering、Latent 共 6 种。
- **基线**：直接用完整训练集 $\mathcal{D}_{\text{TRAIN}}$ 作检索池，搭配上述选择器。
- **FEEDER**：使用 FEEDER 子集代替完整训练集作为检索池，再进行下游选择。
- **微调场景**：比较“全量数据微调 + 全量检索”与“FEEDER 子集微调 + 子集检索”的 ICL 表现。

### 3.4 评价指标
- 准确率（accuracy），报告 8 种随机种子与 5 种 n-shot 排列下的均值和方差。

## 4. 资源与算力
- 论文指出实验在 **NVIDIA A100 GPU** 上进行，未提具体数量和使用时长。
- 微调超参数：batch size 32，warmup steps 100，学习率 $5\times10^{-5}$，权重衰减 0.01。
- 预选择算法的时间复杂度随样本量近线性增长，采用 $K=1, R=1$ 以平衡效率与效果。

## 5. 实验数量与充分性
- **主实验**：在 6 个文本分类数据集、1 个推理和 1 个语义解析数据集上，用 4~6 种 LLM 进行 ICL 评估，搭配 6 种选择器，shot 数取 1/2/5/10，结果表众多。
- **微调实验**：在多个数据集和不同 LLM 上进行双层优化对比。
- **消融与分析**：
  - 不同树深度 $K$ 和算法运行轮数 $R$ 对性能和子集大小的影响。
  - 随机选择同样大小子集的性能对比。
  - 精确 FEEDER（集成必要性检查）与近似 FEEDER 的对比。
  - 数据重复（复制训练集）情境下的鲁棒性测试。
  - 使用小模型预选的 FEEDER 迁移到大模型的效果。
  - 时间复杂度的实证测量图。
- 实验覆盖面广，比较公平，充分验证了方法的有效性和效率优势。

## 6. 主要结论与发现
- FEEDER 能够将训练数据缩减超过 20% 而保持甚至提升 ICL 性能。
- 预选子集搭配简单相似度选择器，即可达到或超越原数据集上使用复杂多样性选择器的效果。
- 在微调场景中，FEEDER 子集可使 LLM 在更少数据上训练，获得更好的 ICL 表现，强调“数据质量优先于数据量”。
- 示范的选择必须考虑特定 LLM，不同模型对同一示例的“充分性”和“必要性”判定不同。

## 7. 优点
- **创新性**：首次提出示范预选择阶段，从全局提炼核心子集，显著降低后续检索成本。
- **模型感知**：充分性和必要性基于目标 LLM 自身能力定义，使子集具有模型特异性。
- **高效算法**：树近似算法复杂度可控，默认仅需单轮单层检查（one-shot inference），实际可用。
- **应用双赢**：既能加速 ICL 提示构建，也能作为微调数据的智能筛选器。
- **实验扎实**：涵盖多任务、多模型、多选择器，消融充分。

## 8. 不足与局限
- **预选择成本**：仍需对训练集进行充分性检查，依赖 LLM 推理；对超大规模数据集需增量更新策略支持。
- **必要性保证不足**：近似算法主要保证充分性，必要性可能未完全优化，精确必要性搜索成本过高。
- **任务覆盖**：以分类和简单推理为主，未涉及生成、多语言等更广泛场景。
- **模型锁定**：FEEDER 子集与特定预选 LLM 绑定，更换模型需重新构建，灵活性受限。
- **潜在偏差**：用 LLM 自身判定充分性，可能放大模型既有的错误或偏见。

（完）
