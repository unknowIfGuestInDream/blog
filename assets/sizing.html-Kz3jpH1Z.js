import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as l,c as p,d as t,w as e,a as n,e as a,f as u}from"./app--7H4MSuP.js";const i={},k=n("h2",{id:"原始尺寸与固有尺寸",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#原始尺寸与固有尺寸"},[n("span",null,"原始尺寸与固有尺寸")])],-1),r=n("p",null,"在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。",-1),d=n("p",null,[a("一个空的 "),n("code",null,"<div>"),a(" 是没有尺寸的。如果您在您的 HTML 文件中添加一个空 "),n("code",null,"<div>"),a(" 并给予其边框，您会在页面上看到一条线。")],-1),m=n("div",{class:"language-html","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("/assets/img/star.png"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("star"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`)])])],-1),g=n("div",{class:"language-css","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"img"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".box"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),h=n("h2",{id:"设置具体的尺寸",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设置具体的尺寸"},[n("span",null,"设置具体的尺寸")])],-1),v=n("p",null,[a("当给元素指定尺寸时，我们将其称为"),n("strong",null,"外部尺寸"),a("。 我们可以给它一个具体的 "),n("code",null,"width"),a(" 和 "),n("code",null,"height"),a(" 值, 不论它的内容是什么，它将都是该尺寸。")],-1),b=n("div",{class:"language-html","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    这两个盒子都设置了高度，但是这个盒子因为内容很多，无法装下，所以最终产生了溢出。Mr.Hope
    很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
    Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),x=n("div",{class:"language-css","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".wrapper"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".box"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 150px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),y=n("h3",{id:"使用百分数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用百分数"},[n("span",null,"使用百分数")])],-1),_=n("p",null,"当使用百分数时，您需要清楚，它是什么东西的百分数。对于一个处于另外一个容器当中的盒子，如果您给予了子盒子一个百分数作为宽度，那么它指的是父容器宽度的百分数。",-1),w=n("div",{class:"language-html","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("我是百分比长度"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),E=n("div",{class:"language-css","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".box"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 50%"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),B=u('<p>百分数是以包含盒子的块为根据解析的。如果我们的 <code>&lt;div&gt;</code> 没有被指定百分数的值，那么它会占据 100%的可用空间，因为它是块级别的元素。如果我们给了它一个百分数作为宽度，那么这就是它原来情况下可以占据空间的百分数。</p><h3 id="把百分数作为内外边距" tabindex="-1"><a class="header-anchor" href="#把百分数作为内外边距"><span>把百分数作为内外边距</span></a></h3><p>如果您把 <code>margin</code> 和 <code>padding</code> 设置为百分数的话，您会注意到一些奇怪的表现。</p><p>您也许会希望上下的外边距是元素高的一个百分数，左右外边距是元素宽的百分数。但是，情况不是这样的!</p><p>当您用百分数设定内外边距的时候，值是以<strong>内联尺寸</strong>进行计算的，也即对于左右书写的语言来说的宽度。在我们的例子里面，所有的内外边距是这一宽度的 10%，也就是说，您可以让盒子周围的内外边距大小相同。在您以这种方式使用百分数的时候，这是一个需要记住的事实。</p>',5),S=n("div",{class:"language-html","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("所有方向的 margin and padding 都是 10%"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),M=n("div",{class:"language-css","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".box"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 10%"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 10%"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),q=n("h2",{id:"min-和-max",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#min-和-max"},[n("span",null,[n("code",null,"min-"),a(" 和 "),n("code",null,"max-")])])],-1),f=n("p",null,"我们可以让 CSS 给定一个元素的最大或最小尺寸。",-1),A=n("p",null,[a("如果您有一个包含了变化容量的内容的盒子，而且您总是想让它至少有个确定的高度，您应该给它设置一个 "),n("code",null,"min-height"),a(" 属性。盒子就会一直保持大于这个最小高度，但是如果有比这个盒子在最小高度状态下所能容纳的更多内容，那么盒子就会变大。这在避免溢出的同时并处理变化容量的内容的时候是很有用的。")],-1),C=n("div",{class:"language-html","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    这两个盒子都设置了最小高度，但是这个盒子因为内容很多，无法装下，所以最终高度产生了扩大。Mr.Hope
    很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
    Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),H=n("div",{class:"language-css","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".wrapper"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".box"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"min-height"),n("span",{class:"token punctuation"},":"),a(" 150px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),T=n("p",null,[n("code",null,"max-width"),a(" 的常见用法为，在没有足够空间以原有宽度展示图像时，让图像缩小，同时确保它们不会比这一宽度大。这个技术是用来让图片可响应的，所以在更小的设备上浏览的时候，它们会合适地缩放。")],-1),O=n("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("/assets/img/star.png"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("star"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("width"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("/assets/img/star.png"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("star"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("max"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minibox"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("/assets/img/star.png"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("star"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("max"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".wrapper"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".box"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".minibox"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 50px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".width"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".max"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),a(" 100%"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("h2",{id:"viewpoint",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#viewpoint"},[n("span",null,"viewpoint")])],-1),F=n("p",null,"viewpoint，即您在浏览器中看到的部分页面，也是有尺寸的。在 CSS 中，我们有 viewpoint 宽度相关的 vw 单位，以及 viewpoint 高度相关的 vh 单位。",-1),Z=n("p",null,"1vh 等于 viewpoint 高度的 1%，1vw 则为 viewpoint 宽度的 1%.您可以用这些单位约束盒子的大小，还有文字的大小。",-1),K=n("p",null,"如果您改变了 vh 和 vw 的对应值，盒子和字体的大小也会改变； viewpoint 大小的变化也会让它们的大小变化，因为它们是依照 viewpoint 来定大小的。",-1);function Q(D,V){const s=c("CodeDemo");return l(),p("div",null,[k,r,d,t(s,{id:"code-demo-9",type:"normal",title:"%E6%A1%88%E4%BE%8B",code:"eJyNjEsOwjAMRK9ieY2aFZtSOIk3+alEpE5lB1Sp6t1xJQ7Act7MvB2ffak44lSWGVTindB51dzVGXHavQwrz4Tga7fyBBbcg3hK5QOx2tp4aNsP4wWjqilP404MEJqkLCNc1w201ZIgeXmF+s434oOYeLD7f1s8vhRnPRg="},{default:e(()=>[m,g]),_:1}),h,v,t(s,{id:"code-demo-19",type:"normal",title:"%E8%AE%BE%E7%BD%AE%E5%B0%BA%E5%AF%B8",code:"eJy1kbFOg1AUhl/leGfTVpMuWJ1dfIO7QEEhIhBAi2maEA1Yo4MxGqs1sdGqiUYcXJBKfRjvBTr5Cl4KDg5uOt2c///vl5P/tJFsb6iIQw1R2YKmylvWIkYtkzcMycRoCWsAPyxBdzCC6i/GVAbI3s9JOCThQ9o/pk9Hk904C8ZpHJDInzz2aHT3+XZIYj/pPU+TZYz2BySMqO/R4JWOu3R4wWLJ2SB5Oc1uPBIe5OO+S0a3yaWbjrokuk9Prhgzia7pXvTh7qyYlWXdkIolckTozUAp/tVcwP8B2qiyOlmB3y+aRU3LYqeplOeAdh4TFctQ+W0OVlXJWcBaB2tYq7D2C1vQTVEyOagbDli6qogg8ua6oG5KLAsgS8qabHMwV68Z+W+AliLaMgfztUJgONT5Aoq180I="},{default:e(()=>[b,x]),_:1}),y,_,t(s,{id:"code-demo-29",type:"normal",title:"%E4%BD%BF%E7%94%A8%E7%99%BE%E5%88%86%E6%95%B0",code:"eJyrVsooyc1RslKyScksU0jOSSwuto1RSsqviFGye9Yx8dmM9c9n7nva0fZs/ZSXU/c/3bXMRh+o0C4mT0lHKbm4GKhRD6hYoTomT0EhKb8oJbXISsG0oEKhOD8nM0UhJbEoOymnNNUaJF2emVKSAZQ1UAVya4Em1AIA0o8xJQ=="},{default:e(()=>[w,E]),_:1}),B,t(s,{id:"code-demo-48",type:"normal",title:"%E8%BE%B9%E8%B7%9D",code:"eJyrVsooyc1RslKyScksU0jOSSwuto1RSsqviFGye9bZ8GxO57NpO59OmPh8VotCbmJRemaeQmJeikJBYkpKZl66wsvmvc9mrFcwNFC10QcaYBeTp6SjlFxcDDRQD2iIQnVMnoJCUn5RSmqRlYJpQYVCcX5OZopCSmJRdlJOaao1SLo8M6Ukw0rB2MCgoAIsALHHCmQqmA+1DCZQC7SkFgDVwkLr"},{default:e(()=>[S,M]),_:1}),q,f,A,t(s,{id:"code-demo-61",type:"normal",title:"%E6%9C%80%E5%A4%A7%E6%9C%80%E5%B0%8F%E5%B0%BA%E5%AF%B8",code:"eJytkcFKw0AURX/lOWttq9BNrK7d+AezSZtogmkSkmorpVCUhBYFRRSrFSwYLSpGwU1MTf0YZ5J05S84aeLChRvpanj33jk87msiqVZVEIdKgrwDFYU3zRWM6gav66KB0SpWAX5ZZa2BEeT/MKYyQPxxQTyHeA9R/4Q+HU/2g9gdR4FLfDu8atOXo8ljj/p3X++HJLDD3vM0n4Vpf0A8n9oWdd/ouEOdSxYLzwfh61l8YxHvIBm7bTK6Zaho1ElRxB9Gp9cJv3tPneFne2/dyK1pupgulIA8aw4ycVZzCv/Hp1KeVcfK+nnRPKqYJjtDLqsemklMkE1d4Xc52FDExjJWW1jFao41ndplzRBEg4Oi3gBTU2QBBN7YKivbIssCVGV1QRLlTanGwWKxoCcEgLos1CQOlgqpwJCo9Q0ig+7c"},{default:e(()=>[C,H]),_:1}),T,t(s,{id:"code-demo-68",type:"normal",title:"%E6%9C%80%E5%A4%A7%E5%AE%BD%E5%BA%A6%E4%B8%8E%E5%9B%BE%E5%83%8F",code:"eJy1kE0OgjAQha/STOJOKZq4wZ+TdFMBoUlbm06jGMLdHaCKxMQdq3be9+bNZFqog9GQwbFQd5ZriXgS8PDSudILOAvL2Axdbk2UCShTMfQ5yZxoGZCTwjFInzhbCWBSB4K9QMUnXRWhppqP6ZziF5ljJEX8n2KUVQtNer+whhyRLpzEq7K2txUKnZbPjF112RyE7YQVNqFdRjzcKGO7NHUTjdvOHPtvw6DN8DZNV1O/jL302fwYoHsBrtytvA=="},{default:e(()=>[O,J]),_:1}),R,F,Z,K])}const Y=o(i,[["render",Q],["__file","sizing.html.vue"]]),j=JSON.parse('{"path":"/code/website/css/intro/sizing.html","title":"调整大小","lang":"zh-CN","frontmatter":{"title":"调整大小","icon":"resize","date":"2019-09-06T00:00:00.000Z","order":8,"category":"CSS","description":"原始尺寸与固有尺寸 在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。 一个空的 <div> 是没有尺寸的。如果您在您的 HTML 文件中添加一个空 <div> 并给予其边框，您会在页面上看到一条线。 设置具体的尺寸 当给元素指定尺寸时，我们将其称为外部尺寸。...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/website/css/intro/sizing.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"调整大小"}],["meta",{"property":"og:description","content":"原始尺寸与固有尺寸 在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。 一个空的 <div> 是没有尺寸的。如果您在您的 HTML 文件中添加一个空 <div> 并给予其边框，您会在页面上看到一条线。 设置具体的尺寸 当给元素指定尺寸时，我们将其称为外部尺寸。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调整大小\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"原始尺寸与固有尺寸","slug":"原始尺寸与固有尺寸","link":"#原始尺寸与固有尺寸","children":[]},{"level":2,"title":"设置具体的尺寸","slug":"设置具体的尺寸","link":"#设置具体的尺寸","children":[{"level":3,"title":"使用百分数","slug":"使用百分数","link":"#使用百分数","children":[]},{"level":3,"title":"把百分数作为内外边距","slug":"把百分数作为内外边距","link":"#把百分数作为内外边距","children":[]}]},{"level":2,"title":"min- 和 max-","slug":"min-和-max","link":"#min-和-max","children":[]},{"level":2,"title":"viewpoint","slug":"viewpoint","link":"#viewpoint","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":4.24,"words":1272},"filePathRelative":"code/website/css/intro/sizing.md","localizedDate":"2019年9月6日","excerpt":"","autoDesc":true}');export{Y as comp,j as data};
