const e=JSON.parse('{"key":"v-0117e878","path":"/en/code/language/js/es6/fp.html","title":"函数式编程","lang":"en-US","frontmatter":{"icon":"shell","author":"阮一峰","date":"2019-10-21T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"函数式编程 JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，您可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。 ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本章介绍 ES6 如何进行函数式编程。 柯里化 柯里化(currying)指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数(unary)。","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/js/es6/fp.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/fp.html"}],["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/language/js/es6/fp.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"函数式编程"}],["meta",{"property":"og:description","content":"函数式编程 JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，您可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。 ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本章介绍 ES6 如何进行函数式编程。 柯里化 柯里化(currying)指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数(unary)。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数式编程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-21T00:00:00.000Z\\",\\"dateModified\\":\\"2022-10-08T11:40:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"]]},"headers":[{"level":2,"title":"柯里化","slug":"柯里化","link":"#柯里化","children":[]},{"level":2,"title":"函数合成","slug":"函数合成","link":"#函数合成","children":[]},{"level":2,"title":"参数倒置","slug":"参数倒置","link":"#参数倒置","children":[]},{"level":2,"title":"执行边界","slug":"执行边界","link":"#执行边界","children":[]},{"level":2,"title":"队列操作","slug":"队列操作","link":"#队列操作","children":[]},{"level":2,"title":"合并操作","slug":"合并操作","link":"#合并操作","children":[]},{"level":2,"title":"配对操作","slug":"配对操作","link":"#配对操作","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":4.37,"words":1312},"filePathRelative":"en/code/language/js/es6/fp.md","localizedDate":"October 21, 2019","excerpt":"<h1> 函数式编程</h1>\\n<p>JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，您可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。</p>\\n<p>ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本章介绍 ES6 如何进行函数式编程。</p>\\n<h2> 柯里化</h2>\\n<p>柯里化(currying)指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数(unary)。</p>","autoDesc":true}');export{e as data};
