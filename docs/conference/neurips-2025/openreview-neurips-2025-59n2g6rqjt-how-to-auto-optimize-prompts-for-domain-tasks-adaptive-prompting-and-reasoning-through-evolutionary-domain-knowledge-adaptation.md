---
title: How to Auto-optimize Prompts for Domain Tasks? Adaptive Prompting and Reasoning through Evolutionary Domain Knowledge Adaptation
title_zh: 如何自动优化领域任务的提示词？通过进化领域知识适应实现自适应提示与推理
authors: "Yang Zhao, Pu Wang, Hao Frank Yang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=59n2g6RqjT"
tags: ["query:pe"]
score: 10.0
evidence: 进化图优化自动设计领域任务的最优提示与推理过程
tldr: 针对领域任务中设计最优提示和推理过程的挑战，本文提出EGO-Prompt框架，通过进化图优化自动构建提示和语义因果图，整合领域知识并提升推理效率。实验验证了该方法能有效提升提示质量和模型性能，为自动化提示工程提供了新途径。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-59n2g6rqjt/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1432, \"height\": 826, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-59n2g6rqjt/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1209, \"height\": 804, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-59n2g6rqjt/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 680, \"height\": 483, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-59n2g6rqjt/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 686, \"height\": 471, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-59n2g6rqjt/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 636, \"height\": 516, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-59n2g6rqjt/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 758, \"height\": 615, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-59n2g6rqjt/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 699, \"height\": 415, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-59n2g6rqjt/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1458, \"height\": 452, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-59n2g6rqjt/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1455, \"height\": 237, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-59n2g6rqjt/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1461, \"height\": 797, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-59n2g6rqjt/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 709, \"height\": 174, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-59n2g6rqjt/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 857, \"height\": 217, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-59n2g6rqjt/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 815, \"height\": 255, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-59n2g6rqjt/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1303, \"height\": 1001, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-59n2g6rqjt/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1008, \"height\": 335, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-59n2g6rqjt/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1443, \"height\": 453, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-59n2g6rqjt/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 599, \"height\": 225, \"label\": \"Table\"}]"
motivation: 领域任务中设计最优提示和推理过程极具挑战，需要整合领域知识并提升推理效率。
method: 提出EGO-Prompt框架，利用进化图优化自动设计提示和语义因果图，集成域知识。
result: 实验表明，该方法能有效提升领域任务的提示质量和推理性能。
conclusion: EGO-Prompt为自动化提示工程提供了新颖的进化优化方案，可适应不同领域需求。
---

## Abstract
Designing optimal prompts and reasoning processes for large language models (LLMs) on domain-specific tasks is both necessary and challenging in real-world applications. Determining how to integrate domain knowledge, enhance reasoning efficiency, and even provide domain experts with refined knowledge integration hints are particularly crucial yet unresolved tasks. In this research, we propose Evolutionary Graph Optimization for Prompting (EGO-Prompt), an automated framework to designing better prompts, efficient reasoning processes and providing enhanced causal-informed process. EGO-Prompt begins with a general prompt and fault-tolerant initial Semantic Causal Graph (SCG) descriptions, constructed by human experts, which is then automatically refined and optimized to guide LLM reasoning. Recognizing that expert-defined SCGs may be partial or imperfect and that their optimal integration varies across LLMs, EGO-Prompt integrates a novel causal-guided textual gradient process in two steps: first, generating nearly deterministic reasoning guidance from the SCG for each instance, and second, adapting the LLM to effectively utilize the guidance alongside the original input. The iterative optimization algorithm further refines both the SCG and the reasoning mechanism using textual gradients with ground-truth. We tested the framework on real-world public health, transportation and human behavior tasks. EGO-Prompt achieves 7.32\%–12.61\% higher F1 than cutting-edge methods, and allows small models to reach the performence of larger models at under 20\% of the original cost. It also outputs a refined, domain-specific SCG that improves interpretability.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **研究背景**：大语言模型（LLMs）在真实世界的领域任务（如公共卫生、交通、行为建模）中应用时，需要设计与任务高度适配的提示（prompt）和推理流程。人工设计提示不仅耗时，还可能引入偏差或遗漏关键领域知识。
- **核心问题**：如何自动优化提示与推理过程，并有效融合结构化的领域知识（尤其是因果知识），同时避免因专家提供的知识图不完整或因外部数据库固定不变而导致的性能受限。
- **整体含义**：论文提出一种名为EGO-Prompt的进化式框架，利用可进化的语义因果图（SCG）和文本梯度自动优化，使LLM能够自适应域任务，在小模型上以极低成本达到甚至超越大模型性能，并修正与完善专家初期构建的因果图。

### 2. 论文提出的方法论
- **核心思想**：将领域知识表示为可进化的有向无环语义因果图（SCG），通过两阶段推理将全局图转化为实例专属的推理引导，再利用文本梯度对提示、SCG和因果系统提示进行迭代联合优化。
- **关键技术细节**：
  - **SCG初始化**：由人类专家提供一个不要求完美的初始SCG，包含节点（描述实体）和有向边（语义因果关系）。
  - **两阶段推理**：
    - 图描述模型 \(M_F\) 根据输入 \(x_i\) 和 SCG \(G\)，生成实例专属的确定性推理指导 \(z_i^* = M_F(x_i; P_{cau}, G)\)，滤除无关或缺失信息。
    - 预测模型 \(M_{F'}\) 基于 \(x_i\) 和 \(z_i^*\) 做出预测 \(\hat{y}_i = M_{F'}(x_i, z_i^*; P_{sys})\)。
  - **文本梯度优化**：
    - 定义文本形式损失函数 \(L(\hat{y}_i, y_i)\)（如“预测与真实标签匹配/不匹配”）。
    - 利用链式法则通过LLM生成文本梯度：\(\nabla P_{sys} L_i = M_B(P_{sys}, \hat{y}_i, \partial L_i/\partial \hat{y}_i)\)，其中 \(M_B\) 是更强的反向引擎（如GPT-4o）。
    - 类似地计算SCG梯度 \(\nabla_G L_i = \nabla_{z_i^*} L_i \cdot \partial z_i^* / \partial G\)，并限制SCG更新操作（增加、删除、编辑节点/边描述）。
  - **迭代优化算法**：分阶段依次更新系统提示和SCG/因果提示，仅在产生验证集性能提升时接受更新，避免信号冲突。
- **核心公式**：\(p(y|x,G) = p(y|x, z^*(x,G))\)，通过近乎确定性的引导 \(z^*\) 将整个SCG的推理浓缩为实例特定上下文。

### 3. 实验设计
- **数据集与场景**：
  - **Pandemic（公共卫生）**：预测COVID-19住院趋势（5类），5200条文本描述，来源于CDC报告。
  - **TrafficSafe（交通安全）**：预测车祸严重程度（4类），16188条来自美国真实车祸报告的结构化文本。
  - **Swissmetro（人类行为）**：预测出行方式选择（3类），10728条源于瑞士意愿调查数据。
- **Benchmark与对比方法**：
  - 基线提示方法：专家组织提示（Organized Prompt）、Zero-Shot-CoT、Auto-CoT、PHP。
  - 自动提示优化（APO）方法：ProTeGi、TextGrad。
  - 由于缺乏现成领域图数据库，未使用RAG类方法。
- **实验设置**：每个数据集随机平衡采样100验证、100测试、其余训练（用于优化）。每个实验运行3次取最佳表现，优化步数6~12，批大小为3。反向引擎固定为GPT-4o，前向引擎涵盖GPT-4o mini、GPT-4.1 mini、GPT-5 mini、Gemini 2.0 Flash、Gemini 2.5 Flash以及多个开源模型。

### 4. 资源与算力
- 论文未明确提及GPU型号、数量或训练时长，因为方法完全基于LLM API调用，不进行模型微调。
- 成本报告于附录：每优化步骤成本约0.3~0.4美元，整个任务优化总成本约2~5美元；推理阶段，EGO-Prompt用于GPT-4o mini的每百样本平均成本仅0.057美元，远低于o4-mini（0.33美元）或o1（约7-10美元）。

### 5. 实验数量与充分性
- 实验覆盖：
  - 不同模型家族（OpenAI、Google、开源Qwen/DeepSeek/Llama系列）与不同规模，总计超10个模型。
  - 三个截然不同的真实世界领域，各有不同的预测目标与类别数量。
  - 消融研究：移除实例化推理引导、分别固定/移除图模型和预测模型、去掉单段优化或整体优化。
  - SCG敏感性：测试初始图为空、部分边随机移除、边全部反向等情形。
  - 性能波动分析：重复10次运行展示箱线图，分析随机性影响。
- 客观性与公平性：所有数据集公开，对比方法忠实复现，评价指标（加权F1、准确率）一致，并同时报告测试集性能避免过拟合。实验设计可充分证明方法有效性，但验证/测试集较小（各100条）可能在极少数情况下导致偶然性能下降。

### 6. 论文的主要结论与发现
- EGO-Prompt在三个域任务上均显著优于所有基线，平均F1提升7.32%~12.61%。
- 可大幅提升小模型性能，使GPT-4o mini等弱模型达到或超越o4-mini、o1等推理模型效果，而成本仅有其1/6~1/140。
- 自动修正并丰富初始专家SCG，输出了更准确的因果图，增强了可解释性。
- 两阶段分解和迭代优化策略对最终性能至关重要。

### 7. 优点
- **创新性整合**：首次将文本梯度自动优化与可进化的因果图相结合，同时优化提示、推理和领域知识结构。
- **强容错性**：对初始SCG的完整性和准确性要求低，可自动纠错与补全。
- **计算高效**：无需模型微调，仅通过少量API调用（几百条数据，约3美元）即可完成优化，推理成本极低。
- **出色泛化性**：跨任务、跨模型（包括小到1.7B参数的开源模型）均能稳定提升，方法通用。
- **输出可解释增益**：除提升性能外，还返回精炼的领域因果图，可直接辅助专家知识迭代。

### 8. 不足与局限
- **优化过程随机性**：LLM API输出非确定性导致结果存在约20%的波动，强依赖多次运行选最佳，可能在实际单次部署中不稳定。
- **小样本过拟合风险**：仅用约300条训练数据优化，可能对验证集过拟合，特别是当优化步数过多时。
- **资源需求虽低但仍需较强反向引擎**：需要使用GPT-4o级别模型作为反向引擎，在受限环境下可能无法实施。
- **实验规模局限**：验证和测试集量较小（100条），虽遵循领域惯例，但在更大部署中结论的统计稳健性需进一步验证。
- **应用未覆盖极端场景**：未讨论模型在数据稀疏、类别严重不平衡或高风险决策（如医疗）中的安全性与公平性风险。

（完）
