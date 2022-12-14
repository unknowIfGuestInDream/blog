const e=JSON.parse('{"key":"v-6bcd6e11","path":"/code/language/js/es6/number.html","title":"数值的扩展","lang":"zh-CN","frontmatter":{"title":"数值的扩展","icon":"number","author":"阮一峰","date":"2019-10-21T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"二进制和八进制表示法 ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b (或 0B) 和 0o (或 0O )表示。 0b111110111 === 503; // true 0o767 === 503; // true","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/js/es6/number.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"数值的扩展"}],["meta",{"property":"og:description","content":"二进制和八进制表示法 ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b (或 0B) 和 0o (或 0O )表示。 0b111110111 === 503; // true 0o767 === 503; // true"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/number.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/number.html"}]]},"headers":[{"level":2,"title":"二进制和八进制表示法","slug":"二进制和八进制表示法","link":"#二进制和八进制表示法","children":[]},{"level":2,"title":"Number.isFinite(), Number.isNaN()","slug":"number-isfinite-number-isnan","link":"#number-isfinite-number-isnan","children":[]},{"level":2,"title":"Number.parseInt(), Number.parseFloat()","slug":"number-parseint-number-parsefloat","link":"#number-parseint-number-parsefloat","children":[]},{"level":2,"title":"Number.isInteger()","slug":"number-isinteger","link":"#number-isinteger","children":[]},{"level":2,"title":"Number.EPSILON","slug":"number-epsilon","link":"#number-epsilon","children":[]},{"level":2,"title":"安全整数和 Number.isSafeInteger()","slug":"安全整数和-number-issafeinteger","link":"#安全整数和-number-issafeinteger","children":[]},{"level":2,"title":"Math 对象的扩展","slug":"math-对象的扩展","link":"#math-对象的扩展","children":[{"level":3,"title":"Math.trunc()","slug":"math-trunc","link":"#math-trunc","children":[]},{"level":3,"title":"Math.sign()","slug":"math-sign","link":"#math-sign","children":[]},{"level":3,"title":"Math.cbrt()","slug":"math-cbrt","link":"#math-cbrt","children":[]},{"level":3,"title":"Math.clz32()","slug":"math-clz32","link":"#math-clz32","children":[]},{"level":3,"title":"Math.imul()","slug":"math-imul","link":"#math-imul","children":[]},{"level":3,"title":"Math.fround()","slug":"math-fround","link":"#math-fround","children":[]},{"level":3,"title":"Math.hypot()","slug":"math-hypot","link":"#math-hypot","children":[]},{"level":3,"title":"对数方法","slug":"对数方法","link":"#对数方法","children":[]},{"level":3,"title":"双曲函数方法","slug":"双曲函数方法","link":"#双曲函数方法","children":[]}]},{"level":2,"title":"指数运算符","slug":"指数运算符","link":"#指数运算符","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":12.81,"words":3842},"filePathRelative":"code/language/js/es6/number.md","localizedDate":"2019年10月21日","excerpt":"<h2> 二进制和八进制表示法</h2>\\n<p>ES6 提供了二进制和八进制数值的新的写法，分别用前缀 <code>0b</code> (或 <code>0B</code>) 和 <code>0o</code> (或 <code>0O</code> )表示。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token number\\">0b111110111</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">503</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// true</span>\\n<span class=\\"token number\\">0o767</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">503</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// true</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
