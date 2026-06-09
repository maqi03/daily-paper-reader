---
title: "FACTER: Fairness-Aware Conformal Thresholding and Prompt Engineering for Enabling Fair LLM-Based Recommender Systems"
title_zh: "FACTER: 公平感知的符合性阈值与提示工程驱动的公平LLM推荐系统"
authors: "Arya Fayyazi, Mehdi Kamal, Massoud Pedram"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=edN2rEemj6"
tags: ["query:pe"]
score: 4.0
evidence: 使用动态提示工程和对抗提示生成来提升LLM公平性，通过提示设计增强性能。
tldr: "FACTER在合规预测框架中引入自适应阈值和对抗提示生成器，当检测到偏见模式时自动收紧公平约束，无需重训模型，在MovieLens和Amazon上将公平违规降低95.5%并保持准确率，表明提示工程可有效提升推荐系统公平性。"
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-edn2reemj6/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1644, \"height\": 580, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-edn2reemj6/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1676, \"height\": 673, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-edn2reemj6/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 601, \"height\": 343, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-edn2reemj6/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 774, \"height\": 421, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-edn2reemj6/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 702, \"height\": 376, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-edn2reemj6/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 807, \"height\": 587, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1165, \"height\": 210, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1609, \"height\": 214, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1074, \"height\": 214, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1261, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 630, \"height\": 415, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 630, \"height\": 356, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 633, \"height\": 172, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 630, \"height\": 316, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 634, \"height\": 157, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 631, \"height\": 364, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 808, \"height\": 236, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-edn2reemj6/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 875, \"height\": 194, \"label\": \"Table\"}]"
motivation: LLM推荐系统易产生人口统计偏见，现有方法难以在不重训模型下动态缓解。
method: 提出FACTER框架，集成合规预测与动态提示工程，利用自适应语义方差阈值和违规触发的对抗提示生成器。
result: "在MovieLens和Amazon数据集上公平违规降低95.5%，同时推荐准确率持平。"
conclusion: 语义方差是有效的偏见代理指标，提示工程可灵活提升推荐公平性。
---

## Abstract
We propose FACTER, a fairness-aware framework for LLM-based recommendation systems that integrates conformal prediction with dynamic prompt engineering. By introducing an adaptive semantic variance threshold and a violation-triggered mechanism, FACTER automatically tightens fairness constraints whenever biased patterns emerge. We further develop an adversarial prompt generator that leverages historical violations to reduce repeated demographic biases without retraining the LLM. Empirical results on MovieLens and Amazon show that FACTER substantially reduces fairness violations (up to 95.5%)  while maintaining strong recommendation accuracy, revealing semantic variance as a potent proxy of bias.

---

## 论文详细总结（自动生成）

# FACTER: 公平感知的符合性阈值与提示工程驱动的公平LLM推荐系统

## 1. 核心问题与整体含义
- **研究动机**：大语言模型（LLM）在推荐系统中日益普遍，但黑盒LLM生成的推荐容易携带或放大人口统计偏见（如性别、年龄、职业），导致不同群体获得不公平的推荐。
- **核心问题**：如何在无法修改模型参数（黑盒API）的前提下，动态检测并缓解LLM推荐中的语义偏见，同时保持推荐准确性。
- **整体含义**：论文提出一种闭环的、以提示工程为中心的公平性校准框架FACTER，将统计保证（符合性预测）与动态提示调整相结合，实现公平性违规的大量减少，且无需模型重训。

## 2. 方法论
- **核心思想**：基于符合性预测（Conformal Prediction）设定语义差异阈值，定义公平性违规；当检测到违规时，触发提示级别的对抗性修正，并自适应收紧阈值，从而反复减少偏见。
- **关键技术细节**：
  - **最小属性变化公平性（Minimal-Attribute-Change Fairness）**：仅改变受保护属性（如性别），不改变非受保护特征，要求LLM输出嵌入的差异小于某个阈值。
  - **离线校准阶段**：
    - 构建校准数据集，计算用户上下文与物品的嵌入。
    - 利用基于相似度的权重矩阵（仅考虑不同保护属性且上下文接近的点）构建非符合性分数 \(S_i = d_i + \lambda \Delta_i\)，其中 \(d_i\) 是预测误差，\(\Delta_i\) 是跨群组语义差异惩罚。
    - 通过分位数计算初始阈值 \(Q_\alpha^{(0)}\)，提供有限样本覆盖率保证。
  - **在线校准阶段**：
    - 对每个新查询，用当前提示生成推荐，计算其公平性分数 \(S_{\text{new}}\)。
    - 若 \(S_{\text{new}} > Q_\alpha^{(t)}\) 则判定为违规。违规处理包含三个步骤：
      1. 将违规样本存入FIFO缓冲区。
      2. 若同一属性出现三次及以上相同输出特征（如“性别=女 → 仅浪漫片”），则在系统提示中注入 explicit 避免规则：“Avoid: (Gender=F) → (Romance-Only)”。
      3. 用指数衰减更新阈值：\(Q_\alpha^{(t+1)} = \gamma Q_\alpha^{(t)} + (1-\gamma)\min(Q_\alpha^{(t)}, S_{\text{new}})\)。
  - **算法流程图**（文字说明）：离线计算相似度矩阵、非符合性分数、初始阈值；在线阶段逐个查询处理，评估分数，如违规则更新提示和阈值，否则保持不变。
- **理论支撑**：提供了符合性覆盖引理、阈值更新收敛性定理、Type I 错误上界等理论保障。

## 3. 实验设计
- **数据集**：MovieLens-1M（2500交互，70%校准/30%测试）和Amazon Movies & TV（3750交互，同样70/30划分）。Amazon更稀疏，用于严格测试。
- **基准方法**：
  - Zero-Shot：直接LLM排序，无公平性调整。
  - UP5：先进的公平感知推荐模型（Hua et al., 2023），校准LLM生成平衡推荐。
- **评估指标**：
  - 公平性指标：公平违规数（超出阈值次数）、SNSR（跨组子网络相似度比）、CFR（反事实公平比）。
  - 准确性指标：NDCG@10、Recall@10。
- **所用LLM**：LLaMA3-8B、LLaMA2-7B、Mistral-7B，嵌入模型为 fine-tuned paraphrase-mpnet-base-v2。
- **超参数**：公平性惩罚λ=0.7，阈值衰减γ=0.95，邻居相似度τ_ρ=0.9，缓冲区大小M=50等。

## 4. 资源与算力
- **硬件**：8× NVIDIA RTX A6000 GPU，CUDA 12.4。
- **软件**：Python 3.12.8, PyTorch 2.1 with FlashAttention-2。
- **离线校准时间**：MovieLens-1M（~6K用户）约63分钟（LLaMA3-8B），使用近似最近邻索引（FAISS）与GPU批处理可将MovieLens-20M（~138K用户）缩短至数小时。
- **在线推理延迟**：每查询 < 200 ms（一次ANN查找 + 单次LLM调用）。

## 5. 实验数量与充分性
- **主要对比实验**：
  - MovieLens-1M上三种方法对比（Zero-Shot、UP5、FACTER迭代3）。
  - Amazon Movies & TV上的对比。
  - 不同LLM（3个模型）在MovieLens-1M上的横向比较。
  - 迭代收敛曲线（Figure 3,4），显示违规数随迭代单调下降。
- **消融实验（附录）**：
  - λ、γ、τρ、α、缓冲区大小M的消融。
  - 嵌入鲁棒性测试（3种不同嵌入模型）。
  - 模拟用户反馈对违规的影响。
  - 多属性公平性（性别+年龄）扩展实验。
  - 不同提示策略（通用警告、负样例、显式模式）对比。
- **实验充分性**：覆盖多个数据集、多个模型尺寸、消融和鲁棒性分析详尽，对比了SOTA基线。实验设计客观，指标全面，验证了方法在不同设置下的有效性。但测试集规模相对较小（MovieLens 750，Amazon 1125），未在大规模生产级数据上测试。

## 6. 主要结论与发现
- FACTER在MovieLens-1M上公平性违规从112（Zero-Shot）降至5，降幅95.5%；NDCG@10仅从0.458降至0.445，保持竞争力。
- 在Amazon稀疏数据上仍有效，违规从198降至18（降幅90.9%）。
- 不同LLM下均表现稳健，LLaMA3-8B几近零违规。
- 迭代过程中违规数单调下降，提示工程的影响显著，显式模式提示优于通用警告和负样例。
- 理论Type I错误界保守，实际违规率远低于理论上限，检测功效高。

## 7. 优点
- **无需重训模型**：完全适应黑盒LLM API部署。
- **统计保证**：结合符合性预测提供覆盖率保证，理论依据扎实。
- **动态自适应**：阈值和提示都会随着历史违规而自适应调整，形成闭环。
- **广泛验证**：多数据集、多模型、多维度消融，方法可靠。
- **实用性强**：计算成本可控，推理延迟低，适合在线部署。
- **可解释性**：生成的提示规则可读，有助于理解模型避免的偏见模式。

## 8. 不足与局限
- **数据集规模**：实验采用中等规模样本，未在超大规模推荐场景验证。
- **依赖嵌入质量**：公平性检测全靠嵌入模型，若嵌入本身有偏，可能误判。
- **受保护属性限制**：目前仅处理离散属性，对连续或交叉属性处理较为初步。
- **提示长度限制**：注入“避免”规则受token预算约束，需控制历史条目数。
- **用户反馈模拟**：用户纠正实验为合成反馈，实际部署中可能更复杂。
- **超参数敏感**：λ、γ等需手动调整，可能在不同场景需要重新调试。
- **仅针对推荐场景**：未在其他文本生成任务（如对话或摘要）上评估。

（完）
