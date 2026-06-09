---
title: "Stealix: Model Stealing via Prompt Evolution"
title_zh: Stealix：通过提示进化的模型窃取
authors: "Zhixiong Zhuang, Hui-Po Wang, Maria-Irina Nicolae, Mario Fritz"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=p6PElhIM4E"
tags: ["query:pe"]
score: 7.0
evidence: 利用无预定义提示的自动提示进化进行模型窃取，展示了针对数据合成任务的提示进化方法。
tldr: 现有模型窃取依赖手工设计的提示，限制了自动化和可扩展性。本文提出Stealix，首次在不使用预定义提示的情况下，利用两个开源模型自动进化提示以合成数据，实现模型窃取。该方法不仅暴露了自动化提示进化带来的安全风险，其自动进化提示的技术也可启发提示工程领域的自动优化研究。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-p6pelhim4e/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 804, \"height\": 322, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-p6pelhim4e/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1688, \"height\": 479, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-p6pelhim4e/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1511, \"height\": 547, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-p6pelhim4e/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1508, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-p6pelhim4e/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1516, \"height\": 313, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-p6pelhim4e/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1762, \"height\": 234, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-p6pelhim4e/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1766, \"height\": 631, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-p6pelhim4e/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1518, \"height\": 256, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-p6pelhim4e/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1507, \"height\": 324, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-p6pelhim4e/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1344, \"height\": 277, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1522, \"height\": 405, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 690, \"height\": 257, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 878, \"height\": 208, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 642, \"height\": 277, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1459, \"height\": 194, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1396, \"height\": 227, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1068, \"height\": 191, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1387, \"height\": 392, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1235, \"height\": 226, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1189, \"height\": 262, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1199, \"height\": 244, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-p6pelhim4e/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1092, \"height\": 408, \"label\": \"Table\"}]"
motivation: 传统模型窃取依赖手工提示设计，缺乏自动化和可扩展性，攻击者门槛高。
method: 提出Stealix框架，利用两个开源模型自动进化提示，无需先验知识或预定义提示。
result: 在多个数据集上，Stealix成功实现黑盒模型窃取，且攻击效率显著提升。
conclusion: 展示了自动提示进化在模型窃取中的潜力，也为提示自动化研究提供了新思路。
---

## Abstract
Model stealing poses a significant security risk in machine learning by enabling attackers to replicate a black-box model without access to its training data, thus jeopardizing intellectual property and exposing sensitive information.
Recent methods that use pre-trained diffusion models for data synthesis improve efficiency and performance but rely heavily on manually crafted prompts, limiting automation and scalability, especially for attackers with little expertise.
To assess the risks posed by open-source pre-trained models, we propose a more realistic threat model that eliminates the need for prompt design skills or knowledge of class names.
In this context, we introduce Stealix, the first approach to perform model stealing without predefined prompts. Stealix uses two open-source pre-trained models to infer the victim model’s data distribution, and iteratively refines prompts through a genetic algorithm, progressively improving the precision and diversity of synthetic images.
Our experimental results demonstrate that Stealix significantly outperforms other methods, even those with access to class names or fine-grained prompts, while operating under the same query budget. These findings highlight the scalability of our approach and suggest that the risks posed by pre-trained generative models in model stealing may be greater than previously recognized.

---

## 论文详细总结（自动生成）

## 论文核心问题与整体含义
- 研究背景：模型窃取攻击允许攻击者在无训练数据与模型权重的情况下，通过查询受害模型复现其功能，威胁知识产权与隐私。近年来，利用预训练扩散模型合成查询图像的方法效率较高，但严重依赖人工设计的提示（prompts），难以自动化与规模化，尤其对缺乏领域知识的攻击者构成障碍。
- 核心问题：现有工作假设攻击者掌握类别名称或能手工设计提示，这一假设过于理想化，低估了开放源生成模型在真实攻击场景中的风险。本文提出更实际的威胁模型——攻击者既无提示设计技能，也无类别名称信息，仅需极少量种子图像（每类一张）。
- 整体含义：揭示在无需人工干预的情况下，基于开放源模型自动进化提示足以高效窃取模型，表明预训练生成模型带来的安全风险远超以往认知，亟需更强的防御手段。

## 论文提出的方法论
- 核心思想：**Stealix** 是一个无需预定义提示的模型窃取框架。它利用文本到图像生成模型（Stable Diffusion）与视觉-语言模型（OpenCLIP），通过遗传算法迭代进化提示，使合成图像既贴近受害模型的数据分布，又保持类内多样性，从而训练高保真度的替代模型。
- 威胁模型设定：攻击者仅能获得受害模型的硬标签预测（top-1类别），每类查询预算有限（B），且不拥有类别名称或提示设计能力，仅持有每类一张真实种子图像。
- 主要流程（算法1）：
  1. **初始化**：为每类构建种子集（X_s^c）、正样本集（X_+^c，分类正确的合成图像）和负样本集（X_-^c，分类错误的合成图像）。初始化种群 S_t 由种子图像构成的三元组（x_s, x_+, x_-）组成。
  2. **提示精炼 (Prompt Refinement, 见公式3、4)**：利用视觉-语言模型的图像编码器 I 和文本编码器 T，以种子图像、正样本和负样本组成的三元组为引导，通过最小化对比相似性损失来优化离散提示 p。损失函数使提示嵌入靠近正样本而远离负样本，从而捕捉目标类的判别性特征，滤除误导特征。
  3. **提示一致性 (Prompt Consistency, 见公式5)**：用优化后的提示生成一批图像 M 张，计算受害模型将其分类为目标类别的比例，作为适应度指标（PC）。该指标用于评估提示质量，并指引后续进化。相关分析证实 PC 与合成图像到真实数据特征的距离呈强负相关（Spearman ρ ≈ -0.63 至 -0.88）。
  4. **提示繁殖 (Prompt Reproduction, 遗传算法)**：基于 PC 适应度，通过锦标赛选择、交叉（交换三元组图像）和变异（从正/负样本集中随机替换图像）生成新一代三元组种群，并保留精英个体。该过程迭代直至查询预算耗尽。
  5. **替代模型训练**：利用所有合成图像及其受害模型预测标签训练替代模型（如 ResNet-18）。
- 关键创新：将受害者反馈（硬标签）融入提示优化的适应度评估，并通过进化机制主动探索多样化的提示，首次实现完全无需人工提示的自动化模型窃取。

## 实验设计
- **数据集与场景**：
  - 标准数据集：**EuroSAT**（卫星图像分类，类名缺乏描述性）、**PASCAL VOC**（按最大目标分类，需识别主要对象）、**DomainNet**（6个域的10类，跨域泛化）、**CIFAR-10**（类名可直接用于生成，对基线有利）。
  - 真实专有数据：HuggingFace 上的 **NSFW** 二分类模型（非公开训练数据）。
  - 医学数据集（附录）：**PatchCamelyon** 和 **RetinaMNIST**，检验生成模型领域知识受限时的性能。
- **基准对比方法**：
  - **DA-Fusion**：基于文本反转的软提示数据增强方法。
  - **Real Guidance**：使用“a photo of a {class name}”作为固定提示。
  - **ASPKD**：先以 Real Guidance 生成大量图像，再通过主动自步知识蒸馏选取查询。
  - **Knockoff Nets**：使用随机公共数据集查询。
  - **DFME**：数据无关的 GAN 基方法（查询预算 2M/类）。
  - **KD**：使用受害模型训练数据查询的上限参考。
  - **InstructBLIP**：模拟攻击者利用视觉-语言模型生成提示。
- **评价指标**：替代模型在受害数据测试集上的准确率；提示一致性（PC）；合成图像的多样性（Recall 指标）。查询预算固定为每类500次（DFME 为2M），全部实验重复3次报告均值与置信区间。

## 资源与算力
- 实验硬件：单块 **NVIDIA V100 32GB GPU**，搭配 **AMD EPYC 7543 32-Core CPU**。
- 计算时间：以 EuroSAT 数据集（10类，500查询/类）为例，Stealix 总耗时约 **6.3 小时**，对比 DA-Fusion 5.4 小时、ASPKD 28.6 小时、DFME 4.5 小时（但查询量为2M/类）。方法在实现当时最佳精度的同时，保持了可接受的计算效率。

## 实验数量与充分性
- 实验矩阵：覆盖 **4个标准数据集 + 1个专有模型 + 2个医学数据集**，对比 **6种以上基线方法**，并包含不同查询预算下的性能曲线。
- 消融与对比实验：
  - 消融掉提示繁殖模块（退化为 PEZ），验证进化机制与受害者反馈的贡献。
  - 相关性检验：分析 PC 与特征距离、PC 与替代模型准确率间的统计关系。
  - 模拟人类攻击者：用 InstructBLIP 基于种子图像生成提示，对比自动化效果。
  - 多样性度量：比较各方法的 Recall 分数。
  - 架构泛化性：更换不同攻击者模型（ResNet18/34, VGG16, MobileNet）和受害者模型结构。
  - DFME 的局限分析：量化输出量化与硬标签对该方法的性能影响。
  - 软标签效果：验证硬标签防御仅能降低而非消除窃取效率。
  - 数据增强 vs 模型窃取：对比只使用种子图像做增强不查询受害模型的场景。
- 实验设计客观全面，消融与分析充分，并考虑了真实专有数据与领域局限，验证了方法的有效性和泛化能力。

## 论文的主要结论与发现
- Stealix 在所有数据集上均**显著超过**使用类别名称或手工提示的方法，在 500 查询预算下，准确率相较次优方法提升最高达 **22.2%**（CIFAR-10）。
- 即使在 PASCAL 等包含多目标的复杂场景中，Stealix 仍能识别受害模型关注的主要目标，甚至超越使用训练数据的 KD 上限。
- PC 与受害数据分布特征距离呈强负相关，验证了其作为无数据条件下代理指标的有效性；更高 PC 的提示一致带来更高的替代模型性能。
- 自动进化的提示能挖掘人类难以察觉但对模型判别关键的特征（如卫星图像中的地理纹理），同时生成更具多样性的图像，提升窃取效率。
- 该工作表明，开放源预训练模型使模型窃取的门槛大幅降低，现有防御（如仅返回硬标签）已不足以完全杜绝风险。

## 优点
- **威胁模型更现实**：首次取消类别名与手工提示依赖，贴合低知识攻击者场景。
- **方法自动化程度高**：利用受害者反馈与遗传算法实现提示的自动进化，无需人工干预。
- **解耦设计**：图像合成与替代模型训练分离，合成图像可复用于超参调优或其他攻击，灵活性强。
- **评估全面且严谨**：多数据集、多基线、多角度分析（多样性、相关性、消融、架构鲁棒性），并涵盖专有模型和医学领域，结果令人信服。

## 不足与局限
- **依赖生成模型先验**：当扩散模型缺乏目标领域知识时（如医学图像），性能增益缩小，虽仍优于基线，但上限受限于生成模型本身。
- **初始种子需求**：仍需每类至少一张真实图像作为进化起点，完全零样本冷启动尚不可行。
- **防御可升级空间**：虽能抵御硬标签限制，但未探讨对更高级防御（如返回混淆输出、查询检测）的对抗能力。
- **计算开销**：尽管优于部分方法，但每类 6.3 小时的合成成本仍对大规模多类窃取构成一定负担。
- **提示可解释性弱**：进化所得提示多为无意义 Token 组合，人无法理解，对攻击者调优和可信度有一定影响。

（完）
