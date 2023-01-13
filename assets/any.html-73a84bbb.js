import{_ as t,W as p,X as o,$ as i,Y as n,Z as s,a0 as e,a2 as c,G as l}from"./framework-0e132572.js";const u={},r=n("p",null,"任意值(Any)用来表示允许赋值为任意类型。",-1),d=c(`<h2 id="什么是任意值类型" tabindex="-1"><a class="header-anchor" href="#什么是任意值类型" aria-hidden="true">#</a> 什么是任意值类型</h2><p>如果是一个普通类型，在赋值过程中改变类型是不被允许的:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果是 <code>any</code> 类型，则允许被赋值为任意类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任意值的属性和方法" tabindex="-1"><a class="header-anchor" href="#任意值的属性和方法" aria-hidden="true">#</a> 任意值的属性和方法</h2><p>在任意值上访问任何属性都是允许的:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也允许调用任何方法:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
anyThing<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
anyThing<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">.</span><span class="token function">setFirstName</span><span class="token punctuation">(</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以认为，<strong>声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值</strong>。</p><h2 id="未声明类型的变量" tabindex="-1"><a class="header-anchor" href="#未声明类型的变量" aria-hidden="true">#</a> 未声明类型的变量</h2><p><strong>变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型</strong>:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> something<span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

something<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> something<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

something<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,17),k={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html#any",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E4%BB%BB%E6%84%8F%E5%80%BC",target:"_blank",rel:"noopener noreferrer"};function v(g,b){const a=l("ExternalLinkIcon");return p(),o("div",null,[r,i(" more "),d,n("ul",null,[n("li",null,[n("a",k,[s("Basic Types # Any"),e(a)]),s("("),n("a",m,[s("中文版"),e(a)]),s(")")])])])}const y=t(u,[["render",v],["__file","any.html.vue"]]);export{y as default};
