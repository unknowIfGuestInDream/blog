import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as e,b as a,e as s,f as t,r}from"./app.6f239d00.js";const d={},p=e("h2",{id:"\u4E8C\u7EF4\u7801\u751F\u6210",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E8C\u7EF4\u7801\u751F\u6210","aria-hidden":"true"},"#"),a(" \u4E8C\u7EF4\u7801\u751F\u6210")],-1),l={href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"\u6211\u4EEC\u4F7F\u7528 Postman \u8F6F\u4EF6\u8FDB\u884C\u4E8C\u7EF4\u7801\u7684\u83B7\u53D6\u3002",-1),m=e("h3",{id:"\u8C03\u7528\u51ED\u636E\u83B7\u53D6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8C03\u7528\u51ED\u636E\u83B7\u53D6","aria-hidden":"true"},"#"),a(" \u8C03\u7528\u51ED\u636E\u83B7\u53D6")],-1),h=e("code",null,"access_token",-1),_={href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>\u8BF7\u6C42\u65B9\u5F0F\u4E3A:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&amp;appid=APPID&amp;secret=APPSECRET
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u66F4\u591A\u8BE6\u60C5\u53EF\u4EE5\u89C1\u6587\u6863\u3002<code>AppSecret</code> \u7531\u4E8E\u6743\u9650\u5F88\u5927\u4E0D\u5728\u6B64\u6587\u6863\u4E2D\u76F4\u63A5\u653E\u7F6E\u3002</p><h3 id="\u65E0\u9650\u5236\u4E8C\u7EF4\u7801\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u65E0\u9650\u5236\u4E8C\u7EF4\u7801\u751F\u6210" aria-hidden="true">#</a> \u65E0\u9650\u5236\u4E8C\u7EF4\u7801\u751F\u6210</h3>`,4),v={href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>\u5728\u83B7\u53D6 <code>access_token</code> \u4E4B\u540E\u5C31\u53EF\u4EE5\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801\u4E86\u3002</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>POST https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BF7\u6CE8\u610F\uFF0C\u5728 Postman \u8F6F\u4EF6\u4E2D\uFF0C\u9996\u5148\u8981\u6CE8\u610F\u4F7F\u7528 <code>post</code> \u65B9\u6CD5\u3002Body \u4F7F\u7528 <code>raw</code>\uFF0C\u683C\u5F0F\u9009\u62E9 <code>Text</code>\uFF0C\u9700\u8981\u5C06 <code>pretty</code> \u5316\u7684 JSON \u8F93\u5165\u5373\u53EF\u6B63\u5E38\u83B7\u53D6\u4E8C\u7EF4\u7801\u3002\u83B7\u53D6\u5B8C\u4E8C\u7EF4\u7801\u4E4B\u540E\uFF0C\u9700\u8981\u5728 <code>response</code> \u4E2D\u70B9\u51FB\u8FD4\u56DE\u56FE\u7247\u53F3\u4E0A\u89D2\u7684 <code>save as</code>\uFF0C\u4FDD\u5B58\u4E3A <code>jpg</code> \u683C\u5F0F\u7684\u6587\u4EF6\u5373\u53EF\u4FDD\u5B58\u4E8C\u7EF4\u7801\u3002</p><h2 id="\u5C0F\u7A0B\u5E8F\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u94FE\u63A5" aria-hidden="true">#</a> \u5C0F\u7A0B\u5E8F\u94FE\u63A5</h2>`,4),b={href:"https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html",target:"_blank",rel:"noopener noreferrer"},q=t(`<p>\u5177\u4F53\u683C\u5F0F\u5982\u4E0B:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4E0D\u652F\u6301\u5C0F\u7A0B\u5E8F\u65F6\u6253\u5F00\u7684\u7F51\u9875<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-miniprogram-appid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5C0F\u7A0B\u5E8F\u7684appid<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-miniprogram-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5C0F\u7A0B\u5E8F\u8DEF\u5F84<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>\u6587\u672C\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function f(x,w){const n=r("ExternalLinkIcon");return c(),i("div",null,[p,e("p",null,[a("\u76EE\u524D\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801\u751F\u6210\u9009\u7528\u7684\u662F"),e("a",l,[a("\u65E0\u9650\u5236\u751F\u6210\u4E8C\u7EF4\u7801"),s(n)]),a("\u3002")]),u,m,e("p",null,[a("\u83B7\u53D6\u4EFB\u4F55\u4E8C\u7EF4\u7801\u90FD\u9700\u8981\u5148\u83B7\u53D6 "),h,a("\uFF0C\u8FD9\u662F\u5C0F\u7A0B\u5E8F\u5168\u5C40\u552F\u4E00\u540E\u53F0\u63A5\u53E3\u8C03\u7528\u51ED\u636E\u3002"),e("a",_,[a("\u6587\u6863\u5730\u5740"),s(n)])]),k,e("ul",null,[e("li",null,[e("a",v,[a("\u6587\u6863\u5730\u5740"),s(n)])])]),g,e("ul",null,[e("li",null,[e("a",b,[a("\u6587\u6863\u5730\u5740"),s(n)])])]),q])}const P=o(d,[["render",f],["__file","qr-code.html.vue"]]);export{P as default};
