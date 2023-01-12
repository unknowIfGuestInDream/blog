import{_ as i,W as l,X as u,$ as r,Y as s,Z as n,a0 as a,a1 as o,a2 as t,G as c}from"./framework-269d85ce.js";const d={},k=s("p",null,"在 TypeScript 中，数组类型有多种定义方式，比较灵活。",-1),m=t(`<h2 id="「类型-方括号」表示法" tabindex="-1"><a class="header-anchor" href="#「类型-方括号」表示法" aria-hidden="true">#</a> 「类型 + 方括号」表示法</h2><p>最简单的方法是使用「类型 + 方括号」来表示数组:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数组的项中<strong>不允许</strong>出现其他的类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Type &#39;string&#39; is not assignable to type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组的一些方法的参数也会根据数组在定义时约定的类型进行限制:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
fibonacci<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Argument of type &#39;&quot;8&quot;&#39; is not assignable to parameter of type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，<code>push</code> 方法只允许传入 <code>number</code> 类型的参数，但是却传了一个 <code>&quot;8&quot;</code> 类型的参数，所以报错了。这里 <code>&quot;8&quot;</code> 是一个字符串字面量类型，会在后续章节中详细介绍。</p><h2 id="数组泛型" tabindex="-1"><a class="header-anchor" href="#数组泛型" aria-hidden="true">#</a> 数组泛型</h2><p>我们也可以使用数组泛型(Array Generic) <code>Array&lt;elemType&gt;</code> 来表示数组:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),b=t(`<h2 id="用接口表示数组" tabindex="-1"><a class="header-anchor" href="#用接口表示数组" aria-hidden="true">#</a> 用接口表示数组</h2><p>接口也可以用来描述数组:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">NumberArray</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> fibonacci<span class="token operator">:</span> NumberArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NumberArray</code> 表示: 只要索引的类型是数字时，那么值的类型必须是数字。</p><p>虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。</p><p>不过有一种情况例外，那就是它常用来表示类数组。</p><h2 id="类数组" tabindex="-1"><a class="header-anchor" href="#类数组" aria-hidden="true">#</a> 类数组</h2><p>类数组(Array-like Object)不是数组类型，比如 <code>arguments</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> args<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Type &#39;IArguments&#39; is missing the following properties from type &#39;number[]&#39;: pop, push, concat, join, and 24 more.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，<code>arguments</code> 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> args<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    callee<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 <code>length</code> 和 <code>callee</code> 两个属性。</p><p>事实上常用的类数组都有自己的接口定义，如 <code>IArguments</code>, <code>NodeList</code>, <code>HTMLCollection</code> 等:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> args<span class="token operator">:</span> IArguments <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>IArguments</code> 是 TypeScript 中定义好了的类型，它实际上就是:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IArguments</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  callee<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),v=t(`<h2 id="any-在数组中的应用" tabindex="-1"><a class="header-anchor" href="#any-在数组中的应用" aria-hidden="true">#</a> any 在数组中的应用</h2><p>一个比较常见的做法是，用 <code>any</code> 表示数组中允许出现任意类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;xcatliu&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> website<span class="token operator">:</span> <span class="token string">&quot;http://xcatliu.com&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,4),h={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html#array",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E6%95%B0%E7%BB%84",target:"_blank",rel:"noopener noreferrer"},y={href:"http://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"};function _(x,w){const p=c("RouterLink"),e=c("ExternalLinkIcon");return l(),u("div",null,[k,r(" more "),m,s("p",null,[n("关于泛型，可以参考"),a(p,{to:"/code/language/typescript/advanced/generics.html"},{default:o(()=>[n("泛型")]),_:1}),n("一章。")]),b,s("p",null,[n("关于内置对象，可以参考"),a(p,{to:"/code/language/typescript/basics/built-in-objects.html"},{default:o(()=>[n("内置对象")]),_:1}),n("一章。")]),v,s("ul",null,[s("li",null,[s("a",h,[n("Basic Types # Array"),a(e)]),n("("),s("a",g,[n("中文版"),a(e)]),n(")")]),s("li",null,[s("a",y,[n("Interfaces # Indexable Types"),a(e)]),n("("),s("a",f,[n("中文版"),a(e)]),n(")")])])])}const B=i(d,[["render",_],["__file","type-of-array.html.vue"]]);export{B as default};
