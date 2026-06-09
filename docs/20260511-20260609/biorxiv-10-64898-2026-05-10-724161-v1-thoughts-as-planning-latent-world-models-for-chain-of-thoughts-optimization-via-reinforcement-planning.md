---
title: "Thoughts-as-Planning: Latent World Models for Chain-of-Thoughts Optimization via Reinforcement Planning"
title_zh: 思考即规划：通过强化规划优化思维链的潜在世界模型
authors: "Liu, D., Yu, Y., Wu, Y. N."
date: 2026-05-15
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.10.724161v1.full.pdf"
tags: ["query:prompt-evol"]
score: 9.0
evidence: 通过强化规划迭代优化链式提示
tldr: 大型语言模型的推理链优化依赖黑盒启发式搜索，缺乏可解释性、泛化能力和样本效率。本文提出Thoughts-as-Planning框架，将其形式化为潜在语义空间中的序列决策，学习世界模型模拟编辑影响并构建邻近保持嵌入以支持多尺度规划。在语言理解与生成任务上，该方法在效率、鲁棒性和泛化性上显著超越现有推理链调优基线。其结构化规划轨迹增强了可解释性，为推理链优化开辟了新范式。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有推理链优化方法依赖黑盒启发式，缺乏可解释性、泛化性和样本效率，亟需新范式。
method: 提出Thoughts-as-Planning，将优化建模为潜在语义空间中的序列决策，学习世界模型和邻近保持嵌入，支持多尺度规划与强化学习。
result: 在语言理解和生成任务上，该方法显著超越现有推理链调优基线，在效率、鲁棒性和泛化性上表现突出。
conclusion: 该框架通过结构化规划轨迹增强了可解释性，为推理链优化提供了高效、可解释的新途径。
---

## 摘要
大型语言模型（LLMs）在各种NLP任务上的成功提升了推理链优化的重要性，使其成为将模型行为与任务目标对齐的关键步骤。现有的推理链调整方法通常依赖黑箱启发式方法或无梯度搜索，缺乏可解释性、泛化性和样本效率。在这项工作中，我们引入了思考即规划，这是一个新颖的框架，将推理链优化形式化为在潜在语义空间上的序贯决策过程。我们将LLM建模为部分可观察环境，并学习一个模拟推理链编辑对下游输出影响的潜在世界模型。构建了一个保邻近度的嵌入空间来编码推理链-响应动态，从而能够通过梯度下降或强化学习进行规划。我们的方法支持多尺度抽象，允许在token、片段和指令级别上的推理链编辑被集成到统一的规划器中。通过在语言理解和生成任务上的广泛实验，我们证明思考即规划在效率、鲁棒性和泛化性方面优于最先进的推理链调整基线，同时通过其结构化的规划轨迹提供可解释性。我们的代码可在https://github.com/FastLM/Thoughts-as-Planning获取。

## Abstract
The success of large language models (LLMs) across diverse NLP tasks has elevated the importance of reasoning chain optimization as a critical step in aligning model behavior with task objectives. Existing reasoning chain tuning methods often rely on black-box heuristics or gradient-free search, which lack interpretability, generalization, and sample efficiency. In this work, we introduce Thoughts-as-Planning, a novel framework that formalizes reasoning chain optimization as a sequential decision-making process over a latent semantic space. We model the LLM as a partially observable environment and learn a latent world model that simulates the effect of reasoning chain edits on downstream outputs. A proximity-preserving embedding space is constructed to encode reasoning chain-response dynamics, enabling planning via gradient descent or reinforcement learning. Our method supports multi-scale abstraction, allowing reasoning chain edits at token, segment, and instruction levels to be integrated into a unified planner. Through extensive experiments on language understanding and generation tasks, we demonstrate that Thoughts-as-Planning outperforms state-of-the-art reasoning chain tuning baselines in efficiency, robustness, and generalization, while offering interpretability through its structured planning trajectory. Our code is available at https://github.com/FastLM/Thoughts-as-Planning.

---

## 论文详细总结（自动生成）

由于提供的PDF文本提取失败（返回403错误且需要验证码），原始论文内容不可得。以下总结完全基于给定的论文元数据（包括标题、摘要、作者标注）生成，信息可能不够详尽，但严格依据现有材料展开。

## 1. 论文的核心问题与整体含义
- **研究动机**：大型语言模型虽普遍，但调整其推理链（chain-of-thought）使其与任务目标对齐仍然困难。现有方法主要依赖黑箱启发式或无梯度搜索，缺乏可解释性、泛化能力和样本效率。
- **整体含义**：本文提出“思考即规划”（Thoughts-as-Planning）框架，将推理链优化重新定义为潜在语义空间中的序列决策问题，旨在提供一种高效、可解释且通用的新范式。

## 2. 方法论
- **核心思想**：将LLM视为部分可观测环境，学习一个潜在世界模型来模拟对推理链的编辑如何影响下游输出，并在保邻近度的嵌入空间中执行规划。
- **关键技术细节**：
  - **潜在世界模型**：学习一个模拟推理链编辑效应的模型，以此预测最终任务表现。
  - **保邻近度嵌入空间**：构建一个保留了推理链-响应动态关系的语义空间，使得相似编辑有相似结果。
  - **多尺度抽象**：支持在token、片段和指令等级别上统一编辑推理链，并将其集成到同一个规划器中。
  - **规划方式**：可通过梯度下降或强化学习在该潜在空间中优化推理链。
- **算法流程**（文字概括）：在潜在世界中，模型对候选编辑进行模拟评估，利用基于梯度或RL的规划器选择最优编辑动作，形成结构化的规划轨迹。

## 3. 实验设计
- **任务类型**：涵盖语言理解与语言生成任务。
- **Benchmark与对比方法**：与最先进的推理链调优基线（state-of-the-art reasoning chain tuning baselines）进行比较。具体的基线名称和数据集在现有材料中未列出。
- **评价维度**：效率、鲁棒性、泛化性和可解释性。

## 4. 资源与算力
- **说明**：所提供的元数据及摘要中**未提及**任何具体的算力资源，如GPU型号、数量、训练时长等。

## 5. 实验数量与充分性
- **实验数量**：摘要称进行了“广泛的实验”（extensive experiments），但未给出具体实验组数或消融实验的细节。
- **充分性评价**：仅从描述看，声称在多个任务上超越基线，但由于缺乏具体实验配置和数据，无法评判是否充分、客观、公平。从文本语气推断，作者认为实验是充分的。

## 6. 主要结论与发现
- 思考即规划框架在**效率、鲁棒性和泛化性**上显著超过现有推理链调优基线。
- 方法的**结构化规划轨迹**赋予了优化过程可解释性，这是传统黑箱方法所不具备的。
- 框架的多尺度抽象能力使其能够灵活处理不同粒度的推理链修改。

## 7. 优点
- **可解释性增强**：通过显式的规划过程，提供了推理链优化的可追踪路径。
- **多尺度统一规划**：将token、片段、指令三个层次的编辑统一在同一框架下，增强了方法的灵活性。
- **样本效率与泛化能力**：基于世界模型的规划避免了大量无梯度黑箱搜索，理论上更样本高效，泛化性更好。

## 8. 不足与局限
- **实验细节缺失**：由于原文内容无法获取，无法评估具体数据集覆盖范围、模型规模、对比方法的公平性等；可能未在极小模型或资源受限环境下验证。
- **世界模型学习质量依赖**：方法效果严重依赖所学潜在世界模型的准确度，若世界模型存在偏差，可能导致推理链优化偏离目标。
- **计算开销不详**：未提供世界模型训练和规划过程的算力开销，实际部署成本未知。
- **应用限制**：论文仅测试了语言任务，对其他模态或需要复杂交互的任务（如对话、多步工具使用）的泛化性有待验证。

（完）
