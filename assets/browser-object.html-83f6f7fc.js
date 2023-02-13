import{_ as p,X as o,Y as c,a0 as i,Z as a,$ as n,a1 as t,a3 as e,H as l}from"./framework-0ff09816.js";const u={},d=a("p",null,"JavaScript 可以获取浏览器提供的很多对象，并进行操作。",-1),r=e(`<h2 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h2><p><code>window</code> 对象不但充当全局作用域，而且表示浏览器窗口。</p><p><code>window</code> 对象有 <code>innerWidth</code> 和 <code>innerHeight</code> 属性，可以获取浏览器窗口的内部宽度和高度。内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽高。</p><div class="hint-container info"><p class="hint-container-title">兼容性</p><p>IE &lt;= 8 不支持。</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 可以调整浏览器窗口大小试试:</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">window inner size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>window<span class="token punctuation">.</span>innerWidth<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> x </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>window<span class="token punctuation">.</span>innerHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的，还有一个 <code>outerWidth</code> 和 <code>outerHeight</code> 属性，可以获取浏览器窗口的整个宽高。</p><h2 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> navigator</h2><p><code>navigator</code> 对象表示浏览器的信息，最常用的属性包括:</p><ul><li><code>navigator.appName</code>: 浏览器名称；</li><li><code>navigator.appVersion</code>: 浏览器版本；</li><li><code>navigator.language</code>: 浏览器设置的语言；</li><li><code>navigator.platform</code>: 操作系统类型；</li><li><code>navigator.userAgent</code>: 浏览器设定的 User-Agent 字符串。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">appName = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>navigator<span class="token punctuation">.</span>appName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">appVersion = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>navigator<span class="token punctuation">.</span>appVersion<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">language = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>navigator<span class="token punctuation">.</span>language<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">platform = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>navigator<span class="token punctuation">.</span>platform<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">userAgent = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>navigator<span class="token punctuation">.</span>userAgent<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，<code>navigator</code> 的信息可以很容易地被用户修改，所以 JavaScript 读取的值不一定是正确的。很多初学者为了针对不同浏览器编写不同的代码，喜欢用 <code>if</code> 判断浏览器版本，例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> width<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getIEVersion</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">)</span> width <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
<span class="token keyword">else</span> width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但这样既可能判断不准确，也很难维护代码。正确的方法是充分利用 JavaScript 对不存在属性返回 <code>undefined</code> 的特性，直接用短路运算符 <code>||</code> 计算:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> screen</h2><p><code>screen</code> 对象表示屏幕的信息，常用的属性有:</p><ul><li><code>screen.width</code>: 屏幕宽度，以像素为单位；</li><li><code>screen.height</code>: 屏幕高度，以像素为单位；</li><li><code>screen.colorDepth</code>: 返回颜色位数，如 8、16、24。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Screen size = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>screen<span class="token punctuation">.</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> x </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>screen<span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2><p><code>location</code> 对象表示当前页面的 URL 信息。例如，一个完整的 URL:</p><p><code>https://www.example.com:8080/path/index.html?a=1&amp;b=2#TOP</code> 可以用 <code>location.href</code> 获取。要获得 URL 各个部分的值，可以这么写:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>location<span class="token punctuation">.</span>protocol<span class="token punctuation">;</span> <span class="token comment">// &#39;http&#39;</span>
location<span class="token punctuation">.</span>host<span class="token punctuation">;</span> <span class="token comment">// &#39;www.example.com&#39;</span>
location<span class="token punctuation">.</span>port<span class="token punctuation">;</span> <span class="token comment">// &#39;8080&#39;</span>
location<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span> <span class="token comment">// &#39;/path/index.html&#39;</span>
location<span class="token punctuation">.</span>search<span class="token punctuation">;</span> <span class="token comment">// &#39;?a=1&amp;b=2&#39;</span>
location<span class="token punctuation">.</span>hash<span class="token punctuation">;</span> <span class="token comment">// &#39;TOP&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要加载一个新页面，可以调用 <code>location.assign()</code>。如果要重新加载当前页面，调用 <code>location.reload()</code> 方法非常方便。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&quot;重新加载当前页&quot;</span> <span class="token operator">+</span> location<span class="token punctuation">.</span>href <span class="token operator">+</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置一个新的 URL 地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> document</h2><p><code>document</code> 对象表示当前页面。由于 HTML 在浏览器中以 DOM 形式表示为树形结构，<code>document</code> 对象就是整个 DOM 树的根节点。</p><p><code>document</code> 的 title 属性是从 HTML 文档中的 <code>&lt;title&gt;xxx&lt;/title&gt;</code> 读取的，但是可以动态改变:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&quot;努力学习JavaScript!&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要查找 DOM 树的某个节点，需要从 document 对象开始查找。最常用的查找是根据 ID 和 Tag Name。</p><p>我们先准备 HTML 数据:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drink-menu<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>solid 1px #ccc<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>6px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>摩卡<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>热摩卡咖啡<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>酸奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>北京老酸奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>果汁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>鲜榨苹果汁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>document</code> 对象提供的 <code>getElementById()</code> 和 <code>getElementsByTagName()</code> 可以按 ID 获得一个 DOM 节点和按 Tag 名称获得一组 DOM 节点:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> menu <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;drink-menu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> drinks <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;dt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s<span class="token punctuation">,</span> menu<span class="token punctuation">,</span> drinks<span class="token punctuation">;</span>

menu <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;drink-menu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
menu<span class="token punctuation">.</span>tagName<span class="token punctuation">;</span> <span class="token comment">// &#39;DL&#39;</span>

drinks <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;dt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token string">&quot;提供的饮料有:&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> drinks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> s <span class="token operator">=</span> s <span class="token operator">+</span> drinks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>摩卡
热摩卡咖啡
酸奶
北京老酸奶
果汁
鲜榨苹果汁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>document</code> 对象还有一个 <code>cookie</code> 属性，可以获取当前页面的 Cookie。</p><p>Cookie 是由服务器发送的 <code>key-value</code> 标示符。因为 HTTP 协议是无状态的，但是服务器要区分到底是哪个用户发过来的请求，就可以用 Cookie 来区分。当一个用户成功登录后，服务器发送一个 Cookie 给浏览器，例如 <code>user=ABC123XYZ</code> (加密的字符串)...，此后，浏览器访问该网站时，会在请求头附上这个 Cookie，服务器根据 Cookie 即可区分出用户。</p><p>Cookie 还可以存储网站的一些设置，例如，页面显示的语言等等。</p><p>JavaScript 可以通过 <code>document.cookie</code> 读取到当前页面的 Cookie:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie<span class="token punctuation">;</span> <span class="token comment">// &#39;v=123; remember=true; prefer=zh&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 JavaScript 能读取到页面的 Cookie，而用户的登录信息通常也存在 Cookie 中，这就造成了巨大的安全隐患，这是因为在 HTML 页面中引入第三方的 JavaScript 代码是允许的:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 当前页面在 www.example.com --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.foo.com/jquery.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),k={href:"http://www.foo.com",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},m=e('<p>为了解决这个问题，服务器在设置 Cookie 时可以使用 <code>httpOnly</code>，设定了 httpOnly 的 Cookie 将不能被 JavaScript 读取。这个行为由浏览器实现，主流浏览器均支持 httpOnly 选项，IE 从 IE6 SP1 开始支持</p><p>为了确保安全，服务器端在设置 Cookie 时，应该始终坚持使用 <code>httpOnly</code>。</p><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h2><p><code>history</code> 对象保存了浏览器的历史记录，JavaScript 可以调用 history 对象的 <code>back()</code> 或 <code>forward ()</code>，相当于用户点击了浏览器的“后退”或“前进”按钮。</p><p>这个对象属于历史遗留对象，对于现代 Web 页面来说，由于大量使用 Ajax 和页面交互，简单粗暴地调用 <code>history.back()</code> 可能会让用户感到非常愤怒。</p><p>新手开始设计 Web 页面时喜欢在登录页登录成功时调用 <code>history.back()</code>，试图回到登录前的页面。这是一种错误的方法。</p>',6);function g(h,b){const s=l("ExternalLinkIcon");return o(),c("div",null,[d,i(" more "),r,a("p",null,[n("如果引入的第三方的 JavaScript 中存在恶意代码，则 "),a("a",k,[n("www.foo.com"),t(s)]),n(" 网站将直接获取到 "),a("a",v,[n("www.example.com"),t(s)]),n(" 网站的用户登录信息。")]),m])}const f=p(u,[["render",g],["__file","browser-object.html.vue"]]);export{f as default};
