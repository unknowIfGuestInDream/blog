const e=JSON.parse('{"key":"v-6193fda3","path":"/code/language/typescript/basics/declaration-files.html","title":"声明文件","lang":"zh-CN","frontmatter":{"title":"声明文件","icon":"notice","category":["TypeScript"],"description":"当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。 什么是声明语句 假如我们想使用第三方库 jQuery，一种常见的方式是在 HTML 中通过 &lt;script&gt; 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。 我们通常这样获取一个 id 是 foo 的元素: $(\\"#foo\\"); // or jQuery(\\"#foo\\");","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/typescript/basics/declaration-files.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"声明文件"}],["meta",{"property":"og:description","content":"当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。 什么是声明语句 假如我们想使用第三方库 jQuery，一种常见的方式是在 HTML 中通过 &lt;script&gt; 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。 我们通常这样获取一个 id 是 foo 的元素: $(\\"#foo\\"); // or jQuery(\\"#foo\\");"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/typescript/basics/declaration-files.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/typescript/basics/declaration-files.html"}]]},"headers":[{"level":2,"title":"什么是声明语句","slug":"什么是声明语句","link":"#什么是声明语句","children":[]},{"level":2,"title":"什么是声明文件","slug":"什么是声明文件","link":"#什么是声明文件","children":[{"level":3,"title":"第三方声明文件","slug":"第三方声明文件","link":"#第三方声明文件","children":[]}]},{"level":2,"title":"书写声明文件","slug":"书写声明文件","link":"#书写声明文件","children":[{"level":3,"title":"全局变量","slug":"全局变量","link":"#全局变量","children":[]},{"level":3,"title":"npm 包","slug":"npm-包","link":"#npm-包","children":[]},{"level":3,"title":"UMD 库","slug":"umd-库","link":"#umd-库","children":[]},{"level":3,"title":"直接扩展全局变量","slug":"直接扩展全局变量","link":"#直接扩展全局变量","children":[]},{"level":3,"title":"在 npm 包或 UMD 库中扩展全局变量","slug":"在-npm-包或-umd-库中扩展全局变量","link":"#在-npm-包或-umd-库中扩展全局变量","children":[]},{"level":3,"title":"模块插件","slug":"模块插件","link":"#模块插件","children":[]},{"level":3,"title":"声明文件中的依赖","slug":"声明文件中的依赖","link":"#声明文件中的依赖","children":[]},{"level":3,"title":"自动生成声明文件","slug":"自动生成声明文件","link":"#自动生成声明文件","children":[]}]},{"level":2,"title":"发布声明文件","slug":"发布声明文件","link":"#发布声明文件","children":[{"level":3,"title":"将声明文件和源码放在一起","slug":"将声明文件和源码放在一起","link":"#将声明文件和源码放在一起","children":[]},{"level":3,"title":"将声明文件发布到 @types 下","slug":"将声明文件发布到-types-下","link":"#将声明文件发布到-types-下","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":27.52,"words":8256},"localizedDate":"2022年10月7日","filePathRelative":"code/language/typescript/basics/declaration-files.md","excerpt":"<p>当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。</p>\\n<h2> 什么是声明语句</h2>\\n<p>假如我们想使用第三方库 jQuery，一种常见的方式是在 HTML 中通过 <code>&lt;script&gt;</code> 标签引入 jQuery，然后就可以使用全局变量 <code>$</code> 或 <code>jQuery</code> 了。</p>\\n<p>我们通常这样获取一个 <code>id</code> 是 <code>foo</code> 的元素:</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token function\\">$</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"#foo\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// or</span>\\n<span class=\\"token function\\">jQuery</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"#foo\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
