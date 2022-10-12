import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as s}from"./app.cad6791d.js";const e={},d=s(`<h2 id="wx-request-object-object" tabindex="-1"><a class="header-anchor" href="#wx-request-object-object" aria-hidden="true">#</a> wx.request(Object object)</h2><p>\u53D1\u8D77 HTTPS \u7F51\u7EDC\u8BF7\u6C42\u3002\u4F7F\u7528\u524D\u8BF7\u6CE8\u610F\u9605\u8BFB\u76F8\u5173\u8BF4\u660E\u3002</p><h3 id="request-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#request-\u53C2\u6570" aria-hidden="true">#</a> request \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th><th>\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td>\u662F</td><td>\u5F00\u53D1\u8005\u670D\u52A1\u5668\u63A5\u53E3\u5730\u5740</td><td></td></tr><tr><td>data</td><td>string/object/ArrayBuffer</td><td></td><td>\u5426</td><td>\u8BF7\u6C42\u7684\u53C2\u6570</td><td></td></tr><tr><td>header</td><td>Object</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u8BF7\u6C42\u7684 header\uFF0Cheader \u4E2D\u4E0D\u80FD\u8BBE\u7F6E Referer\u3002</td><td></td></tr><tr><td>content-type \u9ED8\u8BA4\u4E3A application/json</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>method</td><td>string</td><td>GET</td><td>\u5426</td><td>HTTP \u8BF7\u6C42\u65B9\u6CD5</td><td></td></tr><tr><td>dataType</td><td>string</td><td>json</td><td>\u5426</td><td>\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F</td><td></td></tr><tr><td>responseType</td><td>string</td><td>text</td><td>\u5426</td><td>\u54CD\u5E94\u7684\u6570\u636E\u7C7B\u578B</td><td>1.7.0</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td><td></td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td><td></td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td><td></td></tr></tbody></table><p>object.method \u7684\u5408\u6CD5\u503C</p><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>OPTIONS</td><td>HTTP \u8BF7\u6C42 OPTIONS</td></tr><tr><td>GET</td><td>HTTP \u8BF7\u6C42 GET</td></tr><tr><td>HEAD</td><td>HTTP \u8BF7\u6C42 HEAD</td></tr><tr><td>POST</td><td>HTTP \u8BF7\u6C42 POST</td></tr><tr><td>PUT</td><td>HTTP \u8BF7\u6C42 PUT</td></tr><tr><td>DELETE</td><td>HTTP \u8BF7\u6C42 DELETE</td></tr><tr><td>TRACE</td><td>HTTP \u8BF7\u6C42 TRACE</td></tr><tr><td>CONNECT</td><td>HTTP \u8BF7\u6C42 CONNECT</td></tr></tbody></table><p>object.dataType \u7684\u5408\u6CD5\u503C</p><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>json</td><td>\u8FD4\u56DE\u7684\u6570\u636E\u4E3A JSON\uFF0C\u8FD4\u56DE\u540E\u4F1A\u5BF9\u8FD4\u56DE\u7684\u6570\u636E\u8FDB\u884C\u4E00\u6B21 JSON.parse</td></tr><tr><td>\u5176\u4ED6</td><td>\u4E0D\u5BF9\u8FD4\u56DE\u7684\u5185\u5BB9\u8FDB\u884C JSON.parse</td></tr></tbody></table><p>object.responseType \u7684\u5408\u6CD5\u503C</p><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>text</td><td>\u54CD\u5E94\u7684\u6570\u636E\u4E3A\u6587\u672C</td></tr><tr><td>arraybuffer</td><td>\u54CD\u5E94\u7684\u6570\u636E\u4E3A ArrayBuffer</td></tr></tbody></table><p>object.success \u56DE\u8C03\u51FD\u6570</p><p>\u53C2\u6570</p><p>Object res</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td>data</td><td>string/Object/Arraybuffer</td><td>\u5F00\u53D1\u8005\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6570\u636E</td><td></td></tr><tr><td>statusCode</td><td>number</td><td>\u5F00\u53D1\u8005\u670D\u52A1\u5668\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801</td><td></td></tr><tr><td>header</td><td>Object</td><td>\u5F00\u53D1\u8005\u670D\u52A1\u5668\u8FD4\u56DE\u7684 HTTP Response Header</td><td>1.2.0</td></tr></tbody></table><h3 id="request-\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#request-\u8FD4\u56DE\u503C" aria-hidden="true">#</a> request \u8FD4\u56DE\u503C</h3><p>RequestTask</p><p>\u8BF7\u6C42\u4EFB\u52A1\u5BF9\u8C61</p><h3 id="data-\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#data-\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> data \u53C2\u6570\u8BF4\u660E</h3><p>\u6700\u7EC8\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u7684\u6570\u636E\u662F String \u7C7B\u578B\uFF0C\u5982\u679C\u4F20\u5165\u7684 data \u4E0D\u662F String \u7C7B\u578B\uFF0C\u4F1A\u88AB\u8F6C\u6362\u6210 String \u3002\u8F6C\u6362\u89C4\u5219\u5982\u4E0B:</p><ul><li>\u5BF9\u4E8E GET \u65B9\u6CD5\u7684\u6570\u636E\uFF0C\u4F1A\u5C06\u6570\u636E\u8F6C\u6362\u6210 query string(encodeURIComponent(k)=encodeURIComponent(v)&amp;encodeURIComponent(k)=encodeURIComponent(v)...)</li><li>\u5BF9\u4E8E POST \u65B9\u6CD5\u4E14 <code>header[&#39;content-type&#39;]</code> \u4E3A application/json \u7684\u6570\u636E\uFF0C\u4F1A\u5BF9\u6570\u636E\u8FDB\u884C JSON \u5E8F\u5217\u5316</li><li>\u5BF9\u4E8E POST \u65B9\u6CD5\u4E14 <code>header[&#39;content-type&#39;]</code> \u4E3A application/x-www-form-urlencoded \u7684\u6570\u636E\uFF0C\u4F1A\u5C06\u6570\u636E\u8F6C\u6362\u6210 query string (encodeURIComponent(k)=encodeURIComponent(v)&amp;encodeURIComponent(k)=encodeURIComponent(v)...)</li></ul><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;test.php&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u4EC5\u4E3A\u793A\u4F8B\uFF0C\u5E76\u975E\u771F\u5B9E\u7684\u63A5\u53E3\u5730\u5740</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;content-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u503C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-downloadfile-object-object" tabindex="-1"><a class="header-anchor" href="#wx-downloadfile-object-object" aria-hidden="true">#</a> wx.downloadFile(Object object)</h2><p>\u4E0B\u8F7D\u6587\u4EF6\u8D44\u6E90\u5230\u672C\u5730\u3002\u5BA2\u6237\u7AEF\u76F4\u63A5\u53D1\u8D77\u4E00\u4E2A HTTPS GET \u8BF7\u6C42\uFF0C\u8FD4\u56DE\u6587\u4EF6\u7684\u672C\u5730\u4E34\u65F6\u8DEF\u5F84\uFF0C\u5355\u6B21\u4E0B\u8F7D\u5141\u8BB8\u7684\u6700\u5927\u6587\u4EF6\u4E3A 50MB\u3002\u4F7F\u7528\u524D\u8BF7\u6CE8\u610F\u9605\u8BFB\u76F8\u5173\u8BF4\u660E\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u8BF7\u5728\u670D\u52A1\u7AEF\u54CD\u5E94\u7684 header \u4E2D\u6307\u5B9A\u5408\u7406\u7684 Content-Type \u5B57\u6BB5\uFF0C\u4EE5\u4FDD\u8BC1\u5BA2\u6237\u7AEF\u6B63\u786E\u5904\u7406\u6587\u4EF6\u7C7B\u578B\u3002</p></div><h3 id="downloadfile-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#downloadfile-\u53C2\u6570" aria-hidden="true">#</a> downloadFile \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th><th>\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>\u662F</td><td>\u4E0B\u8F7D\u8D44\u6E90\u7684 url</td><td></td></tr><tr><td>header</td><td>Object</td><td>\u5426</td><td>HTTP \u8BF7\u6C42\u7684 Header\uFF0CHeader \u4E2D\u4E0D\u80FD\u8BBE\u7F6E Referer</td><td></td></tr><tr><td>filePath</td><td>string</td><td>\u5426</td><td>\u6307\u5B9A\u6587\u4EF6\u4E0B\u8F7D\u540E\u5B58\u50A8\u7684\u8DEF\u5F84</td><td>1.8.0</td></tr><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td><td></td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td><td></td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td><td></td></tr></tbody></table><p>object.success \u56DE\u8C03\u51FD\u6570</p><p>\u53C2\u6570</p><p>Object res</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tempFilePath</td><td>string</td><td>\u4E34\u65F6\u6587\u4EF6\u8DEF\u5F84\u3002\u6CA1\u4F20\u5165 filePath \u6307\u5B9A\u6587\u4EF6\u5B58\u50A8\u8DEF\u5F84\u65F6\u4F1A\u8FD4\u56DE\uFF0C\u4E0B\u8F7D\u540E\u7684\u6587\u4EF6\u4F1A\u5B58\u50A8\u5230\u4E00\u4E2A\u4E34\u65F6\u6587\u4EF6</td></tr><tr><td>filePath</td><td>string</td><td>\u7528\u6237\u6587\u4EF6\u8DEF\u5F84\u3002\u4F20\u5165 filePath \u65F6\u4F1A\u8FD4\u56DE\uFF0C\u8DDF\u4F20\u5165\u7684 filePath \u4E00\u81F4</td></tr><tr><td>statusCode</td><td>number</td><td>\u5F00\u53D1\u8005\u670D\u52A1\u5668\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801</td></tr></tbody></table><h3 id="downloadfile-\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#downloadfile-\u8FD4\u56DE\u503C" aria-hidden="true">#</a> downloadFile \u8FD4\u56DE\u503C</h3><p>DownloadTask</p><p>\u4E00\u4E2A\u53EF\u4EE5\u76D1\u542C\u4E0B\u8F7D\u8FDB\u5EA6\u53D8\u5316\u4E8B\u4EF6\u548C\u53D6\u6D88\u4E0B\u8F7D\u7684\u5BF9\u8C61</p><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/audio/123&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u4EC5\u4E3A\u793A\u4F8B\uFF0C\u5E76\u975E\u771F\u5B9E\u7684\u8D44\u6E90</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EA\u8981\u670D\u52A1\u5668\u6709\u54CD\u5E94\u6570\u636E\uFF0C\u5C31\u4F1A\u628A\u54CD\u5E94\u5185\u5BB9\u5199\u5165\u6587\u4EF6\u5E76\u8FDB\u5165 success \u56DE\u8C03\uFF0C\u4E1A\u52A1\u9700\u8981\u81EA\u884C\u5224\u65AD\u662F\u5426\u4E0B\u8F7D\u5230\u4E86\u60F3\u8981\u7684\u5185\u5BB9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span>
      wx<span class="token punctuation">.</span><span class="token function">playVoice</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">filePath</span><span class="token operator">:</span> res<span class="token punctuation">.</span>tempFilePath<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-uploadfile-object-object" tabindex="-1"><a class="header-anchor" href="#wx-uploadfile-object-object" aria-hidden="true">#</a> wx.uploadFile(Object object)</h2><p>\u5C06\u672C\u5730\u8D44\u6E90\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u3002\u5BA2\u6237\u7AEF\u53D1\u8D77\u4E00\u4E2A HTTPS POST \u8BF7\u6C42\uFF0C\u5176\u4E2D content-type \u4E3A <code>multipart/form-data</code>\u3002\u4F7F\u7528\u524D\u8BF7\u6CE8\u610F\u9605\u8BFB\u76F8\u5173\u8BF4\u660E\u3002</p><h3 id="uploadfile-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#uploadfile-\u53C2\u6570" aria-hidden="true">#</a> uploadFile \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>\u662F</td><td>\u5F00\u53D1\u8005\u670D\u52A1\u5668\u5730\u5740</td></tr><tr><td>filePath</td><td>string</td><td>\u662F</td><td>\u8981\u4E0A\u4F20\u6587\u4EF6\u8D44\u6E90\u7684\u8DEF\u5F84</td></tr><tr><td>name</td><td>string</td><td>\u662F</td><td>\u6587\u4EF6\u5BF9\u5E94\u7684 key\uFF0C\u5F00\u53D1\u8005\u5728\u670D\u52A1\u7AEF\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A key \u83B7\u53D6\u6587\u4EF6\u7684\u4E8C\u8FDB\u5236\u5185\u5BB9</td></tr><tr><td>header</td><td>Object</td><td>\u5426</td><td>HTTP \u8BF7\u6C42 Header\uFF0CHeader \u4E2D\u4E0D\u80FD\u8BBE\u7F6E Referer</td></tr><tr><td>formData</td><td>Object</td><td>\u5426</td><td>HTTP \u8BF7\u6C42\u4E2D\u5176\u4ED6\u989D\u5916\u7684 form data</td></tr><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>object.success \u56DE\u8C03\u51FD\u6570</p><p>\u53C2\u6570</p><p>Object res</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>string</td><td>\u5F00\u53D1\u8005\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6570\u636E</td></tr><tr><td>statusCode</td><td>number</td><td>\u5F00\u53D1\u8005\u670D\u52A1\u5668\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801</td></tr></tbody></table><h3 id="uploadfile-\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#uploadfile-\u8FD4\u56DE\u503C" aria-hidden="true">#</a> uploadFile \u8FD4\u56DE\u503C</h3><p>UploadTask</p><p>\u4E00\u4E2A\u53EF\u4EE5\u76D1\u542C\u4E0A\u4F20\u8FDB\u5EA6\u8FDB\u5EA6\u53D8\u5316\u7684\u4E8B\u4EF6\u548C\u53D6\u6D88\u4E0A\u4F20\u7684\u5BF9\u8C61</p><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tempFilePaths <span class="token operator">=</span> res<span class="token punctuation">.</span>tempFilePaths<span class="token punctuation">;</span>

    wx<span class="token punctuation">.</span><span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://example.weixin.qq.com/upload&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u4EC5\u4E3A\u793A\u4F8B\uFF0C\u975E\u771F\u5B9E\u7684\u63A5\u53E3\u5730\u5740</span>
      <span class="token literal-property property">filePath</span><span class="token operator">:</span> tempFilePaths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        <span class="token comment">//do something</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),p=[d];function o(r,c){return n(),a("div",null,p)}const u=t(e,[["render",o],["__file","network.html.vue"]]);export{u as default};
