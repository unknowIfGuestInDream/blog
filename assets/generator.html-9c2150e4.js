import{_ as p,W as t,X as e,$ as o,Y as n,Z as s,a2 as a}from"./framework-ae009c3e.js";const c={},l=n("p",null,[n("code",null,"generator"),s(" (生成器)是 ES6 标准引入的新的数据类型。一个 "),n("code",null,"generator"),s(" 看上去像一个函数，但可以返回多次。")],-1),i=n("p",null,[s("ES6 定义 "),n("code",null,"generator"),s(" 标准的哥们借鉴了 Python 的 generator 的概念和语法，如果您对 Python 的 generator 很熟悉，那么 ES6 的 generator 就是小菜一碟了。")],-1),u=a(`<p>我们先复习函数的概念。一个函数是一段完整的代码，调用一个函数就是传入参数，然后返回结果:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> x<span class="token punctuation">;</span>

<span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用foo函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数在执行过程中，如果没有遇到 <code>return</code> 语句(函数末尾如果没有 <code>return</code>，就是隐含的 <code>return undefined;</code>)，控制权无法交回被调用的代码。</p><p><code>generator</code> 跟函数很像，定义如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>generator</code> 和函数不同的是，<code>generator</code> 由 <code>function*</code> 定义(注意多出的 <code>*</code> 号)，并且，除了 <code>return</code> 语句，还可以用 <code>yield</code> 返回多次。</p><p>大多数同学立刻就晕了，<code>generator</code> 就是能够返回多次的“函数”? 返回多次有啥用?</p><p>还是举个栗子吧。</p><p>我们以一个著名的斐波那契数列为例，它由 0，1 开头:</p>`,9),r=n("p",{class:"katex-block"},[n("span",{class:"katex-display"},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0"),n("mspace",{width:"1em"}),n("mn",null,"1"),n("mspace",{width:"1em"}),n("mn",null,"1"),n("mspace",{width:"1em"}),n("mn",null,"2"),n("mspace",{width:"1em"}),n("mn",null,"3"),n("mspace",{width:"1em"}),n("mn",null,"5"),n("mspace",{width:"1em"}),n("mn",null,"8"),n("mspace",{width:"1em"}),n("mn",null,"13"),n("mspace",{width:"1em"}),n("mi",{mathvariant:"normal"},"."),n("mi",{mathvariant:"normal"},"."),n("mi",{mathvariant:"normal"},".")]),n("annotation",{encoding:"application/x-tex"}," 0\\quad1\\quad1\\quad2\\quad3\\quad5\\quad8\\quad13\\quad... ")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"0"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"2"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"3"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"5"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"8"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"13"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"...")])])])])],-1),d=a(`<p>要编写一个产生斐波那契数列的函数，可以这么写:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试:</span>
<span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, 1, 1, 2, 3]</span>
<span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数只能返回一次，所以必须返回一个 Array。但是，如果换成 generator，就可以一次返回一个数，不断返回多次。用 generator 改写如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
    n<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接调用试试:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fib {[[GeneratorStatus]]: &quot;suspended&quot;, [[GeneratorReceiver]]: Window}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接调用一个 <code>generator</code> 和调用函数不一样，<code>fib(5)</code> 仅仅是创建了一个 <code>generator</code> 对象，还没有去执行它。</p><p>调用 <code>generator</code> 对象有两个方法，一是不断地调用 <code>generator</code> 对象的 <code>next()</code> 方法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 0, done: false}</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 1, done: false}</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 1, done: false}</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 2, done: false}</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 3, done: false}</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: undefined, done: true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>next()</code> 方法会执行 <code>generator</code> 的代码，然后，每次遇到 <code>yield x;</code> 就返回一个对象 <code>{value: x, done: true/false}</code>，然后“暂停”。返回的 <code>value</code> 就是 <code>yield</code> 的返回值，<code>done</code> 表示这个 <code>generator</code> 是否已经执行结束了。如果 <code>done</code> 为 <code>true</code>，则 <code>value</code> 就是 <code>return</code> 的返回值。</p><p>当执行到 <code>done</code> 为 <code>true</code> 时，这个 generator 对象就已经全部执行完毕，不要再继续调用 <code>next()</code> 了。</p><p>第二个方法是直接用 <code>for ... of</code> 循环迭代 generator 对象，这种方式不需要我们自己判断 <code>done</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
    n<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 依次输出0, 1, 1, 2, 3, ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">generator 和普通函数相比，有什么用?</p><p>因为 generator 可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，利用这一点，写一个 generator 就可以实现需要用面向对象才能实现的功能。例如，用一个对象来保存状态，得这么写:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fib <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">;</span>
    <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> t<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>n <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> r<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用对象的属性来保存状态，相当繁琐。</p><p>Generator 还有另一个巨大的好处，就是把异步回调代码变成“同步”代码。这个好处要等到后面学了 Ajax 以后才能体会到。</p><p>没有 generator 之前的黑暗时代，用 Ajax 时需要这么写代码:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-1&#39;</span><span class="token punctuation">,</span> data1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-2&#39;</span><span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-3&#39;</span><span class="token punctuation">,</span> data3<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      err<span class="token operator">?</span> <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">success</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回调越多，代码越难看。</p><p>有了 generator 的美好时代，用 Ajax 时可以这么写:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  r1 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-1&#39;</span><span class="token punctuation">,</span> data1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  r2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-2&#39;</span><span class="token punctuation">,</span> data2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  r3 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-3&#39;</span><span class="token punctuation">,</span> data3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">success</span><span class="token punctuation">(</span>r3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看上去是同步的代码，实际执行是异步的。</p></div>`,14);function k(m,v){return t(),e("div",null,[l,i,o(" more "),u,r,d])}const g=p(c,[["render",k],["__file","generator.html.vue"]]);export{g as default};
