import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as s,d as e,a,f as c}from"./app.9d9222aa.js";const o={},p=a("p",null,"\u672C\u9875\u9762\u4ECB\u7ECD\u7684\u4E00\u7CFB\u5217 API \u90FD\u662F\u548C\u5C0F\u7A0B\u5E8F\u6570\u636E\u7F13\u5B58(\u6570\u636E\u5B58\u50A8)\u76F8\u5173\u7684 API\u3002",-1),i=a("p",null,"\u53EF\u4EE5\u5229\u7528\u6570\u636E\u7F13\u5B58\u5B58\u50A8\u4E00\u4E9B\u4E0D\u91CD\u8981\u7684\u4FE1\u606F\uFF0C\u6BD4\u5982\u7528\u6237\u7684\u8BBE\u7F6E\u3001\u7528\u6237\u7684\u64CD\u4F5C\u5386\u53F2\u8BB0\u5F55\u7B49\u3002",-1),d=c(`<div class="custom-container tip"><p class="custom-container-title">\u6982\u8981</p><p><strong>\u6700\u5E38\u7528\u7684\u4E09\u4E2A</strong>:</p><p>\u5F02\u6B65:</p><ul><li><code>wx.setStorage</code>: \u5B58\u50A8\u67D0\u4E2A <code>value</code> \u5230\u67D0\u4E2A <code>key</code></li><li><code>wx.getStorage</code>: \u8BFB\u53D6\u67D0\u4E2A <code>key</code> \u7684 <code>value</code></li><li><code>wx.removeStorage</code>: \u5220\u9664\u67D0\u4E2A <code>key</code> \u53CA\u5176\u5BF9\u5E94\u7684 <code>value</code></li></ul><p>\u5B83\u4EEC\u8FD8\u6709\u5BF9\u5E94\u7684\u540C\u6B65 API \u7248\u672C:</p><ul><li><code>wx.setStorageSync</code></li><li><code>wx.getStorageSync</code></li><li><code>wx.removeStorageSync</code></li></ul><p>\u6E05\u9664\u7F13\u5B58</p><ul><li><code>wx.clearStorage</code>: \u6E05\u9664\u5168\u90E8\u6570\u636E\u7F13\u5B58</li><li><code>wx.clearStorageSync</code>: \u4E0A\u65B9 API \u7684\u540C\u6B65\u7248\u672C</li></ul></div><h2 id="\u76F8\u5173\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u76F8\u5173\u6CE8\u610F\u4E8B\u9879</h2><ul><li><p>\u9664\u975E\u7528\u6237\u4E3B\u52A8\u5220\u9664\u6216\u56E0\u5B58\u50A8\u7A7A\u95F4\u539F\u56E0\u88AB\u7CFB\u7EDF\u6E05\u7406\uFF0C\u5426\u5219\u6570\u636E\u90FD\u4E00\u76F4\u53EF\u7528\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5F53\u7CFB\u7EDF\u7A7A\u95F4\u4E0D\u8DB3\u6216\u7528\u6237\u957F\u65F6\u95F4\u4E0D\u4F7F\u7528\u5C0F\u7A0B\u5E8F\u65F6\uFF0C\u6570\u636E\u7F13\u5B58\u53EF\u80FD\u88AB\u6E05\u7406\u3002</p><p>\u6240\u4EE5\u8981\u505A\u597D\u6570\u636E\u7F13\u5B58\u4E22\u5931\u7684\u903B\u8F91\u3002</p></div></li><li><p>\u5355\u4E2A <code>key</code> \u5141\u8BB8\u5B58\u50A8\u7684\u6700\u5927\u6570\u636E\u957F\u5EA6\u4E3A 1MB\uFF0C\u6240\u6709\u6570\u636E\u5B58\u50A8\u4E0A\u9650\u4E3A 10MB\u3002</p></li></ul><h2 id="wx-setstorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-setstorage-object-object" aria-hidden="true">#</a> wx.setStorage(Object object)</h2><p>\u5C06\u6570\u636E\u5B58\u50A8\u5728\u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 <code>key</code> \u4E2D\u3002\u4F1A\u8986\u76D6\u6389\u539F\u6765\u8BE5 <code>key</code> \u5BF9\u5E94\u7684\u5185\u5BB9\u3002</p><h3 id="setstorage-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#setstorage-\u53C2\u6570" aria-hidden="true">#</a> setStorage \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>\u662F</td><td>\u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 key</td></tr><tr><td>data</td><td>any</td><td>\u662F</td><td>\u9700\u8981\u5B58\u50A8\u7684\u5185\u5BB9\u3002\u53EA\u652F\u6301\u539F\u751F\u7C7B\u578B\u3001Date\u3001\u53CA\u80FD\u591F\u901A\u8FC7 <code>JSON.stringify</code> \u5E8F\u5217\u5316\u7684\u5BF9\u8C61\u3002</td></tr><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-setstoragesync-string-key-any-data" tabindex="-1"><a class="header-anchor" href="#wx-setstoragesync-string-key-any-data" aria-hidden="true">#</a> wx.setStorageSync(string key, any data)</h2><p><code>wx.setStorage</code> \u7684\u540C\u6B65\u7248\u672C</p><h3 id="setstoragesync-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#setstoragesync-\u53C2\u6570" aria-hidden="true">#</a> setStorageSync \u53C2\u6570</h3><ul><li><p>string key</p><p>\u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 key</p></li><li><p>any data</p><p>\u9700\u8981\u5B58\u50A8\u7684\u5185\u5BB9\u3002\u53EA\u652F\u6301\u539F\u751F\u7C7B\u578B\u3001Date\u3001\u53CA\u80FD\u591F\u901A\u8FC7 <code>JSON.stringify</code> \u5E8F\u5217\u5316\u7684\u5BF9\u8C61\u3002</p></li></ul><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-getstorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-getstorage-object-object" aria-hidden="true">#</a> wx.getStorage(Object object)</h2><p>\u4ECE\u672C\u5730\u7F13\u5B58\u4E2D\u5F02\u6B65\u83B7\u53D6\u6307\u5B9A key \u7684\u5185\u5BB9</p><h3 id="getstorage-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#getstorage-\u53C2\u6570" aria-hidden="true">#</a> getStorage \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>\u662F</td><td>\u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 key</td></tr><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>Object.success \u56DE\u8C03\u51FD\u6570</p><p>\u53C2\u6570</p><p>Object res</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>any</td><td>key \u5BF9\u5E94\u7684\u5185\u5BB9</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-getstoragesync-string-key" tabindex="-1"><a class="header-anchor" href="#wx-getstoragesync-string-key" aria-hidden="true">#</a> wx.getStorageSync(string key)</h2><p><code>wx.getStorage</code> \u7684\u540C\u6B65\u7248\u672C</p><h3 id="getstoragesync-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#getstoragesync-\u53C2\u6570" aria-hidden="true">#</a> getStorageSync \u53C2\u6570</h3><ul><li>string key: \u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 <code>key</code></li></ul><h3 id="getstoragesync-\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#getstoragesync-\u8FD4\u56DE\u503C" aria-hidden="true">#</a> getStorageSync \u8FD4\u56DE\u503C</h3><ul><li>any data : <code>key</code> \u5BF9\u5E94\u7684\u5185\u5BB9</li></ul><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something with return value</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something when catch error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-removestorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-removestorage-object-object" aria-hidden="true">#</a> wx.removeStorage(Object object)</h2><p>\u4ECE\u672C\u5730\u7F13\u5B58\u4E2D\u79FB\u9664\u6307\u5B9A key</p><h3 id="removestorage-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#removestorage-\u53C2\u6570" aria-hidden="true">#</a> removeStorage \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>\u662F</td><td>\u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 key</td></tr><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">removeStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-removestoragesync-string-key" tabindex="-1"><a class="header-anchor" href="#wx-removestoragesync-string-key" aria-hidden="true">#</a> wx.removeStorageSync(string key)</h2><p><code>wx.removeStorage</code> \u7684\u540C\u6B65\u7248\u672C</p><h3 id="removestoragesync-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#removestoragesync-\u53C2\u6570" aria-hidden="true">#</a> removeStorageSync \u53C2\u6570</h3><ul><li>string key: \u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 <code>key</code></li></ul><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">removeStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something when catch error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-clearstorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-clearstorage-object-object" aria-hidden="true">#</a> wx.clearStorage(Object object)</h2><p>\u6E05\u7406\u672C\u5730\u6570\u636E\u7F13\u5B58</p><h3 id="clearstorage-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#clearstorage-\u53C2\u6570" aria-hidden="true">#</a> clearStorage \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">clearStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="wx-clearstoragesync" tabindex="-1"><a class="header-anchor" href="#wx-clearstoragesync" aria-hidden="true">#</a> wx.clearStorageSync()</h2><p><code>wx.clearStorage</code> \u7684\u540C\u6B65\u7248\u672C</p><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">clearStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something when catch error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59);function r(l,u){return t(),s("div",null,[p,i,e(" more "),d])}const v=n(o,[["render",r],["__file","storage.html.vue"]]);export{v as default};
