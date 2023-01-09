import{_ as c}from"./css-rule-26c1abf5.js";import{_ as i,W as o,X as p,$ as d,Y as s,Z as n,a0 as e,a1 as t,a2 as l,F as r}from"./framework-d8ef9316.js";const u={},v=s("p",null,[n("CSS 指层叠样式表 ("),s("strong",null,"C"),n("ascading "),s("strong",null,"S"),n("tyle "),s("strong",null,"S"),n("heets)。")],-1),h=l(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。举例来说，要选择一个 HTML 页面里所有的段落元素，然后将其中的文本改成红色，可以这样写 CSS:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以很方便的创建一个 <code>&lt;style&gt;</code> 标签并将上述样式表作为该标签的内容，这样页面所有段落的文字就会变成红色。</p><h2 id="css-规则集" tabindex="-1"><a class="header-anchor" href="#css-规则集" aria-hidden="true">#</a> CSS 规则集</h2><p>CSS 规则集由两个主要的部分构成: 选择器，以及一条或多条声明:</p><p><img src="`+c+'" alt="CSS 规则图示" loading="lazy"></p><ul><li><p><strong>选择器</strong> (Selector): 通常是您需要改变样式的 HTML 元素。</p></li><li><p><strong>声明</strong> (Declaration): 每条声明由一个属性和一个值组成。每个属性有一个值。</p><ul><li><strong>属性</strong> (Properties): 您希望设置的样式属性 (style attribute)，也是改变 HTML 元素样式的途径。(本例中 color 就是 <code>&lt;h1&gt;</code> 元素的属性) CSS 中，由编写人员决定修改哪个属性以改变规则。</li><li><strong>属性的值</strong> (Property value): 在属性的右边，冒号后面即属性的值，它从指定属性的众多外观中选择一个值 (我们除了 blue 之外还有很多属性值可以用于 color )。</li></ul></li></ul>',8),m={class:"hint-container tip"},k=s("p",{class:"hint-container-title"},"语法",-1),b=s("ul",null,[s("li",null,[n("每个规则集声明都应该包含在成对的花括号 "),s("code",null,"{}"),n(" 里")]),s("li",null,[n("在每个声明里要用冒号 "),s("code",null,":"),n(" 将属性与属性值分隔开")]),s("li",null,[n("每个声明总是以分号 "),s("code",null,";"),n(" 结束，以分隔多个声明。")])],-1),S=l(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>CSS 块内的每一条声明都必须以分号结束，否则会报错(最后一条除外)，而每个 CSS 块不是以分号结束的!</p></div><h3 id="css-注释" tabindex="-1"><a class="header-anchor" href="#css-注释" aria-hidden="true">#</a> CSS 注释</h3><p>与 HTML 一样，CSS 也可以包含注释来解释您的代码，浏览器会忽略它。</p><p>CSS 注释以 <code>/*</code> 开始, 以 <code>*/</code> 结束。</p><p><strong>案例</strong>:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 这是个注释 */</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/* 这是另一个注释 */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> arial<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">总结</p><ul><li>样式定义如何显示 HTML 元素</li><li>样式通常存储在样式表中</li><li>CSS 可以将多个样式层叠为一</li></ul></div><h2 id="css-选择器" tabindex="-1"><a class="header-anchor" href="#css-选择器" aria-hidden="true">#</a> CSS 选择器</h2><p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。</p><p>选择器所选择的元素，叫做“选择器的对象”。</p>`,11),g=s("h2",{id:"引入-css",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#引入-css","aria-hidden":"true"},"#"),n(" 引入 CSS")],-1),_=s("p",null,"共有三种方式引入并应用 CSS。",-1),C=l(`<h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则" aria-hidden="true">#</a> @ 规则</h2><p><code>@rules</code> 是一些特殊的规则，为 CSS 提供了一些关于如何表现的指导。有些 <code>@rules</code> 规则很简单，有规则名和值。</p><p>例如，要将额外的样式表导入主 CSS 样式表，可以使用 <code>@import</code>:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;styles2.css&quot;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最常见的 <code>@rules</code> 之一是 <code>@media</code>，它允许您使用 媒体查询 来应用 CSS，仅当某些条件成立 (例如，当屏幕分辨率高于某一数量，或屏幕宽度大于某一宽度时)。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 540px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),f={class:"hint-container info"},x=s("p",{class:"hint-container-title"},"相关信息",-1);function y(L,T){const a=r("RouterLink");return o(),p("div",null,[v,d(" more "),h,s("div",m,[k,b,s("p",null,[n("更多声明详情，请见 "),e(a,{to:"/code/website/css/guide/declaration.html"},{default:t(()=>[n("CSS → 快速上手 → 声明")]),_:1})])]),S,s("ul",null,[s("li",null,[e(a,{to:"/code/website/css/guide/selector.html"},{default:t(()=>[n("查看详情")]),_:1})])]),g,_,s("ul",null,[s("li",null,[e(a,{to:"/code/website/css/guide/import.html"},{default:t(()=>[n("查看详情")]),_:1})])]),C,s("div",f,[x,s("p",null,[n("更多详情，请见 "),e(a,{to:"/code/website/css/intro/media.html"},{default:t(()=>[n("CSS → 媒体查询")]),_:1})])])])}const w=i(u,[["render",y],["__file","index.html.vue"]]);export{w as default};
