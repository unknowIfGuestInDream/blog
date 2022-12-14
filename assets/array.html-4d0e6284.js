const n=JSON.parse(`{"key":"v-21d8f6ea","path":"/en/code/language/js/es6/array.html","title":"数组的扩展","lang":"en-US","frontmatter":{"title":"数组的扩展","icon":"array","author":"阮一峰","date":"2019-10-21T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"扩展运算符 含义 扩展运算符(spread)是三个点(...)。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。 console.log(...[1, 2, 3]) // 1 2 3 console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5 [...document.querySelectorAll('div')] // [&lt;div&gt;, &lt;div&gt;, &lt;div&gt;]","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/language/js/es6/array.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"数组的扩展"}],["meta",{"property":"og:description","content":"扩展运算符 含义 扩展运算符(spread)是三个点(...)。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。 console.log(...[1, 2, 3]) // 1 2 3 console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5 [...document.querySelectorAll('div')] // [&lt;div&gt;, &lt;div&gt;, &lt;div&gt;]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/js/es6/array.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/array.html"}]]},"headers":[{"level":2,"title":"扩展运算符","slug":"扩展运算符","link":"#扩展运算符","children":[{"level":3,"title":"含义","slug":"含义","link":"#含义","children":[]},{"level":3,"title":"替代函数的 apply 方法","slug":"替代函数的-apply-方法","link":"#替代函数的-apply-方法","children":[]},{"level":3,"title":"扩展运算符的应用","slug":"扩展运算符的应用","link":"#扩展运算符的应用","children":[]}]},{"level":2,"title":"Array.from()","slug":"array-from","link":"#array-from","children":[]},{"level":2,"title":"Array.of()","slug":"array-of","link":"#array-of","children":[]},{"level":2,"title":"数组实例的 copyWithin()","slug":"数组实例的-copywithin","link":"#数组实例的-copywithin","children":[]},{"level":2,"title":"数组实例的 find() 和 findIndex()","slug":"数组实例的-find-和-findindex","link":"#数组实例的-find-和-findindex","children":[]},{"level":2,"title":"数组实例的 fill()","slug":"数组实例的-fill","link":"#数组实例的-fill","children":[]},{"level":2,"title":"数组实例的 entries()，keys() 和 values()","slug":"数组实例的-entries-keys-和-values","link":"#数组实例的-entries-keys-和-values","children":[]},{"level":2,"title":"数组实例的 includes()","slug":"数组实例的-includes","link":"#数组实例的-includes","children":[]},{"level":2,"title":"数组实例的 flat()，flatMap()","slug":"数组实例的-flat-flatmap","link":"#数组实例的-flat-flatmap","children":[]},{"level":2,"title":"数组的空位","slug":"数组的空位","link":"#数组的空位","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":19.31,"words":5792},"filePathRelative":"en/code/language/js/es6/array.md","localizedDate":"October 21, 2019","excerpt":"<h2> 扩展运算符</h2>\\n<h3> 含义</h3>\\n<p>扩展运算符(spread)是三个点(<code>...</code>)。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 1 2 3</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 1 2 3 4 5</span>\\n\\n<span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">...</span>document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelectorAll</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'div'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token comment\\">// [&lt;div&gt;, &lt;div&gt;, &lt;div&gt;]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
