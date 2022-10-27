import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a as n,b as s,e as c,w as i,f as a,r as l}from"./app.9d9222aa.js";const d={},r=a(`<p>\u5728\u6700\u65B0\u7684 Python 3 \u7248\u672C\u4E2D\uFF0C\u5B57\u7B26\u4E32\u662F\u4EE5 Unicode \u7F16\u7801\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0CPython \u7684\u5B57\u7B26\u4E32\u652F\u6301\u591A\u8BED\u8A00\uFF0C\u4F8B\u5982:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> print<span class="token punctuation">(</span><span class="token string">&#39;\u5305\u542B\u4E2D\u6587\u7684str&#39;</span><span class="token punctuation">)</span>
\u5305\u542B\u4E2D\u6587\u7684str
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u5355\u4E2A\u5B57\u7B26\u7684\u7F16\u7801\uFF0CPython \u63D0\u4F9B\u4E86 <code>ord()</code> \u51FD\u6570\u83B7\u53D6\u5B57\u7B26\u7684\u6574\u6570\u8868\u793A\uFF0C<code>chr()</code> \u51FD\u6570\u628A\u7F16\u7801\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u5B57\u7B26:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
<span class="token number">65</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E2D&#39;</span><span class="token punctuation">)</span>
<span class="token number">20013</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">)</span>
<span class="token string">&#39;B&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">25991</span><span class="token punctuation">)</span>
<span class="token string">&#39;\u6587&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u77E5\u9053\u5B57\u7B26\u7684\u6574\u6570\u7F16\u7801\uFF0C\u8FD8\u53EF\u4EE5\u7528\u5341\u516D\u8FDB\u5236\u8FD9\u4E48\u5199 <code>str</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;\\u4e2d\\u6587&#39;</span>
<span class="token string">&#39;\u4E2D\u6587&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E24\u79CD\u5199\u6CD5\u5B8C\u5168\u662F\u7B49\u4EF7\u7684\u3002</p><p>\u7531\u4E8E Python \u7684\u5B57\u7B26\u4E32\u7C7B\u578B\u662F <code>str</code>\uFF0C\u5728\u5185\u5B58\u4E2D\u4EE5 Unicode \u8868\u793A\uFF0C\u4E00\u4E2A\u5B57\u7B26\u5BF9\u5E94\u82E5\u5E72\u4E2A\u5B57\u8282\u3002\u5982\u679C\u8981\u5728\u7F51\u7EDC\u4E0A\u4F20\u8F93\uFF0C\u6216\u8005\u4FDD\u5B58\u5230\u78C1\u76D8\u4E0A\uFF0C\u5C31\u9700\u8981\u628A <code>str</code> \u53D8\u4E3A\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u7684 <code>bytes</code>\u3002</p><p>Python \u5BF9 <code>bytes</code> \u7C7B\u578B\u7684\u6570\u636E\u7528\u5E26 <code>b</code> \u524D\u7F00\u7684\u5355\u5F15\u53F7\u6216\u53CC\u5F15\u53F7\u8868\u793A:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">b&#39;ABC&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8981\u6CE8\u610F\u533A\u5206 <code>&#39;ABC&#39;</code> \u548C <code>b&#39;ABC&#39;</code>\uFF0C\u524D\u8005\u662F <code>str</code>\uFF0C\u540E\u8005\u867D\u7136\u5185\u5BB9\u663E\u793A\u5F97\u548C\u524D\u8005\u4E00\u6837\uFF0C\u4F46 <code>bytes</code> \u7684\u6BCF\u4E2A\u5B57\u7B26\u90FD\u53EA\u5360\u7528\u4E00\u4E2A\u5B57\u8282\u3002</p><p>\u4EE5 Unicode \u8868\u793A\u7684 <code>str</code> \u901A\u8FC7 <code>encode()</code> \u65B9\u6CD5\u53EF\u4EE5\u7F16\u7801\u4E3A\u6307\u5B9A\u7684 <code>bytes</code>\uFF0C\u4F8B\u5982:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;ABC&#39;</span>.encode<span class="token punctuation">(</span><span class="token string">&#39;ascii&#39;</span><span class="token punctuation">)</span>
b<span class="token string">&#39;ABC&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;\u4E2D\u6587&#39;</span>.encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
b<span class="token string">&#39;\\xe4\\xb8\\xad\\xe6\\x96\\x87&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;\u4E2D\u6587&#39;</span>.encode<span class="token punctuation">(</span><span class="token string">&#39;ascii&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
UnicodeEncodeError: <span class="token string">&#39;ascii&#39;</span> codec can&#39;t encode characters <span class="token keyword">in</span> position <span class="token number">0</span>-1: ordinal not <span class="token keyword">in</span> range<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EAF\u82F1\u6587\u7684 <code>str</code> \u53EF\u4EE5\u7528 ASCII \u7F16\u7801\u4E3A <code>bytes</code>\uFF0C\u5185\u5BB9\u662F\u4E00\u6837\u7684\uFF0C\u542B\u6709\u4E2D\u6587\u7684 <code>str</code> \u53EF\u4EE5\u7528 UTF-8 \u7F16\u7801\u4E3A <code>bytes</code>\u3002\u542B\u6709\u4E2D\u6587\u7684 <code>str</code> \u65E0\u6CD5\u7528 ASCII \u7F16\u7801\uFF0C\u56E0\u4E3A\u4E2D\u6587\u7F16\u7801\u7684\u8303\u56F4\u8D85\u8FC7\u4E86 ASCII \u7F16\u7801\u7684\u8303\u56F4\uFF0CPython \u4F1A\u62A5\u9519\u3002</p><p>\u5728 <code>bytes</code> \u4E2D\uFF0C\u65E0\u6CD5\u663E\u793A\u4E3A ASCII \u5B57\u7B26\u7684\u5B57\u8282\uFF0C\u7528 <code>\\x##</code> \u663E\u793A\u3002</p><p>\u53CD\u8FC7\u6765\uFF0C\u5982\u679C\u6211\u4EEC\u4ECE\u7F51\u7EDC\u6216\u78C1\u76D8\u4E0A\u8BFB\u53D6\u4E86\u5B57\u8282\u6D41\uFF0C\u90A3\u4E48\u8BFB\u5230\u7684\u6570\u636E\u5C31\u662F <code>bytes</code>\u3002\u8981\u628A <code>bytes</code> \u53D8\u4E3A <code>str</code>\uFF0C\u5C31\u9700\u8981\u7528 <code>decode()</code> \u65B9\u6CD5:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">b&#39;ABC&#39;</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;ascii&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;ABC&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">b&#39;\\xe4\\xb8\\xad\\xe6\\x96\\x87&#39;</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;\u4E2D\u6587&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C <code>bytes</code> \u4E2D\u5305\u542B\u65E0\u6CD5\u89E3\u7801\u7684\u5B57\u8282\uFF0C<code>decode()</code> \u65B9\u6CD5\u4F1A\u62A5\u9519:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b<span class="token string">&#39;\\xe4\\xb8\\xad\\xff&#39;</span>.decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  <span class="token punctuation">..</span>.
UnicodeDecodeError: <span class="token string">&#39;utf-8&#39;</span> codec can&#39;t decode byte 0xff <span class="token keyword">in</span> position <span class="token number">3</span>: invalid start byte
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C <code>bytes</code> \u4E2D\u53EA\u6709\u4E00\u5C0F\u90E8\u5206\u65E0\u6548\u7684\u5B57\u8282\uFF0C\u53EF\u4EE5\u4F20\u5165 <code>errors=&#39;ignore&#39;</code> \u5FFD\u7565\u9519\u8BEF\u7684\u5B57\u8282:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">b&#39;\\xe4\\xb8\\xad\\xff&#39;</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> errors<span class="token operator">=</span><span class="token string">&#39;ignore&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;\u4E2D&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u8BA1\u7B97 <code>str</code> \u5305\u542B\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u53EF\u4EE5\u7528 <code>len()</code> \u51FD\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">&#39;ABC&#39;</span><span class="token punctuation">)</span>
<span class="token number">3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E2D\u6587&#39;</span><span class="token punctuation">)</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>len()</code> \u51FD\u6570\u8BA1\u7B97\u7684\u662F <code>str</code> \u7684\u5B57\u7B26\u6570\uFF0C\u5982\u679C\u6362\u6210 <code>bytes</code>\uFF0C<code>len()</code> \u51FD\u6570\u5C31\u8BA1\u7B97\u5B57\u8282\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">b&#39;ABC&#39;</span><span class="token punctuation">)</span>
<span class="token number">3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">b&#39;\\xe4\\xb8\\xad\\xe6\\x96\\x87&#39;</span><span class="token punctuation">)</span>
<span class="token number">6</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E2D\u6587&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u89C1\uFF0C1 \u4E2A\u4E2D\u6587\u5B57\u7B26\u7ECF\u8FC7 UTF-8 \u7F16\u7801\u540E\u901A\u5E38\u4F1A\u5360\u7528 3 \u4E2A\u5B57\u8282\uFF0C\u800C 1 \u4E2A\u82F1\u6587\u5B57\u7B26\u53EA\u5360\u7528 1 \u4E2A\u5B57\u8282\u3002</p><p>\u5728\u64CD\u4F5C\u5B57\u7B26\u4E32\u65F6\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9047\u5230 <code>str</code> \u548C <code>bytes</code> \u7684\u4E92\u76F8\u8F6C\u6362\u3002\u4E3A\u4E86\u907F\u514D\u4E71\u7801\u95EE\u9898\uFF0C\u5E94\u5F53\u59CB\u7EC8\u575A\u6301\u4F7F\u7528 UTF-8 \u7F16\u7801\u5BF9 <code>str</code> \u548C <code>bytes</code> \u8FDB\u884C\u8F6C\u6362\u3002</p><p>\u7531\u4E8E Python \u6E90\u4EE3\u7801\u4E5F\u662F\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\uFF0C\u6240\u4EE5\uFF0C\u5F53\u60A8\u7684\u6E90\u4EE3\u7801\u4E2D\u5305\u542B\u4E2D\u6587\u7684\u65F6\u5019\uFF0C\u5728\u4FDD\u5B58\u6E90\u4EE3\u7801\u65F6\uFF0C\u5C31\u9700\u8981\u52A1\u5FC5\u6307\u5B9A\u4FDD\u5B58\u4E3A UTF-8 \u7F16\u7801\u3002\u5F53 Python \u89E3\u91CA\u5668\u8BFB\u53D6\u6E90\u4EE3\u7801\u65F6\uFF0C\u4E3A\u4E86\u8BA9\u5B83\u6309 UTF-8 \u7F16\u7801\u8BFB\u53D6\uFF0C\u6211\u4EEC\u901A\u5E38\u5728\u6587\u4EF6\u5F00\u5934\u5199\u4E0A\u8FD9\u4E24\u884C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># !/usr/bin/env python3</span>

<span class="token comment"># -*- coding: utf-8 -*-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E00\u884C\u6CE8\u91CA\u662F\u4E3A\u4E86\u544A\u8BC9 Linux/macOS \u7CFB\u7EDF\uFF0C\u8FD9\u662F\u4E00\u4E2A Python \u53EF\u6267\u884C\u7A0B\u5E8F\uFF0CWindows \u7CFB\u7EDF\u4F1A\u5FFD\u7565\u8FD9\u4E2A\u6CE8\u91CA\uFF1B</p><p>\u7B2C\u4E8C\u884C\u6CE8\u91CA\u662F\u4E3A\u4E86\u544A\u8BC9 Python \u89E3\u91CA\u5668\uFF0C\u6309\u7167 UTF-8 \u7F16\u7801\u8BFB\u53D6\u6E90\u4EE3\u7801\uFF0C\u5426\u5219\uFF0C\u60A8\u5728\u6E90\u4EE3\u7801\u4E2D\u5199\u7684\u4E2D\u6587\u8F93\u51FA\u53EF\u80FD\u4F1A\u6709\u4E71\u7801\u3002</p><p>\u7533\u660E\u4E86 UTF-8 \u7F16\u7801\u5E76\u4E0D\u610F\u5473\u7740\u60A8\u7684 <code>.py</code> \u6587\u4EF6\u5C31\u662F UTF-8 \u7F16\u7801\u7684\uFF0C\u5FC5\u987B\u5E76\u4E14\u8981\u786E\u4FDD\u6587\u672C\u7F16\u8F91\u5668\u6B63\u5728\u4F7F\u7528 &quot;UTF-8 without BOM&quot; \u7F16\u7801\u3002</p>`,32),u={class:"custom-container info"},k=n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F",-1),g=n("p",null,"\u65E7\u7248 Windows \u8BB0\u4E8B\u672C\u7684 UTF-8 \u662F UTF-8 with BOM\u3002",-1),v=a(`<p>\u5982\u679C <code>.py</code> \u6587\u4EF6\u672C\u8EAB\u4F7F\u7528 UTF-8 \u7F16\u7801\uFF0C\u5E76\u4E14\u4E5F\u7533\u660E\u4E86 <code># -*- coding: utf-8 -*-</code>\uFF0C\u6253\u5F00\u547D\u4EE4\u63D0\u793A\u7B26\u6D4B\u8BD5\u5C31\u53EF\u4EE5\u6B63\u5E38\u663E\u793A\u4E2D\u6587\u3002</p><h2 id="\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u683C\u5F0F\u5316</h2><p>\u4E00\u4E2A\u5E38\u89C1\u7684\u95EE\u9898\u662F\u5982\u4F55\u8F93\u51FA\u683C\u5F0F\u5316\u7684\u5B57\u7B26\u4E32\u3002\u6211\u4EEC\u7ECF\u5E38\u4F1A\u8F93\u51FA\u7C7B\u4F3C <code>&#39;\u4EB2\u7231\u7684xxx\u60A8\u597D! \u60A8xx\u6708\u7684\u8BDD\u8D39\u662Fxx\uFF0C\u4F59\u989D\u662Fxx&#39;</code> \u4E4B\u7C7B\u7684\u5B57\u7B26\u4E32\uFF0C\u800C <code>xxx</code> \u7684\u5185\u5BB9\u90FD\u662F\u6839\u636E\u53D8\u91CF\u53D8\u5316\u7684\uFF0C\u6240\u4EE5\uFF0C\u9700\u8981\u4E00\u79CD\u7B80\u4FBF\u7684\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u3002</p><p>\u5728 Python \u4E2D\uFF0C\u91C7\u7528\u7684\u683C\u5F0F\u5316\u65B9\u5F0F\u548C C \u8BED\u8A00\u662F\u4E00\u81F4\u7684\uFF0C\u7528 <code>%</code> \u5B9E\u73B0\uFF0C\u4E3E\u4F8B\u5982\u4E0B:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello, %s&#39;</span> <span class="token operator">%</span> <span class="token string">&#39;world&#39;</span>
<span class="token string">&#39;Hello, world&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hi, %s, you have $%d.&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token number">1000000</span><span class="token punctuation">)</span>
<span class="token string">&#39;Hi, Michael, you have $1000000.&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CA1\u9519\uFF0C<code>%</code> \u8FD0\u7B97\u7B26\u5C31\u662F\u7528\u6765\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u7684\u3002\u5728\u5B57\u7B26\u4E32\u5185\u90E8\uFF0C<code>%s</code> \u8868\u793A\u7528\u5B57\u7B26\u4E32\u66FF\u6362\uFF0C<code>%d</code> \u8868\u793A\u7528\u6574\u6570\u66FF\u6362\uFF0C\u6709\u51E0\u4E2A <code>%?</code> \u5360\u4F4D\u7B26\uFF0C\u540E\u9762\u5C31\u8DDF\u51E0\u4E2A\u53D8\u91CF\u6216\u8005\u503C\uFF0C\u987A\u5E8F\u8981\u5BF9\u5E94\u597D\u3002\u5982\u679C\u53EA\u6709\u4E00\u4E2A <code>%?</code>\uFF0C\u62EC\u53F7\u53EF\u4EE5\u7701\u7565\u3002</p><div class="custom-container info"><p class="custom-container-title">\u5E38\u89C1\u7684\u5360\u4F4D\u7B26\u6709</p><table><thead><tr><th>\u5360\u4F4D\u7B26</th><th>\u66FF\u6362\u5185\u5BB9</th></tr></thead><tbody><tr><td><code>%d</code></td><td>\u6574\u6570</td></tr><tr><td><code>%f</code></td><td>\u6D6E\u70B9\u6570</td></tr><tr><td><code>%s</code></td><td>\u5B57\u7B26\u4E32</td></tr><tr><td><code>%x</code></td><td>\u5341\u516D\u8FDB\u5236\u6574\u6570</td></tr></tbody></table></div><p>\u5176\u4E2D\uFF0C\u683C\u5F0F\u5316\u6574\u6570\u548C\u6D6E\u70B9\u6570\u8FD8\u53EF\u4EE5\u6307\u5B9A\u662F\u5426\u8865 0 \u548C\u6574\u6570\u4E0E\u5C0F\u6570\u7684\u4F4D\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%2d-%02d&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%.2f&#39;</span> <span class="token operator">%</span> <span class="token number">3.1415926</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60A8\u4E0D\u592A\u786E\u5B9A\u5E94\u8BE5\u7528\u4EC0\u4E48\uFF0C<code>%s</code> \u6C38\u8FDC\u8D77\u4F5C\u7528\uFF0C\u5B83\u4F1A\u628A\u4EFB\u4F55\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Age: %s. Gender: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token string">&#39;Age: 25. Gender: True&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u5B57\u7B26\u4E32\u91CC\u9762\u7684 <code>%</code> \u662F\u4E00\u4E2A\u666E\u901A\u5B57\u7B26\u600E\u4E48\u529E? \u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u8F6C\u4E49\uFF0C\u7528 <code>%%</code> \u6765\u8868\u793A\u4E00\u4E2A <code>%</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;growth rate: %d %%&#39;</span> <span class="token operator">%</span> <span class="token number">7</span>
<span class="token string">&#39;growth rate: 7 %&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> format()</h3><p>\u53E6\u4E00\u79CD\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5\u662F\u4F7F\u7528\u5B57\u7B26\u4E32\u7684 <code>format()</code> \u65B9\u6CD5\uFF0C\u5B83\u4F1A\u7528\u4F20\u5165\u7684\u53C2\u6570\u4F9D\u6B21\u66FF\u6362\u5B57\u7B26\u4E32\u5185\u7684\u5360\u4F4D\u7B26 <code>{0}</code>\u3001<code>{1}</code>\u2026\u2026\uFF0C\u4E0D\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u5199\u8D77\u6765\u6BD4 <code>%</code> \u8981\u9EBB\u70E6\u5F97\u591A:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello, {0}, \u6210\u7EE9\u63D0\u5347\u4E86 {1:.1f}%&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token number">17.125</span><span class="token punctuation">)</span>
<span class="token string">&#39;Hello, \u5C0F\u660E, \u6210\u7EE9\u63D0\u5347\u4E86 17.1%&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>Python 3 \u7684\u5B57\u7B26\u4E32\u4F7F\u7528 Unicode\uFF0C\u76F4\u63A5\u652F\u6301\u591A\u8BED\u8A00\u3002</p><p>\u5F53 <code>str</code> \u548C <code>bytes</code> \u4E92\u76F8\u8F6C\u6362\u65F6\uFF0C\u9700\u8981\u6307\u5B9A\u7F16\u7801\u3002\u6700\u5E38\u7528\u7684\u7F16\u7801\u662F <code>UTF-8</code>\u3002Python \u5F53\u7136\u4E5F\u652F\u6301\u5176\u4ED6\u7F16\u7801\u65B9\u5F0F\uFF0C\u6BD4\u5982\u628A Unicode \u7F16\u7801\u6210 <code>GB2312</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;\u4E2D\u6587&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;gb2312&#39;</span><span class="token punctuation">)</span>
<span class="token string">b&#39;\\xd6\\xd0\\xce\\xc4&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u8FD9\u79CD\u65B9\u5F0F\u7EAF\u5C5E\u81EA\u627E\u9EBB\u70E6\uFF0C\u5982\u679C\u6CA1\u6709\u7279\u6B8A\u4E1A\u52A1\u8981\u6C42\uFF0C\u8BF7\u7262\u8BB0\u4EC5\u4F7F\u7528 UTF-8 \u7F16\u7801\u3002</p><p>\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7528 Python \u7684\u4EA4\u4E92\u5F0F\u73AF\u5883\u6D4B\u8BD5\uFF0C\u65B9\u4FBF\u5FEB\u6377\u3002</p>`,22);function b(m,h){const e=l("RouterLink");return o(),p("div",null,[r,n("div",u,[k,g,n("ul",null,[n("li",null,[s("\u5177\u4F53\u8BE6\u60C5\u8BF7\u89C1 "),c(e,{to:"/code/windows/notepad.html"},{default:i(()=>[s("\u8BB0\u4E8B\u672C\u7684\u9057\u7559\u95EE\u9898")]),_:1})])])]),v])}const f=t(d,[["render",b],["__file","string.html.vue"]]);export{f as default};
