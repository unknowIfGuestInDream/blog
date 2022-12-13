const e=JSON.parse('{"key":"v-01b4827e","path":"/ja/code/language/js/es6/set-map.html","title":"Set 和 Map 数据结构","lang":"ja-JP","frontmatter":{"icon":"set","author":"阮一峰","date":"2019-10-23T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"Set 和 Map 数据结构 Set 基本用法 ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。 Set 本身是一个构造函数，用来生成 Set 数据结构。 const s = new Set(); [2, 3, 5, 4, 5, 2, 2].forEach((x) =&gt; s.add(x)); for (let i of s) { console.log(i); } // 2 3 5 4","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/code/language/js/es6/set-map.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"Set 和 Map 数据结构"}],["meta",{"property":"og:description","content":"Set 和 Map 数据结构 Set 基本用法 ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。 Set 本身是一个构造函数，用来生成 Set 数据结构。 const s = new Set(); [2, 3, 5, 4, 5, 2, 2].forEach((x) =&gt; s.add(x)); for (let i of s) { console.log(i); } // 2 3 5 4"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/js/es6/set-map.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/set-map.html"}]]},"headers":[{"level":2,"title":"Set","slug":"set","link":"#set","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"Set 实例的属性和方法","slug":"set-实例的属性和方法","link":"#set-实例的属性和方法","children":[]},{"level":3,"title":"遍历操作","slug":"遍历操作","link":"#遍历操作","children":[]}]},{"level":2,"title":"WeakSet","slug":"weakset","link":"#weakset","children":[{"level":3,"title":"含义","slug":"含义","link":"#含义","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]}]},{"level":2,"title":"Map","slug":"map","link":"#map","children":[{"level":3,"title":"含义和基本用法","slug":"含义和基本用法","link":"#含义和基本用法","children":[]},{"level":3,"title":"实例的属性和操作方法","slug":"实例的属性和操作方法","link":"#实例的属性和操作方法","children":[]},{"level":3,"title":"遍历方法","slug":"遍历方法","link":"#遍历方法","children":[]},{"level":3,"title":"与其他数据结构的互相转换","slug":"与其他数据结构的互相转换","link":"#与其他数据结构的互相转换","children":[]}]},{"level":2,"title":"WeakMap","slug":"weakmap","link":"#weakmap","children":[{"level":3,"title":"WeakMap 含义","slug":"weakmap-含义","link":"#weakmap-含义","children":[]},{"level":3,"title":"WeakMap 的语法","slug":"weakmap-的语法","link":"#weakmap-的语法","children":[]},{"level":3,"title":"WeakMap 的示例","slug":"weakmap-的示例","link":"#weakmap-的示例","children":[]},{"level":3,"title":"WeakMap 的用途","slug":"weakmap-的用途","link":"#weakmap-的用途","children":[]}]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":23.45,"words":7035},"localizedDate":"2019年10月23日","filePathRelative":"ja/code/language/js/es6/set-map.md","excerpt":"<h1> Set 和 Map 数据结构</h1>\\n<h2> Set</h2>\\n<h3> 基本用法</h3>\\n<p>ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。</p>\\n<p>Set 本身是一个构造函数，用来生成 Set 数据结构。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> s <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Set</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">x</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token keyword\\">of</span> s<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">// 2 3 5 4</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
