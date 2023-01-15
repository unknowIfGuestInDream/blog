import{_ as n}from"./xiaoming-prototype-269da92d.js";import{_ as s,W as a,X as t,$ as e,Y as p,a2 as o}from"./framework-b343ad39.js";const c={},i=p("p",null,"在 JavaScript 的世界里，一切都是对象。",-1),l=o(`<p>但是某些对象还是和其他对象不太一样。为了区分对象的类型，我们用 <code>typeof</code> 操作符获取对象的类型，它总是返回一个字符串:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// &#39;number&#39;</span>
<span class="token keyword">typeof</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// &#39;number&#39;</span>
<span class="token keyword">typeof</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &#39;string&#39;</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// &#39;boolean&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// &#39;undefined&#39;</span>
<span class="token keyword">typeof</span> Math<span class="token punctuation">.</span>abs<span class="token punctuation">;</span> <span class="token comment">// &#39;function&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// &#39;object&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，<code>number</code>、<code>string</code>、<code>boolean</code>、<code>function</code> 和 <code>undefined</code> 有别于其他类型。特别注意 <code>null</code> 的类型是 <code>object</code>，<code>Array</code> 的类型也是 <code>object</code>，如果我们用 <code>typeof</code> 将无法区分出 <code>null</code>、<code>Array</code> 和通常意义上的 object —— <code>{}</code>。</p><p>JavaScript 的所有数据都可以看成对象，那是不是我们已经在使用面向对象编程了呢?</p><p>当然不是。如果我们只使用 <code>Number</code>、<code>Array</code>、<code>string</code> 以及基本的 <code>{...}</code> 定义的对象，还无法发挥出面向对象编程的威力。</p><p>JavaScript 的面向对象编程和大多数其他语言如 Java、C# 的面向对象编程都不太一样。如果您熟悉 Java 或 C#，很好，您一定明白面向对象的两个基本概念:</p><ol><li><p>类: 类是对象的类型模板，例如，定义 <code>Student</code> 类来表示学生，类本身是一种类型，<code>Student</code> 表示学生类型，但不表示任何具体的某个学生；</p></li><li><p>实例: 实例是根据类创建的对象，例如，根据 <code>Student</code> 类可以创建出 <code>xiaoming</code>、<code>xiaohong</code>、<code>xiaojun</code> 等多个实例，每个实例表示一个具体的学生，他们全都属于 <code>Student</code> 类型。</p></li></ol><p>所以，类和实例是大多数面向对象编程语言的基本概念。</p><p>不过，在 JavaScript 中，这个概念需要改一改。JavaScript 不区分类和实例的概念，而是通过原型 (<code>prototype</code>) 来实现面向对象编程。</p><p>原型是指当我们想要创建 <code>xiaoming</code> 这个具体的学生时，我们并没有一个 <code>Student</code> 类型可用。</p><p>于是我们创建对象 <code>Student</code>，然后创建出 <code>xiaoming</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;studentUnknown&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.8</span><span class="token punctuation">,</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is running...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> Student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意最后一行代码把 <code>xiaoming</code> 的原型指向了对象 <code>Student</code>，看上去 <code>xiaoming</code> 仿佛是从 <code>Student</code> 继承下来的:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>xiaoming<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;小明&#39;</span>
xiaoming<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 小明 is running...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>xiaoming</code> 有自己的 <code>name</code> 属性，但并没有定义 <code>run()</code> 方法。不过，由于小明是从 <code>Student</code> 继承而来，只要 <code>Student</code> 有 <code>run()</code> 方法，<code>xiaoming</code> 也可以调用:</p><p><img src="`+n+`" alt="xiaoming-prototype" loading="lazy"></p><p>JavaScript 的原型链和 Java 的 <code>Class</code> 区别就在，它没有 “Class” 的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。</p><p>如果您把 <code>xiaoming</code> 的原型指向其他对象:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Bird <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is flying...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> Bird<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在 <code>xiaoming</code> 已经无法 <code>run()</code> 了，他已经变成了一只鸟:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>xiaoming<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 小明 is flying...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 JavaScrip 代码运行时期，您可以把 <code>xiaoming</code> 从 <code>Student</code> 变成 <code>Bird</code>，或者变成任何对象。</p><p>请注意，上述代码仅用于演示目的。在编写 JavaScript 代码时，不要直接用 <code>obj.__proto__</code> 去改变一个对象的原型，并且，低版本的 IE 也无法使用 <code>__proto__。Object.create()</code> 方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有，因此，我们可以编写一个函数来创建 <code>xiaoming</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 原型对象:</span>
<span class="token keyword">const</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Robot&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.2</span><span class="token punctuation">,</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is running...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">createStudent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 基于Student原型创建一个新对象:</span>
  <span class="token keyword">const</span> s <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Student<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 初始化新对象:</span>
  s<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>

  <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token function">createStudent</span><span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 小明 is running...</span>
xiaoming<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> Student<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是创建原型继承的一种方法，JavaScript 还有其他方法来创建对象，我们在后面会一一讲到。</p>`,25);function u(d,r){return a(),t("div",null,[i,e(" more "),l])}const v=s(c,[["render",u],["__file","intro.html.vue"]]);export{v as default};
