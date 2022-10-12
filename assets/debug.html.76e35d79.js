const e=JSON.parse('{"key":"v-12f4ded6","path":"/code/mini-app/tools/debug.html","title":"\u8C03\u8BD5","lang":"zh-CN","frontmatter":{"title":"\u8C03\u8BD5","icon":"debug","category":["\u5C0F\u7A0B\u5E8F"],"summary":"\u7A0B\u5E8F\u8C03\u8BD5\u4E3B\u8981\u6709\u4E09\u5927\u529F\u80FD\u533A: \u6A21\u62DF\u5668\u3001\u8C03\u8BD5\u5DE5\u5177\u548C\u5C0F\u7A0B\u5E8F\u64CD\u4F5C\u533A\\n","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/mini-app/tools/debug.html"}],["meta",{"property":"og:site_name","content":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2"}],["meta",{"property":"og:title","content":"\u8C03\u8BD5"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/mini-app/tools/debug.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/mini-app/tools/debug.html"}]]},"excerpt":"<p>\u7A0B\u5E8F\u8C03\u8BD5\u4E3B\u8981\u6709\u4E09\u5927\u529F\u80FD\u533A: \u6A21\u62DF\u5668\u3001\u8C03\u8BD5\u5DE5\u5177\u548C\u5C0F\u7A0B\u5E8F\u64CD\u4F5C\u533A</p>\\n","headers":[{"level":2,"title":"\u6A21\u62DF\u5668","slug":"\u6A21\u62DF\u5668","link":"#\u6A21\u62DF\u5668","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u7F16\u8BD1","slug":"\u81EA\u5B9A\u4E49\u7F16\u8BD1","link":"#\u81EA\u5B9A\u4E49\u7F16\u8BD1","children":[]},{"level":2,"title":"\u7F16\u8BD1\u5F02\u5E38\u4FE1\u606F","slug":"\u7F16\u8BD1\u5F02\u5E38\u4FE1\u606F","link":"#\u7F16\u8BD1\u5F02\u5E38\u4FE1\u606F","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u9884\u5904\u7406","slug":"\u81EA\u5B9A\u4E49\u9884\u5904\u7406","link":"#\u81EA\u5B9A\u4E49\u9884\u5904\u7406","children":[]},{"level":2,"title":"\u524D\u540E\u53F0\u5207\u6362","slug":"\u524D\u540E\u53F0\u5207\u6362","link":"#\u524D\u540E\u53F0\u5207\u6362","children":[]},{"level":2,"title":"\u8C03\u8BD5\u5DE5\u5177","slug":"\u8C03\u8BD5\u5DE5\u5177","link":"#\u8C03\u8BD5\u5DE5\u5177","children":[{"level":3,"title":"Wxml panel","slug":"wxml-panel","link":"#wxml-panel","children":[]},{"level":3,"title":"Sources panel","slug":"sources-panel","link":"#sources-panel","children":[]},{"level":3,"title":"AppData panel","slug":"appdata-panel","link":"#appdata-panel","children":[]},{"level":3,"title":"Storage panel","slug":"storage-panel","link":"#storage-panel","children":[]},{"level":3,"title":"Network panel","slug":"network-panel","link":"#network-panel","children":[]},{"level":3,"title":"Console panel","slug":"console-panel","link":"#console-panel","children":[]},{"level":3,"title":"Sensor panel","slug":"sensor-panel","link":"#sensor-panel","children":[]}]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6570\u636E\u4E0A\u62A5","slug":"\u81EA\u5B9A\u4E49\u6570\u636E\u4E0A\u62A5","link":"#\u81EA\u5B9A\u4E49\u6570\u636E\u4E0A\u62A5","children":[]},{"level":2,"title":"\u81EA\u52A8\u9884\u89C8","slug":"\u81EA\u52A8\u9884\u89C8","link":"#\u81EA\u52A8\u9884\u89C8","children":[]},{"level":2,"title":"Source Map","slug":"source-map","link":"#source-map","children":[]},{"level":2,"title":"\u771F\u673A\u8C03\u8BD5","slug":"\u771F\u673A\u8C03\u8BD5","link":"#\u771F\u673A\u8C03\u8BD5","children":[{"level":3,"title":"\u8C03\u8BD5\u6D41\u7A0B","slug":"\u8C03\u8BD5\u6D41\u7A0B","link":"#\u8C03\u8BD5\u6D41\u7A0B","children":[]},{"level":3,"title":"\u8FDC\u7A0B\u8C03\u8BD5\u7A97\u53E3","slug":"\u8FDC\u7A0B\u8C03\u8BD5\u7A97\u53E3","link":"#\u8FDC\u7A0B\u8C03\u8BD5\u7A97\u53E3","children":[]},{"level":3,"title":"\u8C03\u8BD5\u5668","slug":"\u8C03\u8BD5\u5668","link":"#\u8C03\u8BD5\u5668","children":[]},{"level":3,"title":"\u4FE1\u606F\u89C6\u56FE","slug":"\u4FE1\u606F\u89C6\u56FE","link":"#\u4FE1\u606F\u89C6\u56FE","children":[]},{"level":3,"title":"\u624B\u673A\u7AEF\u5C55\u793A","slug":"\u624B\u673A\u7AEF\u5C55\u793A","link":"#\u624B\u673A\u7AEF\u5C55\u793A","children":[]}]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":10.95,"words":3286},"filePathRelative":"code/mini-app/tools/debug.md","localizedDate":"2022\u5E7410\u67087\u65E5"}');export{e as data};
