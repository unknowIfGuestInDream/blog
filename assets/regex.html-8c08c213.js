const e=JSON.parse('{"key":"v-6d48582a","path":"/ja/code/language/js/es6/regex.html","title":"正则的扩展","lang":"ja-JP","frontmatter":{"icon":"regexp","author":"阮一峰","date":"2019-10-21T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"正则的扩展 RegExp 构造函数 在 ES5 中，RegExp 构造函数的参数有两种情况。 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符(flag)。 var regex = new RegExp(\\"xyz\\", \\"i\\"); // 等价于 var regex = /xyz/i;","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/code/language/js/es6/regex.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"正则的扩展"}],["meta",{"property":"og:description","content":"正则的扩展 RegExp 构造函数 在 ES5 中，RegExp 构造函数的参数有两种情况。 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符(flag)。 var regex = new RegExp(\\"xyz\\", \\"i\\"); // 等价于 var regex = /xyz/i;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/js/es6/regex.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/regex.html"}]]},"headers":[{"level":2,"title":"RegExp 构造函数","slug":"regexp-构造函数","link":"#regexp-构造函数","children":[]},{"level":2,"title":"字符串的正则方法","slug":"字符串的正则方法","link":"#字符串的正则方法","children":[]},{"level":2,"title":"u 修饰符","slug":"u-修饰符","link":"#u-修饰符","children":[]},{"level":2,"title":"RegExp.prototype.unicode 属性","slug":"regexp-prototype-unicode-属性","link":"#regexp-prototype-unicode-属性","children":[]},{"level":2,"title":"y 修饰符","slug":"y-修饰符","link":"#y-修饰符","children":[]},{"level":2,"title":"RegExp.prototype.sticky 属性","slug":"regexp-prototype-sticky-属性","link":"#regexp-prototype-sticky-属性","children":[]},{"level":2,"title":"RegExp.prototype.flags 属性","slug":"regexp-prototype-flags-属性","link":"#regexp-prototype-flags-属性","children":[]},{"level":2,"title":"s 修饰符: dotAll 模式","slug":"s-修饰符-dotall-模式","link":"#s-修饰符-dotall-模式","children":[]},{"level":2,"title":"后行断言","slug":"后行断言","link":"#后行断言","children":[]},{"level":2,"title":"Unicode 属性类","slug":"unicode-属性类","link":"#unicode-属性类","children":[]},{"level":2,"title":"具名组匹配","slug":"具名组匹配","link":"#具名组匹配","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"解构赋值和替换","slug":"解构赋值和替换","link":"#解构赋值和替换","children":[]},{"level":3,"title":"引用","slug":"引用","link":"#引用","children":[]}]},{"level":2,"title":"String.prototype.matchAll","slug":"string-prototype-matchall","link":"#string-prototype-matchall","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":16.18,"words":4854},"localizedDate":"2019年10月21日","filePathRelative":"ja/code/language/js/es6/regex.md","excerpt":"<h1> 正则的扩展</h1>\\n<h2> <code>RegExp</code> 构造函数</h2>\\n<p>在 ES5 中，<code>RegExp</code> 构造函数的参数有两种情况。</p>\\n<p>第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符(flag)。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> regex <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">RegExp</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"xyz\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"i\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 等价于</span>\\n<span class=\\"token keyword\\">var</span> regex <span class=\\"token operator\\">=</span> <span class=\\"token regex\\"><span class=\\"token regex-delimiter\\">/</span><span class=\\"token regex-source language-regex\\">xyz</span><span class=\\"token regex-delimiter\\">/</span><span class=\\"token regex-flags\\">i</span></span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
