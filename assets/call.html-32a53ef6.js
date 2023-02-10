import{_ as e,X as t,Y as p,Z as s,$ as n,a1 as o,a0 as l,a3 as c,H as i}from"./framework-0ff09816.js";const r={},u=s("p",null,"Python 内置了很多有用的函数，我们可以直接调用。",-1),d=s("code",null,"abs",-1),k={href:"http://docs.python.org/3/library/functions.html#abs",target:"_blank",rel:"noopener noreferrer"},b=c(`<p>也可以在交互式命令行通过 <code>help(abs)</code> 查看 <code>abs</code> 函数的帮助信息。</p><p>调用 <code>abs</code> 函数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token number">100</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token number">20</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token number">12.34</span><span class="token punctuation">)</span>
<span class="token number">12.34</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用函数的时候，如果传入的参数数量不对，会报 <code>TypeError</code> 的错误，并且 Python 会明确地告诉您: <code>abs()</code> 有且仅有 1 个参数，但给出了两个:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> abs<span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
TypeError: abs<span class="token punctuation">(</span><span class="token punctuation">)</span> takes exactly one argument <span class="token punctuation">(</span><span class="token number">2</span> given<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果传入的参数数量是对的，但参数类型不能被函数所接受，也会报 <code>TypeError</code> 的错误，并且给出错误信息: str 是错误的参数类型:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> abs<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
TypeError: bad operand <span class="token builtin class-name">type</span> <span class="token keyword">for</span> abs<span class="token punctuation">(</span><span class="token punctuation">)</span>: <span class="token string">&#39;str&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而 max 函数 <code>max()</code> 可以接收任意多个参数，并返回最大的那个:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">2</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">max</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换" aria-hidden="true">#</a> 数据类型转换</h2><p>Python 内置的常用函数还包括数据类型转换函数，比如 <code>int()</code> 函数可以把其他数据类型转换为整数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
<span class="token number">123</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token number">12.34</span><span class="token punctuation">)</span>
<span class="token number">12</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;12.34&#39;</span><span class="token punctuation">)</span>
<span class="token number">12.34</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">1.23</span><span class="token punctuation">)</span>
<span class="token string">&#39;1.23&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token string">&#39;100&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数名其实就是指向一个函数对象的引用，完全可以把函数名赋给一个变量，相当于给这个函数起了一个“别名”:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token builtin">abs</span> <span class="token comment"># 变量a指向abs函数</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># 所以也可以通过a调用abs函数</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>调用 Python 的函数，需要根据函数定义，传入正确的参数。如果函数调用出错，一定要学会看错误信息，所以英文很重要!</p>`,16);function m(v,g){const a=i("ExternalLinkIcon");return t(),p("div",null,[u,s("p",null,[n("要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数 "),d,n("，只有一个参数。可以直接从 Python 的官方网站 "),s("a",k,[n("查看文档"),o(a)]),n(":")]),l(" more "),b])}const y=e(r,[["render",m],["__file","call.html.vue"]]);export{y as default};
