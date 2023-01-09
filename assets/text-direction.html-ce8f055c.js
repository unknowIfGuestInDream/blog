import{_ as c,a as l}from"./vertical-744c287b.js";import{_ as i,W as p,X as d,a0 as t,a1 as e,Y as n,Z as a,a2 as o,F as u}from"./framework-d8ef9316.js";const r={},k=n("h2",{id:"书写模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#书写模式","aria-hidden":"true"},"#"),a(" 书写模式")],-1),h=n("p",null,[a("CSS 中的书写模式是指文本的排列方向是横向还是纵向的。"),n("code",null,"writing-mode"),a(" 属性使我们从一种模式切换到另一种模式。为此，您不必使用一种竖向的语言——您还可以更改部分文字的方向以实现创新性的布局。")],-1),g=n("p",null,[a("可以使用 "),n("code",null,"writing-mode: vertical-rl"),a(" 对一个标题的显示进行设置，将标题文本变为竖向。")],-1),m=n("p",null,"竖向文本在平面设计中很常见，也可以为您的网页设计增添更加有趣的外观。",-1),v=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h1")]),n("span",{class:"token punctuation"},">")]),a("Play with writing modes"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h1")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"h1"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"writing-mode"),n("span",{class:"token punctuation"},":"),a(" vertical-rl"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=o('<p><code>writing-mode</code> 的三个值分别是:</p><ul><li><code>horizontal-tb</code>: 块流向从上至下。对应的文本方向是横向的。</li><li><code>vertical-rl</code>: 块流向从右向左。对应的文本方向是纵向的。</li><li><code>vertical-lr</code>: 块流向从左向右。对应的文本方向是纵向的。</li></ul><p>因此，<code>writing-mode</code> 属性实际上设定的是页面上块级元素的显示方向——要么是从上到下，要么是从右到左，要么是从左到右。而这决定了文本的方向。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>没有从下到上的方向。</p></div><h2 id="书写模式、块级布局和内联布局" tabindex="-1"><a class="header-anchor" href="#书写模式、块级布局和内联布局" aria-hidden="true">#</a> 书写模式、块级布局和内联布局</h2><p>我们已经讨论了块级布局和内联布局(block and inline layout)，也知道外部显示类型元素分为块级元素和内联元素。如上所述，块级显示和内联显示与文本的书写模式(而非屏幕的物理显示)密切相关。如果您使用书写模式的显示是横向的，如英文，那么块在页面上的显示就是从上到下的。</p><p>当我们切换书写模式时，我们也在改变块和内联文本的方向。<code>horizontal-tb</code> 书写模式下块的方向是从上到下的横向的，而 <code>vertical-rl</code> 书写模式下块的方向是从右到左的纵向的。因此，块维度指的总是块在页面书写模式下的显示方向。而内联维度指的总是文本方向。</p><p><img src="'+c+'" alt="这张图展示了在水平书写模式下的两种维度" loading="lazy"></p><p><img src="'+l+'" alt="这张图片展示了纵向书写模式下的两种维度" loading="lazy"></p><h3 id="方向" tabindex="-1"><a class="header-anchor" href="#方向" aria-hidden="true">#</a> 方向</h3><p>除了书写模式，我们还可以设置文本方向。正如上面所言，有些语言(如阿拉伯语)是横向书写的，但是是从右向左。</p><p>由于书写模式和文本方向都是可变的，新的 CSS 布局方法不再定义从左到右和从上到下，而是将这些连同内联元素和块级元素的开头和结尾一起考量。</p><h2 id="逻辑属性和逻辑值" tabindex="-1"><a class="header-anchor" href="#逻辑属性和逻辑值" aria-hidden="true">#</a> 逻辑属性和逻辑值</h2><p>正常情况下，您可以设置 width 和 height，但是它们并不会跟随书写模式的改编而进行调整。</p><p>CSS 的映射属性用逻辑(logical)和相对变化(flow relative)代替了像宽 width 和高 height 一样的物理属性。</p><p>横向书写模式下，映射到 width 的属性被称作内联尺寸(inline-size)——内联维度的尺寸。而映射 height 的属性被称为块级尺寸(block-size)，这是块级维度的尺寸。下面的例子展示了替换掉 width 的 inline-size 是如何生效的。</p>',16),x=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box horizontal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("Heading"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("A paragraph. Demonstrating Writing Modes in CSS."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("These boxes have inline-size."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("Heading"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("A paragraph. Demonstrating Writing Modes in CSS."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("These boxes have inline-size."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".wrapper"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".box"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"inline-size"),n("span",{class:"token punctuation"},":"),a(" 150px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".horizontal"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"writing-mode"),n("span",{class:"token punctuation"},":"),a(" horizontal-tb"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".vertical"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"writing-mode"),n("span",{class:"token punctuation"},":"),a(" vertical-rl"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=o('<h3 id="逻辑外边距、边框和内边距属性" tabindex="-1"><a class="header-anchor" href="#逻辑外边距、边框和内边距属性" aria-hidden="true">#</a> 逻辑外边距、边框和内边距属性</h3><p>外边距、边框和内边距属性中，物理属性，例如 <code>margin-top</code>、<code>padding-left</code> 和 <code>border-bottom</code>。同样像 <code>width</code> 和 <code>height</code> 一样不会随着书写模式进行变化，当然这些属性也有相应的映射。</p><p><code>margin-top</code> 属性的映射是 <code>margin-block-start</code> : 总是指向块级维度开始处的边距。</p><p><code>padding-left</code> 属性映射到 <code>padding-inline-start</code>: 这是应用到内联开始方向(这是该书写模式文本开始的地方)上的内边距。</p><p><code>border-bottom</code> 属性映射到的是 <code>border-block-end</code>: 也就是块级维度结尾处的边框。</p><p>其他的 9 个属性应该很很容易写出，不做赘述。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意，在这种状态下，您就不能再用 <code>margin</code> <code>padding</code> <code>border</code> 这三个简写属性了。</p></div><h3 id="逻辑值" tabindex="-1"><a class="header-anchor" href="#逻辑值" aria-hidden="true">#</a> 逻辑值</h3><p>物理值(如 <code>top</code>、<code>right</code>、<code>bottom</code> 和 <code>left</code> )。这些值同样拥有逻辑值映射(<code>block-start</code>、<code>inline-end</code>、<code>block-end</code> 和 <code>inline-start</code> )。</p><h3 id="是否使用逻辑属性" tabindex="-1"><a class="header-anchor" href="#是否使用逻辑属性" aria-hidden="true">#</a> 是否使用逻辑属性</h3><p>如果您并没有应用多种书写模式，那么现在您可能更倾向于使用物理属性，因为这些在您使用弹性布局和网格布局时非常有用。</p>',11);function w(y,V){const s=u("CodeDemo");return p(),d("div",null,[k,h,g,m,t(s,{id:"code-demo-12",type:"normal",title:"%E7%AB%96%E5%90%91%E6%A0%87%E9%A2%98%E6%96%87%E6%9C%AC",code:"eJyrVsooyc1RslKyyTC0C8hJrFQozyzJUCgvyizJzEtXyM1PSS220QfKxeQp6SglFxcDlWYYKlTH5CnAFOmCFFkplKUWlWQmJ+boFuVYx+TVAtXXAgC0Fh+z"},{default:e(()=>[v,b]),_:1}),_,t(s,{id:"code-demo-80",type:"normal",title:"%E6%98%A0%E5%B0%84%E5%B1%9E%E6%80%A7",code:"eJzNkbFOwzAQhl/l5JkkgMQSQiQEAwtTkVi8uMlRW3Jsy2elpVXfvdcmaVqpD9DpLP/fnX//txM6dVaUompND41VRG9SrKMKAaMUtXQAV9LSb0D7aLbeJWVHghn9XH+hao1bVQWfx9tQv0NQUa14oM7hEzvvKEWVmIPfaE7127dIYBx8LBZ5VYS5+UcjIfCTrGvVI0PWOMzIbPFMVgX7u220x5hMc182pyoeREPEyedj2rA7Yq2hYNV/CX8WN6/S7aWTLj9+5iRfTC7h6eUxzMy8lQFdD76zjn2XFzvL0vLcMwV0q2PSsmgHXuwPkV+9kg=="},{default:e(()=>[x,f]),_:1}),z])}const E=i(r,[["render",w],["__file","text-direction.html.vue"]]);export{E as default};
