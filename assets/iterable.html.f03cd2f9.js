import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t,a as p,f as o}from"./app.963e91c8.js";const e={},c=p("p",null,"\u672C\u7AE0\u5BF9 JavaScript \u7684\u53EF\u904D\u5386\u6570\u636E\u7ED3\u6784\u53CA\u5982\u4F55\u904D\u5386\u505A\u4E00\u4E9B\u4ECB\u7ECD\u3002",-1),u=o(`<h2 id="iterable" tabindex="-1"><a class="header-anchor" href="#iterable" aria-hidden="true">#</a> iterable</h2><p>\u904D\u5386 Array \u53EF\u4EE5\u91C7\u7528\u4E0B\u6807\u5FAA\u73AF\uFF0C\u904D\u5386 Map \u548C Set \u5C31\u65E0\u6CD5\u4F7F\u7528\u4E0B\u6807\u3002\u4E3A\u4E86\u7EDF\u4E00\u96C6\u5408\u7C7B\u578B\uFF0CES6 \u6807\u51C6\u5F15\u5165\u4E86\u65B0\u7684 <code>iterable</code> \u7C7B\u578B\uFF0CArray\u3001Map \u548C Set \u90FD\u5C5E\u4E8E <code>iterable</code> \u7C7B\u578B\u3002</p><p>\u5177\u6709 <code>iterable</code> \u7C7B\u578B\u7684\u96C6\u5408\u53EF\u4EE5\u901A\u8FC7\u65B0\u7684 <code>for ... of</code> \u5FAA\u73AF\u6765\u904D\u5386\u3002</p><p><code>for ... of</code> \u5FAA\u73AF\u662F ES6 \u5F15\u5165\u7684\u65B0\u7684\u8BED\u6CD5\uFF0C\u7528 <code>for ... of</code> \u5FAA\u73AF\u904D\u5386\u96C6\u5408\uFF0C\u7528\u6CD5\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;y&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;z&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u904D\u5386Array</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u904D\u5386Set</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u904D\u5386Map</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u53EF\u80FD\u4F1A\u6709\u7591\u95EE\uFF0C<code>for ... of</code> \u5FAA\u73AF\u548C <code>for ... in</code> \u5FAA\u73AF\u6709\u4F55\u533A\u522B?</p><p><code>for ... in</code> \u5FAA\u73AF\u7531\u4E8E\u5386\u53F2\u9057\u7559\u95EE\u9898\uFF0C\u5B83\u904D\u5386\u7684\u5B9E\u9645\u4E0A\u662F\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u79F0\u3002\u4E00\u4E2A Array \u6570\u7EC4\u5B9E\u9645\u4E0A\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u7684\u6BCF\u4E2A\u5143\u7D20\u7684\u7D22\u5F15\u88AB\u89C6\u4E3A\u4E00\u4E2A\u5C5E\u6027\u3002</p><p>\u5F53\u6211\u4EEC\u624B\u52A8\u7ED9 Array \u5BF9\u8C61\u6DFB\u52A0\u4E86\u989D\u5916\u7684\u5C5E\u6027\u540E\uFF0C<code>for ... in</code> \u5FAA\u73AF\u5C06\u5E26\u6765\u610F\u60F3\u4E0D\u5230\u7684\u610F\u5916\u6548\u679C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;0&#39;, &#39;1&#39;, &#39;2&#39;, &#39;name&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>for ... in</code> \u5FAA\u73AF\u5C06\u628A name \u5305\u62EC\u5728\u5185\uFF0C\u4F46 Array \u7684 <code>length</code> \u5C5E\u6027\u5374\u4E0D\u5305\u62EC\u5728\u5185\u3002</p></div><p><code>for ... of</code> \u5FAA\u73AF\u5219\u5B8C\u5168\u4FEE\u590D\u4E86\u8FD9\u4E9B\u95EE\u9898\uFF0C\u5B83\u53EA\u5FAA\u73AF\u96C6\u5408\u672C\u8EAB\u7684\u5143\u7D20:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;A&#39;, &#39;B&#39;, &#39;C&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165\u65B0\u7684 <code>for ... of</code> \u5FAA\u73AF\u3002</p><p>\u7136\u800C\uFF0C\u66F4\u597D\u7684\u65B9\u5F0F\u662F\u76F4\u63A5\u4F7F\u7528 <code>iterable</code> \u5185\u7F6E\u7684 <code>forEach</code> \u65B9\u6CD5\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A\u51FD\u6570\uFF0C\u6BCF\u6B21\u8FED\u4EE3\u5C31\u81EA\u52A8\u56DE\u8C03\u8BE5\u51FD\u6570\u3002\u4EE5 Array \u4E3A\u4F8B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// element: \u6307\u5411\u5F53\u524D\u5143\u7D20\u7684\u503C</span>
  <span class="token comment">// index: \u6307\u5411\u5F53\u524D\u7D22\u5F15</span>
  <span class="token comment">// array: \u6307\u5411Array\u5BF9\u8C61\u672C\u8EAB</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element <span class="token operator">+</span> <span class="token string">&quot;, index = &quot;</span> <span class="token operator">+</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p><code>forEach()</code> \u65B9\u6CD5\u662F ES5.1 \u6807\u51C6\u5F15\u5165\u7684\uFF0C\u60A8\u9700\u8981\u6D4B\u8BD5\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301 (IE says No)\u3002</p></div><p>Set \u4E0E Array \u7C7B\u4F3C\uFF0C\u4F46 Set \u6CA1\u6709\u7D22\u5F15\uFF0C\u56E0\u6B64\u56DE\u8C03\u51FD\u6570\u7684\u524D\u4E24\u4E2A\u53C2\u6570\u90FD\u662F\u5143\u7D20\u672C\u8EAB:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> sameElement<span class="token punctuation">,</span> <span class="token keyword">set</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Map \u7684\u56DE\u8C03\u51FD\u6570\u53C2\u6570\u4F9D\u6B21\u4E3A <code>value</code>\u3001<code>key</code> \u548C <code>map</code> \u672C\u8EAB:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;y&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;z&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

m<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5BF9\u67D0\u4E9B\u53C2\u6570\u4E0D\u611F\u5174\u8DA3\uFF0C\u7531\u4E8E JavaScript \u7684\u51FD\u6570\u8C03\u7528\u4E0D\u8981\u6C42\u53C2\u6570\u5FC5\u987B\u4E00\u81F4\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5FFD\u7565\u5B83\u4EEC\u3002\u4F8B\u5982\uFF0C\u53EA\u9700\u8981\u83B7\u5F97 Array \u7684 <code>element</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function l(i,k){return s(),a("div",null,[c,t(" more "),u])}const v=n(e,[["render",l],["__file","iterable.html.vue"]]);export{v as default};
