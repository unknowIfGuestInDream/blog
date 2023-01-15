import{_ as n,W as s,X as a,a2 as e}from"./framework-b343ad39.js";const p={},t=e(`<p>Python 内建的 <code>filter()</code> 函数用于过滤序列。</p><p>和 <code>map()</code> 类似，<code>filter()</code> 也接收一个函数和一个序列。和 <code>map()</code> 不同的是，<code>filter()</code> 把传入的函数依次作用于每个元素，然后根据返回值是 <code>True</code> 还是 <code>False</code> 决定保留还是丢弃该元素。</p><p>例如，在一个 list 中，删掉偶数，只保留奇数，可以这么写:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">is_odd</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span>

<span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">filter</span><span class="token punctuation">(</span>is_odd<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 结果: [1, 5, 9, 15]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把一个序列中的空字符串删掉，可以这么写:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">not_empty</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> s <span class="token keyword">and</span> s<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">filter</span><span class="token punctuation">(</span>not_empty<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;  &#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 结果: [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见用 <code>filter()</code> 这个高阶函数，关键在于正确实现一个“筛选”函数。</p><p>注意到 <code>filter()</code> 函数返回的是一个 Iterator，也就是一个惰性序列，所以要强迫 <code>filter()</code> 完成计算结果，需要用 <code>list()</code> 函数获得所有结果并返回 list。</p><h2 id="用-filter-求素数" tabindex="-1"><a class="header-anchor" href="#用-filter-求素数" aria-hidden="true">#</a> 用 filter 求素数</h2><p>计算素数的一个方法是埃氏筛法，它的算法理解起来非常简单:</p><p>首先，列出从 2 开始的所有自然数，构造一个序列:</p><p>2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...</p><p>取序列的第一个数 2，它一定是素数，然后用 2 把序列的 2 的倍数筛掉:</p><p>3, <s>4</s>, 5, <s>6</s>, 7, <s>8</s>, 9, <s>10</s>, 11, <s>12</s>, 13, <s>14</s>, 15, <s>16</s>, 17, <s>18</s>, 19, <s>20</s>, ...</p><p>取新序列的第一个数 3，它一定是素数，然后用 3 把序列的 3 的倍数筛掉:</p><p>5, <s>6</s>, 7, <s>8</s>, <s>9</s>, <s>10</s>, 11, <s>12</s>, 13, <s>14</s>, <s>15</s>, <s>16</s>, 17, <s>18</s>, 19, <s>20</s>, ...</p><p>取新序列的第一个数 5，然后用 5 把序列的 5 的倍数筛掉:</p><p>7, <s>8</s>, <s>9</s>, <s>10</s>, 11, <s>12</s>, 13, <s>14</s>, <s>15</s>, <s>16</s>, 17, <s>18</s>, 19, <s>20</s>, ...</p><p>不断筛下去，就可以得到所有的素数。</p><p>用 Python 来实现这个算法，可以先构造一个从 3 开始的奇数序列:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">_odd_iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">2</span>
        <span class="token keyword">yield</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意这是一个生成器，并且是一个无限序列。</p><p>然后定义一个筛选函数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">_not_divisible</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">%</span> n <span class="token operator">&gt;</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，定义一个生成器，不断返回下一个素数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">primes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">yield</span> <span class="token number">2</span>
    it <span class="token operator">=</span> _odd_iter<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 初始序列</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        n <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token comment"># 返回序列的第一个数</span>
        <span class="token keyword">yield</span> n
        it <span class="token operator">=</span> <span class="token builtin">filter</span><span class="token punctuation">(</span>_not_divisible<span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> it<span class="token punctuation">)</span> <span class="token comment"># 构造新序列</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个生成器先返回第一个素数 2，然后，利用 <code>filter()</code> 不断产生筛选后的新的序列。</p><p>由于 <code>primes()</code> 也是一个无限序列，所以调用时需要设置一个退出循环的条件:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 打印1000以内的素数</span>

<span class="token keyword">for</span> n <span class="token keyword">in</span> primes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到 Iterator 是惰性计算的序列，所以我们可以用 Python 表示“全体自然数”，“全体素数”这样的序列，而代码非常简洁。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p><code>filter()</code> 的作用是从一个序列中筛出符合条件的元素。由于 <code>filter()</code> 使用了惰性计算，所以只有在取 <code>filter()</code> 结果的时候，才会真正筛选并每次返回下一个筛出的元素。</p>`,32),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","filter.html.vue"]]);export{d as default};
