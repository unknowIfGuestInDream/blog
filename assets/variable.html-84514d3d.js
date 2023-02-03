import{_ as a,W as n,X as s,$ as e,Y as c,a2 as t}from"./framework-4fdeb3a3.js";const o={},p=c("p",null,"变量的概念基本上和初中代数的方程变量是一致的，只是在计算机程序中，变量不仅可以是数字，还可以是任意数据类型。",-1),i=t(`<h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2><p>标识符 (identifier) 指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。JavaScript 语言的标识符对大小写敏感，所以 <code>a</code> 和 <code>A</code> 是两个不同的标识符。</p><p>标识符有一套命名规则，不符合规则的就是非法标识符。JavaScript 引擎遇到非法标识符，就会报错。</p><p>简单说，标识符命名规则如下。</p><ul><li>第一个字符，可以是任意 Unicode 字母(包括英文字母和其他语言的字母)，以及美元符号 (<code>$</code>) 和下划线 (<code>_</code>)。</li><li>第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字 <code>0-9</code>。</li></ul><p>下面这些都是合法的标识符。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>arg0<span class="token punctuation">;</span>
_tmp<span class="token punctuation">;</span>
$elem<span class="token punctuation">;</span>
π<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这些则是不合法的标识符。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>1a  <span class="token comment">// 第一个字符不能是数字</span>
<span class="token number">23</span>  <span class="token comment">// 同上</span>
<span class="token operator">**</span><span class="token operator">*</span>  <span class="token comment">// 标识符不能包含星号</span>
a<span class="token operator">+</span>b  <span class="token comment">// 标识符不能包含加号</span>
<span class="token operator">-</span>d  <span class="token comment">// 标识符不能包含减号或连词线</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中文是合法的标识符，可以用作变量名:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> 临时变量 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>显然老旧的浏览器不会支持这个，所以请不要给自己找麻烦。</p></div><p>另外 JavaScript 有一些 保留字<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>，不能用作标识符。</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>变量在 JavaScript 中用一个合法的标识符表示，在设计之初使用 <code>var</code> 命令。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是由于其带来的不好效果<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>，在后来，JavaScript 更改了声明变量的方式，使用 <code>let</code> 与 <code>const</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a<span class="token punctuation">;</span> <span class="token comment">// 申明了变量 a，此时 a 的值为undefined</span>
<span class="token keyword">let</span> $b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 申明了变量 $b，同时给 $b 赋值，此时 $b 的值为 1</span>
<span class="token keyword">let</span> s_007 <span class="token operator">=</span> <span class="token string">&quot;007&quot;</span><span class="token punctuation">;</span> <span class="token comment">// s_007 是一个字符串</span>
<span class="token keyword">let</span> Answer <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// Answer 是一个布尔值 true</span>
<span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// t的值是 null</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token string">&quot;unknowIfGuestInDream&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 声明了一个常量 person，值为 Mr.Hope</span>
<span class="token keyword">const</span> score <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span> <span class="token comment">// 声明了一个常量 score，值为 500</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p><code>const</code> 代表常量的声明，且该常量必须在一开始就被声明成具体的值，之后该值不再改变。</p></div><p>在 JavaScript 中，使用等号 <code>=</code> 对变量进行赋值。可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用 <code>let</code> 申明一次，例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// a 的值是整数 123</span>
a <span class="token operator">=</span> <span class="token string">&quot;ABC&quot;</span><span class="token punctuation">;</span> <span class="token comment">// a 变为字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如 Java 是静态语言，赋值语句如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>int a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// a 是整数类型变量，类型用 int 申明</span>
a <span class="token operator">=</span> <span class="token string">&quot;ABC&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 错误: 不能把字符串赋给整型变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>和静态语言相比，动态语言更灵活，就是这个原因。</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>由于这个原因，动态语言也更容易出错。目前火热的 TypeScript 正是 JavaScript 的一个超集，类型化了 JavaScript。</p></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>请不要把赋值语句的等号等同于数学的等号。比如下面的代码:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果从数学上理解 <code>x = x + 2</code> 那无论如何是不成立的，在程序中，赋值语句先计算右侧的表达式 <code>x + 2</code>，得到结果 <code>12</code>，再赋给变量 <code>x</code>。由于 <code>x</code> 之前的值是 <code>10</code>，重新赋值后，<code>x</code> 的值变成 <code>12</code>。</p></div><p>要显示变量的内容，可以用 <code>console.log(x)</code>，打开 Chrome 的控制台就可以看到结果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 打印变量 x</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>您可以使用 <code>alert()</code>，使用 <code>console.log()</code> 代替 <code>alert()</code> 的好处是可以避免弹出烦人的对话框。</p></div><p>如果一个变量没有声明就直接使用，JavaScript 会报错，告诉您变量未定义。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>x<span class="token punctuation">;</span>
<span class="token comment">// ReferenceError: x is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="strict-模式" tabindex="-1"><a class="header-anchor" href="#strict-模式" aria-hidden="true">#</a> strict 模式</h2><p>JavaScript 在设计之初甚至并不强制要求用 <code>var</code> 声明变量。这个设计错误带来了严重的后果: 如果一个变量没有通过 <code>var</code> 声明就被使用，那么该变量就自动被声明为全局变量:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// i 现在是全局变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在同一个页面的不同的 JavaScript 文件中，如果都不用 <code>var</code> 申明，恰好都使用了变量 <code>i</code>，将造成变量 <code>i</code> 互相影响，产生难以调试的错误结果。</p><p>使用 <code>var</code> 声明的变量则不是全局变量，它的范围被限制在该变量被声明的函数体内(函数的概念将稍后讲解)，同名变量在不同的函数体内互不冲突。</p><p>为了修补 JavaScript 这一严重设计缺陷，ECMA 在后续规范中推出了 <code>strict</code> 模式，在 <code>strict</code> 模式下运行的 <code>JavaScript</code> 代码，强制使用变量前声明变量，未声明变量就使用的，将导致运行错误。</p><p>启用 <code>strict</code> 模式的方法是在 JavaScript 代码的第一行写上:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是一个字符串，不支持 <code>strict</code> 模式的浏览器会把它当做一个字符串语句执行，支持 <code>strict</code> 模式的浏览器将开启 <code>strict</code> 模式运行 JavaScript。</p><p>不用 <code>var</code> 声明的变量会被视为全局变量，为了避免这一缺陷，所有的 JavaScript 代码都应该使用 <code>strict</code> 模式。我们在后面编写的 JavaScript 代码将全部采用 <code>strict</code> 模式。</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>微信小程序默认执行 <code>use strict</code>。而且 Mr.Hope 所有的项目都是在严格环境下执行。大家在学习时也强烈建议开启该环境模式。</p></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>JavaScript 的保留字:</p><p>arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>历史遗留问题-变量提升</p><p>JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升(hoisting)。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码首先使用 <code>console.log</code> 方法，在控制台(console)显示变量 <code>a</code> 的值。这时变量 <code>a</code> 还没有声明和赋值，所以这是一种错误的做法，但是实际上不会报错。因为存在变量提升，真正运行的是下面的代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后的结果是显示 <code>undefined</code>，表示变量 <code>a</code> 已声明，但还未赋值。</p><p>为了解决这个问题，ES6 中新规范的 <code>let</code> 和 <code>const</code> 命令遇到类似问题直接报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught ReferenceError: Cannot access &#39;a&#39; before initialization</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></li></ol></section>`,44);function l(d,r){return n(),s("div",null,[p,e(" more "),i])}const v=a(o,[["render",l],["__file","variable.html.vue"]]);export{v as default};
