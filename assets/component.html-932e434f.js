import{_ as l,W as d,X as s,Y as t,Z as n,a0 as r,$ as o,a2 as e,G as c}from"./framework-4fdeb3a3.js";const u={},i={href:"https://developers.weixin.qq.com/miniprogram/dev/component/",target:"_blank",rel:"noopener noreferrer"},p=e(`<p>什么是组件:</p><ul><li><p>组件是视图层的基本组成单元。</p></li><li><p>组件自带一些功能与微信风格一致的样式。</p></li><li><p>一个组件通常包括 <strong>开始标签</strong> 和 <strong>结束标签</strong>，属性 用来修饰这个组件，内容 在两个标签之内。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tagname</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
Content goes here ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tagname</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>所有组件与属性都是小写，以连字符 <code>-</code> 连接</p></div></li></ul>`,2),h=t("h2",{id:"属性类型",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#属性类型","aria-hidden":"true"},"#"),n(" 属性类型")],-1),m=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"类型"),t("th",null,"描述"),t("th",null,"注解")])]),t("tbody",null,[t("tr",null,[t("td",null,"Boolean"),t("td",null,"布尔值"),t("td",null,[n("组件写上该属性，不管是什么值都被当作 "),t("code",null,"true"),n("；只有组件上没有该属性时，属性值才为 "),t("code",null,"false"),n("。"),t("br"),n("如果属性值为变量，变量的值会被转换为 Boolean 类型")])]),t("tr",null,[t("td",null,"Number"),t("td",null,"数字"),t("td",null,"1, 2.5")]),t("tr",null,[t("td",null,"String"),t("td",null,"字符串"),t("td",null,'"string"')]),t("tr",null,[t("td",null,"Array"),t("td",null,"数组"),t("td",null,'[ 1, "string" ]')]),t("tr",{"key:":"",value:""},[t("td",null,"Object"),t("td",null,"对象"),t("td")]),t("tr",null,[t("td",null,"EventHandler"),t("td",null,"事件处理函数名"),t("td",null,[t("code",null,'"handlerName"'),n(" 是 "),t("code",null,"Page"),n(" 中定义的事件处理函数名")])]),t("tr",null,[t("td",null,"Any"),t("td",null,"任意属性"),t("td")])])],-1),g=e('<h2 id="公共属性" tabindex="-1"><a class="header-anchor" href="#公共属性" aria-hidden="true">#</a> 公共属性</h2><p>所有组件都有以下属性:</p><table><thead><tr><th>属性名</th><th>类型</th><th>描述</th><th>注解</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>组件的唯一标示</td><td>保持整个页面唯一</td></tr><tr><td>class</td><td>String</td><td>组件的样式类</td><td>在对应的 WXSS 中定义的样式类</td></tr><tr><td>style</td><td>String</td><td>组件的内联样式</td><td>可以动态设置的内联样式</td></tr><tr><td>hidden</td><td>Boolean</td><td>组件是否显示</td><td>所有组件默认显示</td></tr><tr><td>data-*</td><td>Any</td><td>自定义属性</td><td>组件上触发的事件时，会发送给事件处理函数</td></tr><tr><td>bind* / catch*</td><td>EventHandler</td><td>组件的事件</td><td>详见事件</td></tr></tbody></table><h2 id="特殊属性" tabindex="-1"><a class="header-anchor" href="#特殊属性" aria-hidden="true">#</a> 特殊属性</h2><p>几乎所有组件都有各自定义的属性，可以对该组件的功能或样式进行修饰，请参考各个组件的定义。</p>',5);function _(v,b){const a=c("ExternalLinkIcon");return d(),s("div",null,[t("p",null,[n("框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 "),t("a",i,[n("组件文档"),r(a)]),n("。")]),p,o(" more "),h,m,g])}const x=l(u,[["render",_],["__file","component.html.vue"]]);export{x as default};
