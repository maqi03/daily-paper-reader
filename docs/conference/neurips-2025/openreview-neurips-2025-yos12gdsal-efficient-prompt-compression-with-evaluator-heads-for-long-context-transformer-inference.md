---
title: Efficient Prompt Compression with Evaluator Heads for Long-Context Transformer Inference
title_zh: 使用评估器头的高效提示压缩用于长上下文Transformer推理
authors: "Weizhi Fei, Xueyan Niu, XIE GUOQING, Yingqing Liu, Bo Bai, Wei Han"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=yOs12gdsaL"
tags: ["query:pe"]
score: 6.0
evidence: 无需训练的提示压缩方法保留关键信息
tldr: 针对长上下文推理计算成本高的问题，本文提出利用评估器注意力头无训练地压缩提示，快速识别关键token，在保持性能的同时降低开销。实验验证了其有效性，为优化提示内容提供了新方法。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-yos12gdsal/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 749, \"height\": 246, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yos12gdsal/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 891, \"height\": 304, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yos12gdsal/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 668, \"height\": 307, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-yos12gdsal/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 789, \"height\": 263, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yos12gdsal/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1371, \"height\": 344, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yos12gdsal/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 649, \"height\": 173, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yos12gdsal/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1435, \"height\": 944, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yos12gdsal/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 957, \"height\": 360, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yos12gdsal/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1453, \"height\": 752, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yos12gdsal/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1458, \"height\": 420, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yos12gdsal/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 791, \"height\": 380, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yos12gdsal/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1444, \"height\": 271, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yos12gdsal/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1440, \"height\": 154, \"label\": \"Table\"}]"
motivation: 长上下文输入导致高计算成本和性能下降。
method: 识别评估器注意力头，利用前几层进行提示压缩。
result: 实现快速且保留关键信息的提示压缩。
conclusion: 该方法为长上下文推理提供了高效的提示优化方案。
---

## Abstract
Although applications involving long-context inputs are crucial for the effective utilization of large language models (LLMs), they also result in increased computational costs and reduced performance. To address this challenge, we propose an efficient, training-free prompt compression method that retains key information within compressed prompts. We identify specific attention heads in transformer-based LLMs, which we designate as evaluator heads, that are capable of selecting tokens in long inputs that are most significant for inference. Building on this discovery, we develop EHPC, an Evaluator Head-based Prompt Compression method, which enables LLMs to rapidly "skim through'' input prompts by leveraging only the first few layers with evaluator heads during the pre-filling stage, subsequently passing only the important tokens to the model for inference. EHPC achieves state-of-the-art results across two mainstream benchmarks: prompt compression and long-context inference acceleration. Consequently, it effectively improves performance with the reduced costs associated with commercial API calls compared to prompt compressing methods. We further demonstrate that EHPC attains competitive results compared to key-value cache-based acceleration methods, thereby highlighting its potential to enhance the efficiency of LLMs for long-context tasks.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义
- **核心问题**：大语言模型（LLM）处理长上下文输入时，计算开销大、延迟高、性能下降。尤其是在商用API调用中，成本与输入长度正相关；在本地部署中，KV缓存内存占用随长度线性增长。
- **整体含义**：提出一种**无需训练**的高效提示压缩方法（EHPC），利用Transformer模型中特定注意力头（evaluator heads）在预填充阶段快速识别并保留关键token，从而压缩输入提示，降低推理成本、加速长上下文理解，并提升API输出质量。

## 2. 论文提出的方法论
- **核心思想**：大模型中存在**评估器头**，其注意力分数能够可靠地反映输入token的长文重要性。仅用前几层中的这些头计算token效用分数，按分数保留关键token并丢弃其余，达到“扫读”式压缩。
- **关键技术细节**：
  - **evaluator heads 识别**：通过“Needle-in-a-Haystack”风格的合成数据预实验，计算每个注意力头在证据token上的累计注意力分数，选择得分最高的层及其top‑k头作为评估器头。
  - **压缩策略**：
    - 使用选定评估器头的注意力矩阵最后 \(N_o\) 行的平均值（观测窗口）得到原始效用分数：
      \[
      s = \sum_{(l_j, h_j) \in C_f} \text{Pool}\left( \frac{\sum_{N_r \le i \le N} A_{l_j, h_j}[i,:]}{N_o}, r \right)
      \]
    - 经池化（平均池化）聚合相邻token以提升连贯性。
    - 根据分数排序，选取top‑M的token，按原序构建压缩提示。
  - **两种应用模式**：
    - **EMI**（扩展模型推理）：用本地模型压缩提示，供黑盒商用模型推理，降低API成本。
    - **NMI**（本地模型推理）：同一模型先压缩再推理，减少KV缓存和内存，加速解码。
  - **复杂度优势**：压缩仅在极少层（如1层）完成预填充，二次预填充输入长度缩小，整体预填充复杂度为 \(O(LH d_k N^2 (\frac{1}{\kappa_1} + \frac{1}{\kappa_2^2}))\)，当 \(\kappa_1, \kappa_2 \ge 2\) 时优于原始推理。

## 3. 实验设计
- **数据集**：
  - 提示压缩基准：**LongBench**（单/多文档QA、摘要、少样本、合成、代码六类共16个英文数据集）和**ZeroSCROLLS**（摘要、QA、聚合十数据集，验证集）。
  - 推理加速基准：**LongBench**（与上相同），以及**∞Bench**（极长任务）。
- **对比方法**：
  - 提示压缩方法：Selective-Context、LLMLingua、LongLLMLingua、LLMLingua-2，以及检索增强（BM25、SentenceBERT、OpenAI Embedding）。
  - 推理加速（KV cache压缩）：H₂O、SnapKV、GemFilter、Minference、CritePrefill。
- **评估设置**：
  - 压缩长度约束：2000 tokens / 3000 tokens（提示压缩），KV cache压缩容量1024 / 2048 tokens（推理加速）。
  - 模型：Llama-3.1-8B-Instruct 和 Phi-3.5-mini-3.8B-Instruct（压缩用），商用模型ChatGPT-3.5-Turbo（EMI）。
  - 指标：各数据集原始指标（F1、ROUGE-L、EM、Accuracy等），以及压缩延迟。

## 4. 资源与算力
- 文内明确提到实验“在配备48GB显存的GPU上”进行，但**未给出GPU具体型号、数量**。
- 方法为**training‑free**，无需额外训练算力，所以没有训练时长报告。
- 整体计算资源消耗未详细说明，例如总GPU小时。若需完全复现，需自行推算。

## 5. 实验数量与充分性
- **实验组数概览**：
  - 评估器头存在性验证：3个模型（Llama-3.1-8B、CodeLlama-7B、Phi-3.8B），合成数据。
  - 泛化性实验：2模型 × 多个下游任务（NarQA、Musique、LCC、QMSum、MathFind、CodeDebug），选择8头 vs. 随机8头 vs. 随机50%头。
  - 鲁棒性实验：QA、多跳推理、代码任务，比较任务无关头 vs. 任务感知头。
  - 提示压缩基准：LongBench与ZeroSCROLLS，2k/3k长度约束，~17种方法/变体。
  - 推理加速：Llama-3.1-8B、Phi-3.8B，1024/2048压缩量，对比H₂O、SnapKV、GemFilter等。
  - 补充：∞Bench结果，Minference、CritePrefill对比，不同序列长度的加速比。
- **充分性评价**：覆盖了主要提示压缩和KV压缩的SOTA方法，多数据集、多模型、多压缩率，消融较完整。由于是公开基准，对比公平。但压缩头选择依赖于预实验，可能受合成数据分布影响，任务场景的全面性仍有提升空间。

## 6. 论文的主要结论与发现
- 识别出特定注意力头（评估器头）能有效评估长文本中各token的重要性，且该特性在任务间具有**任务无关性**和**泛化性**。
- 基于评估器头的EHPC在提示压缩任务上**超越所有现有压缩方法**，在2k/3k约束下平均性能高于原提示和LongLLMLingua等SOTA，压缩延迟极低（0.88秒 / 2048 tokens）。
- 在推理加速场景下，EHPC可与KV cache压缩方法的性能媲美，尤其在QA任务中提升显著（Phi-3.8B上平均提升40%），同时有效减少内存占用和预填充时间。
- 方法**无需训练**、结构简单，在商用黑盒API和本地部署中均能降低延迟和费用。

## 7. 优点
- **训练‑free**：无需标注数据或微调，利用模型内在注意力模式即可工作。
- **低开销**：只跑前几层的一个选定层，利用已高速并行的预填充阶段，压缩延迟极低。
- **性能突出**：在多个基准上刷新压缩效果，甚至超过原始长提示。
- **通用性强**：适用于不同LLM（Llama、Phi等）并支持黑盒API推理。
- **理论清晰**：复杂度分析表明在常见压缩比下优于直接推理。

## 8. 不足与局限
- **依赖合成预实验**：评估器头的识别需要人工设计的“大海捞针”式数据，若真实场景的注意力分布发生偏移，可能需重新探明。
- **任务覆盖局限**：在代码补充、少样本学习等任务上，提示压缩方法性能下降，不如KV缓存压缩。
- **压缩会破坏完整语义**：虽然使用池化提升连贯性，但任意截断仍可能损失重要上下文，对于高度依赖语篇连贯的任务（如长文档连贯推理）可能有风险。
- **计算资源报告不足**：仅提及48GB显存，未详列GPU型号、批次大小、定量加速比对应的绝对延迟等。
- **误差线与统计显著性缺失**：受限于资源未提供误差棒，结果的置信区间不明。
- **仅限Transformer架构**：结论与设计仅对基于注意力的LLM有效。

（完）
