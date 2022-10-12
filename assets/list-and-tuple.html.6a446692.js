import{_ as a,a as t}from"./tuple1.79ba68ce.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,d as c,a as s,b as n,f as l}from"./app.c23862ec.js";const i={},r=s("p",null,[s("code",null,"list"),n(" \u548C "),s("code",null,"tuple"),n(" \u662F Python \u4E2D\u5E38\u7528\u7684\u6570\u636E\u7ED3\u6784\u3002")],-1),u=l(`<h2 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h2><p>Python \u5185\u7F6E\u7684\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u662F\u5217\u8868: list\u3002list \u662F\u4E00\u79CD\u6709\u5E8F\u7684\u96C6\u5408\uFF0C\u53EF\u4EE5\u968F\u65F6\u6DFB\u52A0\u548C\u5220\u9664\u5176\u4E2D\u7684\u5143\u7D20\u3002</p><p>\u6BD4\u5982\uFF0C\u5217\u51FA\u73ED\u91CC\u6240\u6709\u540C\u5B66\u7684\u540D\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u4E00\u4E2A list \u8868\u793A:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D8\u91CF <code>classmates</code> \u5C31\u662F\u4E00\u4E2A list\u3002\u7528 <code>len()</code> \u51FD\u6570\u53EF\u4EE5\u83B7\u5F97 list \u5143\u7D20\u7684\u4E2A\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>classmates<span class="token punctuation">)</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u7D22\u5F15\u6765\u8BBF\u95EE list \u4E2D\u6BCF\u4E00\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\uFF0C\u8BB0\u5F97\u7D22\u5F15\u662F\u4ECE <code>0</code> \u5F00\u59CB\u7684:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token string">&#39;Michael&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token string">&#39;Bob&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token string">&#39;Tracy&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
IndexError<span class="token punctuation">:</span> <span class="token builtin">list</span> index out of <span class="token builtin">range</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7D22\u5F15\u8D85\u51FA\u4E86\u8303\u56F4\u65F6\uFF0CPython \u4F1A\u62A5\u4E00\u4E2A <code>IndexError</code> \u9519\u8BEF\uFF0C\u6240\u4EE5\uFF0C\u8981\u786E\u4FDD\u7D22\u5F15\u4E0D\u8981\u8D8A\u754C\uFF0C\u8BB0\u5F97\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u7684\u7D22\u5F15\u662F <code>len(classmates) - 1</code>\u3002</p><p>\u5982\u679C\u8981\u53D6\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u9664\u4E86\u8BA1\u7B97\u7D22\u5F15\u4F4D\u7F6E\u5916\uFF0C\u8FD8\u53EF\u4EE5\u7528 <code>-1</code> \u505A\u7D22\u5F15\uFF0C\u76F4\u63A5\u83B7\u53D6\u6700\u540E\u4E00\u4E2A\u5143\u7D20:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token string">&#39;Tracy&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5012\u6570\u7B2C 2 \u4E2A\u3001\u5012\u6570\u7B2C 3 \u4E2A:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span>-2<span class="token punctuation">]</span>
<span class="token string">&#39;Bob&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span>-3<span class="token punctuation">]</span>
<span class="token string">&#39;Michael&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span>-4<span class="token punctuation">]</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
IndexError: list index out of range
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u5012\u6570\u7B2C 4 \u4E2A\u5C31\u8D8A\u754C\u4E86\u3002</p><p>list \u662F\u4E00\u4E2A\u53EF\u53D8\u7684\u6709\u5E8F\u8868\uFF0C\u6240\u4EE5\uFF0C\u53EF\u4EE5\u5F80 list \u4E2D\u8FFD\u52A0\u5143\u7D20\u5230\u672B\u5C3E:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;Adam&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Adam&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u628A\u5143\u7D20\u63D2\u5165\u5230\u6307\u5B9A\u7684\u4F4D\u7F6E\uFF0C\u6BD4\u5982\u7D22\u5F15\u53F7\u4E3A <code>1</code> \u7684\u4F4D\u7F6E:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Adam&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u5220\u9664 list \u672B\u5C3E\u7684\u5143\u7D20\uFF0C\u7528 <code>pop()</code> \u65B9\u6CD5:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token string">&#39;Adam&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u5220\u9664\u6307\u5B9A\u4F4D\u7F6E\u7684\u5143\u7D20\uFF0C\u7528 <code>pop(i)</code> \u65B9\u6CD5\uFF0C\u5176\u4E2D <code>i</code> \u662F\u7D22\u5F15\u4F4D\u7F6E:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token string">&#39;Jack&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u628A\u67D0\u4E2A\u5143\u7D20\u66FF\u6362\u6210\u522B\u7684\u5143\u7D20\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8D4B\u503C\u7ED9\u5BF9\u5E94\u7684\u7D22\u5F15\u4F4D\u7F6E:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Sarah&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates
<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sarah&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>list \u91CC\u9762\u7684\u5143\u7D20\u7684\u6570\u636E\u7C7B\u578B\u4E5F\u53EF\u4EE5\u4E0D\u540C\uFF0C\u6BD4\u5982:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Apple&#39;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>list \u5143\u7D20\u4E5F\u53EF\u4EE5\u662F\u53E6\u4E00\u4E2A list\uFF0C\u6BD4\u5982:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;asp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;php&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;scheme&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u6CE8\u610F <code>s</code> \u53EA\u6709 4 \u4E2A\u5143\u7D20\uFF0C\u5176\u4E2D <code>s[2]</code> \u53C8\u662F\u4E00\u4E2A list\uFF0C\u5982\u679C\u62C6\u5F00\u5199\u5C31\u66F4\u5BB9\u6613\u7406\u89E3\u4E86:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;asp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;php&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> <span class="token string">&#39;scheme&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u62FF\u5230 <code>&#39;php&#39;</code> \u53EF\u4EE5\u5199 <code>p[1]</code> \u6216\u8005 <code>s[2][1]</code>\uFF0C\u56E0\u6B64 <code>s</code> \u53EF\u4EE5\u770B\u6210\u662F\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u7C7B\u4F3C\u7684\u8FD8\u6709\u4E09\u7EF4\u3001\u56DB\u7EF4\u2026\u2026\u6570\u7EC4\uFF0C\u4E0D\u8FC7\u5F88\u5C11\u7528\u5230\u3002</p><p>\u5982\u679C\u4E00\u4E2A list \u4E2D\u4E00\u4E2A\u5143\u7D20\u4E5F\u6CA1\u6709\uFF0C\u5C31\u662F\u4E00\u4E2A\u7A7A\u7684 list\uFF0C\u5B83\u7684\u957F\u5EA6\u4E3A 0:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tuple" tabindex="-1"><a class="header-anchor" href="#tuple" aria-hidden="true">#</a> tuple</h2><p>\u53E6\u4E00\u79CD\u6709\u5E8F\u5217\u8868\u53EB\u5143\u7EC4: tuple\u3002tuple \u548C list \u975E\u5E38\u7C7B\u4F3C\uFF0C\u4F46\u662F tuple \u4E00\u65E6\u521D\u59CB\u5316\u5C31\u4E0D\u80FD\u4FEE\u6539\uFF0C\u6BD4\u5982\u540C\u6837\u662F\u5217\u51FA\u540C\u5B66\u7684\u540D\u5B57:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> classmates <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0Cclassmates \u8FD9\u4E2A tuple \u4E0D\u80FD\u53D8\u4E86\uFF0C\u5B83\u4E5F\u6CA1\u6709 <code>append()</code>\uFF0C<code>insert()</code> \u8FD9\u6837\u7684\u65B9\u6CD5\u3002\u5176\u4ED6\u83B7\u53D6\u5143\u7D20\u7684\u65B9\u6CD5\u548C list \u662F\u4E00\u6837\u7684\uFF0C\u60A8\u53EF\u4EE5\u6B63\u5E38\u5730\u4F7F\u7528 <code>classmates[0]</code>\uFF0C<code>classmates[-1]</code>\uFF0C\u4F46\u4E0D\u80FD\u8D4B\u503C\u6210\u53E6\u5916\u7684\u5143\u7D20\u3002</p><p>\u4E0D\u53EF\u53D8\u7684 tuple \u6709\u4EC0\u4E48\u610F\u4E49? \u56E0\u4E3A tuple \u4E0D\u53EF\u53D8\uFF0C\u6240\u4EE5\u4EE3\u7801\u66F4\u5B89\u5168\u3002\u5982\u679C\u53EF\u80FD\uFF0C\u80FD\u7528 tuple \u4EE3\u66FF list \u5C31\u5C3D\u91CF\u7528 tuple\u3002</p><p>tuple \u7684\u9677\u9631: \u5F53\u60A8\u5B9A\u4E49\u4E00\u4E2A tuple \u65F6\uFF0C\u5728\u5B9A\u4E49\u7684\u65F6\u5019\uFF0Ctuple \u7684\u5143\u7D20\u5C31\u5FC5\u987B\u88AB\u786E\u5B9A\u4E0B\u6765\uFF0C\u6BD4\u5982:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8981\u5B9A\u4E49\u4E00\u4E2A\u7A7A\u7684 tuple\uFF0C\u53EF\u4EE5\u5199\u6210 <code>()</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t
<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u8981\u5B9A\u4E49\u4E00\u4E2A\u53EA\u6709 1 \u4E2A\u5143\u7D20\u7684 tuple\uFF0C\u5982\u679C\u60A8\u8FD9\u4E48\u5B9A\u4E49:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9A\u4E49\u7684\u4E0D\u662F tuple\uFF0C\u662F <code>1</code> \u8FD9\u4E2A\u6570! \u8FD9\u662F\u56E0\u4E3A\u62EC\u53F7 <code>()</code> \u65E2\u53EF\u4EE5\u8868\u793A tuple\uFF0C\u53C8\u53EF\u4EE5\u8868\u793A\u6570\u5B66\u516C\u5F0F\u4E2D\u7684\u5C0F\u62EC\u53F7\uFF0C\u8FD9\u5C31\u4EA7\u751F\u4E86\u6B67\u4E49\uFF0C\u56E0\u6B64\uFF0CPython \u89C4\u5B9A\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6309\u5C0F\u62EC\u53F7\u8FDB\u884C\u8BA1\u7B97\uFF0C\u8BA1\u7B97\u7ED3\u679C\u81EA\u7136\u662F 1\u3002</p><p>\u6240\u4EE5\uFF0C\u53EA\u6709 1 \u4E2A\u5143\u7D20\u7684 tuple \u5B9A\u4E49\u65F6\u5FC5\u987B\u52A0\u4E00\u4E2A\u9017\u53F7 <code>,</code>\uFF0C\u6765\u6D88\u9664\u6B67\u4E49:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python \u5728\u663E\u793A\u53EA\u6709 1 \u4E2A\u5143\u7D20\u7684 tuple \u65F6\uFF0C\u4E5F\u4F1A\u52A0\u4E00\u4E2A\u9017\u53F7 <code>,</code>\uFF0C\u4EE5\u514D\u60A8\u8BEF\u89E3\u6210\u6570\u5B66\u8BA1\u7B97\u610F\u4E49\u4E0A\u7684\u62EC\u53F7\u3002</p><p>\u6700\u540E\u6765\u770B\u4E00\u4E2A\u201C\u53EF\u53D8\u7684\u201Dtuple:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;X&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Y&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t
<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Y&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A tuple \u5B9A\u4E49\u7684\u65F6\u5019\u6709 3 \u4E2A\u5143\u7D20\uFF0C\u5206\u522B\u662F <code>&#39;a&#39;</code>\uFF0C<code>&#39;b&#39;</code> \u548C\u4E00\u4E2A list\u3002\u4E0D\u662F\u8BF4 tuple \u4E00\u65E6\u5B9A\u4E49\u540E\u5C31\u4E0D\u53EF\u53D8\u4E86\u5417? \u600E\u4E48\u540E\u6765\u53C8\u53D8\u4E86?</p><p>\u522B\u6025\uFF0C\u6211\u4EEC\u5148\u770B\u770B\u5B9A\u4E49\u7684\u65F6\u5019 tuple \u5305\u542B\u7684 3 \u4E2A\u5143\u7D20:</p><p><img src="`+a+'" alt="tuple \u793A\u610F\u56FE" loading="lazy"></p><p>\u5F53\u6211\u4EEC\u628A list \u7684\u5143\u7D20 <code>&#39;A&#39;</code> \u548C <code>&#39;B&#39;</code> \u4FEE\u6539\u4E3A <code>&#39;X&#39;</code> \u548C <code>&#39;Y&#39;</code> \u540E\uFF0Ctuple \u53D8\u4E3A:</p><p><img src="'+t+'" alt="tuple \u793A\u610F\u56FE" loading="lazy"></p><p>\u8868\u9762\u4E0A\u770B\uFF0Ctuple \u7684\u5143\u7D20\u786E\u5B9E\u53D8\u4E86\uFF0C\u4F46\u5176\u5B9E\u53D8\u7684\u4E0D\u662F tuple \u7684\u5143\u7D20\uFF0C\u800C\u662F list \u7684\u5143\u7D20\u3002tuple \u4E00\u5F00\u59CB\u6307\u5411\u7684 list \u5E76\u6CA1\u6709\u6539\u6210\u522B\u7684 list\uFF0C\u6240\u4EE5\uFF0Ctuple \u6240\u8C13\u7684\u201C\u4E0D\u53D8\u201D\u662F\u8BF4\uFF0Ctuple \u7684\u6BCF\u4E2A\u5143\u7D20\uFF0C\u6307\u5411\u6C38\u8FDC\u4E0D\u53D8\u3002\u5373\u6307\u5411 <code>&#39;a&#39;</code>\uFF0C\u5C31\u4E0D\u80FD\u6539\u6210\u6307\u5411 <code>&#39;b&#39;</code>\uFF0C\u6307\u5411\u4E00\u4E2A list\uFF0C\u5C31\u4E0D\u80FD\u6539\u6210\u6307\u5411\u5176\u4ED6\u5BF9\u8C61\uFF0C\u4F46\u6307\u5411\u7684\u8FD9\u4E2A list \u672C\u8EAB\u662F\u53EF\u53D8\u7684!</p><p>\u7406\u89E3\u4E86 \u201C\u6307\u5411\u4E0D\u53D8\u201D \u540E\uFF0C\u8981\u521B\u5EFA\u4E00\u4E2A\u5185\u5BB9\u4E5F\u4E0D\u53D8\u7684 tuple \u600E\u4E48\u505A? \u90A3\u5C31\u5FC5\u987B\u4FDD\u8BC1 tuple \u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u672C\u8EAB\u4E5F\u4E0D\u80FD\u53D8\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>list \u548C tuple \u662F Python \u5185\u7F6E\u7684\u6709\u5E8F\u96C6\u5408\uFF0C\u4E00\u4E2A\u53EF\u53D8\uFF0C\u4E00\u4E2A\u4E0D\u53EF\u53D8\u3002\u6839\u636E\u9700\u8981\u6765\u9009\u62E9\u4F7F\u7528\u5B83\u4EEC\u3002</p>',59);function d(k,g){return e(),o("div",null,[r,c(" more "),u])}const h=p(i,[["render",d],["__file","list-and-tuple.html.vue"]]);export{h as default};
