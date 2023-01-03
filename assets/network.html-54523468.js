import{_ as e,W as a,X as d,a2 as i}from"./framework-fec69ff1.js";const c={},o=i('<p>在小程序中使用网络相关的 API 时，需要注意下列问题，请开发者提前了解。</p><h2 id="_1-服务器域名配置" tabindex="-1"><a class="header-anchor" href="#_1-服务器域名配置" aria-hidden="true">#</a> 1. 服务器域名配置</h2><p>每个微信小程序需要事先设置一个通讯域名，小程序只可以跟指定的域名与进行网络通信。包括普通 HTTPS 请求(<code>wx.request</code>)、上传文件(<code>wx.uploadFile</code>)、下载文件(<code>wx.downloadFile</code>) 和 WebSocket 通信(<code>wx.connectSocket</code>)</p><h3 id="配置流程" tabindex="-1"><a class="header-anchor" href="#配置流程" aria-hidden="true">#</a> 配置流程</h3><p>服务器域名请在 「小程序后台-设置-开发设置-服务器域名」 中进行配置，配置时需要注意:</p><ul><li>域名只支持 HTTPS (<code>wx.request</code>、<code>wx.uploadFile</code>、<code>wx.downloadFile</code>) 和 wss (<code>wx.connectSocket</code>) 协议；</li><li>域名不能使用 IP 地址或 localhost；</li><li>可以配置端口，如 <code>https://myserver.com:8080</code>，但是配置后只能向 <code>https://myserver.com:8080</code> 发起请求。</li><li>如果不配置端口。如 <code>https://myserver.com</code>，那么请求的 URL 中也不能包含端口，甚至是默认的 443 端口也不可以。</li><li>域名必须经过 ICP 备案；</li><li>出于安全考虑，<code>api.weixin.qq.com</code> 不能被配置为服务器域名，相关 API 也不能在小程序内调用。开发者应将 AppSecret 保存到后台服务器中，通过服务器使用 getAccessToken 接口获取 access_token，并调用相关 API；</li></ul><p>对于每个接口，分别可以配置最多 20 个域名。</p><h2 id="_2-网络请求" tabindex="-1"><a class="header-anchor" href="#_2-网络请求" aria-hidden="true">#</a> 2. 网络请求</h2><h3 id="超时时间" tabindex="-1"><a class="header-anchor" href="#超时时间" aria-hidden="true">#</a> 超时时间</h3><p>默认超时时间和最大超时时间都是 60s；</p><p>超时时间可以在 <code>app.json</code> 中通过 <code>networktimeout</code> 配置。</p><h3 id="使用限制" tabindex="-1"><a class="header-anchor" href="#使用限制" aria-hidden="true">#</a> 使用限制</h3><ol><li><p>网络请求的 referer header 不可设置。其格式固定为 <code>https://servicewechat.com/{appid}/{version}/page-frame.html</code>，其中 <code>{appid}</code> 为小程序的 appid，<code>{version}</code> 为小程序的版本号，版本号为 <code>0</code> 表示为开发版、体验版以及审核版本，版本号为 <code>devtools</code> 表示为开发者工具，其余为正式版本。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>因为小程序必定带上特定 Header，在后端的 API 处理上就可以判断 Header，检测到只有是自己小程序时才允许调用接口，否则直接拒绝访问。</p></div></li><li><p>wx.request、wx.uploadFile、wx.downloadFile 的最大并发限制是 10 个；</p></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>所以一定要避免同时发送过多的网络请求</p></div><ol><li>小程序进入后台运行后(非置顶聊天)，如果 5s 内网络请求没有结束，会回调错误信息 <code>fail interrupted</code>；在回到前台之前，网络请求接口调用都会无法调用。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>所以重要请求的 <code>fail</code> 流程一定要妥善处理，可以考莉再次进行一次或两次重试或明确提示用户请求失败让其手动重试</p></div><h3 id="返回值编码" tabindex="-1"><a class="header-anchor" href="#返回值编码" aria-hidden="true">#</a> 返回值编码</h3><ol><li><p>建议服务器返回值使用 UTF-8 编码。对于非 UTF-8 编码，小程序会尝试进行转换，但是会有转换失败的可能。</p></li><li><p>小程序会自动对 BOM 头进行过滤(只过滤一个 BOM 头)。</p></li></ol><h3 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数" aria-hidden="true">#</a> 回调函数</h3><p>只要成功接收到服务器返回，无论 <code>statusCode</code> 是多少，都会进入 <code>success</code> 回调。请开发者根据业务逻辑对返回值进行判断。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>所以在请求成功的时候，也要判断请求码是不是 200，并对其他状态码做合理的处理。</p></div><h2 id="_3-常见问题" tabindex="-1"><a class="header-anchor" href="#_3-常见问题" aria-hidden="true">#</a> 3. 常见问题</h2><h3 id="https-证书" tabindex="-1"><a class="header-anchor" href="#https-证书" aria-hidden="true">#</a> HTTPS 证书</h3><p>小程序必须使用 HTTPS/WSS 发起网络请求。请求时系统会对服务器域名使用的 HTTPS 证书进行校验，如果校验失败，则请求不能成功发起。由于系统限制，不同平台对于证书要求的严格程度不同。为了保证小程序的兼容性，建议开发者按照最高标准进行证书配置，并使用相关工具检查现有证书是否符合要求。</p><h3 id="跳过域名校验" tabindex="-1"><a class="header-anchor" href="#跳过域名校验" aria-hidden="true">#</a> 跳过域名校验</h3><p>在微信开发者工具中，可以临时开启 开发环境不校验请求域名、TLS 版本及 HTTPS 证书 选项，跳过服务器域名的校验。此时，在微信开发者工具中及手机开启调试模式时，不会进行服务器域名的校验。</p><p>在服务器域名配置成功后，建议开发者关闭此选项进行开发，并在各平台下进行测试，以确认服务器域名配置正确。</p><p>如果手机上出现 “打开调试模式可以发出请求，关闭调试模式无法发出请求” 的现象，请确认是否跳过了域名校验，并确认服务器域名和证书配置是否正确。</p>',28),t=[o];function r(n,h){return a(),d("div",null,t)}const l=e(c,[["render",r],["__file","network.html.vue"]]);export{l as default};
