import{_ as n,a as o}from"./node-interactive-env-391aea53.js";import{_ as c,X as d,Y as t,a0 as i,Z as s,$ as e,a1 as l,a2 as p,a3 as r,H as u}from"./framework-56fac175.js";const v={},m=s("p",null,"在前面的所有章节中，我们编写的 JavaScript 代码都是在浏览器中运行的，因此，我们可以直接在浏览器中敲代码，然后直接运行。",-1),h=s("p",null,"从本章开始，我们编写的 JavaScript 代码将不能在浏览器环境中执行了，而是在 Node.js 环境中执行，因此，JavaScript 代码将直接在您的计算机上以命令行的方式运行，所以，我们要先选择一个文本编辑器来编写 JavaScript 代码，并且把它保存到本地硬盘的某个目录，才能够执行。",-1),b=s("p",null,"那么问题来了: 文本编辑器到底哪家强?",-1),g={class:"hint-container warning"},j=s("p",{class:"hint-container-title"},"注意",-1),k=s("p",null,"千万不要使用 Windows 自带的记事本编辑任何文本文件。",-1),_=r(`<p>如果您的电脑上已经安装了<strong>Sublime Text</strong>，或者<strong>Notepad++</strong>，也可以用来编写 JavaScript 代码，注意用 UTF-8 格式保存。</p><p>最方便的，当然是 Mr.Hope 强力安利的 VS Code 了。</p><p>输入以下代码:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行总是写上 <code>&#39;use strict&#39;;</code> 是因为我们总是以严格模式运行 JavaScript 代码，避免各种潜在陷阱。</p><p>然后，选择一个目录，例如 <code>C:\\Workspace</code>，把文件保存为 <code>hello.js</code>，就可以打开命令行窗口，把当前目录切换到 hello.js 所在目录，然后输入以下命令运行这个程序了:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Workspace<span class="token operator">&gt;</span>node hello.js
Hello, world.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以保存为别的名字，比如 <code>first.js</code>，但是必须要以 <code>.js</code> 结尾。此外，文件名只能是英文字母、数字和下划线的组合。</p><p>如果当前目录下没有 <code>hello.js</code> 这个文件，运行 <code>node hello.js</code> 就会报错:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Workspace<span class="token operator">&gt;</span>node hello.js
module.js:338
    throw err<span class="token punctuation">;</span>
          ^
Error: Cannot <span class="token function">find</span> module <span class="token string">&#39;C:\\Workspace\\hello.js&#39;</span>
    at Function.Module._resolveFilename
    at Function.Module._load
    at Function.Module.runMain
    at startup
    at node.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错的意思就是，没有找到 <code>hello.js</code> 这个文件，因为文件不存在。这个时候，就要检查一下当前目录下是否有这个文件了。</p><h2 id="命令行模式和-node-js-交互模式" tabindex="-1"><a class="header-anchor" href="#命令行模式和-node-js-交互模式" aria-hidden="true">#</a> 命令行模式和 Node.js 交互模式</h2><p>请注意区分命令行模式和 Node.js 交互模式。</p><p>看到类似 <code>C:\\&gt;</code> 是在 Windows 提供的命令行模式:</p><p><img src="`+n+'" alt="run-node-hello" loading="lazy"></p><p>在命令行模式下，可以执行 Node.js 进入 Node.js 交互式环境，也可以执行 Node.js <code>hello.js</code> 运行一个 <code>.js</code> 文件。</p><p>看到<code>&gt;</code> 是在 Node.js 交互式环境下:</p><p><img src="'+o+`" alt="node-interactive-env" loading="lazy"></p><p>在 Node.js 交互式环境下，我们可以输入 JavaScript 代码并立刻执行。</p><p>此外，在命令行模式运行.js 文件和在 Node.js 交互式环境下直接运行 JavaScript 代码有所不同。Node.js 交互式环境会把每一行 JavaScript 代码的结果自动打印出来，但是，直接运行 JavaScript 文件却不会。</p><p>例如，在 Node.js 交互式环境下，输入:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">100</span> + <span class="token number">200</span> + <span class="token number">300</span><span class="token punctuation">;</span>
<span class="token number">600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>直接可以看到结果 600。</p><p>但是，写一个 <code>calc.js</code> 的文件，内容如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">100</span> <span class="token operator">+</span> <span class="token number">200</span> <span class="token operator">+</span> <span class="token number">300</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在命令行模式下执行:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Workspace<span class="token operator">&gt;</span>node calc.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发现什么输出都没有。</p><p>这是正常的。想要输出结果，必须自己用 <code>console.log()</code> 打印出来。把 <code>calc.js</code> 改造一下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">+</span> <span class="token number">200</span> <span class="token operator">+</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再执行，就可以看到结果:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Workspace<span class="token operator">&gt;</span>node calc.js
<span class="token number">600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用严格模式" tabindex="-1"><a class="header-anchor" href="#使用严格模式" aria-hidden="true">#</a> 使用严格模式</h2><p>如果在 JavaScript 文件开头写上 <code>&#39;use strict&#39;;</code>，那么 Node.js 在执行该 JavaScript 时将使用严格模式。但是，在服务器环境下，如果有很多 JavaScript 文件，每个文件都写上 <code>&#39;use strict&#39;;</code> 很麻烦。我们可以给 Node.js 传递一个参数，让 Node.js 直接为所有 js 文件开启严格模式:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">--use_strict</span> calc.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后续代码，如无特殊说明，我们都会直接给 Node.js 传递 <code>--use_strict</code> 参数来开启严格模式。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>用文本编辑器写 JavaScript 程序，然后保存为后缀为 <code>.js</code> 的文件，就可以用 Node.js 直接运行这个程序了。</p><p>Node.js 的交互模式和直接运行 <code>.js</code> 文件有什么区别呢?</p><p>直接输入 Node.js 进入交互模式，相当于启动了 Node.js 解释器，但是等待您一行一行地输入源代码，每输入一行就执行一行。</p><p>直接运行 <code>node hello.js</code> 文件相当于启动了 Node.js 解释器，然后一次性把 <code>hello.js</code> 文件的源代码给执行了，您是没有机会以交互的方式输入源代码的。</p><p>在编写 JavaScript 代码的时候，完全可以一边在文本编辑器里写代码，一边开一个 Node.js 交互式命令窗口，在写代码的过程中，把部分代码粘到命令行去验证，事半功倍! 前提是得有个 27 寸的超大显示器!</p>`,42);function N(f,x){const a=u("RouterLink");return d(),t("div",null,[m,h,i(" more "),b,s("div",g,[j,k,s("ul",null,[s("li",null,[e("具体详情请见 "),l(a,{to:"/ja/code/windows/notepad.html"},{default:p(()=>[e("记事本遗留问题")]),_:1})])])]),_])}const C=c(v,[["render",N],["__file","program.html.vue"]]);export{C as default};
