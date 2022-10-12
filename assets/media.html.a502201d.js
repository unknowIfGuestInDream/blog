import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,a as n,b as a,e as c,w as l,f as s,r as u}from"./app.cad6791d.js";const i={},d=s(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>HTML5 \u6807\u51C6\u63A8\u51FA\u4E86 <code>&lt;video&gt;</code> \u548C <code>&lt;audio&gt;</code> \u6807\u7B7E\uFF0C\u4EE5\u53CA\u4E00\u4E9B JavaScript \u548C APIs \u7528\u4E8E\u5BF9\u5176\u8FDB\u884C\u63A7\u5236\u3002</p><h2 id="video-\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#video-\u5143\u7D20" aria-hidden="true">#</a> <code>&lt;video&gt;</code> \u5143\u7D20</h2><p><code>&lt;video&gt;</code> \u5141\u8BB8\u60A8\u8F7B\u677E\u5730\u5D4C\u5165\u4E00\u6BB5\u89C6\u9891\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u6848\u4F8B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.webm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 HTML5 \u89C6\u9891\u3002\u53EF\u70B9\u51FB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6B64\u94FE\u63A5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\u89C2\u770B
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>\u6848\u4F8B\u5C5E\u6027\u89E3\u91CA:</p><ul><li><p>src</p><p>\u540C <code>&lt;img&gt;</code> \u6807\u7B7E\u4F7F\u7528\u65B9\u5F0F\u76F8\u540C\uFF0C<code>src</code> \u5C5E\u6027\u6307\u5411\u60A8\u60F3\u8981\u5D4C\u5165\u7F51\u9875\u5F53\u4E2D\u7684\u89C6\u9891\u8D44\u6E90\uFF0C\u4ED6\u4EEC\u7684\u4F7F\u7528\u65B9\u5F0F\u5B8C\u5168\u76F8\u540C\u3002</p></li><li><p>controls</p><p>\u7528\u6237\u5FC5\u987B\u80FD\u591F\u63A7\u5236\u89C6\u9891\u548C\u97F3\u9891\u7684\u56DE\u653E\u529F\u80FD\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528 <code>controls</code> \u6765\u5305\u542B\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u63A7\u4EF6\u754C\u9762\uFF0C\u540C\u65F6\u60A8\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5408\u9002\u7684 JavaScript API \u521B\u5EFA\u81EA\u5DF1\u7684\u754C\u9762\u3002\u754C\u9762\u4E2D\u81F3\u5C11\u8981\u5305\u542B\u5F00\u59CB\u3001\u505C\u6B62\u4EE5\u53CA\u8C03\u6574\u97F3\u91CF\u7684\u529F\u80FD\u3002</p></li><li><p><code>&lt;video&gt;</code> \u6807\u7B7E\u5185\u7684\u5185\u5BB9</p><p>\u6B64\u5185\u5BB9\u53EB\u540E\u5907\u5185\u5BB9\u3002\u5F53\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 <code>&lt;video&gt;</code> \u6807\u7B7E\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u663E\u793A\u8FD9\u6BB5\u5185\u5BB9\uFF0C\u8FD9\u4F7F\u5F97\u6211\u4EEC\u80FD\u591F\u5BF9\u65E7\u7684\u6D4F\u89C8\u5668\u63D0\u4F9B\u56DE\u9000\u5185\u5BB9\u3002\u60A8\u53EF\u4EE5\u6DFB\u52A0\u4EFB\u4F55\u540E\u5907\u5185\u5BB9\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6307\u5411\u8FD9\u4E2A\u89C6\u9891\u6587\u4EF6\u7684\u94FE\u63A5\uFF0C\u4ECE\u800C\u4F7F\u7528\u6237\u81F3\u5C11\u53EF\u4EE5\u8BBF\u95EE\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u5C40\u9650\u4E8E\u6D4F\u89C8\u5668\u7684\u652F\u6301\u3002</p></li></ul><h3 id="\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u517C\u5BB9\u6027</h3><p>\u5982\u679C\u60A8\u4F7F\u7528 Safari \u6216\u8005 IE \u6765\u8BBF\u95EE\u4E0A\u9762\u7684\u94FE\u63A5\uFF0C\u89C6\u9891\u5E76\u4E0D\u4F1A\u64AD\u653E\uFF0C\u8FD9\u662F\u56E0\u4E3A\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u5BF9\u89C6\u9891\u683C\u5F0F\u7684\u652F\u6301\u4E0D\u540C\u3002</p><p>\u6240\u4EE5 <code>&lt;video&gt;</code> \u6807\u7B7E\u7684\u6700\u4F73\u5B9E\u8DF5\u662F\u4F7F\u7528\u591A\u4E2A\u64AD\u653E\u6E90\u4EE5\u63D0\u9AD8\u517C\u5BB9\u6027\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u5A92\u4F53\u6587\u4EF6\u7684\u5185\u5BB9</p><p>\u50CF MP3\u3001MP4\u3001WebM \u8FD9\u4E9B\u672F\u8BED\u53EB\u505A\u5BB9\u5668\u683C\u5F0F\u3002\u4ED6\u4EEC\u5B9A\u4E49\u4E86\u6784\u6210\u5A92\u4F53\u6587\u4EF6\u7684\u97F3\u9891\u8F68\u9053\u548C\u89C6\u9891\u8F68\u9053\u7684\u50A8\u5B58\u7ED3\u6784\uFF0C\u5176\u4E2D\u8FD8\u5305\u542B\u63CF\u8FF0\u8FD9\u4E2A\u5A92\u4F53\u6587\u4EF6\u7684\u5143\u6570\u636E\uFF0C\u4EE5\u53CA\u7528\u4E8E\u7F16\u7801\u7684\u7F16\u7801\u8BD1\u7801\u5668\u7B49\u7B49\u3002</p><p>\u4E00\u4E2A\u683C\u5F0F\u4E3A WebM \u7684\u7535\u5F71\u5305\u542B\u89C6\u9891\u8F68\u9053\uFF0C\u97F3\u9891\u8F68\u9053\u548C\u6587\u672C\u8F68\u9053\uFF0C\u5176\u4E2D\u89C6\u9891\u8F68\u9053\u5305\u542B\u4E00\u4E2A\u4E3B\u89C6\u9891\u8F68\u9053\u548C\u4E00\u4E2A\u53EF\u9009\u7684 Angle \u8F68\u9053\u3002</p><p>\u4E3A\u4E86\u7F16\u89E3\u7801\u5668(codec)\u7F16\u7801\u5A92\u4F53\uFF0C\u5BB9\u5668\u4E2D\u7684\u97F3\u9891\u548C\u89C6\u9891\u8F68\u9053\u4EE5\u9002\u5408\u7684\u683C\u5F0F\u4FDD\u5B58\u3002\u97F3\u9891\u8F68\u9053\u548C\u89C6\u9891\u8F68\u9053\u4F7F\u7528\u4E0D\u540C\u7684\u683C\u5F0F\u3002\u6BCF\u4E2A\u97F3\u9891\u8F68\u9053\u90FD\u4F7F\u7528\u97F3\u9891\u7F16\u89E3\u7801\u5668\u8FDB\u884C\u7F16\u7801\uFF0C\u800C\u89C6\u9891\u8F68\u9053\u5219\u4F7F\u7528\u89C6\u9891\u7F16\u89E3\u7801\u5668\u8FDB\u884C\u7F16\u7801\u3002\u5982\u524D\u6240\u8FF0\uFF0C\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u652F\u6301\u4E0D\u540C\u7684\u89C6\u9891\u548C\u97F3\u9891\u683C\u5F0F\uFF0C\u4EE5\u53CA\u4E0D\u540C\u7684\u5BB9\u5668\u683C\u5F0F(\u5982 MP3\u3001MP4 \u548C WebM\uFF0C\u8FD9\u4E9B\u683C\u5F0F\u53C8\u53EF\u4EE5\u5305\u542B\u4E0D\u540C\u7C7B\u578B\u7684\u89C6\u9891\u548C\u97F3\u9891)\u3002</p><p>\u4F8B\u5982:</p><ul><li>WebM \u5BB9\u5668\u901A\u5E38\u5305\u62EC\u4E86 Opus \u6216 Vorbis \u97F3\u9891\u548C VP8/VP9 \u89C6\u9891\u3002\u8FD9\u5728\u6240\u6709\u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u90FD\u652F\u6301\uFF0C\u9664\u4E86\u4ED6\u4EEC\u7684\u8001\u7248\u672C\u3002</li><li>MP4 \u5BB9\u5668\u901A\u5E38\u5305\u62EC AAC \u4EE5\u53CA MP3 \u97F3\u9891\u548C H.264 \u89C6\u9891\u3002\u8FD9\u5728\u6240\u6709\u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u90FD\u652F\u6301\uFF0C\u8FD8\u6709 Internet Explorer\u3002</li><li>\u8001\u5F0F\u7684 Ogg \u5BB9\u5668\u5F80\u5F80\u652F\u6301 Ogg Vorbis \u97F3\u9891\u548C Ogg Theora \u89C6\u9891\u3002\u4E3B\u8981\u5728 Firefox \u548C Chrome \u5F53\u4E2D\u652F\u6301\uFF0C\u4E0D\u8FC7\u8FD9\u4E2A\u5BB9\u5668\u5DF2\u7ECF\u88AB\u66F4\u5F3A\u5927\u7684 WebM \u5BB9\u5668\u6240\u53D6\u4EE3\u3002</li></ul><p>\u6709\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u67D0\u4E9B\u7C7B\u578B\u7684\u97F3\u9891\uFF0C\u901A\u5E38\u7F16\u89E3\u7801\u5668\u7684\u6570\u636E\u5B58\u50A8\u6CA1\u6709\u5BB9\u5668\u6216\u7B80\u5316\u5BB9\u5668\u3002\u5176\u4E2D\u4E00\u4E2A\u4F8B\u5B50\u5C31\u662F FLAC \u7F16\u89E3\u7801\u5668\uFF0C\u5B83\u901A\u5E38\u5B58\u50A8\u5728 FLAC \u6587\u4EF6\u4E2D\uFF0CFLAC \u6587\u4EF6\u53EA\u662F FLAC \u7684\u539F\u59CB\u8F68\u8FF9\u3002</p><p>\u53E6\u4E00\u79CD\u60C5\u51B5\u662F\u4E00\u76F4\u6D41\u884C\u7684 MP3 \u6587\u4EF6\u3002\u201CMP3 \u6587\u4EF6\u201D\u5B9E\u9645\u4E0A\u662F\u5B58\u50A8\u5728 MPEG \u6216 MPEG-2 \u5BB9\u5668\u4E2D\u7684 MPEG-1 \u97F3\u9891\u5C42 III(MPEG-1 Audio Layer III \uFF0CMP3)\u97F3\u9891\u8F68\u9053\u3002\u8FD9\u4E00\u70B9\u7279\u522B\u6709\u8DA3\uFF0C\u56E0\u4E3A\u5C3D\u7BA1\u5927\u591A\u6570\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5728 <code>&lt;video&gt;</code> \u548C <code>&lt;audio&gt;</code> \u5143\u7D20\u4E2D\u4F7F\u7528 MPEG \u5A92\u4F53\uFF0C\u4F46\u7531\u4E8E MP3 \u7684\u6D41\u884C\uFF0C\u5B83\u4EEC\u53EF\u80FD\u4ECD\u7136\u652F\u6301 MP3\u3002</p><p>\u97F3\u9891\u64AD\u653E\u5668\u5C06\u4F1A\u76F4\u63A5\u64AD\u653E\u97F3\u9891\u6587\u4EF6\uFF0C\u4F8B\u5982 MP3 \u548C Ogg \u6587\u4EF6\u3002\u8FD9\u4E9B\u4E0D\u9700\u8981\u5BB9\u5668\u3002</p></div><p>\u4E0D\u540C\u7684\u5A92\u4F53\u683C\u5F0F\u4E3B\u8981\u7528\u4E8E\u5C06\u97F3\u9891\u548C\u89C6\u9891\u538B\u7F29\u6210\u53EF\u7BA1\u7406\u7684\u6587\u4EF6(\u539F\u59CB\u7684\u97F3\u9891\u548C\u89C6\u9891\u6587\u4EF6\u975E\u5E38\u5927)\u3002\u6D4F\u89C8\u5668\u5305\u542B\u4E86\u4E0D\u540C\u7684 Codecs,\uFF0C\u5982 Vorbis \u548C H.264\uFF0C\u5B83\u4EEC\u7528\u6765\u5C06\u5DF2\u538B\u7F29\u7684\u97F3\u9891\u548C\u89C6\u9891\u8F6C\u5316\u6210\u4E8C\u8FDB\u5236\u6570\u5B57\u3002\u4E0D\u540C\u7684\u7F16\u7801\u5668\u548C\u4E0D\u540C\u7684\u5BB9\u5668\u90FD\u6709\u5404\u81EA\u7684\u4F18\u7F3A\u70B9\uFF0C\u5728\u60A8\u66F4\u4E86\u89E3\u5B83\u4EEC\u540E\uFF0C\u60A8\u53EF\u4EE5\u81EA\u5DF1\u9009\u62E9\u4F7F\u7528\u54EA\u4E2A\u7F16\u7801\u5668\u548C\u5BB9\u5668\u3002</p><p>\u6D4F\u89C8\u5668\u5E76\u4E0D\u5168\u652F\u6301\u76F8\u540C\u7684 codecs\uFF0C\u6240\u4EE5\u60A8\u5F97\u4F7F\u7528\u51E0\u4E2A\u4E0D\u540C\u683C\u5F0F\u7684\u6587\u4EF6\u6765\u517C\u5BB9\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u3002\u5982\u679C\u60A8\u4F7F\u7528\u7684\u683C\u5F0F\u90FD\u5F97\u4E0D\u5230\u6D4F\u89C8\u5668\u7684\u652F\u6301\uFF0C\u90A3\u4E48\u5A92\u4F53\u6587\u4EF6\u5C06\u4E0D\u4F1A\u64AD\u653E\u3002\u53E6\u5916\u540C\u4E00\u6B3E\u6D4F\u89C8\u5668\uFF0C\u79FB\u52A8\u7248\u53EF\u80FD\u6BD4\u684C\u9762\u7248\u652F\u6301\u7684\u683C\u5F0F\u53EF\u80FD\u4F1A\u6709\u4E0D\u540C\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.webm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/webm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 HTML5 \u89C6\u9891\u3002\u53EF\u70B9\u51FB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6B64\u94FE\u63A5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\u89C2\u770B
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u9700\u8981\u5C06 <code>src</code> \u5C5E\u6027\u4ECE <code>&lt;video&gt;</code> \u6807\u7B7E\u4E2D\u79FB\u9664\uFF0C\u8F6C\u800C\u5C06\u5B83\u653E\u5728\u51E0\u4E2A\u5355\u72EC\u7684\u6807\u7B7E <code>&lt;source&gt;</code> \u5F53\u4E2D\u3002\u6D4F\u89C8\u5668\u5C06\u4F1A\u68C0\u67E5 <code>&lt;source&gt;</code> \u6807\u7B7E\uFF0C\u5E76\u4E14\u64AD\u653E\u7B2C\u4E00\u4E2A\u4E0E\u5176\u81EA\u8EAB codec \u76F8\u5339\u914D\u7684\u5A92\u4F53\u3002</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>\u60A8\u7684\u89C6\u9891\u5E94\u5F53\u5305\u62EC WebM \u548C MP4 \u4E24\u79CD\u683C\u5F0F\uFF0C\u8FD9\u4E24\u79CD\u5728\u76EE\u524D\u5DF2\u7ECF\u8DB3\u591F\u652F\u6301\u5927\u591A\u6570\u5E73\u53F0\u548C\u6D4F\u89C8\u5668\u3002</p></div>`,16),r=n("code",null,"<source>",-1),k=n("code",null,"type",-1),v=n("code",null,"type",-1),g=s(`<h3 id="\u5176\u4ED6\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5C5E\u6027" aria-hidden="true">#</a> \u5176\u4ED6\u5C5E\u6027</h3><p>\u8FD9\u91CC\u6709\u8BB8\u591A\u60A8\u53EF\u4EE5\u7528\u5728 HTML5 <code>&lt;video&gt;</code> \u4E0A\u7684\u7279\u6027\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span>
  <span class="token attr-name">controls</span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">autoplay</span>
  <span class="token attr-name">loop</span>
  <span class="token attr-name">muted</span>
  <span class="token attr-name">poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>poster.png<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.webm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/webm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 HTML5 \u89C6\u9891\u3002\u53EF\u70B9\u51FB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6B64\u94FE\u63A5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\u89C2\u770B
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>width \u548C height</p><p>\u60A8\u53EF\u4EE5\u7528\u5C5E\u6027\u63A7\u5236\u89C6\u9891\u7684\u5C3A\u5BF8\uFF0C\u4E5F\u53EF\u4EE5\u7528 CSS \u6765\u63A7\u5236\u89C6\u9891\u5C3A\u5BF8\u3002 \u65E0\u8BBA\u4F7F\u7528\u54EA\u79CD\u65B9\u5F0F\uFF0C\u89C6\u9891\u90FD\u4F1A\u4FDD\u6301\u5B83\u539F\u59CB\u7684\u957F\u5BBD\u6BD4 \u2014 \u4E5F\u53EB\u505A\u7EB5\u6A2A\u6BD4\u3002\u5982\u679C\u60A8\u8BBE\u7F6E\u7684\u5C3A\u5BF8\u6CA1\u6709\u4FDD\u6301\u89C6\u9891\u539F\u59CB\u957F\u5BBD\u6BD4\uFF0C\u90A3\u4E48\u89C6\u9891\u8FB9\u6846\u5C06\u4F1A\u62C9\u4F38\uFF0C\u800C\u672A\u88AB\u89C6\u9891\u5185\u5BB9\u586B\u5145\u7684\u90E8\u5206\uFF0C\u5C06\u4F1A\u663E\u793A\u9ED8\u8BA4\u7684\u80CC\u666F\u989C\u8272\u3002</p></li><li><p>autoplay</p><p>\u8FD9\u4E2A\u5C5E\u6027\u4F1A\u4F7F\u97F3\u9891\u548C\u89C6\u9891\u5185\u5BB9\u7ACB\u5373\u64AD\u653E\uFF0C\u5373\u4F7F\u9875\u9762\u7684\u5176\u4ED6\u90E8\u5206\u8FD8\u6CA1\u6709\u52A0\u8F7D\u5B8C\u5168\u3002\u5EFA\u8BAE\u4E0D\u8981\u5E94\u7528\u8FD9\u4E2A\u5C5E\u6027\u5728\u60A8\u7684\u7F51\u7AD9\u4E0A\uFF0C\u56E0\u4E3A\u7528\u6237\u4EEC\u4F1A\u6BD4\u8F83\u53CD\u611F\u81EA\u52A8\u64AD\u653E\u7684\u5A92\u4F53\u6587\u4EF6\u3002</p></li><li><p>loop</p><p>\u8FD9\u4E2A\u5C5E\u6027\u53EF\u4EE5\u8BA9\u97F3\u9891\u6216\u8005\u89C6\u9891\u6587\u4EF6\u5FAA\u73AF\u64AD\u653E\u3002\u540C\u6837\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF0C\u9664\u975E\u6709\u5FC5\u8981\u3002</p></li><li><p>muted</p><p>\u8FD9\u4E2A\u5C5E\u6027\u4F1A\u5BFC\u81F4\u5A92\u4F53\u64AD\u653E\u65F6\uFF0C\u9ED8\u8BA4\u5173\u95ED\u58F0\u97F3\u3002</p></li><li><p>poster</p><p>\u8FD9\u4E2A\u5C5E\u6027\u6307\u5411\u4E86\u4E00\u4E2A\u56FE\u50CF\u7684 URL\uFF0C\u8FD9\u4E2A\u56FE\u50CF\u4F1A\u5728\u89C6\u9891\u64AD\u653E\u524D\u663E\u793A\u3002\u901A\u5E38\u7528\u4E8E\u7C97\u7565\u7684\u9884\u89C8\u6216\u8005\u5E7F\u544A\u3002</p></li><li><p>preload \u8FD9\u4E2A\u5C5E\u6027\u88AB\u7528\u6765\u7F13\u51B2\u8F83\u5927\u7684\u6587\u4EF6\uFF0C\u6709 3 \u4E2A\u503C\u53EF\u9009:</p><ul><li><code>none</code>: \u4E0D\u7F13\u51B2</li><li><code>auto</code>: \u9875\u9762\u52A0\u8F7D\u540E\u7F13\u5B58\u5A92\u4F53\u6587\u4EF6</li><li><code>metadata</code>: \u4EC5\u7F13\u51B2\u6587\u4EF6\u7684\u5143\u6570\u636E</li></ul></li></ul><h2 id="audio-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#audio-\u6807\u7B7E" aria-hidden="true">#</a> <code>&lt;audio&gt;</code> \u6807\u7B7E</h2><p><code>&lt;audio&gt;</code> \u6807\u7B7E\u4E0E <code>&lt;video&gt;</code> \u6807\u7B7E\u7684\u4F7F\u7528\u65B9\u5F0F\u51E0\u4E4E\u5B8C\u5168\u76F8\u540C\uFF0C\u6709\u4E00\u4E9B\u7EC6\u5FAE\u7684\u5DEE\u522B\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viper.mp3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/mp3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viper.ogg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/ogg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 HTML5 \u97F3\u9891\uFF0C\u53EF\u70B9\u51FB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viper.mp3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6B64\u94FE\u63A5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\u6536\u542C\u3002<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u97F3\u9891\u64AD\u653E\u5668\u6240\u5360\u7528\u7684\u7A7A\u95F4\u6BD4\u89C6\u9891\u64AD\u653E\u5668\u8981\u5C0F\uFF0C\u7531\u4E8E\u5B83\u6CA1\u6709\u89C6\u89C9\u90E8\u4EF6 \u2014 \u60A8\u53EA\u9700\u8981\u663E\u793A\u51FA\u80FD\u63A7\u5236\u97F3\u9891\u64AD\u653E\u7684\u63A7\u4EF6\u3002\u4E00\u4E9B\u4E0E HTML5 <code>&lt;video&gt;</code> \u7684\u5DEE\u5F02\u5982\u4E0B:</p><ul><li><code>&lt;audio&gt;</code> \u6807\u7B7E\u4E0D\u652F\u6301 <code>width/height</code> \u5C5E\u6027 \u2014 \u7531\u4E8E\u5176\u5E76\u6CA1\u6709\u89C6\u89C9\u90E8\u4EF6\uFF0C\u4E5F\u5C31\u6CA1\u6709\u53EF\u4EE5\u8BBE\u7F6E <code>width/height</code> \u7684\u5185\u5BB9\u3002</li><li>\u540C\u65F6\u4E5F\u4E0D\u652F\u6301 <code>poster</code> \u5C5E\u6027 \u2014 \u540C\u6837\uFF0C\u6CA1\u6709\u89C6\u89C9\u90E8\u4EF6\u3002</li></ul><p>\u9664\u6B64\u4E4B\u5916\uFF0C<code>&lt;audio&gt;</code> \u6807\u7B7E\u652F\u6301\u6240\u6709 <code>&lt;video&gt;</code> \u6807\u7B7E\u62E5\u6709\u7684\u7279\u6027\u3002</p><h2 id="\u663E\u793A\u97F3\u8F68\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u97F3\u8F68\u6587\u672C" aria-hidden="true">#</a> \u663E\u793A\u97F3\u8F68\u6587\u672C</h2><p>\u6587\u672C\u8F68\u9053\u4F1A\u4F7F\u60A8\u7684\u7F51\u7AD9\u66F4\u5BB9\u6613\u88AB\u641C\u7D22\u5F15\u64CE\u6293\u53D6\u5230 (SEO)\uFF0C \u7531\u4E8E\u641C\u7D22\u5F15\u64CE\u7684\u6587\u672C\u6293\u53D6\u80FD\u529B\u975E\u5E38\u5F3A\u5927\uFF0C\u4F7F\u7528\u6587\u672C\u8F68\u9053\u751A\u81F3\u53EF\u4EE5\u8BA9\u641C\u7D22\u5F15\u64CE\u901A\u8FC7\u89C6\u9891\u7684\u5185\u5BB9\u76F4\u63A5\u94FE\u63A5\u3002</p><div class="custom-container info"><p class="custom-container-title">WebVTT</p><p>WebVTT \u662F\u4E00\u4E2A\u683C\u5F0F\uFF0C\u7528\u6765\u7F16\u5199\u6587\u672C\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6587\u672C\u6587\u4EF6\u5305\u542B\u4E86\u4F17\u591A\u7684\u5B57\u7B26\u4E32\uFF0C\u8FD9\u4E9B\u5B57\u7B26\u4E32\u4F1A\u5E26\u6709\u4E00\u4E9B\u5143\u6570\u636E\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u7528\u6765\u63CF\u8FF0\u8FD9\u4E2A\u5B57\u7B26\u4E32\u5C06\u4F1A\u5728\u89C6\u9891\u4E2D\u663E\u793A\u7684\u65F6\u95F4\uFF0C\u751A\u81F3\u53EF\u4EE5\u7528\u6765\u63CF\u8FF0\u8FD9\u4E9B\u5B57\u7B26\u4E32\u7684\u6837\u5F0F\u4EE5\u53CA\u5B9A\u4F4D\u4FE1\u606F\u3002\u8FD9\u4E9B\u5B57\u7B26\u4E32\u53EB\u505A <strong>cues</strong>\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u7684\u9700\u6C42\u6765\u663E\u793A\u4E0D\u540C\u7684\u6837\u5F0F\uFF0C\u6700\u5E38\u89C1\u7684\u5982\u4E0B:</p><ul><li><p>subtitles</p><p>\u901A\u8FC7\u6DFB\u52A0\u7FFB\u8BD1\u5B57\u5E55\uFF0C\u6765\u5E2E\u52A9\u90A3\u4E9B\u542C\u4E0D\u61C2\u5916\u56FD\u8BED\u8A00\u7684\u4EBA\u4EEC\u7406\u89E3\u97F3\u9891\u5F53\u4E2D\u7684\u5185\u5BB9\u3002</p></li><li><p>captions</p><p>\u540C\u6B65\u7FFB\u8BD1\u5BF9\u767D\uFF0C\u6216\u662F\u63CF\u8FF0\u4E00\u4E9B\u6709\u91CD\u8981\u4FE1\u606F\u7684\u58F0\u97F3\uFF0C\u6765\u5E2E\u52A9\u90A3\u4E9B\u4E0D\u80FD\u542C\u97F3\u9891\u7684\u4EBA\u4EEC\u7406\u89E3\u97F3\u9891\u4E2D\u7684\u5185\u5BB9\u3002</p></li><li><p>timed descriptions</p><p>\u5C06\u6587\u5B57\u8F6C\u6362\u4E3A\u97F3\u9891\uFF0C\u7528\u4E8E\u670D\u52A1\u90A3\u4E9B\u6709\u89C6\u89C9\u969C\u788D\u7684\u4EBA\u3002</p></li></ul><p>\u4E00\u4E2A\u5178\u578B\u7684 WebVTT \u6587\u4EF6\u5982\u4E0B:</p><div class="language-WebVTT ext-WebVTT line-numbers-mode"><pre class="language-WebVTT"><code>WEBVTT

1
00:00:22.230 --&gt; 00:00:24.606
\u7B2C\u4E00\u6BB5\u5B57\u5E55

2
00:00:30.739 --&gt; 00:00:34.074
\u7B2C\u4E8C\u6BB5

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>\u6709\u4E86 WebVTT \u683C\u5F0F\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528 <code>&lt;track&gt;</code> \u6807\u7B7E\u3002</p><p>\u8BA9\u5176\u4E0E HTML \u5A92\u4F53\u4E00\u8D77\u663E\u793A\uFF0C\u60A8\u9700\u8981\u505A\u5982\u4E0B\u5DE5\u4F5C:</p><ol><li>\u4EE5 <code>.vtt</code> \u540E\u7F00\u540D\u4FDD\u5B58\u6587\u4EF6\u3002</li><li>\u7528 <code>&lt;track&gt;</code> \u6807\u7B7E\u94FE\u63A5 <code>.vtt</code> \u6587\u4EF6\uFF0C <code>&lt;track&gt;</code> \u6807\u7B7E\u9700\u653E\u5728 <code>&lt;audio&gt;</code> \u6216 <code>&lt;video&gt;</code> \u6807\u7B7E\u5F53\u4E2D\uFF0C\u540C\u65F6\u9700\u8981\u653E\u5728\u6240\u6709 <code>&lt;source&gt;</code> \u6807\u7B7E\u4E4B\u540E\u3002\u4F7F\u7528 <code>kind</code> \u5C5E\u6027\u6765\u6307\u660E\u662F\u54EA\u4E00\u79CD\u7C7B\u578B\uFF0C\u5982 <code>subtitles</code> \u3001 <code>captions</code> \u3001 <code>descriptions</code>\u3002\u7136\u540E\uFF0C\u4F7F\u7528 <code>srclang</code> \u6765\u544A\u8BC9\u6D4F\u89C8\u5668\u60A8\u662F\u7528\u4EC0\u4E48\u8BED\u8A00\u6765\u7F16\u5199\u7684 subtitles\u3002</li></ol><div class="custom-container tip"><p class="custom-container-title">\u6848\u4F8B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example.webm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/webm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>track</span> <span class="token attr-name">kind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subtitles<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subtitles_en.vtt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">srclang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,17);function m(b,h){const t=u("RouterLink");return e(),o("div",null,[d,n("p",null,[a("\u6BCF\u4E2A "),r,a(" \u6807\u7B7E\u9875\u542B\u6709\u4E00\u4E2A "),k,a(" \u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u662F\u53EF\u9009\u7684\uFF0C\u4F46\u662F\u5EFA\u8BAE\u60A8\u6DFB\u52A0\u4E0A\u8FD9\u4E2A\u5C5E\u6027 \u2014 \u5B83\u5305\u542B\u4E86\u89C6\u9891\u6587\u4EF6\u7684 "),c(t,{to:"/en/code/website/html/definition/mime.html"},{default:l(()=>[a("MIME types")]),_:1}),a(" \uFF0C\u540C\u65F6\u6D4F\u89C8\u5668\u4E5F\u4F1A\u901A\u8FC7\u68C0\u67E5\u8FD9\u4E2A\u5C5E\u6027\u6765\u8FC5\u901F\u7684\u8DF3\u8FC7\u90A3\u4E9B\u4E0D\u652F\u6301\u7684\u683C\u5F0F\u3002\u5982\u679C\u60A8\u6CA1\u6709\u6DFB\u52A0 "),v,a(" \u5C5E\u6027\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C1D\u8BD5\u52A0\u8F7D\u6BCF\u4E00\u4E2A\u6587\u4EF6\uFF0C\u76F4\u5230\u627E\u5230\u4E00\u4E2A\u80FD\u6B63\u786E\u64AD\u653E\u7684\u683C\u5F0F\uFF0C\u8FD9\u6837\u4F1A\u6D88\u8017\u6389\u5927\u91CF\u7684\u65F6\u95F4\u548C\u8D44\u6E90\u3002")]),g])}const T=p(i,[["render",m],["__file","media.html.vue"]]);export{T as default};
