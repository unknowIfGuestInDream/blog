import{_ as p,W as o,X as c,$ as i,Y as n,Z as t,a0 as e,a2 as a,F as l}from"./framework-303b4bc8.js";const d={},r=a(`<p>文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 <code>wx.getFileSystemManager()</code> 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getFileSystemManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件主要分为两大类:</p><ul><li>代码包文件: 代码包文件指的是在项目目录中添加的文件。</li><li>本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。</li></ul>`,4),u=a('<p>其中本地文件又分为三种:</p><ul><li><p>本地临时文件: 临时产生，随时会被回收的文件。不限制存储大小。</p></li><li><p>本地缓存文件: 小程序通过接口把本地临时文件缓存后产生的文件，不能自定义目录和文件名。跟本地用户文件共计，普通小程序最多可存储 10MB，游戏类目的小程序最多可存储 50MB。</p></li><li><p>本地用户文件: 小程序通过接口把本地临时文件缓存后产生的文件，允许自定义目录和文件名。跟本地缓存文件共计，普通小程序最多可存储 10MB，游戏类目的小程序最多可存储 50MB。</p></li></ul><h2 id="代码包文件" tabindex="-1"><a class="header-anchor" href="#代码包文件" aria-hidden="true">#</a> 代码包文件</h2><p>由于代码包文件大小限制，代码包文件适用于放置首次加载时需要的文件。</p><h3 id="访问代码包文件" tabindex="-1"><a class="header-anchor" href="#访问代码包文件" aria-hidden="true">#</a> 访问代码包文件</h3><p>代码包文件的访问方式是从项目根目录开始写文件路径，不支持相对路径的写法。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这个和 Node.js 是不一样的，请特别注意一下。</p><p>如: <code>/a/b/c</code>、<code>a/b/c</code> 都是合法的，<code>./a/b/c</code> <code>../a/b/c</code> 则不合法。</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/code-package.ea949c8d.png" alt="path" loading="lazy"></p></div><h3 id="修改代码包文件" tabindex="-1"><a class="header-anchor" href="#修改代码包文件" aria-hidden="true">#</a> 修改代码包文件</h3><p>代码包内的文件无法在运行后动态修改或删除，修改代码包文件需要重新发布版本。</p><h3 id="本地文件" tabindex="-1"><a class="header-anchor" href="#本地文件" aria-hidden="true">#</a> 本地文件</h3><p>本地文件指的是小程序被用户添加到手机后，会有一块独立的文件存储区域，以用户维度隔离。即同一台手机，每个微信用户不能访问到其他登录用户的文件，同一个用户不同 appId 之间的文件也不能互相访问。</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/file-sandbox.9ef4d15a.png" alt="本地文件沙盒.png" loading="lazy"></p><p>本地文件的文件路径均为以下格式:</p>',13),h=n("div",null,[n("p",null,[n("code",{"v-pre":""},"{{协议名}}://文件路径")])],-1),k=a(`<blockquote><p>其中，协议名在 iOS/Android 客户端为 <code>&quot;wxfile&quot;</code>，在开发者工具上为 <code>&quot;http&quot;</code>，开发者无需关注这个差异，也不应在代码中去硬编码完整文件路径。</p></blockquote><h3 id="本地临时文件" tabindex="-1"><a class="header-anchor" href="#本地临时文件" aria-hidden="true">#</a> 本地临时文件</h3><p>本地临时文件只能通过调用特定接口产生，不能直接写入内容。本地临时文件产生后，仅在当前生命周期内有效，重启之后即不可用。因此，不可把本地临时文件路径存储起来下次使用。如果需要下次在使用，可通过 <code>FileSystemManager.saveFile()</code> 或 <code>FileSystemManager.copyFile()</code> 接口把本地临时文件转换成本地缓存文件或本地用户文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> tempFilePaths <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">;</span> <span class="token comment">// tempFilePaths 的每一项是一个本地临时文件路径</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v={id:"本地缓存文件",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#本地缓存文件","aria-hidden":"true"},"#",-1),g=a(`<p>本地缓存文件只能通过调用特定接口产生，不能直接写入内容。本地缓存文件产生后，重启之后仍可用。本地缓存文件只能通过 <code>FileSystemManager.saveFile()</code> 接口将本地临时文件保存获得。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">tempFilePath</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 传入一个本地临时文件路径</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>savedFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// res.savedFilePath 为一个本地缓存文件路径</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>本地缓存文件是最初的设计，1.7.0 版本开始，提供了功能更完整的本地用户文件，可以完全覆盖本地缓存文件的功能，如果不需要兼容低于 1.7.0 版本，可以不使用本地缓存文件。</p></div>`,3),b={id:"本地用户文件",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#本地用户文件","aria-hidden":"true"},"#",-1),f=a('<blockquote><p>从 1.7.0 版本开始新增</p></blockquote><p>小程序提供了一个用户文件目录，有完全自由的读写权限。通过 <code>wx.env.USER_DATA_PATH</code> 可以获取到这个目录的路径。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在本地用户文件目录下创建一个文件 hello.txt，写入内容 &quot;hello, world&quot;</span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getFileSystemManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nfs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wx<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">USER_DATA_PATH</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/hello.txt</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token string">&quot;hello, world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读写权限" tabindex="-1"><a class="header-anchor" href="#读写权限" aria-hidden="true">#</a> 读写权限</h4><table><thead><tr><th>接口、组件</th><th>读</th><th>写</th></tr></thead><tbody><tr><td>代码包文件</td><td>有</td><td>无</td></tr><tr><td>本地临时文件</td><td>有</td><td>无</td></tr><tr><td>本地缓存文件</td><td>有</td><td>无</td></tr><tr><td>本地用户文件</td><td>有</td><td>有</td></tr></tbody></table><h3 id="清理策略" tabindex="-1"><a class="header-anchor" href="#清理策略" aria-hidden="true">#</a> 清理策略</h3><ul><li>本地临时文件只保证在小程序当前生命周期内，一旦小程序被关闭就可能被清理，即下次冷启动不保证可用。</li><li>本地缓存文件和本地用户文件的清理时机跟代码包一样，只有在代码包被清理的时会被清理。</li></ul><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>所以说本地用户文件是十分保险的，本地用户文件一定和小程序文件一起消失。</p><p>注: 如果用户太长时间不使用小程序或者手机空间不足，小程序代码包也是可能被杀掉的。这样用户本地的所有数据就会一起丢失。用户再次打开小程序会重新下载小程序代码包并进入初始化流程。</p></div>',8);function x(y,q){const s=l("Badge");return o(),c("div",null,[r,i(" more "),u,h,k,n("h3",v,[m,t(" 本地缓存文件 "),e(s,{text:"无需使用",type:"grey"})]),g,n("h3",b,[_,t(" 本地用户文件 "),e(s,{text:"重要",type:"error"})]),f])}const F=p(d,[["render",x],["__file","file-system.html.vue"]]);export{F as default};
