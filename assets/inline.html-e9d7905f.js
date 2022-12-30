const n=JSON.parse('{"key":"v-46aa9e42","path":"/en/code/language/markdown/inline.html","title":"Markdown 行内元素","lang":"en-US","frontmatter":{"title":"Markdown 行内元素","icon":"markdown","category":["Markdown"],"tag":["Markdown"],"description":"链接 Markdown 支持两种形式的链接语法: 行内和参考。 不管是哪一种，链接的文字都是用 [方括号] 来标记。 行内链接 要建立一个行内形式的链接，只要在方块括号后输入圆括号并插入网址链接即可，如果您还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可。 例子 输入: This is [an example](http://example.com/ \\"Title\\") inline link. [This link](http://example.net/) has no title attribute. 渲染结果: &lt;p&gt; This is &lt;a href=\\"http://example.com/\\" title=\\"Title\\"&gt; an example&lt;/a&gt; inline link. &lt;/p&gt; &lt;p&gt;&lt;a href=\\"http://example.net/\\"&gt;This link&lt;/a&gt; has no title attribute.&lt;/p&gt; 输出: This is an example inline link. This link has no title attribute.","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/language/markdown/inline.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"Markdown 行内元素"}],["meta",{"property":"og:description","content":"链接 Markdown 支持两种形式的链接语法: 行内和参考。 不管是哪一种，链接的文字都是用 [方括号] 来标记。 行内链接 要建立一个行内形式的链接，只要在方块括号后输入圆括号并插入网址链接即可，如果您还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可。 例子 输入: This is [an example](http://example.com/ \\"Title\\") inline link. [This link](http://example.net/) has no title attribute. 渲染结果: &lt;p&gt; This is &lt;a href=\\"http://example.com/\\" title=\\"Title\\"&gt; an example&lt;/a&gt; inline link. &lt;/p&gt; &lt;p&gt;&lt;a href=\\"http://example.net/\\"&gt;This link&lt;/a&gt; has no title attribute.&lt;/p&gt; 输出: This is an example inline link. This link has no title attribute."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/markdown/inline.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/markdown/inline.html"}]]},"headers":[{"level":2,"title":"链接","slug":"链接","link":"#链接","children":[{"level":3,"title":"行内链接","slug":"行内链接","link":"#行内链接","children":[]},{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]},{"level":2,"title":"强调","slug":"强调","link":"#强调","children":[{"level":3,"title":"转义","slug":"转义","link":"#转义","children":[]}]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[{"level":3,"title":"转义","slug":"转义-1","link":"#转义-1","children":[]}]},{"level":2,"title":"图片","slug":"图片","link":"#图片","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":6.94,"words":2082},"filePathRelative":"en/code/language/markdown/inline.md","localizedDate":"October 8, 2022","excerpt":"<h2> 链接</h2>\\n<p>Markdown 支持两种形式的链接语法: <em>行内</em>和<em>参考</em>。</p>\\n<p>不管是哪一种，链接的文字都是用 <code>[方括号]</code> 来标记。</p>\\n<h3> 行内链接</h3>\\n<p>要建立一个行内形式的链接，只要在方块括号后输入圆括号并插入网址链接即可，如果您还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可。</p>\\n<details class=\\"hint-container details\\"><summary>例子</summary>\\n<p><strong>输入</strong>:</p>\\n<div class=\\"language-markdown line-numbers-mode\\" data-ext=\\"md\\"><pre class=\\"language-markdown\\"><code>This is <span class=\\"token url\\">[<span class=\\"token content\\">an example</span>](<span class=\\"token url\\">http://example.com/</span> <span class=\\"token string\\">\\"Title\\"</span>)</span> inline link.\\n\\n<span class=\\"token url\\">[<span class=\\"token content\\">This link</span>](<span class=\\"token url\\">http://example.net/</span>)</span> has no title attribute.\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>渲染结果</strong>:</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  This is <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>a</span> <span class=\\"token attr-name\\">href</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>http://example.com/<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">title</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>Title<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span> an example<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>a</span><span class=\\"token punctuation\\">&gt;</span></span> inline\\n  link.\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>a</span> <span class=\\"token attr-name\\">href</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>http://example.net/<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>This link<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>a</span><span class=\\"token punctuation\\">&gt;</span></span> has no title attribute.<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><strong>输出</strong>:</p>\\n<p>This is <a href=\\"http://example.com/\\" title=\\"Title\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">an example</a> inline link.</p>\\n<p><a href=\\"http://example.net/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">This link</a> has no title attribute.</p>\\n</details>","autoDesc":true}');export{n as data};
