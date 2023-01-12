const n=JSON.parse('{"key":"v-4be79ede","path":"/en/code/language/js/function/closure.html","title":"闭包","lang":"en-US","frontmatter":{"title":"闭包","icon":"lock","date":"2019-10-07T00:00:00.000Z","category":["JavaScript"],"description":"函数作为返回值 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。 我们来实现一个对 Array 的求和。通常情况下，求和的函数是这样定义的: const sum = (arr) =&gt; arr.reduce((x, y) =&gt; x + y); sum([1, 2, 3, 4, 5]); // 15","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/language/js/function/closure.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"闭包"}],["meta",{"property":"og:description","content":"函数作为返回值 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。 我们来实现一个对 Array 的求和。通常情况下，求和的函数是这样定义的: const sum = (arr) =&gt; arr.reduce((x, y) =&gt; x + y); sum([1, 2, 3, 4, 5]); // 15"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"article:published_time","content":"2019-10-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"闭包\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-07T00:00:00.000Z\\",\\"dateModified\\":\\"2022-10-08T11:40:37.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/js/function/closure.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/function/closure.html"}]]},"headers":[{"level":2,"title":"函数作为返回值","slug":"函数作为返回值","link":"#函数作为返回值","children":[]},{"level":2,"title":"闭包注意事项","slug":"闭包注意事项","link":"#闭包注意事项","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":5.62,"words":1687},"filePathRelative":"en/code/language/js/function/closure.md","localizedDate":"October 7, 2019","excerpt":"<h2> 函数作为返回值</h2>\\n<p>高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。</p>\\n<p>我们来实现一个对 Array 的求和。通常情况下，求和的函数是这样定义的:</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">sum</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">arr</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> arr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">reduce</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">x<span class=\\"token punctuation\\">,</span> y</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> x <span class=\\"token operator\\">+</span> y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token function\\">sum</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 15</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
