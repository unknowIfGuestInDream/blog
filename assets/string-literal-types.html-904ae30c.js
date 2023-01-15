import{_ as t,W as o,X as p,$ as c,Y as n,Z as s,a0 as e,a2 as l,G as i}from"./framework-b343ad39.js";const r={},u=n("p",null,"字符串字面量类型用来约束取值只能是某几个字符串中的一个。",-1),d=l(`<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子" aria-hidden="true">#</a> 简单的例子</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">EventNames</span> <span class="token operator">=</span> <span class="token string">&quot;click&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;scroll&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;mousemove&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> Element<span class="token punctuation">,</span> event<span class="token operator">:</span> EventNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something</span>
<span class="token punctuation">}</span>

<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;scroll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没问题</span>
<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;dbclick&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错，event 不能为 &#39;dbclick&#39;</span>

<span class="token comment">// index.ts(7,47): error TS2345: Argument of type &#39;&quot;dbclick&quot;&#39; is not assignable to parameter of type &#39;EventNames&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，我们使用 <code>type</code> 定了一个字符串字面量类型 <code>EventNames</code>，它只能取三种字符串中的一种。</p><p>注意，<strong>类型别名与字符串字面量类型都是使用 <code>type</code> 进行定义。</strong></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,5),k={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"};function v(h,g){const a=i("ExternalLinkIcon");return o(),p("div",null,[u,c(" more "),d,n("ul",null,[n("li",null,[n("a",k,[s("Advanced Types # Type Aliases"),e(a)]),s("("),n("a",m,[s("中文版"),e(a)]),s(")")])])])}const b=t(r,[["render",v],["__file","string-literal-types.html.vue"]]);export{b as default};
