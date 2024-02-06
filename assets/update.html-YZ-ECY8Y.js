import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,a as n,e as a,d as c,f as i}from"./app--7H4MSuP.js";const l={},u=n("h2",{id:"未启动时更新",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#未启动时更新"},[n("span",null,"未启动时更新")])],-1),r=n("p",null,"开发者在管理后台发布新版本的小程序之后，如果某个用户本地有小程序的历史版本，此时打开的可能还是旧版本。微信客户端会有若干个时机去检查本地缓存的小程序有没有更新版本，如果有则会静默更新到新版本。总的来说，开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户。用户下次打开时会先更新最新版本再打开。",-1),d=n("h2",{id:"启动时更新",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#启动时更新"},[n("span",null,"启动时更新")])],-1),m=n("p",null,"小程序每次冷启动时，都会检查是否有更新版本，如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。",-1),k={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"wx.getUpdateManager",-1),h=i(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> updateManager <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getUpdateManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onCheckForUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求完新版本信息的回调</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>hasUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onUpdateReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;更新提示&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;新版本已经准备好，是否重启应用？&quot;</span><span class="token punctuation">,</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启</span>
        updateManager<span class="token punctuation">.</span><span class="token function">applyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onUpdateFailed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 新版本下载失败</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(b,f){const s=e("ExternalLinkIcon");return p(),o("div",null,[u,r,d,m,n("p",null,[a("如果需要马上应用最新版本，可以使用 "),n("a",k,[v,c(s)]),a(" API 进行处理。")]),h])}const x=t(l,[["render",g],["__file","update.html.vue"]]),w=JSON.parse('{"path":"/code/mini-app/guide/frame/update.html","title":"小程序更新机制","lang":"zh-CN","frontmatter":{"date":"2020-12-19T00:00:00.000Z","title":"小程序更新机制","icon":"update","category":"小程序","description":"未启动时更新 开发者在管理后台发布新版本的小程序之后，如果某个用户本地有小程序的历史版本，此时打开的可能还是旧版本。微信客户端会有若干个时机去检查本地缓存的小程序有没有更新版本，如果有则会静默更新到新版本。总的来说，开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户。用户下次打开时会先...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/mini-app/guide/frame/update.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"小程序更新机制"}],["meta",{"property":"og:description","content":"未启动时更新 开发者在管理后台发布新版本的小程序之后，如果某个用户本地有小程序的历史版本，此时打开的可能还是旧版本。微信客户端会有若干个时机去检查本地缓存的小程序有没有更新版本，如果有则会静默更新到新版本。总的来说，开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户。用户下次打开时会先..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2020-12-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"小程序更新机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"未启动时更新","slug":"未启动时更新","link":"#未启动时更新","children":[]},{"level":2,"title":"启动时更新","slug":"启动时更新","link":"#启动时更新","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":1.25,"words":374},"filePathRelative":"code/mini-app/guide/frame/update.md","localizedDate":"2020年12月19日","excerpt":"","autoDesc":true}');export{x as comp,w as data};
