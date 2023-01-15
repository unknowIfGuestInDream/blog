import{_ as e,W as i,X as a,$ as p,Y as t,a2 as o}from"./framework-b343ad39.js";const r={},l=t("p",null,"由于 JavaScript 的出现就是为了能在浏览器中运行，所以，浏览器自然是 JavaScript 开发者必须要关注的。",-1),c=o('<p>目前主流的浏览器分这么几种:</p><ul><li><p>IE 6-11: 国内用得最多的 IE 浏览器，历来对 W3C 标准支持差。从 IE10 开始支持 ES6 标准；</p></li><li><p>Chrome: Google 出品的基于 Webkit 内核浏览器，内置了非常强悍的 JavaScript 引擎——V8。由于 Chrome 一经安装就时刻保持自升级，所以不用管它的版本，最新版早就支持 ES6 了；</p></li><li><p>Safari: Apple 的 Mac 系统自带的基于 Webkit 内核的浏览器，从 macOS 10.7 Lion 自带的 6.1 版本开始支持 ES6，目前最新的 macOS 10.15 对 ES6 支持已经相当良好；</p></li><li><p>Firefox: Mozilla 自己研制的 Gecko 内核和 JavaScript 引擎 OdinMonkey。早期的 Firefox 按版本发布，后来终于聪明地学习 Chrome 的做法进行自升级，时刻保持最新；</p></li><li><p>移动设备上目前 iOS 和 Android 两大阵营分别主要使用 Apple 的 Safari 和 Google 的 Chrome，由于两者都是 Webkit 核心，结果 HTML5 首先在手机上全面普及(桌面绝对是 Microsoft 拖了后腿)，对 JavaScript 的标准支持也很好，最新版本均支持 ES6。</p></li></ul><p>其他浏览器如 Opera 等由于市场份额太小就被自动忽略了。</p><p>另外还要注意识别各种国产浏览器，如某某安全浏览器，某某旋风浏览器，它们只是做了一个壳，其核心调用的是 IE，也有号称同时支持 IE 和 Webkit 的“双核”浏览器。</p><p>不同的浏览器对 JavaScript 支持的差异主要是，有些 API 的接口不一样，比如 AJAX，File 接口。对于 ES6 标准，不同的浏览器对各个特性支持也不一样。</p><p>在编写 JavaScript 的时候，就要充分考虑到浏览器的差异，尽量让同一份 JavaScript 代码能运行在不同的浏览器中。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>为了让对新版本语法支持不好的浏览器也能够运行最新的代码，所以诞生了两大著名 Node.js package —— core-js 和 babel。两者都负责将最新的写法转换到浏览器可以支持的旧语法或提供相应的 pollyfill。</p></div>',7);function n(s,S){return i(),a("div",null,[l,p(" more "),c])}const d=e(r,[["render",n],["__file","intro.html.vue"]]);export{d as default};
