import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.70f43444.js";const p={},e=t(`<h1 id="\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u9519\u8BEF\u5904\u7406</h1><p>\u5728\u6267\u884C JavaScript \u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u6709\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u53D1\u751F\u9519\u8BEF\u3002</p><p>\u9519\u8BEF\u5206\u4E24\u79CD\uFF0C\u4E00\u79CD\u662F\u7A0B\u5E8F\u5199\u7684\u903B\u8F91\u4E0D\u5BF9\uFF0C\u5BFC\u81F4\u4EE3\u7801\u6267\u884C\u5F02\u5E38\u3002\u4F8B\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// TypeError: null \u53D8\u91CF\u6CA1\u6709 length \u5C5E\u6027</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u8FD9\u79CD\u9519\u8BEF\uFF0C\u8981\u4FEE\u590D\u7A0B\u5E8F\u3002</p><p>\u4E00\u79CD\u662F\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u7A0B\u5E8F\u53EF\u80FD\u9047\u5230\u65E0\u6CD5\u9884\u6D4B\u7684\u5F02\u5E38\u60C5\u51B5\u800C\u62A5\u9519\uFF0C\u4F8B\u5982\uFF0C\u7F51\u7EDC\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u8BFB\u53D6\u4E0D\u5B58\u5728\u7684\u6587\u4EF6\uFF0C\u6CA1\u6709\u64CD\u4F5C\u6743\u9650\u7B49\u3002</p><p>\u5BF9\u4E8E\u8FD9\u79CD\u9519\u8BEF\uFF0C\u6211\u4EEC\u9700\u8981\u5904\u7406\u5B83\uFF0C\u5E76\u53EF\u80FD\u9700\u8981\u7ED9\u7528\u6237\u53CD\u9988\u3002</p><p>\u9519\u8BEF\u5904\u7406\u662F\u7A0B\u5E8F\u8BBE\u8BA1\u65F6\u5FC5\u987B\u8981\u8003\u8651\u7684\u95EE\u9898\u3002\u5BF9\u4E8E C \u8FD9\u6837\u8D34\u8FD1\u7CFB\u7EDF\u5E95\u5C42\u7684\u8BED\u8A00\uFF0C\u9519\u8BEF\u662F\u901A\u8FC7\u9519\u8BEF\u7801\u8FD4\u56DE\u7684:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>int fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;/path/to/file&quot;</span><span class="token punctuation">,</span> <span class="token constant">O_RDONLY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>fd <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Error when open file!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u9519\u8BEF\u7801\u8FD4\u56DE\u9519\u8BEF\uFF0C\u5C31\u9700\u8981\u7EA6\u5B9A\u4EC0\u4E48\u662F\u6B63\u786E\u7684\u8FD4\u56DE\u503C\uFF0C\u4EC0\u4E48\u662F\u9519\u8BEF\u7684\u8FD4\u56DE\u503C\u3002\u4E0A\u9762\u7684 <code>open()</code> \u51FD\u6570\u7EA6\u5B9A\u8FD4\u56DE <code>-1</code> \u8868\u793A\u9519\u8BEF\u3002</p><p>\u663E\u7136\uFF0C\u8FD9\u79CD\u7528\u9519\u8BEF\u7801\u8868\u793A\u9519\u8BEF\u5728\u7F16\u5199\u7A0B\u5E8F\u65F6\u5341\u5206\u4E0D\u4FBF\u3002</p><p>\u56E0\u6B64\uFF0C\u9AD8\u7EA7\u8BED\u8A00\u901A\u5E38\u90FD\u63D0\u4F9B\u4E86\u66F4\u62BD\u8C61\u7684\u9519\u8BEF\u5904\u7406\u903B\u8F91 <code>try ... catch ... finally</code>\uFF0CJavaScript \u4E5F\u4E0D\u4F8B\u5916\u3002</p><h2 id="try-catch-finally" tabindex="-1"><a class="header-anchor" href="#try-catch-finally" aria-hidden="true">#</a> <code>try ... catch ... finally</code></h2><p>\u4F7F\u7528 <code>try ... catch ... finally</code> \u5904\u7406\u9519\u8BEF\u65F6\uFF0C\u6211\u4EEC\u7F16\u5199\u7684\u4EE3\u7801\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> r1<span class="token punctuation">,</span>
  r2<span class="token punctuation">,</span>
  s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  r1 <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// \u6B64\u5904\u5E94\u4EA7\u751F\u9519\u8BEF</span>
  r2 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// \u8BE5\u8BED\u53E5\u4E0D\u4F1A\u6267\u884C</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u9519\u4E86: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;finally&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;r1 = &quot;</span> <span class="token operator">+</span> r1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// r1\u5E94\u4E3Aundefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;r2 = &quot;</span> <span class="token operator">+</span> r2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// r2\u5E94\u4E3Aundefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u540E\u53EF\u4EE5\u53D1\u73B0\uFF0C\u8F93\u51FA\u63D0\u793A\u7C7B\u4F3C\u51FA\u9519\u4E86: <code>TypeError: Cannot read property &#39;length&#39; of null\u201D</code>\u3002</p><p>\u6211\u4EEC\u6765\u5206\u6790\u4E00\u4E0B\u4F7F\u7528 <code>try ... catch ... finally</code> \u7684\u6267\u884C\u6D41\u7A0B\u3002</p><p>\u5F53\u4EE3\u7801\u5757\u88AB <code>try { ... }</code> \u5305\u88F9\u7684\u65F6\u5019\uFF0C\u5C31\u8868\u793A\u8FD9\u90E8\u5206\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u53D1\u751F\u9519\u8BEF\uFF0C\u4E00\u65E6\u53D1\u751F\u9519\u8BEF\uFF0C\u5C31\u4E0D\u518D\u7EE7\u7EED\u6267\u884C\u540E\u7EED\u4EE3\u7801\uFF0C\u8F6C\u800C\u8DF3\u5230 <code>catch</code> \u5757\u3002<code>catch (e) { ... }</code> \u5305\u88F9\u7684\u4EE3\u7801\u5C31\u662F\u9519\u8BEF\u5904\u7406\u4EE3\u7801\uFF0C\u53D8\u91CF <code>e</code> \u8868\u793A\u6355\u83B7\u5230\u7684\u9519\u8BEF\u3002\u6700\u540E\uFF0C\u65E0\u8BBA\u6709\u6CA1\u6709\u9519\u8BEF\uFF0C<code>finally</code> \u4E00\u5B9A\u4F1A\u88AB\u6267\u884C\u3002</p><p>\u6240\u4EE5\uFF0C\u6709\u9519\u8BEF\u53D1\u751F\u65F6\uFF0C\u6267\u884C\u6D41\u7A0B\u50CF\u8FD9\u6837:</p><ol><li>\u5148\u6267\u884C <code>try { ... }</code> \u7684\u4EE3\u7801\uFF1B</li><li>\u6267\u884C\u5230\u51FA\u9519\u7684\u8BED\u53E5\u65F6\uFF0C\u540E\u7EED\u8BED\u53E5\u4E0D\u518D\u7EE7\u7EED\u6267\u884C\uFF0C\u8F6C\u800C\u6267\u884C <code>catch (e) { ... }</code> \u4EE3\u7801\uFF1B</li><li>\u6700\u540E\u6267\u884C <code>finally { ... }</code> \u4EE3\u7801\u3002</li></ol><p>\u800C\u6CA1\u6709\u9519\u8BEF\u53D1\u751F\u65F6\uFF0C\u6267\u884C\u6D41\u7A0B\u50CF\u8FD9\u6837:</p><ol><li>\u5148\u6267\u884C <code>try { ... }</code> \u7684\u4EE3\u7801\uFF1B</li><li>\u56E0\u4E3A\u6CA1\u6709\u51FA\u9519\uFF0C<code>catch (e) { ... }</code> \u4EE3\u7801\u4E0D\u4F1A\u88AB\u6267\u884C\uFF1B</li><li>\u6700\u540E\u6267\u884C <code>finally { ... }</code> \u4EE3\u7801\u3002</li></ol><p>\u6700\u540E\u8BF7\u6CE8\u610F\uFF0C<code>catch</code> \u548C <code>finally</code> \u53EF\u4EE5\u4E0D\u5FC5\u90FD\u51FA\u73B0\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>try</code> \u8BED\u53E5\u4E00\u5171\u6709\u4E09\u79CD\u5F62\u5F0F:</p><p>\u5B8C\u6574\u7684 <code>try ... catch ... finally</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u6709 <code>try ... catch</code>\uFF0C\u6CA1\u6709 <code>finally</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u6709 <code>try ... finally</code>\uFF0C\u6CA1\u6709 <code>catch</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9519\u8BEF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u7C7B\u578B" aria-hidden="true">#</a> \u9519\u8BEF\u7C7B\u578B</h2><p>JavaScript \u6709\u4E00\u4E2A\u6807\u51C6\u7684 Error \u5BF9\u8C61\u8868\u793A\u9519\u8BEF\uFF0C\u8FD8\u6709\u4ECE Error \u6D3E\u751F\u7684 <code>TypeError</code>\u3001<code>ReferenceError</code> \u7B49\u9519\u8BEF\u5BF9\u8C61\u3002\u6211\u4EEC\u5728\u5904\u7406\u9519\u8BEF\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>catch(e)</code> \u6355\u83B7\u7684\u53D8\u91CF <code>e</code> \u8BBF\u95EE\u9519\u8BEF\u5BF9\u8C61:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">TypeError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Type error!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Error: &#39;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u53D8\u91CF <code>e</code> \u662F\u4E00\u4E2A\u4E60\u60EF\u7528\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4EE5\u5176\u4ED6\u53D8\u91CF\u540D\u547D\u540D\uFF0C\u5982 <code>catch(ex)</code>\u3002</p><h2 id="\u629B\u51FA\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u629B\u51FA\u9519\u8BEF" aria-hidden="true">#</a> \u629B\u51FA\u9519\u8BEF</h2><p>\u7A0B\u5E8F\u4E5F\u53EF\u4EE5\u4E3B\u52A8\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u8BA9\u6267\u884C\u6D41\u7A0B\u76F4\u63A5\u8DF3\u8F6C\u5230 <code>catch</code> \u5757\u3002\u629B\u51FA\u9519\u8BEF\u4F7F\u7528 <code>throw</code> \u8BED\u53E5\u3002</p><p>\u4F8B\u5982\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u8BA9\u7528\u6237\u8F93\u5165\u4E00\u4E2A\u6570\u5B57\uFF0C\u7A0B\u5E8F\u63A5\u6536\u5230\u7684\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u7528 <code>parseInt()</code> \u8F6C\u6362\u4E3A\u6574\u6570\u3002\u5F53\u7528\u6237\u8F93\u5165\u4E0D\u5408\u6CD5\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u629B\u51FA\u9519\u8BEF:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> r<span class="token punctuation">,</span> n<span class="token punctuation">,</span> s<span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  s <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6570\u5B57&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  n <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u5165\u9519\u8BEF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u8BA1\u7B97\u5E73\u65B9:</span>
  r <span class="token operator">=</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token string">&quot; * &quot;</span> <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">+</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u9519\u4E86: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\uFF0CJavaScript \u5141\u8BB8\u629B\u51FA\u4EFB\u610F\u5BF9\u8C61\uFF0C\u5305\u62EC\u6570\u5B57\u3001\u5B57\u7B26\u4E32\u3002\u4F46\u662F\uFF0C\u6700\u597D\u8FD8\u662F\u629B\u51FA\u4E00\u4E2A <code>Error</code> \u5BF9\u8C61\u3002</p><p>\u6700\u540E\uFF0C\u5F53\u6211\u4EEC\u7528 <code>catch</code> \u6355\u83B7\u9519\u8BEF\u65F6\uFF0C\u4E00\u5B9A\u8981\u7F16\u5199\u9519\u8BEF\u5904\u7406\u8BED\u53E5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  s<span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u54EA\u6015\u4EC5\u4EC5\u628A\u9519\u8BEF\u6253\u5370\u51FA\u6765\uFF0C\u4E5F\u4E0D\u8981\u4EC0\u4E48\u4E5F\u4E0D\u5E72:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  s<span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A <code>catch</code> \u5230\u9519\u8BEF\u5374\u4EC0\u4E48\u90FD\u4E0D\u6267\u884C\uFF0C\u5C31\u4E0D\u77E5\u9053\u7A0B\u5E8F\u6267\u884C\u8FC7\u7A0B\u4E2D\u5230\u5E95\u6709\u6CA1\u6709\u53D1\u751F\u9519\u8BEF\u3002</p><p>\u5904\u7406\u9519\u8BEF\u65F6\uFF0C\u8BF7\u4E0D\u8981\u7B80\u5355\u7C97\u66B4\u5730\u7528 <code>alert()</code> \u628A\u9519\u8BEF\u663E\u793A\u7ED9\u7528\u6237\u3002\u6559\u7A0B\u7684\u4EE3\u7801\u4F7F\u7528 <code>alert()</code> \u662F\u4E3A\u4E86\u4FBF\u4E8E\u6F14\u793A\u3002</p><h2 id="\u9519\u8BEF\u4F20\u64AD" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u4F20\u64AD" aria-hidden="true">#</a> \u9519\u8BEF\u4F20\u64AD</h2><p>\u5982\u679C\u4EE3\u7801\u53D1\u751F\u4E86\u9519\u8BEF\uFF0C\u53C8\u6CA1\u6709\u88AB <code>try ... catch</code> \u6355\u83B7\uFF0C\u90A3\u4E48\uFF0C\u7A0B\u5E8F\u6267\u884C\u6D41\u7A0B\u4F1A\u8DF3\u8F6C\u5230\u54EA\u5462?</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error!</span>
<span class="token punctuation">}</span>

<span class="token function">printLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5728\u4E00\u4E2A\u51FD\u6570\u5185\u90E8\u53D1\u751F\u4E86\u9519\u8BEF\uFF0C\u5B83\u81EA\u8EAB\u6CA1\u6709\u6355\u83B7\uFF0C\u9519\u8BEF\u5C31\u4F1A\u88AB\u629B\u5230\u5916\u5C42\u8C03\u7528\u51FD\u6570\uFF0C\u5982\u679C\u5916\u5C42\u51FD\u6570\u4E5F\u6CA1\u6709\u6355\u83B7\uFF0C\u8BE5\u9519\u8BEF\u4F1A\u4E00\u76F4\u6CBF\u7740\u51FD\u6570\u8C03\u7528\u94FE\u5411\u4E0A\u629B\u51FA\uFF0C\u76F4\u5230\u88AB JavaScript \u5F15\u64CE\u6355\u83B7\uFF0C\u4EE3\u7801\u7EC8\u6B62\u6267\u884C\u3002</p><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u4E0D\u5FC5\u5728\u6BCF\u4E00\u4E2A\u51FD\u6570\u5185\u90E8\u6355\u83B7\u9519\u8BEF\uFF0C\u53EA\u9700\u8981\u5728\u5408\u9002\u7684\u5730\u65B9\u6765\u4E2A\u7EDF\u4E00\u6355\u83B7\uFF0C\u4E00\u7F51\u6253\u5C3D:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;BEGIN main()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u9519\u4E86: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;END main()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;BEGIN foo()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">bar</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;END foo()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;BEGIN bar()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;length = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;END bar()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53 <code>bar()</code> \u51FD\u6570\u4F20\u5165\u53C2\u6570 <code>null</code> \u65F6\uFF0C\u4EE3\u7801\u4F1A\u62A5\u9519\uFF0C\u9519\u8BEF\u4F1A\u5411\u4E0A\u629B\u7ED9\u8C03\u7528\u65B9 <code>foo()</code> \u51FD\u6570\uFF0C<code>foo()</code> \u51FD\u6570\u6CA1\u6709 <code>try ... catch</code> \u8BED\u53E5\uFF0C\u6240\u4EE5\u9519\u8BEF\u7EE7\u7EED\u5411\u4E0A\u629B\u7ED9\u8C03\u7528\u65B9 <code>main()</code> \u51FD\u6570\uFF0C<code>main()</code> \u51FD\u6570\u6709 <code>try ... catch</code> \u8BED\u53E5\uFF0C\u6240\u4EE5\u9519\u8BEF\u6700\u7EC8\u5728 <code>main()</code> \u51FD\u6570\u88AB\u5904\u7406\u4E86\u3002</p><p>\u81F3\u4E8E\u5728\u54EA\u4E9B\u5730\u65B9\u6355\u83B7\u9519\u8BEF\u6BD4\u8F83\u5408\u9002\uFF0C\u9700\u8981\u89C6\u60C5\u51B5\u800C\u5B9A\u3002</p><h2 id="\u5F02\u6B65\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u5F02\u6B65\u9519\u8BEF\u5904\u7406</h2><p>\u7F16\u5199 JavaScript \u4EE3\u7801\u65F6\uFF0C\u6211\u4EEC\u8981\u65F6\u523B\u7262\u8BB0\uFF0CJavaScript \u5F15\u64CE\u662F\u4E00\u4E2A\u4E8B\u4EF6\u9A71\u52A8\u7684\u6267\u884C\u5F15\u64CE\uFF0C\u4EE3\u7801\u603B\u662F\u4EE5\u5355\u7EBF\u7A0B\u6267\u884C\uFF0C\u800C\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u9700\u8981\u7B49\u5230\u4E0B\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u4E8B\u4EF6\u51FA\u73B0\u540E\uFF0C\u624D\u4F1A\u88AB\u6267\u884C\u3002</p><p>\u4F8B\u5982\uFF0C<code>setTimeout()</code> \u51FD\u6570\u53EF\u4EE5\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5E76\u5728\u6307\u5B9A\u82E5\u5E72\u6BEB\u79D2\u540E\u6267\u884C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;It is time!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span>printTime<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;done&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4F1A\u5148\u6253\u5370 <code>done</code>\uFF0C1 \u79D2\u540E\u624D\u4F1A\u6253\u5370 <code>It is time!</code>\u3002</p><p>\u5982\u679C <code>printTime()</code> \u51FD\u6570\u5185\u90E8\u53D1\u751F\u4E86\u9519\u8BEF\uFF0C\u6211\u4EEC\u8BD5\u56FE\u7528 <code>try</code> \u5305\u88F9 <code>setTimeout()</code> \u662F\u65E0\u6548\u7684:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">printTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>printTime<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;done&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u539F\u56E0\u5C31\u5728\u4E8E\u8C03\u7528 <code>setTimeout()</code> \u51FD\u6570\u65F6\uFF0C\u4F20\u5165\u7684 <code>printTime</code> \u51FD\u6570\u5E76\u672A\u7ACB\u523B\u6267\u884C! \u7D27\u63A5\u7740\uFF0CJavaScript \u5F15\u64CE\u4F1A\u7EE7\u7EED\u6267\u884C <code>console.log(&#39;done&#39;);</code> \u8BED\u53E5\uFF0C\u800C\u6B64\u65F6\u5E76\u6CA1\u6709\u9519\u8BEF\u53D1\u751F\u3002\u76F4\u5230 1 \u79D2\u949F\u540E\uFF0C\u6267\u884C <code>printTime</code> \u51FD\u6570\u65F6\u624D\u53D1\u751F\u9519\u8BEF\uFF0C\u4F46\u6B64\u65F6\u9664\u4E86\u5728 <code>printTime</code> \u51FD\u6570\u5185\u90E8\u6355\u83B7\u9519\u8BEF\u5916\uFF0C\u5916\u5C42\u4EE3\u7801\u5E76\u65E0\u6CD5\u6355\u83B7\u3002</p><p>\u6240\u4EE5\uFF0C\u6D89\u53CA\u5230\u5F02\u6B65\u4EE3\u7801\uFF0C\u65E0\u6CD5\u5728\u8C03\u7528\u65F6\u6355\u83B7\uFF0C\u539F\u56E0\u5C31\u662F\u5728\u6355\u83B7\u7684\u5F53\u65F6\uFF0C\u56DE\u8C03\u51FD\u6570\u5E76\u672A\u6267\u884C\u3002</p><p>\u7C7B\u4F3C\u7684\uFF0C\u5F53\u6211\u4EEC\u5904\u7406\u4E00\u4E2A\u4E8B\u4EF6\u65F6\uFF0C\u5728\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u4EE3\u7801\u5904\uFF0C\u65E0\u6CD5\u6355\u83B7\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7684\u9519\u8BEF\u3002</p>`,62),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","error.html.vue"]]);export{r as default};
