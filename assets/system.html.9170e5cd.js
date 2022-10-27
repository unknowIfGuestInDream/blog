import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as a,f as s}from"./app.9d9222aa.js";const e={},p=s(`<h2 id="wx-getsysteminfo-object-object" tabindex="-1"><a class="header-anchor" href="#wx-getsysteminfo-object-object" aria-hidden="true">#</a> wx.getSystemInfo(Object object)</h2><p>\u83B7\u53D6\u7CFB\u7EDF\u4FE1\u606F</p><h3 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><h3 id="object-success-\u56DE\u8C03\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#object-success-\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a> object.success \u56DE\u8C03\u51FD\u6570</h3><p>\u53C2\u6570</p><p>Object res</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td>brand</td><td>string</td><td>\u8BBE\u5907\u54C1\u724C</td><td>1.5.0</td></tr><tr><td>model</td><td>string</td><td>\u8BBE\u5907\u578B\u53F7</td><td></td></tr><tr><td>pixelRatio</td><td>number</td><td>\u8BBE\u5907\u50CF\u7D20\u6BD4</td><td></td></tr><tr><td>screenWidth</td><td>number</td><td>\u5C4F\u5E55\u5BBD\u5EA6\uFF0C\u5355\u4F4D px</td><td>1.1.0</td></tr><tr><td>screenHeight</td><td>number</td><td>\u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u5355\u4F4D px</td><td>1.1.0</td></tr><tr><td>windowWidth</td><td>number</td><td>\u53EF\u4F7F\u7528\u7A97\u53E3\u5BBD\u5EA6\uFF0C\u5355\u4F4D px</td><td></td></tr><tr><td>windowHeight</td><td>number</td><td>\u53EF\u4F7F\u7528\u7A97\u53E3\u9AD8\u5EA6\uFF0C\u5355\u4F4D px</td><td></td></tr><tr><td>statusBarHeight</td><td>number</td><td>\u72B6\u6001\u680F\u7684\u9AD8\u5EA6\uFF0C\u5355\u4F4D px</td><td>1.9.0</td></tr><tr><td>language</td><td>string</td><td>\u5FAE\u4FE1\u8BBE\u7F6E\u7684\u8BED\u8A00</td><td></td></tr><tr><td>version</td><td>string</td><td>\u5FAE\u4FE1\u7248\u672C\u53F7</td><td></td></tr><tr><td>system</td><td>string</td><td>\u64CD\u4F5C\u7CFB\u7EDF\u53CA\u7248\u672C</td><td></td></tr><tr><td>platform</td><td>string</td><td>\u5BA2\u6237\u7AEF\u5E73\u53F0</td><td></td></tr><tr><td>fontSizeSetting</td><td>number</td><td>\u7528\u6237\u5B57\u4F53\u5927\u5C0F(\u5355\u4F4D px)\u3002\u4EE5\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u300C\u6211-\u8BBE\u7F6E-\u901A\u7528-\u5B57\u4F53\u5927\u5C0F\u300D\u4E2D\u7684\u8BBE\u7F6E\u4E3A\u51C6</td><td>1.5.0</td></tr><tr><td>SDKVersion</td><td>string</td><td>\u5BA2\u6237\u7AEF\u57FA\u7840\u5E93\u7248\u672C</td><td>1.1.0</td></tr><tr><td>benchmarkLevel</td><td>number</td><td>\u8BBE\u5907\u6027\u80FD\u7B49\u7EA7(\u4EC5 Android \u5C0F\u6E38\u620F)\u3002<br>\u53D6\u503C\u4E3A: -2 \u6216 0(\u8BE5\u8BBE\u5907\u65E0\u6CD5\u8FD0\u884C\u5C0F\u6E38\u620F)\uFF0C-1(\u6027\u80FD\u672A\u77E5)\uFF0C&gt;=1(\u8BBE\u5907\u6027\u80FD\u503C\uFF0C\u8BE5\u503C\u8D8A\u9AD8\uFF0C\u8BBE\u5907\u6027\u80FD\u8D8A\u597D\uFF0C\u76EE\u524D\u6700\u9AD8\u4E0D\u5230 50)</td><td>1.8.0</td></tr><tr><td>albumAuthorized</td><td>boolean</td><td>\u5141\u8BB8\u5FAE\u4FE1\u4F7F\u7528\u76F8\u518C\u7684\u5F00\u5173(\u4EC5 iOS \u6709\u6548)</td><td>2.6.0</td></tr><tr><td>cameraAuthorized</td><td>boolean</td><td>\u5141\u8BB8\u5FAE\u4FE1\u4F7F\u7528\u6444\u50CF\u5934\u7684\u5F00\u5173</td><td>2.6.0</td></tr><tr><td>locationAuthorized</td><td>boolean</td><td>\u5141\u8BB8\u5FAE\u4FE1\u4F7F\u7528\u5B9A\u4F4D\u7684\u5F00\u5173</td><td>2.6.0</td></tr><tr><td>microphoneAuthorized</td><td>boolean</td><td>\u5141\u8BB8\u5FAE\u4FE1\u4F7F\u7528\u9EA6\u514B\u98CE\u7684\u5F00\u5173</td><td>2.6.0</td></tr><tr><td>notificationAuthorized</td><td>boolean</td><td>\u5141\u8BB8\u5FAE\u4FE1\u901A\u77E5\u7684\u5F00\u5173</td><td>2.6.0</td></tr><tr><td>notificationAlertAuthorized</td><td>boolean</td><td>\u5141\u8BB8\u5FAE\u4FE1\u901A\u77E5\u5E26\u6709\u63D0\u9192\u7684\u5F00\u5173(\u4EC5 iOS \u6709\u6548)</td><td>2.6.0</td></tr><tr><td>notificationBadgeAuthorized</td><td>boolean</td><td>\u5141\u8BB8\u5FAE\u4FE1\u901A\u77E5\u5E26\u6709\u6807\u8BB0\u7684\u5F00\u5173(\u4EC5 iOS \u6709\u6548)</td><td>2.6.0</td></tr><tr><td>notificationSoundAuthorized</td><td>boolean</td><td>\u5141\u8BB8\u5FAE\u4FE1\u901A\u77E5\u5E26\u6709\u58F0\u97F3\u7684\u5F00\u5173(\u4EC5 iOS \u6709\u6548)</td><td>2.6.0</td></tr><tr><td>bluetoothEnabled</td><td>boolean</td><td>\u84DD\u7259\u7684\u7CFB\u7EDF\u5F00\u5173</td><td>2.6.0</td></tr><tr><td>locationEnabled</td><td>boolean</td><td>\u5730\u7406\u4F4D\u7F6E\u7684\u7CFB\u7EDF\u5F00\u5173</td><td>2.6.0</td></tr><tr><td>wifiEnabled</td><td>boolean</td><td>Wi-Fi \u7684\u7CFB\u7EDF\u5F00\u5173</td><td>2.6.0</td></tr><tr><td>safeArea</td><td>Object</td><td>\u5728\u7AD6\u5C4F\u6B63\u65B9\u5411\u4E0B\u7684\u5B89\u5168\u533A\u57DF</td><td>2.7.0</td></tr></tbody></table><h4 id="res-safearea-\u7684\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#res-safearea-\u7684\u7ED3\u6784" aria-hidden="true">#</a> res.safeArea \u7684\u7ED3\u6784</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>number</td><td>\u5B89\u5168\u533A\u57DF\u5DE6\u4E0A\u89D2\u6A2A\u5750\u6807</td></tr><tr><td>right</td><td>number</td><td>\u5B89\u5168\u533A\u57DF\u53F3\u4E0B\u89D2\u6A2A\u5750\u6807</td></tr><tr><td>top</td><td>number</td><td>\u5B89\u5168\u533A\u57DF\u5DE6\u4E0A\u89D2\u7EB5\u5750\u6807</td></tr><tr><td>bottom</td><td>number</td><td>\u5B89\u5168\u533A\u57DF\u53F3\u4E0B\u89D2\u7EB5\u5750\u6807</td></tr><tr><td>width</td><td>number</td><td>\u5B89\u5168\u533A\u57DF\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u903B\u8F91\u50CF\u7D20</td></tr><tr><td>height</td><td>number</td><td>\u5B89\u5168\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u5355\u4F4D\u903B\u8F91\u50CF\u7D20</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>pixelRatio<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>windowWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>windowHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-wx-getsysteminfosync" tabindex="-1"><a class="header-anchor" href="#object-wx-getsysteminfosync" aria-hidden="true">#</a> Object wx.getSystemInfoSync()</h2><p><code>wx.getSystemInfo</code> \u7684\u540C\u6B65\u7248\u672C</p><p>\u76F4\u63A5\u8FD4\u56DE\u5F02\u6B65\u7248\u672C\u7684 <code>res</code></p><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>pixelRatio<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>windowWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>windowHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something when catch error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updatemanager-wx-getupdatemanager" tabindex="-1"><a class="header-anchor" href="#updatemanager-wx-getupdatemanager" aria-hidden="true">#</a> UpdateManager wx.getUpdateManager()</h2><p>\u83B7\u53D6\u5168\u5C40\u552F\u4E00\u7684\u7248\u672C\u66F4\u65B0\u7BA1\u7406\u5668\uFF0C\u7528\u4E8E\u7BA1\u7406\u5C0F\u7A0B\u5E8F\u66F4\u65B0\u3002\u5173\u4E8E\u5C0F\u7A0B\u5E8F\u7684\u66F4\u65B0\u673A\u5236\uFF0C\u53EF\u4EE5\u67E5\u770B\u8FD0\u884C\u673A\u5236\u6587\u6863\u3002</p><p>\u8FD4\u56DE\u503C: UpdateManager</p><h2 id="updatemanager" tabindex="-1"><a class="header-anchor" href="#updatemanager" aria-hidden="true">#</a> UpdateManager</h2><p>\u66F4\u65B0\u7BA1\u7406\u5668\u5BF9\u8C61\uFF0C\u7528\u6765\u7BA1\u7406\u66F4\u65B0\uFF0C\u53EF\u901A\u8FC7 <code>wx.getUpdateManager</code> \u63A5\u53E3\u83B7\u53D6\u5B9E\u4F8B\u3002UpdateManager \u6709\u591A\u4E2A\u65B9\u6CD5</p><h3 id="updatemanager-applyupdate" tabindex="-1"><a class="header-anchor" href="#updatemanager-applyupdate" aria-hidden="true">#</a> UpdateManager.applyUpdate()</h3><p>\u5F3A\u5236\u5C0F\u7A0B\u5E8F\u91CD\u542F\u5E76\u4F7F\u7528\u65B0\u7248\u672C\u3002\u5728\u5C0F\u7A0B\u5E8F\u65B0\u7248\u672C\u4E0B\u8F7D\u5B8C\u6210\u540E(\u5373\u6536\u5230 <code>onUpdateReady</code> \u56DE\u8C03)\u8C03\u7528\u3002</p><h3 id="updatemanager-oncheckforupdate-function-callback" tabindex="-1"><a class="header-anchor" href="#updatemanager-oncheckforupdate-function-callback" aria-hidden="true">#</a> UpdateManager.onCheckForUpdate(function callback)</h3><p>\u76D1\u542C\u5411\u5FAE\u4FE1\u540E\u53F0\u8BF7\u6C42\u68C0\u67E5\u66F4\u65B0\u7ED3\u679C\u4E8B\u4EF6\u3002\u5FAE\u4FE1\u5728\u5C0F\u7A0B\u5E8F\u51B7\u542F\u52A8\u65F6\u81EA\u52A8\u68C0\u67E5\u66F4\u65B0\uFF0C\u4E0D\u9700\u7531\u5F00\u53D1\u8005\u4E3B\u52A8\u89E6\u53D1\u3002</p><p>Function callback</p><p>\u5411\u5FAE\u4FE1\u540E\u53F0\u8BF7\u6C42\u68C0\u67E5\u66F4\u65B0\u7ED3\u679C\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</p><p>\u53C2\u6570</p><p>Object res</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>hasUpdate</td><td>boolean</td><td>\u662F\u5426\u6709\u65B0\u7248\u672C</td></tr></tbody></table><h3 id="updatemanager-onupdateready-function-callback" tabindex="-1"><a class="header-anchor" href="#updatemanager-onupdateready-function-callback" aria-hidden="true">#</a> UpdateManager.onUpdateReady(function callback)</h3><p>\u76D1\u542C\u5C0F\u7A0B\u5E8F\u6709\u7248\u672C\u66F4\u65B0\u4E8B\u4EF6\u3002\u5BA2\u6237\u7AEF\u4E3B\u52A8\u89E6\u53D1\u4E0B\u8F7D(\u65E0\u9700\u5F00\u53D1\u8005\u89E6\u53D1)\uFF0C\u4E0B\u8F7D\u6210\u529F\u540E\u56DE\u8C03</p><h3 id="updatemanager-onupdatefailed-function-callback" tabindex="-1"><a class="header-anchor" href="#updatemanager-onupdatefailed-function-callback" aria-hidden="true">#</a> UpdateManager.onUpdateFailed(function callback)</h3><p>\u76D1\u542C\u5C0F\u7A0B\u5E8F\u66F4\u65B0\u5931\u8D25\u4E8B\u4EF6\u3002\u5C0F\u7A0B\u5E8F\u6709\u65B0\u7248\u672C\uFF0C\u5BA2\u6237\u7AEF\u4E3B\u52A8\u89E6\u53D1\u4E0B\u8F7D(\u65E0\u9700\u5F00\u53D1\u8005\u89E6\u53D1)\uFF0C\u4E0B\u8F7D\u5931\u8D25(\u53EF\u80FD\u662F\u7F51\u7EDC\u539F\u56E0\u7B49)\u540E\u56DE\u8C03</p><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> updateManager <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getUpdateManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onCheckForUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8BF7\u6C42\u5B8C\u65B0\u7248\u672C\u4FE1\u606F\u7684\u56DE\u8C03</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>hasUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onUpdateReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u66F4\u65B0\u63D0\u793A&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u7248\u672C\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0C\u662F\u5426\u91CD\u542F\u5E94\u7528? &quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span>
        <span class="token comment">// \u65B0\u7684\u7248\u672C\u5DF2\u7ECF\u4E0B\u8F7D\u597D\uFF0C\u8C03\u7528 applyUpdate \u5E94\u7528\u65B0\u7248\u672C\u5E76\u91CD\u542F</span>
        updateManager<span class="token punctuation">.</span><span class="token function">applyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onUpdateFailed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u65B0\u7248\u672C\u4E0B\u8F7D\u5931\u8D25</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),o=[p];function c(d,i){return t(),a("div",null,o)}const r=n(e,[["render",c],["__file","system.html.vue"]]);export{r as default};
