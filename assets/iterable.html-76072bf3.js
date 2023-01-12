const e=JSON.parse('{"key":"v-396bce76","path":"/ja/code/language/dart/samples/iterable.html","title":"可迭代的集合","lang":"ja-JP","frontmatter":{"title":"可迭代的集合","icon":"refresh","date":"2020-05-30T00:00:00.000Z","category":["dart"],"description":"本节教您如何使用实现 Iterable 类的集合 - 例如 List 和 Set。可迭代对象是各种 Dart 应用程序的基本构建块，即使您没有注意到，您可能已经在使用它们。 本节包含以下内容: 如何读取 Iterable 的元素。 如何检查 Iterable 的元素是否满足条件。 如何过滤 Iterable 的内容。 如何将 Iterable 的内容映射到其他值。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/code/language/dart/samples/iterable.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"可迭代的集合"}],["meta",{"property":"og:description","content":"本节教您如何使用实现 Iterable 类的集合 - 例如 List 和 Set。可迭代对象是各种 Dart 应用程序的基本构建块，即使您没有注意到，您可能已经在使用它们。 本节包含以下内容: 如何读取 Iterable 的元素。 如何检查 Iterable 的元素是否满足条件。 如何过滤 Iterable 的内容。 如何将 Iterable 的内容映射到其他值。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"article:published_time","content":"2020-05-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"可迭代的集合\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-30T00:00:00.000Z\\",\\"dateModified\\":\\"2022-10-08T11:40:37.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/dart/samples/iterable.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/dart/samples/iterable.html"}]]},"headers":[{"level":2,"title":"什么是集合","slug":"什么是集合","link":"#什么是集合","children":[]},{"level":2,"title":"什么是可迭代的","slug":"什么是可迭代的","link":"#什么是可迭代的","children":[]},{"level":2,"title":"读取元素","slug":"读取元素","link":"#读取元素","children":[{"level":3,"title":"使用 fist 和 last","slug":"使用-fist-和-last","link":"#使用-fist-和-last","children":[]},{"level":3,"title":"使用 firstWhere()","slug":"使用-firstwhere","link":"#使用-firstwhere","children":[]},{"level":3,"title":"singleWhere","slug":"singlewhere","link":"#singlewhere","children":[]}]},{"level":2,"title":"条件检查","slug":"条件检查","link":"#条件检查","children":[{"level":3,"title":"使用 any() 和 every()","slug":"使用-any-和-every","link":"#使用-any-和-every","children":[]}]},{"level":2,"title":"筛选","slug":"筛选","link":"#筛选","children":[{"level":3,"title":"使用 where()","slug":"使用-where","link":"#使用-where","children":[]},{"level":3,"title":"使用 takeWhile","slug":"使用-takewhile","link":"#使用-takewhile","children":[]}]},{"level":2,"title":"映射","slug":"映射","link":"#映射","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":8.64,"words":2591},"filePathRelative":"ja/code/language/dart/samples/iterable.md","localizedDate":"2020年5月30日","excerpt":"<p>本节教您如何使用实现 <a href=\\"https://api.dart.dev/stable/dart-core/Iterable-class.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Iterable</a> 类的集合 - 例如 <a href=\\"https://api.dart.dev/stable/dart-core/List-class.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">List</a> 和 <a href=\\"https://api.dart.dev/stable/dart-core/Set-class.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Set</a>。可迭代对象是各种 Dart 应用程序的基本构建块，即使您没有注意到，您可能已经在使用它们。</p>\\n<p>本节包含以下内容:</p>\\n<ul>\\n<li>如何读取 Iterable 的元素。</li>\\n<li>如何检查 Iterable 的元素是否满足条件。</li>\\n<li>如何过滤 Iterable 的内容。</li>\\n<li>如何将 Iterable 的内容映射到其他值。</li>\\n</ul>\\n","autoDesc":true}');export{e as data};
