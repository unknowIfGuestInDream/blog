const e=JSON.parse('{"key":"v-01199afd","path":"/code/language/js/es6/decorator.html","title":"修饰器","lang":"zh-CN","frontmatter":{"title":"修饰器","icon":"at","author":"阮一峰","date":"2019-10-23T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"类的修饰 许多面向对象的语言都有修饰器(Decorator)函数，用来修改类的行为。目前，有一个提案将这项功能，引入了 ECMAScript。 @testable class MyTestableClass { // ... } function testable(target) { target.isTestable = true; } MyTestableClass.isTestable; // true","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/js/es6/decorator.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"修饰器"}],["meta",{"property":"og:description","content":"类的修饰 许多面向对象的语言都有修饰器(Decorator)函数，用来修改类的行为。目前，有一个提案将这项功能，引入了 ECMAScript。 @testable class MyTestableClass { // ... } function testable(target) { target.isTestable = true; } MyTestableClass.isTestable; // true"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"修饰器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-23T00:00:00.000Z\\",\\"dateModified\\":\\"2022-10-07T16:35:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/decorator.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/decorator.html"}]]},"headers":[{"level":2,"title":"类的修饰","slug":"类的修饰","link":"#类的修饰","children":[]},{"level":2,"title":"方法的修饰","slug":"方法的修饰","link":"#方法的修饰","children":[]},{"level":2,"title":"修饰器不能用于函数的原因","slug":"修饰器不能用于函数的原因","link":"#修饰器不能用于函数的原因","children":[]},{"level":2,"title":"core-decorators.js","slug":"core-decorators-js","link":"#core-decorators-js","children":[]},{"level":2,"title":"使用修饰器实现自动发布事件","slug":"使用修饰器实现自动发布事件","link":"#使用修饰器实现自动发布事件","children":[]},{"level":2,"title":"Mixin","slug":"mixin","link":"#mixin","children":[]},{"level":2,"title":"Trait","slug":"trait","link":"#trait","children":[]},{"level":2,"title":"Babel 转码器的支持","slug":"babel-转码器的支持","link":"#babel-转码器的支持","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":11.35,"words":3406},"filePathRelative":"code/language/js/es6/decorator.md","localizedDate":"2019年10月23日","excerpt":"<h2> 类的修饰</h2>\\n<p>许多面向对象的语言都有修饰器(Decorator)函数，用来修改类的行为。目前，有一个<a href=\\"https://github.com/tc39/proposal-decorators\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">提案</a>将这项功能，引入了 ECMAScript。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>@testable\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">MyTestableClass</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">testable</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">target</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  target<span class=\\"token punctuation\\">.</span>isTestable <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\nMyTestableClass<span class=\\"token punctuation\\">.</span>isTestable<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// true</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
