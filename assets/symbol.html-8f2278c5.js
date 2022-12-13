const e=JSON.parse('{"key":"v-2c2bed22","path":"/code/language/js/es6/symbol.html","title":"Symbol","lang":"zh-CN","frontmatter":{"icon":"symbol","author":"阮一峰","date":"2019-10-21T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"Symbol 概述 ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，您使用了一个他人提供的对象，但又想为这个对象添加新的方法(mixin 模式)，新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 Symbol 的原因。 ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是: undefined、null、布尔值(Boolean)、字符串(String)、数值(Number)、对象(Object)。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/js/es6/symbol.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"Symbol"}],["meta",{"property":"og:description","content":"Symbol 概述 ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，您使用了一个他人提供的对象，但又想为这个对象添加新的方法(mixin 模式)，新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 Symbol 的原因。 ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是: undefined、null、布尔值(Boolean)、字符串(String)、数值(Number)、对象(Object)。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/symbol.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/symbol.html"}]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"作为属性名的 Symbol","slug":"作为属性名的-symbol","link":"#作为属性名的-symbol","children":[]},{"level":2,"title":"实例: 消除魔术字符串","slug":"实例-消除魔术字符串","link":"#实例-消除魔术字符串","children":[]},{"level":2,"title":"属性名的遍历","slug":"属性名的遍历","link":"#属性名的遍历","children":[]},{"level":2,"title":"Symbol.for()，Symbol.keyFor()","slug":"symbol-for-symbol-keyfor","link":"#symbol-for-symbol-keyfor","children":[]},{"level":2,"title":"实例: 模块的 Singleton 模式","slug":"实例-模块的-singleton-模式","link":"#实例-模块的-singleton-模式","children":[]},{"level":2,"title":"内置的 Symbol 值","slug":"内置的-symbol-值","link":"#内置的-symbol-值","children":[{"level":3,"title":"Symbol.hasInstance","slug":"symbol-hasinstance","link":"#symbol-hasinstance","children":[]},{"level":3,"title":"Symbol.isConcatSpreadable","slug":"symbol-isconcatspreadable","link":"#symbol-isconcatspreadable","children":[]},{"level":3,"title":"Symbol.species","slug":"symbol-species","link":"#symbol-species","children":[]},{"level":3,"title":"Symbol.match","slug":"symbol-match","link":"#symbol-match","children":[]},{"level":3,"title":"Symbol.replace","slug":"symbol-replace","link":"#symbol-replace","children":[]},{"level":3,"title":"Symbol.search","slug":"symbol-search","link":"#symbol-search","children":[]},{"level":3,"title":"Symbol.split","slug":"symbol-split","link":"#symbol-split","children":[]},{"level":3,"title":"Symbol.iterator","slug":"symbol-iterator","link":"#symbol-iterator","children":[]},{"level":3,"title":"Symbol.toPrimitive","slug":"symbol-toprimitive","link":"#symbol-toprimitive","children":[]},{"level":3,"title":"Symbol.toStringTag","slug":"symbol-tostringtag","link":"#symbol-tostringtag","children":[]},{"level":3,"title":"Symbol.unscopables","slug":"symbol-unscopables","link":"#symbol-unscopables","children":[]}]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":16.65,"words":4995},"localizedDate":"2019年10月21日","filePathRelative":"code/language/js/es6/symbol.md","excerpt":"<h1> Symbol</h1>\\n<h2> 概述</h2>\\n<p>ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，您使用了一个他人提供的对象，但又想为这个对象添加新的方法(mixin 模式)，新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 <code>Symbol</code> 的原因。</p>\\n<p>ES6 引入了一种新的原始数据类型 <code>Symbol</code>，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是: <code>undefined</code>、<code>null</code>、布尔值(Boolean)、字符串(String)、数值(Number)、对象(Object)。</p>","autoDesc":true}');export{e as data};
