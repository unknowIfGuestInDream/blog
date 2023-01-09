import{_ as n,W as s,X as a,$ as p,Y as t,a2 as e}from"./framework-d8ef9316.js";const o={},c=t("p",null,"列表生成式即 List Comprehensions，是 Python 内置的非常简单却强大的可以用来创建 list 的生成式。",-1),l=e(`<p>举个例子，要生成 list <code>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code> 可以用 <code>list(range(1, 11))</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果要生成 <code>[1x1, 2x2, 3x3, ..., 10x10]</code> 怎么做? 方法一是循环:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>    L<span class="token punctuation">.</span>append<span class="token punctuation">(</span>x <span class="token operator">*</span> x<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是循环太繁琐，而列表生成式则可以用一行语句代替循环生成上面的 list:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>x <span class="token operator">*</span> x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>写列表生成式时，把要生成的元素 <code>x * x</code> 放到前面，后面跟 for 循环，就可以把 list 创建出来，十分有用，多写几次，很快就可以熟悉这种语法。</p><p>for 循环后面还可以加上 if 判断，这样我们就可以筛选出仅偶数的平方:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>x <span class="token operator">*</span> x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用两层循环，可以生成全排列:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>m <span class="token operator">+</span> n <span class="token keyword">for</span> m <span class="token keyword">in</span> <span class="token string">&#39;ABC&#39;</span> <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token string">&#39;XYZ&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;AX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;AY&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;AZ&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;BX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;BY&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;BZ&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CY&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CZ&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>三层和三层以上的循环就很少用到了。</p><p>运用列表生成式，可以写出非常简洁的代码。例如，列出当前目录下的所有文件和目录名，可以通过一行代码实现:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os <span class="token comment"># 导入os模块，模块的概念后面讲到</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>d <span class="token keyword">for</span> d <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment"># os.listdir可以列出文件和目录</span>
<span class="token punctuation">[</span><span class="token string">&#39;.emacs.d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.ssh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.Trash&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Adlm&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Applications&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Desktop&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Documents&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Downloads&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Library&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Movies&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Music&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Pictures&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Public&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;VirtualBox VMs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Workspace&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;XCode&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for 循环其实可以同时使用两个甚至多个变量，比如 dict 的 <code>items()</code> 可以同时迭代 key 和 value:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;C&#39;</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> d<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
y <span class="token operator">=</span> B
x <span class="token operator">=</span> A
z <span class="token operator">=</span> C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，列表生成式也可以使用两个变量来生成 list:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;C&#39;</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>k <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> v <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> d<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;y=B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x=A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;z=C&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后把一个 list 中所有的字符串变成小写:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;IBM&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Apple&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>s<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">for</span> s <span class="token keyword">in</span> L<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ibm&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">else</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用列表生成式的时候，有些童鞋经常搞不清楚 if...else 的用法。</p><p>例如，以下代码正常输出偶数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，我们不能在最后的 if 加上 else:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>x <span class="token keyword">for</span> <span class="token for-or-select variable">x</span> <span class="token keyword">in</span> range<span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x % <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">else</span> <span class="token number">0</span><span class="token punctuation">]</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>
    <span class="token punctuation">[</span>x <span class="token keyword">for</span> <span class="token for-or-select variable">x</span> <span class="token keyword">in</span> range<span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x % <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">else</span> <span class="token number">0</span><span class="token punctuation">]</span>
                                              ^
SyntaxError: invalid syntax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为跟在 for 后面的 if 是一个筛选条件，不能带 else，否则如何筛选?</p><p>另一些童鞋发现把 if 写在 for 前面必须加 else，否则报错:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>x <span class="token keyword">if</span> x % <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">for</span> <span class="token for-or-select variable">x</span> <span class="token keyword">in</span> range<span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>
    <span class="token punctuation">[</span>x <span class="token keyword">if</span> x % <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">for</span> <span class="token for-or-select variable">x</span> <span class="token keyword">in</span> range<span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
                       ^
SyntaxError: invalid syntax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 for 前面的部分是一个表达式，它必须根据 x 计算出一个结果。因此，考察表达式: <code>x if x % 2 == 0</code>，它无法根据 x 计算出结果，因为缺少 else，必须加上 else:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>x <span class="token keyword">if</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">else</span> <span class="token operator">-</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 for 前面的表达式 <code>x if x % 2 == 0 else -x</code> 才能根据 x 计算出确定的结果。</p><p>可见，在一个列表生成式中，for 前面的 <code>if ... else</code> 是表达式，而 for 后面的 if 是过滤条件，不能带 else。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>运用列表生成式，可以快速生成 list，可以通过一个 list 推导出另一个 list，而代码却十分简洁。</p>`,34);function u(i,r){return s(),a("div",null,[c,p(" more "),l])}const d=n(o,[["render",u],["__file","list-comprehensions.html.vue"]]);export{d as default};
