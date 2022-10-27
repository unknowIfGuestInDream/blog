import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as o,d,a,f as t}from"./app.9d9222aa.js";const l={},s=a("p",null,"\u672C\u6587\u4ECB\u7ECD Glob \u5339\u914D\u3002",-1),i=t('<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>Glob \u662F\u5F53\u60A8\u8981\u8FDB\u884C\u8DEF\u5F84\u5339\u914D\u65F6\u952E\u5165\u7684\u6A21\u5F0F\u3002</p><p>\u5728\u89E3\u6790\u4E00\u6761\u5339\u914D\u6A21\u5F0F\u524D\uFF0CGlob \u9996\u5148\u5C06 <code>{}</code> \u90E8\u5206\u5C55\u5F00\u4E3A\u4E00\u7EC4\u5339\u914D\u6A21\u5F0F\u3002<code>{}</code> \u5185\u7684\u6A21\u5F0F\u4E4B\u95F4\u4F7F\u7528\u9017\u53F7\u5206\u9694\u3002</p><p>\u5982 <code>a{/b/c,bcd}</code> \u5C06\u6269\u5C55\u4E3A <code>a/b/c</code> \u548C <code>abcd</code></p><p><code>{}</code> \u53EF\u4EE5\u5D4C\u5957\uFF0C\u53EF\u4E0E\u5176\u4ED6\u6A21\u5F0F\u8054\u7528\u3002</p><p>Glob \u7684\u9B54\u672F\u5B57\u7B26\u5982\u4E0B:</p><ul><li><p><code>*</code>: \u5339\u914D\u8DEF\u5F84\u90E8\u5206\u4E2D\u7684 0 \u4E2A\u6216\u591A\u4E2A\u5B57\u7B26</p></li><li><p><code>?</code>: \u5339\u914D\u5355\u4E2A\u5B57\u7B26</p></li><li><p><code>[...]</code>: \u5339\u914D\u5B57\u7B26\u8303\u56F4\u3002<code>[^...]</code>\u548C <code>[!...]</code> \u8868\u793A\u5339\u914D\u4E0D\u5728\u8303\u56F4\u5185\u7684\u5B57\u7B26</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><ul><li><code>[xyz].js</code> \u53EA\u80FD\u5339\u914D <code>x.js</code>, <code>y.js</code>, <code>z.js</code>\uFF0C\u4F46\u4E0D\u4F1A\u5339\u914D <code>xy.js</code>, <code>xyz.js</code> \u7B49\uFF0C\u56E0\u4E3A\u6574\u4E2A\u4E2D\u62EC\u53F7\u53EA\u4EE3\u8868\u4E00\u4E2A\u5B57\u7B26\u3002\u5176\u7B49\u4EF7\u4E8E <code>[x-z].js</code></li><li><code>[!xyz].js</code> \u80FD\u5339\u914D <code>a.js</code>, <code>b.js</code>, <code>u.js</code>\uFF0C\u4F46\u4E0D\u4F1A\u5339\u914D <code>x.js</code>, <code>y.js</code> <code>z.js</code>\uFF0C<code>ab.js</code> \u7B49\u3002\u5176\u7B49\u4EF7\u4E8E <code>[^xyz].js</code> \u548C <code>[!x-z].js</code>\u3002</li></ul></details></li><li><p><code>!(pattern|pattern|pattern)</code>: \u5339\u914D\u4E0E\u63D0\u4F9B\u7684\u4EFB\u4F55\u6A21\u5F0F\u90FD\u4E0D\u5339\u914D\u7684\u4EFB\u4F55\u5185\u5BB9\u3002</p></li><li><p><code>?(pattern|pattern|pattern)</code>: \u5339\u914D 0 \u6216\u4E00\u4E2A\u5185\u90E8\u6A21\u5F0F\u3002</p></li><li><p><code>+(pattern|pattern|pattern)</code> \u5339\u914D\u4E00\u4E2A\u6216\u591A\u4E2A\u5185\u90E8\u6A21\u5F0F\u3002</p></li><li><p><code>*(a|b|c)</code>: \u5339\u914D 0 \u6216\u591A\u4E2A\u5185\u90E8\u6A21\u5F0F\u3002</p></li><li><p><code>@(pattern|pat*|pat?erN)</code>: \u5339\u914D\u6070\u597D\u4E00\u4E2A\u5185\u90E8\u6A21\u5F0F\u3002</p></li><li><p><code>**</code>: \u5982\u679C\u5176\u5728\u8DEF\u5F84\u90E8\u5206\u4E2D\u5355\u72EC\u51FA\u73B0\uFF0C\u5219\u5339\u914D\u8DEF\u5F84\u4E2D\u7684 0 \u4E2A\u6216\u591A\u4E2A\u76EE\u5F55\u4E0E\u5B50\u76EE\u5F55\u3002\u8BF7\u6CE8\u610F\u5B83\u4E0D\u5BF9 symlinked \u76EE\u5F55 (\u7B26\u53F7\u94FE\u63A5\u76EE\u5F55) \u8FDB\u884C\u722C\u53D6\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><ul><li><code>**</code> \u80FD\u5339\u914D\u5339\u914D\u6240\u6709\u7684\u76EE\u5F55\u548C\u6587\u4EF6\u3002</li><li><code>**/*.js</code> \u80FD\u5339\u914D\u6240\u6709\u7684 js \u6587\u4EF6\u3002</li><li><code>a/**/b.txt</code> \u80FD\u5339\u914D\u76EE\u5F55\u91CC\u4EFB\u4F55\u4E00\u4E2A a \u6587\u4EF6\u5939\u5185\u7684\u6240\u6709 b.txt \u6587\u4EF6\u3002</li></ul></details></li></ul><h2 id="\u5F00\u5934\u7684\u6587\u4EF6\u4E0E\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u5F00\u5934\u7684\u6587\u4EF6\u4E0E\u6587\u4EF6\u5939" aria-hidden="true">#</a> <code>.</code> \u5F00\u5934\u7684\u6587\u4EF6\u4E0E\u6587\u4EF6\u5939</h2><p>\u7531\u4E8E\u4EE5 <code>.</code> \u5F00\u5934\u7684\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u5728 Unix \u4E2D\u89C6\u4E3A\u9690\u85CF\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF0C\u6545 Glob \u4E0D\u4F1A\u5339\u914D\u4EFB\u4F55\u4EE5 <code>.</code> \u5F00\u5934\u7684\u8DEF\u5F84\u90E8\u5206\uFF0C\u5982 <code>.github/dependabot.yml</code> \u6216 <code>.eslintrc.js</code>\u3002</p><p>\u5982\u679C\u7684\u786E\u60F3\u8981\u5339\u914D <code>.</code> \u5F00\u5934\u7684\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF0C\u53EF\u4EE5\u663E\u793A\u6807\u6CE8\u51FA\u6765\uFF0C\u5982 <code>.*.js</code> \u53EF\u4EE5\u5339\u914D <code>.eslintrc.js</code>\u3002</p>',10);function p(r,n){return c(),o("div",null,[s,d(" more "),i])}const u=e(l,[["render",p],["__file","glob.html.vue"]]);export{u as default};
