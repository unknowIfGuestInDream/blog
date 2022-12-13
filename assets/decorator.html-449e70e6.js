const n=JSON.parse(`{"key":"v-03d96c0d","path":"/en/code/language/python/functional-programming/decorator.html","title":"装饰器","lang":"en-US","frontmatter":{"title":"装饰器","icon":"decorate","author":"廖雪峰","date":"2021-03-15T00:00:00.000Z","category":["Python"],"description":"由于函数也是一个对象，而且函数对象可以被赋值给变量，所以，通过变量也能调用该函数。 &gt;&gt;&gt; def now(): ... print('2021-3-15') ... &gt;&gt;&gt; f = now &gt;&gt;&gt; f() 2021-3-15","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/language/python/functional-programming/decorator.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"装饰器"}],["meta",{"property":"og:description","content":"由于函数也是一个对象，而且函数对象可以被赋值给变量，所以，通过变量也能调用该函数。 &gt;&gt;&gt; def now(): ... print('2021-3-15') ... &gt;&gt;&gt; f = now &gt;&gt;&gt; f() 2021-3-15"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/python/functional-programming/decorator.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/python/functional-programming/decorator.html"}]]},"headers":[{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":3.49,"words":1048},"localizedDate":"March 15, 2021","filePathRelative":"en/code/language/python/functional-programming/decorator.md","excerpt":"<p>由于函数也是一个对象，而且函数对象可以被赋值给变量，所以，通过变量也能调用该函数。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">now</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n<span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>     <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'2021-3-15'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> f <span class=\\"token operator\\">=</span> now\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> f<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token number\\">2021</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">3</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">15</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
