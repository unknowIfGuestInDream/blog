import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as p,c as e,b as o,a,e as n,f as s}from"./app--7H4MSuP.js";const l={},c=a("p",null,[n("WXML 中的动态数据均来自对应 "),a("code",null,"Page"),n(" 的 "),a("code",null,"data"),n("。")],-1),u=s(`<h2 id="简单绑定" tabindex="-1"><a class="header-anchor" href="#简单绑定"><span>简单绑定</span></a></h2><p>数据绑定使用 Mustache 语法(双大括号)将变量包起来，可以作用于:</p><h3 id="内容" tabindex="-1"><a class="header-anchor" href="#内容"><span>内容</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{ message }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Hello MINA!&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件属性-需要在双引号之内" tabindex="-1"><a class="header-anchor" href="#组件属性-需要在双引号之内"><span>组件属性(需要在双引号之内)</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item-{{id}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="控制属性-需要在双引号之内" tabindex="-1"><a class="header-anchor" href="#控制属性-需要在双引号之内"><span>控制属性(需要在双引号之内)</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">condition</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="关键字-需要在双引号之内" tabindex="-1"><a class="header-anchor" href="#关键字-需要在双引号之内"><span>关键字(需要在双引号之内)</span></a></h3><ul><li><p><code>true</code>: <code>boolean</code> 类型的 <code>true</code>，代表真值。</p></li><li><p><code>false</code>: <code>boolean</code> 类型的 <code>false</code>，代表假值。</p></li></ul><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>checkbox checked<span class="token operator">=</span><span class="token string">&quot;{{false}}&quot;</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>checkbox<span class="token operator">&gt;</span>
</code></pre></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>不要直接写 <code>checked=&quot;false&quot;</code>，其计算结果是一个字符串，转成 <code>boolean</code> 类型后代表真值。</p></div><h2 id="运算" tabindex="-1"><a class="header-anchor" href="#运算"><span>运算</span></a></h2>`,16),i=a("div",null,[a("p",null,[n("可以在 "),a("code",{"v-pre":""},"{{ }}"),n(" 内进行简单的运算，支持的有如下几种方式:")])],-1),r=s(`<h3 id="三元运算" tabindex="-1"><a class="header-anchor" href="#三元运算"><span>三元运算</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{flag ? true : false}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Hidden <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="算数运算" tabindex="-1"><a class="header-anchor" href="#算数运算"><span>算数运算</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{a + b}} + {{c}} + d <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>view</code> 中的内容为 <code>3 + 3 + d</code>。</p><h3 id="逻辑判断" tabindex="-1"><a class="header-anchor" href="#逻辑判断"><span>逻辑判断</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{length &gt; 5}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="字符串运算" tabindex="-1"><a class="header-anchor" href="#字符串运算"><span>字符串运算</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{&quot;hello&quot; + name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;MINA&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="数据路径运算" tabindex="-1"><a class="header-anchor" href="#数据路径运算"><span>数据路径运算</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{object.key}} {{array[0]}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">object</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;Hello &quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;MINA&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="组合" tabindex="-1"><a class="header-anchor" href="#组合"><span>组合</span></a></h2><p>也可以在 Mustache 内直接进行组合，构成新的对象或者数组。</p><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[zero, 1, 2, 3, 4]}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{item}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">zero</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>最终组合成数组 <code>[0, 1, 2, 3, 4]</code>。</p><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>objectCombine<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{for: a, bar: b}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>最终组合成的对象是 <code>{for: 1, bar: 2}</code></p><p>也可以用扩展运算符 <code>...</code> 来将一个对象展开</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>objectCombine<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{...obj1, ...obj2, e: 5}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">obj1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">obj2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终组合成的对象是 <code>{a: 1, b: 2, c: 3, d: 4, e: 5}</code>。</p><p>如果对象的 <code>key</code> 和 <code>value</code> 相同，也可以间接地表达。</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>objectCombine<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{foo, bar}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&quot;my-foo&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&quot;my-bar&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>最终组合成的对象是 <code>{foo: &#39;my-foo&#39;, bar:&#39;my-bar&#39;}</code>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上述方式可以随意组合，但是如有存在变量名相同的情况，后边的会覆盖前面，如:</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>objectCombine<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{...obj1, ...obj2, a, c: 6}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">obj1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">obj2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终组合成的对象是 <code>{a: 5, b: 3, c: 6}</code>。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>花括号和引号之间如果有空格，将最终被解析成为字符串</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[1,2,3]}} <span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>等同于</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[1,2,3] + &#39; &#39;}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></div>`,34);function k(d,g){return p(),e("div",null,[c,o(" more "),u,i,r])}const h=t(l,[["render",k],["__file","data-bind.html.vue"]]),x=JSON.parse('{"path":"/code/mini-app/guide/view/data-bind.html","title":"数据绑定","lang":"zh-CN","frontmatter":{"date":"2020-12-19T00:00:00.000Z","title":"数据绑定","icon":"rank","category":"小程序","description":"WXML 中的动态数据均来自对应 Page 的 data。 简单绑定 数据绑定使用 Mustache 语法(双大括号)将变量包起来，可以作用于: 内容 组件属性(需要在双引号之内) 控制属性(需要在双引号之内) 关键字(需要在双引号之内) true: boolean 类型的 true，代表真值。 false: boolean 类型的 false，代表假...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/mini-app/guide/view/data-bind.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"数据绑定"}],["meta",{"property":"og:description","content":"WXML 中的动态数据均来自对应 Page 的 data。 简单绑定 数据绑定使用 Mustache 语法(双大括号)将变量包起来，可以作用于: 内容 组件属性(需要在双引号之内) 控制属性(需要在双引号之内) 关键字(需要在双引号之内) true: boolean 类型的 true，代表真值。 false: boolean 类型的 false，代表假..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2020-12-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据绑定\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"简单绑定","slug":"简单绑定","link":"#简单绑定","children":[{"level":3,"title":"内容","slug":"内容","link":"#内容","children":[]},{"level":3,"title":"组件属性(需要在双引号之内)","slug":"组件属性-需要在双引号之内","link":"#组件属性-需要在双引号之内","children":[]},{"level":3,"title":"控制属性(需要在双引号之内)","slug":"控制属性-需要在双引号之内","link":"#控制属性-需要在双引号之内","children":[]},{"level":3,"title":"关键字(需要在双引号之内)","slug":"关键字-需要在双引号之内","link":"#关键字-需要在双引号之内","children":[]}]},{"level":2,"title":"运算","slug":"运算","link":"#运算","children":[{"level":3,"title":"三元运算","slug":"三元运算","link":"#三元运算","children":[]},{"level":3,"title":"算数运算","slug":"算数运算","link":"#算数运算","children":[]},{"level":3,"title":"逻辑判断","slug":"逻辑判断","link":"#逻辑判断","children":[]},{"level":3,"title":"字符串运算","slug":"字符串运算","link":"#字符串运算","children":[]},{"level":3,"title":"数据路径运算","slug":"数据路径运算","link":"#数据路径运算","children":[]}]},{"level":2,"title":"组合","slug":"组合","link":"#组合","children":[{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"对象","slug":"对象","link":"#对象","children":[]}]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":2.04,"words":611},"filePathRelative":"code/mini-app/guide/view/data-bind.md","localizedDate":"2020年12月19日","excerpt":"<p>WXML 中的动态数据均来自对应 <code>Page</code> 的 <code>data</code>。</p>\\n","autoDesc":true}');export{h as comp,x as data};
