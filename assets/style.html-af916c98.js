const n=JSON.parse('{"key":"v-32817272","path":"/code/language/js/es6/style.html","title":"编程风格","lang":"zh-CN","frontmatter":{"icon":"style","author":"阮一峰","date":"2019-10-23T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"编程风格 本章探讨如何将 ES6 的新语法，运用到编码实践之中，与传统的 JavaScript 语法结合在一起，写出合理的、易于阅读和维护的代码。 多家公司和组织已经公开了它们的风格规范，下面的内容主要参考了 Airbnb 公司的 JavaScript 风格规范。 块级作用域 let 取代 var ES6 提出了两个新的声明变量的命令: let 和 const。其中，let 完全可以取代 var，因为两者语义相同，而且 let 没有副作用。 \\"use strict\\"; if (true) { let x = \\"hello\\"; } for (let i = 0; i &lt; 10; i++) { console.log(i); } 上面代码如果用 var 替代 let，实际上就声明了两个全局变量，这显然不是本意。变量应该只在其声明的代码块内有效，var 命令做不到这一点。 var 命令存在变量提升效用，let 命令没有这个问题。 \\"use strict\\"; if (true) { console.log(x); // ReferenceError let x = \\"hello\\"; } 上面代码如果使用 var 替代 let，console.log 那一行就不会报错，而是会输出 undefined，因为变量声明提升到代码块的头部。这违反了变量先声明后使用的原则。 所以，建议不再使用 var 命令，而是使用 let 命令取代。 全局常量和线程安全 在 let 和 const 之间，建议优先使用 const，尤其是在全局环境，不应该设置变量，只应设置常量。 const 优于 let 有几个原因。一个是 const 可以提醒阅读程序的人，这个变量不应该改变；另一个是 const 比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；最后一个原因是 JavaScript 编译器会对 const 进行优化，所以多使用 const，有利于提高程序的运行效率，也就是说 let 和 const 的本质区别，其实是编译器内部的处理不同。 // bad var a = 1, b = 2, c = 3; // good const a = 1; const b = 2; const c = 3; // best const [a, b, c] = [1, 2, 3]; const 声明常量还有两个好处，一是阅读代码的人立刻会意识到不应该修改这个值，二是防止了无意间修改变量值所导致的错误。 所有的函数都应该设置为常量。 长远来看，JavaScript 可能会有多线程的实现(比如 Intel 公司的 River Trail 那一类的项目)，这时 let 表示的变量，只应出现在单线程运行的代码中，不能是多线程共享的，这样有利于保证线程安全。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/js/es6/style.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"编程风格"}],["meta",{"property":"og:description","content":"编程风格 本章探讨如何将 ES6 的新语法，运用到编码实践之中，与传统的 JavaScript 语法结合在一起，写出合理的、易于阅读和维护的代码。 多家公司和组织已经公开了它们的风格规范，下面的内容主要参考了 Airbnb 公司的 JavaScript 风格规范。 块级作用域 let 取代 var ES6 提出了两个新的声明变量的命令: let 和 const。其中，let 完全可以取代 var，因为两者语义相同，而且 let 没有副作用。 \\"use strict\\"; if (true) { let x = \\"hello\\"; } for (let i = 0; i &lt; 10; i++) { console.log(i); } 上面代码如果用 var 替代 let，实际上就声明了两个全局变量，这显然不是本意。变量应该只在其声明的代码块内有效，var 命令做不到这一点。 var 命令存在变量提升效用，let 命令没有这个问题。 \\"use strict\\"; if (true) { console.log(x); // ReferenceError let x = \\"hello\\"; } 上面代码如果使用 var 替代 let，console.log 那一行就不会报错，而是会输出 undefined，因为变量声明提升到代码块的头部。这违反了变量先声明后使用的原则。 所以，建议不再使用 var 命令，而是使用 let 命令取代。 全局常量和线程安全 在 let 和 const 之间，建议优先使用 const，尤其是在全局环境，不应该设置变量，只应设置常量。 const 优于 let 有几个原因。一个是 const 可以提醒阅读程序的人，这个变量不应该改变；另一个是 const 比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；最后一个原因是 JavaScript 编译器会对 const 进行优化，所以多使用 const，有利于提高程序的运行效率，也就是说 let 和 const 的本质区别，其实是编译器内部的处理不同。 // bad var a = 1, b = 2, c = 3; // good const a = 1; const b = 2; const c = 3; // best const [a, b, c] = [1, 2, 3]; const 声明常量还有两个好处，一是阅读代码的人立刻会意识到不应该修改这个值，二是防止了无意间修改变量值所导致的错误。 所有的函数都应该设置为常量。 长远来看，JavaScript 可能会有多线程的实现(比如 Intel 公司的 River Trail 那一类的项目)，这时 let 表示的变量，只应出现在单线程运行的代码中，不能是多线程共享的，这样有利于保证线程安全。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/style.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/style.html"}]]},"headers":[{"level":2,"title":"块级作用域","slug":"块级作用域","link":"#块级作用域","children":[]},{"level":2,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":2,"title":"解构赋值","slug":"解构赋值","link":"#解构赋值","children":[]},{"level":2,"title":"对象","slug":"对象","link":"#对象","children":[]},{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"Map 结构","slug":"map-结构","link":"#map-结构","children":[]},{"level":2,"title":"Class","slug":"class","link":"#class","children":[]},{"level":2,"title":"模块","slug":"模块","link":"#模块","children":[]},{"level":2,"title":"ESLint 的使用","slug":"eslint-的使用","link":"#eslint-的使用","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":8.08,"words":2424},"filePathRelative":"code/language/js/es6/style.md","localizedDate":"2019年10月23日","excerpt":"<h1> 编程风格</h1>\\n<p>本章探讨如何将 ES6 的新语法，运用到编码实践之中，与传统的 JavaScript 语法结合在一起，写出合理的、易于阅读和维护的代码。</p>\\n<p>多家公司和组织已经公开了它们的风格规范，下面的内容主要参考了 <a href=\\"https://github.com/airbnb/javascript\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Airbnb</a> 公司的 JavaScript 风格规范。</p>\\n<h2> 块级作用域</h2>\\n<ol>\\n<li>\\n<p><code>let</code> 取代 <code>var</code></p>\\n<p>ES6 提出了两个新的声明变量的命令: <code>let</code> 和 <code>const</code>。其中，<code>let</code> 完全可以取代 <code>var</code>，因为两者语义相同，而且 <code>let</code> 没有副作用。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token string\\">\\"use strict\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> x <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"hello\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>上面代码如果用 <code>var</code> 替代 <code>let</code>，实际上就声明了两个全局变量，这显然不是本意。变量应该只在其声明的代码块内有效，<code>var</code> 命令做不到这一点。</p>\\n<p><code>var</code> 命令存在变量提升效用，<code>let</code> 命令没有这个问题。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token string\\">\\"use strict\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// ReferenceError</span>\\n  <span class=\\"token keyword\\">let</span> x <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"hello\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>上面代码如果使用 <code>var</code> 替代 <code>let</code>，<code>console.log</code> 那一行就不会报错，而是会输出 <code>undefined</code>，因为变量声明提升到代码块的头部。这违反了变量先声明后使用的原则。</p>\\n<p>所以，建议不再使用 <code>var</code> 命令，而是使用 <code>let</code> 命令取代。</p>\\n</li>\\n<li>\\n<p>全局常量和线程安全</p>\\n<p>在 <code>let</code> 和 <code>const</code> 之间，建议优先使用 <code>const</code>，尤其是在全局环境，不应该设置变量，只应设置常量。</p>\\n<p><code>const</code> 优于 <code>let</code> 有几个原因。一个是 <code>const</code> 可以提醒阅读程序的人，这个变量不应该改变；另一个是 <code>const</code> 比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；最后一个原因是 JavaScript 编译器会对 <code>const</code> 进行优化，所以多使用 <code>const</code>，有利于提高程序的运行效率，也就是说 <code>let</code> 和 <code>const</code> 的本质区别，其实是编译器内部的处理不同。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// bad</span>\\n<span class=\\"token keyword\\">var</span> a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n  b <span class=\\"token operator\\">=</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span>\\n  c <span class=\\"token operator\\">=</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// good</span>\\n<span class=\\"token keyword\\">const</span> a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> b <span class=\\"token operator\\">=</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> c <span class=\\"token operator\\">=</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// best</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">[</span>a<span class=\\"token punctuation\\">,</span> b<span class=\\"token punctuation\\">,</span> c<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><code>const</code> 声明常量还有两个好处，一是阅读代码的人立刻会意识到不应该修改这个值，二是防止了无意间修改变量值所导致的错误。</p>\\n<p>所有的函数都应该设置为常量。</p>\\n<p>长远来看，JavaScript 可能会有多线程的实现(比如 Intel 公司的 River Trail 那一类的项目)，这时 <code>let</code> 表示的变量，只应出现在单线程运行的代码中，不能是多线程共享的，这样有利于保证线程安全。</p>\\n</li>\\n</ol>","autoDesc":true}');export{n as data};
