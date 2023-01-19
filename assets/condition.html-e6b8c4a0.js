import{_ as a,W as e,X as p,$ as t,Y as n,Z as s,a2 as o}from"./framework-0e132572.js";const c={},l=n("p",null,"计算机之所以能做很多自动化的任务，因为它可以自己做条件判断。",-1),i=n("p",null,[s("比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 "),n("code",null,"if"),s(" 语句实现:")],-1),d=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;your age is&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据 Python 的缩进规则，如果 <code>if</code> 语句判断是 <code>True</code>，就把缩进的两行 <code>print</code> 语句执行了，否则，什么也不做。</p><p>也可以给 <code>if</code> 添加一个 <code>else</code> 语句，意思是，如果 <code>if</code> 判断是 <code>False</code>，不要执行 <code>if</code> 的内容，去把 <code>else</code> 执行了:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;your age is&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;your age is&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teenager&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意不要少写了冒号 <code>:</code>。</p><p>当然上面的判断是很粗略的，完全可以用 <code>elif</code> 做更细致的判断:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> age <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teenager&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;kid&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>elif</code> 是 <code>else if</code> 的缩写，完全可以有多个 <code>elif</code>，所以 <code>if</code> 语句的完整形式就是:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> <span class="token operator">&lt;</span>条件判断<span class="token number">1</span><span class="token operator">&gt;</span><span class="token punctuation">:</span>
    <span class="token operator">&lt;</span>执行<span class="token number">1</span><span class="token operator">&gt;</span>
<span class="token keyword">elif</span> <span class="token operator">&lt;</span>条件判断<span class="token number">2</span><span class="token operator">&gt;</span><span class="token punctuation">:</span>
    <span class="token operator">&lt;</span>执行<span class="token number">2</span><span class="token operator">&gt;</span>
<span class="token keyword">elif</span> <span class="token operator">&lt;</span>条件判断<span class="token number">3</span><span class="token operator">&gt;</span><span class="token punctuation">:</span>
    <span class="token operator">&lt;</span>执行<span class="token number">3</span><span class="token operator">&gt;</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token operator">&lt;</span>执行<span class="token number">4</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if</code> 语句执行有个特点，它是从上往下判断，如果在某个判断上是 <code>True</code>，把该判断对应的语句执行后，就忽略掉剩下的 <code>elif</code> 和 <code>else</code>，所以，请测试并解释为什么下面的程序打印的是 <code>teenager</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teenager&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;kid&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if</code> 判断条件还可以简写，比如写:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> x<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;True&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>只要 <code>x</code> 是非零数值、非空字符串、非空 list 等，就判断为 <code>True</code>，否则为 <code>False</code>。</p><h2 id="再议-input" tabindex="-1"><a class="header-anchor" href="#再议-input" aria-hidden="true">#</a> 再议 input</h2><p>最后看一个有问题的条件判断。很多同学会用 <code>input()</code> 读取用户的输入，这样可以自己输入，程序运行得更有意思:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>birth <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;birth: &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> birth <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00前&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00后&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 1982，结果报错:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
TypeError: unorderable types: str<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> int<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 <code>input()</code> 返回的数据类型是 <code>str</code>，<code>str</code> 不能直接和整数比较，必须先把 <code>str</code> 转换成整数。Python 提供了 <code>int()</code> 函数来完成这件事情:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;birth: &#39;</span><span class="token punctuation">)</span>
birth <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">if</span> birth <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00前&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00后&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次运行，就可以得到正确地结果。但是，如果输入 <code>abc</code> 呢? 又会得到一个错误信息:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
ValueError: invalid literal <span class="token keyword">for</span> int<span class="token punctuation">(</span><span class="token punctuation">)</span> with base <span class="token number">10</span>: <span class="token string">&#39;abc&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原来 <code>int()</code> 函数发现一个字符串并不是合法的数字时就会报错，程序就退出了。</p><p>如何检查并捕获程序运行期的错误呢? 后面的错误和调试会讲到。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>条件判断可以让计算机自己做选择，Python 的 <code>if...elif...else</code> 很灵活。</p><p>条件判断从上向下匹配，当满足条件时执行对应的块内语句，后续的 <code>elif</code> 和 <code>else</code> 都不再执行。</p>`,28);function r(u,k){return e(),p("div",null,[l,i,t(" more "),d])}const m=a(c,[["render",r],["__file","condition.html.vue"]]);export{m as default};
