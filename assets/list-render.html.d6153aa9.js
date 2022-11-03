import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,a as n,b as o,e as c,f as s,r as l}from"./app.70f43444.js";const u={},i=s(`<h2 id="wx-for" tabindex="-1"><a class="header-anchor" href="#wx-for" aria-hidden="true">#</a> wx:for</h2><p>\u5728\u7EC4\u4EF6\u4E0A\u4F7F\u7528 <code>wx:for</code> \u63A7\u5236\u5C5E\u6027\u7ED1\u5B9A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5373\u53EF\u4F7F\u7528\u6570\u7EC4\u4E2D\u5404\u9879\u7684\u6570\u636E\u91CD\u590D\u6E32\u67D3\u8BE5\u7EC4\u4EF6\u3002</p><p>\u9ED8\u8BA4\u6570\u7EC4\u7684\u5F53\u524D\u9879\u7684\u4E0B\u6807\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A <code>index</code>\uFF0C\u6570\u7EC4\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A <code>item</code></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{array}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{index}}: {{item.message}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>wx:for-item</code> \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u5143\u7D20\u7684\u53D8\u91CF\u540D\uFF0C</p><p>\u4F7F\u7528 <code>wx:for-index</code> \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u4E0B\u6807\u7684\u53D8\u91CF\u540D:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{array}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>idx<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itemName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{idx}}: {{itemName.message}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>wx:for</code> \u4E5F\u53EF\u4EE5\u5D4C\u5957\uFF0C\u4E0B\u8FB9\u662F\u4E00\u4E2A\u4E5D\u4E5D\u4E58\u6CD5\u8868</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>j<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{i &lt;= j}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{i}} * {{j}} = {{i * j}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="block-wx-for" tabindex="-1"><a class="header-anchor" href="#block-wx-for" aria-hidden="true">#</a> block wx:for</h2><p>\u7C7B\u4F3C <code>block wx:if</code>\uFF0C\u4E5F\u53EF\u4EE5\u5C06 <code>wx:for</code> \u7528\u5728 <code>&lt;block /&gt;</code> \u6807\u7B7E\u4E0A\uFF0C\u4EE5\u6E32\u67D3\u4E00\u4E2A\u5305\u542B\u591A\u8282\u70B9\u7684\u7ED3\u6784\u5757\u3002\u4F8B\u5982:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[1, 2, 3]}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{index}}: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{item}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-key" tabindex="-1"><a class="header-anchor" href="#wx-key" aria-hidden="true">#</a> wx:key</h2><p>\u5982\u679C\u5217\u8868\u4E2D\u9879\u76EE\u7684\u4F4D\u7F6E\u4F1A\u52A8\u6001\u6539\u53D8\u6216\u8005\u6709\u65B0\u7684\u9879\u76EE\u6DFB\u52A0\u5230\u5217\u8868\u4E2D\uFF0C\u5E76\u4E14\u5E0C\u671B\u5217\u8868\u4E2D\u7684\u9879\u76EE\u4FDD\u6301\u81EA\u5DF1\u7684\u7279\u5F81\u548C\u72B6\u6001(\u5982 input \u4E2D\u7684\u8F93\u5165\u5185\u5BB9\uFF0Cswitch \u7684\u9009\u4E2D\u72B6\u6001)\uFF0C\u9700\u8981\u4F7F\u7528 <code>wx:key</code> \u6765\u6307\u5B9A\u5217\u8868\u4E2D\u9879\u76EE\u7684\u552F\u4E00\u7684\u6807\u8BC6\u7B26\u3002</p><p><code>wx:key</code> \u7684\u503C\u4EE5\u4E24\u79CD\u5F62\u5F0F\u63D0\u4F9B</p><ol><li>\u5B57\u7B26\u4E32\uFF0C\u4EE3\u8868\u5728 <code>for</code> \u5FAA\u73AF\u7684 <code>array</code> \u4E2D <code>item</code> \u7684\u67D0\u4E2A <code>property</code>\uFF0C\u8BE5 <code>property</code> \u7684\u503C\u9700\u8981\u662F\u5217\u8868\u4E2D\u552F\u4E00\u7684\u5B57\u7B26\u4E32\u6216\u6570\u5B57\uFF0C\u4E14\u4E0D\u80FD\u52A8\u6001\u6539\u53D8\u3002</li><li>\u4FDD\u7559\u5173\u952E\u5B57 <code>*this</code> \u4EE3\u8868\u5728 <code>for</code> \u5FAA\u73AF\u4E2D\u7684 <code>item</code> \u672C\u8EAB\uFF0C\u8FD9\u79CD\u8868\u793A\u9700\u8981 <code>item</code> \u672C\u8EAB\u662F\u4E00\u4E2A\u552F\u4E00\u7684\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57.</li></ol><p>\u5F53\u6570\u636E\u6539\u53D8\u89E6\u53D1\u6E32\u67D3\u5C42\u91CD\u65B0\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u4F1A\u6821\u6B63\u5E26\u6709 <code>key</code> \u7684\u7EC4\u4EF6\uFF0C\u6846\u67B6\u4F1A\u786E\u4FDD\u4ED6\u4EEC\u88AB\u91CD\u65B0\u6392\u5E8F\uFF0C\u800C\u4E0D\u662F\u91CD\u65B0\u521B\u5EFA\uFF0C\u4EE5\u786E\u4FDD\u4F7F\u7EC4\u4EF6\u4FDD\u6301\u81EA\u8EAB\u7684\u72B6\u6001\uFF0C\u5E76\u4E14\u63D0\u9AD8\u5217\u8868\u6E32\u67D3\u65F6\u7684\u6548\u7387\u3002</p><p>\u5982\u4E0D\u63D0\u4F9B <code>wx:key</code>\uFF0C\u4F1A\u62A5\u4E00\u4E2A warning\uFF0C \u5982\u679C\u660E\u786E\u77E5\u9053\u8BE5\u5217\u8868\u662F\u9759\u6001\uFF0C\u6216\u8005\u4E0D\u5FC5\u5173\u6CE8\u5176\u987A\u5E8F\uFF0C\u53EF\u4EE5\u9009\u62E9\u5FFD\u7565\u3002</p><p>\u793A\u4F8B\u4EE3\u7801:</p>`,20),r={href:"https://developers.weixin.qq.com/s/tpg5tKmv6kZt",target:"_blank",rel:"noopener noreferrer"},k=s(`<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>switch</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{objectArray}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>unique<span class="token punctuation">&quot;</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>display: block;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{item.id}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>switch</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>switch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Switch <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addToFront<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Add to the front <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>switch</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{numberArray}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*this<span class="token punctuation">&quot;</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>display: block;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{item}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>switch</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addNumberToFront<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Add to the front <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">objectArray</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token string">&quot;unique_5&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token string">&quot;unique_4&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token string">&quot;unique_3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token string">&quot;unique_2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token string">&quot;unique_1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token string">&quot;unique_0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">numberArray</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>objectArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> x <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>objectArray<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>objectArray<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>objectArray<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>objectArray<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">objectArray</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>objectArray<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">addToFront</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>objectArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>objectArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> length<span class="token punctuation">,</span> <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">unique_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>objectArray
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">objectArray</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>objectArray<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">addNumberToFront</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numberArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numberArray<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numberArray
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">numberArray</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numberArray<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5F53 <code>wx:for</code> \u7684\u503C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4F1A\u5C06\u5B57\u7B26\u4E32\u89E3\u6790\u6210\u5B57\u7B26\u4E32\u6570\u7EC4</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>array<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B49\u540C\u4E8E</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[&#39;a&#39;,&#39;r&#39;,&#39;r&#39;,&#39;a&#39;,&#39;y&#39;]}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u82B1\u62EC\u53F7\u548C\u5F15\u53F7\u4E4B\u95F4\u5982\u679C\u6709\u7A7A\u683C\uFF0C\u5C06\u6700\u7EC8\u88AB\u89E3\u6790\u6210\u4E3A\u5B57\u7B26\u4E32</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[1,2,3]}} <span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B49\u540C\u4E8E</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[1,2,3] + &#39; &#39;}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
  {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,4);function d(v,m){const a=l("ExternalLinkIcon");return p(),e("div",null,[i,n("p",null,[n("a",r,[o("\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u9884\u89C8\u6548\u679C"),c(a)])]),k])}const y=t(u,[["render",d],["__file","list-render.html.vue"]]);export{y as default};
