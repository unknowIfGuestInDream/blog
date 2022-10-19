import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,d as e,a as n,b as s,f as o}from"./app.6f239d00.js";const c={},i=n("p",null,[s("\u5728 HTML \u8868\u5355\u4E2D\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u6587\u4EF6\u7684\u552F\u4E00\u63A7\u4EF6\u5C31\u662F "),n("code",null,'<input type="file">'),s("\u3002")],-1),l=o(`<div class="custom-container warning"><p class="custom-container-title">Note</p><p>\u5F53\u4E00\u4E2A\u8868\u5355\u5305\u542B <code>&lt;input type=&quot;file&quot;&gt;</code> \u65F6\uFF0C\u8868\u5355\u7684 <code>enctype</code> \u5FC5\u987B\u6307\u5B9A\u4E3A <code>multipart/form-data</code>\uFF0C<code>method</code> \u5FC5\u987B\u6307\u5B9A\u4E3A <code>post</code>\uFF0C\u6D4F\u89C8\u5668\u624D\u80FD\u6B63\u786E\u7F16\u7801\u5E76\u4EE5 <code>multipart/form-data</code> \u683C\u5F0F\u53D1\u9001\u8868\u5355\u7684\u6570\u636E\u3002</p></div><p>\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u6D4F\u89C8\u5668\u53EA\u5141\u8BB8\u7528\u6237\u70B9\u51FB <code>&lt;input type=&quot;file&quot;&gt;</code> \u6765\u9009\u62E9\u672C\u5730\u6587\u4EF6\uFF0C\u7528 JavaScript \u5BF9 <code>&lt;input type=&quot;file&quot;&gt;</code> \u7684 <code>value</code> \u8D4B\u503C\u662F\u6CA1\u6709\u4EFB\u4F55\u6548\u679C\u7684\u3002\u5F53\u7528\u6237\u9009\u62E9\u4E86\u4E0A\u4F20\u67D0\u4E2A\u6587\u4EF6\u540E\uFF0CJavaScript \u4E5F\u65E0\u6CD5\u83B7\u5F97\u8BE5\u6587\u4EF6\u7684\u771F\u5B9E\u8DEF\u5F84:</p><p>\u901A\u5E38\uFF0C\u4E0A\u4F20\u7684\u6587\u4EF6\u90FD\u7531\u540E\u53F0\u670D\u52A1\u5668\u5904\u7406\uFF0CJavaScript \u53EF\u4EE5\u5728\u63D0\u4EA4\u8868\u5355\u65F6\u5BF9\u6587\u4EF6\u6269\u5C55\u540D\u505A\u68C0\u67E5\uFF0C\u4EE5\u4FBF\u9632\u6B62\u7528\u6237\u4E0A\u4F20\u65E0\u6548\u683C\u5F0F\u7684\u6587\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> f <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-file-upload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> filename <span class="token operator">=</span> f<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;C:\\fakepath\\test.png&#39;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>
  <span class="token operator">!</span>filename <span class="token operator">||</span>
  <span class="token operator">!</span><span class="token punctuation">(</span>
    filename<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.jpg&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
    filename<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.png&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
    filename<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.gif&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Can only upload image file.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file-api" tabindex="-1"><a class="header-anchor" href="#file-api" aria-hidden="true">#</a> File API</h2><p>\u7531\u4E8E JavaScript \u5BF9\u7528\u6237\u4E0A\u4F20\u7684\u6587\u4EF6\u64CD\u4F5C\u975E\u5E38\u6709\u9650\uFF0C\u5C24\u5176\u662F\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\uFF0C\u4F7F\u5F97\u5F88\u591A\u9700\u8981\u64CD\u4F5C\u6587\u4EF6\u7684\u7F51\u9875\u4E0D\u5F97\u4E0D\u7528 Flash \u8FD9\u6837\u7684\u7B2C\u4E09\u65B9\u63D2\u4EF6\u6765\u5B9E\u73B0\u3002</p><p>\u968F\u7740 HTML5 \u7684\u666E\u53CA\uFF0C\u65B0\u589E\u7684 File API \u5141\u8BB8 JavaScript \u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\uFF0C\u83B7\u5F97\u66F4\u591A\u7684\u6587\u4EF6\u4FE1\u606F\u3002</p><p>HTML5 \u7684 File API \u63D0\u4F9B\u4E86 <code>File</code> \u548C <code>FileReader</code> \u4E24\u4E2A\u4E3B\u8981\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u83B7\u5F97\u6587\u4EF6\u4FE1\u606F\u5E76\u8BFB\u53D6\u6587\u4EF6\u3002</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u6F14\u793A\u4E86\u5982\u4F55\u8BFB\u53D6\u7528\u6237\u9009\u53D6\u7684\u56FE\u7247\u6587\u4EF6\uFF0C\u5E76\u5728\u4E00\u4E2A <code>&lt;div&gt;</code> \u4E2D\u9884\u89C8\u56FE\u50CF:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fileInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-image-file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> info <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-file-info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> preview <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-image-preview&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u76D1\u542Cchange\u4E8B\u4EF6:</span>
fileInput<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6E05\u9664\u80CC\u666F\u56FE\u7247:</span>
  preview<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u9009\u62E9:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fileInput<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    info<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;\u6CA1\u6709\u9009\u62E9\u6587\u4EF6&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u83B7\u53D6File\u5F15\u7528:</span>
  <span class="token keyword">const</span> file <span class="token operator">=</span> fileInput<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6File\u4FE1\u606F:</span>
  info<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6587\u4EF6: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;br&gt;\u5927\u5C0F: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token punctuation">.</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;br&gt;\u4FEE\u6539: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token punctuation">.</span>lastModifiedDate<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    file<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&quot;image/jpeg&quot;</span> <span class="token operator">&amp;&amp;</span>
    file<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&quot;image/png&quot;</span> <span class="token operator">&amp;&amp;</span>
    file<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&quot;image/gif&quot;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0D\u662F\u6709\u6548\u7684\u56FE\u7247\u6587\u4EF6!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u8BFB\u53D6\u6587\u4EF6:</span>
  <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span> <span class="token comment">// &#39;data:image/jpeg;base64,/9j/4AAQSk...(base64\u7F16\u7801)...&#39;</span>

    preview<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4EE5DataURL\u7684\u5F62\u5F0F\u8BFB\u53D6\u6587\u4EF6:</span>
  reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u6F14\u793A\u4E86\u5982\u4F55\u901A\u8FC7 HTML5 \u7684 File API \u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u3002\u4EE5 DataURL \u7684\u5F62\u5F0F\u8BFB\u53D6\u5230\u7684\u6587\u4EF6\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7C7B\u4F3C\u4E8E <code>data:image/jpeg;base64,/9j/4AAQSk...(base64\u7F16\u7801)...</code>\uFF0C\u5E38\u7528\u4E8E\u8BBE\u7F6E\u56FE\u50CF\u3002\u5982\u679C\u9700\u8981\u670D\u52A1\u5668\u7AEF\u5904\u7406\uFF0C\u628A\u5B57\u7B26\u4E32 <code>base64</code>,\u540E\u9762\u7684\u5B57\u7B26\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u5E76\u7528 base64 \u89E3\u7801\u5C31\u53EF\u4EE5\u5F97\u5230\u539F\u59CB\u6587\u4EF6\u7684\u4E8C\u8FDB\u5236\u5185\u5BB9\u3002</p><h2 id="\u56DE\u8C03" tabindex="-1"><a class="header-anchor" href="#\u56DE\u8C03" aria-hidden="true">#</a> \u56DE\u8C03</h2><p>\u4E0A\u9762\u7684\u4EE3\u7801\u8FD8\u6F14\u793A\u4E86 JavaScript \u7684\u4E00\u4E2A\u91CD\u8981\u7684\u7279\u6027\u5C31\u662F\u5355\u7EBF\u7A0B\u6267\u884C\u6A21\u5F0F\u3002\u5728 JavaScript \u4E2D\uFF0C\u6D4F\u89C8\u5668\u7684 JavaScript \u6267\u884C\u5F15\u64CE\u5728\u6267\u884C JavaScript \u4EE3\u7801\u65F6\uFF0C\u603B\u662F\u4EE5\u5355\u7EBF\u7A0B\u6A21\u5F0F\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EFB\u4F55\u65F6\u5019\uFF0CJavaScript \u4EE3\u7801\u90FD\u4E0D\u53EF\u80FD\u540C\u65F6\u6709\u591A\u4E8E <code>1</code> \u4E2A\u7EBF\u7A0B\u5728\u6267\u884C\u3002</p><p>\u60A8\u53EF\u80FD\u4F1A\u95EE\uFF0C\u5355\u7EBF\u7A0B\u6A21\u5F0F\u6267\u884C\u7684 JavaScript\uFF0C\u5982\u4F55\u5904\u7406\u591A\u4EFB\u52A1?</p><p>\u5728 JavaScript \u4E2D\uFF0C\u6267\u884C\u591A\u4EFB\u52A1\u5B9E\u9645\u4E0A\u90FD\u662F\u5F02\u6B65\u8C03\u7528\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684\u4EE3\u7801:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C31\u4F1A\u53D1\u8D77\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\u6765\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u3002\u56E0\u4E3A\u662F\u5F02\u6B65\u64CD\u4F5C\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728 JavaScript \u4EE3\u7801\u4E2D\u5C31\u4E0D\u77E5\u9053\u4EC0\u4E48\u65F6\u5019\u64CD\u4F5C\u7ED3\u675F\uFF0C\u56E0\u6B64\u9700\u8981\u5148\u8BBE\u7F6E\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5F53\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6210\u540E\uFF0C\u81EA\u52A8\u8C03\u7528\u6B64\u51FD\u6570:</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6210\u540E\uFF0CJavaScript \u5F15\u64CE\u5C06\u81EA\u52A8\u8C03\u7528\u6211\u4EEC\u8BBE\u7F6E\u7684\u56DE\u8C03\u51FD\u6570\u3002\u6267\u884C\u56DE\u8C03\u51FD\u6570\u65F6\uFF0C\u6587\u4EF6\u5DF2\u7ECF\u8BFB\u53D6\u5B8C\u6BD5\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u5185\u90E8\u5B89\u5168\u5730\u83B7\u5F97\u6587\u4EF6\u5185\u5BB9\u3002</p>`,19);function u(r,d){return t(),p("div",null,[i,e(" more "),l])}const m=a(c,[["render",u],["__file","file.html.vue"]]);export{m as default};
