import{_ as n,W as s,X as a,a2 as e}from"./framework-269d85ce.js";const t={},p=e(`<h2 id="私有属性" tabindex="-1"><a class="header-anchor" href="#私有属性" aria-hidden="true">#</a> 私有属性</h2><p>在 Class 内部，可以有属性和方法，而外部代码可以通过直接调用实例变量的方法来操作数据，这样，就隐藏了内部的复杂逻辑。</p><p>但是，从前面 Student 类的定义来看，外部代码还是可以自由地修改一个实例的 <code>name</code>、<code>score</code> 属性:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Bart Simpson&#39;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>score
<span class="token number">59</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">99</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>score
<span class="token number">99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要让内部属性不被外部访问，可以把属性的名称前加上两个下划线 <code>__</code>，在 Python 中，实例的变量名如果以 <code>__</code> 开头，就变成了一个私有变量 (private) ，只有内部可以访问，外部不能访问，所以，我们把 <code>Student</code> 类改一改:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>__score <span class="token operator">=</span> score

    <span class="token keyword">def</span> <span class="token function">print_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>__name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__score<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改完后，对于外部代码来说，没什么变动，但是已经无法从外部访问实例变量. <code>__name</code> 和实例变量 <code>__score</code> 了:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Bart Simpson&#39;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>__name
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
AttributeError<span class="token punctuation">:</span> <span class="token string">&#39;Student&#39;</span> <span class="token builtin">object</span> has no attribute <span class="token string">&#39;__name&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就确保了外部代码不能随意修改对象内部的状态，这样通过访问限制的保护，代码更加健壮。</p><p>但是如果外部代码要获取 <code>name</code> 和 <code>score</code> 怎么办？可以给 Student 类增加 <code>get_name</code> 和 <code>get_score</code> 这样的方法:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">get_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__name

    <span class="token keyword">def</span> <span class="token function">get_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__score
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果又要允许外部代码修改 score 怎么办？可以再给 Student 类增加 <code>set_score</code> 方法:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">set_score</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__score <span class="token operator">=</span> score
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您也许会问，原先那种直接通过 bart.score = 99 也可以修改啊，为什么要定义一个方法大费周折？因为在方法中，可以对参数做检查，避免传入无效的参数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">set_score</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> score <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>__score <span class="token operator">=</span> score
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&#39;bad score&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，在 Python 中，变量名类似 <code>__xxx__</code> 的，也就是以双下划线开头，并且以双下划线结尾的，是特殊变量，特殊变量是可以直接访问的，不是 private 变量，所以，不能用 <code>__name__</code>、<code>__score__</code> 这样的变量名。</p><p>有些时候，您会看到以一个下划线开头的实例变量名，比如 <code>_name</code>，这样的实例变量外部是可以访问的，但是，按照约定俗成的规定，当您看到这样的变量时，意思就是，“虽然我可以被访问，但是，请把我视为私有变量，不要随意访问”。</p><p>双下划线开头的实例变量是不是一定不能从外部访问呢？其实也不是。不能直接访问 <code>__name</code> 是因为 Python 解释器对外把 <code>__name</code> 变量改成了 <code>_Student__name</code>，所以，仍然可以通过 <code>_Student__name</code> 来访问 <code>__name</code> 变量:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>_Student__name
<span class="token string">&#39;Bart Simpson&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是强烈建议您不要这么干，因为不同版本的 Python 解释器可能会把 <code>__name</code> 改成不同的变量名。</p><p>总的来说就是，Python 本身没有任何机制阻止您干坏事，一切全靠自觉。</p><div class="hint-container danger"><p class="hint-container-title">错误写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Bart Simpson&#39;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>get_name<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token string">&#39;Bart Simpson&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>__name <span class="token operator">=</span> <span class="token string">&#39;New Name&#39;</span> <span class="token comment"># 设置__name变量!</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>__name
<span class="token string">&#39;New Name&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表面上看，外部代码“成功”地设置了 <code>__name</code> 变量，但实际上这个 <code>__name</code> 变量和 class 内部的 <code>__name</code> 变量不是一个变量! 内部的 <code>__name</code> 变量已经被 Python 解释器自动改成了 <code>_Student__name</code>，而外部代码给 bart 新增了一个 <code>__name</code> 变量。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>get_name<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># get_name()内部返回self.__name</span>
<span class="token string">&#39;Bart Simpson&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> <code>__slots__</code></h2><p>Python 允许在定义 class 的时候，定义一个特殊的 <code>__slots__</code> 变量，来限制该 class 实例能添加的属性。</p><h3 id="不受限制的属性" tabindex="-1"><a class="header-anchor" href="#不受限制的属性" aria-hidden="true">#</a> 不受限制的属性</h3><p>正常情况下，当我们定义了一个 class，创建了一个 class 的实例后，我们可以给该实例绑定任何属性和方法，这就是动态语言的灵活性。先定义 class:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，尝试给实例绑定一个属性:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Michael&#39;</span> <span class="token comment"># 动态给实例绑定一个属性</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
Michael
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以尝试给实例绑定一个方法:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">set_age</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 定义一个函数作为实例方法</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     self<span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> types <span class="token keyword">import</span> MethodType
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>set_age <span class="token operator">=</span> MethodType<span class="token punctuation">(</span>set_age<span class="token punctuation">,</span> s<span class="token punctuation">)</span> <span class="token comment"># 给实例绑定一个方法</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>set_age<span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token comment"># 调用实例方法</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>age <span class="token comment"># 测试结果</span>
<span class="token number">25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，给一个实例绑定的方法，对另一个实例是不起作用的:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s2 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 创建新的实例</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s2<span class="token punctuation">.</span>set_age<span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token comment"># 尝试调用方法</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
AttributeError<span class="token punctuation">:</span> <span class="token string">&#39;Student&#39;</span> <span class="token builtin">object</span> has no attribute <span class="token string">&#39;set_age&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了给所有实例都绑定方法，可以给 class 绑定方法:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">set_score</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     self<span class="token punctuation">.</span>score <span class="token operator">=</span> score
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Student<span class="token punctuation">.</span>set_score <span class="token operator">=</span> set_score
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给 class 绑定方法后，所有实例均可调用:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>set_score<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>score
<span class="token number">100</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s2<span class="token punctuation">.</span>set_score<span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s2<span class="token punctuation">.</span>score
<span class="token number">99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常情况下，上面的 <code>set_score</code> 方法可以直接定义在 class 中，但动态绑定允许我们在程序运行的过程中动态给 class 加上功能，这在静态语言中很难实现。</p><h3 id="使用-slots" tabindex="-1"><a class="header-anchor" href="#使用-slots" aria-hidden="true">#</a> 使用 <code>__slots__</code></h3><p>想要限制实例的属性，比如只允许对 <code>Student</code> 实例添加 <code>name</code> 和 <code>age</code> 属性，就要使用 <code>__slots__</code>。Python 允许在定义 class 的时候，定义一个特殊的 <code>__slots__</code> 变量，来限制该 class 实例能添加的属性:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    __slots__ <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 用tuple定义允许绑定的属性名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们试试:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 创建新的实例</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Michael&#39;</span> <span class="token comment"># 绑定属性&#39;name&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">25</span> <span class="token comment"># 绑定属性&#39;age&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">99</span> <span class="token comment"># 绑定属性&#39;score&#39;</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
AttributeError<span class="token punctuation">:</span> <span class="token string">&#39;Student&#39;</span> <span class="token builtin">object</span> has no attribute <span class="token string">&#39;score&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 <code>&#39;score&#39;</code> 没有被放到 <code>__slots__</code> 中，所以不能绑定 score 属性，试图绑定 score 将得到 <code>AttributeError</code> 的错误。</p><p>使用 <code>__slots__</code> 要注意，<code>__slots__</code> 定义的属性仅对当前类实例起作用，对继承的子类是不起作用的:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">GraduateStudent</span><span class="token punctuation">(</span>Student<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">pass</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g <span class="token operator">=</span> GraduateStudent<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">9999</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除非在子类中也定义 <code>__slots__</code>，这样，子类实例允许定义的属性就是自身的 <code>__slots__</code> 加上父类的 <code>__slots__</code>。</p><h2 id="property" tabindex="-1"><a class="header-anchor" href="#property" aria-hidden="true">#</a> @property</h2><p><code>@property</code> 广泛应用在类的定义中，可以让调用者写出简短的代码，同时保证对参数进行必要的检查，这样，程序运行时就减少了出错的可能性。</p><p>在绑定属性时，若直接暴露属性，虽然写起来很简单，但是，没办法检查参数，导致可以把成绩随便改:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">9999</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这显然不合逻辑。为了限制 <code>score</code> 的范围，可以通过一个 <code>set_score()</code> 方法来设置成绩，再通过一个 <code>get_score()</code> 来获取成绩，这样，在 <code>set_score()</code> 方法里，就可以检查参数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">get_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
         <span class="token keyword">return</span> self<span class="token punctuation">.</span>_score

    <span class="token keyword">def</span> <span class="token function">set_score</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&#39;score must be an integer!&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> value <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> value <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&#39;score must between 0 ~ 100!&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>_score <span class="token operator">=</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，对任意的 <code>Student</code> 实例进行操作，就不能随心所欲地设置 <code>score</code> 了:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>set_score<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token comment"># ok!</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>get_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">60</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>set_score<span class="token punctuation">(</span><span class="token number">9999</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
ValueError<span class="token punctuation">:</span> score must between <span class="token number">0</span> <span class="token operator">~</span> <span class="token number">100</span>!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，上面的调用方法又略显复杂，没有直接用属性这么直接简单。</p><p>有没有既能检查参数，又可以用类似属性这样简单的方式来访问类的变量呢？对于追求完美的 Python 程序员来说，这是必须要做到的!</p><p>还记得装饰器 (decorator) 可以给函数动态加上功能吗？对于类的方法，装饰器一样起作用。Python 内置的 <code>@property</code> 装饰器就是负责把一个方法变成属性调用的:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_score

    <span class="token decorator annotation punctuation">@score<span class="token punctuation">.</span>setter</span>
    <span class="token keyword">def</span> <span class="token function">score</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&#39;score must be an integer!&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> value <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> value <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&#39;score must between 0 ~ 100!&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>_score <span class="token operator">=</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@property</code> 的实现比较复杂，我们先考察如何使用。把一个 <code>getter</code> 方法变成属性，只需要加上 <code>@property</code> 就可以了，此时，<code>@property</code> 本身又创建了另一个装饰器 <code>@score.setter</code>，负责把一个 <code>setter</code> 方法变成属性赋值，于是，我们就拥有一个可控的属性操作:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">60</span> <span class="token comment"># OK，实际转化为s.set_score(60)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>score <span class="token comment"># OK，实际转化为s.get_score()</span>
<span class="token number">60</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">9999</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
ValueError<span class="token punctuation">:</span> score must between <span class="token number">0</span> <span class="token operator">~</span> <span class="token number">100</span>!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到这个神奇的 <code>@property</code>，我们在对实例属性操作的时候，就知道该属性很可能不是直接暴露的，而是通过 <code>getter</code> 和 <code>setter</code> 方法来实现的。</p><p>还可以定义只读属性，只定义 <code>getter</code> 方法，不定义 <code>setter</code> 方法就是一个只读属性:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">birth</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_birth

    <span class="token decorator annotation punctuation">@birth<span class="token punctuation">.</span>setter</span>
    <span class="token keyword">def</span> <span class="token function">birth</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_birth <span class="token operator">=</span> value

    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">age</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">2015</span> <span class="token operator">-</span> self<span class="token punctuation">.</span>_birth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的 <code>birth</code> 是可读写属性，而 <code>age</code> 就是一个只读属性，因为 <code>age</code> 可以根据 <code>birth</code> 和当前时间计算出来。</p>`,65),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","property.html.vue"]]);export{r as default};
