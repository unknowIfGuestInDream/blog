const e=JSON.parse('{"key":"v-15dd32d2","path":"/code/language/typescript/advanced/class.html","title":"\u7C7B","lang":"zh-CN","frontmatter":{"title":"\u7C7B","icon":"class","category":["TypeScript"],"summary":"\u4F20\u7EDF\u65B9\u6CD5\u4E2D\uFF0CJavaScript \u901A\u8FC7\u6784\u9020\u51FD\u6570\u5B9E\u73B0\u7C7B\u7684\u6982\u5FF5\uFF0C\u901A\u8FC7\u539F\u578B\u94FE\u5B9E\u73B0\u7EE7\u627F\u3002\u800C\u5728 ES6 \u4E2D\uFF0C\u6211\u4EEC\u7EC8\u4E8E\u8FCE\u6765\u4E86 class\u3002\\nTypeScript \u9664\u4E86\u5B9E\u73B0\u4E86\u6240\u6709 ES6 \u4E2D\u7684\u7C7B\u7684\u529F\u80FD\u4EE5\u5916\uFF0C\u8FD8\u6DFB\u52A0\u4E86\u4E00\u4E9B\u65B0\u7684\u7528\u6CD5\u3002\\n\u8FD9\u4E00\u8282\u4E3B\u8981\u4ECB\u7ECD\u7C7B\u7684\u7528\u6CD5\uFF0C\u4E0B\u4E00\u8282\u518D\u4ECB\u7ECD\u5982\u4F55\u5B9A\u4E49\u7C7B\u7684\u7C7B\u578B\u3002\\n","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/typescript/advanced/class.html"}],["meta",{"property":"og:site_name","content":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2"}],["meta",{"property":"og:title","content":"\u7C7B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/typescript/advanced/class.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/typescript/advanced/class.html"}]]},"excerpt":"<p>\u4F20\u7EDF\u65B9\u6CD5\u4E2D\uFF0CJavaScript \u901A\u8FC7\u6784\u9020\u51FD\u6570\u5B9E\u73B0\u7C7B\u7684\u6982\u5FF5\uFF0C\u901A\u8FC7\u539F\u578B\u94FE\u5B9E\u73B0\u7EE7\u627F\u3002\u800C\u5728 ES6 \u4E2D\uFF0C\u6211\u4EEC\u7EC8\u4E8E\u8FCE\u6765\u4E86 <code v-pre>class</code>\u3002</p>\\n<p>TypeScript \u9664\u4E86\u5B9E\u73B0\u4E86\u6240\u6709 ES6 \u4E2D\u7684\u7C7B\u7684\u529F\u80FD\u4EE5\u5916\uFF0C\u8FD8\u6DFB\u52A0\u4E86\u4E00\u4E9B\u65B0\u7684\u7528\u6CD5\u3002</p>\\n<p>\u8FD9\u4E00\u8282\u4E3B\u8981\u4ECB\u7ECD\u7C7B\u7684\u7528\u6CD5\uFF0C\u4E0B\u4E00\u8282\u518D\u4ECB\u7ECD\u5982\u4F55\u5B9A\u4E49\u7C7B\u7684\u7C7B\u578B\u3002</p>\\n","headers":[{"level":2,"title":"\u7C7B\u7684\u6982\u5FF5","slug":"\u7C7B\u7684\u6982\u5FF5","link":"#\u7C7B\u7684\u6982\u5FF5","children":[]},{"level":2,"title":"ES6 \u4E2D\u7C7B\u7684\u7528\u6CD5","slug":"es6-\u4E2D\u7C7B\u7684\u7528\u6CD5","link":"#es6-\u4E2D\u7C7B\u7684\u7528\u6CD5","children":[{"level":3,"title":"\u5C5E\u6027\u548C\u65B9\u6CD5","slug":"\u5C5E\u6027\u548C\u65B9\u6CD5","link":"#\u5C5E\u6027\u548C\u65B9\u6CD5","children":[]},{"level":3,"title":"\u7C7B\u7684\u7EE7\u627F","slug":"\u7C7B\u7684\u7EE7\u627F","link":"#\u7C7B\u7684\u7EE7\u627F","children":[]},{"level":3,"title":"\u5B58\u53D6\u5668","slug":"\u5B58\u53D6\u5668","link":"#\u5B58\u53D6\u5668","children":[]},{"level":3,"title":"\u9759\u6001\u65B9\u6CD5","slug":"\u9759\u6001\u65B9\u6CD5","link":"#\u9759\u6001\u65B9\u6CD5","children":[]}]},{"level":2,"title":"ES2016 \u4E2D\u7C7B\u7684\u7528\u6CD5","slug":"es2016-\u4E2D\u7C7B\u7684\u7528\u6CD5","link":"#es2016-\u4E2D\u7C7B\u7684\u7528\u6CD5","children":[{"level":3,"title":"\u5B9E\u4F8B\u5C5E\u6027","slug":"\u5B9E\u4F8B\u5C5E\u6027","link":"#\u5B9E\u4F8B\u5C5E\u6027","children":[]},{"level":3,"title":"\u9759\u6001\u5C5E\u6027","slug":"\u9759\u6001\u5C5E\u6027","link":"#\u9759\u6001\u5C5E\u6027","children":[]}]},{"level":2,"title":"TypeScript \u4E2D\u7C7B\u7684\u7528\u6CD5","slug":"typescript-\u4E2D\u7C7B\u7684\u7528\u6CD5","link":"#typescript-\u4E2D\u7C7B\u7684\u7528\u6CD5","children":[{"level":3,"title":"public private \u548C protected","slug":"public-private-\u548C-protected","link":"#public-private-\u548C-protected","children":[]},{"level":3,"title":"\u62BD\u8C61\u7C7B","slug":"\u62BD\u8C61\u7C7B","link":"#\u62BD\u8C61\u7C7B","children":[]}]},{"level":2,"title":"\u7C7B\u7684\u7C7B\u578B","slug":"\u7C7B\u7684\u7C7B\u578B","link":"#\u7C7B\u7684\u7C7B\u578B","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":6.29,"words":1888},"filePathRelative":"code/language/typescript/advanced/class.md","localizedDate":"2022\u5E7410\u67087\u65E5"}');export{e as data};
