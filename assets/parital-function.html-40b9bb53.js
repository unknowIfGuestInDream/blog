import{_ as n,W as s,X as a,a2 as e}from"./framework-8ee916d6.js";const p={},t=e(`<p>Python 的 <code>functools</code> 模块提供了很多有用的功能，其中一个就是偏函数 (Partial function) 。</p><div class="custom-container tip"><p class="custom-container-title">ヒント</p><p>要注意，这里的偏函数和数学意义上的偏函数不一样。</p></div><p>在介绍函数参数的时候，我们讲到，通过设定参数的默认值，可以降低函数调用的难度。而偏函数也可以做到这一点。举例如下:</p><p><code>int()</code> 函数可以把字符串转换为整数，当仅传入字符串时，<code>int()</code> 函数默认按十进制转换:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;12345&#39;</span><span class="token punctuation">)</span>
<span class="token number">12345</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但 <code>int()</code> 函数还提供额外的 <code>base</code> 参数，默认值为 <code>10</code>。如果传入 <code>base</code> 参数，就可以做 N 进制的转换:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;12345&#39;</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>
<span class="token number">5349</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;12345&#39;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
<span class="token number">74565</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设要转换大量的二进制字符串，每次都传入 <code>int(x, base=2)</code> 非常麻烦，于是，我们想到，可以定义一个 <code>int2()</code> 的函数，默认把 <code>base=2</code> 传进去:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">int2</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> base<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们转换二进制就非常方便了:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1000000&#39;</span><span class="token punctuation">)</span>
<span class="token number">64</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1010101&#39;</span><span class="token punctuation">)</span>
<span class="token number">85</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>functools.partial</code> 就是帮助我们创建一个偏函数的，不需要我们自己定义 <code>int2()</code>，可以直接使用下面的代码创建一个新的函数 <code>int2</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> functools
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2 <span class="token operator">=</span> functools<span class="token punctuation">.</span>partial<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1000000&#39;</span><span class="token punctuation">)</span>
<span class="token number">64</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1010101&#39;</span><span class="token punctuation">)</span>
<span class="token number">85</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，简单总结 <code>functools.partial</code> 的作用就是，把一个函数的某些参数给固定住 (也就是设置默认值) ，返回一个新的函数，调用这个新函数会更简单。</p><p>注意到上面的新的 <code>int2</code> 函数，仅仅是把 <code>base</code> 参数重新设定默认值为 <code>2</code>，但也可以在函数调用时传入其他值:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1000000&#39;</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token number">1000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，创建偏函数时，实际上可以接收函数对象、<code>*args</code> 和 <code>**kw</code> 这 3 个参数，当传入:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>int2 <span class="token operator">=</span> functools<span class="token punctuation">.</span>partial<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际上固定了 <code>int()</code> 函数的关键字参数 <code>base</code>，也就是:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>int2<span class="token punctuation">(</span><span class="token string">&#39;10010&#39;</span><span class="token punctuation">)</span>
相当于<span class="token punctuation">:</span>

kw <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;10010&#39;</span><span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当传入:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>max2 <span class="token operator">=</span> functools<span class="token punctuation">.</span>partial<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际上会把 10 作为 <code>*args</code> 的一部分自动加到左边，也就是:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>max2<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相当于:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>args <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
<span class="token builtin">max</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为 <code>10</code>。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>当函数的参数个数太多，需要简化时，使用 <code>functools.partial</code> 可以创建一个新的函数，这个新函数可以固定住原函数的部分参数，从而在调用时更简单。</p>`,29),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","parital-function.html.vue"]]);export{d as default};
