import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,d as c,a as n,b as s,e,f as l,r as i}from"./app.7e7f0dc0.js";const r={},u=n("p",null,"\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\u7528\u6765\u7EA6\u675F\u53D6\u503C\u53EA\u80FD\u662F\u67D0\u51E0\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u4E2A\u3002",-1),d=l(`<h2 id="\u7B80\u5355\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u7B80\u5355\u7684\u4F8B\u5B50</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">EventNames</span> <span class="token operator">=</span> <span class="token string">&quot;click&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;scroll&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;mousemove&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> Element<span class="token punctuation">,</span> event<span class="token operator">:</span> EventNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something</span>
<span class="token punctuation">}</span>

<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;scroll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CA1\u95EE\u9898</span>
<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;dbclick&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u62A5\u9519\uFF0Cevent \u4E0D\u80FD\u4E3A &#39;dbclick&#39;</span>

<span class="token comment">// index.ts(7,47): error TS2345: Argument of type &#39;&quot;dbclick&quot;&#39; is not assignable to parameter of type &#39;EventNames&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>type</code> \u5B9A\u4E86\u4E00\u4E2A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B <code>EventNames</code>\uFF0C\u5B83\u53EA\u80FD\u53D6\u4E09\u79CD\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u79CD\u3002</p><p>\u6CE8\u610F\uFF0C<strong>\u7C7B\u578B\u522B\u540D\u4E0E\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\u90FD\u662F\u4F7F\u7528 <code>type</code> \u8FDB\u884C\u5B9A\u4E49\u3002</strong></p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,5),k={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"};function v(h,g){const a=i("ExternalLinkIcon");return o(),p("div",null,[u,c(" more "),d,n("ul",null,[n("li",null,[n("a",k,[s("Advanced Types # Type Aliases"),e(a)]),s("("),n("a",m,[s("\u4E2D\u6587\u7248"),e(a)]),s(")")])])])}const f=t(r,[["render",v],["__file","string-literal-types.html.vue"]]);export{f as default};
