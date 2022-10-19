import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,d as i,a as n,b as s,e,f as c,r as l}from"./app.7e7f0dc0.js";const r={},u=n("p",null,"\u4EFB\u610F\u503C(Any)\u7528\u6765\u8868\u793A\u5141\u8BB8\u8D4B\u503C\u4E3A\u4EFB\u610F\u7C7B\u578B\u3002",-1),d=c(`<h2 id="\u4EC0\u4E48\u662F\u4EFB\u610F\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u4EFB\u610F\u503C\u7C7B\u578B" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u4EFB\u610F\u503C\u7C7B\u578B</h2><p>\u5982\u679C\u662F\u4E00\u4E2A\u666E\u901A\u7C7B\u578B\uFF0C\u5728\u8D4B\u503C\u8FC7\u7A0B\u4E2D\u6539\u53D8\u7C7B\u578B\u662F\u4E0D\u88AB\u5141\u8BB8\u7684:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u5982\u679C\u662F <code>any</code> \u7C7B\u578B\uFF0C\u5219\u5141\u8BB8\u88AB\u8D4B\u503C\u4E3A\u4EFB\u610F\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EFB\u610F\u503C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u503C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> \u4EFB\u610F\u503C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</h2><p>\u5728\u4EFB\u610F\u503C\u4E0A\u8BBF\u95EE\u4EFB\u4F55\u5C5E\u6027\u90FD\u662F\u5141\u8BB8\u7684:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u5141\u8BB8\u8C03\u7528\u4EFB\u4F55\u65B9\u6CD5:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
anyThing<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
anyThing<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">.</span><span class="token function">setFirstName</span><span class="token punctuation">(</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u8BA4\u4E3A\uFF0C<strong>\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u4E3A\u4EFB\u610F\u503C\u4E4B\u540E\uFF0C\u5BF9\u5B83\u7684\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u7684\u5185\u5BB9\u7684\u7C7B\u578B\u90FD\u662F\u4EFB\u610F\u503C</strong>\u3002</p><h2 id="\u672A\u58F0\u660E\u7C7B\u578B\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u672A\u58F0\u660E\u7C7B\u578B\u7684\u53D8\u91CF" aria-hidden="true">#</a> \u672A\u58F0\u660E\u7C7B\u578B\u7684\u53D8\u91CF</h2><p><strong>\u53D8\u91CF\u5982\u679C\u5728\u58F0\u660E\u7684\u65F6\u5019\uFF0C\u672A\u6307\u5B9A\u5176\u7C7B\u578B\uFF0C\u90A3\u4E48\u5B83\u4F1A\u88AB\u8BC6\u522B\u4E3A\u4EFB\u610F\u503C\u7C7B\u578B</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> something<span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

something<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B49\u4EF7\u4E8E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> something<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

something<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,17),k={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html#any",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E4%BB%BB%E6%84%8F%E5%80%BC",target:"_blank",rel:"noopener noreferrer"};function v(g,b){const a=l("ExternalLinkIcon");return p(),o("div",null,[u,i(" more "),d,n("ul",null,[n("li",null,[n("a",k,[s("Basic Types # Any"),e(a)]),s("("),n("a",m,[s("\u4E2D\u6587\u7248"),e(a)]),s(")")])])])}const f=t(r,[["render",v],["__file","any.html.vue"]]);export{f as default};
