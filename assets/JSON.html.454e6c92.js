import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,d as o,a as n,b as s,f as e}from"./app.70f43444.js";const c={},l=n("p",null,[n("code",null,"JSON"),s(" \u662F "),n("code",null,"JavaScript Object Notation"),s(" \u7684\u7F29\u5199\uFF0C\u5B83\u662F\u4E00\u79CD\u6570\u636E\u4EA4\u6362\u683C\u5F0F\u3002")],-1),i=e(`<p>\u5728 JSON \u51FA\u73B0\u4E4B\u524D\uFF0C\u5927\u5BB6\u4E00\u76F4\u7528 XML \u6765\u4F20\u9012\u6570\u636E\u3002\u56E0\u4E3A XML \u662F\u4E00\u79CD\u7EAF\u6587\u672C\u683C\u5F0F\uFF0C\u6240\u4EE5\u5B83\u9002\u5408\u5728\u7F51\u7EDC\u4E0A\u4EA4\u6362\u6570\u636E\u3002XML \u672C\u8EAB\u4E0D\u7B97\u590D\u6742\uFF0C\u4F46\u662F\uFF0C\u52A0\u4E0A DTD\u3001XSD\u3001XPath\u3001XSLT \u7B49\u4E00\u5927\u5806\u590D\u6742\u7684\u89C4\u8303\u4EE5\u540E\uFF0C\u4EFB\u4F55\u6B63\u5E38\u7684\u8F6F\u4EF6\u5F00\u53D1\u4EBA\u5458\u78B0\u5230 XML \u90FD\u4F1A\u611F\u89C9\u5934\u5927\u4E86\uFF0C\u6700\u540E\u5927\u5BB6\u53D1\u73B0\uFF0C\u5373\u4F7F\u60A8\u52AA\u529B\u94BB\u7814\u51E0\u4E2A\u6708\uFF0C\u4E5F\u672A\u5FC5\u641E\u5F97\u6E05\u695A XML \u7684\u89C4\u8303\u3002</p><p>\u7EC8\u4E8E\uFF0C\u5728 2002 \u5E74\u7684\u4E00\u5929\uFF0C\u9053\u683C\u62C9\u65AF\xB7\u514B\u7F57\u514B\u798F\u7279 (Douglas Crockford) \u540C\u5B66\u4E3A\u4E86\u62EF\u6551\u6DF1\u9677\u6C34\u6DF1\u706B\u70ED\u540C\u65F6\u53C8\u88AB\u67D0\u51E0\u4E2A\u5DE8\u578B\u8F6F\u4EF6\u4F01\u4E1A\u957F\u671F\u611A\u5F04\u7684\u8F6F\u4EF6\u5DE5\u7A0B\u5E08\uFF0C\u53D1\u660E\u4E86 JSON \u8FD9\u79CD\u8D85\u8F7B\u91CF\u7EA7\u7684\u6570\u636E\u4EA4\u6362\u683C\u5F0F\u3002</p><p>\u9053\u683C\u62C9\u65AF\u540C\u5B66\u957F\u671F\u62C5\u4EFB\u96C5\u864E\u7684\u9AD8\u7EA7\u67B6\u6784\u5E08\uFF0C\u81EA\u7136\u949F\u60C5\u4E8E JavaScript\u3002\u4ED6\u8BBE\u8BA1\u7684 JSON \u5B9E\u9645\u4E0A\u662F JavaScript \u7684\u4E00\u4E2A\u5B50\u96C6\u3002\u5728 JSON \u4E2D\uFF0C\u4E00\u5171\u5C31\u8FD9\u4E48\u51E0\u79CD\u6570\u636E\u7C7B\u578B:</p><ul><li>number: \u548C JavaScript \u7684 number \u5B8C\u5168\u4E00\u81F4\uFF1B</li><li>boolean: \u5C31\u662F JavaScript \u7684 <code>true</code> \u6216 <code>false\uFF1B</code></li><li>string: \u5C31\u662F JavaScript \u7684 string\uFF1B</li><li>null: \u5C31\u662F JavaScript \u7684 <code>null</code>\uFF1B</li><li>array: \u5C31\u662F JavaScript \u7684 Array \u8868\u793A\u65B9\u5F0F\u2014\u2014 <code>[]</code>\uFF1B</li><li>object: \u5C31\u662F JavaScript \u7684 <code>{ ... }</code> \u8868\u793A\u65B9\u5F0F\u3002</li></ul><p>\u4EE5\u53CA\u4E0A\u9762\u7684\u4EFB\u610F\u7EC4\u5408\u3002</p><p>\u5E76\u4E14\uFF0CJSON \u8FD8\u5B9A\u6B7B\u4E86\u5B57\u7B26\u96C6\u5FC5\u987B\u662F UTF-8\uFF0C\u8868\u793A\u591A\u8BED\u8A00\u5C31\u6CA1\u6709\u95EE\u9898\u4E86\u3002\u4E3A\u4E86\u7EDF\u4E00\u89E3\u6790\uFF0CJSON \u7684\u5B57\u7B26\u4E32\u89C4\u5B9A\u5FC5\u987B\u7528\u53CC\u5F15\u53F7 <code>&quot;&quot;</code>\uFF0CObject \u7684\u952E\u4E5F\u5FC5\u987B\u7528\u53CC\u5F15\u53F7 <code>&quot;&quot;</code>\u3002</p><p>\u7531\u4E8E JSON \u975E\u5E38\u7B80\u5355\uFF0C\u5F88\u5FEB\u5C31\u98CE\u9761 Web \u4E16\u754C\uFF0C\u5E76\u4E14\u6210\u4E3A ECMA \u6807\u51C6\u3002\u51E0\u4E4E\u6240\u6709\u7F16\u7A0B\u8BED\u8A00\u90FD\u6709\u89E3\u6790 JSON \u7684\u5E93\uFF0C\u800C\u5728 JavaScript \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 JSON\uFF0C\u56E0\u4E3A JavaScript \u5185\u7F6E\u4E86 JSON \u7684\u89E3\u6790\u3002</p><p>\u628A\u4EFB\u4F55 JavaScript \u5BF9\u8C61\u53D8\u6210 JSON\uFF0C\u5C31\u662F\u628A\u8FD9\u4E2A\u5BF9\u8C61\u5E8F\u5217\u5316\u6210\u4E00\u4E2A JSON \u683C\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u8FD9\u6837\u624D\u80FD\u591F\u901A\u8FC7\u7F51\u7EDC\u4F20\u9012\u7ED9\u5176\u4ED6\u8BA1\u7B97\u673A\u3002</p><p>\u5982\u679C\u6211\u4EEC\u6536\u5230\u4E00\u4E2A JSON \u683C\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u53EA\u9700\u8981\u628A\u5B83\u53CD\u5E8F\u5217\u5316\u6210\u4E00\u4E2A JavaScript \u5BF9\u8C61\uFF0C\u5C31\u53EF\u4EE5\u5728 JavaScript \u4E2D\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2A\u5BF9\u8C61\u4E86\u3002</p><h2 id="\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#\u5E8F\u5217\u5316" aria-hidden="true">#</a> \u5E8F\u5217\u5316</h2><p>\u8BA9\u6211\u4EEC\u5148\u628A\u5C0F\u660E\u8FD9\u4E2A\u5BF9\u8C61\u5E8F\u5217\u5316\u6210 JSON \u683C\u5F0F\u7684\u5B57\u7B26\u4E32:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.65</span><span class="token punctuation">,</span>
  <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;middle-school&quot;</span><span class="token operator">:</span> <span class="token string">&#39;&quot;W3C&quot; Middle School&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisp&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u8F93\u51FA\u5F97\u597D\u770B\u4E00\u4E9B\uFF0C\u53EF\u4EE5\u52A0\u4E0A\u53C2\u6570\uFF0C\u6309\u7F29\u8FDB\u8F93\u51FA:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7ED3\u679C:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1.65</span><span class="token punctuation">,</span>
  <span class="token property">&quot;grade&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;middle-school&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;W3C\\&quot; Middle School&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisp&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7528\u4E8E\u63A7\u5236\u5982\u4F55\u7B5B\u9009\u5BF9\u8C61\u7684\u952E\u503C\uFF0C\u5982\u679C\u6211\u4EEC\u53EA\u60F3\u8F93\u51FA\u6307\u5B9A\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F20\u5165 <code>Array</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;skills&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7ED3\u679C:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisp&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u6837\u5BF9\u8C61\u7684\u6BCF\u4E2A\u952E\u503C\u5BF9\u90FD\u4F1A\u88AB\u51FD\u6570\u5148\u5904\u7406:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">convert</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">,</span> convert<span class="token punctuation">,</span> <span class="token string">&quot;  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u628A\u6240\u6709\u5C5E\u6027\u503C\u90FD\u53D8\u6210\u5927\u5199:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1.65</span><span class="token punctuation">,</span>
  <span class="token property">&quot;grade&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;middle-school&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;W3C\\&quot; MIDDLE SCHOOL&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JAVASCRIPT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;JAVA&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PYTHON&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LISP&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6211\u4EEC\u8FD8\u60F3\u8981\u7CBE\u786E\u63A7\u5236\u5982\u4F55\u5E8F\u5217\u5316\u5C0F\u660E\uFF0C\u53EF\u4EE5\u7ED9 <code>xiaoming</code> \u5B9A\u4E49\u4E00\u4E2A <code>toJSON()</code> \u7684\u65B9\u6CD5\uFF0C\u76F4\u63A5\u8FD4\u56DE JSON \u5E94\u8BE5\u5E8F\u5217\u5316\u7684\u6570\u636E:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.65</span><span class="token punctuation">,</span>
  <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;middle-school&quot;</span><span class="token operator">:</span> <span class="token string">&#39;&quot;W3C&quot; Middle School&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisp&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53EA\u8F93\u51FAname\u548Cage\uFF0C\u5E76\u4E14\u6539\u53D8\u4E86key:</span>
      <span class="token literal-property property">Name</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      <span class="token literal-property property">Age</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;{&quot;Name&quot;:&quot;\u5C0F\u660E&quot;,&quot;Age&quot;:14}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53CD\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5E8F\u5217\u5316" aria-hidden="true">#</a> \u53CD\u5E8F\u5217\u5316</h2><p>\u62FF\u5230\u4E00\u4E2A JSON \u683C\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u6211\u4EEC\u76F4\u63A5\u7528 <code>JSON.parse()</code> \u628A\u5B83\u53D8\u6210\u4E00\u4E2A JavaScript \u5BF9\u8C61:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;[1,2,3,true]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, true]</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;{&quot;name&quot;:&quot;\u5C0F\u660E&quot;,&quot;age&quot;:14}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Object {name: &#39;\u5C0F\u660E&#39;, age: 14}</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;123.45&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123.45</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>JSON.parse()</code> \u8FD8\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u8F6C\u6362\u89E3\u6790\u51FA\u7684\u5C5E\u6027:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;{&quot;name&quot;:&quot;\u5C0F\u660E&quot;,&quot;age&quot;:14}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  key <span class="token operator">===</span> <span class="token string">&quot;name&quot;</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u540C\u5B66</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> value
<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: &#39;\u5C0F\u660E\u540C\u5B66&#39;, age: 14}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 JavaScript \u4E2D\u4F7F\u7528 JSON\uFF0C\u5C31\u662F\u8FD9\u4E48\u7B80\u5355!</p>`,32);function u(r,k){return t(),p("div",null,[l,o(" more "),i])}const m=a(c,[["render",u],["__file","JSON.html.vue"]]);export{m as default};
