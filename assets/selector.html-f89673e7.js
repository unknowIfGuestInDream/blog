import{_ as l,W as i,X as p,$ as r,a0 as a,a1 as d,Y as s,Z as n,a2 as c,G as t}from"./framework-0e132572.js";const u={},h=s("p",null,"CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。",-1),v=s("p",null,"选择器所选择的元素，叫做“选择器的对象”。",-1),k=s("div",{class:"language-html line-numbers-mode","data-ext":"html"},[s("pre",{class:"language-html"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("img")]),n(),s("span",{class:"token attr-name"},"src"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("/logo.svg"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token attr-name"},"alt"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("logo"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token special-attr"},[s("span",{class:"token attr-name"},"style"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),s("span",{class:"token value css language-css"},[s("span",{class:"token property"},"max-width"),s("span",{class:"token punctuation"},":"),n(" 150px")]),s("span",{class:"token punctuation"},'"')])]),n(),s("span",{class:"token punctuation"},"/>")]),n(`

`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("p")]),n(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("paragraph"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Mr.Hope is handsome!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("p")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("p")]),n(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("par"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("Mr.Hope is very handsome!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("p")]),s("span",{class:"token punctuation"},">")]),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),m=s("div",{class:"language-css line-numbers-mode","data-ext":"css"},[s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"token selector"},"p"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),n(" red"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token selector"},".paragraph"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),n(" red"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token selector"},"#par"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),n(" blue"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=c(`<p>在上文中，CSS 选择器选中了对应的 HTML 元素并为其应用样式规则。</p><h2 id="id-选择器" tabindex="-1"><a class="header-anchor" href="#id-选择器" aria-hidden="true">#</a> ID 选择器</h2><p>ID 选择器可以为标有特定 ID 的 HTML 元素指定特定的样式。</p><p>HTML 可以用 ID 属性来设置 ID 选择器，CSS 中 ID 选择器以 <code>#</code> 来定义。</p><p>以下的样式规则应用于元素属性 <code>id=&quot;para1&quot;</code>:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#para1</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>ID 的全称是 Identify，是身份标识的意思。ID 的实际作用是为这个 HTML 标签绑定一个页面内唯一的标识符。因此，每一个 HTML 页面出现的 ID 应该仅被使用一次，以 ID 来代指这个元素。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>ID 属性不要以数字开头，数字开头的 ID 在 <code>Mozilla/Firefox</code> 浏览器中不起作用。</p></div><h2 id="class-选择器" tabindex="-1"><a class="header-anchor" href="#class-选择器" aria-hidden="true">#</a> Class 选择器</h2><p>Class 选择器用于描述一组元素的样式，class 选择器有别于 ID 选择器，class 可以在多个元素中使用。</p><p>Class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以句点 (<code>.</code>) 显示:</p><p>在以下的例子中，所有拥有 center 类的 HTML 元素均为居中。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签选择器" tabindex="-1"><a class="header-anchor" href="#标签选择器" aria-hidden="true">#</a> 标签选择器</h2><p>标签选择器用于指定一个 HTML 标签的样式。通常，浏览器会为每个特定的 HTML 标签指定一个默认样式，但是不同的浏览器的默认样式可能有细微的区别。</p><p>有些时候想要覆盖浏览器的默认样式，或者说想在所有浏览器中保持统一样式，即可使用标签选择器指定标签的默认样式。在 CSS 指定的标签样式会覆盖掉浏览器默认指定的样式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 确保所有浏览器的段落标签的字体大小均为16像素。*/</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2><p>属性选择器根据一个元素上的某个标签的属性的存在以选择元素的不同方式:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a[title]</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者根据一个有特定值的标签属性是否存在来选择:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a[href=&quot;https://example.com&quot;]</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪类与伪元素" tabindex="-1"><a class="header-anchor" href="#伪类与伪元素" aria-hidden="true">#</a> 伪类与伪元素</h2><h3 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> 伪类</h3><p>选择器可以包含伪类，用来样式化一个元素的特定状态。</p><p>例如 <code>:hover</code> 伪类会在鼠标指针悬浮到一个元素上的时候选择这个元素:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:hover</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其他的常见伪类还有 <code>:visited</code> <code>:active</code> <code>:focus</code> 等。</p><h3 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h3><p>选择器也可以包含伪元素，选择一个元素的某个部分而不是元素自己。</p><p>例如 <code>::first-line</code> 会选择一个元素(下面的情况中是 <code>&lt;p&gt;</code>)中的第一行。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p::first-line</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其他的常见伪元素还有 <code>::before</code> <code>::after</code> <code>::fist-letter</code> <code>::last-child</code> 等。</p>`,33),b={class:"hint-container info"},_=s("p",{class:"hint-container-title"},"相关信息",-1),f={href:"https://www.runoob.com/cssref/css-selectors.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",target:"_blank",rel:"noopener noreferrer"},C={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",target:"_blank",rel:"noopener noreferrer"},S=c(`<h2 id="通用选择器" tabindex="-1"><a class="header-anchor" href="#通用选择器" aria-hidden="true">#</a> 通用选择器</h2><p>通用选择器 <code>*</code> 会选中所有元素</p><h2 id="选择器列表" tabindex="-1"><a class="header-anchor" href="#选择器列表" aria-hidden="true">#</a> 选择器列表</h2><p>可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。例如:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p,
li,
.tag,
#link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><p>选择器可以通过运算符，构成更加复杂的选择器。</p><p>常见的运算符主要有四种:</p><ul><li><p>后代选择器</p><p>以空格分隔，用于选取某元素的后代元素</p></li><li><p>子元素选择器</p><p>以大于号 <code>&gt;</code> 分隔，只能选择作为某元素子元素的元素</p></li><li><p>相邻兄弟选择器</p><p>加号 <code>+</code> 分隔，选择紧接某元素后的另一元素。</p></li><li><p>通用兄弟选择器</p><p>波浪线 <code>~</code> 分隔，选择紧接一元素后所有的同级的另一元素</p></li></ul><div class="hint-container tip"><p class="hint-container-title">选择器案例</p><ul><li><p><code>p{ }</code>: 为所有 <strong>p</strong> 元素指定一个样式。</p></li><li><p><code>.marked{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 的元素指定一个样式。</p></li><li><p><code>.marked p{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 元素内的 <strong>p</strong> 元素指定一个样式。</p></li><li><p><code>p.marked{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 的 <strong>p</strong> 元素指定一个样式。</p></li></ul></div>`,10),M={class:"hint-container info"},q=s("p",{class:"hint-container-title"},"相关信息",-1),E={href:"https://www.runoob.com/cssref/css-selectors.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#%E9%80%89%E6%8B%A9%E5%99%A8%E5%8F%82%E8%80%83%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"};function D(y,H){const o=t("CodeDemo"),e=t("ExternalLinkIcon");return i(),p("div",null,[h,v,r(" more "),a(o,{id:"code-demo-7",type:"normal",title:"%E6%A1%88%E4%BE%8B",code:"eJx1jr0OgkAQhF9lXVsFLWwQqW18g2tOuMAl95fbEyGEd3cJiQkmljPzTWYm7JI1WGCpbQsU65vA3PjWZ9S3AkGaxM5isKA0GsXSyuH41k3qCjhfTmHgKK+EE64MUBtJxEyQUbZRhk5g9YjZ3QcFmqCTriFv1a7MA1e4oJuV3nK9iuMvjAesifhrgEk4gNobHwuIqrkKNy/72Xf1H7FnYpM9zUutIc4fhEJbQg=="},{default:d(()=>[k,m]),_:1}),g,s("div",b,[_,s("p",null,[n("关于全部的伪类与伪元素选择器，请见 "),s("a",f,[n("菜鸟教程"),a(e)]),n(" 或 "),s("a",x,[n("MDN 伪类"),a(e)]),n(),s("a",C,[n("MDN 伪元素"),a(e)]),n("。")])]),S,s("div",M,[q,s("p",null,[n("更多高级选择器，请见 "),s("a",E,[n("菜鸟教程"),a(e)]),n(" 或 "),s("a",I,[n("MDN 参考表"),a(e)])])])])}const T=l(u,[["render",D],["__file","selector.html.vue"]]);export{T as default};
