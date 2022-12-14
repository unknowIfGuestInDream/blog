import{_ as i}from"./box-model-b61d08da.js";import{_ as p,W as d,X as r,$ as u,a0 as a,a1 as t,Y as n,Z as s,a2 as e,E as l}from"./framework-8ee916d6.js";const k={},b=n("p",null,"在 CSS 中，所有的元素都被一个个的“盒子(box)”包围着。",-1),m=e('<h2 id="块级与内联" tabindex="-1"><a class="header-anchor" href="#块级与内联" aria-hidden="true">#</a> 块级与内联</h2><p>在 CSS 中我们广泛地使用两种“盒子” —— 块级盒子 (block box) 和 内联盒子 (inline box)。这两种盒子会在页面流(page flow)和元素之间的关系方面表现出不同的行为:</p><p>一个被定义成块级的(block)盒子会表现出以下行为:</p><ul><li>盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽</li><li>每个盒子都会换行</li><li><code>width</code> 和 <code>height</code> 属性可以发挥作用</li><li>内边距 (padding), 外边距 (margin) 和边框 (border) 会将其他元素从当前盒子周围“推开”</li></ul><p>除非特殊指定，诸如标题 (<code>&lt;h1&gt;</code> 等) 和段落 (<code>&lt;p&gt;</code>) 默认情况下都是块级的盒子。</p><p>如果一个盒子对外显示为 <code>inline</code>，那么他的行为如下:</p><ul><li>盒子不会产生换行。</li><li><code>width</code> 和 <code>height</code> 属性将不起作用。</li><li>垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 <code>inline</code> 状态的盒子推开。</li><li>水平方向的内边距、外边距以及边框会被应用而且也会把其他处于 <code>inline</code> 状态的盒子推开。</li></ul><p>用做链接的 <code>&lt;a&gt;</code> 元素、 <code>&lt;span&gt;</code>、 <code>&lt;em&gt;</code> 以及 <code>&lt;strong&gt;</code> 都是默认处于 <code>inline</code> 状态的。</p><p>我们通过对盒子 <code>display</code> 属性的设置，比如 <code>inline</code> 或者 <code>block</code> ，来控制盒子的外部显示类型。</p><div class="custom-container info"><p class="custom-container-title">関連情報</p><p>显示类型分为 <strong>内部</strong> 和 <strong>外部</strong> 显示类型。如上所述， CSS 的 box 模型有一个外部显示类型，来决定盒子是块级还是内联。</p><p>同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的。默认情况下是按照正常文档流布局，也意味着它们和其他块元素以及内联元素一样(如上所述).</p><p>但是，我们可以通过使用类似 <code>flex</code> 的 <code>display</code> 属性值来更改内部显示类型。如果设置 <code>display: flex</code>，在一个元素上，外部显示类型是 <code>block</code>，但是内部显示类型修改为 <code>flex</code>。该盒子的所有直接子元素都会成为 <code>flex</code> 元素，会根据 弹性盒子(Flexbox )规则进行布局。同样，我们也可以设置诸如 <code>inline-block</code> <code>inline-flex</code> 这种混合显示类型。</p><p>块级和内联布局是 web 上默认的行为，它被称为正常文档流， 因为如果没有其他说明，我们的盒子布局默认是块级或者内联。</p></div><h2 id="盒模型介绍" tabindex="-1"><a class="header-anchor" href="#盒模型介绍" aria-hidden="true">#</a> 盒模型介绍</h2><p>所有 HTML 元素可以看作盒子，在 CSS 中，&quot;<strong>Box Model</strong>&quot; 这一术语是用来设计和布局时使用。</p><p>CSS 盒模型定义了封装 HTML 元素的方式，它包括: 外边距，边框，内边距，和实际内容。</p><p>完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。</p><p>下面的图片说明了盒子模型 (Box Model):</p><p><img src="'+i+`" alt="Box Model 示意图" loading="lazy"></p><p>不同部分的说明:</p><ul><li>Content box (内容) - 盒子的内容，显示文本和图像，可以通过 <code>width</code> 和 <code>height</code> 设置大小。</li><li>Padding box (内边距) - 包围在内容区域外部的空白区域，通过 <code>padding</code> 属性设置。</li><li>Border box (边框) - 围绕在填充和内容外的边框，通过 <code>border</code> 属性设置。</li><li>Margin box (外边距) - 这是最外面的区域，是盒子和其他元素之间的空白区域，通过 <code>margin</code> 属性设置。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 25px solid green<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了正确设置元素在所有浏览器中的宽度和高度，您需要知道的盒模型是如何工作的。</p><div class="custom-container tip"><p class="custom-container-title">ヒント</p><p><code>padding</code> 和 <code>margin</code> 直译为 “填充” 和 “边距”，有些教程也会这么叫。</p><p>所以您需要清楚 “填充” 和 “内边距”、“边距” 和 “外边距” 说的是一回事。</p></div><h3 id="标准盒模型" tabindex="-1"><a class="header-anchor" href="#标准盒模型" aria-hidden="true">#</a> 标准盒模型</h3><p>当您指定一个 CSS 元素的宽度和高度属性时，您只是设置内容区域(content box)的宽度和高度。<code>padding</code> 和 <code>border</code> 再加上设置的宽高一起决定整个盒子的大小。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>margin 不计入实际大小，但它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到 margin。</p></div>`,24),h=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 25px solid green"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 25px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 25px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("p",null,"元素盒子的大小为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) = 400px",-1),x=n("p",null,"元素占据的空间为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px",-1),_=n("p",null,"试想一下，您只有 250px 的空间。让我们设置总宽度为 250px 的元素:",-1),f=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 220px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 5px solid gray"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=e(`<p>最终元素的总宽度计算公式是这样的:</p><p>元素的宽度 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 元素占据的水平空间 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距</p><p>元素的总高度最终计算公式是这样的:</p><p>元素的高度 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 元素占据的垂直空间 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 + 上边距 + 下边距</p><h3 id="替代-ie-盒模型" tabindex="-1"><a class="header-anchor" href="#替代-ie-盒模型" aria-hidden="true">#</a> 替代(IE)盒模型</h3><p>您可能会认为盒子的大小还要加上边框和内边距，这样很麻烦，而且您的想法是对的! 因为这个原因，CSS 还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width = 350px, height = 150px).</p><p>默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 <code>box-sizing: border-box</code> 来实现。这样就可以告诉浏览器使用 <code>border-box</code> 来定义区域，从而设定您想要的大小。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您希望所有元素都使用替代模式，而且确实很常用，设置 <code>box-sizing</code> 在 <code>&lt;html&gt;</code> 元素上，然后设置所有元素继承该属性。这是一个很有用的小技巧:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*,
*::before,
*::after</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用调试工具来查看盒模型" tabindex="-1"><a class="header-anchor" href="#使用调试工具来查看盒模型" aria-hidden="true">#</a> 使用调试工具来查看盒模型</h3><p>浏览器开发者工具 可以使您更容易地理解 box 模型。您可以看到元素的大小以及它的外边距、内边距和边框。这是一个很好的检查元素大小的方式，可以便捷的判断您的盒子大小是否符合预期。</p>`,12),S={class:"custom-container info"},w=n("p",{class:"custom-container-title"},"関連情報",-1),B={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box_model",target:"_blank",rel:"noopener noreferrer"},C=e('<h2 id="控制盒模型" tabindex="-1"><a class="header-anchor" href="#控制盒模型" aria-hidden="true">#</a> 控制盒模型</h2><p><code>margin</code>、<code>padding</code> 和 <code>border</code> 是属性的简写，允许我们一次设置盒子的四个边。这些简写等价于分别控制盒子的不同边的普通写法。</p><h3 id="外边距" tabindex="-1"><a class="header-anchor" href="#外边距" aria-hidden="true">#</a> 外边距</h3><p>外边距是盒子周围一圈看不到的空间。它会把其他元素从盒子旁边推开。外边距属性值可以为正也可以为负。设置负值会导致和其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。</p><p>我们可以使用 <code>margin</code> 属性一次控制一个元素的所有边距，或者每边单独使用等价的普通属性控制:</p><ul><li><code>margin-top</code></li><li><code>margin-right</code></li><li><code>margin-bottom</code></li><li><code>margin-left</code></li></ul><h4 id="外边距折叠" tabindex="-1"><a class="header-anchor" href="#外边距折叠" aria-hidden="true">#</a> 外边距折叠</h4><p>如果您有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。</p>',8),A=n("p",null,[s("我们有两个段落。顶部段落 "),n("code",null,"margin-bottom"),s(" 为 "),n("code",null,"50px"),s("。第二段的 "),n("code",null,"margin-top"),s(" 为 "),n("code",null,"30px"),s("。因为外边距折叠的概念，所以框之间的实际外边距是 "),n("code",null,"50px"),s("，而不是两个外边距的总和。")],-1),z=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("one"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("I am paragraph one."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("two"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("I am paragraph two."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".one"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".two"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q={class:"custom-container info"},D=n("p",{class:"custom-container-title"},"外边距重叠",-1),H={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"noopener noreferrer"},N=e('<h3 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h3><p>边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。</p><p>为边框设置样式时，有大量的属性可以使用。由于有四个边框，每个边框都有样式、宽度和颜色，我们可能需要对它们进行操作。</p><p>可以使用 <code>border</code> 属性一次设置所有四个边框的宽度、颜色和样式。</p><p>分别设置每边的宽度、颜色和样式，可以使用:</p><ul><li><code>border-top</code></li><li><code>border-right</code></li><li><code>border-bottom</code></li><li><code>border-left</code></li></ul><p>设置所有边的颜色、样式或宽度，请使用以下属性:</p><ul><li><code>border-width</code></li><li><code>border-style</code></li><li><code>border-color</code></li></ul><p>设置单边的颜色、样式或宽度，可以使用最细粒度的普通属性之一:</p><ul><li><code>border-top-width</code></li><li><code>border-top-style</code></li><li><code>border-top-color</code></li><li><code>border-right-width</code></li><li><code>border-right-style</code></li><li><code>border-right-color</code></li><li><code>border-bottom-width</code></li><li><code>border-bottom-style</code></li><li><code>border-bottom-color</code></li><li><code>border-left-width</code></li><li><code>border-left-style</code></li><li><code>border-left-color</code></li></ul><p>设置边框的颜色、样式或宽度，可以使用最细粒度的普通属性或者简写属性。</p>',11),Q=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Change my borders."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-top"),n("span",{class:"token punctuation"},":"),s(" 5px dotted green"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-right"),n("span",{class:"token punctuation"},":"),s(" 1px solid black"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),s(" 20px double "),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("23"),n("span",{class:"token punctuation"},","),s(" 45"),n("span",{class:"token punctuation"},","),s(" 145"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #333333"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-top-style"),n("span",{class:"token punctuation"},":"),s(" dotted"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-right-width"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-bottom-color"),n("span",{class:"token punctuation"},":"),s(" hotpink"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=e('<h3 id="内边距" tabindex="-1"><a class="header-anchor" href="#内边距" aria-hidden="true">#</a> 内边距</h3><p>内边距位于边框和内容区域之间。与外边距不同，您不能有负数量的内边距，所以值必须是 0 或正的值。应用于元素的任何背景都将显示在内边距后面，内边距通常用于将内容推离边框。</p><p>同 <code>margin</code>，我们可以使用 <code>padding</code> 简写属性控制元素所有边，或者每边单独使用等价的普通属性:</p><ul><li><code>padding-top</code></li><li><code>padding-right</code></li><li><code>padding-bottom</code></li><li><code>padding-left</code></li></ul><h2 id="inline-block" tabindex="-1"><a class="header-anchor" href="#inline-block" aria-hidden="true">#</a> inline-block</h2><p><code>display</code> 有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用: 您不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。</p><p>一个元素使用 <code>display: inline-block</code>，实现我们需要的块级的部分效果:</p><ul><li>设置 <code>width</code> 和 <code>height</code> 属性会生效。</li><li><code>padding</code>, <code>margin</code>, 以及 <code>border</code> 会推开其他元素。</li></ul><p>但是，它不会跳转到新行，如果显式添加 <code>width</code> 和 <code>height</code> 属性，它只会变得比其内容更大。</p><div class="custom-container tip"><p class="custom-container-title">ヒント</p><p>当您想要通过添加内边距使链接具有更大的命中区域时，这是很有用的。</p><p>比如 <code>&lt;a&gt;</code> 是像 <code>&lt;span&gt;</code> 一样的内联元素；您可以使用 <code>display: inline-block</code> 来设置内边距，让用户更容易点击链接。</p></div>',10);function J(K,V){const o=l("CodeDemo"),c=l("ExternalLinkIcon");return d(),r("div",null,[b,u(" more "),m,a(o,{id:"code-demo-149",type:"normal",title:"%E5%85%83%E7%B4%A0%E7%9A%84%E5%AE%BD%E5%BA%A6%E4%B8%8E%E9%AB%98%E5%BA%A6",code:"eJw9zT0KwzAMQOGrCM2lDS1d3J+TeHEi4wgc2VihNYTcvW4CWd83vAXHeYpo8En8gSE61ZfFPlWLcHlbwRMOqs0bn1uGxQrAl2keDdy6LtfHP/SpkC8GrvdcQVNkglC8lw2zI2IJu25lciWwHGFtn/UHBzcs3g=="},{default:t(()=>[h,g]),_:1}),v,x,_,a(o,{id:"code-demo-162",type:"normal",title:"%E6%80%BB%E5%AE%BD%E5%BA%A6%20250px%20%E7%9A%84%E5%85%83%E7%B4%A0",code:"eJw1zcsKwjAQheFXOcxatBbcxMuTZJN2JA2kScgUjZS+u6PQ5fm/xVlpWuZIhm4cXhijE7lbGnKzhNPDJjrQKKKufNSM1SbgHXiZDPq+K+36C8Uxh+QNznsZcuVnNbiUBskxMHx1nz/NrvqQDDpdm15sXyROKyo="},{default:t(()=>[f,y]),_:1}),E,n("div",S,[w,n("p",null,[s("更多盒模型相关内容可见 "),n("a",B,[s("MDN"),a(c)])])]),C,a(o,{id:"code-demo-246",type:"normal",title:"%E5%A4%96%E8%BE%B9%E8%B7%9D%E6%8A%98%E5%8F%A0%E6%A1%88%E4%BE%8B",code:"eJxljsEKwjAMQH8l5KydIF5q9e4/9BLr2AprWtqgwti/G0EG6inw8njJjKOkCS26W7xDmKi1k8eQWShyXz2ePQO4sq4y9wovQAkKVRoqlREUGteVX1ce+d9V+HFdpzd14gZDa/qD0Q7M70iiOkTeXrNIThYOu/I8el48ezYa+JIkFwv71cDlBWbHRyo="},{default:t(()=>[A,z,M]),_:1}),n("div",q,[D,n("p",null,[s("有许多规则规定了什么时候外边距会折叠，什么时候不会折叠。相关更多信息，请参阅 "),n("a",H,[s("外边距重叠"),a(c)]),s("。初学时您需要首先记住外边距会折叠，如果您用外边距创建空间而没有得到您想要的效果，请参阅上方链接寻找原因。")])]),N,a(o,{id:"code-demo-383",type:"normal",title:"%E8%BE%B9%E6%A1%86%E6%A1%88%E4%BE%8B",code:"eJxljktuwyAQQK8yoptWst3m4w1Nu+k12JiPDCpmLJi2iaLcvZOviMIGCd68eXvhaYpCio0Nv2DiUMqHEgYTDSG5rMSnSgB3nxq3/PzlhzQ6mHagMVuXS7d5ZYrx6y0aYUphdXfTwf5oOw+0hLOEft6CRSJnYczOpfcKyGH0JGHBSMEYLOg4mO+a0DyJk4Tl20nzo6ODPOrn5aqBdd/AYt2/MH9QSaWOu+v9tfhpdTq1muvaQrvo5KXvoaz9C5b8efljVGswIi/xSHNIx2quEId/lcd8+g=="},{default:t(()=>[Q,O]),_:1}),I])}const T=p(k,[["render",J],["__file","box.html.vue"]]);export{T as default};
