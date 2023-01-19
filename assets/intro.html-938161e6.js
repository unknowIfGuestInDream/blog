import{_ as i,W as l,X as d,Y as a,Z as n,a0 as s,a1 as t,$ as u,a2 as r,G as o}from"./framework-0e132572.js";const m={},k=a("p",null,"小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。",-1),v=a("strong",null,"逻辑层",-1),h=a("strong",null,"视图层",-1),_={id:"响应的数据绑定",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#响应的数据绑定","aria-hidden":"true"},"#",-1),b=a("p",null,"框架的核心是一个响应的数据绑定系统，可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。",-1),f={href:"https://developers.weixin.qq.com/s/l0gLEKmv6gZa",target:"_blank",rel:"noopener noreferrer"},x=r(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- This is our View --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> Hello {{name}}! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Click me! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// This is our App Service.</span>
<span class="token comment">// This is our data.</span>
<span class="token keyword">const</span> helloData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;WeChat&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Register a Page.</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> helloData<span class="token punctuation">,</span>
  <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// sent data change to view</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;MINA&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>开发者通过框架将逻辑层数据中的 <code>name</code> 与视图层的 <code>name</code> 进行了绑定，所以在页面一打开的时候会显示 <code>Hello WeChat!</code>；</li><li>当点击按钮的时候，视图层会发送 <code>changeName</code> 的事件给逻辑层，逻辑层找到并执行对应的事件处理函数；</li><li>回调函数触发后，逻辑层执行 <code>setData</code> 的操作，将 <code>data</code> 中的 <code>name</code> 从 <code>WeChat</code> 变为 <code>MINA</code>，因为该数据和视图层已经绑定了，从而视图层会自动改变为 <code>Hello MINA!</code>。</li></ol><h2 id="页面管理" tabindex="-1"><a class="header-anchor" href="#页面管理" aria-hidden="true">#</a> 页面管理</h2>`,4),w=a("strong",null,"框架",-1),j=a("strong",null,"框架",-1),N=a("strong",null,"框架",-1),q=a("h2",{id:"基础组件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#基础组件","aria-hidden":"true"},"#"),n(" 基础组件")],-1),y=a("strong",null,"框架",-1),A=a("h2",{id:"丰富的-api",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#丰富的-api","aria-hidden":"true"},"#"),n(" 丰富的 API")],-1),C=a("strong",null,"框架",-1);function I(L,P){const e=o("RouterLink"),p=o("Badge"),c=o("ExternalLinkIcon");return l(),d("div",null,[k,a("p",null,[n("整个小程序框架系统分为两部分: "),s(e,{to:"/ja/code/mini-app/guide/service/"},{default:t(()=>[v]),_:1}),n(" (App Service) 和 "),s(e,{to:"/ja/code/mini-app/guide/view/"},{default:t(()=>[h]),_:1}),n(" (../view)。小程序提供了自己的视图层描述语言 "),s(e,{to:"/ja/code/mini-app/guide/view/wxml.html"},{default:t(()=>[n("WXML")]),_:1}),n(" 和 "),s(e,{to:"/ja/code/mini-app/guide/view/wxss.html"},{default:t(()=>[n("WXSS")]),_:1}),n("，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。")]),u(" more "),a("h2",_,[g,n(" 响应的数据绑定 "),s(p,{text:"务必理解",type:"error"})]),b,a("p",null,[a("a",f,[n("在开发者工具中预览效果"),s(c)])]),x,a("p",null,[w,n(" 管理了整个小程序的页面路由，可以做到页面间的无缝切换，并给以页面完整的 "),s(e,{to:"/ja/code/mini-app/guide/service/lifetime.html"},{default:t(()=>[n("生命周期")]),_:1}),n("。开发者需要做的只是将页面的数据、方法、生命周期函数注册到 "),j,n(" 中，其他的一切复杂的操作都交由 "),N,n(" 处理。")]),q,a("p",null,[y,n(" 提供了一套基础的 "),s(e,{to:"/ja/code/mini-app/guide/view/component.html"},{default:t(()=>[n("组件")]),_:1}),n("，"),s(e,{to:"/ja/code/mini-app/guide/view/component.html"},{default:t(()=>[n("这些组件")]),_:1}),n(" 自带微信风格的样式以及特殊的逻辑，开发者可以通过组合基础组件，创建出强大的微信小程序 。")]),A,a("p",null,[C,n(" 提供丰富的 "),s(e,{to:"/ja/code/mini-app/guide/service/api/"},{default:t(()=>[n("微信原生 API")]),_:1}),n("，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。")])])}const V=i(m,[["render",I],["__file","intro.html.vue"]]);export{V as default};
