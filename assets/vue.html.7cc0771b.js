import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as u,a as n,b as s,e as a,w as l,f as e,r as c}from"./app.c23862ec.js";const r={},d=e(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>Vue \u7684\u5355\u6587\u4EF6\u7EC4\u4EF6 (\u5373 <code>*.vue</code> \u6587\u4EF6\uFF0C\u7B80\u79F0 <strong>SFC</strong>) \u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u4F7F\u6211\u4EEC\u80FD\u591F\u5C06\u4E00\u4E2A Vue \u7EC4\u4EF6\u7684\u6A21\u677F\u3001\u903B\u8F91\u4E0E\u6837\u5F0F\u5C01\u88C5\u5728\u5355\u4E2A\u6587\u4EF6\u4E2D\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u793A\u4F8B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">greeting</span><span class="token operator">:</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>greeting<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ greeting }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.greeting</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4F60\u6240\u89C1\uFF0CVue \u7684\u5355\u6587\u4EF6\u7EC4\u4EF6\u662F HTML\u3001CSS \u548C JavaScript \u4E09\u79CD\u5143\u7D20\u7684\u81EA\u7136\u5EF6\u4F38\u3002<code>&lt;template&gt;</code>\u3001<code>&lt;script&gt;</code> \u548C <code>&lt;style&gt;</code> \u4E09\u4E2A\u5757\u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u4E2D\u5C01\u88C5\u3001\u7EC4\u5408\u4E86\u7EC4\u4EF6\u7684\u89C6\u56FE\u3001\u903B\u8F91\u548C\u6837\u5F0F\u3002</p><h2 id="\u603B\u89C8" tabindex="-1"><a class="header-anchor" href="#\u603B\u89C8" aria-hidden="true">#</a> \u603B\u89C8</h2><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> \u603B\u89C8</h2><p>\u4E00\u4E2A Vue \u5355\u6587\u4EF6\u7EC4\u4EF6 (SFC)\uFF0C\u901A\u5E38\u4F7F\u7528 <code>*.vue</code> \u4F5C\u4E3A\u6587\u4EF6\u6269\u5C55\u540D\uFF0C\u5B83\u662F\u4E00\u79CD\u4F7F\u7528\u4E86\u7C7B\u4F3C HTML \u8BED\u6CD5\u7684\u81EA\u5B9A\u4E49\u6587\u4EF6\u683C\u5F0F\uFF0C\u7528\u4E8E\u5B9A\u4E49 Vue \u7EC4\u4EF6\u3002\u4E00\u4E2A Vue \u5355\u6587\u4EF6\u7EC4\u4EF6\u5728\u8BED\u6CD5\u4E0A\u662F\u517C\u5BB9 HTML \u7684\u3002</p><p>\u6BCF\u4E00\u4E2A <code>*.vue</code> \u6587\u4EF6\u90FD\u7531\u4E09\u79CD\u9876\u5C42\u8BED\u5757\u6784\u6210\uFF1A<code>&lt;template&gt;</code>\u3001<code>&lt;script&gt;</code> \u548C <code>&lt;style&gt;</code>\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u5176\u4ED6\u7684\u81EA\u5B9A\u4E49\u5757\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Hello world!&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom1</span><span class="token punctuation">&gt;</span></span>
  This could be e.g. documentation for the component.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="language-blocks" tabindex="-1"><a class="header-anchor" href="#language-blocks" aria-hidden="true">#</a> \u76F8\u5E94\u8BED\u8A00\u5757</h2><h3 id="template" tabindex="-1"><a class="header-anchor" href="#template" aria-hidden="true">#</a> <code>&lt;template&gt;</code></h3><ul><li><p>\u6BCF\u4E2A <code>*.vue</code> \u6587\u4EF6\u6700\u591A\u53EF\u4EE5\u5305\u542B\u4E00\u4E2A\u9876\u5C42 <code>&lt;template&gt;</code> \u5757\u3002</p></li><li><p>\u8BED\u5757\u5305\u88F9\u7684\u5185\u5BB9\u5C06\u4F1A\u88AB\u63D0\u53D6\u3001\u4F20\u9012\u7ED9 <code>@vue/compiler-dom</code>\uFF0C\u9884\u7F16\u8BD1\u4E3A JavaScript \u6E32\u67D3\u51FD\u6570\uFF0C\u5E76\u9644\u5728\u5BFC\u51FA\u7684\u7EC4\u4EF6\u4E0A\u4F5C\u4E3A\u5176 <code>render</code> \u9009\u9879\u3002</p></li></ul><h3 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> <code>&lt;script&gt;</code></h3>`,13),k=n("code",null,"*.vue",-1),v=n("code",null,"<script>",-1),g=n("code",null,"<script setup>",-1),m=n("li",null,[n("p",null,"\u8FD9\u4E2A\u811A\u672C\u4EE3\u7801\u5757\u5C06\u4F5C\u4E3A ES \u6A21\u5757\u6267\u884C\u3002")],-1),h=n("strong",null,"\u9ED8\u8BA4\u5BFC\u51FA",-1),b=e('<h3 id="script-setup" tabindex="-1"><a class="header-anchor" href="#script-setup" aria-hidden="true">#</a> <code>&lt;script setup&gt;</code></h3><ul><li><p>\u6BCF\u4E2A <code>*.vue</code> \u6587\u4EF6\u6700\u591A\u53EF\u4EE5\u5305\u542B\u4E00\u4E2A <code>&lt;script setup&gt;</code>\u3002(\u4E0D\u5305\u62EC\u4E00\u822C\u7684 <code>&lt;script&gt;</code>)</p></li><li><p>\u8FD9\u4E2A\u811A\u672C\u5757\u5C06\u88AB\u9884\u5904\u7406\u4E3A\u7EC4\u4EF6\u7684 <code>setup()</code> \u51FD\u6570\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u5C06<strong>\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B</strong>\u90FD\u6267\u884C\u3002<code>&lt;script setup&gt;</code> \u4E2D\u7684\u9876\u5C42\u7ED1\u5B9A\u90FD\u5C06\u81EA\u52A8\u66B4\u9732\u7ED9\u6A21\u677F\u3002\u8981\u4E86\u89E3\u66F4\u591A\u7EC6\u8282\uFF0C\u8BF7\u770B <a href="/api/sfc-script-setup"><code>&lt;script setup&gt;</code> \u7684\u4E13\u95E8\u6587\u6863</a>\u3002</p></li></ul><h3 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> <code>&lt;style&gt;</code></h3><ul><li><p>\u6BCF\u4E2A <code>*.vue</code> \u6587\u4EF6\u53EF\u4EE5\u5305\u542B\u591A\u4E2A <code>&lt;style&gt;</code> \u6807\u7B7E\u3002</p></li><li><p>\u4E00\u4E2A <code>&lt;style&gt;</code> \u6807\u7B7E\u53EF\u4EE5\u4F7F\u7528 <code>scoped</code> \u6216 <code>module</code> attribute (\u67E5\u770B <a href="/api/sfc-css-features">SFC \u6837\u5F0F\u529F\u80FD</a>\u4E86\u89E3\u66F4\u591A\u7EC6\u8282) \u6765\u5E2E\u52A9\u5C01\u88C5\u5F53\u524D\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002\u4F7F\u7528\u4E86\u4E0D\u540C\u5C01\u88C5\u6A21\u5F0F\u7684\u591A\u4E2A <code>&lt;style&gt;</code> \u6807\u7B7E\u53EF\u4EE5\u88AB\u6DF7\u5408\u5165\u540C\u4E00\u4E2A\u7EC4\u4EF6\u3002</p></li></ul><h3 id="custom-blocks" tabindex="-1"><a class="header-anchor" href="#custom-blocks" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5757</h3><p>\u5728\u4E00\u4E2A <code>*.vue</code> \u6587\u4EF6\u4E2D\u53EF\u4EE5\u4E3A\u4EFB\u4F55\u9879\u76EE\u7279\u5B9A\u9700\u6C42\u4F7F\u7528\u989D\u5916\u7684\u81EA\u5B9A\u4E49\u5757\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u4E00\u4E2A\u7528\u4F5C\u5199\u6587\u6863\u7684 <code>&lt;docs&gt;</code> \u5757\u3002\u8FD9\u91CC\u662F\u4E00\u4E9B\u81EA\u5B9A\u4E49\u5757\u7684\u771F\u5B9E\u7528\u4F8B\uFF1A</p>',6),_={href:"https://gridsome.org/docs/querying-data/",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"<page-query>",-1),y={href:"https://github.com/wheatjs/vite-plugin-vue-gql",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"<gql>",-1),x={href:"https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n#i18n-custom-block",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"<i18n>",-1),w=e(`<h2 id="automatic-name-inference" tabindex="-1"><a class="header-anchor" href="#automatic-name-inference" aria-hidden="true">#</a> \u81EA\u52A8\u540D\u79F0\u63A8\u5BFC</h2><p>SFC \u5728\u4EE5\u4E0B\u573A\u666F\u4E2D\u4F1A\u6839\u636E<strong>\u6587\u4EF6\u540D</strong>\u81EA\u52A8\u63A8\u5BFC\u5176\u7EC4\u4EF6\u540D\uFF1A</p><ul><li>\u5F00\u53D1\u8B66\u544A\u4FE1\u606F\u683C\u5F0F</li><li>DevTools \u5BA1\u9605</li><li>\u9012\u5F52\u7EC4\u4EF6\u81EA\u5F15\u7528\u3002\u4F8B\u5982\u4E00\u4E2A\u540D\u4E3A <code>FooBar.vue</code> \u7684\u7EC4\u4EF6\u53EF\u4EE5\u5728\u6A21\u677F\u4E2D\u901A\u8FC7 <code>&lt;FooBar/&gt;</code> \u5F15\u7528\u81EA\u5DF1\u3002(\u540C\u540D\u60C5\u51B5\u4E0B) \u8FD9\u6BD4\u660E\u786E\u6CE8\u518C/\u5BFC\u5165\u7684\u7EC4\u4EF6\u4F18\u5148\u7EA7\u4F4E\u3002</li></ul><h2 id="pre-processors" tabindex="-1"><a class="header-anchor" href="#pre-processors" aria-hidden="true">#</a> \u9884\u5904\u7406\u5668</h2><p>\u4EE3\u7801\u5757\u53EF\u4EE5\u4F7F\u7528 <code>lang</code> \u8FD9\u4E2A attribute \u6765\u58F0\u660E\u9884\u5904\u7406\u5668\u8BED\u8A00\uFF0C\u6700\u5E38\u89C1\u7684\u7528\u4F8B\u5C31\u662F\u5BF9 <code>&lt;script&gt;</code> \u5757\u4F7F\u7528 TypeScript\uFF1A</p><div class="language-vue-html ext-vue-html line-numbers-mode"><pre class="language-vue-html"><code>&lt;script lang=&quot;ts&quot;&gt;
  // use TypeScript
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),V=n("code",null,"lang",-1),C=n("code",null,"<style>",-1),L={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"<template>",-1),j={href:"https://pugjs.org/api/getting-started.html",target:"_blank",rel:"noopener noreferrer"},H=e(`<div class="language-vue-html ext-vue-html line-numbers-mode"><pre class="language-vue-html"><code>&lt;template lang=&quot;pug&quot;&gt;
p {{ msg }}
&lt;/template&gt;

&lt;style lang=&quot;scss&quot;&gt;
  $primary-color: #333;
  body {
    color: $primary-color;
  }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u5BF9\u5404\u79CD\u4E0D\u540C\u7684\u9884\u5904\u7406\u7684\u96C6\u6210\u4F1A\u5BFC\u81F4\u5DE5\u5177\u94FE\u7684\u4E0D\u540C\uFF0C\u4F60\u5E94\u8BE5\u67E5\u770B\u76F8\u5E94\u7684\u5DE5\u5177\u94FE\u6587\u6863\u4E86\u89E3\u7EC6\u8282\uFF1A</p>`,2),F={href:"https://vitejs.dev/guide/features.html#css-pre-processors",target:"_blank",rel:"noopener noreferrer"},B={href:"https://cli.vuejs.org/guide/css.html#pre-processors",target:"_blank",rel:"noopener noreferrer"},M={href:"https://vue-loader.vuejs.org/guide/pre-processors.html#using-pre-processors",target:"_blank",rel:"noopener noreferrer"},E=e(`<h2 id="src-imports" tabindex="-1"><a class="header-anchor" href="#src-imports" aria-hidden="true">#</a> Src \u5BFC\u5165</h2><p>\u5982\u679C\u4F60\u66F4\u559C\u6B22\u5C06 <code>*.vue</code> \u7EC4\u4EF6\u5206\u6563\u5230\u591A\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u4E3A\u4E00\u4E2A\u8BED\u5757\u4F7F\u7528 <code>src</code> \u8FD9\u4E2A attribute \u6765\u5BFC\u5165\u4E00\u4E2A\u5916\u90E8\u6587\u4EF6\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./template.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./script.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u6CE8\u610F <code>src</code> \u5BFC\u5165\u548C Webpack \u7684\u6A21\u5757\u8BF7\u6C42\u9075\u5FAA\u76F8\u540C\u7684\u8DEF\u5F84\u89E3\u6790\u89C4\u5219\uFF0C\u8FD9\u610F\u5473\u7740\uFF1A</p><ul><li>\u76F8\u5BF9\u8DEF\u5F84\u9700\u8981\u4EE5 <code>./</code> \u5F00\u5934</li><li>\u4F60\u4E5F\u53EF\u4EE5\u4ECE npm \u4F9D\u8D56\u4E2D\u5BFC\u5165\u8D44\u6E90</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- \u4ECE\u6240\u5B89\u88C5\u7684 &quot;todomvc-app-css&quot; npm \u5305\u4E2D\u5BFC\u5165\u4E00\u4E2A\u6587\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todomvc-app-css/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src</code> \u5BFC\u5165\u5BF9\u81EA\u5B9A\u4E49\u8BED\u5757\u4E5F\u540C\u6837\u9002\u7528\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unit-test</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./unit-test.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>unit-test</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> \u6CE8\u91CA</h2><p>\u5728\u6BCF\u4E00\u4E2A\u8BED\u5757\u4E2D\u4F60\u90FD\u53EF\u4EE5\u6309\u7167\u76F8\u5E94\u8BED\u8A00 (HTML\u3001CSS\u3001JavaScript \u548C Pug \u7B49\u7B49) \u7684\u8BED\u6CD5\u4E66\u5199\u6CE8\u91CA\u3002\u5BF9\u4E8E\u9876\u5C42\u6CE8\u91CA\uFF0C\u8BF7\u4F7F\u7528 HTML \u7684\u6CE8\u91CA\u8BED\u6CD5 <code>&lt;!-- comment contents here --&gt;</code></p>`,10);function N(I,J){const p=c("RouterLink"),t=c("ExternalLinkIcon");return i(),u("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[s("\u6BCF\u4E2A "),k,s(" \u6587\u4EF6\u6700\u591A\u53EF\u4EE5\u5305\u542B\u4E00\u4E2A "),v,s(" \u5757\u3002(\u4F7F\u7528 "),a(p,{to:"/api/sfc-script-setup.html"},{default:l(()=>[g]),_:1}),s(" \u7684\u60C5\u51B5\u9664\u5916)")])]),m,n("li",null,[n("p",null,[h,s("\u5E94\u8BE5\u662F Vue \u7684\u7EC4\u4EF6\u9009\u9879\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\u5B57\u9762\u91CF\u6216\u662F "),a(p,{to:"/api/general.html#definecomponent"},{default:l(()=>[s("defineComponent")]),_:1}),s(" \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u3002")])])]),b,n("ul",null,[n("li",null,[n("a",_,[s("Gridsome\uFF1A"),f,a(t)])]),n("li",null,[n("a",y,[s("vite-plugin-vue-gql\uFF1A"),q,a(t)])]),n("li",null,[n("a",x,[s("vue-i18n\uFF1A"),S,a(t)])])]),n("p",null,[s("\u81EA\u5B9A\u4E49\u5757\u7684\u5904\u7406\u9700\u8981\u4F9D\u8D56\u5DE5\u5177\u94FE\u3002\u5982\u679C\u4F60\u60F3\u8981\u5728\u6784\u5EFA\u4E2D\u96C6\u6210\u4F60\u7684\u81EA\u5B9A\u4E49\u8BED\u5757\uFF0C\u8BF7\u53C2\u89C1"),a(p,{to:"/guide/scaling-up/tooling.html#sfc-custom-block-integrations"},{default:l(()=>[s("\u76F8\u5173\u5DE5\u5177\u94FE\u6307\u5357")]),_:1}),s("\u83B7\u53D6\u66F4\u591A\u7EC6\u8282\u3002")]),w,n("p",null,[V,s(" \u5728\u4EFB\u610F\u5757\u4E0A\u90FD\u80FD\u4F7F\u7528\uFF0C\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u5728 "),C,s(" \u6807\u7B7E\u4E0A\u4F7F\u7528 "),n("a",L,[s("SASS"),a(t)]),s(" \u6216\u662F "),T,s(" \u4E0A\u4F7F\u7528 "),n("a",j,[s("Pug"),a(t)]),s("\uFF1A")]),H,n("ul",null,[n("li",null,[n("a",F,[s("Vite"),a(t)])]),n("li",null,[n("a",B,[s("Vue CLI"),a(t)])]),n("li",null,[n("a",M,[s("webpack + vue-loader"),a(t)])])]),E])}const W=o(r,[["render",N],["__file","vue.html.vue"]]);export{W as default};
