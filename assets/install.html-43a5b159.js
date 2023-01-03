import{_ as r,W as p,X as c,Y as s,Z as n,a0 as a,a1 as i,a2 as t,E as l}from"./framework-fec69ff1.js";const d={},h=s("p",null,"在 Python 中，安装第三方模块，是通过包管理工具 pip 完成的。",-1),u=s("p",null,"如果您正在使用 Mac 或 Linux，安装 pip 本身这个步骤就可以跳过了。",-1),m=s("code",null,"pip",-1),v=s("code",null,"Add python.exe to Path",-1),g=s("p",null,"在命令提示符窗口下尝试运行 pip，如果 Windows 提示未找到命令，可以重新运行安装程序添加 pip。",-1),b=s("div",{class:"hint-container warning"},[s("p",{class:"hint-container-title"},"注意"),s("p",null,"Mac 或 Linux 上有可能并存 Python 3.x 和 Python 2.x，因此对应的 pip 命令是 pip3。")],-1),y=s("p",null,"例如，我们要安装一个第三方库——Python Imaging Library，这是 Python 下非常强大的处理图像的工具库。不过，PIL 目前只支持到 Python 2.7，并且有年头没有更新了，因此，基于 PIL 的 Pillow 项目开发非常活跃，并且支持最新的 Python 3。",-1),_={href:"http://pypi.python.org",target:"_blank",rel:"noopener noreferrer"},k={href:"https://pypi.python.org/pypi/Pillow/",target:"_blank",rel:"noopener noreferrer"},P=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> Pillow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>耐心等待下载并安装后，就可以使用 Pillow 了。</p><h2 id="安装常用模块" tabindex="-1"><a class="header-anchor" href="#安装常用模块" aria-hidden="true">#</a> 安装常用模块</h2>`,3),f={href:"https://www.anaconda.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.anaconda.com/download/",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>安装好 Anaconda 后，重新打开命令行窗口，输入 python，可以看到 Anaconda 的信息:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌────────────────────────────────────────────────────────┐
│Command Prompt - python                           - □ x │
├────────────────────────────────────────────────────────┤
│Microsoft Windows [Version 10.0.0]                      │
│(c) 2015 Microsoft Corporation. All rights reserved.    │
│                                                        │
│C:\\&gt; python                                             │
│Python 3.9.2 |Anaconda, Inc.| ... on win32              │
│Type &quot;help&quot;, ... for more information.                  │
│&gt;&gt;&gt; import numpy                                        │
│&gt;&gt;&gt; _                                                   │
│                                                        │
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以尝试直接 <code>import numpy</code> 等已安装的第三方模块。</p><h2 id="模块搜索路径" tabindex="-1"><a class="header-anchor" href="#模块搜索路径" aria-hidden="true">#</a> 模块搜索路径</h2>`,4),L={href:"http://xn--ghqqzk7qcwevna82k6zbpxnlrch67efa934ro33c.py",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">import</span> mymodule
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
ImportError: No module named mymodule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，Python 解释器会搜索当前目录、所有已安装的内置模块和第三方模块，搜索路径存放在 sys 模块的 path 变量中:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">import</span> sys
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> sys.path
<span class="token punctuation">[</span><span class="token string">&#39;&#39;</span>, <span class="token string">&#39;/Library/Frameworks/Python.framework/Versions/3.9/lib/python36.zip&#39;</span>, <span class="token string">&#39;/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9&#39;</span>, <span class="token punctuation">..</span>., <span class="token string">&#39;/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们要添加自己的搜索目录，有两种方法:</p><p>一是直接修改 <code>sys.path</code>，添加要搜索的目录:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">import</span> sys
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> sys.path.append<span class="token punctuation">(</span><span class="token string">&#39;/Users/michael/my_py_scripts&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法是在运行时修改，运行结束后失效。</p>`,7),I=s("code",null,"PYTHONPATH",-1);function V(q,N){const o=l("RouterLink"),e=l("ExternalLinkIcon");return p(),c("div",null,[h,u,s("p",null,[n("如果您正在使用 Windows，请参考 "),a(o,{to:"/code/language/python/intro/install.html"},{default:i(()=>[n("安装 Python")]),_:1}),n(" 一节的内容，确保安装时勾选了 "),m,n(" 和 "),v,n("。")]),g,b,y,s("p",null,[n("一般来说，第三方库都会在 Python 官方的 <"),s("a",_,[n("pypi.python.org"),a(e)]),n("> 网站注册，要安装一个第三方库，必须先知道该库的名称，可以在官网或者 pypi 上搜索，比如 Pillow 的名称叫 "),s("a",k,[n("Pillow"),a(e)]),n("，因此，安装 Pillow 的命令就是:")]),P,s("p",null,[n("在使用 Python 时，我们经常需要用到很多第三方库，例如，上面提到的 Pillow，以及 MySQL 驱动程序，Web 框架 Flask，科学计算 Numpy 等。用 pip 一个一个安装费时费力，还需要考虑兼容性。我们推荐直接使用 "),s("a",f,[n("Anaconda"),a(e)]),n("，这是一个基于 Python 的数据处理和科学计算平台，它已经内置了许多非常有用的第三方库，我们装上 Anaconda，就相当于把数十个第三方模块自动安装好了，非常简单易用。")]),s("p",null,[n("可以从 "),s("a",w,[n("Anaconda 官网"),a(e)]),n(" 下载 GUI 安装包，安装包有 500~600M，所以需要耐心等待下载。下载后直接安装，Anaconda 会把系统 Path 中的 python 指向自己自带的 Python，并且，Anaconda 安装的第三方模块会安装在 Anaconda 自己的路径下，不影响系统已安装的 Python 目录。")]),x,s("p",null,[n("当我们试图加载一个模块时，Python "),s("a",L,[n("会在指定的路径下搜索对应的.py"),a(e)]),n(" 文件，如果找不到，就会报错:")]),A,s("p",null,[n("第二种方法是设置环境变量 "),I,n("，该环境变量的内容会被自动添加到模块搜索路径中。设置方式与 "),a(o,{to:"/code/windows/add-path.html"},{default:i(()=>[n("设置 Path 环境变量")]),_:1}),n(" 类似。注意只需要添加您自己的搜索路径，Python 自己本身的搜索路径不受影响。")])])}const C=r(d,[["render",V],["__file","install.html.vue"]]);export{C as default};
