const e=JSON.parse('{"key":"v-8113af46","path":"/code/language/js/es6/let.html","title":"let 和 const 命令","lang":"zh-CN","frontmatter":{"icon":"notice","author":"阮一峰","date":"2019-10-21T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"let 和 const 命令 let 命令 基本用法 ES6 新增了 let 命令，用来声明变量。它的用法类似于 var，但是所声明的变量，只在 let 命令所在的代码块内有效。 { let a = 10; var b = 1; } a; // ReferenceError: a is not defined. b; // 1","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/js/es6/let.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"let 和 const 命令"}],["meta",{"property":"og:description","content":"let 和 const 命令 let 命令 基本用法 ES6 新增了 let 命令，用来声明变量。它的用法类似于 var，但是所声明的变量，只在 let 命令所在的代码块内有效。 { let a = 10; var b = 1; } a; // ReferenceError: a is not defined. b; // 1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/let.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/let.html"}]]},"headers":[{"level":2,"title":"let 命令","slug":"let-命令","link":"#let-命令","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"不存在变量提升","slug":"不存在变量提升","link":"#不存在变量提升","children":[]},{"level":3,"title":"暂时性死区","slug":"暂时性死区","link":"#暂时性死区","children":[]},{"level":3,"title":"不允许重复声明","slug":"不允许重复声明","link":"#不允许重复声明","children":[]}]},{"level":2,"title":"块级作用域","slug":"块级作用域","link":"#块级作用域","children":[{"level":3,"title":"为什么需要块级作用域","slug":"为什么需要块级作用域","link":"#为什么需要块级作用域","children":[]},{"level":3,"title":"ES6 的块级作用域","slug":"es6-的块级作用域","link":"#es6-的块级作用域","children":[]},{"level":3,"title":"块级作用域与函数声明","slug":"块级作用域与函数声明","link":"#块级作用域与函数声明","children":[]}]},{"level":2,"title":"const 命令","slug":"const-命令","link":"#const-命令","children":[{"level":3,"title":"const 用法","slug":"const-用法","link":"#const-用法","children":[]},{"level":3,"title":"本质","slug":"本质","link":"#本质","children":[]},{"level":3,"title":"ES6 声明变量的六种方法","slug":"es6-声明变量的六种方法","link":"#es6-声明变量的六种方法","children":[]}]},{"level":2,"title":"顶层对象的属性","slug":"顶层对象的属性","link":"#顶层对象的属性","children":[]},{"level":2,"title":"global 对象","slug":"global-对象","link":"#global-对象","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":17.13,"words":5139},"filePathRelative":"code/language/js/es6/let.md","localizedDate":"2019年10月21日","excerpt":"<h1> let 和 const 命令</h1>\\n<h2> let 命令</h2>\\n<h3> 基本用法</h3>\\n<p>ES6 新增了 <code>let</code> 命令，用来声明变量。它的用法类似于 <code>var</code>，但是所声明的变量，只在 <code>let</code> 命令所在的代码块内有效。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">var</span> b <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\na<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// ReferenceError: a is not defined.</span>\\nb<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 1</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
