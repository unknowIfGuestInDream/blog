import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a,b as o,e as l,f as n,r as c}from"./app.6f239d00.js";const u={},i=n(`<blockquote><p>\u57FA\u7840\u5E93 2.9.3 \u5F00\u59CB\u652F\u6301</p></blockquote><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u6B64\u90E8\u5206\u5728\u521D\u6B65\u5B66\u4E60\u5C0F\u7A0B\u5E8F\u7684\u65F6\u5019\u76F4\u63A5\u7565\u8FC7\u5373\u53EF\u3002</p></div><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p>\u5728 WXML \u4E2D\uFF0C\u666E\u901A\u7684\u5C5E\u6027\u7684\u7ED1\u5B9A\u662F\u5355\u5411\u7684\u3002\u4F8B\u5982:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{value}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F7F\u7528 <code>this.setData({ value: &#39;leaf&#39; })</code> \u6765\u66F4\u65B0 value \uFF0C<code>this.data.value</code> \u548C\u8F93\u5165\u6846\u7684\u4E2D\u663E\u793A\u7684\u503C\u90FD\u4F1A\u88AB\u66F4\u65B0\u4E3A <code>leaf</code> \uFF1B\u4F46\u5982\u679C\u7528\u6237\u4FEE\u6539\u4E86\u8F93\u5165\u6846\u91CC\u7684\u503C\uFF0C\u5374\u4E0D\u4F1A\u540C\u65F6\u6539\u53D8 <code>this.data.value</code> \u3002</p><p>\u5982\u679C\u9700\u8981\u5728\u7528\u6237\u8F93\u5165\u7684\u540C\u65F6\u6539\u53D8 <code>this.data.value</code> \uFF0C\u9700\u8981\u501F\u52A9\u7B80\u6613\u53CC\u5411\u7ED1\u5B9A\u673A\u5236\u3002\u6B64\u65F6\uFF0C\u53EF\u4EE5\u5728\u5BF9\u5E94\u9879\u76EE\u4E4B\u524D\u52A0\u5165 <code>model:</code> \u524D\u7F00:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{value}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\uFF0C\u5982\u679C\u8F93\u5165\u6846\u7684\u503C\u88AB\u6539\u53D8\u4E86\uFF0C <code>this.data.value</code> \u4E5F\u4F1A\u540C\u65F6\u6539\u53D8\u3002\u540C\u65F6\uFF0C WXML \u4E2D\u6240\u6709\u7ED1\u5B9A\u4E86 value \u7684\u4F4D\u7F6E\u4E5F\u4F1A\u88AB\u4E00\u540C\u66F4\u65B0\uFF0C \u6570\u636E\u76D1\u542C\u5668 \u4E5F\u4F1A\u88AB\u6B63\u5E38\u89E6\u53D1\u3002</p>`,9),d={href:"https://developers.weixin.qq.com/s/8jXvobmV7vcj",target:"_blank",rel:"noopener noreferrer"},r=n(`<h2 id="\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236" aria-hidden="true">#</a> \u9650\u5236</h2><p>\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A\u7684\u8868\u8FBE\u5F0F\u6709\u5982\u4E0B\u9650\u5236:</p><ol><li><p>\u53EA\u80FD\u662F\u4E00\u4E2A\u5355\u4E00\u5B57\u6BB5\u7684\u7ED1\u5B9A\uFF0C\u5982</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u503C\u4E3A {{value}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ a + b }}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90FD\u662F\u975E\u6CD5\u7684\uFF1B</p></li><li><p>\u76EE\u524D\uFF0C\u5C1A\u4E0D\u80FD <code>data</code> \u8DEF\u5F84\uFF0C\u5982</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ a.b }}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u7684\u8868\u8FBE\u5F0F\u76EE\u524D\u6682\u4E0D\u652F\u6301\u3002</p></li></ol><h2 id="\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528</h2><h3 id="\u4F20\u9012\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u4F20\u9012\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> \u4F20\u9012\u53CC\u5411\u7ED1\u5B9A</h3><p>\u53CC\u5411\u7ED1\u5B9A\u540C\u6837\u53EF\u4EE5\u4F7F\u7528\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0A\u3002</p><p>\u5982\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// custom-component.js</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">myValue</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- custom-component.wxml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{myValue}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5C06\u81EA\u8EAB\u7684 <code>myValue</code> \u5C5E\u6027\u53CC\u5411\u7ED1\u5B9A\u5230\u4E86\u7EC4\u4EF6\u5185\u8F93\u5165\u6846\u7684 <code>value</code> \u5C5E\u6027\u4E0A\u3002\u8FD9\u6837\uFF0C\u5982\u679C\u9875\u9762\u8FD9\u6837\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name"><span class="token namespace">model:</span>my-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{pageValue}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u8F93\u5165\u6846\u7684\u503C\u53D8\u66F4\u65F6\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684 <code>myValue</code> \u5C5E\u6027\u4F1A\u540C\u65F6\u53D8\u66F4\uFF0C\u8FD9\u6837\uFF0C\u9875\u9762\u7684 <code>this.data.pageValue</code> \u4E5F\u4F1A\u540C\u65F6\u53D8\u66F4\uFF0C\u9875\u9762 WXML \u4E2D\u6240\u6709\u7ED1\u5B9A\u4E86 <code>pageValue</code> \u7684\u4F4D\u7F6E\u4E5F\u4F1A\u88AB\u4E00\u540C\u66F4\u65B0\u3002</p><h3 id="\u89E6\u53D1\u53CC\u5411\u7ED1\u5B9A\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1\u53CC\u5411\u7ED1\u5B9A\u66F4\u65B0" aria-hidden="true">#</a> \u89E6\u53D1\u53CC\u5411\u7ED1\u5B9A\u66F4\u65B0</h3><p>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u8FD8\u53EF\u4EE5\u81EA\u5DF1\u89E6\u53D1\u53CC\u5411\u7ED1\u5B9A\u66F4\u65B0\uFF0C\u505A\u6CD5\u5C31\u662F: \u4F7F\u7528 <code>setData</code> \u8BBE\u7F6E\u81EA\u8EAB\u7684\u5C5E\u6027\u3002\u4F8B\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// custom-component.js</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">myValue</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u66F4\u65B0 myValue</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">myValue</span><span class="token operator">:</span> <span class="token string">&quot;leaf&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u9875\u9762\u8FD9\u6837\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name"><span class="token namespace">model:</span>my-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{pageValue}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u7EC4\u4EF6\u4F7F\u7528 <code>setData</code> \u66F4\u65B0 <code>myValue</code> \u65F6\uFF0C\u9875\u9762\u7684 <code>this.data.pageValue</code> \u4E5F\u4F1A\u540C\u65F6\u53D8\u66F4\uFF0C\u9875\u9762 WXML \u4E2D\u6240\u6709\u7ED1\u5B9A\u4E86 <code>pageValue</code> \u7684\u4F4D\u7F6E\u4E5F\u4F1A\u88AB\u4E00\u540C\u66F4\u65B0\u3002</p>`,18);function m(k,v){const s=c("ExternalLinkIcon");return t(),p("div",null,[i,a("blockquote",null,[a("p",null,[a("a",d,[o("\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u9884\u89C8\u6548\u679C"),l(s)])])]),r])}const h=e(u,[["render",m],["__file","model.html.vue"]]);export{h as default};
