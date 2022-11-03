import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,d as o,a as n,b as a,f as s}from"./app.70f43444.js";const l={},c=n("p",null,[a("WXML \u4E2D\u7684\u52A8\u6001\u6570\u636E\u5747\u6765\u81EA\u5BF9\u5E94 "),n("code",null,"Page"),a(" \u7684 "),n("code",null,"data"),a("\u3002")],-1),i=s(`<h2 id="\u7B80\u5355\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7ED1\u5B9A" aria-hidden="true">#</a> \u7B80\u5355\u7ED1\u5B9A</h2><p>\u6570\u636E\u7ED1\u5B9A\u4F7F\u7528 Mustache \u8BED\u6CD5(\u53CC\u5927\u62EC\u53F7)\u5C06\u53D8\u91CF\u5305\u8D77\u6765\uFF0C\u53EF\u4EE5\u4F5C\u7528\u4E8E:</p><h3 id="\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9" aria-hidden="true">#</a> \u5185\u5BB9</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{ message }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Hello MINA!&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u4EF6\u5C5E\u6027-\u9700\u8981\u5728\u53CC\u5F15\u53F7\u4E4B\u5185" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5C5E\u6027-\u9700\u8981\u5728\u53CC\u5F15\u53F7\u4E4B\u5185" aria-hidden="true">#</a> \u7EC4\u4EF6\u5C5E\u6027(\u9700\u8981\u5728\u53CC\u5F15\u53F7\u4E4B\u5185)</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item-{{id}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u63A7\u5236\u5C5E\u6027-\u9700\u8981\u5728\u53CC\u5F15\u53F7\u4E4B\u5185" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5C5E\u6027-\u9700\u8981\u5728\u53CC\u5F15\u53F7\u4E4B\u5185" aria-hidden="true">#</a> \u63A7\u5236\u5C5E\u6027(\u9700\u8981\u5728\u53CC\u5F15\u53F7\u4E4B\u5185)</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">condition</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u952E\u5B57-\u9700\u8981\u5728\u53CC\u5F15\u53F7\u4E4B\u5185" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57-\u9700\u8981\u5728\u53CC\u5F15\u53F7\u4E4B\u5185" aria-hidden="true">#</a> \u5173\u952E\u5B57(\u9700\u8981\u5728\u53CC\u5F15\u53F7\u4E4B\u5185)</h3><ul><li><p><code>true</code>: <code>boolean</code> \u7C7B\u578B\u7684 <code>true</code>\uFF0C\u4EE3\u8868\u771F\u503C\u3002</p></li><li><p><code>false</code>: <code>boolean</code> \u7C7B\u578B\u7684 <code>false</code>\uFF0C\u4EE3\u8868\u5047\u503C\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>checkbox checked<span class="token operator">=</span><span class="token string">&quot;{{false}}&quot;</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>checkbox<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u4E0D\u8981\u76F4\u63A5\u5199 <code>checked=&quot;false&quot;</code>\uFF0C\u5176\u8BA1\u7B97\u7ED3\u679C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8F6C\u6210 <code>boolean</code> \u7C7B\u578B\u540E\u4EE3\u8868\u771F\u503C\u3002</p></div><h2 id="\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97" aria-hidden="true">#</a> \u8FD0\u7B97</h2>`,16),u=n("div",null,[n("p",null,[a("\u53EF\u4EE5\u5728 "),n("code",{"v-pre":""},"{{ }}"),a(" \u5185\u8FDB\u884C\u7B80\u5355\u7684\u8FD0\u7B97\uFF0C\u652F\u6301\u7684\u6709\u5982\u4E0B\u51E0\u79CD\u65B9\u5F0F:")])],-1),r=s(`<h3 id="\u4E09\u5143\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5143\u8FD0\u7B97" aria-hidden="true">#</a> \u4E09\u5143\u8FD0\u7B97</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{flag ? true : false}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Hidden <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7B97\u6570\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u7B97\u6570\u8FD0\u7B97" aria-hidden="true">#</a> \u7B97\u6570\u8FD0\u7B97</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{a + b}} + {{c}} + d <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>view</code> \u4E2D\u7684\u5185\u5BB9\u4E3A <code>3 + 3 + d</code>\u3002</p><h3 id="\u903B\u8F91\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u5224\u65AD" aria-hidden="true">#</a> \u903B\u8F91\u5224\u65AD</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{length &gt; 5}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B57\u7B26\u4E32\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u8FD0\u7B97" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u8FD0\u7B97</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{&quot;hello&quot; + name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;MINA&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u8DEF\u5F84\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8DEF\u5F84\u8FD0\u7B97" aria-hidden="true">#</a> \u6570\u636E\u8DEF\u5F84\u8FD0\u7B97</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{object.key}} {{array[0]}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">object</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;Hello &quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;MINA&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408" aria-hidden="true">#</a> \u7EC4\u5408</h2><p>\u4E5F\u53EF\u4EE5\u5728 Mustache \u5185\u76F4\u63A5\u8FDB\u884C\u7EC4\u5408\uFF0C\u6784\u6210\u65B0\u7684\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u3002</p><h3 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[zero, 1, 2, 3, 4]}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{item}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">zero</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u7EC4\u5408\u6210\u6570\u7EC4 <code>[0, 1, 2, 3, 4]</code>\u3002</p><h3 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>objectCombine<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{for: a, bar: b}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u7EC4\u5408\u6210\u7684\u5BF9\u8C61\u662F <code>{for: 1, bar: 2}</code></p><p>\u4E5F\u53EF\u4EE5\u7528\u6269\u5C55\u8FD0\u7B97\u7B26 <code>...</code> \u6765\u5C06\u4E00\u4E2A\u5BF9\u8C61\u5C55\u5F00</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>objectCombine<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{...obj1, ...obj2, e: 5}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">obj1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">obj2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u7EC4\u5408\u6210\u7684\u5BF9\u8C61\u662F <code>{a: 1, b: 2, c: 3, d: 4, e: 5}</code>\u3002</p><p>\u5982\u679C\u5BF9\u8C61\u7684 <code>key</code> \u548C <code>value</code> \u76F8\u540C\uFF0C\u4E5F\u53EF\u4EE5\u95F4\u63A5\u5730\u8868\u8FBE\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>objectCombine<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{foo, bar}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&quot;my-foo&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&quot;my-bar&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u7EC4\u5408\u6210\u7684\u5BF9\u8C61\u662F <code>{foo: &#39;my-foo&#39;, bar:&#39;my-bar&#39;}</code>\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u4E0A\u8FF0\u65B9\u5F0F\u53EF\u4EE5\u968F\u610F\u7EC4\u5408\uFF0C\u4F46\u662F\u5982\u6709\u5B58\u5728\u53D8\u91CF\u540D\u76F8\u540C\u7684\u60C5\u51B5\uFF0C\u540E\u8FB9\u7684\u4F1A\u8986\u76D6\u524D\u9762\uFF0C\u5982:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>objectCombine<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{...obj1, ...obj2, a, c: 6}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">obj1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">obj2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u7EC4\u5408\u6210\u7684\u5BF9\u8C61\u662F <code>{a: 5, b: 3, c: 6}</code>\u3002</p></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u82B1\u62EC\u53F7\u548C\u5F15\u53F7\u4E4B\u95F4\u5982\u679C\u6709\u7A7A\u683C\uFF0C\u5C06\u6700\u7EC8\u88AB\u89E3\u6790\u6210\u4E3A\u5B57\u7B26\u4E32</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[1,2,3]}} <span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B49\u540C\u4E8E</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[1,2,3] + &#39; &#39;}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,34);function d(k,v){return e(),p("div",null,[c,o(" more "),i,u,r])}const b=t(l,[["render",d],["__file","data-bind.html.vue"]]);export{b as default};
