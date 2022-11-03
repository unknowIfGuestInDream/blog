import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as o,d as s,a as e,f as l}from"./app.70f43444.js";const t={},d=e("p",null,"JSON: JavaScript Object Notation(JavaScript \u5BF9\u8C61\u8868\u793A\u6CD5)",-1),i=e("ul",null,[e("li",null,[e("p",null,"JSON \u662F\u5B58\u50A8\u548C\u4EA4\u6362\u6587\u672C\u4FE1\u606F\u7684\u8BED\u6CD5\u3002\u7C7B\u4F3C XML\u3002")]),e("li",null,[e("p",null,"JSON \u6BD4 XML \u66F4\u5C0F\u3001\u66F4\u5FEB\uFF0C\u66F4\u6613\u89E3\u6790\u3002")]),e("li",null,[e("p",null,"JSON \u662F\u8F7B\u91CF\u7EA7\u7684\u6587\u672C\u6570\u636E\u4EA4\u6362\u683C\u5F0F")]),e("li",null,[e("p",null,"JSON \u72EC\u7ACB\u4E8E\u8BED\u8A00: JSON \u4F7F\u7528 JavaScript \u8BED\u6CD5\u6765\u63CF\u8FF0\u6570\u636E\u5BF9\u8C61\uFF0C\u4F46\u662F JSON \u4ECD\u7136\u72EC\u7ACB\u4E8E\u8BED\u8A00\u548C\u5E73\u53F0\u3002JSON \u89E3\u6790\u5668\u548C JSON \u5E93\u652F\u6301\u8BB8\u591A\u4E0D\u540C\u7684\u7F16\u7A0B\u8BED\u8A00\u3002\u76EE\u524D\u975E\u5E38\u591A\u7684\u52A8\u6001(PHP\uFF0CJSP\uFF0C.NET)\u7F16\u7A0B\u8BED\u8A00\u90FD\u652F\u6301 JSON\u3002")]),e("li",null,[e("p",null,"JSON \u5177\u6709\u81EA\u6211\u63CF\u8FF0\u6027\uFF0C\u66F4\u6613\u7406\u89E3")])],-1),c=l(`<h2 id="json-\u503C" tabindex="-1"><a class="header-anchor" href="#json-\u503C" aria-hidden="true">#</a> JSON \u503C</h2><p>JSON \u503C\u53EF\u4EE5\u662F:</p><ul><li>\u6570\u5B57(\u6574\u6570\u6216\u6D6E\u70B9\u6570)</li><li>\u5B57\u7B26\u4E32(\u5728\u53CC\u5F15\u53F7\u4E2D)</li><li>\u903B\u8F91\u503C(<code>true</code> \u6216 <code>false</code>)</li><li>\u6570\u7EC4(\u5728\u4E2D\u62EC\u53F7\u4E2D)</li><li>\u5BF9\u8C61(\u5728\u5927\u62EC\u53F7\u4E2D)</li><li>null</li></ul><h2 id="json-\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#json-\u6570\u5B57" aria-hidden="true">#</a> JSON \u6570\u5B57</h2><p>JSON \u6570\u5B57\u53EF\u4EE5\u662F\u6574\u578B\u6216\u8005\u6D6E\u70B9\u578B:</p><p><strong>\u4F8B:</strong></p><ul><li><code>5201314</code></li><li><code>-1</code></li><li><code>3.141592654</code></li></ul><h2 id="json-\u5E03\u5C14\u503C" tabindex="-1"><a class="header-anchor" href="#json-\u5E03\u5C14\u503C" aria-hidden="true">#</a> JSON \u5E03\u5C14\u503C</h2><p>JSON \u5E03\u5C14\u503C\u53EF\u4EE5\u662F <code>true</code> \u6216\u8005 <code>false</code></p><h2 id="json-\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#json-\u5B57\u7B26\u4E32" aria-hidden="true">#</a> JSON \u5B57\u7B26\u4E32</h2><p>JSON \u5B57\u7B26\u4E32\u9700\u8981\u7528\u53CC\u62EC\u53F7 <code>&quot;</code> \u5305\u542B\uFF0C\u5982\u679C\u5185\u90E8\u542B\u6709\u82F1\u6587\u5F15\u53F7 <code>&quot;</code>\uFF0C\u9700\u8981\u4F7F\u7528 <code>\\</code> \u8F6C\u4E49\u3002</p><p><strong>\u4F8B:</strong></p><ul><li><code>&quot;Mr.Hope is handsome&quot;</code></li><li><code>&quot;\u6625\u7720\u4E0D\u89C9\u6653\uFF0C\u5904\u5904\u95FB\u557C\u9E1F&quot;</code></li><li><code>&quot;A saying goes: \\&quot;Great hopes make great man.\\&quot;&quot;</code></li></ul><h2 id="json-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#json-\u5BF9\u8C61" aria-hidden="true">#</a> JSON \u5BF9\u8C61</h2><p>JSON \u5BF9\u8C61\u5728\u5927\u62EC\u53F7 <code>{}</code> \u4E2D\u4E66\u5199\u4EE5 <code>\u952E: \u503C</code> \u5BF9\u7684\u65B9\u5F0F\u4E66\u5199\uFF0C\u4E0D\u540C\u952E\u503C\u5BF9\u4E4B\u95F4\u7528 <code>,</code> \u5206\u9694\u3002</p><p><strong>\u4F8B:</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;heading&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6821\u56ED\u5361\u8BF4\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6821\u56ED\u5361\u662F\u4E1C\u5E08\u7684\u91D1\u878D\u6D88\u8D39\u5361&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json-\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#json-\u6570\u7EC4" aria-hidden="true">#</a> JSON \u6570\u7EC4</h2><p>JSON \u6570\u7EC4\u5728\u4E2D\u62EC\u53F7 <code>[]</code> \u4E2D\u4E66\u5199\uFF0C\u4E0D\u540C\u5143\u7D20\u95F4\u7528 <code>,</code> \u9694\u5F00\u3002</p><h2 id="json-null" tabindex="-1"><a class="header-anchor" href="#json-null" aria-hidden="true">#</a> JSON null</h2><p>JSON \u53EF\u4EE5\u8BBE\u7F6E <code>null</code> \u503C</p>`,21);function r(u,p){return a(),o("div",null,[d,i,s(" more "),c])}const S=n(t,[["render",r],["__file","index.html.vue"]]);export{S as default};
