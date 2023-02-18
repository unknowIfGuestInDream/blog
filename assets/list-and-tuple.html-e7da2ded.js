import{_ as a,a as t}from"./tuple1-a79c90e9.js";import{_ as p,X as e,Y as o,a0 as c,Z as s,$ as n,a3 as l}from"./framework-a4b0319b.js";const i={},r=s("p",null,[s("code",null,"list"),n(" 和 "),s("code",null,"tuple"),n(" 是 Python 中常用的数据结构。")],-1),u=l(`<h2 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h2><p>Python 内置的一种数据类型是列表: list。list 是一种有序的集合，可以随时添加和删除其中的元素。</p><p>比如，列出班里所有同学的名字，就可以用一个 list 表示:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量 <code>classmates</code> 就是一个 list。用 <code>len()</code> 函数可以获得 list 元素的个数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>classmates<span class="token punctuation">)</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用索引来访问 list 中每一个位置的元素，记得索引是从 <code>0</code> 开始的:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token string">&#39;Michael&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token string">&#39;Bob&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token string">&#39;Tracy&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
IndexError<span class="token punctuation">:</span> <span class="token builtin">list</span> index out of <span class="token builtin">range</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当索引超出了范围时，Python 会报一个 <code>IndexError</code> 错误，所以，要确保索引不要越界，记得最后一个元素的索引是 <code>len(classmates) - 1</code>。</p><p>如果要取最后一个元素，除了计算索引位置外，还可以用 <code>-1</code> 做索引，直接获取最后一个元素:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token string">&#39;Tracy&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以此类推，可以获取倒数第 2 个、倒数第 3 个:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span>-2<span class="token punctuation">]</span>
<span class="token string">&#39;Bob&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span>-3<span class="token punctuation">]</span>
<span class="token string">&#39;Michael&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span>-4<span class="token punctuation">]</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
IndexError: list index out of range
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，倒数第 4 个就越界了。</p><p>list 是一个可变的有序表，所以，可以往 list 中追加元素到末尾:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;Adam&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Adam&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以把元素插入到指定的位置，比如索引号为 <code>1</code> 的位置:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Adam&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要删除 list 末尾的元素，用 <code>pop()</code> 方法:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token string">&#39;Adam&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要删除指定位置的元素，用 <code>pop(i)</code> 方法，其中 <code>i</code> 是索引位置:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token string">&#39;Jack&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要把某个元素替换成别的元素，可以直接赋值给对应的索引位置:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Sarah&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sarah&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>list 里面的元素的数据类型也可以不同，比如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Apple&#39;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>list 元素也可以是另一个 list，比如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;asp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;php&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;scheme&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要注意 <code>s</code> 只有 4 个元素，其中 <code>s[2]</code> 又是一个 list，如果拆开写就更容易理解了:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;asp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;php&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> <span class="token string">&#39;scheme&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要拿到 <code>&#39;php&#39;</code> 可以写 <code>p[1]</code> 或者 <code>s[2][1]</code>，因此 <code>s</code> 可以看成是一个二维数组，类似的还有三维、四维……数组，不过很少用到。</p><p>如果一个 list 中一个元素也没有，就是一个空的 list，它的长度为 0:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tuple" tabindex="-1"><a class="header-anchor" href="#tuple" aria-hidden="true">#</a> tuple</h2><p>另一种有序列表叫元组: tuple。tuple 和 list 非常类似，但是 tuple 一旦初始化就不能修改，比如同样是列出同学的名字:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，classmates 这个 tuple 不能变了，它也没有 <code>append()</code>，<code>insert()</code> 这样的方法。其他获取元素的方法和 list 是一样的，您可以正常地使用 <code>classmates[0]</code>，<code>classmates[-1]</code>，但不能赋值成另外的元素。</p><p>不可变的 tuple 有什么意义? 因为 tuple 不可变，所以代码更安全。如果可能，能用 tuple 代替 list 就尽量用 tuple。</p><p>tuple 的陷阱: 当您定义一个 tuple 时，在定义的时候，tuple 的元素就必须被确定下来，比如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要定义一个空的 tuple，可以写成 <code>()</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t
<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，要定义一个只有 1 个元素的 tuple，如果您这么定义:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义的不是 tuple，是 <code>1</code> 这个数! 这是因为括号 <code>()</code> 既可以表示 tuple，又可以表示数学公式中的小括号，这就产生了歧义，因此，Python 规定，这种情况下，按小括号进行计算，计算结果自然是 1。</p><p>所以，只有 1 个元素的 tuple 定义时必须加一个逗号 <code>,</code>，来消除歧义:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python 在显示只有 1 个元素的 tuple 时，也会加一个逗号 <code>,</code>，以免您误解成数学计算意义上的括号。</p><p>最后来看一个“可变的”tuple:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;X&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Y&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t
<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Y&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 tuple 定义的时候有 3 个元素，分别是 <code>&#39;a&#39;</code>，<code>&#39;b&#39;</code> 和一个 list。不是说 tuple 一旦定义后就不可变了吗? 怎么后来又变了?</p><p>别急，我们先看看定义的时候 tuple 包含的 3 个元素:</p><p><img src="`+a+'" alt="tuple 示意图" loading="lazy"></p><p>当我们把 list 的元素 <code>&#39;A&#39;</code> 和 <code>&#39;B&#39;</code> 修改为 <code>&#39;X&#39;</code> 和 <code>&#39;Y&#39;</code> 后，tuple 变为:</p><p><img src="'+t+'" alt="tuple 示意图" loading="lazy"></p><p>表面上看，tuple 的元素确实变了，但其实变的不是 tuple 的元素，而是 list 的元素。tuple 一开始指向的 list 并没有改成别的 list，所以，tuple 所谓的“不变”是说，tuple 的每个元素，指向永远不变。即指向 <code>&#39;a&#39;</code>，就不能改成指向 <code>&#39;b&#39;</code>，指向一个 list，就不能改成指向其他对象，但指向的这个 list 本身是可变的!</p><p>理解了 “指向不变” 后，要创建一个内容也不变的 tuple 怎么做? 那就必须保证 tuple 的每一个元素本身也不能变。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>list 和 tuple 是 Python 内置的有序集合，一个可变，一个不可变。根据需要来选择使用它们。</p>',59);function d(k,g){return e(),o("div",null,[r,c(" more "),u])}const b=p(i,[["render",d],["__file","list-and-tuple.html.vue"]]);export{b as default};
