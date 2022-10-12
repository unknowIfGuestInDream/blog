const e=JSON.parse('{"key":"v-7953f4a6","path":"/code/language/js/es6/simd.html","title":"SIMD","lang":"zh-CN","frontmatter":{"icon":"process","author":"\u962E\u4E00\u5CF0","category":["JavaScript"],"copyright":"\u6B64\u90E8\u5206\u535A\u5BA2\u91C7\u7528 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">\u201C\u4FDD\u6301\u7F72\u540D\u2014\u975E\u5546\u7528\u201D\u521B\u610F\u5171\u4EAB4.0\u8BB8\u53EF\u8BC1</a>","summary":"SIMD \u6982\u8FF0 SIMD(\u53D1\u97F3/sim-dee/)\u662F\u201CSingle Instruction/Multiple Data\u201D\u7684\u7F29\u5199\uFF0C\u610F\u4E3A\u201C\u5355\u6307\u4EE4\uFF0C\u591A\u6570\u636E\u201D\u3002\u5B83\u662F JavaScript \u64CD\u4F5C CPU \u5BF9\u5E94\u6307\u4EE4\u7684\u63A5\u53E3\uFF0C\u60A8\u53EF\u4EE5\u770B\u505A\u8FD9\u662F\u4E00\u79CD\u4E0D\u540C\u7684\u8FD0\u7B97\u6267\u884C\u6A21\u5F0F\u3002\u4E0E\u5B83\u76F8\u5BF9\u7684\u662F SISD(\u201CSingle Instruction/Single Data\u201D)\uFF0C\u5373\u201C\u5355\u6307\u4EE4\uFF0C\u5355\u6570\u636E\u201D","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/language/js/es6/simd.html"}],["meta",{"property":"og:site_name","content":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2"}],["meta",{"property":"og:title","content":"SIMD"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"\u962E\u4E00\u5CF0"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/simd.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/language/js/es6/simd.html"}]]},"excerpt":"","headers":[{"level":2,"title":"\u6982\u8FF0","slug":"\u6982\u8FF0","link":"#\u6982\u8FF0","children":[]},{"level":2,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B","link":"#\u6570\u636E\u7C7B\u578B","children":[]},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5: \u6570\u5B66\u8FD0\u7B97","slug":"\u9759\u6001\u65B9\u6CD5-\u6570\u5B66\u8FD0\u7B97","link":"#\u9759\u6001\u65B9\u6CD5-\u6570\u5B66\u8FD0\u7B97","children":[{"level":3,"title":"SIMD.%type%.abs()\uFF0CSIMD.%type%.neg()","slug":"simd-type-abs-simd-type-neg","link":"#simd-type-abs-simd-type-neg","children":[]},{"level":3,"title":"SIMD.%type%.add()\uFF0CSIMD.%type%.addSaturate()","slug":"simd-type-add-simd-type-addsaturate","link":"#simd-type-add-simd-type-addsaturate","children":[]},{"level":3,"title":"SIMD.%type%.sub()\uFF0CSIMD.%type%.subSaturate()","slug":"simd-type-sub-simd-type-subsaturate","link":"#simd-type-sub-simd-type-subsaturate","children":[]},{"level":3,"title":"SIMD.%type%.mul()\uFF0CSIMD.%type%.div()\uFF0CSIMD.%type%.sqrt()","slug":"simd-type-mul-simd-type-div-simd-type-sqrt","link":"#simd-type-mul-simd-type-div-simd-type-sqrt","children":[]},{"level":3,"title":"SIMD.%FloatType%.reciprocalApproximation()","slug":"simd-floattype-reciprocalapproximation","link":"#simd-floattype-reciprocalapproximation","children":[]},{"level":3,"title":"SIMD.%type%.reciprocalSqrtApproximation()","slug":"simd-type-reciprocalsqrtapproximation","link":"#simd-type-reciprocalsqrtapproximation","children":[]},{"level":3,"title":"SIMD.%IntegerType%.shiftLeftByScalar()","slug":"simd-integertype-shiftleftbyscalar","link":"#simd-integertype-shiftleftbyscalar","children":[]},{"level":3,"title":"SIMD.%IntegerType%.shiftRightByScalar()","slug":"simd-integertype-shiftrightbyscalar","link":"#simd-integertype-shiftrightbyscalar","children":[]}]},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5: \u901A\u9053\u5904\u7406","slug":"\u9759\u6001\u65B9\u6CD5-\u901A\u9053\u5904\u7406","link":"#\u9759\u6001\u65B9\u6CD5-\u901A\u9053\u5904\u7406","children":[{"level":3,"title":"SIMD.%type%.check()","slug":"simd-type-check","link":"#simd-type-check","children":[]},{"level":3,"title":"SIMD.%type%.extractLane()\uFF0CSIMD.%type%.replaceLane()","slug":"simd-type-extractlane-simd-type-replacelane","link":"#simd-type-extractlane-simd-type-replacelane","children":[]},{"level":3,"title":"SIMD.%type%.load()","slug":"simd-type-load","link":"#simd-type-load","children":[]},{"level":3,"title":"SIMD.%type%.store()","slug":"simd-type-store","link":"#simd-type-store","children":[]},{"level":3,"title":"SIMD.%type%.splat()","slug":"simd-type-splat","link":"#simd-type-splat","children":[]},{"level":3,"title":"SIMD.%type%.swizzle()","slug":"simd-type-swizzle","link":"#simd-type-swizzle","children":[]},{"level":3,"title":"SIMD.%type%.shuffle()","slug":"simd-type-shuffle","link":"#simd-type-shuffle","children":[]}]},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5: \u6BD4\u8F83\u8FD0\u7B97","slug":"\u9759\u6001\u65B9\u6CD5-\u6BD4\u8F83\u8FD0\u7B97","link":"#\u9759\u6001\u65B9\u6CD5-\u6BD4\u8F83\u8FD0\u7B97","children":[{"level":3,"title":"SIMD.%type%.equal()\uFF0CSIMD.%type%.notEqual()","slug":"simd-type-equal-simd-type-notequal","link":"#simd-type-equal-simd-type-notequal","children":[]},{"level":3,"title":"SIMD.%type%.greaterThan()\uFF0CSIMD.%type%.greaterThanOrEqual()","slug":"simd-type-greaterthan-simd-type-greaterthanorequal","link":"#simd-type-greaterthan-simd-type-greaterthanorequal","children":[]},{"level":3,"title":"SIMD.%type%.lessThan()\uFF0CSIMD.%type%.lessThanOrEqual()","slug":"simd-type-lessthan-simd-type-lessthanorequal","link":"#simd-type-lessthan-simd-type-lessthanorequal","children":[]},{"level":3,"title":"SIMD.%type%.select()","slug":"simd-type-select","link":"#simd-type-select","children":[]},{"level":3,"title":"SIMD.%BooleanType%.allTrue()\uFF0CSIMD.%BooleanType%.anyTrue()","slug":"simd-booleantype-alltrue-simd-booleantype-anytrue","link":"#simd-booleantype-alltrue-simd-booleantype-anytrue","children":[]},{"level":3,"title":"SIMD.%type%.min()\uFF0CSIMD.%type%.minNum()","slug":"simd-type-min-simd-type-minnum","link":"#simd-type-min-simd-type-minnum","children":[]},{"level":3,"title":"SIMD.%type%.max()\uFF0CSIMD.%type%.maxNum()","slug":"simd-type-max-simd-type-maxnum","link":"#simd-type-max-simd-type-maxnum","children":[]}]},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5: \u4F4D\u8FD0\u7B97","slug":"\u9759\u6001\u65B9\u6CD5-\u4F4D\u8FD0\u7B97","link":"#\u9759\u6001\u65B9\u6CD5-\u4F4D\u8FD0\u7B97","children":[{"level":3,"title":"SIMD.%type%.and()\uFF0CSIMD.%type%.or()\uFF0CSIMD.%type%.xor()\uFF0CSIMD.%type%.not()","slug":"simd-type-and-simd-type-or-simd-type-xor-simd-type-not","link":"#simd-type-and-simd-type-or-simd-type-xor-simd-type-not","children":[]}]},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5: \u6570\u636E\u7C7B\u578B\u8F6C\u6362","slug":"\u9759\u6001\u65B9\u6CD5-\u6570\u636E\u7C7B\u578B\u8F6C\u6362","link":"#\u9759\u6001\u65B9\u6CD5-\u6570\u636E\u7C7B\u578B\u8F6C\u6362","children":[]},{"level":2,"title":"\u5B9E\u4F8B\u65B9\u6CD5","slug":"\u5B9E\u4F8B\u65B9\u6CD5","link":"#\u5B9E\u4F8B\u65B9\u6CD5","children":[{"level":3,"title":"SIMD.%type%.prototype.toString()","slug":"simd-type-prototype-tostring","link":"#simd-type-prototype-tostring","children":[]}]},{"level":2,"title":"\u5B9E\u4F8B: \u6C42\u5E73\u5747\u503C","slug":"\u5B9E\u4F8B-\u6C42\u5E73\u5747\u503C","link":"#\u5B9E\u4F8B-\u6C42\u5E73\u5747\u503C","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":17.62,"words":5286},"filePathRelative":"code/language/js/es6/simd.md","localizedDate":"2022\u5E7410\u67087\u65E5"}');export{e as data};
