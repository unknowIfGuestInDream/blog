import{_ as t,X as n,Y as a,a3 as s}from"./framework-a4b0319b.js";const e={},d=s(`<h2 id="wx-request-object-object" tabindex="-1"><a class="header-anchor" href="#wx-request-object-object" aria-hidden="true">#</a> wx.request(Object object)</h2><p>发起 HTTPS 网络请求。使用前请注意阅读相关说明。</p><h3 id="request-参数" tabindex="-1"><a class="header-anchor" href="#request-参数" aria-hidden="true">#</a> request 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td>是</td><td>开发者服务器接口地址</td><td></td></tr><tr><td>data</td><td>string/object/ArrayBuffer</td><td></td><td>否</td><td>请求的参数</td><td></td></tr><tr><td>header</td><td>Object</td><td></td><td>否</td><td>设置请求的 header，header 中不能设置 Referer。</td><td></td></tr><tr><td>content-type 默认为 application/json</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>method</td><td>string</td><td>GET</td><td>否</td><td>HTTP 请求方法</td><td></td></tr><tr><td>dataType</td><td>string</td><td>json</td><td>否</td><td>返回的数据格式</td><td></td></tr><tr><td>responseType</td><td>string</td><td>text</td><td>否</td><td>响应的数据类型</td><td>1.7.0</td></tr><tr><td>success</td><td>function</td><td></td><td>否</td><td>接口调用成功的回调函数</td><td></td></tr><tr><td>fail</td><td>function</td><td></td><td>否</td><td>接口调用失败的回调函数</td><td></td></tr><tr><td>complete</td><td>function</td><td></td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td><td></td></tr></tbody></table><p>object.method 的合法值</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>OPTIONS</td><td>HTTP 请求 OPTIONS</td></tr><tr><td>GET</td><td>HTTP 请求 GET</td></tr><tr><td>HEAD</td><td>HTTP 请求 HEAD</td></tr><tr><td>POST</td><td>HTTP 请求 POST</td></tr><tr><td>PUT</td><td>HTTP 请求 PUT</td></tr><tr><td>DELETE</td><td>HTTP 请求 DELETE</td></tr><tr><td>TRACE</td><td>HTTP 请求 TRACE</td></tr><tr><td>CONNECT</td><td>HTTP 请求 CONNECT</td></tr></tbody></table><p>object.dataType 的合法值</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>json</td><td>返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse</td></tr><tr><td>其他</td><td>不对返回的内容进行 JSON.parse</td></tr></tbody></table><p>object.responseType 的合法值</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>text</td><td>响应的数据为文本</td></tr><tr><td>arraybuffer</td><td>响应的数据为 ArrayBuffer</td></tr></tbody></table><p>object.success 回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>data</td><td>string/Object/Arraybuffer</td><td>开发者服务器返回的数据</td><td></td></tr><tr><td>statusCode</td><td>number</td><td>开发者服务器返回的 HTTP 状态码</td><td></td></tr><tr><td>header</td><td>Object</td><td>开发者服务器返回的 HTTP Response Header</td><td>1.2.0</td></tr></tbody></table><h3 id="request-返回值" tabindex="-1"><a class="header-anchor" href="#request-返回值" aria-hidden="true">#</a> request 返回值</h3><p>RequestTask</p><p>请求任务对象</p><h3 id="data-参数说明" tabindex="-1"><a class="header-anchor" href="#data-参数说明" aria-hidden="true">#</a> data 参数说明</h3><p>最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下:</p><ul><li>对于 GET 方法的数据，会将数据转换成 query string(encodeURIComponent(k)=encodeURIComponent(v)&amp;encodeURIComponent(k)=encodeURIComponent(v)...)</li><li>对于 POST 方法且 <code>header[&#39;content-type&#39;]</code> 为 application/json 的数据，会对数据进行 JSON 序列化</li><li>对于 POST 方法且 <code>header[&#39;content-type&#39;]</code> 为 application/x-www-form-urlencoded 的数据，会将数据转换成 query string (encodeURIComponent(k)=encodeURIComponent(v)&amp;encodeURIComponent(k)=encodeURIComponent(v)...)</li></ul><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;test.php&quot;</span><span class="token punctuation">,</span> <span class="token comment">//仅为示例，并非真实的接口地址</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;content-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-downloadfile-object-object" tabindex="-1"><a class="header-anchor" href="#wx-downloadfile-object-object" aria-hidden="true">#</a> wx.downloadFile(Object object)</h2><p>下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径，单次下载允许的最大文件为 50MB。使用前请注意阅读相关说明。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>请在服务端响应的 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型。</p></div><h3 id="downloadfile-参数" tabindex="-1"><a class="header-anchor" href="#downloadfile-参数" aria-hidden="true">#</a> downloadFile 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>是</td><td>下载资源的 url</td><td></td></tr><tr><td>header</td><td>Object</td><td>否</td><td>HTTP 请求的 Header，Header 中不能设置 Referer</td><td></td></tr><tr><td>filePath</td><td>string</td><td>否</td><td>指定文件下载后存储的路径</td><td>1.8.0</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td><td></td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td><td></td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td><td></td></tr></tbody></table><p>object.success 回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>tempFilePath</td><td>string</td><td>临时文件路径。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件</td></tr><tr><td>filePath</td><td>string</td><td>用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致</td></tr><tr><td>statusCode</td><td>number</td><td>开发者服务器返回的 HTTP 状态码</td></tr></tbody></table><h3 id="downloadfile-返回值" tabindex="-1"><a class="header-anchor" href="#downloadfile-返回值" aria-hidden="true">#</a> downloadFile 返回值</h3><p>DownloadTask</p><p>一个可以监听下载进度变化事件和取消下载的对象</p><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/audio/123&quot;</span><span class="token punctuation">,</span> <span class="token comment">//仅为示例，并非真实的资源</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span>
      wx<span class="token punctuation">.</span><span class="token function">playVoice</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">filePath</span><span class="token operator">:</span> res<span class="token punctuation">.</span>tempFilePath<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-uploadfile-object-object" tabindex="-1"><a class="header-anchor" href="#wx-uploadfile-object-object" aria-hidden="true">#</a> wx.uploadFile(Object object)</h2><p>将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 <code>multipart/form-data</code>。使用前请注意阅读相关说明。</p><h3 id="uploadfile-参数" tabindex="-1"><a class="header-anchor" href="#uploadfile-参数" aria-hidden="true">#</a> uploadFile 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>是</td><td>开发者服务器地址</td></tr><tr><td>filePath</td><td>string</td><td>是</td><td>要上传文件资源的路径</td></tr><tr><td>name</td><td>string</td><td>是</td><td>文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容</td></tr><tr><td>header</td><td>Object</td><td>否</td><td>HTTP 请求 Header，Header 中不能设置 Referer</td></tr><tr><td>formData</td><td>Object</td><td>否</td><td>HTTP 请求中其他额外的 form data</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>object.success 回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>string</td><td>开发者服务器返回的数据</td></tr><tr><td>statusCode</td><td>number</td><td>开发者服务器返回的 HTTP 状态码</td></tr></tbody></table><h3 id="uploadfile-返回值" tabindex="-1"><a class="header-anchor" href="#uploadfile-返回值" aria-hidden="true">#</a> uploadFile 返回值</h3><p>UploadTask</p><p>一个可以监听上传进度进度变化的事件和取消上传的对象</p><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tempFilePaths <span class="token operator">=</span> res<span class="token punctuation">.</span>tempFilePaths<span class="token punctuation">;</span>

    wx<span class="token punctuation">.</span><span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://example.weixin.qq.com/upload&quot;</span><span class="token punctuation">,</span> <span class="token comment">//仅为示例，非真实的接口地址</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),p=[d];function o(r,c){return n(),a("div",null,p)}const l=t(e,[["render",o],["__file","network.html.vue"]]);export{l as default};
