import{_ as t,W as o,X as p,Y as n,Z as s,a0 as c,a1 as i,a2 as a,G as d}from"./framework-0e132572.js";const l={},r=a(`<p>在最新的 Python 3 版本中，字符串是以 Unicode 编码的，也就是说，Python 的字符串支持多语言，例如:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> print<span class="token punctuation">(</span><span class="token string">&#39;包含中文的str&#39;</span><span class="token punctuation">)</span>
包含中文的str
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于单个字符的编码，Python 提供了 <code>ord()</code> 函数获取字符的整数表示，<code>chr()</code> 函数把编码转换为对应的字符:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
<span class="token number">65</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;中&#39;</span><span class="token punctuation">)</span>
<span class="token number">20013</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">)</span>
<span class="token string">&#39;B&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">25991</span><span class="token punctuation">)</span>
<span class="token string">&#39;文&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果知道字符的整数编码，还可以用十六进制这么写 <code>str</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;\\u4e2d\\u6587&#39;</span>
<span class="token string">&#39;中文&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>两种写法完全是等价的。</p><p>由于 Python 的字符串类型是 <code>str</code>，在内存中以 Unicode 表示，一个字符对应若干个字节。如果要在网络上传输，或者保存到磁盘上，就需要把 <code>str</code> 变为以字节为单位的 <code>bytes</code>。</p><p>Python 对 <code>bytes</code> 类型的数据用带 <code>b</code> 前缀的单引号或双引号表示:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">b&#39;ABC&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要注意区分 <code>&#39;ABC&#39;</code> 和 <code>b&#39;ABC&#39;</code>，前者是 <code>str</code>，后者虽然内容显示得和前者一样，但 <code>bytes</code> 的每个字符都只占用一个字节。</p><p>以 Unicode 表示的 <code>str</code> 通过 <code>encode()</code> 方法可以编码为指定的 <code>bytes</code>，例如:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;ABC&#39;</span>.encode<span class="token punctuation">(</span><span class="token string">&#39;ascii&#39;</span><span class="token punctuation">)</span>
b<span class="token string">&#39;ABC&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;中文&#39;</span>.encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
b<span class="token string">&#39;\\xe4\\xb8\\xad\\xe6\\x96\\x87&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;中文&#39;</span>.encode<span class="token punctuation">(</span><span class="token string">&#39;ascii&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
UnicodeEncodeError: <span class="token string">&#39;ascii&#39;</span> codec can&#39;t encode characters <span class="token keyword">in</span> position <span class="token number">0</span>-1: ordinal not <span class="token keyword">in</span> range<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>纯英文的 <code>str</code> 可以用 ASCII 编码为 <code>bytes</code>，内容是一样的，含有中文的 <code>str</code> 可以用 UTF-8 编码为 <code>bytes</code>。含有中文的 <code>str</code> 无法用 ASCII 编码，因为中文编码的范围超过了 ASCII 编码的范围，Python 会报错。</p><p>在 <code>bytes</code> 中，无法显示为 ASCII 字符的字节，用 <code>\\x##</code> 显示。</p><p>反过来，如果我们从网络或磁盘上读取了字节流，那么读到的数据就是 <code>bytes</code>。要把 <code>bytes</code> 变为 <code>str</code>，就需要用 <code>decode()</code> 方法:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">b&#39;ABC&#39;</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;ascii&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;ABC&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">b&#39;\\xe4\\xb8\\xad\\xe6\\x96\\x87&#39;</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;中文&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <code>bytes</code> 中包含无法解码的字节，<code>decode()</code> 方法会报错:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b<span class="token string">&#39;\\xe4\\xb8\\xad\\xff&#39;</span>.decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  <span class="token punctuation">..</span>.
UnicodeDecodeError: <span class="token string">&#39;utf-8&#39;</span> codec can&#39;t decode byte 0xff <span class="token keyword">in</span> position <span class="token number">3</span>: invalid start byte
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <code>bytes</code> 中只有一小部分无效的字节，可以传入 <code>errors=&#39;ignore&#39;</code> 忽略错误的字节:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">b&#39;\\xe4\\xb8\\xad\\xff&#39;</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> errors<span class="token operator">=</span><span class="token string">&#39;ignore&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;中&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要计算 <code>str</code> 包含多少个字符，可以用 <code>len()</code> 函数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">&#39;ABC&#39;</span><span class="token punctuation">)</span>
<span class="token number">3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">&#39;中文&#39;</span><span class="token punctuation">)</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>len()</code> 函数计算的是 <code>str</code> 的字符数，如果换成 <code>bytes</code>，<code>len()</code> 函数就计算字节数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">b&#39;ABC&#39;</span><span class="token punctuation">)</span>
<span class="token number">3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">b&#39;\\xe4\\xb8\\xad\\xe6\\x96\\x87&#39;</span><span class="token punctuation">)</span>
<span class="token number">6</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">&#39;中文&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，1 个中文字符经过 UTF-8 编码后通常会占用 3 个字节，而 1 个英文字符只占用 1 个字节。</p><p>在操作字符串时，我们经常遇到 <code>str</code> 和 <code>bytes</code> 的互相转换。为了避免乱码问题，应当始终坚持使用 UTF-8 编码对 <code>str</code> 和 <code>bytes</code> 进行转换。</p><p>由于 Python 源代码也是一个文本文件，所以，当您的源代码中包含中文的时候，在保存源代码时，就需要务必指定保存为 UTF-8 编码。当 Python 解释器读取源代码时，为了让它按 UTF-8 编码读取，我们通常在文件开头写上这两行:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># !/usr/bin/env python3</span>

<span class="token comment"># -*- coding: utf-8 -*-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行注释是为了告诉 Linux/macOS 系统，这是一个 Python 可执行程序，Windows 系统会忽略这个注释；</p><p>第二行注释是为了告诉 Python 解释器，按照 UTF-8 编码读取源代码，否则，您在源代码中写的中文输出可能会有乱码。</p><p>申明了 UTF-8 编码并不意味着您的 <code>.py</code> 文件就是 UTF-8 编码的，必须并且要确保文本编辑器正在使用 &quot;UTF-8 without BOM&quot; 编码。</p>`,32),u={class:"hint-container info"},k=n("p",{class:"hint-container-title"},"関連情報",-1),g=n("p",null,"旧版 Windows 记事本的 UTF-8 是 UTF-8 with BOM。",-1),v=a(`<p>如果 <code>.py</code> 文件本身使用 UTF-8 编码，并且也申明了 <code># -*- coding: utf-8 -*-</code>，打开命令提示符测试就可以正常显示中文。</p><h2 id="格式化" tabindex="-1"><a class="header-anchor" href="#格式化" aria-hidden="true">#</a> 格式化</h2><p>一个常见的问题是如何输出格式化的字符串。我们经常会输出类似 <code>&#39;亲爱的xxx您好! 您xx月的话费是xx，余额是xx&#39;</code> 之类的字符串，而 <code>xxx</code> 的内容都是根据变量变化的，所以，需要一种简便的格式化字符串的方式。</p><p>在 Python 中，采用的格式化方式和 C 语言是一致的，用 <code>%</code> 实现，举例如下:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello, %s&#39;</span> <span class="token operator">%</span> <span class="token string">&#39;world&#39;</span>
<span class="token string">&#39;Hello, world&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hi, %s, you have $%d.&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token number">1000000</span><span class="token punctuation">)</span>
<span class="token string">&#39;Hi, Michael, you have $1000000.&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没错，<code>%</code> 运算符就是用来格式化字符串的。在字符串内部，<code>%s</code> 表示用字符串替换，<code>%d</code> 表示用整数替换，有几个 <code>%?</code> 占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个 <code>%?</code>，括号可以省略。</p><div class="hint-container info"><p class="hint-container-title">常见的占位符有</p><table><thead><tr><th>占位符</th><th>替换内容</th></tr></thead><tbody><tr><td><code>%d</code></td><td>整数</td></tr><tr><td><code>%f</code></td><td>浮点数</td></tr><tr><td><code>%s</code></td><td>字符串</td></tr><tr><td><code>%x</code></td><td>十六进制整数</td></tr></tbody></table></div><p>其中，格式化整数和浮点数还可以指定是否补 0 和整数与小数的位数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%2d-%02d&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%.2f&#39;</span> <span class="token operator">%</span> <span class="token number">3.1415926</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您不太确定应该用什么，<code>%s</code> 永远起作用，它会把任何数据类型转换为字符串:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Age: %s. Gender: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token string">&#39;Age: 25. Gender: True&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>有些时候，字符串里面的 <code>%</code> 是一个普通字符怎么办? 这个时候就需要转义，用 <code>%%</code> 来表示一个 <code>%</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;growth rate: %d %%&#39;</span> <span class="token operator">%</span> <span class="token number">7</span>
<span class="token string">&#39;growth rate: 7 %&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> format()</h3><p>另一种格式化字符串的方法是使用字符串的 <code>format()</code> 方法，它会用传入的参数依次替换字符串内的占位符 <code>{0}</code>、<code>{1}</code>……，不过这种方式写起来比 <code>%</code> 要麻烦得多:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Hello, {0}, 成绩提升了 {1:.1f}%&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span> <span class="token number">17.125</span><span class="token punctuation">)</span>
<span class="token string">&#39;Hello, 小明, 成绩提升了 17.1%&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>Python 3 的字符串使用 Unicode，直接支持多语言。</p><p>当 <code>str</code> 和 <code>bytes</code> 互相转换时，需要指定编码。最常用的编码是 <code>UTF-8</code>。Python 当然也支持其他编码方式，比如把 Unicode 编码成 <code>GB2312</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;中文&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;gb2312&#39;</span><span class="token punctuation">)</span>
<span class="token string">b&#39;\\xd6\\xd0\\xce\\xc4&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但这种方式纯属自找麻烦，如果没有特殊业务要求，请牢记仅使用 UTF-8 编码。</p><p>格式化字符串的时候，可以用 Python 的交互式环境测试，方便快捷。</p>`,22);function b(m,h){const e=d("RouterLink");return o(),p("div",null,[r,n("div",u,[k,g,n("ul",null,[n("li",null,[s("具体详情请见 "),c(e,{to:"/ja/code/windows/notepad.html"},{default:i(()=>[s("记事本的遗留问题")]),_:1})])])]),v])}const x=t(l,[["render",b],["__file","string.html.vue"]]);export{x as default};
