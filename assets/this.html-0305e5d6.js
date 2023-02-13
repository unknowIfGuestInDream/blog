import{_ as n,X as s,Y as a,a3 as p}from"./framework-0ff09816.js";const t={},e=p(`<p>在一个对象中绑定函数，称为这个对象的方法。</p><p>在 JavaScript 中，对象的定义是这样的:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果我们给 <code>xiaoming</code> 绑定一个函数，就可以做更多的事情。比如，写个 <code>age()</code> 方法，返回 <code>xiaoming</code> 的年龄:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> y <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// function xiaoming.age()</span>
xiaoming<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 今年调用是25,明年调用就变成26了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">age</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>的简写方式。</p></div><p>绑定到对象上的函数称为方法，和普通函数也没啥区别，但是它在内部使用了一个 <code>this</code> 关键字，这个东东是什么?</p><p>在一个方法内部，<code>this</code> 是一个特殊变量，它始终指向当前对象，也就是 <code>xiaoming</code> 这个变量。所以，<code>this.birth</code> 可以拿到 <code>xiaoming</code> 的 <code>birth</code> 属性。</p><p>让我们拆开写:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> getAge<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25, 正常结果</span>
<span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单独调用函数 <code>getAge()</code> 怎么返回了 <code>NaN</code>? 请注意，我们已经进入到了 JavaScript 的一个大坑里。</p><p>JavaScript 的函数内部如果调用了 <code>this</code>，那么这个 <code>this</code> 到底指向谁?</p><p>答案是，视情况而定!</p><p>如果以对象的方法形式调用，比如 <code>xiaoming.age()</code>，该函数的 <code>this</code> 指向被调用的对象，也就是 <code>xiaoming</code>，这是符合我们预期的。</p><p>如果单独调用函数，比如 <code>getAge()</code>，此时，该函数的 <code>this</code> 指向全局对象，也就是 <code>window</code>。</p><p>坑爹啊!</p><p>更坑爹的是，如果这么写:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fn <span class="token operator">=</span> xiaoming<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// 先拿到 xiaoming 的 page 函数</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也是不行的! 要保证 <code>this</code> 指向正确，必须用 <code>obj.xxx()</code> 的形式调用!</p><p>由于这是一个巨大的设计错误，要想纠正可没那么简单。ECMA 决定，在 strict 模式下让函数的 <code>this</code> 指向 <code>undefined</code>，因此，在 strict 模式下，您会得到一个错误:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> xiaoming<span class="token punctuation">.</span>age<span class="token punctuation">;</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught TypeError: Cannot read property &#39;birth&#39; of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个决定只是让错误及时暴露出来，并没有解决 <code>this</code> 应该指向的正确位置。</p><p>有些时候，喜欢重构的您把方法重构了一下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">getAgeFromBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">getAgeFromBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught TypeError: Cannot read property &#39;birth&#39; of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果又报错了! 原因是 <code>this</code> 指针只在 <code>age</code> 方法的函数内指向 <code>xiaoming</code>，在函数内部定义的函数，<code>this</code> 又指向 <code>undefined</code> 了! (在非 strict 模式下，它重新指向全局对象 <code>window</code>! )</p><p>修复的办法也不是没有，我们用一个 <code>that</code> 变量首先捕获 <code>this</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 在方法内部一开始就捕获 this</span>

    <span class="token keyword">function</span> <span class="token function">getAgeFromBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 用that而不是this</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> that<span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">getAgeFromBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>const that = this;</code>，您就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。</p><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h2><p>虽然在一个独立的函数调用中，根据是否是 <code>strict</code> 模式，<code>this</code> 指向 <code>undefined</code> 或 <code>window</code>，不过，我们还是可以控制 <code>this</code> 的指向的!</p><p>要指定函数的 <code>this</code> 指向哪个对象，可以用函数本身的 <code>apply</code> 方法，它接收两个参数，第一个参数就是需要绑定的 <code>this</code> 变量，第二个参数是 <code>Array</code>，表示函数本身的参数。</p><p>用 <code>apply</code> 修复 <code>getAge()</code> 调用:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> getAge<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
<span class="token function">getAge</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25, this指向xiaoming, 参数为空</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个与 <code>apply()</code> 类似的方法是 <code>call()</code>，唯一区别是:</p><p><code>apply()</code> 把参数打包成 <code>Array</code> 再传入；</p><p><code>call()</code> 把参数按顺序传入。</p><p>比如调用 <code>Math.max(3, 5, 4)</code>，分别用 <code>apply()</code> 和 <code>call()</code> 实现如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对普通函数调用，我们通常把 <code>this</code> 绑定为 null。</p><h2 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h2><p>利用 <code>apply()</code>，我们还可以动态改变函数的行为。</p><p>JavaScript 的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。</p><p>现在假定我们想统计一下代码一共调用了多少次 <code>parseInt()</code>，可以把所有的调用都找出来，然后手动加上 <code>count += 1</code>，不过这样做太傻了。最佳方案是用我们自己的函数替换掉默认的 <code>parseInt()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> oldParseInt <span class="token operator">=</span> parseInt<span class="token punctuation">;</span> <span class="token comment">// 保存原函数</span>

window<span class="token punctuation">.</span><span class="token function-variable function">parseInt</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">oldParseInt</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用原函数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 测试:</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">count = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","this.html.vue"]]);export{r as default};
