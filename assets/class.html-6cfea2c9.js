const n=JSON.parse('{"key":"v-260ae8cc","path":"/en/code/language/js/es6/class.html","title":"Class 的基本语法","lang":"en-US","frontmatter":{"icon":"class","author":"阮一峰","date":"2019-10-23T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"Class 的基本语法 简介 JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。 function Point(x, y) { this.x = x; this.y = y; } Point.prototype.toString = function () { return \\"(\\" + this.x + \\", \\" + this.y + \\")\\"; }; let p = new Point(1, 2);","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/language/js/es6/class.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"Class 的基本语法"}],["meta",{"property":"og:description","content":"Class 的基本语法 简介 JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。 function Point(x, y) { this.x = x; this.y = y; } Point.prototype.toString = function () { return \\"(\\" + this.x + \\", \\" + this.y + \\")\\"; }; let p = new Point(1, 2);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/js/es6/class.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/class.html"}]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"严格模式","slug":"严格模式","link":"#严格模式","children":[]},{"level":2,"title":"constructor 方法","slug":"constructor-方法","link":"#constructor-方法","children":[]},{"level":2,"title":"类的实例对象","slug":"类的实例对象","link":"#类的实例对象","children":[]},{"level":2,"title":"Class 表达式","slug":"class-表达式","link":"#class-表达式","children":[]},{"level":2,"title":"不存在变量提升","slug":"不存在变量提升","link":"#不存在变量提升","children":[]},{"level":2,"title":"私有方法和私有属性","slug":"私有方法和私有属性","link":"#私有方法和私有属性","children":[{"level":3,"title":"现有的方法","slug":"现有的方法","link":"#现有的方法","children":[]},{"level":3,"title":"私有属性的提案","slug":"私有属性的提案","link":"#私有属性的提案","children":[]}]},{"level":2,"title":"this 的指向","slug":"this-的指向","link":"#this-的指向","children":[]},{"level":2,"title":"name 属性","slug":"name-属性","link":"#name-属性","children":[]},{"level":2,"title":"Class 的取值函数(getter)和存值函数(setter)","slug":"class-的取值函数-getter-和存值函数-setter","link":"#class-的取值函数-getter-和存值函数-setter","children":[]},{"level":2,"title":"Class 的 Generator 方法","slug":"class-的-generator-方法","link":"#class-的-generator-方法","children":[]},{"level":2,"title":"Class 的静态方法","slug":"class-的静态方法","link":"#class-的静态方法","children":[]},{"level":2,"title":"Class 的静态属性和实例属性","slug":"class-的静态属性和实例属性","link":"#class-的静态属性和实例属性","children":[]},{"level":2,"title":"new.target 属性","slug":"new-target-属性","link":"#new-target-属性","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":16.46,"words":4938},"localizedDate":"October 23, 2019","filePathRelative":"en/code/language/js/es6/class.md","excerpt":"<h1> Class 的基本语法</h1>\\n<h2> 简介</h2>\\n<p>JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">Point</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">x<span class=\\"token punctuation\\">,</span> y</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>x <span class=\\"token operator\\">=</span> x<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>y <span class=\\"token operator\\">=</span> y<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token class-name\\">Point</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">toString</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"(\\"</span> <span class=\\"token operator\\">+</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>x <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\", \\"</span> <span class=\\"token operator\\">+</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>y <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\")\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">let</span> p <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Point</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
