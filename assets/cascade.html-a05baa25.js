import{_ as o,X as l,Y as i,a0 as p,a1 as e,a2 as c,Z as n,a3 as a,H as u,$ as s}from"./framework-0ff09816.js";const d={},r=n("p",null,"本文介绍 CSS 的一些最基本的概念: 层叠、优先级和继承。",-1),k=a(`<h2 id="冲突规则" tabindex="-1"><a class="header-anchor" href="#冲突规则" aria-hidden="true">#</a> 冲突规则</h2><p>CSS 代表层叠样式表，我们需要理解第一个词 cascading。</p><p><strong>Cascade</strong>, 和它密切相关的概念是 <strong>Specificity</strong>，决定在发生冲突的时候应该使用哪条规则。</p><p>这里也有继承的概念，也就是在默认情况下，一些 CSS 属性继承当前元素的父元素上设置的值，有些则不继承。这也可能导致一些和期望不同的结果。</p><h3 id="层叠" tabindex="-1"><a class="header-anchor" href="#层叠" aria-hidden="true">#</a> 层叠</h3><p>Style sheets cascade(样式表层叠) 决定了 CSS 规则的顺序很重要。</p><p>当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。</p><p><strong>案例</strong>: 我们有两个关于 <code>h1</code> 的规则。这些规则有相同的优先级，顺序在最后的生效，所以 <code>h1</code> 最后显示为蓝色。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>unknowIfGuestInDream is handsome!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h3><p>浏览器是根据优先级来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则。它基本上是一个衡量选择器具体选择哪些区域的尺度:</p><ul><li>一个元素选择器不是很具体 (它会选择页面上该类型的所有元素)，所以它的优先级就会低一些。</li><li>一个类选择器稍微具体点 (它会选择该页面中有特定 class 属性值的元素)，所以它的优先级就要高一点。</li></ul>`,13),m=n("p",null,[s("上面的 "),n("code",null,"h1"),s(" 会显示红色 (类选择器有更高的优先级，即使元素选择器顺序在它后面)。")],-1),h=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("main-heading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("unknowIfGuestInDream is handsome!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".main-heading"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"h1"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=a(`<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>一些设置在父元素上的 CSS 属性是可以被子元素继承的，有些则不能。</p><p><strong>案例</strong>: 如果您设置一个元素的 <code>color</code> 和 <code>font-family</code> ，默认情况下每个在里面的元素也都会有相同的属性。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 整个文档的文字默认情况下都是蓝的，除非针对性的设置为其他颜色 */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>一些属性是不能继承的。比如您在一个元素上设置 <code>width: 50%</code> ，所有的后代不会是父元素的宽度的 50%。如果这个也可以继承的话，CSS 就会很难使用了!</p></div><h2 id="理解继承" tabindex="-1"><a class="header-anchor" href="#理解继承" aria-hidden="true">#</a> 理解继承</h2><p>我们从继承开始。下面的例子中我们有一个 <code>ul</code>，里面有两个无序列表。我们已经给 <code>&lt;ul&gt;</code> 设置了 <code>border</code>， <code>padding</code> 和 <code>color</code>.</p><p><code>color</code> 应用在直接子元素，也影响其他后代，如子元素 <code>&lt;li&gt;</code>，和第一个嵌套列表中的子项。然后添加了一个 <code>special</code> 类到第二个嵌套列表。该类声明了不同的颜色。然后通过它的子元素继承。</p>`,8),b=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("main"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Item One"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    Item Two
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("2.1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("2.2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    Item Three
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("special"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        3.1
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("3.1.1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("3.1.2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("3.2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".main"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" rebeccapurple"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 2px solid #ccc"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 1em"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".special"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" black"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" bold"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=a('<p>像 <code>width</code> (上面提到的), <code>margin</code>, <code>padding</code>, 和 <code>border</code> 不会被继承。如果 <code>border</code> 可以被继承，每个列表和列表项都会获得一个边框 — 可能就不是我们想要的结果!</p><p>哪些属性属于默认继承很大程度上是由常识决定的。</p><h3 id="控制继承" tabindex="-1"><a class="header-anchor" href="#控制继承" aria-hidden="true">#</a> 控制继承</h3><p>CSS 为控制继承提供了四个特殊的通用属性值。每个 CSS 属性都接收这些值。</p><ul><li><code>inherit</code>: 使子元素属性和父元素相同。实际上就是 &quot;开启继承&quot;.</li><li><code>initial</code>: 与浏览器默认样式相同。如果浏览器默认样式中未设置且该属性是自然继承的，那么会设置为 <code>inherit</code>。</li><li><code>unset</code>: 将属性重置为自然值，也就是如果属性是自然继承那么就是 <code>inherit</code>，否则和 <code>initial</code> 一样</li></ul><div class="hint-container info"><p class="hint-container-title">Info</p><p>还有一个属性 <code>revert</code>，但只有很少的浏览器支持。</p></div><h3 id="重设所有属性值" tabindex="-1"><a class="header-anchor" href="#重设所有属性值" aria-hidden="true">#</a> 重设所有属性值</h3><p>CSS 的缩写属性 <code>all</code> 可以用于同时将这些继承值中的一个应用于(几乎)所有属性。它的值可以是其中任意一个(<code>inherit</code>, <code>initial</code>, <code>unset</code>, <code>revert</code>)。这是一种撤销对样式所做更改的简便方法，以便回到默认状态。</p>',8),_=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("blockquote")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("This blockquote is styled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("blockquote")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("blockquote")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fix-this"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("This blockquote is not styled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("blockquote")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"blockquote"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 2px solid green"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".fix-this"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"all"),n("span",{class:"token punctuation"},":"),s(" unset"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=a(`<h2 id="理解层叠" tabindex="-1"><a class="header-anchor" href="#理解层叠" aria-hidden="true">#</a> 理解层叠</h2><p>有三个因素需要考虑，根据重要性排序如下:</p><ol><li>重要程度</li><li>优先级</li><li>资源顺序</li></ol><p>我们从下往上，看看浏览器是如何决定该应用哪个 CSS 规则的。</p><h3 id="资源顺序" tabindex="-1"><a class="header-anchor" href="#资源顺序" aria-hidden="true">#</a> 资源顺序</h3><p>我们已经看到了顺序对于层叠的重要性。如果您有超过一条规则，而且都是相同的权重，那么最后面的规则会应用。可以理解为后面的规则覆盖前面的规则，直到最后一个开始设置样式。</p><h3 id="优先级计算" tabindex="-1"><a class="header-anchor" href="#优先级计算" aria-hidden="true">#</a> 优先级计算</h3><p>在您了解了顺序的重要性后，会发现在一些情况下，有些规则在最后出现，但是却应用了前面的规则。</p><p>只要前面的有更高的优先级，浏览器就把它选择为元素的样式。就像前面看到的，类选择器的权重大于元素选择器，因此类上定义的属性将覆盖应用于元素上的属性。</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>虽然我们考虑的是选择器，但是只有相同的属性会被覆盖，不会覆盖所有规则，也就是说优先级低的选择器的其他不冲突声明仍会生效。</p></div><div class="hint-container tip"><p class="hint-container-title">技巧</p><p>一种常见的做法是给基本元素定义通用样式，然后给不同的元素创建对应的类。</p><p>比如我的博客对很多标签的样式进行了调整(比如减小了 <code>&lt;h1&gt;</code> 的字体大小以及标题的字体粗细)，并通过类来对特定区域的标签进行进一步的样式调整。</p></div><p>本质上，不同类型的选择器有不同的分数值，把这些分数相加就得到特定选择器的权重，然后就可以进行匹配。</p><p>一个选择器的优先级可以说是由四个部分相加 (分量)，可以认为是个十百千 — 四位数的四个位数:</p><ul><li>千位: 如果声明在 style 的属性(内联样式)则该位得一分。这样的声明没有选择器，所以它得分总是 1000。</li><li>百位: 选择器中包含 ID 选择器则该位得一分。</li><li>十位: 选择器中包含类选择器、属性选择器或者伪类则该位得一分。</li><li>个位: 选择器中包含元素、伪元素选择器则该位得一分。</li></ul><div class="hint-container warning"><p class="hint-container-title">Note</p><p>通用选择器 (<code>*</code>)，组合符 (<code>+</code>, <code>&gt;</code>, <code>~</code>, 空格)，和否定伪类 (<code>:not</code>) 不会影响优先级。</p></div><div class="hint-container danger"><p class="hint-container-title">Warning</p><p>在进行计算时不允许进行进位，例如，20 个类选择器仅仅意味着 20 个十位，而不能视为 两个百位，也就是说，无论多少个类选择器的权重叠加，都不会超过一个 ID 选择器。</p></div><h2 id="important" tabindex="-1"><a class="header-anchor" href="#important" aria-hidden="true">#</a> !important</h2><p><code>!important</code> 可以用来覆盖所有上面所有优先级计算。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">button</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>请不要滥用 <code>!important</code>，只有在不得不使用的情况下再进行使用。</p><p>覆盖 <code>!important</code> 唯一的办法就是另一个 <code>!important</code> 具有相同优先级而且顺序靠后，或者更高优先级。</p></div>`,20);function C(E,w){const t=u("CodeDemo");return l(),i("div",null,[r,p(" more "),k,e(t,{id:"code-demo-48",type:"normal",title:"%E6%A1%88%E4%BE%8B",code:"eJxNzT0OwjAMQOGrGM/8qGspnZBQ7+AlJAZHJI4UN2KoencqsXR+0vcWlDkn7HGQDnxyZjfC7KKehF2I+iYcm360fKfXo7HNk94ruwzRQJwGK5kPw0W6kRSP6M0267wHYCEF8CWV2kPlcCVdSUm33748U+N/wvUH9jIzRg=="},{default:c(()=>[m,h,g]),_:1}),v,e(t,{id:"code-demo-79",type:"normal",title:"%E7%BB%A7%E6%89%BF%E6%A1%88%E4%BE%8B",code:"eJx9UDFuwzAM/Aqhrq0DO5vrZu/UpaMWmWJjobQkSA5SIMjfK9uy4wRoJ+nueIcjL6Ibeha1aE4MyCrGNyl6ZawUB2kBGjaH94F6+LDU7BJYyPEFmKTPs5tRysj8PFMV5eq5cdWGa3bZ8md2F4jW9LVh9IRGcS65ZC9/gH1R3sC21jKaBh7KbZVtxbuaM3hYaf/vShmLZ4ExpkMX43XhMk6gYxdqCNQSovKn4JleR6F1QVNSKv8D0bHR8ISIk+SV1sYeayipT8RVWmmLfI671JYVfk+WL2eHlzOZYzck2rGefeL6CwJVkuM="},{default:c(()=>[b,f]),_:1}),x,e(t,{id:"code-demo-123",type:"normal",title:"%E9%87%8D%E8%AE%BE%E6%89%80%E6%9C%89%E5%B1%9E%E6%80%A7%E5%80%BC",code:"eJx9jk0OgjAQha8ymbVI4hIrp3DJBtoKhLGDnZJgCHe3SIywYfn+vrwJm/AkzFBVxLp7DRxsXjgA1ef3phX42xCVhDdZo9I+dlS6m0Rj09VUitwKfLRjEiKnwAOq43BExhNqkfhxs5oWWlXqrvY8OJNoJvYZeGuu34S9sVFf+hGEqTVQe2tdzObl6fl3a+WURBkMTmxYCzh/AK6CY9I="},{default:c(()=>[_,S]),_:1}),y])}const q=o(d,[["render",C],["__file","cascade.html.vue"]]);export{q as default};
