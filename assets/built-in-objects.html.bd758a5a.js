import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as s,e,d as i,f as t,r}from"./app.9d9222aa.js";const l={},u={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"\u5185\u7F6E\u5BF9\u8C61\u662F\u6307\u6839\u636E\u6807\u51C6\u5728\u5168\u5C40\u4F5C\u7528\u57DF(Global)\u4E0A\u5B58\u5728\u7684\u5BF9\u8C61\u3002\u8FD9\u91CC\u7684\u6807\u51C6\u662F\u6307 ECMAScript \u548C\u5176\u4ED6\u73AF\u5883(\u6BD4\u5982 DOM)\u7684\u6807\u51C6\u3002",-1),k=t(`<h2 id="ecmascript-\u7684\u5185\u7F6E\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#ecmascript-\u7684\u5185\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a> ECMAScript \u7684\u5185\u7F6E\u5BF9\u8C61</h2><p>ECMAScript \u6807\u51C6\u63D0\u4F9B\u7684\u5185\u7F6E\u5BF9\u8C61\u6709:</p><p><code>Boolean</code>\u3001<code>Error</code>\u3001<code>Date</code>\u3001<code>RegExp</code> \u7B49\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u5728 TypeScript \u4E2D\u5C06\u53D8\u91CF\u5B9A\u4E49\u4E3A\u8FD9\u4E9B\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> b<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> e<span class="token operator">:</span> Error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Error occurred&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d<span class="token operator">:</span> Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> r<span class="token operator">:</span> RegExp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="dom-\u548C-bom-\u7684\u5185\u7F6E\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#dom-\u548C-bom-\u7684\u5185\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a> DOM \u548C BOM \u7684\u5185\u7F6E\u5BF9\u8C61</h2><p>DOM \u548C BOM \u63D0\u4F9B\u7684\u5185\u7F6E\u5BF9\u8C61\u6709:</p><p><code>Document</code>\u3001<code>HTMLElement</code>\u3001<code>Event</code>\u3001<code>NodeList</code> \u7B49\u3002</p><p>TypeScript \u4E2D\u4F1A\u7ECF\u5E38\u7528\u5230\u8FD9\u4E9B\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> body<span class="token operator">:</span> HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
<span class="token keyword">let</span> allDiv<span class="token operator">:</span> NodeList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"typescript-\u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typescript-\u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6","aria-hidden":"true"},"#"),s(" TypeScript \u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6")],-1),y={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>\u5F53\u60A8\u5728\u4F7F\u7528\u4E00\u4E9B\u5E38\u7528\u7684\u65B9\u6CD5\u7684\u65F6\u5019\uFF0CTypeScript \u5B9E\u9645\u4E0A\u5DF2\u7ECF\u5E2E\u60A8\u505A\u4E86\u5F88\u591A\u7C7B\u578B\u5224\u65AD\u7684\u5DE5\u4F5C\u4E86\uFF0C\u6BD4\u5982:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(1,14): error TS2345: Argument of type &#39;string&#39; is not assignable to parameter of type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>Math.pow</code> \u5FC5\u987B\u63A5\u53D7\u4E24\u4E2A <code>number</code> \u7C7B\u578B\u7684\u53C2\u6570\u3002\u4E8B\u5B9E\u4E0A <code>Math.pow</code> \u7684\u7C7B\u578B\u5B9A\u4E49\u5982\u4E0B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Returns the value of a base expression taken to a specified power.
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> The base value of the expression.
   * <span class="token keyword">@param</span> <span class="token parameter">y</span> The exponent value of the expression.
   */</span>
  <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u4E3E\u4E00\u4E2A DOM \u4E2D\u7684\u4F8B\u5B50:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>targetCurrent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,17): error TS2339: Property &#39;targetCurrent&#39; does not exist on type &#39;MouseEvent&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>addEventListener</code> \u65B9\u6CD5\u662F\u5728 TypeScript \u6838\u5FC3\u5E93\u4E2D\u5B9A\u4E49\u7684:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Document</span>
  <span class="token keyword">extends</span> <span class="token class-name">Node</span><span class="token punctuation">,</span>
    GlobalEventHandlers<span class="token punctuation">,</span>
    NodeSelector<span class="token punctuation">,</span>
    DocumentEvent <span class="token punctuation">{</span>
  <span class="token function">addEventListener</span><span class="token punctuation">(</span>
    type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token function-variable function">listener</span><span class="token operator">:</span> <span class="token punctuation">(</span>ev<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    useCapture<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5 <code>e</code> \u88AB\u63A8\u65AD\u6210\u4E86 <code>MouseEvent</code>\uFF0C\u800C <code>MouseEvent</code> \u662F\u6CA1\u6709 <code>targetCurrent</code> \u5C5E\u6027\u7684\uFF0C\u6240\u4EE5\u62A5\u9519\u4E86\u3002</p><p>\u6CE8\u610F\uFF0CTypeScript \u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u4E2D\u4E0D\u5305\u542B Node.js \u90E8\u5206\u3002</p><h2 id="\u7528-typescript-\u5199-node-js" tabindex="-1"><a class="header-anchor" href="#\u7528-typescript-\u5199-node-js" aria-hidden="true">#</a> \u7528 TypeScript \u5199 Node.js</h2><p>Node.js \u4E0D\u662F\u5185\u7F6E\u5BF9\u8C61\u7684\u4E00\u90E8\u5206\uFF0C\u5982\u679C\u60F3\u7528 TypeScript \u5199 Node.js\uFF0C\u5219\u9700\u8981\u5F15\u5165\u7B2C\u4E09\u65B9\u58F0\u660E\u6587\u4EF6:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @types/node --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,14),_={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"};function S(E,w){const a=r("ExternalLinkIcon");return o(),c("div",null,[n("p",null,[s("JavaScript \u4E2D\u6709\u5F88\u591A"),n("a",u,[s("\u5185\u7F6E\u5BF9\u8C61"),e(a)]),s("\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728 TypeScript \u4E2D\u5F53\u505A\u5B9A\u4E49\u597D\u4E86\u7684\u7C7B\u578B\u3002")]),d,i(" more "),k,n("p",null,[s("\u66F4\u591A\u7684\u5185\u7F6E\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u67E5\u770B "),n("a",v,[s("MDN \u7684\u6587\u6863"),e(a)]),s("\u3002")]),n("p",null,[s("\u800C\u4ED6\u4EEC\u7684\u5B9A\u4E49\u6587\u4EF6\uFF0C\u5219\u5728 "),n("a",m,[s("TypeScript \u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6"),e(a)]),s("\u4E2D\u3002")]),b,n("p",null,[s("\u5B83\u4EEC\u7684\u5B9A\u4E49\u6587\u4EF6\u540C\u6837\u5728 "),n("a",h,[s("TypeScript \u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6"),e(a)]),s("\u4E2D\u3002")]),g,n("p",null,[n("a",y,[s("TypeScript \u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6"),e(a)]),s("\u4E2D\u5B9A\u4E49\u4E86\u6240\u6709\u6D4F\u89C8\u5668\u73AF\u5883\u9700\u8981\u7528\u5230\u7684\u7C7B\u578B\uFF0C\u5E76\u4E14\u662F\u9884\u7F6E\u5728 TypeScript \u4E2D\u7684\u3002")]),f,n("ul",null,[n("li",null,[n("a",_,[s("\u5185\u7F6E\u5BF9\u8C61"),e(a)])]),n("li",null,[n("a",x,[s("TypeScript \u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6"),e(a)])])])])}const N=p(l,[["render",S],["__file","built-in-objects.html.vue"]]);export{N as default};
