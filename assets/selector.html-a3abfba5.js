import{_ as p,W as c,X as o,Y as n,Z as s,a0 as t,a2 as e,E as i}from"./framework-8ee916d6.js";const l={},u=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"ヒント"),n("p",null,"此部分在初步学习小程序的时候直接略过即可。")],-1),r=n("h2",{id:"wxml-节点信息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#wxml-节点信息","aria-hidden":"true"},"#"),s(" WXML 节点信息")],-1),d={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"最常见的用法是使用这个接口来查询某个节点的当前位置，以及界面的滚动位置。",-1),m={class:"custom-container details"},v=e(`<summary>代码示例</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> query <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">createSelectorQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
query<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">&quot;#the-id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span>top<span class="token punctuation">;</span> <span class="token comment">// #the-id 节点的上边界坐标(相对于显示区域)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
query<span class="token punctuation">.</span><span class="token function">selectViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollOffset</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span> <span class="token comment">// 显示区域的竖直滚动位置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

query<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b=n("code",null,"#the-id",-1),h={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html",target:"_blank",rel:"noopener noreferrer"},_=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"ヒント"),n("p",null,[s("在自定义组件或包含自定义组件的页面中，推荐使用 "),n("code",null,"this.createSelectorQuery"),s(" 来代替 "),n("code",null,"wx.createSelectorQuery"),s(" ，这样可以确保在正确的范围内选择节点。")])],-1),f=n("h2",{id:"wxml-节点布局相交状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#wxml-节点布局相交状态","aria-hidden":"true"},"#"),s(" WXML 节点布局相交状态")],-1),g={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html",target:"_blank",rel:"noopener noreferrer"},x=e(`<p>这一组 API 涉及的主要概念如下。</p><ul><li>参照节点: 监听的参照节点，取它的布局区域作为参照区域。如果有多个参照节点，则会取它们布局区域的 <strong>交集</strong> 作为参照区域。页面显示区域也可作为参照区域之一。</li><li>目标节点: 监听的目标，默认只能是一个节点(使用 selectAll 选项时，可以同时监听多个节点)。</li><li>相交区域: 目标节点的布局区域与参照区域的相交区域。</li><li>相交比例: 相交区域占参照区域的比例。</li><li>阈值: 相交比例如果达到阈值，则会触发监听器的回调函数。阈值可以有多个。</li></ul><details class="custom-container details"><summary>代码示例</summary><p>以下示例代码可以在目标节点(用选择器 <code>.target-class</code> 指定)每次进入或离开页面显示区域时，触发回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">createIntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">relativeToViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token string">&quot;.target-class&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token comment">// 目标节点 id</span>
        res<span class="token punctuation">.</span>dataset<span class="token punctuation">;</span> <span class="token comment">// 目标节点 dataset</span>
        res<span class="token punctuation">.</span>intersectionRatio<span class="token punctuation">;</span> <span class="token comment">// 相交区域占目标节点的布局区域的比例</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">;</span> <span class="token comment">// 相交区域</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>left<span class="token punctuation">;</span> <span class="token comment">// 相交区域的左边界坐标</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>top<span class="token punctuation">;</span> <span class="token comment">// 相交区域的上边界坐标</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>width<span class="token punctuation">;</span> <span class="token comment">// 相交区域的宽度</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>height<span class="token punctuation">;</span> <span class="token comment">// 相交区域的高度</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下示例代码可以在目标节点(用选择器 <code>.target-class</code> 指定)与参照节点(用选择器 <code>.relative-class</code> 指定)在页面显示区域内相交或相离，且相交或相离程度达到目标节点布局区域的 20%和 50%时，触发回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">createIntersectionObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">thresholds</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">relativeTo</span><span class="token punctuation">(</span><span class="token string">&quot;.relative-class&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">relativeToViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token string">&quot;.target-class&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span>intersectionRatio<span class="token punctuation">;</span> <span class="token comment">// 相交区域占目标节点的布局区域的比例</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">;</span> <span class="token comment">// 相交区域</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>left<span class="token punctuation">;</span> <span class="token comment">// 相交区域的左边界坐标</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>top<span class="token punctuation">;</span> <span class="token comment">// 相交区域的上边界坐标</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>width<span class="token punctuation">;</span> <span class="token comment">// 相交区域的宽度</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>height<span class="token punctuation">;</span> <span class="token comment">// 相交区域的高度</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container warning"><p class="custom-container-title">注意</p><p>与页面显示区域的相交区域并不准确代表用户可见的区域，因为参与计算的区域是“布局区域”，布局区域可能会在绘制时被其他节点裁剪隐藏(如遇祖先节点中 overflow 样式为 <code>hidden</code> 的节点)或遮盖(如遇 <code>fixed</code> 定位的节点)。</p></div><div class="custom-container tip"><p class="custom-container-title">ヒント</p><p>在自定义组件或包含自定义组件的页面中，推荐使用 <code>this.createIntersectionObserver</code> 来代替 <code>wx.createIntersectionObserver</code> ，这样可以确保在正确的范围内选择节点。</p></div>`,5);function w(y,q){const a=i("ExternalLinkIcon");return c(),o("div",null,[u,r,n("p",null,[n("a",d,[s("节点信息查询 API"),t(a)]),s(" 可以用于获取节点属性、样式、在界面上的位置等信息。")]),k,n("details",m,[v,n("p",null,[s("上述示例中， "),b,s(" 是一个节点选择器，与 CSS 的选择器相近但略有区别，请参见 "),n("a",h,[s("SelectorQuery.select"),t(a)]),s(" 的相关说明。")])]),_,f,n("p",null,[n("a",g,[s("节点布局相交状态 API"),t(a)]),s(" 可用于监听两个或多个组件节点在布局位置上的相交状态。这一组 API 常常可以用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。")]),x])}const I=p(l,[["render",w],["__file","selector.html.vue"]]);export{I as default};
