import{_ as e,W as t,X as o,$ as p,Y as s,Z as n,a0 as c,a1 as i,a2 as l,E as u}from"./framework-fec69ff1.js";const d={},r=s("p",null,[n("JavaScript 的字符串就是用 "),s("code",null,"''"),n(" 或 "),s("code",null,'""'),n(" 括起来的字符表示。")],-1),k=l(`<div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>请注意，<code>&#39;&#39;</code> 或 <code>&quot;&quot;</code> 本身只是一种表示方式，不是字符串的一部分，因此，字符串 <code>&#39;abc&#39;</code> 只有 <code>a</code>，<code>b</code>，<code>c</code> 这 3 个字符。</p></div><p>如果 <code>&#39;</code> 本身也是一个字符，那就可以用 <code>&quot;&quot;</code> 括起来，比如 <code>&quot;I&#39;m OK&quot;</code> 包含的字符是 <code>I</code>，<code>&#39;</code>，<code>m</code>，<code>空格</code>，<code>O</code>，<code>K</code> 这 6 个字符。</p><p>如果字符串内部既包含 <code>&#39;</code> 又包含 <code>&quot;</code> 怎么办? 可以用转义字符 <code>\\</code> 来标识，比如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;I\\&#39;m \\&quot;OK\\&quot;!&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示的字符串内容是: <code>I&#39;m &quot;OK&quot;!</code></p><p>转义字符 <code>\\</code> 可以转义很多字符，比如 <code>\\n</code> 表示换行，<code>\\t</code> 表示制表符，字符 <code>\\</code> 本身也要转义，所以 <code>\\\\</code> 表示的字符就是 <code>\\</code>。</p><p>ASCII 字符可以以 <code>\\x##</code> 形式的十六进制表示，例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;\\x41&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 完全等同于 &#39;A&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以用 <code>\\u####</code> 表示一个 Unicode 字符:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;\\u4e2d\\u6587&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 完全等同于 &#39;中文&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="多行字符串" tabindex="-1"><a class="header-anchor" href="#多行字符串" aria-hidden="true">#</a> 多行字符串</h2><p>由于多行字符串用 <code>\\n</code> 写起来比较费事，所以最新的 ES6 标准新增了一种多行字符串的表示方法，用反引号 <code>\`</code> 表示:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">这是一个
多行
字符串</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>反引号在键盘的 <code>ESC</code> 下方，数字键 1 的左边。</p></div><h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h2><p>要把多个字符串连接起来，可以用 <code>+</code> 号连接:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;您好, &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, 您今年&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;岁了!&quot;</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有很多变量需要连接，用 <code>+</code> 号就比较麻烦。ES6 新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">您好, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, 您今年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁了!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作字符串" tabindex="-1"><a class="header-anchor" href="#操作字符串" aria-hidden="true">#</a> 操作字符串</h2><p>字符串常见的操作如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要获取字符串某个指定位置的字符，使用类似 <code>Array</code> 的下标操作，索引号从 <code>0</code> 开始:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;H&#39;</span>
s<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39; &#39;</span>
s<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;w&#39;</span>
s<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;!&#39;</span>
s<span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// undefined 超出范围的索引不会报错，但一律返回 undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是也没有任何效果:</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&quot;Test&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;X&quot;</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// s 仍然为 &#39;Test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript 为字符串提供了一些常用方法，注意，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串:</p><ul><li><p>toUpperCase</p><p><code>toUpperCase()</code> 把一个字符串全部变为大写:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 &#39;HELLO&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>toLowerCase</p><p><code>toLowerCase()</code> 把一个字符串全部变为小写:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> lower <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 &#39;hello&#39; 并赋值给变量 lower</span>

lower<span class="token punctuation">;</span> <span class="token comment">// &#39;hello&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>indexOf</p><p><code>indexOf()</code> 会搜索指定字符串第一次出现的位置:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;hello, world&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 7</span>
s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没有找到指定的子串，返回 -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>substring</p><p><code>substring()</code> 返回指定索引区间的子串:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;hello, world&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从索引 0 开始到 5(不包括 5)，返回 &#39;hello&#39;</span>
s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从索引 7 开始到结束，返回 &#39;world&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="更多介绍" tabindex="-1"><a class="header-anchor" href="#更多介绍" aria-hidden="true">#</a> 更多介绍</h2>`,29);function v(m,g){const a=u("RouterLink");return t(),o("div",null,[r,p(" more "),k,s("p",null,[n("更系统的介绍详见 "),c(a,{to:"/ja/code/language/js/types/string.html"},{default:i(()=>[n("数据结构 / 字符串")]),_:1})])])}const h=e(d,[["render",v],["__file","string.html.vue"]]);export{h as default};
