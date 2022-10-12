import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as u,d as r,a as s,b as n,e as a,w as o,f as t,r as c}from"./app.c23862ec.js";const d={},k=s("p",null,"\u5728 TypeScript \u4E2D\uFF0C\u6570\u7EC4\u7C7B\u578B\u6709\u591A\u79CD\u5B9A\u4E49\u65B9\u5F0F\uFF0C\u6BD4\u8F83\u7075\u6D3B\u3002",-1),m=t(`<h2 id="\u300C\u7C7B\u578B-\u65B9\u62EC\u53F7\u300D\u8868\u793A\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u300C\u7C7B\u578B-\u65B9\u62EC\u53F7\u300D\u8868\u793A\u6CD5" aria-hidden="true">#</a> \u300C\u7C7B\u578B + \u65B9\u62EC\u53F7\u300D\u8868\u793A\u6CD5</h2><p>\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u662F\u4F7F\u7528\u300C\u7C7B\u578B + \u65B9\u62EC\u53F7\u300D\u6765\u8868\u793A\u6570\u7EC4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6570\u7EC4\u7684\u9879\u4E2D<strong>\u4E0D\u5141\u8BB8</strong>\u51FA\u73B0\u5176\u4ED6\u7684\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Type &#39;string&#39; is not assignable to type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6570\u7EC4\u7684\u4E00\u4E9B\u65B9\u6CD5\u7684\u53C2\u6570\u4E5F\u4F1A\u6839\u636E\u6570\u7EC4\u5728\u5B9A\u4E49\u65F6\u7EA6\u5B9A\u7684\u7C7B\u578B\u8FDB\u884C\u9650\u5236:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
fibonacci<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Argument of type &#39;&quot;8&quot;&#39; is not assignable to parameter of type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C<code>push</code> \u65B9\u6CD5\u53EA\u5141\u8BB8\u4F20\u5165 <code>number</code> \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F46\u662F\u5374\u4F20\u4E86\u4E00\u4E2A <code>&quot;8&quot;</code> \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u6240\u4EE5\u62A5\u9519\u4E86\u3002\u8FD9\u91CC <code>&quot;8&quot;</code> \u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u4F1A\u5728\u540E\u7EED\u7AE0\u8282\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\u3002</p><h2 id="\u6570\u7EC4\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u6CDB\u578B" aria-hidden="true">#</a> \u6570\u7EC4\u6CDB\u578B</h2><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u6CDB\u578B(Array Generic) <code>Array&lt;elemType&gt;</code> \u6765\u8868\u793A\u6570\u7EC4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> fibonacci<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),b=t(`<h2 id="\u7528\u63A5\u53E3\u8868\u793A\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u7528\u63A5\u53E3\u8868\u793A\u6570\u7EC4" aria-hidden="true">#</a> \u7528\u63A5\u53E3\u8868\u793A\u6570\u7EC4</h2><p>\u63A5\u53E3\u4E5F\u53EF\u4EE5\u7528\u6765\u63CF\u8FF0\u6570\u7EC4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">NumberArray</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> fibonacci<span class="token operator">:</span> NumberArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NumberArray</code> \u8868\u793A: \u53EA\u8981\u7D22\u5F15\u7684\u7C7B\u578B\u662F\u6570\u5B57\u65F6\uFF0C\u90A3\u4E48\u503C\u7684\u7C7B\u578B\u5FC5\u987B\u662F\u6570\u5B57\u3002</p><p>\u867D\u7136\u63A5\u53E3\u4E5F\u53EF\u4EE5\u7528\u6765\u63CF\u8FF0\u6570\u7EC4\uFF0C\u4F46\u662F\u6211\u4EEC\u4E00\u822C\u4E0D\u4F1A\u8FD9\u4E48\u505A\uFF0C\u56E0\u4E3A\u8FD9\u79CD\u65B9\u5F0F\u6BD4\u524D\u4E24\u79CD\u65B9\u5F0F\u590D\u6742\u591A\u4E86\u3002</p><p>\u4E0D\u8FC7\u6709\u4E00\u79CD\u60C5\u51B5\u4F8B\u5916\uFF0C\u90A3\u5C31\u662F\u5B83\u5E38\u7528\u6765\u8868\u793A\u7C7B\u6570\u7EC4\u3002</p><h2 id="\u7C7B\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u6570\u7EC4" aria-hidden="true">#</a> \u7C7B\u6570\u7EC4</h2><p>\u7C7B\u6570\u7EC4(Array-like Object)\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B\uFF0C\u6BD4\u5982 <code>arguments</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> args<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Type &#39;IArguments&#39; is missing the following properties from type &#39;number[]&#39;: pop, push, concat, join, and 24 more.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C<code>arguments</code> \u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u7C7B\u6570\u7EC4\uFF0C\u4E0D\u80FD\u7528\u666E\u901A\u7684\u6570\u7EC4\u7684\u65B9\u5F0F\u6765\u63CF\u8FF0\uFF0C\u800C\u5E94\u8BE5\u7528\u63A5\u53E3:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> args<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    callee<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u9664\u4E86\u7EA6\u675F\u5F53\u7D22\u5F15\u7684\u7C7B\u578B\u662F\u6570\u5B57\u65F6\uFF0C\u503C\u7684\u7C7B\u578B\u5FC5\u987B\u662F\u6570\u5B57\u4E4B\u5916\uFF0C\u4E5F\u7EA6\u675F\u4E86\u5B83\u8FD8\u6709 <code>length</code> \u548C <code>callee</code> \u4E24\u4E2A\u5C5E\u6027\u3002</p><p>\u4E8B\u5B9E\u4E0A\u5E38\u7528\u7684\u7C7B\u6570\u7EC4\u90FD\u6709\u81EA\u5DF1\u7684\u63A5\u53E3\u5B9A\u4E49\uFF0C\u5982 <code>IArguments</code>, <code>NodeList</code>, <code>HTMLCollection</code> \u7B49:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> args<span class="token operator">:</span> IArguments <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D <code>IArguments</code> \u662F TypeScript \u4E2D\u5B9A\u4E49\u597D\u4E86\u7684\u7C7B\u578B\uFF0C\u5B83\u5B9E\u9645\u4E0A\u5C31\u662F:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IArguments</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  callee<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),v=t(`<h2 id="any-\u5728\u6570\u7EC4\u4E2D\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#any-\u5728\u6570\u7EC4\u4E2D\u7684\u5E94\u7528" aria-hidden="true">#</a> any \u5728\u6570\u7EC4\u4E2D\u7684\u5E94\u7528</h2><p>\u4E00\u4E2A\u6BD4\u8F83\u5E38\u89C1\u7684\u505A\u6CD5\u662F\uFF0C\u7528 <code>any</code> \u8868\u793A\u6570\u7EC4\u4E2D\u5141\u8BB8\u51FA\u73B0\u4EFB\u610F\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;xcatliu&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> website<span class="token operator">:</span> <span class="token string">&quot;http://xcatliu.com&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,4),h={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html#array",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E6%95%B0%E7%BB%84",target:"_blank",rel:"noopener noreferrer"},y={href:"http://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"};function _(x,w){const p=c("RouterLink"),e=c("ExternalLinkIcon");return l(),u("div",null,[k,r(" more "),m,s("p",null,[n("\u5173\u4E8E\u6CDB\u578B\uFF0C\u53EF\u4EE5\u53C2\u8003"),a(p,{to:"/code/language/typescript/advanced/generics.html"},{default:o(()=>[n("\u6CDB\u578B")]),_:1}),n("\u4E00\u7AE0\u3002")]),b,s("p",null,[n("\u5173\u4E8E\u5185\u7F6E\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u53C2\u8003"),a(p,{to:"/code/language/typescript/basics/built-in-objects.html"},{default:o(()=>[n("\u5185\u7F6E\u5BF9\u8C61")]),_:1}),n("\u4E00\u7AE0\u3002")]),v,s("ul",null,[s("li",null,[s("a",h,[n("Basic Types # Array"),a(e)]),n("("),s("a",g,[n("\u4E2D\u6587\u7248"),a(e)]),n(")")]),s("li",null,[s("a",y,[n("Interfaces # Indexable Types"),a(e)]),n("("),s("a",f,[n("\u4E2D\u6587\u7248"),a(e)]),n(")")])])])}const q=i(d,[["render",_],["__file","type-of-array.html.vue"]]);export{q as default};
