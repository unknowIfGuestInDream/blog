import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as p,a as e,f as t}from"./app.7e7f0dc0.js";const c={},o=e("p",null,"ES6 \u65B0\u5F15\u5165\u7684 Map \u4E0E Set \u662F\u5BF9\u6570\u7EC4\u548C\u5BF9\u8C61\u6B20\u7F3A\u529F\u80FD\u7684\u4E00\u79CD\u8865\u5145\u3002",-1),u=t(`<h2 id="map-\u7684\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#map-\u7684\u5F15\u5165" aria-hidden="true">#</a> Map \u7684\u5F15\u5165</h2><p>JavaScript \u7684\u9ED8\u8BA4\u5BF9\u8C61\u8868\u793A\u65B9\u5F0F <code>{}</code> \u53EF\u4EE5\u89C6\u4E3A\u5176\u4ED6\u8BED\u8A00\u4E2D\u7684 <code>Map</code> \u6216 <code>Dictionary</code> \u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5373\u4E00\u7EC4\u952E\u503C\u5BF9\u3002</p><p>\u4F46\u662F JavaScript \u7684\u5BF9\u8C61\u6709\u4E2A\u5C0F\u95EE\u9898\uFF0C\u5C31\u662F\u952E\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u3002\u4F46\u5B9E\u9645\u4E0A Number \u6216\u8005\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u4F5C\u4E3A\u952E\u4E5F\u662F\u975E\u5E38\u5408\u7406\u7684\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6700\u65B0\u7684 ES6 \u89C4\u8303\u5F15\u5165\u4E86\u65B0\u7684\u6570\u636E\u7C7B\u578B <code>Map</code>\u3002</p><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p><code>Map</code> \u662F\u4E00\u7EC4\u952E\u503C\u5BF9\u7684\u7ED3\u6784\uFF0C\u5177\u6709\u6781\u5FEB\u7684\u67E5\u627E\u901F\u5EA6\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBE\u8981\u6839\u636E\u540C\u5B66\u7684\u540D\u5B57\u67E5\u627E\u5BF9\u5E94\u7684\u6210\u7EE9\uFF0C\u5982\u679C\u7528 Array \u5B9E\u73B0\uFF0C\u9700\u8981\u4E24\u4E2A Array:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Michael&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tracy&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED9\u5B9A\u4E00\u4E2A\u540D\u5B57\uFF0C\u8981\u67E5\u627E\u5BF9\u5E94\u7684\u6210\u7EE9\uFF0C\u5C31\u5148\u8981\u5728 <code>names</code> \u4E2D\u627E\u5230\u5BF9\u5E94\u7684\u4F4D\u7F6E\uFF0C\u518D\u4ECE <code>scores</code> \u53D6\u51FA\u5BF9\u5E94\u7684\u6210\u7EE9\uFF0CArray \u8D8A\u957F\uFF0C\u8017\u65F6\u8D8A\u957F\u3002</p><p>\u5982\u679C\u7528 Map \u5B9E\u73B0\uFF0C\u53EA\u9700\u8981\u4E00\u4E2A <code>\u201C\u540D\u5B57\u201D-\u201C\u6210\u7EE9\u201D</code> \u7684\u5BF9\u7167\u8868\uFF0C\u76F4\u63A5\u6839\u636E\u540D\u5B57\u67E5\u627E\u6210\u7EE9\uFF0C\u65E0\u8BBA\u8FD9\u4E2A\u8868\u6709\u591A\u5927\uFF0C\u67E5\u627E\u901F\u5EA6\u90FD\u4E0D\u4F1A\u53D8\u6162\u3002\u7528 JavaScript \u5199\u4E00\u4E2A <code>Map</code> \u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&quot;Michael&quot;</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&quot;Tracy&quot;</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Michael&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 95</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521D\u59CB\u5316 <code>Map</code> \u9700\u8981\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u6216\u8005\u76F4\u63A5\u521D\u59CB\u5316\u4E00\u4E2A\u7A7A <code>Map</code>\u3002<code>Map</code> \u5177\u6709\u4EE5\u4E0B\u65B9\u6CD5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7A7AMap</span>

m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6DFB\u52A0\u65B0\u7684key-value</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
m<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u5B58\u5728key &#39;Adam&#39;: true</span>
m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 67</span>
m<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664key &#39;Adam&#39;</span>
m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u4E00\u4E2A <code>key</code> \u53EA\u80FD\u5BF9\u5E94\u4E00\u4E2A <code>value</code> \uFF0C\u6240\u4EE5\uFF0C\u591A\u6B21\u5BF9\u4E00\u4E2A <code>key</code> \u653E\u5165 <code>value</code>\uFF0C\u540E\u9762\u7684\u503C\u4F1A\u628A\u524D\u9762\u7684\u503C\u51B2\u6389:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 88</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2><p><code>Set</code> \u548C <code>Map</code> \u7C7B\u4F3C\uFF0C\u4E5F\u662F\u4E00\u7EC4 <code>key</code> \u7684\u96C6\u5408\uFF0C\u4F46\u4E0D\u5B58\u50A8 <code>value</code>\u3002\u7531\u4E8E <code>key</code> \u4E0D\u80FD\u91CD\u590D\uFF0C\u6240\u4EE5\uFF0C\u5728 <code>Set</code> \u4E2D\uFF0C\u6CA1\u6709\u91CD\u590D\u7684 <code>key</code>\u3002</p><p>\u8981\u521B\u5EFA\u4E00\u4E2A <code>Set</code>\uFF0C\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A <code>Array</code> \u4F5C\u4E3A\u8F93\u5165\uFF0C\u6216\u8005\u76F4\u63A5\u521B\u5EFA\u4E00\u4E2A\u7A7A <code>Set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7A7ASet</span>
<span class="token keyword">const</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u542B1, 2, 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u590D\u5143\u7D20\u5728 <code>Set</code> \u4E2D\u81EA\u52A8\u88AB\u8FC7\u6EE4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

s<span class="token punctuation">;</span> <span class="token comment">// Set {1, 2, 3, &quot;3&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u6570\u5B57 <code>3</code> \u548C\u5B57\u7B26\u4E32 <code>&#39;3&#39;</code> \u662F\u4E0D\u540C\u7684\u5143\u7D20\u3002</p><p>\u901A\u8FC7 <code>add(key)</code> \u65B9\u6CD5\u53EF\u4EE5\u6DFB\u52A0\u5143\u7D20\u5230 <code>Set</code> \u4E2D\uFF0C\u53EF\u4EE5\u91CD\u590D\u6DFB\u52A0\uFF0C\u4F46\u4E0D\u4F1A\u6709\u6548\u679C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s<span class="token punctuation">;</span> <span class="token comment">// Set {1, 2, 3, 4}</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s<span class="token punctuation">;</span> <span class="token comment">// \u4ECD\u7136\u662F Set {1, 2, 3, 4}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 <code>delete(key)</code> \u65B9\u6CD5\u53EF\u4EE5\u5220\u9664\u5143\u7D20:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

s<span class="token punctuation">;</span> <span class="token comment">// Set {1, 2, 3}</span>
s<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s<span class="token punctuation">;</span> <span class="token comment">// Set {1, 2}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>Map \u548C Set \u662F ES6 \u6807\u51C6\u65B0\u589E\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8BF7\u6839\u636E\u6D4F\u89C8\u5668\u7684\u652F\u6301\u60C5\u51B5\u51B3\u5B9A\u662F\u5426\u8981\u4F7F\u7528\u3002</p>`,28);function l(i,d){return s(),a("div",null,[o,p(" more "),u])}const m=n(c,[["render",l],["__file","map-and-set.html.vue"]]);export{m as default};
