const t=JSON.parse('{"key":"v-55011963","path":"/code/mini-app/guide/view/wxs.html","title":"WXS","lang":"zh-CN","frontmatter":{"title":"WXS","icon":"script","category":["\u5C0F\u7A0B\u5E8F"],"summary":"\\n\u63D0\u793A\\n\u6B64\u90E8\u5206\u5728\u521D\u6B65\u5B66\u4E60\u5C0F\u7A0B\u5E8F\u7684\u65F6\u5019\u76F4\u63A5\u7565\u8FC7\u5373\u53EF\u3002\\n\\nWXS (WeiXin Script) \u662F\u5C0F\u7A0B\u5E8F\u7684\u4E00\u5957\u811A\u672C\u8BED\u8A00\uFF0C\u7ED3\u5408 WXML\uFF0C\u53EF\u4EE5\u6784\u5EFA\u51FA\u9875\u9762\u7684\u7ED3\u6784\u3002\\n\\nWXS \u4E0D\u4F9D\u8D56\u4E8E\u8FD0\u884C\u65F6\u7684\u57FA\u7840\u5E93\u7248\u672C\uFF0C\u53EF\u4EE5\u5728\u6240\u6709\u7248\u672C\u7684\u5C0F\u7A0B\u5E8F\u4E2D\u8FD0\u884C\u3002\\nWXS \u4E0E JavaScript \u662F\u4E0D\u540C\u7684\u8BED\u8A00\uFF0C\u6709\u81EA\u5DF1\u7684\u8BED\u6CD5\uFF0C\u5E76\u4E0D\u548C JavaScript \u4E00\u81F4\u3002\\nWXS \u7684\u8FD0\u884C\u73AF\u5883\u548C\u5176\u4ED6 JavaScript \u4EE3\u7801\u662F\u9694\u79BB\u7684\uFF0CWXS \u4E2D\u4E0D\u80FD\u8C03\u7528\u5176\u4ED6 JavaScript \u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u51FD\u6570\uFF0C\u4E5F\u4E0D\u80FD\u8C03\u7528\u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u7684 API\u3002\\nWXS \u51FD\u6570\u4E0D\u80FD\u4F5C\u4E3A\u7EC4\u4EF6\u7684\u4E8B\u4EF6\u56DE\u8C03\u3002\\n\u7531\u4E8E\u8FD0\u884C\u73AF\u5883\u7684\u5DEE\u5F02\uFF0C\u5728 iOS \u8BBE\u5907\u4E0A\u5C0F\u7A0B\u5E8F\u5185\u7684 WXS \u4F1A\u6BD4 JavaScript \u4EE3\u7801\u5FEB 2 ~ 20 \u500D\u3002\u5728 Android \u8BBE\u5907\u4E0A\u4E8C\u8005\u8FD0\u884C\u6548\u7387\u65E0\u5DEE\u5F02\u3002\\n\\n","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/mini-app/guide/view/wxs.html"}],["meta",{"property":"og:site_name","content":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2"}],["meta",{"property":"og:title","content":"WXS"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/mini-app/guide/view/wxs.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/mini-app/guide/view/wxs.html"}]]},"excerpt":"<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">\u63D0\u793A</p>\\n<p>\u6B64\u90E8\u5206\u5728\u521D\u6B65\u5B66\u4E60\u5C0F\u7A0B\u5E8F\u7684\u65F6\u5019\u76F4\u63A5\u7565\u8FC7\u5373\u53EF\u3002</p>\\n</div>\\n<p>WXS (WeiXin Script) \u662F\u5C0F\u7A0B\u5E8F\u7684\u4E00\u5957\u811A\u672C\u8BED\u8A00\uFF0C\u7ED3\u5408 WXML\uFF0C\u53EF\u4EE5\u6784\u5EFA\u51FA\u9875\u9762\u7684\u7ED3\u6784\u3002</p>\\n<ol>\\n<li>WXS \u4E0D\u4F9D\u8D56\u4E8E\u8FD0\u884C\u65F6\u7684\u57FA\u7840\u5E93\u7248\u672C\uFF0C\u53EF\u4EE5\u5728\u6240\u6709\u7248\u672C\u7684\u5C0F\u7A0B\u5E8F\u4E2D\u8FD0\u884C\u3002</li>\\n<li>WXS \u4E0E JavaScript \u662F\u4E0D\u540C\u7684\u8BED\u8A00\uFF0C\u6709\u81EA\u5DF1\u7684\u8BED\u6CD5\uFF0C\u5E76\u4E0D\u548C JavaScript \u4E00\u81F4\u3002</li>\\n<li>WXS \u7684\u8FD0\u884C\u73AF\u5883\u548C\u5176\u4ED6 JavaScript \u4EE3\u7801\u662F\u9694\u79BB\u7684\uFF0CWXS \u4E2D\u4E0D\u80FD\u8C03\u7528\u5176\u4ED6 JavaScript \u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u51FD\u6570\uFF0C\u4E5F\u4E0D\u80FD\u8C03\u7528\u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u7684 API\u3002</li>\\n<li>WXS \u51FD\u6570\u4E0D\u80FD\u4F5C\u4E3A\u7EC4\u4EF6\u7684\u4E8B\u4EF6\u56DE\u8C03\u3002</li>\\n<li>\u7531\u4E8E\u8FD0\u884C\u73AF\u5883\u7684\u5DEE\u5F02\uFF0C\u5728 iOS \u8BBE\u5907\u4E0A\u5C0F\u7A0B\u5E8F\u5185\u7684 WXS \u4F1A\u6BD4 JavaScript \u4EE3\u7801\u5FEB 2 ~ 20 \u500D\u3002\u5728 Android \u8BBE\u5907\u4E0A\u4E8C\u8005\u8FD0\u884C\u6548\u7387\u65E0\u5DEE\u5F02\u3002</li>\\n</ol>\\n","headers":[{"level":2,"title":"\u9875\u9762\u6E32\u67D3","slug":"\u9875\u9762\u6E32\u67D3","link":"#\u9875\u9762\u6E32\u67D3","children":[]},{"level":2,"title":"\u6570\u636E\u5904\u7406","slug":"\u6570\u636E\u5904\u7406","link":"#\u6570\u636E\u5904\u7406","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":1.25,"words":374},"filePathRelative":"code/mini-app/guide/view/wxs.md","localizedDate":"2022\u5E7410\u67087\u65E5"}');export{t as data};
