import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as e,d as n,f as t}from"./app.70f43444.js";const d={},p=t("<p>WXSS (WeiXin Style Sheets) \u662F\u4E00\u5957\u6837\u5F0F\u8BED\u8A00\uFF0C\u7528\u4E8E\u63CF\u8FF0 WXML \u7684\u7EC4\u4EF6\u6837\u5F0F\u3002</p><p>WXSS \u7528\u6765\u51B3\u5B9A WXML \u7684\u7EC4\u4EF6\u5E94\u8BE5\u600E\u4E48\u663E\u793A\u3002</p><p>\u4E3A\u4E86\u9002\u5E94\u5E7F\u5927\u7684\u524D\u7AEF\u5F00\u53D1\u8005\uFF0CWXSS \u5177\u6709 CSS \u5927\u90E8\u5206\u7279\u6027\u3002\u540C\u65F6\u4E3A\u4E86\u66F4\u9002\u5408\u5F00\u53D1\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF0CWXSS \u5BF9 CSS \u8FDB\u884C\u4E86\u6269\u5145\u4EE5\u53CA\u4FEE\u6539\u3002</p><p>\u4E0E CSS \u76F8\u6BD4\uFF0CWXSS \u6269\u5C55\u7684\u7279\u6027\u6709:</p><ul><li>\u5C3A\u5BF8\u5355\u4F4D</li><li>\u6837\u5F0F\u5BFC\u5165</li></ul><p>\u4E0E CSS \u76F8\u6BD4\uFF0CWXSS \u7F3A\u5931\u7684\u7279\u6027\u6709:</p><ul><li>\u4E00\u90E8\u5206\u9AD8\u7EA7\u9009\u62E9\u5668</li><li>\u4E00\u90E8\u5206 CSS3 \u9AD8\u7EA7\u529F\u80FD</li></ul>",7),o=t(`<h2 id="\u5C3A\u5BF8\u5355\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u5C3A\u5BF8\u5355\u4F4D" aria-hidden="true">#</a> \u5C3A\u5BF8\u5355\u4F4D</h2><p>rpx(responsive pixel): \u53EF\u4EE5\u6839\u636E\u5C4F\u5E55\u5BBD\u5EA6\u8FDB\u884C\u81EA\u9002\u5E94\u3002\u89C4\u5B9A\u5C4F\u5E55\u5BBD\u4E3A 750rpx\u3002\u5982\u5728 iPhone6 \u4E0A\uFF0C\u5C4F\u5E55\u5BBD\u5EA6\u4E3A 375px\uFF0C\u5171\u6709 750 \u4E2A\u7269\u7406\u50CF\u7D20\uFF0C\u5219 750rpx = 375px = 750 \u7269\u7406\u50CF\u7D20\uFF0C1rpx = 0.5px = 1 \u7269\u7406\u50CF\u7D20\u3002</p><table><thead><tr><th>\u8BBE\u5907</th><th>rpx \u6362\u7B97 px (\u5C4F\u5E55\u5BBD\u5EA6/750)</th><th>px \u6362\u7B97 rpx (750/\u5C4F\u5E55\u5BBD\u5EA6)</th></tr></thead><tbody><tr><td>iPhone5</td><td>1rpx = 0.42px</td><td>1px = 2.34rpx</td></tr><tr><td>iPhone6</td><td>1rpx = 0.5px</td><td>1px = 2rpx</td></tr><tr><td>iPhone6 Plus</td><td>1rpx = 0.552px</td><td>1px = 1.81rpx</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>\u5F00\u53D1\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u65F6\u8BBE\u8BA1\u5E08\u53EF\u4EE5\u7528 iPhone6 \u4F5C\u4E3A\u89C6\u89C9\u7A3F\u7684\u6807\u51C6\u3002</p></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>\u5728\u8F83\u5C0F\u7684\u5C4F\u5E55\u4E0A\u4E0D\u53EF\u907F\u514D\u7684\u4F1A\u6709\u4E00\u4E9B\u6BDB\u523A\uFF0C\u8BF7\u5728\u5F00\u53D1\u65F6\u5C3D\u91CF\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u3002</p></div><h2 id="\u6837\u5F0F\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u5BFC\u5165" aria-hidden="true">#</a> \u6837\u5F0F\u5BFC\u5165</h2><p>\u4F7F\u7528 <code>@import</code> \u8BED\u53E5\u53EF\u4EE5\u5BFC\u5165\u5916\u8054\u6837\u5F0F\u8868\uFF0C<code>@import</code> \u540E\u8DDF\u9700\u8981\u5BFC\u5165\u7684\u5916\u8054\u6837\u5F0F\u8868\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u7528 <code>;</code> \u8868\u793A\u8BED\u53E5\u7ED3\u675F\u3002</p><p>\u793A\u4F8B\u4EE3\u7801:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/** common.wxss **/</span>
<span class="token selector">.small-p</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/** app.wxss **/</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;common.wxss&quot;</span><span class="token punctuation">;</span></span>
<span class="token selector">.middle-p</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5185\u8054\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5185\u8054\u6837\u5F0F" aria-hidden="true">#</a> \u5185\u8054\u6837\u5F0F</h2><p>\u6846\u67B6\u7EC4\u4EF6\u4E0A\u652F\u6301\u4F7F\u7528 <code>style</code>, <code>class</code> \u5C5E\u6027\u6765\u63A7\u5236\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002</p><ul><li><p><code>style</code>: \u9759\u6001\u7684\u6837\u5F0F\u7EDF\u4E00\u5199\u5230 <code>class</code> <code>\u4E2D\u3002style</code> \u63A5\u6536\u52A8\u6001\u7684\u6837\u5F0F\uFF0C\u5728\u8FD0\u884C\u65F6\u4F1A\u8FDB\u884C\u89E3\u6790\uFF0C\u8BF7\u5C3D\u91CF\u907F\u514D\u5C06\u9759\u6001\u7684\u6837\u5F0F\u5199\u8FDB <code>style</code> \u4E2D\uFF0C\u4EE5\u514D\u5F71\u54CD\u6E32\u67D3\u901F\u5EA6\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color:{{color}};<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>class</code>: \u7528\u4E8E\u6307\u5B9A\u6837\u5F0F\u89C4\u5219\uFF0C\u5176\u5C5E\u6027\u503C\u662F\u6837\u5F0F\u89C4\u5219\u4E2D\u7C7B\u9009\u62E9\u5668\u540D(\u6837\u5F0F\u7C7B\u540D)\u7684\u96C6\u5408\uFF0C\u6837\u5F0F\u7C7B\u540D\u4E0D\u9700\u8981\u5E26\u4E0A <code>.</code>\uFF0C\u6837\u5F0F\u7C7B\u540D\u4E4B\u95F4\u7528\u7A7A\u683C\u5206\u9694\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>normal_view<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668" aria-hidden="true">#</a> \u9009\u62E9\u5668</h2><p>\u76EE\u524D\u652F\u6301\u7684\u9009\u62E9\u5668\u6709:</p><table><thead><tr><th>\u9009\u62E9\u5668</th><th>\u6837\u4F8B</th><th>\u6837\u4F8B\u63CF\u8FF0</th></tr></thead><tbody><tr><td>.class</td><td>.intro</td><td>\u9009\u62E9\u6240\u6709\u62E5\u6709 <code>class=&quot;intro&quot;</code> \u7684\u7EC4\u4EF6</td></tr><tr><td>#id</td><td>#firstname</td><td>\u9009\u62E9\u62E5\u6709 <code>id=&quot;firstname&quot;</code> \u7684\u7EC4\u4EF6</td></tr><tr><td>element</td><td>view</td><td>\u9009\u62E9\u6240\u6709 view \u7EC4\u4EF6</td></tr><tr><td>element, element</td><td>view, checkbox</td><td>\u9009\u62E9\u6240\u6709\u6587\u6863\u7684 view \u7EC4\u4EF6\u548C\u6240\u6709\u7684 checkbox \u7EC4\u4EF6</td></tr><tr><td>::after</td><td>view::after</td><td>\u5728 view \u7EC4\u4EF6\u540E\u8FB9\u63D2\u5165\u5185\u5BB9</td></tr><tr><td>::before</td><td>view::before</td><td>\u5728 view \u7EC4\u4EF6\u524D\u8FB9\u63D2\u5165\u5185\u5BB9</td></tr></tbody></table><h2 id="\u5168\u5C40\u6837\u5F0F\u4E0E\u5C40\u90E8\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6837\u5F0F\u4E0E\u5C40\u90E8\u6837\u5F0F" aria-hidden="true">#</a> \u5168\u5C40\u6837\u5F0F\u4E0E\u5C40\u90E8\u6837\u5F0F</h2><p>\u5B9A\u4E49\u5728 <code>app.wxss</code> \u4E2D\u7684\u6837\u5F0F\u4E3A\u5168\u5C40\u6837\u5F0F\uFF0C\u4F5C\u7528\u4E8E\u6BCF\u4E00\u4E2A\u9875\u9762\u3002\u5728 page \u7684 wxss \u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u6837\u5F0F\u4E3A\u5C40\u90E8\u6837\u5F0F\uFF0C\u53EA\u4F5C\u7528\u5728\u5BF9\u5E94\u7684\u9875\u9762\uFF0C\u5E76\u4F1A\u8986\u76D6 <code>app.wxss</code> \u4E2D\u76F8\u540C\u7684\u9009\u62E9\u5668\u3002</p>`,17);function c(i,l){return a(),e("div",null,[p,n(" more "),o])}const h=s(d,[["render",c],["__file","wxss.html.vue"]]);export{h as default};
