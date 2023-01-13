import{_ as u,W as o,X as a,$ as p,Y as e,Z as l,a0 as n,a1 as t,G as d}from"./framework-0e132572.js";const c={},r=e("p",null,"小程序开发框架的逻辑层 (App Service) 使用 JavaScript 引擎为小程序提供开发者 JavaScript 代码的运行环境以及微信小程序的特有功能。",-1),s=e("p",null,"逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。",-1),_=e("p",null,"开发者写的所有代码最终将会打包成一份 JavaScript 文件，并在小程序启动的时候运行，直到小程序销毁。这一行为类似 ServiceWorker，所以逻辑层也称之为 App Service。",-1),m=e("p",null,"在 JavaScript 的基础上，我们增加了一些功能，以方便小程序的开发:",-1),h=e("code",null,"App",-1),v=e("code",null,"Page",-1),g=e("li",null,[l("增加 "),e("code",null,"getApp"),l(" 和 "),e("code",null,"getCurrentPages"),l(" 方法，分别用来获取 "),e("code",null,"App"),l(" 实例和当前页面栈。")],-1),f=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Note"),e("p",null,[l("小程序框架的逻辑层并非运行在浏览器中，因此 JavaScript 在 web 中一些能力都无法使用，如 "),e("code",null,"window"),l("，"),e("code",null,"document"),l(" 等。")])],-1),x=e("h2",{id:"文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),l(" 文档")],-1);function A(S,k){const i=d("RouterLink");return o(),a("div",null,[r,s,_,p(" more "),m,e("ul",null,[e("li",null,[l("增加 "),h,l(" 和 "),v,l(" 方法，进行 "),n(i,{to:"/en/code/mini-app/guide/service/app.html"},{default:t(()=>[l("程序注册")]),_:1}),l(" 和 "),n(i,{to:"/en/code/mini-app/guide/service/page.html"},{default:t(()=>[l("页面注册")]),_:1}),l("。")]),g,e("li",null,[l("提供丰富的 "),n(i,{to:"/en/code/mini-app/guide/service/api/"},{default:t(()=>[l("API")]),_:1}),l("，如微信用户数据，扫一扫，支付等微信特有能力。")]),e("li",null,[l("提供 "),n(i,{to:"/en/code/mini-app/guide/service/module.html"},{default:t(()=>[l("模块化能力")]),_:1}),l("，每个页面有独立的作用域。")])]),f,x,e("ul",null,[e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/lifetime.html"},{default:t(()=>[l("生命周期")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/route.html"},{default:t(()=>[l("路由")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/register.html"},{default:t(()=>[l("注册")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/app.html"},{default:t(()=>[l("App()")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/page.html"},{default:t(()=>[l("Page()")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/run.html"},{default:t(()=>[l("运行")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/module.html"},{default:t(()=>[l("模块化")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/api/"},{default:t(()=>[l("API")]),_:1})]),e("ul",null,[e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/api/route.html"},{default:t(()=>[l("路由")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/api/storage.html"},{default:t(()=>[l("数据缓存")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/api/interact.html"},{default:t(()=>[l("交互")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/api/network.html"},{default:t(()=>[l("网络")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/en/code/mini-app/guide/service/api/system.html"},{default:t(()=>[l("系统信息")]),_:1})])])])])])])}const J=u(c,[["render",A],["__file","index.html.vue"]]);export{J as default};
