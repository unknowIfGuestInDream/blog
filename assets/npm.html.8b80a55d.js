import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as e,d as i,a as n,f as p}from"./app.c23862ec.js";const t={},o=n("p",null,"\u4ECE\u5C0F\u7A0B\u5E8F\u57FA\u7840\u5E93\u7248\u672C 2.2.1 \u6216\u4EE5\u4E0A\u3001\u53CA\u5F00\u53D1\u8005\u5DE5\u5177 1.02.1808300 \u6216\u4EE5\u4E0A\u5F00\u59CB\uFF0C\u5C0F\u7A0B\u5E8F\u652F\u6301\u4F7F\u7528 npm \u5B89\u88C5\u7B2C\u4E09\u65B9\u5305\u3002",-1),c=n("p",null,"\u6B64\u6587\u6863\u8981\u6C42\u5F00\u53D1\u8005\u4EEC\u5BF9 npm \u6709\u4E00\u5B9A\u7684\u4E86\u89E3\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u518D\u53BB\u4ECB\u7ECD npm \u7684\u57FA\u672C\u529F\u80FD\u3002\u5982\u82E5\u4E4B\u524D\u672A\u63A5\u89E6\u8FC7 npm\uFF0C\u8BF7\u7FFB\u9605\u5B98\u65B9 npm \u6587\u6863\u8FDB\u884C\u5B66\u4E60\u3002",-1),l=p(`<h2 id="\u4F7F\u7528-npm-\u5305" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-npm-\u5305" aria-hidden="true">#</a> \u4F7F\u7528 npm \u5305</h2><ol><li><p>\u5728\u5C0F\u7A0B\u5E8F\u4E2D\u6267\u884C\u547D\u4EE4\u5B89\u88C5 npm \u5305:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u5904\u5E76\u6CA1\u6709\u5F3A\u5236\u8981\u6C42 <code>node_modules</code> \u5FC5\u987B\u5728\u5C0F\u7A0B\u5E8F\u6839\u76EE\u5F55\u4E0B(\u5373 <code>project.config.js</code> \u4E2D\u7684 <code>miniprogramRoot</code> \u5B57\u6BB5)\uFF0C\u4E5F\u53EF\u4EE5\u5B58\u5728\u4E8E\u5C0F\u7A0B\u5E8F\u6839\u76EE\u5F55\u4E0B\u7684\u5404\u4E2A\u5B50\u76EE\u5F55\u4E2D\u3002\u4F46\u662F\u4E0D\u5141\u8BB8 <code>node_modules</code> \u5728\u5C0F\u7A0B\u5E8F\u6839\u76EE\u5F55\u5916\u3002</p></li><li><p>\u70B9\u51FB\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u7684\u83DC\u5355\u680F: \u5DE5\u5177 --&gt; \u6784\u5EFA npm</p></li><li><p>\u52FE\u9009\u201C\u4F7F\u7528 npm \u6A21\u5757\u201D\u9009\u9879:</p></li><li><p>\u6784\u5EFA\u5B8C\u6210\u540E\u5373\u53EF\u4F7F\u7528 npm \u5305\u3002</p></li></ol><p><strong>js \u4E2D\u5F15\u5165 npm \u5305</strong>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> myPackage <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;packageName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> packageOther <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;packageName/other&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 npm \u5305\u4E2D\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;myPackage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;packageName&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;package-other&quot;</span><span class="token operator">:</span> <span class="token string">&quot;packageName/other&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u6B64\u5904\u4F7F\u7528 npm \u5305\u65F6\u5982\u679C\u53EA\u5F15\u5165\u5305\u540D\uFF0C\u5219\u9ED8\u8BA4\u5BFB\u627E\u5305\u540D\u4E0B\u7684 <code>index.js</code> \u6587\u4EF6\u6216\u8005 <code>index</code> \u7EC4\u4EF6\u3002</p></div><h2 id="\u53D1\u5E03-npm-\u5305" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03-npm-\u5305" aria-hidden="true">#</a> \u53D1\u5E03 npm \u5305</h2><h3 id="\u53D1\u5E03\u5C0F\u7A0B\u5E8F-npm-\u5305\u7684\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u5C0F\u7A0B\u5E8F-npm-\u5305\u7684\u7EA6\u675F" aria-hidden="true">#</a> \u53D1\u5E03\u5C0F\u7A0B\u5E8F npm \u5305\u7684\u7EA6\u675F</h3><p>\u8FD9\u91CC\u8981\u53D1\u5E03\u7684 npm \u5305\u662F\u7279\u6307\u4E13\u4E3A\u5C0F\u7A0B\u5E8F\u5B9A\u5236\u7684 npm \u5305(\u4E0B\u79F0\u5C0F\u7A0B\u5E8F npm \u5305)\u3002\u56E0\u4E3A\u5C0F\u7A0B\u5E8F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u7279\u6B8A\u6027\uFF0C\u539F\u6709\u7684 npm \u5305\u673A\u5236\u65E0\u6CD5\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u5BF9\u5C0F\u7A0B\u5E8F npm \u5305\u505A\u4E00\u4E9B\u7EA6\u675F:</p><ol><li><p>\u5C0F\u7A0B\u5E8F npm \u5305\u8981\u6C42\u6839\u76EE\u5F55\u4E0B\u5FC5\u987B\u6709\u6784\u5EFA\u6587\u4EF6\u751F\u6210\u76EE\u5F55(\u9ED8\u8BA4\u4E3A miniprogram_dist \u76EE\u5F55)\uFF0C\u6B64\u76EE\u5F55\u53EF\u4EE5\u901A\u8FC7\u5728 package.json \u6587\u4EF6\u4E2D\u65B0\u589E\u4E00\u4E2A miniprogram \u5B57\u6BB5\u6765\u6307\u5B9A\uFF0C\u6BD4\u5982:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;miniprogram-custom-component&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;miniprogram&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5C0F\u7A0B\u5E8F npm \u5305\u91CC\u53EA\u6709\u6784\u5EFA\u6587\u4EF6\u751F\u6210\u76EE\u5F55\u4F1A\u88AB\u7B97\u5165\u5C0F\u7A0B\u5E8F\u5305\u7684\u5360\u7528\u7A7A\u95F4\uFF0C\u4E0A\u4F20\u5C0F\u7A0B\u5E8F\u4EE3\u7801\u65F6\u4E5F\u53EA\u4F1A\u4E0A\u4F20\u8BE5\u76EE\u5F55\u7684\u4EE3\u7801\u3002\u5982\u679C\u5C0F\u7A0B\u5E8F npm \u5305\u6709\u4E00\u4E9B\u6D4B\u8BD5\u3001\u6784\u5EFA\u76F8\u5173\u7684\u4EE3\u7801\u8BF7\u653E\u5230\u6784\u5EFA\u6587\u4EF6\u751F\u6210\u76EE\u5F55\u5916\u3002\u53E6\u5916\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>.npmignore</code> \u6587\u4EF6\u6765\u907F\u514D\u5C06\u4E00\u4E9B\u975E\u4E1A\u52A1\u4EE3\u7801\u6587\u4EF6\u53D1\u5E03\u5230 npm \u4E2D\u3002</p></li><li><p>\u6D4B\u8BD5\u3001\u6784\u5EFA\u76F8\u5173\u7684\u4F9D\u8D56\u8BF7\u653E\u5165 <code>devDependencies</code> \u5B57\u6BB5\u4E2D\u907F\u514D\u88AB\u4E00\u8D77\u6253\u5305\u5230\u5C0F\u7A0B\u5E8F\u5305\u4E2D\u3002</p></li></ol><h3 id="\u53D1\u5E03\u5176\u4ED6-npm-\u5305\u7684\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u5176\u4ED6-npm-\u5305\u7684\u7EA6\u675F" aria-hidden="true">#</a> \u53D1\u5E03\u5176\u4ED6 npm \u5305\u7684\u7EA6\u675F</h3><p>\u5982\u679C\u662F\u5DF2\u7ECF\u53D1\u5E03\u8FC7\u7684\u4E00\u4E9B npm \u5305\uFF0C\u56E0\u4E3A\u4E00\u4E9B\u539F\u56E0\u65E0\u6CD5\u6539\u9020\u6210\u5C0F\u7A0B\u5E8F npm \u5305\u7684\u7ED3\u6784\u7684\u8BDD\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5FAE\u8C03\u540E\u88AB\u4F7F\u7528\uFF0C\u4F46\u662F\u8BF7\u786E\u4FDD\u9075\u5FAA\u4EE5\u4E0B\u51E0\u70B9:</p><ol><li><p>\u53EA\u652F\u6301\u7EAF js \u5305\uFF0C\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002</p></li><li><p>\u5FC5\u987B\u6709\u5165\u53E3\u6587\u4EF6\uFF0C\u5373\u9700\u8981\u4FDD\u8BC1 package.json \u4E2D\u7684 main \u5B57\u6BB5\u662F\u6307\u5411\u4E00\u4E2A\u6B63\u786E\u7684\u5165\u53E3\uFF0C\u5982\u679C package.json \u4E2D\u6CA1\u6709 main \u5B57\u6BB5\uFF0C\u5219\u4EE5 npm \u5305\u6839\u76EE\u5F55\u4E0B\u7684 index.js \u4F5C\u4E3A\u5165\u53E3\u6587\u4EF6\u3002</p></li><li><p>\u6D4B\u8BD5\u3001\u6784\u5EFA\u76F8\u5173\u7684\u4F9D\u8D56\u8BF7\u653E\u5165 devDependencies \u5B57\u6BB5\u4E2D\u907F\u514D\u88AB\u4E00\u8D77\u6253\u5305\u5230\u5C0F\u7A0B\u5E8F\u5305\u4E2D\uFF0C\u8FD9\u4E00\u70B9\u548C\u5C0F\u7A0B\u5E8F npm \u5305\u7684\u8981\u6C42\u76F8\u540C\u3002</p></li><li><p>\u4E0D\u652F\u6301\u4F9D\u8D56 c++ addon\uFF0C\u4E0D\u652F\u6301\u4F9D\u8D56 Node.js \u7684\u5185\u7F6E\u5E93:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> addon <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./addon.node&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u652F\u6301!</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u652F\u6301!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u5BF9\u4E8E\u4E00\u4E9B\u7EAF js \u5B9E\u73B0\u7684 Node.js \u5185\u7F6E\u5E93(\u5982 path \u6A21\u5757)\uFF0C\u53EF\u4EE5\u901A\u8FC7\u989D\u5916\u5B89\u88C5\u5176\u4ED6\u5F00\u53D1\u8005\u5B9E\u73B0\u7684 npm \u5305\u6765\u652F\u6301\u3002</p></div></li><li><p>\u4F7F\u7528 <code>require</code> \u4F9D\u8D56\u7684\u65F6\u5019\u4E0B\u5217\u51E0\u79CD\u65B9\u5F0F\u4E5F\u662F\u4E0D\u5141\u8BB8\u7684:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E0D\u5141\u8BB8\u5C06 require \u8D4B\u503C\u7ED9\u5176\u4ED6\u53D8\u91CF\u540E\u518D\u4F7F\u7528\uFF0C\u4EE5\u4E0B\u4EE3\u7801\u4E0D\u4F1A\u53BB\u89E3\u6790\u51FA\u5177\u4F53\u4F9D\u8D56</span>
<span class="token keyword">let</span> r<span class="token punctuation">;</span>
r <span class="token operator">=</span> require<span class="token punctuation">;</span>
<span class="token function">r</span><span class="token punctuation">(</span><span class="token string">&quot;testa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> r2 <span class="token operator">=</span> require<span class="token punctuation">;</span>
<span class="token function">r2</span><span class="token punctuation">(</span><span class="token string">&quot;testa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0D\u5141\u8BB8 require \u4E00\u4E2A\u53D8\u91CF\uFF0C\u4EE5\u4E0B\u4EE3\u7801\u4F9D\u8D56\u8FD0\u884C\u65F6\uFF0C\u65E0\u6CD5\u89E3\u6790\u51FA\u5177\u4F53\u4F9D\u8D56</span>
<span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token string">&quot;testa&quot;</span><span class="token punctuation">;</span>
<span class="token function">require</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5C0F\u7A0B\u5E8F\u73AF\u5883\u6BD4\u8F83\u7279\u6B8A\uFF0C\u4E00\u4E9B\u5168\u5C40\u53D8\u91CF(\u5982 window \u5BF9\u8C61)\u548C\u6784\u9020\u5668(\u5982 Function \u6784\u9020\u5668)\u662F\u65E0\u6CD5\u4F7F\u7528\u7684\u3002</p></li></ol><h2 id="\u539F\u7406\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u4ECB\u7ECD" aria-hidden="true">#</a> \u539F\u7406\u4ECB\u7ECD</h2><p>\u4E3A\u4E86\u5E2E\u52A9\u5927\u5BB6\u66F4\u597D\u7684\u7406\u89E3\u53D1\u5E03 npm \u5305\u4E2D\u63D0\u5230\u7684\u5404\u79CD\u8981\u6C42\uFF0C\u8FD9\u91CC\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u539F\u7406:</p><ol><li><p>\u9996\u5148 <code>node_modules</code> \u76EE\u5F55\u4E0D\u4F1A\u53C2\u4E0E\u7F16\u8BD1\u3001\u4E0A\u4F20\u548C\u6253\u5305\u4E2D\uFF0C\u6240\u4EE5\u5C0F\u7A0B\u5E8F\u60F3\u8981\u4F7F\u7528 npm \u5305\u5FC5\u987B\u8D70\u4E00\u904D\u201C\u6784\u5EFA npm\u201D\u7684\u8FC7\u7A0B\uFF0C\u5728\u6700\u5916\u5C42\u7684 <code>node_modules</code> \u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u4F1A\u751F\u6210\u4E00\u4E2A <code>miniprogram_npm</code> \u76EE\u5F55\uFF0C\u91CC\u9762\u4F1A\u5B58\u653E\u6784\u5EFA\u6253\u5305\u540E\u7684 npm \u5305\uFF0C\u4E5F\u5C31\u662F\u5C0F\u7A0B\u5E8F\u771F\u6B63\u4F7F\u7528\u7684 npm \u5305\u3002</p></li><li><p>\u6784\u5EFA\u6253\u5305\u5206\u4E3A\u4E24\u79CD: \u5C0F\u7A0B\u5E8F npm \u5305\u4F1A\u76F4\u63A5\u62F7\u8D1D\u6784\u5EFA\u6587\u4EF6\u751F\u6210\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u5230 <code>miniprogram_npm</code> \u4E2D\uFF1B\u5176\u4ED6 npm \u5305\u5219\u4F1A\u4ECE\u5165\u53E3 js \u6587\u4EF6\u5F00\u59CB\u8D70\u4E00\u904D\u4F9D\u8D56\u5206\u6790\u548C\u6253\u5305\u8FC7\u7A0B(\u7C7B\u4F3C webpack)\u3002</p></li><li><p>\u5BFB\u627E npm \u5305\u7684\u8FC7\u7A0B\u548C npm \u7684\u5B9E\u73B0\u7C7B\u4F3C\uFF0C\u4ECE\u4F9D\u8D56 npm \u5305\u7684\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u5F00\u59CB\u9010\u5C42\u5F80\u5916\u627E\uFF0C\u76F4\u5230\u627E\u5230\u53EF\u7528\u7684 npm \u5305\u6216\u662F\u5C0F\u7A0B\u5E8F\u6839\u76EE\u5F55\u4E3A\u6B62\u3002\u4E0B\u9762\u7B80\u5355\u4ECB\u7ECD\u4E0B\u6784\u5EFA\u6253\u5305\u524D\u540E\u7684\u76EE\u5F55\u60C5\u51B5\uFF0C\u6784\u5EFA\u4E4B\u524D\u7684\u7ED3\u6784:</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>|--node_modules
|    |--testComp // \u5C0F\u7A0B\u5E8F npm \u5305
|    |    |--package.json
|    |    |--src
|    |    |--miniprogram_dist
|    |         |-index.js
|    |         |-index.json
|    |         |-index.wxss
|    |         |-index.wxml
|    |--testa // \u5176\u4ED6 npm \u5305
|         |--package.json
|         |--lib
|         |    |--entry.js
|         |--node_modules
|              |--testb
|                   |--package.json
|                   |--main.js
|--pages
|--app.js
|--app.wxss
|--app.json
|--project.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6784\u5EFA\u4E4B\u540E\u7684\u7ED3\u6784:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>|--node_modules
|--miniprogram_npm
|    |--testComp // \u5C0F\u7A0B\u5E8F npm \u5305
|    |    |-index.js
|    |    |-index.json
|    |    |-index.wxss
|    |    |-index.wxml
|    |--testa // \u5176\u4ED6 npm \u5305
|         |--index.js // \u6253\u5305\u540E\u7684\u6587\u4EF6
|         |--miniprogram_npm
|              |--testb
|                   |--index.js // \u6253\u5305\u540E\u7684\u6587\u4EF6
|                   |--index.js.map
|--pages
|--app.js
|--app.wxss
|--app.json
|--project.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u6253\u5305\u751F\u6210\u7684\u4EE3\u7801\u5728\u540C\u7EA7\u76EE\u5F55\u4E0B\u4F1A\u751F\u6210 source map \u6587\u4EF6\uFF0C\u65B9\u4FBF\u8FDB\u884C\u9006\u5411\u8C03\u8BD5\u3002</p></div>`,21);function d(r,u){return a(),e("div",null,[o,c,i(" more "),l])}const k=s(t,[["render",d],["__file","npm.html.vue"]]);export{k as default};
