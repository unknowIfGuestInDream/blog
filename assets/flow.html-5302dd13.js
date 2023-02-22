import{_ as e,W as t,X as o,a0 as c,a1 as l,a2 as i,C as p,Y as n,Z as s}from"./framework-d7af73f9.js";const u={},d=i('<h3 id="元素特性" tabindex="-1"><a class="header-anchor" href="#元素特性" aria-hidden="true">#</a> 元素特性</h3><ul><li><p>一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。</p></li><li><p>内联元素的 <code>width</code> <code>height</code> 与内容一致。您无法设置内联元素的 <code>width</code> <code>height</code>。</p></li><li><p>如果您想控制内联元素的尺寸，您需要为元素设置 <code>display: block;</code> 或 <code>display: inline-block</code>。<code>inline-block</code> 混合了 <code>inline</code> 和 <code>block</code> 的特性。</p></li></ul><h3 id="摆放特性" tabindex="-1"><a class="header-anchor" href="#摆放特性" aria-hidden="true">#</a> 摆放特性</h3><p>正常布局流(在布局介绍里提到过)是一套在浏览器视口内放置、组织元素的系统。默认的，块级元素按照基于其父元素的书写顺序(默认值: <code>horizontal-tb</code>)的块流动方向(block flow direction)放置。</p><p>每个块级元素会在上一个元素下面另起一行，它们会被设置好的 <code>margin</code> 分隔。在英语，或者其他水平书写、自上而下模式里，块级元素是垂直组织的。</p><p>内联元素的表现有所不同: 它们不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其他内联元素、相邻的文本内容(或者被包裹的)被安排在同一行。如果空间不够，溢出的文本或元素将移到新的一行。</p><p>如果两个相邻的元素都设置了 <code>margin</code> 并且两个 <code>margin</code> 有重叠，那么更大的设置会被保留，小的则会消失。这被称为外边距叠加。</p>',7),r=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Basic document flow"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  inline elements `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("like this one"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(" and "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("this one"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(` sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements will
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("wrap onto a new line if possible (like this one containing text)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`,
  or just go on to a new line if not, much like this image will do:
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://mdn.mozillademos.org/files/13360/long.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"p"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("255"),n("span",{class:"token punctuation"},","),s(" 84"),n("span",{class:"token punctuation"},","),s(" 104"),n("span",{class:"token punctuation"},","),s(" 0.3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 2px solid "),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("255"),n("span",{class:"token punctuation"},","),s(" 84"),n("span",{class:"token punctuation"},","),s(" 104"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"span"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid black"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function m(g,b){const a=p("CodeDemo");return t(),o("div",null,[d,c(a,{id:"code-demo-35",type:"normal",title:"%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E4%BE%8B%E5%AD%90",code:"eJxtU01v2zAM/SuEgQEtathJuw5DlvWQ2w7DjrvkIluMrUQfhiTXyYr+95GSly5NL3FMk+898pEvRR+NLlbFul8+bURQLUjXjgZthJ1207qm+NZu7XqgB8APEAYENCmz0a49gMZn1IAauaiCnycQci9aRvggIUBQEZwFixMDamUxQIPEBQYrIqqZ6Uy4OYHEnRh1hAkhDMLCcrH4BG4HsUeYlIw9v7jRwyA8s85MJQgruYiiIAJEoTUj0l9ObnulJbTOxiT7F4Wio5wZkmt7VF0fQc0FORXuiEdKZTu4Y7jGeYk+V9W54rqL31lFQJIoIkpoTgnTCN8pGyrYYCvGgNxJjhGd1mIIxFPOTTDQBcLlAGyq/g+1BOvIAxf7a0HK8uDfTFnzZJ+0OiChcsMW13WKpUnkz++/ZCcZjpUEYTDZmSbMD6Lv0WcfzjsR8RhJmETSp5KJNBjCJciWOriGI2+e0fMy8szfC59UdjUrnLwYCCM62lFasCyHWAYXgmo0ws1Fi8lToSwDs67bubOSEZ2H/RgidI7X9QqSmivBjG1PkX+QyoiOLdGarmiVZCnTQfDt9y0dWhzCqq6NtJVxfyhJSDQuVM539U5pDPXy4eHLotbOdtV+6LYF1GRWdq4oizYEOtQBXtLaifbQeTdauQLfNeLm/vGxhK+fSzoP+llUD7ff3tZzBffDEYLTSnL2RXLOm3d6RZHhmCJ5i86BV96edH9X/FOvIl6wLc9sjabEXF68/gXWhYQx"},{default:l(()=>[r,k]),_:1})])}const v=e(u,[["render",m],["__file","flow.html.vue"]]);export{v as default};
