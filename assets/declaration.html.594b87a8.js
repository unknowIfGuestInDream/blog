import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.6a7adab4.js";const e={},t=p(`<h2 id="\u503C\u7684\u4E13\u4E00\u6027" tabindex="-1"><a class="header-anchor" href="#\u503C\u7684\u4E13\u4E00\u6027" aria-hidden="true">#</a> \u503C\u7684\u4E13\u4E00\u6027</h2><p>CSS \u6BCF\u4E2A\u5C5E\u6027\u90FD\u4F1A\u6709\u4E14\u4EC5\u6709\u4E00\u4E2A\u503C\u3002</p><ul><li>\u5982\u679C\u60A8\u8BBE\u7F6E\u4E86\u591A\u4E2A\u503C\uFF0C\u6700\u7EC8\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u503C\u4F1A\u88AB\u5E94\u7528\u3001</li><li>\u5982\u679C\u60A8\u6CA1\u6709\u8BBE\u7F6E\u503C\uFF0C\u5219\u4F1A\u5E94\u7528\u9ED8\u8BA4\u503C\u3002\u9ED8\u8BA4\u503C\u53EF\u4EE5\u662F <code>unset</code>(\u672A\u8BBE\u7F6E), <code>inherit</code> (\u7EE7\u627F\u7236\u5C5E\u6027\u503C), <code>initial</code> (\u521D\u59CB\u503C)\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u5C5E\u6027\u672A\u77E5\u6216\u67D0\u4E2A\u503C\u5BF9\u7ED9\u5B9A\u5C5E\u6027\u65E0\u6548\uFF0C\u5219\u58F0\u660E\u88AB\u89C6\u4E3A\u65E0\u6548\uFF0C\u5E76\u88AB\u6D4F\u89C8\u5668\u7684 CSS \u5F15\u64CE\u5B8C\u5168\u5FFD\u7565\u3002</p></div><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><p>\u867D\u7136\u5927\u591A\u6570\u503C\u662F\u76F8\u5BF9\u7B80\u5355\u7684\u5173\u952E\u5B57\u6216\u6570\u503C\uFF0C\u4F46\u4E5F\u6709\u4E00\u4E9B\u53EF\u80FD\u7684\u503C\u4EE5\u51FD\u6570\u7684\u5F62\u5F0F\u51FA\u73B0\u3002\u4E00\u4E2A\u51FD\u6570\u7531\u51FD\u6570\u540D\u548C\u4E00\u4E9B\u62EC\u53F7\u7EC4\u6210\uFF0C\u5176\u4E2D\u653E\u7F6E\u4E86\u8BE5\u51FD\u6570\u7684\u5141\u8BB8\u503C\u3002</p><p><strong>\u6848\u4F8B</strong>: <code>calc()</code> \u51FD\u6570\u5141\u8BB8\u60A8\u5728 CSS \u4E2D\u8FDB\u884C\u7B80\u5355\u7684\u8BA1\u7B97:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>90% - 30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> rebeccapurple<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6848\u4F8B</strong>: <code>url()</code> \u5141\u8BB8\u60A8\u5F15\u5165\u5916\u90E8\u8D44\u6E90:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.logo</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo.svg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u901F\u8BB0\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u901F\u8BB0\u5C5E\u6027" aria-hidden="true">#</a> \u901F\u8BB0\u5C5E\u6027</h2><p>\u4E00\u4E9B\u5C5E\u6027\uFF0C\u5982 <code>font</code>, <code>background</code>, <code>padding</code>, <code>border</code>, <code>margin</code> \u7B49\u5C5E\u6027\u79F0\u4E3A\u901F\u8BB0\u5C5E\u6027--\u8FD9\u662F\u56E0\u4E3A\u5B83\u4EEC\u5141\u8BB8\u60A8\u5728\u4E00\u884C\u4E2D\u8BBE\u7F6E\u591A\u4E2A\u5C5E\u6027\u503C\uFF0C\u4ECE\u800C\u8282\u7701\u65F6\u95F4\u5E76\u4F7F\u4EE3\u7801\u66F4\u6574\u6D01\u3002</p><p><strong>\u6848\u4F8B</strong>: \u4EE5\u4E0B\u4E24\u4E2A CSS \u662F\u5B8C\u5168\u7B49\u4EF7\u7684</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 15px 15px 5px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg-graphic.png<span class="token punctuation">)</span></span> 10px 10px repeat-x fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg-graphic.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-x<span class="token punctuation">;</span>
  <span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[t];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","declaration.html.vue"]]);export{r as default};
