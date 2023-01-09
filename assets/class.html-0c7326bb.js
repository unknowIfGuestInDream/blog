import{_ as a,W as t,X as e,$ as p,Y as n,Z as s,a2 as c}from"./framework-d8ef9316.js";const o={},i=n("p",null,"在上面的章节中我们看到了 JavaScript 的对象模型是基于原型实现的，特点是简单，缺点是理解起来比传统的类－实例模型要困难，最大的缺点是继承的实现需要编写大量代码，并且需要正确实现原型链。",-1),l=n("p",null,"有没有更简单的写法? 有!",-1),u=n("p",null,[s("新的关键字 "),n("code",null,"class"),s(" 从 ES6 开始正式被引入到 JavaScript 中。"),n("code",null,"class"),s(" 的目的就是让定义类更简单。")],-1),d=c(`<p>我们先回顾用函数实现 <code>Student</code> 的方法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用新的 <code>class</code> 关键字来编写 <code>Student</code>，可以这样写:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较一下就可以发现，<code>class</code> 的定义包含了构造函数 <code>constructor</code> 和定义在原型对象上的函数 <code>hello()</code> (注意没有 <code>function</code> 关键字)，这样就避免了 <code>Student.prototype.hello = function () {...}</code> 这样分散的代码。</p><p>最后，创建一个 <code>Student</code> 对象代码和前面章节完全一样:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>class</code> 定义对象的另一个巨大的好处是继承更方便了。想一想我们从 <code>Student</code> 派生一个 <code>PrimaryStudent</code> 需要编写的代码量。现在，原型继承的中间对象，原型对象的构造函数等等都不需要考虑了，直接通过 <code>extends</code> 来实现:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PrimaryStudent</span> <span class="token keyword">extends</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> grade</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 记得用super调用父类的构造方法!</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">myGrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">I am at grade </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>grade<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 <code>PrimaryStudent</code> 的定义也是 <code>class</code> 关键字实现的，而 <code>extends</code> 则表示原型链对象来自 <code>Student</code>。子类的构造函数可能会与父类不太相同，例如，<code>PrimaryStudent</code> 需要 <code>name</code> 和 <code>grade</code> 两个参数，并且需要通过 <code>super(name)</code> 来调用父类的构造函数，否则父类的 <code>name</code> 属性无法正常初始化。</p><p><code>PrimaryStudent</code> 已经自动获得了父类 <code>Student</code> 的 <code>hello</code> 方法，我们又在子类中定义了新的 <code>myGrade</code> 方法。</p><p>ES6 引入的 <code>class</code> 和原有的 JavaScript 原型继承有什么区别呢? 实际上它们没有任何区别，<code>class</code> 的作用就是让 JavaScript 引擎去实现原来需要我们自己编写的原型链代码。简而言之，用 <code>class</code> 的好处就是极大地简化了原型链代码。</p>`,12);function r(k,m){return t(),e("div",null,[i,l,u,p(" more "),d])}const g=a(o,[["render",r],["__file","class.html.vue"]]);export{g as default};
