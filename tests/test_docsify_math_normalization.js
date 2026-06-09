const assert = require('node:assert/strict');

function loadDocsifyPlugin() {
  delete require.cache[require.resolve('../app/docsify-plugin.js')];

  global.window = {
    marked: {
      getDefaults() {
        return {};
      },
      setOptions() {},
    },
    addEventListener() {},
    innerWidth: 1280,
    location: {
      href: 'https://example.test/daily-paper-reader/',
      hash: '',
    },
  };
  global.document = {
    body: {
      classList: {
        remove() {},
      },
    },
    documentElement: {
      clientWidth: 1280,
    },
    addEventListener() {},
    querySelectorAll() {
      return [];
    },
    querySelector() {
      return null;
    },
  };

  require('../app/docsify-plugin.js');

  const hook = {
    beforeEach() {},
    afterEach() {},
    doneEach() {},
  };
  const vm = {
    route: {
      file: 'docs/20260506-20260604/example.md',
      path: '/20260506-20260604/example',
    },
  };
  global.window.$docsify.plugins[0](hook, vm);
  return global.window.DPRMarkdown.__test;
}

function testBareLatexParenthesesBecomeInlineMath() {
  const { normalizeBareLatexParentheses } = loadDocsifyPlugin();
  const input = '使用上置信界估计乐观准确率 (\\mu_i + \\beta_t\\sigma_i)，并计算间隙。';

  assert.equal(
    normalizeBareLatexParentheses(input),
    '使用上置信界估计乐观准确率 \\(\\mu_i + \\beta_t\\sigma_i\\)，并计算间隙。',
  );
}

function testComplexParetoGapFormulaBecomesInlineMath() {
  const { normalizeBareLatexParentheses } = loadDocsifyPlugin();
  const input = '帕累托间隙（Manhattan距离）： (\\min_{y\\in F_t^+} [\\max(0,\\tilde{p}_y - \\tilde{p}_i) + \\max(0,\\tilde{c}_i - \\tilde{c}_y)])。';

  assert.equal(
    normalizeBareLatexParentheses(input),
    '帕累托间隙（Manhattan距离）： \\(\\min_{y\\in F_t^+} [\\max(0,\\tilde{p}_y - \\tilde{p}_i) + \\max(0,\\tilde{c}_i - \\tilde{c}_y)]\\)。',
  );
}

function testPlainParenthesesArePreserved() {
  const { normalizeBareLatexParentheses } = loadDocsifyPlugin();
  const input = '普通说明（节省预算）和英文括号 (not math) 不应改变。';

  assert.equal(normalizeBareLatexParentheses(input), input);
}

function testOrdinaryIdentifiersArePreserved() {
  const { normalizeBareLatexParentheses } = loadDocsifyPlugin();
  const input = '配置项 (status_code) 和字段 (user_name) 不应被当成公式。';

  assert.equal(normalizeBareLatexParentheses(input), input);
}

function testInlineCodeIsPreserved() {
  const { normalizeBareLatexParentheses } = loadDocsifyPlugin();
  const input = '代码 `score_(\\alpha)` 保留，但正文 (\\alpha + \\beta) 要渲染。';

  assert.equal(
    normalizeBareLatexParentheses(input),
    '代码 `score_(\\alpha)` 保留，但正文 \\(\\alpha + \\beta\\) 要渲染。',
  );
}

function testFencedCodeIsPreserved() {
  const { normalizeBareLatexParentheses } = loadDocsifyPlugin();
  const input = [
    '正文 (\\alpha + \\beta) 要渲染。',
    '```',
    'score_(\\alpha)',
    '```',
  ].join('\n');

  assert.equal(
    normalizeBareLatexParentheses(input),
    [
      '正文 \\(\\alpha + \\beta\\) 要渲染。',
      '```',
      'score_(\\alpha)',
      '```',
    ].join('\n'),
  );
}

function testFullLatexNormalizationSkipsMarkdownCode() {
  const { normalizeLatexMarkdownText } = loadDocsifyPlugin();
  const input = [
    '代码 `\\mathbf{b}{sem}(t)` 保留，正文 (\\alpha + \\beta) 渲染。',
    '```',
    '\\mathbf{b}{sem}(t)',
    '```',
  ].join('\n');

  assert.equal(
    normalizeLatexMarkdownText(input),
    [
      '代码 `\\mathbf{b}{sem}(t)` 保留，正文 \\(\\alpha + \\beta\\) 渲染。',
      '```',
      '\\mathbf{b}{sem}(t)',
      '```',
    ].join('\n'),
  );
}

testBareLatexParenthesesBecomeInlineMath();
testComplexParetoGapFormulaBecomesInlineMath();
testPlainParenthesesArePreserved();
testOrdinaryIdentifiersArePreserved();
testInlineCodeIsPreserved();
testFencedCodeIsPreserved();
testFullLatexNormalizationSkipsMarkdownCode();

console.log('docsify math normalization tests passed');
