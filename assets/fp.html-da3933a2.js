import{_ as n,W as s,X as a,a2 as p}from"./framework-d8ef9316.js";const t={},o=p(`<h1 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a> 函数式编程</h1><p>JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，您可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。</p><p>ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本章介绍 ES6 如何进行函数式编程。</p><h2 id="柯里化" tabindex="-1"><a class="header-anchor" href="#柯里化" aria-hidden="true">#</a> 柯里化</h2><p>柯里化(currying)指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数(unary)。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>add</code> 接受两个参数 <code>a</code> 和 <code>b</code>。</p><p>柯里化就是将上面的函数拆分成两个函数，每个函数都只接受一个参数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 或者采用箭头函数写法</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>

<span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>add</code> 只接受一个参数 <code>a</code>，返回一个函数 <code>f</code>。函数 <code>f</code> 也只接受一个参数 <code>b</code>。</p><h2 id="函数合成" tabindex="-1"><a class="header-anchor" href="#函数合成" aria-hidden="true">#</a> 函数合成</h2><p>函数合成(function composition)指的是，将多个函数合成一个函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">g</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>compose</code> 就是一个函数合成器，用于将两个函数合成一个函数。</p><p>可以发现，柯里化与函数合成有着密切的联系。前者用于将一个函数拆成多个函数，后者用于将多个函数合并成一个函数。</p><h2 id="参数倒置" tabindex="-1"><a class="header-anchor" href="#参数倒置" aria-hidden="true">#</a> 参数倒置</h2><p>参数倒置(flip)指的是改变函数前两个参数的顺序。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">divide</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">/</span> b<span class="token punctuation">;</span>
<span class="token keyword">let</span> flip <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span>divide<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">flip</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.5</span>
<span class="token function">flip</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>

<span class="token keyword">let</span> <span class="token function-variable function">three</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> flip <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span>three<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">flip</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; [2, 1, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，如果按照正常的参数顺序，10 除以 5 等于 2。但是，参数倒置以后得到的新函数，结果就是 5 除以 10，结果得到 0.5。如果原函数有 3 个参数，则只颠倒前两个参数的位置。</p><p>参数倒置的代码非常简单。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function-variable function">flip</span> <span class="token operator">=</span>
  <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行边界" tabindex="-1"><a class="header-anchor" href="#执行边界" aria-hidden="true">#</a> 执行边界</h2><p>执行边界(until)指的是函数执行到满足条件为止。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">condition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">inc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> until <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">until</span><span class="token punctuation">(</span>condition<span class="token punctuation">,</span> inc<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">until</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 101</span>

<span class="token function-variable function">condition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">===</span> <span class="token number">5</span><span class="token punctuation">;</span>
until <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">until</span><span class="token punctuation">(</span>condition<span class="token punctuation">,</span> inc<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">until</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，第一段的条件是执行到 <code>x</code> 大于 100 为止，所以 <code>x</code> 初值为 0 时，会一直执行到 101。第二段的条件是执行到等于 5 为止，所以 <code>x</code> 最后的值是 5。</p><p>执行边界的实现如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function-variable function">until</span> <span class="token operator">=</span>
  <span class="token punctuation">(</span><span class="token parameter">condition<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">condition</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">?</span> r <span class="token operator">:</span> f<span class="token punctuation">.</span><span class="token function">until</span><span class="token punctuation">(</span>condition<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的关键就是，如果满足条件就返回结果，否则不断递归执行。</p><h2 id="队列操作" tabindex="-1"><a class="header-anchor" href="#队列操作" aria-hidden="true">#</a> 队列操作</h2><p>队列(list)操作包括以下几种。</p><ul><li><code>head</code>: 取出队列的第一个非空成员。</li><li><code>last</code>: 取出有限队列的最后一个非空成员。</li><li><code>tail</code>: 取出除了“队列头”以外的其他非空成员。</li><li><code>init</code>: 取出除了“队列尾”以外的其他非空成员。</li></ul><p>下面是例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>f<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
f<span class="token punctuation">.</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
f<span class="token punctuation">.</span><span class="token function">tail</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [27, 3, 1]</span>
f<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [5, 27, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些方法的实现如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function-variable function">head</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>xs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> xs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function-variable function">last</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>xs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> xs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function-variable function">tail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>xs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>xs<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>xs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> xs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并操作" tabindex="-1"><a class="header-anchor" href="#合并操作" aria-hidden="true">#</a> 合并操作</h2><p>合并操作分为 <code>concat</code> 和 <code>concatMap</code> 两种。前者就是将多个数组合成一个，后者则是先处理一下参数，然后再将处理结果合成一个数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>f<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [5, 27, 3]</span>
f<span class="token punctuation">.</span><span class="token function">concatMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;hi &quot;</span> <span class="token operator">+</span> x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;hi 1&#39;, &#39;hi 2&#39;, &#39;hi 3&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种方法的实现代码如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function-variable function">concat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>xs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> xs<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function-variable function">concatMap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">f<span class="token punctuation">,</span> <span class="token operator">...</span>xs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> f<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>xs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配对操作" tabindex="-1"><a class="header-anchor" href="#配对操作" aria-hidden="true">#</a> 配对操作</h2><p>配对操作分为 <code>zip</code> 和 <code>zipWith</code> 两种方法。<code>zip</code> 操作将两个队列的成员，一一配对，合成一个新的队列。如果两个队列不等长，较长的那个队列多出来的成员，会被忽略。<code>zipWith</code> 操作的第一个参数是一个函数，然后会将后面的队列成员一一配对，输入该函数，返回值就组成一个新的队列。</p><p>下面是例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

f<span class="token punctuation">.</span><span class="token function">zip</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [[0, 3], [1, 4], [2, 5]]</span>
f<span class="token punctuation">.</span><span class="token function">zipWith</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [9, 12, 15]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>zipWith</code> 方法的第一个参数是一个求和函数，它将后面三个队列的成员，一一配对进行相加。</p><p>这两个方法的实现如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

f<span class="token punctuation">.</span><span class="token function-variable function">zip</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>xs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> nple <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> length <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    xs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    xs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> nple<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    r<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nple<span class="token punctuation">)</span><span class="token punctuation">;</span>
    nple <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> r<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

f<span class="token punctuation">.</span><span class="token function-variable function">zipWith</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">op<span class="token punctuation">,</span> <span class="token operator">...</span>xs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> f<span class="token punctuation">.</span><span class="token function">zip</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> xs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","fp.html.vue"]]);export{k as default};
