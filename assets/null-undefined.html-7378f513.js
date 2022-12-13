import{_ as n,W as s,X as a,a2 as e}from"./framework-ae009c3e.js";const c={},o=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><code>null</code> 与 <code>undefined</code> 都可以表示“没有”，含义非常相似。将一个变量赋值为 <code>undefined</code> 或 <code>null</code>，老实说，语法效果几乎没区别。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，变量 <code>a</code> 分别被赋值为 <code>undefined</code> 和 <code>null</code>，这两种写法的效果几乎等价。</p><p>在 <code>if</code> 语句中，它们都会被自动转为 <code>false</code>，相等运算符(<code>==</code>)甚至直接报告两者相等。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;undefined is false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// undefined is false</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;null is false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// null is false</span>

<span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面代码可见，两者的行为是何等相似! 谷歌公司开发的 JavaScript 语言的替代品 Dart 语言，就明确规定只有 <code>null</code>，没有 <code>undefined</code>!</p><p>既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度，令初学者困扰吗? 这与历史原因有关。</p><p>1995 年 JavaScript 诞生时，最初像 Java 一样，只设置了 <code>null</code> 表示&quot;无&quot;。根据 C 语言的传统，<code>null</code> 可以自动转为 <code>0</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token number">5</span> <span class="token operator">+</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>null</code> 转为数字时，自动变成 0。</p><p>但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面，<code>null</code> 就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果 <code>null</code> 自动转为 0，很不容易发现错误。</p><p>因此，他又设计了一个 <code>undefined</code>。区别是这样的: <code>null</code> 是一个表示“空”的对象，转为数值时为 <code>0</code>；<code>undefined</code> 是一个表示&quot;此处无定义&quot;的原始值，转为数值时为 <code>NaN</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
<span class="token number">5</span> <span class="token operator">+</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用法和含义" tabindex="-1"><a class="header-anchor" href="#用法和含义" aria-hidden="true">#</a> 用法和含义</h2><p>对于 <code>null</code> 和 <code>undefined</code>，大致可以像下面这样理解。</p><p><code>null</code> 表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入 <code>null</code>，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入 <code>null</code>，表示未发生错误。</p><p><code>undefined</code> 表示“未定义”，下面是返回 <code>undefined</code> 的典型场景。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 变量声明了，但没有赋值</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>
i<span class="token punctuation">;</span> <span class="token comment">// undefined</span>

<span class="token comment">// 调用函数时，应该提供的参数没有提供，该参数等于 undefined</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>

<span class="token comment">// 对象没有赋值的属性</span>
<span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
o<span class="token punctuation">.</span>p<span class="token punctuation">;</span> <span class="token comment">// undefined</span>

<span class="token comment">// 函数没有返回值时，默认返回 undefined</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[o];function t(l,i){return s(),a("div",null,p)}const u=n(c,[["render",t],["__file","null-undefined.html.vue"]]);export{u as default};
