import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.963e91c8.js";const p={},t=e(`<h2 id="\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C</h2><p>\u9AD8\u9636\u51FD\u6570\u9664\u4E86\u53EF\u4EE5\u63A5\u53D7\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u5916\uFF0C\u8FD8\u53EF\u4EE5\u628A\u51FD\u6570\u4F5C\u4E3A\u7ED3\u679C\u503C\u8FD4\u56DE\u3002</p><p>\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E2A\u53EF\u53D8\u53C2\u6570\u7684\u6C42\u548C\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6C42\u548C\u7684\u51FD\u6570\u662F\u8FD9\u6837\u5B9A\u4E49\u7684:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">calc_sum</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ax <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> n <span class="token keyword">in</span> args<span class="token punctuation">:</span>
        ax <span class="token operator">=</span> ax <span class="token operator">+</span> n
    <span class="token keyword">return</span> ax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u7ACB\u523B\u6C42\u548C\uFF0C\u800C\u662F\u5728\u540E\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6839\u636E\u9700\u8981\u518D\u8BA1\u7B97\u600E\u4E48\u529E? \u53EF\u4EE5\u4E0D\u8FD4\u56DE\u6C42\u548C\u7684\u7ED3\u679C\uFF0C\u800C\u662F\u8FD4\u56DE\u6C42\u548C\u7684\u51FD\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">lazy_sum</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        ax <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> n <span class="token keyword">in</span> args<span class="token punctuation">:</span>
            ax <span class="token operator">=</span> ax <span class="token operator">+</span> n
        <span class="token keyword">return</span> ax
    <span class="token keyword">return</span> <span class="token builtin">sum</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u8C03\u7528 <code>lazy_sum()</code> \u65F6\uFF0C\u8FD4\u56DE\u7684\u5E76\u4E0D\u662F\u6C42\u548C\u7ED3\u679C\uFF0C\u800C\u662F\u6C42\u548C\u51FD\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> lazy_sum<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f
<span class="token operator">&lt;</span>function lazy_sum<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token builtin">locals</span><span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token builtin">sum</span> at <span class="token number">0x101c6ed90</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528\u51FD\u6570 <code>f</code> \u65F6\uFF0C\u624D\u771F\u6B63\u8BA1\u7B97\u6C42\u548C\u7684\u7ED3\u679C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5728\u51FD\u6570 <code>lazy_sum</code> \u4E2D\u53C8\u5B9A\u4E49\u4E86\u51FD\u6570 <code>sum</code>\uFF0C\u5E76\u4E14\uFF0C\u5185\u90E8\u51FD\u6570 <code>sum</code> \u53EF\u4EE5\u5F15\u7528\u5916\u90E8\u51FD\u6570 <code>lazy_sum</code> \u7684\u53C2\u6570\u548C\u5C40\u90E8\u53D8\u91CF\uFF0C\u5F53 <code>lazy_sum</code> \u8FD4\u56DE\u51FD\u6570 sum \u65F6\uFF0C\u76F8\u5173\u53C2\u6570\u548C\u53D8\u91CF\u90FD\u4FDD\u5B58\u5728\u8FD4\u56DE\u7684\u51FD\u6570\u4E2D\uFF0C\u8FD9\u79CD\u79F0\u4E3A\u201C\u95ED\u5305(Closure)\u201D\u7684\u7A0B\u5E8F\u7ED3\u6784\u62E5\u6709\u6781\u5927\u7684\u5A01\u529B\u3002</p><p>\u8BF7\u518D\u6CE8\u610F\u4E00\u70B9\uFF0C\u5F53\u6211\u4EEC\u8C03\u7528 <code>lazy_sum()</code> \u65F6\uFF0C\u6BCF\u6B21\u8C03\u7528\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u5373\u4F7F\u4F20\u5165\u76F8\u540C\u7684\u53C2\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f1 <span class="token operator">=</span> lazy_sum<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f2 <span class="token operator">=</span> lazy_sum<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f1<span class="token operator">==</span>f2
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>f1()</code> \u548C <code>f2()</code> \u7684\u8C03\u7528\u7ED3\u679C\u4E92\u4E0D\u5F71\u54CD\u3002</p><h2 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h2><p>\u6CE8\u610F\u5230\u8FD4\u56DE\u7684\u51FD\u6570\u5728\u5176\u5B9A\u4E49\u5185\u90E8\u5F15\u7528\u4E86\u5C40\u90E8\u53D8\u91CF <code>args</code>\uFF0C\u6240\u4EE5\uFF0C\u5F53\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\u4E86\u4E00\u4E2A\u51FD\u6570\u540E\uFF0C\u5176\u5185\u90E8\u7684\u5C40\u90E8\u53D8\u91CF\u8FD8\u88AB\u65B0\u51FD\u6570\u5F15\u7528\uFF0C\u6240\u4EE5\uFF0C\u95ED\u5305\u7528\u8D77\u6765\u7B80\u5355\uFF0C\u5B9E\u73B0\u8D77\u6765\u53EF\u4E0D\u5BB9\u6613\u3002</p><p>\u53E6\u4E00\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u95EE\u9898\u662F\uFF0C\u8FD4\u56DE\u7684\u51FD\u6570\u5E76\u6CA1\u6709\u7ACB\u523B\u6267\u884C\uFF0C\u800C\u662F\u76F4\u5230\u8C03\u7528\u4E86 <code>f()</code> \u624D\u6267\u884C\u3002\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    fs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
             <span class="token keyword">return</span> i<span class="token operator">*</span>i
        fs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token keyword">return</span> fs

f1<span class="token punctuation">,</span> f2<span class="token punctuation">,</span> f3 <span class="token operator">=</span> count<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6BCF\u6B21\u5FAA\u73AF\uFF0C\u90FD\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u7136\u540E\uFF0C\u628A\u521B\u5EFA\u7684 3 \u4E2A\u51FD\u6570\u90FD\u8FD4\u56DE\u4E86\u3002</p><p>\u60A8\u53EF\u80FD\u8BA4\u4E3A\u8C03\u7528 <code>f1()</code>\uFF0C<code>f2()</code> \u548C <code>f3()</code> \u7ED3\u679C\u5E94\u8BE5\u662F <code>1</code>\uFF0C<code>4</code>\uFF0C<code>9</code>\uFF0C\u4F46\u5B9E\u9645\u7ED3\u679C\u662F:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f1<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">9</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f2<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">9</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f3<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u90E8\u90FD\u662F <code>9</code>! \u539F\u56E0\u5C31\u5728\u4E8E\u8FD4\u56DE\u7684\u51FD\u6570\u5F15\u7528\u4E86\u53D8\u91CF <code>i</code>\uFF0C\u4F46\u5B83\u5E76\u975E\u7ACB\u523B\u6267\u884C\u3002\u7B49\u5230 3 \u4E2A\u51FD\u6570\u90FD\u8FD4\u56DE\u65F6\uFF0C\u5B83\u4EEC\u6240\u5F15\u7528\u7684\u53D8\u91CF <code>i</code> \u5DF2\u7ECF\u53D8\u6210\u4E86 <code>3</code>\uFF0C\u56E0\u6B64\u6700\u7EC8\u7ED3\u679C\u4E3A <code>9</code>\u3002</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>\u8FD4\u56DE\u95ED\u5305\u65F6\u7262\u8BB0\u4E00\u70B9:\u8FD4\u56DE\u51FD\u6570\u4E0D\u8981\u5F15\u7528\u4EFB\u4F55\u5FAA\u73AF\u53D8\u91CF\uFF0C\u6216\u8005\u540E\u7EED\u4F1A\u53D1\u751F\u53D8\u5316\u7684\u53D8\u91CF\u3002</p></div><p>\u5982\u679C\u4E00\u5B9A\u8981\u5F15\u7528\u5FAA\u73AF\u53D8\u91CF\u600E\u4E48\u529E? \u65B9\u6CD5\u662F\u518D\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u8BE5\u51FD\u6570\u7684\u53C2\u6570\u7ED1\u5B9A\u5FAA\u73AF\u53D8\u91CF\u5F53\u524D\u7684\u503C\uFF0C\u65E0\u8BBA\u8BE5\u5FAA\u73AF\u53D8\u91CF\u540E\u7EED\u5982\u4F55\u66F4\u6539\uFF0C\u5DF2\u7ED1\u5B9A\u5230\u51FD\u6570\u53C2\u6570\u7684\u503C\u4E0D\u53D8:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> j<span class="token operator">*</span>j
        <span class="token keyword">return</span> g
    fs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        fs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>f<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># f(i)\u7ACB\u523B\u88AB\u6267\u884C\uFF0C\u56E0\u6B64i\u7684\u5F53\u524D\u503C\u88AB\u4F20\u5165f()</span>
    <span class="token keyword">return</span> fs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u770B\u770B\u7ED3\u679C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f1<span class="token punctuation">,</span> f2<span class="token punctuation">,</span> f3 <span class="token operator">=</span> count<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f1<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f2<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">4</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f3<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F3A\u70B9\u662F\u4EE3\u7801\u8F83\u957F\uFF0C\u53EF\u5229\u7528 lambda \u51FD\u6570\u7F29\u77ED\u4EE3\u7801\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u4E00\u4E2A\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u8BA1\u7B97\u7ED3\u679C\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u3002</p><p>\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u7262\u8BB0\u8BE5\u51FD\u6570\u5E76\u672A\u6267\u884C\uFF0C\u8FD4\u56DE\u51FD\u6570\u4E2D\u4E0D\u8981\u5F15\u7528\u4EFB\u4F55\u53EF\u80FD\u4F1A\u53D8\u5316\u7684\u53D8\u91CF\u3002</p>`,31),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","return-function.html.vue"]]);export{d as default};
