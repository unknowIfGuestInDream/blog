const e=JSON.parse('{"key":"v-18959d4c","path":"/ja/code/language/js/es6/class.html","title":"Class \u7684\u57FA\u672C\u8BED\u6CD5","lang":"ja-JP","frontmatter":{"icon":"class","author":"\u962E\u4E00\u5CF0","date":"2019-10-23T00:00:00.000Z","category":["JavaScript"],"copyright":"\u6B64\u90E8\u5206\u535A\u5BA2\u91C7\u7528 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">\u201C\u4FDD\u6301\u7F72\u540D\u2014\u975E\u5546\u7528\u201D\u521B\u610F\u5171\u4EAB4.0\u8BB8\u53EF\u8BC1</a>","summary":"Class \u7684\u57FA\u672C\u8BED\u6CD5 \u7B80\u4ECB JavaScript \u8BED\u8A00\u4E2D\uFF0C\u751F\u6210\u5B9E\u4F8B\u5BF9\u8C61\u7684\u4F20\u7EDF\u65B9\u6CD5\u662F\u901A\u8FC7\u6784\u9020\u51FD\u6570\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002 \u4E0A\u9762\u8FD9\u79CD\u5199\u6CD5\u8DDF\u4F20\u7EDF\u7684\u9762\u5411\u5BF9\u8C61\u8BED\u8A00(\u6BD4\u5982 C++ \u548C Java)\u5DEE\u5F02\u5F88\u5927\uFF0C\u5F88\u5BB9\u6613\u8BA9\u65B0\u5B66\u4E60\u8FD9\u95E8\u8BED\u8A00\u7684\u7A0B\u5E8F\u5458\u611F\u5230\u56F0\u60D1\u3002 ES6 \u63D0\u4F9B\u4E86\u66F4\u63A5\u8FD1\u4F20\u7EDF\u8BED\u8A00\u7684\u5199\u6CD5\uFF0C\u5F15\u5165\u4E86 Class(\u7C7B)\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u4F5C\u4E3A\u5BF9\u8C61\u7684\u6A21\u677F\u3002\u901A\u8FC7 class \u5173\u952E\u5B57\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u7C7B\u3002 \u57FA\u672C","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/code/language/js/es6/class.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"Class \u7684\u57FA\u672C\u8BED\u6CD5"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"\u962E\u4E00\u5CF0"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/js/es6/class.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/class.html"}]]},"excerpt":"","headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB","link":"#\u7B80\u4ECB","children":[]},{"level":2,"title":"\u4E25\u683C\u6A21\u5F0F","slug":"\u4E25\u683C\u6A21\u5F0F","link":"#\u4E25\u683C\u6A21\u5F0F","children":[]},{"level":2,"title":"constructor \u65B9\u6CD5","slug":"constructor-\u65B9\u6CD5","link":"#constructor-\u65B9\u6CD5","children":[]},{"level":2,"title":"\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61","slug":"\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61","link":"#\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61","children":[]},{"level":2,"title":"Class \u8868\u8FBE\u5F0F","slug":"class-\u8868\u8FBE\u5F0F","link":"#class-\u8868\u8FBE\u5F0F","children":[]},{"level":2,"title":"\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347","slug":"\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347","link":"#\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347","children":[]},{"level":2,"title":"\u79C1\u6709\u65B9\u6CD5\u548C\u79C1\u6709\u5C5E\u6027","slug":"\u79C1\u6709\u65B9\u6CD5\u548C\u79C1\u6709\u5C5E\u6027","link":"#\u79C1\u6709\u65B9\u6CD5\u548C\u79C1\u6709\u5C5E\u6027","children":[{"level":3,"title":"\u73B0\u6709\u7684\u65B9\u6CD5","slug":"\u73B0\u6709\u7684\u65B9\u6CD5","link":"#\u73B0\u6709\u7684\u65B9\u6CD5","children":[]},{"level":3,"title":"\u79C1\u6709\u5C5E\u6027\u7684\u63D0\u6848","slug":"\u79C1\u6709\u5C5E\u6027\u7684\u63D0\u6848","link":"#\u79C1\u6709\u5C5E\u6027\u7684\u63D0\u6848","children":[]}]},{"level":2,"title":"this \u7684\u6307\u5411","slug":"this-\u7684\u6307\u5411","link":"#this-\u7684\u6307\u5411","children":[]},{"level":2,"title":"name \u5C5E\u6027","slug":"name-\u5C5E\u6027","link":"#name-\u5C5E\u6027","children":[]},{"level":2,"title":"Class \u7684\u53D6\u503C\u51FD\u6570(getter)\u548C\u5B58\u503C\u51FD\u6570(setter)","slug":"class-\u7684\u53D6\u503C\u51FD\u6570-getter-\u548C\u5B58\u503C\u51FD\u6570-setter","link":"#class-\u7684\u53D6\u503C\u51FD\u6570-getter-\u548C\u5B58\u503C\u51FD\u6570-setter","children":[]},{"level":2,"title":"Class \u7684 Generator \u65B9\u6CD5","slug":"class-\u7684-generator-\u65B9\u6CD5","link":"#class-\u7684-generator-\u65B9\u6CD5","children":[]},{"level":2,"title":"Class \u7684\u9759\u6001\u65B9\u6CD5","slug":"class-\u7684\u9759\u6001\u65B9\u6CD5","link":"#class-\u7684\u9759\u6001\u65B9\u6CD5","children":[]},{"level":2,"title":"Class \u7684\u9759\u6001\u5C5E\u6027\u548C\u5B9E\u4F8B\u5C5E\u6027","slug":"class-\u7684\u9759\u6001\u5C5E\u6027\u548C\u5B9E\u4F8B\u5C5E\u6027","link":"#class-\u7684\u9759\u6001\u5C5E\u6027\u548C\u5B9E\u4F8B\u5C5E\u6027","children":[]},{"level":2,"title":"new.target \u5C5E\u6027","slug":"new-target-\u5C5E\u6027","link":"#new-target-\u5C5E\u6027","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":16.46,"words":4938},"filePathRelative":"ja/code/language/js/es6/class.md","localizedDate":"2019\u5E7410\u670823\u65E5"}');export{e as data};
