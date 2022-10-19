import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,d,f as e}from"./app.7e7f0dc0.js";const i={},c=e(`<p>\u60A8\u53EF\u4EE5\u4F7F\u7528 <code>vue serve</code> \u548C <code>vue build</code> \u547D\u4EE4\u5BF9\u5355\u4E2A <code>*.vue</code> \u6587\u4EF6\u8FDB\u884C\u5FEB\u901F\u539F\u578B\u5F00\u53D1\uFF0C\u4E0D\u8FC7\u8FD9\u9700\u8981\u5148\u989D\u5916\u5B89\u88C5\u4E00\u4E2A\u5168\u5C40\u7684\u6269\u5C55:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli-service-global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),o=e('<h2 id="vue-serve" tabindex="-1"><a class="header-anchor" href="#vue-serve" aria-hidden="true">#</a> vue serve</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Usage: serve <span class="token url">[<span class="token content">options</span>][<span class="token variable">entry</span>]</span>\n\n\u5728\u5F00\u53D1\u73AF\u5883\u6A21\u5F0F\u4E0B\u96F6\u914D\u7F6E\u4E3A .js \u6216 .vue \u6587\u4EF6\u542F\u52A8\u4E00\u4E2A\u670D\u52A1\u5668\n\nOptions:\n\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-o`</span>, <span class="token code-snippet code keyword">`--open`</span>: \u6253\u5F00\u6D4F\u89C8\u5668\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-c`</span>, <span class="token code-snippet code keyword">`--copy`</span>: \u5C06\u672C\u5730 URL \u590D\u5236\u5230\u526A\u5207\u677F\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-h`</span>, <span class="token code-snippet code keyword">`--help`</span>: \u8F93\u51FA\u7528\u6CD5\u4FE1\u606F\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u6240\u9700\u8981\u7684\u4EC5\u4EC5\u662F\u4E00\u4E2A <code>App.vue</code> \u6587\u4EF6:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728\u8FD9\u4E2A <code>App.vue</code> \u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55\u4E0B\u8FD0\u884C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue serve\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p><code>vue serve</code> \u4F7F\u7528\u4E86\u548C <code>vue create</code> \u521B\u5EFA\u7684\u9879\u76EE\u76F8\u540C\u7684\u9ED8\u8BA4\u8BBE\u7F6E (webpack\u3001Babel\u3001PostCSS \u548C ESLint)\u3002\u5B83\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u81EA\u52A8\u63A8\u5BFC\u5165\u53E3\u6587\u4EF6\u2014\u2014\u5165\u53E3\u53EF\u4EE5\u662F <code>main.js</code>\u3001<code>index.js</code>\u3001<code>App.vue</code> \u6216 <code>app.vue</code> \u4E2D\u7684\u4E00\u4E2A\u3002\u60A8\u4E5F\u53EF\u4EE5\u663E\u5F0F\u5730\u6307\u5B9A\u5165\u53E3\u6587\u4EF6:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue serve MyComponent.vue\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="vue-build" tabindex="-1"><a class="header-anchor" href="#vue-build" aria-hidden="true">#</a> vue build</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Usage: build <span class="token url">[<span class="token content">options</span>][<span class="token variable">entry</span>]</span>\n\n\u5728\u751F\u4EA7\u73AF\u5883\u6A21\u5F0F\u4E0B\u96F6\u914D\u7F6E\u6784\u5EFA\u4E00\u4E2A .js \u6216 .vue \u6587\u4EF6\n\nOptions:\n\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-t`</span>, <span class="token code-snippet code keyword">`--target &lt;target&gt;`</span>: \u6784\u5EFA\u76EE\u6807 (app | lib | wc | wc-async, \u9ED8\u8BA4\u503C: app)\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-n`</span>, <span class="token code-snippet code keyword">`--name &lt;name&gt;`</span>: \u5E93\u7684\u540D\u5B57\u6216 Web Components \u7EC4\u4EF6\u7684\u540D\u5B57 (\u9ED8\u8BA4\u503C: \u5165\u53E3\u6587\u4EF6\u540D)\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-d`</span>, <span class="token code-snippet code keyword">`--dest &lt;dir&gt;`</span>: \u8F93\u51FA\u76EE\u5F55 (\u9ED8\u8BA4\u503C: dist)\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-h`</span>, <span class="token code-snippet code keyword">`--help`</span>: \u8F93\u51FA\u7528\u6CD5\u4FE1\u606F\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>vue build</code> \u5C06\u76EE\u6807\u6587\u4EF6\u6784\u5EFA\u6210\u4E00\u4E2A\u751F\u4EA7\u73AF\u5883\u7684\u5305\u5E76\u7528\u6765\u90E8\u7F72:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue build MyComponent.vue\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>vue build</code> \u4E5F\u63D0\u4F9B\u4E86\u5C06\u7EC4\u4EF6\u6784\u5EFA\u6210\u4E3A\u4E00\u4E2A\u5E93\u6216\u4E00\u4E2A Web Components \u7EC4\u4EF6\u7684\u80FD\u529B\u3002</p>',12);function l(t,p){return n(),a("div",null,[c,d(" more "),o])}const v=s(i,[["render",l],["__file","quick-dev.html.vue"]]);export{v as default};
