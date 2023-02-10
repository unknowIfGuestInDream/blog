const n=JSON.parse(`{"key":"v-002015d9","path":"/code/language/python/advance/iterator.html","title":"迭代器","lang":"zh-CN","frontmatter":{"title":"迭代器","icon":"refresh","author":"廖雪峰","date":"2020-05-29T00:00:00.000Z","category":["Python"],"description":"我们已经知道，可以直接作用于 for 循环的数据类型有以下几种: 一类是集合数据类型，如 list、tuple、dict、set、str 等； 一类是 generator，包括生成器和带 yield 的 generator function。 这些可以直接作用于 for 循环的对象统称为可迭代对象: Iterable。 可以使用 isinstance()判断一个对象是否是 Iterable 对象: &gt;&gt;&gt; from collections.abc import Iterable &gt;&gt;&gt; isinstance([], Iterable) True &gt;&gt;&gt; isinstance({}, Iterable) True &gt;&gt;&gt; isinstance('abc', Iterable) True &gt;&gt;&gt; isinstance((x for x in range(10)), Iterable) True &gt;&gt;&gt; isinstance(100, Iterable) False","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/python/advance/iterator.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/python/advance/iterator.html"}],["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/python/advance/iterator.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"迭代器"}],["meta",{"property":"og:description","content":"我们已经知道，可以直接作用于 for 循环的数据类型有以下几种: 一类是集合数据类型，如 list、tuple、dict、set、str 等； 一类是 generator，包括生成器和带 yield 的 generator function。 这些可以直接作用于 for 循环的对象统称为可迭代对象: Iterable。 可以使用 isinstance()判断一个对象是否是 Iterable 对象: &gt;&gt;&gt; from collections.abc import Iterable &gt;&gt;&gt; isinstance([], Iterable) True &gt;&gt;&gt; isinstance({}, Iterable) True &gt;&gt;&gt; isinstance('abc', Iterable) True &gt;&gt;&gt; isinstance((x for x in range(10)), Iterable) True &gt;&gt;&gt; isinstance(100, Iterable) False"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"迭代器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-29T00:00:00.000Z\\",\\"dateModified\\":\\"2022-10-07T16:35:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"]]},"headers":[{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":2.25,"words":674},"filePathRelative":"code/language/python/advance/iterator.md","localizedDate":"2020年5月29日","excerpt":"<p>我们已经知道，可以直接作用于 for 循环的数据类型有以下几种:</p>\\n<p>一类是集合数据类型，如 list、tuple、dict、set、str 等；</p>\\n<p>一类是 generator，包括生成器和带 yield 的 generator function。</p>\\n<p>这些可以直接作用于 for 循环的对象统称为可迭代对象: Iterable。</p>\\n<p>可以使用 isinstance()判断一个对象是否是 Iterable 对象:</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token keyword\\">from</span> collections<span class=\\"token punctuation\\">.</span>abc <span class=\\"token keyword\\">import</span> Iterable\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">isinstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> Iterable<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token boolean\\">True</span>\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">isinstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> Iterable<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token boolean\\">True</span>\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">isinstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'abc'</span><span class=\\"token punctuation\\">,</span> Iterable<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token boolean\\">True</span>\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">isinstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>x <span class=\\"token keyword\\">for</span> x <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> Iterable<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token boolean\\">True</span>\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">isinstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> Iterable<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token boolean\\">False</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
