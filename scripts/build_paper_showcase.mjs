import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const metaPath = path.join(repoRoot, "docs", "20260506-20260604", "papers.meta.json");
const outputPath = path.join(repoRoot, "paper-showcase.html");

const CATEGORY = {
  search: {
    label: "搜索与多目标优化",
    short: "把提示空间当作可搜索对象",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  agentic: {
    label: "强化学习与智能体优化",
    short: "让优化器自己诊断、试验和回滚",
    color: "#6D28D9",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  reasoning: {
    label: "推理链与上下文学习",
    short: "把推理过程显式纳入提示资产",
    color: "#15803D",
    bg: "#ECFDF5",
    border: "#BBF7D0",
  },
  structure: {
    label: "结构化与可解释提示",
    short: "把提示拆成可读、可复用、可迁移的组件",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
  safety: {
    label: "可靠性、安全与部署",
    short: "把提示敏感性变成可监控系统属性",
    color: "#B91C1C",
    bg: "#FEF2F2",
    border: "#FECACA",
  },
};

const PAPER_NOTES = {
  "2605.09781v1": {
    category: "search",
    idea: "把提示嵌入视作可进化个体，在冻结的 70B+ 模型上用无梯度质量-多样性搜索探索更多行为空间。",
    result: "覆盖率提升 46.4%，QD-Score 提升 41.4%，还能生成更多边缘测试并提升微调数据质量。",
  },
  "2605.14553v1": {
    category: "search",
    idea: "把多指标提示选择建模为纯探索老虎机问题，同时处理帕累托提示集恢复和最佳可行提示识别。",
    result: "给出线性情形误差界，并在多个 LLM 实验中显著优于基线，建立了多目标提示优化的原则性框架。",
    image: "docs/assets/figures/arxiv/2605.14553v1/fig-004.webp",
  },
  "2605.17088v1": {
    category: "reasoning",
    idea: "自动为上下文学习示例生成推理链，并筛除低质量演示，让 ICL 不再只有输入输出对。",
    result: "在多个复杂推理任务上提升预测准确率，证明显式中间推理可以增强上下文学习。",
    image: "docs/assets/figures/arxiv/2605.17088v1/fig-001.webp",
  },
  "2605.18113v1": {
    category: "structure",
    idea: "从自动或人工解释中生成标注指南，再通过删除、添加、洗牌、合并等操作优化指南式提示。",
    result: "相对无指南提示最高提升 31%，相对随机指南最高提升 35%，且 LLM 解释可替代人工解释。",
  },
  "2605.18869v1": {
    category: "search",
    idea: "把提示质量与推理成本一起纳入目标函数，并用预算分配降低多目标搜索成本。",
    result: "在 8/12 个 noisy R2 场景优于 NSGA-II 基线，发现更稳健且可部署的性能-成本帕累托前沿。",
  },
  "2605.19102v1": {
    category: "agentic",
    idea: "把代码生成提示改写建模为序列决策，用 PPO 在直接生成、遗传突变、语义重写之间选择动作。",
    result: "由单元测试奖励驱动，MBPP+ strict Pass@1 分别达到 57.58%、64.80%、85.50%，超过 EPiC、Reflexion 等方法。",
    image: "docs/assets/figures/arxiv/2605.19102v1/fig-001.webp",
  },
  "2605.25354v1": {
    category: "reasoning",
    idea: "针对动态上下文学习能力缺口，合成高质量推理过程，让模型学会抽取、内化并应用新知识。",
    result: "在上下文依赖任务上显著改善表现，回应了前沿模型在 CL-Bench 平均仅解出 17.2% 任务的问题。",
  },
  "2605.26275v1": {
    category: "agentic",
    idea: "把 CodeAct 的代码即行动范式用于自动提示工程，让优化器调用 evaluate、python、set_prompt、finish 等工具。",
    result: "在 13 个工业 LLM-as-judge 任务、BBH-7 与 GSM8K 上全面领先；Python 沙箱是复杂任务最大增益来源。",
    image: "docs/assets/figures/arxiv/2605.26275v1/fig-001.webp",
  },
  "2605.29678v1": {
    category: "safety",
    idea: "用黑盒搜索寻找与任务语义无关的伪提示，检验 LLM 是否会被无关文本系统性引导。",
    result: "伪提示可匹配甚至超过任务感知提示，并诱导固定选项、错误答案等非预期行为，提示安全边界被重新拉响。",
    image: "docs/assets/figures/arxiv/2605.29678v1/fig-001.webp",
  },
  "2605.07422v1": {
    category: "safety",
    idea: "在软件工程心理安全定性编码任务上，控制比较零样本和多样本提示对三类模型的一致性影响。",
    result: "多样本只显著提升 Claude Haiku 的 kappa，且所有模型都有类别偏误和稳定性差异，为 LLM 辅助编码给出实证边界。",
    image: "docs/assets/figures/arxiv/2605.07422v1/fig-001.webp",
  },
  "2605.14053v1": {
    category: "reasoning",
    idea: "在 RAG 生成阶段加入基于规则的推导树，从初始假设逐步推出可解释答案。",
    result: "相比传统 RAG 与长上下文方案，显著降低不可接受回答比例，并提高答案可验证性。",
  },
  "2605.14055v1": {
    category: "structure",
    idea: "用神经架构搜索联合优化连续提示与低秩适配，让单模型多任务部署同时获得提示和权重适配。",
    result: "在 GLUE、SuperGLUE、MMLU 等基准平均准确率提升 6.67%，单任务最高提升 10.75%。",
  },
  "2605.14443v1": {
    category: "agentic",
    idea: "训练轻量级 prompter 策略模型，用标量奖励与文本批评组成经验缓冲区，蒸馏黑盒 LLM 的迭代优化经验。",
    result: "逻辑密集推理准确率从 55% 提升到 90%，工具使用任务从 74% 提升到 91%。",
    image: "docs/assets/figures/arxiv/2605.14443v1/fig-001.webp",
  },
  "2605.14561v1": {
    category: "structure",
    idea: "把提示切成句子级片段，并优化“重要/非常重要/不重要”等人类可读标注来控制注意力分配。",
    result: "优化后的片段标注提升推理准确性和自洽性，同时保留原始提示候选以防性能退化。",
    image: "docs/assets/figures/arxiv/2605.14561v1/fig-001.webp",
  },
  "2605.19093v1": {
    category: "search",
    idea: "让 LLM 根据任务描述和历史提示-分数对动态诱导可解释特征空间，再用贝叶斯优化选择新提示方向。",
    result: "在 10 项系统提示优化任务中，仅 30 次评估就成为聚合评分条件下表现最好的方法。",
  },
  "2605.20149v1": {
    category: "structure",
    idea: "系统比较原始提示、清单增强提示和澄清问题三种交互策略，寻找低成本结构化提示收益。",
    result: "清单提示平均 7.50/8，优于澄清问题 6.67 和原始提示 5.67，同时平均 token 更少。",
    image: "docs/assets/figures/arxiv/2605.20149v1/fig-001.webp",
  },
  "2605.20924v1": {
    category: "reasoning",
    idea: "只从未标注问题生成每题推理策略，再由策略-问题对归纳通用任务指令。",
    result: "在仅有问题的设定下超过现有指令归纳方法，并显示 LLM 与推理模型协同能进一步放大收益。",
  },
  "2605.21318v1": {
    category: "safety",
    idea: "把提示优化过拟合形式化为表示低效，用证据梯度净化、语义编辑正则和正则引导更新抑制冗长过拟合提示。",
    result: "分布外准确率相对 TextGrad 最高提升 11.8%，相对 REVOLVE 最高提升 16.5%。",
  },
  "2605.21781v1": {
    category: "agentic",
    idea: "用 LLM 函数调用模拟人类提示工程师：诊断目标模型、总结失败模式、生成结构化报告并驱动修订。",
    result: "三个推理任务上相对初始提示最高提升 12.9 点，并改善置信校准。",
  },
  "2605.22195v1": {
    category: "agentic",
    idea: "用强化学习从预定义操作空间自动生成动态思维图，让复杂推理提示不再依赖人工静态图。",
    result: "能随任务难度调整图结构，提升推理性能并保留图结构的可解释性。",
  },
  "2605.26655v1": {
    category: "safety",
    idea: "从因果启发的编辑级观察分析入手，研究不同提示编辑家族与任务特征如何交互。",
    result: "发现复杂度和元指令编辑会损害数学/多跳推理，逐步与元认知编辑更适合逻辑/顺序推理。",
  },
  "2605.27642v1": {
    category: "structure",
    idea: "训练软提示到自然语言硬提示的翻译器，在保留软提示能力的同时恢复可读性与可迁移性。",
    result: "翻译后的硬提示比免训练方法更流畅准确，并能从小开源模型迁移到大闭源 API 模型。",
  },
  "2605.28360v1": {
    category: "structure",
    idea: "把提示知识拆成离散可复用的自然语言“本能”码本，并为每个输入动态选择组合。",
    result: "零样本最高提升 30.36 点，HotpotQA 超过 GEPA 3.34 点，提示长度最多压缩 14.1 倍。",
    image: "docs/assets/figures/arxiv/2605.28360v1/fig-001.webp",
  },
  "2605.29076v1": {
    category: "reasoning",
    idea: "通过结构化提示优化学习自然语言 SOP 规则手册，再用蒸馏与强化学习扩展紧凑模型的推理范围。",
    result: "分类准确率和解释质量均优于现有方法，同时提供局部推理轨迹和全局模块化解释。",
  },
  "biorxiv-10-64898-2026-05-10-724161-v1-thoughts-as-planning-latent-world-models-for-chain-of-thoughts-optimization-via-reinforcement-planning": {
    category: "agentic",
    idea: "把思维链优化视为潜在语义空间中的规划问题，通过世界模型和邻近嵌入执行多尺度编辑。",
    result: "在多项任务上超过 SOTA，并提升样本效率、鲁棒性、泛化性和规划轨迹可解释性。",
  },
  "2605.15665v1": {
    category: "safety",
    idea: "把企业对话提示工程从一次性优化改造成仿真、监控、诊断、修复的持续可靠性闭环。",
    result: "提示编写时间从 2 天降到不足 30 分钟，可靠性达到 99%，生产回归可在 24 小时内修复。",
  },
  "2605.24171v1": {
    category: "safety",
    idea: "控制数据、解码和模型变量，只改变提示策略，系统审计漏洞检测任务中的提示敏感性。",
    result: "标准 CoT 综合表现最好；少样本帮助敏感模型，自一致性会导致过度弃权并削弱有效 F1。",
  },
  "2605.29816v1": {
    category: "safety",
    idea: "从非对抗、语义相似提示扰动入手，定位模块输出扰动偏差，并用去偏微调提升稳定性。",
    result: "无需全量重训即可快速提升鲁棒性，并提供鲁棒性认证路径。",
  },
  "2606.01967v1": {
    category: "safety",
    idea: "把训练提示视为会影响学习动态的状态变量，用任务损失动态选择更稳健的训练提示。",
    result: "显著缓解灾难性遗忘、增强泛化，并揭示语义等价训练提示会带来不同微调结果。",
  },
  "2605.04425v1": {
    category: "structure",
    idea: "在视觉语言模型提示学习中交替优化离散语义 token 与连续提示参数，兼顾性能与解释性。",
    result: "作为即插即用模块，在五类代表性提示学习方法上提升分类准确率和可解释性。",
  },
  "2605.07709v1": {
    category: "search",
    idea: "用多目标搜索同时调系统提示和生成超参数，平衡有害性最小化与回答相关性。",
    result: "在小模型上显著降低有害响应并提升相关性，提示重复性超参数成为关键安全杠杆。",
  },
};

const FEATURE_KEYS = [
  "2605.26275v1",
  "2605.29678v1",
  "2605.14443v1",
  "2605.28360v1",
  "2605.19102v1",
  "2605.14561v1",
];

function readMeta() {
  return JSON.parse(fs.readFileSync(metaPath, "utf8"));
}

function paperKey(paper) {
  const slug = paper.paper_id.split("/").pop();
  const arxiv = slug.match(/^\d{4}\.\d{5}v\d/);
  return arxiv ? arxiv[0] : slug;
}

function htmlEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function attr(value) {
  return htmlEscape(value).replace(/'/g, "&#39;");
}

function truncate(value, length = 180) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text.length > length ? `${text.slice(0, length - 1)}…` : text;
}

function toDocsifyRoute(paper) {
  return `index.html#/${paper.paper_id}`;
}

function toPdfLink(paper) {
  return paper.pdf || "#";
}

function enrichPapers(meta) {
  return meta.papers.map((paper, index) => {
    const key = paperKey(paper);
    const note = PAPER_NOTES[key];
    if (!note) {
      throw new Error(`Missing curated note for ${key}`);
    }
    return {
      ...paper,
      index: index + 1,
      key,
      category: note.category,
      categoryLabel: CATEGORY[note.category].label,
      idea: note.idea,
      result: note.result,
      image: note.image || "",
      route: toDocsifyRoute(paper),
      pdfLink: toPdfLink(paper),
      titleShort: paper.title_en
        .replace(/: /g, ": ")
        .replace("Large Language Models", "LLMs"),
    };
  });
}

function countBy(papers, getter) {
  const counts = new Map();
  for (const paper of papers) {
    const key = getter(paper);
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return counts;
}

function renderStatCards(meta, papers) {
  const deep = papers.filter((p) => p.section === "deep").length;
  const quick = papers.filter((p) => p.section === "quick").length;
  const perfect = papers.filter((p) => Number(p.score) >= 10).length;
  const visual = papers.filter((p) => p.image).length;
  const stats = [
    ["论文总数", meta.count, "本周期筛选出的提示优化相关论文"],
    ["精读论文", deep, "项目已生成深度摘要与评分"],
    ["满分推荐", perfect, "集中在搜索、RL、Agent 和推理链路线"],
    ["展示图源", visual, "复用本地抽取图，不依赖外部网络"],
    ["速读论文", quick, "用于补足可靠性与部署侧视角"],
  ];
  return stats
    .map(
      ([label, value, hint]) => `
        <article class="stat-card">
          <span>${htmlEscape(label)}</span>
          <strong>${htmlEscape(value)}</strong>
          <p>${htmlEscape(hint)}</p>
        </article>`,
    )
    .join("");
}

function renderCategoryCards(papers) {
  const counts = countBy(papers, (paper) => paper.category);
  return Object.entries(CATEGORY)
    .map(([key, item]) => {
      const count = counts.get(key) || 0;
      return `
        <article class="route-card" style="--route-color:${item.color};--route-bg:${item.bg};--route-border:${item.border};">
          <div class="route-card__top">
            <span>${count} 篇</span>
            <strong>${htmlEscape(item.label)}</strong>
          </div>
          <p>${htmlEscape(item.short)}</p>
        </article>`;
    })
    .join("");
}

function renderMethodMap() {
  return `
    <div class="method-map" aria-label="提示优化研究路线图">
      <svg viewBox="0 0 980 360" role="img" aria-labelledby="map-title map-desc">
        <title id="map-title">提示优化路线图</title>
        <desc id="map-desc">从人工经验出发，经结构化提示、搜索优化、智能体诊断和可靠性验证，沉淀为可部署提示资产。</desc>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748B"></path>
          </marker>
        </defs>
        <rect x="24" y="34" width="164" height="84" rx="8" fill="#F8FAFC" stroke="#CBD5E1"></rect>
        <text x="106" y="70" text-anchor="middle" class="svg-title">人工提示</text>
        <text x="106" y="98" text-anchor="middle" class="svg-copy">经验、清单、示例</text>

        <line x1="188" y1="76" x2="262" y2="76" stroke="#64748B" stroke-width="2.5" marker-end="url(#arrow)"></line>
        <rect x="264" y="34" width="176" height="84" rx="8" fill="#FFFBEB" stroke="#FDE68A"></rect>
        <text x="352" y="70" text-anchor="middle" class="svg-title">结构化提示</text>
        <text x="352" y="98" text-anchor="middle" class="svg-copy">片段、指南、码本</text>

        <line x1="440" y1="76" x2="512" y2="76" stroke="#64748B" stroke-width="2.5" marker-end="url(#arrow)"></line>
        <rect x="514" y="34" width="176" height="84" rx="8" fill="#EFF6FF" stroke="#BFDBFE"></rect>
        <text x="602" y="70" text-anchor="middle" class="svg-title">搜索优化</text>
        <text x="602" y="98" text-anchor="middle" class="svg-copy">Bandit、BO、多目标</text>

        <line x1="690" y1="76" x2="762" y2="76" stroke="#64748B" stroke-width="2.5" marker-end="url(#arrow)"></line>
        <rect x="764" y="34" width="176" height="84" rx="8" fill="#F5F3FF" stroke="#DDD6FE"></rect>
        <text x="852" y="70" text-anchor="middle" class="svg-title">Agent/RL</text>
        <text x="852" y="98" text-anchor="middle" class="svg-copy">诊断、试验、回滚</text>

        <path d="M 852 118 C 852 188 680 180 680 232" fill="none" stroke="#64748B" stroke-width="2.5" marker-end="url(#arrow)"></path>
        <rect x="516" y="232" width="196" height="86" rx="8" fill="#FEF2F2" stroke="#FECACA"></rect>
        <text x="614" y="268" text-anchor="middle" class="svg-title">可靠性评估</text>
        <text x="614" y="296" text-anchor="middle" class="svg-copy">鲁棒性、审计、安全</text>

        <path d="M 516 276 C 404 276 350 214 350 124" fill="none" stroke="#64748B" stroke-width="2.5" stroke-dasharray="6 7" marker-end="url(#arrow)"></path>
        <rect x="54" y="210" width="286" height="92" rx="8" fill="#ECFDF5" stroke="#BBF7D0"></rect>
        <text x="197" y="248" text-anchor="middle" class="svg-title">可部署提示资产</text>
        <text x="197" y="276" text-anchor="middle" class="svg-copy">可解释、可迁移、可监控</text>
      </svg>
    </div>`;
}

function renderVisualGallery(papers) {
  const byKey = new Map(papers.map((paper) => [paper.key, paper]));
  return FEATURE_KEYS.map((key) => byKey.get(key))
    .filter(Boolean)
    .map((paper) => {
      const category = CATEGORY[paper.category];
      return `
        <article class="visual-card">
          <a href="${attr(paper.route)}" class="visual-card__media" aria-label="打开 ${attr(paper.title_en)}">
            <img src="${attr(paper.image)}" alt="${attr(paper.title_en)} 的论文图示" loading="lazy">
          </a>
          <div class="visual-card__body">
            <span style="--chip-color:${category.color};--chip-bg:${category.bg};--chip-border:${category.border};" class="chip">${htmlEscape(category.label)}</span>
            <h3>${htmlEscape(paper.title_en)}</h3>
            <p>${htmlEscape(paper.idea)}</p>
          </div>
        </article>`;
    })
    .join("");
}

function renderFilterButtons(papers) {
  const counts = countBy(papers, (paper) => paper.category);
  const buttons = [
    `<button class="filter-button is-active" type="button" data-filter="all">全部 <span>${papers.length}</span></button>`,
  ];
  for (const [key, item] of Object.entries(CATEGORY)) {
    buttons.push(
      `<button class="filter-button" type="button" data-filter="${attr(key)}">${htmlEscape(item.label)} <span>${counts.get(key) || 0}</span></button>`,
    );
  }
  return buttons.join("");
}

function renderPaperCards(papers) {
  return papers
    .map((paper) => {
      const category = CATEGORY[paper.category];
      const thumb = paper.image
        ? `
          <a href="${attr(paper.route)}" class="paper-card__thumb" aria-label="打开 ${attr(paper.title_en)}">
            <img src="${attr(paper.image)}" alt="${attr(paper.title_en)} 的图示" loading="lazy">
          </a>`
        : `
          <div class="paper-card__diagram" aria-hidden="true">
            <span>${String(paper.index).padStart(2, "0")}</span>
            <i></i><i></i><i></i>
          </div>`;
      return `
        <article class="paper-card" data-category="${attr(paper.category)}" data-search="${attr(`${paper.title_en} ${paper.tldr} ${paper.idea} ${paper.result}`)}">
          ${thumb}
          <div class="paper-card__content">
            <div class="paper-card__meta">
              <span class="chip" style="--chip-color:${category.color};--chip-bg:${category.bg};--chip-border:${category.border};">${htmlEscape(category.label)}</span>
              <span>${paper.section === "deep" ? "精读" : "速读"}</span>
              <strong>${htmlEscape(paper.score)}/10</strong>
            </div>
            <h3>${htmlEscape(paper.title_en)}</h3>
            <dl>
              <div>
                <dt>思路</dt>
                <dd>${htmlEscape(paper.idea)}</dd>
              </div>
              <div>
                <dt>成果</dt>
                <dd>${htmlEscape(paper.result)}</dd>
              </div>
            </dl>
            <p class="paper-card__summary">${htmlEscape(truncate(paper.tldr, 168))}</p>
            <div class="paper-card__links">
              <a href="${attr(paper.route)}">站内精读</a>
              <a href="${attr(paper.pdfLink)}">PDF</a>
            </div>
          </div>
        </article>`;
    })
    .join("");
}

function renderHighlightTable(papers) {
  const rows = [
    "2605.09781v1",
    "2605.14553v1",
    "2605.19102v1",
    "2605.26275v1",
    "2605.28360v1",
    "2605.15665v1",
    "2605.21318v1",
  ];
  const byKey = new Map(papers.map((paper) => [paper.key, paper]));
  return rows
    .map((key) => {
      const paper = byKey.get(key);
      const category = CATEGORY[paper.category];
      return `
        <tr>
          <td><a href="${attr(paper.route)}">${htmlEscape(paper.title_en)}</a></td>
          <td><span class="chip" style="--chip-color:${category.color};--chip-bg:${category.bg};--chip-border:${category.border};">${htmlEscape(category.label)}</span></td>
          <td>${htmlEscape(paper.result)}</td>
        </tr>`;
    })
    .join("");
}

function renderHtml(meta, papers) {
  const generatedAt = meta.generated_at.replace("T", " ");
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>提示优化论文成果汇总 · Daily Paper Reader</title>
  <meta name="description" content="汇总 Daily Paper Reader 2026-05-06 至 2026-06-04 推荐论文的研究思路、成果与方法路线。">
  <link rel="icon" type="image/png" href="app/asserts/icon.png">
  <style>
    :root {
      color-scheme: light;
      --bg: #F6F8FB;
      --surface: #FFFFFF;
      --surface-soft: #F8FAFC;
      --text: #172033;
      --muted: #52637A;
      --line: #DDE5EF;
      --line-soft: rgba(148, 163, 184, 0.22);
      --blue: #1D4ED8;
      --green: #15803D;
      --purple: #6D28D9;
      --amber: #B45309;
      --red: #B91C1C;
      --shadow: 0 18px 48px rgba(15, 23, 42, 0.10);
      --shadow-soft: 0 10px 28px rgba(15, 23, 42, 0.07);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    }

    * { box-sizing: border-box; }

    html {
      scroll-behavior: smooth;
      background: var(--bg);
      color: var(--text);
    }

    body {
      margin: 0;
      min-width: 320px;
      background:
        linear-gradient(180deg, #FFFFFF 0, #F7FAFD 420px, var(--bg) 100%);
      color: var(--text);
      line-height: 1.72;
    }

    a {
      color: var(--blue);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    img {
      display: block;
      max-width: 100%;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .page {
      min-height: 100vh;
    }

    .site-nav {
      position: sticky;
      top: 0;
      z-index: 20;
      border-bottom: 1px solid rgba(221, 229, 239, 0.88);
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(14px);
    }

    .site-nav__inner {
      width: min(1180px, calc(100vw - 32px));
      margin: 0 auto;
      min-height: 58px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--text);
      font-weight: 800;
      white-space: nowrap;
    }

    .brand img {
      width: 28px;
      height: 28px;
      border-radius: 7px;
    }

    .nav-links {
      display: flex;
      gap: 18px;
      align-items: center;
      color: var(--muted);
      font-size: 14px;
      white-space: nowrap;
    }

    .nav-links a {
      color: var(--muted);
      font-weight: 650;
    }

    .hero {
      padding: 58px 0 40px;
      overflow: hidden;
    }

    .hero__inner,
    .section__inner {
      width: min(1180px, calc(100vw - 32px));
      margin: 0 auto;
    }

    .hero__inner {
      display: grid;
      grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.98fr);
      gap: 38px;
      align-items: center;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 30px;
      padding: 5px 10px;
      border: 1px solid #BFDBFE;
      border-radius: 8px;
      background: #EFF6FF;
      color: #1D4ED8;
      font-size: 13px;
      font-weight: 750;
    }

    h1,
    h2,
    h3,
    p {
      margin-top: 0;
    }

    h1 {
      margin: 18px 0 18px;
      max-width: 860px;
      color: #0F172A;
      font-size: clamp(38px, 6vw, 72px);
      line-height: 1.05;
      letter-spacing: 0;
    }

    .hero__lead {
      max-width: 740px;
      color: #334155;
      font-size: 18px;
      line-height: 1.9;
    }

    .hero__lead strong {
      color: #0F172A;
      font-weight: 800;
    }

    .hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 28px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      padding: 9px 14px;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      color: #0F172A;
      background: #FFFFFF;
      font-weight: 760;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
    }

    .button--primary {
      border-color: #1D4ED8;
      background: #1D4ED8;
      color: #FFFFFF;
    }

    .hero-visual {
      position: relative;
      min-height: 500px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background:
        linear-gradient(180deg, rgba(248, 250, 252, 0.94), rgba(255, 255, 255, 0.98)),
        #FFFFFF;
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .hero-visual__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding: 16px 18px;
      border-bottom: 1px solid var(--line-soft);
      color: #475569;
      font-size: 13px;
      font-weight: 700;
    }

    .hero-visual__grid {
      display: grid;
      grid-template-columns: 1fr 0.85fr;
      gap: 12px;
      padding: 16px;
    }

    .visual-tile {
      min-height: 178px;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      background: #FFFFFF;
      overflow: hidden;
    }

    .visual-tile:first-child {
      grid-row: span 2;
      min-height: 390px;
    }

    .visual-tile img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #FFFFFF;
      padding: 10px;
    }

    .hero-visual__caption {
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 16px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .caption-pill {
      min-height: 72px;
      padding: 10px;
      border: 1px solid rgba(203, 213, 225, 0.9);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.94);
      box-shadow: var(--shadow-soft);
    }

    .caption-pill strong {
      display: block;
      color: #0F172A;
      font-size: 18px;
      line-height: 1.2;
    }

    .caption-pill span {
      display: block;
      margin-top: 4px;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.4;
    }

    .section {
      padding: 44px 0;
    }

    .section--white {
      background: #FFFFFF;
      border-block: 1px solid var(--line-soft);
    }

    .section__heading {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 24px;
      margin-bottom: 22px;
    }

    .section__heading h2 {
      margin: 0;
      color: #0F172A;
      font-size: clamp(26px, 3vw, 38px);
      line-height: 1.2;
      letter-spacing: 0;
    }

    .section__heading p {
      max-width: 620px;
      margin: 0;
      color: var(--muted);
      font-size: 15px;
    }

    .stats-grid,
    .route-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 12px;
    }

    .stat-card,
    .route-card,
    .visual-card,
    .paper-card {
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--surface);
      box-shadow: var(--shadow-soft);
    }

    .stat-card {
      padding: 16px;
      min-height: 136px;
    }

    .stat-card span {
      display: block;
      color: var(--muted);
      font-size: 13px;
      font-weight: 700;
    }

    .stat-card strong {
      display: block;
      margin: 8px 0 6px;
      color: #0F172A;
      font-size: 34px;
      line-height: 1;
    }

    .stat-card p {
      margin: 0;
      color: #64748B;
      font-size: 13px;
      line-height: 1.55;
    }

    .route-card {
      min-height: 168px;
      padding: 16px;
      border-color: var(--route-border);
      background: linear-gradient(180deg, var(--route-bg), #FFFFFF);
    }

    .route-card__top span {
      color: var(--route-color);
      font-size: 13px;
      font-weight: 800;
    }

    .route-card__top strong {
      display: block;
      margin-top: 8px;
      color: #0F172A;
      font-size: 17px;
      line-height: 1.35;
    }

    .route-card p {
      margin: 14px 0 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.65;
    }

    .method-map {
      margin-top: 20px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #FFFFFF;
      box-shadow: var(--shadow-soft);
      overflow-x: auto;
    }

    .method-map svg {
      display: block;
      width: 100%;
      min-width: 820px;
      height: auto;
    }

    .svg-title {
      fill: #0F172A;
      font-size: 19px;
      font-weight: 800;
    }

    .svg-copy {
      fill: #64748B;
      font-size: 14px;
      font-weight: 650;
    }

    .callout {
      margin-top: 20px;
      padding: 18px;
      border: 1px solid #BBF7D0;
      border-radius: 8px;
      background: #ECFDF5;
      color: #14532D;
      font-size: 15px;
      line-height: 1.8;
    }

    .callout strong {
      color: #15803D;
    }

    .visual-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
    }

    .visual-card {
      overflow: hidden;
    }

    .visual-card__media {
      display: block;
      height: 214px;
      border-bottom: 1px solid var(--line-soft);
      background: #FFFFFF;
    }

    .visual-card__media img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 10px;
      background: #FFFFFF;
    }

    .visual-card__body {
      padding: 14px;
    }

    .visual-card h3 {
      margin: 10px 0 8px;
      color: #0F172A;
      font-size: 17px;
      line-height: 1.36;
    }

    .visual-card p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.7;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      min-height: 26px;
      padding: 3px 8px;
      border: 1px solid var(--chip-border);
      border-radius: 8px;
      color: var(--chip-color);
      background: var(--chip-bg);
      font-size: 12px;
      font-weight: 800;
      line-height: 1.25;
      white-space: nowrap;
    }

    .insight-layout {
      display: grid;
      grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
      gap: 18px;
      align-items: start;
    }

    .insight-list {
      display: grid;
      gap: 10px;
    }

    .insight-item {
      padding: 14px 16px;
      border-left: 4px solid var(--accent);
      border-radius: 8px;
      background: #FFFFFF;
      box-shadow: var(--shadow-soft);
    }

    .insight-item strong {
      display: block;
      color: #0F172A;
      margin-bottom: 6px;
    }

    .insight-item p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
    }

    .table-wrap {
      overflow-x: auto;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #FFFFFF;
      box-shadow: var(--shadow-soft);
    }

    table {
      width: 100%;
      min-width: 760px;
      border-collapse: collapse;
      font-size: 14px;
    }

    th,
    td {
      padding: 13px 14px;
      border-bottom: 1px solid var(--line-soft);
      text-align: left;
      vertical-align: top;
    }

    th {
      background: #F8FAFC;
      color: #334155;
      font-size: 13px;
      font-weight: 850;
    }

    tr:nth-child(even) td {
      background: #FBFDFF;
    }

    tr:last-child td {
      border-bottom: 0;
    }

    .controls {
      display: grid;
      grid-template-columns: minmax(220px, 340px) minmax(0, 1fr);
      gap: 12px;
      align-items: start;
      margin-bottom: 18px;
    }

    .search-box {
      min-height: 42px;
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      background: #FFFFFF;
      color: #0F172A;
      font: inherit;
      font-size: 14px;
      outline: none;
    }

    .search-box:focus {
      border-color: #1D4ED8;
      box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);
    }

    .filter-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: flex-end;
    }

    .filter-button {
      min-height: 42px;
      padding: 8px 10px;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      background: #FFFFFF;
      color: #334155;
      font: inherit;
      font-size: 13px;
      font-weight: 800;
      cursor: pointer;
    }

    .filter-button span {
      margin-left: 4px;
      color: #64748B;
      font-weight: 750;
    }

    .filter-button.is-active {
      border-color: #1D4ED8;
      background: #EFF6FF;
      color: #1D4ED8;
    }

    .paper-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .paper-card {
      display: grid;
      grid-template-columns: 194px minmax(0, 1fr);
      min-height: 356px;
      overflow: hidden;
    }

    .paper-card[hidden] {
      display: none;
    }

    .paper-card__thumb,
    .paper-card__diagram {
      min-height: 100%;
      border-right: 1px solid var(--line-soft);
      background: #FFFFFF;
    }

    .paper-card__thumb img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 10px;
      background: #FFFFFF;
    }

    .paper-card__diagram {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background:
        linear-gradient(135deg, #F8FAFC, #FFFFFF);
    }

    .paper-card__diagram span {
      position: relative;
      z-index: 2;
      display: grid;
      place-items: center;
      width: 74px;
      height: 74px;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      background: #FFFFFF;
      color: #334155;
      font-size: 24px;
      font-weight: 900;
      box-shadow: var(--shadow-soft);
    }

    .paper-card__diagram i {
      position: absolute;
      display: block;
      width: 118px;
      height: 1px;
      background: #CBD5E1;
      transform-origin: center;
    }

    .paper-card__diagram i:nth-child(2) { transform: rotate(28deg); }
    .paper-card__diagram i:nth-child(3) { transform: rotate(-28deg); }
    .paper-card__diagram i:nth-child(4) { transform: rotate(90deg); }

    .paper-card__content {
      display: flex;
      min-width: 0;
      flex-direction: column;
      padding: 16px;
    }

    .paper-card__meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      color: #64748B;
      font-size: 12px;
      font-weight: 800;
    }

    .paper-card__meta strong {
      margin-left: auto;
      color: #0F172A;
      font-size: 13px;
    }

    .paper-card h3 {
      margin: 12px 0 12px;
      color: #0F172A;
      font-size: 18px;
      line-height: 1.36;
    }

    .paper-card dl {
      display: grid;
      gap: 10px;
      margin: 0;
    }

    .paper-card dl div {
      display: grid;
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 10px;
    }

    .paper-card dt {
      color: #0F172A;
      font-size: 13px;
      font-weight: 850;
    }

    .paper-card dd {
      margin: 0;
      color: #475569;
      font-size: 14px;
      line-height: 1.65;
    }

    .paper-card__summary {
      margin: 12px 0 0;
      color: #64748B;
      font-size: 13px;
      line-height: 1.65;
    }

    .paper-card__links {
      display: flex;
      gap: 12px;
      margin-top: auto;
      padding-top: 14px;
      font-size: 13px;
      font-weight: 850;
    }

    .empty-state {
      display: none;
      margin-top: 20px;
      padding: 18px;
      border: 1px solid #FDE68A;
      border-radius: 8px;
      background: #FFFBEB;
      color: #92400E;
      font-weight: 750;
    }

    .empty-state.is-visible {
      display: block;
    }

    .footer {
      padding: 28px 0 36px;
      border-top: 1px solid var(--line-soft);
      color: #64748B;
      background: #FFFFFF;
      font-size: 13px;
    }

    .footer__inner {
      width: min(1180px, calc(100vw - 32px));
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }

    @media (max-width: 1040px) {
      .hero__inner,
      .insight-layout {
        grid-template-columns: 1fr;
      }

      .hero-visual {
        min-height: 460px;
      }

      .stats-grid,
      .route-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .visual-grid,
      .paper-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 760px) {
      .site-nav__inner {
        align-items: flex-start;
        flex-direction: column;
        padding: 12px 0;
      }

      .nav-links {
        width: 100%;
        overflow-x: auto;
        padding-bottom: 2px;
      }

      .hero {
        padding-top: 36px;
      }

      h1 {
        font-size: 39px;
      }

      .hero__lead {
        font-size: 16px;
      }

      .hero-visual {
        min-height: auto;
      }

      .hero-visual__grid {
        grid-template-columns: 1fr;
      }

      .visual-tile:first-child,
      .visual-tile {
        min-height: 210px;
        grid-row: auto;
      }

      .hero-visual__caption {
        position: static;
        grid-template-columns: 1fr;
        padding: 0 16px 16px;
      }

      .section__heading {
        display: block;
      }

      .section__heading p {
        margin-top: 10px;
      }

      .stats-grid,
      .route-grid {
        grid-template-columns: 1fr;
      }

      .controls {
        grid-template-columns: 1fr;
      }

      .filter-row {
        justify-content: flex-start;
      }

      .paper-card {
        grid-template-columns: 1fr;
      }

      .paper-card__thumb,
      .paper-card__diagram {
        min-height: 220px;
        border-right: 0;
        border-bottom: 1px solid var(--line-soft);
      }

      .footer__inner {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <nav class="site-nav" aria-label="页面导航">
      <div class="site-nav__inner">
        <a class="brand" href="index.html">
          <img src="app/asserts/icon.png" alt="">
          <span>Daily Paper Reader</span>
        </a>
        <div class="nav-links">
          <a href="#map">路线图</a>
          <a href="#visuals">图解精选</a>
          <a href="#atlas">论文图谱</a>
          <a href="index.html#/20260506-20260604/">返回日报</a>
        </div>
      </div>
    </nav>

    <header class="hero">
      <div class="hero__inner">
        <div>
          <span class="eyebrow">2026-05-06 ~ 2026-06-04 · 论文成果汇总</span>
          <h1>提示优化正在从“写好一句话”变成可搜索、可验证、可部署的工程系统</h1>
          <p class="hero__lead">
            本页汇总当前项目收录的 <strong>${papers.length} 篇</strong> 相关论文，把每篇论文拆成“研究思路”和“主要成果”，并按五条路线组织：
            <strong>搜索优化</strong>、<strong>强化学习与智能体</strong>、<strong>推理链</strong>、<strong>结构化解释</strong>、<strong>可靠性安全</strong>。
          </p>
          <div class="hero__actions">
            <a class="button button--primary" href="#atlas">浏览全部论文</a>
            <a class="button" href="#insights">先看结论</a>
          </div>
        </div>
        <aside class="hero-visual" aria-label="论文图示拼贴">
          <div class="hero-visual__header">
            <span>本地论文图源</span>
            <span>生成时间 ${htmlEscape(generatedAt)}</span>
          </div>
          <div class="hero-visual__grid">
            <a class="visual-tile" href="index.html#/20260506-20260604/2605.26275v1-spear-code-augmented-agentic-prompt-optimization">
              <img src="docs/assets/figures/arxiv/2605.26275v1/fig-001.webp" alt="SPEAR 智能体提示优化架构图">
            </a>
            <a class="visual-tile" href="index.html#/20260506-20260604/2605.29678v1-spurious-prompts-can-irrelevant-prompts-steer-large-language-models">
              <img src="docs/assets/figures/arxiv/2605.29678v1/fig-001.webp" alt="伪提示迷宫图示">
            </a>
            <a class="visual-tile" href="index.html#/20260506-20260604/2605.28360v1-prompt-codebooks-discrete-compositional-optimization-for-language-model-instruction-refinement">
              <img src="docs/assets/figures/arxiv/2605.28360v1/fig-001.webp" alt="Prompt Codebooks 架构图">
            </a>
          </div>
          <div class="hero-visual__caption">
            <div class="caption-pill"><strong>31</strong><span>推荐论文</span></div>
            <div class="caption-pill"><strong>5</strong><span>方法路线</span></div>
            <div class="caption-pill"><strong>20+</strong><span>本地抽取图候选</span></div>
          </div>
        </aside>
      </div>
    </header>

    <section class="section section--white" aria-labelledby="stats-title">
      <div class="section__inner">
        <div class="section__heading">
          <h2 id="stats-title">一眼看清这批论文</h2>
          <p>项目日报已经做过评分与精读/速读区分，这里进一步把论文贡献压缩成展示友好的结构。</p>
        </div>
        <div class="stats-grid">
          ${renderStatCards(meta, papers)}
        </div>
      </div>
    </section>

    <section class="section" id="map" aria-labelledby="map-heading">
      <div class="section__inner">
        <div class="section__heading">
          <h2 id="map-heading">研究路线图</h2>
          <p>这批论文共同指向一个变化：提示不再只是自然语言输入，而是会被搜索、组合、评估、监控的工程资产。</p>
        </div>
        <div class="route-grid">
          ${renderCategoryCards(papers)}
        </div>
        ${renderMethodMap()}
        <div class="callout">
          <strong>核心判断：</strong>满分论文集中在“优化器能力”本身：更好的搜索目标、更少的评估预算、更强的诊断工具、更明确的回滚与可靠性约束。
        </div>
      </div>
    </section>

    <section class="section section--white" id="visuals" aria-labelledby="visuals-heading">
      <div class="section__inner">
        <div class="section__heading">
          <h2 id="visuals-heading">图解精选</h2>
          <p>这些图来自本仓库已抽取的论文图片，覆盖智能体优化、伪提示风险、RL 策略学习、码本组合与结构化标注。</p>
        </div>
        <div class="visual-grid">
          ${renderVisualGallery(papers)}
        </div>
      </div>
    </section>

    <section class="section" id="insights" aria-labelledby="insights-heading">
      <div class="section__inner">
        <div class="section__heading">
          <h2 id="insights-heading">可以带走的结论</h2>
          <p>如果要把这批论文用于团队分享，最值得强调的是方法范式变化，而不是单篇论文的指标竞赛。</p>
        </div>
        <div class="insight-layout">
          <div class="insight-list">
            <article class="insight-item" style="--accent:#1D4ED8;">
              <strong>优化目标从单指标走向多目标。</strong>
              <p>质量、成本、延迟、鲁棒性、安全性开始一起进入提示选择过程，提示优化更接近真实部署问题。</p>
            </article>
            <article class="insight-item" style="--accent:#6D28D9;">
              <strong>优化器从固定流水线走向智能体。</strong>
              <p>SPEAR、RPT、Prompting Policies 等工作把错误诊断、实验分析、工具调用与回滚机制交给可学习或可规划的优化器。</p>
            </article>
            <article class="insight-item" style="--accent:#15803D;">
              <strong>推理链从提示技巧变成可训练对象。</strong>
              <p>ACIL、Context-CoT、RGoT、Thoughts-as-Planning 等论文将推理链生成、选择、规划和图结构设计纳入优化空间。</p>
            </article>
            <article class="insight-item" style="--accent:#B91C1C;">
              <strong>提示敏感性已经是系统风险。</strong>
              <p>伪提示、漏洞检测提示审计、非对抗鲁棒性和训练提示选择都表明：部署前必须把提示变化纳入测试与监控。</p>
            </article>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>代表论文</th>
                  <th>路线</th>
                  <th>关键成果</th>
                </tr>
              </thead>
              <tbody>
                ${renderHighlightTable(papers)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--white" id="atlas" aria-labelledby="atlas-heading">
      <div class="section__inner">
        <div class="section__heading">
          <h2 id="atlas-heading">31 篇论文图谱</h2>
          <p>按路线筛选，或搜索标题、思路、成果。每张卡片都链接到项目内精读页和论文 PDF。</p>
        </div>
        <div class="controls">
          <label>
            <span class="sr-only">搜索论文</span>
            <input class="search-box" id="paper-search" type="search" placeholder="搜索：SPEAR、鲁棒性、Bandit、推理链..." autocomplete="off">
          </label>
          <div class="filter-row" role="list" aria-label="论文路线筛选">
            ${renderFilterButtons(papers)}
          </div>
        </div>
        <div class="paper-grid" id="paper-grid">
          ${renderPaperCards(papers)}
        </div>
        <div class="empty-state" id="empty-state">没有匹配的论文。换一个关键词或切回“全部”。</div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer__inner">
        <span>数据源：docs/20260506-20260604/papers.meta.json 与 docs/assets/figures/arxiv/</span>
        <span>生成脚本：scripts/build_paper_showcase.mjs</span>
      </div>
    </footer>
  </div>

  <script>
    const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
    const cards = Array.from(document.querySelectorAll(".paper-card"));
    const searchInput = document.getElementById("paper-search");
    const emptyState = document.getElementById("empty-state");
    let activeFilter = "all";

    function normalize(text) {
      return String(text || "").trim().toLowerCase();
    }

    function applyFilters() {
      const query = normalize(searchInput.value);
      let visible = 0;
      for (const card of cards) {
        const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
        const queryMatch = !query || normalize(card.dataset.search).includes(query);
        const shouldShow = categoryMatch && queryMatch;
        card.hidden = !shouldShow;
        if (shouldShow) visible += 1;
      }
      emptyState.classList.toggle("is-visible", visible === 0);
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        applyFilters();
      });
    });

    searchInput.addEventListener("input", applyFilters);
  </script>
</body>
</html>`;
}

const meta = readMeta();
const papers = enrichPapers(meta);
const html = renderHtml(meta, papers).replace(/[ \t]+$/gm, "");
fs.writeFileSync(outputPath, html, "utf8");
console.log(`Generated ${path.relative(repoRoot, outputPath)} from ${path.relative(repoRoot, metaPath)} (${papers.length} papers).`);
