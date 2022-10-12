import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as n,b as t,e as s,w as d,f as e,r as p}from"./app.c23862ec.js";const u={},k=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("p",null,"\u6B64\u90E8\u5206\u5728\u521D\u6B65\u5B66\u4E60\u5C0F\u7A0B\u5E8F\u7684\u65F6\u5019\u76F4\u63A5\u7565\u8FC7\u5373\u53EF\u3002")],-1),m=n("h2",{id:"\u754C\u9762\u52A8\u753B\u7684\u5E38\u89C1\u65B9\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u754C\u9762\u52A8\u753B\u7684\u5E38\u89C1\u65B9\u5F0F","aria-hidden":"true"},"#"),t(" \u754C\u9762\u52A8\u753B\u7684\u5E38\u89C1\u65B9\u5F0F")],-1),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developers.weixin.qq.com/s/oHKxDPm47h5k",target:"_blank",rel:"noopener noreferrer"},y={href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"wx.createAnimation",-1),f=e('<p>\u52A8\u753B\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>bindtransitionend</code> <code>bindanimationstart</code> <code>bindanimationiteration</code> <code>bindanimationend</code> \u6765\u76D1\u542C\u52A8\u753B\u4E8B\u4EF6\u3002</p><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>transitionend</td><td>CSS \u6E10\u53D8\u7ED3\u675F\u6216 wx.createAnimation \u7ED3\u675F\u4E00\u4E2A\u9636\u6BB5</td></tr><tr><td>animationstart</td><td>CSS \u52A8\u753B\u5F00\u59CB</td></tr><tr><td>animationiteration</td><td>CSS \u52A8\u753B\u7ED3\u675F\u4E00\u4E2A\u9636\u6BB5</td></tr><tr><td>animationend</td><td>CSS \u52A8\u753B\u7ED3\u675F</td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8FD9\u51E0\u4E2A\u4E8B\u4EF6\u90FD\u4E0D\u662F\u5192\u6CE1\u4E8B\u4EF6\uFF0C\u9700\u8981\u7ED1\u5B9A\u5728\u771F\u6B63\u53D1\u751F\u4E86\u52A8\u753B\u7684\u8282\u70B9\u4E0A\u624D\u4F1A\u751F\u6548\u3002</p><p>unknowIfGuestInDream \u5F3A\u70C8\u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528 <strong>CSS \u52A8\u753B</strong>\u3002\u53EA\u6709 <strong>CSS \u52A8\u753B</strong> \u65E0\u6CD5\u6EE1\u8DB3\u8981\u6C42\u65F6\uFF0C\u624D\u5E94\u8BE5\u8003\u8651 <code>wx.createAnimation</code>\u3002</p></div><h2 id="\u5173\u952E\u5E27\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5E27\u52A8\u753B" aria-hidden="true">#</a> \u5173\u952E\u5E27\u52A8\u753B</h2><blockquote><p>\u57FA\u7840\u5E93 2.9.0 \u5F00\u59CB\u652F\u6301</p></blockquote>',5),g={href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"wx.createAnimation",-1),q=e(`<h3 id="animate" tabindex="-1"><a class="header-anchor" href="#animate" aria-hidden="true">#</a> animate</h3><p>\u5728\u9875\u9762\u6216\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\uFF0C\u5F53\u9700\u8981\u8FDB\u884C\u5173\u952E\u5E27\u52A8\u753B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>this.animate</code> \u63A5\u53E3:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>selector<span class="token punctuation">,</span> keyframes<span class="token punctuation">,</span> duration<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u6570\u8BF4\u660E</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selector</td><td>String</td><td></td><td>\u662F</td><td>\u9009\u62E9\u5668(\u540C SelectorQuery.select \u7684\u9009\u62E9\u5668\u683C\u5F0F)</td></tr><tr><td>keyframes</td><td>Array</td><td></td><td>\u662F</td><td>\u5173\u952E\u5E27\u4FE1\u606F</td></tr><tr><td>duration</td><td>Number</td><td></td><td>\u662F</td><td>\u52A8\u753B\u6301\u7EED\u65F6\u957F(\u6BEB\u79D2\u4E3A\u5355\u4F4D)</td></tr><tr><td>callback</td><td>function</td><td></td><td>\u5426</td><td>\u52A8\u753B\u5B8C\u6210\u540E\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><p>keyframes \u4E2D\u5BF9\u8C61\u7684\u7ED3\u6784</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>offset</td><td>Number</td><td></td><td>\u5426</td><td>\u5173\u952E\u5E27\u7684\u504F\u79FB\uFF0C\u8303\u56F4[0-1]</td></tr><tr><td>ease</td><td>String</td><td>linear</td><td>\u5426</td><td>\u52A8\u753B\u7F13\u52A8\u51FD\u6570</td></tr><tr><td>transformOrigin</td><td>String</td><td>\u5426</td><td>\u57FA\u70B9\u4F4D\u7F6E\uFF0C\u5373 CSS transform-origin</td><td></td></tr><tr><td>backgroundColor</td><td>String</td><td></td><td>\u5426</td><td>\u80CC\u666F\u989C\u8272\uFF0C\u5373 CSS background-color</td></tr><tr><td>bottom</td><td>Number/String</td><td></td><td>\u5426</td><td>\u5E95\u8FB9\u4F4D\u7F6E\uFF0C\u5373 CSS bottom</td></tr><tr><td>height</td><td>Number/String</td><td></td><td>\u5426</td><td>\u9AD8\u5EA6\uFF0C\u5373 CSS height</td></tr><tr><td>left</td><td>Number/String</td><td></td><td>\u5426</td><td>\u5DE6\u8FB9\u4F4D\u7F6E\uFF0C\u5373 CSS left</td></tr><tr><td>width</td><td>Number/String</td><td></td><td>\u5426</td><td>\u5BBD\u5EA6\uFF0C\u5373 CSS width</td></tr><tr><td>opacity</td><td>Number</td><td></td><td>\u5426</td><td>\u4E0D\u900F\u660E\u5EA6\uFF0C\u5373 CSS opacity</td></tr><tr><td>right</td><td>Number</td><td></td><td>\u5426</td><td>\u53F3\u8FB9\u4F4D\u7F6E\uFF0C\u5373 CSS right</td></tr><tr><td>top</td><td>Number/String</td><td></td><td>\u5426</td><td>\u9876\u8FB9\u4F4D\u7F6E\uFF0C\u5373 CSS top</td></tr><tr><td>matrix</td><td>Array</td><td></td><td>\u5426</td><td>\u53D8\u6362\u77E9\u9635\uFF0C\u5373 CSS transform matrix</td></tr><tr><td>matrix3d</td><td>Array</td><td></td><td>\u5426</td><td>\u4E09\u7EF4\u53D8\u6362\u77E9\u9635\uFF0C\u5373 CSS transform matrix3d</td></tr><tr><td>rotate</td><td>Number</td><td></td><td>\u5426</td><td>\u65CB\u8F6C\uFF0C\u5373 CSS transform rotate</td></tr><tr><td>rotate3d</td><td>Array</td><td></td><td>\u5426</td><td>\u4E09\u7EF4\u65CB\u8F6C\uFF0C\u5373 CSS transform rotate3d</td></tr><tr><td>rotateX</td><td>Number</td><td></td><td>\u5426</td><td>X \u65B9\u5411\u65CB\u8F6C\uFF0C\u5373 CSS transform rotateX</td></tr><tr><td>rotateY</td><td>Number</td><td></td><td>\u5426</td><td>Y \u65B9\u5411\u65CB\u8F6C\uFF0C\u5373 CSS transform rotateY</td></tr><tr><td>rotateZ</td><td>Number</td><td></td><td>\u5426</td><td>Z \u65B9\u5411\u65CB\u8F6C\uFF0C\u5373 CSS transform rotateZ</td></tr><tr><td>scale</td><td>Array</td><td></td><td>\u5426</td><td>\u7F29\u653E\uFF0C\u5373 CSS transform scale</td></tr><tr><td>scale3d</td><td>Array</td><td></td><td>\u5426</td><td>\u4E09\u7EF4\u7F29\u653E\uFF0C\u5373 CSS transform scale3d</td></tr><tr><td>scaleX</td><td>Number</td><td></td><td>\u5426</td><td>X \u65B9\u5411\u7F29\u653E\uFF0C\u5373 CSS transform scaleX</td></tr><tr><td>scaleY</td><td>Number</td><td></td><td>\u5426</td><td>Y \u65B9\u5411\u7F29\u653E\uFF0C\u5373 CSS transform scaleY</td></tr><tr><td>scaleZ</td><td>Number</td><td></td><td>\u5426</td><td>Z \u65B9\u5411\u7F29\u653E\uFF0C\u5373 CSS transform scaleZ</td></tr><tr><td>skew</td><td>Array</td><td></td><td>\u5426</td><td>\u503E\u659C\uFF0C\u5373 CSS transform skew</td></tr><tr><td>skewX</td><td>Number</td><td></td><td>\u5426</td><td>X \u65B9\u5411\u503E\u659C\uFF0C\u5373 CSS transform skewX</td></tr><tr><td>skewY</td><td>Number</td><td></td><td>\u5426</td><td>Y \u65B9\u5411\u503E\u659C\uFF0C\u5373 CSS transform skewY</td></tr><tr><td>translate</td><td>Array</td><td></td><td>\u5426</td><td>\u4F4D\u79FB\uFF0C\u5373 CSS transform translate</td></tr><tr><td>translate3d</td><td>Array</td><td></td><td>\u5426</td><td>\u4E09\u7EF4\u4F4D\u79FB\uFF0C\u5373 CSS transform translate3d</td></tr><tr><td>translateX</td><td>Number</td><td></td><td>\u5426</td><td>X \u65B9\u5411\u4F4D\u79FB\uFF0C\u5373 CSS transform translateX</td></tr><tr><td>translateY</td><td>Number</td><td></td><td>\u5426</td><td>Y \u65B9\u5411\u4F4D\u79FB\uFF0C\u5373 CSS transform translateY</td></tr><tr><td>translateZ</td><td>Number</td><td></td><td>\u5426</td><td>Z \u65B9\u5411\u4F4D\u79FB\uFF0C\u5373 CSS transform translateZ</td></tr></tbody></table>`,7),C={class:"custom-container details"},w=n("summary",null,"\u4EE3\u7801\u793A\u4F8B",-1),x={href:"https://developers.weixin.qq.com/s/P73kJ7mi7UcA",target:"_blank",rel:"noopener noreferrer"},N=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token string">&quot;#container&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#FF0000&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#00FF00&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#FF0000&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token number">5000</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clearAnimation</span><span class="token punctuation">(</span>
      <span class="token string">&quot;#container&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6E05\u9664\u4E86#container\u4E0A\u7684opacity\u548Crotate\u5C5E\u6027&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token string">&quot;.block&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">ease</span><span class="token operator">:</span> <span class="token string">&quot;ease-out&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token number">1.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token literal-property property">ease</span><span class="token operator">:</span> <span class="token string">&quot;ease-in&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.9</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">90</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token number">5000</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clearAnimation</span><span class="token punctuation">(</span><span class="token string">&quot;.block&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6E05\u9664\u4E86.block\u4E0A\u7684\u6240\u6709\u52A8\u753B\u5C5E\u6027&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=e(`<h3 id="clearanimation" tabindex="-1"><a class="header-anchor" href="#clearanimation" aria-hidden="true">#</a> clearAnimation</h3><p>\u8C03\u7528 animate API \u540E\u4F1A\u5728\u8282\u70B9\u4E0A\u65B0\u589E\u4E00\u4E9B\u6837\u5F0F\u5C5E\u6027\u8986\u76D6\u6389\u539F\u6709\u7684\u5BF9\u5E94\u6837\u5F0F\u3002\u5982\u679C\u9700\u8981\u6E05\u9664\u8FD9\u4E9B\u6837\u5F0F\uFF0C\u53EF\u5728\u8BE5\u8282\u70B9\u4E0A\u7684\u52A8\u753B\u5168\u90E8\u6267\u884C\u5B8C\u6BD5\u540E\u4F7F\u7528 <code>this.clearAnimation</code> \u6E05\u9664\u8FD9\u4E9B\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clearAnimation</span><span class="token punctuation">(</span>selector<span class="token punctuation">,</span> options<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u6570\u8BF4\u660E</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selector</td><td>String</td><td></td><td>\u662F</td><td>\u9009\u62E9\u5668(\u540C SelectorQuery.select \u7684\u9009\u62E9\u5668\u683C\u5F0F)</td></tr><tr><td>options</td><td>Object</td><td></td><td>\u5426</td><td>\u9700\u8981\u6E05\u9664\u7684\u5C5E\u6027\uFF0C\u4E0D\u586B\u5199\u5219\u5168\u90E8\u6E05\u9664</td></tr><tr><td>callback</td><td>Function</td><td></td><td>\u5426</td><td>\u6E05\u9664\u5B8C\u6210\u540E\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h2 id="\u6EDA\u52A8\u9A71\u52A8\u7684\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u9A71\u52A8\u7684\u52A8\u753B" aria-hidden="true">#</a> \u6EDA\u52A8\u9A71\u52A8\u7684\u52A8\u753B</h2><blockquote><p>\u57FA\u7840\u5E93 2.9.0 \u5F00\u59CB\u652F\u6301</p></blockquote><p>\u6839\u636E\u6EDA\u52A8\u4F4D\u7F6E\u800C\u4E0D\u65AD\u6539\u53D8\u52A8\u753B\u7684\u8FDB\u5EA6\u662F\u4E00\u79CD\u6BD4\u8F83\u5E38\u89C1\u7684\u573A\u666F\uFF0C\u8FD9\u7C7B\u52A8\u753B\u53EF\u4EE5\u8BA9\u4EBA\u611F\u89C9\u5230\u754C\u9762\u4EA4\u4E92\u5F88\u8FDE\u8D2F\u81EA\u7136\uFF0C\u4F53\u9A8C\u66F4\u597D\uFF0C\u76EE\u524D\u652F\u6301\u4E00\u79CD\u7531\u6EDA\u52A8\u9A71\u52A8\u7684\u52A8\u753B\u673A\u5236\u3002</p><p>\u57FA\u4E8E\u4E0A\u8FF0\u7684\u5173\u952E\u5E27\u52A8\u753B\u63A5\u53E3\uFF0C\u65B0\u589E\u4E00\u4E2A <code>ScrollTimeline</code> \u7684\u53C2\u6570\uFF0C\u7528\u6765\u7ED1\u5B9A\u6EDA\u52A8\u5143\u7D20(\u76EE\u524D\u53EA\u652F\u6301 scroll-view)\u3002\u63A5\u53E3\u5B9A\u4E49\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>selector<span class="token punctuation">,</span> keyframes<span class="token punctuation">,</span> duration<span class="token punctuation">,</span> ScrollTimeline<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="scrolltimeline-\u4E2D\u5BF9\u8C61\u7684\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#scrolltimeline-\u4E2D\u5BF9\u8C61\u7684\u7ED3\u6784" aria-hidden="true">#</a> ScrollTimeline \u4E2D\u5BF9\u8C61\u7684\u7ED3\u6784</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>scrollSource</td><td>String</td><td></td><td>\u662F</td><td>\u6307\u5B9A\u6EDA\u52A8\u5143\u7D20\u7684\u9009\u62E9\u5668(\u53EA\u652F\u6301 scroll-view)\uFF0C\u8BE5\u5143\u7D20\u6EDA\u52A8\u65F6\u4F1A\u9A71\u52A8\u52A8\u753B\u7684\u8FDB\u5EA6</td></tr><tr><td>orientation</td><td>String</td><td>vertical</td><td>\u5426</td><td>\u6307\u5B9A\u6EDA\u52A8\u7684\u65B9\u5411\u3002\u6709\u6548\u503C\u4E3A horizontal \u6216 vertical</td></tr><tr><td>startScrollOffset</td><td>Number</td><td></td><td>\u662F</td><td>\u6307\u5B9A\u5F00\u59CB\u9A71\u52A8\u52A8\u753B\u8FDB\u5EA6\u7684\u6EDA\u52A8\u504F\u79FB\u91CF\uFF0C\u5355\u4F4D px</td></tr><tr><td>endScrollOffset</td><td>Number</td><td></td><td>\u662F</td><td>\u6307\u5B9A\u505C\u6B62\u9A71\u52A8\u52A8\u753B\u8FDB\u5EA6\u7684\u6EDA\u52A8\u504F\u79FB\u91CF\uFF0C\u5355\u4F4D px</td></tr><tr><td>timeRange</td><td>Number</td><td></td><td>\u662F</td><td>\u8D77\u59CB\u548C\u7ED3\u675F\u7684\u6EDA\u52A8\u8303\u56F4\u6620\u5C04\u7684\u65F6\u95F4\u957F\u5EA6\uFF0C\u8BE5\u65F6\u95F4\u53EF\u7528\u4E8E\u4E0E\u5173\u952E\u5E27\u52A8\u753B\u91CC\u7684\u65F6\u95F4 (duration) \u76F8\u5339\u914D\uFF0C\u5355\u4F4D ms</td></tr></tbody></table>`,12),j={class:"custom-container details"},Y=n("summary",null,"\u4EE3\u7801\u793A\u4F8B",-1),X={href:"https://developers.weixin.qq.com/s/994o8jmY7FcQ",target:"_blank",rel:"noopener noreferrer"},O=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token string">&quot;.avatar&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&quot;scale(1) translateY(-20px)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">&quot;25%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&quot;scale(.65) translateY(-20px)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">scale(.3) translateY(-20px)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">scrollSource</span><span class="token operator">:</span> <span class="token string">&quot;#scroller&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timeRange</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">startScrollOffset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">endScrollOffset</span><span class="token operator">:</span> <span class="token number">85</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token string">&quot;.search_input&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">scrollSource</span><span class="token operator">:</span> <span class="token string">&quot;#scroller&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timeRange</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">startScrollOffset</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token literal-property property">endScrollOffset</span><span class="token operator">:</span> <span class="token number">252</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),R={id:"\u9AD8\u7EA7\u7684\u52A8\u753B\u65B9\u5F0F",tabindex:"-1"},Z=n("a",{class:"header-anchor",href:"#\u9AD8\u7EA7\u7684\u52A8\u753B\u65B9\u5F0F","aria-hidden":"true"},"#",-1),F=n("p",null,"\u5728\u4E00\u4E9B\u590D\u6742\u573A\u666F\u4E0B\uFF0C\u4E0A\u8FF0\u7684\u52A8\u753B\u65B9\u6CD5\u53EF\u80FD\u5E76\u4E0D\u9002\u7528\u3002\u6240\u4EE5\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u4E00\u4E9B\u9AD8\u7EA7\u7684\u52A8\u753B\u65B9\u5F0F\u3002",-1),D=n("p",null,[t("\u8FDE\u7EED\u4F7F\u7528 "),n("code",null,"setData"),t(" \u6765\u6539\u53D8\u754C\u9762\u7684\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u8FBE\u5230\u52A8\u753B\u7684\u6548\u679C\u3002\u8FD9\u6837\u53EF\u4EE5\u4EFB\u610F\u5730\u6539\u53D8\u754C\u9762\uFF0C\u4F46\u901A\u5E38\u4F1A\u4EA7\u751F\u8F83\u5927\u7684\u5EF6\u8FDF\u6216\u5361\u987F\uFF0C\u751A\u81F3\u5BFC\u81F4\u5C0F\u7A0B\u5E8F\u50F5\u6B7B\u3002\u6B64\u65F6\u53EF\u4EE5\u901A\u8FC7\u5C06\u9875\u9762\u7684 "),n("code",null,"setData"),t(" \u6539\u4E3A \u81EA\u5B9A\u4E49\u7EC4\u4EF6 \u4E2D\u7684 "),n("code",null,"setData"),t(" \u6765\u63D0\u5347\u6027\u80FD\u3002\u4E0B\u9762\u7684\u4F8B\u5B50\u662F\u4F7F\u7528 "),n("code",null,"setData"),t(" \u6765\u5B9E\u73B0\u79D2\u8868\u52A8\u753B\u7684\u793A\u4F8B\u3002")],-1),I={href:"https://developers.weixin.qq.com/s/cRTvdPmO7d5T",target:"_blank",rel:"noopener noreferrer"};function T(z,B){const a=p("ExternalLinkIcon"),o=p("Badge"),r=p("RouterLink");return c(),i("div",null,[k,m,n("p",null,[t("\u5728\u5C0F\u7A0B\u5E8F\u4E2D\uFF0C\u901A\u5E38\u53EF\u4EE5\u4F7F\u7528 "),n("a",v,[t("CSS \u6E10\u53D8"),s(a)]),t(" \u548C "),n("a",b,[t("CSS \u52A8\u753B"),s(a)]),t(" \u6765\u521B\u5EFA\u7B80\u6613\u7684\u754C\u9762\u52A8\u753B\u3002(\u8FD9\u4E5F\u662F unknowIfGuestInDream \u4E3B\u8981\u4F7F\u7528\u7684\u52A8\u753B\u65B9\u5F0F)")]),n("blockquote",null,[n("p",null,[n("a",h,[t("\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u9884\u89C8\u6548\u679C"),s(a)])])]),n("p",null,[t("\u540C\u65F6\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 "),n("a",y,[S,s(a)]),t(" \u63A5\u53E3\u6765\u52A8\u6001\u521B\u5EFA\u7B80\u6613\u7684\u52A8\u753B\u6548\u679C\u3002")]),f,n("p",null,[t("\u5173\u952E\u5E27\u52A8\u753B\u7528\u4E8E\u4EE3\u66FF\u65E7\u7684 "),n("a",g,[_,s(a)]),t(" \u3002\u5B83\u5177\u6709\u66F4\u597D\u7684\u6027\u80FD\u548C\u66F4\u53EF\u63A7\u7684\u63A5\u53E3\u3002")]),q,n("details",C,[w,n("p",null,[n("a",x,[t("\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u9884\u89C8\u6548\u679C"),s(a)])]),N]),A,n("details",j,[Y,n("p",null,[n("a",X,[t("\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u9884\u89C8\u6548\u679C"),s(a)])]),O]),n("h2",R,[Z,t(" \u9AD8\u7EA7\u7684\u52A8\u753B\u65B9\u5F0F "),s(o,{text:"\u521D\u5B66\u8005\u65E0\u9700\u638C\u63E1",type:"warning"})]),F,n("ol",null,[n("li",null,[n("p",null,[s(r,{to:"/code/mini-app/guide/view/wxs-event.html"},{default:d(()=>[t("WXS \u54CD\u5E94\u4E8B\u4EF6")]),_:1}),t(" \u7684\u65B9\u5F0F\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 WXS \u6765\u54CD\u5E94\u4E8B\u4EF6\u7684\u65B9\u6CD5\u6765\u52A8\u6001\u8C03\u6574\u8282\u70B9\u7684 style \u5C5E\u6027\u3002\u901A\u8FC7\u4E0D\u65AD\u6539\u53D8 style \u5C5E\u6027\u7684\u503C\u53EF\u4EE5\u505A\u5230\u52A8\u753B\u6548\u679C\u3002\u540C\u65F6\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u53EF\u4EE5\u6839\u636E\u7528\u6237\u7684\u89E6\u6478\u4E8B\u4EF6\u6765\u52A8\u6001\u5730\u751F\u6210\u52A8\u753B\u3002")])]),n("li",null,[D,n("blockquote",null,[n("p",null,[n("a",I,[t("\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u9884\u89C8\u6548\u679C"),s(a)])])])])])])}const V=l(u,[["render",T],["__file","animation.html.vue"]]);export{V as default};
