import{_ as p,W as c,X as o,$ as l,Y as n,Z as a,a0 as t,a2 as e,G as i}from"./framework-0e132572.js";const u={},d=n("p",null,"Vue-cli 提供的 vue 单文件语法与小程序基本相似，甚至可以说小程序是改变自 Vue 与 React 框架的。",-1),r=e(`<h2 id="优缺点比较" tabindex="-1"><a class="header-anchor" href="#优缺点比较" aria-hidden="true">#</a> 优缺点比较</h2><table><thead><tr><th></th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>小程序</td><td>小程序底层由微信框架驱动，每个界面是单独的 JS 文件，页面切换以及全局生命周期丰富完善。小程序具有相当完备的 API。</td><td>小程序是由 JSCore 驱动逻辑层，视图层采用 Webview，故没有 DOM 节点的概念，只有渲染出的虚拟节点，所以无法动态删除或添加节点，无法使用一切 DOM 相关 API。小程序组件生命周期不够强大。小程序的 Webview 渲染存在一定的性能问题。小程序视图层与逻辑层通过 Jsbridge 连接，数据传输及渲染有延时。</td></tr><tr><td>vue</td><td>Vue 的实质是动态监测并托管 DOM 节点。由于 Vue 是网页开发，拥有 DOM 树，可以使用 DOM 相关 API。Vue 组件拥有更全面的生命周期，同时可以动态渲染组件。Vue 的组件传递数据方式默认为单向绑定</td><td>由于 Vue 的组件本质是监测 DOM 树，故其组件只能有一个根节点。同时 Vue 的界面路由依赖于 History API，其界面切换周期与逻辑不够强大。</td></tr></tbody></table><h2 id="代码区别" tabindex="-1"><a class="header-anchor" href="#代码区别" aria-hidden="true">#</a> 代码区别</h2><p>小程序与 Vue 在代码写法上极其相似，但稍有不同。</p><h3 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h3><h4 id="小程序数据绑定" tabindex="-1"><a class="header-anchor" href="#小程序数据绑定" aria-hidden="true">#</a> 小程序数据绑定</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text1 {{a}} {{b?:&#39;b为真&#39;:&#39;b为假&#39;}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),k=n("div",null,[n("p",null,[a("小程序在所有内容上都使用 Muscle 语法 ("),n("code",{"v-pre":""},"{{Javascript表达式}}"),a(") 的写法。")])],-1),v=e(`<h4 id="vue-数据绑定" tabindex="-1"><a class="header-anchor" href="#vue-数据绑定" aria-hidden="true">#</a> Vue 数据绑定</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a+&#39; &#39;+ b?:&#39;b为真&#39;:&#39;b为假&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>Vue 在标签名属性用 <code>v-bind:prop=&quot;Javascript表达式&quot;</code> 的写法、其简写为 <code>:prop=&quot;&quot;</code>，在标签内容处使用 Muscle 语法。</p></div><h3 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h3><h4 id="小程序条件渲染" tabindex="-1"><a class="header-anchor" href="#小程序条件渲染" aria-hidden="true">#</a> 小程序条件渲染</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition1}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>板块只有 condition1 为 true 时才会渲染<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition2}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
    这是一个拥有很多兄弟标签的代码块.
    虚拟标签 block 会把其当作一个整体用作条件渲染。
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),g={class:"hint-container info"},h=n("p",{class:"hint-container-title"},"関連情報",-1),m={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/conditional.html",target:"_blank",rel:"noopener noreferrer"},b=e(`<h4 id="vue-条件渲染" tabindex="-1"><a class="header-anchor" href="#vue-条件渲染" aria-hidden="true">#</a> Vue 条件渲染</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>condition<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>板块只有 condition 为 true 时才会渲染<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition2}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    Vue 没有相关虚拟标签，且只能监听一个标签。所以只能建立一个没有样式的 div
    标签将多个并列标签抱起来。这样 Vue 就会因监听最外层 div
    会把其当作一个整体用作条件渲染。
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={class:"hint-container info"},x=n("p",{class:"hint-container-title"},"関連情報",-1),f={href:"https://cn.vuejs.org/v2/guide/#%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF",target:"_blank",rel:"noopener noreferrer"},w=e(`<h3 id="循环渲染" tabindex="-1"><a class="header-anchor" href="#循环渲染" aria-hidden="true">#</a> 循环渲染</h3><h4 id="小程序循环渲染" tabindex="-1"><a class="header-anchor" href="#小程序循环渲染" aria-hidden="true">#</a> 小程序循环渲染</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{array}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{index}} is {{element}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际渲染结果为:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),q={class:"hint-container info"},V=n("p",{class:"hint-container-title"},"関連情報",-1),E={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/list.html",target:"_blank",rel:"noopener noreferrer"},B=e(`<h4 id="vue-循环渲染" tabindex="-1"><a class="header-anchor" href="#vue-循环渲染" aria-hidden="true">#</a> Vue 循环渲染</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(element,index) in array<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       {{index}} is {{ element }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),A={class:"hint-container info"},y=n("p",{class:"hint-container-title"},"関連情報",-1),D={href:"https://cn.vuejs.org/v2/guide/#%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF",target:"_blank",rel:"noopener noreferrer"},M=e('<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h3><h4 id="小程序生命周期" tabindex="-1"><a class="header-anchor" href="#小程序生命周期" aria-hidden="true">#</a> 小程序生命周期</h4><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png" alt="小程序页面生命周期" loading="lazy"></p><h4 id="vue-页面生命周期" tabindex="-1"><a class="header-anchor" href="#vue-页面生命周期" aria-hidden="true">#</a> Vue 页面生命周期</h4>',5),I={href:"https://router.vuejs.org/guide/advanced/navigation-guards.html",target:"_blank",rel:"noopener noreferrer"},O=n("h3",{id:"组件生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#组件生命周期","aria-hidden":"true"},"#"),a(" 组件生命周期")],-1),J=n("h4",{id:"小程序组件生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#小程序组件生命周期","aria-hidden":"true"},"#"),a(" 小程序组件生命周期")],-1),N={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html",target:"_blank",rel:"noopener noreferrer"},j=n("h4",{id:"vue-组件生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-组件生命周期","aria-hidden":"true"},"#"),a(" Vue 组件生命周期")],-1),P=n("p",null,[n("img",{src:"https://cn.vuejs.org/images/lifecycle.png",alt:"Vue组件生命周期",loading:"lazy"})],-1);function C(S,W){const s=i("ExternalLinkIcon");return c(),o("div",null,[d,l(" more "),r,k,v,n("div",g,[h,n("p",null,[a("更多详情请见 "),n("a",m,[a("小程序条件渲染文档"),t(s)])])]),b,n("div",_,[x,n("p",null,[a("更多相关请见 "),n("a",f,[a("Vue 条件渲染文档"),t(s)])])]),w,n("div",q,[V,n("p",null,[a("更多详情请见 "),n("a",E,[a("小程序循环渲染文档"),t(s)])])]),B,n("div",A,[y,n("p",null,[a("更多相关请见 "),n("a",D,[a("Vue 循环渲染文档"),t(s)])])]),M,n("p",null,[n("a",I,[a("Vue 页面生命周期"),t(s)])]),O,J,n("p",null,[n("a",N,[a("小程序组件生命周期"),t(s)])]),j,P])}const F=p(u,[["render",C],["__file","compare.html.vue"]]);export{F as default};
