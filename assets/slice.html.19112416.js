import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.6f239d00.js";const t={},e=p(`<p>\u53D6\u4E00\u4E2A list \u6216 tuple \u7684\u90E8\u5206\u5143\u7D20\u662F\u975E\u5E38\u5E38\u89C1\u7684\u64CD\u4F5C\u3002\u6BD4\u5982\uFF0C\u4E00\u4E2A list \u5982\u4E0B:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sarah&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53D6\u524D 3 \u4E2A\u5143\u7D20\uFF0C\u5E94\u8BE5\u600E\u4E48\u505A?</p><p>\u7B28\u529E\u6CD5:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>L<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> L<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> L<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sarah&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u6240\u4EE5\u662F\u7B28\u529E\u6CD5\u662F\u56E0\u4E3A\u6269\u5C55\u4E00\u4E0B\uFF0C\u53D6\u524D N \u4E2A\u5143\u7D20\u5C31\u6CA1\u8F99\u4E86\u3002</p><p>\u53D6\u524D N \u4E2A\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u7D22\u5F15\u4E3A 0-(N-1)\u7684\u5143\u7D20\uFF0C\u53EF\u4EE5\u7528\u5FAA\u73AF:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> n <span class="token operator">=</span> <span class="token number">3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     r<span class="token punctuation">.</span>append<span class="token punctuation">(</span>L<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sarah&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8FD9\u79CD\u7ECF\u5E38\u53D6\u6307\u5B9A\u7D22\u5F15\u8303\u56F4\u7684\u64CD\u4F5C\uFF0C\u7528\u5FAA\u73AF\u5341\u5206\u7E41\u7410\uFF0C\u56E0\u6B64\uFF0CPython \u63D0\u4F9B\u4E86\u5207\u7247(Slice)\u64CD\u4F5C\u7B26\uFF0C\u80FD\u5927\u5927\u7B80\u5316\u8FD9\u79CD\u64CD\u4F5C\u3002</p><p>\u5BF9\u5E94\u4E0A\u9762\u7684\u95EE\u9898\uFF0C\u53D6\u524D 3 \u4E2A\u5143\u7D20\uFF0C\u7528\u4E00\u884C\u4EE3\u7801\u5C31\u53EF\u4EE5\u5B8C\u6210\u5207\u7247:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sarah&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>L[0:3]</code> \u8868\u793A\uFF0C\u4ECE\u7D22\u5F15 0 \u5F00\u59CB\u53D6\uFF0C\u76F4\u5230\u7D22\u5F15 3 \u4E3A\u6B62\uFF0C\u4F46\u4E0D\u5305\u62EC\u7D22\u5F15 3\u3002\u5373\u7D22\u5F15 0\uFF0C1\uFF0C2\uFF0C\u6B63\u597D\u662F 3 \u4E2A\u5143\u7D20\u3002</p><p>\u5982\u679C\u7B2C\u4E00\u4E2A\u7D22\u5F15\u662F 0\uFF0C\u8FD8\u53EF\u4EE5\u7701\u7565:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sarah&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
\u4E5F\u53EF\u4EE5\u4ECE\u7D22\u5F15<span class="token number">1</span>\u5F00\u59CB\uFF0C\u53D6\u51FA<span class="token number">2</span>\u4E2A\u5143\u7D20\u51FA\u6765<span class="token punctuation">:</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;Sarah&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
\u7C7B\u4F3C\u7684\uFF0C\u65E2\u7136Python\u652F\u6301L<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>\u53D6\u5012\u6570\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u90A3\u4E48\u5B83\u540C\u6837\u652F\u6301\u5012\u6570\u5207\u7247\uFF0C\u8BD5\u8BD5<span class="token punctuation">:</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BB0\u4F4F\u5012\u6570\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u7D22\u5F15\u662F <code>-1</code>\u3002</p><p>\u5207\u7247\u64CD\u4F5C\u5341\u5206\u6709\u7528\u3002\u6211\u4EEC\u5148\u521B\u5EFA\u4E00\u4E2A 0-99 \u7684\u6570\u5217:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u901A\u8FC7\u5207\u7247\u8F7B\u677E\u53D6\u51FA\u67D0\u4E00\u6BB5\u6570\u5217\u3002\u6BD4\u5982\u524D 10 \u4E2A\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E 10 \u4E2A\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">91</span><span class="token punctuation">,</span> <span class="token number">92</span><span class="token punctuation">,</span> <span class="token number">93</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u524D 11-20 \u4E2A\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u524D 10 \u4E2A\u6570\uFF0C\u6BCF\u4E24\u4E2A\u53D6\u4E00\u4E2A:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u6709\u6570\uFF0C\u6BCF 5 \u4E2A\u53D6\u4E00\u4E2A:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751A\u81F3\u4EC0\u4E48\u90FD\u4E0D\u5199\uFF0C\u53EA\u5199 <code>[:]</code> \u5C31\u53EF\u4EE5\u539F\u6837\u590D\u5236\u4E00\u4E2A list:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>tuple \u4E5F\u662F\u4E00\u79CD list\uFF0C\u552F\u4E00\u533A\u522B\u662F tuple \u4E0D\u53EF\u53D8\u3002\u56E0\u6B64\uFF0Ctuple \u4E5F\u53EF\u4EE5\u7528\u5207\u7247\u64CD\u4F5C\uFF0C\u53EA\u662F\u64CD\u4F5C\u7684\u7ED3\u679C\u4ECD\u662F tuple:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B57\u7B26\u4E32 <code>&#39;xxx&#39;</code> \u4E5F\u53EF\u4EE5\u770B\u6210\u662F\u4E00\u79CD list\uFF0C\u6BCF\u4E2A\u5143\u7D20\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u3002\u56E0\u6B64\uFF0C\u5B57\u7B26\u4E32\u4E5F\u53EF\u4EE5\u7528\u5207\u7247\u64CD\u4F5C\uFF0C\u53EA\u662F\u64CD\u4F5C\u7ED3\u679C\u4ECD\u662F\u5B57\u7B26\u4E32:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;ABCDEFG&#39;</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token string">&#39;ABC&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;ABCDEFG&#39;</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token string">&#39;ACEG&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5F88\u591A\u7F16\u7A0B\u8BED\u8A00\u4E2D\uFF0C\u9488\u5BF9\u5B57\u7B26\u4E32\u63D0\u4F9B\u4E86\u5F88\u591A\u5404\u79CD\u622A\u53D6\u51FD\u6570(\u4F8B\u5982\uFF0Csubstring)\uFF0C\u5176\u5B9E\u76EE\u7684\u5C31\u662F\u5BF9\u5B57\u7B26\u4E32\u5207\u7247\u3002Python \u6CA1\u6709\u9488\u5BF9\u5B57\u7B26\u4E32\u7684\u622A\u53D6\u51FD\u6570\uFF0C\u53EA\u9700\u8981\u5207\u7247\u4E00\u4E2A\u64CD\u4F5C\u5C31\u53EF\u4EE5\u5B8C\u6210\uFF0C\u975E\u5E38\u7B80\u5355\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u6709\u4E86\u5207\u7247\u64CD\u4F5C\uFF0C\u5F88\u591A\u5730\u65B9\u5FAA\u73AF\u5C31\u4E0D\u518D\u9700\u8981\u4E86\u3002Python \u7684\u5207\u7247\u975E\u5E38\u7075\u6D3B\uFF0C\u4E00\u884C\u4EE3\u7801\u5C31\u53EF\u4EE5\u5B9E\u73B0\u5F88\u591A\u884C\u5FAA\u73AF\u624D\u80FD\u5B8C\u6210\u7684\u64CD\u4F5C\u3002</p>`,36),o=[e];function c(u,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","slice.html.vue"]]);export{k as default};
