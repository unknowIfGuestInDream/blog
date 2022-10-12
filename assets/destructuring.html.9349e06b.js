import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as p,a as t,f as e}from"./app.963e91c8.js";const o={},c=t("p",null,"\u4ECE ES6 \u5F00\u59CB\uFF0CJavaScript \u5F15\u5165\u4E86\u89E3\u6784\u8D4B\u503C\uFF0C\u53EF\u4EE5\u540C\u65F6\u5BF9\u4E00\u7EC4\u53D8\u91CF\u8FDB\u884C\u8D4B\u503C\u3002",-1),l=e(`<p>\u4EC0\u4E48\u662F\u89E3\u6784\u8D4B\u503C? \u6211\u4EEC\u5148\u770B\u770B\u4F20\u7EDF\u7684\u505A\u6CD5\uFF0C\u5982\u4F55\u628A\u4E00\u4E2A\u6570\u7EC4\u7684\u5143\u7D20\u5206\u522B\u8D4B\u503C\u7ED9\u51E0\u4E2A\u53D8\u91CF:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u5728 ES6 \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u89E3\u6784\u8D4B\u503C\uFF0C\u76F4\u63A5\u5BF9\u591A\u4E2A\u53D8\u91CF\u540C\u65F6\u8D4B\u503C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u6D4F\u89C8\u5668\u652F\u6301\u89E3\u6784\u8D4B\u503C\u5C31\u4E0D\u4F1A\u62A5\u9519:</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// x, y, z\u5206\u522B\u88AB\u8D4B\u503C\u4E3A\u6570\u7EC4\u5BF9\u5E94\u5143\u7D20:</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x = &quot;</span> <span class="token operator">+</span> x <span class="token operator">+</span> <span class="token string">&quot;, y = &quot;</span> <span class="token operator">+</span> y <span class="token operator">+</span> <span class="token string">&quot;, z = &quot;</span> <span class="token operator">+</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u5BF9\u6570\u7EC4\u5143\u7D20\u8FDB\u884C\u89E3\u6784\u8D4B\u503C\u65F6\uFF0C\u591A\u4E2A\u53D8\u91CF\u8981\u7528 <code>[...]</code> \u62EC\u8D77\u6765\u3002</p><p>\u5982\u679C\u6570\u7EC4\u672C\u8EAB\u8FD8\u6709\u5D4C\u5957\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u5F62\u5F0F\u8FDB\u884C\u89E3\u6784\u8D4B\u503C\uFF0C\u6CE8\u610F\u5D4C\u5957\u5C42\u6B21\u548C\u4F4D\u7F6E\u8981\u4FDD\u6301\u4E00\u81F4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> z<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

x<span class="token punctuation">;</span> <span class="token comment">// &#39;hello&#39;</span>
y<span class="token punctuation">;</span> <span class="token comment">// &#39;JavaScript&#39;</span>
z<span class="token punctuation">;</span> <span class="token comment">// &#39;ES6&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6784\u8D4B\u503C\u8FD8\u53EF\u4EE5\u5FFD\u7565\u67D0\u4E9B\u5143\u7D20:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u5FFD\u7565\u524D\u4E24\u4E2A\u5143\u7D20\uFF0C\u53EA\u5BF9 z \u8D4B\u503C\u7B2C\u4E09\u4E2A\u5143\u7D20</span>
z<span class="token punctuation">;</span> <span class="token comment">// &#39;ES6&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u9700\u8981\u4ECE\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u53D6\u51FA\u82E5\u5E72\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u89E3\u6784\u8D4B\u503C\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u83B7\u53D6\u5BF9\u8C61\u7684\u6307\u5B9A\u5C5E\u6027:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">passport</span><span class="token operator">:</span> <span class="token string">&quot;G-12345678&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.4 middle school&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> passport <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>

<span class="token comment">// name, age, passport \u5206\u522B\u88AB\u8D4B\u503C\u4E3A\u5BF9\u5E94\u5C5E\u6027:</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, passport = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>passport<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u8FDB\u884C\u89E3\u6784\u8D4B\u503C\u65F6\uFF0C\u540C\u6837\u53EF\u4EE5\u76F4\u63A5\u5BF9\u5D4C\u5957\u7684\u5BF9\u8C61\u5C5E\u6027\u8FDB\u884C\u8D4B\u503C\uFF0C\u53EA\u8981\u4FDD\u8BC1\u5BF9\u5E94\u7684\u5C42\u6B21\u662F\u4E00\u81F4\u7684:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">passport</span><span class="token operator">:</span> <span class="token string">&quot;G-12345678&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.4 middle school&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">street</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Road&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zipcode</span><span class="token operator">:</span> <span class="token string">&quot;100001&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span> city<span class="token punctuation">,</span> zip <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>

name<span class="token punctuation">;</span> <span class="token comment">// &#39;\u5C0F\u660E&#39;</span>
city<span class="token punctuation">;</span> <span class="token comment">// &#39;Beijing&#39;</span>
zip<span class="token punctuation">;</span> <span class="token comment">// undefined, \u56E0\u4E3A\u5C5E\u6027\u540D\u662F zipcode \u800C\u4E0D\u662F zip</span>
<span class="token comment">// \u6CE8\u610F: address \u4E0D\u662F\u53D8\u91CF\uFF0C\u800C\u662F\u4E3A\u4E86\u8BA9 city \u548C zip \u83B7\u5F97\u5D4C\u5957\u7684 address \u5BF9\u8C61\u7684\u5C5E\u6027:</span>
address<span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: address is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u89E3\u6784\u8D4B\u503C\u5BF9\u5BF9\u8C61\u5C5E\u6027\u8FDB\u884C\u8D4B\u503C\u65F6\uFF0C\u5982\u679C\u5BF9\u5E94\u7684\u5C5E\u6027\u4E0D\u5B58\u5728\uFF0C\u53D8\u91CF\u5C06\u88AB\u8D4B\u503C\u4E3A <code>undefined</code>\uFF0C\u8FD9\u548C\u5F15\u7528\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\u83B7\u5F97 <code>undefined</code> \u662F\u4E00\u81F4\u7684\u3002\u5982\u679C\u8981\u4F7F\u7528\u7684\u53D8\u91CF\u540D\u548C\u5C5E\u6027\u540D\u4E0D\u4E00\u81F4\uFF0C\u53EF\u4EE5\u7528\u4E0B\u9762\u7684\u8BED\u6CD5\u83B7\u53D6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">passport</span><span class="token operator">:</span> <span class="token string">&quot;G-12345678&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.4 middle school&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u628A passport \u5C5E\u6027\u8D4B\u503C\u7ED9\u53D8\u91CF id:</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token literal-property property">passport</span><span class="token operator">:</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>

name<span class="token punctuation">;</span> <span class="token comment">// &#39;\u5C0F\u660E&#39;</span>
id<span class="token punctuation">;</span> <span class="token comment">// &#39;G-12345678&#39;</span>
<span class="token comment">// \u6CE8\u610F: passport \u4E0D\u662F\u53D8\u91CF\uFF0C\u800C\u662F\u4E3A\u4E86\u8BA9\u53D8\u91CF id \u83B7\u5F97 passport \u5C5E\u6027:</span>
passport<span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: passport is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6784\u8D4B\u503C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF0C\u8FD9\u6837\u5C31\u907F\u514D\u4E86\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\u8FD4\u56DE <code>undefined</code> \u7684\u95EE\u9898:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">passport</span><span class="token operator">:</span> <span class="token string">&quot;G-12345678&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C person \u5BF9\u8C61\u6CA1\u6709 single \u5C5E\u6027\uFF0C\u9ED8\u8BA4\u8D4B\u503C\u4E3A true:</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> single <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>

name<span class="token punctuation">;</span> <span class="token comment">// &#39;\u5C0F\u660E&#39;</span>
single<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u5982\u679C\u53D8\u91CF\u5DF2\u7ECF\u88AB\u58F0\u660E\u4E86\uFF0C\u518D\u6B21\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u6B63\u786E\u7684\u5199\u6CD5\u4E5F\u4F1A\u62A5\u8BED\u6CD5\u9519\u8BEF:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u53D8\u91CF:</span>
<span class="token keyword">let</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u89E3\u6784\u8D4B\u503C:</span>
<span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u8BED\u6CD5\u9519\u8BEF: Uncaught SyntaxError: Unexpected token =</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u56E0\u4E3A JavaScript \u5F15\u64CE\u628A <code>{</code> \u5F00\u5934\u7684\u8BED\u53E5\u5F53\u4F5C\u4E86\u5757\u5904\u7406\uFF0C\u4E8E\u662F <code>=</code> \u4E0D\u518D\u5408\u6CD5\u3002\u89E3\u51B3\u65B9\u6CD5\u662F\u7528\u5C0F\u62EC\u53F7\u62EC\u8D77\u6765:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><p>\u89E3\u6784\u8D4B\u503C\u5728\u5F88\u591A\u65F6\u5019\u53EF\u4EE5\u5927\u5927\u7B80\u5316\u4EE3\u7801\u3002\u4F8B\u5982\uFF0C\u4EA4\u6362\u4E24\u4E2A\u53D8\u91CF x \u548C y \u7684\u503C\uFF0C\u53EF\u4EE5\u8FD9\u4E48\u5199\uFF0C\u4E0D\u518D\u9700\u8981\u4E34\u65F6\u53D8\u91CF:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> x<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5FEB\u901F\u83B7\u53D6\u5F53\u524D\u9875\u9762\u7684\u57DF\u540D\u548C\u8DEF\u5F84:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">hostname</span><span class="token operator">:</span> domain<span class="token punctuation">,</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> location<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u90A3\u4E48\uFF0C\u53EF\u4EE5\u4F7F\u7528\u89E3\u6784\u76F4\u63A5\u628A\u5BF9\u8C61\u7684\u5C5E\u6027\u7ED1\u5B9A\u5230\u53D8\u91CF\u4E2D\u3002\u4F8B\u5982\uFF0C\u4E0B\u9762\u7684\u51FD\u6570\u53EF\u4EE5\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A Date \u5BF9\u8C61:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">buildDate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day<span class="token punctuation">,</span> hour <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> minute <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> second <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>year<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>month<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>day<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hour<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>minute<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B83\u7684\u65B9\u4FBF\u4E4B\u5904\u5728\u4E8E\u4F20\u5165\u7684\u5BF9\u8C61\u53EA\u9700\u8981 <code>year</code>\u3001<code>month</code> \u548C <code>day</code> \u8FD9\u4E09\u4E2A\u5C5E\u6027:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">buildDate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2017</span><span class="token punctuation">,</span> <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Sun Jan 01 2017 00:00:00 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u4F20\u5165 <code>hour</code>\u3001<code>minute</code> \u548C <code>second</code> \u5C5E\u6027:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">buildDate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2017</span><span class="token punctuation">,</span> <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">hour</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">minute</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Sun Jan 01 2017 20:15:00 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u89E3\u6784\u8D4B\u503C\u53EF\u4EE5\u51CF\u5C11\u4EE3\u7801\u91CF\uFF0C\u4F46\u662F\uFF0C\u9700\u8981\u5728\u652F\u6301 ES6 \u89E3\u6784\u8D4B\u503C\u7279\u6027\u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u624D\u80FD\u6B63\u5E38\u8FD0\u884C\u3002\u76EE\u524D\u652F\u6301\u89E3\u6784\u8D4B\u503C\u7684\u6D4F\u89C8\u5668\u5305\u62EC Chrome\uFF0CFirefox\uFF0CEdge \u7B49\u3002</p>`,33);function i(r,u){return s(),a("div",null,[c,p(" more "),l])}const v=n(o,[["render",i],["__file","destructuring.html.vue"]]);export{v as default};
