import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,d as l,a as n,e as a,w as u,b as s,f as r,r as t}from"./app.70f43444.js";const k={},d=n("p",null,"\u5982\u679C\u5B9A\u4E49\u4E86\u4E24\u4E2A\u76F8\u540C\u540D\u5B57\u7684\u51FD\u6570\u3001\u63A5\u53E3\u6216\u7C7B\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4F1A\u5408\u5E76\u6210\u4E00\u4E2A\u7C7B\u578B:",-1),m=n("h2",{id:"\u51FD\u6570\u7684\u5408\u5E76",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u51FD\u6570\u7684\u5408\u5E76","aria-hidden":"true"},"#"),s(" \u51FD\u6570\u7684\u5408\u5E76")],-1),v=r(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A5\u53E3\u7684\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7684\u5408\u5E76" aria-hidden="true">#</a> \u63A5\u53E3\u7684\u5408\u5E76</h2><p>\u63A5\u53E3\u4E2D\u7684\u5C5E\u6027\u5728\u5408\u5E76\u65F6\u4F1A\u7B80\u5355\u7684\u5408\u5E76\u5230\u4E00\u4E2A\u63A5\u53E3\u4E2D:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F8\u5F53\u4E8E:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C<strong>\u5408\u5E76\u7684\u5C5E\u6027\u7684\u7C7B\u578B\u5FC5\u987B\u662F\u552F\u4E00\u7684</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u867D\u7136\u91CD\u590D\u4E86\uFF0C\u4F46\u662F\u7C7B\u578B\u90FD\u662F \`number\`\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u62A5\u9519</span>
  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  price<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u7C7B\u578B\u4E0D\u4E00\u81F4\uFF0C\u4F1A\u62A5\u9519</span>
  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(5,3): error TS2403: Subsequent variable declarations must have the same type.  Variable &#39;price&#39; must be of type &#39;number&#39;, but here has type &#39;string&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u53E3\u4E2D\u65B9\u6CD5\u7684\u5408\u5E76\uFF0C\u4E0E\u51FD\u6570\u7684\u5408\u5E76\u4E00\u6837:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F8\u5F53\u4E8E:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u7684\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u5408\u5E76" aria-hidden="true">#</a> \u7C7B\u7684\u5408\u5E76</h2><p>\u7C7B\u7684\u5408\u5E76\u4E0E\u63A5\u53E3\u7684\u5408\u5E76\u89C4\u5219\u4E00\u81F4\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,16),b={href:"http://www.typescriptlang.org/docs/handbook/declaration-merging.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Declaration%20Merging.html",target:"_blank",rel:"noopener noreferrer"};function h(f,y){const p=t("RouterLink"),e=t("ExternalLinkIcon");return c(),i("div",null,[d,l(" more "),m,n("p",null,[a(p,{to:"/en/code/language/typescript/basics/type-of-function.html#%E9%87%8D%E8%BD%BD"},{default:u(()=>[s("\u4E4B\u524D\u5B66\u4E60\u8FC7")]),_:1}),s("\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u91CD\u8F7D\u5B9A\u4E49\u591A\u4E2A\u51FD\u6570\u7C7B\u578B:")]),v,n("ul",null,[n("li",null,[n("a",b,[s("Declaration Merging"),a(e)]),s("("),n("a",g,[s("\u4E2D\u6587\u7248"),a(e)]),s(")")])])])}const x=o(k,[["render",h],["__file","declaration-merging.html.vue"]]);export{x as default};
