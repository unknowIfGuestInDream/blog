import{_ as l}from"./box-model-b6ec3c8e.js";import{_ as p,W as i,X as d,$ as u,a0 as a,a1 as e,Y as n,Z as s,a2 as r,E as o}from"./framework-8ee916d6.js";const m={},k=n("p",null,"CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。",-1),b=r('<h2 id="盒模型介绍" tabindex="-1"><a class="header-anchor" href="#盒模型介绍" aria-hidden="true">#</a> 盒模型介绍</h2><p>下面的图片说明了盒子模型 (Box Model):</p><p><img src="'+l+`" alt="Box Model 示意图" loading="lazy"></p><p>不同部分的说明:</p><ul><li>Content box (内容) - 盒子的内容，显示文本和图像，可以通过 <code>width</code> 和 <code>height</code> 设置大小。</li><li>Padding box (内边距) - 包围在内容区域外部的空白区域，通过 <code>padding</code> 属性设置。</li><li>Border box (边框) - 围绕在填充和内容外的边框，通过 <code>border</code> 属性设置。</li><li>Margin box (外边距) - 这是最外面的区域，是盒子和其他元素之间的空白区域，通过 <code>margin</code> 属性设置。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 25px solid green<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了正确设置元素在所有浏览器中的宽度和高度，您需要知道的盒模型是如何工作的。</p><h2 id="元素的宽度和高度" tabindex="-1"><a class="header-anchor" href="#元素的宽度和高度" aria-hidden="true">#</a> 元素的宽度和高度</h2><p>当您指定一个 CSS 元素的宽度和高度属性时，您只是设置内容区域(content box)的宽度和高度。<code>padding</code> 和 <code>border</code> 再加上设置的宽高一起决定整个盒子的大小。</p>`,9),x=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 25px solid green"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 25px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 25px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("p",null,"元素盒子的大小为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) = 400px",-1),_=n("p",null,"元素占据的空间为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px",-1),g=n("p",null,"试想一下，您只有 250px 的空间。让我们设置总宽度为 250px 的元素:",-1),E=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 220px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 5px solid gray"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("p",null,"最终元素的总宽度计算公式是这样的:",-1),A=n("p",null,"元素的宽度 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 元素占据的水平空间 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距",-1),f=n("p",null,"元素的总高度最终计算公式是这样的:",-1),w=n("p",null,"元素的高度 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 元素占据的垂直空间 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 + 上边距 + 下边距",-1),C={class:"custom-container tip"},N=n("p",{class:"custom-container-title"},"ヒント",-1);function S(D,M){const t=o("CodeDemo"),c=o("RouterLink");return i(),d("div",null,[k,u(" more "),b,a(t,{id:"code-demo-48",type:"normal",title:"%E5%85%83%E7%B4%A0%E7%9A%84%E5%AE%BD%E5%BA%A6%E4%B8%8E%E9%AB%98%E5%BA%A6",code:"eJw9zT0KwzAMQOGrCM2lDS1d3J+TeHEi4wgc2VihNYTcvW4CWd83vAXHeYpo8En8gSE61ZfFPlWLcHlbwRMOqs0bn1uGxQrAl2keDdy6LtfHP/SpkC8GrvdcQVNkglC8lw2zI2IJu25lciWwHGFtn/UHBzcs3g=="},{default:e(()=>[x,h,v,_]),_:1}),g,a(t,{id:"code-demo-61",type:"normal",title:"%E6%80%BB%E5%AE%BD%E5%BA%A6%20250px%20%E7%9A%84%E5%85%83%E7%B4%A0",code:"eJw1zcsKwjAQheFXOcxatBbcxMuTZJN2JA2kScgUjZS+u6PQ5fm/xVlpWuZIhm4cXhijE7lbGnKzhNPDJjrQKKKufNSM1SbgHXiZDPq+K+36C8Uxh+QNznsZcuVnNbiUBskxMHx1nz/NrvqQDDpdm15sXyROKyo="},{default:e(()=>[E,B]),_:1}),y,A,f,w,n("div",C,[N,n("p",null,[s("更多相关可见 "),a(c,{to:"/ja/code/website/css/intro/box.html"},{default:e(()=>[s("盒模型")]),_:1})])])])}const V=p(m,[["render",S],["__file","box.html.vue"]]);export{V as default};
