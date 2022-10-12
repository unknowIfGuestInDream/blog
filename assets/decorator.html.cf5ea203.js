import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.963e91c8.js";const p={},o=e(`<p>\u7531\u4E8E\u51FD\u6570\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u800C\u4E14\u51FD\u6570\u5BF9\u8C61\u53EF\u4EE5\u88AB\u8D4B\u503C\u7ED9\u53D8\u91CF\uFF0C\u6240\u4EE5\uFF0C\u901A\u8FC7\u53D8\u91CF\u4E5F\u80FD\u8C03\u7528\u8BE5\u51FD\u6570\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;2021-3-15&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> now
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">2021</span><span class="token operator">-</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u5BF9\u8C61\u6709\u4E00\u4E2A <code>__name__</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u62FF\u5230\u51FD\u6570\u7684\u540D\u5B57:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> now<span class="token punctuation">.</span>__name__
<span class="token string">&#39;now&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f<span class="token punctuation">.</span>__name__
<span class="token string">&#39;now&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u5047\u8BBE\u6211\u4EEC\u8981\u589E\u5F3A <code>now()</code> \u51FD\u6570\u7684\u529F\u80FD\uFF0C\u6BD4\u5982\uFF0C\u5728\u51FD\u6570\u8C03\u7528\u524D\u540E\u81EA\u52A8\u6253\u5370\u65E5\u5FD7\uFF0C\u4F46\u53C8\u4E0D\u5E0C\u671B\u4FEE\u6539 <code>now()</code> \u51FD\u6570\u7684\u5B9A\u4E49\uFF0C\u8FD9\u79CD\u5728\u4EE3\u7801\u8FD0\u884C\u671F\u95F4\u52A8\u6001\u589E\u52A0\u529F\u80FD\u7684\u65B9\u5F0F\uFF0C\u79F0\u4E4B\u4E3A\u201C\u88C5\u9970\u5668\u201D (Decorator) \u3002</p><p>\u672C\u8D28\u4E0A\uFF0Cdecorator \u5C31\u662F\u4E00\u4E2A\u8FD4\u56DE\u51FD\u6570\u7684\u9AD8\u9636\u51FD\u6570\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u8981\u5B9A\u4E49\u4E00\u4E2A\u80FD\u6253\u5370\u65E5\u5FD7\u7684 decorator\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u5982\u4E0B:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;call %s():&#39;</span> <span class="token operator">%</span> func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>
<span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kw<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89C2\u5BDF\u4E0A\u9762\u7684 <code>log</code>\uFF0C\u56E0\u4E3A\u5B83\u662F\u4E00\u4E2A decorator\uFF0C\u6240\u4EE5\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u3002\u6211\u4EEC\u8981\u501F\u52A9 Python \u7684 <code>@</code> \u8BED\u6CD5\uFF0C\u628A decorator \u7F6E\u4E8E\u51FD\u6570\u7684\u5B9A\u4E49\u5904:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@log</span>
<span class="token keyword">def</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;2021-3-15&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528 <code>now()</code> \u51FD\u6570\uFF0C\u4E0D\u4EC5\u4F1A\u8FD0\u884C <code>now()</code> \u51FD\u6570\u672C\u8EAB\uFF0C\u8FD8\u4F1A\u5728\u8FD0\u884C <code>now()</code> \u51FD\u6570\u524D\u6253\u5370\u4E00\u884C\u65E5\u5FD7:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> now<span class="token punctuation">(</span><span class="token punctuation">)</span>
call now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token number">2021</span><span class="token operator">-</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u628A <code>@log</code> \u653E\u5230 <code>now()</code> \u51FD\u6570\u7684\u5B9A\u4E49\u5904\uFF0C\u76F8\u5F53\u4E8E\u6267\u884C\u4E86\u8BED\u53E5:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>now <span class="token operator">=</span> log<span class="token punctuation">(</span>now<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7531\u4E8E <code>log()</code> \u662F\u4E00\u4E2A decorator\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u6240\u4EE5\uFF0C\u539F\u6765\u7684 <code>now()</code> \u51FD\u6570\u4ECD\u7136\u5B58\u5728\uFF0C\u53EA\u662F\u73B0\u5728\u540C\u540D\u7684 <code>now</code> \u53D8\u91CF\u6307\u5411\u4E86\u65B0\u7684\u51FD\u6570\uFF0C\u4E8E\u662F\u8C03\u7528 <code>now()</code> \u5C06\u6267\u884C\u65B0\u51FD\u6570\uFF0C\u5373\u5728 <code>log()</code> \u51FD\u6570\u4E2D\u8FD4\u56DE\u7684 <code>wrapper()</code> \u51FD\u6570\u3002</p><p><code>wrapper()</code> \u51FD\u6570\u7684\u53C2\u6570\u5B9A\u4E49\u662F <code>(*args, **kw)</code>\uFF0C\u56E0\u6B64\uFF0C<code>wrapper()</code> \u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4EFB\u610F\u53C2\u6570\u7684\u8C03\u7528\u3002\u5728 <code>wrapper()</code> \u51FD\u6570\u5185\uFF0C\u9996\u5148\u6253\u5370\u65E5\u5FD7\uFF0C\u518D\u7D27\u63A5\u7740\u8C03\u7528\u539F\u59CB\u51FD\u6570\u3002</p><p>\u5982\u679C decorator \u672C\u8EAB\u9700\u8981\u4F20\u5165\u53C2\u6570\uFF0C\u90A3\u5C31\u9700\u8981\u7F16\u5199\u4E00\u4E2A\u8FD4\u56DE decorator \u7684\u9AD8\u9636\u51FD\u6570\uFF0C\u5199\u51FA\u6765\u4F1A\u66F4\u590D\u6742\u3002\u6BD4\u5982\uFF0C\u8981\u81EA\u5B9A\u4E49 <code>log</code> \u7684\u6587\u672C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s %s():&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kw<span class="token punctuation">)</span>
        <span class="token keyword">return</span> wrapper
    <span class="token keyword">return</span> decorator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A 3 \u5C42\u5D4C\u5957\u7684 decorator \u7528\u6CD5\u5982\u4E0B:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@log</span><span class="token punctuation">(</span><span class="token string">&#39;execute&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;2021-3-15&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C\u5982\u4E0B:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> now<span class="token punctuation">(</span><span class="token punctuation">)</span>
execute now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token number">2021</span><span class="token operator">-</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u548C\u4E24\u5C42\u5D4C\u5957\u7684 decorator \u76F8\u6BD4\uFF0C3 \u5C42\u5D4C\u5957\u7684\u6548\u679C\u662F\u8FD9\u6837\u7684:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> now <span class="token operator">=</span> log<span class="token punctuation">(</span><span class="token string">&#39;execute&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u6765\u5256\u6790\u4E0A\u9762\u7684\u8BED\u53E5\uFF0C\u9996\u5148\u6267\u884C <code>log(&#39;execute&#39;)</code>\uFF0C\u8FD4\u56DE\u7684\u662F decorator \u51FD\u6570\uFF0C\u518D\u8C03\u7528\u8FD4\u56DE\u7684\u51FD\u6570\uFF0C\u53C2\u6570\u662F <code>now</code> \u51FD\u6570\uFF0C\u8FD4\u56DE\u503C\u6700\u7EC8\u662F <code>wrapper</code> \u51FD\u6570\u3002</p><p>\u4EE5\u4E0A\u4E24\u79CD decorator \u7684\u5B9A\u4E49\u90FD\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u8FD8\u5DEE\u6700\u540E\u4E00\u6B65\u3002\u56E0\u4E3A\u6211\u4EEC\u8BB2\u4E86\u51FD\u6570\u4E5F\u662F\u5BF9\u8C61\uFF0C\u5B83\u6709 <code>__name__</code>\u7B49\u5C5E\u6027\uFF0C\u4F46\u60A8\u53BB\u770B\u7ECF\u8FC7 decorator \u88C5\u9970\u4E4B\u540E\u7684\u51FD\u6570\uFF0C\u5B83\u4EEC\u7684 <code>__name__</code> \u5DF2\u7ECF\u4ECE\u539F\u6765\u7684 <code>&#39;now&#39;</code> \u53D8\u6210\u4E86 <code>&#39;wrapper&#39;</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> now<span class="token punctuation">.</span>__name__
<span class="token string">&#39;wrapper&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u8FD4\u56DE\u7684\u90A3\u4E2A <code>wrapper()</code> \u51FD\u6570\u540D\u5B57\u5C31\u662F <code>&#39;wrapper&#39;</code>\uFF0C\u6240\u4EE5\uFF0C\u9700\u8981\u628A\u539F\u59CB\u51FD\u6570\u7684 <code>__name__</code> \u7B49\u5C5E\u6027\u590D\u5236\u5230 <code>wrapper()</code> \u51FD\u6570\u4E2D\uFF0C\u5426\u5219\uFF0C\u6709\u4E9B\u4F9D\u8D56\u51FD\u6570\u7B7E\u540D\u7684\u4EE3\u7801\u6267\u884C\u5C31\u4F1A\u51FA\u9519\u3002</p><p>\u4E0D\u9700\u8981\u7F16\u5199 <code>wrapper.__name__ = func.__name__</code> \u8FD9\u6837\u7684\u4EE3\u7801\uFF0CPython \u5185\u7F6E\u7684 <code>functools.wraps</code> \u5C31\u662F\u5E72\u8FD9\u4E2A\u4E8B\u7684\uFF0C\u6240\u4EE5\uFF0C\u4E00\u4E2A\u5B8C\u6574\u7684 decorator \u7684\u5199\u6CD5\u5982\u4E0B:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;call %s():&#39;</span> <span class="token operator">%</span> func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>
<span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kw<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u9488\u5BF9\u5E26\u53C2\u6570\u7684 decorator:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s %s():&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kw<span class="token punctuation">)</span>
        <span class="token keyword">return</span> wrapper
    <span class="token keyword">return</span> decorator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>import functools</code> \u662F\u5BFC\u5165 <code>functools</code> \u6A21\u5757\u3002\u6A21\u5757\u7684\u6982\u5FF5\u7A0D\u5019\u8BB2\u89E3\u3002\u73B0\u5728\uFF0C\u53EA\u9700\u8BB0\u4F4F\u5728\u5B9A\u4E49 <code>wrapper()</code> \u7684\u524D\u9762\u52A0\u4E0A <code>@functools.wraps(func)</code> \u5373\u53EF\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u5728\u9762\u5411\u5BF9\u8C61 (OOP) \u7684\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\uFF0Cdecorator \u88AB\u79F0\u4E3A\u88C5\u9970\u6A21\u5F0F\u3002OOP \u7684\u88C5\u9970\u6A21\u5F0F\u9700\u8981\u901A\u8FC7\u7EE7\u627F\u548C\u7EC4\u5408\u6765\u5B9E\u73B0\uFF0C\u800C Python \u9664\u4E86\u80FD\u652F\u6301 OOP \u7684 decorator \u5916\uFF0C\u76F4\u63A5\u4ECE\u8BED\u6CD5\u5C42\u6B21\u652F\u6301 decorator\u3002Python \u7684 decorator \u53EF\u4EE5\u7528\u51FD\u6570\u5B9E\u73B0\uFF0C\u4E5F\u53EF\u4EE5\u7528\u7C7B\u5B9E\u73B0\u3002</p><p>decorator \u53EF\u4EE5\u589E\u5F3A\u51FD\u6570\u7684\u529F\u80FD\uFF0C\u5B9A\u4E49\u8D77\u6765\u867D\u7136\u6709\u70B9\u590D\u6742\uFF0C\u4F46\u4F7F\u7528\u8D77\u6765\u975E\u5E38\u7075\u6D3B\u548C\u65B9\u4FBF\u3002</p><p>\u8BF7\u7F16\u5199\u4E00\u4E2A decorator\uFF0C\u80FD\u5728\u51FD\u6570\u8C03\u7528\u7684\u524D\u540E\u6253\u5370\u51FA <code>&#39;begin call&#39;</code> \u548C <code>&#39;end call&#39;</code> \u7684\u65E5\u5FD7\u3002</p><p>\u518D\u601D\u8003\u4E00\u4E0B\u80FD\u5426\u5199\u51FA\u4E00\u4E2A <code>@log</code> \u7684 decorator\uFF0C\u4F7F\u5B83\u65E2\u652F\u6301:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@log</span>
<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C8\u652F\u6301:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@log</span><span class="token punctuation">(</span><span class="token string">&#39;execute&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),t=[o];function c(l,i){return s(),a("div",null,t)}const d=n(p,[["render",c],["__file","decorator.html.vue"]]);export{d as default};
