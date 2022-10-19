import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as e,d as t,a as n,f as l}from"./app.7e7f0dc0.js";const p={},i=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u30D2\u30F3\u30C8"),n("p",null,"\u6B64\u90E8\u5206\u5728\u521D\u6B65\u5B66\u4E60\u5C0F\u7A0B\u5E8F\u7684\u65F6\u5019\u76F4\u63A5\u7565\u8FC7\u5373\u53EF\u3002")],-1),c=n("p",null,"WXS (WeiXin Script) \u662F\u5C0F\u7A0B\u5E8F\u7684\u4E00\u5957\u811A\u672C\u8BED\u8A00\uFF0C\u7ED3\u5408 WXML\uFF0C\u53EF\u4EE5\u6784\u5EFA\u51FA\u9875\u9762\u7684\u7ED3\u6784\u3002",-1),o=n("ol",null,[n("li",null,"WXS \u4E0D\u4F9D\u8D56\u4E8E\u8FD0\u884C\u65F6\u7684\u57FA\u7840\u5E93\u7248\u672C\uFF0C\u53EF\u4EE5\u5728\u6240\u6709\u7248\u672C\u7684\u5C0F\u7A0B\u5E8F\u4E2D\u8FD0\u884C\u3002"),n("li",null,"WXS \u4E0E JavaScript \u662F\u4E0D\u540C\u7684\u8BED\u8A00\uFF0C\u6709\u81EA\u5DF1\u7684\u8BED\u6CD5\uFF0C\u5E76\u4E0D\u548C JavaScript \u4E00\u81F4\u3002"),n("li",null,"WXS \u7684\u8FD0\u884C\u73AF\u5883\u548C\u5176\u4ED6 JavaScript \u4EE3\u7801\u662F\u9694\u79BB\u7684\uFF0CWXS \u4E2D\u4E0D\u80FD\u8C03\u7528\u5176\u4ED6 JavaScript \u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u51FD\u6570\uFF0C\u4E5F\u4E0D\u80FD\u8C03\u7528\u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u7684 API\u3002"),n("li",null,"WXS \u51FD\u6570\u4E0D\u80FD\u4F5C\u4E3A\u7EC4\u4EF6\u7684\u4E8B\u4EF6\u56DE\u8C03\u3002"),n("li",null,"\u7531\u4E8E\u8FD0\u884C\u73AF\u5883\u7684\u5DEE\u5F02\uFF0C\u5728 iOS \u8BBE\u5907\u4E0A\u5C0F\u7A0B\u5E8F\u5185\u7684 WXS \u4F1A\u6BD4 JavaScript \u4EE3\u7801\u5FEB 2 ~ 20 \u500D\u3002\u5728 Android \u8BBE\u5907\u4E0A\u4E8C\u8005\u8FD0\u884C\u6548\u7387\u65E0\u5DEE\u5F02\u3002")],-1),u=l(`<p>\u4EE5\u4E0B\u662F\u4E00\u4E9B\u4F7F\u7528 WXS \u7684\u7B80\u5355\u793A\u4F8B\uFF0C\u8981\u5B8C\u6574\u4E86\u89E3 WXS \u8BED\u6CD5\uFF0C\u8BF7\u53C2\u8003 WXS \u8BED\u6CD5\u53C2\u8003\u3002</p><h2 id="\u9875\u9762\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u6E32\u67D3" aria-hidden="true">#</a> \u9875\u9762\u6E32\u67D3</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
const msg = &quot;hello world&quot;;

module.exports.message = msg;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{m1.message}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9875\u9762\u8F93\u51FA:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5904\u7406" aria-hidden="true">#</a> \u6570\u636E\u5904\u7406</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// page.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>
<span class="token comment">&lt;!-- \u4E0B\u9762\u7684 getMax \u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4E14\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6700\u5927\u7684\u5143\u7D20\u7684\u503C --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
const getMax = array =&gt; {
  let max = undefined;
  for (let i = 0; i &lt; array.length; ++i) {
    max = max === undefined ?
      array[i] :
      (max &gt;= array[i] ? max : array[i]);
  }

  return max;
};

module.exports.getMax = getMax;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u8C03\u7528 wxs \u91CC\u9762\u7684 getMax \u51FD\u6570\uFF0C\u53C2\u6570\u4E3A page.js \u91CC\u9762\u7684 array --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{m1.getMax(array)}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9875\u9762\u8F93\u51FA:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function r(d,m){return a(),e("div",null,[i,c,o,t(" more "),u])}const g=s(p,[["render",r],["__file","wxs.html.vue"]]);export{g as default};
