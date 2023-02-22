import{_ as n,W as a,X as s,$ as d,Y as t,a2 as e}from"./framework-d7af73f9.js";const o={},c=t("p",null,"本页面介绍的一系列 API 都是和小程序页面交互(用户交互)相关的 API。",-1),p=t("p",null,"小程序与用户交互合理，并在合适的时机向用户展示相应状态可以让用户的沉浸感更强。",-1),i=e(`<div class="hint-container tip"><p class="hint-container-title">概要</p><ul><li><p><code>wx.showToast</code>: 展示消息提示框</p></li><li><p><code>wx.hideToast</code>: 隐藏消息提示框</p><p>用于展示一些不是很重要的提示</p></li><li><p><code>wx.showLoading</code>: 显示加载提示</p></li><li><p><code>wx.hideLoading</code>: 隐藏加载提示</p><p>在合适的时候显示加载中状态，可以减轻用户的焦虑感。</p></li><li><p><code>wx.showModal</code>: 显示一个弹窗</p><p>这是希望提示用户或者让用户一个两项选择的好方式</p></li><li><p><code>wx.showActionSheet</code></p><p>希望用户在多个预设动作之间进行选择时可以使用此 API</p></li></ul></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><ul><li><code>wx.showLoading</code> 和 <code>wx.showToast</code> 同时只能显示一个</li><li><code>wx.showToast</code> 应与 <code>wx.hideToast</code> 配对使用，<code>wx.showLoading</code> 应与 <code>wx.hideLoading</code> 配对使用，不能混用</li></ul><h2 id="wx-showtoast-object-object" tabindex="-1"><a class="header-anchor" href="#wx-showtoast-object-object" aria-hidden="true">#</a> wx.showToast(Object object)</h2><p>显示消息提示框</p><h3 id="showtoast-参数" tabindex="-1"><a class="header-anchor" href="#showtoast-参数" aria-hidden="true">#</a> showToast 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>是</td><td>提示的内容</td></tr><tr><td>icon</td><td>string</td><td><code>&#39;success&#39;</code></td><td>否</td><td>图标</td></tr><tr><td>image</td><td>string</td><td></td><td>否</td><td>自定义图标的本地路径，image 的优先级高于 icon</td></tr><tr><td>duration</td><td>number</td><td><code>1500</code></td><td>否</td><td>提示的延迟时间</td></tr><tr><td>mask</td><td>boolean</td><td><code>false</code></td><td>否</td><td>是否显示透明蒙层，防止触摸穿透</td></tr><tr><td>success</td><td>function</td><td></td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td></td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td></td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>object.icon 的合法值</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td>显示成功图标，此时 <code>title</code> 文本最多显示 7 个汉字长度</td></tr><tr><td>loading</td><td>显示加载图标，此时 <code>title</code> 文本最多显示 7 个汉字长度</td></tr><tr><td>none</td><td>不显示图标，此时 <code>title</code> 文本最多可显示两行，1.9.0 及以上版本支持</td></tr></tbody></table><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;成功&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-hidetoast-object-object" tabindex="-1"><a class="header-anchor" href="#wx-hidetoast-object-object" aria-hidden="true">#</a> wx.hideToast(Object object)</h2><p>隐藏消息提示框</p><p>参数</p><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><h2 id="wx-showmodal-object-object" tabindex="-1"><a class="header-anchor" href="#wx-showmodal-object-object" aria-hidden="true">#</a> wx.showModal(Object object)</h2><p>显示模态对话框</p><h3 id="showmodal-参数" tabindex="-1"><a class="header-anchor" href="#showmodal-参数" aria-hidden="true">#</a> showModal 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>否</td><td>提示的标题</td></tr><tr><td>content</td><td>string</td><td></td><td>否</td><td>提示的内容</td></tr><tr><td>showCancel</td><td>boolean</td><td>true</td><td>否</td><td>是否显示取消按钮</td></tr><tr><td>cancelText</td><td>string</td><td>&#39;取消&#39;</td><td>否</td><td>取消按钮的文字，最多 4 个字符</td></tr><tr><td>cancelColor</td><td>string</td><td>#000000</td><td>否</td><td>取消按钮的文字颜色，必须是 16 进制格式的颜色字符串</td></tr><tr><td>confirmText</td><td>string</td><td>&#39;确定&#39;</td><td>否</td><td>确认按钮的文字，最多 4 个字符</td></tr><tr><td>confirmColor</td><td>string</td><td>#576B95</td><td>否</td><td>确认按钮的文字颜色，必须是 16 进制格式的颜色字符串</td></tr><tr><td>success</td><td>function</td><td></td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td></td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td></td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>object.success 回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>confirm</td><td>boolean</td><td>为 true 时，表示用户点击了确定按钮</td><td></td></tr><tr><td>cancel</td><td>boolean</td><td>为 true 时，表示用户点击了取消(用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭)</td><td>1.1.0</td></tr></tbody></table><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;提示&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;这是一个模态弹窗&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;用户点击确定&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>cancel<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;用户点击取消&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-showloading-object-object" tabindex="-1"><a class="header-anchor" href="#wx-showloading-object-object" aria-hidden="true">#</a> wx.showLoading(Object object)</h2><p>显示 loading 提示框。需主动调用 <code>wx.hideLoading</code> 才能关闭提示框</p><h3 id="showloading-参数" tabindex="-1"><a class="header-anchor" href="#showloading-参数" aria-hidden="true">#</a> showLoading 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>是</td><td>提示的内容</td></tr><tr><td>mask</td><td>boolean</td><td>false</td><td>否</td><td>是否显示透明蒙层，防止触摸穿透</td></tr><tr><td>success</td><td>function</td><td></td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td></td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td></td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;加载中&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-hideloading-object-object" tabindex="-1"><a class="header-anchor" href="#wx-hideloading-object-object" aria-hidden="true">#</a> wx.hideLoading(Object object)</h2><p>隐藏 loading 提示框</p><h3 id="hideloading-参数" tabindex="-1"><a class="header-anchor" href="#hideloading-参数" aria-hidden="true">#</a> hideLoading 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><h2 id="wx-showactionsheet-object-object" tabindex="-1"><a class="header-anchor" href="#wx-showactionsheet-object-object" aria-hidden="true">#</a> wx.showActionSheet(Object object)</h2><p>显示操作菜单</p><h3 id="showactionsheet-参数" tabindex="-1"><a class="header-anchor" href="#showactionsheet-参数" aria-hidden="true">#</a> showActionSheet 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>itemList</td><td><code>Array.&lt;string&gt;</code></td><td></td><td>是</td><td>按钮的文字数组，数组长度最大为 6</td></tr><tr><td>itemColor</td><td>string</td><td>#000000</td><td>否</td><td>按钮的文字颜色</td></tr><tr><td>success</td><td>function</td><td></td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td></td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td></td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>object.success 回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>tapIndex</td><td>number</td><td>用户点击的按钮序号，从上到下的顺序，从 <code>0</code> 开始</td></tr></tbody></table><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showActionSheet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">itemList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>tapIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>errMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51);function l(r,u){return a(),s("div",null,[c,p,d(" more "),i])}const b=n(o,[["render",l],["__file","interact.html.vue"]]);export{b as default};
