const n=JSON.parse('{"key":"v-2220dea5","path":"/ja/code/language/python/functional-programming/return-function.html","title":"返回函数","lang":"ja-JP","frontmatter":{"title":"返回函数","icon":"return","author":"廖雪峰","date":"2020-06-02T00:00:00.000Z","category":["Python"],"description":"函数作为返回值 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。 我们来实现一个可变参数的求和。通常情况下，求和的函数是这样定义的: def calc_sum(*args): ax = 0 for n in args: ax = ax + n return ax","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/code/language/python/functional-programming/return-function.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"返回函数"}],["meta",{"property":"og:description","content":"函数作为返回值 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。 我们来实现一个可变参数的求和。通常情况下，求和的函数是这样定义的: def calc_sum(*args): ax = 0 for n in args: ax = ax + n return ax"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-06-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/python/functional-programming/return-function.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/python/functional-programming/return-function.html"}]]},"headers":[{"level":2,"title":"函数作为返回值","slug":"函数作为返回值","link":"#函数作为返回值","children":[]},{"level":2,"title":"闭包","slug":"闭包","link":"#闭包","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":2.94,"words":881},"filePathRelative":"ja/code/language/python/functional-programming/return-function.md","localizedDate":"2020年6月2日","excerpt":"<h2> 函数作为返回值</h2>\\n<p>高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。</p>\\n<p>我们来实现一个可变参数的求和。通常情况下，求和的函数是这样定义的:</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">def</span> <span class=\\"token function\\">calc_sum</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span>args<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    ax <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n    <span class=\\"token keyword\\">for</span> n <span class=\\"token keyword\\">in</span> args<span class=\\"token punctuation\\">:</span>\\n        ax <span class=\\"token operator\\">=</span> ax <span class=\\"token operator\\">+</span> n\\n    <span class=\\"token keyword\\">return</span> ax\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
