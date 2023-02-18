import{_ as c,X as l,Y as p,a0 as d,Z as n,a1 as s,a2 as o,a3 as t,$ as a,D as i}from"./framework-a4b0319b.js";const r={},u=t("<p>JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。</p><ul><li>数值 (number): 整数和小数(比如 <code>1</code> 和 <code>3.14</code>)</li><li>字符串 (string): 文本(比如 <code>Hello World</code>)。</li><li>布尔值 (boolean): 表示真伪的两个特殊值，即 <code>true</code> (真) 和 <code>false</code> (假)</li><li><code>undefined</code>: 表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值</li><li><code>null</code>: 表示空值，即此处的值为空。</li><li>对象 (object): 各种值组成的集合。</li></ul>",2),m=t(`<h2 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h2><p>JavaScript 不区分整数和浮点数，统一用 <code>Number</code> 表示，以下都是合法的 <code>Number</code> 类型:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// 整数 123</span>
<span class="token number">0.456</span><span class="token punctuation">;</span> <span class="token comment">// 浮点数 0.456</span>
<span class="token number">1.2345e3</span><span class="token punctuation">;</span> <span class="token comment">// 科学计数法表示 1.2345x1000，等同于 1234.5</span>
<span class="token operator">-</span><span class="token number">99</span><span class="token punctuation">;</span> <span class="token comment">// 负数</span>
<span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// NaN 表示 Not a Number，当无法计算结果时用 NaN 表示</span>
<span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// Infinity 表示无限大，当数值超过了 JavaScript 的 Number 所能表示的最大值时，就表示为 Infinity</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k=n("h2",{id:"字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字符串","aria-hidden":"true"},"#"),a(" 字符串")],-1),v=n("p",null,[a("字符串 (String) 是以单引号 "),n("code",null,"'"),a(" 或双引号 "),n("code",null,'"'),a(" 括起来的任意文本，比如 "),n("code",null,"'abc'"),a("，"),n("code",null,'"xyz"'),a(" 等等。")],-1),b=t(`<h2 id="布尔值" tabindex="-1"><a class="header-anchor" href="#布尔值" aria-hidden="true">#</a> 布尔值</h2><p>布尔值 (Boolean) 和布尔代数的表示完全一致，一个布尔值只有 <code>true</code>、<code>false</code> 两种值，要么是 <code>true</code>，要么是 <code>false</code>，可以直接用 <code>true</code>、<code>false</code> 表示布尔值，也可以通过布尔运算计算出来:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 这是一个 true 值</span>
<span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这是一个 false 值</span>
<span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 这是一个 true 值</span>
<span class="token number">2</span> <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 这是一个 false 值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下列运算符会返回布尔值:</p><ul><li>前置逻辑运算符: <code>!</code> (Not)</li><li>相等运算符: <code>===</code>，<code>!==</code>，<code>==</code>，<code>!=</code></li><li>比较运算符: <code>&gt;</code>，<code>&gt;=</code>，<code>&lt;</code>，<code>&lt;=</code></li></ul><hr>`,6),h=t(`<h2 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined" aria-hidden="true">#</a> null 和 undefined</h2><p><code>null</code> 表示一个 “空” 的值，它和 <code>0</code> 以及空字符串 <code>&#39;&#39;</code> 不同，<code>0</code> 是一个数值，<code>&#39;&#39;</code> 表示长度为 0 的字符串，而 <code>null</code> 表示“空”。</p><p>在其他语言中，也有类似 JavaScript 的 <code>null</code> 的表示，例如 Java 也用 <code>null</code>，Swift 用 <code>nil</code>，Python 用 <code>None</code> 表示。但是，在 JavaScript 中，还有一个和 <code>null</code> 类似的 <code>undefined</code>，它表示 “未定义”。</p><p>JavaScript 的设计者希望用 <code>null</code> 表示一个空的值，而 <code>undefined</code> 表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用 <code>null</code>。<code>undefined</code> 仅仅在判断函数参数是否传递的情况下有用。</p><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>数组 (Array) 是一组<strong>按顺序</strong>排列的<strong>集合</strong>，集合的每个值称为<strong>元素</strong>。JavaScript 的数组可以包括任意数据类型。例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述数组包含 6 个元素。数组用 <code>[]</code> 表示，元素之间用 <code>,</code> 分隔。</p>`,8),g=t(`<h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><p>JavaScript 的对象 (Object) 是一组由 <strong><code>键-值</code></strong> 组成的<strong>无序</strong>集合，例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Mr.Hope&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isHandsome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1998</span><span class="token punctuation">,</span>
  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Middle School&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.76</span><span class="token punctuation">,</span>
  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token literal-property property">car</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript 对象的键都是字符串类型，值可以是任意数据类型。上述 <code>person</code> 对象一共定义了 6 个键值对，其中每个键又称为对象的属性，例如，<code>person</code> 的 <code>name</code> 属性为 <code>&#39;Bob&#39;</code>，<code>zipcode</code> 属性为 <code>null</code>。</p><p>要获取一个对象的属性，我们用 <code>Object.Key</code> 的方式:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>person<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;Mr.Hope&#39;</span>
person<span class="token punctuation">.</span>zipcode<span class="token punctuation">;</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function f(j,_){const e=i("RouterLink");return l(),p("div",null,[u,d(" more "),n("ul",null,[n("li",null,[s(e,{to:"/ja/code/language/js/types/"},{default:o(()=>[a("深入了解数据类型")]),_:1})])]),m,n("ul",null,[n("li",null,[s(e,{to:"/ja/code/language/js/types/number.html"},{default:o(()=>[a("深入了解 Number")]),_:1})])]),k,v,n("ul",null,[n("li",null,[s(e,{to:"/ja/code/language/js/guide/string.html"},{default:o(()=>[a("字符串入门")]),_:1})]),n("li",null,[s(e,{to:"/ja/code/language/js/types/string.html"},{default:o(()=>[a("深入了解 String")]),_:1})])]),b,n("ul",null,[n("li",null,[s(e,{to:"/ja/code/language/js/guide/boolean.html"},{default:o(()=>[a("布尔值入门")]),_:1})])]),h,n("ul",null,[n("li",null,[s(e,{to:"/ja/code/language/js/guide/array.html"},{default:o(()=>[a("数组入门")]),_:1})]),n("li",null,[s(e,{to:"/ja/code/language/js/types/array.html"},{default:o(()=>[a("深入了解 Array")]),_:1})])]),g,n("ul",null,[n("li",null,[s(e,{to:"/ja/code/language/js/guide/object.html"},{default:o(()=>[a("对象入门")]),_:1})]),n("li",null,[s(e,{to:"/ja/code/language/js/types/object.html"},{default:o(()=>[a("深入了解 Object")]),_:1})])])])}const N=c(r,[["render",f],["__file","data-structure.html.vue"]]);export{N as default};
