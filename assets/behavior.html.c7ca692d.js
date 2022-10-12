import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as s}from"./app.cad6791d.js";const e={},p=s(`<p><code>Behavior</code> \u6CE8\u518C\u4E00\u4E2A behavior\uFF0C\u63A5\u53D7\u4E00\u4E2A Object \u7C7B\u578B\u7684\u53C2\u6570\u3002</p><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><table><thead><tr><th>\u5B9A\u4E49\u6BB5</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u63CF\u8FF0</th><th>\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td>properties</td><td>Object Map</td><td>\u5426</td><td>\u540C\u7EC4\u4EF6\u7684\u5C5E\u6027</td><td></td></tr><tr><td>data</td><td>Object</td><td>\u5426</td><td>\u540C\u7EC4\u4EF6\u7684\u6570\u636E</td><td></td></tr><tr><td>methods</td><td>Object</td><td>\u5426</td><td>\u540C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u65B9\u6CD5</td><td></td></tr><tr><td>behaviors</td><td>String Array</td><td>\u5426</td><td>\u5F15\u5165\u5176\u5B83\u7684 behavior</td><td></td></tr><tr><td>created</td><td>Function</td><td>\u5426</td><td>\u751F\u547D\u5468\u671F\u51FD\u6570</td><td></td></tr><tr><td>attached</td><td>Function</td><td>\u5426</td><td>\u751F\u547D\u5468\u671F\u51FD\u6570</td><td></td></tr><tr><td>ready</td><td>Function</td><td>\u5426</td><td>\u751F\u547D\u5468\u671F\u51FD\u6570</td><td></td></tr><tr><td>moved</td><td>Function</td><td>\u5426</td><td>\u751F\u547D\u5468\u671F\u51FD\u6570</td><td></td></tr><tr><td>detached</td><td>Function</td><td>\u5426</td><td>\u751F\u547D\u5468\u671F\u51FD\u6570</td><td></td></tr></tbody></table><details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// my-behavior.js</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,4),o=[p];function d(c,r){return n(),a("div",null,o)}const u=t(e,[["render",d],["__file","behavior.html.vue"]]);export{u as default};
