import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,d as c,a as n,b as s,e as t,f as i,r as l}from"./app.7e7f0dc0.js";const u={},r=n("p",null,"\u6570\u7EC4\u5408\u5E76\u4E86\u76F8\u540C\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u800C\u5143\u7EC4(Tuple)\u5408\u5E76\u4E86\u4E0D\u540C\u7C7B\u578B\u7684\u5BF9\u8C61\u3002",-1),d=n("p",null,"\u5143\u7EC4\u8D77\u6E90\u4E8E\u51FD\u6570\u7F16\u7A0B\u8BED\u8A00(\u5982 F#)\uFF0C\u8FD9\u4E9B\u8BED\u8A00\u4E2D\u4F1A\u9891\u7E41\u4F7F\u7528\u5143\u7EC4\u3002",-1),k=i(`<h2 id="\u7B80\u5355\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u7B80\u5355\u7684\u4F8B\u5B50</h2><p>\u5B9A\u4E49\u4E00\u5BF9\u503C\u5206\u522B\u4E3A <code>string</code> \u548C <code>number</code> \u7684\u5143\u7EC4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u8D4B\u503C\u6216\u8BBF\u95EE\u4E00\u4E2A\u5DF2\u77E5\u7D22\u5F15\u7684\u5143\u7D20\u65F6\uFF0C\u4F1A\u5F97\u5230\u6B63\u786E\u7684\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>

tom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u53EA\u8D4B\u503C\u5176\u4E2D\u4E00\u9879:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u5F53\u76F4\u63A5\u5BF9\u5143\u7EC4\u7C7B\u578B\u7684\u53D8\u91CF\u8FDB\u884C\u521D\u59CB\u5316\u6216\u8005\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u9700\u8981\u63D0\u4F9B\u6240\u6709\u5143\u7EC4\u7C7B\u578B\u4E2D\u6307\u5B9A\u7684\u9879\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Property &#39;1&#39; is missing in type &#39;[string]&#39; but required in type &#39;[string, number]&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8D8A\u754C\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u8D8A\u754C\u7684\u5143\u7D20" aria-hidden="true">#</a> \u8D8A\u754C\u7684\u5143\u7D20</h2><p>\u5F53\u6DFB\u52A0\u8D8A\u754C\u7684\u5143\u7D20\u65F6\uFF0C\u5B83\u7684\u7C7B\u578B\u4F1A\u88AB\u9650\u5236\u4E3A\u5143\u7EC4\u4E2D\u6BCF\u4E2A\u7C7B\u578B\u7684\u8054\u5408\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;male&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Argument of type &#39;true&#39; is not assignable to parameter of type &#39;string | number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,14),m={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html#tuple",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E5%85%83%E7%BB%84-tuple",target:"_blank",rel:"noopener noreferrer"};function v(g,h){const a=l("ExternalLinkIcon");return p(),o("div",null,[r,d,c(" more "),k,n("ul",null,[n("li",null,[n("a",m,[s("Basic Types # Tuple"),t(a)]),s("("),n("a",b,[s("\u4E2D\u6587\u7248"),t(a)]),s(")")])])])}const f=e(u,[["render",v],["__file","tuple.html.vue"]]);export{f as default};
