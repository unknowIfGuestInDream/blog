import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a,b as n,e as p,f as s,r as i}from"./app.6a7adab4.js";const l={},d=s(`<h2 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> Iframe</h2><p><code>&lt;iframe&gt;</code> \u5143\u7D20\u65E8\u5728\u5141\u8BB8\u60A8\u5C06\u5176\u4ED6 Web \u6587\u6863\u5D4C\u5165\u5230\u5F53\u524D\u6587\u6863\u4E2D\u3002\u8FD9\u5F88\u9002\u5408\u5C06\u7B2C\u4E09\u65B9\u5185\u5BB9\u5D4C\u5165\u60A8\u7684\u7F51\u7AD9\uFF0C\u60A8\u53EF\u80FD\u65E0\u6CD5\u76F4\u63A5\u63A7\u5236\uFF0C\u4E5F\u4E0D\u5E0C\u671B\u5B9E\u73B0\u81EA\u5DF1\u7684\u7248\u672C - \u4F8B\u5982\u6765\u81EA\u5728\u7EBF\u89C6\u9891\u63D0\u4F9B\u5546\u7684\u89C6\u9891\uFF0CDisqus \u7B49\u8BC4\u8BBA\u7CFB\u7EDF\uFF0C\u5728\u7EBF\u5730\u56FE\u63D0\u4F9B\u5546\uFF0C\u5E7F\u544A\u6A2A\u5E45\u7B49\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u6848\u4F8B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://developer.mozilla.org/en-US/docs/Glossary<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">allowfullscreen</span>
  <span class="token attr-name">sandbox</span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://developer.mozilla.org/en-US/docs/Glossary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Fallback link for browsers that don&#39;t support iframes
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ul><li><p>allowfullscreen</p><p>\u5982\u679C\u8BBE\u7F6E\uFF0C<code>&lt;iframe&gt;</code> \u5219\u53EF\u4EE5\u901A\u8FC7\u5168\u5C4F API \u8BBE\u7F6E\u4E3A\u5168\u5C4F\u6A21\u5F0F(\u7A0D\u5FAE\u8D85\u51FA\u672C\u6587\u7684\u8303\u56F4)\u3002</p></li><li><p>frameborder</p><p>\u5982\u679C\u8BBE\u7F6E\u4E3A 1\uFF0C\u5219\u4F1A\u544A\u8BC9\u6D4F\u89C8\u5668\u5728\u6B64\u6846\u67B6\u548C\u5176\u4ED6\u6846\u67B6\u4E4B\u95F4\u7ED8\u5236\u8FB9\u6846\uFF0C\u8FD9\u662F\u9ED8\u8BA4\u884C\u4E3A\u30020 \u5220\u9664\u8FB9\u6846\u3002\u4E0D\u63A8\u8350\u8FD9\u6837\u8BBE\u7F6E\uFF0C\u56E0\u4E3A\u5728 CSS \u4E2D\u53EF\u4EE5\u66F4\u597D\u5730\u5B9E\u73B0\u76F8\u540C\u7684\u6548\u679C\u3002border: none;</p></li><li><p>src</p><p>\u8BE5\u5C5E\u6027\u4E0E <code>&lt;video&gt;/&lt;img&gt;</code> \u4E00\u6837\u5305\u542B\u6307\u5411\u8981\u5D4C\u5165\u6587\u6863\u7684 URL \u8DEF\u5F84\u3002</p></li><li><p>width \u548C height</p><p>\u8FD9\u4E9B\u5C5E\u6027\u6307\u5B9A\u60A8\u60F3\u8981\u7684 iframe \u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002</p></li><li><p>\u5907\u9009\u5185\u5BB9 \u4E0E <code>&lt;video&gt;</code> \u7B49\u5176\u4ED6\u7C7B\u4F3C\u5143\u7D20\u76F8\u540C\uFF0C\u60A8\u53EF\u4EE5\u5728 <code>&lt;iframe&gt;&lt;/iframe&gt;</code> \u6807\u7B7E\u4E4B\u95F4\u5305\u542B\u5907\u9009\u5185\u5BB9\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 <code>&lt;iframe&gt;</code>\uFF0C\u5C06\u4F1A\u663E\u793A\u5907\u9009\u5185\u5BB9\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6DFB\u52A0\u4E86\u4E00\u4E2A\u5230\u8BE5\u9875\u9762\u7684\u94FE\u63A5\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>2020 \u5E74\u51E0\u4E4E\u4E0D\u53EF\u80FD\u9047\u5230\u4E0D\u652F\u6301 <code>&lt;iframe&gt;</code> \u7684\u6D4F\u89C8\u5668\u3002</p></div></li><li><p>sandbox</p><p>\u8BE5\u5C5E\u6027\u9700\u8981\u5728\u5DF2\u7ECF\u652F\u6301\u5176\u4ED6 <code>&lt;iframe&gt;</code> \u529F\u80FD(\u4F8B\u5982 IE 10 \u53CA\u66F4\u9AD8\u7248\u672C)\u4F46\u7A0D\u5FAE\u66F4\u73B0\u4EE3\u7684\u6D4F\u89C8\u5668\u4E0A\u624D\u80FD\u5DE5\u4F5C\uFF0C\u8BE5\u5C5E\u6027\u53EF\u4EE5\u63D0\u9AD8\u5B89\u5168\u6027\u8BBE\u7F6E\u3002</p></li></ul><h3 id="\u5B89\u5168\u9690\u60A3" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168\u9690\u60A3" aria-hidden="true">#</a> \u5B89\u5168\u9690\u60A3</h3><p>\u5982\u679C\u9ED1\u5BA2\u8BD5\u56FE\u6076\u610F\u4FEE\u6539\u60A8\u7684\u7F51\u9875\u6216\u6B3A\u9A97\u4EBA\u4EEC\u8FDB\u884C\u4E0D\u60F3\u505A\u7684\u4E8B\u60C5\u65F6\u5E38\u628A iframe \u4F5C\u4E3A\u5171\u540C\u7684\u653B\u51FB\u76EE\u6807(\u5B98\u65B9\u672F\u8BED: \u653B\u51FB\u5411\u91CF)\uFF0C\u4F8B\u5982\u663E\u793A\u7528\u6237\u540D\u548C\u5BC6\u7801\u7B49\u654F\u611F\u4FE1\u606F\u3002\u56E0\u6B64\uFF0C\u89C4\u8303\u5DE5\u7A0B\u5E08\u548C\u6D4F\u89C8\u5668\u5F00\u53D1\u4EBA\u5458\u5DF2\u7ECF\u5F00\u53D1\u4E86\u5404\u79CD\u5B89\u5168\u673A\u5236\uFF0C\u4F7F <code>&lt;iframe&gt;</code> \u66F4\u52A0\u5B89\u5168\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5355\u51FB\u52AB\u6301\u662F\u4E00\u79CD\u5E38\u89C1\u7684 iframe \u653B\u51FB\uFF0C\u9ED1\u5BA2\u5C06\u9690\u85CF\u7684 iframe \u5D4C\u5165\u5230\u60A8\u7684\u6587\u6863\u4E2D(\u6216\u5C06\u60A8\u7684\u6587\u6863\u5D4C\u5165\u5230\u4ED6\u4EEC\u81EA\u5DF1\u7684\u6076\u610F\u7F51\u7AD9)\uFF0C\u5E76\u4F7F\u7528\u5B83\u6765\u6355\u83B7\u7528\u6237\u7684\u4EA4\u4E92\u3002\u8FD9\u662F\u8BEF\u5BFC\u7528\u6237\u6216\u7A83\u53D6\u654F\u611F\u6570\u636E\u7684\u5E38\u89C1\u65B9\u5F0F\u3002</p></div><h4 id="\u53EA\u6709\u5728\u5FC5\u8981\u65F6\u5D4C\u5165" tabindex="-1"><a class="header-anchor" href="#\u53EA\u6709\u5728\u5FC5\u8981\u65F6\u5D4C\u5165" aria-hidden="true">#</a> \u53EA\u6709\u5728\u5FC5\u8981\u65F6\u5D4C\u5165</h4><p>\u6709\u65F6\u5D4C\u5165\u7B2C\u4E09\u65B9\u5185\u5BB9(\u4F8B\u5982 YouTube \u89C6\u9891\u548C\u5730\u56FE)\u662F\u6709\u610F\u4E49\u7684\uFF0C\u4F46\u5982\u679C\u60A8\u53EA\u5728\u5B8C\u5168\u9700\u8981\u65F6\u5D4C\u5165\u7B2C\u4E09\u65B9\u5185\u5BB9\uFF0C\u60A8\u53EF\u4EE5\u7701\u53BB\u5F88\u591A\u9EBB\u70E6\u3002\u7F51\u7EDC\u5B89\u5168\u7684\u4E00\u4E2A\u5F88\u597D\u7684\u7ECF\u9A8C\u6CD5\u5219\u662F\u201C\u60A8\u600E\u4E48\u8C28\u614E\u90FD\u4E0D\u4E3A\u8FC7\uFF0C\u5982\u679C\u60A8\u51B3\u5B9A\u8981\u505A\u8FD9\u4EF6\u4E8B\uFF0C\u591A\u68C0\u67E5\u4E00\u904D\uFF1B\u5982\u679C\u662F\u522B\u4EBA\u505A\u7684\uFF0C\u5728\u88AB\u8BC1\u660E\u662F\u5B89\u5168\u7684\u4E4B\u524D\uFF0C\u90FD\u5047\u8BBE\u8FD9\u662F\u5371\u9669\u7684\u3002\u201D</p><p>\u9664\u4E86\u5B89\u5168\u95EE\u9898\uFF0C\u60A8\u8FD8\u5E94\u8BE5\u610F\u8BC6\u5230\u77E5\u8BC6\u4EA7\u6743\u95EE\u9898\u3002\u65E0\u8BBA\u5728\u7EBF\u5185\u5BB9\u8FD8\u662F\u79BB\u7EBF\u5185\u5BB9\uFF0C\u7EDD\u5927\u90E8\u5206\u5185\u5BB9\u90FD\u662F\u6709\u7248\u6743\u7684\uFF0C\u751A\u81F3\u662F\u4E00\u4E9B\u60A8\u6CA1\u60F3\u5230\u6709\u7248\u6743\u7684\u5185\u5BB9(\u4F8B\u5982\uFF0CWikimedia Commons \u4E0A\u7684\u5927\u591A\u6570\u56FE\u7247)\u3002\u4E0D\u8981\u5728\u7F51\u9875\u4E0A\u5C55\u793A\u4E00\u4E9B\u4E0D\u5C5E\u4E8E\u60A8\u7684\u5185\u5BB9\uFF0C\u9664\u975E\u60A8\u662F\u6240\u6709\u8005\u6216\u6240\u6709\u8005\u7ED9\u4E86\u60A8\u660E\u786E\u7684\u3001\u4E66\u9762\u7684\u8BB8\u53EF\u3002\u5BF9\u4E8E\u4FB5\u72AF\u7248\u6743\u7684\u60E9\u7F5A\u662F\u4E25\u5389\u7684\u3002\u518D\u8BF4\u4E00\u6B21\uFF0C\u60A8\u518D\u5C0F\u5FC3\u4E5F\u4E0D\u4E3A\u8FC7\u3002</p><p>\u5982\u679C\u5185\u5BB9\u83B7\u5F97\u8BB8\u53EF\uFF0C\u60A8\u5FC5\u987B\u9075\u5B88\u8BB8\u53EF\u6761\u6B3E\u3002\u4F8B\u5982\uFF0CMDN \u4E0A\u7684\u5185\u5BB9\u662F\u5728 CC-BY-SA \u4E0B\u8BB8\u53EF\u7684\uFF0C\u8FD9\u610F\u5473\u7740\uFF0C\u5982\u679C\u60A8\u8981\u5F15\u7528\u6211\u4EEC\u7684\u5185\u5BB9\uFF0C\u5C31\u5FC5\u987B\u7528\u9002\u5F53\u7684\u65B9\u5F0F\u6CE8\u660E\u6765\u6E90\uFF0C\u5373\u4F7F\u60A8\u5BF9\u5185\u5BB9\u505A\u4E86\u5B9E\u8D28\u6027\u7684\u4FEE\u6539\u3002</p><h4 id="\u4F7F\u7528-https" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-https" aria-hidden="true">#</a> \u4F7F\u7528 HTTPS</h4><p>HTTPS \u662F HTTP \u7684\u52A0\u5BC6\u7248\u672C\u3002\u60A8\u5E94\u8BE5\u5C3D\u53EF\u80FD\u7528 HTTPS \u4E3A\u60A8\u7684\u7F51\u7AD9\u63D0\u4F9B\u670D\u52A1:</p><ul><li>HTTPS \u51CF\u5C11\u4E86\u8FDC\u7A0B\u5185\u5BB9\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u88AB\u7BE1\u6539\u7684\u673A\u4F1A\uFF0C</li><li>HTTPS \u9632\u6B62\u5D4C\u5165\u5F0F\u5185\u5BB9\u8BBF\u95EE\u60A8\u7684\u7236\u6587\u6863\u4E2D\u7684\u5185\u5BB9\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002</li></ul><p>\u7531\u4E8E HTTPS \u7684\u7B2C\u4E8C\u4E2A\u597D\u5904\uFF0C\u65E0\u8BBA\u6210\u672C\u5982\u4F55\uFF0C\u60A8\u7EDD\u5BF9\u4E0D\u80FD\u4F7F\u7528 HTTP \u5D4C\u5165\u7B2C\u4E09\u65B9\u5185\u5BB9(\u5728\u6700\u597D\u7684\u60C5\u51B5\u4E0B\uFF0C\u60A8\u7684\u7528\u6237\u7684 Web \u6D4F\u89C8\u5668\u4F1A\u7ED9\u4ED6\u4EEC\u4E00\u4E2A\u53EF\u6015\u7684\u8B66\u544A)\u3002</p><h4 id="\u59CB\u7EC8\u4F7F\u7528-sandbox-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u59CB\u7EC8\u4F7F\u7528-sandbox-\u5C5E\u6027" aria-hidden="true">#</a> \u59CB\u7EC8\u4F7F\u7528 sandbox \u5C5E\u6027</h4><p>\u60A8\u5E94\u8BE5\u7ED9\u5D4C\u5165\u7684\u5185\u5BB9\u4EC5\u80FD\u5B8C\u6210\u81EA\u5DF1\u5DE5\u4F5C\u7684\u6743\u9650\uFF0C\u5F53\u7136\u8FD9\u4E5F\u9002\u7528\u4E8E\u60A8\u81EA\u5DF1\u7684\u5185\u5BB9\u3002</p><p>\u4E00\u4E2A\u5141\u8BB8\u5305\u542B\u5728\u5176\u91CC\u7684\u4EE3\u7801\u4EE5\u9002\u5F53\u7684\u65B9\u5F0F\u6267\u884C\u6216\u8005\u7528\u4E8E\u6D4B\u8BD5\uFF0C\u4F46\u4E0D\u80FD\u5BF9\u5176\u4ED6\u4EE3\u7801\u5E93(\u610F\u5916\u6216\u6076\u610F)\u9020\u6210\u4EFB\u4F55\u635F\u5BB3\u7684\u5BB9\u5668\u79F0\u4E3A\u6C99\u76D2\u3002</p><p>\u672A\u6C99\u76D2\u5316 (Unsandboxed) \u5185\u5BB9\u53EF\u4EE5\u505A\u5F97\u592A\u591A\uFF0C\u5982\u6267\u884C JavaScript\uFF0C\u63D0\u4EA4\u8868\u5355\uFF0C\u5F39\u51FA\u7A97\u53E3\u7B49\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u60A8\u5E94\u8BE5\u4F7F\u7528\u6CA1\u6709\u53C2\u6570\u7684 <code>sandbox</code> \u5C5E\u6027\u6765\u5F3A\u5236\u6267\u884C\u6240\u6709\u53EF\u7528\u7684\u9650\u5236\uFF0C\u5982\u6211\u4EEC\u524D\u9762\u7684\u793A\u4F8B\u6240\u793A\u3002\u5982\u679C\u771F\u7684\u9700\u8981\u5173\u95ED\u67D0\u4E9B\u9650\u5236\uFF0C\u60A8\u53EF\u4EE5\u9010\u4E2A\u6DFB\u52A0\u6743\u9650(\u5728 <code>sandbox=&quot;&quot;</code> \u5C5E\u6027\u503C\u5185)\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u60A8\u6C38\u8FDC\u4E0D\u5E94\u8BE5\u540C\u65F6\u6DFB\u52A0 <code>allow-scripts</code> \u548C <code>allow-same-origin</code> \u5230\u60A8\u7684 sandbox \u5C5E\u6027\u4E2D-\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5D4C\u5165\u5F0F\u5185\u5BB9\u53EF\u4EE5\u7ED5\u8FC7\u963B\u6B62\u7AD9\u70B9\u6267\u884C\u811A\u672C\u7684\u540C\u6E90\u5B89\u5168\u7B56\u7565\uFF0C\u5E76\u4F7F\u7528 JavaScript \u5B8C\u5168\u5173\u95ED\u6C99\u76D2\u3002</p></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5982\u679C\u653B\u51FB\u8005\u53EF\u4EE5\u6B3A\u9A97\u4EBA\u4EEC\u76F4\u63A5\u8BBF\u95EE\u6076\u610F\u5185\u5BB9(\u5728 iframe \u4E4B\u5916)\uFF0C\u5219\u6C99\u76D2\u65E0\u6CD5\u63D0\u4F9B\u4FDD\u62A4\u3002\u5982\u679C\u67D0\u4E9B\u5185\u5BB9\u53EF\u80FD\u662F\u6076\u610F\u7684(\u4F8B\u5982\uFF0C\u7528\u6237\u751F\u6210\u7684\u5185\u5BB9)\uFF0C\u8BF7\u4FDD\u8BC1\u5176\u662F\u4ECE\u4E0D\u540C\u7684\u57DF\u5411\u60A8\u7684\u4E3B\u7AD9\u70B9\u63D0\u4F9B\u7684\u3002</p></div>`,21),r={class:"custom-container info"},u=a("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F",-1),m={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox",target:"_blank",rel:"noopener noreferrer"},h=s('<h4 id="\u914D\u7F6E-csp-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-csp-\u6307\u4EE4" aria-hidden="true">#</a> \u914D\u7F6E CSP \u6307\u4EE4</h4><p>CSP \u4EE3\u8868\u5185\u5BB9\u5B89\u5168\u7B56\u7565\uFF0C\u5B83\u63D0\u4F9B\u4E00\u7EC4 HTTP \u6807\u5934(\u7531 web \u670D\u52A1\u5668\u53D1\u9001\u65F6\u4E0E\u5143\u6570\u636E\u4E00\u8D77\u53D1\u9001\u7684\u5143\u6570\u636E)\uFF0C\u65E8\u5728\u63D0\u9AD8 HTML \u6587\u6863\u7684\u5B89\u5168\u6027\u3002\u5728 <code>&lt;iframe&gt;</code> \u5B89\u5168\u6027\u65B9\u9762\uFF0C\u60A8\u53EF\u4EE5\u5C06\u670D\u52A1\u5668\u914D\u7F6E\u4E3A\u53D1\u9001\u9002\u5F53\u7684 <code>X-Frame-Options</code> \u6807\u9898\u3002\u8FD9\u6837\u505A\u53EF\u4EE5\u9632\u6B62\u5176\u4ED6\u7F51\u7AD9\u5728\u5176\u7F51\u9875\u4E2D\u5D4C\u5165\u60A8\u7684\u5185\u5BB9(\u8FD9\u5C06\u5BFC\u81F4\u70B9\u51FB\u548C\u4E00\u7CFB\u5217\u5176\u4ED6\u653B\u51FB)\u3002</p><h2 id="embed-\u548C-object" tabindex="-1"><a class="header-anchor" href="#embed-\u548C-object" aria-hidden="true">#</a> <code>&lt;embed&gt;</code> \u548C <code>&lt;object&gt;</code></h2><p><code>&lt;embed&gt;</code> \u548C <code>&lt;object&gt;</code> \u5143\u7D20\u7684\u529F\u80FD\u4E0D\u540C\u4E8E <code>&lt;iframe&gt;</code>\u3002\u8FD9\u4E9B\u5143\u7D20\u662F\u7528\u6765\u5D4C\u5165\u591A\u79CD\u7C7B\u578B\u7684\u5916\u90E8\u5185\u5BB9\u7684\u901A\u7528\u5D4C\u5165\u5DE5\u5177\uFF0C\u5176\u4E2D\u5305\u62EC\u50CF Java \u5C0F\u7A0B\u5E8F\uFF0CPDF \u8FD9\u6837\u7684\u63D2\u4EF6\u6280\u672F\uFF0C\u751A\u81F3\u50CF\u89C6\u9891\uFF0CSVG \u548C\u56FE\u50CF\u7684\u5185\u5BB9\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u76EE\u524D\u6D4F\u89C8\u5668\u5BF9\u89C6\u9891\uFF0CSVG\uFF0C\u56FE\u50CF\u7684\u652F\u6301\u5DF2\u7ECF\u5F88\u597D\uFF0C\u800C\u4E14\u7F51\u7AD9\u5E94\u8BE5\u4F7F\u7528 JavaScript \u7F16\u5199\uFF0C\u6240\u4EE5\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E24\u4E2A\u5143\u7D20\u3002</p></div>',5);function v(k,b){const e=i("ExternalLinkIcon");return o(),c("div",null,[d,a("div",r,[u,a("p",null,[n("\u66F4\u591A\u6C99\u76D2\u76F8\u5173\u8BE6\u60C5\uFF0C\u8BF7\u89C1 "),a("a",m,[n("MDN sandbox"),p(e)])])]),h])}const x=t(l,[["render",v],["__file","embed.html.vue"]]);export{x as default};
