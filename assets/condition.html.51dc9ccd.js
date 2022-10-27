import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,d as t,a as n,b as s,f as o}from"./app.9d9222aa.js";const c={},l=n("p",null,"\u8BA1\u7B97\u673A\u4E4B\u6240\u4EE5\u80FD\u505A\u5F88\u591A\u81EA\u52A8\u5316\u7684\u4EFB\u52A1\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u81EA\u5DF1\u505A\u6761\u4EF6\u5224\u65AD\u3002",-1),i=n("p",null,[s("\u6BD4\u5982\uFF0C\u8F93\u5165\u7528\u6237\u5E74\u9F84\uFF0C\u6839\u636E\u5E74\u9F84\u6253\u5370\u4E0D\u540C\u7684\u5185\u5BB9\uFF0C\u5728 Python \u7A0B\u5E8F\u4E2D\uFF0C\u7528 "),n("code",null,"if"),s(" \u8BED\u53E5\u5B9E\u73B0:")],-1),r=o(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;your age is&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6839\u636E Python \u7684\u7F29\u8FDB\u89C4\u5219\uFF0C\u5982\u679C <code>if</code> \u8BED\u53E5\u5224\u65AD\u662F <code>True</code>\uFF0C\u5C31\u628A\u7F29\u8FDB\u7684\u4E24\u884C <code>print</code> \u8BED\u53E5\u6267\u884C\u4E86\uFF0C\u5426\u5219\uFF0C\u4EC0\u4E48\u4E5F\u4E0D\u505A\u3002</p><p>\u4E5F\u53EF\u4EE5\u7ED9 <code>if</code> \u6DFB\u52A0\u4E00\u4E2A <code>else</code> \u8BED\u53E5\uFF0C\u610F\u601D\u662F\uFF0C\u5982\u679C <code>if</code> \u5224\u65AD\u662F <code>False</code>\uFF0C\u4E0D\u8981\u6267\u884C <code>if</code> \u7684\u5185\u5BB9\uFF0C\u53BB\u628A <code>else</code> \u6267\u884C\u4E86:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;your age is&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;your age is&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teenager&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u4E0D\u8981\u5C11\u5199\u4E86\u5192\u53F7 <code>:</code>\u3002</p><p>\u5F53\u7136\u4E0A\u9762\u7684\u5224\u65AD\u662F\u5F88\u7C97\u7565\u7684\uFF0C\u5B8C\u5168\u53EF\u4EE5\u7528 <code>elif</code> \u505A\u66F4\u7EC6\u81F4\u7684\u5224\u65AD:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> age <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teenager&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;kid&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>elif</code> \u662F <code>else if</code> \u7684\u7F29\u5199\uFF0C\u5B8C\u5168\u53EF\u4EE5\u6709\u591A\u4E2A <code>elif</code>\uFF0C\u6240\u4EE5 <code>if</code> \u8BED\u53E5\u7684\u5B8C\u6574\u5F62\u5F0F\u5C31\u662F:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> <span class="token operator">&lt;</span>\u6761\u4EF6\u5224\u65AD<span class="token number">1</span><span class="token operator">&gt;</span><span class="token punctuation">:</span>
    <span class="token operator">&lt;</span>\u6267\u884C<span class="token number">1</span><span class="token operator">&gt;</span>
<span class="token keyword">elif</span> <span class="token operator">&lt;</span>\u6761\u4EF6\u5224\u65AD<span class="token number">2</span><span class="token operator">&gt;</span><span class="token punctuation">:</span>
    <span class="token operator">&lt;</span>\u6267\u884C<span class="token number">2</span><span class="token operator">&gt;</span>
<span class="token keyword">elif</span> <span class="token operator">&lt;</span>\u6761\u4EF6\u5224\u65AD<span class="token number">3</span><span class="token operator">&gt;</span><span class="token punctuation">:</span>
    <span class="token operator">&lt;</span>\u6267\u884C<span class="token number">3</span><span class="token operator">&gt;</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token operator">&lt;</span>\u6267\u884C<span class="token number">4</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if</code> \u8BED\u53E5\u6267\u884C\u6709\u4E2A\u7279\u70B9\uFF0C\u5B83\u662F\u4ECE\u4E0A\u5F80\u4E0B\u5224\u65AD\uFF0C\u5982\u679C\u5728\u67D0\u4E2A\u5224\u65AD\u4E0A\u662F <code>True</code>\uFF0C\u628A\u8BE5\u5224\u65AD\u5BF9\u5E94\u7684\u8BED\u53E5\u6267\u884C\u540E\uFF0C\u5C31\u5FFD\u7565\u6389\u5269\u4E0B\u7684 <code>elif</code> \u548C <code>else</code>\uFF0C\u6240\u4EE5\uFF0C\u8BF7\u6D4B\u8BD5\u5E76\u89E3\u91CA\u4E3A\u4EC0\u4E48\u4E0B\u9762\u7684\u7A0B\u5E8F\u6253\u5370\u7684\u662F <code>teenager</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teenager&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;kid&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if</code> \u5224\u65AD\u6761\u4EF6\u8FD8\u53EF\u4EE5\u7B80\u5199\uFF0C\u6BD4\u5982\u5199:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> x<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;True&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u8981 <code>x</code> \u662F\u975E\u96F6\u6570\u503C\u3001\u975E\u7A7A\u5B57\u7B26\u4E32\u3001\u975E\u7A7A list \u7B49\uFF0C\u5C31\u5224\u65AD\u4E3A <code>True</code>\uFF0C\u5426\u5219\u4E3A <code>False</code>\u3002</p><h2 id="\u518D\u8BAE-input" tabindex="-1"><a class="header-anchor" href="#\u518D\u8BAE-input" aria-hidden="true">#</a> \u518D\u8BAE input</h2><p>\u6700\u540E\u770B\u4E00\u4E2A\u6709\u95EE\u9898\u7684\u6761\u4EF6\u5224\u65AD\u3002\u5F88\u591A\u540C\u5B66\u4F1A\u7528 <code>input()</code> \u8BFB\u53D6\u7528\u6237\u7684\u8F93\u5165\uFF0C\u8FD9\u6837\u53EF\u4EE5\u81EA\u5DF1\u8F93\u5165\uFF0C\u7A0B\u5E8F\u8FD0\u884C\u5F97\u66F4\u6709\u610F\u601D:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>birth <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;birth: &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> birth <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00\u524D&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00\u540E&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u5165 1982\uFF0C\u7ED3\u679C\u62A5\u9519:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
TypeError: unorderable types: str<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> int<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u56E0\u4E3A <code>input()</code> \u8FD4\u56DE\u7684\u6570\u636E\u7C7B\u578B\u662F <code>str</code>\uFF0C<code>str</code> \u4E0D\u80FD\u76F4\u63A5\u548C\u6574\u6570\u6BD4\u8F83\uFF0C\u5FC5\u987B\u5148\u628A <code>str</code> \u8F6C\u6362\u6210\u6574\u6570\u3002Python \u63D0\u4F9B\u4E86 <code>int()</code> \u51FD\u6570\u6765\u5B8C\u6210\u8FD9\u4EF6\u4E8B\u60C5:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;birth: &#39;</span><span class="token punctuation">)</span>
birth <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">if</span> birth <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00\u524D&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00\u540E&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u8FD0\u884C\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6B63\u786E\u5730\u7ED3\u679C\u3002\u4F46\u662F\uFF0C\u5982\u679C\u8F93\u5165 <code>abc</code> \u5462? \u53C8\u4F1A\u5F97\u5230\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
ValueError: invalid literal <span class="token keyword">for</span> int<span class="token punctuation">(</span><span class="token punctuation">)</span> with base <span class="token number">10</span>: <span class="token string">&#39;abc&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u539F\u6765 <code>int()</code> \u51FD\u6570\u53D1\u73B0\u4E00\u4E2A\u5B57\u7B26\u4E32\u5E76\u4E0D\u662F\u5408\u6CD5\u7684\u6570\u5B57\u65F6\u5C31\u4F1A\u62A5\u9519\uFF0C\u7A0B\u5E8F\u5C31\u9000\u51FA\u4E86\u3002</p><p>\u5982\u4F55\u68C0\u67E5\u5E76\u6355\u83B7\u7A0B\u5E8F\u8FD0\u884C\u671F\u7684\u9519\u8BEF\u5462? \u540E\u9762\u7684\u9519\u8BEF\u548C\u8C03\u8BD5\u4F1A\u8BB2\u5230\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u6761\u4EF6\u5224\u65AD\u53EF\u4EE5\u8BA9\u8BA1\u7B97\u673A\u81EA\u5DF1\u505A\u9009\u62E9\uFF0CPython \u7684 <code>if...elif...else</code> \u5F88\u7075\u6D3B\u3002</p><p>\u6761\u4EF6\u5224\u65AD\u4ECE\u4E0A\u5411\u4E0B\u5339\u914D\uFF0C\u5F53\u6EE1\u8DB3\u6761\u4EF6\u65F6\u6267\u884C\u5BF9\u5E94\u7684\u5757\u5185\u8BED\u53E5\uFF0C\u540E\u7EED\u7684 <code>elif</code> \u548C <code>else</code> \u90FD\u4E0D\u518D\u6267\u884C\u3002</p>`,28);function d(u,k){return e(),p("div",null,[l,i,t(" more "),r])}const b=a(c,[["render",d],["__file","condition.html.vue"]]);export{b as default};
