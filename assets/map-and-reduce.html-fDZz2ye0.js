import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as e,a as s,e as n,d as c,b as u,f as l}from"./app--7H4MSuP.js";const i="/assets/map-89u82UM-.png",r={},k={href:"https://research.google.com/archive/mapreduce.html",target:"_blank",rel:"noopener noreferrer"},d=l('<h2 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>map</span></a></h2><p>举例说明，比如我们有一个函数 <code>f(x)=x2</code>，要把这个函数作用在一个数组 <code>[1, 2, 3, 4, 5, 6, 7, 8, 9]</code> 上，就可以用 <code>map</code> 实现如下:</p><figure><img src="'+i+`" alt="map" tabindex="0" loading="lazy"><figcaption>map</figcaption></figure><p>由于 <code>map()</code> 方法定义在 JavaScript 的 Array 中，我们调用 Array 的 <code>map()</code> 方法，传入我们自己的函数，就得到了一个新的 Array 作为结果:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">pow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> results <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>pow<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 4, 9, 16, 25, 36, 49, 64, 81]</span>
</code></pre></div><p>注意: <code>map()</code> 传入的参数是 <code>pow</code>，即函数对象本身。</p><p>您可能会想，不需要 <code>map()</code>，写一个循环，也可以计算出结果:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>的确可以，但是，从上面的循环代码，我们无法一眼看明白“把 f(x) 作用在 Array 的每一个元素并把结果生成一个新的 Array”。</p><p>所以，<code>map()</code> 作为高阶函数，事实上它把运算规则抽象了，因此，我们不但可以计算简单的 f(x)=x2，还可以计算任意复杂的函数，比如，把 Array 的所有数字转为字符串:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;, &#39;9&#39;]</span>
</code></pre></div><p>只需要一行代码。</p><h3 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce"><span>reduce</span></a></h3><p>再看 <code>reduce</code> 的用法。Array 的 <code>reduce()</code> 把一个函数作用在这个 Array 的 <code>[x1, x2, x3...]</code> 上，这个函数必须接收两个参数，<code>reduce()</code> 把结果继续和序列的下一个元素做累积计算，其效果就是:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> x3<span class="token punctuation">,</span> x4<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">)</span><span class="token punctuation">,</span> x3<span class="token punctuation">)</span><span class="token punctuation">,</span> x4<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>比方说对一个 Array 求和，就可以用 <code>reduce</code> 实现:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
</code></pre></div><p>要把 <code>[1, 3, 5, 7, 9]</code> 变换成整数 13579，<code>reduce()</code> 也能派上用场:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 13579</span>
</code></pre></div><p>如果我们继续改进这个例子，想办法把一个字符串 <code>13579</code> 先变成 Array —— <code>[1, 3, 5, 7, 9]</code>，再利用 <code>reduce()</code> 就可以写出一个把字符串转换为 Number 的函数。</p><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h2><p><code>filter</code> 也是一个常用的操作，它用于把 Array 的某些元素过滤掉，然后返回剩下的元素。</p><p>和 <code>map()</code> 类似，Array 的 <code>filter()</code> 也接收一个函数。和 <code>map()</code> 不同的是，<code>filter()</code> 把传入的函数依次作用于每个元素，然后根据返回值是 <code>true</code> 还是 <code>false</code> 决定保留还是丢弃该元素。</p><p>例如，在一个 Array 中，删掉偶数，只保留奇数，可以这么写:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> r <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

r<span class="token punctuation">;</span> <span class="token comment">// [1, 5, 9, 15]</span>
</code></pre></div><p>把一个 Array 中的空字符串删掉，可以这么写:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;  &quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> r <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> s <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

r<span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span>
</code></pre></div><p>可见用 <code>filter()</code> 这个高阶函数，关键在于正确实现一个“筛选”函数。</p><h3 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数"><span>回调函数</span></a></h3><p><code>filter()</code> 接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示 Array 的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> r <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index<span class="token punctuation">,</span> self</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 依次打印 &#39;A&#39;, &#39;B&#39;, &#39;C&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 依次打印 0, 1, 2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// self 就是变量 arr</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>利用 <code>filter</code>，可以巧妙地去除 <code>Array</code> 的重复元素:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> r<span class="token punctuation">;</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;strawberry&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;pear&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;orange&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;orange&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;strawberry&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

r <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index<span class="token punctuation">,</span> self</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> self<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">===</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>去除重复元素依靠的是 <code>indexOf</code> 总是返回第一个元素的位置，后续的重复元素位置与 <code>indexOf</code> 返回的位置不相等，因此被 <code>filter</code> 滤掉了。</p><h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>sort</span></a></h2><h3 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法"><span>排序算法</span></a></h3><p>排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个对象呢? 直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。通常规定，对于两个元素 <code>x</code> 和 <code>y</code>，如果认为 <code>x &lt; y</code>，则返回 <code>-1</code>，如果认为 <code>x == y</code>，则返回 <code>0</code>，如果认为 <code>x &gt; y</code>，则返回 <code>1</code>，这样，排序算法就不用关心具体的比较过程，而是根据比较结果直接排序。</p><p>JavaScript 中 Array 的 <code>sort()</code> 方法就是用于排序的，但是排序结果可能让您大吃一惊:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 看上去正常的结果:</span>
<span class="token punctuation">[</span><span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;Apple&#39;, &#39;Google&#39;, &#39;Microsoft&#39;];</span>

<span class="token comment">// apple 排在了最后:</span>
<span class="token punctuation">[</span><span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;Google&#39;, &#39;Microsoft&quot;, &#39;apple&#39;]</span>

<span class="token comment">// 无法理解的结果:</span>
<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 10, 2, 20]</span>
</code></pre></div><p>第二个排序把 <code>apple</code> 排在了最后，是因为字符串根据 ASCII 码进行排序，而小写字母 <code>a</code> 的 ASCII 码在大写字母之后。</p><p>第三个排序结果是什么鬼? 简单的数字排序都能错?</p><p>这是因为 <code>Array</code> 的 <code>sort()</code> 方法默认把所有元素先转换为 <code>String</code> 再排序，结果 <code>&#39;10&#39;</code> 排在了 <code>&#39;2&#39;</code> 的前面，因为字符 <code>&#39;1&#39;</code> 比字符 <code>&#39;2&#39;</code> 的 ASCII 码小。</p><p>如果不知道 <code>sort()</code> 方法的默认排序规则，直接对数字排序，绝对栽进坑里!</p><p>幸运的是，<code>sort()</code> 方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序。</p><p>要按数字大小排序，我们可以这么写:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> y<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 10, 20]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要倒序排序，我们可以把大的数放前面:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> y<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [20, 10, 2, 1]</span>
</code></pre></div><p>默认情况下，对字符串排序，是按照 ASCII 的大小比较的，现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，不必对现有代码大加改动，只要我们能定义出忽略大小写的比较算法就可以:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s1<span class="token punctuation">,</span> s2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  x1 <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  x2 <span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>x1 <span class="token operator">&lt;</span> x2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x1 <span class="token operator">&gt;</span> x2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;apple&#39;, &#39;Google&#39;, &#39;Microsoft&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>忽略大小写来比较两个字符串，实际上就是先把字符串都变成大写(或者都变成小写)，再比较。</p><p>从上述例子可以看出，高阶函数的抽象能力是非常强大的，而且，核心代码可以保持得非常简洁。</p><p>最后友情提示，<code>sort()</code> 方法会直接对 Array 进行修改，它返回的结果仍是当前 Array:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> a1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

a1<span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span>
a2<span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span>
a1 <span class="token operator">===</span> a2<span class="token punctuation">;</span> <span class="token comment">// true, a1 和 a2 是同一对象</span>
</code></pre></div>`,54);function m(g,v){const a=p("ExternalLinkIcon");return o(),e("div",null,[s("p",null,[n("如果您读过 Google 的那篇大名鼎鼎的论文 "),s("a",k,[n("“MapReduce: Simplified Data Processing on Large Clusters”"),c(a)]),n("(要翻墙)，您就能大概明白 map/reduce 的概念。")]),u(" more "),d])}const y=t(r,[["render",m],["__file","map-and-reduce.html.vue"]]),x=JSON.parse('{"path":"/code/language/js/function/map-and-reduce.html","title":"map & reduce","lang":"zh-CN","frontmatter":{"title":"map & reduce","icon":"map","date":"2019-10-05T00:00:00.000Z","category":"JavaScript","description":"如果您读过 Google 的那篇大名鼎鼎的论文 “MapReduce: Simplified Data Processing on Large Clusters”(要翻墙)，您就能大概明白 map/reduce 的概念。 map 举例说明，比如我们有一个函数 f(x)=x2，要把这个函数作用在一个数组 [1, 2, 3, 4, 5, 6, 7, 8, ...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/js/function/map-and-reduce.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"map & reduce"}],["meta",{"property":"og:description","content":"如果您读过 Google 的那篇大名鼎鼎的论文 “MapReduce: Simplified Data Processing on Large Clusters”(要翻墙)，您就能大概明白 map/reduce 的概念。 map 举例说明，比如我们有一个函数 f(x)=x2，要把这个函数作用在一个数组 [1, 2, 3, 4, 5, 6, 7, 8, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2019-10-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"map & reduce\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"map","slug":"map","link":"#map","children":[{"level":3,"title":"reduce","slug":"reduce","link":"#reduce","children":[]}]},{"level":2,"title":"filter","slug":"filter","link":"#filter","children":[{"level":3,"title":"回调函数","slug":"回调函数","link":"#回调函数","children":[]}]},{"level":2,"title":"sort","slug":"sort","link":"#sort","children":[{"level":3,"title":"排序算法","slug":"排序算法","link":"#排序算法","children":[]}]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":3}]},"readingTime":{"minutes":5.86,"words":1759},"filePathRelative":"code/language/js/function/map-and-reduce.md","localizedDate":"2019年10月5日","excerpt":"<p>如果您读过 Google 的那篇大名鼎鼎的论文 <a href=\\"https://research.google.com/archive/mapreduce.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">“MapReduce: Simplified Data Processing on Large Clusters”</a>(要翻墙)，您就能大概明白 map/reduce 的概念。</p>\\n","autoDesc":true}');export{y as comp,x as data};
