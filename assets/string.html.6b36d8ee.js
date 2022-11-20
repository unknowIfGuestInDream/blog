import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,d as p,a as s,b as n,e as c,w as i,f as l,r as u}from"./app.6a7adab4.js";const d={},r=s("p",null,[n("JavaScript \u7684\u5B57\u7B26\u4E32\u5C31\u662F\u7528 "),s("code",null,"''"),n(" \u6216 "),s("code",null,'""'),n(" \u62EC\u8D77\u6765\u7684\u5B57\u7B26\u8868\u793A\u3002")],-1),k=l(`<div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u8BF7\u6CE8\u610F\uFF0C<code>&#39;&#39;</code> \u6216 <code>&quot;&quot;</code> \u672C\u8EAB\u53EA\u662F\u4E00\u79CD\u8868\u793A\u65B9\u5F0F\uFF0C\u4E0D\u662F\u5B57\u7B26\u4E32\u7684\u4E00\u90E8\u5206\uFF0C\u56E0\u6B64\uFF0C\u5B57\u7B26\u4E32 <code>&#39;abc&#39;</code> \u53EA\u6709 <code>a</code>\uFF0C<code>b</code>\uFF0C<code>c</code> \u8FD9 3 \u4E2A\u5B57\u7B26\u3002</p></div><p>\u5982\u679C <code>&#39;</code> \u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A\u5B57\u7B26\uFF0C\u90A3\u5C31\u53EF\u4EE5\u7528 <code>&quot;&quot;</code> \u62EC\u8D77\u6765\uFF0C\u6BD4\u5982 <code>&quot;I&#39;m OK&quot;</code> \u5305\u542B\u7684\u5B57\u7B26\u662F <code>I</code>\uFF0C<code>&#39;</code>\uFF0C<code>m</code>\uFF0C<code>\u7A7A\u683C</code>\uFF0C<code>O</code>\uFF0C<code>K</code> \u8FD9 6 \u4E2A\u5B57\u7B26\u3002</p><p>\u5982\u679C\u5B57\u7B26\u4E32\u5185\u90E8\u65E2\u5305\u542B <code>&#39;</code> \u53C8\u5305\u542B <code>&quot;</code> \u600E\u4E48\u529E? \u53EF\u4EE5\u7528\u8F6C\u4E49\u5B57\u7B26 <code>\\</code> \u6765\u6807\u8BC6\uFF0C\u6BD4\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;I\\&#39;m \\&quot;OK\\&quot;!&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8868\u793A\u7684\u5B57\u7B26\u4E32\u5185\u5BB9\u662F: <code>I&#39;m &quot;OK&quot;!</code></p><p>\u8F6C\u4E49\u5B57\u7B26 <code>\\</code> \u53EF\u4EE5\u8F6C\u4E49\u5F88\u591A\u5B57\u7B26\uFF0C\u6BD4\u5982 <code>\\n</code> \u8868\u793A\u6362\u884C\uFF0C<code>\\t</code> \u8868\u793A\u5236\u8868\u7B26\uFF0C\u5B57\u7B26 <code>\\</code> \u672C\u8EAB\u4E5F\u8981\u8F6C\u4E49\uFF0C\u6240\u4EE5 <code>\\\\</code> \u8868\u793A\u7684\u5B57\u7B26\u5C31\u662F <code>\\</code>\u3002</p><p>ASCII \u5B57\u7B26\u53EF\u4EE5\u4EE5 <code>\\x##</code> \u5F62\u5F0F\u7684\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF0C\u4F8B\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;\\x41&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u5B8C\u5168\u7B49\u540C\u4E8E &#39;A&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD8\u53EF\u4EE5\u7528 <code>\\u####</code> \u8868\u793A\u4E00\u4E2A Unicode \u5B57\u7B26:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;\\u4e2d\\u6587&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u5B8C\u5168\u7B49\u540C\u4E8E &#39;\u4E2D\u6587&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u591A\u884C\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u591A\u884C\u5B57\u7B26\u4E32</h2><p>\u7531\u4E8E\u591A\u884C\u5B57\u7B26\u4E32\u7528 <code>\\n</code> \u5199\u8D77\u6765\u6BD4\u8F83\u8D39\u4E8B\uFF0C\u6240\u4EE5\u6700\u65B0\u7684 ES6 \u6807\u51C6\u65B0\u589E\u4E86\u4E00\u79CD\u591A\u884C\u5B57\u7B26\u4E32\u7684\u8868\u793A\u65B9\u6CD5\uFF0C\u7528\u53CD\u5F15\u53F7 <code>\`</code> \u8868\u793A:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u8FD9\u662F\u4E00\u4E2A
\u591A\u884C
\u5B57\u7B26\u4E32</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u53CD\u5F15\u53F7\u5728\u952E\u76D8\u7684 <code>ESC</code> \u4E0B\u65B9\uFF0C\u6570\u5B57\u952E 1 \u7684\u5DE6\u8FB9\u3002</p></div><h2 id="\u6A21\u677F\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u6A21\u677F\u5B57\u7B26\u4E32</h2><p>\u8981\u628A\u591A\u4E2A\u5B57\u7B26\u4E32\u8FDE\u63A5\u8D77\u6765\uFF0C\u53EF\u4EE5\u7528 <code>+</code> \u53F7\u8FDE\u63A5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;\u60A8\u597D, &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, \u60A8\u4ECA\u5E74&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;\u5C81\u4E86!&quot;</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6709\u5F88\u591A\u53D8\u91CF\u9700\u8981\u8FDE\u63A5\uFF0C\u7528 <code>+</code> \u53F7\u5C31\u6BD4\u8F83\u9EBB\u70E6\u3002ES6 \u65B0\u589E\u4E86\u4E00\u79CD\u6A21\u677F\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u65B9\u6CD5\u548C\u4E0A\u9762\u7684\u591A\u884C\u5B57\u7B26\u4E32\u4E00\u6837\uFF0C\u4F46\u662F\u5B83\u4F1A\u81EA\u52A8\u66FF\u6362\u5B57\u7B26\u4E32\u4E2D\u7684\u53D8\u91CF:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u60A8\u597D, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, \u60A8\u4ECA\u5E74</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81\u4E86!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u64CD\u4F5C\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u64CD\u4F5C\u5B57\u7B26\u4E32</h2><p>\u5B57\u7B26\u4E32\u5E38\u89C1\u7684\u64CD\u4F5C\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u83B7\u53D6\u5B57\u7B26\u4E32\u67D0\u4E2A\u6307\u5B9A\u4F4D\u7F6E\u7684\u5B57\u7B26\uFF0C\u4F7F\u7528\u7C7B\u4F3C <code>Array</code> \u7684\u4E0B\u6807\u64CD\u4F5C\uFF0C\u7D22\u5F15\u53F7\u4ECE <code>0</code> \u5F00\u59CB:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;H&#39;</span>
s<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39; &#39;</span>
s<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;w&#39;</span>
s<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;!&#39;</span>
s<span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// undefined \u8D85\u51FA\u8303\u56F4\u7684\u7D22\u5F15\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u4E00\u5F8B\u8FD4\u56DE undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u9700\u8981\u7279\u522B\u6CE8\u610F\u7684\u662F\uFF0C\u5B57\u7B26\u4E32\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u5982\u679C\u5BF9\u5B57\u7B26\u4E32\u7684\u67D0\u4E2A\u7D22\u5F15\u8D4B\u503C\uFF0C\u4E0D\u4F1A\u6709\u4EFB\u4F55\u9519\u8BEF\uFF0C\u4F46\u662F\u4E5F\u6CA1\u6709\u4EFB\u4F55\u6548\u679C:</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&quot;Test&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;X&quot;</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// s \u4ECD\u7136\u4E3A &#39;Test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript \u4E3A\u5B57\u7B26\u4E32\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u7528\u65B9\u6CD5\uFF0C\u6CE8\u610F\uFF0C\u8C03\u7528\u8FD9\u4E9B\u65B9\u6CD5\u672C\u8EAB\u4E0D\u4F1A\u6539\u53D8\u539F\u6709\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\uFF0C\u800C\u662F\u8FD4\u56DE\u4E00\u4E2A\u65B0\u5B57\u7B26\u4E32:</p><ul><li><p>toUpperCase</p><p><code>toUpperCase()</code> \u628A\u4E00\u4E2A\u5B57\u7B26\u4E32\u5168\u90E8\u53D8\u4E3A\u5927\u5199:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE &#39;HELLO&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>toLowerCase</p><p><code>toLowerCase()</code> \u628A\u4E00\u4E2A\u5B57\u7B26\u4E32\u5168\u90E8\u53D8\u4E3A\u5C0F\u5199:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> lower <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE &#39;hello&#39; \u5E76\u8D4B\u503C\u7ED9\u53D8\u91CF lower</span>

lower<span class="token punctuation">;</span> <span class="token comment">// &#39;hello&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>indexOf</p><p><code>indexOf()</code> \u4F1A\u641C\u7D22\u6307\u5B9A\u5B57\u7B26\u4E32\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;hello, world&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE 7</span>
s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CA1\u6709\u627E\u5230\u6307\u5B9A\u7684\u5B50\u4E32\uFF0C\u8FD4\u56DE -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>substring</p><p><code>substring()</code> \u8FD4\u56DE\u6307\u5B9A\u7D22\u5F15\u533A\u95F4\u7684\u5B50\u4E32:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;hello, world&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4ECE\u7D22\u5F15 0 \u5F00\u59CB\u5230 5(\u4E0D\u5305\u62EC 5)\uFF0C\u8FD4\u56DE &#39;hello&#39;</span>
s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4ECE\u7D22\u5F15 7 \u5F00\u59CB\u5230\u7ED3\u675F\uFF0C\u8FD4\u56DE &#39;world&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u66F4\u591A\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A\u4ECB\u7ECD" aria-hidden="true">#</a> \u66F4\u591A\u4ECB\u7ECD</h2>`,29);function v(m,g){const a=u("RouterLink");return t(),o("div",null,[r,p(" more "),k,s("p",null,[n("\u66F4\u7CFB\u7EDF\u7684\u4ECB\u7ECD\u8BE6\u89C1 "),c(a,{to:"/ja/code/language/js/types/string.html"},{default:i(()=>[n("\u6570\u636E\u7ED3\u6784 / \u5B57\u7B26\u4E32")]),_:1})])])}const q=e(d,[["render",v],["__file","string.html.vue"]]);export{q as default};
