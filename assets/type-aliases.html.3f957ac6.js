import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,d as c,a as n,b as s,e,f as l,r}from"./app.963e91c8.js";const i={},d=n("p",null,"\u7C7B\u578B\u522B\u540D\u7528\u6765\u7ED9\u4E00\u4E2A\u7C7B\u578B\u8D77\u4E2A\u65B0\u540D\u5B57\u3002",-1),u=l(`<h2 id="\u7B80\u5355\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u7B80\u5355\u7684\u4F8B\u5B50</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">NameResolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">NameOrResolver</span> <span class="token operator">=</span> Name <span class="token operator">|</span> NameResolver<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span>n<span class="token operator">:</span> NameOrResolver<span class="token punctuation">)</span><span class="token operator">:</span> Name <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>type</code> \u521B\u5EFA\u7C7B\u578B\u522B\u540D\u3002</p><p>\u7C7B\u578B\u522B\u540D\u5E38\u7528\u4E8E\u8054\u5408\u7C7B\u578B\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,5),k={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D",target:"_blank",rel:"noopener noreferrer"};function v(h,y){const a=r("ExternalLinkIcon");return o(),p("div",null,[d,c(" more "),u,n("ul",null,[n("li",null,[n("a",k,[s("Advanced Types # Type Aliases"),e(a)]),s("("),n("a",m,[s("\u4E2D\u6587\u7248"),e(a)]),s(")")])])])}const f=t(i,[["render",v],["__file","type-aliases.html.vue"]]);export{f as default};
