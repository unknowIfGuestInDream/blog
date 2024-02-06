import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as i,c as r,a as n,e,d as t,b as d,w as h,f as o}from"./app--7H4MSuP.js";const u={},b=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。")],-1),m=o('<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><h3 id="object-object" tabindex="-1"><a class="header-anchor" href="#object-object"><span>Object object</span></a></h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>onLaunch</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序初始化。</td><td></td></tr><tr><td>onShow</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序启动或切前台。</td><td></td></tr><tr><td>onHide</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序切后台。</td><td></td></tr><tr><td>onError</td><td>function</td><td></td><td>否</td><td>错误监听函数。</td><td></td></tr><tr><td>onPageNotFound</td><td>function</td><td></td><td>否</td><td>页面不存在监听函数。</td><td>1.9.90</td></tr><tr><td>onUnhandledRejection</td><td>function</td><td></td><td>否</td><td>未处理的 Promise 拒绝事件监听函数。</td><td>2.10.0</td></tr><tr><td>onThemeChange</td><td>function</td><td></td><td>否</td><td>监听系统主题变化</td><td>2.11.0</td></tr></tbody></table><p>| 其他 | any | | 否 | 开发者可以添加任意的函数或数据变量到 <code>Object</code> 参数中，用 <code>this</code> 可以访问 |</p>',4),g=o(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onlaunch-object-object" tabindex="-1"><a class="header-anchor" href="#onlaunch-object-object"><span>onLaunch(Object object)</span></a></h3>`,2),j={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"wx.getLaunchOptionsSync",-1),_={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"wx.getLaunchOptionsSync",-1),f=n("h3",{id:"onshow-object-object",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onshow-object-object"},[n("span",null,"onShow(Object object)")])],-1),x={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"wx.onAppShow",-1),q={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"wx.onAppShow",-1),A=n("h2",{id:"onhide",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onhide"},[n("span",null,"onHide()")])],-1),O={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"wx.onAppHide",-1),S=n("h2",{id:"onerror-string-error",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onerror-string-error"},[n("span",null,"onError(String error)")])],-1),T={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"wx.onError",-1),F={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"wx.onError",-1),C=n("h2",{id:"onpagenotfound-object-object",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onpagenotfound-object-object"},[n("span",null,"onPageNotFound(Object object)")])],-1),L={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"wx.onPageNotFound",-1),I={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"wx.onPageNotFound",-1),U={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"wx.onPageNotFound",-1),Z=o(`<p>示例代码:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onPageNotFound</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;pages/...&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果是 tabbar 页面，请使用 wx.switchTab</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="onunhandledrejection-object-object" tabindex="-1"><a class="header-anchor" href="#onunhandledrejection-object-object"><span>onUnhandledRejection(Object object)</span></a></h2><blockquote><p>基础库 2.10.0 开始支持</p></blockquote>`,4),B={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"wx.onUnhandledRejection",-1),z={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"wx.onUnhandledRejection",-1),J={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"wx.onUnhandledRejection",-1),K=n("h2",{id:"onthemechange-object-object",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onthemechange-object-object"},[n("span",null,"onThemeChange(Object object)")])],-1),Q=n("blockquote",null,[n("p",null,"基础库 2.11.0 开始支持")],-1),W={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"wx.onThemeChange",-1),Y={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"wx.onThemeChange",-1),nn=o(`<h2 id="appobject-getapp-object-object" tabindex="-1"><a class="header-anchor" href="#appobject-getapp-object-object"><span>AppObject getApp(Object object)</span></a></h2><p>获取到小程序全局唯一的 App 实例。</p><h3 id="getapp-参数" tabindex="-1"><a class="header-anchor" href="#getapp-参数"><span>getApp 参数</span></a></h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>allowDefault</td><td>boolean</td><td>false</td><td>否</td><td>在 <code>App</code> 未定义时返回默认实现。当 <code>App</code> 被调用时，默认实现中定义的属性会被覆盖合并到 App 中。一般用于独立分包</td><td>2.2.4</td></tr></tbody></table><p>示例代码:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// other.js</span>
<span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appInstance<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I am global data</span>
</code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>不要在定义于 <code>App()</code> 内的函数中，或调用 <code>App</code> 前调用 <code>getApp()</code> ，使用 <code>this</code> 就可以拿到 app 实例。</li><li>通过 <code>getApp()</code> 获取实例之后，不要私自调用生命周期函数。</li></ul></div>`,8);function en(tn,an){const p=s("Badge"),c=s("RouteLink"),a=s("ExternalLinkIcon");return i(),r("div",null,[n("p",null,[e("注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 "),t(p,{text:"重要",type:"error"})]),b,d(" more "),m,n("p",null,[e("关于小程序前后台的定义和小程序的运行机制，请参考 "),t(c,{to:"/code/mini-app/guide/service/run.html"},{default:h(()=>[e("运行机制")]),_:1}),e("。")]),g,n("p",null,[e("小程序初始化完成时触发，全局只触发一次。参数也可以使用 "),n("a",j,[k,t(a)]),e(" 获取。")]),n("p",null,[e("参数: 与 "),n("a",_,[v,t(a)]),e(" 一致")]),f,n("p",null,[e("小程序启动，或从后台进入前台显示时触发。也可以使用 "),n("a",x,[w,t(a)]),e(" 绑定监听。")]),n("p",null,[e("参数: 与 "),n("a",q,[y,t(a)]),e(" 一致")]),A,n("p",null,[e("小程序从前台进入后台时触发。也可以使用 "),n("a",O,[N,t(a)]),e(" 绑定监听。")]),S,n("p",null,[e("小程序发生脚本错误或 API 调用报错时触发。也可以使用 "),n("a",T,[P,t(a)]),e(" 绑定监听。")]),n("p",null,[e("参数: 与 "),n("a",F,[R,t(a)]),e(" 一致")]),C,n("p",null,[e("小程序要打开的页面不存在时触发。也可以使用 "),n("a",L,[E,t(a)]),e(" 绑定监听。注意事项请参考 "),n("a",I,[D,t(a)]),e("。")]),n("p",null,[e("参数: 与 "),n("a",U,[H,t(a)]),e(" 一致")]),Z,n("p",null,[e("小程序有未处理的 Promise 拒绝时触发。也可以使用 "),n("a",B,[V,t(a)]),e(" 绑定监听。注意事项请参考 "),n("a",z,[G,t(a)]),e("。")]),n("p",null,[e("参数: 与 "),n("a",J,[M,t(a)]),e(" 一致")]),K,Q,n("p",null,[e("系统切换主题时触发。也可以使用 "),n("a",W,[X,t(a)]),e(" 绑定监听。")]),n("p",null,[e("参数: 与 "),n("a",Y,[$,t(a)]),e(" 一致")]),nn])}const pn=l(u,[["render",en],["__file","app.html.vue"]]),cn=JSON.parse('{"path":"/code/mini-app/guide/service/app.html","title":"App","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"App","icon":"app","category":"小程序","description":"注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 注意 App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。 参数 Object object | 其他 | any | | 否 | 开发者可以添加任意的函数或数据变量到 Object 参数中，用 this 可以访问 | 关于小程序前后台的定...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/mini-app/guide/service/app.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"App"}],["meta",{"property":"og:description","content":"注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 注意 App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。 参数 Object object | 其他 | any | | 否 | 开发者可以添加任意的函数或数据变量到 Object 参数中，用 this 可以访问 | 关于小程序前后台的定..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"App\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[{"level":3,"title":"Object object","slug":"object-object","link":"#object-object","children":[]},{"level":3,"title":"onLaunch(Object object)","slug":"onlaunch-object-object","link":"#onlaunch-object-object","children":[]},{"level":3,"title":"onShow(Object object)","slug":"onshow-object-object","link":"#onshow-object-object","children":[]}]},{"level":2,"title":"onHide()","slug":"onhide","link":"#onhide","children":[]},{"level":2,"title":"onError(String error)","slug":"onerror-string-error","link":"#onerror-string-error","children":[]},{"level":2,"title":"onPageNotFound(Object object)","slug":"onpagenotfound-object-object","link":"#onpagenotfound-object-object","children":[]},{"level":2,"title":"onUnhandledRejection(Object object)","slug":"onunhandledrejection-object-object","link":"#onunhandledrejection-object-object","children":[]},{"level":2,"title":"onThemeChange(Object object)","slug":"onthemechange-object-object","link":"#onthemechange-object-object","children":[]},{"level":2,"title":"AppObject getApp(Object object)","slug":"appobject-getapp-object-object","link":"#appobject-getapp-object-object","children":[{"level":3,"title":"getApp 参数","slug":"getapp-参数","link":"#getapp-参数","children":[]}]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":2.6,"words":781},"filePathRelative":"code/mini-app/guide/service/app.md","localizedDate":"2020年10月9日","excerpt":"<p>注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 </p>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。</p>\\n</div>\\n","autoDesc":true}');export{pn as comp,cn as data};
