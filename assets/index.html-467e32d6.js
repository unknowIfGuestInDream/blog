import{_ as c,X as l,Y as u,a0 as r,Z as n,$ as s,a1 as a,a2 as e,a3 as o,D as p}from"./framework-a4b0319b.js";const d={},k=n("p",null,"小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。",-1),v=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"ヒント"),n("p",null,"为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。")],-1),m=o(`<h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h2><p>小程序根目录下的 <code>app.json</code> 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置 tabBar 等。</p><p>以下是一个包含了部分常用配置选项的 <code>app.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pages/logs/index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;日志&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;networkTimeout&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;downloadFile&quot;</span><span class="token operator">:</span> <span class="token number">10000</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;debug&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;navigateToMiniProgramAppIdList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;wxe5f52902cf4de896&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),q=o(`<h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2><p>每一个小程序页面也可以使用同名 <code>.json</code> 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 <code>app.json</code> 的 <code>window</code> 中相同的配置项。</p><p>例如:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信接口功能演示&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#eeeeee&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;backgroundTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;light&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g={id:"索引配置",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#索引配置","aria-hidden":"true"},"#",-1),b=o('<p>微信现已开放小程序内搜索，开发者可以通过 sitemap.json 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 <code>user-agent</code>: <code>mpcrawler</code> 及场景值 <code>1129</code>。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。</p><h3 id="具体配置说明" tabindex="-1"><a class="header-anchor" href="#具体配置说明" aria-hidden="true">#</a> 具体配置说明</h3><ol><li>页面收录设置: 可对整个小程序的索引进行关闭，小程序管理后台-设置-基本设置-页面收录设置</li><li>sitemap 配置: 可对特定页面的索引进行关闭</li></ol><h3 id="sitemap-配置" tabindex="-1"><a class="header-anchor" href="#sitemap-配置" aria-hidden="true">#</a> sitemap 配置</h3><p>小程序根目录下的 sitemap.json 文件用来配置小程序及其页面是否允许被微信索引。</p>',5);function _(f,x){const t=p("RouterLink"),i=p("Badge");return l(),u("div",null,[k,v,r(" more "),m,n("p",null,[s("更多详情请见 "),a(t,{to:"/ja/code/mini-app/guide/config/app-config.html"},{default:e(()=>[s("全局配置文档")]),_:1})]),q,n("p",null,[s("更多详情请见 "),a(t,{to:"/ja/code/mini-app/guide/config/page-config.html"},{default:e(()=>[s("页面配置文档")]),_:1})]),n("h2",g,[h,s(" 索引配置 "),a(i,{text:"初学无需阅读",type:"grey"})]),b,n("p",null,[s("完整配置项说明请参考 "),a(t,{to:"/ja/code/mini-app/guide/config/sitemap-config.html"},{default:e(()=>[s("sitemap 配置")]),_:1})])])}const j=c(d,[["render",_],["__file","index.html.vue"]]);export{j as default};
