const t=JSON.parse('{"key":"v-dd5a3b98","path":"/ja/code/language/python/oop/customize.html","title":"定制类","lang":"ja-JP","frontmatter":{"title":"定制类","author":"廖雪峰","icon":"customize","date":"2021-03-28T00:00:00.000Z","category":["Python"],"description":"看到类似 __slots__ 这种形如 __xxx__ 的变量或者函数名就要注意，这些在 Python 中是有特殊用途的。 __slots__ 我们已经知道怎么用了，__len__() 方法我们也知道是为了能让 class 作用于 len() 函数。 除此之外，Python 的 class 中还有许多这样有特殊用途的函数，可以帮助我们定制类。 __str__ 我们先定义一个 Student 类，打印一个实例:","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/code/language/python/oop/customize.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"定制类"}],["meta",{"property":"og:description","content":"看到类似 __slots__ 这种形如 __xxx__ 的变量或者函数名就要注意，这些在 Python 中是有特殊用途的。 __slots__ 我们已经知道怎么用了，__len__() 方法我们也知道是为了能让 class 作用于 len() 函数。 除此之外，Python 的 class 中还有许多这样有特殊用途的函数，可以帮助我们定制类。 __str__ 我们先定义一个 Student 类，打印一个实例:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/python/oop/customize.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/python/oop/customize.html"}]]},"headers":[{"level":2,"title":"__str__","slug":"str","link":"#str","children":[]},{"level":2,"title":"__getattr__","slug":"getattr","link":"#getattr","children":[]},{"level":2,"title":"__call__","slug":"call","link":"#call","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":7.43,"words":2228},"localizedDate":"2021年3月28日","filePathRelative":"ja/code/language/python/oop/customize.md","excerpt":"<p>看到类似 <code>__slots__</code> 这种形如 <code>__xxx__</code> 的变量或者函数名就要注意，这些在 Python 中是有特殊用途的。</p>\\n<p><code>__slots__</code> 我们已经知道怎么用了，<code>__len__()</code> 方法我们也知道是为了能让 class 作用于 <code>len()</code> 函数。</p>\\n<p>除此之外，Python 的 class 中还有许多这样有特殊用途的函数，可以帮助我们定制类。</p>\\n<h2> <code>__str__</code></h2>\\n<p>我们先定义一个 Student 类，打印一个实例:</p>","autoDesc":true}');export{t as data};
