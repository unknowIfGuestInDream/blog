import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c,f as d}from"./app.7e7f0dc0.js";const o={},i=d('<p>\u5728\u5C0F\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u7F51\u7EDC\u76F8\u5173\u7684 API \u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u4E0B\u5217\u95EE\u9898\uFF0C\u8BF7\u5F00\u53D1\u8005\u63D0\u524D\u4E86\u89E3\u3002</p><h2 id="_1-\u670D\u52A1\u5668\u57DF\u540D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-\u670D\u52A1\u5668\u57DF\u540D\u914D\u7F6E" aria-hidden="true">#</a> 1. \u670D\u52A1\u5668\u57DF\u540D\u914D\u7F6E</h2><p>\u6BCF\u4E2A\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u9700\u8981\u4E8B\u5148\u8BBE\u7F6E\u4E00\u4E2A\u901A\u8BAF\u57DF\u540D\uFF0C\u5C0F\u7A0B\u5E8F\u53EA\u53EF\u4EE5\u8DDF\u6307\u5B9A\u7684\u57DF\u540D\u4E0E\u8FDB\u884C\u7F51\u7EDC\u901A\u4FE1\u3002\u5305\u62EC\u666E\u901A HTTPS \u8BF7\u6C42(<code>wx.request</code>)\u3001\u4E0A\u4F20\u6587\u4EF6(<code>wx.uploadFile</code>)\u3001\u4E0B\u8F7D\u6587\u4EF6(<code>wx.downloadFile</code>) \u548C WebSocket \u901A\u4FE1(<code>wx.connectSocket</code>)</p><h3 id="\u914D\u7F6E\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6D41\u7A0B" aria-hidden="true">#</a> \u914D\u7F6E\u6D41\u7A0B</h3><p>\u670D\u52A1\u5668\u57DF\u540D\u8BF7\u5728 \u300C\u5C0F\u7A0B\u5E8F\u540E\u53F0-\u8BBE\u7F6E-\u5F00\u53D1\u8BBE\u7F6E-\u670D\u52A1\u5668\u57DF\u540D\u300D \u4E2D\u8FDB\u884C\u914D\u7F6E\uFF0C\u914D\u7F6E\u65F6\u9700\u8981\u6CE8\u610F:</p><ul><li>\u57DF\u540D\u53EA\u652F\u6301 HTTPS (<code>wx.request</code>\u3001<code>wx.uploadFile</code>\u3001<code>wx.downloadFile</code>) \u548C wss (<code>wx.connectSocket</code>) \u534F\u8BAE\uFF1B</li><li>\u57DF\u540D\u4E0D\u80FD\u4F7F\u7528 IP \u5730\u5740\u6216 localhost\uFF1B</li><li>\u53EF\u4EE5\u914D\u7F6E\u7AEF\u53E3\uFF0C\u5982 <code>https://myserver.com:8080</code>\uFF0C\u4F46\u662F\u914D\u7F6E\u540E\u53EA\u80FD\u5411 <code>https://myserver.com:8080</code> \u53D1\u8D77\u8BF7\u6C42\u3002</li><li>\u5982\u679C\u4E0D\u914D\u7F6E\u7AEF\u53E3\u3002\u5982 <code>https://myserver.com</code>\uFF0C\u90A3\u4E48\u8BF7\u6C42\u7684 URL \u4E2D\u4E5F\u4E0D\u80FD\u5305\u542B\u7AEF\u53E3\uFF0C\u751A\u81F3\u662F\u9ED8\u8BA4\u7684 443 \u7AEF\u53E3\u4E5F\u4E0D\u53EF\u4EE5\u3002</li><li>\u57DF\u540D\u5FC5\u987B\u7ECF\u8FC7 ICP \u5907\u6848\uFF1B</li><li>\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C<code>api.weixin.qq.com</code> \u4E0D\u80FD\u88AB\u914D\u7F6E\u4E3A\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u76F8\u5173 API \u4E5F\u4E0D\u80FD\u5728\u5C0F\u7A0B\u5E8F\u5185\u8C03\u7528\u3002\u5F00\u53D1\u8005\u5E94\u5C06 AppSecret \u4FDD\u5B58\u5230\u540E\u53F0\u670D\u52A1\u5668\u4E2D\uFF0C\u901A\u8FC7\u670D\u52A1\u5668\u4F7F\u7528 getAccessToken \u63A5\u53E3\u83B7\u53D6 access_token\uFF0C\u5E76\u8C03\u7528\u76F8\u5173 API\uFF1B</li></ul><p>\u5BF9\u4E8E\u6BCF\u4E2A\u63A5\u53E3\uFF0C\u5206\u522B\u53EF\u4EE5\u914D\u7F6E\u6700\u591A 20 \u4E2A\u57DF\u540D\u3002</p><h2 id="_2-\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_2-\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a> 2. \u7F51\u7EDC\u8BF7\u6C42</h2><h3 id="\u8D85\u65F6\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u8D85\u65F6\u65F6\u95F4" aria-hidden="true">#</a> \u8D85\u65F6\u65F6\u95F4</h3><p>\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4\u548C\u6700\u5927\u8D85\u65F6\u65F6\u95F4\u90FD\u662F 60s\uFF1B</p><p>\u8D85\u65F6\u65F6\u95F4\u53EF\u4EE5\u5728 <code>app.json</code> \u4E2D\u901A\u8FC7 <code>networktimeout</code> \u914D\u7F6E\u3002</p><h3 id="\u4F7F\u7528\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u9650\u5236" aria-hidden="true">#</a> \u4F7F\u7528\u9650\u5236</h3><ol><li><p>\u7F51\u7EDC\u8BF7\u6C42\u7684 referer header \u4E0D\u53EF\u8BBE\u7F6E\u3002\u5176\u683C\u5F0F\u56FA\u5B9A\u4E3A <code>https://servicewechat.com/{appid}/{version}/page-frame.html</code>\uFF0C\u5176\u4E2D <code>{appid}</code> \u4E3A\u5C0F\u7A0B\u5E8F\u7684 appid\uFF0C<code>{version}</code> \u4E3A\u5C0F\u7A0B\u5E8F\u7684\u7248\u672C\u53F7\uFF0C\u7248\u672C\u53F7\u4E3A <code>0</code> \u8868\u793A\u4E3A\u5F00\u53D1\u7248\u3001\u4F53\u9A8C\u7248\u4EE5\u53CA\u5BA1\u6838\u7248\u672C\uFF0C\u7248\u672C\u53F7\u4E3A <code>devtools</code> \u8868\u793A\u4E3A\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5176\u4F59\u4E3A\u6B63\u5F0F\u7248\u672C\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u56E0\u4E3A\u5C0F\u7A0B\u5E8F\u5FC5\u5B9A\u5E26\u4E0A\u7279\u5B9A Header\uFF0C\u5728\u540E\u7AEF\u7684 API \u5904\u7406\u4E0A\u5C31\u53EF\u4EE5\u5224\u65AD Header\uFF0C\u68C0\u6D4B\u5230\u53EA\u6709\u662F\u81EA\u5DF1\u5C0F\u7A0B\u5E8F\u65F6\u624D\u5141\u8BB8\u8C03\u7528\u63A5\u53E3\uFF0C\u5426\u5219\u76F4\u63A5\u62D2\u7EDD\u8BBF\u95EE\u3002</p></div></li><li><p>wx.request\u3001wx.uploadFile\u3001wx.downloadFile \u7684\u6700\u5927\u5E76\u53D1\u9650\u5236\u662F 10 \u4E2A\uFF1B</p></li></ol><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u6240\u4EE5\u4E00\u5B9A\u8981\u907F\u514D\u540C\u65F6\u53D1\u9001\u8FC7\u591A\u7684\u7F51\u7EDC\u8BF7\u6C42</p></div><ol><li>\u5C0F\u7A0B\u5E8F\u8FDB\u5165\u540E\u53F0\u8FD0\u884C\u540E(\u975E\u7F6E\u9876\u804A\u5929)\uFF0C\u5982\u679C 5s \u5185\u7F51\u7EDC\u8BF7\u6C42\u6CA1\u6709\u7ED3\u675F\uFF0C\u4F1A\u56DE\u8C03\u9519\u8BEF\u4FE1\u606F <code>fail interrupted</code>\uFF1B\u5728\u56DE\u5230\u524D\u53F0\u4E4B\u524D\uFF0C\u7F51\u7EDC\u8BF7\u6C42\u63A5\u53E3\u8C03\u7528\u90FD\u4F1A\u65E0\u6CD5\u8C03\u7528\u3002</li></ol><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u6240\u4EE5\u91CD\u8981\u8BF7\u6C42\u7684 <code>fail</code> \u6D41\u7A0B\u4E00\u5B9A\u8981\u59A5\u5584\u5904\u7406\uFF0C\u53EF\u4EE5\u8003\u8389\u518D\u6B21\u8FDB\u884C\u4E00\u6B21\u6216\u4E24\u6B21\u91CD\u8BD5\u6216\u660E\u786E\u63D0\u793A\u7528\u6237\u8BF7\u6C42\u5931\u8D25\u8BA9\u5176\u624B\u52A8\u91CD\u8BD5</p></div><h3 id="\u8FD4\u56DE\u503C\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C\u7F16\u7801" aria-hidden="true">#</a> \u8FD4\u56DE\u503C\u7F16\u7801</h3><ol><li><p>\u5EFA\u8BAE\u670D\u52A1\u5668\u8FD4\u56DE\u503C\u4F7F\u7528 UTF-8 \u7F16\u7801\u3002\u5BF9\u4E8E\u975E UTF-8 \u7F16\u7801\uFF0C\u5C0F\u7A0B\u5E8F\u4F1A\u5C1D\u8BD5\u8FDB\u884C\u8F6C\u6362\uFF0C\u4F46\u662F\u4F1A\u6709\u8F6C\u6362\u5931\u8D25\u7684\u53EF\u80FD\u3002</p></li><li><p>\u5C0F\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u5BF9 BOM \u5934\u8FDB\u884C\u8FC7\u6EE4(\u53EA\u8FC7\u6EE4\u4E00\u4E2A BOM \u5934)\u3002</p></li></ol><h3 id="\u56DE\u8C03\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a> \u56DE\u8C03\u51FD\u6570</h3><p>\u53EA\u8981\u6210\u529F\u63A5\u6536\u5230\u670D\u52A1\u5668\u8FD4\u56DE\uFF0C\u65E0\u8BBA <code>statusCode</code> \u662F\u591A\u5C11\uFF0C\u90FD\u4F1A\u8FDB\u5165 <code>success</code> \u56DE\u8C03\u3002\u8BF7\u5F00\u53D1\u8005\u6839\u636E\u4E1A\u52A1\u903B\u8F91\u5BF9\u8FD4\u56DE\u503C\u8FDB\u884C\u5224\u65AD\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u6240\u4EE5\u5728\u8BF7\u6C42\u6210\u529F\u7684\u65F6\u5019\uFF0C\u4E5F\u8981\u5224\u65AD\u8BF7\u6C42\u7801\u662F\u4E0D\u662F 200\uFF0C\u5E76\u5BF9\u5176\u4ED6\u72B6\u6001\u7801\u505A\u5408\u7406\u7684\u5904\u7406\u3002</p></div><h2 id="_3-\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 3. \u5E38\u89C1\u95EE\u9898</h2><h3 id="https-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#https-\u8BC1\u4E66" aria-hidden="true">#</a> HTTPS \u8BC1\u4E66</h3><p>\u5C0F\u7A0B\u5E8F\u5FC5\u987B\u4F7F\u7528 HTTPS/WSS \u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\u3002\u8BF7\u6C42\u65F6\u7CFB\u7EDF\u4F1A\u5BF9\u670D\u52A1\u5668\u57DF\u540D\u4F7F\u7528\u7684 HTTPS \u8BC1\u4E66\u8FDB\u884C\u6821\u9A8C\uFF0C\u5982\u679C\u6821\u9A8C\u5931\u8D25\uFF0C\u5219\u8BF7\u6C42\u4E0D\u80FD\u6210\u529F\u53D1\u8D77\u3002\u7531\u4E8E\u7CFB\u7EDF\u9650\u5236\uFF0C\u4E0D\u540C\u5E73\u53F0\u5BF9\u4E8E\u8BC1\u4E66\u8981\u6C42\u7684\u4E25\u683C\u7A0B\u5EA6\u4E0D\u540C\u3002\u4E3A\u4E86\u4FDD\u8BC1\u5C0F\u7A0B\u5E8F\u7684\u517C\u5BB9\u6027\uFF0C\u5EFA\u8BAE\u5F00\u53D1\u8005\u6309\u7167\u6700\u9AD8\u6807\u51C6\u8FDB\u884C\u8BC1\u4E66\u914D\u7F6E\uFF0C\u5E76\u4F7F\u7528\u76F8\u5173\u5DE5\u5177\u68C0\u67E5\u73B0\u6709\u8BC1\u4E66\u662F\u5426\u7B26\u5408\u8981\u6C42\u3002</p><h3 id="\u8DF3\u8FC7\u57DF\u540D\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u8DF3\u8FC7\u57DF\u540D\u6821\u9A8C" aria-hidden="true">#</a> \u8DF3\u8FC7\u57DF\u540D\u6821\u9A8C</h3><p>\u5728\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\uFF0C\u53EF\u4EE5\u4E34\u65F6\u5F00\u542F \u5F00\u53D1\u73AF\u5883\u4E0D\u6821\u9A8C\u8BF7\u6C42\u57DF\u540D\u3001TLS \u7248\u672C\u53CA HTTPS \u8BC1\u4E66 \u9009\u9879\uFF0C\u8DF3\u8FC7\u670D\u52A1\u5668\u57DF\u540D\u7684\u6821\u9A8C\u3002\u6B64\u65F6\uFF0C\u5728\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u53CA\u624B\u673A\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\u65F6\uFF0C\u4E0D\u4F1A\u8FDB\u884C\u670D\u52A1\u5668\u57DF\u540D\u7684\u6821\u9A8C\u3002</p><p>\u5728\u670D\u52A1\u5668\u57DF\u540D\u914D\u7F6E\u6210\u529F\u540E\uFF0C\u5EFA\u8BAE\u5F00\u53D1\u8005\u5173\u95ED\u6B64\u9009\u9879\u8FDB\u884C\u5F00\u53D1\uFF0C\u5E76\u5728\u5404\u5E73\u53F0\u4E0B\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u4EE5\u786E\u8BA4\u670D\u52A1\u5668\u57DF\u540D\u914D\u7F6E\u6B63\u786E\u3002</p><p>\u5982\u679C\u624B\u673A\u4E0A\u51FA\u73B0 \u201C\u6253\u5F00\u8C03\u8BD5\u6A21\u5F0F\u53EF\u4EE5\u53D1\u51FA\u8BF7\u6C42\uFF0C\u5173\u95ED\u8C03\u8BD5\u6A21\u5F0F\u65E0\u6CD5\u53D1\u51FA\u8BF7\u6C42\u201D \u7684\u73B0\u8C61\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u8DF3\u8FC7\u4E86\u57DF\u540D\u6821\u9A8C\uFF0C\u5E76\u786E\u8BA4\u670D\u52A1\u5668\u57DF\u540D\u548C\u8BC1\u4E66\u914D\u7F6E\u662F\u5426\u6B63\u786E\u3002</p>',28),t=[i];function r(s,l){return a(),c("div",null,t)}const h=e(o,[["render",r],["__file","network.html.vue"]]);export{h as default};
