import{_ as o,X as l,Y as p,a1 as t,a2 as e,a3 as c,Z as n,$ as s,H as i}from"./framework-56fac175.js";const u={},r=c('<h2 id="替换元素" tabindex="-1"><a class="header-anchor" href="#替换元素" aria-hidden="true">#</a> 替换元素</h2><p>图像和视频被描述为替换元素。 这意味着 CSS 不能影响这些元素的内部布局，仅影响它们在页面上于其他元素中的位置。</p><div class="hint-container info"><p class="hint-container-title">可替换元素</p><p>在 CSS 中，可替换元素(replaced element)的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。</p><p>简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 <code>&lt;iframe&gt;</code> 元素，可能具有自己的样式表，但它们不会继承父文档的样式。</p><p>CSS 能对可替换元素产生的唯一影响在于，部分属性支持控制元素内容在其框中的位置或定位方式。</p></div><p>某些替换元素(例如图像和视频)也被描述为具有宽高比。这意味着它在水平(x)和垂直(y)尺寸上均具有大小，并且默认情况下将使用文件的固有尺寸进行显示。</p><h2 id="调整图像大小" tabindex="-1"><a class="header-anchor" href="#调整图像大小" aria-hidden="true">#</a> 调整图像大小</h2><p>一个常用的技术是将一张图片的 <code>max-width</code> 设为 100%。这将会允许图片尺寸上小于但不大于盒子。这个技术也会对其他替换元素(例如 <code>&lt;video&gt;</code>，或者 <code>&lt;iframe&gt;</code>)起作用。</p><p>为了把一张图像调整到能够完全盖住一个盒子的大小，您可以使用 <code>object-fit</code> 属性。使用 <code>object-fit</code> 时，替换元素可以以多种方式被调整到合乎盒子的大小。</p><ul><li><code>cover</code> 会缩小图像，维持图像的比例。图像可以整齐地充满盒子，同时由于比例保持不变，图像的一部分将会被盒子裁切掉。</li><li><code>contain</code> 会缩放图片到足以放到盒子里面的大小。如果它和盒子的比例不同，会在某侧留白。</li><li><code>fill</code> 可以让图像充满盒子，但是不会维持比例。</li></ul>',8),d=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/assets/img/balloons.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("balloons"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cover"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/assets/img/balloons.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("balloons"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("contain"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"img"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".cover"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"object-fit"),n("span",{class:"token punctuation"},":"),s(" cover"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".contain"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"object-fit"),n("span",{class:"token punctuation"},":"),s(" contain"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("h2",{id:"布局中的替换元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#布局中的替换元素","aria-hidden":"true"},"#"),s(" 布局中的替换元素")],-1),v=n("p",null,"替换元素使用各式 CSS 布局技巧时，他们的展现略微与其他元素不同。",-1),b=n("p",null,"在一个 flex 或者 grid 布局中，元素默认会把拉伸到充满整块区域。图像不会拉伸，而是会被对齐到网格区域或者弹性容器的起始处。",-1),h=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/assets/img/star.png"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("star"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".wrapper"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" grid"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"grid-template-columns"),n("span",{class:"token punctuation"},":"),s(" 1fr 1fr"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"grid-template-rows"),n("span",{class:"token punctuation"},":"),s(" 200px 200px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"gap"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".wrapper > div"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" rebeccapurple"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 0.5em"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=c(`<h2 id="form-元素" tabindex="-1"><a class="header-anchor" href="#form-元素" aria-hidden="true">#</a> form 元素</h2><h3 id="表单元素的继承" tabindex="-1"><a class="header-anchor" href="#表单元素的继承" aria-hidden="true">#</a> 表单元素的继承</h3><p>在一些浏览器中，表单元素默认不会继承字体样式，因此如果您想要确保您的表单填入区域使用 body 中或者一个父元素中定义的字体，您需要向您的 CSS 中加入这条规则。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">button,
input,
select,
textarea</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="form-的-box-sizing" tabindex="-1"><a class="header-anchor" href="#form-的-box-sizing" aria-hidden="true">#</a> form 的 box-sizing</h3><p>form 元素可能会针对不同元素使用不同的盒子约束规则。</p><p>为了保证统一，将所有元素的内外边距均设为 0 是个好主意，然后在单独进行样式化控制的时候将这些加回来。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">button,
input,
select,
textarea</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他有用的设置" tabindex="-1"><a class="header-anchor" href="#其他有用的设置" aria-hidden="true">#</a> 其他有用的设置</h3><p>除了上面提到的规则以外，您也应该在 <code>&lt;textarea&gt;</code> 上设置 <code>overflow: auto</code> 以避免 IE 在不需要滚动条的时候显示滚动条:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">textarea</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function f(y,_){const a=i("CodeDemo");return l(),p("div",null,[r,t(a,{id:"code-demo-46",type:"normal",title:"%E8%B0%83%E6%95%B4%E5%9B%BE%E5%83%8F%E5%A4%A7%E5%B0%8F",code:"eJy1kEsOgyAURbdCXtJZK7bD/lbCBNEqBoEIURPj3vtATNu0044I557HBWZofKfgDNdSDkQo7tyNwdhza6uewZ1pQj6iwkwJYyC7mrheIKaYVt5RJLTgShmjXdbamgHhyoe5BBFsRwkzhA5C1xaKNX/u055L/dW4rbAH4Rz+RYalZA7KKEvfnMkpz+10CaCpZN34F1mYZjpcK+pbeszzXdTTfNpHOYvPXn1TtJXwh4fEmYjfpHjXX1oMVhGWJ0JzlYs="},{default:e(()=>[d,k]),_:1}),m,v,t(a,{id:"code-demo-56",type:"normal",title:"%E5%B8%83%E5%B1%80%E4%B8%AD%E7%9A%84%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0",code:"eJx1jc1uwyAQhF8Fca6NW6kX182TcMGwdVH50y5OWkV59y4hyik5ALszw3xn+V1jkLNcnD8KGwzRp5YnNKUAannQSYjFx00QWjYU+1BJsaKoGhxL2rQUJlQ2m8CL6p9a3/NxUTzxK1+kJWL+eGOKc8s5TyWYv1ls6N1HU9owVIgsVxhsDntMNIvXL2znQQTzif23aSq//e4ZU5p43S466XTnHhh67PTV2J8N855cA2WcBcIK1pqyYwlwLVozOsABjfM7c6bxHWLvlJd/QBZyaQ=="},{default:e(()=>[b,h,g]),_:1}),x])}const B=o(u,[["render",f],["__file","replaced.html.vue"]]);export{B as default};
