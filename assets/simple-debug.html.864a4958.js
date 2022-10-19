import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as p,b as n,e as i,w as l,f as s,r as c}from"./app.6f239d00.js";const r={},u=s(`<p>\u8FD9\u91CC\u662F\u5F00\u53D1\u524D\u5E94\u5F53\u4E86\u89E3\u7684\u5185\u5BB9\uFF0C\u9605\u8BFB\u65F6\u957F\u5927\u7EA6\u4E3A\u4E94\u5206\u949F\u3002</p><h2 id="json-\u6587\u4EF6\u4E2D\u5408\u6CD5\u7684\u503C\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#json-\u6587\u4EF6\u4E2D\u5408\u6CD5\u7684\u503C\u6709\u54EA\u4E9B" aria-hidden="true">#</a> json \u6587\u4EF6\u4E2D\u5408\u6CD5\u7684\u503C\u6709\u54EA\u4E9B</h2><p>\u5408\u6CD5\u7684\u503C\u5927\u5BB6\u7F16\u8F91\u7528\u5230\u7684\u4E00\u5171\u6709\u4E94\u79CD: <strong>number</strong>(\u6570\u5B57)\u3001<strong>boolean</strong>(\u5E03\u5C14\u503C)\u3001<strong>string</strong>(\u5B57\u7B26\u4E32)\u3001<strong>array</strong>(\u6570\u7EC4)\u548C<strong>object</strong>(\u5BF9\u8C61)\u3002</p><h2 id="json-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#json-\u4ECB\u7ECD" aria-hidden="true">#</a> json \u4ECB\u7ECD</h2><h3 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h3><p>\u5BF9\u8C61\u7684\u4E00\u7EC4\u952E\u503C\u5BF9\uFF0C\u4F7F\u7528\u5192\u53F7\u7ED3\u6784\u8868\u793A\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">animal</span><span class="token punctuation">:</span> pets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F6C\u4E3A JavaScript \u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">animal</span><span class="token operator">:</span> <span class="token string">&quot;pets&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Yaml \u4E5F\u5141\u8BB8\u53E6\u4E00\u79CD\u5199\u6CD5\uFF0C\u5C06\u6240\u6709\u952E\u503C\u5BF9\u5199\u6210\u4E00\u4E2A\u884C\u5185\u5BF9\u8C61\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">hash</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Steve<span class="token punctuation">,</span> <span class="token key atrule">foo</span><span class="token punctuation">:</span> bar <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F6C\u4E3A JavaScript \u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Steve&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h3><p>\u4E00\u7EC4\u8FDE\u8BCD\u7EBF\u5F00\u5934\u7684\u884C\uFF0C\u6784\u6210\u4E00\u4E2A\u6570\u7EC4\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> Cat
<span class="token punctuation">-</span> Dog
<span class="token punctuation">-</span> Goldfish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F6C\u4E3A JavaScript \u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Goldfish&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6570\u636E\u7ED3\u6784\u7684\u5B50\u6210\u5458\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5219\u53EF\u4EE5\u5728\u8BE5\u9879\u4E0B\u9762\u7F29\u8FDB\u4E00\u4E2A\u7A7A\u683C\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token punctuation">-</span> Cat
  <span class="token punctuation">-</span> Dog
  <span class="token punctuation">-</span> Goldfish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F6C\u4E3A JavaScript \u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Goldfish&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6570\u7EC4\u4E5F\u53EF\u4EE5\u91C7\u7528\u884C\u5185\u8868\u793A\u6CD5\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">animal</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Cat<span class="token punctuation">,</span> Dog<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F6C\u4E3A JavaScript \u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">animal</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dog&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u590D\u5408\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u590D\u5408\u7ED3\u6784" aria-hidden="true">#</a> \u590D\u5408\u7ED3\u6784</h3><p>\u5BF9\u8C61\u548C\u6570\u7EC4\u53EF\u4EE5\u7ED3\u5408\u4F7F\u7528\uFF0C\u5F62\u6210\u590D\u5408\u7ED3\u6784\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">languages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Ruby
  <span class="token punctuation">-</span> Perl
  <span class="token punctuation">-</span> Python
<span class="token key atrule">websites</span><span class="token punctuation">:</span>
  <span class="token key atrule">YAML</span><span class="token punctuation">:</span> yaml.org
  <span class="token key atrule">Ruby</span><span class="token punctuation">:</span> ruby<span class="token punctuation">-</span>lang.org
  <span class="token key atrule">Python</span><span class="token punctuation">:</span> python.org
  <span class="token key atrule">Perl</span><span class="token punctuation">:</span> use.perl.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F6C\u4E3A JavaScript \u5982\u4E0B\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">{</span>
  <span class="token key atrule">languages</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Ruby&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Perl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">websites</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">YAML</span><span class="token punctuation">:</span> <span class="token string">&quot;yaml.org&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">Ruby</span><span class="token punctuation">:</span> <span class="token string">&quot;ruby-lang.org&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">Python</span><span class="token punctuation">:</span> <span class="token string">&quot;python.org&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">Perl</span><span class="token punctuation">:</span> <span class="token string">&quot;use.perl.org&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EAF\u91CF" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u91CF" aria-hidden="true">#</a> \u7EAF\u91CF</h3><p>\u7EAF\u91CF\u662F\u6700\u57FA\u672C\u7684\u3001\u4E0D\u53EF\u518D\u5206\u7684\u503C\u3002\u4EE5\u4E0B\u6570\u636E\u7C7B\u578B\u90FD\u5C5E\u4E8E JavaScript \u7684\u7EAF\u91CF\u3002</p><ul><li>\u5B57\u7B26\u4E32</li><li>\u5E03\u5C14\u503C</li><li>\u6574\u6570</li><li>\u6D6E\u70B9\u6570</li><li>Null</li><li>\u65F6\u95F4</li><li>\u65E5\u671F</li></ul><p>\u6570\u503C\u76F4\u63A5\u4EE5\u5B57\u9762\u91CF\u7684\u5F62\u5F0F\u8868\u793A\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">12.30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F6C\u4E3A JavaScript \u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">12.3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E03\u5C14\u503C\u7528 <code>true</code> \u548C <code>false</code> \u8868\u793A\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">isSet</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F6C\u4E3A JavaScript \u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">isSet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5982\u4F55\u6253\u5F00\u6216\u7F16\u8F91-json" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u6253\u5F00\u6216\u7F16\u8F91-json" aria-hidden="true">#</a> \u5982\u4F55\u6253\u5F00\u6216\u7F16\u8F91 json</h3>`,43),d=s(`<h3 id="json-\u4E2D\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#json-\u4E2D\u7684\u503C" aria-hidden="true">#</a> json \u4E2D\u7684\u503C</h3><p>\u5408\u6CD5\u7684\u503C\u5927\u5BB6\u7F16\u8F91\u7528\u5230\u7684\u4E00\u5171\u6709\u4E94\u79CD:</p><ul><li><strong>number</strong>(\u6570\u5B57)</li><li><strong>boolean</strong>(\u5E03\u5C14\u503C)</li><li><strong>string</strong>(\u5B57\u7B26\u4E32)</li><li><strong>array</strong>(\u6570\u7EC4)</li><li><strong>object</strong>(\u5BF9\u8C61)</li></ul><h3 id="\u4EC0\u4E48\u662Fnumber" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fnumber" aria-hidden="true">#</a> \u4EC0\u4E48\u662F<strong>number</strong></h3><p><strong>number</strong>\u662F\u53EF\u4EE5\u76F4\u63A5\u53C2\u4E0E\u8FD0\u7B97\u6570\u503C\uFF0C\u6574\u6570\u548C\u5C0F\u6570\u76F4\u63A5\u8868\u793A</p><p><strong>\u4F8B</strong>:</p><ul><li><code>5201314</code></li><li><code>-1</code></li><li><code>3.141592654</code></li></ul><p><strong>\u603B\u7ED3:</strong> \u60F3\u8981\u8868\u8FBE\u5177\u4F53\u7684\u6570\u91CF\u4F7F\u7528\u6570\u5B57\uFF0C\u76F4\u63A5\u8868\u793A\u5373\u53EF\u3002</p><h3 id="\u4EC0\u4E48\u662Fboolean" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fboolean" aria-hidden="true">#</a> \u4EC0\u4E48\u662F<strong>boolean</strong></h3><p><strong>boolean</strong>\u662F\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u771F\u5047\u3002\u53EA\u6709\u4E24\u4E2A: <code>true</code> \u548C <code>false</code>\u3002</p><h3 id="\u4EC0\u4E48\u662Fstring" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fstring" aria-hidden="true">#</a> \u4EC0\u4E48\u662F<strong>string</strong></h3><p><strong>string</strong>\u662F\u5B57\u7B26\u4E32\uFF0C\u7528\u4E8E\u8868\u8FBE\u4E00\u4E32\u6587\u672C\u3002\u5728\u6587\u672C\u5185\u5BB9\u5916\u9762\u5957\u4E0A\u82F1\u6587\u53CC\u5F15\u53F7 <code>&quot;</code> \u5373\u53EF\u8868\u793A<strong>string</strong>\u3002</p><p><strong>\u4F8B</strong>:</p><ul><li><code>&quot;Mr.Hope is handsome&quot;</code></li><li><code>&quot;\u6625\u7720\u4E0D\u89C9\u6653\uFF0C\u5904\u5904\u95FB\u557C\u9E1F&quot;</code></li><li><code>&quot;A saying goes: \\&quot;Great hopes make great man.\\&quot;&quot;</code></li></ul><p><strong>\u8BF7\u6CE8\u610F:</strong> <code>1</code> \u662F <strong>number</strong>\uFF0C\u53EF\u4EE5\u53C2\u52A0\u8FD0\u7B97\uFF1B<code>&quot;1&quot;</code> \u662F<strong>string</strong>\uFF0C\u5B57\u7B26\u4E32\u5185\u5BB9\u4E3A 1\uFF1B\u540C\u7406\uFF0C<code>&quot;true&quot;</code> \u662F<strong>string</strong>\uFF0C<code>true</code> \u624D\u662F\u8868\u793A\u201C\u771F\u201D\u7684 <strong>boolean</strong>\u3002</p><p><strong>\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879:</strong> \u5982\u679C\u60F3\u8981\u5728\u5B57\u7B26\u4E32\u4E2D\u8868\u793A\u56DE\u8F66\uFF0C\u8BF7\u8F93\u5165 <code>\\n</code>\u3002</p><h3 id="\u4EC0\u4E48\u662Farray" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Farray" aria-hidden="true">#</a> \u4EC0\u4E48\u662F<strong>array</strong></h3><p>Array \u4E2D\u6587\u540D\u53EB\u6570\u7EC4\uFF0C\u5B83\u662F\u7528 <code>[</code> <code>]</code> \u5305\u62EC\u8D77\u6765\u7684\u3001\u7528\u82F1\u6587\u9017\u53F7(comma)\u5206\u9694\u5F00\u7684\u5185\u5BB9\u7684\u96C6\u5408\uFF0C\u6BCF\u4E2A\u9879\u53EB\u6570\u7EC4(array)\u7684\u4E00\u4E2A\u5143\u7D20(element)\u3002\u6BCF\u4E2A\u5143\u7D20(element)\u53EF\u4EE5\u662F\u5176\u4ED6\u7684\u4EFB\u4F55\u503C\u7C7B\u578B\u3002</p><p><strong>\u4F8B</strong>:</p><ul><li><code>[1, 2, 3]</code></li><li><code>[-5, &quot;abc&quot;, true]</code> (\u5728\u6B64\u6570\u7EC4\u4E2D\u7B2C\u4E00\u9879\u662F\u6570\u5B57 <code>-5</code>\uFF0C\u7B2C\u4E8C\u9879\u662F\u5B57\u7B26\u4E32 <code>&quot;abc&quot;</code>\uFF0C\u7B2C\u4E09\u9879\u662F\u5E03\u5C14\u503C <code>true</code>\uFF0C\u8BE5\u6570\u7EC4\u662F\u5408\u6CD5\u7684\uFF0C\u6570\u7EC4\u7684\u5143\u7D20\u4E5F\u53EF\u4EE5\u662F\u63A5\u4E0B\u6765\u7684 object)</li><li><code>[&quot;\u5C0F\u7A0B\u5E8F\u5FC5\u706B&quot;, &quot;666&quot;, &quot;Mr.Hope\u6709\u70B9\u5E05&quot;]</code></li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><ul><li><code>[1,2,3,]</code> \u662F\u975E\u6CD5\u7684\uFF0C\u56E0\u4E3A\u6700\u540E\u591A\u4E86\u4E00\u4E2A\u9017\u53F7\u5BFC\u81F4\u683C\u5F0F\u4E0D\u6B63\u786E</li><li><code>[1,2,3</code> \u4E5F\u662F\u975E\u6CD5\u7684\uFF0C\u56E0\u4E3A\u6CA1\u6709\u7ED3\u675F\u6807\u8BC6\u7B26 <code>]</code> \u5BFC\u81F4\u683C\u5F0F\u4E0D\u6B63\u786E</li></ul></div><p><strong>\u603B\u7ED3</strong>:</p><p><strong>array</strong> \u662F\u4E00\u4E2A\u5305\u542B\u82E5\u5E72 <strong>\u5143\u7D20</strong> \u7684\u96C6\u5408\uFF0C\u7528 <code>[</code> <code>]</code> \u8868\u793A\uFF0C\u6BCF\u4E00\u4E2A <strong>\u5143\u7D20</strong> \u4E4B\u95F4\u9700\u8981\u7528 <strong>\u82F1\u6587\u9017\u53F7</strong> \u9694\u5F00\uFF0C\u5373 <code>array = [element1 , element2 , ...]</code>\uFF0C\u5176\u4E2D<strong>\u5143\u7D20</strong>\u53EF\u4EE5\u662F\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u3002</p><h3 id="\u4EC0\u4E48\u662Fobject" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fobject" aria-hidden="true">#</a> \u4EC0\u4E48\u662F<strong>object</strong></h3><p><strong>object</strong> \u4E2D\u6587\u540D\u53EB\u5BF9\u8C61(\u4E0D\u662F\u60A8\u60F3\u7684\u90A3\u4E2A\u5BF9\u8C61)\uFF0C\u5B83\u662F\u7528 <code>{</code> <code>}</code> \u5305\u62EC\u8D77\u6765\u7684\u7528\u9017\u53F7\u5206\u9694\u5F00\u7684\u4E00\u5806\u5C5E\u6027(property)\u7684\u96C6\u5408\uFF0C\u6BCF\u4E2A\u5C5E\u6027(property)\u662F\u4E00\u4E2A\u4E0D\u53EF\u91CD\u590D\u7684\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94\u7740\u4E00\u4E2A\u503C(value)\uFF0C\u7528\u5192\u53F7\u5BF9\u5E94\u3002\u8BE5\u503C(value)\u53EF\u4EE5\u662F\u4EFB\u4F55\u5185\u5BB9\u3002</p><p><strong>\u4F8B</strong>:</p><ul><li><p><code>{&quot;a&quot;:1,&quot;b&quot;:&quot;2&quot;,&quot;c&quot;:true,&quot;d&quot;:&quot;false&quot;}</code></p><p>\u8BE5\u5BF9\u8C61\u6709\u56DB\u9879\uFF0C\u5206\u522B\u662F:</p><ul><li>\u503C\u4E3A\u6570\u5B57 <code>1</code> \u7684 <code>a</code></li><li>\u503C\u4E3A\u5B57\u7B26\u4E32 <code>2</code> \u7684 <code>b</code></li><li>\u503C\u4E3A\u5E03\u5C14\u503C \u771F(<code>true</code>)\u7684 <code>c</code></li><li>\u503C\u4E3A\u5B57\u7B26\u4E32 <code>false</code> \u7684 <code>d</code></li></ul></li><li><p><code>{&quot;tag&quot;:&quot;p&quot;,&quot;head&quot;:&quot;\u6821\u56ED\u5361\u8BF4\u660E&quot;,&quot;text&quot;:&quot;\u6821\u56ED\u5361\u662F\u4E1C\u5E08\u7684\u91D1\u878D\u6D88\u8D39\u5361&quot;}</code>\u3002</p></li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><ul><li><code>{a:1,b:2}</code> \u662F\u975E\u6CD5\u7684\uFF0C\u56E0\u4E3A\u5C5E\u6027\u4E0D\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32</li><li><code>{&quot;a&quot;:1,&quot;a&quot;:2}</code> \u662F\u975E\u6CD5\u7684\uFF0C\u56E0\u4E3A\u5C5E\u6027 <code>a</code> \u51FA\u73B0\u4E86\u4E24\u6B21\u65E0\u6CD5\u786E\u5B9A\u5176\u503C</li><li><code>{a:1,b:2,}</code>\u3001<code>a:1,b:2}</code> \u662F\u975E\u6CD5\u7684\uFF0C\u56E0\u4E3A\u683C\u5F0F\u4E0D\u6B63\u786E\u3002</li></ul></div><p><strong>\u603B\u7ED3</strong>:</p><p><strong>object</strong>\u662F\u4E00\u4E2A\u62E5\u6709\u82E5\u5E72<strong>property</strong>\u7684\u96C6\u5408\uFF0C\u7528 <code>{</code> <code>}</code> \u8868\u793A\uFF0C\u6BCF\u4E00\u4E2A<strong>property</strong>\u90FD\u662F\u4E0D\u53EF\u91CD\u590D\u7684<strong>string</strong>\uFF0C\u800C\u6BCF\u4E2A<strong>property</strong>\u5BF9\u5E94\u7740\u4E00\u4E2A<strong>value</strong>\u5373 <code>object = { property1 : value1 , proprety2 : value2 , ... }</code>\uFF0C\u5176\u4E2D<strong>value</strong>\u53EF\u4EE5\u662F\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u3002</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>\u4F7F\u7528 VS Code \u53EF\u4EE5\u683C\u5F0F\u5316<strong>object</strong>\uFF0C\u53EF\u4EE5\u4F7F<strong>object</strong>\u66F4\u6613\u4E8E\u9605\u8BFB\u3002</p><p>\u5982:</p><p><code>{&quot;tag&quot;:&quot;p&quot;,&quot;head&quot;:&quot;\u6821\u56ED\u5361\u8BF4\u660E&quot;,&quot;text&quot;:&quot;\u6821\u56ED\u5361\u662F\u4E1C\u5E08\u7684\u91D1\u878D\u6D88\u8D39\u5361&quot;}</code></p><p>\u53EF\u4EE5\u683C\u5F0F\u5316\u4E3A:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;heading&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6821\u56ED\u5361\u8BF4\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6821\u56ED\u5361\u662F\u4E1C\u5E08\u7684\u91D1\u878D\u6D88\u8D39\u5361&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u5173\u4E8E\u503C\u7684\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u503C\u7684\u5D4C\u5957" aria-hidden="true">#</a> \u5173\u4E8E\u503C\u7684\u5D4C\u5957</h3><p>\u7531\u4E8E<strong>array</strong>\u7684<strong>element</strong>\u548C <strong>object</strong> \u7684<strong>value</strong>\u53EF\u4EE5\u662F\u4E94\u79CD\u503C\u7684\u4EFB\u4E00\u4E2A\uFF0C\u6545\u53EF\u4EE5\u53D1\u751F\u5D4C\u5957\u3002</p><p><strong>\u5982</strong>:</p><p><code>[{&quot;a&quot;:&quot;Mr.Hope&quot;},{&quot;b&quot;:&quot;Ms.Hope&quot;}]</code></p><p>\u5C31\u662F\u4E00\u4E2A\u6570\u7EC4: <code>[ element1 , element2 ]</code>\uFF0C\u800C\u8BE5\u6570\u7EC4\u7684<strong>element1</strong>\u662F<strong>object</strong><code>{ &quot;a&quot; : &quot;Mr.Hope&quot; }</code>\uFF0C<strong>element2</strong>\u662F<strong>object</strong><code>{ &quot;b&quot; : &quot;Ms.Hope&quot; }</code></p>`,36);function g(v,m){const a=c("RouterLink");return t(),o("div",null,[u,p("p",null,[n("\u63A8\u8350\u4F7F\u7528 VS Code\uFF0C\u5177\u4F53\u8BE6\u89C1"),i(a,{to:"/en/software/vscode/simple.html"},{default:l(()=>[n("VS Code \u7B80\u5355\u4ECB\u7ECD")]),_:1}),n("\u3002")]),d])}const h=e(r,[["render",g],["__file","simple-debug.html.vue"]]);export{h as default};
