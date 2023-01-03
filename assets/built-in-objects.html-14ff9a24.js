import{_ as p,W as o,X as c,Y as n,Z as s,a0 as e,$ as i,a2 as t,E as r}from"./framework-fec69ff1.js";const l={},d={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,"内置对象是指根据标准在全局作用域(Global)上存在的对象。这里的标准是指 ECMAScript 和其他环境(比如 DOM)的标准。",-1),k=t(`<h2 id="ecmascript-的内置对象" tabindex="-1"><a class="header-anchor" href="#ecmascript-的内置对象" aria-hidden="true">#</a> ECMAScript 的内置对象</h2><p>ECMAScript 标准提供的内置对象有:</p><p><code>Boolean</code>、<code>Error</code>、<code>Date</code>、<code>RegExp</code> 等。</p><p>我们可以在 TypeScript 中将变量定义为这些类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> b<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> e<span class="token operator">:</span> Error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Error occurred&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d<span class="token operator">:</span> Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> r<span class="token operator">:</span> RegExp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="dom-和-bom-的内置对象" tabindex="-1"><a class="header-anchor" href="#dom-和-bom-的内置对象" aria-hidden="true">#</a> DOM 和 BOM 的内置对象</h2><p>DOM 和 BOM 提供的内置对象有:</p><p><code>Document</code>、<code>HTMLElement</code>、<code>Event</code>、<code>NodeList</code> 等。</p><p>TypeScript 中会经常用到这些类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> body<span class="token operator">:</span> HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
<span class="token keyword">let</span> allDiv<span class="token operator">:</span> NodeList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"typescript-核心库的定义文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typescript-核心库的定义文件","aria-hidden":"true"},"#"),s(" TypeScript 核心库的定义文件")],-1),y={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>当您在使用一些常用的方法的时候，TypeScript 实际上已经帮您做了很多类型判断的工作了，比如:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(1,14): error TS2345: Argument of type &#39;string&#39; is not assignable to parameter of type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，<code>Math.pow</code> 必须接受两个 <code>number</code> 类型的参数。事实上 <code>Math.pow</code> 的类型定义如下:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Returns the value of a base expression taken to a specified power.
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> The base value of the expression.
   * <span class="token keyword">@param</span> <span class="token parameter">y</span> The exponent value of the expression.
   */</span>
  <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再举一个 DOM 中的例子:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>targetCurrent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,17): error TS2339: Property &#39;targetCurrent&#39; does not exist on type &#39;MouseEvent&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，<code>addEventListener</code> 方法是在 TypeScript 核心库中定义的:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Document</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以 <code>e</code> 被推断成了 <code>MouseEvent</code>，而 <code>MouseEvent</code> 是没有 <code>targetCurrent</code> 属性的，所以报错了。</p><p>注意，TypeScript 核心库的定义中不包含 Node.js 部分。</p><h2 id="用-typescript-写-node-js" tabindex="-1"><a class="header-anchor" href="#用-typescript-写-node-js" aria-hidden="true">#</a> 用 TypeScript 写 Node.js</h2><p>Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @types/node --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,14),_={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"};function S(E,w){const a=r("ExternalLinkIcon");return o(),c("div",null,[n("p",null,[s("JavaScript 中有很多"),n("a",d,[s("内置对象"),e(a)]),s("，它们可以直接在 TypeScript 中当做定义好了的类型。")]),u,i(" more "),k,n("p",null,[s("更多的内置对象，可以查看 "),n("a",v,[s("MDN 的文档"),e(a)]),s("。")]),n("p",null,[s("而他们的定义文件，则在 "),n("a",m,[s("TypeScript 核心库的定义文件"),e(a)]),s("中。")]),b,n("p",null,[s("它们的定义文件同样在 "),n("a",h,[s("TypeScript 核心库的定义文件"),e(a)]),s("中。")]),g,n("p",null,[n("a",y,[s("TypeScript 核心库的定义文件"),e(a)]),s("中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。")]),f,n("ul",null,[n("li",null,[n("a",_,[s("内置对象"),e(a)])]),n("li",null,[n("a",x,[s("TypeScript 核心库的定义文件"),e(a)])])])])}const T=p(l,[["render",S],["__file","built-in-objects.html.vue"]]);export{T as default};
