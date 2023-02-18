import{_ as n,X as a,Y as o,a0 as s,Z as e,a3 as l}from"./framework-a4b0319b.js";const t={},d=e("p",null,"JSON: JavaScript Object Notation(JavaScript 对象表示法)",-1),i=e("ul",null,[e("li",null,[e("p",null,"JSON 是存储和交换文本信息的语法。类似 XML。")]),e("li",null,[e("p",null,"JSON 比 XML 更小、更快，更易解析。")]),e("li",null,[e("p",null,"JSON 是轻量级的文本数据交换格式")]),e("li",null,[e("p",null,"JSON 独立于语言: JSON 使用 JavaScript 语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。目前非常多的动态(PHP，JSP，.NET)编程语言都支持 JSON。")]),e("li",null,[e("p",null,"JSON 具有自我描述性，更易理解")])],-1),c=l(`<h2 id="json-值" tabindex="-1"><a class="header-anchor" href="#json-值" aria-hidden="true">#</a> JSON 值</h2><p>JSON 值可以是:</p><ul><li>数字(整数或浮点数)</li><li>字符串(在双引号中)</li><li>逻辑值(<code>true</code> 或 <code>false</code>)</li><li>数组(在中括号中)</li><li>对象(在大括号中)</li><li>null</li></ul><h2 id="json-数字" tabindex="-1"><a class="header-anchor" href="#json-数字" aria-hidden="true">#</a> JSON 数字</h2><p>JSON 数字可以是整型或者浮点型:</p><p><strong>例:</strong></p><ul><li><code>5201314</code></li><li><code>-1</code></li><li><code>3.141592654</code></li></ul><h2 id="json-布尔值" tabindex="-1"><a class="header-anchor" href="#json-布尔值" aria-hidden="true">#</a> JSON 布尔值</h2><p>JSON 布尔值可以是 <code>true</code> 或者 <code>false</code></p><h2 id="json-字符串" tabindex="-1"><a class="header-anchor" href="#json-字符串" aria-hidden="true">#</a> JSON 字符串</h2><p>JSON 字符串需要用双括号 <code>&quot;</code> 包含，如果内部含有英文引号 <code>&quot;</code>，需要使用 <code>\\</code> 转义。</p><p><strong>例:</strong></p><ul><li><code>&quot;unknowIfGuestInDream is handsome&quot;</code></li><li><code>&quot;春眠不觉晓，处处闻啼鸟&quot;</code></li><li><code>&quot;A saying goes: \\&quot;Great hopes make great man.\\&quot;&quot;</code></li></ul><h2 id="json-对象" tabindex="-1"><a class="header-anchor" href="#json-对象" aria-hidden="true">#</a> JSON 对象</h2><p>JSON 对象在大括号 <code>{}</code> 中书写以 <code>键: 值</code> 对的方式书写，不同键值对之间用 <code>,</code> 分隔。</p><p><strong>例:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;heading&quot;</span><span class="token operator">:</span> <span class="token string">&quot;校园卡说明&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;校园卡是东师的金融消费卡&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json-数组" tabindex="-1"><a class="header-anchor" href="#json-数组" aria-hidden="true">#</a> JSON 数组</h2><p>JSON 数组在中括号 <code>[]</code> 中书写，不同元素间用 <code>,</code> 隔开。</p><h2 id="json-null" tabindex="-1"><a class="header-anchor" href="#json-null" aria-hidden="true">#</a> JSON null</h2><p>JSON 可以设置 <code>null</code> 值</p>`,21);function r(u,p){return a(),o("div",null,[d,i,s(" more "),c])}const N=n(t,[["render",r],["__file","index.html.vue"]]);export{N as default};
