const e=JSON.parse('{"key":"v-1a8d5f80","path":"/en/code/mini-app/guide/ability/file-system.html","title":"文件系统","lang":"en-US","frontmatter":{"title":"文件系统","icon":"file","category":["小程序"],"description":"文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 wx.getFileSystemManager() 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。 const fs = wx.getFileSystemManager(); 文件主要分为两大类: 代码包文件: 代码包文件指的是在项目目录中添加的文件。 本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/mini-app/guide/ability/file-system.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"文件系统"}],["meta",{"property":"og:description","content":"文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 wx.getFileSystemManager() 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。 const fs = wx.getFileSystemManager(); 文件主要分为两大类: 代码包文件: 代码包文件指的是在项目目录中添加的文件。 本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/mini-app/guide/ability/file-system.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/mini-app/guide/ability/file-system.html"}]]},"headers":[{"level":2,"title":"代码包文件","slug":"代码包文件","link":"#代码包文件","children":[{"level":3,"title":"访问代码包文件","slug":"访问代码包文件","link":"#访问代码包文件","children":[]},{"level":3,"title":"修改代码包文件","slug":"修改代码包文件","link":"#修改代码包文件","children":[]},{"level":3,"title":"本地文件","slug":"本地文件","link":"#本地文件","children":[]},{"level":3,"title":"本地临时文件","slug":"本地临时文件","link":"#本地临时文件","children":[]},{"level":3,"title":"本地缓存文件","slug":"本地缓存文件","link":"#本地缓存文件","children":[]},{"level":3,"title":"本地用户文件","slug":"本地用户文件","link":"#本地用户文件","children":[]},{"level":3,"title":"清理策略","slug":"清理策略","link":"#清理策略","children":[]}]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":4.51,"words":1353},"filePathRelative":"en/code/mini-app/guide/ability/file-system.md","localizedDate":"October 8, 2022","excerpt":"<p>文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 <code>wx.getFileSystemManager()</code> 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> fs <span class=\\"token operator\\">=</span> wx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getFileSystemManager</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>文件主要分为两大类:</p>\\n<ul>\\n<li>代码包文件: 代码包文件指的是在项目目录中添加的文件。</li>\\n<li>本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。</li>\\n</ul>\\n","autoDesc":true}');export{e as data};
