---
title: "EVOREFUSE: Evolutionary Prompt Optimization for Evaluation and Mitigation of LLM Over-Refusal to Pseudo-Malicious Instructions"
title_zh: EVOREFUSE：演化式提示优化用于评估和缓解大语言模型对伪恶意指令的过度拒绝
authors: "Xiaorui Wu, Fei Li, Xiaofeng Mao, Xin Zhang, Li Zheng, Yuxiang Peng, Chong Teng, Donghong Ji, Zhuang Li"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=dbq6NZfi3c"
tags: ["query:pe"]
score: 8.0
evidence: EVOREFUSE应用演化式提示优化生成多样化的伪恶意指令
tldr: 针对大语言模型对伪恶意指令过度拒绝的问题，本文提出EVOREFUSE，利用演化式提示优化自动生成多样化的伪恶意指令，用于评估和缓解过度拒绝现象。实验表明该方法生成的指令能有效且一致地触发模型拒绝，为安全评估提供了自动化工具。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-dbq6nzfi3c/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1442, \"height\": 416, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-dbq6nzfi3c/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1438, \"height\": 438, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-dbq6nzfi3c/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1436, \"height\": 424, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-dbq6nzfi3c/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1438, \"height\": 334, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-dbq6nzfi3c/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1449, \"height\": 372, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-dbq6nzfi3c/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1449, \"height\": 365, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-dbq6nzfi3c/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1444, \"height\": 262, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-dbq6nzfi3c/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1438, \"height\": 1997, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-dbq6nzfi3c/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1443, \"height\": 316, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-dbq6nzfi3c/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1438, \"height\": 123, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-dbq6nzfi3c/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1446, \"height\": 268, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-dbq6nzfi3c/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1146, \"height\": 182, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-dbq6nzfi3c/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1448, \"height\": 366, \"label\": \"Table\"}]"
motivation: 大语言模型常过度拒绝对伪恶意指令的响应，影响用户体验，需有效收集此类指令。
method: 提出EVOREFUSE，采用演化式提示优化生成多样化的伪恶意指令。
result: 实验表明该方法能生成高效引发拒绝的指令，优于手工和改写方法。
conclusion: EVOREFUSE为安全评估提供了自动化的提示生成方案，可辅助缓解过度拒绝问题。
---

## Abstract
Large language models (LLMs) frequently refuse to respond to pseudo-malicious instructions: semantically harmless input queries triggering unnecessary LLM refusals due to conservative safety alignment, significantly impairing user experience. Collecting such instructions is crucial for evaluating and mitigating over-refusals, but existing instruction curation methods, like manual creation or instruction rewriting, either lack scalability or fail to produce sufficiently diverse and effective refusal-inducing prompts. To address these limitations, we introduce EVOREFUSE, a prompt optimization approach that generates diverse pseudo-malicious instructions consistently eliciting confident refusals across LLMs. EVOREFUSE employs an evolutionary algorithm exploring the instruction space in more diverse directions than existing methods via mutation strategies and recombination, and iteratively evolves seed instructions to maximize evidence lower bound on LLM refusal probability. Using EVOREFUSE, we create two novel datasets: EVOREFUSE-TEST, a benchmark of 582 pseudo-malicious instructions that outperforms the next-best benchmark with 85.34% higher average refusal triggering rate across 9 LLMs without a safety-prior system prompt, 34.86% greater lexical diversity, and 40.03% improved LLM response confidence scores; and EVOREFUSE-ALIGN, which provides 3,000 pseudo-malicious instructions with responses for supervised and preference-based alignment training. With supervised fine-tuning on EVOREFUSE-ALIGN, LLAMA3.1-8B-INSTRUCT achieves up to 29.85% fewer over-refusals than models trained on the second-best alignment dataset, without compromising safety. Our analysis with EVOREFUSE-TEST reveals models trigger over-refusals by overly focusing on sensitive keywords while ignoring broader context. Our code and datasets are available at https://github.com/FishT0ucher/EVOREFUSE .

---

## 论文详细总结（自动生成）

好的，以下是对论文《EVOREFUSE: Evolutionary Prompt Optimization for Evaluation and Mitigation of LLM Over-Refusal to Pseudo-Malicious Instructions》的结构化中文总结。

### **1. 论文的核心问题与整体含义**

- **核心问题**: 论文聚焦于大语言模型（LLM）的**过度拒绝（Over‑Refusal）**问题。即模型因过于保守的安全对齐，错误地将语义上无害的用户输入（即“伪恶意指令”）判定为不安全并拒绝回答，这严重损害了用户体验。
- **研究动机**: 系统性地收集能触发模型过度拒绝的“伪恶意指令”是评估和缓解此问题的关键。然而，现有方法存在明显局限：
    - **人工方法**: 缺乏可扩展性。
    - **自动化改写方法**: 未明确以增加模型拒绝概率为目标进行优化，生成的指令多样性不足。
    - **基于梯度的方法**: 优化路径单一，无法充分探索语言空间的多样性。
- **整体含义**: 本文旨在提出一种能够自动化、可扩展地生成多样化、高效能“伪恶意指令”的方法，用于构建更具挑战性的评估基准和更有效的缓解训练数据集。

### **2. 论文提出的方法论**

论文提出了 **EVOREFUSE**，一个通过演化搜索自动生成“伪恶意指令”的提示优化框架。

- **核心思想**: 将寻找最优"伪恶意指令" \( x^* \) 形式化为一个优化问题，目标是最大化给定安全上下文 \( s \) 下，目标LLM发出拒绝 \( r \) 的对数概率 \( \log p_\theta(r | x, s) \)。

- **关键技术细节**:
    - **变分近似与ELBO目标**: 直接计算 \( \log p_\theta(r | x, s) \) 很困难。EVOREFUSE采用变分方法，推导出一个**证据下界（ELBO）**作为代理优化目标。该ELBO由两部分组成：**响应置信度**（模型生成拒绝响应的确定程度）和**拒绝对数概率**（响应被识别为拒绝的可能性）。最大化ELBO间接促进了高置信度拒绝指令的生成。
    - **演化算法流程**: 算法从一个种子指令 \( x_0 \) 开始，在 \( I \) 次迭代中不断进化：
        1.  **变异 (Mutation)**: 利用GPT-4o，根据从现有基准中总结的三大类策略（引入欺骗性上下文、添加敏感词、注入极端情绪）生成多个变异指令。
        2.  **安全验证**: 使用GPT-4o作为安全裁判，过滤掉所有变异和重组生成的有害指令。
        3.  **适应度评估 (Fitness Evaluation)**: 使用基于ELBO的适应度函数 \( F(x) \) 对所有安全指令进行评分。该函数通过蒙特卡洛采样，估算指令引发模型拒绝响应的概率和置信度。
        4.  **重组 (Recombination)**: 选取适应度最高的 \( L \) 个指令，通过GPT-4o重组其语义片段，生成新的候选指令。
        5.  **模拟退火 (Simulated Annealing)**: 从变异和重组的候选中选出最高适应度的指令，根据Metropolis准则决定是否接受其为新一代种子，以平衡探索与利用，防止陷入局部最优。

- **产出**: 最终输出整个迭代过程中适应度最高的指令 \( x^* \)。利用该框架，论文构建了用于评估的**EVOREFUSE-TEST** (582条) 和用于对齐训练的**EVOREFUSE-ALIGN** (3,000条) 两个数据集。

### **3. 实验设计**

实验围绕三个研究问题（RQ）展开，以验证方法的有效性、进行归因分析并评估优化过程。

- **RQ1: 评估与缓解效果**
    - **评估基准 (EVOREFUSE-TEST)**: 在9个主流LLM（如Llama3.1, GPT-4o, DeepSeek-V3等）上，与8个现有过度拒绝基准（如XSTest, OR-Bench, PHTest及其在相同种子集上的变体）进行对比。评估维度包括拒绝触发率（PRR, CRR）、响应置信度（Log-Prob, LongPPL）、词汇多样性（MSTTR, HDD, MTLD）和安全性。
    - **缓解效果 (EVOREFUSE-ALIGN)**: 以Llama3.1-8B-Instruct为基座模型，对比不同微调策略和数据集组合的效果。比较对象包括：仅用安全数据微调、安全数据结合OR-Bench/PHTest/PromptAgent数据集微调，以及Few-Shot/DRO等免训练方法。评估指标包括在越狱基准上的**安全性**和在伪恶意基准上的**过度拒绝率**。

- **RQ2: 归因分析**
    - 使用**梯度归因**和**信息流分析**技术，在EVOREFUSE-TEST的代表性样本上，可视化并量化输入token和Transformer层对模型产生拒绝决策的贡献。

- **RQ3: 优化过程分析**
    - **消融实验**: 对比完整EVOREFUSE框架与移除“重组”或“适应度评估”模块的变体，以及与OR-Bench和PHTest的提示优化管线进行对比。
    - **种子对比**: 使用XSTest中的伪恶意指令与真正不安全指令作为初始种子，对比优化效率和效果。

### **4. 资源与算力**

- 论文**未明确说明**实验所需的具体GPU型号、数量以及总训练时长的详细信息。
- 文中提到了使用GPT-4o作为变异和重组的生成器，以及使用Llama3.1-8B-Instruct作为优化的目标模型，但关于这些模型运行所需的计算资源，没有给出具体规格。

### **5. 实验数量与充分性**

- **实验数量**: 论文设计了较为全面的实验，至少包括三大类（RQ1-RQ3），涵盖了多模型对比、多基线比较、跨数据集验证、消融研究、种子选择和归因分析等多个层面。
- **充分性与公平性**:
    - **充分性**: 实验设计紧密围绕论文贡献点，从评估、缓解到机理分析，逻辑链完整。评估指标多元（拒绝率、置信度、多样性、安全性），能全面衡量基准数据集的质量。消融实验和不同种子对比有效验证了框架各组件的必要性和稳定性。
    - **客观公平性**: 对比的基线方法涵盖了该领域的主要最新工作。在评估EVOREFUSE-ALIGN效果时，同时监控了安全性与过度拒绝率，保证了评估的平衡性。为确保公平对比，还将OR-Bench和PHTest的生成管线应用于相同的TRIDENT-CORE种子集。

### **6. 论文的主要结论与发现**

- **更优的评估基准**: EVOREFUSE-TEST在触发模型过度拒绝、提高响应置信度和词汇多样性方面，均显著优于现有基准。例如，在无安全提示词的设定下，平均拒绝触发率比次优基准高85.34%，词汇多样性高34.86%。
- **有效的缓解策略**: 使用EVOREFUSE-ALIGN进行监督微调（SFT）或直接偏好优化（DPO），能在不损害模型安全性的前提下，大幅减少过度拒绝行为（SFT最多减少29.85%，DPO最多减少45.96%）。
- **过度拒绝的成因**: 归因分析揭示，过度拒绝源于模型的**捷径学习**现象，即模型过度关注敏感的文本线索（如特定关键词），而**忽略**了更广泛的上下文语境。此外，**早期Transformer层**在安全判断中扮演了关键角色。

### **7. 优点**

- **问题与方法创新**: 系统性地将演化算法与基于ELBO的拒绝概率优化框架结合，解决了伪恶意指令生成的多样性、有效性和自动化问题。
- **数据集价值**: 构建的两个数据集（EVOREFUSE-TEST和EVOREFUSE-ALIGN）质量高，对社区评估和改进LLM安全对齐有实际贡献。
- **机理洞察**: 通过归因分析，不仅提供了工具，还对过度拒绝的深层原因（捷径学习、早期层偏置）给出了实证解释，加深了对LLM安全行为的理解。
- **优化过程稳定**: 通过消融实验证明，演化框架中的适应度评估和重组等组件，对于实现稳定高效的收敛至关重要。

### **8. 不足与局限**

- **计算开销**: 方法流程需反复调用强大的商业LLM（如GPT-4o）进行变异、重组和安全过滤，并对目标模型进行蒙特卡洛采样，计算成本较高。
- **适用性限制**: 优化过程中需要访问目标LLM的内部状态（白色盒访问），限制了其在纯黑盒或闭源模型上的直接应用。
- **安全性分类的模糊性**: 论文也承认，对于指令“伪恶意”与“真正恶意”的分类仍然存在一定主观性，会影响数据集构建的精确度。
- **系统提示词影响**: 实验表明，启用安全导向的系统提示词会改变评估的绝对表现，说明生成指令的有效性可能对模型的具体系统级设置敏感。

（完）
