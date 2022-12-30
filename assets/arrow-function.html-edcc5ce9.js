import{_ as s,W as a,X as p,$ as t,a2 as n}from"./framework-65b62f32.js";const e={},o=n(`<p>ES6 标准新增了一种新的函数: Arrow Function (箭头函数)。</p><p>为什么叫 Arrow Function ? 因为它的定义用的就是一个箭头:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),c=n(`<p>上面的箭头函数相当于:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，一种像上面的，只包含一个表达式，连 <code>{ ... }</code> 和 <code>return</code> 都省略掉了。还有一种可以包含多条语句，这时候就不能省略 <code>{ ... }</code> 和 <code>return</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token operator">-</span>x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果参数不是一个，就需要用括号 <code>()</code> 括起来:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 两个参数:</span>
<span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x <span class="token operator">+</span> y <span class="token operator">*</span> y

<span class="token comment">// 无参数:</span>
<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">3.14</span>

<span class="token comment">// 可变参数:</span>
<span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i<span class="token punctuation">;</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rest<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    sum <span class="token operator">+=</span> rest<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要返回一个对象，就要注意，如果是单表达式，这么写的话会报错:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// SyntaxError:</span>
<span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为和函数体的 <code>{ ... }</code> 有语法冲突，所以要改为:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ok:</span>
<span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> x <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="箭头函数的-this" tabindex="-1"><a class="header-anchor" href="#箭头函数的-this" aria-hidden="true">#</a> 箭头函数的 this</h2><p>箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别: 箭头函数内部的 <code>this</code> 是词法作用域，由上下文确定。</p><p>回顾前面的例子，由于 JavaScript 函数对 <code>this</code> 绑定的错误处理，下面的例子无法得到预期结果:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span> <span class="token comment">// 1990</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span> <span class="token comment">// this 指向 window 或 undefined</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，箭头函数完全修复了 <code>this</code> 的指向，<code>this</code> 总是指向词法作用域，也就是外层调用者 <code>obj</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span> <span class="token comment">// 1990</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span> <span class="token comment">// this 指向 obj 对象</span>

    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用箭头函数，以前的那种 hack 写法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就不再需要了。</p><p>由于 <code>this</code> 在箭头函数中已经按照词法作用域绑定了，所以，用 <code>call()</code> 或者 <code>apply()</code> 调用箭头函数时，无法对 <code>this</code> 进行绑定，即传入的第一个参数被忽略:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token parameter">year</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span> <span class="token comment">// 1990</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> y <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span> <span class="token comment">// this.birth 仍是 1990</span>

    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">2000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> year<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token number">2015</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function i(l,u){return a(),p("div",null,[o,t(" more "),c])}const d=s(e,[["render",i],["__file","arrow-function.html.vue"]]);export{d as default};
