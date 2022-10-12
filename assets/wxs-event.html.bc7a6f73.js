import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a as n,b as s,e as t,f as c,r as l}from"./app.963e91c8.js";const i="/assets/interative-model.166020e4.png",u={},r=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("p",null,"\u6B64\u90E8\u5206\u5728\u521D\u6B65\u5B66\u4E60\u5C0F\u7A0B\u5E8F\u7684\u65F6\u5019\u76F4\u63A5\u7565\u8FC7\u5373\u53EF\u3002")],-1),d=n("h2",{id:"\u80CC\u666F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u80CC\u666F","aria-hidden":"true"},"#"),s(" \u80CC\u666F")],-1),k=n("code",null,"touchmove",-1),v={href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"touchmove",-1),h=c('<ol><li><p>touchmove \u4E8B\u4EF6\u4ECE\u89C6\u56FE\u5C42(Webview)\u629B\u5230\u903B\u8F91\u5C42(App Service)</p></li><li><p>\u903B\u8F91\u5C42(App Service)\u5904\u7406 touchmove \u4E8B\u4EF6\uFF0C\u518D\u901A\u8FC7 setData \u6765\u6539\u53D8 B \u7684\u4F4D\u7F6E</p></li></ol><p>\u4E00\u6B21 touchmove \u7684\u54CD\u5E94\u9700\u8981\u7ECF\u8FC7 2 \u6B21\u7684\u903B\u8F91\u5C42\u548C\u6E32\u67D3\u5C42\u7684\u901A\u4FE1\u4EE5\u53CA\u4E00\u6B21\u6E32\u67D3\uFF0C\u901A\u4FE1\u7684\u8017\u65F6\u6BD4\u8F83\u5927\u3002\u6B64\u5916 <code>setData</code> \u6E32\u67D3\u4E5F\u4F1A\u963B\u585E\u5176\u5B83\u811A\u672C\u6267\u884C\uFF0C\u5BFC\u81F4\u4E86\u6574\u4E2A\u7528\u6237\u4EA4\u4E92\u7684\u52A8\u753B\u8FC7\u7A0B\u4F1A\u6709\u5EF6\u8FDF\u3002</p><h2 id="\u5B9E\u73B0\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u6848" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u6848</h2><p>\u672C\u65B9\u6848\u57FA\u672C\u7684\u601D\u8DEF\u662F\u51CF\u5C11\u901A\u4FE1\u7684\u6B21\u6570\uFF0C\u8BA9\u4E8B\u4EF6\u5728\u89C6\u56FE\u5C42(Webview)\u54CD\u5E94\u3002\u5C0F\u7A0B\u5E8F\u7684\u6846\u67B6\u5206\u4E3A\u89C6\u56FE\u5C42(Webview)\u548C\u903B\u8F91\u5C42(App Service)\uFF0C\u8FD9\u6837\u5206\u5C42\u7684\u76EE\u7684\u662F\u7BA1\u63A7\uFF0C\u5F00\u53D1\u8005\u7684\u4EE3\u7801\u53EA\u80FD\u8FD0\u884C\u5728\u903B\u8F91\u5C42(App Service)\uFF0C\u800C\u8FD9\u4E2A\u601D\u8DEF\u5C31\u5FC5\u987B\u8981\u8BA9\u5F00\u53D1\u8005\u7684\u4EE3\u7801\u8FD0\u884C\u5728\u89C6\u56FE\u5C42(Webview)\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u7684\u6D41\u7A0B:</p><p><img src="'+i+`" alt="\u6D41\u7A0B\u6F14\u793A" loading="lazy"></p><p>\u4F7F\u7528 WXS \u51FD\u6570\u7528\u6765\u54CD\u5E94\u5C0F\u7A0B\u5E8F\u4E8B\u4EF6\uFF0C\u76EE\u524D\u53EA\u80FD\u54CD\u5E94\u5185\u7F6E\u7EC4\u4EF6\u7684\u4E8B\u4EF6\uFF0C\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E8B\u4EF6\u3002WXS \u51FD\u6570\u7684\u9664\u4E86\u7EAF\u903B\u8F91\u7684\u8FD0\u7B97\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5C01\u88C5\u597D\u7684 <code>ComponentDescriptor</code> \u5B9E\u4F8B\u6765\u8BBF\u95EE\u4EE5\u53CA\u8BBE\u7F6E\u7EC4\u4EF6\u7684 class \u548C\u6837\u5F0F\uFF0C\u5BF9\u4E8E\u4EA4\u4E92\u52A8\u753B\uFF0C\u8BBE\u7F6E style \u548C class \u8DB3\u591F\u4E86\u3002</p><p>WXS \u51FD\u6570\u7684\u4F8B\u5B50\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">wxsFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> ownerInstance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> instance <span class="token operator">=</span> ownerInstance<span class="token punctuation">.</span><span class="token function">selectComponent</span><span class="token punctuation">(</span><span class="token string">&quot;.classSelector&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u7EC4\u4EF6\u7684\u5B9E\u4F8B</span>
  instance<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;font-size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;14px&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u652F\u6301 rpx</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  instance<span class="token punctuation">.</span><span class="token function">getDataset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  instance<span class="token punctuation">.</span><span class="token function">setClass</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u5F80\u4E0A\u5192\u6CE1\uFF0C\u76F8\u5F53\u4E8E\u8C03\u7528\u4E86\u540C\u65F6\u8C03\u7528\u4E86 stopPropagation \u548C preventDefault</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\u5165\u53C2 <code>event</code> \u662F\u5C0F\u7A0B\u5E8F\u4E8B\u4EF6\u5BF9\u8C61\u57FA\u7840\u4E0A\u591A\u4E86 <code>event.instance</code> \u6765\u8868\u793A\u89E6\u53D1\u4E8B\u4EF6\u7684\u7EC4\u4EF6\u7684 <code>ComponentDescriptor</code> \u5B9E\u4F8B\u3002<code>ownerInstance</code> \u8868\u793A\u7684\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u7EC4\u4EF6\u6240\u5728\u7684\u7EC4\u4EF6\u7684 <code>ComponentDescriptor</code> \u5B9E\u4F8B\uFF0C\u5982\u679C\u89E6\u53D1\u4E8B\u4EF6\u7684\u7EC4\u4EF6\u662F\u5728\u9875\u9762\u5185\u7684\uFF0C<code>ownerInstance</code> \u8868\u793A\u7684\u662F\u9875\u9762\u5B9E\u4F8B\u3002</p><h2 id="componentdescriptor" tabindex="-1"><a class="header-anchor" href="#componentdescriptor" aria-hidden="true">#</a> ComponentDescriptor</h2><h3 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th><th>\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td>selectComponent</td><td>selector \u5BF9\u8C61</td><td>\u8FD4\u56DE\u7EC4\u4EF6\u7684 ComponentDescriptor \u5B9E\u4F8B\u3002</td><td></td></tr><tr><td>selectAllComponents</td><td>selector \u5BF9\u8C61\u6570\u7EC4</td><td>\u8FD4\u56DE\u7EC4\u4EF6\u7684 ComponentDescriptor \u5B9E\u4F8B\u6570\u7EC4\u3002</td><td></td></tr><tr><td>setStyle</td><td>Object/string</td><td>\u8BBE\u7F6E\u7EC4\u4EF6\u6837\u5F0F\uFF0C\u652F\u6301 rpx\u3002\u8BBE\u7F6E\u7684\u6837\u5F0F\u4F18\u5148\u7EA7\u6BD4\u7EC4\u4EF6 wxml \u91CC\u9762\u5B9A\u4E49\u7684\u6837\u5F0F\u9AD8\u3002\u4E0D\u80FD\u8BBE\u7F6E\u6700\u9876\u5C42\u9875\u9762\u7684\u6837\u5F0F\u3002</td><td></td></tr><tr><td>addClass/removeClass/ hasClass</td><td>string</td><td>\u8BBE\u7F6E\u7EC4\u4EF6\u7684 class\u3002\u8BBE\u7F6E\u7684 class \u4F18\u5148\u7EA7\u6BD4\u7EC4\u4EF6 wxml \u91CC\u9762\u5B9A\u4E49\u7684 class \u9AD8\u3002\u4E0D\u80FD\u8BBE\u7F6E\u6700\u9876\u5C42\u9875\u9762\u7684 class\u3002</td><td></td></tr><tr><td>getDataset</td><td>\u65E0</td><td>\u8FD4\u56DE\u5F53\u524D\u7EC4\u4EF6/\u9875\u9762\u7684 dataset \u5BF9\u8C61</td><td></td></tr><tr><td>callMethod</td><td>(funcName:string, args:object)</td><td>\u8C03\u7528\u5F53\u524D\u7EC4\u4EF6/\u9875\u9762\u5728\u903B\u8F91\u5C42(App Service)\u5B9A\u4E49\u7684\u51FD\u6570\u3002funcName \u8868\u793A\u51FD\u6570\u540D\u79F0\uFF0Cargs \u8868\u793A\u51FD\u6570\u7684\u53C2\u6570\u3002</td><td></td></tr><tr><td>requestAnimationFrame</td><td>Function</td><td>\u548C\u539F\u751F requestAnimationFrame \u4E00\u6837\u3002\u7528\u4E8E\u8BBE\u7F6E\u52A8\u753B\u3002</td><td></td></tr><tr><td>getState</td><td>\u65E0</td><td>\u8FD4\u56DE\u4E00\u4E2A object \u5BF9\u8C61\uFF0C\u5F53\u6709\u5C40\u90E8\u53D8\u91CF\u9700\u8981\u5B58\u50A8\u8D77\u6765\u540E\u7EED\u4F7F\u7528\u7684\u65F6\u5019\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002</td><td></td></tr><tr><td>triggerEvent</td><td>(eventName, detail)</td><td>\u548C\u7EC4\u4EF6\u7684 triggerEvent \u4E00\u81F4\u3002</td><td></td></tr><tr><td>getComputedStyle</td><td>string[]</td><td>\u53C2\u6570\u4E0E SelectorQuery \u7684 computedStyle \u4E00\u81F4\u3002</td><td>2.11.2</td></tr></tbody></table><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h3><p>WXML \u5B9A\u4E49\u4E8B\u4EF6:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./test.wxs<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">change:</span>prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{test.propObserver}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{propValue}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindtouchmove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{test.touchmove}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movable<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684 <code>change:prop</code>(\u5C5E\u6027\u524D\u9762\u5E26 <code>change:</code> \u524D\u7F00)\u662F\u5728 prop \u5C5E\u6027\u88AB\u8BBE\u7F6E\u7684\u65F6\u5019\u89E6\u53D1 WXS \u51FD\u6570\uFF0C\u503C\u5FC5\u987B\u7528 <code>{{}}</code> \u62EC\u8D77\u6765\u3002\u7C7B\u4F3C <code>Component</code> \u5B9A\u4E49\u7684 <code>properties</code> \u91CC\u9762\u7684 <code>observer</code> \u5C5E\u6027\uFF0C\u5728 <code>setData({propValue: newValue})</code> \u8C03\u7528\u4E4B\u540E\u4F1A\u89E6\u53D1\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>WXS \u51FD\u6570\u5FC5\u987B\u7528 <code>{{}}</code> \u62EC\u8D77\u6765\u3002\u5F53 <code>prop</code> \u7684\u503C\u88AB\u8BBE\u7F6E WXS \u51FD\u6570\u5C31\u4F1A\u89E6\u53D1\uFF0C\u800C\u4E0D\u53EA\u662F\u503C\u53D1\u751F\u6539\u53D8\uFF0C\u6240\u4EE5\u5728\u9875\u9762\u521D\u59CB\u5316\u7684\u65F6\u5019\u4F1A\u8C03\u7528\u4E00\u6B21 WxsPropObserver \u7684\u51FD\u6570\u3002</p></div><p>WXS \u6587\u4EF6 test.wxs \u91CC\u9762\u5B9A\u4E49\u5E76\u5BFC\u51FA\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u548C\u5C5E\u6027\u6539\u53D8\u89E6\u53D1\u7684\u51FD\u6570:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">touchmove</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;log event&quot;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">propObserver</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> ownerInstance<span class="token punctuation">,</span> instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;prop observer&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),b={href:"https://developers.weixin.qq.com/s/L1G0Dkmc7G8a",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"tips",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tips","aria-hidden":"true"},"#"),s(" Tips")],-1),f=n("ol",null,[n("li",null,"\u76EE\u524D\u8FD8\u4E0D\u652F\u6301\u539F\u751F\u7EC4\u4EF6\u7684\u4E8B\u4EF6\u3001input \u548C textarea \u7EC4\u4EF6\u7684 bindinput \u4E8B\u4EF6"),n("li",null,[s("\u76EE\u524D\u5728 WXS \u51FD\u6570\u91CC\u9762\u4EC5\u652F\u6301 "),n("code",null,"console.log"),s(" \u65B9\u5F0F\u6253\u65E5\u5FD7\u5B9A\u4F4D\u95EE\u9898\uFF0C\u6CE8\u610F\u8FDE\u7EED\u7684\u91CD\u590D\u65E5\u5FD7\u4F1A\u88AB\u8FC7\u6EE4\u6389\u3002")])],-1);function _(q,x){const a=l("ExternalLinkIcon");return o(),p("div",null,[r,d,n("p",null,[s("\u6709\u9891\u7E41\u7528\u6237\u4EA4\u4E92\u7684\u6548\u679C\u5728\u5C0F\u7A0B\u5E8F\u4E0A\u8868\u73B0\u662F\u6BD4\u8F83\u5361\u987F\u7684\uFF0C\u4F8B\u5982\u9875\u9762\u6709 2 \u4E2A\u5143\u7D20 A \u548C B\uFF0C\u7528\u6237\u5728 A \u4E0A\u505A "),k,s(" \u624B\u52BF\uFF0C\u8981\u6C42 B \u4E5F\u8DDF\u968F\u79FB\u52A8\uFF0C"),n("a",v,[s("movable-view"),t(a)]),s(" \u5C31\u662F\u4E00\u4E2A\u5178\u578B\u7684\u4F8B\u5B50\u3002\u4E00\u6B21 "),m,s(" \u4E8B\u4EF6\u7684\u54CD\u5E94\u8FC7\u7A0B\u4E3A:")]),h,n("p",null,[s("\u66F4\u591A\u793A\u4F8B\u8BF7 "),n("a",b,[s("\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u9884\u89C8\u6548\u679C"),t(a)])]),g,f])}const y=e(u,[["render",_],["__file","wxs-event.html.vue"]]);export{y as default};
