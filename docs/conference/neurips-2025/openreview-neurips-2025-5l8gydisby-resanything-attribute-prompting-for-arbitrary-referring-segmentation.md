---
title: "RESAnything: Attribute Prompting for Arbitrary Referring Segmentation"
title_zh: RESAnything：面向任意指代分割的属性提示
authors: "Ruiqi Wang, Hao Zhang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=5l8GydIsby"
tags: ["query:pe"]
score: 9.0
evidence: 通过思维链提示与属性提示逐步推理，实现任意指代分割。
tldr: 现有指代分割难以处理隐含属性引用。本文提出RESAnything，利用大语言模型的思维链推理，通过属性提示系统生成物体属性详细描述，引导基础分割模型逐步定位目标区域。该方法在零样本设定下实现了对任意指代表达式（含物体、部件及隐含属性）的精准分割，展现了提示工程在视觉推理中的强大能力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1416, \"height\": 498, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 661, \"height\": 304, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1447, \"height\": 345, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1323, \"height\": 654, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 733, \"height\": 250, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 623, \"height\": 295, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 703, \"height\": 547, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 688, \"height\": 666, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 937, \"height\": 2117, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 383, \"height\": 295, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 386, \"height\": 293, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 386, \"height\": 262, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 385, \"height\": 259, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 383, \"height\": 263, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 385, \"height\": 294, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 385, \"height\": 293, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 384, \"height\": 262, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 384, \"height\": 261, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 385, \"height\": 263, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 385, \"height\": 262, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 310, \"height\": 2100, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 313, \"height\": 2081, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 1812, \"height\": 386, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 960, \"height\": 2216, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 1722, \"height\": 1191, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 1638, \"height\": 2007, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-027.webp\", \"caption\": \"\", \"page\": 0, \"index\": 27, \"width\": 1758, \"height\": 2217, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-028.webp\", \"caption\": \"\", \"page\": 0, \"index\": 28, \"width\": 1755, \"height\": 2131, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-029.webp\", \"caption\": \"\", \"page\": 0, \"index\": 29, \"width\": 1769, \"height\": 2272, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-030.webp\", \"caption\": \"\", \"page\": 0, \"index\": 30, \"width\": 1759, \"height\": 2219, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-031.webp\", \"caption\": \"\", \"page\": 0, \"index\": 31, \"width\": 1443, \"height\": 2346, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-032.webp\", \"caption\": \"\", \"page\": 0, \"index\": 32, \"width\": 1442, \"height\": 2210, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-033.webp\", \"caption\": \"\", \"page\": 0, \"index\": 33, \"width\": 1453, \"height\": 2224, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-034.webp\", \"caption\": \"\", \"page\": 0, \"index\": 34, \"width\": 1442, \"height\": 2230, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-035.webp\", \"caption\": \"\", \"page\": 0, \"index\": 35, \"width\": 1437, \"height\": 2194, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-036.webp\", \"caption\": \"\", \"page\": 0, \"index\": 36, \"width\": 1772, \"height\": 2286, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-037.webp\", \"caption\": \"\", \"page\": 0, \"index\": 37, \"width\": 1780, \"height\": 2223, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-038.webp\", \"caption\": \"\", \"page\": 0, \"index\": 38, \"width\": 1498, \"height\": 2285, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-039.webp\", \"caption\": \"\", \"page\": 0, \"index\": 39, \"width\": 1773, \"height\": 2254, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-040.webp\", \"caption\": \"\", \"page\": 0, \"index\": 40, \"width\": 1787, \"height\": 2344, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5l8gydisby/fig-041.webp\", \"caption\": \"\", \"page\": 0, \"index\": 41, \"width\": 1699, \"height\": 2232, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1443, \"height\": 631, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 680, \"height\": 327, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 677, \"height\": 266, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 989, \"height\": 408, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 548, \"height\": 183, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 844, \"height\": 420, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 413, \"height\": 209, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 437, \"height\": 254, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 702, \"height\": 218, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 646, \"height\": 354, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 691, \"height\": 407, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 707, \"height\": 443, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 639, \"height\": 238, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5l8gydisby/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1782, \"height\": 1838, \"label\": \"Table\"}]"
motivation: 传统指代分割难以处理超越物体标签的隐含属性引用，如设计、材质等。
method: 采用思维链推理，通过属性提示让LLM生成物体形状、颜色等详细描述，并引导分割模型。
result: 在开放词汇和零样本条件下，RESAnything对任意指代表达式实现了高精度分割。
conclusion: 属性提示结合思维链有效扩展了指代分割的边界，体现了提示策略在视觉推理中的价值。
---

## Abstract
We present an open-vocabulary and zero-shot method for arbitrary referring expression segmentation (RES), targeting input expressions that are more general than what prior works were designed to handle. Specifically, our inputs encompass both object- and part-level labels as well as implicit references pointing to properties or qualities of object/part function, design, style, material, etc. Our model, coined RESAnything, leverages Chain-of-Thoughts (CoT) reasoning, where the key idea is attribute prompting. We generate detailed descriptions of object/part attributes including shape, color, and location for potential segment proposals through systematic prompting of a large language model (LLM), where the proposals are produced by a foundational image segmentation model. Our approach encourages deep reasoning about object or part attributes related to function, style, design, etc., enabling the system to handle implicit queries without any part annotations for training or fine-tuning. As the first zero-shot and LLM-based RES method, RESAnything achieves clearly superior performance among zero-shot methods on traditional RES benchmarks and significantly outperforms existing methods on challenging scenarios involving implicit queries and complex part-level relations. Finally, we contribute a new benchmark dataset to offer ~3K carefully curated RES instances to assess part-level, arbitrary RES solutions.

---

## 论文详细总结（自动生成）

### 1. 研究动机与核心问题
- **背景**：指代表达式分割（RES）旨在根据自然语言描述分割图像中的目标区域。传统方法大多聚焦于含有明确语义标签（如“人”“车”）的对象级分割，难以处理**隐含属性引用**（例如功能、设计、风格、材质）以及**部件级指代**（如图中产品的“网格靠背”）。
- **核心问题**：现有方法的输入表达式形式受限，无法有效应对无标签、涉及属性或部件关系的任意指代（arbitrary referring）。同时，多数高性能方法依赖有监督微调，缺少零样本（zero-shot）泛化能力。
- **本文目标**：提出首个零样本、基于大语言模型（LLM）的开放词汇RES方法 **RESAnything** ，能处理从对象/部件标签到功能、材质、设计等任意形式的指代，且无需任何训练或微调。

### 2. 方法论
- **整体框架**：分为两个阶段：**属性提示生成** + **多指标掩码候选选择**（图2）。利用基础模型 SAM 生成分割候选，通过 MLLM 和 CLIP 协同评估，最终输出与表达式最匹配的掩码。
- **属性提示（Attribute Prompting）**：核心创新。
  - 给定图像 `I` 与自由形式表达式 `E`，先让 MLLM 根据精心设计的提示 `Q_ref` 生成**参考文本** `T_ref`，描述目标区域的形状、颜色、位置、功能等属性（例如“位于椅子上方，灰色弧形网格靠背，带黑色边框”）。
  - 对 SAM 生成的每个掩码候选 `m_i`，利用两种视觉提示（边界框 `V_b` 和裁剪掩码 `V_m`）引导 MLLM 生成对应的**候选文本** `T_can,i`，同样描述其视觉属性。
  - 通过这种“属性提示”，将模糊的指代表达转化为具体的属性描述，强化 CoT 推理。
- **掩码候选选择**：综合 **文本‑文本** 和 **文本‑图像** 两种模态的相似度。
  - 使用 MLLM 输出**二元决策**（是/否）判断参考文本与候选文本/掩码图像是否匹配，缓解连续评分的不稳定。
  - 引入 CLIP 计算**标量相似度分**，用于在多个正向候选之间进一步区分。
  - 设计**分组与选择**算法（Algorithm 1）：优先选出同时满足文本‑文本和文本‑图像二元决策的掩码（及其并集），根据 CLIP 总分最高者输出；无匹配时依次放宽条件，阈值为1的兜底逻辑可识别目标不存在的情形。
- **零样本特性**：全程无训练，仅依赖预训练的 Pixtral 12B（MLLM）、SAM ViT‑H、CLIP‑ViT‑B‑32。

### 3. 实验设计
- **数据集与基准**：
  - **标准 RES 基准**：RefCOCO、RefCOCO+、RefCOCOg，评估对象级指代分割。
  - **推理分割数据集**：ReasonSeg（包含需要逻辑推理的表达）。
  - **新基准 ABO‑Image‑ARES**：基于 Amazon 产品数据的 **2,989 个**精心标注的实例，涵盖 4 类表达式：语义标签（1,360）、Logo/包装标签（742）、功能/设计（502）、材质/风格（385），考查复杂部件级推理。
  - **其他评估**：COCO‑Tasks（可负担性驱动），以及 UniRES、g‑RefCOCO 等多对象、部件级扩展。
- **对比方法**：
  - 有监督/预训练方法：VLT、CRIS、LAVT、GRES、UniRES、LISA、GLaMM、SAM4MLLM、GSVA 等。
  - 训练自由（零样本）方法：GLCLIP、CaR (CLIP as RNN)。
- **评价指标**：gIoU 和 cIoU（累计 IoU）。

### 4. 资源与算力
- 实验主要使用 **8 块 NVIDIA 32GB V100 GPU** 进行并行推理。
- 单次推理可在**单块 NVIDIA 24GB 4090 GPU** 上高效运行。优化后每张图像处理时间约 12.1 秒（Qwen2‑VL 版本），比部分监督方法稍慢，但训练成本为零。
- 论文未明确提及训练时长（方法训练自由），因此无训练算力消耗。

### 5. 实验数量与充分性
- **多数据集覆盖**：在 4 个公开基准（RefCOCO 三个子集、ReasonSeg）以及自建的 ABO‑Image‑ARES、GRES 等共 7+ 个评测场景上全面验证。
- **消融研究详细**：
  - **属性提示 vs. 标准提示**：验证了属性提示的必要性（gIoU 大幅提升）。
  - **视觉提示组合**：对比了原始图像、掩码裁剪、边界框、轮廓、模糊背景等 5 种设计及其组合，证明边界框+裁剪掩码最佳。
  - **MLLM 骨干变体**：比较 Pixtral‑12B、Claude 3.5 Sonnet、Qwen2‑VL，性能稳定在 74‑76% gIoU。
  - **掩码选择器组合**：单独使用 CLIP 或 MLLM，与两者结合对比，证明多模态融合的互补优势。
- **实验公平性**：所有零样本方法采用同一模型检查点，无微调；监督方法在其自身训练设置下报告结果。补充材料还提供多次运行平均结果，提升可靠性。
- 充分性很高，覆盖了方法核心组件、不同模型规模、多类型指代任务，对比基准包括训练自由、预训练和完全监督方法，实验设计客观。

### 6. 主要结论与发现
- RESAnything 在零样本条件下，显著超越现有训练自由的 RES 方法（如在 RefCOCO val 上 gIoU 68.5% vs. CaR 33.6%），达到了早期有监督方法的水平。
- 在推理分割数据集 ReasonSeg 上，以 **74.6% gIoU / 72.5% cIoU** 大幅超过微调方法 LISA‑13B（57.7%/60.3%）和 SAM4MLLM（58.4%/60.4%）。
- 在更具挑战的 ABO‑Image‑ARES 上，性能超过 GLaMM 30+ 个百分点，展现跨材质、功能、包装等隐含查询的强大泛化能力。
- 可负担性任务（COCO‑Tasks）上，通过提示优化可获得进一步提升，逼近有监督 CoTDet。
- 属性提示通过引导 LLM 进行深层属性挖掘，是实现零样本任意指代分割的关键机制。

### 7. 优点
- **新颖的属性提示**：将抽象指代转化为具体属性描述，显著增强 MLLM 的视觉定位推理。
- **真正的零样本**：无需任何任务特定训练或微调，降低了对标注数据的依赖，扩展性强。
- **高度通用**：统一处理对象级、部件级、属性级和隐含关系表达，覆盖广泛的实际应用场景。
- **贡献新基准**：ABO‑Image‑ARES 为部件级推理分割提供了高质量评测。
- **鲁棒的掩码选择**：结合 MLLM 二元判别与 CLIP 标量分数的多指标融合，并设计了处理遮挡和多目标的分组合并策略。

### 8. 不足与局限
- **依赖基础模型能力**：SAM 可能无法生成理想掩码候选，尤其当目标被遮挡或不连通时；MLLM 的推理质量也会直接影响结果。
- **效率仍有提升空间**：虽然可单卡运行，但每张图像推理时间（~12 秒）比部分轻量方法高，候选文本逐一生成本较高。
- **属性局限**：当前属性提示侧重于形状、颜色、位置，对风格、功能等更抽象的属性覆盖有限；自动化提示优化尚待探索。
- **数据集偏差**：新基准 ABO‑Image‑ARES 源自 Amazon 产品图片，背景相对干净，在自然场景中的泛化性仍需进一步验证。
- **未见目标处理**：对于不可见或无关目标虽可生成解释性文本，但定位逻辑较为简单，复杂交互场景下易出错。

（完）
