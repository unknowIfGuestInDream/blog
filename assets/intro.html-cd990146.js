import{_ as r,W as d,X as c,$ as l,Y as a,Z as e,a0 as n,a1 as p,a2 as i,E as o}from"./framework-ae009c3e.js";const u={},m=a("p",null,"Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。",-1),h=a("p",null,[e("Markdown 的目标是实现「易读易写」。它的扩展名为 "),a("code",null,".md"),e("。")],-1),k=a("h2",{id:"设计理念",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#设计理念","aria-hidden":"true"},"#"),e(" 设计理念")],-1),M=a("p",null,"Markdown 最需要强调的便是它的可读性。一份使用 Markdown 格式撰写的文件应该可以直接以纯文字发布，并且看起来不会像是由许多标签或是格式指令所构成。",-1),g={href:"http://docutils.sourceforge.net/mirror/setext.html",target:"_blank",rel:"noopener noreferrer"},_={href:"http://www.aaronsw.com/2002/atx/",target:"_blank",rel:"noopener noreferrer"},w={href:"http://textism.com/tools/textile/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://docutils.sourceforge.net/rst.html",target:"_blank",rel:"noopener noreferrer"},T={href:"http://www.triptico.com/software/grutatxt.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://ettext.taint.org/doc/",target:"_blank",rel:"noopener noreferrer"},f=a("p",null,"Markdown 具有一系列衍生版本，用于扩展 Markdown 的功能 (如表格、脚注、内嵌 HTML 等等) ，这些功能并不在最初的设计中，但它们能让 Markdown 转换成更多的格式，例如 LaTeX，Docbook。Markdown 增强版中比较有名的有 Markdown Extra、MultiMarkdown、 Maruku 等。这些衍生版本要么基于工具，如 Pandoc；要么基于网站，如 GitHub 和 Wikipedia，在语法上基本兼容，但在一些语法和渲染效果上有改动。",-1),x=a("h2",{id:"用途",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#用途","aria-hidden":"true"},"#"),e(" 用途")],-1),L=a("p",null,[e("Markdown 的语法有个主要的目的: 用来作为一种网络内容的"),a("strong",null,"写作用语言"),e("。Markdown 的重点在于，它能让文件"),a("strong",null,"更容易阅读、编写"),e("。因此，Markdown 的格式语法只涵盖纯文字可以涵盖的范围。")],-1),H=a("p",null,"Markdown 的语法简洁明了、学习容易，而且功能比纯文本更强，因此有很多人用它写博客。世界上最流行的博客平台 WordPress 能很好的支持 Markdown。",-1),E={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},y=i(`<p>除此之外，我们还可以快速将 Markdown 转化为演讲 PPT、Word 产品文档、LaTex 论文甚至是用非常少量的代码完成最小可用原型。在数据科学领域，Markdown 已经广泛使用，极大地推进了动态可重复性研究的历史进程。</p><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><h3 id="行内-html" tabindex="-1"><a class="header-anchor" href="#行内-html" aria-hidden="true">#</a> 行内 HTML</h3><p>不在 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 撰写。不需要额外标注这是 HTML 或是 Markdown；只要直接加标签就可以了。</p><p>只有块元素 ── 比如 <code>&lt;div&gt;</code>、<code>&lt;table&gt;</code>、<code>&lt;pre&gt;</code>、<code>&lt;p&gt;</code> 等标签，必须在前后加上空行，以利与内容区隔。而且这些 (元素) 的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 的解析器有智慧型判断，可以避免在块标签前后加上没有必要的 <code>&lt;p&gt;</code> 标签。</p><p>举例来说，在 Markdown 文件里加上一段 HTML 表格:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>This is a regular paragraph.

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>

This is another regular paragraph.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Markdown 语法在 HTML 块标签中将不会被进行处理。</p><p>例如，您无法在 HTML 块内使用 Markdown 形式的 <code>*强调*</code>。</p></div><h3 id="特殊字符自动转换" tabindex="-1"><a class="header-anchor" href="#特殊字符自动转换" aria-hidden="true">#</a> 特殊字符自动转换</h3><p>简单来说，在 Markdown 中，您无需考虑 HTML 本应考虑的特殊字符转义的问题。</p><p>比如对于 <code>AT&amp;T</code>，Markdown 就会将它转为 <code>AT&amp;amp;T</code>。</p><div class="custom-container tip"><p class="custom-container-title">HTML 中的特殊字符</p><p>在 HTML 文件中，有两个字符需要特殊处理: <code>&lt;</code> 和 <code>&amp;</code> 。 <code>&lt;</code> 符号用于起始标签，<code>&amp;</code> 符号则用于标记 HTML 实体，如果您只是想要使用这些符号，您必须要使用实体的形式，像是 <code>&amp;lt;</code> 和 <code>&amp;amp;</code>。</p><p>使用 HTML 时，<code>&amp;</code> 符号其实很容易让写作网络文件的人感到困扰。</p><p>如果您要打 「AT&amp;T」 ，您必须要写成 <code>「AT&amp;amp;T」</code>。</p><p>同时您还得转换网址内的 <code>&amp;</code> 符号，如果您要链接到 <code>http://images.google.com/images?num=30&amp;q=larry+bird</code>，您必须要把网址转成 <code>http://images.google.com/images?num=30&amp;amp;q=larry+bird</code>，才能放到链接标签的 <code>href</code> 属性里。</p><p>不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。</p></div><p>Markdown 即允许您直接使用这些符号。也允许您使用转义符号。</p><p>比如您如果要在文件中插入一个著作权的符号，但是您又不想费力地输入这个不常见的特殊符号，您可以直接在 Markdown 中输入 <code>&amp;copy;</code>，Markdown 会推测出它是转移符号，并把它输出为 ©。</p><p>类似的状况也会发生在 <code>&lt;</code> 符号上，因为 Markdown 支持 <a href="#%E8%A1%8C%E5%86%85-HTML">行内 HTML</a> ，如果您是使用 <code>&lt;</code> 符号作为 HTML 标签使用，那 Markdown 也不会对它做任何转换，但是如果您是写:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>4 &lt; 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Markdown 将会把它转换为:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>4 <span class="token entity named-entity" title="&lt;">&amp;lt;</span> 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">ヒント</p><p>需要注意的是，code 范围内，不论是行内还是块， <code>&lt;</code> 和 <code>&amp;</code> 两个符号都<em>一定</em>会被转换成 HTML 实体，这项特性让您可以很容易地用 Markdown 写 HTML code (和 HTML 相对而言， HTML 语法中，您要把所有的 <code>&lt;</code> 和 <code>&amp;</code> 都转换为 HTML 实体，才能在 HTML 文件里面写出 HTML code。)</p></div><h2 id="编写" tabindex="-1"><a class="header-anchor" href="#编写" aria-hidden="true">#</a> 编写</h2><p>Markdown 就是一个扩展名为 <code>.md</code> 的文本文件。</p>`,21),A={href:"https://typora.io",target:"_blank",rel:"noopener noreferrer"};function V(C,N){const t=o("ExternalLinkIcon"),s=o("RouterLink");return d(),c("div",null,[m,h,l(" more "),k,M,a("p",null,[e("其语法在设计时受到一些既有 text-to-HTML 格式的影响，包括 "),a("a",g,[e("Setext"),n(t)]),e("、"),a("a",_,[e("atx"),n(t)]),e("、"),a("a",w,[e("Textile"),n(t)]),e("、"),a("a",v,[e("reStructuredText"),n(t)]),e("、"),a("a",T,[e("Grutatext"),n(t)]),e(" 和 "),a("a",b,[e("EtText"),n(t)]),e("，然而最大灵感来源其实是纯文字的电子邮件格式。因此 Markdown 的语法全由标点符号所组成，并经过严谨慎选，是为了让它们看起来就像所要表达的意思。像是在文字两旁加上星号，看起来就像*强调*。Markdown 的列表看起来，嗯，就是列表。假如您有使用过电子邮件，引言写法看起来就真的像是引用一段文字。")]),f,x,L,H,a("p",null,[e("用于编写说明文档，并且以 “"),a("a",E,[e("README.md"),n(t)]),e("” 的文件名保存在软件的目录下面。")]),y,a("p",null,[e("理论上您可以使用任何编辑器 (如 "),n(s,{to:"/ja/software/vscode/"},{default:p(()=>[e("VS Code")]),_:1}),e(")编辑 Markdown，也可以使用专门的 Markdown 编辑器 (如 "),a("a",A,[e("Typora"),n(t)]),e(") 进行编写。")])])}const R=r(u,[["render",V],["__file","intro.html.vue"]]);export{R as default};
