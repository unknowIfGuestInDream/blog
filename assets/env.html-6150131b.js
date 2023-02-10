import{_ as a,X as t,Y as l,Z as e,$ as r,a1 as i,a3 as n,H as p}from"./framework-0ff09816.js";const c={},s=n('<p>微信小程序运行在多种平台上: iOS(iPhone/iPad)微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。</p><p>各平台脚本执行环境以及用于渲染非原生组件的环境是各不相同的:</p><ul><li><p>在 iOS 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，环境有 iOS 12、iOS 13 等；</p></li><li><p>在 Android 上，小程序逻辑层的 JavaScript 代码运行在 V8 中，视图层是由自研 XWeb 引擎基于 Mobile Chrome 内核来渲染的；</p></li><li><p>在 开发工具上，小程序逻辑层的 JavaScript 代码是运行在 NW.js 中，视图层是由 Chromium Webview 来渲染的。</p></li><li><p>在 PC 上，小程序逻辑层 JavaScript 和视图层 JavaScript 都是用 Chrome 内核</p></li><li><p>在 Mac 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，与 iOS 一致</p></li></ul><h2 id="平台差异" tabindex="-1"><a class="header-anchor" href="#平台差异" aria-hidden="true">#</a> 平台差异</h2><p>尽管各运行环境是十分相似的，但是还是有些许区别:</p>',5),d={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/codecompile.html#es6-%E8%BD%AC-es5",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/js-support.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/codecompile.html#%E6%A0%B7%E5%BC%8F%E8%A1%A5%E5%85%A8",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,[e("p",null,"开发者工具仅供调试使用，最终的表现以客户端为准。")],-1);function v(S,u){const o=p("ExternalLinkIcon");return t(),l("div",null,[s,e("ul",null,[e("li",null,[e("p",null,[r("JavaScript 语法和 API 支持不一致: 语法上开发者可以通过开启 ES6 转 ES5 的功能来规避 ("),e("a",d,[r("详情"),i(o)]),r(")；此外，小程序基础库内置了必要的 Polyfill，来弥补 API 的差异 ("),e("a",m,[r("详情"),i(o)]),r(")。")])]),e("li",null,[e("p",null,[r("WXSS 渲染表现不一致: 尽管可以通过开启 "),e("a",h,[r("样式补全"),i(o)]),r(" 来规避大部分的问题，还是建议开发者需要在 iOS 和 Android 上分别检查小程序的真实表现。")])]),_])])}const x=a(c,[["render",v],["__file","env.html.vue"]]);export{x as default};
