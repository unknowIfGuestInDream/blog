import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,d as r,a as s,b as n,e as a,w as u,f as p,r as t}from"./app.6a7adab4.js";const d={},k=s("p",null,"\u5728 TypeScript \u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u63A5\u53E3(Interfaces)\u6765\u5B9A\u4E49\u5BF9\u8C61\u7684\u7C7B\u578B\u3002",-1),m=s("h2",{id:"\u4EC0\u4E48\u662F\u63A5\u53E3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4EC0\u4E48\u662F\u63A5\u53E3","aria-hidden":"true"},"#"),n(" \u4EC0\u4E48\u662F\u63A5\u53E3")],-1),v=s("p",null,"\u5728\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u4E2D\uFF0C\u63A5\u53E3(Interfaces)\u662F\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5B83\u662F\u5BF9\u884C\u4E3A\u7684\u62BD\u8C61\uFF0C\u800C\u5177\u4F53\u5982\u4F55\u884C\u52A8\u9700\u8981\u7531\u7C7B(classes)\u53BB\u5B9E\u73B0(implement)\u3002",-1),b=p(`<h2 id="\u7B80\u5355\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u7B80\u5355\u7684\u4F8B\u5B50</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u63A5\u53E3 <code>Person</code>\uFF0C\u63A5\u7740\u5B9A\u4E49\u4E86\u4E00\u4E2A\u53D8\u91CF <code>tom</code>\uFF0C\u5B83\u7684\u7C7B\u578B\u662F <code>Person</code>\u3002\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u7EA6\u675F\u4E86 <code>tom</code> \u7684\u5F62\u72B6\u5FC5\u987B\u548C\u63A5\u53E3 <code>Person</code> \u4E00\u81F4\u3002</p>`,3),g={href:"https://msdn.microsoft.com/en-us/library/8bc1fexb%28v=vs.71%29.aspx",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"I",-1),h=p(`<p>\u5B9A\u4E49\u7684\u53D8\u91CF\u6BD4\u63A5\u53E3\u5C11\u4E86\u4E00\u4E9B\u5C5E\u6027\u662F\u4E0D\u5141\u8BB8\u7684:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(6,5): error TS2322: Type &#39;{ name: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Property &#39;age&#39; is missing in type &#39;{ name: string; }&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u591A\u4E00\u4E9B\u5C5E\u6027\u4E5F\u662F\u4E0D\u5141\u8BB8\u7684:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(9,5): error TS2322: Type &#39;{ name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u89C1\uFF0C<strong>\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u53D8\u91CF\u7684\u5F62\u72B6\u5FC5\u987B\u548C\u63A5\u53E3\u7684\u5F62\u72B6\u4FDD\u6301\u4E00\u81F4</strong>\u3002</p><h2 id="\u53EF\u9009\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u5C5E\u6027" aria-hidden="true">#</a> \u53EF\u9009\u5C5E\u6027</h2><p>\u6709\u65F6\u6211\u4EEC\u5E0C\u671B\u4E0D\u8981\u5B8C\u5168\u5339\u914D\u4E00\u4E2A\u5F62\u72B6\uFF0C\u90A3\u4E48\u53EF\u4EE5\u7528\u53EF\u9009\u5C5E\u6027:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u9009\u5C5E\u6027\u7684\u542B\u4E49\u662F\u8BE5\u5C5E\u6027\u53EF\u4EE5\u4E0D\u5B58\u5728\u3002</p><p>\u8FD9\u65F6<strong>\u4ECD\u7136\u4E0D\u5141\u8BB8\u6DFB\u52A0\u672A\u5B9A\u4E49\u7684\u5C5E\u6027</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// examples/playground/index.ts(9,5): error TS2322: Type &#39;{ name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EFB\u610F\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u5C5E\u6027" aria-hidden="true">#</a> \u4EFB\u610F\u5C5E\u6027</h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u4E00\u4E2A\u63A5\u53E3\u5141\u8BB8\u6709\u4EFB\u610F\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>[propName: string]</code> \u5B9A\u4E49\u4E86\u4EFB\u610F\u5C5E\u6027\u53D6 <code>string</code> \u7C7B\u578B\u7684\u503C\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C<strong>\u4E00\u65E6\u5B9A\u4E49\u4E86\u4EFB\u610F\u5C5E\u6027\uFF0C\u90A3\u4E48\u786E\u5B9A\u5C5E\u6027\u548C\u53EF\u9009\u5C5E\u6027\u7684\u7C7B\u578B\u90FD\u5FC5\u987B\u662F\u5B83\u7684\u7C7B\u578B\u7684\u5B50\u96C6</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(3,5): error TS2411: Property &#39;age&#39; of type &#39;number&#39; is not assignable to string index type &#39;string&#39;.</span>
<span class="token comment">// index.ts(7,5): error TS2322: Type &#39;{ [x: string]: string | number; name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Index signatures are incompatible.</span>
<span class="token comment">//     Type &#39;string | number&#39; is not assignable to type &#39;string&#39;.</span>
<span class="token comment">//       Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u4EFB\u610F\u5C5E\u6027\u7684\u503C\u5141\u8BB8\u662F <code>string</code>\uFF0C\u4F46\u662F\u53EF\u9009\u5C5E\u6027 <code>age</code> \u7684\u503C\u5374\u662F <code>number</code>\uFF0C<code>number</code> \u4E0D\u662F <code>string</code> \u7684\u5B50\u5C5E\u6027\uFF0C\u6240\u4EE5\u62A5\u9519\u4E86\u3002</p><p>\u53E6\u5916\uFF0C\u5728\u62A5\u9519\u4FE1\u606F\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u6B64\u65F6 <code>{ name: &#39;Tom&#39;, age: 25, gender: &#39;male&#39; }</code> \u7684\u7C7B\u578B\u88AB\u63A8\u65AD\u6210\u4E86 <code>{ [x: string]: string | number; name: string; age: number; gender: string; }</code>\uFF0C\u8FD9\u662F\u8054\u5408\u7C7B\u578B\u548C\u63A5\u53E3\u7684\u7ED3\u5408\u3002</p><h2 id="\u53EA\u8BFB\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EA\u8BFB\u5C5E\u6027" aria-hidden="true">#</a> \u53EA\u8BFB\u5C5E\u6027</h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u5BF9\u8C61\u4E2D\u7684\u4E00\u4E9B\u5B57\u6BB5\u53EA\u80FD\u5728\u521B\u5EFA\u7684\u65F6\u5019\u88AB\u8D4B\u503C\uFF0C\u90A3\u4E48\u53EF\u4EE5\u7528 <code>readonly</code> \u5B9A\u4E49\u53EA\u8BFB\u5C5E\u6027:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">89757</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

tom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">9527</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(14,5): error TS2540: Cannot assign to &#39;id&#39; because it is a constant or a read-only property.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u4F7F\u7528 <code>readonly</code> \u5B9A\u4E49\u7684\u5C5E\u6027 <code>id</code> \u521D\u59CB\u5316\u540E\uFF0C\u53C8\u88AB\u8D4B\u503C\u4E86\uFF0C\u6240\u4EE5\u62A5\u9519\u4E86\u3002</p><p><strong>\u6CE8\u610F\uFF0C\u53EA\u8BFB\u7684\u7EA6\u675F\u5B58\u5728\u4E8E\u7B2C\u4E00\u6B21\u7ED9\u5BF9\u8C61\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u800C\u4E0D\u662F\u7B2C\u4E00\u6B21\u7ED9\u53EA\u8BFB\u5C5E\u6027\u8D4B\u503C\u7684\u65F6\u5019</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

tom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">89757</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(8,5): error TS2322: Type &#39;{ name: string; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Property &#39;id&#39; is missing in type &#39;{ name: string; gender: string; }&#39;.</span>
<span class="token comment">// index.ts(13,5): error TS2540: Cannot assign to &#39;id&#39; because it is a constant or a read-only property.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u62A5\u9519\u4FE1\u606F\u6709\u4E24\u5904\uFF0C\u7B2C\u4E00\u5904\u662F\u5728\u5BF9 <code>tom</code> \u8FDB\u884C\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u6CA1\u6709\u7ED9 <code>id</code> \u8D4B\u503C\u3002</p><p>\u7B2C\u4E8C\u5904\u662F\u5728\u7ED9 <code>tom.id</code> \u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u7531\u4E8E\u5B83\u662F\u53EA\u8BFB\u5C5E\u6027\uFF0C\u6240\u4EE5\u62A5\u9519\u4E86\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,29),f={href:"http://www.typescriptlang.org/docs/handbook/interfaces.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html",target:"_blank",rel:"noopener noreferrer"};function _(P,q){const o=t("RouterLink"),e=t("ExternalLinkIcon");return c(),l("div",null,[k,r(" more "),m,v,s("p",null,[n("TypeScript \u4E2D\u7684\u63A5\u53E3\u662F\u4E00\u4E2A\u975E\u5E38\u7075\u6D3B\u7684\u6982\u5FF5\uFF0C\u9664\u4E86\u53EF\u7528\u4E8E"),a(o,{to:"/en/code/language/typescript/advanced/class-and-interfaces.html#%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3"},{default:u(()=>[n("\u5BF9\u7C7B\u7684\u4E00\u90E8\u5206\u884C\u4E3A\u8FDB\u884C\u62BD\u8C61")]),_:1}),n("\u4EE5\u5916\uFF0C\u4E5F\u5E38\u7528\u4E8E\u5BF9\u300C\u5BF9\u8C61\u7684\u5F62\u72B6(Shape)\u300D\u8FDB\u884C\u63CF\u8FF0\u3002")]),b,s("p",null,[n("\u63A5\u53E3\u4E00\u822C\u9996\u5B57\u6BCD\u5927\u5199\u3002"),s("a",g,[n("\u6709\u7684\u7F16\u7A0B\u8BED\u8A00\u4E2D\u4F1A\u5EFA\u8BAE\u63A5\u53E3\u7684\u540D\u79F0\u52A0\u4E0A "),y,n(" \u524D\u7F00"),a(e)]),n("\u3002")]),h,s("ul",null,[s("li",null,[s("a",f,[n("Interfaces"),a(e)]),n("("),s("a",x,[n("\u4E2D\u6587\u7248"),a(e)]),n(")")])])])}const E=i(d,[["render",_],["__file","type-of-object-interfaces.html.vue"]]);export{E as default};
