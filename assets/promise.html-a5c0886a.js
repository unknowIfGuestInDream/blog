const e=JSON.parse('{"key":"v-55b00c46","path":"/code/language/js/es6/promise.html","title":"Promise 对象","lang":"zh-CN","frontmatter":{"icon":"promise","author":"阮一峰","date":"2019-10-23T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"Promise 对象 Promise 的含义 Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象。 所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/js/es6/promise.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"Promise 对象"}],["meta",{"property":"og:description","content":"Promise 对象 Promise 的含义 Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象。 所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Promise 对象\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-23T00:00:00.000Z\\",\\"dateModified\\":\\"2022-10-07T16:35:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/promise.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/promise.html"}]]},"headers":[{"level":2,"title":"Promise 的含义","slug":"promise-的含义","link":"#promise-的含义","children":[]},{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"Promise.prototype.then()","slug":"promise-prototype-then","link":"#promise-prototype-then","children":[]},{"level":2,"title":"Promise.prototype.catch()","slug":"promise-prototype-catch","link":"#promise-prototype-catch","children":[]},{"level":2,"title":"Promise.prototype.finally()","slug":"promise-prototype-finally","link":"#promise-prototype-finally","children":[]},{"level":2,"title":"Promise.all()","slug":"promise-all","link":"#promise-all","children":[]},{"level":2,"title":"Promise.race()","slug":"promise-race","link":"#promise-race","children":[]},{"level":2,"title":"Promise.resolve()","slug":"promise-resolve","link":"#promise-resolve","children":[]},{"level":2,"title":"Promise.reject()","slug":"promise-reject","link":"#promise-reject","children":[]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[{"level":3,"title":"加载图片","slug":"加载图片","link":"#加载图片","children":[]},{"level":3,"title":"Generator 函数与 Promise 的结合","slug":"generator-函数与-promise-的结合","link":"#generator-函数与-promise-的结合","children":[]}]},{"level":2,"title":"Promise.try()","slug":"promise-try","link":"#promise-try","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":23.75,"words":7124},"filePathRelative":"code/language/js/es6/promise.md","localizedDate":"2019年10月23日","excerpt":"<h1> Promise 对象</h1>\\n<h2> Promise 的含义</h2>\\n<p>Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 <code>Promise</code> 对象。</p>\\n<p>所谓 <code>Promise</code>，简单说就是一个容器，里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。</p>","autoDesc":true}');export{e as data};
