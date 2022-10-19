import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,b as o,e as c,f as a,r as i}from"./app.7e7f0dc0.js";const l={},d=a('<h1 id="\u8DEF\u7531-api" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531-api" aria-hidden="true">#</a> \u8DEF\u7531 API</h1><p>\u672C\u9875\u9762\u4ECB\u7ECD\u7684\u4E00\u7CFB\u5217 API \u90FD\u662F\u548C\u5C0F\u7A0B\u5E8F\u8DEF\u7531(\u5BFC\u822A)\u76F8\u5173\u7684 API\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9B API\uFF0C\u81EA\u5B9A\u4E49\u5C0F\u7A0B\u5E8F\u7684\u9875\u9762\u5BFC\u822A\u903B\u8F91\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u6982\u8981</p><p>\u6700\u5E38\u7528\u7684\u4E24\u4E2A:</p><ul><li><code>wx.navigateTo</code>: \u5BFC\u822A\u5230\u4E00\u4E2A\u65B0\u9875\u9762</li><li><code>wx.navigateBack</code>: \u8FD4\u56DE\u4E0A\u4E00\u5C42(\u4E0A n \u5C42)\u9875\u9762</li></ul><p>\u4E0D\u592A\u5E38\u7528\u7684\u4E09\u4E2A:</p><ul><li><code>wx.redirectTo</code>: \u5C06\u5F53\u524D\u9875\u9762\u91CD\u5B9A\u5411\u5230\u4E00\u4E2A\u65B0\u7684\u9875\u9762</li><li><code>wx.switchTab</code>: \u5230\u8F6C\u5230 Tabbar \u7684\u9875\u9762\u5E76\u5173\u95ED\u5176\u4ED6\u9875\u9762</li><li><code>wx.reLaunch</code>: \u5173\u95ED\u5C0F\u7A0B\u5E8F\u6240\u6709\u9875\u9762\uFF0C\u5E76\u6253\u5F00\u6307\u5B9A\u9875\u9762</li></ul></div><h2 id="wx-navigateto-object-object" tabindex="-1"><a class="header-anchor" href="#wx-navigateto-object-object" aria-hidden="true">#</a> wx.navigateTo(Object object)</h2><p>\u4FDD\u7559\u5F53\u524D\u9875\u9762\uFF0C\u8DF3\u8F6C\u5230\u5E94\u7528\u5185\u7684\u67D0\u4E2A\u9875\u9762\u3002\u4F46\u662F\u4E0D\u80FD\u8DF3\u5230 tabbar \u9875\u9762\u3002\u4F7F\u7528 <code>wx.navigateBack</code> \u53EF\u4EE5\u8FD4\u56DE\u5230\u539F\u9875\u9762\u3002\u5C0F\u7A0B\u5E8F\u4E2D\u9875\u9762\u6808\u6700\u591A\u5341\u5C42\u3002</p><h3 id="navigateto-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#navigateto-\u53C2\u6570" aria-hidden="true">#</a> navigateTo \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>\u662F</td><td>\u9700\u8981\u8DF3\u8F6C\u7684\u5E94\u7528\u5185\u975E tabBar \u7684\u9875\u9762\u7684\u8DEF\u5F84, \u8DEF\u5F84\u540E\u53EF\u4EE5\u5E26\u53C2\u6570\u3002\u53C2\u6570\u4E0E\u8DEF\u5F84\u4E4B\u95F4\u4F7F\u7528 <code>?</code> \u5206\u9694\uFF0C\u53C2\u6570\u952E\u4E0E\u53C2\u6570\u503C\u7528 <code>=</code> \u76F8\u8FDE\uFF0C\u4E0D\u540C\u53C2\u6570\u7528 <code>&amp;</code> \u5206\u9694\uFF1B\u5982 <code>&#39;path?key=value&amp;key2=value2&#39;</code></td></tr><tr><td>events</td><td>Object</td><td>\u5426</td><td>\u9875\u9762\u95F4\u901A\u4FE1\u63A5\u53E3\uFF0C\u7528\u4E8E\u76D1\u542C\u88AB\u6253\u5F00\u9875\u9762\u53D1\u9001\u5230\u5F53\u524D\u9875\u9762\u7684\u6570\u636E\u3002<br>\u57FA\u7840\u5E93 2.7.3 \u5F00\u59CB\u652F\u6301</td></tr><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table>',9),u={id:"navigatetoobject-success",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#navigatetoobject-success","aria-hidden":"true"},"#",-1),k=a(`<p>\u53C2\u6570</p><p>Object res</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>eventChannel</td><td>EventChannel</td><td>\u548C\u88AB\u6253\u5F00\u9875\u9762\u8FDB\u884C\u901A\u4FE1</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;test?id=1&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E3A\u6307\u5B9A\u4E8B\u4EF6\u6DFB\u52A0\u4E00\u4E2A\u76D1\u542C\u5668\uFF0C\u83B7\u53D6\u88AB\u6253\u5F00\u9875\u9762\u4F20\u9001\u5230\u5F53\u524D\u9875\u9762\u7684\u6570\u636E</span>
    <span class="token function">acceptDataFromOpenedPage</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">someEvent</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u901A\u8FC7 eventChannel \u5411\u88AB\u6253\u5F00\u9875\u9762\u4F20\u9001\u6570\u636E</span>
    res<span class="token punctuation">.</span>eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;acceptDataFromOpenerPage&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//test.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> eventChannel <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;acceptDataFromOpenedPage&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;someEvent&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u76D1\u542Ca cceptDataFromOpenerPage \u4E8B\u4EF6\uFF0C\u83B7\u53D6\u4E0A\u4E00\u9875\u9762\u901A\u8FC7 eventChannel \u4F20\u9001\u5230\u5F53\u524D\u9875\u9762\u7684\u6570\u636E</span>
    eventChannel<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;acceptDataFromOpenerPage&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-navigateback-object-object" tabindex="-1"><a class="header-anchor" href="#wx-navigateback-object-object" aria-hidden="true">#</a> wx.navigateBack(Object object)</h2><p>\u5173\u95ED\u5F53\u524D\u9875\u9762\uFF0C\u8FD4\u56DE\u4E0A\u4E00\u9875\u9762\u6216\u591A\u7EA7\u9875\u9762\u3002\u53EF\u901A\u8FC7 <code>getCurrentPages</code> \u83B7\u53D6\u5F53\u524D\u7684\u9875\u9762\u6808\uFF0C\u51B3\u5B9A\u9700\u8981\u8FD4\u56DE\u51E0\u5C42\u3002</p><h3 id="navigateback-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#navigateback-\u53C2\u6570" aria-hidden="true">#</a> navigateBack \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>delta</td><td>number</td><td>1</td><td>\u5426</td><td>\u8FD4\u56DE\u7684\u9875\u9762\u6570\uFF0C\u5982\u679C delta \u5927\u4E8E\u73B0\u6709\u9875\u9762\u6570\uFF0C\u5219\u8FD4\u56DE\u5230\u9996\u9875\u3002</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6CE8\u610F: \u8C03\u7528 navigateTo \u8DF3\u8F6C\u65F6\uFF0C\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u9875\u9762\u4F1A\u88AB\u52A0\u5165\u5806\u6808\uFF0C\u800C redirectTo \u65B9\u6CD5\u5219\u4E0D\u4F1A\u3002\u89C1\u4E0B\u65B9\u793A\u4F8B\u4EE3\u7801</span>

<span class="token comment">// \u6B64\u5904\u662FA\u9875\u9762</span>
wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;B?id=1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6B64\u5904\u662FB\u9875\u9762</span>
wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;C?id=1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5728C\u9875\u9762\u5185 navigateBack\uFF0C\u5C06\u8FD4\u56DEA\u9875\u9762</span>
wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-redirectto-object-object" tabindex="-1"><a class="header-anchor" href="#wx-redirectto-object-object" aria-hidden="true">#</a> wx.redirectTo(Object object)</h2><p>\u5173\u95ED\u5F53\u524D\u9875\u9762\uFF0C\u8DF3\u8F6C\u5230\u5E94\u7528\u5185\u7684\u67D0\u4E2A\u9875\u9762\u3002\u4F46\u662F\u4E0D\u5141\u8BB8\u8DF3\u8F6C\u5230 tabbar \u9875\u9762\u3002</p><h3 id="redirectto-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#redirectto-\u53C2\u6570" aria-hidden="true">#</a> redirectTo \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>\u662F</td><td>\u9700\u8981\u8DF3\u8F6C\u7684\u5E94\u7528\u5185\u975E tabBar \u7684\u9875\u9762\u7684\u8DEF\u5F84, \u8DEF\u5F84\u540E\u53EF\u4EE5\u5E26\u53C2\u6570\u3002\u53C2\u6570\u4E0E\u8DEF\u5F84\u4E4B\u95F4\u4F7F\u7528 <code>?</code> \u5206\u9694\uFF0C\u53C2\u6570\u952E\u4E0E\u53C2\u6570\u503C\u7528 <code>=</code> \u76F8\u8FDE\uFF0C\u4E0D\u540C\u53C2\u6570\u7528 <code>&amp;</code> \u5206\u9694\uFF1B\u5982 <code>&#39;path?key=value&amp;key2=value2&#39;</code></td></tr><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;test?id=1&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-switchtab-object-object" tabindex="-1"><a class="header-anchor" href="#wx-switchtab-object-object" aria-hidden="true">#</a> wx.switchTab(Object object)</h2><p>\u8DF3\u8F6C\u5230 tabBar \u9875\u9762\uFF0C\u5E76\u5173\u95ED\u5176\u4ED6\u6240\u6709\u975E tabBar \u9875\u9762</p><h3 id="switchtab-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#switchtab-\u53C2\u6570" aria-hidden="true">#</a> switchTab \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td>\u662F</td><td>\u9700\u8981\u8DF3\u8F6C\u7684 tabBar \u9875\u9762\u7684\u8DEF\u5F84(\u9700\u5728 app.json \u7684 tabBar \u5B57\u6BB5\u5B9A\u4E49\u7684\u9875\u9762)\uFF0C\u8DEF\u5F84\u540E\u4E0D\u80FD\u5E26\u53C2\u6570\u3002</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9996\u9875&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5176\u4ED6&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/index&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-relaunch-object-object" tabindex="-1"><a class="header-anchor" href="#wx-relaunch-object-object" aria-hidden="true">#</a> wx.reLaunch(Object object)</h2><p>\u5173\u95ED\u6240\u6709\u9875\u9762\uFF0C\u6253\u5F00\u5230\u5E94\u7528\u5185\u7684\u67D0\u4E2A\u9875\u9762</p><h3 id="relaunch-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#relaunch-\u53C2\u6570" aria-hidden="true">#</a> reLaunch \u53C2\u6570</h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>\u662F</td><td>\u9700\u8981\u8DF3\u8F6C\u7684\u5E94\u7528\u5185\u9875\u9762\u8DEF\u5F84\uFF0C\u8DEF\u5F84\u540E\u53EF\u4EE5\u5E26\u53C2\u6570\u3002\u53C2\u6570\u4E0E\u8DEF\u5F84\u4E4B\u95F4\u4F7F\u7528?\u5206\u9694\uFF0C\u53C2\u6570\u952E\u4E0E\u53C2\u6570\u503C\u7528=\u76F8\u8FDE\uFF0C\u4E0D\u540C\u53C2\u6570\u7528&amp;\u5206\u9694\uFF1B\u5982 <code>&#39;path?key=value&amp;key2=value2&#39;</code></td></tr><tr><td>success</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570(\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C)</td></tr></tbody></table><p>\u793A\u4F8B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">reLaunch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;test?id=1&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// test</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function v(b,h){const s=i("Badge");return e(),p("div",null,[d,n("h3",u,[r,o(" navigateToObject.success "),c(s,{text:"\u521D\u5B66\u65E0\u9700\u638C\u63E1",type:"grey"})]),k])}const j=t(l,[["render",v],["__file","route.html.vue"]]);export{j as default};
