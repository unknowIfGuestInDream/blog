import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,d,a as t,f as e}from"./app.70f43444.js";const o={},c=t("p",null,"\u672C\u9875\u9762\u4ECB\u7ECD\u7684\u4E00\u7CFB\u5217 API \u90FD\u662F\u548C\u5C0F\u7A0B\u5E8F\u9875\u9762\u4EA4\u4E92(\u7528\u6237\u4EA4\u4E92)\u76F8\u5173\u7684 API\u3002",-1),p=t("p",null,"\u5C0F\u7A0B\u5E8F\u4E0E\u7528\u6237\u4EA4\u4E92\u5408\u7406\uFF0C\u5E76\u5728\u5408\u9002\u7684\u65F6\u673A\u5411\u7528\u6237\u5C55\u793A\u76F8\u5E94\u72B6\u6001\u53EF\u4EE5\u8BA9\u7528\u6237\u7684\u6C89\u6D78\u611F\u66F4\u5F3A\u3002",-1),i=e(`<div class="custom-container tip"><p class="custom-container-title">\u6982\u8981</p><ul><li><p><code>wx.showToast</code>: \u5C55\u793A\u6D88\u606F\u63D0\u793A\u6846</p></li><li><p><code>wx.hideToast</code>: \u9690\u85CF\u6D88\u606F\u63D0\u793A\u6846</p><p>\u7528\u4E8E\u5C55\u793A\u4E00\u4E9B\u4E0D\u662F\u5F88\u91CD\u8981\u7684\u63D0\u793A</p></li><li><p><code>wx.showLoading</code>: \u663E\u793A\u52A0\u8F7D\u63D0\u793A</p></li><li><p><code>wx.hideLoading</code>: \u9690\u85CF\u52A0\u8F7D\u63D0\u793A</p><p>\u5728\u5408\u9002\u7684\u65F6\u5019\u663E\u793A\u52A0\u8F7D\u4E2D\u72B6\u6001\uFF0C\u53EF\u4EE5\u51CF\u8F7B\u7528\u6237\u7684\u7126\u8651\u611F\u3002</p></li><li><p><code>wx.showModal</code>: \u663E\u793A\u4E00\u4E2A\u5F39\u7A97</p><p>\u8FD9\u662F\u5E0C\u671B\u63D0\u793A\u7528\u6237\u6216\u8005\u8BA9\u7528\u6237\u4E00\u4E2A\u4E24\u9879\u9009\u62E9\u7684\u597D\u65B9\u5F0F</p></li><li><p><code>wx.showActionSheet</code></p><p>\u5E0C\u671B\u7528\u6237\u5728\u591A\u4E2A\u9884\u8BBE\u52A8\u4F5C\u4E4B\u95F4\u8FDB\u884C\u9009\u62E9\u65F6\u53EF\u4EE5\u4F7F\u7528\u6B64 API</p></li></ul></div><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><ul><li><code>wx.showLoading</code> \u548C <code>wx.showToast</code> \u540C\u65F6\u53EA\u80FD\u663E\u793A\u4E00\u4E2A</li><li><code>wx.showToast</code> \u5E94\u4E0E <code>wx.hideToast</code> \u914D\u5BF9\u4F7F\u7528\uFF0C<code>wx.showLoading</code> \u5E94\u4E0E <code>wx.hideLoading</code> \u914D\u5BF9\u4F7F\u7528\uFF0C\u4E0D\u80FD\u6DF7\u7528</li></ul><h2 id="wx-showtoast-object-object" tabindex="-1"><a class="header-anchor" href="#wx-showtoast-object-object" aria-hidden="true">#</a> wx.showToast(Object object)</h2><p>\u663E\u793A\u6D88\u606F\u63D0\u793A\u6846</p><h3 id="showtoast-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#showtoast-\u53C2\u6570" aria-hidden="true">#</a> showToast \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u662F</td><td>\u63D0\u793A\u7684\u5185\u5BB9</td></tr><tr><td>icon</td><td>string</td><td><code>&#39;success&#39;</code></td><td>\u5426</td><td>\u56FE\u6807</td></tr><tr><td>image</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u672C\u5730\u8DEF\u5F84\uFF0Cimage \u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E icon</td></tr><tr><td>duration</td><td>number</td><td><code>1500</code></td><td>\u5426</td><td>\u63D0\u793A\u7684\u5EF6\u8FDF\u65F6\u95F4</td></tr><tr><td>mask</td><td>boolean</td><td><code>false</code></td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u900F\u660E\u8499\u5C42\uFF0C\u9632\u6B62\u89E6\u6478\u7A7F\u900F</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>object.icon \u7684\u5408\u6CD5\u503C</p><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>\u663E\u793A\u6210\u529F\u56FE\u6807\uFF0C\u6B64\u65F6 <code>title</code> \u6587\u672C\u6700\u591A\u663E\u793A 7 \u4E2A\u6C49\u5B57\u957F\u5EA6</td></tr><tr><td>loading</td><td>\u663E\u793A\u52A0\u8F7D\u56FE\u6807\uFF0C\u6B64\u65F6 <code>title</code> \u6587\u672C\u6700\u591A\u663E\u793A 7 \u4E2A\u6C49\u5B57\u957F\u5EA6</td></tr><tr><td>none</td><td>\u4E0D\u663E\u793A\u56FE\u6807\uFF0C\u6B64\u65F6 <code>title</code> \u6587\u672C\u6700\u591A\u53EF\u663E\u793A\u4E24\u884C\uFF0C1.9.0 \u53CA\u4EE5\u4E0A\u7248\u672C\u652F\u6301</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u6210\u529F&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-hidetoast-object-object" tabindex="-1"><a class="header-anchor" href="#wx-hidetoast-object-object" aria-hidden="true">#</a> wx.hideToast(Object object)</h2><p>\u9690\u85CF\u6D88\u606F\u63D0\u793A\u6846</p><p>\u53C2\u6570</p><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><h2 id="wx-showmodal-object-object" tabindex="-1"><a class="header-anchor" href="#wx-showmodal-object-object" aria-hidden="true">#</a> wx.showModal(Object object)</h2><p>\u663E\u793A\u6A21\u6001\u5BF9\u8BDD\u6846</p><h3 id="showmodal-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#showmodal-\u53C2\u6570" aria-hidden="true">#</a> showModal \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u63D0\u793A\u7684\u6807\u9898</td></tr><tr><td>content</td><td>string</td><td></td><td>\u5426</td><td>\u63D0\u793A\u7684\u5185\u5BB9</td></tr><tr><td>showCancel</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td></tr><tr><td>cancelText</td><td>string</td><td>&#39;\u53D6\u6D88&#39;</td><td>\u5426</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u5B57\uFF0C\u6700\u591A 4 \u4E2A\u5B57\u7B26</td></tr><tr><td>cancelColor</td><td>string</td><td>#000000</td><td>\u5426</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u5B57\u989C\u8272\uFF0C\u5FC5\u987B\u662F 16 \u8FDB\u5236\u683C\u5F0F\u7684\u989C\u8272\u5B57\u7B26\u4E32</td></tr><tr><td>confirmText</td><td>string</td><td>&#39;\u786E\u5B9A&#39;</td><td>\u5426</td><td>\u786E\u8BA4\u6309\u94AE\u7684\u6587\u5B57\uFF0C\u6700\u591A 4 \u4E2A\u5B57\u7B26</td></tr><tr><td>confirmColor</td><td>string</td><td>#576B95</td><td>\u5426</td><td>\u786E\u8BA4\u6309\u94AE\u7684\u6587\u5B57\u989C\u8272\uFF0C\u5FC5\u987B\u662F 16 \u8FDB\u5236\u683C\u5F0F\u7684\u989C\u8272\u5B57\u7B26\u4E32</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>object.success \u56DE\u8C03\u51FD\u6570</p><p>\u53C2\u6570</p><p>Object res</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td>confirm</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u7528\u6237\u70B9\u51FB\u4E86\u786E\u5B9A\u6309\u94AE</td><td></td></tr><tr><td>cancel</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u7528\u6237\u70B9\u51FB\u4E86\u53D6\u6D88(\u7528\u4E8E Android \u7CFB\u7EDF\u533A\u5206\u70B9\u51FB\u8499\u5C42\u5173\u95ED\u8FD8\u662F\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u5173\u95ED)</td><td>1.1.0</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u63D0\u793A&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u8FD9\u662F\u4E00\u4E2A\u6A21\u6001\u5F39\u7A97&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u7528\u6237\u70B9\u51FB\u786E\u5B9A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>cancel<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u7528\u6237\u70B9\u51FB\u53D6\u6D88&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-showloading-object-object" tabindex="-1"><a class="header-anchor" href="#wx-showloading-object-object" aria-hidden="true">#</a> wx.showLoading(Object object)</h2><p>\u663E\u793A loading \u63D0\u793A\u6846\u3002\u9700\u4E3B\u52A8\u8C03\u7528 <code>wx.hideLoading</code> \u624D\u80FD\u5173\u95ED\u63D0\u793A\u6846</p><h3 id="showloading-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#showloading-\u53C2\u6570" aria-hidden="true">#</a> showLoading \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u662F</td><td>\u63D0\u793A\u7684\u5185\u5BB9</td></tr><tr><td>mask</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u900F\u660E\u8499\u5C42\uFF0C\u9632\u6B62\u89E6\u6478\u7A7F\u900F</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u52A0\u8F7D\u4E2D&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-hideloading-object-object" tabindex="-1"><a class="header-anchor" href="#wx-hideloading-object-object" aria-hidden="true">#</a> wx.hideLoading(Object object)</h2><p>\u9690\u85CF loading \u63D0\u793A\u6846</p><h3 id="hideloading-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#hideloading-\u53C2\u6570" aria-hidden="true">#</a> hideLoading \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><h2 id="wx-showactionsheet-object-object" tabindex="-1"><a class="header-anchor" href="#wx-showactionsheet-object-object" aria-hidden="true">#</a> wx.showActionSheet(Object object)</h2><p>\u663E\u793A\u64CD\u4F5C\u83DC\u5355</p><h3 id="showactionsheet-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#showactionsheet-\u53C2\u6570" aria-hidden="true">#</a> showActionSheet \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>itemList</td><td><code>Array.&lt;string&gt;</code></td><td></td><td>\u662F</td><td>\u6309\u94AE\u7684\u6587\u5B57\u6570\u7EC4\uFF0C\u6570\u7EC4\u957F\u5EA6\u6700\u5927\u4E3A 6</td></tr><tr><td>itemColor</td><td>string</td><td>#000000</td><td>\u5426</td><td>\u6309\u94AE\u7684\u6587\u5B57\u989C\u8272</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>object.success \u56DE\u8C03\u51FD\u6570</p><p>\u53C2\u6570</p><p>Object res</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tapIndex</td><td>number</td><td>\u7528\u6237\u70B9\u51FB\u7684\u6309\u94AE\u5E8F\u53F7\uFF0C\u4ECE\u4E0A\u5230\u4E0B\u7684\u987A\u5E8F\uFF0C\u4ECE <code>0</code> \u5F00\u59CB</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showActionSheet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">itemList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>tapIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>errMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51);function l(r,u){return a(),s("div",null,[c,p,d(" more "),i])}const k=n(o,[["render",l],["__file","interact.html.vue"]]);export{k as default};
