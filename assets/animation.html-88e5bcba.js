import{_ as s,W as a,X as t,$ as e,Y as n,a2 as p}from"./framework-ae009c3e.js";const o={},c=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"章节过时"),n("p",null,"大部分动画都能够通过 CSS3 的 transition 实现，且 CSS3 开销更小。在复杂动画下，jQuery 更容易触发性能瓶颈。"),n("p",null,"2020 年浏览器对 CSS3 已经支持的特别良好，所以目前大多数的动画都直接使用 CSS3 的动画库。本章以学习思路为主即可。")],-1),i=p(`<p>用 JavaScript 实现动画，原理非常简单: 我们只需要以固定的时间间隔(例如，0.1 秒)，每次把 DOM 元素的 CSS 样式修改一点(例如，高宽各增加 10%)，看起来就像动画了。</p><p>但是要用 JavaScript 手动实现动画效果，需要编写非常复杂的代码。如果想要把动画效果用函数封装起来便于复用，那考虑的事情就更多了。</p><p>使用 jQuery 实现动画，代码已经简单得不能再简化了: 只需要一行代码!</p><p>让我们先来看看 jQuery 内置的几种动画样式:</p><h2 id="show-hide" tabindex="-1"><a class="header-anchor" href="#show-hide" aria-hidden="true">#</a> show / hide</h2><p>直接以无参数形式调用 <code>show()</code> 和 <code>hide()</code>，会显示和隐藏 DOM 元素。但是，只要传递一个时间参数进去，就变成了动画:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-show-hide&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在3秒钟内逐渐消失</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间以毫秒为单位，但也可以是 <code>&#39;slow&#39;</code>，<code>&#39;fast&#39;</code> 这些字符串:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-show-hide&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&quot;slow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在0.6秒钟内逐渐显示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>toggle()</code> 方法则根据当前状态决定是 <code>show()</code> 还是 <code>hide()</code>。</p><h2 id="slideup-slidedown" tabindex="-1"><a class="header-anchor" href="#slideup-slidedown" aria-hidden="true">#</a> slideUp / slideDown</h2><p>您可能已经看出来了，<code>show()</code> 和 <code>hide()</code> 是从左上角逐渐展开或收缩的，而 <code>slideUp()</code> 和 <code>slideDown()</code> 则是在垂直方向逐渐展开或收缩的。</p><p><code>slideUp()</code> 把一个可见的 DOM 元素收起来，效果跟拉上窗帘似的，<code>slideDown()</code> 相反，而 <code>slideToggle()</code> 则根据元素是否可见来决定下一步动作:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-slide&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">slideUp</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在3秒钟内逐渐向上消失</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fadein-fadeout" tabindex="-1"><a class="header-anchor" href="#fadein-fadeout" aria-hidden="true">#</a> fadeIn / fadeOut</h2><p><code>fadeIn()</code> 和 <code>fadeOut()</code> 的动画效果是淡入淡出，也就是通过不断设置 DOM 元素的 <code>opacity</code> 属性来实现，而 <code>fadeToggle()</code> 则根据元素是否可见来决定下一步动作:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#test-fade&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">fadeOut</span><span class="token punctuation">(</span><span class="token string">&#39;slow&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在 0.6 秒内淡出</span>
<span class="token function">fadeOut</span><span class="token punctuation">(</span><span class="token string">&#39;slow&#39;</span><span class="token punctuation">)</span>  <span class="token function">fadeIn</span><span class="token punctuation">(</span><span class="token string">&#39;slow&#39;</span><span class="token punctuation">)</span>  <span class="token function">fadeToggle</span><span class="token punctuation">(</span><span class="token string">&#39;slow&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义动画" tabindex="-1"><a class="header-anchor" href="#自定义动画" aria-hidden="true">#</a> 自定义动画</h2><p>如果上述动画效果还不能满足您的要求，那就祭出最后大招: <code>animate()</code>，它可以实现任意动画效果，我们需要传入的参数就是 DOM 元素最终的 CSS 状态和时间，jQuery 在时间段内不断调整 CSS 直到达到我们设定的值:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-animate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;256px&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;256px&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token number">3000</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在 3 秒钟内 CSS 过渡到设定值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>animate()</code> 还可以再传入一个函数，当动画结束时，该函数将被调用:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-animate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;256px&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;256px&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;动画已结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 恢复至初始状态:</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;opacity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;128px&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;128px&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上这个回调函数参数对于基本动画也是适用的。</p><p>有了 <code>animate()</code>，您就可以实现各种自定义动画效果了:</p><h2 id="串行动画" tabindex="-1"><a class="header-anchor" href="#串行动画" aria-hidden="true">#</a> 串行动画</h2><p>jQuery 的动画效果还可以串行执行，通过 <code>delay()</code> 方法还可以实现暂停，这样，我们可以实现更复杂的动画效果，而代码却相当简单:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#test-animates&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 动画效果: slideDown - 暂停 - 放大 - 暂停 - 缩小</span>
div<span class="token punctuation">.</span><span class="token function">slideDown</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;256px&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;256px&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;128px&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;128px&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为动画需要执行一段时间，所以 jQuery 必须不断返回新的 Promise 对象才能后续执行操作。简单地把动画封装在函数中是不够的。</p><h2 id="为什么有的动画没有效果" tabindex="-1"><a class="header-anchor" href="#为什么有的动画没有效果" aria-hidden="true">#</a> 为什么有的动画没有效果</h2><p>您可能会遇到，有的动画如 <code>slideUp()</code> 根本没有效果。这是因为 jQuery 动画的原理是逐渐改变 CSS 的值，如 <code>height</code> 从 <code>100px</code> 逐渐变为 <code>0</code>。但是很多不是 block 性质的 DOM 元素，对它们设置 <code>height</code> 根本就不起作用，所以动画也就没有效果。</p><p>此外，jQuery 也没有实现对 <code>background-color</code> 的动画效果，用 <code>animate()</code> 设置 <code>background-color</code> 也没有效果。这种情况下可以使用 CSS3 的 <code>transition</code> 实现动画效果。</p>`,31);function l(u,d){return a(),t("div",null,[c,e(" more "),i])}const k=s(o,[["render",l],["__file","animation.html.vue"]]);export{k as default};
