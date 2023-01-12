import{_ as e,a as o,b as t,c as r}from"./open-with-vscode-e1529050.js";import{_ as i,W as l,X as d,Y as s,Z as n,a0 as p,a2 as c,G as g}from"./framework-269d85ce.js";const h={},u=s("h1",{id:"vs-code-安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vs-code-安装","aria-hidden":"true"},"#"),n(" VS Code 安装")],-1),m=s("h2",{id:"下载",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),n(" 下载")],-1),_={href:"https://code.visualstudio.com/Download",target:"_blank",rel:"noopener noreferrer"},v=c('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li><p>双击安装包打开</p></li><li><p>同意用户协议。</p></li><li><p>安装选项中，请务必 <strong>全选</strong> 以下选项:</p><p><img src="'+e+'" alt="安装 VS Code" loading="lazy"></p><p>勾选 <strong>添加到目录上下文菜单</strong>、<strong>添加到文件上下文菜单</strong>、<strong>将 code 注册为受支持的文件编辑器</strong>、<strong>添加到 path</strong>。</p></li><li><p>在 VS Code 初次启动后，若未提前安装 Git 可能会提示未找到 Git 软件，忽略即可</p></li><li><p>推荐立即执行简体中文扩展安装以保证界面语言为简体中文。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当您安装 VS Code 并第一次打开的时候，VS Code 会自动检测当前系统语言并在右下角推荐您安装对应语言的扩展，点击按钮即可自动安装。</p></div></li></ul><h2 id="更新频率" tabindex="-1"><a class="header-anchor" href="#更新频率" aria-hidden="true">#</a> 更新频率</h2><p>VS Code 每月发布一个具有新功能和重要错误修复的新版本。大多数平台都支持自动更新，并且会在新版本发布时提示您安装新版本。您还可以通过运行左下角 <strong>管理 → 检查更新</strong> 来手动检查更新。</p><h2 id="用-vs-code-打开文件和文件夹" tabindex="-1"><a class="header-anchor" href="#用-vs-code-打开文件和文件夹" aria-hidden="true">#</a> 用 VS Code 打开文件和文件夹</h2><p>VS Code 支持打开文件和文件夹。</p><ul><li><p>打开文件时请在文件图标上单击右键—选择 <strong>使用 VS Code 打开</strong>；</p></li><li><p>打开文件夹请双击打开文件夹，在空白处单击右键——选择 <strong>用 VS Code 打开</strong>。</p></li></ul><h3 id="mac-添加-通过-code-打开" tabindex="-1"><a class="header-anchor" href="#mac-添加-通过-code-打开" aria-hidden="true">#</a> Mac 添加 <strong>通过 Code 打开</strong></h3><p>在 Mac 系统上，Finder 选中一个目录，右键菜单并没有 <strong>通过 Code 打开</strong> 这个操作。不过我们可以通过 Automator 自己添加这个操作。</p><p>先运行 Automator，选择 <strong>服务</strong>:</p><p><img src="'+o+'" alt="Automator Service" loading="lazy"></p><p>然后，执行以下操作:</p><p><img src="'+t+`" alt="Automator" loading="lazy"></p><ol><li><p>在右侧面板选择 <strong>服务</strong> 收到选定的 <strong>文件夹</strong>，位于 “Finder.app”，该选项是为了从 Finder 中接收一个文件夹；</p></li><li><p>在左侧面板选择 <strong>实用工具</strong>，然后找到 <strong>运行 Shell 脚本</strong>，把它拽到右侧面板里；</p></li><li><p>在右侧 <strong>运行 Shell 脚本</strong> 的面板里，选择 Shell <strong>/bin/bash</strong>，传递输入 <strong>作为自变量</strong>，然后修改 Shell 脚本如下:</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token function">open</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;Visual Studio Code&quot;</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存为 <strong>Open With VS Code</strong> 后，打开 Finder，选中一个文件夹，点击右键， <strong>服务</strong>，就可以看到 <strong>Open With VS Code</strong> 菜单:</p><p><img src="`+r+'" alt="Open with VS Code" loading="lazy"></p>',17);function b(f,k){const a=g("ExternalLinkIcon");return l(),d("div",null,[u,m,s("p",null,[n("在 "),s("a",_,[n("官网下载地址"),p(a)]),n(" 下载最新版安装包(Window User 64bit, 那个大的蓝色按钮就是)。")]),v])}const C=i(h,[["render",b],["__file","install.html.vue"]]);export{C as default};
