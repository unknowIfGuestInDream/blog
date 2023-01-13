import{_ as t,W as o,X as c,$ as l,Y as s,Z as n,a0 as e,a2 as p,G as i}from"./framework-0e132572.js";const d={},r=p("<p>二进制位运算符用于直接对二进制位进行计算，一共有 7 个。</p><ul><li><strong>二进制或运算符</strong>(or): 符号为 <code>|</code>，表示若两个二进制位都为 <code>0</code>，则结果为 <code>0</code>，否则为 <code>1</code>。</li><li><strong>二进制与运算符</strong>(and): 符号为 <code>&amp;</code>，表示若两个二进制位都为 1，则结果为 1，否则为 0。</li><li><strong>二进制否运算符</strong>(not): 符号为 <code>~</code>，表示对一个二进制位取反。</li><li><strong>异或运算符</strong>(xor): 符号为 <code>^</code>，表示若两个二进制位不相同，则结果为 1，否则为 0。</li><li><strong>左移运算符</strong>(left shift): 符号为 <code>&lt;&lt;</code>，详见下文解释。</li><li><strong>右移运算符</strong>(right shift): 符号为 <code>&gt;&gt;</code>，详见下文解释。</li><li><strong>头部补零的右移运算符</strong>(zero filled right shift): 符号为 <code>&gt;&gt;&gt;</code>，详见下文解释。</li></ul>",2),u=p(`<p>这些位运算符直接处理每一个比特位(bit)，所以是非常底层的运算，好处是速度极快，缺点是很不直观，许多场合不能使用它们，否则会使代码难以理解和查错。</p><p>有一点需要特别注意，位运算符只对整数起作用，如果一个运算子不是整数，会自动转为整数后再执行。另外，虽然在 JavaScript 内部，数值都是以 64 位浮点数的形式储存，但是做位运算的时候，是以 32 位带符号的整数进行运算的，并且返回值也是一个 32 位带符号的整数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>i <span class="token operator">=</span> i <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这行代码的意思，就是将 <code>i</code> (不管是整数或小数)转为 32 位整数。</p><p>利用这个特性，可以写出一个函数，将任意数值转为 32 位整数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个函数将任意值与 <code>0</code> 进行一次或运算，这个位运算会自动将一个值转为 32 位整数。下面是这个函数的用法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token number">1.001</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token number">1.999</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>toInt32</code> 可以将小数转为整数。对于一般的整数，返回值不会有任何变化。对于大于或等于 2 的 32 次方的整数，大于 32 位的数位都会被舍去。</p><h2 id="二进制或运算符" tabindex="-1"><a class="header-anchor" href="#二进制或运算符" aria-hidden="true">#</a> 二进制或运算符</h2><p>二进制或运算符 (<code>|</code>) 逐位比较两个运算子，两个二进制位之中只要有一个为 <code>1</code>，就返回 <code>1</code>，否则返回 <code>0</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token operator">|</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code>0</code> 和 <code>3</code> 的二进制形式分别是 <code>00</code> 和 <code>11</code>，所以进行二进制或运算会得到 <code>11</code> (即 <code>3</code>)。</p><p>位运算只对整数有效，遇到小数时，会将小数部分舍去，只保留整数部分。所以，将一个小数与 <code>0</code> 进行二进制或运算，等同于对该数去除小数部分，即取整数位。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">2.9</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token operator">-</span><span class="token number">2.9</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// -2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，这种取整方法不适用超过 32 位整数最大值 <code>2147483647</code> 的数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">2147483649.4</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// -2147483647</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二进制与运算符" tabindex="-1"><a class="header-anchor" href="#二进制与运算符" aria-hidden="true">#</a> 二进制与运算符</h2><p>二进制与运算符 (<code>&amp;</code>) 的规则是逐位比较两个运算子，两个二进制位之中只要有一个位为 <code>0</code>，就返回 <code>0</code>，否则返回 <code>1</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token operator">&amp;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，0(二进制 <code>00</code>)和 3(二进制 <code>11</code>)进行二进制与运算会得到 <code>00</code>(即 <code>0</code>)。</p><h2 id="二进制否运算符" tabindex="-1"><a class="header-anchor" href="#二进制否运算符" aria-hidden="true">#</a> 二进制否运算符</h2><p>二进制否运算符(<code>~</code>)将每个二进制位都变为相反值(<code>0</code> 变为 <code>1</code>，<code>1</code> 变为 <code>0</code>)。它的返回结果有时比较难理解，因为涉及到计算机内部的数值表示机制。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">~</span><span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// -4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面表达式对 <code>3</code> 进行二进制否运算，得到 <code>-4</code>。之所以会有这样的结果，是因为位运算时，JavaScript 内部将所有的运算子都转为 32 位的二进制整数再进行运算。</p><p><code>3</code> 的 32 位整数形式是 <code>00000000000000000000000000000011</code>，二进制否运算以后得到 <code>11111111111111111111111111111100</code>。由于第一位(符号位)是 1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去 1，再取一次反，然后加上负号，才能得到这个负数对应的 10 进制值。这个数减去 1 等于 <code>11111111111111111111111111111011</code>，再取一次反得到 <code>00000000000000000000000000000100</code>，再加上负号就是 <code>-4</code>。考虑到这样的过程比较麻烦，可以简单记忆成，一个数与自身的取反值相加，等于-1。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">~</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面表达式可以这样算，<code>-3</code> 的取反值等于 <code>-1</code> 减去 <code>-3</code>，结果为 <code>2</code>。</p><p>对一个整数连续两次二进制否运算，得到它自身。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">~</span><span class="token operator">~</span><span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所有的位运算都只对整数有效。二进制否运算遇到小数时，也会将小数部分舍去，只保留整数部分。所以，对一个小数连续进行两次二进制否运算，能达到取整效果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">~</span><span class="token operator">~</span><span class="token number">2.9</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token operator">~</span><span class="token operator">~</span><span class="token number">47.11</span><span class="token punctuation">;</span> <span class="token comment">// 47</span>
<span class="token operator">~</span><span class="token operator">~</span><span class="token number">1.9999</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token operator">~</span><span class="token operator">~</span><span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用二进制否运算取整，是所有取整方法中最快的一种。</p><p>对字符串进行二进制否运算，JavaScript 引擎会先调用 <code>Number</code> 函数，将字符串转为数值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 相当于~Number(&#39;011&#39;)</span>
<span class="token operator">~</span><span class="token string">&quot;011&quot;</span><span class="token punctuation">;</span> <span class="token comment">// -12</span>

<span class="token comment">// 相当于~Number(&#39;42 cats&#39;)</span>
<span class="token operator">~</span><span class="token string">&quot;42 cats&quot;</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>

<span class="token comment">// 相当于~Number(&#39;0xcafebabe&#39;)</span>
<span class="token operator">~</span><span class="token string">&quot;0xcafebabe&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 889275713</span>

<span class="token comment">// 相当于~Number(&#39;deadbeef&#39;)</span>
<span class="token operator">~</span><span class="token string">&quot;deadbeef&quot;</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Number</code> 函数将字符串转为数值的规则，参见《数据的类型转换》一章。</p><p>对于其他类型的值，二进制否运算也是先用 <code>Number</code> 转为数值，然后再进行处理。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 相当于 ~Number([])</span>
<span class="token operator">~</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>

<span class="token comment">// 相当于 ~Number(NaN)</span>
<span class="token operator">~</span><span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>

<span class="token comment">// 相当于 ~Number(null)</span>
<span class="token operator">~</span><span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异或运算符" tabindex="-1"><a class="header-anchor" href="#异或运算符" aria-hidden="true">#</a> 异或运算符</h2><p>异或运算(<code>^</code>)在两个二进制位不同时返回 <code>1</code>，相同时返回 <code>0</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token operator">^</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面表达式中，<code>0</code> (二进制 <code>00</code>)与 <code>3</code> (二进制 <code>11</code>)进行异或运算，它们每一个二进制位都不同，所以得到 <code>11</code> (即 <code>3</code>)。</p>`,42),m=s("code",null,"a",-1),v=s("code",null,"b",-1),k=s("code",null,"a^=b; b^=a; a^=b;",-1),b={href:"http://en.wikipedia.org/wiki/XOR_swap_algorithm",target:"_blank",rel:"noopener noreferrer"},g=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span>a <span class="token operator">^=</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>b <span class="token operator">^=</span> a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>a <span class="token operator">^=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

a<span class="token punctuation">;</span> <span class="token comment">// 99</span>
b<span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是互换两个变量的值的最快方法。</p><p>异或运算也可以用来取整。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">12.9</span> <span class="token operator">^</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="左移运算符" tabindex="-1"><a class="header-anchor" href="#左移运算符" aria-hidden="true">#</a> 左移运算符</h2><p>左移运算符(<code>&lt;&lt;</code>)表示将一个数的二进制值向左移动指定的位数，尾部补 <code>0</code>，即乘以 <code>2</code> 的指定次方。向左移动的时候，最高位的符号位是一起移动的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 4 的二进制形式为100，</span>
<span class="token comment">// 左移一位为 1000 (即十进制的 8)</span>
<span class="token comment">// 相当于乘以 2 的 1 次方</span>
<span class="token number">4</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 8</span>

<span class="token operator">-</span><span class="token number">4</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// -8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>-4</code> 左移一位得到 <code>-8</code>，是因为 <code>-4</code> 的二进制形式是 <code>11111111111111111111111111111100</code>，左移一位后得到 <code>11111111111111111111111111111000</code>，该数转为十进制(减去 1 后取反，再加上负号)即为 <code>-8</code>。</p><p>如果左移 0 位，就相当于将该数值转为 32 位整数，等同于取整，对于正数和负数都有效。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">13.5</span> <span class="token operator">&lt;&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 13</span>

<span class="token operator">-</span><span class="token number">13.5</span> <span class="token operator">&lt;&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// -13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左移运算符用于二进制数值非常方便。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">186</span><span class="token punctuation">,</span> <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">85</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// RGB to HEX</span>
<span class="token comment">// (1 &lt;&lt; 24)的作用为保证结果是6位数</span>
<span class="token keyword">const</span> <span class="token function-variable function">rgb2hex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;#&quot;</span> <span class="token operator">+</span>
    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>g <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// 先转成十六进制，然后返回字符串</span>
      <span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 去除字符串的最高位，返回后面六个字符串</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">rgb2hex</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>r<span class="token punctuation">,</span> color<span class="token punctuation">.</span>g<span class="token punctuation">,</span> color<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;#bada55&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码使用左移运算符，将颜色的 RGB 值转为 HEX 值。</p><h2 id="右移运算符" tabindex="-1"><a class="header-anchor" href="#右移运算符" aria-hidden="true">#</a> 右移运算符</h2><p>右移运算符(<code>&gt;&gt;</code>)表示将一个数的二进制值向右移动指定的位数。如果是正数，头部全部补 <code>0</code>；如果是负数，头部全部补 <code>1</code>。右移运算符基本上相当于除以 <code>2</code> 的指定次方(最高位即符号位参与移动)。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">4</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token comment">/*
// 因为4的二进制形式为 00000000000000000000000000000100，
// 右移一位得到 00000000000000000000000000000010，
// 即为十进制的2
*/</span>

<span class="token operator">-</span><span class="token number">4</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// -2</span>
<span class="token comment">/*
// 因为-4的二进制形式为 11111111111111111111111111111100，
// 右移一位，头部补1，得到 11111111111111111111111111111110,
// 即为十进制的-2
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>右移运算可以模拟 2 的整除运算。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">5</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
<span class="token comment">// 相当于 5 / 2 = 2</span>

<span class="token number">21</span> <span class="token operator">&gt;&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token comment">// 5</span>
<span class="token comment">// 相当于 21 / 4 = 5</span>

<span class="token number">21</span> <span class="token operator">&gt;&gt;</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
<span class="token comment">// 相当于 21 / 8 = 2</span>

<span class="token number">21</span> <span class="token operator">&gt;&gt;</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
<span class="token comment">// 相当于 21 / 16 = 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="头部补零的右移运算符" tabindex="-1"><a class="header-anchor" href="#头部补零的右移运算符" aria-hidden="true">#</a> 头部补零的右移运算符</h2><p>头部补零的右移运算符(<code>&gt;&gt;&gt;</code>)与右移运算符(<code>&gt;&gt;</code>)只有一个差别，就是一个数的二进制形式向右移动时，头部一律补零，而不考虑符号位。所以，该运算总是得到正值。对于正数，该运算的结果与右移运算符(<code>&gt;&gt;</code>)完全一致，区别主要在于负数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">4</span> <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>

<span class="token operator">-</span><span class="token number">4</span> <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 2147483646</span>
<span class="token comment">/*
// 因为-4的二进制形式为11111111111111111111111111111100，
// 带符号位的右移一位，得到01111111111111111111111111111110，
// 即为十进制的2147483646。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个运算实际上将一个值转为 32 位无符号整数。</p><p>查看一个负整数在计算机内部的储存形式，最快的方法就是使用这个运算符。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 4294967295</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码表示，<code>-1</code> 作为 32 位整数时，内部的储存形式使用无符号整数格式解读，值为 4294967295(即 2<sup>32</sup> - 1，等于 <code>11111111111111111111111111111111</code>)。</p><h2 id="开关作用" tabindex="-1"><a class="header-anchor" href="#开关作用" aria-hidden="true">#</a> 开关作用</h2><p>位运算符可以用作设置对象属性的开关。</p><p>假定某个对象有四个开关，每个开关都是一个变量。那么，可以设置一个四位的二进制数，它的每个位对应一个开关。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">FLAG_A</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 0001</span>
<span class="token keyword">const</span> <span class="token constant">FLAG_B</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 0010</span>
<span class="token keyword">const</span> <span class="token constant">FLAG_C</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 0100</span>
<span class="token keyword">const</span> <span class="token constant">FLAG_D</span> <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">// 1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码设置 A、B、C、D 四个开关，每个开关分别占有一个二进制位。</p><p>然后，就可以用二进制与运算检验，当前设置是否打开了指定开关。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> flags <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 二进制的0101</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>flags <span class="token operator">&amp;</span> <span class="token constant">FLAG_C</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0101 &amp; 0100 =&gt; 0100 =&gt; true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码检验是否打开了开关 <code>C</code>。如果打开，会返回 <code>true</code>，否则返回 <code>false</code>。</p><p>现在假设需要打开 <code>A</code>、<code>B</code>、<code>D</code> 三个开关，我们可以构造一个掩码变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mask <span class="token operator">=</span> <span class="token constant">FLAG_A</span> <span class="token operator">|</span> <span class="token constant">FLAG_B</span> <span class="token operator">|</span> <span class="token constant">FLAG_D</span><span class="token punctuation">;</span>
<span class="token comment">// 0001 | 0010 | 1000 =&gt; 1011</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码对 <code>A</code>、<code>B</code>、<code>D</code> 三个变量进行二进制或运算，得到掩码值为二进制的 <code>1011</code>。</p><p>有了掩码，二进制或运算可以确保打开指定的开关。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>flags <span class="token operator">=</span> flags <span class="token operator">|</span> mask<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>二进制与运算可以将当前设置中凡是与开关设置不一样的项，全部关闭。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>flags <span class="token operator">=</span> flags <span class="token operator">&amp;</span> mask<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>异或运算可以切换(toggle)当前设置，即第一次执行可以得到当前设置的相反值，再执行一次又得到原来的值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>flags <span class="token operator">=</span> flags <span class="token operator">^</span> mask<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>二进制否运算可以翻转当前设置，即原设置为 <code>0</code>，运算后变为 <code>1</code>；原设置为 <code>1</code>，运算后变为 <code>0</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>flags <span class="token operator">=</span> <span class="token operator">~</span>flags<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,45),h={href:"http://michalbe.blogspot.co.uk/2013/03/javascript-less-known-parts-bitwise.html",target:"_blank",rel:"noopener noreferrer"},j={href:"http://www.2ality.com/2013/06/basic-javascript.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators",target:"_blank",rel:"noopener noreferrer"};function x(_,w){const a=i("ExternalLinkIcon");return o(),c("div",null,[r,l(" more "),u,s("p",null,[n("“异或运算”有一个特殊运用，连续对两个数 "),m,n(" 和 "),v,n(" 进行三次异或运算，"),k,n("，可以 "),s("a",b,[n("互换"),e(a)]),n(" 它们的值。这意味着，使用“异或运算”可以在不引入临时变量的前提下，互换两个变量的值。")]),g,s("ul",null,[s("li",null,[n("Michal Budzynski, "),s("a",h,[n("JavaScript: The less known parts. Bitwise Operators"),e(a)])]),s("li",null,[n("Axel Rauschmayer, "),s("a",j,[n("Basic JavaScript for the impatient programmer"),e(a)])]),s("li",null,[n("Mozilla Developer Network, "),s("a",f,[n("Bitwise Operators"),e(a)])])])])}const N=t(d,[["render",x],["__file","bit.html.vue"]]);export{N as default};
