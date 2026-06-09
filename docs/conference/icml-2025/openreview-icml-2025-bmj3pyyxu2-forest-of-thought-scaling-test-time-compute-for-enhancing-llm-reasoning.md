---
title: "Forest-of-Thought: Scaling Test-Time Compute for Enhancing LLM Reasoning"
title_zh: 思维森林：扩展测试时计算以增强LLM推理
authors: "Zhenni Bi, Kai Han, Chuanjian Liu, Yehui Tang, Yunhe Wang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=BMJ3pyYxu2"
tags: ["query:pe"]
score: 9.0
evidence: 通过多棵推理树扩展思维链提示，实现分步推理增强
tldr: 针对链式思维和树式思维单次推理的局限性，提出森林式思维框架，集成多棵推理树并利用稀疏激活选择最优路径。实验表明在复杂逻辑问题中提升了推理准确性和效率。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1773, \"height\": 838, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 810, \"height\": 548, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1744, \"height\": 461, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 893, \"height\": 659, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 800, \"height\": 597, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1422, \"height\": 1097, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 868, \"height\": 594, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 886, \"height\": 241, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 857, \"height\": 423, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 877, \"height\": 253, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 885, \"height\": 530, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 859, \"height\": 1057, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 870, \"height\": 626, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 868, \"height\": 706, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 834, \"height\": 1448, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 855, \"height\": 1630, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 858, \"height\": 642, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 378, \"height\": 200, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bmj3pyyxu2/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 414, \"height\": 271, \"label\": \"Table\"}]"
motivation: 现有提示推理方法可能无法回溯错误路径，影响准确性。
method: 提出FoT框架，整合多棵推理树进行集体决策。
result: 稀疏激活策略提高了推理路径选择的效率和准确性。
conclusion: 为复杂推理提供了一种更鲁棒的提示结构。
---

## Abstract
Large Language Models (LLMs) have demonstrated remarkable abilities across various language tasks, but solving complex reasoning problems remains a significant challenge. While existing methods, such as Chain-of-Thought (CoT) and Tree-of-Thought (ToT), enhance reasoning by decomposing problems or structuring prompts, they typically perform a single pass of reasoning and may fail to revisit flawed paths, compromising accuracy. To address this limitation, we propose a novel reasoning framework called Forest-of-Thought (FoT), which integrates multiple reasoning trees to leverage collective decision-making for solving complex logical problems. FoT employs sparse activation strategies to select the most relevant reasoning paths, improving both efficiency and accuracy. Additionally, we introduce a dynamic self-correction strategy that enables real-time error correction, along with consensus-guided decision-making strategies to optimize both correctness and computational resources. Experimental results demonstrate that the FoT framework, combined with these strategies, significantly enhances the reasoning capabilities of LLMs, enabling them to solve complex tasks with greater precision and efficiency.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **核心问题**：大型语言模型（LLM）在解决复杂推理任务（如数学、逻辑问题）时，尽管Chain-of-Thought、Tree-of-Thought等方法通过分解问题或结构化提示增强了推理，但它们通常只执行单遍推理，一旦初始路径出错便无法回溯或重新评估，导致准确率受限。
- **整体含义**：该工作提出“思维森林”（Forest-of-Thought, FoT）框架，通过集成多棵推理树实现集体决策，并辅以稀疏激活、动态自校正和共识引导决策，以更高效、更精确的方式扩展测试时的计算，从而显著提升LLM的复杂推理能力。

### 2. 论文提出的方法论
- **核心思想**：用多棵独立的推理树（例如ToT或基于MCTS的树）从不同视角解决问题，通过稀疏激活筛选关键路径，结合动态自校正和共识决策融合最终答案。
- **关键技术细节**：
  - **推理森林构建**：给定输入 \(x\)，每棵树 \(T_i\) 从增强后的输入 \(\varepsilon(x)\) 出发独立推理，生成候选解 \(s_i\)。输入增强通过检索外部知识库中相似问题拼接实现。
  - **稀疏激活**：在每棵树的每一层，评估中间节点的有效性，仅保留得分最高的节点继续展开；若某棵树无法产生有效输出（语法错误、语义矛盾等），则提前终止（激活指示器 \(\phi_i=0\)），从而节省计算并减少噪声。
  - **动态自校正策略**：监测模型输出的logits得分，若低于阈值则触发校正。当任务有明确的数学规则时（如24点游戏），直接利用规则纠正错误；否则利用模型自身基于提示进行修正。
  - **共识引导专家决策（CGED）**：收集所有激活树的最终答案，先进行多数投票；若意见不一致，则由大语言模型作为“专家”比较不同树的推理过程，做出最终选择。
- **算法流程（算法1）**：遍历每棵树，获得推理结果和激活指示器；若树激活，则对其结果执行自校正后加入候选集；最后经CGED决策输出最佳答案。

### 3. 实验设计
- **数据集/场景**：
  - Game of 24（24点游戏，95个问题）
  - GSM8K（小学数学应用题）
  - MATH（数学竞赛题，按难度分Level 1-4）
  - AIME 2024（奥赛级数学题）
  - MATH‑500（补充测试）
- **对比方法**：
  - 单步推理：IO prompting、CoT、Zero-Shot-CoT
  - 多步推理：CoT-SC、GoT、ToT、BoT、XoT、MCTSr（不同rollout数）
  - 最新SOTA：GPT-4o、rStar-Math等
- **基座模型**：Llama3‑8B‑Instruct、Mistral‑7B、GLM‑4‑9B、Qwen2.5‑Math‑7B‑Instruct、QwQ‑32B‑preview等。

### 4. 资源与算力
- 文中**未明确说明**使用的GPU型号、数量、训练时长等具体算力消耗。
- 主要涉及LLM推理调用，通过减少LLM invocations（如稀疏激活使调用次数从32.32降至26.99）体现效率提升。

### 5. 实验数量与充分性
- **实验组数**：至少包含以下多类实验：
  - 24点游戏上的消融实验（自校正、输入增强、稀疏激活的组合，表1）
  - ToT与FoT在不同计算成本下的性能对比（图5）
  - GSM8K上多方法森林的收益分析（图2）及跨模型扩展规律（图3）
  - MATH不同难度级别的性能对比（图4）
  - 不同停止策略（多数投票、数学专家、CGED）的消融（表3）
  - 与SOTA模型在GSM、MATH、AIME上的总体对比（表4）
  - 自校正阈值敏感性分析（表13）
  - 决策方法消融（表12）
- **充分性与公平性**：实验覆盖多个基准、多个难度级别、多种基座模型，消融研究较为系统，对比基线涵盖当前主流推理框架，具有较好的客观性与公平性。

### 6. 论文的主要结论与发现
- FoT通过集成多棵推理树和稀疏激活，在保持或提升准确率的同时减少计算开销。
- 在24点游戏中，FoT（8棵激活树）取得96.84%的成功率，远超ToT（74%）和BoT（82.40%）。
- 在GSM8K、MATH等数据集上，增加激活子树数量能带来稳定的性能提升，呈现“测试时计算扩展定律”。
- 动态自校正和CGED决策策略能有效修正错误，提升复杂推理的鲁棒性。
- FoT可与不同强度的基座模型结合，在奥赛级题目（AIME 2024）上亦有显著提升。

### 7. 优点
- **方法亮点**：
  - 将单树推理扩展为森林，通过集体决策克服单一路径的脆弱性。
  - 稀疏激活机制实现自适应计算，平衡效率与多样性。
  - 动态自校正利用实时置信度或外部规则，即时纠错。
  - CGED融合投票与专家判断，提高最终答案的可靠性。
- **实验设计亮点**：
  - 多基准、多模型验证，展现方法的通用性。
  - 消融实验清晰分离各模块贡献。
  - 对比ToT增加分支数与FoT增加子树数的效果，说明方法带来的增益超过简单扩展计算量。

### 8. 不足与局限
- **实验覆盖**：虽涵盖多个数学推理数据集，但在其他复杂推理类型（如符号逻辑、因果推理、代码调试）上的验证不足。
- **偏差风险**：输入增强依赖构建的知识库，库的覆盖范围和质量可能影响公平性；自校正阈值依赖人工设定，可能引入偏差。
- **应用限制**：目前仅在基于树结构的推理方法（ToT、MCTSr）上构建森林，对于其他类型的推理路径（如图）能否统一尚不清楚。森林规模增大时，尽管稀疏激活减轻负担，但多棵树的管理和决策成本仍会上升，实时应用场景可能受限。
- **算力细节缺失**：未报告实际运行时间、显存占用等，难以评估实用性。

（完）
