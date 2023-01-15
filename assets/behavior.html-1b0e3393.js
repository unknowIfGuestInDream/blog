import{_ as t,W as n,X as a,a2 as s}from"./framework-b343ad39.js";const e={},p=s(`<p><code>Behavior</code> 注册一个 behavior，接受一个 Object 类型的参数。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>定义段</th><th>类型</th><th>是否必填</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>properties</td><td>Object Map</td><td>否</td><td>同组件的属性</td><td></td></tr><tr><td>data</td><td>Object</td><td>否</td><td>同组件的数据</td><td></td></tr><tr><td>methods</td><td>Object</td><td>否</td><td>同自定义组件的方法</td><td></td></tr><tr><td>behaviors</td><td>String Array</td><td>否</td><td>引入其它的 behavior</td><td></td></tr><tr><td>created</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>attached</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>ready</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>moved</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>detached</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr></tbody></table><details class="hint-container details"><summary>代码示例</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// my-behavior.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Behavior</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">myBehaviorProperty</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">myBehaviorData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">myBehaviorMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,4),o=[p];function d(c,i){return n(),a("div",null,o)}const l=t(e,[["render",d],["__file","behavior.html.vue"]]);export{l as default};
