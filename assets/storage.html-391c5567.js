import{_ as a,W as c,X as r,$ as n,Y as e,a0 as s,a1 as d,a2 as i,Z as o,G as l}from"./framework-0e132572.js";const _={},p=i("<p>每个微信小程序都可以有自己的本地缓存，可以通过 <code>wx.setStorage</code> / <code>wx.setStorageSync</code>、<code>wx.getStorage</code> / <code>wx.getStorageSync</code>、<code>wx.clearStorage</code> / <code>wx.clearStorageSync</code>，<code>wx.removeStorage</code> / <code>wx.removeStorageSync</code> 对本地缓存进行读写和清理。</p><p>同一个微信用户，同一个小程序 storage 上限为 10MB。Storage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据。</p>",2),g=e("h2",{id:"api-文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#api-文档","aria-hidden":"true"},"#"),o(" API 文档")],-1),h=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"如果用户储存空间不足，我们会清空最近最久未使用的小程序的本地缓存。我们不建议将关键信息全部存在 storage，以防储存空间不足或用户换设备的情况。")],-1);function m(u,x){const t=l("RouterLink");return c(),r("div",null,[p,n(" more "),g,e("ul",null,[e("li",null,[s(t,{to:"/code/mini-app/guide/service/api/storage.html"},{default:d(()=>[o("点击前往")]),_:1})])]),h])}const f=a(_,[["render",m],["__file","storage.html.vue"]]);export{f as default};
