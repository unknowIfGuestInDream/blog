const a=JSON.parse(`{"key":"v-b7faa884","path":"/en/code/website/html/intro/embed.html","title":"嵌入","lang":"en-US","frontmatter":{"title":"嵌入","icon":"frame","date":"2019-09-02T00:00:00.000Z","category":["HTML"],"description":"Iframe &lt;iframe&gt; 元素旨在允许您将其他 Web 文档嵌入到当前文档中。这很适合将第三方内容嵌入您的网站，您可能无法直接控制，也不希望实现自己的版本 - 例如来自在线视频提供商的视频，Disqus 等评论系统，在线地图提供商，广告横幅等。 案例 &lt;iframe src=\\"https://developer.mozilla.org/en-US/docs/Glossary\\" width=\\"100%\\" height=\\"500\\" frameborder=\\"0\\" allowfullscreen sandbox &gt; &lt;p&gt; &lt;a href=\\"https://developer.mozilla.org/en-US/docs/Glossary\\"&gt; Fallback link for browsers that don't support iframes &lt;/a&gt; &lt;/p&gt; &lt;/iframe&gt;","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/website/html/intro/embed.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"嵌入"}],["meta",{"property":"og:description","content":"Iframe &lt;iframe&gt; 元素旨在允许您将其他 Web 文档嵌入到当前文档中。这很适合将第三方内容嵌入您的网站，您可能无法直接控制，也不希望实现自己的版本 - 例如来自在线视频提供商的视频，Disqus 等评论系统，在线地图提供商，广告横幅等。 案例 &lt;iframe src=\\"https://developer.mozilla.org/en-US/docs/Glossary\\" width=\\"100%\\" height=\\"500\\" frameborder=\\"0\\" allowfullscreen sandbox &gt; &lt;p&gt; &lt;a href=\\"https://developer.mozilla.org/en-US/docs/Glossary\\"&gt; Fallback link for browsers that don't support iframes &lt;/a&gt; &lt;/p&gt; &lt;/iframe&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:published_time","content":"2019-09-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/website/html/intro/embed.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/website/html/intro/embed.html"}]]},"headers":[{"level":2,"title":"Iframe","slug":"iframe","link":"#iframe","children":[{"level":3,"title":"安全隐患","slug":"安全隐患","link":"#安全隐患","children":[]}]},{"level":2,"title":"<embed> 和 <object>","slug":"embed-和-object","link":"#embed-和-object","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":5.42,"words":1627},"localizedDate":"September 2, 2019","filePathRelative":"en/code/website/html/intro/embed.md","excerpt":"<h2> Iframe</h2>\\n<p><code>&lt;iframe&gt;</code> 元素旨在允许您将其他 Web 文档嵌入到当前文档中。这很适合将第三方内容嵌入您的网站，您可能无法直接控制，也不希望实现自己的版本 - 例如来自在线视频提供商的视频，Disqus 等评论系统，在线地图提供商，广告横幅等。</p>\\n<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">案例</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>iframe</span>\\n  <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>https://developer.mozilla.org/en-US/docs/Glossary<span class=\\"token punctuation\\">\\"</span></span>\\n  <span class=\\"token attr-name\\">width</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>100%<span class=\\"token punctuation\\">\\"</span></span>\\n  <span class=\\"token attr-name\\">height</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>500<span class=\\"token punctuation\\">\\"</span></span>\\n  <span class=\\"token attr-name\\">frameborder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>0<span class=\\"token punctuation\\">\\"</span></span>\\n  <span class=\\"token attr-name\\">allowfullscreen</span>\\n  <span class=\\"token attr-name\\">sandbox</span>\\n<span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>a</span> <span class=\\"token attr-name\\">href</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>https://developer.mozilla.org/en-US/docs/Glossary<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n      Fallback link for browsers that don't support iframes\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>a</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>iframe</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></div>","autoDesc":true}`);export{a as data};
