const e=JSON.parse('{"key":"v-eabcea6a","path":"/en/code/language/js/es6/arraybuffer.html","title":"ArrayBuffer","lang":"en-US","frontmatter":{"title":"ArrayBuffer","icon":"rank","author":"阮一峰","date":"2019-10-25T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"ArrayBuffer 对象、TypedArray 视图和 DataView 视图是 JavaScript 操作二进制数据的一个接口。这些对象早就存在，属于独立的规格(2011 年 2 月发布)，ES6 将它们纳入了 ECMAScript 规格，并且增加了新的方法。它们都是以数组的语法处理二进制数据，所以统称为二进制数组。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/language/js/es6/arraybuffer.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"ArrayBuffer"}],["meta",{"property":"og:description","content":"ArrayBuffer 对象、TypedArray 视图和 DataView 视图是 JavaScript 操作二进制数据的一个接口。这些对象早就存在，属于独立的规格(2011 年 2 月发布)，ES6 将它们纳入了 ECMAScript 规格，并且增加了新的方法。它们都是以数组的语法处理二进制数据，所以统称为二进制数组。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/js/es6/arraybuffer.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/arraybuffer.html"}]]},"headers":[{"level":2,"title":"ArrayBuffer 对象","slug":"arraybuffer-对象","link":"#arraybuffer-对象","children":[{"level":3,"title":"ArrayBuffer 概述","slug":"arraybuffer-概述","link":"#arraybuffer-概述","children":[]},{"level":3,"title":"ArrayBuffer.prototype.byteLength","slug":"arraybuffer-prototype-bytelength","link":"#arraybuffer-prototype-bytelength","children":[]},{"level":3,"title":"ArrayBuffer.prototype.slice()","slug":"arraybuffer-prototype-slice","link":"#arraybuffer-prototype-slice","children":[]},{"level":3,"title":"ArrayBuffer.isView()","slug":"arraybuffer-isview","link":"#arraybuffer-isview","children":[]}]},{"level":2,"title":"TypedArray 视图","slug":"typedarray-视图","link":"#typedarray-视图","children":[{"level":3,"title":"TypedArray 概述","slug":"typedarray-概述","link":"#typedarray-概述","children":[]},{"level":3,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":3,"title":"数组方法","slug":"数组方法","link":"#数组方法","children":[]},{"level":3,"title":"字节序","slug":"字节序","link":"#字节序","children":[]},{"level":3,"title":"BYTES_PER_ELEMENT 属性","slug":"bytes-per-element-属性","link":"#bytes-per-element-属性","children":[]},{"level":3,"title":"ArrayBuffer 与字符串的互相转换","slug":"arraybuffer-与字符串的互相转换","link":"#arraybuffer-与字符串的互相转换","children":[]},{"level":3,"title":"溢出","slug":"溢出","link":"#溢出","children":[]},{"level":3,"title":"TypedArray buffer","slug":"typedarray-buffer","link":"#typedarray-buffer","children":[]},{"level":3,"title":"TypedArray byteLength 与 byteOffset","slug":"typedarray-bytelength-与-byteoffset","link":"#typedarray-bytelength-与-byteoffset","children":[]},{"level":3,"title":"TypedArray.prototype.length","slug":"typedarray-prototype-length","link":"#typedarray-prototype-length","children":[]},{"level":3,"title":"TypedArray.prototype.set()","slug":"typedarray-prototype-set","link":"#typedarray-prototype-set","children":[]},{"level":3,"title":"TypedArray.prototype.subarray()","slug":"typedarray-prototype-subarray","link":"#typedarray-prototype-subarray","children":[]},{"level":3,"title":"TypedArray.prototype.slice()","slug":"typedarray-prototype-slice","link":"#typedarray-prototype-slice","children":[]},{"level":3,"title":"TypedArray.of()","slug":"typedarray-of","link":"#typedarray-of","children":[]},{"level":3,"title":"TypedArray.from()","slug":"typedarray-from","link":"#typedarray-from","children":[]}]},{"level":2,"title":"复合视图","slug":"复合视图","link":"#复合视图","children":[]},{"level":2,"title":"DataView 视图","slug":"dataview-视图","link":"#dataview-视图","children":[]},{"level":2,"title":"二进制数组的应用","slug":"二进制数组的应用","link":"#二进制数组的应用","children":[{"level":3,"title":"Ajax","slug":"ajax","link":"#ajax","children":[]},{"level":3,"title":"Canvas","slug":"canvas","link":"#canvas","children":[]},{"level":3,"title":"WebSocket","slug":"websocket","link":"#websocket","children":[]},{"level":3,"title":"Fetch API","slug":"fetch-api","link":"#fetch-api","children":[]},{"level":3,"title":"File API","slug":"file-api","link":"#file-api","children":[]}]},{"level":2,"title":"SharedArrayBuffer","slug":"sharedarraybuffer","link":"#sharedarraybuffer","children":[]},{"level":2,"title":"Atomics 对象","slug":"atomics-对象","link":"#atomics-对象","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":36.24,"words":10871},"localizedDate":"October 25, 2019","filePathRelative":"en/code/language/js/es6/arraybuffer.md","excerpt":"<p><code>ArrayBuffer</code> 对象、<code>TypedArray</code> 视图和 <code>DataView</code> 视图是 JavaScript 操作二进制数据的一个接口。这些对象早就存在，属于独立的规格(2011 年 2 月发布)，ES6 将它们纳入了 ECMAScript 规格，并且增加了新的方法。它们都是以数组的语法处理二进制数据，所以统称为二进制数组。</p>\\n","autoDesc":true}');export{e as data};
