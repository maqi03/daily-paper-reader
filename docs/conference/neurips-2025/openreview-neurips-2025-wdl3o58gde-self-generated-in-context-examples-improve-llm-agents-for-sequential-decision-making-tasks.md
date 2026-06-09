---
title: Self-Generated In-Context Examples Improve LLM Agents for Sequential Decision-Making Tasks
title_zh: 自生成上下文示例提升大语言模型智能体的序贯决策能力
authors: "Vishnu Sarukkai, Zhiqiang Xie, Kayvon Fatahalian"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=WdL3O58gde"
tags: ["query:pe"]
score: 9.0
evidence: 自动用自生成的成功轨迹作为上下文示例增强提示，提升语言模型智能体性能。
tldr: 提升LLM智能体通常需大量手工构建提示和示例。本文探索自动改进方法：智能体从自身成功经验中学习，构建自生成轨迹数据库用作上下文示例。实验表明，在多个序贯决策基准上，自生成示例带来显著提升，甚至超过人工精心设计的示例。该方法降低了提示工程的人力成本，为自适应智能体提供了新路径。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 515, \"height\": 383, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1439, \"height\": 390, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1439, \"height\": 392, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1438, \"height\": 396, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 931, \"height\": 420, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 924, \"height\": 456, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 465, \"height\": 451, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1453, \"height\": 667, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1321, \"height\": 796, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1453, \"height\": 291, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1171, \"height\": 368, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1453, \"height\": 977, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1275, \"height\": 214, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1565, \"height\": 213, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1447, \"height\": 173, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1170, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1181, \"height\": 214, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1315, \"height\": 409, \"label\": \"Table\"}]"
motivation: 现有LLM智能体需人工设计任务特定提示和示例，成本高且泛化性差，亟需自动提升方法。
method: 通过记录智能体成功轨迹，构建自生成示例数据库，并以此增强后续任务的上下文提示。
result: 该方法在多个序贯决策基准上显著提升成功率，超越人工示例，证明了自生成示例的有效性。
conclusion: 自生成上下文示例是一种低成本、高效的自动提示增强技术，推动了LLM智能体的自适应发展。
---

## Abstract
Improving Large Language Model (LLM) agents for sequential decision-making tasks typically requires extensive task-specific knowledge engineering—custom prompts, curated examples, and specialized observation/action spaces. We investigate a different approach where agents automatically improve by learning from their own successful experiences without human intervention. Our method constructs and refines a database of self-generated trajectories that serve as in-context examples for future tasks. Even naive accumulation of successful trajectories yields substantial performance gains across three diverse benchmarks: ALFWorld (73\% to 89\%), Wordcraft (55\% to 64\%), and InterCode-SQL (75\% to 79\%). These improvements exceed those achieved by upgrading from gpt-4o-mini to gpt-4o and match the performance of allowing multiple attempts per task. We further enhance this approach with two innovations: database-level curation using population-based training to propagate high-performing example collections, and exemplar-level curation that selectively retains trajectories based on their empirical utility as in-context examples. With these enhancements, our method achieves 93\% success on ALFWorld—surpassing approaches that use more powerful LLMs and hand-crafted components. Our trajectory bootstrapping technique demonstrates that agents can autonomously improve through experience, offering a scalable alternative to labor-intensive knowledge engineering.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **核心问题**：大语言模型（LLM）智能体（Agent）在序贯决策任务中通常需要大量人工知识工程，如针对具体任务定制提示、精心挑选上下文示例、设计专用观测与动作空间。这类方式人力成本高且泛化性弱，难以扩展。
- **研究动机**：探索能否让智能体**自动从自身成功经验中学习**，通过构建和精炼自生成的轨迹数据库作为上下文示例来提升性能，从而减少或取代繁重的人工干预。
- **整体含义**：提出一种数据驱动的智能体自我改进范式——轨迹自举（Trajectory Bootstrapping），证明仅靠积累成功轨迹就能带来可观提升，并结合数据库级和示例级策展进一步增强，为大模型智能体的高效、可扩展知识工程提供了新路径。

### 2. 论文提出的方法论
- **基础智能体架构（ReAct风格 + 动态检索）**
  - 采用计划-推理-行动三阶段循环，步骤参见 Algorithm 1。
  - 在每一步决策点（规划、推理、行动）动态检索与当前目标、计划、推理或观察**最相近**的轨迹片段作为上下文示例（multi-key retrieval + sliding window）。
  - 使用统一的通用嵌入（all-MiniLM-L6-v2）和 FAISS 检索，无需任务特定工程。

- **三种数据库构建与精炼算法**
  - **Traj-Bootstrap（基础自举）**：保留智能体成功完成的全部轨迹，构成动态增长的示例数据库。仅保留成功轨迹（模仿奖励加权回归思想），形成正向反馈循环。
  - **+DB-Curation（数据库级策展）**：借鉴基于种群的训练。维护多个数据库实例并行运行，定期按近期任务成功率排序，复制最佳数据库替换最差数据库，保留整个数据库的协同特性（如多样性、覆盖率）。
  - **+Exemplar-Curation（示例级策展）**：跨多个数据库实例，为每个训练任务挑选**单个最优轨迹**，构建一个组合数据库。轨迹质量由经验效用度量定义：
    \[
    Q(\tau) = \frac{\sum_{i \in R(\tau)} o_i \cdot f_i(\tau)}{\sum_{i \in R(\tau)} f_i(\tau)}
    \]
    其中 \(o_i\) 为任务结果，\(f_i(\tau)\) 为该轨迹在任务中的检索频率。这一指标类似价值函数，衡量轨迹作为示例对成功结果的贡献。
  - **组合使用**：可结合 +DB-Curation 和 +Exemplar-Curation 进一步提升效果。

### 3. 实验设计
- **基准环境**
  - **ALFWorld**：文本式导航与物体操作，6类任务，3500训练/134测试。
  - **InterCode-SQL**：交互式 SQL 生成，800训练/234测试。
  - **Wordcraft**：类似“小小炼金术”的组合推理，4000训练/500测试。

- **对比方法**
  - 自身方法变体：Fixed-DB（仅初始人工示例，不增长）、Traj-Bootstrap、+DB-Curation、+Exemplar-Curation、+DB+Exemplar-Curation。
  - 外部方法：AutoGuide（层次规则学习）、AutoManual（手工观测/动作空间）、模型升级（gpt-4o）、测试时多尝试（pass@k）。
  - 消融与扩展实验：从零示例初始化（-Human-Examples）、微调对比（ReAct-Finetune）、跨模型迁移（Mixtral 8x7B）、成功率预测分类器。

- **评估指标**
  - 测试集任务成功率，报告均值和标准差（5个随机种子）。

### 4. 资源与算力
- 硬件：1 块 NVIDIA A5000 GPU（24GB 显存），64GB 内存。
- 大部分计算来自 OpenAI API 调用，总计约 270 万次 API 请求（ALFWorld 约200万次，InterCode-SQL 20万次，Wordcraft 50万次）。
- API 总花费约 $3000 美元。
- 嵌入与检索计算占比低（<5%）。

### 5. 实验数量与充分性
- 实验组数丰富：
  - 3 个不同性质基准的全套实验；
  - 各方法在不同数据库规模下的性能曲线（scaling plots）；
  - 与升级模型、测试时多尝试、层次方法、手工方法的多维度对比；
  - 消融实验（‑Human‑Examples、最佳 vs 最差示例）；
  - 跨模型泛化实验；
  - 微调对比实验；
  - 成功率预测实验。
- 客观性：使用固定初始人工示例，训练/测试严格分离，5 个随机种子报告标准差，与多个已发表方法比较。
- 整体实验设计充分，能够支撑主要结论，对比公平。

### 6. 论文的主要结论与发现
- **自生成轨迹显著提升性能**：仅简单积累成功轨迹（Traj-Bootstrap），就将三项基准的成功率大幅推高（ALFWorld 73%→89%，Wordcraft 55%→64%，InterCode 75%→79%），提升幅度超过升级至更贵的 gpt-4o 模型，且相当于测试时增加 2~3 次尝试的效果。
- **策展机制进一步增效**：数据库级策展（+DB-Curation）和示例级策展（+Exemplar-Curation）互补，组合后在 ALFWorld 达 93%，超越使用更强 LLM 和手工组件的 AutoManual。
- **成本效益优异**：一次构建数据库后，单任务推理成本仅为 $0.034（ALFWorld），在数千次任务后即可低于使用更大模型或测试时多尝试的成本。
- **数据可复用**：收集的轨迹不仅可用于上下文学习，还可用于微调，并能在不同模型（如 Mixtral）上有效迁移。
- **失败轨迹间接利用**：虽然未直接用作示例，但在示例级策展中通过评估效用间接辅助了数据库构建。
- **成功率可预测**：随数据库增长，可训练校准的分类器预测新任务的成功概率。

### 7. 优点
- **简洁有效**：无需任务特定提示、观测/动作空间设计，仅依赖成功轨迹的积累和检索，即可实现巨大提升。
- **可扩展性**：将计算负担从测试时转移到训练时，一次构建后保持高效推理，适合规模化生产。
- **互补性强**：与现有层次化方法、模型升级、测试时计算等正交，可叠加使用。
- **可解释与可复用**：收集的轨迹数据库可检查、可跨模型复用、可用于微调，增加了方法的透明度和实用价值。
- **实验全面**：覆盖多种基准、多类基线、多维度分析（成本、泛化、预测等），验证扎实。
- **成本可控**：提供了详细的代币使用与成本分析，证明经济可行性。

### 8. 不足与局限
- **依赖初始示例**：默认需要少量人工示例初始化数据库，虽然探索了零示例启动，但性能弱于含人工示例的版本。
- **模型能力依赖**：方法有效性取决于底层 LLM 的上下文学习能力，对较弱模型效果可能下降。
- **性能单调性不足**：性能随数据库增长并非单调上升，存在波动，且每次新增示例的边际效益递减。
- **未充分利用失败轨迹**：仅保留成功轨迹，失败轨迹中可能蕴含的修正信号未被直接利用（除策展中间接使用外）。
- **任务类型局限**：仅在序贯决策任务上验证，未扩展到单步任务或问答等，且因 WebShop 基准存在 bug 未纳入。
- **环境假设**：假设环境提供稀疏的最终成功/失败奖励，无法直接用于无明确成功信号的任务。
- **训练成本**：构建数据库需要大量 LLM API 调用（特别是并行数据库时），前期投入较高。

（完）
