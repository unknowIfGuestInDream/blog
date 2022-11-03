import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,d as r,a as n,e as a,w as u,b as s,f as p,r as t}from"./app.70f43444.js";const d={},k=n("p",null,"\u7C7B\u578B\u65AD\u8A00(Type Assertion)\u53EF\u4EE5\u7528\u6765\u624B\u52A8\u6307\u5B9A\u4E00\u4E2A\u503C\u7684\u7C7B\u578B\u3002",-1),m=p(`<h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">&lt;</span>\u7C7B\u578B<span class="token operator">&gt;</span>\u503C<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>\u503C <span class="token keyword">as</span> \u7C7B\u578B<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728 tsx \u8BED\u6CD5(React \u7684 jsx \u8BED\u6CD5\u7684 ts \u7248)\u4E2D\u5FC5\u987B\u7528\u540E\u4E00\u79CD\u3002</p><h2 id="\u4F8B\u5B50-\u5C06\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u53D8\u91CF\u6307\u5B9A\u4E3A\u4E00\u4E2A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50-\u5C06\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u53D8\u91CF\u6307\u5B9A\u4E3A\u4E00\u4E2A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u4F8B\u5B50: \u5C06\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u53D8\u91CF\u6307\u5B9A\u4E3A\u4E00\u4E2A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B</h2>`,6),v=n("strong",null,"\u53EA\u80FD\u8BBF\u95EE\u6B64\u8054\u5408\u7C7B\u578B\u7684\u6240\u6709\u7C7B\u578B\u91CC\u5171\u6709\u7684\u5C5E\u6027\u6216\u65B9\u6CD5",-1),b=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> something<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(2,22): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>
<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u786E\u5B9E\u9700\u8981\u5728\u8FD8\u4E0D\u786E\u5B9A\u7C7B\u578B\u7684\u65F6\u5019\u5C31\u8BBF\u95EE\u5176\u4E2D\u4E00\u4E2A\u7C7B\u578B\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u6BD4\u5982:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>something<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> something<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> something<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(2,19): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>
<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>
<span class="token comment">// index.ts(3,26): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>
<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u83B7\u53D6 <code>something.length</code> \u7684\u65F6\u5019\u4F1A\u62A5\u9519\u3002</p><p>\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\uFF0C\u5C06 <code>something</code> \u65AD\u8A00\u6210 <code>string</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>something<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>something<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> something<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u578B\u65AD\u8A00\u7684\u7528\u6CD5\u5982\u4E0A\uFF0C\u5728\u9700\u8981\u65AD\u8A00\u7684\u53D8\u91CF\u524D\u52A0\u4E0A <code>&lt;Type&gt;</code> \u5373\u53EF\u3002</p><p><strong>\u7C7B\u578B\u65AD\u8A00\u4E0D\u662F\u7C7B\u578B\u8F6C\u6362\uFF0C\u65AD\u8A00\u6210\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u4E2D\u4E0D\u5B58\u5728\u7684\u7C7B\u578B\u662F\u4E0D\u5141\u8BB8\u7684</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">toBoolean</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>something<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(2,10): error TS2352: Type &#39;string | number&#39; cannot be converted to type &#39;boolean&#39;.</span>
<span class="token comment">//   Type &#39;number&#39; is not comparable to type &#39;boolean&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,10),g={href:"https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html",target:"_blank",rel:"noopener noreferrer"},h={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types",target:"_blank",rel:"noopener noreferrer"},y={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E4%BF%9D%E6%8A%A4%E4%B8%8E%E5%8C%BA%E5%88%86%E7%B1%BB%E5%9E%8B(type-guards-and-differentiating-types)",target:"_blank",rel:"noopener noreferrer"};function f(_,E){const o=t("RouterLink"),e=t("ExternalLinkIcon");return c(),l("div",null,[k,r(" more "),m,n("p",null,[a(o,{to:"/en/code/language/typescript/basics/union-types.html#%E8%AE%BF%E9%97%AE%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E6%88%96%E6%96%B9%E6%B3%95"},{default:u(()=>[s("\u4E4B\u524D\u63D0\u5230\u8FC7")]),_:1}),s("\uFF0C\u5F53 TypeScript \u4E0D\u786E\u5B9A\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u53D8\u91CF\u5230\u5E95\u662F\u54EA\u4E2A\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u6211\u4EEC"),v,s(":")]),b,n("ul",null,[n("li",null,[n("a",g,[s("TypeScript Deep Dive / Type Assertion"),a(e)])]),n("li",null,[n("a",h,[s("Advanced Types # Type Guards and Differentiating Types"),a(e)]),s("("),n("a",y,[s("\u4E2D\u6587\u7248"),a(e)]),s(")")])])])}const w=i(d,[["render",f],["__file","type-assertion.html.vue"]]);export{w as default};
