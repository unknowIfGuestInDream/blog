import{_ as o,W as l,X as p,$ as u,a0 as t,a1 as e,Y as n,a2 as c,Z as a,G as i}from"./framework-4fdeb3a3.js";const k={},d=n("p",null,"HTML 中有许多其他元素可以用于格式化文本。本文介绍标记引文、描述列表、计算机代码和其他相关文本、下标和上标、联系信息等。",-1),r=c(`<h2 id="描述列表" tabindex="-1"><a class="header-anchor" href="#描述列表" aria-hidden="true">#</a> 描述列表</h2><p>在 HTML 基础部分，我们说 HTML 有三种列表。第三种类型的列表叫<strong>描述列表</strong> (description list)。这种列表的目的是标记一组项目及其相关描述，例如术语和定义，或者是问题和答案等。让我们看一组术语和定义的示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>内心独白
戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
语言独白
戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
旁白
戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>描述列表使用与其他列表类型不同的闭合标签 <code>&lt;dl&gt;</code>; 此外，每一项都用 <code>&lt;dt&gt;</code> (description term) 元素闭合。每个描述都用 <code>&lt;dd&gt;</code> (description description) 元素闭合.</p>`,4),m=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dl")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dt")]),n("span",{class:"token punctuation"},">")]),a("内心独白"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dt")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dd")]),n("span",{class:"token punctuation"},">")]),a(`
    戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dd")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dt")]),n("span",{class:"token punctuation"},">")]),a("语言独白"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dt")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dd")]),n("span",{class:"token punctuation"},">")]),a(`
    戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dd")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dt")]),n("span",{class:"token punctuation"},">")]),a("旁白"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dt")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dd")]),n("span",{class:"token punctuation"},">")]),a(`
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dd")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dl")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=c('<p>浏览器的默认样式会在描述列表的<strong>描述部分</strong>(description description)和<strong>描述术语</strong>(description terms)之间产生缩进。MDN 非常严密地遵循这一惯例，同时也鼓励关于术语的其他更多的定义。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一个术语 <code>&lt;dt&gt;</code> 可以同时有多个描述 <code>&lt;dd&gt;</code>。</p></div><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p>HTML 也有用于标记引用的特性，至于使用哪个元素标记，取决于您引用的是一块还是一行。</p><h3 id="块引用" tabindex="-1"><a class="header-anchor" href="#块引用" aria-hidden="true">#</a> 块引用</h3><p>如果一个块级内容(一个段落、多个段落、一个列表等)从其他地方被引用，您应该把它用 <code>&lt;blockquote&gt;</code> 元素包裹起来表示，并且在 <code>cite</code> 属性里用 URL 来指向引用的资源。</p><h3 id="行内引用" tabindex="-1"><a class="header-anchor" href="#行内引用" aria-hidden="true">#</a> 行内引用</h3><p>行内元素需要使用 <code>&lt;q&gt;</code> 元素。浏览器默认将其作为普通文本放入引号内表示引用</p><h3 id="引文" tabindex="-1"><a class="header-anchor" href="#引文" aria-hidden="true">#</a> 引文</h3><p><code>cite</code> 属性内容不会被浏览器显示、屏幕阅读器阅读，需使用 JavaScript 或 CSS，浏览器才会显示 <code>cite</code> 的内容。如果您想要确保引用的来源在页面上是可显示的，最好使用 <code>&lt;cite&gt;</code> 元素。</p>',10),b=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  According to the
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(`
    `),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("cite")]),n("span",{class:"token punctuation"},">")]),a("MDN blockquote page"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("cite")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`:
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("blockquote")]),a(`
  `),n("span",{class:"token attr-name"},"cite"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
    The `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("strong")]),n("span",{class:"token punctuation"},">")]),a("HTML "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("code")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token entity named-entity",title:"<"},"&lt;"),a("blockquote"),n("span",{class:"token entity named-entity",title:">"},"&gt;"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("code")]),n("span",{class:"token punctuation"},">")]),a(" Element"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("strong")]),n("span",{class:"token punctuation"},">")]),a(` (or
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("em")]),n("span",{class:"token punctuation"},">")]),a("HTML Block Quotation Element"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("em")]),n("span",{class:"token punctuation"},">")]),a(`) indicates that the enclosed text is
    an extended quotation.
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("blockquote")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  The quote element — `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("code")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token entity named-entity",title:"<"},"&lt;"),a("q"),n("span",{class:"token entity named-entity",title:">"},"&gt;"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("code")]),n("span",{class:"token punctuation"},">")]),a(` — is
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q")]),a(),n("span",{class:"token attr-name"},"cite"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a("intended for short quotations that don't require paragraph breaks."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q")]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
  --
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("cite")]),n("span",{class:"token punctuation"},">")]),a("MDN q page"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("cite")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`.
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h2",{id:"缩略语",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#缩略语","aria-hidden":"true"},"#"),a(" 缩略语")],-1),h=n("p",null,[n("code",null,"<abbr>"),a(" 用来包裹一个缩略语或缩写，并且提供缩写的解释(包含在 "),n("code",null,"title"),a(" 属性中)。")],-1),E=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  我们使用
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("abbr")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("超文本标记语言(Hypertext Markup Language)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("HTML"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("abbr")]),n("span",{class:"token punctuation"},">")]),a(`
  来组织网页文档。
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  第 33 届 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("abbr")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("夏季奥林匹克运动会"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("奥运会"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("abbr")]),n("span",{class:"token punctuation"},">")]),a(` 将于 2024 年 8
  月在法国巴黎举行。
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h2",{id:"标记联系方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标记联系方式","aria-hidden":"true"},"#"),a(" 标记联系方式")],-1),q=n("p",null,[n("code",null,"<address>"),a(" 用于标记联系方式，它仅仅包含您的联系方式。")],-1),x=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("address")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("Chris Mills, Manchester, The Grim North, UK"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("address")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,[n("code",null,"<address>"),a(" 元素是为了标记编写 HTML 文档的人的联系方式，而不是任何其他的内容。")])],-1),_=n("h2",{id:"上标和下标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#上标和下标","aria-hidden":"true"},"#"),a(" 上标和下标")],-1),A=n("p",null,[a("当您使用日期、化学方程式、和数学方程式时会偶尔使用上标和下标。"),n("code",null,"<sup>"),a(" 和 "),n("code",null,"<sub>"),a(" 元素可以解决这样的问题。")],-1),B=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  咖啡因的化学方程式是 C`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sub")]),n("span",{class:"token punctuation"},">")]),a("8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("sub")]),n("span",{class:"token punctuation"},">")]),a("H"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sub")]),n("span",{class:"token punctuation"},">")]),a("10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("sub")]),n("span",{class:"token punctuation"},">")]),a("N"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sub")]),n("span",{class:"token punctuation"},">")]),a("4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("sub")]),n("span",{class:"token punctuation"},">")]),a("O"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sub")]),n("span",{class:"token punctuation"},">")]),a("2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("sub")]),n("span",{class:"token punctuation"},">")]),a(`。
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("如果 x"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sup")]),n("span",{class:"token punctuation"},">")]),a("2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("sup")]),n("span",{class:"token punctuation"},">")]),a(" 的值为 9，那么 x 的值必为 3 或 -3。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=c(`<h2 id="展示计算机代码" tabindex="-1"><a class="header-anchor" href="#展示计算机代码" aria-hidden="true">#</a> 展示计算机代码</h2><p>有大量的 HTML 元素可以来标记计算机代码:</p><ul><li><code>&lt;code&gt;</code>: 用于标记计算机通用代码。</li><li><code>&lt;pre&gt;</code>: 用于保留空白字符(通常用于代码块)——如果您在文本中使用缩进或多余的空白，浏览器将忽略它，您将不会在呈现的页面上看到它。但是，如果您将文本- 包含在 <code>&lt;pre&gt;&lt;/pre&gt;</code> 标签中，那么空白将会以与您在文本编辑器中看到的相同的方式渲染出来。</li><li><code>&lt;var&gt;</code>: 用于标记具体变量名。</li><li><code>&lt;kbd&gt;</code>: 用于标记输入电脑的键盘(或其他类型)输入。</li><li><code>&lt;samp&gt;</code>: 用于标记计算机程序的输出。</li></ul><h2 id="标记时间和日期" tabindex="-1"><a class="header-anchor" href="#标记时间和日期" aria-hidden="true">#</a> 标记时间和日期</h2><p>HTML 还支持将时间和日期标记为可供机器识别的格式的 <code>&lt;time&gt;</code> 元素。例如:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2016-01-20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2016年1月20日<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为什么需要这样做? 因为世界上有许多种书写日期的格式，上边的日期可能被写成:</p><ul><li>20 January 2016</li><li>20th January 2016</li><li>Jan 20 2016</li><li>20/06/16</li><li>06/20/16</li><li>The 20th of next month</li><li>20e Janvier 2016</li><li>2016 年 1 月 20 日</li></ul><p>但是这些不同的格式不容易被电脑识别 — 假如您想自动抓取页面上所有事件的日期并将它们插入到日历中，<code>&lt;time&gt;</code> 元素允许您附上清晰的、可被机器识别的 时间/日期来实现这种需求。</p><p>上述基本的例子仅仅提供了一种简单的可被机器识别的日期格式，这里还有许多其他支持的格式。</p>`,10),T=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token comment"},"<!-- 标准简单日期 -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("time")]),a(),n("span",{class:"token attr-name"},"datetime"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2016-01-20"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("20 January 2016"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("time")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token comment"},"<!-- 只包含年份和月份-->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("time")]),a(),n("span",{class:"token attr-name"},"datetime"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2016-01"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("January 2016"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("time")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token comment"},"<!-- 只包含月份和日期 -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("time")]),a(),n("span",{class:"token attr-name"},"datetime"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("01-20"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("20 January"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("time")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token comment"},"<!-- 只包含时间，小时和分钟数 -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("time")]),a(),n("span",{class:"token attr-name"},"datetime"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("19:30"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("19:30"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("time")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token comment"},"<!-- 还可包含秒和毫秒 -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("time")]),a(),n("span",{class:"token attr-name"},"datetime"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("19:30:01.856"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("19:30:01.856"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("time")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token comment"},"<!-- 日期和时间 -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("time")]),a(),n("span",{class:"token attr-name"},"datetime"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2016-01-20T19:30"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("7.30pm, 20 January 2016"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("time")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token comment"},"<!-- 含有时区偏移值的日期时间 -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("time")]),a(),n("span",{class:"token attr-name"},"datetime"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2016-01-20T19:30+01:00"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a("7.30pm, 20 January 2016 is 8.30pm in France"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("time")]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token comment"},"<!-- 调用特定的周 -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("time")]),a(),n("span",{class:"token attr-name"},"datetime"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2016-W04"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("The fourth week of 2016"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("time")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function M(R,J){const s=i("CodeDemo");return l(),p("div",null,[d,u(" more "),r,t(s,{id:"code-demo-14",type:"normal",title:"%E6%8F%8F%E8%BF%B0%E5%88%97%E8%A1%A8",code:"eJyVks1OwkAUhV+l6QuwN4QnccnCBbpiZ0wKpVJKsYjyj5IaSRsCFgG1pW36MMy9na58BWdaY0LUGFfzcyfnfufcORdPyqcl8UjMF0uF4zNByBfLBbhUIJLj5iIehvkcu8gKxXQVBFQNaFjEXb4HOk7bxJ1Tq0Mba3A8Wp/D23M8qmUSuPVBs1HtYW0KRp9GY2rqEL0wXWraGNwyBRoNyW4Mxoo6LTDmyd0DtK+pVSVBn1clHZRX4veyFsRtkWAE7QWoq71UTblyn2CcnDpLakv/JkdN+yJHeYObbjze4tXsZ+CUDToHYIkcguEQf/Y7G/Yrf1MRd4fuGqc34IWJP+DRpVWULOyqeD9hgWRUPOTJDocO8Zrw2GNHas5AUXBjJ3UtY2aC3yPlo3nyiCtRdcGwceBkFrj3dEx7qZKFwDbckaGxx2xGVNZ5u8jEihMvG4ce2cI/kHjxAdptbm4="},{default:e(()=>[m]),_:1}),g,t(s,{id:"code-demo-49",type:"normal",title:"%E5%BC%95%E6%96%87%E6%A1%88%E4%BE%8B",code:"eJytUkFOwzAQ/MoqhwKH1vfWRAKBxIEiIYq45OLG28SqYyf2FiEQEo/ghbwEOw5KJLiVS6Jkd2ZnZvctq6nR2TLjbV4YgIuytE4qUwFZoBrjPy7iE6B2uDsvAoBav2RM4jNq26JbNPZVaS0W1lUMzfzxgUlbevaEW3azWd+ya40NGmJbbct9d7CERRYp+4mBv1SE+frqDsYGaEWFnPUVznoB+bIwnEWZ4T2hCqXY9o/Kel1DIACbGoF7ctZUeQQFvVZiPtO0GmGzilZBbizAQMrZAIJT6wan2CSKywiE+4AUpKwZIaHhDJSRqhSEPmxAUFwDoCm19SiB8IVA+cQnDIRPNDIUooyebNGr74PiE2Mpt2QqWkoxYxoMXx+fE1/d1E4spYG8Oz7pLq0+rFOZQfnOOvC1dTR6GJxLa04IHHYH5eJJOFE50dawdSj2fsED288ZzefpVI+/0qDw12F2f91jCDrFnL1/A8SjHvo="},{default:e(()=>[b]),_:1}),v,h,t(s,{id:"code-demo-58",type:"normal",title:"%E7%BC%A9%E7%95%A5%E8%AF%AD",code:"eJyrVsooyc1RslKyKbCLyVNQeNYx8cnuNU/27n8+ZQWIb5OYlFSkUJJZkpNqG6P0Ylvrs2ntz+asebag/cW6DS/Wr32xokHDo7IgtagktaJEwTexKLu0QMEnMS+9NDE9VTNGyc4jxNfHRh9kCsT8uUuf7255vrv9+d6JLxduBZm2cPHjhqaYPBt9kAuANMQhz9esUTA2Vni6sQvNDU+X9D9du/jp0qXP5k1/2rPzaWv3i/0TnnateLJnFtA6oDiQC2RD7VR4uqHtya4+BSMDIxOFpzu3KFiAXTGn4+mcFc82T306e+/T7Vte7u57smPfi4U9SA5RqgUAFSmOrg=="},{default:e(()=>[E]),_:1}),y,q,t(s,{id:"code-demo-67",type:"normal",title:"%E6%A0%87%E8%AE%B0%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F",code:"eJyrVsooyc1RslKySUxJKUotLraLyVNQsCmwc84oyixW8M3MySnWUfBNzEvOSC0uSS3SUQjJSFVwL8rMVfDLLyrJ0FEI9bbRLwDqstFHmKBUCwAhqx2j"},{default:e(()=>[x]),_:1}),f,_,A,t(s,{id:"code-demo-81",type:"normal",title:"%E4%B8%8A%E6%A0%87%E5%92%8C%E4%B8%8B%E6%A0%87",code:"eJyrVsooyc1RslKyKbCLyVNQeDpp2tOpC5/OXvB8VsvTnmlP1y57Nm3n8xXdT/f0P5uxXsHZprg0yc7CRh9EeYA5hgYQnh+YZwLh+IM5RhDO44ammDwbfZAFQFueLmt6Nm+OQgVQRQFERYGdAsi2hj1PduxSsHy/p+dl0+InOzsUKqDCT/e3gmSMFZ51TFPQNQYaBzFMqRYATwZXgA=="},{default:e(()=>[B]),_:1}),L,t(s,{id:"code-demo-175",type:"normal",title:"%E6%A0%87%E8%AE%B0%E6%97%B6%E9%97%B4",code:"eJyVkV9LwlAYxr/K225rdqZlNszLLroWutnNqIlSzrBJRARG5R9YrCRZiGA3oRToLiQwjb5M75ZXfYXO2TIYsZVX5z3/fs/zvO8Jl9Xy+5zIJRd4Huz7KlYrTr+MV03bfLDbHeD5lKQmtVxegV1ZU1ixIXFRIsR5IvBRInGpKIEtWS3JxWNg58ll9oj9Ykg0HlG/xOsnHA3fx6/Y0O12jRahXAr9B9EDMWKY1d8ug3Dm89Qcfk50tAxaUy7WKtNGx25aAWhhXYwxtLv6qR9vd2gMPLDTbTCTA1aEkUQiRBKr8Rnwe+vnelHdzMztn+NJzzyuRWLkIL9E+xk2LNbUOguvv+CZ4XTHWJ44rQtPdS7JRSKIhApLKkCQOOQOIeFeQU6FzaKs7iieIUn9aaR17tz2nPoI+y3qBG96YQa2yQrNms4qkCmUiloWjhRlDwoZf1bu9AssYitb"},{default:e(()=>[T]),_:1})])}const D=o(k,[["render",M],["__file","format.html.vue"]]);export{D as default};
