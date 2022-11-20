import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,d as e,a as p,f as o}from"./app.6a7adab4.js";const t={},c=p("p",null,"\u9AD8\u9636\u51FD\u6570\u82F1\u6587\u53EB Higher-order function\u3002\u4EC0\u4E48\u662F\u9AD8\u9636\u51FD\u6570? \u628A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\uFF0C\u8FD9\u6837\u7684\u51FD\u6570\u79F0\u4E3A\u9AD8\u9636\u51FD\u6570\u3002",-1),l=o(`<p>\u6211\u4EEC\u4EE5\u5B9E\u9645\u4EE3\u7801\u4E3A\u4F8B\u5B50\uFF0C\u4E00\u6B65\u4E00\u6B65\u6DF1\u5165\u6982\u5FF5\u3002</p><h2 id="\u53D8\u91CF\u53EF\u4EE5\u6307\u5411\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u53EF\u4EE5\u6307\u5411\u51FD\u6570" aria-hidden="true">#</a> \u53D8\u91CF\u53EF\u4EE5\u6307\u5411\u51FD\u6570</h2><p>\u4EE5 Python \u5185\u7F6E\u7684\u6C42\u7EDD\u5BF9\u503C\u7684\u51FD\u6570 <code>abs()</code> \u4E3A\u4F8B\uFF0C\u8C03\u7528\u8BE5\u51FD\u6570\u7528\u4EE5\u4E0B\u4EE3\u7801:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u5982\u679C\u53EA\u5199 <code>abs</code> \u5462?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">abs</span>
<span class="token operator">&lt;</span>built<span class="token operator">-</span><span class="token keyword">in</span> function <span class="token builtin">abs</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u89C1\uFF0C<code>abs(-10)</code> \u662F\u51FD\u6570\u8C03\u7528\uFF0C\u800C <code>abs</code> \u662F\u51FD\u6570\u672C\u8EAB\u3002</p><p>\u8981\u83B7\u5F97\u51FD\u6570\u8C03\u7528\u7ED3\u679C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u7ED3\u679C\u8D4B\u503C\u7ED9\u53D8\u91CF:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x <span class="token operator">=</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x
<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u5982\u679C\u628A\u51FD\u6570\u672C\u8EAB\u8D4B\u503C\u7ED9\u53D8\u91CF\u5462?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> <span class="token builtin">abs</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f
<span class="token operator">&lt;</span>built<span class="token operator">-</span><span class="token keyword">in</span> function <span class="token builtin">abs</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u8BBA: \u51FD\u6570\u672C\u8EAB\u4E5F\u53EF\u4EE5\u8D4B\u503C\u7ED9\u53D8\u91CF\uFF0C\u5373: \u53D8\u91CF\u53EF\u4EE5\u6307\u5411\u51FD\u6570\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u53D8\u91CF\u6307\u5411\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u90A3\u4E48\uFF0C\u53EF\u5426\u901A\u8FC7\u8BE5\u53D8\u91CF\u6765\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570? \u7528\u4EE3\u7801\u9A8C\u8BC1\u4E00\u4E0B:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> <span class="token builtin">abs</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6210\u529F! \u8BF4\u660E\u53D8\u91CF f \u73B0\u5728\u5DF2\u7ECF\u6307\u5411\u4E86 <code>abs</code> \u51FD\u6570\u672C\u8EAB\u3002\u76F4\u63A5\u8C03\u7528 <code>abs()</code> \u51FD\u6570\u548C\u8C03\u7528\u53D8\u91CF <code>f()</code> \u5B8C\u5168\u76F8\u540C\u3002</p><h2 id="\u51FD\u6570\u540D\u4E5F\u662F\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u540D\u4E5F\u662F\u53D8\u91CF" aria-hidden="true">#</a> \u51FD\u6570\u540D\u4E5F\u662F\u53D8\u91CF</h2><p>\u90A3\u4E48\u51FD\u6570\u540D\u662F\u4EC0\u4E48\u5462? \u51FD\u6570\u540D\u5176\u5B9E\u5C31\u662F\u6307\u5411\u51FD\u6570\u7684\u53D8\u91CF! \u5BF9\u4E8E <code>abs()</code> \u8FD9\u4E2A\u51FD\u6570\uFF0C\u5B8C\u5168\u53EF\u4EE5\u628A\u51FD\u6570\u540D <code>abs</code> \u770B\u6210\u53D8\u91CF\uFF0C\u5B83\u6307\u5411\u4E00\u4E2A\u53EF\u4EE5\u8BA1\u7B97\u7EDD\u5BF9\u503C\u7684\u51FD\u6570!</p><p>\u5982\u679C\u628A <code>abs</code> \u6307\u5411\u5176\u4ED6\u5BF9\u8C61\uFF0C\u4F1A\u6709\u4EC0\u4E48\u60C5\u51B5\u53D1\u751F?</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> abs <span class="token operator">=</span> <span class="token number">10</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> abs<span class="token punctuation">(</span>-10<span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
TypeError: <span class="token string">&#39;int&#39;</span> object is not callable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u628A <code>abs</code> \u6307\u5411 <code>10</code> \u540E\uFF0C\u5C31\u65E0\u6CD5\u901A\u8FC7 <code>abs(-10)</code> \u8C03\u7528\u8BE5\u51FD\u6570\u4E86! \u56E0\u4E3A <code>abs</code> \u8FD9\u4E2A\u53D8\u91CF\u5DF2\u7ECF\u4E0D\u6307\u5411\u6C42\u7EDD\u5BF9\u503C\u51FD\u6570\u800C\u662F\u6307\u5411\u4E00\u4E2A\u6574\u6570 10!</p><p>\u5F53\u7136\u5B9E\u9645\u4EE3\u7801\u7EDD\u5BF9\u4E0D\u80FD\u8FD9\u4E48\u5199\uFF0C\u8FD9\u91CC\u662F\u4E3A\u4E86\u8BF4\u660E\u51FD\u6570\u540D\u4E5F\u662F\u53D8\u91CF\u3002\u8981\u6062\u590D <code>abs</code> \u51FD\u6570\uFF0C\u8BF7\u91CD\u542F Python \u4EA4\u4E92\u73AF\u5883\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u7531\u4E8E abs \u51FD\u6570\u5B9E\u9645\u4E0A\u662F\u5B9A\u4E49\u5728 <code>import builtins</code> \u6A21\u5757\u4E2D\u7684\uFF0C\u6240\u4EE5\u8981\u8BA9\u4FEE\u6539 <code>abs</code> \u53D8\u91CF\u7684\u6307\u5411\u5728\u5176\u5B83\u6A21\u5757\u4E5F\u751F\u6548\uFF0C\u8981\u7528 <code>import builtins; builtins.abs = 10</code>\u3002</p></div><h2 id="\u4F20\u5165\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F20\u5165\u51FD\u6570" aria-hidden="true">#</a> \u4F20\u5165\u51FD\u6570</h2><p>\u65E2\u7136\u53D8\u91CF\u53EF\u4EE5\u6307\u5411\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u53C2\u6570\u80FD\u63A5\u6536\u53D8\u91CF\uFF0C\u90A3\u4E48\u4E00\u4E2A\u51FD\u6570\u5C31\u53EF\u4EE5\u63A5\u6536\u53E6\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u79CD\u51FD\u6570\u5C31\u79F0\u4E4B\u4E3A\u9AD8\u9636\u51FD\u6570\u3002</p><p>\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u9AD8\u9636\u51FD\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> f<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> f<span class="token punctuation">(</span>y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u8C03\u7528 <code>add(-5, 6, abs)</code> \u65F6\uFF0C\u53C2\u6570 <code>x</code>\uFF0C<code>y</code> \u548C <code>f</code> \u5206\u522B\u63A5\u6536 <code>-5</code>\uFF0C<code>6</code> \u548C <code>abs</code>\uFF0C\u6839\u636E\u51FD\u6570\u5B9A\u4E49\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63A8\u5BFC\u8BA1\u7B97\u8FC7\u7A0B\u4E3A:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span>
y <span class="token operator">=</span> <span class="token number">6</span>
f <span class="token operator">=</span> <span class="token builtin">abs</span>
f<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> f<span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">11</span>
<span class="token keyword">return</span> <span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u5199\u9AD8\u9636\u51FD\u6570\uFF0C\u5C31\u662F\u8BA9\u51FD\u6570\u7684\u53C2\u6570\u80FD\u591F\u63A5\u6536\u522B\u7684\u51FD\u6570\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u628A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\uFF0C\u8FD9\u6837\u7684\u51FD\u6570\u79F0\u4E3A\u9AD8\u9636\u51FD\u6570\uFF0C\u51FD\u6570\u5F0F\u7F16\u7A0B\u5C31\u662F\u6307\u8FD9\u79CD\u9AD8\u5EA6\u62BD\u8C61\u7684\u7F16\u7A0B\u8303\u5F0F</p>`,31);function i(r,d){return n(),a("div",null,[c,e(" more "),l])}const b=s(t,[["render",i],["__file","intro.html.vue"]]);export{b as default};
