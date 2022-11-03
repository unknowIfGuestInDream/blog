import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as d,d as l,a as e,b as o,e as t,f as s,r as i}from"./app.70f43444.js";const r={},p=e("p",null,[o("clang-format \u662F\u4E00\u79CD\u4EE3\u7801\u683C\u5F0F\u5316\u5DE5\u5177\uFF0C\u53EF\u7528\u4E8E\u683C\u5F0F\u5316(\u6392\u7248) C / C++ / Java / JavaScript / Objective-C / Protobuf / C# \u7684\u4EE3\u7801\u3002\u5B83\u652F\u6301\u591A\u79CD\u9884\u8BBE\u4EE3\u7801\u98CE\u683C\u4E0E\u81EA\u5B9A\u4E49\u98CE\u683C (\u901A\u8FC7\u7F16\u5199 "),e("code",null,".clang-format"),o(" \u6587\u4EF6)\u3002")],-1),u=s(`<h2 id="\u81EA\u5B9A\u4E49\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u683C\u5F0F\u5316</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>clang-format <span class="token parameter variable">-style</span><span class="token operator">=</span>\u683C\u5F0F\u540D -dump-config <span class="token operator">&gt;</span> .clang-format\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u4E2D\uFF0C\u683C\u5F0F\u540D\u7684\u53D6\u503C\u53EF\u4EE5\u4E3A <code>LLVM</code>, <code>Google</code>, <code>Chromium</code>, <code>Mozilla</code>, <code>Webkit</code> \u4E2D\u7684\u4EFB\u4E00\u79CD\uFF0C\u8FD9\u4F1A\u5C06\u5BF9\u5E94\u683C\u5F0F\u9884\u8BBE\u5199\u5165 <code>.clang-format</code> \u6587\u4EF6\u3002</p><h2 id="\u4F7F\u7528\u547D\u4EE4\u884C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u547D\u4EE4\u884C" aria-hidden="true">#</a> \u4F7F\u7528\u547D\u4EE4\u884C</h2><h3 id="\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F" aria-hidden="true">#</a> \u683C\u5F0F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>clang-format <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u53EF\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u53EF\u7528\u9009\u9879" aria-hidden="true">#</a> \u53EF\u7528\u9009\u9879</h3><ul><li><p><code>--Werror</code>: \u5C06\u683C\u5F0F\u5316\u8B66\u544A\u53D8\u4E3A\u9519\u8BEF</p></li><li><p><code>--Wno-error=unknown</code>: \u672A\u77E5\u7684\u683C\u5F0F\u5316\u9009\u9879\u4EC5\u4EA7\u751F\u8B66\u544A\u3002</p><p>\u8FD9\u53EF\u4EE5\u4FDD\u6301\u683C\u5F0F\u5316\u542F\u7528\uFF0C\u5373\u4F7F\u914D\u7F6E\u5305\u542B\u672A\u77E5 (\u8F83\u65B0) \u9009\u9879\u3002</p></li><li><p><code>--assume-filename=&lt;string&gt;</code>: \u8986\u76D6\u7528\u4E8E\u786E\u5B9A\u8BED\u8A00\u7684\u6587\u4EF6\u540D\u3002</p><p>\u901A\u5E38\u5728\u4ECE stdin \u8BFB\u53D6\u65F6\uFF0C\u5E2E\u52A9 clang-fomat \u83B7\u53D6\u6587\u4EF6\u540D</p></li><li><p><code>--dry-run</code> \u6216 <code>-n</code>: \u5982\u679C\u8BBE\u7F6E\uFF0C\u5B9E\u9645\u4E0A\u4E0D\u8FDB\u884C\u683C\u5F0F\u66F4\u6539</p></li><li><p><code>--dump-config</code>: \u5C06\u914D\u7F6E\u9009\u9879\u8F6C\u50A8\u5230\u6807\u51C6\u8F93\u51FA\u5E76\u9000\u51FA, \u53EF\u4EE5\u4E0E <code>--style</code> \u9009\u9879\u4E00\u8D77\u4F7F\u7528\u3002</p></li><li><p><code>--fallback-style=&lt;string&gt;</code>: \u8BBE\u7F6E\u56DE\u9000\u7684\u9ED8\u8BA4\u683C\u5F0F\uFF0C\u901A\u5E38\u5728 clang-format \u627E\u4E0D\u5230\u914D\u7F6E\u6587\u4EF6\u65F6\u4F7F\u7528\u3002</p><p>\u8BBE\u7F6E <code>--fallback-style=none</code> \u53EF\u4EE5\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u8DF3\u8FC7\u683C\u5F0F\u5316</p></li><li><p><code>--ferror-limit=&lt;uint&gt;</code>: \u8BBE\u7F6E clang-format \u8F93\u51FA\u7684\u6700\u5927\u9519\u8BEF\u6570\uFF0C\u8D85\u8FC7\u5C06\u505C\u6B62\u8F93\u51FA\u3002</p><p>\u8BF7\u4EC5\u4E0E <code>--dry-run</code> \u6216 <code>-n</code> \u914D\u5408\u4F7F\u7528\uFF0C<code>0</code> \u610F\u5473\u7740\u65E0\u9650\u5236</p></li><li><p><code>-i</code>: \u66FF\u6362\u8F93\u5165\u6587\u4EF6</p></li><li><p><code>--length=&lt;uint&gt;</code>: \u683C\u5F0F\u5316\u6307\u5B9A\u957F\u5EA6\u8303\u56F4</p><p>\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A\u591A\u4E2A\u504F\u79FB\u548C\u957F\u5EA6\u5BF9\u6765\u683C\u5F0F\u5316\u51E0\u4E2A\u8303\u56F4\u3002</p><p>\u5F53\u4EC5\u6307\u5B9A\u4E00\u4E2A\u504F\u79FB\u91CF\u800C\u6CA1\u6709 <code>--length</code>\uFF0Cclang-format \u4F1A\u4E00\u76F4\u683C\u5F0F\u5316\u5230\u6587\u4EF6\u7684\u6700\u540E\u3002</p><p>\u53EA\u80FD\u4E0E\u4E00\u4E2A\u8F93\u5165\u6587\u4EF6\u4E00\u8D77\u4F7F\u7528\u3002</p></li><li><p><code>--lines=&lt;string&gt;</code>: \u683C\u5F0F\u4E3A <code>&lt;start line&gt;:&lt;end line&gt;</code></p><p>\u8BBE\u7F6E\u683C\u5F0F\u5316\u884C\u7684\u8303\u56F4(\u8D77\u59CB\u4E3A\u7B2C\u4E00\u884C)\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A\u591A\u4E2A\u8303\u56F4\u6765\u683C\u5F0F\u5316\u591A\u884C\u3002</p><p>\u4E0D\u80FD\u4E0E <code>--offset</code> \u548C <code>--length</code> \u4E00\u8D77\u4F7F\u7528\u3002</p><p>\u53EA\u80FD\u4E0E\u4E00\u4E2A\u8F93\u5165\u6587\u4EF6\u4E00\u8D77\u4F7F\u7528\u3002</p></li><li><p><code>--offset=&lt;uint&gt;</code>: \u683C\u5F0F\u5316\u4ECE\u6B64\u5B57\u8282\u504F\u79FB\u91CF\u5F00\u59CB\u7684\u8303\u56F4\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A\u591A\u4E2A\u8303\u56F4\u6765\u683C\u5F0F\u5316\u51E0\u4E2A\u504F\u79FB\u91CF\u548C\u957F\u5EA6\u5BF9\u3002</p><p>\u53EA\u80FD\u4E0E\u4E00\u4E2A\u8F93\u5165\u6587\u4EF6\u4E00\u8D77\u4F7F\u7528\u3002</p></li><li><p><code>--output-replacements-xml</code>: \u8F93\u51FA XML</p></li><li><p><code>--sort-includes</code>: \u5982\u679C\u8BBE\u7F6E\uFF0C\u5C06\u8986\u76D6\u5305\u542B\u6392\u5E8F\u884C\u4E3A\u3002\u7531 SortIncludes \u6837\u5F0F\u6807\u5FD7\u786E\u5B9A</p></li><li><p><code>--style=&lt;string&gt;</code> \u7F16\u7801\u6837\u5F0F</p><p>\u5F53\u524D\u652F\u6301: <code>LLVM</code>, <code>Google</code>, <code>Chromium</code>, <code>Mozilla</code>, <code>Webkit</code></p><p>\u4F7F\u7528 <code>--style=file</code> \u4ECE\u4E2D\u6587\u4EF6\u52A0\u8F7D\u6837\u5F0F\u914D\u7F6E</p><p>\u4F7F\u7528 <code>--style=&quot;{key:value,...}&quot;</code> \u6765\u8BBE\u7F6E\u7279\u5B9A\u7684\u53C2\u6570\uFF0C \u4F8B\u5982: <code>&quot;{BasedOnStyle: llvm, IndentWidth: 8}&quot;</code></p></li><li><p><code>--verbose</code>: \u8F93\u51FA\u5904\u7406\u7684\u6587\u4EF6\u5217\u8868</p></li></ul><h2 id="vs-code" tabindex="-1"><a class="header-anchor" href="#vs-code" aria-hidden="true">#</a> VS Code</h2><p>\u5728 VS Code \u4E2D\u5B89\u88C5 C/C++ \u63D2\u4EF6\u4EE5\u542F\u7528\u4E24\u8005\u652F\u6301\u65F6\u4F1A\u81EA\u52A8\u5B89\u88C5 clang-format\uFF0C\u56E0\u6B64\u65E0\u9700\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u5373\u53EF\u5728 C/C++ \u6587\u4EF6\u4E2D\u5BF9\u4EE3\u7801\u8FDB\u884C\u683C\u5F0F\u5316\u3002</p><h2 id="\u63A8\u8350\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u6837\u5F0F" aria-hidden="true">#</a> \u63A8\u8350\u6837\u5F0F</h2><p>unknowIfGuestInDream \u63A8\u8350\u4F7F\u7528 Google \u9884\u8BBE\uFF0C\u6240\u4EE5\u5728\u4E2A\u4EBA\u4E0E\u5DE5\u4F5C\u5BA4\u7684\u6BCF\u4E2A\u9879\u76EE\u4E2D\uFF0C\u90FD\u4F1A\u4F7F\u7528 Google \u7F16\u7801\u98CE\u683C\u3002</p><p>\u5EFA\u8BAE\u5728 VS Code \u4E2D\u914D\u7F6E\u9ED8\u8BA4\u683C\u5F0F\u98CE\u683C:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;C_Cpp.clang_format_fallbackStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Google&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B98\u65B9\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9\u6587\u6863" aria-hidden="true">#</a> \u5B98\u65B9\u6587\u6863</h2>`,15),h={href:"http://clang.llvm.org/docs/ClangFormat.html",target:"_blank",rel:"noopener noreferrer"};function m(g,f){const a=i("ExternalLinkIcon");return c(),d("div",null,[p,l(" more "),u,e("ul",null,[e("li",null,[e("a",h,[o("\u5730\u5740"),t(a)]),o(" (\u9700 VPN)")])])])}const k=n(r,[["render",m],["__file","clang-format.html.vue"]]);export{k as default};
