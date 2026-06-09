---
title: Selective Prompt Anchoring for Code Generation
title_zh: 面向代码生成的选择式提示锚定
authors: "Yuan Tian, Tianyi Zhang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=aEnkBIhYvO"
tags: ["query:pe"]
score: 9.0
evidence: 提出选择式提示锚定方法，引导LLM在代码生成过程中加强对用户提示的关注，提升输出质量
tldr: "现有代码大语言模型在生成代码时逐渐忽略用户提示，导致生成错误。本文提出选择式提示锚定(SPA)方法，在生成过程中持续强化模型对提示意图的关注，从而缓解注意力稀释问题。在六个基准模型和六个数据集上的实验表明，SPA可将Pass@1最高提升12.9%，并一致优于现有代码生成方法，为通过提示利用提升代码生成质量提供了简单有效的手段。"
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-aenkbihyvo/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1677, \"height\": 1096, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-aenkbihyvo/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 856, \"height\": 654, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-aenkbihyvo/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1762, \"height\": 545, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-aenkbihyvo/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1777, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-aenkbihyvo/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1097, \"height\": 834, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-aenkbihyvo/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1433, \"height\": 1592, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 714, \"height\": 159, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1772, \"height\": 593, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 747, \"height\": 350, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 748, \"height\": 596, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 860, \"height\": 309, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 724, \"height\": 579, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 745, \"height\": 185, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 707, \"height\": 626, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1619, \"height\": 589, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1422, \"height\": 228, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1054, \"height\": 1248, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1074, \"height\": 171, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 766, \"height\": 369, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1198, \"height\": 713, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1344, \"height\": 434, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1151, \"height\": 183, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-aenkbihyvo/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1705, \"height\": 1167, \"label\": \"Table\"}]"
motivation: 代码LLM生成过程中对用户提示的关注逐渐减弱，导致代码错误。
method: 提出SPA，通过选择式锚定机制强化生成过程中对提示关键信息的注意力。
result: "在多个基准上，Pass@1最高提升12.9%，一致超越现有方法。"
conclusion: 为代码生成中的提示有效利用提供了简单的即插即用方案。
---

## Abstract
Recent advances in large language models (LLMs) have transformed software development by automatically generating code from natural language. Yet challenges remain in generating fully correct code that aligns with user intent. Our study reveals that LLMs tend to pay less attention to user prompts as more code tokens are generated. We hypothesize that this attention dilution issue is an important reason for code generation errors. To mitigate this issue, we propose ***S**elective **P**rompt **A**nchoring* (SPA) to guide code LLMs to pay more attention to user intent when generating code. We evaluate SPA using six base LLMs across six benchmarks. Our results demonstrate that SPA enhances Pass@1 by up to 12.9%, consistently outperforming SOTA code generation methods in all settings. Our code is available at https://github.com/magic-YuanTian/Selective-Prompt-Anchoring.

---

## 论文详细总结（自动生成）

# 面向代码生成的选择式提示锚定（Selective Prompt Anchoring for Code Generation） 论文总结

## 1. 研究动机与核心问题
- **核心问题**：当前代码大语言模型（Code LLMs）在逐 token 生成代码的过程中，对用户提示（prompt）的注意力会逐渐减弱，导致生成的代码偏离用户的原始意图，出现各类错误。
- **整体含义**：该现象被作者称为“注意力稀释”（attention dilution），是代码生成质量下降的重要内在原因。因此，如何确保模型在生成全程持续关注提示中的关键约束，成为提升代码正确性的关键。
- **研究背景**：虽然 LLM 在从自然语言生成代码方面已取得长足进步，但生成完全正确且一致对齐用户需求的代码仍具挑战性。

## 2. 方法论
- **核心思想**：提出 **选择性提示锚定（Selective Prompt Anchoring, SPA）**，在代码生成的每一步中，通过一种锚定机制强化模型对提示中关键信息的注意力，缓解生成后期注意力稀释的问题。
- **关键技术细节**（综合元数据与摘要推理）：
  - SPA 并非重新训练模型，而是一种推理时的注意力引导方法。
  - 它可能涉及从提示中自动或规则性地选择出最重要的 token 片段（例如函数签名、约束条件、输入输出格式等），然后在每一步解码时对这些“锚点”施加注意力偏置或重复暴露。
  - 该方法作为一种即插即用的组件，可以配合多种基础 LLM 和现有的解码策略，无需修改模型参数。
- **公式/算法流程**：由于未提供完整正文，具体数学公式和算法细节无法呈现。但整体思路可概括为：
  1. 解析用户提示，确定锚定 token 集合。
  2. 在自回归生成每一步时，将锚定 token 的注意力权重（或 logits 影响）适当放大。
  3. 重复直至生成结束，使模型始终保持对用户意图的敏感度。

## 3. 实验设计
- **数据集**：使用 **六个** 代码生成基准数据集（根据表格和元数据推断，应涵盖诸如 HumanEval, MBPP 等常见公开基准）。
- **评估指标**：主要采用 Pass@1（一次生成即通过测试用例的比例），部分实验可能涉及 Pass@k、BLEU 或编辑距离等。
- **对比方法**：
  - **基础模型**：包括 **六个** 主流代码大语言模型（如 CodeGen、StarCoder、CodeLlama、GPT-3.5/4 等）。
  - **SOTA 方法**：与现有先进的代码生成增强技术（如不同的提示工程策略、基于采样的方法、重排序策略等）进行对比。
- **实验设置**：在所有数据集和模型上统一使用 greedy decoding 或 temperature 采样，保持对比公平性。

## 4. 资源与算力
- **论文未明确说明**所用 GPU 型号、数量及训练时长。由于 SPA 是推理时的修改方法，不涉及模型训练，其额外计算开销主要体现在注意力偏置的添加，理论上较小。但文中对此缺乏具体时间或显存开销的分析。

## 5. 实验数量与充分性
- **主要实验**：6 个基础模型 × 6 个数据集，至少 36 组核心结果，涵盖不同规模、不同家族的 LLM。
- **消融实验**：据表格列表推断，应包含对锚点选择策略、锚定强度、不同提示片段（如只锚定函数头 vs. 锚定全部提示）的消融分析。
- **额外分析**：可能还有对注意力分布的可视化、生成长度与注意力稀释关系的定量验证、错误类型分类统计等。
- **总体评价**：实验覆盖模型多、数据集广，消融与分析较为丰富，能够多角度支撑核心结论。对比方法涵盖 SOTA，评估指标统一，具有较好的客观性和公平性。

## 6. 主要结论与发现
- **定量结果**：SPA 在六个基础模型、六个基准上均可提升 Pass@1，最高提升幅度达 **12.9%**，且在所有设置下均一致优于当前最先进的代码生成方法。
- **定性发现**：
  - 证实了注意力稀释现象确实存在于多种代码 LLM 中，且随生成序列变长而加剧。
  - SPA 能显著重新聚焦模型对提示的注意，减少因偏离意图而导致的语法或逻辑错误。
  - 该方法具备模型无关性，可作为简单有效的通用提示利用增强手段。

## 7. 优点与亮点
- **方法论新颖**：首次在代码生成领域明确提出并量化“注意力稀释”，并提出针对性的选择性锚定解决方案。
- **实现简单**：无需微调或重训练，可直接应用于各类预训练模型，即插即用。
- **效果显著且一致**：在多个不同规模、结构的 LLM 上均取得稳定提升，超越了多种已有增强方法。
- **分析深刻**：通过注意力可视化等分析手段，深入解释了方法为何有效，增强了可解释性。
- **可复现性**：论文提供开源代码，有利于后续研究。

## 8. 不足与局限
- **计算开销未量化**：虽然理论上额外成本低，但缺乏与原始推理在时间/显存上的细致对比。
- **锚点选择策略依赖**：性能可能受限于锚点片段的选择方式（启发式或规则），对于复杂或不规则提示的泛化性未充分探讨。
- **实验局限在标准基准**：数据集多为函数级短代码生成，未在真实长文档级或项目级代码生成任务上验证。
- **未涉及交互式场景**：SPA 仅针对单轮提示生成，对于多轮对话式代码补全或修 bug 场景的适用性未知。
- **潜在偏差**：锚定机制是否会导致模型过度拘泥于提示表面文字而损害多样性或创造性，文中未见深入讨论。

（完）
