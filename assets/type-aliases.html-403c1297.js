import{_ as t,X as o,Y as p,a0 as c,Z as n,$ as s,a1 as e,a3 as l,D as r}from"./framework-a4b0319b.js";const i={},d=n("p",null,"类型别名用来给一个类型起个新名字。",-1),u=l(`<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子" aria-hidden="true">#</a> 简单的例子</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">NameResolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">NameOrResolver</span> <span class="token operator">=</span> Name <span class="token operator">|</span> NameResolver<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span>n<span class="token operator">:</span> NameOrResolver<span class="token punctuation">)</span><span class="token operator">:</span> Name <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，我们使用 <code>type</code> 创建类型别名。</p><p>类型别名常用于联合类型。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,5),k={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D",target:"_blank",rel:"noopener noreferrer"};function v(h,y){const a=r("ExternalLinkIcon");return o(),p("div",null,[d,c(" more "),u,n("ul",null,[n("li",null,[n("a",k,[s("Advanced Types # Type Aliases"),e(a)]),s("("),n("a",m,[s("中文版"),e(a)]),s(")")])])])}const b=t(i,[["render",v],["__file","type-aliases.html.vue"]]);export{b as default};
