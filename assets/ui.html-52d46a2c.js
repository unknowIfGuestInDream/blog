import{_ as n,a,b as r,c as s,d as i,e as c,f as l,g as p,h,i as g,j as u}from"./drag-editor-1ed9ff7d.js";import{_ as m,X as C,Y as b,Z as o,$ as e,a1 as f,a3 as t,H as S}from"./framework-56fac175.js";const _={},x=t('<p>本质上，Visual Studio Code 是代码编辑器。像许多其他代码编辑器一样，VS Code 在左边采用通用的用户界面和资源管理器布局，以显示您有权访问的所有文件和文件夹，而在右边的编辑器则显示您已打开文件的内容。</p><h2 id="基本布局" tabindex="-1"><a class="header-anchor" href="#基本布局" aria-hidden="true">#</a> 基本布局</h2><p>VS Code 具有简单直观的布局，可最大程度地为编辑器提供空间，同时为浏览和访问文件夹或项目的整个上下文留出足够的空间。用户界面分为五个区域:</p><ul><li><strong>编辑器</strong>: 用于编辑文件的主要区域。您可以在垂直和水平方向上并排打开任意多个编辑器。</li><li><strong>侧边栏</strong>: 包含诸如资源管理器之类的不同视图，可在您处理项目时为您提供帮助。</li><li><strong>状态栏</strong>: 有关打开的项目和您编辑的文件的信息。</li><li><strong>任务栏</strong>: 位于最左侧，可让您在视图之间进行切换，并为您提供特定于上下文的其他指示符，例如启用 Git 时传出更改的数量。</li><li><strong>面板</strong>: 您可以在编辑器区域下方显示不同的面板，以获取输出或调试信息，错误和警告或集成终端。面板也可以向右移动以获得更多垂直空间。</li></ul><p>每次启动 VS Code 时，它的打开状态与上次关闭时的状态相同。文件夹，布局和打开的文件将保留。</p><p>在每个编辑器中打开的文件都显示在编辑器区域顶部，带有选项卡式标题(Tab)。要了解有关选项卡式标题的更多信息，请参见下面的 <a href="#%E9%80%89%E9%A1%B9%E5%8D%A1">选项卡</a> 部分。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>您可以将侧栏移至右侧(<strong>查看 &gt; 外观 &gt; 向右移动侧边栏</strong>)或切换其可见性(<code>Ctrl + B</code>)。</p></div><h2 id="并排编辑" tabindex="-1"><a class="header-anchor" href="#并排编辑" aria-hidden="true">#</a> 并排编辑</h2><p>您可以在垂直和水平方向上并排打开任意多个编辑器。如果您已经打开了一个编辑器，则可以通过多种方式在现有编辑器的一侧打开另一个编辑器:</p><ul><li><code>Alt</code>: 在资源管理器中单击一个文件。</li><li><code>Ctrl + \\</code>: 将活动编辑器一分为二。</li><li>从文件的资源管理器上下文菜单中选择 <strong>在侧边打开</strong>(<code>Ctrl + Enter</code>)。</li><li>单击编辑器右上方的 <strong>向右拆分编辑器</strong> 按钮。</li><li>将文件拖放到编辑器区域的任何一侧。</li><li>在 <strong>快速打开</strong> (<code>Ctrl + P</code>)文件列表中，按 <code>Ctrl + Enter</code>(macOS: <code>Cmd + Enter</code>)。</li></ul><p>每当您打开另一个文件时，处于活动状态的编辑器都会显示该文件的内容。因此，如果您有两个并排的编辑器，并且想要将文件打开到右侧编辑器中，请在打开文件之前，确保该编辑器处于活动状态(通过在其中单击)。</p><p>默认情况下，编辑器将打开到活动窗口的右侧。您可以通过设置更改此行为，<code>workbench.editor.openSideBySideDirection</code> 并配置为在活动编辑器的底部打开新编辑器。</p><p>当您有一个以上的编辑器打开您可以按住 Ctrl 键的同时按 1、2、3 在它们之间迅速切换。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>您可以调整编辑器的大小并重新排序。拖放编辑器标题区域以重新定位编辑器或调整其大小。</p></div><h2 id="小地图" tabindex="-1"><a class="header-anchor" href="#小地图" aria-hidden="true">#</a> 小地图</h2><p>Minimap(代码大纲)为您提供了源代码的高级概述，这对于快速导航和理解代码很有用。文件的小地图显示在编辑器的右侧。您可以单击或拖动阴影区域以快速跳转到文件的不同部分。</p><p><img src="'+n+'" alt="小地图" loading="lazy"></p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>您可以通过分别设置 <code>&quot;editor.minimap.side&quot;: &quot;left&quot;</code> 或 <code>&quot;editor.minimap.enabled&quot;: false</code> 在用户或工作空间设置中将小地图移到左侧或完全禁用它。</p></div><h3 id="缩进指南" tabindex="-1"><a class="header-anchor" href="#缩进指南" aria-hidden="true">#</a> 缩进指南</h3><p><img src="'+a+'" alt="缩进提示" loading="lazy"></p><p>上图还显示了压痕指南(垂直线)，可帮助您快速查看匹配的压痕级别。如果您要禁用缩进指南，则可以 <code>&quot;editor.renderIndentGuides&quot;: false</code> 在用户或工作空间设置中进行设置。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>请安装 <strong>Bracket Pair Colorizer 2</strong> 扩展来启用彩虹缩进</p></div><h2 id="导航痕迹" tabindex="-1"><a class="header-anchor" href="#导航痕迹" aria-hidden="true">#</a> 导航痕迹</h2><p>编辑器在其内容上方有一个导航栏，称为 <strong>导航痕迹</strong>。它显示当前位置，并允许您在文件夹，文件和符号之间快速导航。</p><p><img src="'+r+'" alt="导航痕迹" loading="lazy"></p>',25),v=o("strong",null,"查看 > 显示导航痕迹",-1),w={href:"https://code.visualstudio.com/docs/editor/editingevolved#_breadcrumbs",target:"_blank",rel:"noopener noreferrer"},V=t('<h2 id="资源管理器" tabindex="-1"><a class="header-anchor" href="#资源管理器" aria-hidden="true">#</a> 资源管理器</h2><p>资源管理器用于浏览，打开和管理项目中的所有文件和文件夹。VS Code 基于文件和文件夹-您可以直接在 VS Code 中打开文件或文件夹并开始使用。</p><p>在 VS Code 中打开文件夹后，该文件夹的内容将显示在资源管理器中。您可以从这里做很多事情:</p><ul><li>创建，删除和重命名文件和文件夹。</li><li>通过拖放移动文件和文件夹。</li><li>使用上下文菜单浏览所有选项。</li></ul><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>您可以从 VS Code 外部将文件拖放到资源管理器中以进行复制(如果资源管理器为空，则 VS Code 将打开它们)</p></div><p>VS Code 与您可能会使用的其他工具(特别是命令行工具)配合得很好。如果要在当前已在 VS Code 中打开的文件夹的上下文中运行命令行工具，请右键单击该文件夹，然后选择在命令提示符下打开(或在 macOS 或 Linux 上在终端中打开)。</p><p>您还可以通过右键单击本机资源管理器中的文件或文件夹，然后选择 <strong>在文件资源管理器中显示</strong> 来导航到文件或文件夹的位置。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>键入 <code>Ctrl + P</code>(快速打开)可按文件名快速搜索和打开文件。</p></div><p>默认情况下，VS Code 从资源管理器中排除某些文件夹(例如 .git)。使用 <code>files.exclude</code> 设置可配置用于从资源管理器隐藏文件和文件夹的规则。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>这对于隐藏派生的资源文件非常有用，例如 Unity 中的 <code>*.meta</code> 、TypeScript 项目中的 <code>*.js</code>。为了使 Unity 排除 <code>*.cs.meta</code> 文件，要选择的模式是: <code>&quot;**/*.cs.meta&quot;: true</code>。对于 TypeScript，可以使用以下命令排除为 TypeScript 文件生成的 JavaScript: <code>&quot;**/*.js&quot;: {&quot;when&quot;: &quot;$(basename).ts&quot;}</code>。</p></div><h3 id="多选" tabindex="-1"><a class="header-anchor" href="#多选" aria-hidden="true">#</a> 多选</h3><p>您可以在 <strong>文件资源管理器</strong> 和 <strong>打开的编辑器</strong> 视图中选择多个文件，以对多个项目运行动作( <strong>删除</strong>，<strong>拖放</strong>，<strong>在侧边打开</strong>)。使用 Ctrl / Cmd 键和单击选择单个文件，使用 <code>Shift + click</code> 选择范围。如果选择两个项目，则现在可以使用上下文菜单 <strong>将已选项进行比较</strong> 来快速比较两个文件。</p><h3 id="过滤文档树" tabindex="-1"><a class="header-anchor" href="#过滤文档树" aria-hidden="true">#</a> 过滤文档树</h3><p>您可以在文件资源管理器中键入以过滤当前可见的文件。以 <strong>文件资源管理器</strong> 为重点，开始键入要匹配的文件名的一部分。您将在文件资源管理器的右上方看到一个过滤器框，其中显示了您到目前为止所键入的内容，并且匹配的文件名将突出显示。当您按下光标键上下移动文件列表时，它将在匹配的文件或文件夹之间跳转。</p><p>将鼠标悬停在过滤器框上并选择 <strong>启用输入时筛选</strong> 将仅显示匹配的文件/文件夹。使用 <strong>X</strong> 清除按钮清除过滤器。</p><p><img src="'+s+'" alt="在文件资源管理器中过滤文件" loading="lazy"></p><h3 id="大纲视图" tabindex="-1"><a class="header-anchor" href="#大纲视图" aria-hidden="true">#</a> 大纲视图</h3><p>大纲视图是文件资源管理器底部的单独部分。展开后，它将显示当前活动的编辑器的符号树。</p><p><img src="'+i+'" alt="大纲视图" loading="lazy"></p><p>大纲视图具有不同的 <strong>排序依据</strong> 模式，可选的光标跟踪，并支持通常的打开手势。它还包括一个输入框，可在您键入时查找或过滤符号。错误和警告也显示在 <strong>大纲</strong> 视图中，使您可以快速查看问题的位置。</p><p>该视图依赖于已安装的扩展针对不同文件类型计算出的信息来显示符号。例如，内置的 Markdown 支持会返回 Markdown 标题层次结构。</p><p>有几种 <strong>大纲</strong> 视图设置，可用于启用/禁用图标以及控制错误和警告显示(默认情况下全部启用):</p><ul><li><code>outline.icons</code>: 切换带有图标的渲染轮廓元素。</li><li><code>outline.problems.enabled</code>: 在大纲元素上显示错误和警告。</li><li><code>outline.problems.badges</code>: 切换使用徽章的错误和警告。</li><li><code>outline.problems.colors</code>: 切换颜色使用错误和警告。</li></ul><h2 id="打开的编辑器" tabindex="-1"><a class="header-anchor" href="#打开的编辑器" aria-hidden="true">#</a> 打开的编辑器</h2><p>在资源管理器的顶部是一个标记为 <strong>打开的编辑器</strong> 的视图。这是活动文件或预览的列表。这些是您以前使用 VS Code 打开的文件。例如，如果您执行以下操作，文件将在 <strong>打开的编辑器</strong> 视图中列出:</p><ul><li>更改文件。</li><li>双击文件的标题。</li><li>在资源管理器中双击一个文件。</li><li>打开一个不属于当前文件夹的文件。</li></ul><p>只需在 <strong>打开的编辑器</strong> 中单击一个项目，该项目就会在 VS Code 中变为活动状态。</p><p>完成任务后，可以从 <strong>打开的编辑器</strong> 中单独删除文件，也可以使用 <strong>关闭所有编辑器</strong> 按钮来关闭所有文件。</p><h2 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h2><p>文件浏览器只是 VS Code 中可用的视图之一。也有以下视图:</p><ul><li>搜索: 提供全局搜索并在打开的文件夹中进行替换。</li><li>源代码控制: VS Code 默认包含 Git 源代码控制。</li><li>运行: VS Code 的运行和调试视图显示变量，调用堆栈和断点。</li><li>扩展: 在 VS Code 中安装和管理扩展。</li><li>自定义视图: 扩展贡献的视图。</li></ul><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>您可以使用 <strong>查看 &gt; 打开视图</strong> 命令打开任何视图。</p></div><p><img src="'+i+'" alt="打开视图" loading="lazy"></p><p>您可以在主视图中显示或隐藏视图，也可以通过拖放对其进行重新排序。</p><h3 id="任务栏" tabindex="-1"><a class="header-anchor" href="#任务栏" aria-hidden="true">#</a> 任务栏</h3><p>左侧的任务栏使您可以在视图之间快速切换。您还可以通过将视图拖放到任务栏上来重新排列视图，或完全删除视图(右键单击 &gt; 隐藏)。</p><p><img src="'+c+'" alt="任务栏" loading="lazy"></p><h2 id="命令面板" tabindex="-1"><a class="header-anchor" href="#命令面板" aria-hidden="true">#</a> 命令面板</h2><p>同样可以从键盘访问 VS Code。要知道的最重要的组合键是 <code>Ctrl + Shift + P</code>，它会弹出 Command Palette。从这里，您可以访问 VS Code 的所有功能，包括最常用操作的键盘快捷键。</p><p><img src="'+l+'" alt="命令面板" loading="lazy"></p><p>该命令面板提供了访问很多命令。您可以使用相同的交互式窗口执行编辑器命令，打开文件，搜索符号以及查看文件的快速轮廓。这里有一些提示:</p><ul><li><code>Ctrl + P</code> 将允许您通过键入文件或符号的名称来导航到任何文件或符号</li><li><code>Ctrl + Tab</code> 将使您循环浏览打开的最后一组文件</li><li><code>Ctrl + Shift + P</code> 将直接带您进入编辑器命令</li><li><code>Ctrl + Shift + O</code> 将让您导航到文件中的特定符号</li><li><code>Ctrl + G</code> 将允许您导航到文件中的特定行</li></ul><p>在输入字段中键入 <code>?</code> 以获取可以从此处执行的可用命令的列表:</p><p><img src="'+p+`" alt="快速打开帮助" loading="lazy"></p><h2 id="配置编辑器" tabindex="-1"><a class="header-anchor" href="#配置编辑器" aria-hidden="true">#</a> 配置编辑器</h2><p>VS Code 提供了许多用于配置编辑器的选项。在 <strong>查看</strong> 菜单中，您可以隐藏或切换用户界面的各个部分，例如侧栏，状态栏和任务栏。</p><h3 id="隐藏菜单栏-windows-和-linux" tabindex="-1"><a class="header-anchor" href="#隐藏菜单栏-windows-和-linux" aria-hidden="true">#</a> 隐藏菜单栏(Windows 和 Linux)</h3><p>您可以使用 <strong>查看 &gt; 外观</strong> 命令隐藏 Windows 和 Linux 上的菜单栏。您仍然可以通过按 Alt 键(<code>window.menuBarVisibility</code> 设置)来访问菜单栏。</p><h3 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h3><p>大多数编辑器配置保留在可以直接修改的设置中。您可以通过用户设置全局设置选项，也可以通过工作区设置针对每个项目/文件夹设置选项。设置值保存在 <code>settings.json</code> 文件中。</p><ul><li>选择 <strong>文件 &gt; 首选项 &gt; 设置</strong>(或按 <code>Ctrl + ,</code>) 来编辑用户 settings.json 文件。</li><li>要编辑工作区的设置，请选择 <strong>工作区设置</strong> 选项卡以编辑工作空间 settings.json 文件。</li></ul><p>您将在左侧窗口中看到 <strong>VS Code 默认设置</strong>，而 settings.json 在右侧则可编辑。您可以使用顶部的搜索框轻松过滤设置。<code>settings.json</code> 通过单击设置左侧的编辑图标，将设置复制到右侧的可编辑内容。具有固定值集的设置允许您选择一个值作为其编辑图标菜单的一部分。</p><p>编辑设置后，键入 <code>Ctrl + S</code> 保存更改。所做的更改将立即生效。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>工作区设置将覆盖用户设置，对于在团队中共享项目特定的设置很有用。</p></div><h3 id="禅模式" tabindex="-1"><a class="header-anchor" href="#禅模式" aria-hidden="true">#</a> 禅模式</h3><p>通过 Zen 模式，您可以隐藏除编辑器之外的所有 UI(没有任务栏，状态栏，侧边栏和面板)，然后全屏显示并集中编辑器布局，从而专注于代码。可以使用 <strong>查看</strong> 菜单，<strong>命令面板</strong> 或快捷键 <code>Ctrl + K Z</code> 来切换 Zen 模式。双击 <code>Esc</code> 退出 Zen 模式。可以通过 <code>zenMode.fullScreen</code> 禁用向全屏过渡。禅模式可以通过下面的设置来进一步调整: <code>zenMode.hideStatusBar</code>，<code>zenMode.hideTabs</code>，<code>zenMode.fullScreen</code>，<code>zenMode.restore</code> 和 <code>zenMode.centerLayout</code>。</p><h3 id="中心编辑布局" tabindex="-1"><a class="header-anchor" href="#中心编辑布局" aria-hidden="true">#</a> 中心编辑布局</h3><p>居中的编辑器布局使您可以居中对齐编辑器区域。在大型监视器上使用单个编辑器时，这特别有用。您可以使用侧面的窗框调整视图的大小(按住 Alt 键以独立移动窗框)。</p><h2 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡" aria-hidden="true">#</a> 选项卡</h2><p>Visual Studio Code 在编辑器上方的标题区域中显示带有选项卡(带选项卡的标题)的打开的项目。</p><p>当您打开文件时，将为该文件添加一个新的选项卡。</p><p>选项卡使您可以在项目之间快速导航，并且可以拖放选项卡来重新排序它们。</p><p>如果打开的项目超出标题区域的容纳范围，则可以使用 <strong>显示打开的编辑器</strong> 命令(可通过 <code>...</code> 更多按钮使用)来显示选项卡式项目的下拉列表。</p><h3 id="tab-顺序" tabindex="-1"><a class="header-anchor" href="#tab-顺序" aria-hidden="true">#</a> tab 顺序</h3><p>默认情况下，新标签页会添加到现有标签页的右侧，但是您可以在设置中使用 <code>workbench.editor.openPositioning</code> 控制新标签页的显示位置。</p><p>例如，您可能希望新的选项卡式项目显示在左侧:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token property">&quot;workbench.editor.openPositioning&quot;</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="预览模式" tabindex="-1"><a class="header-anchor" href="#预览模式" aria-hidden="true">#</a> 预览模式</h2><p>在资源管理器中单击或选择一个文件时，该文件以预览模式显示，并重复使用现有的选项卡。如果您正在快速浏览文件并且不希望每个访问的文件都有其自己的选项卡，则此功能很有用。当您开始编辑文件或使用双击从资源管理器中打开文件时，新的选项卡将专用于该文件。</p><p>预览模式在选项卡标题中以斜体表示:</p><p><img src="`+h+'" alt="预览模式" loading="lazy"></p><p>如果您不想使用预览模式而总是创建一个新的选项卡，则可以使用以下设置来控制行为:</p><ul><li><code>workbench.editor.enablePreview</code>: 全局启用或禁用预览编辑器</li><li><code>workbench.editor.enablePreviewFromQuickOpen</code>: 从快速打开中启用或禁用预览编辑器</li></ul><h2 id="编辑器组" tabindex="-1"><a class="header-anchor" href="#编辑器组" aria-hidden="true">#</a> 编辑器组</h2><p>拆分编辑器时(使用 <strong>拆分编辑器</strong> 或 <strong>在侧边打开</strong> 命令)，将创建一个新的编辑器区域，该区域可以容纳一组项目。您可以在垂直和水平方向上并排打开任意多个编辑器区域。</p><p>您可以在资源管理器视图顶部的 <strong>打开的编辑器</strong> 部分中清楚地看到这些内容:</p><p><img src="'+g+'" alt="标签编辑器组" loading="lazy"></p><p>您可以在工作台上拖放编辑器组，在组之间移动单个 Tab，然后快速关闭整个组( <strong>全部关闭</strong>)。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>无论您是否启用了选项卡，VS Code 都会使用编辑器组。如果没有选项卡，则编辑器组是您打开的项目的堆栈，在编辑器窗格中可见最近选择的项目。</p></div><h2 id="网格编辑器布局" tabindex="-1"><a class="header-anchor" href="#网格编辑器布局" aria-hidden="true">#</a> 网格编辑器布局</h2><p>默认情况下，编辑器组以垂直列布局(例如，当您拆分一个编辑器以将其打开到侧面时)。您可以轻松按自己喜欢的任何布局(垂直和水平)排列编辑器组:</p><p>为了支持灵活的布局，您可以创建空的编辑器组。默认情况下，关闭编辑器组的最后一个编辑器也会关闭该组本身，但是您可以使用新设置 <code>workbench.editor.closeEmptyGroups: false</code> 更改此行为。</p><p>在 <strong>查看 &gt; 编辑器布局</strong> 菜单中有一组预定义的编辑器布局。</p><p>默认情况下，打开到一侧的编辑器(例如，通过单击编辑器工具栏的 <strong>向右拆分编辑器</strong> 操作)将打开到活动编辑器的右侧。如果您希望在活动的编辑器下面打开编辑器，请配置新设置 <code>workbench.editor.openSideBySideDirection: down</code>。</p><p>有许多键盘命令可用于仅使用键盘来调整编辑器布局，但是如果您更喜欢使用鼠标，则拖放是将编辑器按任何方向划分的快速方法:</p><p><img src="'+u+'" alt="网格编辑器拖放" loading="lazy"></p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>如果在将鼠标悬停在工具栏上以拆分编辑器时按住 Alt 键，它将提供拆分为其他方向的功能。这是在右侧或底部拆分的快速方法。</p></div><h3 id="键盘快捷键" tabindex="-1"><a class="header-anchor" href="#键盘快捷键" aria-hidden="true">#</a> 键盘快捷键</h3><p>这是一些方便的键盘快捷键，可在编辑器和编辑器组之间快速导航。</p><ul><li><code>Ctrl + PageDown</code>: 转到右侧的编辑器。</li><li><code>Ctrl + PageUp</code>: 转到左侧的编辑器。</li><li><code>Ctrl + Tab</code>: 打开编辑器组 MRU 列表中的上一个编辑器。</li><li><code>Ctrl + 1</code>: 转到最左边的编辑器组。</li><li><code>Ctrl + 2</code>: 转到中心编辑器组。</li><li><code>Ctrl + 3</code>: 转到最右边的编辑器组。</li><li><code>Ctrl + F4</code>: 关闭活动的编辑器。</li><li><code>Ctrl + K W</code>: 关闭编辑器组中的所有编辑器。</li><li><code>Ctrl + K Ctrl + W</code>: 关闭所有编辑器。</li></ul><h2 id="窗口管理" tabindex="-1"><a class="header-anchor" href="#窗口管理" aria-hidden="true">#</a> 窗口管理</h2><p>VS Code 提供了一些选项来控制在会话之间应如何打开或还原窗口(实例)。</p><p><code>window.openFoldersInNewWindow</code> 和 <code>window.openFilesInNewWindow</code> 设置提供在打开新的窗口或者是在最后一个活动的窗口中打开文件或文件夹，可能得值有 <code>default</code>，<code>on</code> 和 <code>off</code>。</p><p>如果配置为 <code>default</code>，我们将根据发出打开请求的上下文来对是否重用窗口进行最佳猜测。将此设置为 <code>on</code> 或 <code>off</code> 始终表现相同。例如，如果您认为从 <strong>文件</strong> 菜单中选择文件或文件夹应始终打开到新窗口，请将其设置为 <code>on</code>。</p><p><code>window.restoreWindows</code> 设置告诉 VS Code 如何还原上一个会话的打开的窗口。默认情况下，VS Code 将还原您在上一个会话中使用过的所有窗口(设置为 <code>all</code> )。将此设置更改 <code>none</code> 为从不重新打开任何窗口，并始终以空的 VS Code 实例开头。更改为 <code>one</code> 则重新打开您上次打开的窗口的最后一个。</p>',95);function y(k,q){const d=S("ExternalLinkIcon");return C(),b("div",null,[x,o("p",null,[e("导航痕迹始终显示文件路径，如果当前文件类型支持符号的语言，则符号路径直至光标位置。您可以使用 "),v,e(" 切换命令禁用导航痕迹。有关导航痕迹功能的更多信息，例如如何自定义其外观，请参见 "),o("a",w,[e("导航痕迹"),f(d)]),e(" 部分。")]),V])}const j=m(_,[["render",y],["__file","ui.html.vue"]]);export{j as default};
