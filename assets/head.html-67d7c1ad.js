import{_ as l,W as i,X as u,$ as d,Y as a,Z as n,a0 as t,a1 as o,a2 as s,E as p}from"./framework-8ee916d6.js";const r={},k=a("p",null,[n("在页面加载完成的时候，标签 "),a("code",null,"<head>"),n(" 里的内容，是不会在页面中显示出来的。")],-1),h=a("p",null,[a("code",null,"<head>"),n(" 包含了像页面的 "),a("code",null,"<title>"),n("(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。")],-1),m=s(`<h2 id="html-头部" tabindex="-1"><a class="header-anchor" href="#html-头部" aria-hidden="true">#</a> HTML 头部</h2><p>HTML 头部是包含在 <code>&lt;head&gt;</code> 元素里面的内容。不像 <code>&lt;body&gt;</code> 元素的内容会显示在浏览器中，head 里面的内容不会在浏览器中显示，它的作用是包含一些页面的元数据。在下面的例子中，head 的内容很少。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>My test page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g=s(`<h2 id="title-元素" tabindex="-1"><a class="header-anchor" href="#title-元素" aria-hidden="true">#</a> <code>&lt;title&gt;</code> 元素</h2><p><code>&lt;title&gt;</code> 可以用来给 HTML 文档添加一个标题。您可能会将它和给 body 添加标题的 <code>&lt;h1&gt;</code> 元素混淆，有些时候 <code>&lt;h1&gt;</code> 也会被称作网页标题。但是它们是不同的。</p><ul><li>当被加载到浏览器中的时候，元素 <code>&lt;h1&gt;</code> 会出现在页面中 —— 通常它应该在一个页面中只被使用一次，它被用来标记您的页面内容的标题(故事的标题，新闻标题或者任何适当的方式)。</li><li>元素 <code>&lt;title&gt;</code> 用来表示整个 HTML 文档标题的元数据(不是文档的内容)。</li></ul><p>直白点说，<code>&lt;h1&gt;</code> 会出现在页面上，而 <code>&lt;title&gt;</code> 会出现在选项卡或书签中。</p><h2 id="meta-元素" tabindex="-1"><a class="header-anchor" href="#meta-元素" aria-hidden="true">#</a> <code>&lt;meta&gt;</code> 元素</h2><p>元数据就是描述数据的数据，有很多不同种类的 <code>&lt;meta&gt;</code> 元素可以被包含进您的页面的 <code>&lt;head&gt;</code> 元素，下面仅为最常用的。</p><h3 id="指定编码" tabindex="-1"><a class="header-anchor" href="#指定编码" aria-hidden="true">#</a> 指定编码</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个元素简单的指定了文档的字符编码 —— 在这个文档中被允许使用的字符集。</p>`,9),v={class:"custom-container info"},_=a("p",{class:"custom-container-title"},"Info",-1),b=s(`<div class="custom-container warning"><p class="custom-container-title">Note</p><p>如果您指定了错误的编码，则整个网页都会乱码。</p></div><h3 id="添加作者和描述" tabindex="-1"><a class="header-anchor" href="#添加作者和描述" aria-hidden="true">#</a> 添加作者和描述</h3><p>许多 <code>&lt;meta&gt;</code> 元素包含了 <code>name</code> 和 <code>content</code> 特性:</p><ul><li><code>name</code> 指定了 meta 元素的类型； 说明该元素包含了什么类型的信息。</li><li><code>content</code> 指定了实际的元数据内容。</li></ul><p>这两个 meta 元素用于定义页面作者与提供页面简要描述。</p><div class="custom-container tip"><p class="custom-container-title">案例</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>author<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>unknowIfGuestInDream<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Introduction about &lt;head&gt; tags<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>指定作者在某些情况下是很有用的: 如果您需要联系页面的作者，问一些关于页面内容的问题。一些内容管理系统能够自动获取页面作者的信息，然后用于某些用途。</p><p>指定包含关于页面内容的关键字的页面内容的描述是很有用的，因为它可能或让您的页面在搜索引擎的相关的搜索出现得更多 (这些行为术语上被称为 Search Engine Optimization，简称 SEO.)</p>`,8),q={class:"custom-container info"},f=a("p",{class:"custom-container-title"},"Info",-1),x=s(`<h3 id="自定义图标" tabindex="-1"><a class="header-anchor" href="#自定义图标" aria-hidden="true">#</a> 自定义图标</h3><p>您可以在元数据中添加对自定义图标的引用。现代浏览器在各种场合使用 favicons，如打开的页面标签页和书签面板中的书签页面。</p><p>这个不起眼的图标已经存在很多很多年了，16 x 16 像素是这种图标的第一种类型。</p><p>页面添加图标的方式有:</p><ol><li><p>将其保存在与网站的索引页面相同的目录中，以 <code>.ico</code> 格式保存(大多数浏览器将支持更通用的格式，如 .gif 或.png，但使用 ICO 格式将确保它能在如 IE6 一样久远的浏览器显示)</p></li><li><p>将以下行添加到 HTML <code>&lt;head&gt;</code> 中以引用它</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shortcut icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/x-icon<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,5),E={class:"custom-container info"},L=a("p",{class:"custom-container-title"},"Info",-1),M={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta",target:"_blank",rel:"noopener noreferrer"},T=s(`<h2 id="为文档设定主语言" tabindex="-1"><a class="header-anchor" href="#为文档设定主语言" aria-hidden="true">#</a> 为文档设定主语言</h2><p>您应该添加 <code>lang</code> 属性到 HTML 开始标签中来为您的站点设定语言。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- or --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en-US<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您设置了 HTML 文档语言，那么该 HTML 文档就能被搜索引擎更有效地索引 (保证它在特定于语言的结果中正确显示)。同时，这对于那些使用屏幕阅读器的视障人士也很有用。(比如，法语和英语中都有 “six” 这个单词，但是发音却完全不同)</p><p>您还可以将文档的片段设置为不同的语言:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Chinese example: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>春眠不觉晓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function C(H,I){const e=p("RouterLink"),c=p("ExternalLinkIcon");return i(),u("div",null,[k,h,d(" more "),m,a("p",null,[n("当然，在大型的页面中，head 会包含很多的元数据。您可以用 "),t(e,{to:"/en/software/chrome.html#%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7"},{default:o(()=>[n("开发者工具")]),_:1}),n(" 去查看您喜欢的网页的 head 的内容。这里只会列出要包含在 head 里的主要元素。")]),g,a("div",v,[_,a("p",null,[n("字符集的详情，请见 "),t(e,{to:"/en/code/basic/encoding.html"},{default:o(()=>[n("基础知识 → 字符集")]),_:1})])]),b,a("div",q,[f,a("p",null,[n("关于 SEO 详情，请见 "),t(e,{to:"/en/code/website/html/definition/seo.html"},{default:o(()=>[n("定义 → SEO")]),_:1})])]),x,a("div",E,[L,a("p",null,[n("更多元数据详情，请见 "),a("a",M,[n("MDN Meta 标签"),t(c)]),n(")")])]),T])}const S=l(r,[["render",C],["__file","head.html.vue"]]);export{S as default};
