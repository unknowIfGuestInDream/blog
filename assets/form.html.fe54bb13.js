import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as t,d as p,a as n,f as e}from"./app.9d9222aa.js";const o={},c=n("p",null,"\u7528 JavaScript \u64CD\u4F5C\u8868\u5355\u548C\u64CD\u4F5C DOM \u662F\u7C7B\u4F3C\u7684\uFF0C\u56E0\u4E3A\u8868\u5355\u672C\u8EAB\u4E5F\u662F DOM \u6811\u3002",-1),u=n("p",null,"\u4E0D\u8FC7\u8868\u5355\u7684\u8F93\u5165\u6846\u3001\u4E0B\u62C9\u6846\u7B49\u53EF\u4EE5\u63A5\u6536\u7528\u6237\u8F93\u5165\uFF0C\u6240\u4EE5\u7528 JavaScript \u6765\u64CD\u4F5C\u8868\u5355\uFF0C\u53EF\u4EE5\u83B7\u5F97\u7528\u6237\u8F93\u5165\u7684\u5185\u5BB9\uFF0C\u6216\u8005\u5BF9\u4E00\u4E2A\u8F93\u5165\u6846\u8BBE\u7F6E\u65B0\u7684\u5185\u5BB9\u3002",-1),l=e(`<p>HTML \u8868\u5355\u7684\u8F93\u5165\u63A7\u4EF6\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u79CD:</p><ul><li><p>\u6587\u672C\u6846\uFF0C\u5BF9\u5E94\u7684 <code>&lt;input type=&quot;text&quot;&gt;</code>\uFF0C\u7528\u4E8E\u8F93\u5165\u6587\u672C\uFF1B</p></li><li><p>\u53E3\u4EE4\u6846\uFF0C\u5BF9\u5E94\u7684 <code>&lt;input type=&quot;password&quot;&gt;</code>\uFF0C\u7528\u4E8E\u8F93\u5165\u53E3\u4EE4\uFF1B</p></li><li><p>\u5355\u9009\u6846\uFF0C\u5BF9\u5E94\u7684 <code>&lt;input type=&quot;radio&quot;&gt;</code>\uFF0C\u7528\u4E8E\u9009\u62E9\u4E00\u9879\uFF1B</p></li><li><p>\u590D\u9009\u6846\uFF0C\u5BF9\u5E94\u7684 <code>&lt;input type=&quot;checkbox&quot;&gt;</code>\uFF0C\u7528\u4E8E\u9009\u62E9\u591A\u9879\uFF1B</p></li><li><p>\u4E0B\u62C9\u6846\uFF0C\u5BF9\u5E94\u7684 <code>&lt;select&gt;</code>\uFF0C\u7528\u4E8E\u9009\u62E9\u4E00\u9879\uFF1B</p></li><li><p>\u9690\u85CF\u6587\u672C\uFF0C\u5BF9\u5E94\u7684 <code>&lt;input type=&quot;hidden&quot;&gt;</code>\uFF0C\u7528\u6237\u4E0D\u53EF\u89C1\uFF0C\u4F46\u8868\u5355\u63D0\u4EA4\u65F6\u4F1A\u628A\u9690\u85CF\u6587\u672C\u53D1\u9001\u5230\u670D\u52A1\u5668\u3002</p></li></ul><h2 id="\u83B7\u53D6\u503C" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u503C" aria-hidden="true">#</a> \u83B7\u53D6\u503C</h2><p>\u5982\u679C\u6211\u4EEC\u83B7\u5F97\u4E86\u4E00\u4E2A <code>&lt;input&gt;</code> \u8282\u70B9\u7684\u5F15\u7528\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528 <code>value</code> \u83B7\u5F97\u5BF9\u5E94\u7684\u7528\u6237\u8F93\u5165\u503C:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#email&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

input<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;\u7528\u6237\u8F93\u5165\u7684\u503C&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5E94\u7528\u4E8E <code>text</code>\u3001<code>password</code>\u3001<code>hidden</code> \u4EE5\u53CA <code>select</code>\u3002\u4F46\u662F\uFF0C\u5BF9\u4E8E\u5355\u9009\u6846\u548C\u590D\u9009\u6846\uFF0C<code>value</code> \u5C5E\u6027\u8FD4\u56DE\u7684\u6C38\u8FDC\u662F HTML \u9884\u8BBE\u7684\u503C\uFF0C\u800C\u6211\u4EEC\u9700\u8981\u83B7\u5F97\u7684\u5B9E\u9645\u662F\u7528\u6237\u662F\u5426\u201C\u52FE\u4E0A\u4E86\u201D\u9009\u9879\uFF0C\u6240\u4EE5\u5E94\u8BE5\u7528 <code>checked</code> \u5224\u65AD:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>weekday<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>monday<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>Monday<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>weekday<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tuesday<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>Tuesday<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span>
<span class="token punctuation">&gt;</span></span>\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mon <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#monday&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> tue <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#tuesday&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mon<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;1&#39;</span>
tue<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2&#39;</span>
mon<span class="token punctuation">.</span>checked<span class="token punctuation">;</span> <span class="token comment">// true \u6216\u8005 false</span>
tue<span class="token punctuation">.</span>checked<span class="token punctuation">;</span> <span class="token comment">// true \u6216\u8005 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u503C" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u503C" aria-hidden="true">#</a> \u8BBE\u7F6E\u503C</h2><p>\u8BBE\u7F6E\u503C\u548C\u83B7\u53D6\u503C\u7C7B\u4F3C\uFF0C\u5BF9\u4E8E text\u3001password\u3001hidden \u4EE5\u53CA select\uFF0C\u76F4\u63A5\u8BBE\u7F6E value \u5C31\u53EF\u4EE5:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#email&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;test@example.com&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u6587\u672C\u6846\u7684\u5185\u5BB9\u5DF2\u66F4\u65B0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u5355\u9009\u6846\u548C\u590D\u9009\u6846\uFF0C\u8BBE\u7F6E <code>checked</code> \u4E3A <code>true</code> \u6216 <code>false</code> \u5373\u53EF\u3002</p><h3 id="html5-\u63A7\u4EF6" tabindex="-1"><a class="header-anchor" href="#html5-\u63A7\u4EF6" aria-hidden="true">#</a> HTML5 \u63A7\u4EF6</h3><p>HTML5 \u65B0\u589E\u4E86\u5927\u91CF\u6807\u51C6\u63A7\u4EF6\uFF0C\u5E38\u7528\u7684\u5305\u62EC <code>date</code>\u3001<code>datetime</code>\u3001<code>datetime-local</code>\u3001<code>color</code> \u7B49\uFF0C\u5B83\u4EEC\u90FD\u4F7F\u7528 <code>&lt;input&gt;</code> \u6807\u7B7E:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2015-07-01<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>datetime-local<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2015-07-01T02:03:04<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#ff0000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E0D\u652F\u6301 HTML5 \u7684\u6D4F\u89C8\u5668\u65E0\u6CD5\u8BC6\u522B\u65B0\u7684\u63A7\u4EF6\uFF0C\u4F1A\u628A\u5B83\u4EEC\u5F53\u505A <code>type=&quot;text&quot;</code> \u6765\u663E\u793A\u3002\u652F\u6301 HTML5 \u7684\u6D4F\u89C8\u5668\u5C06\u83B7\u5F97\u683C\u5F0F\u5316\u7684\u5B57\u7B26\u4E32\u3002\u4F8B\u5982\uFF0C<code>type=&quot;date&quot;</code> \u7C7B\u578B\u7684 input \u7684 <code>value</code> \u5C06\u4FDD\u8BC1\u662F\u4E00\u4E2A\u6709\u6548\u7684 <code>YYYY-MM-DD</code> \u683C\u5F0F\u7684\u65E5\u671F\uFF0C\u6216\u8005\u7A7A\u5B57\u7B26\u4E32\u3002</p></div><h2 id="\u63D0\u4EA4\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u8868\u5355" aria-hidden="true">#</a> \u63D0\u4EA4\u8868\u5355</h2><p>\u6700\u540E\uFF0CJavaScript \u53EF\u4EE5\u4EE5\u4E24\u79CD\u65B9\u5F0F\u6765\u5904\u7406\u8868\u5355\u7684\u63D0\u4EA4 (Ajax \u65B9\u5F0F\u5728\u540E\u9762\u7AE0\u8282\u4ECB\u7ECD)\u3002</p><p>\u65B9\u5F0F\u4E00\u662F\u901A\u8FC7 <code>&lt;form&gt;</code> \u5143\u7D20\u7684 <code>submit()</code> \u65B9\u6CD5\u63D0\u4EA4\u4E00\u4E2A\u8868\u5355\uFF0C\u4F8B\u5982\uFF0C\u54CD\u5E94\u4E00\u4E2A <code>&lt;button&gt;</code> \u7684 click \u4E8B\u4EF6\uFF0C\u5728 JavaScript \u4EE3\u7801\u4E2D\u63D0\u4EA4\u8868\u5355:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- HTML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">doSubmitForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">doSubmitForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-form&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u53EF\u4EE5\u5728\u6B64\u4FEE\u6539form\u7684input...</span>
    <span class="token comment">// \u63D0\u4EA4form:</span>
    form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u7684\u7F3A\u70B9\u662F\u6270\u4E71\u4E86\u6D4F\u89C8\u5668\u5BF9 <code>form</code> \u7684\u6B63\u5E38\u63D0\u4EA4\u3002\u6D4F\u89C8\u5668\u9ED8\u8BA4\u70B9\u51FB <code>&lt;button type=&quot;submit&quot;&gt;</code> \u65F6\u63D0\u4EA4\u8868\u5355\uFF0C\u6216\u8005\u7528\u6237\u5728\u6700\u540E\u4E00\u4E2A\u8F93\u5165\u6846\u6309\u56DE\u8F66\u952E\u3002\u56E0\u6B64\uFF0C\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u662F\u54CD\u5E94 <code>&lt;form&gt;</code> \u672C\u8EAB\u7684 <code>onsubmit</code> \u4E8B\u4EF6\uFF0C\u5728\u63D0\u4EA4 <code>form</code> \u65F6\u4F5C\u4FEE\u6539:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- HTML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-form<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onsubmit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token keyword">return</span> <span class="token function">checkForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">checkForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-form&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u53EF\u4EE5\u5728\u6B64\u4FEE\u6539 form \u7684 input...</span>
    <span class="token comment">// \u7EE7\u7EED\u4E0B\u4E00\u6B65:</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u8981 <code>return true</code> \u6765\u544A\u8BC9\u6D4F\u89C8\u5668\u7EE7\u7EED\u63D0\u4EA4\uFF0C\u5982\u679C <code>return false</code>\uFF0C\u6D4F\u89C8\u5668\u5C06\u4E0D\u4F1A\u7EE7\u7EED\u63D0\u4EA4 form\uFF0C\u8FD9\u79CD\u60C5\u51B5\u901A\u5E38\u5BF9\u5E94\u7528\u6237\u8F93\u5165\u6709\u8BEF\uFF0C\u63D0\u793A\u7528\u6237\u9519\u8BEF\u4FE1\u606F\u540E\u7EC8\u6B62\u63D0\u4EA4 form\u3002</p><p>\u5728\u68C0\u67E5\u548C\u4FEE\u6539 <code>&lt;input&gt;</code> \u65F6\uFF0C\u8981\u5145\u5206\u5229\u7528 <code>&lt;input type=&quot;hidden&quot;&gt;</code> \u6765\u4F20\u9012\u6570\u636E\u3002</p><p>\u4F8B\u5982\uFF0C\u5F88\u591A\u767B\u5F55\u8868\u5355\u5E0C\u671B\u7528\u6237\u8F93\u5165\u7528\u6237\u540D\u548C\u53E3\u4EE4\uFF0C\u4F46\u662F\uFF0C\u5B89\u5168\u8003\u8651\uFF0C\u63D0\u4EA4\u8868\u5355\u65F6\u4E0D\u4F20\u8F93\u660E\u6587\u53E3\u4EE4\uFF0C\u800C\u662F\u53E3\u4EE4\u7684 MD5\u3002\u666E\u901A JavaScript \u5F00\u53D1\u4EBA\u5458\u4F1A\u76F4\u63A5\u4FEE\u6539</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- HTML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login-form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onsubmit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token keyword">return</span> <span class="token function">checkForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">checkForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pwd <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u628A\u7528\u6237\u8F93\u5165\u7684\u660E\u6587\u53D8\u4E3AMD5:</span>
    pwd<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">toMD5</span><span class="token punctuation">(</span>pwd<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u7EE7\u7EED\u4E0B\u4E00\u6B65:</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u505A\u6CD5\u770B\u4E0A\u53BB\u6CA1\u5565\u95EE\u9898\uFF0C\u4F46\u7528\u6237\u8F93\u5165\u4E86\u53E3\u4EE4\u63D0\u4EA4\u65F6\uFF0C\u53E3\u4EE4\u6846\u7684\u663E\u793A\u4F1A\u7A81\u7136\u4ECE\u51E0\u4E2A<em>\u53D8\u6210 32 \u4E2A</em>(\u56E0\u4E3A MD5 \u6709 32 \u4E2A\u5B57\u7B26)\u3002</p><p>\u8981\u60F3\u4E0D\u6539\u53D8\u7528\u6237\u7684\u8F93\u5165\uFF0C\u53EF\u4EE5\u5229\u7528 <code>&lt;input type=&quot;hidden&quot;&gt;</code> \u5B9E\u73B0:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- HTML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login-form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onsubmit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token keyword">return</span> <span class="token function">checkForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input-password<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hidden<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md5-password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">checkForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> input_pwd <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#input-password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> md5_pwd <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#md5-password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u628A\u7528\u6237\u8F93\u5165\u7684\u660E\u6587\u53D8\u4E3AMD5:</span>
    md5_pwd<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">toMD5</span><span class="token punctuation">(</span>input_pwd<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u7EE7\u7EED\u4E0B\u4E00\u6B65:</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>id</code> \u4E3A <code>md5-password</code> \u7684 <code>&lt;input&gt;</code> \u6807\u8BB0\u4E86 <code>name=&quot;password&quot;</code>\uFF0C\u800C\u7528\u6237\u8F93\u5165\u7684 <code>id</code> \u4E3A <code>input-password</code> \u7684 <code>&lt;input&gt;</code> \u6CA1\u6709 <code>name</code> \u5C5E\u6027\u3002\u6CA1\u6709 <code>name</code> \u5C5E\u6027\u7684 <code>&lt;input&gt;</code> \u7684\u6570\u636E\u4E0D\u4F1A\u88AB\u63D0\u4EA4\u3002</p></div>`,34);function i(k,r){return s(),t("div",null,[c,u,p(" more "),l])}const v=a(o,[["render",i],["__file","form.html.vue"]]);export{v as default};
