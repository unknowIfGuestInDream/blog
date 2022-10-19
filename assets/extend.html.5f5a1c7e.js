import{_ as s,a}from"./js-proto-extend.480c2d92.js";import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,d as o,a as n,f as c}from"./app.7e7f0dc0.js";const i={},l=n("p",null,"\u5728\u4F20\u7EDF\u7684\u57FA\u4E8E Class \u7684\u8BED\u8A00\u5982 Java\u3001C++ \u4E2D\uFF0C\u7EE7\u627F\u7684\u672C\u8D28\u662F\u6269\u5C55\u4E00\u4E2A\u5DF2\u6709\u7684 Class\uFF0C\u5E76\u751F\u6210\u65B0\u7684 Subclass\u3002",-1),u=n("p",null,"\u7531\u4E8E\u8FD9\u7C7B\u8BED\u8A00\u4E25\u683C\u533A\u5206\u7C7B\u548C\u5B9E\u4F8B\uFF0C\u7EE7\u627F\u5B9E\u9645\u4E0A\u662F\u7C7B\u578B\u7684\u6269\u5C55\u3002\u4F46\u662F\uFF0CJavaScript \u7531\u4E8E\u91C7\u7528\u539F\u578B\u7EE7\u627F\uFF0C\u6211\u4EEC\u65E0\u6CD5\u76F4\u63A5\u6269\u5C55\u4E00\u4E2A Class\uFF0C\u56E0\u4E3A\u6839\u672C\u4E0D\u5B58\u5728 Class \u8FD9\u79CD\u7C7B\u578B\u3002",-1),r=c(`<p>\u4F46\u662F\u529E\u6CD5\u8FD8\u662F\u6709\u7684\u3002\u6211\u4EEC\u5148\u56DE\u987E Student \u6784\u9020\u51FD\u6570:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> props<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&quot;Unnamed&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u53CA Student \u7684\u539F\u578B\u94FE:</p><p><img src="`+s+`" alt="js-proto" loading="lazy"></p><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u8981\u57FA\u4E8E <code>Student</code> \u6269\u5C55\u51FA <code>PrimaryStudent</code>\uFF0C\u53EF\u4EE5\u5148\u5B9A\u4E49\u51FA <code>PrimaryStudent</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">PrimaryStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8C03\u7528Student\u6784\u9020\u51FD\u6570\uFF0C\u7ED1\u5B9Athis\u53D8\u91CF:</span>
  <span class="token function">Student</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u8C03\u7528\u4E86 <code>Student</code> \u6784\u9020\u51FD\u6570\u4E0D\u7B49\u4E8E\u7EE7\u627F\u4E86 <code>Student</code>\uFF0C<code>PrimaryStudent</code> \u521B\u5EFA\u7684\u5BF9\u8C61\u7684\u539F\u578B\u662F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new PrimaryStudent() ----&gt; PrimaryStudent.prototype ----&gt; Object.prototype ----&gt; null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5FC5\u987B\u60F3\u529E\u6CD5\u628A\u539F\u578B\u94FE\u4FEE\u6539\u4E3A:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new PrimaryStudent() ----&gt; PrimaryStudent.prototype ----&gt; Student.prototype ----&gt; Object.prototype ----&gt; null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\uFF0C\u539F\u578B\u94FE\u5BF9\u4E86\uFF0C\u7EE7\u627F\u5173\u7CFB\u5C31\u5BF9\u4E86\u3002\u65B0\u7684\u57FA\u4E8E <code>PrimaryStudent</code> \u521B\u5EFA\u7684\u5BF9\u8C61\u4E0D\u4F46\u80FD\u8C03\u7528 <code>PrimaryStudent.prototype</code> \u5B9A\u4E49\u7684\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u8C03\u7528 <code>Student.prototype</code> \u5B9A\u4E49\u7684\u65B9\u6CD5\u3002</p><p>\u5982\u679C\u60A8\u60F3\u7528\u6700\u7B80\u5355\u7C97\u66B4\u7684\u65B9\u6CD5\u8FD9\u4E48\u5E72:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u662F\u4E0D\u884C\u7684! \u5982\u679C\u8FD9\u6837\u7684\u8BDD\uFF0C<code>PrimaryStudent</code> \u548C <code>Student</code> \u5171\u4EAB\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61\uFF0C\u90A3\u8FD8\u8981\u5B9A\u4E49 <code>PrimaryStudent</code> \u5E72\u5565?</p><p>\u6211\u4EEC\u5FC5\u987B\u501F\u52A9\u4E00\u4E2A\u4E2D\u95F4\u5BF9\u8C61\u6765\u5B9E\u73B0\u6B63\u786E\u7684\u539F\u578B\u94FE\uFF0C\u8FD9\u4E2A\u4E2D\u95F4\u5BF9\u8C61\u7684\u539F\u578B\u8981\u6307\u5411 <code>Student.prototype</code>\u3002\u4E3A\u4E86\u5B9E\u73B0\u8FD9\u4E00\u70B9\uFF0C\u53C2\u8003\u53D1\u660E JSON \u7684\u9053\u683C\u62C9\u65AF\u7684\u4EE3\u7801\uFF0C\u4E2D\u95F4\u5BF9\u8C61\u53EF\u4EE5\u7528\u4E00\u4E2A\u7A7A\u51FD\u6570 <code>F</code> \u6765\u5B9E\u73B0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// PrimaryStudent\u6784\u9020\u51FD\u6570:</span>
<span class="token keyword">function</span> <span class="token function">PrimaryStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Student</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7A7A\u51FD\u6570F:</span>
<span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u628AF\u7684\u539F\u578B\u6307\u5411Student.prototype:</span>
<span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>

<span class="token comment">// \u628APrimaryStudent\u7684\u539F\u578B\u6307\u5411\u4E00\u4E2A\u65B0\u7684F\u5BF9\u8C61\uFF0CF\u5BF9\u8C61\u7684\u539F\u578B\u6B63\u597D\u6307\u5411Student.prototype:</span>
<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u628APrimaryStudent\u539F\u578B\u7684\u6784\u9020\u51FD\u6570\u4FEE\u590D\u4E3APrimaryStudent:</span>
<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> PrimaryStudent<span class="token punctuation">;</span>

<span class="token comment">// \u7EE7\u7EED\u5728PrimaryStudent\u539F\u578B(\u5C31\u662Fnew F()\u5BF9\u8C61)\u4E0A\u5B9A\u4E49\u65B9\u6CD5:</span>
<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getGrade</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>grade<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u5EFAxiaoming:</span>
<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrimaryStudent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;\u5C0F\u660E&#39;</span>
xiaoming<span class="token punctuation">.</span>grade<span class="token punctuation">;</span> <span class="token comment">// 2</span>

<span class="token comment">// \u9A8C\u8BC1\u539F\u578B:</span>
xiaoming<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>
xiaoming<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// \u9A8C\u8BC1\u7EE7\u627F\u5173\u7CFB:</span>
xiaoming <span class="token keyword">instanceof</span> <span class="token class-name">PrimaryStudent</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
xiaoming <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u4E00\u5F20\u56FE\u6765\u8868\u793A\u65B0\u7684\u539F\u578B\u94FE:</p><p><img src="`+a+`" alt="js-proto-extend" loading="lazy"></p><p>\u6CE8\u610F\uFF0C\u51FD\u6570 <code>F</code> \u4EC5\u7528\u4E8E\u6865\u63A5\uFF0C\u6211\u4EEC\u4EC5\u521B\u5EFA\u4E86\u4E00\u4E2A <code>new F()</code> \u5B9E\u4F8B\uFF0C\u800C\u4E14\uFF0C\u6CA1\u6709\u6539\u53D8\u539F\u6709\u7684 <code>Student</code> \u5B9A\u4E49\u7684\u539F\u578B\u94FE\u3002</p><p>\u5982\u679C\u628A\u7EE7\u627F\u8FD9\u4E2A\u52A8\u4F5C\u7528\u4E00\u4E2A <code>inherits()</code> \u51FD\u6570\u5C01\u88C5\u8D77\u6765\uFF0C\u8FD8\u53EF\u4EE5\u9690\u85CF <code>F</code> \u7684\u5B9A\u4E49\uFF0C\u5E76\u7B80\u5316\u4EE3\u7801:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">inherits</span><span class="token punctuation">(</span><span class="token parameter">Child<span class="token punctuation">,</span> Parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
  <span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A <code>inherits()</code> \u51FD\u6570\u53EF\u4EE5\u590D\u7528:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> props<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&quot;Unnamed&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">PrimaryStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Student</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u73B0\u539F\u578B\u7EE7\u627F\u94FE:</span>
<span class="token function">inherits</span><span class="token punctuation">(</span>PrimaryStudent<span class="token punctuation">,</span> Student<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7ED1\u5B9A\u5176\u4ED6\u65B9\u6CD5\u5230PrimaryStudent\u539F\u578B:</span>
<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getGrade</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>grade<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u539F\u578B\u7EE7\u627F\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u7EE7\u627F\u5C0F\u7ED3" aria-hidden="true">#</a> \u539F\u578B\u7EE7\u627F\u5C0F\u7ED3</h2><p>JavaScript \u7684\u539F\u578B\u7EE7\u627F\u5B9E\u73B0\u65B9\u5F0F\u5C31\u662F:</p><ol><li><p>\u5B9A\u4E49\u65B0\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u5728\u5185\u90E8\u7528 <code>call()</code> \u8C03\u7528\u5E0C\u671B\u201C\u7EE7\u627F\u201D\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u7ED1\u5B9A <code>this</code>\uFF1B</p></li><li><p>\u501F\u52A9\u4E2D\u95F4\u51FD\u6570 <code>F</code> \u5B9E\u73B0\u539F\u578B\u94FE\u7EE7\u627F\uFF0C\u6700\u597D\u901A\u8FC7\u5C01\u88C5\u7684 <code>inherits</code> \u51FD\u6570\u5B8C\u6210\uFF1B</p></li><li><p>\u7EE7\u7EED\u5728\u65B0\u7684\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u4E0A\u5B9A\u4E49\u65B0\u65B9\u6CD5\u3002</p></li></ol>`,26);function d(k,m){return p(),e("div",null,[l,u,o(" more "),r])}const g=t(i,[["render",d],["__file","extend.html.vue"]]);export{g as default};
