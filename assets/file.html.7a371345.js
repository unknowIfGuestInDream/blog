import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as e}from"./app.c23862ec.js";const t={},p=e(`<h2 id="index-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#index-\u6587\u4EF6" aria-hidden="true">#</a> Index \u6587\u4EF6</h2><p><code>public/index.html</code> \u6587\u4EF6\u662F\u4E00\u4E2A\u4F1A\u88AB\u5904\u7406\u7684\u6A21\u677F\u3002\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u8D44\u6E90\u94FE\u63A5\u4F1A\u88AB\u81EA\u52A8\u6CE8\u5165\u3002\u53E6\u5916\uFF0CVue CLI \u4E5F\u4F1A\u81EA\u52A8\u6CE8\u5165\u6253\u5305\u597D\u7684 JavaScript \u548C CSS \u6587\u4EF6\u7684\u8D44\u6E90\u94FE\u63A5\u3002\u5B83\u4F1A\u6700\u7EC8\u6210\u4E3A Vue \u5E94\u7528\u7684\u9875\u9762\u3002</p><h2 id="\u5904\u7406\u9759\u6001\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a> \u5904\u7406\u9759\u6001\u8D44\u6E90</h2><p>\u9759\u6001\u8D44\u6E90\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u8FDB\u884C\u5904\u7406:</p><ul><li><p>\u5728 JavaScript \u88AB\u5BFC\u5165\u6216\u5728 template/CSS \u4E2D\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84\u88AB\u5F15\u7528\u3002\u8FD9\u7C7B\u5F15\u7528\u4F1A\u88AB webpack \u5904\u7406\u3002</p></li><li><p>\u653E\u7F6E\u5728 <code>public</code> \u76EE\u5F55\u4E0B\u6216\u901A\u8FC7\u7EDD\u5BF9\u8DEF\u5F84\u88AB\u5F15\u7528\u3002\u8FD9\u7C7B\u8D44\u6E90\u5C06\u4F1A\u76F4\u63A5\u88AB\u62F7\u8D1D\uFF0C\u800C\u4E0D\u4F1A\u7ECF\u8FC7 webpack \u7684\u5904\u7406\u3002</p></li></ul><h3 id="\u4ECE\u76F8\u5BF9\u8DEF\u5F84\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u76F8\u5BF9\u8DEF\u5F84\u5BFC\u5165" aria-hidden="true">#</a> \u4ECE\u76F8\u5BF9\u8DEF\u5F84\u5BFC\u5165</h3><p>\u5F53\u60A8\u5728 JavaScript\u3001CSS \u6216 <code>*.vue</code> \u6587\u4EF6\u4E2D\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84 (\u5FC5\u987B\u4EE5 <code>.</code> \u5F00\u5934) \u5F15\u7528\u4E00\u4E2A\u9759\u6001\u8D44\u6E90\u65F6\uFF0C\u8BE5\u8D44\u6E90\u5C06\u4F1A\u88AB\u5305\u542B\u8FDB\u5165 webpack \u7684\u4F9D\u8D56\u56FE\u4E2D\u3002\u5728\u5176\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\uFF0C\u6240\u6709\u8BF8\u5982 <code>&lt;img src=&quot;...&quot;&gt;</code>\u3001<code>background: url(...)</code> \u548C CSS <code>@import</code> \u7684\u8D44\u6E90 URL <strong>\u90FD\u4F1A\u88AB\u89E3\u6790\u4E3A\u4E00\u4E2A\u6A21\u5757\u4F9D\u8D56</strong>\u3002</p><p>\u4F8B\u5982\uFF0C<code>url(./image.png)</code> \u4F1A\u88AB\u7FFB\u8BD1\u4E3A <code>require(&#39;./image.png&#39;)</code>\uFF0C\u800C:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./image.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u4F1A\u88AB\u7F16\u8BD1\u5230:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./image.png&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="url-\u8F6C\u6362\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#url-\u8F6C\u6362\u89C4\u5219" aria-hidden="true">#</a> URL \u8F6C\u6362\u89C4\u5219</h3><ul><li><p>\u5982\u679C URL \u662F\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84 (\u4F8B\u5982 <code>/images/foo.png</code>)\uFF0C\u5B83\u5C06\u4F1A\u88AB\u4FDD\u7559\u4E0D\u53D8\u3002</p></li><li><p>\u5982\u679C URL \u4EE5 <code>.</code> \u5F00\u5934\uFF0C\u5B83\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u76F8\u5BF9\u6A21\u5757\u8BF7\u6C42\u88AB\u89E3\u91CA\u4E14\u57FA\u4E8E\u60A8\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u7684\u76EE\u5F55\u7ED3\u6784\u8FDB\u884C\u89E3\u6790\u3002</p></li><li><p>\u5982\u679C URL \u4EE5 <code>~</code> \u5F00\u5934\uFF0C\u5176\u540E\u7684\u4EFB\u4F55\u5185\u5BB9\u90FD\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u6A21\u5757\u8BF7\u6C42\u88AB\u89E3\u6790\u3002\u8FD9\u610F\u5473\u7740\u60A8\u751A\u81F3\u53EF\u4EE5\u5F15\u7528 Node.js \u6A21\u5757\u4E2D\u7684\u8D44\u6E90:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>~some-npm-package/foo.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5982\u679C URL \u4EE5 <code>@</code> \u5F00\u5934\uFF0C\u5B83\u4E5F\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u6A21\u5757\u8BF7\u6C42\u88AB\u89E3\u6790\u3002\u5B83\u7684\u7528\u5904\u5728\u4E8E Vue CLI \u9ED8\u8BA4\u4F1A\u8BBE\u7F6E\u4E00\u4E2A\u6307\u5411 <code>&lt;projectRoot&gt;/src</code> \u7684\u522B\u540D <code>@</code>\u3002<strong>(\u4EC5\u4F5C\u7528\u4E8E\u6A21\u7248\u4E2D)</strong></p></li></ul><h3 id="public-\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#public-\u6587\u4EF6\u5939" aria-hidden="true">#</a> <code>public</code> \u6587\u4EF6\u5939</h3><p>\u4EFB\u4F55\u653E\u7F6E\u5728 <code>public</code> \u6587\u4EF6\u5939\u7684\u9759\u6001\u8D44\u6E90\u90FD\u4F1A\u88AB\u7B80\u5355\u7684\u590D\u5236\uFF0C\u800C\u4E0D\u7ECF\u8FC7 webpack\u3002\u60A8\u9700\u8981\u901A\u8FC7\u7EDD\u5BF9\u8DEF\u5F84\u6765\u5F15\u7528\u5B83\u4EEC\u3002</p><p>\u6CE8\u610F\u6211\u4EEC\u63A8\u8350\u5C06\u8D44\u6E90\u4F5C\u4E3A\u60A8\u7684\u6A21\u5757\u4F9D\u8D56\u56FE\u7684\u4E00\u90E8\u5206\u5BFC\u5165\uFF0C\u8FD9\u6837\u5B83\u4EEC\u4F1A\u901A\u8FC7 webpack \u7684\u5904\u7406\u5E76\u83B7\u5F97\u5982\u4E0B\u597D\u5904:</p><ul><li>\u811A\u672C\u548C\u6837\u5F0F\u8868\u4F1A\u88AB\u538B\u7F29\u4E14\u6253\u5305\u5728\u4E00\u8D77\uFF0C\u4ECE\u800C\u907F\u514D\u989D\u5916\u7684\u7F51\u7EDC\u8BF7\u6C42\u3002</li><li>\u6587\u4EF6\u4E22\u5931\u4F1A\u76F4\u63A5\u5728\u7F16\u8BD1\u65F6\u62A5\u9519\uFF0C\u800C\u4E0D\u662F\u5230\u4E86\u7528\u6237\u7AEF\u624D\u4EA7\u751F 404 \u9519\u8BEF\u3002</li><li>\u6700\u7EC8\u751F\u6210\u7684\u6587\u4EF6\u540D\u5305\u542B\u4E86\u5185\u5BB9\u54C8\u5E0C\uFF0C\u56E0\u6B64\u60A8\u4E0D\u5FC5\u62C5\u5FC3\u6D4F\u89C8\u5668\u4F1A\u7F13\u5B58\u5B83\u4EEC\u7684\u8001\u7248\u672C\u3002</li></ul><p><code>public</code> \u76EE\u5F55\u63D0\u4F9B\u7684\u662F\u4E00\u4E2A<strong>\u5E94\u6025\u624B\u6BB5</strong>\uFF0C\u5F53\u60A8\u901A\u8FC7\u7EDD\u5BF9\u8DEF\u5F84\u5F15\u7528\u5B83\u65F6\uFF0C\u7559\u610F\u5E94\u7528\u5C06\u4F1A\u90E8\u7F72\u5230\u54EA\u91CC\u3002\u5982\u679C\u60A8\u7684\u5E94\u7528\u6CA1\u6709\u90E8\u7F72\u5728\u57DF\u540D\u7684\u6839\u90E8\uFF0C\u90A3\u4E48\u60A8\u9700\u8981\u4E3A\u60A8\u7684 URL \u914D\u7F6E publicPath \u524D\u7F00:</p><ul><li><p>\u5728 <code>public/index.html</code> \u6216\u5176\u5B83\u901A\u8FC7 <code>html-webpack-plugin</code> \u7528\u4F5C\u6A21\u677F\u7684 HTML \u6587\u4EF6\u4E2D\uFF0C\u60A8\u9700\u8981\u901A\u8FC7 <code>&lt;%= BASE_URL %&gt;</code> \u8BBE\u7F6E\u94FE\u63A5\u524D\u7F00:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;%= BASE_URL %&gt;favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5728\u6A21\u677F\u4E2D\uFF0C\u60A8\u9996\u5148\u9700\u8981\u5411\u60A8\u7684\u7EC4\u4EF6\u4F20\u5165\u57FA\u7840 URL:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`\${publicPath}my-image.png\`<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="\u4F55\u65F6\u4F7F\u7528-public-\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528-public-\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u4F55\u65F6\u4F7F\u7528 <code>public</code> \u6587\u4EF6\u5939</h3><ul><li>\u60A8\u9700\u8981\u5728\u6784\u5EFA\u8F93\u51FA\u4E2D\u6307\u5B9A\u4E00\u4E2A\u6587\u4EF6\u7684\u540D\u5B57\u3002</li><li>\u60A8\u6709\u4E0A\u5343\u4E2A\u56FE\u7247\uFF0C\u9700\u8981\u52A8\u6001\u5F15\u7528\u5B83\u4EEC\u7684\u8DEF\u5F84\u3002</li><li>\u6709\u4E9B\u5E93\u53EF\u80FD\u548C webpack \u4E0D\u517C\u5BB9\uFF0C\u8FD9\u65F6\u60A8\u9664\u4E86\u5C06\u5176\u7528\u4E00\u4E2A\u72EC\u7ACB\u7684 <code>&lt;script&gt;</code> \u6807\u7B7E\u5F15\u5165\u6CA1\u6709\u522B\u7684\u9009\u62E9\u3002</li></ul>`,21),c=[p];function o(l,i){return n(),s("div",null,c)}const r=a(t,[["render",o],["__file","file.html.vue"]]);export{r as default};
