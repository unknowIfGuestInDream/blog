import{_ as i,W as u,X as d,Y as n,Z as s,a0 as a,a1 as p,a2 as e,G as c}from"./framework-4fdeb3a3.js";const r={},k={id:"文件组成",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#文件组成","aria-hidden":"true"},"#",-1),h=n("p",null,"小程序的代码由四种文件组成:",-1),v=n("ul",null,[n("li",null,[n("code",null,".json"),s(" 后缀的 JSON 配置文件，主要用作小程序配置")]),n("li",null,[n("code",null,".wxml"),s(" 后缀的 WXML 模板文件，为视图层，相当于 HTML")]),n("li",null,[n("code",null,".wxss"),s(" 后缀的 WXSS 样式文件，为样式部分，相当于 CSS")]),n("li",null,[n("code",null,".js"),s(" 后缀的 JS 脚本逻辑文件，为脚本部分，处理小程序逻辑与行为")])],-1),m={id:"目录结构",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#目录结构","aria-hidden":"true"},"#",-1),x=e('<p>小程序包含一个描述整体程序的 app 和多个描述各自页面的 page。</p><p>一个小程序主体部分由三个文件组成，必须放在项目的根目录:</p><table><thead><tr><th>文件</th><th>必需</th><th>作用</th></tr></thead><tbody><tr><td>app.js</td><td>是</td><td>小程序逻辑</td></tr><tr><td>app.json</td><td>是</td><td>小程序公共配置</td></tr><tr><td>app.wxss</td><td>否</td><td>小程序公共样式表</td></tr></tbody></table><p>一个小程序页面由四个文件组成:</p><table><thead><tr><th>文件</th><th>必需</th><th>作用</th></tr></thead><tbody><tr><td>js</td><td>是</td><td>页面逻辑</td></tr><tr><td>wxml</td><td>是</td><td>页面结构</td></tr><tr><td>json</td><td>否</td><td>页面配置</td></tr><tr><td>wxss</td><td>否</td><td>页面样式表</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>为了方便开发者减少配置项，描述页面的四个文件必须具有相同的路径与文件名。</p><p>这样开发者工具会自动将它们视作一个小程序页面的不同代码部分。</p></div>',6),b={id:"允许上传的文件",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#允许上传的文件","aria-hidden":"true"},"#",-1),q=e('<p>见页脚<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h2 id="json-配置" tabindex="-1"><a class="header-anchor" href="#json-配置" aria-hidden="true">#</a> JSON 配置</h2><p>JSON 是一种数据格式，<strong>在小程序中，JSON 负责描述小程序的静态配置，负责配置项目、小程序整体和每个页面。</strong></p><p>我们可以看到在项目的根目录有一个 <code>app.json</code> 和 <code>project.config.json</code>，此外在 <code>pages/logs</code> 目录下还有一个 <code>logs.json</code>。下面是它们的用途说明。</p>',4),j={id:"小程序配置-app-json",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#小程序配置-app-json","aria-hidden":"true"},"#",-1),S=e(`<p>app.json 是当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等。QuickStart 项目里边的 app.json 配置内容如下:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;backgroundTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WeChat&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>pages</code> 字段 —— 用于描述当前小程序所有页面路径，这是为了让微信客户端知道当前您的小程序页面定义在哪个目录。</p></li><li><p><code>window</code> 字段 —— 定义小程序所有页面的顶部背景颜色，文字颜色定义等。</p></li></ul>`,3),y={id:"页面配置-page-json",tabindex:"-1"},W=n("a",{class:"header-anchor",href:"#页面配置-page-json","aria-hidden":"true"},"#",-1),M=n("p",null,[s("这里的 "),n("code",null,"page.json"),s(" 其实用来表示小程序页面相关的配置。")],-1),L=n("p",null,[s("如果您整个小程序的风格是蓝色调，那么您可以在 "),n("code",null,"app.json"),s(" 里边声明顶部颜色是蓝色即可。实际您可能希望小程序里边的每个页面都有不一样的色调来区分不同功能模块，"),n("code",null,"page.json"),s(" 就提供了定义每个页面的一些属性的能力。")],-1),X={id:"工具配置-project-config-json",tabindex:"-1"},J=n("a",{class:"header-anchor",href:"#工具配置-project-config-json","aria-hidden":"true"},"#",-1),I=n("p",null,"通常大家在使用一个工具的时候，都会针对各自喜好做一些个性化配置，例如界面颜色、编译配置等等，当您换了另外一台电脑重新安装工具的时候，您还要重新配置。",-1),N=n("p",null,"考虑到这点，小程序开发者工具在每个项目的根目录都会生成一个 project.config.json，您在工具上做的任何配置都会写入到这个文件，当您重新安装工具或者换电脑工作时，您只要载入同一个项目的代码包，开发者工具就自动会帮您恢复到当时您开发项目时的个性化配置，其中会包括编辑器的颜色、代码上传时自动压缩等等一系列选项。",-1),B={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html",target:"_blank",rel:"noopener noreferrer"},O={class:"hint-container info"},T=n("p",{class:"hint-container-title"},"相关信息",-1),C={id:"wxml-模板",tabindex:"-1"},H=n("a",{class:"header-anchor",href:"#wxml-模板","aria-hidden":"true"},"#",-1),D=e(`<p>在小程序中 WXML 充当的就是类似 HTML 的角色。打开 <code>pages/index/index.wxml</code>，您会看到以下的内容:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userinfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{!hasUserInfo &amp;&amp; canIUse}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 获取头像昵称 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>else</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{userInfo.avatarUrl}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">background-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cover<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userinfo-nickname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{userInfo.nickName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>usermotto<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user-motto<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{motto}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和 HTML 非常相似，WXML 由标签、属性等等构成。但是也有很多不一样的地方，我们来一一阐述一下:</p><ul><li><p>自己的一套标签名称</p><blockquote><p>e.g.: 小程序把最常见的 <code>&lt;span /&gt;</code> 改成了 <code>&lt;text /&gt;</code>，<code>&lt;div /&gt;</code> 改成了 <code>&lt;view /&gt;</code></p></blockquote></li></ul>`,4),P=n("div",null,[n("ul",null,[n("li",null,[s("多了一些 "),n("code",{"v-pre":""},"wx:if"),s(" 这样的属性以及 "),n("code",{"v-pre":""},"{{ }}"),s(" 这样的表达式")])])],-1),A=n("p",null,"由于小程序不允许用户进行 DOM 操作，所以小程序在编译的时候就要编译好整个的 DOM 结构。",-1),U=n("p",null,"小程序下通过提供动态绑定、条件渲染与循环渲染帮助您去动态改变编译好的 DOM 结构。",-1),V={id:"动态绑定",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#动态绑定","aria-hidden":"true"},"#",-1),Q=e(`<p>动态绑定负责把 JS 的变量映射绑定到 WXML 上，也就是说负责把逻辑层的变量显示在视图层的具体位置。</p><p>WXML:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JS 只需要管理状态即可:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),R=n("div",null,[n("p",null,[s("通过 "),n("code",{"v-pre":""},"{{ }}"),s(" 的语法把一个变量绑定到界面上，我们称为数据绑定。仅仅通过数据绑定还不够完整的描述状态和界面的关系，还需要 "),n("code",{"v-pre":""},"if"),s(" / "),n("code",{"v-pre":""},"else"),s(", "),n("code",{"v-pre":""},"for"),s(" 等控制能力，在小程序里边，这些控制能力都用 "),n("code",{"v-pre":""},"wx:"),s(" 开头的属性来表达。")])],-1),z={id:"wxss-样式",tabindex:"-1"},G=n("a",{class:"header-anchor",href:"#wxss-样式","aria-hidden":"true"},"#",-1),Y=e('<p>WXSS 具有 CSS 大部分的特性，也做了一些扩充和修改。</p><ul><li><p>新增了尺寸单位。WXSS 在底层支持新的尺寸单位 rpx ，规定屏幕宽 750 rpx。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于换算采用的浮点数运算，所以运算结果会和预期结果有一点点偏差。</p><p>所以 Mr.Hope 并不建议使用 rpx 单位。</p></div></li><li><p>提供了全局的样式和局部样式。</p><p>和前边 <code>app.json</code>, <code>page.json</code> 的概念相同，您可以写一个 <code>app.wxss</code> 作为全局样式，会作用于当前小程序的所有页面，局部页面样式 <code>page.wxss</code> 仅对当前页面生效。</p></li><li><p>此外 WXSS 仅支持部分 CSS 选择器</p></li></ul>',2),Z={id:"js-逻辑交互",tabindex:"-1"},F=n("a",{class:"header-anchor",href:"#js-逻辑交互","aria-hidden":"true"},"#",-1),K=e(`<p>小程序仅仅只有界面展示是不够的，还需要和用户做交互: 响应用户的点击、获取用户的位置等等。小程序通过 JS 脚本文件来处理用户的操作。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickMe<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>点击 button 按钮的时候，我们希望把界面上 <code>msg</code> 显示成 <code>&quot;Hello World&quot;</code>，于是我们在 button 上声明一个属性: <code>bindtap</code> ，在 JS 文件里边声明了 <code>clickMe</code> 方法来响应这次点击操作:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">clickMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),$=n("p",null,[s("此外您还可以在 JS 中调用小程序提供的丰富的 API，利用这些 API 可以很方便的调起微信提供的能力，例如获取用户信息、本地存储、微信支付等。在前边的 QuickStart 例子中，在 "),n("code",null,"pages/index/index.js"),s(" 就调用了 "),n("code",null,"wx.getUserInfo"),s(" 获取微信用户的头像和昵称，最后通过 "),n("code",null,"setData"),s(" 把获取到的信息显示到界面上。")],-1),nn=e('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>在项目目录中，以下文件会经过编译，因此上传之后无法直接访问到: <code>.js</code>、<code>app.json</code>、<code>.wxml</code>、<code>*.wxss</code>(其中 <code>wxml</code> 和 <code>wxss</code> 文件仅针对在 <code>app.json</code> 中配置了的页面)。除此之外，只有后缀名在白名单内的文件可以被上传。具体白名单列表如下:</p><ul><li>wxs</li><li>png</li><li>jpg</li><li>jpeg</li><li>gif</li><li>svg</li><li>json</li><li>cer</li><li>mp3</li><li>aac</li><li>m4a</li><li>mp4</li><li>wav</li><li>ogg</li><li>silk</li></ul><a href="#footnote-ref1" class="footnote-backref">↩︎</a></li></ol></section>',2);function sn(an,tn){const t=c("Badge"),o=c("RouterLink"),l=c("ExternalLinkIcon");return u(),d("div",null,[n("h2",k,[g,s(" 文件组成 "),a(t,{text:"重要",type:"error"})]),h,v,n("h2",m,[_,s(" 目录结构 "),a(t,{text:"重要",type:"error"})]),x,n("h3",b,[f,s(" 允许上传的文件 "),a(t,{text:"不重要",type:"grey"})]),q,n("h3",j,[w,s(" 小程序配置 app.json "),a(t,{text:"重要",type:"error"})]),S,n("p",null,[s("其他配置项可以参考文档 "),a(o,{to:"/code/mini-app/guide/config/app-config.html"},{default:p(()=>[s("全局配置")]),_:1}),s("。")]),n("h3",y,[W,s(" 页面配置 page.json "),a(t,{text:"简单了解"})]),M,L,n("p",null,[s("配置项可以参考文档 "),a(o,{to:"/code/mini-app/guide/config/page-config.html"},{default:p(()=>[s("页面配置")]),_:1}),s("。")]),n("h3",X,[J,s(" 工具配置 project.config.json "),a(t,{text:"不重要",type:"grey"})]),I,N,n("p",null,[s("其他配置项细节可以参考文档 "),n("a",B,[s("开发者工具的配置"),a(l)]),s("。")]),n("div",O,[T,n("p",null,[s("更多 JSON 相关教程，请查看 "),a(o,{to:"/code/language/json/"},{default:p(()=>[s("JSON 教程")]),_:1})])]),n("h2",C,[H,s(" WXML 模板 "),a(t,{text:"重要",type:"error"})]),D,P,A,U,n("p",null,[s("更详细的文档可以参考 "),a(o,{to:"/code/mini-app/guide/view/wxml.html"},{default:p(()=>[s("WXML")]),_:1}),s(" 。")]),n("h2",V,[E,s(" 动态绑定 "),a(t,{text:"重要",type:"error"})]),Q,R,n("h2",z,[G,s(" WXSS 样式 "),a(t,{text:"重要",type:"error"})]),Y,n("p",null,[s("更详细的文档可以参考 "),a(o,{to:"/code/mini-app/guide/view/wxss.html"},{default:p(()=>[s("WXSS")]),_:1}),s("。")]),n("h2",Z,[F,s(" JS 逻辑交互 "),a(t,{text:"重要",type:"error"})]),K,n("p",null,[s("响应用户的操作就是这么简单，更详细的事件可以参考文档 "),a(o,{to:"/code/mini-app/guide/view/event.html"},{default:p(()=>[s("WXML - 事件")]),_:1}),s(" 。")]),$,n("p",null,[s("更多 API 可以参考文档 "),a(o,{to:"/code/mini-app/guide/service/api/"},{default:p(()=>[s("小程序的 API")]),_:1}),s(" 。")]),nn])}const on=i(r,[["render",sn],["__file","file-structure.html.vue"]]);export{on as default};
