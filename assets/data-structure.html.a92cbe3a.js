import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,d,a as n,e as s,w as o,f as t,b as e,r as i}from"./app.6a7adab4.js";const r={},u=t("<p>JavaScript \u8BED\u8A00\u7684\u6BCF\u4E00\u4E2A\u503C\uFF0C\u90FD\u5C5E\u4E8E\u67D0\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u3002JavaScript \u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5171\u6709\u516D\u79CD\u3002</p><ul><li>\u6570\u503C (number): \u6574\u6570\u548C\u5C0F\u6570(\u6BD4\u5982 <code>1</code> \u548C <code>3.14</code>)</li><li>\u5B57\u7B26\u4E32 (string): \u6587\u672C(\u6BD4\u5982 <code>Hello World</code>)\u3002</li><li>\u5E03\u5C14\u503C (boolean): \u8868\u793A\u771F\u4F2A\u7684\u4E24\u4E2A\u7279\u6B8A\u503C\uFF0C\u5373 <code>true</code> (\u771F) \u548C <code>false</code> (\u5047)</li><li><code>undefined</code>: \u8868\u793A\u201C\u672A\u5B9A\u4E49\u201D\u6216\u4E0D\u5B58\u5728\uFF0C\u5373\u7531\u4E8E\u76EE\u524D\u6CA1\u6709\u5B9A\u4E49\uFF0C\u6240\u4EE5\u6B64\u5904\u6682\u65F6\u6CA1\u6709\u4EFB\u4F55\u503C</li><li><code>null</code>: \u8868\u793A\u7A7A\u503C\uFF0C\u5373\u6B64\u5904\u7684\u503C\u4E3A\u7A7A\u3002</li><li>\u5BF9\u8C61 (object): \u5404\u79CD\u503C\u7EC4\u6210\u7684\u96C6\u5408\u3002</li></ul>",2),m=t(`<h2 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h2><p>JavaScript \u4E0D\u533A\u5206\u6574\u6570\u548C\u6D6E\u70B9\u6570\uFF0C\u7EDF\u4E00\u7528 <code>Number</code> \u8868\u793A\uFF0C\u4EE5\u4E0B\u90FD\u662F\u5408\u6CD5\u7684 <code>Number</code> \u7C7B\u578B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// \u6574\u6570 123</span>
<span class="token number">0.456</span><span class="token punctuation">;</span> <span class="token comment">// \u6D6E\u70B9\u6570 0.456</span>
<span class="token number">1.2345e3</span><span class="token punctuation">;</span> <span class="token comment">// \u79D1\u5B66\u8BA1\u6570\u6CD5\u8868\u793A 1.2345x1000\uFF0C\u7B49\u540C\u4E8E 1234.5</span>
<span class="token operator">-</span><span class="token number">99</span><span class="token punctuation">;</span> <span class="token comment">// \u8D1F\u6570</span>
<span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// NaN \u8868\u793A Not a Number\uFF0C\u5F53\u65E0\u6CD5\u8BA1\u7B97\u7ED3\u679C\u65F6\u7528 NaN \u8868\u793A</span>
<span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// Infinity \u8868\u793A\u65E0\u9650\u5927\uFF0C\u5F53\u6570\u503C\u8D85\u8FC7\u4E86 JavaScript \u7684 Number \u6240\u80FD\u8868\u793A\u7684\u6700\u5927\u503C\u65F6\uFF0C\u5C31\u8868\u793A\u4E3A Infinity</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k=n("h2",{id:"\u5B57\u7B26\u4E32",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B57\u7B26\u4E32","aria-hidden":"true"},"#"),e(" \u5B57\u7B26\u4E32")],-1),v=n("p",null,[e("\u5B57\u7B26\u4E32 (String) \u662F\u4EE5\u5355\u5F15\u53F7 "),n("code",null,"'"),e(" \u6216\u53CC\u5F15\u53F7 "),n("code",null,'"'),e(" \u62EC\u8D77\u6765\u7684\u4EFB\u610F\u6587\u672C\uFF0C\u6BD4\u5982 "),n("code",null,"'abc'"),e("\uFF0C"),n("code",null,'"xyz"'),e(" \u7B49\u7B49\u3002")],-1),b=t(`<h2 id="\u5E03\u5C14\u503C" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u503C" aria-hidden="true">#</a> \u5E03\u5C14\u503C</h2><p>\u5E03\u5C14\u503C (Boolean) \u548C\u5E03\u5C14\u4EE3\u6570\u7684\u8868\u793A\u5B8C\u5168\u4E00\u81F4\uFF0C\u4E00\u4E2A\u5E03\u5C14\u503C\u53EA\u6709 <code>true</code>\u3001<code>false</code> \u4E24\u79CD\u503C\uFF0C\u8981\u4E48\u662F <code>true</code>\uFF0C\u8981\u4E48\u662F <code>false</code>\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528 <code>true</code>\u3001<code>false</code> \u8868\u793A\u5E03\u5C14\u503C\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5E03\u5C14\u8FD0\u7B97\u8BA1\u7B97\u51FA\u6765:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u662F\u4E00\u4E2A true \u503C</span>
<span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u662F\u4E00\u4E2A false \u503C</span>
<span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u662F\u4E00\u4E2A true \u503C</span>
<span class="token number">2</span> <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u662F\u4E00\u4E2A false \u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u5217\u8FD0\u7B97\u7B26\u4F1A\u8FD4\u56DE\u5E03\u5C14\u503C:</p><ul><li>\u524D\u7F6E\u903B\u8F91\u8FD0\u7B97\u7B26: <code>!</code> (Not)</li><li>\u76F8\u7B49\u8FD0\u7B97\u7B26: <code>===</code>\uFF0C<code>!==</code>\uFF0C<code>==</code>\uFF0C<code>!=</code></li><li>\u6BD4\u8F83\u8FD0\u7B97\u7B26: <code>&gt;</code>\uFF0C<code>&gt;=</code>\uFF0C<code>&lt;</code>\uFF0C<code>&lt;=</code></li></ul><hr>`,6),h=t(`<h2 id="null-\u548C-undefined" tabindex="-1"><a class="header-anchor" href="#null-\u548C-undefined" aria-hidden="true">#</a> null \u548C undefined</h2><p><code>null</code> \u8868\u793A\u4E00\u4E2A \u201C\u7A7A\u201D \u7684\u503C\uFF0C\u5B83\u548C <code>0</code> \u4EE5\u53CA\u7A7A\u5B57\u7B26\u4E32 <code>&#39;&#39;</code> \u4E0D\u540C\uFF0C<code>0</code> \u662F\u4E00\u4E2A\u6570\u503C\uFF0C<code>&#39;&#39;</code> \u8868\u793A\u957F\u5EA6\u4E3A 0 \u7684\u5B57\u7B26\u4E32\uFF0C\u800C <code>null</code> \u8868\u793A\u201C\u7A7A\u201D\u3002</p><p>\u5728\u5176\u4ED6\u8BED\u8A00\u4E2D\uFF0C\u4E5F\u6709\u7C7B\u4F3C JavaScript \u7684 <code>null</code> \u7684\u8868\u793A\uFF0C\u4F8B\u5982 Java \u4E5F\u7528 <code>null</code>\uFF0CSwift \u7528 <code>nil</code>\uFF0CPython \u7528 <code>None</code> \u8868\u793A\u3002\u4F46\u662F\uFF0C\u5728 JavaScript \u4E2D\uFF0C\u8FD8\u6709\u4E00\u4E2A\u548C <code>null</code> \u7C7B\u4F3C\u7684 <code>undefined</code>\uFF0C\u5B83\u8868\u793A \u201C\u672A\u5B9A\u4E49\u201D\u3002</p><p>JavaScript \u7684\u8BBE\u8BA1\u8005\u5E0C\u671B\u7528 <code>null</code> \u8868\u793A\u4E00\u4E2A\u7A7A\u7684\u503C\uFF0C\u800C <code>undefined</code> \u8868\u793A\u503C\u672A\u5B9A\u4E49\u3002\u4E8B\u5B9E\u8BC1\u660E\uFF0C\u8FD9\u5E76\u6CA1\u6709\u4EC0\u4E48\u5375\u7528\uFF0C\u533A\u5206\u4E24\u8005\u7684\u610F\u4E49\u4E0D\u5927\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u90FD\u5E94\u8BE5\u7528 <code>null</code>\u3002<code>undefined</code> \u4EC5\u4EC5\u5728\u5224\u65AD\u51FD\u6570\u53C2\u6570\u662F\u5426\u4F20\u9012\u7684\u60C5\u51B5\u4E0B\u6709\u7528\u3002</p><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><p>\u6570\u7EC4 (Array) \u662F\u4E00\u7EC4<strong>\u6309\u987A\u5E8F</strong>\u6392\u5217\u7684<strong>\u96C6\u5408</strong>\uFF0C\u96C6\u5408\u7684\u6BCF\u4E2A\u503C\u79F0\u4E3A<strong>\u5143\u7D20</strong>\u3002JavaScript \u7684\u6570\u7EC4\u53EF\u4EE5\u5305\u62EC\u4EFB\u610F\u6570\u636E\u7C7B\u578B\u3002\u4F8B\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u6570\u7EC4\u5305\u542B 6 \u4E2A\u5143\u7D20\u3002\u6570\u7EC4\u7528 <code>[]</code> \u8868\u793A\uFF0C\u5143\u7D20\u4E4B\u95F4\u7528 <code>,</code> \u5206\u9694\u3002</p>`,8),g=t(`<h2 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h2><p>JavaScript \u7684\u5BF9\u8C61 (Object) \u662F\u4E00\u7EC4\u7531 <strong><code>\u952E-\u503C</code></strong> \u7EC4\u6210\u7684<strong>\u65E0\u5E8F</strong>\u96C6\u5408\uFF0C\u4F8B\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Mr.Hope&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isHandsome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1998</span><span class="token punctuation">,</span>
  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Middle School&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.76</span><span class="token punctuation">,</span>
  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token literal-property property">car</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript \u5BF9\u8C61\u7684\u952E\u90FD\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u503C\u53EF\u4EE5\u662F\u4EFB\u610F\u6570\u636E\u7C7B\u578B\u3002\u4E0A\u8FF0 <code>person</code> \u5BF9\u8C61\u4E00\u5171\u5B9A\u4E49\u4E86 6 \u4E2A\u952E\u503C\u5BF9\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u952E\u53C8\u79F0\u4E3A\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u4F8B\u5982\uFF0C<code>person</code> \u7684 <code>name</code> \u5C5E\u6027\u4E3A <code>&#39;Bob&#39;</code>\uFF0C<code>zipcode</code> \u5C5E\u6027\u4E3A <code>null</code>\u3002</p><p>\u8981\u83B7\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u6211\u4EEC\u7528 <code>Object.Key</code> \u7684\u65B9\u5F0F:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>person<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;Mr.Hope&#39;</span>
person<span class="token punctuation">.</span>zipcode<span class="token punctuation">;</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function f(_,y){const a=i("RouterLink");return l(),p("div",null,[u,d(" more "),n("ul",null,[n("li",null,[s(a,{to:"/en/code/language/js/types/"},{default:o(()=>[e("\u6DF1\u5165\u4E86\u89E3\u6570\u636E\u7C7B\u578B")]),_:1})])]),m,n("ul",null,[n("li",null,[s(a,{to:"/en/code/language/js/types/number.html"},{default:o(()=>[e("\u6DF1\u5165\u4E86\u89E3 Number")]),_:1})])]),k,v,n("ul",null,[n("li",null,[s(a,{to:"/en/code/language/js/guide/string.html"},{default:o(()=>[e("\u5B57\u7B26\u4E32\u5165\u95E8")]),_:1})]),n("li",null,[s(a,{to:"/en/code/language/js/types/string.html"},{default:o(()=>[e("\u6DF1\u5165\u4E86\u89E3 String")]),_:1})])]),b,n("ul",null,[n("li",null,[s(a,{to:"/en/code/language/js/guide/boolean.html"},{default:o(()=>[e("\u5E03\u5C14\u503C\u5165\u95E8")]),_:1})])]),h,n("ul",null,[n("li",null,[s(a,{to:"/en/code/language/js/guide/array.html"},{default:o(()=>[e("\u6570\u7EC4\u5165\u95E8")]),_:1})]),n("li",null,[s(a,{to:"/en/code/language/js/types/array.html"},{default:o(()=>[e("\u6DF1\u5165\u4E86\u89E3 Array")]),_:1})])]),g,n("ul",null,[n("li",null,[s(a,{to:"/en/code/language/js/guide/object.html"},{default:o(()=>[e("\u5BF9\u8C61\u5165\u95E8")]),_:1})]),n("li",null,[s(a,{to:"/en/code/language/js/types/object.html"},{default:o(()=>[e("\u6DF1\u5165\u4E86\u89E3 Object")]),_:1})])])])}const x=c(r,[["render",f],["__file","data-structure.html.vue"]]);export{x as default};
