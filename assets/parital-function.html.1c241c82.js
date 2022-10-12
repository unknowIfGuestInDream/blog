import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.c23862ec.js";const p={},t=e(`<p>Python \u7684 <code>functools</code> \u6A21\u5757\u63D0\u4F9B\u4E86\u5F88\u591A\u6709\u7528\u7684\u529F\u80FD\uFF0C\u5176\u4E2D\u4E00\u4E2A\u5C31\u662F\u504F\u51FD\u6570 (Partial function) \u3002</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>\u8981\u6CE8\u610F\uFF0C\u8FD9\u91CC\u7684\u504F\u51FD\u6570\u548C\u6570\u5B66\u610F\u4E49\u4E0A\u7684\u504F\u51FD\u6570\u4E0D\u4E00\u6837\u3002</p></div><p>\u5728\u4ECB\u7ECD\u51FD\u6570\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u8BB2\u5230\uFF0C\u901A\u8FC7\u8BBE\u5B9A\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\uFF0C\u53EF\u4EE5\u964D\u4F4E\u51FD\u6570\u8C03\u7528\u7684\u96BE\u5EA6\u3002\u800C\u504F\u51FD\u6570\u4E5F\u53EF\u4EE5\u505A\u5230\u8FD9\u4E00\u70B9\u3002\u4E3E\u4F8B\u5982\u4E0B:</p><p><code>int()</code> \u51FD\u6570\u53EF\u4EE5\u628A\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6574\u6570\uFF0C\u5F53\u4EC5\u4F20\u5165\u5B57\u7B26\u4E32\u65F6\uFF0C<code>int()</code> \u51FD\u6570\u9ED8\u8BA4\u6309\u5341\u8FDB\u5236\u8F6C\u6362:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;12345&#39;</span><span class="token punctuation">)</span>
<span class="token number">12345</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46 <code>int()</code> \u51FD\u6570\u8FD8\u63D0\u4F9B\u989D\u5916\u7684 <code>base</code> \u53C2\u6570\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>10</code>\u3002\u5982\u679C\u4F20\u5165 <code>base</code> \u53C2\u6570\uFF0C\u5C31\u53EF\u4EE5\u505A N \u8FDB\u5236\u7684\u8F6C\u6362:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;12345&#39;</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>
<span class="token number">5349</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;12345&#39;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
<span class="token number">74565</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5047\u8BBE\u8981\u8F6C\u6362\u5927\u91CF\u7684\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\uFF0C\u6BCF\u6B21\u90FD\u4F20\u5165 <code>int(x, base=2)</code> \u975E\u5E38\u9EBB\u70E6\uFF0C\u4E8E\u662F\uFF0C\u6211\u4EEC\u60F3\u5230\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A <code>int2()</code> \u7684\u51FD\u6570\uFF0C\u9ED8\u8BA4\u628A <code>base=2</code> \u4F20\u8FDB\u53BB:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">int2</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> base<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u8F6C\u6362\u4E8C\u8FDB\u5236\u5C31\u975E\u5E38\u65B9\u4FBF\u4E86:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1000000&#39;</span><span class="token punctuation">)</span>
<span class="token number">64</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1010101&#39;</span><span class="token punctuation">)</span>
<span class="token number">85</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>functools.partial</code> \u5C31\u662F\u5E2E\u52A9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u504F\u51FD\u6570\u7684\uFF0C\u4E0D\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u5B9A\u4E49 <code>int2()</code>\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E0B\u9762\u7684\u4EE3\u7801\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u51FD\u6570 <code>int2</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> functools
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2 <span class="token operator">=</span> functools<span class="token punctuation">.</span>partial<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1000000&#39;</span><span class="token punctuation">)</span>
<span class="token number">64</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1010101&#39;</span><span class="token punctuation">)</span>
<span class="token number">85</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u7B80\u5355\u603B\u7ED3 <code>functools.partial</code> \u7684\u4F5C\u7528\u5C31\u662F\uFF0C\u628A\u4E00\u4E2A\u51FD\u6570\u7684\u67D0\u4E9B\u53C2\u6570\u7ED9\u56FA\u5B9A\u4F4F (\u4E5F\u5C31\u662F\u8BBE\u7F6E\u9ED8\u8BA4\u503C) \uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u8C03\u7528\u8FD9\u4E2A\u65B0\u51FD\u6570\u4F1A\u66F4\u7B80\u5355\u3002</p><p>\u6CE8\u610F\u5230\u4E0A\u9762\u7684\u65B0\u7684 <code>int2</code> \u51FD\u6570\uFF0C\u4EC5\u4EC5\u662F\u628A <code>base</code> \u53C2\u6570\u91CD\u65B0\u8BBE\u5B9A\u9ED8\u8BA4\u503C\u4E3A <code>2</code>\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u5728\u51FD\u6570\u8C03\u7528\u65F6\u4F20\u5165\u5176\u4ED6\u503C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1000000&#39;</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token number">1000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\uFF0C\u521B\u5EFA\u504F\u51FD\u6570\u65F6\uFF0C\u5B9E\u9645\u4E0A\u53EF\u4EE5\u63A5\u6536\u51FD\u6570\u5BF9\u8C61\u3001<code>*args</code> \u548C <code>**kw</code> \u8FD9 3 \u4E2A\u53C2\u6570\uFF0C\u5F53\u4F20\u5165:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>int2 <span class="token operator">=</span> functools<span class="token punctuation">.</span>partial<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\u56FA\u5B9A\u4E86 <code>int()</code> \u51FD\u6570\u7684\u5173\u952E\u5B57\u53C2\u6570 <code>base</code>\uFF0C\u4E5F\u5C31\u662F:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>int2<span class="token punctuation">(</span><span class="token string">&#39;10010&#39;</span><span class="token punctuation">)</span>
\u76F8\u5F53\u4E8E<span class="token punctuation">:</span>

kw <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;10010&#39;</span><span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F20\u5165:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>max2 <span class="token operator">=</span> functools<span class="token punctuation">.</span>partial<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\u4F1A\u628A 10 \u4F5C\u4E3A <code>*args</code> \u7684\u4E00\u90E8\u5206\u81EA\u52A8\u52A0\u5230\u5DE6\u8FB9\uFF0C\u4E5F\u5C31\u662F:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>max2<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76F8\u5F53\u4E8E:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>args <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
<span class="token builtin">max</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u4E3A <code>10</code>\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u5F53\u51FD\u6570\u7684\u53C2\u6570\u4E2A\u6570\u592A\u591A\uFF0C\u9700\u8981\u7B80\u5316\u65F6\uFF0C\u4F7F\u7528 <code>functools.partial</code> \u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u8FD9\u4E2A\u65B0\u51FD\u6570\u53EF\u4EE5\u56FA\u5B9A\u4F4F\u539F\u51FD\u6570\u7684\u90E8\u5206\u53C2\u6570\uFF0C\u4ECE\u800C\u5728\u8C03\u7528\u65F6\u66F4\u7B80\u5355\u3002</p>`,29),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","parital-function.html.vue"]]);export{d as default};
