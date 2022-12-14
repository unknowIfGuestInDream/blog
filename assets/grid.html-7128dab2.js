const e=JSON.parse('{"key":"v-6383d537","path":"/code/website/css/layout/grid.html","title":"网格布局","lang":"zh-CN","frontmatter":{"title":"网格布局","author":"阮一峰","icon":"grid","date":"2020-10-20T00:00:00.000Z","category":["CSS"],"copyright":"自由转载-非商用-非衍生-保持署名 (创意共享3.0许可证)","description":"概述 网格布局 (Grid) 是最强大的 CSS 布局方案。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。 上图这样的布局，就是 Grid 布局的拿手好戏。 与 flex 的区别 Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。 Flex 布局是轴线布局，只能指定\\"项目\\"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成\\"行\\"和\\"列\\"，产生单元格，然后指定\\"项目所在\\"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/website/css/layout/grid.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"网格布局"}],["meta",{"property":"og:description","content":"概述 网格布局 (Grid) 是最强大的 CSS 布局方案。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。 上图这样的布局，就是 Grid 布局的拿手好戏。 与 flex 的区别 Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。 Flex 布局是轴线布局，只能指定\\"项目\\"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成\\"行\\"和\\"列\\"，产生单元格，然后指定\\"项目所在\\"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T03:34:02.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2020-10-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T03:34:02.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/website/css/layout/grid.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/website/css/layout/grid.html"}]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"容器和项目","slug":"容器和项目","link":"#容器和项目","children":[]},{"level":3,"title":"行和列","slug":"行和列","link":"#行和列","children":[]},{"level":3,"title":"单元格","slug":"单元格","link":"#单元格","children":[]},{"level":3,"title":"网格线","slug":"网格线","link":"#网格线","children":[]},{"level":3,"title":"沟槽","slug":"沟槽","link":"#沟槽","children":[]}]},{"level":2,"title":"容器属性","slug":"容器属性","link":"#容器属性","children":[{"level":3,"title":"display 属性","slug":"display-属性","link":"#display-属性","children":[]},{"level":3,"title":"grid-template-columns 和 grid-template-rows 属性","slug":"grid-template-columns-和-grid-template-rows-属性","link":"#grid-template-columns-和-grid-template-rows-属性","children":[]},{"level":3,"title":"row-gap 属性、column-gap 属性 和 gap 属性","slug":"row-gap-属性、column-gap-属性-和-gap-属性","link":"#row-gap-属性、column-gap-属性-和-gap-属性","children":[]},{"level":3,"title":"grid-template-areas 属性","slug":"grid-template-areas-属性","link":"#grid-template-areas-属性","children":[]},{"level":3,"title":"grid-auto-flow 属性","slug":"grid-auto-flow-属性","link":"#grid-auto-flow-属性","children":[]},{"level":3,"title":"justify-items 属性，align-items 属性 和 place-items 属性","slug":"justify-items-属性-align-items-属性-和-place-items-属性","link":"#justify-items-属性-align-items-属性-和-place-items-属性","children":[]},{"level":3,"title":"justify-content 属性，align-content 属性 和 place-content 属性","slug":"justify-content-属性-align-content-属性-和-place-content-属性","link":"#justify-content-属性-align-content-属性-和-place-content-属性","children":[]},{"level":3,"title":"grid-auto-columns 属性 和 grid-auto-rows 属性","slug":"grid-auto-columns-属性-和-grid-auto-rows-属性","link":"#grid-auto-columns-属性-和-grid-auto-rows-属性","children":[]},{"level":3,"title":"grid-template 属性 和 grid 属性","slug":"grid-template-属性-和-grid-属性","link":"#grid-template-属性-和-grid-属性","children":[]}]},{"level":2,"title":"项目属性","slug":"项目属性","link":"#项目属性","children":[{"level":3,"title":"位置指定","slug":"位置指定","link":"#位置指定","children":[]},{"level":3,"title":"grid-column 属性 和 grid-row 属性","slug":"grid-column-属性-和-grid-row-属性","link":"#grid-column-属性-和-grid-row-属性","children":[]},{"level":3,"title":"grid-area 属性","slug":"grid-area-属性","link":"#grid-area-属性","children":[]},{"level":3,"title":"justify-self 属性，align-self 属性 和 place-self 属性","slug":"justify-self-属性-align-self-属性-和-place-self-属性","link":"#justify-self-属性-align-self-属性-和-place-self-属性","children":[]}]}],"git":{"createdTime":1665160537000,"updatedTime":1665200042000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":31.6,"words":9481},"filePathRelative":"code/website/css/layout/grid.md","localizedDate":"2020年10月20日","excerpt":"<h2> 概述</h2>\\n<p>网格布局 (Grid) 是最强大的 CSS 布局方案。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。</p>\\n\\n<p>上图这样的布局，就是 Grid 布局的拿手好戏。</p>\\n<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">与 flex 的区别</p>\\n<p>Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。</p>\\n<p>Flex 布局是轴线布局，只能指定\\"项目\\"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成\\"行\\"和\\"列\\"，产生单元格，然后指定\\"项目所在\\"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。</p>\\n</div>","autoDesc":true}');export{e as data};
