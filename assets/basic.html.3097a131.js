const e=JSON.parse('{"key":"v-03bbd203","path":"/code/language/python/guide/basic.html","title":"Python \u57FA\u7840","lang":"zh-CN","frontmatter":{"title":"Python \u57FA\u7840","icon":"module","author":"\u5ED6\u96EA\u5CF0","date":"2020-05-21T00:00:00.000Z","category":["Python"],"summary":"Python \u662F\u4E00\u79CD\u8BA1\u7B97\u673A\u7F16\u7A0B\u8BED\u8A00\u3002\u8BA1\u7B97\u673A\u7F16\u7A0B\u8BED\u8A00\u548C\u6211\u4EEC\u65E5\u5E38\u4F7F\u7528\u7684\u81EA\u7136\u8BED\u8A00\u6709\u6240\u4E0D\u540C\uFF0C\u6700\u5927\u7684\u533A\u522B\u5C31\u662F\uFF0C\u81EA\u7136\u8BED\u8A00\u5728\u4E0D\u540C\u7684\u8BED\u5883\u4E0B\u6709\u4E0D\u540C\u7684\u7406\u89E3\uFF0C\u800C\u8BA1\u7B97\u673A\u8981\u6839\u636E\u7F16\u7A0B\u8BED\u8A00\u6267\u884C\u4EFB\u52A1\uFF0C\u5C31\u5FC5\u987B\u4FDD\u8BC1\u7F16\u7A0B\u8BED\u8A00\u5199\u51FA\u7684\u7A0B\u5E8F\u51B3\u4E0D\u80FD\u6709\u6B67\u4E49\uFF0C\u6240\u4EE5\uFF0C\u4EFB\u4F55\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00\u90FD\u6709\u81EA\u5DF1\u7684\u4E00\u5957\u8BED\u6CD5\uFF0C\u7F16\u8BD1\u5668\u6216\u8005\u89E3\u91CA\u5668\u5C31\u662F\u8D1F\u8D23\u628A\u7B26\u5408\u8BED\u6CD5\u7684\u7A0B\u5E8F\u4EE3\u7801\u8F6C\u6362\u6210 CPU \u80FD\u591F\u6267\u884C\u7684\u673A\u5668\u7801\uFF0C\u7136\u540E\u6267\u884C\u3002Python \u4E5F\u4E0D\u4F8B\u5916\u3002\\n","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/python/guide/basic.html"}],["meta",{"property":"og:site_name","content":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2"}],["meta",{"property":"og:title","content":"Python \u57FA\u7840"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"\u5ED6\u96EA\u5CF0"}],["meta",{"property":"article:published_time","content":"2020-05-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/python/guide/basic.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/python/guide/basic.html"}]]},"excerpt":"<p>Python \u662F\u4E00\u79CD\u8BA1\u7B97\u673A\u7F16\u7A0B\u8BED\u8A00\u3002\u8BA1\u7B97\u673A\u7F16\u7A0B\u8BED\u8A00\u548C\u6211\u4EEC\u65E5\u5E38\u4F7F\u7528\u7684\u81EA\u7136\u8BED\u8A00\u6709\u6240\u4E0D\u540C\uFF0C\u6700\u5927\u7684\u533A\u522B\u5C31\u662F\uFF0C\u81EA\u7136\u8BED\u8A00\u5728\u4E0D\u540C\u7684\u8BED\u5883\u4E0B\u6709\u4E0D\u540C\u7684\u7406\u89E3\uFF0C\u800C\u8BA1\u7B97\u673A\u8981\u6839\u636E\u7F16\u7A0B\u8BED\u8A00\u6267\u884C\u4EFB\u52A1\uFF0C\u5C31\u5FC5\u987B\u4FDD\u8BC1\u7F16\u7A0B\u8BED\u8A00\u5199\u51FA\u7684\u7A0B\u5E8F\u51B3\u4E0D\u80FD\u6709\u6B67\u4E49\uFF0C\u6240\u4EE5\uFF0C\u4EFB\u4F55\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00\u90FD\u6709\u81EA\u5DF1\u7684\u4E00\u5957\u8BED\u6CD5\uFF0C\u7F16\u8BD1\u5668\u6216\u8005\u89E3\u91CA\u5668\u5C31\u662F\u8D1F\u8D23\u628A\u7B26\u5408\u8BED\u6CD5\u7684\u7A0B\u5E8F\u4EE3\u7801\u8F6C\u6362\u6210 CPU \u80FD\u591F\u6267\u884C\u7684\u673A\u5668\u7801\uFF0C\u7136\u540E\u6267\u884C\u3002Python \u4E5F\u4E0D\u4F8B\u5916\u3002</p>\\n","headers":[{"level":2,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B","link":"#\u6570\u636E\u7C7B\u578B","children":[{"level":3,"title":"\u6574\u6570","slug":"\u6574\u6570","link":"#\u6574\u6570","children":[]},{"level":3,"title":"\u6D6E\u70B9\u6570","slug":"\u6D6E\u70B9\u6570","link":"#\u6D6E\u70B9\u6570","children":[]},{"level":3,"title":"\u5B57\u7B26\u4E32","slug":"\u5B57\u7B26\u4E32","link":"#\u5B57\u7B26\u4E32","children":[]},{"level":3,"title":"\u975E\u8F6C\u4E49\u5B57\u7B26\u4E32","slug":"\u975E\u8F6C\u4E49\u5B57\u7B26\u4E32","link":"#\u975E\u8F6C\u4E49\u5B57\u7B26\u4E32","children":[]},{"level":3,"title":"\u591A\u884C\u5B57\u7B26\u4E32","slug":"\u591A\u884C\u5B57\u7B26\u4E32","link":"#\u591A\u884C\u5B57\u7B26\u4E32","children":[]},{"level":3,"title":"\u5E03\u5C14\u503C","slug":"\u5E03\u5C14\u503C","link":"#\u5E03\u5C14\u503C","children":[]},{"level":3,"title":"\u7A7A\u503C","slug":"\u7A7A\u503C","link":"#\u7A7A\u503C","children":[]}]},{"level":2,"title":"\u53D8\u91CF","slug":"\u53D8\u91CF","link":"#\u53D8\u91CF","children":[{"level":3,"title":"\u5E38\u91CF","slug":"\u5E38\u91CF","link":"#\u5E38\u91CF","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":9.92,"words":2975},"filePathRelative":"code/language/python/guide/basic.md","localizedDate":"2020\u5E745\u670821\u65E5"}');export{e as data};
