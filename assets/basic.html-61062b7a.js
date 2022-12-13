import{_ as p,W as i,X as u,$ as d,a0 as a,a1 as t,Y as n,Z as s,a2 as l,E as c}from"./framework-ae009c3e.js";const k={},g=n("p",null,"本章是最常见的的 HTML 标签介绍。",-1),r=n("h2",{id:"标题和段落",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标题和段落","aria-hidden":"true"},"#"),s(" 标题和段落")],-1),m=n("p",null,"大部分的文本结构由标题和段落组成。不管是小说、报刊、教科书还是杂志等。",-1),h=n("p",null,"内容结构化会使读者的阅读体验更轻松，更愉快。",-1),b=n("p",null,[s("在 HTML 中，每个段落是通过 "),n("code",null,"<p>"),s(" 元素标签进行定义的, 比如下面这样:")],-1),v=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("我是一个段落，千真万确。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=n("p",null,"每个标题(Heading)是通过“标题标签”进行定义的:",-1),_=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("我是文章的标题"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=l('<p>这里有六个标题元素标签 —— <code>&lt;h1&gt;</code>、<code>&lt;h2&gt;</code>、<code>&lt;h3&gt;</code>、<code>&lt;h4&gt;</code>、<code>&lt;h5&gt;</code>、<code>&lt;h6&gt;</code>。每个元素代表文档中不同级别的内容; <code>&lt;h1&gt;</code> 表示主标题(the main heading)，<code>&lt;h2&gt;</code> 表示二级子标题(subheadings)，<code>&lt;h3&gt;</code> 表示三级子标题(sub-subheadings)，等等。</p><div class="custom-container tip"><p class="custom-container-title">最佳实践</p><ul><li><p>您应该最好只对每个页面使用一次 <code>&lt;h1&gt;</code> — 这是顶级标题，所有其他标题位于层次结构中的下方。</p></li><li><p>请确保在层次结构中以正确的顺序使用标题。不要使用 <code>&lt;h3&gt;</code> 来表示副标题，后面跟 <code>&lt;h2&gt;</code> 来表示副副标题 - 这是没有意义的，会导致奇怪的结果。</p></li><li><p>在可用的六个标题级别中，您应该旨在每页使用不超过三个，除非您认为有必要使用更多。具有许多级别的文档(即，较深的标题层次结构)是难以操作和导航的。在这种情况下，如果可能，建议将内容分散在多个页面上。</p></li></ul></div><div class="custom-container tip"><p class="custom-container-title">为什么需要结构化</p><p>因为如果元素没有给出内容结构，浏览器将不知道什么是标题，什么是段落。此外:</p><ul><li>用户在阅读网页时，往往会快速浏览以查找相关内容，通常只是阅读开头的标题 (我们通常在一个网页上会花费很少的时间)。如果用户不能在几秒内看到一些有用的内容，他们很可能会感到沮丧并离开。</li><li>对您的网页建立索引的搜索引擎会将标题内容视为影响网页搜索排名的重要关键字。标题的缺失意味着您的网页在 SEO (搜索引擎优化) 方面效果不佳。</li><li>严重视力障碍者通常不会阅读网页；他们用听力来代替。完成这项工作的软件叫做屏幕阅读器(screen reader)。该软件提供了快速访问给定文本内容的方法。在使用的各种技术中，它们通过朗读标题来提供文档的概述，让用户能快速找到他们需要的信息。如果标题不可用，用户将被迫听到整个文档的大声朗读。</li><li>使用 CSS 样式化内容，或者使用 JavaScript 做一些有趣的事情，您需要包含相关内容的元素，所以 CSS / JavaScript 可以有效地定位它。</li></ul></div>',3),f={class:"custom-container tip"},A=l(`<p class="custom-container-title">为什么需要语义</p><p>我们在许多地方需要依赖语义学。我们依靠以前的经验就知道日常事物都代表什么；当我们看到什么，我们就会知道它代表什么。举个例子, 我们都知道红色交通灯表示“停止”，绿色交通灯表示”通行“。</p><p>同样的道理，我们需要确保使用了正确的元素来给予内容正确的意思、作用以及外形。在这里，<code>&lt;h1&gt;</code> 元素也是一个语义元素，它给出了包裹在您的页面上用来表示顶级标题的角色(或意义)的文本。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>这是一个顶级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一般来说，浏览器会给它一个更大的字形来让它看上去像个标题。虽然您可以使用 CSS 让它变成任何您想要的样式。更重要的是，它的语义值将以多种方式被使用，如被搜索引擎和屏幕阅读器利用 (正如上文提到过的)。</p><p>在另一方面，您可以让任一元素看起来像一个顶级标题，如下:</p>`,6),x=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 32px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 21px 0"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("这是顶级标题吗? "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),S=n("p",null,[s("这是一个 "),n("code",null,"<span>"),s(" 元素，它没有语义。当您想要对它用 CSS (或者 JavaScript )时，您可以用它包裹内容，且不需要附加任何额外的意义。我们已经对它使用了 CSS 来让它看起来像一个顶级标题。然而，由于它没有语义值，所以它不会有任何上文提到的帮助。最好的方法是使用相关的 HTML 元素来标记这个项目。")],-1),B=l(`<h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><p>列表在生活中随处可见，共有三种不同类型的列表。</p><h3 id="无序-unordered" tabindex="-1"><a class="header-anchor" href="#无序-unordered" aria-hidden="true">#</a> 无序 Unordered</h3><p>无序的列表中项目的顺序并不重要。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>豆浆
油条
豆汁
焦圈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每份无序的清单从 <code>&lt;ul&gt;</code> 元素开始，它包裹所有列表项目，下一步就是用 <code>&lt;li&gt;</code> 元素把每个列出的项目分别包裹起来:</p>`,6),z=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("豆浆"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("油条"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("豆汁"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("焦圈"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=l(`<h3 id="有序-ordered" tabindex="-1"><a class="header-anchor" href="#有序-ordered" aria-hidden="true">#</a> 有序 Ordered</h3><p>有序的列表将根据项目的顺序列出每一个项目:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>沿着条路走到头
右转
直行穿过第一个十字路口
在第三个十字路口处左转
继续走 300 米，学校就在您的右手边
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个标记的结构和无序列表一样，唯一不同的是您需要用 <code>&lt;ol&gt;</code> 元素将所有项目包裹, 而不是用 <code>&lt;ul&gt;</code>:</p>`,4),Y=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ol")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("沿着条路走到头"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("右转"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("直行穿过第一个十字路口"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("在第三个十字路口处左转"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("继续走 300 米，学校就在您的右手边"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ol")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("h3",{id:"描述列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述列表","aria-hidden":"true"},"#"),s(" 描述列表")],-1),V=n("h3",{id:"嵌套列表-nesting-lists",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#嵌套列表-nesting-lists","aria-hidden":"true"},"#"),s(" 嵌套列表 Nesting lists")],-1),U=n("p",null,[s("请务必注意正确嵌套列表，不要忘记父元素 "),n("code",null,"<ul>"),s("。")],-1),R=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ol")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        如果您采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("如果您在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ol")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=l(`<h2 id="重点强调" tabindex="-1"><a class="header-anchor" href="#重点强调" aria-hidden="true">#</a> 重点强调</h2><p>在人类语言中，为了突出一句话的意思，我们通常强调某些词，并且我们通常想要标记某些词作为重点或者在某种程度上的不同。HTML 提供了许多语义化的元素，并且允许我们通过这些元素的意义标记正文内容，在这个章节中，我们将看到最常见的一小部分元素。</p><h3 id="强调" tabindex="-1"><a class="header-anchor" href="#强调" aria-hidden="true">#</a> 强调</h3><p>当我们想要在口语中添加强调，我们会通过重读某些词来表达我们想要说的意思。类似的，在写作中，我们通过将文字写成斜体来强调它。比如，接下来的两个句子就有不同的含义:</p><p>I am glad you weren’t late.</p><p>I am <em>glad</em> you weren’t <em>late</em>.</p><p>第一句话听起来真的像松了一口气因为没有迟到。相反，第二句话听起来具有讽刺性而且有隐含的攻击性，表达对一个人迟到的恼怒。</p><p>在 HTML 中我们用 <code>&lt;em&gt;</code>(emphasis)元素来标记这样的情况。这样做既可以让文档读起来更有趣，也可以被屏幕阅读器识别出来，并以不同的语调发出。浏览器默认风格为斜体，但您不应该通过使用这个标签来获得斜体风格，而应该使用 <code>&lt;span&gt;</code> 元素配合一些 CSS 来实现，或者直接使用 <code>&lt;i&gt;</code> 元素(见下文)。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>I am <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>glad<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span> you weren&#39;t <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>late<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="非常重要" tabindex="-1"><a class="header-anchor" href="#非常重要" aria-hidden="true">#</a> 非常重要</h3><p>为了强调重要的词，在口语方面我们往往用重音强调，在文字方面则是用粗体字来达到强调的效果。</p><p>在 HTML 中我们用 <code>&lt;strong&gt;</code> (strong importance) 元素来标记这样的请况。这样做既可以让文档更加地有用，也可以被屏幕阅读器识别出来，并以不同的语调发出。浏览器默认风格为粗体，但您不应该通过使用这个标签来获得粗体风格，而应该使用 <code>&lt;span&gt;</code> 元素和一些 CSS 来实现，或者直接使用 <code>&lt;b&gt;</code> 元素 (见下文)。</p>`,12),L=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("This liquid is "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("strong")]),n("span",{class:"token punctuation"},">")]),s("highly toxic"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("strong")]),n("span",{class:"token punctuation"},">")]),s("."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("I am counting on you. "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("strong")]),n("span",{class:"token punctuation"},">")]),s("Do not"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("strong")]),n("span",{class:"token punctuation"},">")]),s(" be late!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("p",null,"如有需要您可以将 strong 元素和 em 元素嵌套在其他的标签中:",-1),M=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  This liquid is `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("strong")]),n("span",{class:"token punctuation"},">")]),s("highly toxic"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("strong")]),n("span",{class:"token punctuation"},">")]),s(` — if you drink it,
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("strong")]),n("span",{class:"token punctuation"},">")]),s("you may "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("em")]),n("span",{class:"token punctuation"},">")]),s("die"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("em")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("strong")]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`.
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=l('<h3 id="斜体字、粗体字、下划线" tabindex="-1"><a class="header-anchor" href="#斜体字、粗体字、下划线" aria-hidden="true">#</a> 斜体字、粗体字、下划线</h3><p>迄今为止我们已经讨论的元素都是意义清楚的语义元素。<code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, 和 <code>&lt;u&gt;</code> 的情况却有点复杂。它们出现于人们要在文本中使用粗体、斜体、下划线但 CSS 仍然不被完全支持的时期。像这样仅影响表象而没有语义的元素，被称为表象元素(presentational elements)。它们不应该再被使用。因为正如我们在之前看到的，语义对可访问性，SEO(搜索引擎优化)等非常重要。</p><p>HTML5 用新的语义规则重新定义了 <code>&lt;b&gt;</code>,<code>&lt;i&gt;</code> 和 <code>&lt;u&gt;</code>,稍微有点混乱。</p><p>这里是最好的经验法则: 使用 <code>&lt;b&gt;</code>,<code>&lt;i&gt;</code>,<code>&lt;u&gt;</code> 来传达传统意义上的粗体，斜体或下划线是合适的，没有其他元素更适合这样用了。然而，始终拥有可访问性的思维模式是至关重要的。斜体的概念对人们使用屏幕阅读器是没有帮助的，对使用其他书写系统而不是拉丁文书写系统的人们也是没有帮助的。</p><ul><li><code>&lt;i&gt;</code> 被用来传达传统上用斜体表达的意义: 外国文字，分类名称，技术术语，一种思想……</li><li><code>&lt;b&gt;</code> 被用来传达传统上用粗体表达的意义: 关键字，产品名称，引导句……</li><li><code>&lt;u&gt;</code> 被用来传达传统上用下划线表达的意义: 专有名词，拼写错误……</li></ul>',5),q=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token comment"},"<!-- 学名 -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("红喉北蜂鸟(学名: "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),n("span",{class:"token punctuation"},">")]),s("Archilocus colubris"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s(") 是北美东部最常见的蜂鸟品种。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token comment"},"<!-- 舶来词 -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  菜单上有好多舶来词汇，比如 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uk-latn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("vatrushka"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s(`(东欧乳酪面包),
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("id"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("nasi goreng"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s("(印尼炒饭)以及"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("soupe à l'oignon"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`(法式洋葱汤)。
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token comment"},"<!-- 已知的错误书写 -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("总有一天我会改掉写"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("u")]),n("span",{class:"token punctuation"},">")]),s("措字"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("u")]),n("span",{class:"token punctuation"},">")]),s("的毛病。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token comment"},"<!-- 系列说明文字中需要突出的文字 -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ol")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("b")]),n("span",{class:"token punctuation"},">")]),s("切"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("b")]),n("span",{class:"token punctuation"},">")]),s("下两片面包，"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("在两片面包中间"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("b")]),n("span",{class:"token punctuation"},">")]),s("夹入"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("b")]),n("span",{class:"token punctuation"},">")]),s("一片西红柿和一片生菜叶。"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ol")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function F(w,O){const e=c("CodeDemo"),o=c("RouterLink");return i(),u("div",null,[g,d(" more "),r,m,h,b,a(e,{id:"code-demo-16",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%AE%B5%E8%90%BD",code:"eJyrVsooyc1RslKyKbB71jHx2Yz1T3Y0PNmx6tm6rS8m7H2/p+dpb/PzOfOf7Gh/vnDd44YmG/0Cu5g8pVoAdg4f1Q=="},{default:t(()=>[v]),_:1}),E,a(e,{id:"code-demo-22",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%A0%87%E9%A2%98",code:"eJyrVsooyc1RslKyyTC0e9Yx8dmM9c+mtT9fveD5rJZnC9pfLpphow+UiclTqgUAxFIVJQ=="},{default:t(()=>[_]),_:1}),y,n("div",f,[A,a(e,{id:"code-demo-88",type:"normal",title:"%E4%B8%80%E4%B8%AA%E7%9C%8B%E8%B5%B7%E6%9D%A5%E5%BE%88%E5%83%8F%E9%A1%B6%E7%BA%A7%E6%A0%87%E9%A2%98%E7%9A%84%20span",code:"eJyrVsooyc1RslKyKS5IzFMoLqnMSbWNUUrLzyvRLc6sSrVSMDYqqLBWyE0sSs/Ms1IwMiyoUDCwjlGye7F/5rMZ618u3PZ81/JnC9pfLprxdMJ0ewUbfZBBdjF5SrUAUZ8mKg=="},{default:t(()=>[x]),_:1}),S]),B,a(e,{id:"code-demo-111",type:"normal",title:"%E6%97%A0%E5%BA%8F%E5%88%97%E8%A1%A8",code:"eJyrVsooyc1RslKyKc2xi8lTULDJybR7sbHt2dY2G30gEyb0bNPOZ3MXogiBVG1sRBF63rLs6ZwOqJCNPthIpVoA260oSw=="},{default:t(()=>[z]),_:1}),C,a(e,{id:"code-demo-124",type:"normal",title:"%E6%9C%89%E5%BA%8F%E5%88%97%E8%A1%A8",code:"eJyrVsooyc1RslKyyc+xi8lTULDJybR7tmn/87kNz+YufLF9/YutG552bHi6ZIuNPlAGpuJp/+YXe9egCD2fveXFwp7nK/e/2N/+fM2aJzsanuxY9bS38ena6UBjnvYvRjVgzgqwok40RU+XtDzdvgzD7N3Ln+9eC3SKgrGBgcLzjZvf7+l5unbZswULn27YCDTqWdOK57NagI561tn9Yt9OqF4bfbCflGoBNRh+dw=="},{default:t(()=>[Y]),_:1}),D,n("p",null,[s("详情请见 "),a(o,{to:"/ja/code/website/html/intro/format.html#%E6%8F%8F%E8%BF%B0%E5%88%97%E8%A1%A8"},{default:t(()=>[s("格式化 → 描述列表")]),_:1})]),V,U,a(e,{id:"code-demo-139",type:"normal",title:"%E4%B8%80%E4%B8%AA%E5%B5%8C%E5%A5%97%E5%88%97%E8%A1%A8",code:"eJx1lN1S2kAYhm+F4QY87zC9kl5AO2Pbk/ao05kQzA8QDKaIIsGfyo+jg4ZQIRDRe9F8u5uj3kLfzSJgR49Ivs1+7/u83y4/8h+/fd7Ov8sXvm6///Allytsf8p+czkybN64EO0qby2SSEuiyyetyNt1qlWEMyGnRW6FTTUelpOoS90BKqxusKpDHYsc7e+dI4ISs+uPmi8MhzVbj1oHxTQ6E6VI6GWyLazyeR/NafeQj8ZiUGTNGT/a4b93k6hIswkMbG7/vz/qUQ1+KHDZweRJ0zOCrSXCGgVtUmPEwpmUypwCRXlnwZ/NIh83V3xL3HabbDOZVfHZut5apOaLivB85l+t9kr015Lg8R3VbbzS3lgxve0aSSEFQFJvkcQ9qu/KTuWQVcsZSjVtGLw04KUh6pgWBabaQppHRg+rZBpYAj34ePGKHq64Hsm8bDP1TuQSXu2A3EO0BaKSYLVjsuas02Nhj2YhtNioSF0Lfd42S/4FBFPL4fstWMvG+nwqwpmUypxCATYxejBh0Ggv7s9Z11M0S7OBC7Nc99J+Szkis8Ya92ASlRE+5qFHniP2Ruz6Vs7gdsoB1McY9PTIxRYVQ2rVWDN40Xkdg8fLFtnxqr/K7NUJ8XjA46HatQwA5N/VfcmeVylkSfR1duwz/SK1ZGRseE7XBzTtCNen4hEb78uIfU0m4V6meKicKjLeOMElyKbiycNjncI7BSNybzB+UIIjmZsrCxtzeHax0sY4yDnAbZJ07o3SSOMd/stHMvK8ls5EvUM1+SrD3JR/iOEA/pQk9DZ0CltL8GWtsJX9ceR//gN6ia6k"},{default:t(()=>[R]),_:1}),J,a(e,{id:"code-demo-176",type:"normal",title:"%E5%BC%BA%E8%B0%83",code:"eJw9zDsKhTAQheGtnJsFaH8JqWzsLW18kQzEGR8TUMS9Kyh2hwPff5igYzR/YydXBVoRaU7U41521UXYu0A+xB0qG3U2f8/M5pOruebblWhGdJJYiT2EsUvKPl4IWPSDaAfERoffEzDnBbQnLVw="},{default:t(()=>[L]),_:1}),T,a(e,{id:"code-demo-182",type:"normal",title:"%E6%A0%87%E7%AD%BE%E7%9A%84%E5%B5%8C%E5%A5%97",code:"eJw1TUsKgzAUvMqQdWn25ZFTdOmmNNYMzafVCA1F8BCe0JNoQFczzPevXA5e3ZR8TBOBu+MAz+9Ii53JkPsUO+PYOV+Q049P0YeIdV7AF0oaYXvGN5gvdeRsVSM8CqQNxrIVvePZrjlzbaLoeqymDQ5DL/U="},{default:t(()=>[M]),_:1}),N,a(e,{id:"code-demo-214",type:"normal",title:"%E6%96%9C%E4%BD%93%E5%AD%97%E3%80%81%E7%B2%97%E4%BD%93%E5%AD%97%E3%80%81%E4%B8%8B%E5%88%92%E7%BA%BF",code:"eJxdkl9v0lAYxr/KsTdCIun9cjyJ34MbwAnNakuAemNMCoqFjT9usnXDLpilhUkkHUJmGegu/Cj2Pae98it42upYdnve5/c+z/u0r4VS7aUs7Aj4USaDYDaGD12UyZCsgsuE3VzASRs6ZmA1Qm+USsY7CEvkWaVQkmS1oFVRQZW1fEWqYlEiaURPXQ6wnz3fs8K3l9TSwfOCSZ0N3yVb4GOdTbq/9QYWy9yGG0XOQeuanjuBuzXPKggFfQu6x763T602OD/AHt7p6Nz4s+lQdwDjBg+E5JxSfJoVtL2MnKspWYG8ytUqWrW0l4typXga+nXirxZhcxqeX0CnmX4SOWxJ6TmHlFxVQkW1sqsUYwy6V3C1YY2j0Jml/bUD/f0t8aLCiaqqlXfRr89IfqxKRUVVOBctJim6OIZNny4PgsM5ndtpfjI/7P7R8P0bGzm8mXBwFriuvxrD+7O7Aqi+5mf7ng72F9o69DdDOljRXptrsEZobwozE4sa4Tx1PzGz+bBTtlhDywzcJT3t0RODy31vFlp6MK6zaR2Mm4iM3/95qnLcOpYlgvMEWgYW88T3DnzPZm0jqY2XjkUu+C8E6/L+OHIwlxFtr6DpJAt0Pg6cW/470dEtHHWSFzYYRd+3fx3njldiMY4gvPkLXYVbzA=="},{default:t(()=>[q]),_:1})])}const G=p(k,[["render",F],["__file","basic.html.vue"]]);export{G as default};
