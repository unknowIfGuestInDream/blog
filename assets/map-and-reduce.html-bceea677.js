import{_ as p,W as e,X as o,Y as n,Z as s,a0 as c,$ as l,a2 as a,E as u}from"./framework-fec69ff1.js";const i={},r=n("p",null,[s("Python 内建了 "),n("code",null,"map()"),s(" 和 "),n("code",null,"reduce()"),s(" 函数。")],-1),k={href:"http://research.google.com/archive/mapreduce.html",target:"_blank",rel:"noopener noreferrer"},d=n("blockquote",null,[n("p",null,"访问需要科学上网。")],-1),m=n("p",null,[s("我们先看 map。"),n("code",null,"map()"),s(" 函数接收两个参数，一个是函数，一个是 "),n("code",null,"Iterable"),s("，map 将传入的函数依次作用到序列的每个元素，并把结果作为新的 "),n("code",null,"Iterator"),s(" 返回。")],-1),b=n("p",null,[s("举例说明，比如我们有一个函数 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"f"),n("mo",{stretchy:"false"},"("),n("mi",null,"x"),n("mo",{stretchy:"false"},")"),n("mo",null,"="),n("msup",null,[n("mi",null,"x"),n("mn",null,"2")])]),n("annotation",{encoding:"application/x-tex"},"f(x)=x^2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"x"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"x"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])])])])]),s(" ，要把这个函数作用在一个 list "),n("code",null,"[1, 2, 3, 4, 5, 6, 7, 8, 9]"),s(" 上，就可以用 "),n("code",null,"map()"),s(" 实现如下:")],-1),v=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            f(x) = x * x

                  │
                  │
  ┌───┬───┬───┬───┼───┬───┬───┬───┐
  │   │   │   │   │   │   │   │   │
  ▼   ▼   ▼   ▼   ▼   ▼   ▼   ▼   ▼

[ 1   2   3   4   5   6   7   8   9 ]

  │   │   │   │   │   │   │   │   │
  │   │   │   │   │   │   │   │   │
  ▼   ▼   ▼   ▼   ▼   ▼   ▼   ▼   ▼

[ 1   4   9  16  25  36  49  64  81 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们用 Python 代码实现:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> x <span class="token operator">*</span> x
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g=n("p",null,[n("code",null,"map()"),s(" 传入的第一个参数是 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"f")]),n("annotation",{encoding:"application/x-tex"},"f")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f")])])]),s(" ，即函数对象本身。由于结果 "),n("code",null,"r"),s(" 是一个 Iterator，Iterator 是惰性序列，因此通过 "),n("code",null,"list()"),s(" 函数让它把整个序列都计算出来并返回一个 list。")],-1),h=a(`<p>您可能会想，不需要 <code>map()</code> 函数，写一个循环，也可以计算出结果:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    L<span class="token punctuation">.</span>append<span class="token punctuation">(</span>f<span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y=n("p",null,[s("的确可以，但是，从上面的循环代码，能一眼看明白“把 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"f"),n("mo",{stretchy:"false"},"("),n("mi",null,"x"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"f(x)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"x"),n("span",{class:"mclose"},")")])])]),s(" 作用在 list 的每一个元素并把结果生成一个新的 list”吗?")],-1),x=n("p",null,[s("所以，"),n("code",null,"map()"),s(" 作为高阶函数，事实上它把运算规则抽象了，因此，我们不但可以计算简单的 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"f"),n("mo",{stretchy:"false"},"("),n("mi",null,"x"),n("mo",{stretchy:"false"},")"),n("mo",null,"="),n("msup",null,[n("mi",null,"x"),n("mn",null,"2")])]),n("annotation",{encoding:"application/x-tex"},"f(x)=x^2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"x"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"x"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])])])])]),s(" ，还可以计算任意复杂的函数，比如，把这个 list 所有数字转为字符串:")],-1),f=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要一行代码。</p><p>再看 <code>reduce</code> 的用法。<code>reduce</code> 把一个函数作用在一个序列 <code>[x1, x2, x3, ...]</code> 上，这个函数必须接收两个参数，<code>reduce</code> 把结果继续和序列的下一个元素做累积计算，其效果就是:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">reduce</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token punctuation">[</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> x3<span class="token punctuation">,</span> x4<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> f<span class="token punctuation">(</span>f<span class="token punctuation">(</span>f<span class="token punctuation">(</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">)</span><span class="token punctuation">,</span> x3<span class="token punctuation">)</span><span class="token punctuation">,</span> x4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比方说对一个序列求和，就可以用 reduce 实现:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token number">25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然求和运算可以直接用 Python 内建函数 <code>sum()</code>，没必要动用 <code>reduce</code>。</p><p>但是如果要把序列 <code>[1, 3, 5, 7, 9]</code> 变换成整数 13579，<code>reduce</code> 就可以派上用场:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> x <span class="token operator">*</span><span class="token number">10</span> <span class="token operator">+</span> y
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token number">13579</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子本身没多大用处，但是，如果考虑到字符串 <code>str</code> 也是一个序列，对上面的例子稍加改动，配合 <code>map()</code>，我们就可以写出把 <code>str</code> 转换为 <code>int</code> 的函数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> x<span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> y
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">char2num</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     digits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">}</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> digits<span class="token punctuation">[</span>s<span class="token punctuation">]</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token builtin">map</span><span class="token punctuation">(</span>char2num<span class="token punctuation">,</span> <span class="token string">&#39;13579&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">13579</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整理成一个 <code>str2int</code> 的函数就是:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>

DIGITS <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">}</span>

<span class="token keyword">def</span> <span class="token function">str2int</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> y
    <span class="token keyword">def</span> <span class="token function">char2num</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> DIGITS<span class="token punctuation">[</span>s<span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token builtin">map</span><span class="token punctuation">(</span>char2num<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以用 lambda 函数进一步简化成:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>

DIGITS <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">}</span>

<span class="token keyword">def</span> <span class="token function">char2num</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> DIGITS<span class="token punctuation">[</span>s<span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">str2int</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> x <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> y<span class="token punctuation">,</span> <span class="token builtin">map</span><span class="token punctuation">(</span>char2num<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，假设 Python 没有提供 <code>int()</code> 函数，您完全可以自己写一个把字符串转化为整数的函数，而且只需要几行代码!</p><p>lambda 函数的用法在后面介绍。</p>`,17);function w(_,I){const t=u("ExternalLinkIcon");return e(),o("div",null,[r,n("p",null,[s("如果您读过 Google 的那篇大名鼎鼎的论文 "),n("a",k,[s("“MapReduce: Simplified Data Processing on Large Clusters”"),c(t)]),s("，您就能大概明白 map / reduce 的概念。")]),d,l(" more "),m,b,v,g,h,y,x,f])}const L=p(i,[["render",w],["__file","map-and-reduce.html.vue"]]);export{L as default};
