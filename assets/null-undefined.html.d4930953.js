import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.963e91c8.js";const c={},o=e(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p><code>null</code> \u4E0E <code>undefined</code> \u90FD\u53EF\u4EE5\u8868\u793A\u201C\u6CA1\u6709\u201D\uFF0C\u542B\u4E49\u975E\u5E38\u76F8\u4F3C\u3002\u5C06\u4E00\u4E2A\u53D8\u91CF\u8D4B\u503C\u4E3A <code>undefined</code> \u6216 <code>null</code>\uFF0C\u8001\u5B9E\u8BF4\uFF0C\u8BED\u6CD5\u6548\u679C\u51E0\u4E4E\u6CA1\u533A\u522B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token comment">// \u6216\u8005</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u53D8\u91CF <code>a</code> \u5206\u522B\u88AB\u8D4B\u503C\u4E3A <code>undefined</code> \u548C <code>null</code>\uFF0C\u8FD9\u4E24\u79CD\u5199\u6CD5\u7684\u6548\u679C\u51E0\u4E4E\u7B49\u4EF7\u3002</p><p>\u5728 <code>if</code> \u8BED\u53E5\u4E2D\uFF0C\u5B83\u4EEC\u90FD\u4F1A\u88AB\u81EA\u52A8\u8F6C\u4E3A <code>false</code>\uFF0C\u76F8\u7B49\u8FD0\u7B97\u7B26(<code>==</code>)\u751A\u81F3\u76F4\u63A5\u62A5\u544A\u4E24\u8005\u76F8\u7B49\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;undefined is false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// undefined is false</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;null is false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// null is false</span>

<span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u4EE3\u7801\u53EF\u89C1\uFF0C\u4E24\u8005\u7684\u884C\u4E3A\u662F\u4F55\u7B49\u76F8\u4F3C! \u8C37\u6B4C\u516C\u53F8\u5F00\u53D1\u7684 JavaScript \u8BED\u8A00\u7684\u66FF\u4EE3\u54C1 Dart \u8BED\u8A00\uFF0C\u5C31\u660E\u786E\u89C4\u5B9A\u53EA\u6709 <code>null</code>\uFF0C\u6CA1\u6709 <code>undefined</code>!</p><p>\u65E2\u7136\u542B\u4E49\u4E0E\u7528\u6CD5\u90FD\u5DEE\u4E0D\u591A\uFF0C\u4E3A\u4EC0\u4E48\u8981\u540C\u65F6\u8BBE\u7F6E\u4E24\u4E2A\u8FD9\u6837\u7684\u503C\uFF0C\u8FD9\u4E0D\u662F\u65E0\u7AEF\u589E\u52A0\u590D\u6742\u5EA6\uFF0C\u4EE4\u521D\u5B66\u8005\u56F0\u6270\u5417? \u8FD9\u4E0E\u5386\u53F2\u539F\u56E0\u6709\u5173\u3002</p><p>1995 \u5E74 JavaScript \u8BDE\u751F\u65F6\uFF0C\u6700\u521D\u50CF Java \u4E00\u6837\uFF0C\u53EA\u8BBE\u7F6E\u4E86 <code>null</code> \u8868\u793A&quot;\u65E0&quot;\u3002\u6839\u636E C \u8BED\u8A00\u7684\u4F20\u7EDF\uFF0C<code>null</code> \u53EF\u4EE5\u81EA\u52A8\u8F6C\u4E3A <code>0</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token number">5</span> <span class="token operator">+</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>null</code> \u8F6C\u4E3A\u6570\u5B57\u65F6\uFF0C\u81EA\u52A8\u53D8\u6210 0\u3002</p><p>\u4F46\u662F\uFF0CJavaScript \u7684\u8BBE\u8BA1\u8005 Brendan Eich\uFF0C\u89C9\u5F97\u8FD9\u6837\u505A\u8FD8\u4E0D\u591F\u3002\u9996\u5148\uFF0C\u7B2C\u4E00\u7248\u7684 JavaScript \u91CC\u9762\uFF0C<code>null</code> \u5C31\u50CF\u5728 Java \u91CC\u4E00\u6837\uFF0C\u88AB\u5F53\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF0CBrendan Eich \u89C9\u5F97\u8868\u793A\u201C\u65E0\u201D\u7684\u503C\u6700\u597D\u4E0D\u662F\u5BF9\u8C61\u3002\u5176\u6B21\uFF0C\u90A3\u65F6\u7684 JavaScript \u4E0D\u5305\u62EC\u9519\u8BEF\u5904\u7406\u673A\u5236\uFF0CBrendan Eich \u89C9\u5F97\uFF0C\u5982\u679C <code>null</code> \u81EA\u52A8\u8F6C\u4E3A 0\uFF0C\u5F88\u4E0D\u5BB9\u6613\u53D1\u73B0\u9519\u8BEF\u3002</p><p>\u56E0\u6B64\uFF0C\u4ED6\u53C8\u8BBE\u8BA1\u4E86\u4E00\u4E2A <code>undefined</code>\u3002\u533A\u522B\u662F\u8FD9\u6837\u7684: <code>null</code> \u662F\u4E00\u4E2A\u8868\u793A\u201C\u7A7A\u201D\u7684\u5BF9\u8C61\uFF0C\u8F6C\u4E3A\u6570\u503C\u65F6\u4E3A <code>0</code>\uFF1B<code>undefined</code> \u662F\u4E00\u4E2A\u8868\u793A&quot;\u6B64\u5904\u65E0\u5B9A\u4E49&quot;\u7684\u539F\u59CB\u503C\uFF0C\u8F6C\u4E3A\u6570\u503C\u65F6\u4E3A <code>NaN</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
<span class="token number">5</span> <span class="token operator">+</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7528\u6CD5\u548C\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5\u548C\u542B\u4E49" aria-hidden="true">#</a> \u7528\u6CD5\u548C\u542B\u4E49</h2><p>\u5BF9\u4E8E <code>null</code> \u548C <code>undefined</code>\uFF0C\u5927\u81F4\u53EF\u4EE5\u50CF\u4E0B\u9762\u8FD9\u6837\u7406\u89E3\u3002</p><p><code>null</code> \u8868\u793A\u7A7A\u503C\uFF0C\u5373\u8BE5\u5904\u7684\u503C\u73B0\u5728\u4E3A\u7A7A\u3002\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u67D0\u4E2A\u53C2\u6570\u672A\u8BBE\u7F6E\u4EFB\u4F55\u503C\uFF0C\u8FD9\u65F6\u5C31\u53EF\u4EE5\u4F20\u5165 <code>null</code>\uFF0C\u8868\u793A\u8BE5\u53C2\u6570\u4E3A\u7A7A\u3002\u6BD4\u5982\uFF0C\u67D0\u4E2A\u51FD\u6570\u63A5\u53D7\u5F15\u64CE\u629B\u51FA\u7684\u9519\u8BEF\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u672A\u51FA\u9519\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u53C2\u6570\u5C31\u4F1A\u4F20\u5165 <code>null</code>\uFF0C\u8868\u793A\u672A\u53D1\u751F\u9519\u8BEF\u3002</p><p><code>undefined</code> \u8868\u793A\u201C\u672A\u5B9A\u4E49\u201D\uFF0C\u4E0B\u9762\u662F\u8FD4\u56DE <code>undefined</code> \u7684\u5178\u578B\u573A\u666F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u53D8\u91CF\u58F0\u660E\u4E86\uFF0C\u4F46\u6CA1\u6709\u8D4B\u503C</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>
i<span class="token punctuation">;</span> <span class="token comment">// undefined</span>

<span class="token comment">// \u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u5E94\u8BE5\u63D0\u4F9B\u7684\u53C2\u6570\u6CA1\u6709\u63D0\u4F9B\uFF0C\u8BE5\u53C2\u6570\u7B49\u4E8E undefined</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>

<span class="token comment">// \u5BF9\u8C61\u6CA1\u6709\u8D4B\u503C\u7684\u5C5E\u6027</span>
<span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
o<span class="token punctuation">.</span>p<span class="token punctuation">;</span> <span class="token comment">// undefined</span>

<span class="token comment">// \u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u9ED8\u8BA4\u8FD4\u56DE undefined</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[o];function t(l,i){return s(),a("div",null,p)}const r=n(c,[["render",t],["__file","null-undefined.html.vue"]]);export{r as default};
