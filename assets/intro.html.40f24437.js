import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,d as c,a as n,b as s,f as o}from"./app.6f239d00.js";const p={},l=n("p",null,"jQuery \u662F JavaScript \u4E16\u754C\u4E2D\u4F7F\u7528\u6700\u5E7F\u6CDB\u7684\u4E00\u4E2A\u5E93\u3002\u9F0E\u76DB\u65F6\u671F\u5168\u4E16\u754C\u5927\u7EA6\u6709 80~90%\u7684\u7F51\u7AD9\u76F4\u63A5\u6216\u95F4\u63A5\u5730\u4F7F\u7528\u4E86 jQuery\u3002",-1),u=n("p",null,"jQuery \u80FD\u5E2E\u6211\u4EEC\u5E72\u8FD9\u4E9B\u4E8B\u60C5:",-1),i=n("ul",null,[n("li",null,"\u6D88\u9664\u6D4F\u89C8\u5668\u5DEE\u5F02: \u60A8\u4E0D\u9700\u8981\u81EA\u5DF1\u5199\u5197\u957F\u7684\u4EE3\u7801\u6765\u9488\u5BF9\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u6765\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u7F16\u5199 Ajax \u7B49\u4EE3\u7801\uFF1B"),n("li",null,[s("\u7B80\u6D01\u7684\u64CD\u4F5C DOM \u7684\u65B9\u6CD5: \u5199 "),n("code",null,"$('#test')"),s(" \u80AF\u5B9A\u6BD4 "),n("code",null,"document.getElementById('test')"),s(" \u6765\u5F97\u7B80\u6D01\uFF1B")]),n("li",null,"\u8F7B\u677E\u5B9E\u73B0\u52A8\u753B\u3001\u4FEE\u6539 CSS \u7B49\u5404\u79CD\u64CD\u4F5C\u3002"),n("li",null,"jQuery \u7684\u7406\u5FF5 \u201CWrite Less, Do More\u201C\uFF0C\u8BA9\u60A8\u5199\u66F4\u5C11\u7684\u4EE3\u7801\uFF0C\u5B8C\u6210\u66F4\u591A\u7684\u5DE5\u4F5C!")],-1),d=o(`<h2 id="jquery-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#jquery-\u7248\u672C" aria-hidden="true">#</a> jQuery \u7248\u672C</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>jQuery \u7684 <code>1.x</code> \u7248\u672C \u517C\u5BB9 ie678\uFF0C<code>2.x</code> \u4E3A\u4E86\u7CBE\u7B80\u4EE3\u7801\u4F53\u79EF\u79FB\u9664\u4E86 ie678 \u7684\u517C\u5BB9\u3002<code>3.x</code> \u53EA\u517C\u5BB9\u6700\u65B0\u7684\u4E00\u6279\u6D4F\u89C8\u5668\uFF0C\u662F\u5B98\u65B9\u8FD8\u5728\u66F4\u65B0\u7EF4\u62A4\u7684\u628A\u5462\u4E0D\u80FD</p><p>\u7531\u4E8E\u5DF2\u7ECF 2020 \u5E74\u4E86\uFF0C\u76F4\u63A5\u9009\u7528 jQuery<code>3.x</code> \u7248\u672C\u5373\u53EF\u3002</p></div><p>\u4ECE jQuery \u5B98\u7F51\u53EF\u4EE5\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u3002jQuery \u53EA\u662F\u4E00\u4E2A jquery-xxx.js \u6587\u4EF6\uFF0C\u4F46\u60A8\u4F1A\u770B\u5230\u6709 compressed(\u5DF2\u538B\u7F29)\u548C uncompressed(\u672A\u538B\u7F29)\u4E24\u79CD\u7248\u672C\uFF0C\u4F7F\u7528\u65F6\u5B8C\u5168\u4E00\u6837\uFF0C\u4F46\u5982\u679C\u60A8\u60F3\u6DF1\u5165\u7814\u7A76 jQuery \u6E90\u7801\uFF0C\u90A3\u5C31\u7528 uncompressed \u7248\u672C\u3002</p><h2 id="\u4F7F\u7528-jquery" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-jquery" aria-hidden="true">#</a> \u4F7F\u7528 jQuery</h2><p>\u4F7F\u7528 jQuery \u53EA\u9700\u8981\u5728\u9875\u9762\u7684 <code>&lt;head&gt;</code> \u5F15\u5165 jQuery \u6587\u4EF6\u5373\u53EF:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//code.jquery.com/jquery-3.4.1.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u7B26\u53F7" aria-hidden="true">#</a> $ \u7B26\u53F7</h2><p><code>$</code> \u662F\u8457\u540D\u7684 jQuery \u7B26\u53F7\u3002\u5B9E\u9645\u4E0A\uFF0CjQuery \u628A\u6240\u6709\u529F\u80FD\u5168\u90E8\u5C01\u88C5\u5728\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF jQuery \u4E2D\uFF0C\u800C <code>$</code> \u4E5F\u662F\u4E00\u4E2A\u5408\u6CD5\u7684\u53D8\u91CF\u540D\uFF0C\u5B83\u662F\u53D8\u91CF jQuery \u7684\u522B\u540D:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>jQuery<span class="token punctuation">;</span> <span class="token comment">// jQuery(selector, context)</span>
window<span class="token punctuation">.</span>$<span class="token punctuation">;</span> <span class="token comment">// jQuery(selector, context)</span>
$ <span class="token operator">===</span> jQuery<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">typeof</span> $<span class="token punctuation">;</span> <span class="token comment">// &#39;function&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>$</code> \u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F46\u662F\u51FD\u6570\u4E5F\u662F\u5BF9\u8C61\uFF0C\u4E8E\u662F <code>$</code> \u9664\u4E86\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u5916\uFF0C\u4E5F\u53EF\u4EE5\u6709\u5F88\u591A\u5176\u4ED6\u5C5E\u6027\u3002</p><p>\u6CE8\u610F\uFF0C\u60A8\u770B\u5230\u7684 <code>$</code> \u51FD\u6570\u540D\u53EF\u80FD\u4E0D\u662F <code>jQuery(selector, context)</code>\uFF0C\u56E0\u4E3A\u5F88\u591A JavaScript \u538B\u7F29\u5DE5\u5177\u53EF\u4EE5\u5BF9\u51FD\u6570\u540D\u548C\u53C2\u6570\u6539\u540D\uFF0C\u6240\u4EE5\u538B\u7F29\u8FC7\u7684 jQuery \u6E90\u7801 <code>$</code> \u51FD\u6570\u53EF\u80FD\u53D8\u6210 <code>a(b, c)</code>\u3002</p><p>\u7EDD\u5927\u591A\u6570\u65F6\u5019\uFF0C\u6211\u4EEC\u90FD\u76F4\u63A5\u7528 <code>$</code> (\u56E0\u4E3A\u5199\u8D77\u6765\u66F4\u7B80\u5355\u561B)\u3002\u4F46\u662F\uFF0C\u5982\u679C <code>$</code> \u8FD9\u4E2A\u53D8\u91CF\u4E0D\u5E78\u5730\u88AB\u5360\u7528\u4E86\uFF0C\u800C\u4E14\u8FD8\u4E0D\u80FD\u6539\uFF0C\u90A3\u6211\u4EEC\u5C31\u53EA\u80FD\u8BA9 jQuery \u628A <code>$</code> \u53D8\u91CF\u4EA4\u51FA\u6765\uFF0C\u7136\u540E\u5C31\u53EA\u80FD\u4F7F\u7528 <code>jQuery</code> \u8FD9\u4E2A\u53D8\u91CF:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">;</span> <span class="token comment">// jQuery(selector, context)</span>
jQuery<span class="token punctuation">.</span><span class="token function">noConflict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$<span class="token punctuation">;</span> <span class="token comment">// undefined</span>
jQuery<span class="token punctuation">;</span> <span class="token comment">// jQuery(selector, context)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u9ED1\u9B54\u6CD5\u7684\u539F\u7406\u662F jQuery \u5728\u5360\u7528<code>$</code>\u4E4B\u524D\uFF0C\u5148\u5728\u5185\u90E8\u4FDD\u5B58\u4E86\u539F\u6765\u7684<code>$</code>,\u8C03\u7528 <code>jQuery.noConflict()</code> \u65F6\u4F1A\u628A\u539F\u6765\u4FDD\u5B58\u7684\u53D8\u91CF\u8FD8\u539F\u3002</p>`,14);function r(m,k){return e(),t("div",null,[l,u,i,c(" more "),d])}const y=a(p,[["render",r],["__file","intro.html.vue"]]);export{y as default};
