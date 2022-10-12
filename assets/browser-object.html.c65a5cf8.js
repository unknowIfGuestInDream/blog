import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,d as i,a as s,b as n,e as t,f as e,r as l}from"./app.963e91c8.js";const u={},d=s("p",null,"JavaScript \u53EF\u4EE5\u83B7\u53D6\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u5F88\u591A\u5BF9\u8C61\uFF0C\u5E76\u8FDB\u884C\u64CD\u4F5C\u3002",-1),r=e(`<h2 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h2><p><code>window</code> \u5BF9\u8C61\u4E0D\u4F46\u5145\u5F53\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u800C\u4E14\u8868\u793A\u6D4F\u89C8\u5668\u7A97\u53E3\u3002</p><p><code>window</code> \u5BF9\u8C61\u6709 <code>innerWidth</code> \u548C <code>innerHeight</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5185\u90E8\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002\u5185\u90E8\u5BBD\u9AD8\u662F\u6307\u9664\u53BB\u83DC\u5355\u680F\u3001\u5DE5\u5177\u680F\u3001\u8FB9\u6846\u7B49\u5360\u4F4D\u5143\u7D20\u540E\uFF0C\u7528\u4E8E\u663E\u793A\u7F51\u9875\u7684\u51C0\u5BBD\u9AD8\u3002</p><div class="custom-container info"><p class="custom-container-title">\u517C\u5BB9\u6027</p><p>IE &lt;= 8 \u4E0D\u652F\u6301\u3002</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u53EF\u4EE5\u8C03\u6574\u6D4F\u89C8\u5668\u7A97\u53E3\u5927\u5C0F\u8BD5\u8BD5:</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">window inner size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>window<span class="token punctuation">.</span>innerWidth<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> x </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>window<span class="token punctuation">.</span>innerHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u5E94\u7684\uFF0C\u8FD8\u6709\u4E00\u4E2A <code>outerWidth</code> \u548C <code>outerHeight</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u6574\u4E2A\u5BBD\u9AD8\u3002</p><h2 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> navigator</h2><p><code>navigator</code> \u5BF9\u8C61\u8868\u793A\u6D4F\u89C8\u5668\u7684\u4FE1\u606F\uFF0C\u6700\u5E38\u7528\u7684\u5C5E\u6027\u5305\u62EC:</p><ul><li><code>navigator.appName</code>: \u6D4F\u89C8\u5668\u540D\u79F0\uFF1B</li><li><code>navigator.appVersion</code>: \u6D4F\u89C8\u5668\u7248\u672C\uFF1B</li><li><code>navigator.language</code>: \u6D4F\u89C8\u5668\u8BBE\u7F6E\u7684\u8BED\u8A00\uFF1B</li><li><code>navigator.platform</code>: \u64CD\u4F5C\u7CFB\u7EDF\u7C7B\u578B\uFF1B</li><li><code>navigator.userAgent</code>: \u6D4F\u89C8\u5668\u8BBE\u5B9A\u7684 User-Agent \u5B57\u7B26\u4E32\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">appName = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>navigator<span class="token punctuation">.</span>appName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">appVersion = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>navigator<span class="token punctuation">.</span>appVersion<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">language = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>navigator<span class="token punctuation">.</span>language<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">platform = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>navigator<span class="token punctuation">.</span>platform<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">userAgent = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>navigator<span class="token punctuation">.</span>userAgent<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u6CE8\u610F\uFF0C<code>navigator</code> \u7684\u4FE1\u606F\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u88AB\u7528\u6237\u4FEE\u6539\uFF0C\u6240\u4EE5 JavaScript \u8BFB\u53D6\u7684\u503C\u4E0D\u4E00\u5B9A\u662F\u6B63\u786E\u7684\u3002\u5F88\u591A\u521D\u5B66\u8005\u4E3A\u4E86\u9488\u5BF9\u4E0D\u540C\u6D4F\u89C8\u5668\u7F16\u5199\u4E0D\u540C\u7684\u4EE3\u7801\uFF0C\u559C\u6B22\u7528 <code>if</code> \u5224\u65AD\u6D4F\u89C8\u5668\u7248\u672C\uFF0C\u4F8B\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> width<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getIEVersion</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">)</span> width <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
<span class="token keyword">else</span> width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u8FD9\u6837\u65E2\u53EF\u80FD\u5224\u65AD\u4E0D\u51C6\u786E\uFF0C\u4E5F\u5F88\u96BE\u7EF4\u62A4\u4EE3\u7801\u3002\u6B63\u786E\u7684\u65B9\u6CD5\u662F\u5145\u5206\u5229\u7528 JavaScript \u5BF9\u4E0D\u5B58\u5728\u5C5E\u6027\u8FD4\u56DE <code>undefined</code> \u7684\u7279\u6027\uFF0C\u76F4\u63A5\u7528\u77ED\u8DEF\u8FD0\u7B97\u7B26 <code>||</code> \u8BA1\u7B97:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> screen</h2><p><code>screen</code> \u5BF9\u8C61\u8868\u793A\u5C4F\u5E55\u7684\u4FE1\u606F\uFF0C\u5E38\u7528\u7684\u5C5E\u6027\u6709:</p><ul><li><code>screen.width</code>: \u5C4F\u5E55\u5BBD\u5EA6\uFF0C\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\uFF1B</li><li><code>screen.height</code>: \u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\uFF1B</li><li><code>screen.colorDepth</code>: \u8FD4\u56DE\u989C\u8272\u4F4D\u6570\uFF0C\u5982 8\u300116\u300124\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Screen size = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>screen<span class="token punctuation">.</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> x </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>screen<span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2><p><code>location</code> \u5BF9\u8C61\u8868\u793A\u5F53\u524D\u9875\u9762\u7684 URL \u4FE1\u606F\u3002\u4F8B\u5982\uFF0C\u4E00\u4E2A\u5B8C\u6574\u7684 URL:</p><p><code>https://www.example.com:8080/path/index.html?a=1&amp;b=2#TOP</code> \u53EF\u4EE5\u7528 <code>location.href</code> \u83B7\u53D6\u3002\u8981\u83B7\u5F97 URL \u5404\u4E2A\u90E8\u5206\u7684\u503C\uFF0C\u53EF\u4EE5\u8FD9\u4E48\u5199:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>location<span class="token punctuation">.</span>protocol<span class="token punctuation">;</span> <span class="token comment">// &#39;http&#39;</span>
location<span class="token punctuation">.</span>host<span class="token punctuation">;</span> <span class="token comment">// &#39;www.example.com&#39;</span>
location<span class="token punctuation">.</span>port<span class="token punctuation">;</span> <span class="token comment">// &#39;8080&#39;</span>
location<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span> <span class="token comment">// &#39;/path/index.html&#39;</span>
location<span class="token punctuation">.</span>search<span class="token punctuation">;</span> <span class="token comment">// &#39;?a=1&amp;b=2&#39;</span>
location<span class="token punctuation">.</span>hash<span class="token punctuation">;</span> <span class="token comment">// &#39;TOP&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u52A0\u8F7D\u4E00\u4E2A\u65B0\u9875\u9762\uFF0C\u53EF\u4EE5\u8C03\u7528 <code>location.assign()</code>\u3002\u5982\u679C\u8981\u91CD\u65B0\u52A0\u8F7D\u5F53\u524D\u9875\u9762\uFF0C\u8C03\u7528 <code>location.reload()</code> \u65B9\u6CD5\u975E\u5E38\u65B9\u4FBF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&quot;\u91CD\u65B0\u52A0\u8F7D\u5F53\u524D\u9875&quot;</span> <span class="token operator">+</span> location<span class="token punctuation">.</span>href <span class="token operator">+</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u4E00\u4E2A\u65B0\u7684 URL \u5730\u5740</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> document</h2><p><code>document</code> \u5BF9\u8C61\u8868\u793A\u5F53\u524D\u9875\u9762\u3002\u7531\u4E8E HTML \u5728\u6D4F\u89C8\u5668\u4E2D\u4EE5 DOM \u5F62\u5F0F\u8868\u793A\u4E3A\u6811\u5F62\u7ED3\u6784\uFF0C<code>document</code> \u5BF9\u8C61\u5C31\u662F\u6574\u4E2A DOM \u6811\u7684\u6839\u8282\u70B9\u3002</p><p><code>document</code> \u7684 title \u5C5E\u6027\u662F\u4ECE HTML \u6587\u6863\u4E2D\u7684 <code>&lt;title&gt;xxx&lt;/title&gt;</code> \u8BFB\u53D6\u7684\uFF0C\u4F46\u662F\u53EF\u4EE5\u52A8\u6001\u6539\u53D8:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&quot;\u52AA\u529B\u5B66\u4E60JavaScript!&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u67E5\u627E DOM \u6811\u7684\u67D0\u4E2A\u8282\u70B9\uFF0C\u9700\u8981\u4ECE document \u5BF9\u8C61\u5F00\u59CB\u67E5\u627E\u3002\u6700\u5E38\u7528\u7684\u67E5\u627E\u662F\u6839\u636E ID \u548C Tag Name\u3002</p><p>\u6211\u4EEC\u5148\u51C6\u5907 HTML \u6570\u636E:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drink-menu<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>solid 1px #ccc<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>6px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>\u6469\u5361<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>\u70ED\u6469\u5361\u5496\u5561<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>\u9178\u5976<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>\u5317\u4EAC\u8001\u9178\u5976<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>\u679C\u6C41<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>\u9C9C\u69A8\u82F9\u679C\u6C41<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528 <code>document</code> \u5BF9\u8C61\u63D0\u4F9B\u7684 <code>getElementById()</code> \u548C <code>getElementsByTagName()</code> \u53EF\u4EE5\u6309 ID \u83B7\u5F97\u4E00\u4E2A DOM \u8282\u70B9\u548C\u6309 Tag \u540D\u79F0\u83B7\u5F97\u4E00\u7EC4 DOM \u8282\u70B9:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> menu <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;drink-menu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> drinks <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;dt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s<span class="token punctuation">,</span> menu<span class="token punctuation">,</span> drinks<span class="token punctuation">;</span>

menu <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;drink-menu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
menu<span class="token punctuation">.</span>tagName<span class="token punctuation">;</span> <span class="token comment">// &#39;DL&#39;</span>

drinks <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;dt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token string">&quot;\u63D0\u4F9B\u7684\u996E\u6599\u6709:&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> drinks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> s <span class="token operator">=</span> s <span class="token operator">+</span> drinks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6469\u5361
\u70ED\u6469\u5361\u5496\u5561
\u9178\u5976
\u5317\u4EAC\u8001\u9178\u5976
\u679C\u6C41
\u9C9C\u69A8\u82F9\u679C\u6C41
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>document</code> \u5BF9\u8C61\u8FD8\u6709\u4E00\u4E2A <code>cookie</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D\u9875\u9762\u7684 Cookie\u3002</p><p>Cookie \u662F\u7531\u670D\u52A1\u5668\u53D1\u9001\u7684 <code>key-value</code> \u6807\u793A\u7B26\u3002\u56E0\u4E3A HTTP \u534F\u8BAE\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4F46\u662F\u670D\u52A1\u5668\u8981\u533A\u5206\u5230\u5E95\u662F\u54EA\u4E2A\u7528\u6237\u53D1\u8FC7\u6765\u7684\u8BF7\u6C42\uFF0C\u5C31\u53EF\u4EE5\u7528 Cookie \u6765\u533A\u5206\u3002\u5F53\u4E00\u4E2A\u7528\u6237\u6210\u529F\u767B\u5F55\u540E\uFF0C\u670D\u52A1\u5668\u53D1\u9001\u4E00\u4E2A Cookie \u7ED9\u6D4F\u89C8\u5668\uFF0C\u4F8B\u5982 <code>user=ABC123XYZ</code> (\u52A0\u5BC6\u7684\u5B57\u7B26\u4E32)...\uFF0C\u6B64\u540E\uFF0C\u6D4F\u89C8\u5668\u8BBF\u95EE\u8BE5\u7F51\u7AD9\u65F6\uFF0C\u4F1A\u5728\u8BF7\u6C42\u5934\u9644\u4E0A\u8FD9\u4E2A Cookie\uFF0C\u670D\u52A1\u5668\u6839\u636E Cookie \u5373\u53EF\u533A\u5206\u51FA\u7528\u6237\u3002</p><p>Cookie \u8FD8\u53EF\u4EE5\u5B58\u50A8\u7F51\u7AD9\u7684\u4E00\u4E9B\u8BBE\u7F6E\uFF0C\u4F8B\u5982\uFF0C\u9875\u9762\u663E\u793A\u7684\u8BED\u8A00\u7B49\u7B49\u3002</p><p>JavaScript \u53EF\u4EE5\u901A\u8FC7 <code>document.cookie</code> \u8BFB\u53D6\u5230\u5F53\u524D\u9875\u9762\u7684 Cookie:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie<span class="token punctuation">;</span> <span class="token comment">// &#39;v=123; remember=true; prefer=zh&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7531\u4E8E JavaScript \u80FD\u8BFB\u53D6\u5230\u9875\u9762\u7684 Cookie\uFF0C\u800C\u7528\u6237\u7684\u767B\u5F55\u4FE1\u606F\u901A\u5E38\u4E5F\u5B58\u5728 Cookie \u4E2D\uFF0C\u8FD9\u5C31\u9020\u6210\u4E86\u5DE8\u5927\u7684\u5B89\u5168\u9690\u60A3\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5728 HTML \u9875\u9762\u4E2D\u5F15\u5165\u7B2C\u4E09\u65B9\u7684 JavaScript \u4EE3\u7801\u662F\u5141\u8BB8\u7684:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5F53\u524D\u9875\u9762\u5728 www.example.com --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.foo.com/jquery.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),k={href:"http://www.foo.com",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},m=e('<p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u670D\u52A1\u5668\u5728\u8BBE\u7F6E Cookie \u65F6\u53EF\u4EE5\u4F7F\u7528 <code>httpOnly</code>\uFF0C\u8BBE\u5B9A\u4E86 httpOnly \u7684 Cookie \u5C06\u4E0D\u80FD\u88AB JavaScript \u8BFB\u53D6\u3002\u8FD9\u4E2A\u884C\u4E3A\u7531\u6D4F\u89C8\u5668\u5B9E\u73B0\uFF0C\u4E3B\u6D41\u6D4F\u89C8\u5668\u5747\u652F\u6301 httpOnly \u9009\u9879\uFF0CIE \u4ECE IE6 SP1 \u5F00\u59CB\u652F\u6301</p><p>\u4E3A\u4E86\u786E\u4FDD\u5B89\u5168\uFF0C\u670D\u52A1\u5668\u7AEF\u5728\u8BBE\u7F6E Cookie \u65F6\uFF0C\u5E94\u8BE5\u59CB\u7EC8\u575A\u6301\u4F7F\u7528 <code>httpOnly</code>\u3002</p><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h2><p><code>history</code> \u5BF9\u8C61\u4FDD\u5B58\u4E86\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\uFF0CJavaScript \u53EF\u4EE5\u8C03\u7528 history \u5BF9\u8C61\u7684 <code>back()</code> \u6216 <code>forward ()</code>\uFF0C\u76F8\u5F53\u4E8E\u7528\u6237\u70B9\u51FB\u4E86\u6D4F\u89C8\u5668\u7684\u201C\u540E\u9000\u201D\u6216\u201C\u524D\u8FDB\u201D\u6309\u94AE\u3002</p><p>\u8FD9\u4E2A\u5BF9\u8C61\u5C5E\u4E8E\u5386\u53F2\u9057\u7559\u5BF9\u8C61\uFF0C\u5BF9\u4E8E\u73B0\u4EE3 Web \u9875\u9762\u6765\u8BF4\uFF0C\u7531\u4E8E\u5927\u91CF\u4F7F\u7528 Ajax \u548C\u9875\u9762\u4EA4\u4E92\uFF0C\u7B80\u5355\u7C97\u66B4\u5730\u8C03\u7528 <code>history.back()</code> \u53EF\u80FD\u4F1A\u8BA9\u7528\u6237\u611F\u5230\u975E\u5E38\u6124\u6012\u3002</p><p>\u65B0\u624B\u5F00\u59CB\u8BBE\u8BA1 Web \u9875\u9762\u65F6\u559C\u6B22\u5728\u767B\u5F55\u9875\u767B\u5F55\u6210\u529F\u65F6\u8C03\u7528 <code>history.back()</code>\uFF0C\u8BD5\u56FE\u56DE\u5230\u767B\u5F55\u524D\u7684\u9875\u9762\u3002\u8FD9\u662F\u4E00\u79CD\u9519\u8BEF\u7684\u65B9\u6CD5\u3002</p>',6);function g(h,b){const a=l("ExternalLinkIcon");return o(),c("div",null,[d,i(" more "),r,s("p",null,[n("\u5982\u679C\u5F15\u5165\u7684\u7B2C\u4E09\u65B9\u7684 JavaScript \u4E2D\u5B58\u5728\u6076\u610F\u4EE3\u7801\uFF0C\u5219 "),s("a",k,[n("www.foo.com"),t(a)]),n(" \u7F51\u7AD9\u5C06\u76F4\u63A5\u83B7\u53D6\u5230 "),s("a",v,[n("www.example.com"),t(a)]),n(" \u7F51\u7AD9\u7684\u7528\u6237\u767B\u5F55\u4FE1\u606F\u3002")]),m])}const x=p(u,[["render",g],["__file","browser-object.html.vue"]]);export{x as default};
