import{_ as n,a as s}from"./protos2-a3700548.js";import{_ as a,W as e,X as t,$ as o,Y as p,a2 as c}from"./framework-d7af73f9.js";const i={},l=p("p",null,"JavaScript 对每个创建的对象都会设置一个原型，指向它的原型对象。",-1),u=c(`<p>当我们用 <code>obj.xxx</code> 访问一个对象的属性时，JavaScript 引擎先在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到 <code>Object.prototype</code> 对象，最后，如果还没有找到，就只能返回 <code>undefined</code>。</p><p>例如，创建一个 Array 对象:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其原型链是:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>arr<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Array.prototype</code> 定义了 <code>indexOf()</code>、<code>shift()</code> 等方法，因此您可以在所有的 Array 对象上直接调用这些方法。</p><p>当我们创建一个函数时:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>函数也是一个对象，它的原型链是:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>foo<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 <code>Function.prototype</code> 定义了 <code>apply()</code> 等方法，因此，所有函数都可以调用 <code>apply()</code> 方法。</p><p>很容易想到，如果原型链很长，那么访问一个对象的属性就会因为花更多的时间查找而变得更慢，因此要注意不要把原型链搞得太长。</p><h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h2><p>除了直接用 <code>{ ... }</code> 创建一个对象外，JavaScript 还可以用一种构造函数的方法来创建对象。它的用法是，先定义一个构造函数:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您会问，咦，这不是一个普通函数吗?</p><p>这确实是一个普通函数，但是在 JavaScript 中，可以用关键字 <code>new</code> 来调用这个函数，并返回一个对象:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;小明&#39;</span>
xiaoming<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello, 小明!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果不写 <code>new</code>，这就是一个普通函数，它返回 <code>undefined</code>。但是，如果写了 <code>new</code>，它就变成了一个构造函数，它绑定的 <code>this</code> 指向新创建的对象，并默认返回 <code>this</code>，也就是说，不需要在最后写 <code>return this;</code>。</p><p>新创建的 <code>xiaoming</code> 的原型链是:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>xiaoming<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也就是说，<code>xiaoming</code> 的原型指向函数 <code>Student</code> 的原型。如果您又创建了 <code>xiaohong</code>、<code>xiaojun</code>，那么这些对象的原型与 <code>xiaoming</code> 是一样的:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>xiaoming ↘
xiaohong <span class="token operator">-</span>→ <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token keyword">null</span>
xiaojun  ↗
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>new Student()</code> 创建的对象还从原型上获得了一个 <code>constructor</code> 属性，它指向函数 <code>Student</code> 本身:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>xiaoming<span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Student<span class="token punctuation">;</span> <span class="token comment">// true</span>

Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>

xiaoming <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看晕了吧? 用一张图来表示这些乱七八糟的关系就是:</p><p><img src="`+n+`" alt="protos" loading="lazy"></p><p>红色箭头是原型链。注意，<code>Student.prototype</code> 指向的对象就是 <code>xiaoming</code>、<code>xiaohong</code> 的原型对象，这个原型对象自己还有个属性 <code>constructor</code>，指向 <code>Student</code> 函数本身。</p><p>另外，函数 <code>Student</code> 恰好有个属性 <code>prototype</code> 指向 <code>xiaoming</code>、<code>xiaohong</code> 的原型对象，但是 <code>xiaoming</code>、<code>xiaohong</code> 这些对象可没有 <code>prototype</code> 这个属性，不过可以用 <code>__proto__</code> 这个非标准用法来查看。</p><p>现在我们就认为 <code>xiaoming</code>、<code>xiaohong</code> 这些对象“继承”自 <code>Student</code>。</p><p>不过还有一个小问题，注意观察:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>xiaoming<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;小明&#39;</span>
xiaohong<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;小红&#39;</span>
xiaoming<span class="token punctuation">.</span>hello<span class="token punctuation">;</span> <span class="token comment">// function: Student.hello()</span>
xiaohong<span class="token punctuation">.</span>hello<span class="token punctuation">;</span> <span class="token comment">// function: Student.hello()</span>
xiaoming<span class="token punctuation">.</span>hello <span class="token operator">===</span> xiaohong<span class="token punctuation">.</span>hello<span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>xiaoming</code> 和 <code>xiaohong</code> 各自的 <code>name</code> 不同，这是对的，否则我们无法区分谁是谁了。</p><p><code>xiaoming</code> 和 <code>xiaohong</code> 各自的 <code>hello</code> 是一个函数，但它们是两个不同的函数，虽然函数名称和代码都是相同的!</p><p>如果我们通过 <code>new Student()</code> 创建了很多对象，这些对象的 <code>hello</code> 函数实际上只需要共享同一个函数就可以了，这样可以节省很多内存。</p><p>要让创建的对象共享一个 <code>hello</code> 函数，根据对象的属性查找原则，我们只要把 <code>hello</code> 函数移动到 <code>xiaoming</code>、<code>xiaohong</code> 这些对象共同的原型上就可以了，也就是 <code>Student.prototype</code>:</p><p><img src="`+s+`" alt="protos2" loading="lazy"></p><p>修改代码如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>new</code> 创建基于原型的 JavaScript 的对象就是这么简单!</p><h2 id="忘记写-new-怎么办" tabindex="-1"><a class="header-anchor" href="#忘记写-new-怎么办" aria-hidden="true">#</a> 忘记写 new 怎么办</h2><p>如果一个函数被定义为用于创建对象的构造函数，但是调用时忘记了写 new 怎么办?</p><p>在 strict 模式下，<code>this.name = name</code> 将报错，因为 <code>this</code> 绑定为 <code>undefined</code>，在非 <code>strict</code> 模式下，<code>this.name = name</code> 不报错，因为 <code>this</code> 绑定为 <code>window</code>，于是无意间创建了全局变量 <code>name</code>，并且返回 <code>undefined</code>，这个结果更糟糕。</p><p>所以，调用构造函数千万不要忘记写 <code>new</code>。为了区分普通函数和构造函数，按照约定，构造函数首字母应当大写，而普通函数首字母应当小写，这样，一些语法检查工具如 ESLint 将可以帮您检测到漏写的 <code>new</code>。</p><p>最后，我们还可以编写一个 <code>createStudent()</code> 函数，在内部封装所有的 <code>new</code> 操作。一个常用的编程模式像这样:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> props<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&quot;匿名&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 默认值为&#39;匿名&#39;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 默认值为1</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>props <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <code>createStudent()</code> 函数有几个巨大的优点: 一是不需要 <code>new</code> 来调用，二是参数非常灵活，可以不传，也可以这么传:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token function">createStudent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span>grade<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果创建的对象有很多属性，我们只需要传递需要的某些属性，剩下的属性可以用默认值。由于参数是一个 <code>Object</code>，我们无需记忆参数的顺序。如果恰好从 JSON 拿到了一个对象，就可以直接创建出 <code>xiaoming</code>。</p>`,49);function d(r,k){return e(),t("div",null,[l,o(" more "),u])}const g=a(i,[["render",d],["__file","create.html.vue"]]);export{g as default};
