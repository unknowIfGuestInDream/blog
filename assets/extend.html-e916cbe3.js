const e=JSON.parse(`{"key":"v-77eececf","path":"/en/code/language/python/oop/extend.html","title":"继承和多态","lang":"en-US","frontmatter":{"title":"继承和多态","author":"廖雪峰","icon":"extend","date":"2021-03-28T00:00:00.000Z","category":["Python"],"description":"在 OOP 程序设计中，当我们定义一个 class 的时候，可以从某个现有的 class 继承，新的 class 称为子类 (Subclass) ，而被继承的 class 称为基类、父类或超类 (Base class、Super class) 。 比如，我们已经编写了一个名为 Animal 的 class，有一个 run() 方法可以直接打印: class Animal(object): def run(self): print('Animal is running...')","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/language/python/oop/extend.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"继承和多态"}],["meta",{"property":"og:description","content":"在 OOP 程序设计中，当我们定义一个 class 的时候，可以从某个现有的 class 继承，新的 class 称为子类 (Subclass) ，而被继承的 class 称为基类、父类或超类 (Base class、Super class) 。 比如，我们已经编写了一个名为 Animal 的 class，有一个 run() 方法可以直接打印: class Animal(object): def run(self): print('Animal is running...')"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/python/oop/extend.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/python/oop/extend.html"}]]},"headers":[{"level":2,"title":"静态语言 vs 动态语言","slug":"静态语言-vs-动态语言","link":"#静态语言-vs-动态语言","children":[]},{"level":2,"title":"多重继承","slug":"多重继承","link":"#多重继承","children":[]},{"level":2,"title":"MixIn","slug":"mixin","link":"#mixin","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":8.76,"words":2629},"localizedDate":"March 28, 2021","filePathRelative":"en/code/language/python/oop/extend.md","excerpt":"<p>在 OOP 程序设计中，当我们定义一个 class 的时候，可以从某个现有的 class 继承，新的 class 称为子类 (Subclass) ，而被继承的 class 称为基类、父类或超类 (Base class、Super class) 。</p>\\n<p>比如，我们已经编写了一个名为 Animal 的 class，有一个 <code>run()</code> 方法可以直接打印:</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Animal</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">object</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">run</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Animal is running...'</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
