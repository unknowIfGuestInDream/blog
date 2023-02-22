import{_ as n,W as s,X as a,a2 as p}from"./framework-d7af73f9.js";const e={},t=p(`<h2 id="值的专一性" tabindex="-1"><a class="header-anchor" href="#值的专一性" aria-hidden="true">#</a> 值的专一性</h2><p>CSS 每个属性都会有且仅有一个值。</p><ul><li>如果您设置了多个值，最终优先级最高的值会被应用、</li><li>如果您没有设置值，则会应用默认值。默认值可以是 <code>unset</code>(未设置), <code>inherit</code> (继承父属性值), <code>initial</code> (初始值)。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果属性未知或某个值对给定属性无效，则声明被视为无效，并被浏览器的 CSS 引擎完全忽略。</p></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>虽然大多数值是相对简单的关键字或数值，但也有一些可能的值以函数的形式出现。一个函数由函数名和一些括号组成，其中放置了该函数的允许值。</p><p><strong>案例</strong>: <code>calc()</code> 函数允许您在 CSS 中进行简单的计算:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>90% - 30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> rebeccapurple<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例</strong>: <code>url()</code> 允许您引入外部资源:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.logo</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo.svg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="速记属性" tabindex="-1"><a class="header-anchor" href="#速记属性" aria-hidden="true">#</a> 速记属性</h2><p>一些属性，如 <code>font</code>, <code>background</code>, <code>padding</code>, <code>border</code>, <code>margin</code> 等属性称为速记属性--这是因为它们允许您在一行中设置多个属性值，从而节省时间并使代码更整洁。</p><p><strong>案例</strong>: 以下两个 CSS 是完全等价的</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 15px 15px 5px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg-graphic.png<span class="token punctuation">)</span></span> 10px 10px repeat-x fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg-graphic.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-x<span class="token punctuation">;</span>
  <span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[t];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","declaration.html.vue"]]);export{d as default};
