import{_ as o,W as c,X as i,Y as e,Z as a,a0 as s,a2 as t,G as d}from"./framework-4fdeb3a3.js";const r={},p=e("h2",{id:"二维码生成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#二维码生成","aria-hidden":"true"},"#"),a(" 二维码生成")],-1),l={href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"我们使用 Postman 软件进行二维码的获取。",-1),m=e("h3",{id:"调用凭据获取",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#调用凭据获取","aria-hidden":"true"},"#"),a(" 调用凭据获取")],-1),h=e("code",null,"access_token",-1),_={href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>请求方式为:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&amp;appid=APPID&amp;secret=APPSECRET
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更多详情可以见文档。<code>AppSecret</code> 由于权限很大不在此文档中直接放置。</p><h3 id="无限制二维码生成" tabindex="-1"><a class="header-anchor" href="#无限制二维码生成" aria-hidden="true">#</a> 无限制二维码生成</h3>`,4),v={href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>在获取 <code>access_token</code> 之后就可以获取小程序二维码了。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>POST https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，在 Postman 软件中，首先要注意使用 <code>post</code> 方法。Body 使用 <code>raw</code>，格式选择 <code>Text</code>，需要将 <code>pretty</code> 化的 JSON 输入即可正常获取二维码。获取完二维码之后，需要在 <code>response</code> 中点击返回图片右上角的 <code>save as</code>，保存为 <code>jpg</code> 格式的文件即可保存二维码。</p><h2 id="小程序链接" tabindex="-1"><a class="header-anchor" href="#小程序链接" aria-hidden="true">#</a> 小程序链接</h2>`,4),b={href:"https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html",target:"_blank",rel:"noopener noreferrer"},q=t(`<p>具体格式如下:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>不支持小程序时打开的网页<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-miniprogram-appid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>小程序的appid<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-miniprogram-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>小程序路径<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>文本内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function x(f,w){const n=d("ExternalLinkIcon");return c(),i("div",null,[p,e("p",null,[a("目前小程序二维码生成选用的是"),e("a",l,[a("无限制生成二维码"),s(n)]),a("。")]),u,m,e("p",null,[a("获取任何二维码都需要先获取 "),h,a("，这是小程序全局唯一后台接口调用凭据。"),e("a",_,[a("文档地址"),s(n)])]),k,e("ul",null,[e("li",null,[e("a",v,[a("文档地址"),s(n)])])]),g,e("ul",null,[e("li",null,[e("a",b,[a("文档地址"),s(n)])])]),q])}const S=o(r,[["render",x],["__file","qr-code.html.vue"]]);export{S as default};
