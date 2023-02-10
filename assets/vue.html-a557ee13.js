const n=JSON.parse('{"key":"v-22198af1","path":"/en/code/vue/vue.html","title":"Vue 单文件组件","lang":"en-US","frontmatter":{"title":"Vue 单文件组件","icon":"vue","category":["Vue"],"description":"介绍 Vue 的单文件组件 (即 *.vue 文件，简称 SFC) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例： &lt;script&gt; export default { data() { return { greeting: \\"Hello World!\\", }; }, }; &lt;/script&gt; &lt;template&gt; &lt;p class=\\"greeting\\"&gt;{{ greeting }}&lt;/p&gt; &lt;/template&gt; &lt;style&gt; .greeting { color: red; font-weight: bold; } &lt;/style&gt;","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/vue/vue.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/vue/vue.html"}],["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/vue/vue.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"Vue 单文件组件"}],["meta",{"property":"og:description","content":"介绍 Vue 的单文件组件 (即 *.vue 文件，简称 SFC) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例： &lt;script&gt; export default { data() { return { greeting: \\"Hello World!\\", }; }, }; &lt;/script&gt; &lt;template&gt; &lt;p class=\\"greeting\\"&gt;{{ greeting }}&lt;/p&gt; &lt;/template&gt; &lt;style&gt; .greeting { color: red; font-weight: bold; } &lt;/style&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue 单文件组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-10-08T11:40:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"总览","slug":"总览","link":"#总览","children":[]},{"level":2,"title":"总览","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"相应语言块","slug":"language-blocks","link":"#language-blocks","children":[{"level":3,"title":"<template>","slug":"template","link":"#template","children":[]},{"level":3,"title":"<script>","slug":"script","link":"#script","children":[]},{"level":3,"title":"<script setup>","slug":"script-setup","link":"#script-setup","children":[]},{"level":3,"title":"<style>","slug":"style","link":"#style","children":[]},{"level":3,"title":"自定义块","slug":"custom-blocks","link":"#custom-blocks","children":[]}]},{"level":2,"title":"自动名称推导","slug":"automatic-name-inference","link":"#automatic-name-inference","children":[]},{"level":2,"title":"预处理器","slug":"pre-processors","link":"#pre-processors","children":[]},{"level":2,"title":"Src 导入","slug":"src-imports","link":"#src-imports","children":[]},{"level":2,"title":"注释","slug":"comments","link":"#comments","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":4.18,"words":1255},"filePathRelative":"en/code/vue/vue.md","localizedDate":"October 8, 2022","excerpt":"<h2> 介绍</h2>\\n<p>Vue 的单文件组件 (即 <code>*.vue</code> 文件，简称 <strong>SFC</strong>) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例：</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">data</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">greeting</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Hello World!\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>greeting<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>{{ greeting }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n<span class=\\"token selector\\">.greeting</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> red<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">font-weight</span><span class=\\"token punctuation\\">:</span> bold<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
