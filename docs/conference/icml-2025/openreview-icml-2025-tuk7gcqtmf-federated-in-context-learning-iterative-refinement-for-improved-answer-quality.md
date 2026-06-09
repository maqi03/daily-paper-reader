---
title: "Federated In-Context Learning: Iterative Refinement for Improved Answer Quality"
title_zh: 联邦上下文学习：迭代精炼以提升答案质量
authors: "Ruhan Wang, Zhiyong Wang, Chengkai Huang, Rui Wang, Tong Yu, Lina Yao, John C.S. Lui, Dongruo Zhou"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=TUk7gCqtmf"
tags: ["query:pe"]
score: 8.0
evidence: Fed-ICL从联邦客户端迭代精炼示例以增强提示并提升上下文学习问答质量。
tldr: 针对数据隐私和高质量示例稀缺导致的上下文学习瓶颈，提出联邦上下文学习框架。利用客户端本地示例进行迭代精炼，在不传输模型参数的情况下提升问答性能，同时保护数据隐私。实验表明该方法在多个QA任务上有效利用了分散数据，取得优于集中式方法的成果，为隐私受限环境下的上下文学习提供了可行方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 846, \"height\": 576, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1766, \"height\": 742, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1772, \"height\": 744, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 869, \"height\": 307, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 868, \"height\": 308, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 867, \"height\": 312, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 866, \"height\": 312, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1433, \"height\": 402, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1441, \"height\": 402, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1765, \"height\": 337, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1765, \"height\": 330, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1769, \"height\": 739, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1757, \"height\": 752, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tuk7gcqtmf/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1770, \"height\": 461, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-tuk7gcqtmf/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1779, \"height\": 234, \"label\": \"Table\"}]"
motivation: 数据隐私约束下高质量示例稀缺，限制了上下文学习的有效性。
method: 提出Fed-ICL框架，从客户端迭代精炼示例以增强提示，无需传输模型参数。
result: 在多个问答任务上，利用分布式数据提升答案质量，保护隐私。
conclusion: 联邦上下文学习为隐私敏感场景的上下文增强提供了有效途径。
---

## Abstract
For question-answering (QA) tasks, in-context learning (ICL) enables language models (LMs) to generate responses without modifying their parameters by leveraging examples provided in the input. However, the effectiveness of ICL heavily depends on the availability of high-quality examples, which are often scarce due to data privacy constraints, annotation costs, and distribution disparities. A natural solution is to utilize examples stored on client devices, but existing approaches either require transmitting model parameters—incurring significant communication overhead—or fail to fully exploit local datasets, limiting their effectiveness. To address these challenges, we propose Federated In-Context Learning (Fed-ICL), a general framework that enhances ICL through an iterative, collaborative process. Fed-ICL progressively refines responses by leveraging multi-round interactions between clients and a central server, improving answer quality without the need to transmit model parameters. We establish theoretical guarantees for the convergence of Fed-ICL and conduct extensive experiments on standard QA benchmarks, demonstrating that our proposed approach achieves strong performance while maintaining low communication costs.

---

## 论文详细总结（自动生成）

好的，以下是基于所提供的论文文本生成的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **研究动机**：在问答任务中，上下文学习（ICL）的表现高度依赖于提示中提供的高质量示例。然而，由于数据隐私、标注成本和数据分布不均等问题，获取高质量示例常常非常困难。
*   **核心挑战**：现有利用客户端数据的方法存在两难困境：传统的联邦学习（如FedAvg）需要传输模型参数，通信开销巨大；而已有的无参数传输方法（如多智能体辩论）未能充分利用每个客户端的本地数据集，效果有限。
*   **整体含义**：本文旨在提出一种新的联邦学习框架，该框架既能利用分散在各客户端的高质量私有数据来增强问答效果，又能避免传输庞大的模型参数，从而在性能、隐私和通信成本之间取得平衡。

### 2. 论文提出的方法论

*   **核心思想**：提出**联邦上下文学习（Fed-ICL）** 框架，通过服务器与客户端之间多轮、迭代式地传递和精炼示例数据，在不交换模型参数的情况下，逐步提升整体问答质量。
*   **算法流程（Algorithm 1）**：
    1.  **初始化**：服务器保有一个查询数据集`C_k`（包含查询问题及其当前最佳答案），并发给所有客户端。
    2.  **客户端本地处理**：
        *   **服务器信息提取**：客户端使用服务器发来的`C_k`作为上下文示例，对自己的本地数据集`D_i`重新标注，形成新数据集`D_i^k`。这一步类似联邦学习中用全局模型初始化本地模型。
        *   **本地数据集提取**：客户端将原始数据集`D_i`和新标注的数据集`D_i^k`共同作为上下文示例，对服务器的查询问题进行预测，生成更新后的查询数据集`C_{i}^{k+1}`。
    3.  **服务器聚合**：服务器收集所有客户端返回的`C_i^{k+1}`，通过聚合（如回归取平均、分类多数投票、生成任务用轻量融合模型）得到新一轮的全局查询数据集`C_{k+1}`。
    4.  **迭代**：重复步骤2和3，直到答案收敛。
*   **理论保证**：
    *   在简化的单层线性注意力模型和回归任务设定下，证明了Fed-ICL的预测结果是查询向量的线性函数。
    *   证明了模型参数的更新公式为`w_{k+1} = 1/2 H_{cont} w_k + 1/2 w_{limit}`，并给出了收敛条件。当客户和服务器数据分布与预训练分布相似时，`H_{cont}`趋近于单位矩阵`I`，算法收敛，且收敛速度不受标签分布影响。`w_limit`对应的是在拥有所有客户端数据的情况下能学到的理论最优线性预测。
*   **关键优化技术**：
    *   **本地数据集过滤**：在客户端，使用k近邻方法选出与服务器查询最相关的本地示例，以加速推理并提升准确率。
    *   **Fed-ICL-Free变体**：针对客户端仅有问题而无对应答案的场景设计，在此变体中，客户端仅使用新标注的数据集`D_i^k`作为上下文示例。

### 3. 实验设计

*   **数据集与基准**：
    *   **基准测试**：MMLU（多选题，评估知识）和TruthfulQA（开放性问答，评估真实性）。
    *   **数据集构建**：从每个类别中抽取少量样本作为服务器查询（MMLU 114个，TruthfulQA 38个），其余数据用Dirichlet分布划分给客户端，通过调整参数α模拟不同程度的数据异构性。
*   **评价指标**：
    *   **MMLU**：准确率。
    *   **TruthfulQA**：以GPT-4o的回答为参考标准，使用BERTScore、BLEURTScore和BARTScore。
*   **对比方法**：
    *   **联邦学习方法**：FedAvg。
    *   **无参数方法**：MoA、LLM-Blender、LLM-Debate。
    *   **Fed-ICL的变体与边界**：Fed-ICL-Free（无答案）、Fed-ICL-GT（静态示例）、Fed-ICL-UB（所有数据集中在一个客户端的理论上限）、Fed-ICL-LB（不使用客户端数据的理论下界）。
*   **模型架构**：为公平比较，所有方法使用相同的大语言模型。客户端模型选用Llama-2-7B-chat-hf、Llama-3.1-8B-Instruct和GPT-4o-mini。

### 4. 资源与算力

*   论文文本中**未明确提及**实验所使用的具体GPU型号、数量及训练总时长。

### 5. 实验数量与充分性

*   **实验组数**：论文执行了多维度的多组实验，较为全面。
    *   **主实验**：在2个基准上，对比了7种方法（Fed-ICL及其变体、3种无参数基线、1种联邦学习基线），考察了3种数据异构性设置（共>42种配置）。
    *   **隐私分析**：进行了示例重建攻击实验。
    *   **消融实验**：系统地研究了4个维度对性能的影响（交互轮数、客户端数量、上下文示例长度、本地数据集过滤的有效性）。
*   **充分性与公平性**：实验设计相当全面，涵盖了主流基准、多种基线和上下界分析。通过控制相同的模型架构、客户端数量、轮次等进行对比，保证了实验的公平性。消融研究也清晰地展示了框架各组件（如迭代、过滤、上下文长度）的贡献。

### 6. 论文的主要结论与发现

*   **性能与成本优势**：Fed-ICL在多个问答基准上，以更低的通信成本，实现了超越传统联邦学习和无参数基线方法的性能。
*   **对模型能力的增益**：对于能力较弱的开源模型（如Llama系列），Fed-ICL的提升效果比在强大的闭源模型（如GPT-4o-mini）上更为显著。这说明强大的模型本身对额外高质量数据的依赖性更低。
*   **框架鲁棒性**：
    *   即使在数据异构性强（α值小）的场景下，Fed-ICL依然能有效工作。
    *   Fed-ICL-Free在客户端无答案标签的情况下仍保持有竞争力的性能，优于不使用本地数据集的LLM-Debate。
    *   迭代精炼过程对性能提升至关重要，Fed-ICL的性能在多轮交互后持续超越单轮的Fed-ICL-GT。
*   **隐私保护性**：通过模拟攻击实验表明，Fed-ICL能有效限制从客户端响应中逆向推断私有上下文示例的能力。

### 7. 优点

*   **创新性融合**：首次巧妙地将联邦学习的迭代优化范式与上下文学习相结合，提出了一种新的参数无传输的联邦学习框架。
*   **理论与实践并重**：不仅提出了实用框架，还在特定简化条件下给出了理论收敛性保证，增强了方法的可信度。
*   **方案设计全面**：考虑了有无答案标签的多种现实场景（Fed-ICL与Fed-ICL-Free），提出的过滤和聚合等实用技巧增强了框架的有效性。
*   **评估体系严谨**：实验设计周密，包含了与多种类型基线的对比、自身变体的对比、上下界分析、成本分析和隐私鲁棒性评估。

### 8. 不足与局限

*   **理论假设简化**：理论分析基于简化的线性注意力模型和回归任务，这一结论能否扩展到当前主流的Transformer架构和非线性任务仍然是一个开放问题。
*   **聚合阶段开销**：虽然避免了传输模型参数，但在生成任务中，服务器端需要使用额外的“融合模型”进行答案聚合，该模型的部署和推理开销未被深入讨论。
*   **客户端模型同质化假设**：理论和实验主要假设所有客户端使用相同的语言模型，未深入探讨客户端模型异构（如不同架构、尺寸）的场景。
*   **隐私分析初步**：隐私评估仅针对一种特定的提示提取攻击，未进行更全面、严格的形式化差分隐私分析，其隐私保护边界尚不明确。
*   **算力信息缺失**：未提供实验的算力开销，使得难以评估其落地时的资源门槛与时间成本。
*   **客户端数量影响**：消融实验显示，客户端数量增加（从3到5）反而导致性能下降，这对其在大规模客户端场景下的可扩展性提出了挑战。

（完）
