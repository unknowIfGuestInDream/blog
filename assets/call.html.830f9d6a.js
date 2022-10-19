import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.7e7f0dc0.js";const p={},t=e(`<p>\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u8981\u4F7F\u7528\u5706\u62EC\u53F7\u8FD0\u7B97\u7B26\u3002\u5706\u62EC\u53F7\u4E4B\u4E2D\uFF0C\u53EF\u4EE5\u52A0\u5165\u51FD\u6570\u7684\u53C2\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE 10</span>
<span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E JavaScript \u5141\u8BB8\u4F20\u5165\u4EFB\u610F\u4E2A\u53C2\u6570\u800C\u4E0D\u5F71\u54CD\u8C03\u7528\uFF0C\u56E0\u6B64\u4F20\u5165\u7684\u53C2\u6570\u6BD4\u5B9A\u4E49\u7684\u53C2\u6570\u591A\u4E5F\u6CA1\u6709\u95EE\u9898\uFF0C\u867D\u7136\u51FD\u6570\u5185\u90E8\u5E76\u4E0D\u9700\u8981\u8FD9\u4E9B\u53C2\u6570:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;blablabla&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE 10</span>
<span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&quot;haha&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hehe&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F20\u5165\u7684\u53C2\u6570\u6BD4\u5B9A\u4E49\u7684\u5C11\u4E5F\u6CA1\u6709\u95EE\u9898:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u65F6 <code>abs(x)</code> \u51FD\u6570\u7684\u53C2\u6570 x \u5C06\u6536\u5230 <code>undefined</code>\uFF0C\u8BA1\u7B97\u7ED3\u679C\u4E3A <code>NaN</code>\u3002</p><p>\u8981\u907F\u514D\u6536\u5230 <code>undefined</code>\uFF0C\u53EF\u4EE5\u5BF9\u53C2\u6570\u8FDB\u884C\u68C0\u67E5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">!==</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&quot;Not a number&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token operator">-</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9012\u5F52\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u8C03\u7528" aria-hidden="true">#</a> \u9012\u5F52\u8C03\u7528</h2><p>\u51FD\u6570\u53EF\u4EE5\u8C03\u7528\u81EA\u8EAB\uFF0C\u8FD9\u5C31\u662F\u9012\u5F52(recursion)\u3002\u4E0B\u9762\u5C31\u662F\u901A\u8FC7\u9012\u5F52\uFF0C\u8BA1\u7B97\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">fib</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>fib</code> \u51FD\u6570\u5185\u90E8\u53C8\u8C03\u7528\u4E86 <code>fib</code>\uFF0C\u8BA1\u7B97\u5F97\u5230\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u7B2C 6 \u4E2A\u5143\u7D20\u662F 8\u3002</p>`,13),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","call.html.vue"]]);export{k as default};
