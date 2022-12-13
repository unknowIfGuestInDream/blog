import{_ as a,W as o,X as c,$ as t,Y as n,Z as e,a0 as p,a2 as i,E as d}from"./framework-ae009c3e.js";const l={},u=n("p",null,"JavaScript 语言的每一个值，都属于某一种数据类型。",-1),r=i(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>JavaScript 的数据类型，共有六种。(ES6 又新增了第七种 Symbol 类型的值，本教程不涉及。)</p><ul><li>数值(number): 整数和小数(比如 <code>1</code> 和 <code>3.14</code>)</li><li>字符串(string): 文本(比如 <code>Hello World</code>)。</li><li>布尔值(boolean): 表示真伪的两个特殊值，即 <code>true</code>(真)和 <code>false</code>(假)</li><li><code>undefined</code>: 表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值</li><li><code>null</code>: 表示空值，即此处的值为空。</li><li>对象(object): 各种值组成的集合。</li></ul><p>通常，数值、字符串、布尔值这三种类型，合称为原始类型(primitive type)的值，即它们是最基本的数据类型，不能再细分了。对象则称为合成类型(complex type)的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。至于 <code>undefined</code> 和 <code>null</code>，一般将它们看成两个特殊值。</p><p>对象是最复杂的数据类型，又可以分成三个子类型。</p><ul><li>狭义的对象(object)</li><li>数组(array)</li><li>函数(function)</li></ul><p>狭义的对象和数组是两种不同的数据组合方式，除非特别声明，本教程的“对象”都特指狭义的对象。函数其实是处理数据的方法，JavaScript 把它当成一种数据类型，可以赋值给变量，这为编程带来了很大的灵活性，也为 JavaScript 的“函数式编程”奠定了基础。</p><h2 id="typeof-运算符" tabindex="-1"><a class="header-anchor" href="#typeof-运算符" aria-hidden="true">#</a> typeof 运算符</h2><p>JavaScript 有三种方法，可以确定一个值到底是什么类型。</p><ul><li><code>typeof</code> 运算符</li><li><code>instanceof</code> 运算符</li><li><code>Object.prototype.toString</code> 方法</li></ul><p><code>instanceof</code> 运算符和 <code>Object.prototype.toString</code> 方法，将在后文介绍。这里介绍 <code>typeof</code> 运算符。</p><p><code>typeof</code> 运算符可以返回一个值的数据类型。</p><p>数值、字符串、布尔值分别返回 <code>number</code>、<code>string</code>、<code>boolean</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// &quot;number&quot;</span>
<span class="token keyword">typeof</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;string&quot;</span>
<span class="token keyword">typeof</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// &quot;boolean&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数返回 <code>function</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">typeof</span> f<span class="token punctuation">;</span>
<span class="token comment">// &quot;function&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>undefined</code> 返回 <code>undefined</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;undefined&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这一点，<code>typeof</code> 可以用来检查一个没有声明的变量，而不报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>v<span class="token punctuation">;</span>
<span class="token comment">// ReferenceError: v is not defined</span>

<span class="token keyword">typeof</span> v<span class="token punctuation">;</span>
<span class="token comment">// &quot;undefined&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，变量 <code>v</code> 没有用 <code>const</code> <code>var</code> 或 <code>let</code> 命令声明，直接使用就会报错。但是，放在 <code>typeof</code> 后面，就不报错了，而是返回 <code>undefined</code>。</p><p>实际编程中，这个特点通常用在判断语句。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 错误的写法</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token comment">// ReferenceError: v is not defined</span>

<span class="token comment">// 正确的写法</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> v <span class="token operator">===</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象返回 <code>object</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> window<span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，空数组(<code>[]</code>)的类型也是 <code>object</code>，这表示在 JavaScript 内部，数组本质上只是一种特殊的对象。这里顺便提一下，<code>instanceof</code> 运算符可以区分数组和对象。<code>instanceof</code> 运算符的详细解释，请见《面向对象编程》一章。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

o <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
a <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>null</code> 返回 <code>object</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>null</code> 的类型是 <code>object</code>，这是由于历史原因造成的。1995 年的 JavaScript 语言第一版，只设计了五种数据类型(对象、整数、浮点数、字符串和布尔值)，没考虑 <code>null</code>，只把它当作 <code>object</code> 的一种特殊值。后来 <code>null</code> 独立出来，作为一种单独的数据类型，为了兼容以前的代码，<code>typeof null</code> 返回 <code>object</code> 就没法改变了。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,31),v={href:"http://www.2ality.com/2011/11/improving-typeof.html",target:"_blank",rel:"noopener noreferrer"};function m(k,b){const s=d("ExternalLinkIcon");return o(),c("div",null,[u,t(" more "),r,n("ul",null,[n("li",null,[e("Axel Rauschmayer, "),n("a",v,[e("Improving the JavaScript typeof operator"),p(s)])])])])}const y=a(l,[["render",m],["__file","general.html.vue"]]);export{y as default};
