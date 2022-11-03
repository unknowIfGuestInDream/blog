import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,f as n}from"./app.70f43444.js";const i={},t=n(`<p>\u5728\u4EFB\u4F55\u4E00\u4E2A\u9636\u6BB5\uFF0C\u60A8\u90FD\u6709\u53EF\u80FD\u60F3\u8981\u64A4\u6D88\u67D0\u4E9B\u64CD\u4F5C\u3002\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5B66\u4E60\u51E0\u4E2A\u64A4\u6D88\u60A8\u6240\u505A\u4FEE\u6539\u7684\u57FA\u672C\u5DE5\u5177\u3002\u6CE8 \u610F\uFF0C\u6709\u4E9B\u64A4\u6D88\u64CD\u4F5C\u662F\u4E0D\u53EF\u9006\u7684\u3002\u8FD9\u662F\u5728\u4F7F\u7528 Git \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u56E0\u4E3A\u64CD\u4F5C\u5931\u8BEF\u800C\u5BFC\u81F4\u4E4B\u524D\u7684\u5DE5\u4F5C\u4E22\u5931\u7684\u5C11\u6709\u7684\u51E0\u4E2A \u5730\u65B9\u4E4B\u4E00\u3002</p><p>\u6709\u65F6\u5019\u6211\u4EEC\u63D0\u4EA4\u5B8C\u4E86\u624D\u53D1\u73B0\u6F0F\u6389\u4E86\u51E0\u4E2A\u6587\u4EF6\u6CA1\u6709\u6DFB\u52A0\uFF0C\u6216\u8005\u63D0\u4EA4\u4FE1\u606F\u5199\u9519\u4E86\u3002\u6B64\u65F6\uFF0C\u53EF\u4EE5\u8FD0\u884C\u5E26\u6709 <code>--amend</code> \u9009 \u9879\u7684\u63D0\u4EA4\u547D\u4EE4\u6765\u91CD\u65B0\u63D0\u4EA4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u5C06\u6682\u5B58\u533A\u4E2D\u7684\u6587\u4EF6\u63D0\u4EA4\u3002\u5982\u679C\u81EA\u4E0A\u6B21\u63D0\u4EA4\u4EE5\u6765\u60A8\u8FD8\u672A\u505A\u4EFB\u4F55\u4FEE\u6539(\u4F8B\u5982\uFF0C\u5728\u4E0A\u6B21\u63D0\u4EA4\u540E\u9A6C\u4E0A\u6267\u884C\u4E86 \u6B64\u547D\u4EE4)\uFF0C \u90A3\u4E48\u5FEB\u7167\u4F1A\u4FDD\u6301\u4E0D\u53D8\uFF0C\u800C\u60A8\u6240\u4FEE\u6539\u7684\u53EA\u662F\u63D0\u4EA4\u4FE1\u606F\u3002</p><p>\u6587\u672C\u7F16\u8F91\u5668\u542F\u52A8\u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u4E4B\u524D\u7684\u63D0\u4EA4\u4FE1\u606F\u3002\u7F16\u8F91\u540E\u4FDD\u5B58\u4F1A\u8986\u76D6\u539F\u6765\u7684\u63D0\u4EA4\u4FE1\u606F\u3002</p><p>\u4F8B\u5982\uFF0C\u60A8\u63D0\u4EA4\u540E\u53D1\u73B0\u5FD8\u8BB0\u4E86\u6682\u5B58\u67D0\u4E9B\u9700\u8981\u7684\u4FEE\u6539\uFF0C\u53EF\u4EE5\u50CF\u4E0B\u9762\u8FD9\u6837\u64CD\u4F5C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;initial commit&#39;</span>
<span class="token function">git</span> <span class="token function">add</span> forgotten_file
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u60A8\u53EA\u4F1A\u6709\u4E00\u4E2A\u63D0\u4EA4\u2014\u2014\u7B2C\u4E8C\u6B21\u63D0\u4EA4\u5C06\u4EE3\u66FF\u7B2C\u4E00\u6B21\u63D0\u4EA4\u7684\u7ED3\u679C\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u5F53\u60A8\u5728\u4FEE\u8865\u6700\u540E\u7684\u63D0\u4EA4\u65F6\uFF0C\u5E76\u4E0D\u662F\u901A\u8FC7\u7528\u6539\u8FDB\u540E\u7684\u63D0\u4EA4 \u539F\u4F4D\u66FF\u6362 \u6389\u65E7\u6709\u63D0\u4EA4\u7684\u65B9\u5F0F\u6765\u4FEE\u590D \u7684\uFF0C \u7406\u89E3\u8FD9\u4E00\u70B9\u975E\u5E38\u91CD\u8981\u3002\u4ECE\u6548\u679C\u4E0A\u6765\u8BF4\uFF0C\u5C31\u50CF\u662F\u65E7\u6709\u7684\u63D0\u4EA4\u4ECE\u672A\u5B58\u5728\u8FC7\u4E00\u6837\uFF0C\u5B83\u5E76\u4E0D\u4F1A\u51FA \u73B0\u5728\u4ED3\u5E93\u7684\u5386\u53F2\u4E2D\u3002</p><p>\u4FEE\u8865\u63D0\u4EA4\u6700\u660E\u663E\u7684\u4EF7\u503C\u662F\u53EF\u4EE5\u7A0D\u5FAE\u6539\u8FDB\u60A8\u6700\u540E\u7684\u63D0\u4EA4\uFF0C\u800C\u4E0D\u4F1A\u8BA9\u201C\u554A\uFF0C\u5FD8\u4E86\u6DFB\u52A0\u4E00\u4E2A\u6587\u4EF6\u201D\u6216 \u8005 \u201C\u5C0F\u4FEE\u8865\uFF0C\u4FEE\u6B63\u7B14\u8BEF\u201D\u8FD9\u79CD\u63D0\u4EA4\u4FE1\u606F\u5F04\u4E71\u60A8\u7684\u4ED3\u5E93\u5386\u53F2\u3002</p></div>`,9),c=[t];function l(o,p){return e(),s("div",null,c)}const m=a(i,[["render",l],["__file","recall.html.vue"]]);export{m as default};
