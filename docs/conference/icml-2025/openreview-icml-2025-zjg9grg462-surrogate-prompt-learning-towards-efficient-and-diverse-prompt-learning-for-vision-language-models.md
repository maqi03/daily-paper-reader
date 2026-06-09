---
title: "Surrogate Prompt Learning: Towards Efficient and Diverse Prompt Learning for Vision-Language Models"
title_zh: 代理提示学习：面向视觉-语言模型的高效多样化提示学习
authors: "Liangchen Liu, Nannan Wang, Xi Yang, Xinbo Gao, Tongliang Liu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=zjG9GRG462"
tags: ["query:pe"]
score: 8.0
evidence: 提出代理提示学习方法，为视觉-语言模型生成多样化文本特征，提升提示有效性和效率。
tldr: 现有多样化提示学习虽能提升视觉-语言模型性能，但计算资源开销巨大。本文提出代理提示学习框架SurPL，通过学习一个代理来直接生成所需的多样提示化文本特征，避免了显式学习多个提示，在保持效果的同时大幅降低计算成本，为提示学习的实际应用提供了高效替代方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-zjg9grg462/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 857, \"height\": 604, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zjg9grg462/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1750, \"height\": 636, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zjg9grg462/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 812, \"height\": 417, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zjg9grg462/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 855, \"height\": 380, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zjg9grg462/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1387, \"height\": 2041, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 815, \"height\": 592, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 800, \"height\": 503, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 855, \"height\": 238, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1701, \"height\": 446, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 875, \"height\": 474, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1666, \"height\": 176, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 808, \"height\": 412, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1591, \"height\": 134, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1540, \"height\": 670, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1646, \"height\": 603, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1718, \"height\": 385, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1728, \"height\": 523, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1710, \"height\": 338, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1547, \"height\": 389, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1576, \"height\": 275, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1662, \"height\": 704, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1703, \"height\": 1214, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zjg9grg462/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1636, \"height\": 600, \"label\": \"Table\"}]"
motivation: 多样化提示学习能提升下游任务性能，但计算资源需求极高，效率问题未解。
method: 提出SurPL框架，不直接学习多样提示，而是生成代理来合成多样化文本特征。
result: 在多个视觉-语言任务上，SurPL以更低计算量达到与显式多样化提示相当的性能。
conclusion: 实现了高效且多样的提示学习，拓宽了提示方法在资源受限场景的应用。
---

## Abstract
Prompt learning is a cutting-edge parameter-efficient fine-tuning technique for pre-trained vision-language models (VLMs). Instead of learning a single text prompt, recent works have revealed that learning diverse text prompts can effectively boost the performances on downstream tasks, as the diverse prompted text features can comprehensively depict the visual concepts from different perspectives. However, diverse prompt learning demands enormous computational resources. This efficiency issue still remains unexplored. To achieve efficient and diverse prompt learning, this paper proposes a novel \textbf{Surrogate Prompt Learning (SurPL)} framework. Instead of learning diverse text prompts, SurPL directly generates the desired prompted text features via a lightweight \textbf{Surrogate Feature Generator (SFG)}, thereby avoiding the complex gradient computation procedure of conventional diverse prompt learning. Concretely, based on a basic prompted text feature, SFG can directly and efficiently generate diverse prompted features according to different pre-defined conditional signals. Extensive experiments indicate the effectiveness of the surrogate prompted text features, and show compelling performances and efficiency of SurPL on various benchmarks.

---

## 论文详细总结（自动生成）

### 1. 论文核心问题与整体含义

这篇论文聚焦于**视觉-语言模型（VLMs）中“多样化提示学习”的效率难题**。提示学习是一种参数高效微调技术，已有研究表明，学习多个不同的文本提示（例如实例依赖提示、细粒度提示）能显著提升模型对视觉概念的理解，因为它们从多角度提供了更全面的描述。  
- **核心痛点**：虽然多样化提示提升了性能，却带来了巨大的计算资源消耗。传统方法需要为多个提示并行计算通过整个文本编码器的梯度，导致显存占用和训练时间激增，这一问题此前尚未得到有效解决。  
- **论文目标**：提出一种名为 **Surrogate Prompt Learning（SurPL，代理提示学习）** 的框架，在保持甚至超越多样提示性能的同时，将计算复杂度降至与单提示学习相当的水平。

### 2. 方法论核心思想与技术细节

SurPL 的关键创新在于**不直接学习多个文本提示，而是用一个轻量级代理器直接生成所需的多样化文本特征**，从而绕过了文本编码器的重复梯度计算。

- **核心组件：Surrogate Feature Generator (SFG，代理特征生成器)**
  - **本质**：一个轻量级交叉注意力（cross-attention）模块。
  - **工作原理**：
    - **输入**：一个基础提示产生的文本特征（作为 Query），以及灵活的、预定义的条件信号（作为 Key 和 Value）。
    - **输出**：根据不同的条件信号，高效地生成多样化的代理文本特征。
    - 条件信号非常灵活，可以是输入图像的视觉特征（用于实例依赖提示），也可以是可学习的参数（用于细粒度提示）。
  
  - **公式表达（SFG核心）**：
    - 代理文本特征 \( h \) 由基础特征 \( w \) 和条件信号 \( \alpha \) 通过交叉注意力生成：
      \( h = \theta_{\text{SFG}}(w, \alpha) = \text{MLP}\left( \text{softmax}\left( \frac{w \alpha^T}{\sqrt{d_k}} \right) \alpha \right) \)

- **两种典型应用实例**：
  1.  **实例依赖（Instance-dependent）代理提示**：以当前图像的视觉特征作为条件信号 \( \alpha^{\text{ID}} \)，让生成的文本特征动态适应每个实例。
  2.  **细粒度（Fine-grained）代理提示**：定义一组可学习的参数 \( \alpha^{\text{FG}} \) 作为条件信号，生成多个能对齐不同局部视觉特征的文本特征。通过计算生成文本特征与图像局部特征的相似度，选取最具代表性的局部信息来增强对齐。

- **优化与推理**：
  - **优化**: 除了代理特征，还学习一个“全局不变（GI）”文本特征。最终损失函数为三部分损失之和：全局不变损失 \( L_{CE}^{GI} \)、实例依赖损失 \( L_{CE}^{ID} \) 和细粒度损失 \( L_{CE}^{FG} \)。
  - **推理**: 最终预测概率是全局不变、实例依赖以及所有细粒度特征预测概率的平均值。

### 3. 实验设计与对比方法

实验设计非常全面，覆盖了多个主流评估场景和15个公开数据集，确保了评估的客观性。

- **数据集**：包括通用物体（ImageNet）、场景（SUN397）、细粒度（StanfordCars, FGVCAircraft）、纹理（DTD）、卫星（EuroSAT）等共计15个数据集，构建了一个全面的评估基准。
- **评估场景**：
  - **小样本学习 (Few-shot Learning)**：在少量标注样本上微调并评估。
  - **基类-新类泛化 (Base-to-Novel Generalization)**：在基类上训练，评估其对新类的泛化能力。
  - **跨数据集泛化 (Cross-dataset Generalization)**：在ImageNet上训练，在其他10个数据集上测试。
  - **跨域泛化 (Cross-domain Generalization)**：在ImageNet上训练，在其4个领域偏移的变体上测试。
- **对比方法**：对比了**多样提示方法**（CoCoOp, PLOT++, ALIGN, GalLoP）和**单提示方法**（CoOp, MaPLe, PSRC）等十余种最先进的方法，对比维度涵盖性能和效率。

### 4. 资源与算力需求

论文明确强调了SurPL的效率优势，并给出了具体的资源消耗数据。  
- **硬件配置**：所有实验均在**单个NVIDIA RTX 3090 (24GB显存) GPU**上完成。
- **效率对比**（以ImageNet为例）：
  - 现有方法如CoCoOp, GalLoP在处理ImageNet（1000类）时，即使是4张RTX 3090也会面临**显存溢出 (Out of Memory)** 的问题，这是它们巨大的梯度计算量所致。
  - SurPL则能在**单个RTX 3090**上运行（只需~24GB显存），相比于多样提示方法，显存占用和训练时长均显著降低。它与单提示方法相比，资源消耗相当，仅略增一点训练和测试时间，却带来了大幅性能提升。

### 5. 实验数量与充分性

论文进行了大量且充分的实验，验证了方法的有效性、效率和鲁棒性。
- **主实验**：在4种实验设置下，对比10多种方法，给出平均和逐数据集结果，非常详尽。
- **消融实验**：验证了全局不变、实例依赖、细粒度三个特征模块各自的作用，实验设计清晰。
- **效率分析**：专门用表格（Tab.1 & Tab.2）量化比较了SurPL与多种方法在GPU显存、训练/测试时间上的差异，直接有力。
- **可视化分析**：通过热力图（Fig.3）展示了生成的细粒度特征确实捕捉到了不同尺度的有意义区域；通过相似度分析（Fig.4）展示了实例依赖特征能更好地对齐视觉实例。
- **泛化与可迁移性**：还验证了SurPL可以作为一个通用框架，轻松集成到CoOp、MaPLe等其他单提示学习方法上，并带来一致的性能提升（平均提升1.24%至3.10%）。  
实验设置公平，对比对象和方法多样，结论可靠。

### 6. 主要结论与发现

- SurPL框架成功地在**维持与单提示学习相当的效率**下，实现了**多样化提示学习的效果**，解决了此前方法计算资源过高的瓶颈。
- 提出的**代理特征生成器（SFG）是有效且高效**的，生成的多样化文本特征足以替代通过优化真实提示得到的特征。
- 通过结合实例依赖和细粒度两种类型，SurPL在多个基准上达到了**新的最优性能**（如在11个数据集上的小样本平均准确率达到85.12%）。
- 结合Sharpness-aware Minimization（SAM）策略的SurPL-G模型在**基类-新类泛化**等挑战性场景也表现出极强的竞争力。

### 7. 优点与亮点

- **思想创新**：从“学习多样提示”转变为“生成多样提示特征”，为解决效率问题提供了新颖的范式。
- **效率与性能俱佳**：在保持甚至超越最先进性能的同时，大幅降低了计算门槛，使得多样化提示学习在大规模数据集上（如ImageNet）成为可能。
- **统一性与灵活性**：SFG模块通过配置不同的条件信号，可以灵活地实现不同类型的多样化提示学习思想（实例依赖、细粒度等），甚至可以迁移到其他单提示学习框架上。
- **实验扎实**：评估场景全面，对比方法丰富，效率与性能分析到位，消融实验和可视化分析增强了结论的说服力。

### 8. 不足与局限

- **参数量的增加**：作者明确指出，引入的SFG模块虽然解决了计算效率问题，但**引入了额外的可学习参数**（约1.6M），虽然仍小于部分对比方法，但并非完全没有参数开销。
- **SFG结构设计**：SFG本质上是一个交叉注意力模块，作者也承认这个设计相对“传统”，未来可能探索更高效、性能更好的代理生成器结构。
- **研究范围**：目前主要整合了实例依赖和细粒度提示两种范式，未来可以探索从更多新视角来增强视觉-语言对齐的信号。
- **实验设置局限性**：所有实验基于CLIP的ViT-B/16骨干网络和特定的DVLP基础模型，虽然在这单一配置下实验非常充分，但缺乏在其他VLM架构或基础模型上的泛化性验证。

（完）
