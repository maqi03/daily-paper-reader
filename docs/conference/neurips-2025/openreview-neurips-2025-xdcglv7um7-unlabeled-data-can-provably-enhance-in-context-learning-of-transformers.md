---
title: Unlabeled Data Can Provably Enhance In-Context Learning of Transformers
title_zh: 无标签数据可证明增强Transformer的上下文学习
authors: "Renpu Liu, Jing Yang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=XdCglv7Um7"
tags: ["query:pe"]
score: 9.0
evidence: 通过添加无标签数据增强上下文学习提示
tldr: 本文针对上下文学习中标注样本稀少且昂贵的问题，提出一种增强型上下文学习框架，将无标签数据块与少量标注示例共同纳入提示。通过链式思维提示，在多层Transformer上理论证明和实验验证了该方法在多类线性分类任务上可接近贝叶斯最优精度。这一框架有效利用了丰富无标签数据，显著提升了上下文学习的性能上限。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-xdcglv7um7/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1427, \"height\": 364, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-xdcglv7um7/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1326, \"height\": 147, \"label\": \"Table\"}]"
motivation: 标注示例受限于提示长度且获取成本高，而无标签数据大量存在却未被利用于上下文学习。
method: 提出一种提示增强框架，在提示中同时包含少量标注示例和一块无标签输入，并采用链式思维提示。
result: 理论证明和实验显示，该方法能使Transformer在多类线性分类上达到接近贝叶斯最优精度。
conclusion: 无标签数据可有效增强上下文学习，为提示设计提供了新方向。
---

## Abstract
Large language models (LLMs) exhibit impressive in‑context learning (ICL) capabilities, yet the quality of their predictions is fundamentally limited by the few costly labeled demonstrations that can fit into a prompt. Meanwhile, there exist vast and continuously growing amounts of unlabeled data that may be closely related to the ICL task. How to utilize such unlabeled data to provably enhance the performance of ICL thus becomes an emerging fundamental question. In this work, we propose a novel augmented ICL framework, in which the prompt includes a small set of labeled examples alongside a block of unlabeled inputs. We focus on the multi-class linear classification setting and demonstrate that, with chain-of-thought (CoT) prompting, a multi-layer transformer can effectively emulate an expectation–maximization (EM) algorithm. This enables the transformer to implicitly extract useful information from both labeled and unlabeled data, leading to provable improvements in ICL accuracy. Moreover, we show that such a transformer can be trained via teacher forcing, with its parameters converging to the desired solution at a linear rate. Experiments demonstrate that the augmented ICL framework consistently outperforms conventional few-shot ICL, providing empirical support for our theoretical findings. To the best of our knowledge, this is the first theoretical study on the impact of unlabeled data on the ICL performance of transformers.

---

## 论文详细总结（自动生成）

好的，我将以资深学术论文分析助手的身份，使用中文、以 Markdown 形式，对所给论文进行结构化、深入、客观的总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：如何在理论上可证明地利用大量、廉价的无标签数据，来增强 Transformer 在仅有少量昂贵标注示例情况下的上下文学习性能。
*   **研究动机与背景**：
    *   大型语言模型的上下文学习能力受限于提示中能容纳的少量标注示例，且获取高质量标注数据成本高昂。
    *   现实世界中存在海量与任务相关的无标签数据，但传统上下文学习范式未能有效利用它们。
    *   现有一些方法尝试用模型自生成伪标签来扩充示例，但会引入模型自身的偏差和噪声。
*   **整体含义**：本文旨在从理论和实践上证明，通过在提示中直接混合少量标注样本和大量无标签样本，并采用链式思维推理，Transformer 能够提取无标签数据中的统计信息，从而显著且可证明地提升上下文学习性能。

### 2. 论文提出的方法论

*   **核心思想：增强型上下文学习框架**
    *   设计一种新的提示范式，将上下文学习实例从纯标注样本 `D_label` 扩展为包含标注样本和无标签样本 `D_unlabel` 的混合体。
    *   模型的目标是在一次前向传播中，同时利用这两部分信息，为所有无标签样本预测标签，而非像传统上下文学习那样仅预测单一查询样本。
*   **关键技术细节：Transformer 模拟 EM 算法**
    *   **任务设定**：聚焦于多类线性分类问题，即数据服从高斯混合模型分布，类别标签为 one-hot 向量。
    *   **链式思维提示**：将任务实例编码为一个嵌入矩阵，其中包含标注样本块、无标签样本块和推理块。Transformer 通过多个链式思维步骤生成中间结果，并将其追加到输入序列中进行迭代推理。
    *   **四层 Transformer 架构实现 EM**：论文显式地构建了一个四层 Transformer，每层（注意力层+MLP层）精确模拟期望最大化算法的一次迭代。
        *   **第 1 层 (E-step)**：使用 Softmax 注意力机制，基于当前的类别均值估计，计算每个无标签样本属于各个类别的后验概率 `p_ij`。
        *   **第 2、3 层 (M-step)**：使用线性注意力机制，执行一步梯度下降，利用上一步计算的后验概率来更新类别均值估计。更新公式为：`μ̂_i^{(t+1)} = μ̂_i^{(t)} - η^{(t)} / M * Σ p_{ij}^{(t)} (μ̂_i^{(t)} - x_j)`。
        *   **第 4 层**：仅在第一步激活，使用 ReLU 注意力机制，从标注样本中计算初始的类别均值估计：`μ̂_i^{(1)} = C/N * Σ (1_{y_j=i}) * x_j`。
    *   **理论保证**：论文证明了此 Transformer 的类别均值估计误差满足 `O(1/√N + poly(1/M))` 的上界，这严格优于仅使用 `N` 个标注样本的分类器所能达到的 `Ω(1/√N)` 的下界，从而理论上证明了无标签数据的增益。
*   **训练方法：教师强制**
    *   为了让 Transformer 学会上述 EM 算法行为，论文采用教师强制策略。
    *   **损失函数**：定义一个链式思维训练损失，要求 Transformer 在每个链式思维步骤中，对无标签样本预测的类别分布，与由“参考算法”（即标准 EM 算法）生成的“标准答案”类别分布之间的交叉熵最小化。
    *   **训练动力学分析**：论文证明，在适当的初始化下，通过对该总体损失函数进行梯度下降，Transformer 第一层的可训练参数 `W` 会以线性速率收敛到真实数据分布的逆协方差矩阵 `Σ^{-1}`，从而理论上证明了期望的 Transformer 行为是可学习和可识别的。

### 3. 实验设计

*   **数据集/场景**：
    *   使用**合成数据**模拟多类线性分类任务。
    *   **具体设置**：类别数 `C=3`，数据维度 `d=3`。类别均值向量从标准正态分布中随机采样，协方差矩阵为共享的各向同性矩阵 `Σ = εI`，测试了 `ε ∈ {0.7, 1.5}` 两种噪声水平。
    *   每个实例包含 `N=5` 个标注样本和不同数量的无标签样本 `M ∈ {1, 10, 20}`，其中 `M=1` 退化为传统的上下文学习设置。
*   **Benchmark 与方法对比**：
    *   主要对比对象是**传统的少样本上下文学习**（即 `M=1` 的情况）。
    *   将增强型上下文学习 (`M=10, 20`) 的性能与传统上下文学习进行对比，并对比了仅使用标注样本的贝叶斯最优分类器的理论风险上界。

### 4. 资源与算力

*   **算力配置**：所有实验均在**一块拥有 80 GB 显存的 NVIDIA H100 GPU** 上完成。
*   **训练时长**：完成全部实验大约需要 **5 小时**。

### 5. 实验数量与充分性

*   **实验数量**：论文进行了多组实验，覆盖了 2 种噪声水平 × 3 种无标签样本数共 6 种核心配置。此外，还有训练迭代次数（15,000次）作为横轴的动态性能展示。
*   **实验充分性与客观性评估**：
    *   **充分性**：实验设置直接对应理论部分的核心变量（`M` 和 `ε`），能够有效验证理论发现。通过跟踪整个训练过程中的性能变化，展示了模型行为是如何逐步涌现的，增强了论证的完整度。
    *   **客观性与公平性**：所有对比在同一框架和任务下进行，比较公平。每个配置均独立运行 **5 次**，并报告了**平均性能 ± 2 倍标准差**，体现了对结果稳定性和随机性的考量，实验操作是客观的。
    *   **局限性**：实验仅限于合成数据集和小规模问题，缺乏在真实世界 NLP 任务或更复杂分类任务上的验证。

### 6. 论文的主要结论与发现

1.  **无标签数据可证明增强上下文学习**：本文首次从理论上证明了，通过链式思维提示，Transformer 能够利用无标签数据，在多类线性分类任务上将预测误差从传统上下文学习的 `Ω(1/√N)` 下界，降低到 `O(1/√N + poly(1/M))`。
2.  **Transformer 可实现 EM 算法**：显式构建了一个多层 Transformer，其前向传播过程精确模拟了期望最大化算法的迭代过程，为上下文学习的机制提供了新的解释。
3.  **期望行为可被有效学习**：理论分析表明，通过教师强制训练，Transformer 的相关参数可以线性收敛到理想解，证明了这种增强型上下文学习能力是可训练的。
4.  **实验验证**：在合成数据上的实验表明，增强型上下文学习的类别均值估计误差和分类准确率均显著优于传统上下文学习，且无标签数据越多（`M` 越大）、数据噪声越小（`ε` 越小），优势越明显。

### 7. 优点

*   **理论创新性强**：首次对无标签数据在 Transformer 上下文学习性能上的影响进行了严谨的理论分析，并给出了可证明的增益。
*   **方法论优雅**：清晰地展示了如何通过精心设计的 Transformer 架构，将一个经典的统计学习算法（EM 算法）“编译”进模型的前向传播中，并可通过标准训练方法学习到。
*   **问题视角新颖**：提出了“增强型上下文学习”这一范式，为突破上下文学习中标注数据瓶颈提供了新的直接利用无标签数据的思路，区别于传统的伪标签方法。
*   **理论与实践结合紧密**：理论分析引导了模型设计，实验结果又很好地支撑了理论发现，形成闭环论证。
*   **训练动力学分析深刻**：对教师强制下的训练过程进行了非渐近收敛性分析，揭示了参数演化的具体路径，技术性强。

### 8. 不足与局限

*   **假设条件较强**：
    *   **任务设定简化**：仅限于多类线性分类（高斯混合模型），且假设噪声协方差矩阵是各向同性的。这与真实世界中高度复杂、非线性的语言任务仍有较大差距。
    *   **架构特定**：需要显式构建一个特定结构的四层 Transformer 来实现 EM 算法，不完全等同于训练中自然涌现的行为。
*   **实验验证不足**：
    *   **数据集单一**：仅在低维度的合成数据上进行了验证，未在真实世界的自然语言处理或图像分类任务上测试，其泛化能力存疑。
    *   **规模有限**：实验中的模型和问题规模（`d=3, N=5`）都很小，无法反映大规模参数和大批量数据下的训练和行为特征。
*   **训练分析局限**：在训练动力学分析中，为了理论可处理性，只分析了第一层参数的收敛性，而冻结了其他三层，未能全面揭示多层网络端到端训练的复杂动力学。
*   **温度参数依赖**：理论分析依赖于通过控制温度参数 `β` 来使得模型行为逼近硬期望最大化，在实际应用中这是一个需要仔细调节的超参数。

（完）
