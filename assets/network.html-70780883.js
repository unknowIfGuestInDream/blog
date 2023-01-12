const t=JSON.parse('{"key":"v-03878d48","path":"/en/code/mini-app/guide/service/api/network.html","title":"网络 API","lang":"en-US","frontmatter":{"title":"网络 API","icon":"network","category":["小程序"],"description":"wx.request(Object object) 发起 HTTPS 网络请求。使用前请注意阅读相关说明。 request 参数 Object object 属性 类型 默认值 必填 说明 最低版本 url string 是 开发者服务器接口地址 data string/object/ArrayBuffer 否 请求的参数 header Object 否 设置请求的 header，header 中不能设置 Referer。 content-type 默认为 application/json method string GET 否 HTTP 请求方法 dataType string json 否 返回的数据格式 responseType string text 否 响应的数据类型 1.7.0 success function 否 接口调用成功的回调函数 fail function 否 接口调用失败的回调函数 complete function 否 接口调用结束的回调函数(调用成功、失败都会执行)","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/code/mini-app/guide/service/api/network.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"网络 API"}],["meta",{"property":"og:description","content":"wx.request(Object object) 发起 HTTPS 网络请求。使用前请注意阅读相关说明。 request 参数 Object object 属性 类型 默认值 必填 说明 最低版本 url string 是 开发者服务器接口地址 data string/object/ArrayBuffer 否 请求的参数 header Object 否 设置请求的 header，header 中不能设置 Referer。 content-type 默认为 application/json method string GET 否 HTTP 请求方法 dataType string json 否 返回的数据格式 responseType string text 否 响应的数据类型 1.7.0 success function 否 接口调用成功的回调函数 fail function 否 接口调用失败的回调函数 complete function 否 接口调用结束的回调函数(调用成功、失败都会执行)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-10-08T11:40:37.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/mini-app/guide/service/api/network.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/mini-app/guide/service/api/network.html"}]]},"headers":[{"level":2,"title":"wx.request(Object object)","slug":"wx-request-object-object","link":"#wx-request-object-object","children":[{"level":3,"title":"request 参数","slug":"request-参数","link":"#request-参数","children":[]},{"level":3,"title":"request 返回值","slug":"request-返回值","link":"#request-返回值","children":[]},{"level":3,"title":"data 参数说明","slug":"data-参数说明","link":"#data-参数说明","children":[]}]},{"level":2,"title":"wx.downloadFile(Object object)","slug":"wx-downloadfile-object-object","link":"#wx-downloadfile-object-object","children":[{"level":3,"title":"downloadFile 参数","slug":"downloadfile-参数","link":"#downloadfile-参数","children":[]},{"level":3,"title":"downloadFile 返回值","slug":"downloadfile-返回值","link":"#downloadfile-返回值","children":[]}]},{"level":2,"title":"wx.uploadFile(Object object)","slug":"wx-uploadfile-object-object","link":"#wx-uploadfile-object-object","children":[{"level":3,"title":"uploadFile 参数","slug":"uploadfile-参数","link":"#uploadfile-参数","children":[]},{"level":3,"title":"uploadFile 返回值","slug":"uploadfile-返回值","link":"#uploadfile-返回值","children":[]}]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":4.21,"words":1264},"filePathRelative":"en/code/mini-app/guide/service/api/network.md","localizedDate":"October 8, 2022","excerpt":"<h2> wx.request(Object object)</h2>\\n<p>发起 HTTPS 网络请求。使用前请注意阅读相关说明。</p>\\n<h3> request 参数</h3>\\n<p>Object object</p>\\n<table>\\n<thead>\\n<tr>\\n<th>属性</th>\\n<th>类型</th>\\n<th>默认值</th>\\n<th>必填</th>\\n<th>说明</th>\\n<th>最低版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>url</td>\\n<td>string</td>\\n<td></td>\\n<td>是</td>\\n<td>开发者服务器接口地址</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>data</td>\\n<td>string/object/ArrayBuffer</td>\\n<td></td>\\n<td>否</td>\\n<td>请求的参数</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>header</td>\\n<td>Object</td>\\n<td></td>\\n<td>否</td>\\n<td>设置请求的 header，header 中不能设置 Referer。</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>content-type 默认为 application/json</td>\\n<td></td>\\n<td></td>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>method</td>\\n<td>string</td>\\n<td>GET</td>\\n<td>否</td>\\n<td>HTTP 请求方法</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>dataType</td>\\n<td>string</td>\\n<td>json</td>\\n<td>否</td>\\n<td>返回的数据格式</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>responseType</td>\\n<td>string</td>\\n<td>text</td>\\n<td>否</td>\\n<td>响应的数据类型</td>\\n<td>1.7.0</td>\\n</tr>\\n<tr>\\n<td>success</td>\\n<td>function</td>\\n<td></td>\\n<td>否</td>\\n<td>接口调用成功的回调函数</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>fail</td>\\n<td>function</td>\\n<td></td>\\n<td>否</td>\\n<td>接口调用失败的回调函数</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>complete</td>\\n<td>function</td>\\n<td></td>\\n<td>否</td>\\n<td>接口调用结束的回调函数(调用成功、失败都会执行)</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
