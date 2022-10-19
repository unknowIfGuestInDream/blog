import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,d as o,a as s,b as n,e as c,f as l,r as u}from"./app.7e7f0dc0.js";const i={},r=s("p",null,"\u7528 Vue.js + Vue Router \u521B\u5EFA\u5355\u9875\u5E94\u7528\uFF0C\u662F\u975E\u5E38\u7B80\u5355\u7684\u3002\u4F7F\u7528 Vue.js \uFF0C\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u901A\u8FC7\u7EC4\u5408\u7EC4\u4EF6\u6765\u7EC4\u6210\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5F53\u60A8\u8981\u628A Vue Router \u6DFB\u52A0\u8FDB\u6765\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u7684\u662F\uFF0C\u5C06\u7EC4\u4EF6 (components) \u6620\u5C04\u5230\u8DEF\u7531 (routes)\uFF0C\u7136\u540E\u544A\u8BC9 Vue Router \u5728\u54EA\u91CC\u6E32\u67D3\u5B83\u4EEC\u3002",-1),k=l(`<p>\u4E0B\u9762\u662F\u4E2A\u57FA\u672C\u4F8B\u5B50:</p><h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue-router/dist/vue-router.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello App!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4F7F\u7528 router-link \u7EC4\u4EF6\u6765\u5BFC\u822A. --&gt;</span>
    <span class="token comment">&lt;!-- \u901A\u8FC7\u4F20\u5165 \`to\` \u5C5E\u6027\u6307\u5B9A\u94FE\u63A5. --&gt;</span>
    <span class="token comment">&lt;!-- &lt;router-link&gt; \u9ED8\u8BA4\u4F1A\u88AB\u6E32\u67D3\u6210\u4E00\u4E2A \`&lt;a&gt;\` \u6807\u7B7E --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u8DEF\u7531\u51FA\u53E3 --&gt;</span>
  <span class="token comment">&lt;!-- \u8DEF\u7531\u5339\u914D\u5230\u7684\u7EC4\u4EF6\u5C06\u6E32\u67D3\u5728\u8FD9\u91CC --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. \u5B9A\u4E49 (\u8DEF\u7531) \u7EC4\u4EF6\u3002</span>
<span class="token comment">// \u53EF\u4EE5\u4ECE\u5176\u4ED6\u6587\u4EF6 import \u8FDB\u6765</span>
<span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;&lt;div&gt;foo&lt;/div&gt;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Bar <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;&lt;div&gt;bar&lt;/div&gt;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u5B9A\u4E49\u8DEF\u7531</span>
<span class="token comment">// \u6BCF\u4E2A\u8DEF\u7531\u5E94\u8BE5\u6620\u5C04\u4E00\u4E2A\u7EC4\u4EF6\u3002\u5176\u4E2D&quot;component&quot; \u53EF\u4EE5\u662F</span>
<span class="token comment">// \u901A\u8FC7 Vue.extend() \u521B\u5EFA\u7684\u7EC4\u4EF6\u6784\u9020\u5668\uFF0C</span>
<span class="token comment">// \u6216\u8005\uFF0C\u53EA\u662F\u4E00\u4E2A\u7EC4\u4EF6\u914D\u7F6E\u5BF9\u8C61\u3002</span>
<span class="token comment">// \u6211\u4EEC\u665A\u70B9\u518D\u8BA8\u8BBA\u5D4C\u5957\u8DEF\u7531\u3002</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/foo&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Foo <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/bar&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 3. \u521B\u5EFA router \u5B9E\u4F8B\uFF0C\u7136\u540E\u4F20 \`routes\` \u914D\u7F6E</span>
<span class="token comment">// \u60A8\u8FD8\u53EF\u4EE5\u4F20\u522B\u7684\u914D\u7F6E\u53C2\u6570, \u4E0D\u8FC7\u5148\u8FD9\u4E48\u7B80\u5355\u7740\u5427\u3002</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> VueRouter<span class="token punctuation">.</span><span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> VueRouter<span class="token punctuation">.</span><span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span> <span class="token comment">// (\u7F29\u5199) \u76F8\u5F53\u4E8E routes: routes</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. \u521B\u5EFA\u548C\u6302\u8F7D\u6839\u5B9E\u4F8B\u3002</span>
<span class="token comment">// \u8BB0\u5F97\u8981\u901A\u8FC7 router \u914D\u7F6E\u53C2\u6570\u6CE8\u5165\u8DEF\u7531\uFF0C</span>
<span class="token comment">// \u4ECE\u800C\u8BA9\u6574\u4E2A\u5E94\u7528\u90FD\u6709\u8DEF\u7531\u529F\u80FD</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u73B0\u5728\uFF0C\u5E94\u7528\u5DF2\u7ECF\u542F\u52A8\u4E86!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u6CE8\u5165\u8DEF\u7531\u5668\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u4EFB\u4F55\u7EC4\u4EF6\u5185\u901A\u8FC7 <code>this.$router</code> \u8BBF\u95EE\u8DEF\u7531\u5668\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>this.$route</code> \u8BBF\u95EE\u5F53\u524D\u8DEF\u7531:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Home.vue</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">username</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6211\u4EEC\u5F88\u5FEB\u5C31\u4F1A\u770B\u5230 \`params\` \u662F\u4EC0\u4E48</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">goToDashboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isAuthenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;/dashboard&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u6587\u6863\u901A\u7BC7\u90FD\u5E38\u4F7F\u7528 <code>router</code> \u5B9E\u4F8B\u3002\u7559\u610F\u4E00\u4E0B <code>this.$router</code> \u548C <code>router</code> \u4F7F\u7528\u8D77\u6765\u5B8C\u5168\u4E00\u6837\u3002\u6211\u4EEC\u4F7F\u7528 <code>this.$router</code> \u7684\u539F\u56E0\u662F\u6211\u4EEC\u5E76\u4E0D\u60F3\u5728\u6BCF\u4E2A\u72EC\u7ACB\u9700\u8981\u5C01\u88C5\u8DEF\u7531\u7684\u7EC4\u4EF6\u4E2D\u90FD\u5BFC\u5165\u8DEF\u7531\u3002</p>`,8),d=s("code",null,"<router-link>",-1),v=s("code",null,".router-link-active",-1),m={href:"https://router.vuejs.org/zh/api/",target:"_blank",rel:"noopener noreferrer"};function g(b,h){const a=u("ExternalLinkIcon");return p(),e("div",null,[r,o(" more "),k,s("p",null,[n("\u8981\u6CE8\u610F\uFF0C\u5F53 "),d,n(" \u5BF9\u5E94\u7684\u8DEF\u7531\u5339\u914D\u6210\u529F\uFF0C\u5C06\u81EA\u52A8\u8BBE\u7F6E class \u5C5E\u6027\u503C "),v,n("\u3002\u67E5\u770B"),s("a",m,[n("API \u6587\u6863"),c(a)]),n("\u5B66\u4E60\u66F4\u591A\u76F8\u5173\u5185\u5BB9\u3002")])])}const f=t(i,[["render",g],["__file","demo.html.vue"]]);export{f as default};
