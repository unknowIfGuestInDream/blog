import{_ as i,W as d,X as r,Y as n,Z as e,a0 as t,$ as l,a1 as u,a2 as o,C as s}from"./framework-d7af73f9.js";const h={},m=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。")],-1),b=o('<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><h3 id="object-object" tabindex="-1"><a class="header-anchor" href="#object-object" aria-hidden="true">#</a> Object object</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>onLaunch</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序初始化。</td><td></td></tr><tr><td>onShow</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序启动或切前台。</td><td></td></tr><tr><td>onHide</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序切后台。</td><td></td></tr><tr><td>onError</td><td>function</td><td></td><td>否</td><td>错误监听函数。</td><td></td></tr><tr><td>onPageNotFound</td><td>function</td><td></td><td>否</td><td>页面不存在监听函数。</td><td>1.9.90</td></tr><tr><td>onUnhandledRejection</td><td>function</td><td></td><td>否</td><td>未处理的 Promise 拒绝事件监听函数。</td><td>2.10.0</td></tr><tr><td>onThemeChange</td><td>function</td><td></td><td>否</td><td>监听系统主题变化</td><td>2.11.0</td></tr></tbody></table><p>| 其他 | any | | 否 | 开发者可以添加任意的函数或数据变量到 <code>Object</code> 参数中，用 <code>this</code> 可以访问 |</p>',4),v=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something initial when launch.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when show.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when hide.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token string">&quot;I am global data&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onlaunch-object-object" tabindex="-1"><a class="header-anchor" href="#onlaunch-object-object" aria-hidden="true">#</a> onLaunch(Object object)</h3>`,2),_={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"wx.getLaunchOptionsSync",-1),g={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"wx.getLaunchOptionsSync",-1),j=n("h3",{id:"onshow-object-object",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onshow-object-object","aria-hidden":"true"},"#"),e(" onShow(Object object)")],-1),x={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"wx.onAppShow",-1),q={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"wx.onAppShow",-1),y=n("h2",{id:"onhide",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onhide","aria-hidden":"true"},"#"),e(" onHide()")],-1),O={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"wx.onAppHide",-1),S=n("h2",{id:"onerror-string-error",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onerror-string-error","aria-hidden":"true"},"#"),e(" onError(String error)")],-1),P={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"wx.onError",-1),C={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"wx.onError",-1),R=n("h2",{id:"onpagenotfound-object-object",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onpagenotfound-object-object","aria-hidden":"true"},"#"),e(" onPageNotFound(Object object)")],-1),F={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"wx.onPageNotFound",-1),U={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"wx.onPageNotFound",-1),D={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"wx.onPageNotFound",-1),H=o(`<p>示例代码:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onPageNotFound</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;pages/...&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果是 tabbar 页面，请使用 wx.switchTab</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="onunhandledrejection-object-object" tabindex="-1"><a class="header-anchor" href="#onunhandledrejection-object-object" aria-hidden="true">#</a> onUnhandledRejection(Object object)</h2><blockquote><p>基础库 2.10.0 开始支持</p></blockquote>`,4),V={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"wx.onUnhandledRejection",-1),X={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,"wx.onUnhandledRejection",-1),Z={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"wx.onUnhandledRejection",-1),z=n("h2",{id:"onthemechange-object-object",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onthemechange-object-object","aria-hidden":"true"},"#"),e(" onThemeChange(Object object)")],-1),G=n("blockquote",null,[n("p",null,"基础库 2.11.0 开始支持")],-1),J={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"},K=n("code",null,"wx.onThemeChange",-1),M={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"},Q=n("code",null,"wx.onThemeChange",-1),nn=o(`<h2 id="appobject-getapp-object-object" tabindex="-1"><a class="header-anchor" href="#appobject-getapp-object-object" aria-hidden="true">#</a> AppObject getApp(Object object)</h2><p>获取到小程序全局唯一的 App 实例。</p><h3 id="getapp-参数" tabindex="-1"><a class="header-anchor" href="#getapp-参数" aria-hidden="true">#</a> getApp 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>allowDefault</td><td>boolean</td><td>false</td><td>否</td><td>在 <code>App</code> 未定义时返回默认实现。当 <code>App</code> 被调用时，默认实现中定义的属性会被覆盖合并到 App 中。一般用于独立分包</td><td>2.2.4</td></tr></tbody></table><p>示例代码:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// other.js</span>
<span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appInstance<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I am global data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>不要在定义于 <code>App()</code> 内的函数中，或调用 <code>App</code> 前调用 <code>getApp()</code> ，使用 <code>this</code> 就可以拿到 app 实例。</li><li>通过 <code>getApp()</code> 获取实例之后，不要私自调用生命周期函数。</li></ul></div>`,8);function en(tn,an){const p=s("Badge"),c=s("RouterLink"),a=s("ExternalLinkIcon");return d(),r("div",null,[n("p",null,[e("注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 "),t(p,{text:"重要",type:"error"})]),m,l(" more "),b,n("p",null,[e("关于小程序前后台的定义和小程序的运行机制，请参考 "),t(c,{to:"/ja/code/mini-app/guide/service/run.html"},{default:u(()=>[e("运行机制")]),_:1}),e("。")]),v,n("p",null,[e("小程序初始化完成时触发，全局只触发一次。参数也可以使用 "),n("a",_,[k,t(a)]),e(" 获取。")]),n("p",null,[e("参数: 与 "),n("a",g,[f,t(a)]),e(" 一致")]),j,n("p",null,[e("小程序启动，或从后台进入前台显示时触发。也可以使用 "),n("a",x,[w,t(a)]),e(" 绑定监听。")]),n("p",null,[e("参数: 与 "),n("a",q,[A,t(a)]),e(" 一致")]),y,n("p",null,[e("小程序从前台进入后台时触发。也可以使用 "),n("a",O,[N,t(a)]),e(" 绑定监听。")]),S,n("p",null,[e("小程序发生脚本错误或 API 调用报错时触发。也可以使用 "),n("a",P,[L,t(a)]),e(" 绑定监听。")]),n("p",null,[e("参数: 与 "),n("a",C,[E,t(a)]),e(" 一致")]),R,n("p",null,[e("小程序要打开的页面不存在时触发。也可以使用 "),n("a",F,[T,t(a)]),e(" 绑定监听。注意事项请参考 "),n("a",U,[I,t(a)]),e("。")]),n("p",null,[e("参数: 与 "),n("a",D,[B,t(a)]),e(" 一致")]),H,n("p",null,[e("小程序有未处理的 Promise 拒绝时触发。也可以使用 "),n("a",V,[W,t(a)]),e(" 绑定监听。注意事项请参考 "),n("a",X,[Y,t(a)]),e("。")]),n("p",null,[e("参数: 与 "),n("a",Z,[$,t(a)]),e(" 一致")]),z,G,n("p",null,[e("系统切换主题时触发。也可以使用 "),n("a",J,[K,t(a)]),e(" 绑定监听。")]),n("p",null,[e("参数: 与 "),n("a",M,[Q,t(a)]),e(" 一致")]),nn])}const sn=i(h,[["render",en],["__file","app.html.vue"]]);export{sn as default};
