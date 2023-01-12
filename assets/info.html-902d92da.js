const t=JSON.parse(`{"key":"v-a74a8326","path":"/ja/code/language/python/oop/info.html","title":"获取对象信息","lang":"ja-JP","frontmatter":{"title":"获取对象信息","author":"廖雪峰","icon":"info","date":"2021-03-28T00:00:00.000Z","category":["Python"],"description":"当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？ 使用 type() 首先，我们来判断对象类型，使用 type() 函数: 基本类型都可以用 type() 判断: &gt;&gt;&gt; type(123) &lt;class 'int'&gt; &gt;&gt;&gt; type('str') &lt;class 'str'&gt; &gt;&gt;&gt; type(None) &lt;type(None) 'NoneType'&gt;","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/code/language/python/oop/info.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"获取对象信息"}],["meta",{"property":"og:description","content":"当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？ 使用 type() 首先，我们来判断对象类型，使用 type() 函数: 基本类型都可以用 type() 判断: &gt;&gt;&gt; type(123) &lt;class 'int'&gt; &gt;&gt;&gt; type('str') &lt;class 'str'&gt; &gt;&gt;&gt; type(None) &lt;type(None) 'NoneType'&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"获取对象信息\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2022-10-08T11:40:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/python/oop/info.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/python/oop/info.html"}]]},"headers":[{"level":2,"title":"使用 type()","slug":"使用-type","link":"#使用-type","children":[]},{"level":2,"title":"使用 isinstance()","slug":"使用-isinstance","link":"#使用-isinstance","children":[]},{"level":2,"title":"使用 dir()","slug":"使用-dir","link":"#使用-dir","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":4.79,"words":1436},"filePathRelative":"ja/code/language/python/oop/info.md","localizedDate":"2021年3月28日","excerpt":"<p>当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？</p>\\n<h2> 使用 <code>type()</code></h2>\\n<p>首先，我们来判断对象类型，使用 <code>type()</code> 函数:</p>\\n<p>基本类型都可以用 <code>type()</code> 判断:</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">123</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">class</span> <span class=\\"token string\\">'int'</span><span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'str'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">class</span> <span class=\\"token string\\">'str'</span><span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">)</span> <span class=\\"token string\\">'NoneType'</span><span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
