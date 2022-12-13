import{_ as s,a}from"./js-proto-extend-5623042a.js";import{_ as t,W as p,X as e,$ as o,Y as n,a2 as c}from"./framework-ae009c3e.js";const i={},l=n("p",null,"在传统的基于 Class 的语言如 Java、C++ 中，继承的本质是扩展一个已有的 Class，并生成新的 Subclass。",-1),u=n("p",null,"由于这类语言严格区分类和实例，继承实际上是类型的扩展。但是，JavaScript 由于采用原型继承，我们无法直接扩展一个 Class，因为根本不存在 Class 这种类型。",-1),r=c(`<p>但是办法还是有的。我们先回顾 Student 构造函数:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> props<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&quot;Unnamed&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以及 Student 的原型链:</p><p><img src="`+s+`" alt="js-proto" loading="lazy"></p><p>现在，我们要基于 <code>Student</code> 扩展出 <code>PrimaryStudent</code>，可以先定义出 <code>PrimaryStudent</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">PrimaryStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 调用Student构造函数，绑定this变量:</span>
  <span class="token function">Student</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，调用了 <code>Student</code> 构造函数不等于继承了 <code>Student</code>，<code>PrimaryStudent</code> 创建的对象的原型是:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new PrimaryStudent() ----&gt; PrimaryStudent.prototype ----&gt; Object.prototype ----&gt; null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>必须想办法把原型链修改为:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new PrimaryStudent() ----&gt; PrimaryStudent.prototype ----&gt; Student.prototype ----&gt; Object.prototype ----&gt; null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，原型链对了，继承关系就对了。新的基于 <code>PrimaryStudent</code> 创建的对象不但能调用 <code>PrimaryStudent.prototype</code> 定义的方法，也可以调用 <code>Student.prototype</code> 定义的方法。</p><p>如果您想用最简单粗暴的方法这么干:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>是不行的! 如果这样的话，<code>PrimaryStudent</code> 和 <code>Student</code> 共享一个原型对象，那还要定义 <code>PrimaryStudent</code> 干啥?</p><p>我们必须借助一个中间对象来实现正确的原型链，这个中间对象的原型要指向 <code>Student.prototype</code>。为了实现这一点，参考发明 JSON 的道格拉斯的代码，中间对象可以用一个空函数 <code>F</code> 来实现:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// PrimaryStudent构造函数:</span>
<span class="token keyword">function</span> <span class="token function">PrimaryStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Student</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 空函数F:</span>
<span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 把F的原型指向Student.prototype:</span>
<span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>

<span class="token comment">// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:</span>
<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:</span>
<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> PrimaryStudent<span class="token punctuation">;</span>

<span class="token comment">// 继续在PrimaryStudent原型(就是new F()对象)上定义方法:</span>
<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getGrade</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>grade<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建xiaoming:</span>
<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrimaryStudent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;小明&#39;</span>
xiaoming<span class="token punctuation">.</span>grade<span class="token punctuation">;</span> <span class="token comment">// 2</span>

<span class="token comment">// 验证原型:</span>
xiaoming<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>
xiaoming<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// 验证继承关系:</span>
xiaoming <span class="token keyword">instanceof</span> <span class="token class-name">PrimaryStudent</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
xiaoming <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用一张图来表示新的原型链:</p><p><img src="`+a+`" alt="js-proto-extend" loading="lazy"></p><p>注意，函数 <code>F</code> 仅用于桥接，我们仅创建了一个 <code>new F()</code> 实例，而且，没有改变原有的 <code>Student</code> 定义的原型链。</p><p>如果把继承这个动作用一个 <code>inherits()</code> 函数封装起来，还可以隐藏 <code>F</code> 的定义，并简化代码:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">inherits</span><span class="token punctuation">(</span><span class="token parameter">Child<span class="token punctuation">,</span> Parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
  <span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <code>inherits()</code> 函数可以复用:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> props<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&quot;Unnamed&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">PrimaryStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Student</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现原型继承链:</span>
<span class="token function">inherits</span><span class="token punctuation">(</span>PrimaryStudent<span class="token punctuation">,</span> Student<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 绑定其他方法到PrimaryStudent原型:</span>
<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getGrade</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>grade<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原型继承小结" tabindex="-1"><a class="header-anchor" href="#原型继承小结" aria-hidden="true">#</a> 原型继承小结</h2><p>JavaScript 的原型继承实现方式就是:</p><ol><li><p>定义新的构造函数，并在内部用 <code>call()</code> 调用希望“继承”的构造函数，并绑定 <code>this</code>；</p></li><li><p>借助中间函数 <code>F</code> 实现原型链继承，最好通过封装的 <code>inherits</code> 函数完成；</p></li><li><p>继续在新的构造函数的原型上定义新方法。</p></li></ol>`,26);function d(k,m){return p(),e("div",null,[l,u,o(" more "),r])}const y=t(i,[["render",d],["__file","extend.html.vue"]]);export{y as default};
