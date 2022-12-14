import{_ as l,W as c,X as o,a0 as t,a1 as e,Y as n,Z as s,a2 as p,E as u}from"./framework-8ee916d6.js";const i={},r=n("h2",{id:"原始尺寸与固有尺寸",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#原始尺寸与固有尺寸","aria-hidden":"true"},"#"),s(" 原始尺寸与固有尺寸")],-1),k=n("p",null,"在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。",-1),d=n("p",null,[s("一个空的 "),n("code",null,"<div>"),s(" 是没有尺寸的。如果您在您的 HTML 文件中添加一个空 "),n("code",null,"<div>"),s(" 并给予其边框，您会在页面上看到一条线。")],-1),m=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/assets/img/star.png"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("star"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"img"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("h2",{id:"设置具体的尺寸",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设置具体的尺寸","aria-hidden":"true"},"#"),s(" 设置具体的尺寸")],-1),g=n("p",null,[s("当给元素指定尺寸时，我们将其称为"),n("strong",null,"外部尺寸"),s("。 我们可以给它一个具体的 "),n("code",null,"width"),s(" 和 "),n("code",null,"height"),s(" 值, 不论它的内容是什么，它将都是该尺寸。")],-1),h=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    这两个盒子都设置了高度，但是这个盒子因为内容很多，无法装下，所以最终产生了溢出。unknowIfGuestInDream
    很帅! unknowIfGuestInDream 很帅! unknowIfGuestInDream 很帅! unknowIfGuestInDream 很帅! unknowIfGuestInDream 很帅! unknowIfGuestInDream 很帅!
    unknowIfGuestInDream 很帅! unknowIfGuestInDream 很帅! unknowIfGuestInDream 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".wrapper"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 150px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("h3",{id:"使用百分数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用百分数","aria-hidden":"true"},"#"),s(" 使用百分数")],-1),w=n("p",null,"当使用百分数时，您需要清楚，它是什么东西的百分数。对于一个处于另外一个容器当中的盒子，如果您给予了子盒子一个百分数作为宽度，那么它指的是父容器宽度的百分数。",-1),E=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("我是百分比长度"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 50%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=p('<p>百分数是以包含盒子的块为根据解析的。如果我们的 <code>&lt;div&gt;</code> 没有被指定百分数的值，那么它会占据 100%的可用空间，因为它是块级别的元素。如果我们给了它一个百分数作为宽度，那么这就是它原来情况下可以占据空间的百分数。</p><h3 id="把百分数作为内外边距" tabindex="-1"><a class="header-anchor" href="#把百分数作为内外边距" aria-hidden="true">#</a> 把百分数作为内外边距</h3><p>如果您把 <code>margin</code> 和 <code>padding</code> 设置为百分数的话，您会注意到一些奇怪的表现。</p><p>您也许会希望上下的外边距是元素高的一个百分数，左右外边距是元素宽的百分数。但是，情况不是这样的!</p><p>当您用百分数设定内外边距的时候，值是以<strong>内联尺寸</strong>进行计算的，也即对于左右书写的语言来说的宽度。在我们的例子里面，所有的内外边距是这一宽度的 10%，也就是说，您可以让盒子周围的内外边距大小相同。在您以这种方式使用百分数的时候，这是一个需要记住的事实。</p>',5),S=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("所有方向的 margin and padding 都是 10%"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h2",{id:"min-和-max",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#min-和-max","aria-hidden":"true"},"#"),s(),n("code",null,"min-"),s(" 和 "),n("code",null,"max-")],-1),C=n("p",null,"我们可以让 CSS 给定一个元素的最大或最小尺寸。",-1),M=n("p",null,[s("如果您有一个包含了变化容量的内容的盒子，而且您总是想让它至少有个确定的高度，您应该给它设置一个 "),n("code",null,"min-height"),s(" 属性。盒子就会一直保持大于这个最小高度，但是如果有比这个盒子在最小高度状态下所能容纳的更多内容，那么盒子就会变大。这在避免溢出的同时并处理变化容量的内容的时候是很有用的。")],-1),A=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    这两个盒子都设置了最小高度，但是这个盒子因为内容很多，无法装下，所以最终高度产生了扩大。Mr.Hope
    很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
    Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".wrapper"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 5px solid darkblue"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"min-height"),n("span",{class:"token punctuation"},":"),s(" 150px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("p",null,[n("code",null,"max-width"),s(" 的常见用法为，在没有足够空间以原有宽度展示图像时，让图像缩小，同时确保它们不会比这一宽度大。这个技术是用来让图片可响应的，所以在更小的设备上浏览的时候，它们会合适地缩放。")],-1),D=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/assets/img/star.png"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("star"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("width"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/assets/img/star.png"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("star"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("max"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("minibox"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/assets/img/star.png"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("star"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("max"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".wrapper"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".minibox"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".width"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".max"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("h2",{id:"viewpoint",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#viewpoint","aria-hidden":"true"},"#"),s(" viewpoint")],-1),H=n("p",null,"viewpoint，即您在浏览器中看到的部分页面，也是有尺寸的。在 CSS 中，我们有 viewpoint 宽度相关的 vw 单位，以及 viewpoint 高度相关的 vh 单位。",-1),K=n("p",null,"1vh 等于 viewpoint 高度的 1%，1vw 则为 viewpoint 宽度的 1%.您可以用这些单位约束盒子的大小，还有文字的大小。",-1),J=n("p",null,"如果您改变了 vh 和 vw 的对应值，盒子和字体的大小也会改变； viewpoint 大小的变化也会让它们的大小变化，因为它们是依照 viewpoint 来定大小的。",-1);function N(O,V){const a=u("CodeDemo");return c(),o("div",null,[r,k,d,t(a,{id:"code-demo-9",type:"normal",title:"%E6%A1%88%E4%BE%8B",code:"eJyNjEsOwjAMRK9ieY2aFZtSOIk3+alEpE5lB1Sp6t1xJQ7Act7MvB2ffak44lSWGVTindB51dzVGXHavQwrz4Tga7fyBBbcg3hK5QOx2tp4aNsP4wWjqilP404MEJqkLCNc1w201ZIgeXmF+s434oOYeLD7f1s8vhRnPRg="},{default:e(()=>[m,v]),_:1}),b,g,t(a,{id:"code-demo-19",type:"normal",title:"%E8%AE%BE%E7%BD%AE%E5%B0%BA%E5%AF%B8",code:"eJzFks9OwkAQxl9l3LMBNOFS/5xMlINv0Euhi20obbNbBENIiAbE6MEYjSgmEkVNNOLBSy2CD+NuCydfwS3Fg4kcDafNzPfbbyb5pow0J28gCS2r+jZkDIXSFRkViWLbmMhoVTYBfklpqyQjiE8Rxm2A4ccFczvMfQxaJ/z5eLTXH3YHQb/LvProqcm9+6/3I9av+82XMTnBeKvNXI/Xa7z7xgcN3rkUmH/e9l/Phrc15h6G5UGV9e78q2rQazDvITi9Fp6+d8P3vc/qbsHMmVYxlV0vYOqkzDWClXy0Uejn1ubgL2KWYrTdPw3eJLENy8bT6nGEcZGhSO3nRfMoQ6m4h9jkBqAcYqpObUPZkSBr4NKSbFZkUzZjIvJITltExUSCpF0Cahm6CqpCcmmjgAULoGF9S3MkWEgm7PA3QFFXHU2CxUTUEHao8g3LRCTR"},{default:e(()=>[h,x]),_:1}),_,w,t(a,{id:"code-demo-29",type:"normal",title:"%E4%BD%BF%E7%94%A8%E7%99%BE%E5%88%86%E6%95%B0",code:"eJyrVsooyc1RslKyScksU0jOSSwuto1RSsqviFGye9Yx8dmM9c9n7nva0fZs/ZSXU/c/3bXMRh+o0C4mT0lHKbm4GKhRD6hYoTomT0EhKb8oJbXISsG0oEKhOD8nM0UhJbEoOymnNNUaJF2emVKSAZQ1UAVya4Em1AIA0o8xJQ=="},{default:e(()=>[E,y]),_:1}),B,t(a,{id:"code-demo-48",type:"normal",title:"%E8%BE%B9%E8%B7%9D",code:"eJyrVsooyc1RslKyScksU0jOSSwuto1RSsqviFGye9bZ8GxO57NpO59OmPh8VotCbmJRemaeQmJeikJBYkpKZl66wsvmvc9mrFcwNFC10QcaYBeTp6SjlFxcDDRQD2iIQnVMnoJCUn5RSmqRlYJpQYVCcX5OZopCSmJRdlJOaao1SLo8M6Ukw0rB2MCgoAIsALHHCmQqmA+1DCZQC7SkFgDVwkLr"},{default:e(()=>[S,f]),_:1}),q,C,M,t(a,{id:"code-demo-61",type:"normal",title:"%E6%9C%80%E5%A4%A7%E6%9C%80%E5%B0%8F%E5%B0%BA%E5%AF%B8",code:"eJytkcFKw0AURX/lOWttq9BNrK7d+AezSZtogmkSkmorpVCUhBYFRRSrFSwYLSpGwU1MTf0YZ5J05S84aeLChRvpanj33jk87msiqVZVEIdKgrwDFYU3zRWM6gav66KB0SpWAX5ZZa2BEeT/MKYyQPxxQTyHeA9R/4Q+HU/2g9gdR4FLfDu8atOXo8ljj/p3X++HJLDD3vM0n4Vpf0A8n9oWdd/ouEOdSxYLzwfh61l8YxHvIBm7bTK6Zaho1ElRxB9Gp9cJv3tPneFne2/dyK1pupgulIA8aw4ycVZzCv/Hp1KeVcfK+nnRPKqYJjtDLqsemklMkE1d4Xc52FDExjJWW1jFao41ndplzRBEg4Oi3gBTU2QBBN7YKivbIssCVGV1QRLlTanGwWKxoCcEgLos1CQOlgqpwJCo9Q0ig+7c"},{default:e(()=>[A,F]),_:1}),I,t(a,{id:"code-demo-68",type:"normal",title:"%E6%9C%80%E5%A4%A7%E5%AE%BD%E5%BA%A6%E4%B8%8E%E5%9B%BE%E5%83%8F",code:"eJy1kE0OgjAQha/STOJOKZq4wZ+TdFMBoUlbm06jGMLdHaCKxMQdq3be9+bNZFqog9GQwbFQd5ZriXgS8PDSudILOAvL2Axdbk2UCShTMfQ5yZxoGZCTwjFInzhbCWBSB4K9QMUnXRWhppqP6ZziF5ljJEX8n2KUVQtNer+whhyRLpzEq7K2txUKnZbPjF112RyE7YQVNqFdRjzcKGO7NHUTjdvOHPtvw6DN8DZNV1O/jL302fwYoHsBrtytvA=="},{default:e(()=>[D,Q]),_:1}),R,H,K,J])}const U=l(i,[["render",N],["__file","sizing.html.vue"]]);export{U as default};
