---
title: "Cannot See the Forest for the Trees: Invoking Heuristics and Biases to Elicit Irrational Choices of LLMs"
title_zh: 只见树木不见森林：利用启发式和偏差诱发大语言模型的非理性选择
authors: "Haoming Yang, Ke Ma, Xiaojun Jia, Yingfei Sun, Qianqian Xu, Qingming Huang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=6F0L4HW8a8"
tags: ["query:pe"]
score: 4.0
evidence: ICRT利用认知偏差设计提示以操控大语言模型行为，展示了越狱攻击的提示设计原则。
tldr: 针对现有越狱攻击依赖暴力优化或手动设计的局限，提出受人类认知启发式偏差启发的ICRT框架。利用简单效应和相关性偏差分解并重组恶意提示，降低复杂性并增强语义对齐，有效诱导有害输出。实验证明该方法高效，揭示了基于认知原则的提示设计新思路，并警示了潜在风险。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-6f0l4hw8a8/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1753, \"height\": 466, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-6f0l4hw8a8/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1720, \"height\": 616, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-6f0l4hw8a8/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1519, \"height\": 403, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-6f0l4hw8a8/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1753, \"height\": 481, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-6f0l4hw8a8/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 856, \"height\": 492, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-6f0l4hw8a8/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1748, \"height\": 956, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-6f0l4hw8a8/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1771, \"height\": 407, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-6f0l4hw8a8/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1768, \"height\": 244, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-6f0l4hw8a8/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1759, \"height\": 297, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-6f0l4hw8a8/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 476, \"height\": 314, \"label\": \"Table\"}]"
motivation: 现有越狱攻击方法未能充分揭示真实场景中的风险，设计过程繁琐。
method: 提出ICRT框架，利用认知启发式偏差（简单效应、相关性偏差）设计恶意提示。
result: 成功绕过安全机制，有效诱导有害输出。
conclusion: 基于认知偏差的提示设计揭示了新的攻击面，有重要安全启示。
---

## Abstract
Despite the remarkable performance of Large Language Models (\textbf{LLMs}), they remain vulnerable to jailbreak attacks, which can compromise their safety mechanisms. Existing studies often rely on brute-force optimization or manual design, failing to uncover potential risks in real-world scenarios. To address this, we propose a novel jailbreak attack framework, \textbf{ICRT}, inspired by heuristics and biases in human cognition. Leveraging the \textit{simplicity effect}, we employ \textit{cognitive decomposition} to reduce the complexity of malicious prompts. Simultaneously, \textit{relevance bias} is utilized to reorganize prompts, enhancing semantic alignment and inducing harmful outputs effectively. Furthermore, we introduce a ranking-based harmfulness evaluation metric that surpasses the traditional binary success-or-failure paradigm by employing ranking aggregation methods such as Elo, HodgeRank, and Rank Centrality to comprehensively quantify the harmfulness of generated content. Experimental results show that our approach consistently bypasses mainstream \textbf{LLMs}' safety mechanisms and generates high-risk content.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义
*   **研究动机**：大语言模型在多个领域表现卓越，但仍易受“越狱攻击”威胁，可能生成有害、违法或不道德的内容。现有攻击方法多依赖暴力优化或人工设计，未能充分揭示模型在真实场景下被系统性获取危险知识的能力。
*   **核心问题**：其一，如何设计一种能够诱导大语言模型做出“非理性选择”、从而输出详细有害知识的攻击方法；其二，如何超越传统的“成功/失败”二元评估，更精细地衡量生成内容的真实危害程度。
*   **整体含义**：论文提出，可借鉴人类认知中的启发式与偏差（如简单效应、相关性偏差）来操纵大语言模型，使其“只见树木，不见森林”——因过度关注局部细节而忽略全局风险，从而暴露出模型深层的安全隐患。同时，引入基于排序的评估框架，为越狱危害性提供更细粒度的量化手段。

## 2. 论文提出的方法论
### 2.1 核心思想
利用认知心理学中的 **简单效应** 和 **相关性偏差**，通过“认知分解”降低恶意提示的复杂性，再利用“相关性偏差”重组提示以增强语义对齐，从而诱导大语言模型输出有害信息。

### 2.2 关键技术细节与流程（ICRT框架）
ICRT是一个两阶段迭代攻击框架，包含以下步骤：
*   **阶段一：意图识别与概念分解**
    *   **意图识别**：使用一个辅助语言模型 \(A\)，将越狱目标 \(G\) 分解为两个部分：结构性意图 \(I\) 和有害行为 \(B\)，例如 \(G=\)“写一本传播虚假信息以操纵舆论的指南”会被分解为 \(I=\)“传播虚假信息以操纵舆论”和 \(B=\)“写一本指南”。
    *   **概念分解**：基于简单效应，将 \([I, B]\) 进一步分解为一组低复杂度的子概念 \(C_n = \{c_1, c_2, ..., c_n\}\)。为降低显式危害性，从 \(C_n\) 中筛选出危害最小的子集 \(C_s\)，约束为被移除的子概念数量不超过一个小常数 \(\epsilon\)。
*   **阶段二：概念重组与迭代生成**
    *   **选择性重组**：利用相关性偏差，从 \(C_s\) 中选出与原始恶意意图 \(I\) 语义最相关的 \(k\) 个子概念 \(C_k\)。\(k\) 值的选择通过分析模型意图检测性能的雷达图确定，通常取6以平衡信息完整性与文本简洁性。
    *   **迭代生成**：将选出的子概念 \(C_k\) 嵌入到上下文模板 \(Z\)（如角色扮演、假设性讨论、虚拟背景）中，生成最终的越狱提示 \(T(C_k)\)。随后，将提示输入目标模型 \(V\)，得到响应 \(R(C_k)\)。通过迭代优化 \(C_k\) 的选择，使响应 \(R(C_k)\) 与恶意意图 \(I\) 的对齐程度最大化，直至攻击成功。
*   **新颖评估指标**：提出基于**排序聚合**的危害性评估方法。对不同攻击方法生成的内容进行两两比较，构建比较矩阵，再使用 **Elo**、**HodgeRank** 和 **Rank Centrality** 三种算法计算全局危害性排名，从而更精细地衡量输出的真实风险。

## 3. 实验设计
*   **数据集**：
    *   **AdvBench**：包含520个有害目标的基准测试集，用于评估攻击成功率。
    *   **NeurIPS 2024 Red Teaming Track**：用于独立评估越狱性能。
*   **目标模型**：涵盖多种主流开源与闭源模型：GPT-3.5-Turbo、GPT-4-0613、LLaMA2-7B-chat、Vicuna-7B/13B-v1.5、Qwen2-7B、ChatGLM3、InternLM-7B、Mistral-7B等。
*   **对比基线**：与多种先进攻击方法对比，包括 JailBroken、DeepInception、ICA、Cipher、Multilingual、CodeChameleon、ReNeLLM、GPTFUZZER、AutoDAN、PAIR、GCG及其迁移版本GCG-T。此外，还针对**防御机制**（无防御、Self-Reminder、ICD）下的性能进行了评估。
*   **评估指标**：传统攻击成功率（ASR）以及所提出的基于排序的危害性指标。

## 4. 资源与算力
论文中**未明确提及**实验所使用的具体算力资源，如GPU型号、数量、训练或推理时长等信息。鉴于该方法主要依赖API调用和模型推理，可能未涉及大规模训练，因此未作特别说明。

## 5. 实验数量与充分性
*   **实验组数**：实验设计较为全面，主要包括：
    *   在8个主流模型上的ASR对比实验。
    *   子概念数量 \(k\) 的消融实验（\(k=2,4,6,8\)），考察其对模型意图重建能力的影响。
    *   黑盒与白盒场景下，针对多种防御策略（无防御、Self-Reminder、ICD 1-shot/2-shot）的攻击实验。
    *   在NeurIPS 2024红队赛道上的独立验证。
    *   基于Elo、HodgeRank等算法的危害性排名评估与对比。
*   **充分性与公平性**：实验覆盖了多样化的模型架构、攻击方法和防御策略，对比基线均采用原论文推荐的超参数设置，评估指标沿用前人工作的评判标准，整体上相当充分、客观且公平。

## 6. 论文的主要结论与发现
*   **攻击有效性**：ICRT在所有测试模型上均表现出优异的攻击成功率，平均ASR达到98.2%，显著优于对比基线。甚至在安全性较强的GPT-4-0613上，ASR也达到了96%。
*   **防御鲁棒性**：即使在面对Self-Reminder、ICD等先进防御机制时，ICRT仍能保持较高的攻击成功率，揭示了现有防御措施的不足。
*   **危害性评估**：基于排序聚合的评估方法能有效区分不同攻击方法生成内容的危害层级。在所有排序指标（Elo、HodgeRank、Rank Centrality）下，ICRT均排名第一，证明其不仅能绕过防御，还能生成更详细、更具操作性的有害内容。
*   **认知类比**：实验结果表明，大语言模型确实会表现出类似人类的认知脆弱性，因过度聚焦于分解后的简单、相关细节而未能识别整体恶意意图，即“只见树木，不见森林”。

## 7. 优点
*   **新颖的跨学科视角**：将认知心理学中的启发式与偏差理论成功应用于大语言模型的越狱攻击，为研究模型安全性提供了富有洞察的新范式。
*   **精巧的方法设计**：通过“意图识别-概念分解-重组嵌入”的两阶段迭代框架，系统化地实现了从复杂恶意目标到高危害性攻击文本的生成，兼具隐蔽性与有效性。
*   **突破性的评估指标**：提出的基于排序聚合的危害性评估，弥补了传统ASR无法衡量输出内容严重程度的缺陷，为越狱攻击的风险量化提供了更细致的工具。
*   **扎实的实验验证**：在广泛的模型、攻击基线和防御策略上进行了全面评估，并结合多种排名算法交叉验证，结论具有高度说服力。

## 8. 不足与局限
*   **攻击成本与依赖**：ICRT框架依赖一个辅助语言模型 \(A\) 进行意图识别、概念分解和选择，这一过程会增加查询次数与迭代成本，且需要精心设计多个提示模板。
*   **评估偏见风险**：所提出的危害性排序评估本身依赖于大语言模型（如GPT-4o）进行两两比较，虽然采用了多数投票机制，但仍可能继承评判模型自身的偏见或不确定性。
*   **防御场景的局限性**：论文仅测试了对Self-Reminder和ICD两种防御的突破能力，对其他类型的防御（如输入扰动、困惑度检测等）有效性未知。
*   **应用风险与伦理**：该方法一旦被恶意利用，将带来严重的社会危害。论文虽提出了缓解建议，但本身并未给出具体的防御方案，安全与风险的平衡有待进一步研究。

（完）
