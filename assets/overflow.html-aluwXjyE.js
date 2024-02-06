import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as c,c as l,d as i,w as p,f as o,a as e,e as t}from"./app--7H4MSuP.js";const d={},r=o('<p>溢出是在盒子无法容纳下太多的内容的时候发生的。</p><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><p>我们知道，CSS 中万物皆盒，因此我们可以通过给 <code>width</code> 和 <code>height</code>(或者 <code>inline-size</code> 和 <code>block-size</code>) 赋值的方式来约束盒子的尺寸。溢出是在您往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。CSS 给了您好几种工具来控制溢出。</p><h2 id="css-尽可能不丢弃内容" tabindex="-1"><a class="header-anchor" href="#css-尽可能不丢弃内容"><span>CSS 尽可能不丢弃内容</span></a></h2><p>在默认情况下，CSS 会将元素溢出的部分显示在和盒子外。</p>',5),u=e("div",{class:"language-html","data-ext":"html","data-title":"html"},[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("div")]),t(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("word"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t("Overflow"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("div")]),e("span",{class:"token punctuation"},">")]),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("div")]),t(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("box"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
  This box has a height and a width. This means that if there is too much
  content to be displayed within the assigned height, there will be an overflow
  situation. If overflow is set to hidden then any overflow will not be visible.
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("div")]),e("span",{class:"token punctuation"},">")]),t(`

`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("p")]),e("span",{class:"token punctuation"},">")]),t("This content is outside of the box."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("p")]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),h=e("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[e("pre",{class:"language-css"},[e("code",null,[e("span",{class:"token selector"},".word"),t(),e("span",{class:"token punctuation"},"{"),t(`
  `),e("span",{class:"token property"},"border"),e("span",{class:"token punctuation"},":"),t(" 1px solid #333333"),e("span",{class:"token punctuation"},";"),t(`
  `),e("span",{class:"token property"},"width"),e("span",{class:"token punctuation"},":"),t(" 100px"),e("span",{class:"token punctuation"},";"),t(`
  `),e("span",{class:"token property"},"font-size"),e("span",{class:"token punctuation"},":"),t(" 250%"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`

`),e("span",{class:"token selector"},".box"),t(),e("span",{class:"token punctuation"},"{"),t(`
  `),e("span",{class:"token property"},"border"),e("span",{class:"token punctuation"},":"),t(" 1px solid #333333"),e("span",{class:"token punctuation"},";"),t(`
  `),e("span",{class:"token property"},"width"),e("span",{class:"token punctuation"},":"),t(" 200px"),e("span",{class:"token punctuation"},";"),t(`
  `),e("span",{class:"token property"},"height"),e("span",{class:"token punctuation"},":"),t(" 100px"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),m=o('<p>只要有可能，CSS 就不会隐藏您的内容，隐藏引起的数据损失通常会造成困扰。</p><p>如果您已经用 <code>width</code> 或者 <code>height</code> 限制住了一个盒子，CSS 假定，您知道您在做什么，而且您已经控制住了溢出的隐患。总之，在盒子里面需要放置文本的时候，限制住块方向的尺寸是会引起问题的，比如用户增加字体大小，或者填入了远超您设计时预计数量的文本。</p><h2 id="overflow-属性" tabindex="-1"><a class="header-anchor" href="#overflow-属性"><span>overflow 属性</span></a></h2><p><code>overflow</code> 属性是您控制一个元素溢出的方式，它告诉浏览器您想怎样处理溢出。<code>overflow</code> 的默认值为 <code>visible</code>，这就是我们的内容溢出的时候，我们在默认情况下看到它们的原因。</p><p>如果您想在内容溢出的时候把它裁剪掉，设置 <code>overflow: hidden</code>。这就会隐藏掉溢出。这可能会很自然地让东西消失掉，所以您只应该在判断隐藏内容不会引起问题的时候这样做。</p><p>如果您想在有内容溢出的时候加个滚动条，设置 <code>overflow: scroll</code>，那么即使没有足够多引起溢出的内容，您的浏览器也总会显示滚动条。您可能会需要这样的样式，它避免了滚动条在内容变化的时候出现和消失。</p><p>如果仅仅需要在 y 轴方向上滚动，可以使用 <code>overflow-y</code> 属性，设置 <code>overflow-y: scroll</code> 来仅在 y 轴方向滚动。您也可以用 <code>overflow-x</code>，以在 x 轴方向上滚动。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意，<code>overflow-x</code> 不是处理长单词的好办法! 如果您真的需要在小盒子里面和长英文词打交道，使用 <code>word-break</code> 或者 <code>overflow-wrap</code> 属性。</p></div><p>和 <code>scroll</code> 一样，在无论内容是否会溢出，页面上都会显示一个滚动条。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>您可以用 <code>overflow</code> 属性指定 x 轴和 y 轴方向的滚动，同时使用两个值进行传递。如果指定了两个关键字，第一个对 <code>overflow-x</code> 生效而第二个对 <code>overflow-y</code> 生效。否则，<code>overflow-x</code> 和 <code>overflow-y</code> 将会被设置成同样的值。例如，<code>overflow: scroll hidden</code> 会把 <code>overflow-x</code> 设置成 <code>scroll</code>，而 <code>overflow-y</code> 则为 <code>hidden</code>。</p></div><p>如果您想让滚动条只在必要时才显示，那么使用 <code>overflow: auto</code>。此时由浏览器决定是否显示滚动条。浏览器一般仅仅会在有足以引起溢出的内容的时候这么做。</p><h2 id="块级排版上下文" tabindex="-1"><a class="header-anchor" href="#块级排版上下文"><span>块级排版上下文</span></a></h2><p>CSS 中有所谓块级排版上下文(Block Formatting Context，BFC)的概念。在您使用诸如 <code>scroll</code> 或者 <code>auto</code> 的时候，您就建立了一个块级排版上下文。结果就是，您改变了 <code>overflow</code> 的值的话，对应的盒子就变成了更加小巧的状态。在容器之外的东西没法混进容器内，也没有东西可以突出盒子，进入周围的版面。激活了滚动动作，您的盒子里面所有的内容会被收纳，而且不会遮到页面上其他的物件，于是就产生了一个协调的滚动体验。</p><h2 id="网页设计时不需要的溢出" tabindex="-1"><a class="header-anchor" href="#网页设计时不需要的溢出"><span>网页设计时不需要的溢出</span></a></h2><p>现代网页布局的方式 (正如 CSS layout 模块中所介绍的那些) 可以很好地处理溢出。我们不一定能预料到网页上会有多少内容，您很好地设计它们，使得它们能与这种现状协调。在开发网站的时候，您应该一直把溢出的问题挂在心头，您应该用或多或少的内容测试设计，增加文本的字号，确保您的 CSS 可以正常地协调。改变溢出属性的值，来隐藏内容或者增加滚动条，会是您仅仅在少数特别情况下需要的，例如在您确实需要一个可滚动盒子的时候。</p>',15);function v(k,f){const n=a("CodeDemo");return c(),l("div",null,[r,i(n,{id:"code-demo-15",type:"normal",title:"%E4%BE%8B%E5%AD%90",code:"eJyNULFywjAM/RWde91ooPS6UMreqUvHLE6sYN0ZOxcJAuX498omhetWL5afnt6T39l42QWzMmtHB2iDZX6vzZgGV5vN5wGHLqRxPdfmpo5/OE06KqWOAF+eGPQJ3jJY8EhbL2Cj08dITnx1pezQRgbxVoA6vXFAUFhSgt2+9VmqTVEwimLQIDjiPtgTOpURTzHPgLrTNip29ZlNQiOFkGdshDStnQWZZG+FUqzgo7t1si1jsfHkHBblqLOnO6UIxiRZ9EBMTcBKI5ii0KrflF/9rqxl2guTQ0jldzmSaj3vlW1mpmXWlKucLJzzZo1WOKzguT8Cp0AOHl7Kecvdkps2F4v+WIBObZ6YvnEFy9fFo2KXvEWVc/+/3vKmd03v7qBq5vID18+zQw=="},{default:p(()=>[u,h]),_:1}),m])}const b=s(d,[["render",v],["__file","overflow.html.vue"]]),S=JSON.parse('{"path":"/code/website/css/intro/overflow.html","title":"溢出","lang":"zh-CN","frontmatter":{"title":"溢出","icon":"overflow","date":"2019-09-06T00:00:00.000Z","order":6,"category":"CSS","description":"溢出是在盒子无法容纳下太多的内容的时候发生的。 概念 我们知道，CSS 中万物皆盒，因此我们可以通过给 width 和 height(或者 inline-size 和 block-size) 赋值的方式来约束盒子的尺寸。溢出是在您往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。CSS 给了您好几种工具来控制溢出。 CSS 尽可能...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/website/css/intro/overflow.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"溢出"}],["meta",{"property":"og:description","content":"溢出是在盒子无法容纳下太多的内容的时候发生的。 概念 我们知道，CSS 中万物皆盒，因此我们可以通过给 width 和 height(或者 inline-size 和 block-size) 赋值的方式来约束盒子的尺寸。溢出是在您往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。CSS 给了您好几种工具来控制溢出。 CSS 尽可能..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"溢出\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"CSS 尽可能不丢弃内容","slug":"css-尽可能不丢弃内容","link":"#css-尽可能不丢弃内容","children":[]},{"level":2,"title":"overflow 属性","slug":"overflow-属性","link":"#overflow-属性","children":[]},{"level":2,"title":"块级排版上下文","slug":"块级排版上下文","link":"#块级排版上下文","children":[]},{"level":2,"title":"网页设计时不需要的溢出","slug":"网页设计时不需要的溢出","link":"#网页设计时不需要的溢出","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":4.14,"words":1241},"filePathRelative":"code/website/css/intro/overflow.md","localizedDate":"2019年9月6日","excerpt":"","autoDesc":true}');export{b as comp,S as data};
