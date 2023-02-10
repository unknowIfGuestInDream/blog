const e=JSON.parse('{"key":"v-4e7cfeca","path":"/ja/code/mini-app/guide/view/list-render.html","title":"列表渲染","lang":"ja-JP","frontmatter":{"title":"列表渲染","icon":"loop","category":["小程序"],"description":"wx:for 在组件上使用 wx:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。 默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item &lt;view wx:for=\\"{{array}}\\"&gt; {{index}}: {{item.message}} &lt;/view&gt;","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/mini-app/guide/view/list-render.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/mini-app/guide/view/list-render.html"}],["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/code/mini-app/guide/view/list-render.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"列表渲染"}],["meta",{"property":"og:description","content":"wx:for 在组件上使用 wx:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。 默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item &lt;view wx:for=\\"{{array}}\\"&gt; {{index}}: {{item.message}} &lt;/view&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"列表渲染\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-10-08T11:40:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"wx:for","slug":"wx-for","link":"#wx-for","children":[]},{"level":2,"title":"block wx:for","slug":"block-wx-for","link":"#block-wx-for","children":[]},{"level":2,"title":"wx:key","slug":"wx-key","link":"#wx-key","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":2.74,"words":821},"filePathRelative":"ja/code/mini-app/guide/view/list-render.md","localizedDate":"2022年10月8日","excerpt":"<h2> wx:for</h2>\\n<p>在组件上使用 <code>wx:for</code> 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。</p>\\n<p>默认数组的当前项的下标变量名默认为 <code>index</code>，数组当前项的变量名默认为 <code>item</code></p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>view</span> <span class=\\"token attr-name\\"><span class=\\"token namespace\\">wx:</span>for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>{{array}}<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  {{index}}: {{item.message}}\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>view</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
