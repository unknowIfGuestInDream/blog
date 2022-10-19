import{_ as n,a as s}from"./protos2.e4115794.js";import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,d as o,a as p,f as c}from"./app.7e7f0dc0.js";const i={},l=p("p",null,"JavaScript \u5BF9\u6BCF\u4E2A\u521B\u5EFA\u7684\u5BF9\u8C61\u90FD\u4F1A\u8BBE\u7F6E\u4E00\u4E2A\u539F\u578B\uFF0C\u6307\u5411\u5B83\u7684\u539F\u578B\u5BF9\u8C61\u3002",-1),u=c(`<p>\u5F53\u6211\u4EEC\u7528 <code>obj.xxx</code> \u8BBF\u95EE\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u65F6\uFF0CJavaScript \u5F15\u64CE\u5148\u5728\u5F53\u524D\u5BF9\u8C61\u4E0A\u67E5\u627E\u8BE5\u5C5E\u6027\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u5C31\u5230\u5176\u539F\u578B\u5BF9\u8C61\u4E0A\u627E\uFF0C\u5982\u679C\u8FD8\u6CA1\u6709\u627E\u5230\uFF0C\u5C31\u4E00\u76F4\u4E0A\u6EAF\u5230 <code>Object.prototype</code> \u5BF9\u8C61\uFF0C\u6700\u540E\uFF0C\u5982\u679C\u8FD8\u6CA1\u6709\u627E\u5230\uFF0C\u5C31\u53EA\u80FD\u8FD4\u56DE <code>undefined</code>\u3002</p><p>\u4F8B\u5982\uFF0C\u521B\u5EFA\u4E00\u4E2A Array \u5BF9\u8C61:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u539F\u578B\u94FE\u662F:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arr<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Array.prototype</code> \u5B9A\u4E49\u4E86 <code>indexOf()</code>\u3001<code>shift()</code> \u7B49\u65B9\u6CD5\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5728\u6240\u6709\u7684 Array \u5BF9\u8C61\u4E0A\u76F4\u63A5\u8C03\u7528\u8FD9\u4E9B\u65B9\u6CD5\u3002</p><p>\u5F53\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u65F6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u51FD\u6570\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u7684\u539F\u578B\u94FE\u662F:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>foo<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7531\u4E8E <code>Function.prototype</code> \u5B9A\u4E49\u4E86 <code>apply()</code> \u7B49\u65B9\u6CD5\uFF0C\u56E0\u6B64\uFF0C\u6240\u6709\u51FD\u6570\u90FD\u53EF\u4EE5\u8C03\u7528 <code>apply()</code> \u65B9\u6CD5\u3002</p><p>\u5F88\u5BB9\u6613\u60F3\u5230\uFF0C\u5982\u679C\u539F\u578B\u94FE\u5F88\u957F\uFF0C\u90A3\u4E48\u8BBF\u95EE\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u5C31\u4F1A\u56E0\u4E3A\u82B1\u66F4\u591A\u7684\u65F6\u95F4\u67E5\u627E\u800C\u53D8\u5F97\u66F4\u6162\uFF0C\u56E0\u6B64\u8981\u6CE8\u610F\u4E0D\u8981\u628A\u539F\u578B\u94FE\u641E\u5F97\u592A\u957F\u3002</p><h2 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h2><p>\u9664\u4E86\u76F4\u63A5\u7528 <code>{ ... }</code> \u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u5916\uFF0CJavaScript \u8FD8\u53EF\u4EE5\u7528\u4E00\u79CD\u6784\u9020\u51FD\u6570\u7684\u65B9\u6CD5\u6765\u521B\u5EFA\u5BF9\u8C61\u3002\u5B83\u7684\u7528\u6CD5\u662F\uFF0C\u5148\u5B9A\u4E49\u4E00\u4E2A\u6784\u9020\u51FD\u6570:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u4F1A\u95EE\uFF0C\u54A6\uFF0C\u8FD9\u4E0D\u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570\u5417?</p><p>\u8FD9\u786E\u5B9E\u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570\uFF0C\u4F46\u662F\u5728 JavaScript \u4E2D\uFF0C\u53EF\u4EE5\u7528\u5173\u952E\u5B57 <code>new</code> \u6765\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;\u5C0F\u660E&#39;</span>
xiaoming<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello, \u5C0F\u660E!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u5982\u679C\u4E0D\u5199 <code>new</code>\uFF0C\u8FD9\u5C31\u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570\uFF0C\u5B83\u8FD4\u56DE <code>undefined</code>\u3002\u4F46\u662F\uFF0C\u5982\u679C\u5199\u4E86 <code>new</code>\uFF0C\u5B83\u5C31\u53D8\u6210\u4E86\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u5B83\u7ED1\u5B9A\u7684 <code>this</code> \u6307\u5411\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u5E76\u9ED8\u8BA4\u8FD4\u56DE <code>this</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u9700\u8981\u5728\u6700\u540E\u5199 <code>return this;</code>\u3002</p><p>\u65B0\u521B\u5EFA\u7684 <code>xiaoming</code> \u7684\u539F\u578B\u94FE\u662F:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xiaoming<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>xiaoming</code> \u7684\u539F\u578B\u6307\u5411\u51FD\u6570 <code>Student</code> \u7684\u539F\u578B\u3002\u5982\u679C\u60A8\u53C8\u521B\u5EFA\u4E86 <code>xiaohong</code>\u3001<code>xiaojun</code>\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u5BF9\u8C61\u7684\u539F\u578B\u4E0E <code>xiaoming</code> \u662F\u4E00\u6837\u7684:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xiaoming \u2198
xiaohong <span class="token operator">-</span>\u2192 <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token keyword">null</span>
xiaojun  \u2197
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528 <code>new Student()</code> \u521B\u5EFA\u7684\u5BF9\u8C61\u8FD8\u4ECE\u539F\u578B\u4E0A\u83B7\u5F97\u4E86\u4E00\u4E2A <code>constructor</code> \u5C5E\u6027\uFF0C\u5B83\u6307\u5411\u51FD\u6570 <code>Student</code> \u672C\u8EAB:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xiaoming<span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Student<span class="token punctuation">;</span> <span class="token comment">// true</span>

Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>

xiaoming <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u6655\u4E86\u5427? \u7528\u4E00\u5F20\u56FE\u6765\u8868\u793A\u8FD9\u4E9B\u4E71\u4E03\u516B\u7CDF\u7684\u5173\u7CFB\u5C31\u662F:</p><p><img src="`+n+`" alt="protos" loading="lazy"></p><p>\u7EA2\u8272\u7BAD\u5934\u662F\u539F\u578B\u94FE\u3002\u6CE8\u610F\uFF0C<code>Student.prototype</code> \u6307\u5411\u7684\u5BF9\u8C61\u5C31\u662F <code>xiaoming</code>\u3001<code>xiaohong</code> \u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u539F\u578B\u5BF9\u8C61\u81EA\u5DF1\u8FD8\u6709\u4E2A\u5C5E\u6027 <code>constructor</code>\uFF0C\u6307\u5411 <code>Student</code> \u51FD\u6570\u672C\u8EAB\u3002</p><p>\u53E6\u5916\uFF0C\u51FD\u6570 <code>Student</code> \u6070\u597D\u6709\u4E2A\u5C5E\u6027 <code>prototype</code> \u6307\u5411 <code>xiaoming</code>\u3001<code>xiaohong</code> \u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u4F46\u662F <code>xiaoming</code>\u3001<code>xiaohong</code> \u8FD9\u4E9B\u5BF9\u8C61\u53EF\u6CA1\u6709 <code>prototype</code> \u8FD9\u4E2A\u5C5E\u6027\uFF0C\u4E0D\u8FC7\u53EF\u4EE5\u7528 <code>__proto__</code> \u8FD9\u4E2A\u975E\u6807\u51C6\u7528\u6CD5\u6765\u67E5\u770B\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u5C31\u8BA4\u4E3A <code>xiaoming</code>\u3001<code>xiaohong</code> \u8FD9\u4E9B\u5BF9\u8C61\u201C\u7EE7\u627F\u201D\u81EA <code>Student</code>\u3002</p><p>\u4E0D\u8FC7\u8FD8\u6709\u4E00\u4E2A\u5C0F\u95EE\u9898\uFF0C\u6CE8\u610F\u89C2\u5BDF:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xiaoming<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;\u5C0F\u660E&#39;</span>
xiaohong<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;\u5C0F\u7EA2&#39;</span>
xiaoming<span class="token punctuation">.</span>hello<span class="token punctuation">;</span> <span class="token comment">// function: Student.hello()</span>
xiaohong<span class="token punctuation">.</span>hello<span class="token punctuation">;</span> <span class="token comment">// function: Student.hello()</span>
xiaoming<span class="token punctuation">.</span>hello <span class="token operator">===</span> xiaohong<span class="token punctuation">.</span>hello<span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>xiaoming</code> \u548C <code>xiaohong</code> \u5404\u81EA\u7684 <code>name</code> \u4E0D\u540C\uFF0C\u8FD9\u662F\u5BF9\u7684\uFF0C\u5426\u5219\u6211\u4EEC\u65E0\u6CD5\u533A\u5206\u8C01\u662F\u8C01\u4E86\u3002</p><p><code>xiaoming</code> \u548C <code>xiaohong</code> \u5404\u81EA\u7684 <code>hello</code> \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F46\u5B83\u4EEC\u662F\u4E24\u4E2A\u4E0D\u540C\u7684\u51FD\u6570\uFF0C\u867D\u7136\u51FD\u6570\u540D\u79F0\u548C\u4EE3\u7801\u90FD\u662F\u76F8\u540C\u7684!</p><p>\u5982\u679C\u6211\u4EEC\u901A\u8FC7 <code>new Student()</code> \u521B\u5EFA\u4E86\u5F88\u591A\u5BF9\u8C61\uFF0C\u8FD9\u4E9B\u5BF9\u8C61\u7684 <code>hello</code> \u51FD\u6570\u5B9E\u9645\u4E0A\u53EA\u9700\u8981\u5171\u4EAB\u540C\u4E00\u4E2A\u51FD\u6570\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8282\u7701\u5F88\u591A\u5185\u5B58\u3002</p><p>\u8981\u8BA9\u521B\u5EFA\u7684\u5BF9\u8C61\u5171\u4EAB\u4E00\u4E2A <code>hello</code> \u51FD\u6570\uFF0C\u6839\u636E\u5BF9\u8C61\u7684\u5C5E\u6027\u67E5\u627E\u539F\u5219\uFF0C\u6211\u4EEC\u53EA\u8981\u628A <code>hello</code> \u51FD\u6570\u79FB\u52A8\u5230 <code>xiaoming</code>\u3001<code>xiaohong</code> \u8FD9\u4E9B\u5BF9\u8C61\u5171\u540C\u7684\u539F\u578B\u4E0A\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E5F\u5C31\u662F <code>Student.prototype</code>:</p><p><img src="`+s+`" alt="protos2" loading="lazy"></p><p>\u4FEE\u6539\u4EE3\u7801\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528 <code>new</code> \u521B\u5EFA\u57FA\u4E8E\u539F\u578B\u7684 JavaScript \u7684\u5BF9\u8C61\u5C31\u662F\u8FD9\u4E48\u7B80\u5355!</p><h2 id="\u5FD8\u8BB0\u5199-new-\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#\u5FD8\u8BB0\u5199-new-\u600E\u4E48\u529E" aria-hidden="true">#</a> \u5FD8\u8BB0\u5199 new \u600E\u4E48\u529E</h2><p>\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u88AB\u5B9A\u4E49\u4E3A\u7528\u4E8E\u521B\u5EFA\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\uFF0C\u4F46\u662F\u8C03\u7528\u65F6\u5FD8\u8BB0\u4E86\u5199 new \u600E\u4E48\u529E?</p><p>\u5728 strict \u6A21\u5F0F\u4E0B\uFF0C<code>this.name = name</code> \u5C06\u62A5\u9519\uFF0C\u56E0\u4E3A <code>this</code> \u7ED1\u5B9A\u4E3A <code>undefined</code>\uFF0C\u5728\u975E <code>strict</code> \u6A21\u5F0F\u4E0B\uFF0C<code>this.name = name</code> \u4E0D\u62A5\u9519\uFF0C\u56E0\u4E3A <code>this</code> \u7ED1\u5B9A\u4E3A <code>window</code>\uFF0C\u4E8E\u662F\u65E0\u610F\u95F4\u521B\u5EFA\u4E86\u5168\u5C40\u53D8\u91CF <code>name</code>\uFF0C\u5E76\u4E14\u8FD4\u56DE <code>undefined</code>\uFF0C\u8FD9\u4E2A\u7ED3\u679C\u66F4\u7CDF\u7CD5\u3002</p><p>\u6240\u4EE5\uFF0C\u8C03\u7528\u6784\u9020\u51FD\u6570\u5343\u4E07\u4E0D\u8981\u5FD8\u8BB0\u5199 <code>new</code>\u3002\u4E3A\u4E86\u533A\u5206\u666E\u901A\u51FD\u6570\u548C\u6784\u9020\u51FD\u6570\uFF0C\u6309\u7167\u7EA6\u5B9A\uFF0C\u6784\u9020\u51FD\u6570\u9996\u5B57\u6BCD\u5E94\u5F53\u5927\u5199\uFF0C\u800C\u666E\u901A\u51FD\u6570\u9996\u5B57\u6BCD\u5E94\u5F53\u5C0F\u5199\uFF0C\u8FD9\u6837\uFF0C\u4E00\u4E9B\u8BED\u6CD5\u68C0\u67E5\u5DE5\u5177\u5982 ESLint \u5C06\u53EF\u4EE5\u5E2E\u60A8\u68C0\u6D4B\u5230\u6F0F\u5199\u7684 <code>new</code>\u3002</p><p>\u6700\u540E\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7F16\u5199\u4E00\u4E2A <code>createStudent()</code> \u51FD\u6570\uFF0C\u5728\u5185\u90E8\u5C01\u88C5\u6240\u6709\u7684 <code>new</code> \u64CD\u4F5C\u3002\u4E00\u4E2A\u5E38\u7528\u7684\u7F16\u7A0B\u6A21\u5F0F\u50CF\u8FD9\u6837:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> props<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&quot;\u533F\u540D&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u4E3A&#39;\u533F\u540D&#39;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u4E3A1</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>props <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A <code>createStudent()</code> \u51FD\u6570\u6709\u51E0\u4E2A\u5DE8\u5927\u7684\u4F18\u70B9: \u4E00\u662F\u4E0D\u9700\u8981 <code>new</code> \u6765\u8C03\u7528\uFF0C\u4E8C\u662F\u53C2\u6570\u975E\u5E38\u7075\u6D3B\uFF0C\u53EF\u4EE5\u4E0D\u4F20\uFF0C\u4E5F\u53EF\u4EE5\u8FD9\u4E48\u4F20:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token function">createStudent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span>grade<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u521B\u5EFA\u7684\u5BF9\u8C61\u6709\u5F88\u591A\u5C5E\u6027\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u4F20\u9012\u9700\u8981\u7684\u67D0\u4E9B\u5C5E\u6027\uFF0C\u5269\u4E0B\u7684\u5C5E\u6027\u53EF\u4EE5\u7528\u9ED8\u8BA4\u503C\u3002\u7531\u4E8E\u53C2\u6570\u662F\u4E00\u4E2A <code>Object</code>\uFF0C\u6211\u4EEC\u65E0\u9700\u8BB0\u5FC6\u53C2\u6570\u7684\u987A\u5E8F\u3002\u5982\u679C\u6070\u597D\u4ECE JSON \u62FF\u5230\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u521B\u5EFA\u51FA <code>xiaoming</code>\u3002</p>`,49);function d(r,k){return e(),t("div",null,[l,o(" more "),u])}const b=a(i,[["render",d],["__file","create.html.vue"]]);export{b as default};
