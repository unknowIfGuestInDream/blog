import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,d as u,a as n,e as s,w as l,b as a,f as r,r as t}from"./app.70f43444.js";const d={},k=n("p",null,"Vuex \u662F Vue \u5B98\u65B9\u51FA\u54C1\u7684\u72B6\u6001\u7BA1\u7406\u7EC4\u4EF6\uFF0C\u662F\u4E00\u4E2A\u4E13\u4E3A Vue.js \u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u3002\u5B83\u91C7\u7528\u96C6\u4E2D\u5F0F\u5B58\u50A8\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\u3002",-1),v=r(`<p>\u6211\u4EEC\u53EF\u4EE5\u4ECE\u4E0B\u9762\u4E00\u4E2A\u7B80\u5355\u7684\u72B6\u6001\u7BA1\u7406\u6848\u4F8B\u5F00\u59CB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// state</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// view</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;{{ count }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token comment">// actions</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u72B6\u6001\u81EA\u7BA1\u7406\u5E94\u7528\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206:</p><ul><li>state: \u9A71\u52A8\u5E94\u7528\u7684\u6570\u636E\u6E90\uFF1B</li><li>view: \u4EE5\u58F0\u660E\u65B9\u5F0F\u5C06 state \u6620\u5C04\u5230\u89C6\u56FE\uFF1B</li><li>actions: \u54CD\u5E94\u5728 view \u4E0A\u7684\u7528\u6237\u8F93\u5165\u5BFC\u81F4\u7684\u72B6\u6001\u53D8\u5316\u3002</li></ul><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u8868\u793A\u201C\u5355\u5411\u6570\u636E\u6D41\u201D\u7406\u5FF5\u7684\u7B80\u5355\u793A\u610F:</p><p><img src="https://vuex.vuejs.org/flow.png" alt="\u56FE\u7247" loading="lazy"></p><p>\u4F46\u662F\uFF0C\u5F53\u6211\u4EEC\u7684\u5E94\u7528\u9047\u5230<strong>\u591A\u4E2A\u7EC4\u4EF6\u5171\u4EAB\u72B6\u6001</strong>\u65F6\uFF0C\u5355\u5411\u6570\u636E\u6D41\u7684\u7B80\u6D01\u6027\u5F88\u5BB9\u6613\u88AB\u7834\u574F:</p><ul><li>\u591A\u4E2A\u89C6\u56FE\u4F9D\u8D56\u4E8E\u540C\u4E00\u72B6\u6001\u3002</li><li>\u6765\u81EA\u4E0D\u540C\u89C6\u56FE\u7684\u884C\u4E3A\u9700\u8981\u53D8\u66F4\u540C\u4E00\u72B6\u6001\u3002</li></ul><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u8FDB\u884C\u590D\u6742\u7684\u7EC4\u4EF6\u901A\u4FE1\uFF0C\u8FD9\u5728\u5F00\u53D1\u4E2D\u5F88\u4E0D\u65B9\u4FBF\u3002</p><p><strong>\u6240\u4EE5\u6B64\u65F6</strong>\uFF0C\u6211\u4EEC\u5C31\u9700\u8981 <strong>Vuex</strong>!</p><h2 id="vuex-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#vuex-\u4ECB\u7ECD" aria-hidden="true">#</a> Vuex \u4ECB\u7ECD</h2><p>\u6BCF\u4E00\u4E2A Vuex \u5E94\u7528\u7684\u6838\u5FC3\u5C31\u662F <code>store</code> (\u4ED3\u5E93)\u3002\u201Cstore\u201D\u57FA\u672C\u4E0A\u5C31\u662F\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5B83\u5305\u542B\u7740\u60A8\u7684\u5E94\u7528\u4E2D\u5927\u90E8\u5206\u7684\u72B6\u6001 (<code>state</code>)\u3002Vuex \u548C\u5355\u7EAF\u7684\u5168\u5C40\u5BF9\u8C61\u6709\u4EE5\u4E0B\u4E24\u70B9\u4E0D\u540C:</p><p>Vuex \u7684\u72B6\u6001\u5B58\u50A8\u662F\u54CD\u5E94\u5F0F\u7684\u3002\u5F53 Vue \u7EC4\u4EF6\u4ECE <code>store</code> \u4E2D\u8BFB\u53D6\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u82E5 <code>store</code> \u4E2D\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u76F8\u5E94\u7684\u7EC4\u4EF6\u4E5F\u4F1A\u76F8\u5E94\u5730\u5F97\u5230\u9AD8\u6548\u66F4\u65B0\u3002</p><p>\u60A8\u4E0D\u80FD\u76F4\u63A5\u6539\u53D8 <code>store</code> \u4E2D\u7684\u72B6\u6001\u3002\u6539\u53D8 <code>store</code> \u4E2D\u7684\u72B6\u6001\u7684\u552F\u4E00\u9014\u5F84\u5C31\u662F\u663E\u5F0F\u5730\u63D0\u4EA4 (commit) <code>mutation</code>\u3002\u8FD9\u6837\u4F7F\u5F97\u6211\u4EEC\u53EF\u4EE5\u65B9\u4FBF\u5730\u8DDF\u8E2A\u6BCF\u4E00\u4E2A\u72B6\u6001\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u8BA9\u6211\u4EEC\u80FD\u591F\u5B9E\u73B0\u4E00\u4E9B\u5DE5\u5177\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u4E86\u89E3\u6211\u4EEC\u7684\u5E94\u7528\u3002</p><h3 id="\u6700\u7B80\u5355\u7684-store" tabindex="-1"><a class="header-anchor" href="#\u6700\u7B80\u5355\u7684-store" aria-hidden="true">#</a> \u6700\u7B80\u5355\u7684 Store</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> Vuex<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>store.state</code> \u6765\u83B7\u53D6\u72B6\u6001\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u901A\u8FC7 <code>store.commit</code> \u65B9\u6CD5\u89E6\u53D1\u72B6\u6001\u53D8\u66F4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;increment&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -&gt; 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\uFF0C\u4EFB\u4F55\u4F7F\u7528\u4E86 <code>store.state.count</code> \u7684\u7EC4\u4EF6\u90FD\u4F1A\u5F97\u5230\u5BF9\u5E94\u7684\u66F4\u65B0\u3002</p><p>\u901A\u8FC7\u63D0\u4EA4 mutation \u7684\u65B9\u5F0F\uFF0C\u800C\u975E\u76F4\u63A5\u6539\u53D8 <code>store.state.count</code>\uFF0C\u662F\u56E0\u4E3A\u6211\u4EEC\u60F3\u8981\u66F4\u660E\u786E\u5730\u8FFD\u8E2A\u5230\u72B6\u6001\u7684\u53D8\u5316\u3002\u8FD9\u4E2A\u7B80\u5355\u7684\u7EA6\u5B9A\u80FD\u591F\u8BA9\u60A8\u7684\u610F\u56FE\u66F4\u52A0\u660E\u663E\uFF0C\u8FD9\u6837\u60A8\u5728\u9605\u8BFB\u4EE3\u7801\u7684\u65F6\u5019\u80FD\u66F4\u5BB9\u6613\u5730\u89E3\u8BFB\u5E94\u7528\u5185\u90E8\u7684\u72B6\u6001\u6539\u53D8\u3002</p><h3 id="vuex-\u7684\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#vuex-\u7684\u610F\u4E49" aria-hidden="true">#</a> Vuex \u7684\u610F\u4E49</h3><p>\u5728\u5F15\u5165 Vuex \u4E4B\u540E\uFF0CVuex \u4F1A\u88AB\u5168\u5C40\u6302\u8F7D\uFF0C\u8FD9\u610F\u5473\u7740\u8BBF\u95EE\u4EFB\u4F55\u4E00\u4E2A\u7EC4\u4EF6\u7684 <code>this.$store</code> \u90FD\u4F1A\u6307\u5411\u540C\u4E00\u4E2A\u2014\u2014\u6211\u4EEC\u5F15\u5165\u7684 Vuex\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u6240\u6709\u7EC4\u4EF6\u5185\u4F7F\u7528 <code>this.$store.state</code> \u6765\u5171\u4EAB\u540C\u4E00\u4EFD\u6570\u636E\uFF0C\u5E76\u5728\u6570\u636E\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\u5F97\u5230\u66F4\u65B0\u3002</p><div class="custom-container info"><p class="custom-container-title">Info</p><p>\u5728 setup \u4E2D\uFF0C\u9700\u8981\u4F7F\u7528 useStore \u51FD\u6570\u6765\u83B7\u53D6 store \u5BF9\u8C61\u3002</p></div><p>\u4EFB\u4F55\u65F6\u5019\uFF0C\u63D0\u4EA4\u4E00\u4E2A <code>mutation</code> \u5230 Vuex\uFF0C\u4F1A\u89E6\u53D1\u8FD9\u4EFD\u5171\u4EAB\u6570\u636E\u7684\u53D8\u66F4\uFF0C\u5E76\u901A\u77E5\u5168\u5C40\u7684\u4EFB\u4F55\u4E00\u4E2A\u4F7F\u7528\u4E86\u53D8\u66F4\u6570\u636E\u7684\u7EC4\u4EF6\u8FDB\u884C\u53D8\u66F4\u3002</p><p>\u6240\u4EE5\u8BF4 Vuex \u901A\u8FC7\u5728\u5168\u5C40\u8303\u56F4\u5185\u7684\u6240\u6709\u7EC4\u4EF6\u5F15\u5165\uFF0C\u4F7F\u5F97\u5168\u5C40\u5171\u4EAB\u4E86\u540C\u4E00\u4EFD\u6570\u636E\uFF0C\u5168\u5C40\u7684\u4EFB\u4F55\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u66F4\u65B0\u8FD9\u4EFD\u6570\u636E\uFF0C\u540C\u65F6\u4E00\u65E6\u6570\u636E\u53D1\u751F\u66F4\u65B0\uFF0C\u5168\u5C40\u4EFB\u610F\u4F7F\u7528\u4E86\u66F4\u65B0\u6570\u636E\u7684\u7EC4\u4EF6\u4E5F\u4F1A\u7ACB\u5373\u7684\u5230\u66F4\u65B0\u901A\u77E5\u5E76\u5B8C\u6210\u81EA\u8EAB\u66F4\u65B0\u3002</p><p>\u8FD9\u4EFD\u6570\u636E (state) \u5C31\u6210\u4E3A\u72B6\u6001\uFF0C\u800C Vuex \u81EA\u8EAB\u5C31\u6210\u4E3A\u4E86\u4E00\u4E2A\u72B6\u6001\u6811\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u5168\u5C40\u7684\u72B6\u6001\u7EDF\u4E00\u3001\u72B6\u6001\u5171\u4EAB\u4E0E\u901A\u4FE1\u53D8\u5F97\u5341\u5206\u7B80\u5355\u3002</p><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h3><p>State \u5373\u662F\u5168\u5C40\u5171\u4EAB\u7684\u90A3\u4E00\u4EFD\u6570\u636E\u3002</p><p>\u6BCF\u4E2A\u4F7F\u7528\u4E86 State \u7EC4\u4EF6\u4E00\u822C\u53EA\u4F7F\u7528\u4E86\u5168\u5C40 State \u7684\u5C11\u91CF\u6570\u636E\uFF0C\u800C\u4E14\u5BF9\u5176\u4ED6\u90E8\u5206\u7684\u6570\u636E\u7ED3\u6784\u5E76\u4E0D\u77E5\u60C5\u3002</p><p>\u7531\u4E8E\u72B6\u6001\u88AB\u5168\u5C40\u5171\u4EAB\uFF0C\u4E3A\u4E86\u6574\u4E2A\u5E94\u7528\u7684\u7A33\u5B9A\u8003\u8651\uFF0C\u90A3\u4E48\u5C31\u4E0D\u53EF\u80FD\u5141\u8BB8\u4EFB\u4F55\u4E00\u4E2A\u7EC4\u4EF6\u968F\u610F\u6539\u53D8\u8FD9\u4E2A\u72B6\u6001\uFF0C\u5426\u5219\u4E00\u65E6\u5220\u9664\u6216\u6539\u53D8\u4E86\u4E00\u4E9B\u88AB\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528\u7684\u72B6\u6001\uFF0C\u5C31\u53EF\u80FD\u4F1A\u9020\u6210\u5176\u4ED6\u7EC4\u4EF6\u5F02\u5E38\u3002\u6240\u4EE5 State \u662F\u4E00\u4EFD\u54CD\u5E94\u5F0F\u7684\u53EA\u8BFB\u5C5E\u6027\u3002</p><div class="custom-container danger"><p class="custom-container-title">Warning</p><p>\u76F4\u63A5\u6539\u53D8 state \u662F\u4E25\u5389\u7981\u6B62\u7684!!!!</p></div><h3 id="mutation" tabindex="-1"><a class="header-anchor" href="#mutation" aria-hidden="true">#</a> Mutation</h3><p>\u56E0\u4E3A\u4E0A\u9762\u7684\u5B89\u5168\u7F18\u6545\uFF0CState \u88AB\u8BBE\u7F6E\u53EA\u8BFB\uFF0C\u90A3\u4E48\u6700\u5B89\u5168\u7684\u65B9\u5F0F\u5C31\u662F\u9884\u5148\u8BBE\u7F6E\u597D\u4E00\u7CFB\u5217\u6539\u53D8\u65B9\u5F0F\uFF0C\u6765\u6709\u6761\u7406\u3001\u5B89\u5168\u5730\u6539\u53D8 State \u7684\u6570\u636E\u3002</p><p>Mutation \u5C31\u662F\u8FD9\u6837\u662F\u8BBE\u7F6E\u7684\u3002\u6240\u6709 Mutation \u90FD\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u7ED9\u8FD9\u4E2A\u51FD\u6570\u4F20\u9012\u53C2\u6570\u3002\u5F53\u7EC4\u4EF6\u60F3\u8981\u6539\u53D8\u72B6\u6001\u65F6\uFF0C\u4ED6\u4EEC\u9700\u8981\u901A\u8FC7 <code>store.commit(&lt;mutation\u51FD\u6570\u540D&gt;, &lt;\u53C2\u6570&gt;)</code> \u7684\u65B9\u5F0F\uFF0C\u6765\u89E6\u53D1\u5BF9\u5E94\u7684 Mutation \u51FD\u6570\uFF0C\u5728 Mutation \u51FD\u6570\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6309\u7167\u9884\u5148\u8BBE\u7F6E\u597D\u7684\u65B9\u6CD5\u6539\u53D8 State\u3002</p><p>\u6240\u4EE5\u603B\u4E4B\uFF0CMutation \u5C31\u662F\u4E00\u7CFB\u5217\u8BBE\u7F6E\u597D\u7684\u51FD\u6570\uFF0C\u6BCF\u4E2A\u51FD\u6570\u662F\u4E00\u4E2A\u6539\u53D8 State \u7684\u65B9\u5F0F\uFF0C\u7EC4\u4EF6\u60F3\u8981\u6539\u53D8 State \u72B6\u6001\u7684\u65F6\u5019\uFF0C\u5C31\u8C03\u7528\u8FD9\u4E9B\u65B9\u6CD5\u3002\u8FD9\u6837\u5C31\u8FBE\u5230\u4E86\uFF0C\u65E2\u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u6539\u53D8\u72B6\u6001\uFF0C\u53C8\u963B\u6B62\u4E86\u7EC4\u4EF6\u968F\u610F\u6539\u53D8\u72B6\u6001\uFF0C\u4FDD\u969C\u4E86\u6574\u9897\u72B6\u6001\u6811\u7684\u7A33\u5B9A\u6027\u3002</p><h3 id="\u66F4\u591A" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A" aria-hidden="true">#</a> \u66F4\u591A</h3><p>\u5728 Vuex \u4E2D\uFF0C\u8FD8\u8BBE\u7F6E\u4E86 <code>Getter</code> \u548C <code>Action</code> \u4E24\u79CD\u6982\u5FF5\u3002</p><h4 id="getter" tabindex="-1"><a class="header-anchor" href="#getter" aria-hidden="true">#</a> Getter</h4><p>Getter \u662F State \u7684\u6D3E\u751F\u3002</p><p>\u6709\u65F6\u5019\u6211\u4EEC\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528 State \u4E2D\u7684\u6570\u636E\uFF0C\u800C\u662F\u9700\u8981\u4ECE <code>store</code> \u4E2D\u7684 <code>state</code> \u4E2D\u6D3E\u751F\u51FA\u4E00\u4E9B\u72B6\u6001\uFF0C\u4E5F\u5C31\u662F\u5BF9 State \u7684\u6570\u636E\u8FDB\u884C\u4E00\u4E9B\u5904\u7406\u518D\u4F7F\u7528\u3002</p><p>\u5982\u679C\u6709\u591A\u4E2A\u7EC4\u4EF6\u9700\u8981\u7528\u5230\u6B64\u5C5E\u6027\uFF0C\u6211\u4EEC\u8981\u4E48\u590D\u5236\u8FD9\u4E2A\u51FD\u6570\uFF0C\u6216\u8005\u62BD\u53D6\u5230\u4E00\u4E2A\u5171\u4EAB\u51FD\u6570\u7136\u540E\u5728\u591A\u5904\u5BFC\u5165\u5B83\u2014\u2014\u65E0\u8BBA\u54EA\u79CD\u65B9\u5F0F\u90FD\u4E0D\u662F\u5F88\u7406\u60F3\u3002</p><p>\u6240\u4EE5 Vuex \u5141\u8BB8\u6211\u4EEC\u5728 <code>store</code> \u4E2D\u5B9A\u4E49 \u201C<code>getter</code>\u201D (\u53EF\u4EE5\u8BA4\u4E3A\u662F <code>store</code> \u7684\u8BA1\u7B97\u5C5E\u6027)\u3002\u5C31\u50CF\u8BA1\u7B97\u5C5E\u6027\u4E00\u6837\uFF0C<code>getter</code> \u7684\u8FD4\u56DE\u503C\u4F1A\u6839\u636E\u5B83\u7684\u4F9D\u8D56\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u4E14\u53EA\u6709\u5F53\u5B83\u7684\u4F9D\u8D56\u503C\u53D1\u751F\u4E86\u6539\u53D8\u624D\u4F1A\u88AB\u91CD\u65B0\u8BA1\u7B97\u3002</p><h4 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h4><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u9700\u8981\u8FDE\u7EED\u6539\u53D8 state\uFF0C\u8FD9\u5C31\u610F\u5473\u7740\u6211\u4EEC\u8981\u63A5\u8FDE\u89E6\u53D1\u591A\u4E2A mutation\uFF0C\u4F46\u662F\u5982\u679C mutation \u662F\u5F02\u6B65\u7684(\u6BD4\u5982\u5305\u542B\u4E86\u7F51\u7EDC\u64CD\u4F5C)\uFF0C\u7EC4\u4EF6\u5C31\u4E0D\u77E5\u9053\u4F55\u65F6 mutation \u4F1A\u6267\u884C\u5B8C\u8FDB\u884C state \u7684\u6539\u53D8\uFF0C\u8FD9\u4E2A\u65F6\u5019 <code>Action</code> \u5C31\u88AB\u8BBE\u8BA1\u51FA\u6765\u3002</p><p>Action \u7C7B\u4F3C\u4E8E <code>mutation</code>\uFF0C\u4E0D\u540C\u5728\u4E8E:</p><ul><li><p>Action \u63D0\u4EA4\u7684\u662F <code>mutation</code>\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u53D8\u66F4\u72B6\u6001\u3002</p></li><li><p>Action \u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C\u3002</p></li></ul><p>\u6240\u4EE5\uFF0C\u8FD9\u6837\u7EC4\u4EF6\u53EA\u9700\u8981\u8C03\u7528 <code>Action</code>\uFF0C\u628A\u591A\u6B21\u63D0\u4EA4 <code>mutation</code> \u7684\u4EFB\u52A1\u4EA4\u7ED9 Action\uFF0C\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86\u590D\u6742 <code>mutation</code> \u7684\u63D0\u4EA4\u3002</p><hr><p>\u66F4\u591A\u8BE6\u7EC6\u7684\u4E1C\u897F\u5927\u5BB6\u8FD8\u662F\u8981\u770B\u6587\u6863!</p><h2 id="vuex-\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#vuex-\u6A21\u5757\u5316" aria-hidden="true">#</a> Vuex \u6A21\u5757\u5316</h2><p>\u53EF\u4EE5\u60F3\u8C61\uFF0C\u968F\u7740\u6574\u4E2A\u7F51\u7AD9\u67B6\u6784\u7684\u53D8\u5927\uFF0C\u7F51\u9875\u6570\u7684\u6269\u5F20\uFF0C\u72B6\u6001\u6811\u5C06\u4F1A\u8D8A\u6765\u8D8A\u5E9E\u5927\uFF0C\u53EF\u80FD\u6709\u6570\u5341\u4E0A\u767E\u4E2A state \u5B50\u9879\u548C\u540C\u7B49\u6570\u91CF\u7EA7\u7684 mutation\u3002</p><p>\u6240\u4EE5\u81EA\u7136\uFF0CVuex \u4E5F\u652F\u6301\u6A21\u5757\u5316\u3002</p><p>\u6BCF\u4E2A\u5B50 vuex \u5305\u542B\u4E86\u81EA\u8EAB\u5B8C\u6574\u7684 <code>state</code>\u3001<code>mutation</code> \u4E0E <code>action</code>\uFF0C\u901A\u8FC7\u4E3B Vuex \u7684 <code>module</code> \u5C5E\u6027\u5F15\u5165\uFF0C\u5728\u4F7F\u7528\u65F6\u4F1A\u628A\u5BF9\u5E94\u7684\u9879\u76EE\u6CE8\u5165\u81EA\u8EAB\u7684\u5BF9\u5E94\u90E8\u5206\u3002</p><h2 id="vuex-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#vuex-\u6848\u4F8B" aria-hidden="true">#</a> Vuex \u6848\u4F8B</h2>`,55),m=n("h2",{id:"\u6587\u6863\u5730\u5740",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6587\u6863\u5730\u5740","aria-hidden":"true"},"#"),a(" \u6587\u6863\u5730\u5740")],-1),h={href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"};function b(x,g){const e=t("RouterLink"),o=t("ExternalLinkIcon");return c(),i("div",null,[k,u(" more "),v,n("ul",null,[n("li",null,[s(e,{to:"/en/code/vue/vuex/demo.html"},{default:l(()=>[a("\u70B9\u51FB\u6B64\u5904")]),_:1})])]),m,n("p",null,[a("\u6587\u6863\u5730\u5740: "),n("a",h,[a("Vuex \u6559\u7A0B"),s(o)])])])}const _=p(d,[["render",b],["__file","get-started.html.vue"]]);export{_ as default};
