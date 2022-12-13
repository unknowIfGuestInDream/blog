import{_ as p}from"./terminal-dropdown-6ffff108.js";import{_ as d,W as i,X as r,Y as n,Z as a,a0 as s,a1 as l,a2 as t,E as o}from"./framework-ae009c3e.js";const u={},h=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1),m={href:"https://aka.ms/terminal",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/microsoft/terminal/releases/",target:"_blank",rel:"noopener noreferrer"},b=t('<div class="custom-container warning"><p class="custom-container-title">Note</p><p>从 GitHub 安装，终端将不会自动更新为新版本。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>打开终端时，Windows Terminal 会在打开的选项卡中通过 PowerShell 作为默认配置文件启动。</p><p>如果已安装 WSL(Windows Subsystem for Linux) 发行版或多个版本的 PowerShell，终端将自动为您创建配置文件。</p><h3 id="打开新选项卡" tabindex="-1"><a class="header-anchor" href="#打开新选项卡" aria-hidden="true">#</a> 打开新选项卡</h3><p>您可以使用 <code>Ctrl + Shift + T</code> 快捷键或选择 + (加号)按钮，打开默认配置文件的新选项卡。</p><p>若要打开其他配置文件，请选择 + 按钮旁的 ˅(箭头)打开下拉菜单，从中选择要打开的配置文件。</p><p><img src="'+p+'" alt="下拉菜单" loading="lazy"></p><h3 id="打开新窗格" tabindex="-1"><a class="header-anchor" href="#打开新窗格" aria-hidden="true">#</a> 打开新窗格</h3><p>可以使用窗格并行运行多个 shell。 若要打开窗格，可以使用 <code>Alt + Shift + D</code>。 此键绑定将打开焦点配置文件的重复窗格。</p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>若要自定义 Windows Terminal 的设置，请在下拉菜单中选择“设置”。 这会在默认文本编辑器中打开 settings.json 文件。</p><p>终端支持自定义影响整个应用程序的全局属性、影响每个配置文件的设置的配置文件属性以及允许您使用键盘与终端交互的键绑定。</p><div class="custom-container info"><p class="custom-container-title">命令行参数</p><p>可以使用命令行参数在特定配置中启动终端。 这些参数允许通过自定义配置文件设置打开具有特定选项卡和窗格的终端。</p></div>',14),q=t(`<h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2><p>可以使用 <code>wt.exe</code> 从命令行打开 Windows 终端的新实例。 还可以改为使用执行别名 <code>wt</code>。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p><code>wt</code> 命令行接受两种类型的值: “选项”和“命令” 。 “选项”是一系列标志和其他参数，可以将 <code>wt</code> 命令行的行为作为一个整体来控制。 “命令”提供应该实现的操作或操作列表(以分号分隔)。 如果未指定命令，则默认情况下会将命令指定为 <code>new-tab</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wt <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>command <span class="token punctuation">;</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>若要显示列出可用命令行参数的帮助消息，请输入 <code>wt -h</code></p></div><h3 id="选项和命令" tabindex="-1"><a class="header-anchor" href="#选项和命令" aria-hidden="true">#</a> 选项和命令</h3><p>下面是 wt 命令行支持的命令和选项的完整列表。</p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td><code>--help</code>、<code>-h</code>、<code>-?</code>、<code>/?</code></td><td>显示帮助消息。</td></tr><tr><td><code>--maximized</code>、<code>-M</code></td><td>以最大化形式启动终端。</td></tr><tr><td><code>--fullscreen</code>、<code>-F</code></td><td>以全屏形式启动终端。</td></tr></tbody></table><table><thead><tr><th>命令</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>new-tab</code></td><td><code>--profile, -p profile-name</code>、<code>--startingDirectory, -d starting-directory</code>、<code>commandline</code>、<code>--title</code></td><td>创建新选项卡。</td></tr><tr><td><code>split-pane</code></td><td><code>-H, --horizontal</code>、<code>-V, --vertical</code>、<code>--profile, -p profile-name</code>、<code>--startingDirectory, -d starting-directory</code>、<code>commandline</code>、<code>--title</code></td><td>拆分新窗格。</td></tr><tr><td><code>focus-tab</code></td><td><code>--target</code>, <code>-t</code> <code>tab-index</code></td><td>聚焦于特定选项卡。</td></tr></tbody></table><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li><p><code>-p</code> 标志用于指定应打开的 Windows 终端配置文件。</p><details class="custom-container details"><summary>例子</summary><p>打开 Ubuntu 20.04:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wt <span class="token parameter variable">-p</span> <span class="token string">&quot;Ubuntu-20.04&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details></li><li><p><code>-d</code> 标志用于指定起始目录</p><details class="custom-container details"><summary>例子</summary><p>设置起始目录为 <code>D:\\</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wt <span class="token parameter variable">-d</span> d:<span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details></li></ul><h2 id="命令面板" tabindex="-1"><a class="header-anchor" href="#命令面板" aria-hidden="true">#</a> 命令面板</h2><p>通过命令面板，可以查看可以在 Windows Terminal 中运行的操作。</p><p>您可以通过键入 <code>Ctrl + Shift + P</code> 来调用命令面板。您可以将 <code>commandPalette</code> 命令添加到设置文件中的 <code>actions</code> 中进行自定义。</p><h3 id="向命令添加图标" tabindex="-1"><a class="header-anchor" href="#向命令添加图标" aria-hidden="true">#</a> 向命令添加图标</h3>`,16),v=n("code",null,"icon",-1),f={href:"https://docs.microsoft.com/en-us/windows/uwp/design/style/segoe-ui-symbol-font",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Images\\\\my-icon.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;New tab&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newTab&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+shift+t&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\uE756&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;New tab&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newTab&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+shift+t&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;⚡&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;New tab&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newTab&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+shift+t&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套命令" tabindex="-1"><a class="header-anchor" href="#嵌套命令" aria-hidden="true">#</a> 嵌套命令</h3><p>嵌套命令使您可以将多个命令分组在命令面板中的一项下。下面的示例将字体大小调整命令归为一个名为“更改字体大小...”的命令选项板项。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Change font size...&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;commands&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;adjustFontSize&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;delta&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;adjustFontSize&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;delta&quot;</span><span class="token operator">:</span> <span class="token number">-1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;resetFontSize&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可迭代的命令" tabindex="-1"><a class="header-anchor" href="#可迭代的命令" aria-hidden="true">#</a> 可迭代的命令</h3><p>可迭代的命令使您可以同时创建多个命令，这些命令是从设置中定义的其他对象生成的。当前，您可以为配置文件和配色方案创建可迭代的命令。在运行时，对于给定类型的每个对象，这些命令将扩展为一个命令。</p><p>当前，您可以遍历以下属性:</p><table><thead><tr><th>iterateOn</th><th>属性</th><th>属性语法</th></tr></thead><tbody><tr><td><code>profiles</code></td><td><code>name</code></td><td><code>&quot;name&quot;: &quot;\${profile.name}&quot;</code></td></tr><tr><td><code>profiles</code></td><td><code>icon</code></td><td><code>&quot;icon&quot;: &quot;\${profile.icon}&quot;</code></td></tr><tr><td><code>schemes</code></td><td><code>name</code></td><td><code>&quot;name&quot;: &quot;\${scheme.name}&quot;</code></td></tr></tbody></table><h3 id="隐藏命令" tabindex="-1"><a class="header-anchor" href="#隐藏命令" aria-hidden="true">#</a> 隐藏命令</h3><p>如果要将命令保留在键绑定列表中，但又不想让它出现在命令选项板中，则可以通过将 <code>name</code> 设置为 <code>null</code> 来隐藏它。</p><details class="custom-container details"><summary>例子</summary><p>在命令面板中隐藏“新建选项卡”操作:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newTab&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+shift+t&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h2><p>您可以使用 <code>Ctrl + F</code> 快捷键在终端中进行搜索。</p><h2 id="窗格" tabindex="-1"><a class="header-anchor" href="#窗格" aria-hidden="true">#</a> 窗格</h2><p>通过窗格，您可以在同一个选项卡中并行运行多个命令行应用程序。这可以最大程度地减少在选项卡之间切换的需求，以便您一次查看多个提示符。</p><h3 id="创建新窗格" tabindex="-1"><a class="header-anchor" href="#创建新窗格" aria-hidden="true">#</a> 创建新窗格</h3><ul><li><code>Alt + Shift+ +</code> 创建默认配置文件的新垂直窗格，</li><li><code>Alt + Shift+ -</code> 创建默认配置文件的新水平窗格，</li></ul><p>如果希望通过下拉菜单打开新窗格，可以按住 <code>Alt</code> 并单击所需的配置文件。 这会将活动窗口或窗格拆分为所选配置文件的新窗格。</p><blockquote><p>此拆分模式按具有最长边缘(可用于创建窗格)的方向进行拆分。</p></blockquote><h3 id="在窗格间进行切换" tabindex="-1"><a class="header-anchor" href="#在窗格间进行切换" aria-hidden="true">#</a> 在窗格间进行切换</h3><p>按住 alt 键，则可以使用箭头键在窗格之间移动焦点。</p><h3 id="调整窗格大小" tabindex="-1"><a class="header-anchor" href="#调整窗格大小" aria-hidden="true">#</a> 调整窗格大小</h3><p>可以按住 <code>Alt + Shift</code> 并使用箭头键调整焦点窗格的大小，从而调整窗格的大小。</p><h3 id="关闭窗格" tabindex="-1"><a class="header-anchor" href="#关闭窗格" aria-hidden="true">#</a> 关闭窗格</h3><p>可以键入 <code>Ctrl + Shift + W</code> 来关闭焦点窗格。</p><p>如果只有一个窗格，<code>Ctrl + Shift + W</code> 将关闭该选项卡。</p><p>与往常一样，关闭最后一个选项卡将关闭该窗口。</p>`,27);function y(_,x){const e=o("ExternalLinkIcon"),c=o("RouterLink");return i(),r("div",null,[h,n("p",null,[a("您可以通过 "),n("a",m,[a("Microsoft Store"),s(e)]),a(" 进行安装，同样您可以访问 "),n("a",k,[a("GitHub release"),s(e)]),a(" 下载任意版本可执行文件。")]),b,n("p",null,[a("详情请见 "),s(c,{to:"/en/software/tool/terminal/settings.html"},{default:l(()=>[a("自定义设置")]),_:1}),a("。")]),q,n("p",null,[a("您可以通过在配置中添加 "),v,a(" 为您的命令添加图标。图标可以是图像的路径，"),n("a",f,[a("Segoe MDL2 Assets"),s(e)]),a(" 中的符号或任何字符，包括表情符号。")]),g])}const j=d(u,[["render",y],["__file","get-started.html.vue"]]);export{j as default};
