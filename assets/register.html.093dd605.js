import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as u,a as s,b as n,e as a,w as o,f as p,r as c}from"./app.cad6791d.js";const d={},r={id:"\u6CE8\u518C\u5C0F\u7A0B\u5E8F",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#\u6CE8\u518C\u5C0F\u7A0B\u5E8F","aria-hidden":"true"},"#",-1),v=s("p",null,[n("\u6BCF\u4E2A\u5C0F\u7A0B\u5E8F\u90FD\u9700\u8981\u5728 "),s("code",null,"app.js"),n(" \u4E2D\u8C03\u7528 "),s("code",null,"App"),n(" \u65B9\u6CD5\u6CE8\u518C\u5C0F\u7A0B\u5E8F\u793A\u4F8B\uFF0C\u7ED1\u5B9A\u751F\u547D\u5468\u671F\u56DE\u8C03\u51FD\u6570\u3001\u9519\u8BEF\u76D1\u542C\u548C\u9875\u9762\u4E0D\u5B58\u5728\u76D1\u542C\u51FD\u6570\u7B49\u3002")],-1),m=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something initial when launch.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when show.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when hide.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token string">&quot;I am global data&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6574\u4E2A\u5C0F\u7A0B\u5E8F\u53EA\u6709\u4E00\u4E2A App \u5B9E\u4F8B\uFF0C\u662F\u5168\u90E8\u9875\u9762\u5171\u4EAB\u7684\u3002</p><p>\u901A\u8FC7 <code>getApp</code> \u65B9\u6CD5\u83B7\u53D6\u5230\u5168\u5C40\u552F\u4E00\u7684 App \u793A\u4F8B\uFF0C\u83B7\u53D6 App \u4E0A\u7684\u6570\u636E\u6216\u8C03\u7528\u6CE8\u518C\u5728 App \u4E0A\u7684\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// xxx.js</span>
<span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appInstance<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I am global data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u518C\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u9875\u9762" aria-hidden="true">#</a> \u6CE8\u518C\u9875\u9762</h2><p>\u5BF9\u4E8E\u5C0F\u7A0B\u5E8F\u4E2D\u7684\u6BCF\u4E2A\u9875\u9762\uFF0C\u90FD\u9700\u8981\u5728\u9875\u9762\u5BF9\u5E94\u7684 js \u6587\u4EF6\u4E2D\u8FDB\u884C\u6CE8\u518C\uFF0C\u6307\u5B9A\u9875\u9762\u7684\u521D\u59CB\u6570\u636E\u3001\u751F\u547D\u5468\u671F\u56DE\u8C03\u3001\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7B49\u3002</p>`,6),b={id:"\u4F7F\u7528-page-\u6784\u9020\u5668\u6CE8\u518C\u9875\u9762",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#\u4F7F\u7528-page-\u6784\u9020\u5668\u6CE8\u518C\u9875\u9762","aria-hidden":"true"},"#",-1),g=p(`<p>\u7B80\u5355\u7684\u9875\u9762\u53EF\u4EE5\u4F7F\u7528 <code>Page()</code> \u8FDB\u884C\u6784\u9020\u3002</p><p>\u4EE3\u7801\u793A\u4F8B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//index.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;This is page data.&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u521B\u5EFA\u65F6\u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u51FA\u73B0\u5728\u524D\u53F0\u65F6\u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u9996\u6B21\u6E32\u67D3\u5B8C\u6BD5\u65F6\u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u4ECE\u524D\u53F0\u53D8\u4E3A\u540E\u53F0\u65F6\u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u9500\u6BC1\u65F6\u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u89E6\u53D1\u4E0B\u62C9\u5237\u65B0\u65F6\u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u89E6\u5E95\u65F6\u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShareAppMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u88AB\u7528\u6237\u5206\u4EAB\u65F6\u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u6EDA\u52A8\u65F6\u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u5C3A\u5BF8\u53D8\u5316\u65F6\u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onTabItemTap</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// tab \u70B9\u51FB\u65F6\u6267\u884C</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>pagePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E8B\u4EF6\u54CD\u5E94\u51FD\u6570</span>
  <span class="token function">viewTap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Set some data for updating view.&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// this is setData callback</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u81EA\u7531\u6570\u636E</span>
  <span class="token literal-property property">customData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hi</span><span class="token operator">:</span> <span class="token string">&quot;MINA&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f={id:"\u4F7F\u7528-component-\u6784\u9020\u5668\u6784\u9020\u9875\u9762",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#\u4F7F\u7528-component-\u6784\u9020\u5668\u6784\u9020\u9875\u9762","aria-hidden":"true"},"#",-1),x=p(`<p><code>Page</code> \u6784\u9020\u5668\u9002\u7528\u4E8E\u7B80\u5355\u7684\u9875\u9762\u3002\u4F46\u5BF9\u4E8E\u590D\u6742\u7684\u9875\u9762\uFF0C <code>Page</code> \u6784\u9020\u5668\u53EF\u80FD\u5E76\u4E0D\u597D\u7528\u3002</p><p>\u6B64\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Component</code> \u6784\u9020\u5668\u6765\u6784\u9020\u9875\u9762\u3002<code>Component</code> \u6784\u9020\u5668\u7684\u4E3B\u8981\u533A\u522B\u662F: \u65B9\u6CD5\u9700\u8981\u653E\u5728 <code>methods: { }</code> \u91CC\u9762\u3002</p><p>\u4EE3\u7801\u793A\u4F8B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;This is page data.&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9875\u9762\u521B\u5EFA\u65F6\u6267\u884C</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E0B\u62C9\u5237\u65B0\u65F6\u6267\u884C</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E8B\u4EF6\u54CD\u5E94\u51FD\u6570</span>
    <span class="token function">viewTap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u521B\u5EFA\u65B9\u5F0F\u975E\u5E38\u7C7B\u4F3C\u4E8E \u81EA\u5B9A\u4E49\u7EC4\u4EF6 \uFF0C\u53EF\u4EE5\u50CF\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E00\u6837\u4F7F\u7528 <code>behaviors</code> \u7B49\u9AD8\u7EA7\u7279\u6027\u3002</p><p>\u5177\u4F53\u7EC6\u8282\u8BF7\u9605\u8BFB <code>Component</code> \u6784\u9020\u5668 \u7AE0\u8282\u3002</p>`,6);function y(j,w){const t=c("Badge"),e=c("RouterLink");return l(),u("div",null,[s("h2",r,[k,n(" \u6CE8\u518C\u5C0F\u7A0B\u5E8F "),a(t,{text:"\u91CD\u8981",type:"error"})]),v,s("p",null,[n("\u8BE6\u7EC6\u7684\u53C2\u6570\u542B\u4E49\u548C\u4F7F\u7528\u8BF7\u53C2\u8003 "),a(e,{to:"/ja/code/mini-app/guide/service/app.html"},{default:o(()=>[n("App \u53C2\u8003\u6587\u6863")]),_:1}),n("\u3002")]),m,s("h3",b,[h,n(" \u4F7F\u7528 Page \u6784\u9020\u5668\u6CE8\u518C\u9875\u9762 "),a(t,{text:"\u91CD\u8981",type:"error"})]),g,s("p",null,[n("\u8BE6\u7EC6\u7684\u53C2\u6570\u542B\u4E49\u548C\u4F7F\u7528\u8BF7\u53C2\u8003 "),a(e,{to:"/ja/code/mini-app/guide/service/page.html"},{default:o(()=>[n("Page \u53C2\u8003\u6587\u6863")]),_:1}),n("\u3002")]),s("h3",f,[_,n(" \u4F7F\u7528 Component \u6784\u9020\u5668\u6784\u9020\u9875\u9762 "),a(t,{text:"\u521D\u5B66\u65E0\u9700\u4E86\u89E3",type:"grey"})]),x])}const D=i(d,[["render",y],["__file","register.html.vue"]]);export{D as default};
