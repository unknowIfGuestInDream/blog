const e=JSON.parse('{"key":"v-519de5de","path":"/code/language/linter/","title":"linter \u4ECB\u7ECD","lang":"zh-CN","frontmatter":{"title":"linter \u4ECB\u7ECD","icon":"linter","date":"2020-10-21T00:00:00.000Z","tag":["linter"],"summary":"linter \u7528\u6765\u68C0\u67E5\u7A0B\u5E8F\u7684\u8BED\u6CD5\u9519\u8BEF\uFF0C\u5E76\u5373\u65F6\u6807\u6CE8\u548C\u6307\u51FA\u6765 (\u4F8B\u5982\uFF0C\u628A\u58F0\u660E\u4E86\u4F46\u6CA1\u4F7F\u7528\u7684\u591A\u4F59\u53D8\u91CF\u6307\u51FA\u6765\uFF0C\u5411\u9519\u8BEF\u8BED\u53E5\u6DFB\u52A0\u7EA2\u8272\u6CE2\u6D6A\u7EBF)\uFF0C\u662F\u7A0B\u5E8F\u5F00\u53D1\u7684\u8F85\u52A9\u5DE5\u5177\u3002\u540C\u65F6\uFF0Clinter \u4E5F\u6709\u7EDF\u4E00\u89C4\u8303\u4EE3\u7801\u4E66\u5199\u65B9\u5F0F\u7684\u529F\u80FD\u3002\\n\u5728\u5927\u578B\u9879\u76EE\u4E2D\uFF0C\u7F16\u7801\u9700\u8981\u7EDF\u4E00\u7684\u98CE\u683C\uFF0C\u6BD4\u5982\u5728 JavaScript \u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\u8FD8\u662F\u53CC\u5F15\u53F7\u5305\u88F9\u5B57\u7B26\u4E32\uFF0C\u5728\u4F55\u65F6\u8FDB\u884C\u6298\u884C\u7B49\u3002\u76EE\u524D\u5404\u79CD\u8BED\u8A00\u57FA\u672C\u90FD\u6709\u81EA\u5DF1\u7684\u51FA\u8272 linter\uFF0C\u80FD\u591F\u786E\u4FDD\u76F8\u540C\u7684\u4F7F\u7528\u4E0D\u540C\u6362\u884C\u65B9\u5F0F\u3001\u7F29\u8FDB\u3001\u6807\u8BB0\u4EE3\u7801\u4F1A\u6700\u7EC8\u683C\u5F0F\u5316\u4E3A\u76F8\u540C\u7684\u8F93\u51FA\u3002\\n","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/linter/"}],["meta",{"property":"og:site_name","content":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2"}],["meta",{"property":"og:title","content":"linter \u4ECB\u7ECD"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:tag","content":"linter"}],["meta",{"property":"article:published_time","content":"2020-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/linter/"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/linter/"}]]},"excerpt":"<p>linter \u7528\u6765\u68C0\u67E5\u7A0B\u5E8F\u7684\u8BED\u6CD5\u9519\u8BEF\uFF0C\u5E76\u5373\u65F6\u6807\u6CE8\u548C\u6307\u51FA\u6765 (\u4F8B\u5982\uFF0C\u628A\u58F0\u660E\u4E86\u4F46\u6CA1\u4F7F\u7528\u7684\u591A\u4F59\u53D8\u91CF\u6307\u51FA\u6765\uFF0C\u5411\u9519\u8BEF\u8BED\u53E5\u6DFB\u52A0\u7EA2\u8272\u6CE2\u6D6A\u7EBF)\uFF0C\u662F\u7A0B\u5E8F\u5F00\u53D1\u7684\u8F85\u52A9\u5DE5\u5177\u3002\u540C\u65F6\uFF0Clinter \u4E5F\u6709\u7EDF\u4E00\u89C4\u8303\u4EE3\u7801\u4E66\u5199\u65B9\u5F0F\u7684\u529F\u80FD\u3002</p>\\n<p>\u5728\u5927\u578B\u9879\u76EE\u4E2D\uFF0C\u7F16\u7801\u9700\u8981\u7EDF\u4E00\u7684\u98CE\u683C\uFF0C\u6BD4\u5982\u5728 JavaScript \u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\u8FD8\u662F\u53CC\u5F15\u53F7\u5305\u88F9\u5B57\u7B26\u4E32\uFF0C\u5728\u4F55\u65F6\u8FDB\u884C\u6298\u884C\u7B49\u3002\u76EE\u524D\u5404\u79CD\u8BED\u8A00\u57FA\u672C\u90FD\u6709\u81EA\u5DF1\u7684\u51FA\u8272 linter\uFF0C\u80FD\u591F\u786E\u4FDD\u76F8\u540C\u7684\u4F7F\u7528\u4E0D\u540C\u6362\u884C\u65B9\u5F0F\u3001\u7F29\u8FDB\u3001\u6807\u8BB0\u4EE3\u7801\u4F1A\u6700\u7EC8\u683C\u5F0F\u5316\u4E3A\u76F8\u540C\u7684\u8F93\u51FA\u3002</p>\\n","headers":[{"level":2,"title":"Prettier","slug":"prettier","link":"#prettier","children":[]},{"level":2,"title":"ESlint","slug":"eslint","link":"#eslint","children":[]},{"level":2,"title":"clang-format","slug":"clang-format","link":"#clang-format","children":[]},{"level":2,"title":"checkStyle","slug":"checkstyle","link":"#checkstyle","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":1.05,"words":315},"filePathRelative":"code/language/linter/README.md","localizedDate":"2020\u5E7410\u670821\u65E5"}');export{e as data};
