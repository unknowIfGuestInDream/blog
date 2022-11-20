import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as l,d as o,a,b as n,e as c,f as s,r as u}from"./app.6a7adab4.js";const i={},r=a("p",null,"\u65E0\u8BBA\u662F\u6211\u4EEC\u60F3\u76F4\u63A5\u8BBF\u95EE\u4E00\u4E2A\u6587\u4EF6\uFF0C\u8FD8\u662F\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\u5E0C\u671B\u8BBF\u95EE\u53E6\u4E00\u4E2A\u6587\u4EF6\uFF0C\u90FD\u6D89\u53CA\u5230\u4E00\u4E2A\u83B7\u53D6\u6587\u4EF6\u7684\u64CD\u4F5C\u3002\u800C\u65E0\u8BBA\u662F\u5728 Windows \u4E2D\u8FD8\u662F\u5728 Linux \u4E2D\uFF0C\u6587\u4EF6\u7684\u5177\u4F53\u4F4D\u7F6E\u90FD\u7528\u6587\u6863\u7684\u8DEF\u5F84\u6807\u6CE8\u3002",-1),k=a("p",null,"\u8DEF\u5F84\u5E38\u5E38\u6D89\u53CA\u5230\u7269\u7406\u8DEF\u5F84\uFF0C\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u6839\u76EE\u5F55\u7684\u6982\u5FF5\uFF0C\u73B0\u52A0\u4EE5\u8BF4\u660E\u3002",-1),d=s(`<h2 id="\u7269\u7406\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u7269\u7406\u8DEF\u5F84" aria-hidden="true">#</a> \u7269\u7406\u8DEF\u5F84</h2><p>\u7269\u7406\u8DEF\u5F84\u7684\u82F1\u6587\u5168\u79F0\u662F: Physical path\uFF0C\u5B83\u5C31\u662F\u6307\u786C\u76D8\u4E0A\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u6587\u4EF6\u4F4D\u7F6E\u8868\u793A\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>d:\\wwwroot\\html\\a.html
d:\\wwwroot\\html\\photo\\b.html
d:\\wwwroot\\html\\photo\\c.html
d:\\wwwroot\\html\\photo\\ours\\d.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>D:</code> \u4E0E <code>d:</code> \u5747\u53EF\u3002\u76D8\u7B26\u4E0D\u5206\u5927\u5C0F\u5199\u3002</p></blockquote><p>\u4E00\u822C\u6765\u8BF4\u7269\u7406\u8DEF\u5F84\u53EF\u7528\u4E8E\u8BBF\u95EE\u672C\u5730\u6587\u4EF6\uFF0C\u5373\u4E0D\u901A\u8FC7 WEB \u670D\u52A1\u5668(\u5982: \u672C\u5730\u8C03\u8BD5)\u7B49\u7684\u60C5\u51B5\u4E0B\u3002</p><h2 id="\u76F8\u5BF9\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5BF9\u8DEF\u5F84" aria-hidden="true">#</a> \u76F8\u5BF9\u8DEF\u5F84</h2><p>\u76F8\u5BF9\u8DEF\u5F84\u7684\u82F1\u6587\u5168\u79F0\u662F Relative Path\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE\u4EE5\u4E0B\u4E09\u4E2A\u65B9\u9762\u6765\u4E86\u89E3\u5B83\u7684\u7528\u6CD5 (\u4EE5\u201C\u7269\u7406\u8DEF\u5F84\u201D\u4E2D\u7684\u4F4D\u7F6E\u60C5\u51B5\u4E3A\u4F8B):</p><ul><li><p>\u5982\u4F55\u8868\u793A\u540C\u7EA7\u76EE\u5F55\u7684\u6587\u4EF6</p><p>b.html \u548C c.html \u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B\uFF0C\u5982\u679C b.html \u9700\u8981\u94FE\u63A5\u5230 c.html\uFF0C\u53EF\u4EE5\u5728 b.html \u4E2D\u8FD9\u6837\u5199:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u540C\u76EE\u5F55\u4E0B\u6587\u4EF6\u95F4\u4E92\u76F8\u94FE\u63A5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EE3\u7801\u4E2D\u7684 <code>./</code> \u4EE3\u8868\u540C\u7EA7\u76EE\u5F55\u3002</p><p><code>./</code>\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u7701\u7565\u4E0D\u5199\uFF0C\u7701\u7565\u4E0D\u5199\uFF0C\u5373\u76F4\u63A5\u4EE5\u6587\u4EF6\u5939\u6216\u6587\u4EF6\u540D\u79F0\u5F00\u5934\u7684\u8DEF\u5F84\u4E5F\u662F\u76F8\u5BF9\u8DEF\u5F84\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u540C\u76EE\u5F55\u4E0B\u6587\u4EF6\u95F4\u4E92\u76F8\u94FE\u63A5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5982\u4F55\u8868\u793A\u4E0A\u7EA7\u76EE\u5F55\u7684\u6587\u4EF6</p><p>a.html \u662F b.html \u548C c.html \u7684\u4E0A\u7EA7\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\uFF0C\u5982\u679C b.html \u6216 c.html \u94FE\u63A5\u5230 a.html\uFF0C\u53EF\u4EE5\u5728 b.html \u6216 c.html \u4E2D\u8FD9\u6837\u5199:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230\u4E0A\u7EA7\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EE3\u7801\u4E2D\u7684 <code>../</code> \u4EE3\u8868\u4E00\u7EA7\u4E0A\u7EA7\u76EE\u5F55(\u95F4\u9694\u4E00\u4E2A\u76EE\u5F55)\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F: \u201C<code>../../</code>\u201D\u4EE3\u8868\u4E8C\u7EA7\u4E0A\u7EA7\u76EE\u5F55(\u95F4\u9694\u4E24\u4E2A\u76EE\u5F55)\uFF0C\u6BD4\u5982 a.html \u662F d.html \u7684\u524D\u4E24\u7EA7\u76EE\u5F55\uFF0C\u540C\u65F6 d.html \u9700\u8981\u94FE\u63A5\u5230 a.html\uFF0C\u53EF\u4EE5\u5728 d.html \u4E2D\u8FD9\u6837\u5199:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230\u4E0A\u7EA7\u76EE\u5F55\u7684\u4E0A\u7EA7\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5982\u4F55\u8868\u793A\u5B50\u76EE\u5F55\u7684\u6587\u4EF6</p><p>b.html \u548C c.html \u662F a.html \u7684\u5B50\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u9700\u8981\u5728 a.html \u4E2D\u94FE\u63A5\u5230 b.html\uFF0C \u53EF\u4EE5\u5728 a.html \u4E2D\u8FD9\u6837\u5199:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>photo/b.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230\u5B50\u76EE\u5F55(photo)\u4E2D\u7684\u6587\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
\u5982\u679C\u9700\u8981\u5728a.html\u4E2D\u94FE\u63A5\u5230d.html\uFF0C\u53EF\u4EE5\u5728a.html\u4E2D\u8FD9\u6837\u5199
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>photo/ours/d.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230\u5B50\u76EE\u5F55(photo/ourd/)\u4E2D\u7684\u6587\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u7EDD\u5BF9\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u7EDD\u5BF9\u8DEF\u5F84" aria-hidden="true">#</a> \u7EDD\u5BF9\u8DEF\u5F84</h2>`,9),h={href:"http://www.deerol.com",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230a.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/photo/b.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230b.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/photo/c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230c.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/photo/ours/d.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230d.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6839\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u6839\u76EE\u5F55" aria-hidden="true">#</a> \u6839\u76EE\u5F55</h2><p>\u6839\u76EE\u5F55\u7684\u82F1\u6587\u5168\u79F0\u662F Root directory\uFF0C\u53BB\u6389\u7EDD\u5BF9\u8DEF\u5F84\u524D\u9762\u7684\u57DF\u540D\u5C31\u662F\u6839\u76EE\u5F55\uFF0C\u6240\u4EE5\u5B83\u53EF\u4EE5\u7406\u89E3\u4E3A\u662F\u7F51\u7AD9\u7684\u6700\u4E0A\u5C42\u76EE\u5F55\u3002\u5B83\u7684\u8868\u793A\u65B9\u6CD5\u5982\u4E0B:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230a.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/photo/b.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230b.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/photo/c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230c.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/photo/ours/d.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5\u5230d.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u670D\u52A1\u5668\u4E0A\uFF0C\u6839\u76EE\u5F55\u5373\u4EE3\u8868\u7F51\u7AD9\u4E3B\u9875\u6240\u5728\u7684\u76EE\u5F55\u3002\u7F51\u7AD9\u670D\u52A1\u5668\u4E00\u822C\u53EA\u80FD\u8BBF\u95EE\u7F51\u7AD9\u4E3B\u9875\u6240\u5728\u6587\u4EF6\u5939\u5185\u7684\u6587\u4EF6\u4E0E\u6587\u4EF6\u5939\u3002</p>`,5);function g(v,b){const t=u("ExternalLinkIcon");return e(),l("div",null,[r,k,o(" more "),d,a("p",null,[n("\u7EDD\u5BF9\u8DEF\u5F84\u7684\u82F1\u6587\u5168\u79F0\u662F Absolute Path\uFF0C\u5B83\u5C31\u662F\u5E26\u6709\u7F51\u5740\u7684\u8DEF\u5F84\u3002\u6BD4\u5982\u60A8\u6709\u4E00\u4E2A\u57DF\u540D "),a("a",h,[n("www.deerol.com"),c(t)]),n("\uFF0C\u5176\u57DF\u540D\u6307\u5411 d:\\wwwroot\uFF0C\u90A3\u4E48\u4E0A\u9762\u7684\u56DB\u4E2A\u6587\u4EF6\u5C31\u53EF\u4EE5\u8FD9\u4E48\u8868\u793A:")]),m])}const f=p(i,[["render",g],["__file","path.html.vue"]]);export{f as default};
