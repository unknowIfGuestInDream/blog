import{_ as d,W as c,X as p,$ as i,Y as n,Z as e,a0 as o,a1 as l,a2 as s,G as r}from"./framework-4fdeb3a3.js";const h={},u=n("p",null,"在正式编写第一个 Python 程序前，我们先复习一下什么是命令行模式和 Python 交互模式。",-1),_=n("h2",{id:"命令行模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#命令行模式","aria-hidden":"true"},"#"),e(" 命令行模式")],-1),y=n("p",null,[e("打开“命令提示符”，就进入到命令行模式，它的提示符类似 "),n("code",null,"C:\\>"),e(":")],-1),v={class:"hint-container info"},b=n("p",{class:"hint-container-title"},"Info",-1),m=s('<h2 id="python-交互模式" tabindex="-1"><a class="header-anchor" href="#python-交互模式" aria-hidden="true">#</a> Python 交互模式</h2><p>在命令行模式下敲命令 <code>python</code>，就进入到 Python 交互模式，它的提示符是 <code>&gt;&gt;&gt;</code>。</p><p>在交互模式的提示符 <code>&gt;&gt;&gt;</code> 下，直接输入代码，按回车，就可以立刻得到代码执行结果。</p><blockquote><p>请敲入 <code>100 + 200</code> 然后按回车，您就会得到 <code>300</code>。</p></blockquote><p>如果要让 Python 打印出指定的文字，可以用 <code>print()</code> 函数，然后把希望打印的文字用单引号或者双引号括起来，但不能混用单引号和双引号。</p><blockquote><p>输入 <code>print(&#39;hello, world&#39;)</code> 后回车。</p></blockquote><p>最后，用 <code>exit()</code> 退出 Python，我们的第一个 Python 程序完成! 唯一的缺憾是没有保存下来，下次运行时还要再输入一遍代码。</p><p>在 Python 的交互式命令行写程序，好处是一下就能得到结果，坏处是没法保存，下次还想运行的时候，还得再敲一遍。</p><p>所以，实际开发的时候，我们总是使用一个文本编辑器来写代码，写完了，保存为一个文件，这样，程序就可以反复运行了。</p><p>现在，我们就把上次的 <code>&#39;hello, world&#39;</code> 程序用文本编辑器写出来，保存下来。</p>',10),f={class:"hint-container info"},g=n("p",{class:"hint-container-title"},"文本编辑器",-1),k=s(`<p>安装好文本编辑器后，输入以下代码:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello, world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),x=n("code",null,"print",-1),w=n("code",null,"C:\\work",-1),P={href:"http://hello.py",target:"_blank",rel:"noopener noreferrer"},C={href:"http://hello.py",target:"_blank",rel:"noopener noreferrer"},N=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:/work<span class="token operator">&gt;</span> python hello.py
hello, world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),V={href:"http://first.py",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,".py",-1),q={href:"http://hello.py",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"python hello.py",-1),B=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:/Users/MrHope<span class="token operator">&gt;</span> python hello.py
python: can<span class="token string">&#39;t open file &#39;</span>hello.py&#39;: <span class="token punctuation">[</span>Errno <span class="token number">2</span><span class="token punctuation">]</span> No such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),I={href:"http://hello.py",target:"_blank",rel:"noopener noreferrer"},M={href:"http://hello.py",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"cd",-1),S=s(`<h2 id="直接运行-py-文件" tabindex="-1"><a class="header-anchor" href="#直接运行-py-文件" aria-hidden="true">#</a> 直接运行 py 文件</h2><p>您可能有疑问，能不能像 <code>.exe</code> 文件那样直接运行 <code>.py</code> 文件呢? 在 Windows 上是不行的，但是，在 Mac 和 Linux 上是可以的，方法是在 <code>.py</code> 文件的第一行加上一个特殊的注释:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># !/usr/bin/env python3</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello, world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),W={href:"http://hello.py",target:"_blank",rel:"noopener noreferrer"},G=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> a+x hello.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),H={href:"http://hello.py",target:"_blank",rel:"noopener noreferrer"},T=s('<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>用文本编辑器写 Python 程序，然后保存为后缀为 <code>.py</code> 的文件，就可以用 Python 直接运行这个程序了。</p><p>Python 的交互模式和直接运行 <code>.py</code> 文件有什么区别呢?</p><p>直接输入 python 进入交互模式，相当于启动了 Python 解释器，但是等待您一行一行地输入源代码，每输入一行就执行一行。</p><p>直接运行 <code>.py</code> 文件相当于启动了 Python 解释器，然后一次性把 <code>.py</code> 文件的源代码给执行了，您是没有机会以交互的方式输入源代码的。</p><p>用 Python 开发程序，完全可以一边在文本编辑器里写代码，一边开一个交互式命令窗口，在写代码的过程中，把部分代码粘到命令行去验证，事半功倍! 前提是得有个 27’ 的超大显示器!</p>',6);function U(X,Y){const a=r("RouterLink"),t=r("ExternalLinkIcon");return c(),p("div",null,[u,i(" more "),_,y,n("div",v,[b,n("p",null,[e("如何打开，请见 "),o(a,{to:"/en/code/windows/cmd.html"},{default:l(()=>[e("打开命令行")]),_:1})])]),m,n("div",f,[g,n("p",null,[e("关于文本编辑器，请使用 "),o(a,{to:"/en/software/vscode/"},{default:l(()=>[e("VS Code")]),_:1})])]),k,n("p",null,[e("注意 "),x,e(" 前面不要有任何空格。然后，选择一个目录，例如 "),w,e("，把文件保存为 "),n("a",P,[e("hello.py"),o(t)]),e("，就可以打开命令行窗口，把当前目录切换到 "),n("a",C,[e("hello.py"),o(t)]),e(" 所在目录，就可以运行这个程序了:")]),N,n("p",null,[e("也可以保存为别的名字，比如 "),n("a",V,[e("first.py"),o(t)]),e("，但是必须要以 "),L,e(" 结尾，其他的都不行。此外，文件名只能是英文字母、数字和下划线的组合。")]),n("p",null,[e("如果当前目录下没有 "),n("a",q,[e("hello.py"),o(t)]),e(" 这个文件，运行 "),E,e(" 就会报错:")]),B,n("p",null,[e("报错的意思就是，无法打开 "),n("a",I,[e("hello.py"),o(t)]),e(" 这个文件，因为文件不存在。这个时候，就要检查一下当前目录下是否有这个文件了。如果 "),n("a",M,[e("hello.py"),o(t)]),e(" 存放在另外一个目录下，要首先用 "),R,e(" 命令切换当前目录。")]),S,n("p",null,[e("然后，通过命令给 "),n("a",W,[e("hello.py"),o(t)]),e(" 以执行权限:")]),G,n("p",null,[e("就可以直接运行 "),n("a",H,[e("hello.py"),o(t)]),e(" 了，比如在 Mac 下运行:")]),T])}const $=d(h,[["render",U],["__file","write.html.vue"]]);export{$ as default};
