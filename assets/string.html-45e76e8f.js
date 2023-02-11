import{_ as t,X as o,Y as p,Z as n,$ as s,a1 as e,a3 as c,H as i}from"./framework-56fac175.js";const l={},u=c(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;abc&#39;</span>
<span class="token string">&quot;abc&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;key = &quot;value&quot;&#39;</span>
<span class="token string">&quot;It&#39;s a long journey&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两个都是合法的字符串。</p><p>如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;Did she say \\&#39;Hello\\&#39;?&#39;</span>
<span class="token comment">// &quot;Did she say &#39;Hello&#39;?&quot;</span>

<span class="token string">&quot;Did she say \\&quot;Hello\\&quot;?&quot;</span>
<span class="token comment">// &quot;Did she say &quot;Hello&quot;?&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号，故本教程遵守这个约定。当然，只使用双引号也完全可以。重要的是坚持使用一种风格，不要一会使用单引号表示字符串，一会又使用双引号表示。</p><p>Mr.Hope 的所有项目均强制字符串为单引号。</p></div><p>字符串默认只能写在一行内，分成多行将会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>&#39;a
b
c&#39;
<span class="token comment">// SyntaxError: Unexpected token ILLEGAL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将一个字符串分成三行，JavaScript 就会报错。</p><p>如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> longString <span class="token operator">=</span>
  <span class="token string">&quot;Long \\
long \\
long \\
string&quot;</span><span class="token punctuation">;</span>

longString<span class="token punctuation">;</span>
<span class="token comment">// &quot;Long long long string&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，加了反斜杠以后，原来写在一行的字符串，可以分成多行书写。但是，输出的时候还是单行，效果与写在同一行完全一样。注意，反斜杠的后面必须是换行符，而不能有其他字符(比如空格)，否则会报错。</p><p>连接运算符(<code>+</code>)可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> longString <span class="token operator">=</span> <span class="token string">&quot;Long &quot;</span>
  <span class="token operator">+</span> <span class="token string">&quot;long &quot;</span>
  <span class="token operator">+</span> <span class="token string">&quot;long &quot;</span>
  <span class="token operator">+</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想输出多行字符串，有一种利用多行注释的变通方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*
line 1
line 2
line 3
*/</span>
<span class="token punctuation">}</span>
  <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;line 1</span>
<span class="token comment">// line 2</span>
<span class="token comment">// line 3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，输出的字符串就是多行。</p><h3 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义</h3><p>反斜杠()在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。</p><p>需要用反斜杠转义的特殊字符，主要有下面这些。</p><ul><li><code>\\0</code> : null(<code>\\u0000</code>)</li><li><code>\\b</code> : 后退键(<code>\\u0008</code>)</li><li><code>\\f</code> : 换页符(<code>\\u000C</code>)</li><li><code>\\n</code> : 换行符(<code>\\u000A</code>)</li><li><code>\\r</code> : 回车键(<code>\\u000D</code>)</li><li><code>\\t</code> : 制表符(<code>\\u0009</code>)</li><li><code>\\v</code> : 垂直制表符(<code>\\u000B</code>)</li><li><code>\\&#39;</code> : 单引号(<code>\\u0027</code>)</li><li><code>\\&quot;</code> : 双引号(<code>\\u0022</code>)</li><li><code>\\\\</code> : 反斜杠(<code>\\u005C</code>)</li></ul><p>上面这些字符前面加上反斜杠，都表示特殊含义。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1\\n2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>\\n</code> 表示换行，输出的时候就分成了两行。</p><p>反斜杠还有三种特殊用法。</p><ol><li><p><code>\\HHH</code></p><p>反斜杠后面紧跟三个八进制数(<code>000</code> 到 <code>377</code>)，代表一个字符。<code>HHH</code> 对应该字符的 Unicode 码点，比如 <code>\\251</code> 表示版权符号。显然，这种方法只能输出 256 种字符。</p></li><li><p><code>\\xHH</code></p><p><code>\\x</code> 后面紧跟两个十六进制数(<code>00</code> 到 <code>FF</code>)，代表一个字符。<code>HH</code> 对应该字符的 Unicode 码点，比如 <code>\\xA9</code> 表示版权符号。这种方法也只能输出 256 种字符。</p></li><li><p><code>\\uXXXX</code></p><p><code>\\u</code> 后面紧跟四个十六进制数(<code>0000</code> 到 <code>FFFF</code>)，代表一个字符。<code>XXXX</code> 对应该字符的 Unicode 码点，比如 <code>\\u00A9</code> 表示版权符号。</p><p>下面是这三种字符特殊写法的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;\\251&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;©&quot;</span>
<span class="token string">&quot;\\xA9&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;©&quot;</span>
<span class="token string">&quot;\\u00A9&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;©&quot;</span>

<span class="token string">&quot;\\172&quot;</span> <span class="token operator">===</span> <span class="token string">&quot;z&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token string">&quot;\\x7A&quot;</span> <span class="token operator">===</span> <span class="token string">&quot;z&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token string">&quot;\\u007A&quot;</span> <span class="token operator">===</span> <span class="token string">&quot;z&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>如果在非特殊字符前面使用反斜杠，则反斜杠会被省略。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;\\a&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;a&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>a</code> 是一个正常字符，前面加反斜杠没有特殊含义，反斜杠会被自动省略。</p><p>如果字符串的正常内容之中，需要包含反斜杠，则反斜杠前面需要再加一个反斜杠，用来对自身转义。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;Prev \\\\ Next&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;Prev \\ Next&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多行字符串" tabindex="-1"><a class="header-anchor" href="#多行字符串" aria-hidden="true">#</a> 多行字符串</h2><p>由于多行字符串用 <code>\\n</code> 写起来比较费事，所以最新的 ES6 标准新增了一种多行字符串的表示方法，用反引号 \` 表示:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">这是一个
多行
字符串 </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>反引号在键盘的 <strong>ESC</strong> 下方，数字键 1 的左边。</p></div><h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h2><p>要把多个字符串连接起来，可以用 <code>+</code> 号连接:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;您好, &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, 您今年&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;岁了!&quot;</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有很多变量需要连接，用 <code>+</code> 号就比较麻烦。ES6 新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">您好, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, 您今年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁了!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串与数组" tabindex="-1"><a class="header-anchor" href="#字符串与数组" aria-hidden="true">#</a> 字符串与数组</h2><p>字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符(位置编号从 0 开始)。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;h&quot;</span>
s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;e&quot;</span>
s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;o&quot;</span>

<span class="token comment">// 直接对字符串使用方括号运算符</span>
<span class="token string">&quot;hello&quot;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;e&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回 <code>undefined</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;abc&quot;</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token string">&quot;abc&quot;</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token string">&quot;abc&quot;</span><span class="token punctuation">[</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值或进行删除操作，不会有任何错误，但是也没有任何效果:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">delete</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
s<span class="token punctuation">;</span> <span class="token comment">// &quot;hello&quot;</span>

s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
s<span class="token punctuation">;</span> <span class="token comment">// &quot;hello&quot;</span>

s<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">;</span>
s<span class="token punctuation">;</span> <span class="token comment">// &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="length-属性" tabindex="-1"><a class="header-anchor" href="#length-属性" aria-hidden="true">#</a> length 属性</h2><p><code>length</code> 属性返回字符串的长度，该属性也是无法改变的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 5</span>

s<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 5</span>

s<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示字符串的 <code>length</code> 属性无法改变，但是不会报错。</p><h2 id="字符集" tabindex="-1"><a class="header-anchor" href="#字符集" aria-hidden="true">#</a> 字符集</h2><p>JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。</p><p>JavaScript 不仅以 Unicode 储存字符，还允许直接在程序中使用 Unicode 码点表示字符，即将字符写成 <code>\\uxxxx</code> 的形式，其中 <code>xxxx</code> 代表该字符的 Unicode 码点。比如，<code>\\u00A9</code> 代表版权符号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;\\u00A9&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">;</span> <span class="token comment">// &quot;©&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析代码的时候，JavaScript 会自动识别一个字符是字面形式表示，还是 Unicode 形式表示。输出给用户的时候，所有字符都会转成字面形式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>

foo<span class="token punctuation">;</span> <span class="token comment">// &quot;abc&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，第一行的变量名 <code>foo</code> 是 Unicode 形式表示，第二行是字面形式表示。JavaScript 会自动识别。</p><p>我们还需要知道，每个字符在 JavaScript 内部都是以 16 位(即 2 个字节)的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为 16 位长度，即 2 个字节。</p><p>但是，UTF-16 有两种长度: 对于码点在 <code>U+0000</code> 到 <code>U+FFFF</code> 之间的字符，长度为 16 位(即 2 个字节)；对于码点在 <code>U+10000</code> 到 <code>U+10FFFF</code> 之间的字符，长度为 32 位(即 4 个字节)，而且前两个字节在 <code>0xD800</code> 到 <code>0xDBFF</code> 之间，后两个字节在 <code>0xDC00</code> 到 <code>0xDFFF</code> 之间。举例来说，码点 <code>U+1D306</code> 对应的字符为<code>𝌆，</code>它写成 UTF-16 就是 <code>0xD834 0xDF06</code>。</p><p>JavaScript 对 UTF-16 的支持是不完整的，由于历史原因，只支持两字节的字符，不支持四字节的字符。这是因为 JavaScript 第一版发布的时候，Unicode 的码点只编到 <code>U+FFFF</code>，因此两字节足够表示了。后来，Unicode 纳入的字符越来越多，出现了四字节的编码。但是，JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。上一节的那个四字节字符<code>𝌆</code>，浏览器会正确识别这是一个字符，但是 JavaScript 无法识别，会认为这是两个字符。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;𝌆&quot;</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，JavaScript 认为<code>𝌆</code>的长度为 2，而不是 1。</p><p>总结一下，对于码点在 <code>U+10000</code> 到 <code>U+10FFFF</code> 之间的字符，JavaScript 总是认为它们是两个字符(<code>length</code> 属性为 2)。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的。</p><h2 id="操作字符串" tabindex="-1"><a class="header-anchor" href="#操作字符串" aria-hidden="true">#</a> 操作字符串</h2><p>JavaScript 为字符串提供了一些常用方法，注意，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串:</p><ul><li><p>toUpperCase</p><p><code>toUpperCase()</code> 把一个字符串全部变为大写:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="base64-转码" tabindex="-1"><a class="header-anchor" href="#base64-转码" aria-hidden="true">#</a> Base64 转码</h2><p>有时，文本里面包含一些不可打印的符号，比如 ASCII 码 0 到 31 的符号都无法打印出来，这时可以使用 base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 base64 编码。</p><p>所谓 base64 就是一种编码方法，可以将任意值转成 0 ～ 9、A ～ Z、a-z、<code>+</code> 和<code>/</code>这 64 个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。</p><p>JavaScript 原生提供两个 base64 相关的方法。</p><ul><li><code>btoa()</code>: 任意值转为 base64 编码</li><li><code>atob()</code>: base64 编码转为原来的值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> string <span class="token operator">=</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">;</span>

<span class="token function">btoa</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;SGVsbG8gV29ybGQh&quot;</span>
<span class="token function">atob</span><span class="token punctuation">(</span><span class="token string">&quot;SGVsbG8gV29ybGQh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Hello World!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这两个方法不适合非 ASCII 码的字符，会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">btoa</span><span class="token punctuation">(</span><span class="token string">&quot;您好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要将非 ASCII 码字符转为 base64 编码，必须中间插入一个转码环节，再使用这两个方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">b64Encode</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">btoa</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">b64Decode</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token function">atob</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">b64Encode</span><span class="token punctuation">(</span><span class="token string">&quot;您好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;JUU0JUJEJUEwJUU1JUE1JUJE&quot;</span>
<span class="token function">b64Decode</span><span class="token punctuation">(</span><span class="token string">&quot;JUU0JUJEJUEwJUU1JUE1JUJE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;您好&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,80),d={href:"http://mathiasbynens.be/notes/javascript-encoding",target:"_blank",rel:"noopener noreferrer"},r={href:"http://mathiasbynens.be/notes/javascript-unicode",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa",target:"_blank",rel:"noopener noreferrer"};function k(m,b){const a=i("ExternalLinkIcon");return o(),p("div",null,[u,n("ul",null,[n("li",null,[s("Mathias Bynens, "),n("a",d,[s("JavaScript’s internal character encoding: UCS-2 or UTF-16?"),e(a)])]),n("li",null,[s("Mathias Bynens, "),n("a",r,[s("JavaScript has a Unicode problem"),e(a)])]),n("li",null,[s("Mozilla Developer Network, "),n("a",v,[s("Window.btoa"),e(a)])])])])}const q=t(l,[["render",k],["__file","string.html.vue"]]);export{q as default};
