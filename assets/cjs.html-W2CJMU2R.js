import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as o,b as e,a as n,e as s,f as p}from"./app--7H4MSuP.js";const c={},l=n("p",null,"在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。",-1),u=n("p",null,[s("为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Node.js 环境中，一个 "),n("code",null,".js"),s(" 文件就称之为一个模块(module)。")],-1),i=n("p",null,"使用模块有什么好处?",-1),r=n("p",null,"最大的好处是大大提高了代码的可维护性。其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括 Node.js 内置的模块和来自第三方的模块。",-1),d=n("p",null,"使用模块还可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。",-1),k=p(`<p>在上一节，我们编写了一个 hello.js 文件，这个 hello.js 文件就是一个模块，模块的名字就是文件名(去掉.js 后缀)，所以 hello.js 文件就是名为 hello 的模块。</p><p>我们把 hello.js 改造一下，创建一个函数，这样我们就可以在其他地方调用这个函数:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> greet<span class="token punctuation">;</span>
</code></pre></div><p>函数 <code>greet()</code> 是我们在 hello 模块中定义的，您可能注意到最后一行是一个奇怪的赋值语句，它的意思是，把函数 <code>greet</code> 作为模块的输出暴露出去，这样其他模块就可以使用 <code>greet</code> 函数了。</p><p>问题是其他模块怎么使用 hello 模块的这个 <code>greet</code> 函数呢? 我们再编写一个 <code>main.js</code> 文件，调用 <code>hello</code> 模块的 <code>greet</code> 函数:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 引入hello模块:</span>
<span class="token keyword">const</span> greet <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Michael&quot;</span><span class="token punctuation">;</span>

<span class="token function">greet</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello, Michael!</span>
</code></pre></div><p>注意到引入 <code>hello</code> 模块用 Node.js 提供的 <code>require</code> 函数:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greet <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>引入的模块作为变量保存在 <code>greet</code> 变量中，那 greet 变量到底是什么东西? 其实变量 <code>greet</code> 就是在 <code>hello.js</code> 中我们用 <code>module.exports = greet;</code> 输出的 <code>greet</code> 函数。所以，<code>main.js</code> 就成功地引用了 <code>hello.js</code> 模块中定义的 <code>greet()</code> 函数，接下来就可以直接使用它了。</p><p>在使用 <code>require()</code> 引入模块的时候，请注意模块的相对路径。因为 main.js 和 hello.js 位于同一个目录，所以我们用了当前目录.:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greet <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不要忘了写相对目录!</span>
</code></pre></div><p>如果只写模块名:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greet <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>则 Node.js 会依次在内置模块、全局模块和当前模块下查找 hello.js，您很可能会得到一个错误:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>js
    <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
          <span class="token operator">^</span>
<span class="token literal-property property">Error</span><span class="token operator">:</span> Cannot find module <span class="token string">&#39;hello&#39;</span>
    at Function<span class="token punctuation">.</span>Module<span class="token punctuation">.</span>_resolveFilename
    at Function<span class="token punctuation">.</span>Module<span class="token punctuation">.</span>_load
    <span class="token operator">...</span>
    at Function<span class="token punctuation">.</span>Module<span class="token punctuation">.</span>_load
    at Function<span class="token punctuation">.</span>Module<span class="token punctuation">.</span>runMain
</code></pre></div><p>遇到这个错误，您要检查:</p><ul><li>模块名是否写对了；</li><li>模块文件是否存在；</li><li>相对路径是否写对了。</li></ul><h2 id="commonjs-规范" tabindex="-1"><a class="header-anchor" href="#commonjs-规范"><span>CommonJS 规范</span></a></h2><p>这种模块加载机制被称为 <code>CommonJS</code> 规范。在这个规范下，每个 <code>.js</code> 文件都是一个模块，它们内部各自使用的变量名和函数名都互不冲突，例如，<code>hello.js</code> 和 <code>main.js</code> 都申明了全局变量 <code>const s = &#39;xxx&#39;</code>，但互不影响。</p><p>一个模块想要对外暴露变量(函数也是变量)，可以用 <code>module.exports = variable;</code>，一个模块要引用其他模块暴露的变量，用 <code>const ref = require(&#39;module_name&#39;);</code> 就拿到了引用模块的变量。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>要在模块中对外输出变量，用:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> variable<span class="token punctuation">;</span>
</code></pre></div><p>输出的变量可以是任意对象、函数、数组等等。</p><p>要引入其他模块输出的对象，用:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;other_module&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>引入的对象具体是什么，取决于引入模块输出的对象。</p><h2 id="深入了解模块原理" tabindex="-1"><a class="header-anchor" href="#深入了解模块原理"><span>深入了解模块原理</span></a></h2><p>如果您想详细地了解<strong>CommonJS</strong>的模块实现原理，请继续往下阅读。如果不想了解，请结束阅读。</p><p>当我们编写 JavaScript 代码时，我们可以申明全局变量:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;global&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>在浏览器中，大量使用全局变量可不好。如果您在 <code>a.js</code> 中使用了全局变量 s，那么，在 <code>b.js</code> 中也使用全局变量 s，将造成冲突，<code>b.js</code> 中对 s 赋值会改变 <code>a.js</code> 的运行逻辑。</p><p>也就是说，JavaScript 语言本身并没有一种模块机制来保证不同模块可以使用相同的变量名。</p><p>那 Node.js 是如何实现这一点的?</p><p>其实要实现“模块”这个功能，并不需要语法层面的支持。Node.js 也并不会增加任何 JavaScript 语法。实现“模块”功能的奥妙就在于 JavaScript 是一种函数式编程语言，它支持闭包。如果我们把一段 JavaScript 代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。</p><p>请注意我们编写的 <code>hello.js</code> 代码是这样的:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Node.js 加载了 hello.js 后，它可以把代码包装一下，变成这样执行:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 读取的hello.js代码:</span>
  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// hello.js代码结束</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>这样一来，原来的全局变量 <code>s</code> 现在变成了匿名函数内部的局部变量。如果 Node.js 继续加载其他模块，这些模块中定义的“全局”变量 <code>s</code> 也互不干扰。</p><p>所以，Node.js 利用 JavaScript 的函数式编程的特性，轻而易举地实现了模块的隔离。</p><p>但是，模块的输出 <code>module.exports</code> 怎么实现?</p><p>这个也很容易实现，Node.js 可以先准备一个对象 <code>module</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 准备module对象:</span>
<span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 读取的hello.js代码:</span>
  <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> greet<span class="token punctuation">;</span>
  <span class="token comment">// hello.js代码结束</span>
  <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> exported <span class="token operator">=</span> <span class="token function">load</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 保存module:</span>
<span class="token function">save</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> exported<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，变量 module 是 Node.js 在加载 js 文件前准备的一个变量，并将其传入加载函数，我们在 <code>hello.js</code> 中可以直接使用变量 <code>module</code> 原因就在于它实际上是函数的一个参数:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> greet<span class="token punctuation">;</span>
</code></pre></div><p>通过把参数 <code>module</code> 传递给 <code>load()</code> 函数，<code>hello.js</code> 就顺利地把一个变量传递给了 Node.js 执行环境，Node.js 会把 module 变量保存到某个地方。</p><p>由于 Node.js 保存了所有导入的 module，当我们用 <code>require()</code> 获取 module 时，Node.js 找到对应的 module，把这个 module 的 <code>exports</code> 变量返回，这样，另一个模块就顺利拿到了模块的输出:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greet <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>以上是 Node.js 实现 JavaScript 模块的一个简单的原理介绍。</p><h2 id="module-exports-vs-exports" tabindex="-1"><a class="header-anchor" href="#module-exports-vs-exports"><span>module.exports vs exports</span></a></h2><p>很多时候，您会看到，在 Node.js 环境中，有两种方法可以在一个模块中输出变量:</p><p>方法一: 对 module.exports 赋值:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// hello.js</span>

<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hello</span><span class="token operator">:</span> hello<span class="token punctuation">,</span>
  <span class="token literal-property property">greet</span><span class="token operator">:</span> greet<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二: 直接使用 exports:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// hello.js</span>

<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>hello <span class="token operator">=</span> hello<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>greet <span class="token operator">=</span> greet<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是您不可以直接对 exports 赋值:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 代码可以执行，但是模块并没有输出任何变量:</span>
exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hello</span><span class="token operator">:</span> hello<span class="token punctuation">,</span>
  <span class="token literal-property property">greet</span><span class="token operator">:</span> greet<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>如果您对上面的写法感到十分困惑，不要着急，我们来分析 Node.js 的加载机制:</p><p>首先，Node.js 会把整个待加载的 hello.js 文件放入一个包装函数 load 中执行。在执行这个 load()函数前，Node.js 准备好了 module 变量:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><code>load()</code> 函数最终返回 <code>module.exports</code>:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// hello.js的文件内容</span>
    <span class="token operator">...</span>
    <span class="token comment">// load函数返回:</span>
    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> exported <span class="token operator">=</span> <span class="token function">load</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> module<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>也就是说，默认情况下，Node.js 准备的 <code>exports</code> 变量和 <code>module.exports</code> 变量实际上是同一个变量，并且初始化为空对象 <code>{}</code>，于是，我们可以写:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>exports<span class="token punctuation">.</span><span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>也可以写:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>换句话说，Node.js 默认给您准备了一个空对象 <code>{}</code>，这样您可以直接往里面加东西。</p><p>但是，如果我们要输出的是一个函数或数组，那么，只能给 <code>module.exports</code> 赋值:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>给 <code>exports</code> 赋值是无效的，因为赋值后，<code>module.exports</code> 仍然是空对象 <code>{}</code>。</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h2><p>如果要输出一个键值对象 <code>{}</code>，可以利用 <code>exports</code> 这个已存在的空对象 <code>{}</code>，并继续在上面添加新的键值；</p><p>如果要输出一个函数或数组，必须直接对 <code>module.exports</code> 对象赋值。</p><p>所以我们可以得出结论: 直接对 <code>module.export</code>s 赋值，可以应对任何情况:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>或者:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>最终，我们强烈建议使用 <code>module.exports = xxx</code> 的方式来输出模块变量，这样，您只需要记忆一种方法。</p>`,79);function m(v,g){return t(),o("div",null,[l,u,i,r,d,e(" more "),k])}const x=a(c,[["render",m],["__file","cjs.html.vue"]]),f=JSON.parse('{"path":"/code/node-js/cjs.html","title":"模块","lang":"zh-CN","frontmatter":{"date":"2022-05-14T00:00:00.000Z","title":"模块","icon":"module","category":"Node.js","tag":["Node.js","软件"],"description":"在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。 为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Node.js 环境中，一个 .js 文件就称之为一个模块(module)。 使用模块有什么好处? 最大的好处是大...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/node-js/cjs.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"模块"}],["meta",{"property":"og:description","content":"在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。 为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Node.js 环境中，一个 .js 文件就称之为一个模块(module)。 使用模块有什么好处? 最大的好处是大..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2022-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模块\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"CommonJS 规范","slug":"commonjs-规范","link":"#commonjs-规范","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"深入了解模块原理","slug":"深入了解模块原理","link":"#深入了解模块原理","children":[]},{"level":2,"title":"module.exports vs exports","slug":"module-exports-vs-exports","link":"#module-exports-vs-exports","children":[]},{"level":2,"title":"结论","slug":"结论","link":"#结论","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":7.42,"words":2226},"filePathRelative":"code/node-js/cjs.md","localizedDate":"2022年5月14日","excerpt":"<p>在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。</p>\\n<p>为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Node.js 环境中，一个 <code>.js</code> 文件就称之为一个模块(module)。</p>\\n<p>使用模块有什么好处?</p>\\n<p>最大的好处是大大提高了代码的可维护性。其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括 Node.js 内置的模块和来自第三方的模块。</p>\\n<p>使用模块还可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。</p>\\n","autoDesc":true}');export{x as comp,f as data};
