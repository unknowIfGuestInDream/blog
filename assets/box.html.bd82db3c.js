import{_ as i}from"./box-model.7fc67d23.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as r,d as u,e,w as t,a as n,b as s,f as a,r as l}from"./app.c23862ec.js";const k={},b=n("p",null,"\u5728 CSS \u4E2D\uFF0C\u6240\u6709\u7684\u5143\u7D20\u90FD\u88AB\u4E00\u4E2A\u4E2A\u7684\u201C\u76D2\u5B50(box)\u201D\u5305\u56F4\u7740\u3002",-1),m=a('<h2 id="\u5757\u7EA7\u4E0E\u5185\u8054" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u4E0E\u5185\u8054" aria-hidden="true">#</a> \u5757\u7EA7\u4E0E\u5185\u8054</h2><p>\u5728 CSS \u4E2D\u6211\u4EEC\u5E7F\u6CDB\u5730\u4F7F\u7528\u4E24\u79CD\u201C\u76D2\u5B50\u201D \u2014\u2014 \u5757\u7EA7\u76D2\u5B50 (block box) \u548C \u5185\u8054\u76D2\u5B50 (inline box)\u3002\u8FD9\u4E24\u79CD\u76D2\u5B50\u4F1A\u5728\u9875\u9762\u6D41(page flow)\u548C\u5143\u7D20\u4E4B\u95F4\u7684\u5173\u7CFB\u65B9\u9762\u8868\u73B0\u51FA\u4E0D\u540C\u7684\u884C\u4E3A:</p><p>\u4E00\u4E2A\u88AB\u5B9A\u4E49\u6210\u5757\u7EA7\u7684(block)\u76D2\u5B50\u4F1A\u8868\u73B0\u51FA\u4EE5\u4E0B\u884C\u4E3A:</p><ul><li>\u76D2\u5B50\u4F1A\u5728\u5185\u8054\u7684\u65B9\u5411\u4E0A\u6269\u5C55\u5E76\u5360\u636E\u7236\u5BB9\u5668\u5728\u8BE5\u65B9\u5411\u4E0A\u7684\u6240\u6709\u53EF\u7528\u7A7A\u95F4\uFF0C\u5728\u7EDD\u5927\u6570\u60C5\u51B5\u4E0B\u610F\u5473\u7740\u76D2\u5B50\u4F1A\u548C\u7236\u5BB9\u5668\u4E00\u6837\u5BBD</li><li>\u6BCF\u4E2A\u76D2\u5B50\u90FD\u4F1A\u6362\u884C</li><li><code>width</code> \u548C <code>height</code> \u5C5E\u6027\u53EF\u4EE5\u53D1\u6325\u4F5C\u7528</li><li>\u5185\u8FB9\u8DDD (padding), \u5916\u8FB9\u8DDD (margin) \u548C\u8FB9\u6846 (border) \u4F1A\u5C06\u5176\u4ED6\u5143\u7D20\u4ECE\u5F53\u524D\u76D2\u5B50\u5468\u56F4\u201C\u63A8\u5F00\u201D</li></ul><p>\u9664\u975E\u7279\u6B8A\u6307\u5B9A\uFF0C\u8BF8\u5982\u6807\u9898 (<code>&lt;h1&gt;</code> \u7B49) \u548C\u6BB5\u843D (<code>&lt;p&gt;</code>) \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u90FD\u662F\u5757\u7EA7\u7684\u76D2\u5B50\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u76D2\u5B50\u5BF9\u5916\u663E\u793A\u4E3A <code>inline</code>\uFF0C\u90A3\u4E48\u4ED6\u7684\u884C\u4E3A\u5982\u4E0B:</p><ul><li>\u76D2\u5B50\u4E0D\u4F1A\u4EA7\u751F\u6362\u884C\u3002</li><li><code>width</code> \u548C <code>height</code> \u5C5E\u6027\u5C06\u4E0D\u8D77\u4F5C\u7528\u3002</li><li>\u5782\u76F4\u65B9\u5411\u7684\u5185\u8FB9\u8DDD\u3001\u5916\u8FB9\u8DDD\u4EE5\u53CA\u8FB9\u6846\u4F1A\u88AB\u5E94\u7528\u4F46\u662F\u4E0D\u4F1A\u628A\u5176\u4ED6\u5904\u4E8E <code>inline</code> \u72B6\u6001\u7684\u76D2\u5B50\u63A8\u5F00\u3002</li><li>\u6C34\u5E73\u65B9\u5411\u7684\u5185\u8FB9\u8DDD\u3001\u5916\u8FB9\u8DDD\u4EE5\u53CA\u8FB9\u6846\u4F1A\u88AB\u5E94\u7528\u800C\u4E14\u4E5F\u4F1A\u628A\u5176\u4ED6\u5904\u4E8E <code>inline</code> \u72B6\u6001\u7684\u76D2\u5B50\u63A8\u5F00\u3002</li></ul><p>\u7528\u505A\u94FE\u63A5\u7684 <code>&lt;a&gt;</code> \u5143\u7D20\u3001 <code>&lt;span&gt;</code>\u3001 <code>&lt;em&gt;</code> \u4EE5\u53CA <code>&lt;strong&gt;</code> \u90FD\u662F\u9ED8\u8BA4\u5904\u4E8E <code>inline</code> \u72B6\u6001\u7684\u3002</p><p>\u6211\u4EEC\u901A\u8FC7\u5BF9\u76D2\u5B50 <code>display</code> \u5C5E\u6027\u7684\u8BBE\u7F6E\uFF0C\u6BD4\u5982 <code>inline</code> \u6216\u8005 <code>block</code> \uFF0C\u6765\u63A7\u5236\u76D2\u5B50\u7684\u5916\u90E8\u663E\u793A\u7C7B\u578B\u3002</p><div class="custom-container info"><p class="custom-container-title">Info</p><p>\u663E\u793A\u7C7B\u578B\u5206\u4E3A <strong>\u5185\u90E8</strong> \u548C <strong>\u5916\u90E8</strong> \u663E\u793A\u7C7B\u578B\u3002\u5982\u4E0A\u6240\u8FF0\uFF0C CSS \u7684 box \u6A21\u578B\u6709\u4E00\u4E2A\u5916\u90E8\u663E\u793A\u7C7B\u578B\uFF0C\u6765\u51B3\u5B9A\u76D2\u5B50\u662F\u5757\u7EA7\u8FD8\u662F\u5185\u8054\u3002</p><p>\u540C\u6837\u76D2\u6A21\u578B\u8FD8\u6709\u5185\u90E8\u663E\u793A\u7C7B\u578B\uFF0C\u5B83\u51B3\u5B9A\u4E86\u76D2\u5B50\u5185\u90E8\u5143\u7D20\u662F\u5982\u4F55\u5E03\u5C40\u7684\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u6309\u7167\u6B63\u5E38\u6587\u6863\u6D41\u5E03\u5C40\uFF0C\u4E5F\u610F\u5473\u7740\u5B83\u4EEC\u548C\u5176\u4ED6\u5757\u5143\u7D20\u4EE5\u53CA\u5185\u8054\u5143\u7D20\u4E00\u6837(\u5982\u4E0A\u6240\u8FF0).</p><p>\u4F46\u662F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u7C7B\u4F3C <code>flex</code> \u7684 <code>display</code> \u5C5E\u6027\u503C\u6765\u66F4\u6539\u5185\u90E8\u663E\u793A\u7C7B\u578B\u3002\u5982\u679C\u8BBE\u7F6E <code>display: flex</code>\uFF0C\u5728\u4E00\u4E2A\u5143\u7D20\u4E0A\uFF0C\u5916\u90E8\u663E\u793A\u7C7B\u578B\u662F <code>block</code>\uFF0C\u4F46\u662F\u5185\u90E8\u663E\u793A\u7C7B\u578B\u4FEE\u6539\u4E3A <code>flex</code>\u3002\u8BE5\u76D2\u5B50\u7684\u6240\u6709\u76F4\u63A5\u5B50\u5143\u7D20\u90FD\u4F1A\u6210\u4E3A <code>flex</code> \u5143\u7D20\uFF0C\u4F1A\u6839\u636E \u5F39\u6027\u76D2\u5B50(Flexbox )\u89C4\u5219\u8FDB\u884C\u5E03\u5C40\u3002\u540C\u6837\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u8BF8\u5982 <code>inline-block</code> <code>inline-flex</code> \u8FD9\u79CD\u6DF7\u5408\u663E\u793A\u7C7B\u578B\u3002</p><p>\u5757\u7EA7\u548C\u5185\u8054\u5E03\u5C40\u662F web \u4E0A\u9ED8\u8BA4\u7684\u884C\u4E3A\uFF0C\u5B83\u88AB\u79F0\u4E3A\u6B63\u5E38\u6587\u6863\u6D41\uFF0C \u56E0\u4E3A\u5982\u679C\u6CA1\u6709\u5176\u4ED6\u8BF4\u660E\uFF0C\u6211\u4EEC\u7684\u76D2\u5B50\u5E03\u5C40\u9ED8\u8BA4\u662F\u5757\u7EA7\u6216\u8005\u5185\u8054\u3002</p></div><h2 id="\u76D2\u6A21\u578B\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u76D2\u6A21\u578B\u4ECB\u7ECD" aria-hidden="true">#</a> \u76D2\u6A21\u578B\u4ECB\u7ECD</h2><p>\u6240\u6709 HTML \u5143\u7D20\u53EF\u4EE5\u770B\u4F5C\u76D2\u5B50\uFF0C\u5728 CSS \u4E2D\uFF0C&quot;<strong>Box Model</strong>&quot; \u8FD9\u4E00\u672F\u8BED\u662F\u7528\u6765\u8BBE\u8BA1\u548C\u5E03\u5C40\u65F6\u4F7F\u7528\u3002</p><p>CSS \u76D2\u6A21\u578B\u5B9A\u4E49\u4E86\u5C01\u88C5 HTML \u5143\u7D20\u7684\u65B9\u5F0F\uFF0C\u5B83\u5305\u62EC: \u5916\u8FB9\u8DDD\uFF0C\u8FB9\u6846\uFF0C\u5185\u8FB9\u8DDD\uFF0C\u548C\u5B9E\u9645\u5185\u5BB9\u3002</p><p>\u5B8C\u6574\u7684 CSS \u76D2\u6A21\u578B\u5E94\u7528\u4E8E\u5757\u7EA7\u76D2\u5B50\uFF0C\u5185\u8054\u76D2\u5B50\u53EA\u4F7F\u7528\u76D2\u6A21\u578B\u4E2D\u5B9A\u4E49\u7684\u90E8\u5206\u5185\u5BB9\u3002</p><p>\u4E0B\u9762\u7684\u56FE\u7247\u8BF4\u660E\u4E86\u76D2\u5B50\u6A21\u578B (Box Model):</p><p><img src="'+i+`" alt="Box Model \u793A\u610F\u56FE" loading="lazy"></p><p>\u4E0D\u540C\u90E8\u5206\u7684\u8BF4\u660E:</p><ul><li>Content box (\u5185\u5BB9) - \u76D2\u5B50\u7684\u5185\u5BB9\uFF0C\u663E\u793A\u6587\u672C\u548C\u56FE\u50CF\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>width</code> \u548C <code>height</code> \u8BBE\u7F6E\u5927\u5C0F\u3002</li><li>Padding box (\u5185\u8FB9\u8DDD) - \u5305\u56F4\u5728\u5185\u5BB9\u533A\u57DF\u5916\u90E8\u7684\u7A7A\u767D\u533A\u57DF\uFF0C\u901A\u8FC7 <code>padding</code> \u5C5E\u6027\u8BBE\u7F6E\u3002</li><li>Border box (\u8FB9\u6846) - \u56F4\u7ED5\u5728\u586B\u5145\u548C\u5185\u5BB9\u5916\u7684\u8FB9\u6846\uFF0C\u901A\u8FC7 <code>border</code> \u5C5E\u6027\u8BBE\u7F6E\u3002</li><li>Margin box (\u5916\u8FB9\u8DDD) - \u8FD9\u662F\u6700\u5916\u9762\u7684\u533A\u57DF\uFF0C\u662F\u76D2\u5B50\u548C\u5176\u4ED6\u5143\u7D20\u4E4B\u95F4\u7684\u7A7A\u767D\u533A\u57DF\uFF0C\u901A\u8FC7 <code>margin</code> \u5C5E\u6027\u8BBE\u7F6E\u3002</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 25px solid green<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u6B63\u786E\u8BBE\u7F6E\u5143\u7D20\u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E2D\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u60A8\u9700\u8981\u77E5\u9053\u7684\u76D2\u6A21\u578B\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p><code>padding</code> \u548C <code>margin</code> \u76F4\u8BD1\u4E3A \u201C\u586B\u5145\u201D \u548C \u201C\u8FB9\u8DDD\u201D\uFF0C\u6709\u4E9B\u6559\u7A0B\u4E5F\u4F1A\u8FD9\u4E48\u53EB\u3002</p><p>\u6240\u4EE5\u60A8\u9700\u8981\u6E05\u695A \u201C\u586B\u5145\u201D \u548C \u201C\u5185\u8FB9\u8DDD\u201D\u3001\u201C\u8FB9\u8DDD\u201D \u548C \u201C\u5916\u8FB9\u8DDD\u201D \u8BF4\u7684\u662F\u4E00\u56DE\u4E8B\u3002</p></div><h3 id="\u6807\u51C6\u76D2\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u76D2\u6A21\u578B" aria-hidden="true">#</a> \u6807\u51C6\u76D2\u6A21\u578B</h3><p>\u5F53\u60A8\u6307\u5B9A\u4E00\u4E2A CSS \u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5C5E\u6027\u65F6\uFF0C\u60A8\u53EA\u662F\u8BBE\u7F6E\u5185\u5BB9\u533A\u57DF(content box)\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002<code>padding</code> \u548C <code>border</code> \u518D\u52A0\u4E0A\u8BBE\u7F6E\u7684\u5BBD\u9AD8\u4E00\u8D77\u51B3\u5B9A\u6574\u4E2A\u76D2\u5B50\u7684\u5927\u5C0F\u3002</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>margin \u4E0D\u8BA1\u5165\u5B9E\u9645\u5927\u5C0F\uFF0C\u4F46\u5B83\u4F1A\u5F71\u54CD\u76D2\u5B50\u5728\u9875\u9762\u6240\u5360\u7A7A\u95F4\uFF0C\u4F46\u662F\u5F71\u54CD\u7684\u662F\u76D2\u5B50\u5916\u90E8\u7A7A\u95F4\u3002\u76D2\u5B50\u7684\u8303\u56F4\u5230\u8FB9\u6846\u4E3A\u6B62 \u2014\u2014 \u4E0D\u4F1A\u5EF6\u4F38\u5230 margin\u3002</p></div>`,24),h=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 25px solid green"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 25px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 25px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("p",null,"\u5143\u7D20\u76D2\u5B50\u7684\u5927\u5C0F\u4E3A: 300px (\u5BBD) + 50px (\u5DE6 + \u53F3\u586B\u5145) + 50px (\u5DE6 + \u53F3\u8FB9\u6846) = 400px",-1),x=n("p",null,"\u5143\u7D20\u5360\u636E\u7684\u7A7A\u95F4\u4E3A: 300px (\u5BBD) + 50px (\u5DE6 + \u53F3\u586B\u5145) + 50px (\u5DE6 + \u53F3\u8FB9\u6846) + 50px (\u5DE6 + \u53F3\u8FB9\u8DDD) = 450px",-1),_=n("p",null,"\u8BD5\u60F3\u4E00\u4E0B\uFF0C\u60A8\u53EA\u6709 250px \u7684\u7A7A\u95F4\u3002\u8BA9\u6211\u4EEC\u8BBE\u7F6E\u603B\u5BBD\u5EA6\u4E3A 250px \u7684\u5143\u7D20:",-1),f=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 220px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 5px solid gray"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=a(`<p>\u6700\u7EC8\u5143\u7D20\u7684\u603B\u5BBD\u5EA6\u8BA1\u7B97\u516C\u5F0F\u662F\u8FD9\u6837\u7684:</p><p>\u5143\u7D20\u7684\u5BBD\u5EA6 = \u5BBD\u5EA6 + \u5DE6\u586B\u5145 + \u53F3\u586B\u5145 + \u5DE6\u8FB9\u6846 + \u53F3\u8FB9\u6846 \u5143\u7D20\u5360\u636E\u7684\u6C34\u5E73\u7A7A\u95F4 = \u5BBD\u5EA6 + \u5DE6\u586B\u5145 + \u53F3\u586B\u5145 + \u5DE6\u8FB9\u6846 + \u53F3\u8FB9\u6846 + \u5DE6\u8FB9\u8DDD + \u53F3\u8FB9\u8DDD</p><p>\u5143\u7D20\u7684\u603B\u9AD8\u5EA6\u6700\u7EC8\u8BA1\u7B97\u516C\u5F0F\u662F\u8FD9\u6837\u7684:</p><p>\u5143\u7D20\u7684\u9AD8\u5EA6 = \u9AD8\u5EA6 + \u9876\u90E8\u586B\u5145 + \u5E95\u90E8\u586B\u5145 + \u4E0A\u8FB9\u6846 + \u4E0B\u8FB9\u6846 \u5143\u7D20\u5360\u636E\u7684\u5782\u76F4\u7A7A\u95F4 = \u9AD8\u5EA6 + \u9876\u90E8\u586B\u5145 + \u5E95\u90E8\u586B\u5145 + \u4E0A\u8FB9\u6846 + \u4E0B\u8FB9\u6846 + \u4E0A\u8FB9\u8DDD + \u4E0B\u8FB9\u8DDD</p><h3 id="\u66FF\u4EE3-ie-\u76D2\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u66FF\u4EE3-ie-\u76D2\u6A21\u578B" aria-hidden="true">#</a> \u66FF\u4EE3(IE)\u76D2\u6A21\u578B</h3><p>\u60A8\u53EF\u80FD\u4F1A\u8BA4\u4E3A\u76D2\u5B50\u7684\u5927\u5C0F\u8FD8\u8981\u52A0\u4E0A\u8FB9\u6846\u548C\u5185\u8FB9\u8DDD\uFF0C\u8FD9\u6837\u5F88\u9EBB\u70E6\uFF0C\u800C\u4E14\u60A8\u7684\u60F3\u6CD5\u662F\u5BF9\u7684! \u56E0\u4E3A\u8FD9\u4E2A\u539F\u56E0\uFF0CCSS \u8FD8\u6709\u4E00\u4E2A\u66FF\u4EE3\u76D2\u6A21\u578B\u3002\u4F7F\u7528\u8FD9\u4E2A\u6A21\u578B\uFF0C\u6240\u6709\u5BBD\u5EA6\u90FD\u662F\u53EF\u89C1\u5BBD\u5EA6\uFF0C\u6240\u4EE5\u5185\u5BB9\u5BBD\u5EA6\u662F\u8BE5\u5BBD\u5EA6\u51CF\u53BB\u8FB9\u6846\u548C\u586B\u5145\u90E8\u5206\u3002\u4F7F\u7528\u4E0A\u9762\u76F8\u540C\u7684\u6837\u5F0F\u5F97\u5230 (width = 350px, height = 150px).</p><p>\u9ED8\u8BA4\u6D4F\u89C8\u5668\u4F1A\u4F7F\u7528\u6807\u51C6\u6A21\u578B\u3002\u5982\u679C\u9700\u8981\u4F7F\u7528\u66FF\u4EE3\u6A21\u578B\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u4E3A\u5176\u8BBE\u7F6E <code>box-sizing: border-box</code> \u6765\u5B9E\u73B0\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u544A\u8BC9\u6D4F\u89C8\u5668\u4F7F\u7528 <code>border-box</code> \u6765\u5B9A\u4E49\u533A\u57DF\uFF0C\u4ECE\u800C\u8BBE\u5B9A\u60A8\u60F3\u8981\u7684\u5927\u5C0F\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60A8\u5E0C\u671B\u6240\u6709\u5143\u7D20\u90FD\u4F7F\u7528\u66FF\u4EE3\u6A21\u5F0F\uFF0C\u800C\u4E14\u786E\u5B9E\u5F88\u5E38\u7528\uFF0C\u8BBE\u7F6E <code>box-sizing</code> \u5728 <code>&lt;html&gt;</code> \u5143\u7D20\u4E0A\uFF0C\u7136\u540E\u8BBE\u7F6E\u6240\u6709\u5143\u7D20\u7EE7\u627F\u8BE5\u5C5E\u6027\u3002\u8FD9\u662F\u4E00\u4E2A\u5F88\u6709\u7528\u7684\u5C0F\u6280\u5DE7:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*,
*::before,
*::after</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u8C03\u8BD5\u5DE5\u5177\u6765\u67E5\u770B\u76D2\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8C03\u8BD5\u5DE5\u5177\u6765\u67E5\u770B\u76D2\u6A21\u578B" aria-hidden="true">#</a> \u4F7F\u7528\u8C03\u8BD5\u5DE5\u5177\u6765\u67E5\u770B\u76D2\u6A21\u578B</h3><p>\u6D4F\u89C8\u5668\u5F00\u53D1\u8005\u5DE5\u5177 \u53EF\u4EE5\u4F7F\u60A8\u66F4\u5BB9\u6613\u5730\u7406\u89E3 box \u6A21\u578B\u3002\u60A8\u53EF\u4EE5\u770B\u5230\u5143\u7D20\u7684\u5927\u5C0F\u4EE5\u53CA\u5B83\u7684\u5916\u8FB9\u8DDD\u3001\u5185\u8FB9\u8DDD\u548C\u8FB9\u6846\u3002\u8FD9\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u68C0\u67E5\u5143\u7D20\u5927\u5C0F\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u4FBF\u6377\u7684\u5224\u65AD\u60A8\u7684\u76D2\u5B50\u5927\u5C0F\u662F\u5426\u7B26\u5408\u9884\u671F\u3002</p>`,12),S={class:"custom-container info"},w=n("p",{class:"custom-container-title"},"Info",-1),B={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box_model",target:"_blank",rel:"noopener noreferrer"},C=a('<h2 id="\u63A7\u5236\u76D2\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u76D2\u6A21\u578B" aria-hidden="true">#</a> \u63A7\u5236\u76D2\u6A21\u578B</h2><p><code>margin</code>\u3001<code>padding</code> \u548C <code>border</code> \u662F\u5C5E\u6027\u7684\u7B80\u5199\uFF0C\u5141\u8BB8\u6211\u4EEC\u4E00\u6B21\u8BBE\u7F6E\u76D2\u5B50\u7684\u56DB\u4E2A\u8FB9\u3002\u8FD9\u4E9B\u7B80\u5199\u7B49\u4EF7\u4E8E\u5206\u522B\u63A7\u5236\u76D2\u5B50\u7684\u4E0D\u540C\u8FB9\u7684\u666E\u901A\u5199\u6CD5\u3002</p><h3 id="\u5916\u8FB9\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u5916\u8FB9\u8DDD" aria-hidden="true">#</a> \u5916\u8FB9\u8DDD</h3><p>\u5916\u8FB9\u8DDD\u662F\u76D2\u5B50\u5468\u56F4\u4E00\u5708\u770B\u4E0D\u5230\u7684\u7A7A\u95F4\u3002\u5B83\u4F1A\u628A\u5176\u4ED6\u5143\u7D20\u4ECE\u76D2\u5B50\u65C1\u8FB9\u63A8\u5F00\u3002\u5916\u8FB9\u8DDD\u5C5E\u6027\u503C\u53EF\u4EE5\u4E3A\u6B63\u4E5F\u53EF\u4EE5\u4E3A\u8D1F\u3002\u8BBE\u7F6E\u8D1F\u503C\u4F1A\u5BFC\u81F4\u548C\u5176\u4ED6\u5185\u5BB9\u91CD\u53E0\u3002\u65E0\u8BBA\u4F7F\u7528\u6807\u51C6\u6A21\u578B\u8FD8\u662F\u66FF\u4EE3\u6A21\u578B\uFF0C\u5916\u8FB9\u8DDD\u603B\u662F\u5728\u8BA1\u7B97\u53EF\u89C1\u90E8\u5206\u540E\u989D\u5916\u6DFB\u52A0\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>margin</code> \u5C5E\u6027\u4E00\u6B21\u63A7\u5236\u4E00\u4E2A\u5143\u7D20\u7684\u6240\u6709\u8FB9\u8DDD\uFF0C\u6216\u8005\u6BCF\u8FB9\u5355\u72EC\u4F7F\u7528\u7B49\u4EF7\u7684\u666E\u901A\u5C5E\u6027\u63A7\u5236:</p><ul><li><code>margin-top</code></li><li><code>margin-right</code></li><li><code>margin-bottom</code></li><li><code>margin-left</code></li></ul><h4 id="\u5916\u8FB9\u8DDD\u6298\u53E0" tabindex="-1"><a class="header-anchor" href="#\u5916\u8FB9\u8DDD\u6298\u53E0" aria-hidden="true">#</a> \u5916\u8FB9\u8DDD\u6298\u53E0</h4><p>\u5982\u679C\u60A8\u6709\u4E24\u4E2A\u5916\u8FB9\u8DDD\u76F8\u63A5\u7684\u5143\u7D20\uFF0C\u8FD9\u4E9B\u5916\u8FB9\u8DDD\u5C06\u5408\u5E76\u4E3A\u4E00\u4E2A\u5916\u8FB9\u8DDD\uFF0C\u5373\u6700\u5927\u7684\u5355\u4E2A\u5916\u8FB9\u8DDD\u7684\u5927\u5C0F\u3002</p>',8),A=n("p",null,[s("\u6211\u4EEC\u6709\u4E24\u4E2A\u6BB5\u843D\u3002\u9876\u90E8\u6BB5\u843D "),n("code",null,"margin-bottom"),s(" \u4E3A "),n("code",null,"50px"),s("\u3002\u7B2C\u4E8C\u6BB5\u7684 "),n("code",null,"margin-top"),s(" \u4E3A "),n("code",null,"30px"),s("\u3002\u56E0\u4E3A\u5916\u8FB9\u8DDD\u6298\u53E0\u7684\u6982\u5FF5\uFF0C\u6240\u4EE5\u6846\u4E4B\u95F4\u7684\u5B9E\u9645\u5916\u8FB9\u8DDD\u662F "),n("code",null,"50px"),s("\uFF0C\u800C\u4E0D\u662F\u4E24\u4E2A\u5916\u8FB9\u8DDD\u7684\u603B\u548C\u3002")],-1),z=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("one"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("I am paragraph one."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("two"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("I am paragraph two."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".one"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".two"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M={class:"custom-container info"},q=n("p",{class:"custom-container-title"},"\u5916\u8FB9\u8DDD\u91CD\u53E0",-1),D={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"noopener noreferrer"},H=a('<h3 id="\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#\u8FB9\u6846" aria-hidden="true">#</a> \u8FB9\u6846</h3><p>\u8FB9\u6846\u662F\u5728\u8FB9\u8DDD\u548C\u586B\u5145\u6846\u4E4B\u95F4\u7ED8\u5236\u7684\u3002\u5982\u679C\u60A8\u6B63\u5728\u4F7F\u7528\u6807\u51C6\u7684\u76D2\u6A21\u578B\uFF0C\u8FB9\u6846\u7684\u5927\u5C0F\u5C06\u6DFB\u52A0\u5230\u6846\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F\u66FF\u4EE3\u76D2\u6A21\u578B\uFF0C\u90A3\u4E48\u8FB9\u6846\u7684\u5927\u5C0F\u4F1A\u4F7F\u5185\u5BB9\u6846\u66F4\u5C0F\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u5360\u7528\u4E00\u4E9B\u53EF\u7528\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002</p><p>\u4E3A\u8FB9\u6846\u8BBE\u7F6E\u6837\u5F0F\u65F6\uFF0C\u6709\u5927\u91CF\u7684\u5C5E\u6027\u53EF\u4EE5\u4F7F\u7528\u3002\u7531\u4E8E\u6709\u56DB\u4E2A\u8FB9\u6846\uFF0C\u6BCF\u4E2A\u8FB9\u6846\u90FD\u6709\u6837\u5F0F\u3001\u5BBD\u5EA6\u548C\u989C\u8272\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u5BF9\u5B83\u4EEC\u8FDB\u884C\u64CD\u4F5C\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528 <code>border</code> \u5C5E\u6027\u4E00\u6B21\u8BBE\u7F6E\u6240\u6709\u56DB\u4E2A\u8FB9\u6846\u7684\u5BBD\u5EA6\u3001\u989C\u8272\u548C\u6837\u5F0F\u3002</p><p>\u5206\u522B\u8BBE\u7F6E\u6BCF\u8FB9\u7684\u5BBD\u5EA6\u3001\u989C\u8272\u548C\u6837\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u7528:</p><ul><li><code>border-top</code></li><li><code>border-right</code></li><li><code>border-bottom</code></li><li><code>border-left</code></li></ul><p>\u8BBE\u7F6E\u6240\u6709\u8FB9\u7684\u989C\u8272\u3001\u6837\u5F0F\u6216\u5BBD\u5EA6\uFF0C\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027:</p><ul><li><code>border-width</code></li><li><code>border-style</code></li><li><code>border-color</code></li></ul><p>\u8BBE\u7F6E\u5355\u8FB9\u7684\u989C\u8272\u3001\u6837\u5F0F\u6216\u5BBD\u5EA6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6700\u7EC6\u7C92\u5EA6\u7684\u666E\u901A\u5C5E\u6027\u4E4B\u4E00:</p><ul><li><code>border-top-width</code></li><li><code>border-top-style</code></li><li><code>border-top-color</code></li><li><code>border-right-width</code></li><li><code>border-right-style</code></li><li><code>border-right-color</code></li><li><code>border-bottom-width</code></li><li><code>border-bottom-style</code></li><li><code>border-bottom-color</code></li><li><code>border-left-width</code></li><li><code>border-left-style</code></li><li><code>border-left-color</code></li></ul><p>\u8BBE\u7F6E\u8FB9\u6846\u7684\u989C\u8272\u3001\u6837\u5F0F\u6216\u5BBD\u5EA6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6700\u7EC6\u7C92\u5EA6\u7684\u666E\u901A\u5C5E\u6027\u6216\u8005\u7B80\u5199\u5C5E\u6027\u3002</p>',11),I=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Change my borders."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-top"),n("span",{class:"token punctuation"},":"),s(" 5px dotted green"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-right"),n("span",{class:"token punctuation"},":"),s(" 1px solid black"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),s(" 20px double "),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("23"),n("span",{class:"token punctuation"},","),s(" 45"),n("span",{class:"token punctuation"},","),s(" 145"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #333333"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-top-style"),n("span",{class:"token punctuation"},":"),s(" dotted"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-right-width"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-bottom-color"),n("span",{class:"token punctuation"},":"),s(" hotpink"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=a('<h3 id="\u5185\u8FB9\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u5185\u8FB9\u8DDD" aria-hidden="true">#</a> \u5185\u8FB9\u8DDD</h3><p>\u5185\u8FB9\u8DDD\u4F4D\u4E8E\u8FB9\u6846\u548C\u5185\u5BB9\u533A\u57DF\u4E4B\u95F4\u3002\u4E0E\u5916\u8FB9\u8DDD\u4E0D\u540C\uFF0C\u60A8\u4E0D\u80FD\u6709\u8D1F\u6570\u91CF\u7684\u5185\u8FB9\u8DDD\uFF0C\u6240\u4EE5\u503C\u5FC5\u987B\u662F 0 \u6216\u6B63\u7684\u503C\u3002\u5E94\u7528\u4E8E\u5143\u7D20\u7684\u4EFB\u4F55\u80CC\u666F\u90FD\u5C06\u663E\u793A\u5728\u5185\u8FB9\u8DDD\u540E\u9762\uFF0C\u5185\u8FB9\u8DDD\u901A\u5E38\u7528\u4E8E\u5C06\u5185\u5BB9\u63A8\u79BB\u8FB9\u6846\u3002</p><p>\u540C <code>margin</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>padding</code> \u7B80\u5199\u5C5E\u6027\u63A7\u5236\u5143\u7D20\u6240\u6709\u8FB9\uFF0C\u6216\u8005\u6BCF\u8FB9\u5355\u72EC\u4F7F\u7528\u7B49\u4EF7\u7684\u666E\u901A\u5C5E\u6027:</p><ul><li><code>padding-top</code></li><li><code>padding-right</code></li><li><code>padding-bottom</code></li><li><code>padding-left</code></li></ul><h2 id="inline-block" tabindex="-1"><a class="header-anchor" href="#inline-block" aria-hidden="true">#</a> inline-block</h2><p><code>display</code> \u6709\u4E00\u4E2A\u7279\u6B8A\u7684\u503C\uFF0C\u5B83\u5728\u5185\u8054\u548C\u5757\u4E4B\u95F4\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4E2D\u95F4\u72B6\u6001\u3002\u8FD9\u5BF9\u4E8E\u4EE5\u4E0B\u60C5\u51B5\u975E\u5E38\u6709\u7528: \u60A8\u4E0D\u5E0C\u671B\u4E00\u4E2A\u9879\u5207\u6362\u5230\u65B0\u884C\uFF0C\u4F46\u5E0C\u671B\u5B83\u53EF\u4EE5\u8BBE\u5B9A\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u5E76\u907F\u514D\u4E0A\u9762\u770B\u5230\u7684\u91CD\u53E0\u3002</p><p>\u4E00\u4E2A\u5143\u7D20\u4F7F\u7528 <code>display: inline-block</code>\uFF0C\u5B9E\u73B0\u6211\u4EEC\u9700\u8981\u7684\u5757\u7EA7\u7684\u90E8\u5206\u6548\u679C:</p><ul><li>\u8BBE\u7F6E <code>width</code> \u548C <code>height</code> \u5C5E\u6027\u4F1A\u751F\u6548\u3002</li><li><code>padding</code>, <code>margin</code>, \u4EE5\u53CA <code>border</code> \u4F1A\u63A8\u5F00\u5176\u4ED6\u5143\u7D20\u3002</li></ul><p>\u4F46\u662F\uFF0C\u5B83\u4E0D\u4F1A\u8DF3\u8F6C\u5230\u65B0\u884C\uFF0C\u5982\u679C\u663E\u5F0F\u6DFB\u52A0 <code>width</code> \u548C <code>height</code> \u5C5E\u6027\uFF0C\u5B83\u53EA\u4F1A\u53D8\u5F97\u6BD4\u5176\u5185\u5BB9\u66F4\u5927\u3002</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>\u5F53\u60A8\u60F3\u8981\u901A\u8FC7\u6DFB\u52A0\u5185\u8FB9\u8DDD\u4F7F\u94FE\u63A5\u5177\u6709\u66F4\u5927\u7684\u547D\u4E2D\u533A\u57DF\u65F6\uFF0C\u8FD9\u662F\u5F88\u6709\u7528\u7684\u3002</p><p>\u6BD4\u5982 <code>&lt;a&gt;</code> \u662F\u50CF <code>&lt;span&gt;</code> \u4E00\u6837\u7684\u5185\u8054\u5143\u7D20\uFF1B\u60A8\u53EF\u4EE5\u4F7F\u7528 <code>display: inline-block</code> \u6765\u8BBE\u7F6E\u5185\u8FB9\u8DDD\uFF0C\u8BA9\u7528\u6237\u66F4\u5BB9\u6613\u70B9\u51FB\u94FE\u63A5\u3002</p></div>',10);function K(T,V){const o=l("CodeDemo"),c=l("ExternalLinkIcon");return d(),r("div",null,[b,u(" more "),m,e(o,{id:"code-demo-149",type:"normal",title:"%E5%85%83%E7%B4%A0%E7%9A%84%E5%AE%BD%E5%BA%A6%E4%B8%8E%E9%AB%98%E5%BA%A6",code:"eNo9zT0KwzAMQOGrCM2lDS1d3J+TeHEi4wgc2VihNYTcvW4CWd83vAXHeYpo8En8gSE61ZfFPlWLcHlbwRMOqs0bn1uGxQrAl2keDdy6LtfHP/SpkC8GrvdcQVNkglC8lw2zI2IJu25lciWwHGFtn/UHBzcs3g=="},{default:t(()=>[h,g]),_:1}),v,x,_,e(o,{id:"code-demo-162",type:"normal",title:"%E6%80%BB%E5%AE%BD%E5%BA%A6%20250px%20%E7%9A%84%E5%85%83%E7%B4%A0",code:"eNo1zcsKwjAQheFXOcxatBbcxMuTZJN2JA2kScgUjZS+u6PQ5fm/xVlpWuZIhm4cXhijE7lbGnKzhNPDJjrQKKKufNSM1SbgHXiZDPq+K+36C8Uxh+QNznsZcuVnNbiUBskxMHx1nz/NrvqQDDpdm15sXyROKyo="},{default:t(()=>[f,y]),_:1}),E,n("div",S,[w,n("p",null,[s("\u66F4\u591A\u76D2\u6A21\u578B\u76F8\u5173\u5185\u5BB9\u53EF\u89C1 "),n("a",B,[s("MDN"),e(c)])])]),C,e(o,{id:"code-demo-246",type:"normal",title:"%E5%A4%96%E8%BE%B9%E8%B7%9D%E6%8A%98%E5%8F%A0%E6%A1%88%E4%BE%8B",code:"eNpljsEKwjAMQH8l5KydIF5q9e4/9BLr2AprWtqgwti/G0EG6inw8njJjKOkCS26W7xDmKi1k8eQWShyXz2ePQO4sq4y9wovQAkKVRoqlREUGteVX1ce+d9V+HFdpzd14gZDa/qD0Q7M70iiOkTeXrNIThYOu/I8el48ezYa+JIkFwv71cDlBWbHRyo="},{default:t(()=>[A,z,N]),_:1}),n("div",M,[q,n("p",null,[s("\u6709\u8BB8\u591A\u89C4\u5219\u89C4\u5B9A\u4E86\u4EC0\u4E48\u65F6\u5019\u5916\u8FB9\u8DDD\u4F1A\u6298\u53E0\uFF0C\u4EC0\u4E48\u65F6\u5019\u4E0D\u4F1A\u6298\u53E0\u3002\u76F8\u5173\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 "),n("a",D,[s("\u5916\u8FB9\u8DDD\u91CD\u53E0"),e(c)]),s("\u3002\u521D\u5B66\u65F6\u60A8\u9700\u8981\u9996\u5148\u8BB0\u4F4F\u5916\u8FB9\u8DDD\u4F1A\u6298\u53E0\uFF0C\u5982\u679C\u60A8\u7528\u5916\u8FB9\u8DDD\u521B\u5EFA\u7A7A\u95F4\u800C\u6CA1\u6709\u5F97\u5230\u60A8\u60F3\u8981\u7684\u6548\u679C\uFF0C\u8BF7\u53C2\u9605\u4E0A\u65B9\u94FE\u63A5\u5BFB\u627E\u539F\u56E0\u3002")])]),H,e(o,{id:"code-demo-383",type:"normal",title:"%E8%BE%B9%E6%A1%86%E6%A1%88%E4%BE%8B",code:"eNpljktuwyAQQK8yoptWst3m4w1Nu+k12JiPDCpmLJi2iaLcvZOviMIGCd68eXvhaYpCio0Nv2DiUMqHEgYTDSG5rMSnSgB3nxq3/PzlhzQ6mHagMVuXS7d5ZYrx6y0aYUphdXfTwf5oOw+0hLOEft6CRSJnYczOpfcKyGH0JGHBSMEYLOg4mO+a0DyJk4Tl20nzo6ODPOrn5aqBdd/AYt2/MH9QSaWOu+v9tfhpdTq1muvaQrvo5KXvoaz9C5b8efljVGswIi/xSHNIx2quEId/lcd8+g=="},{default:t(()=>[I,Q]),_:1}),O])}const X=p(k,[["render",K],["__file","box.html.vue"]]);export{X as default};
