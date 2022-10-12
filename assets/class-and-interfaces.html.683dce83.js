import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as u,a as s,e as a,w as p,b as n,d as r,f as o,r as c}from"./app.cad6791d.js";const k={},d=s("p",null,"\u8FD9\u4E00\u7AE0\u4E3B\u8981\u4ECB\u7ECD\u63A5\u53E3\u7684\u53E6\u4E00\u4E2A\u7528\u9014\uFF0C\u5BF9\u7C7B\u7684\u4E00\u90E8\u5206\u884C\u4E3A\u8FDB\u884C\u62BD\u8C61\u3002",-1),v=o(`<h2 id="\u7C7B\u5B9E\u73B0\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5B9E\u73B0\u63A5\u53E3" aria-hidden="true">#</a> \u7C7B\u5B9E\u73B0\u63A5\u53E3</h2><p>\u5B9E\u73B0(implements)\u662F\u9762\u5411\u5BF9\u8C61\u4E2D\u7684\u4E00\u4E2A\u91CD\u8981\u6982\u5FF5\u3002\u4E00\u822C\u6765\u8BB2\uFF0C\u4E00\u4E2A\u7C7B\u53EA\u80FD\u7EE7\u627F\u81EA\u53E6\u4E00\u4E2A\u7C7B\uFF0C\u6709\u65F6\u5019\u4E0D\u540C\u7C7B\u4E4B\u95F4\u53EF\u4EE5\u6709\u4E00\u4E9B\u5171\u6709\u7684\u7279\u6027\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u628A\u7279\u6027\u63D0\u53D6\u6210\u63A5\u53E3(interfaces)\uFF0C\u7528 <code>implements</code> \u5173\u952E\u5B57\u6765\u5B9E\u73B0\u3002\u8FD9\u4E2A\u7279\u6027\u5927\u5927\u63D0\u9AD8\u4E86\u9762\u5411\u5BF9\u8C61\u7684\u7075\u6D3B\u6027\u3002</p><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u95E8\u662F\u4E00\u4E2A\u7C7B\uFF0C\u9632\u76D7\u95E8\u662F\u95E8\u7684\u5B50\u7C7B\u3002\u5982\u679C\u9632\u76D7\u95E8\u6709\u4E00\u4E2A\u62A5\u8B66\u5668\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u7684\u7ED9\u9632\u76D7\u95E8\u6DFB\u52A0\u4E00\u4E2A\u62A5\u8B66\u65B9\u6CD5\u3002\u8FD9\u65F6\u5019\u5982\u679C\u6709\u53E6\u4E00\u4E2A\u7C7B\uFF0C\u8F66\uFF0C\u4E5F\u6709\u62A5\u8B66\u5668\u7684\u529F\u80FD\uFF0C\u5C31\u53EF\u4EE5\u8003\u8651\u628A\u62A5\u8B66\u5668\u63D0\u53D6\u51FA\u6765\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u63A5\u53E3\uFF0C\u9632\u76D7\u95E8\u548C\u8F66\u90FD\u53BB\u5B9E\u73B0\u5B83:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Door</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SecurityDoor</span> <span class="token keyword">extends</span> <span class="token class-name">Door</span> <span class="token keyword">implements</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;SecurityDoor alert&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Car alert&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Light</span> <span class="token punctuation">{</span>
  <span class="token function">lightOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">lightOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Alarm</span><span class="token punctuation">,</span> Light <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Car alert&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">lightOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Car light on&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">lightOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Car light off&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C<code>Car</code> \u5B9E\u73B0\u4E86 <code>Alarm</code> \u548C <code>Light</code> \u63A5\u53E3\uFF0C\u65E2\u80FD\u62A5\u8B66\uFF0C\u4E5F\u80FD\u5F00\u5173\u8F66\u706F\u3002</p><h2 id="\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3\u7EE7\u627F\u63A5\u53E3</h2><p>\u63A5\u53E3\u4E0E\u63A5\u53E3\u4E4B\u95F4\u53EF\u4EE5\u662F\u7EE7\u627F\u5173\u7CFB:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">LightableAlarm</span> <span class="token keyword">extends</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">lightOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">lightOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>extends</code> \u4F7F <code>LightableAlarm</code> \u7EE7\u627F <code>Alarm</code>\u3002</p><h2 id="\u63A5\u53E3\u7EE7\u627F\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7EE7\u627F\u7C7B" aria-hidden="true">#</a> \u63A5\u53E3\u7EE7\u627F\u7C7B</h2><p>\u63A5\u53E3\u4E5F\u53EF\u4EE5\u7EE7\u627F\u7C7B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Point3d</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> point3d<span class="token operator">:</span> Point3d <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DF7\u5408\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408\u7C7B\u578B" aria-hidden="true">#</a> \u6DF7\u5408\u7C7B\u578B</h2>`,15),m=o(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchFunc</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> mySearch<span class="token operator">:</span> SearchFunc<span class="token punctuation">;</span>
<span class="token function-variable function">mySearch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>subString<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u65F6\u5019\uFF0C\u4E00\u4E2A\u51FD\u6570\u8FD8\u53EF\u4EE5\u6709\u81EA\u5DF1\u7684\u5C5E\u6027\u548C\u65B9\u6CD5:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  interval<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Counter <span class="token punctuation">{</span>
  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token operator">&lt;</span>Counter<span class="token operator">&gt;</span><span class="token keyword">function</span> <span class="token punctuation">(</span>start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  counter<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  counter<span class="token punctuation">.</span><span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> counter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">c</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">5.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,4),b={href:"http://www.typescriptlang.org/docs/handbook/interfaces.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html",target:"_blank",rel:"noopener noreferrer"};function h(g,y){const t=c("RouterLink"),e=c("ExternalLinkIcon");return i(),u("div",null,[s("p",null,[a(t,{to:"/ja/code/language/typescript/basics/type-of-object-interfaces.html"},{default:p(()=>[n("\u4E4B\u524D\u5B66\u4E60\u8FC7")]),_:1}),n("\uFF0C\u63A5\u53E3(Interfaces)\u53EF\u4EE5\u7528\u4E8E\u5BF9\u300C\u5BF9\u8C61\u7684\u5F62\u72B6(Shape)\u300D\u8FDB\u884C\u63CF\u8FF0\u3002")]),d,r(" more "),v,s("p",null,[a(t,{to:"/ja/code/language/typescript/basics/type-of-function.html#%E6%8E%A5%E5%8F%A3%E4%B8%AD%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9A%E4%B9%89"},{default:p(()=>[n("\u4E4B\u524D\u5B66\u4E60\u8FC7")]),_:1}),n("\uFF0C\u53EF\u4EE5\u4F7F\u7528\u63A5\u53E3\u7684\u65B9\u5F0F\u6765\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u9700\u8981\u7B26\u5408\u7684\u5F62\u72B6:")]),m,s("ul",null,[s("li",null,[s("a",b,[n("Interfaces"),a(e)]),n("("),s("a",f,[n("\u4E2D\u6587\u7248"),a(e)]),n(")")])])])}const x=l(k,[["render",h],["__file","class-and-interfaces.html.vue"]]);export{x as default};
