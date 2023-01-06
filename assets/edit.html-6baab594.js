import{_ as a,a as e,b as d,c as r,d as o,e as n,f as t}from"./markdown-side-preview-2409e6b5.js";import{_ as c,W as i,X as s,a2 as h}from"./framework-303b4bc8.js";const p={},l=h('<p>这是编辑代码的一些常用功能。如果您不喜欢键盘快捷键，请考虑为旧的编辑器安装键盘映射扩展名。</p><h2 id="多光标选择" tabindex="-1"><a class="header-anchor" href="#多光标选择" aria-hidden="true">#</a> 多光标选择</h2><p>要在任意位置添加光标，请用鼠标选择一个位置，然后使用 <code>Alt + Click</code>。</p><p>要将光标设置在当前位置之上或之下，请使用:</p><p>键盘快捷键: <code>Ctrl + Alt + ↑</code> 或 <code>Ctrl + Alt + ↓</code></p><p>您可以使用 <code>Ctrl + Shift + L</code> 将附加光标添加到当前选择的所有实例中。</p><p>如果不想添加所有当前选中项，则可以使用 <code>Ctrl + D</code> 代替。这只会选择您选择的选中项之后的下一个选中项，因此您可以一个一个地添加选择。</p><h2 id="列-盒-选择" tabindex="-1"><a class="header-anchor" href="#列-盒-选择" aria-hidden="true">#</a> 列(盒)选择</h2><p>您可以在拖动鼠标时按住 <code>Shift + Alt</code>(在 macOS 上为 <code>Shift + Option</code>)来选择文本块。一个单独的光标将被添加到每一行的末尾。</p><p><img src="'+a+`" alt="列文字选择" loading="lazy"></p><p>您也可以使用键盘快捷键来触发列选择。</p><h2 id="直标尺" tabindex="-1"><a class="header-anchor" href="#直标尺" aria-hidden="true">#</a> 直标尺</h2><p>您可以使用该 <code>editor.rulers</code> 设置将垂直列标尺添加到编辑器中。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;editor.rulers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速滚动" tabindex="-1"><a class="header-anchor" href="#快速滚动" aria-hidden="true">#</a> 快速滚动</h2><p>按 <code>Alt</code> 键可在编辑器和资源管理器中快速滚动。默认情况下，快速滚动使用 5 倍速倍增器，但是您可以使用 <code>editor.fastScrollSensitivity</code> 设置来控制倍增器。</p><h2 id="向上-向下复制行" tabindex="-1"><a class="header-anchor" href="#向上-向下复制行" aria-hidden="true">#</a> 向上 / 向下复制行</h2><p>键盘快捷键: <code>Shift + Alt + ↑</code> 或 <code>Shift + Alt + ↓</code></p><div class="hint-container info"><p class="hint-container-title">関連情報</p><p>由于按键冲突，在 Linux 上，向上 / 向下复制行没有默认的快捷键，您可以自行通过 <code>editor.action.copyLinesUpAction</code> 和 <code>editor.action.copyLinesDownAction</code> 设置自己的首选键盘快捷键。</p></div><h2 id="上下移动行号" tabindex="-1"><a class="header-anchor" href="#上下移动行号" aria-hidden="true">#</a> 上下移动行号</h2><p>键盘快捷键: <code>Alt + ↑</code> 或 <code>Alt + ↓</code></p><h2 id="缩小-扩大选择" tabindex="-1"><a class="header-anchor" href="#缩小-扩大选择" aria-hidden="true">#</a> 缩小/扩大选择</h2><p>键盘快捷键: <code>Shift + Alt + ←</code> 或 <code>Shift + Alt + →</code></p><h2 id="转到文件中的符号" tabindex="-1"><a class="header-anchor" href="#转到文件中的符号" aria-hidden="true">#</a> 转到文件中的符号</h2><p>键盘快捷键: <code>Ctrl + Shift + O</code></p><p><img src="`+e+'" alt="按符号查找" loading="lazy"></p><p>您可以通过添加冒号将符号按种类分组 <code>@:</code>。</p><h2 id="转到工作区中的符号" tabindex="-1"><a class="header-anchor" href="#转到工作区中的符号" aria-hidden="true">#</a> 转到工作区中的符号</h2><p>键盘快捷键: <code>Ctrl + T</code></p><p><img src="'+d+'" alt="转到工作区中的符号" loading="lazy"></p><h2 id="大纲视图" tabindex="-1"><a class="header-anchor" href="#大纲视图" aria-hidden="true">#</a> 大纲视图</h2><p><strong>文件资源管理器</strong> 中的 <strong>大纲</strong> 视图(默认折叠在底部)显示了当前打开文件的符号。</p><p><img src="'+r+'" alt="轮廓图" loading="lazy"></p><p>您可以按符号名称，类别和文件中的位置进行排序，并可以快速导航到符号位置。</p><h2 id="导航到特定行" tabindex="-1"><a class="header-anchor" href="#导航到特定行" aria-hidden="true">#</a> 导航到特定行</h2><p>键盘快捷键: <code>Ctrl + G</code></p><h2 id="恢复光标位置" tabindex="-1"><a class="header-anchor" href="#恢复光标位置" aria-hidden="true">#</a> 恢复光标位置</h2><p>键盘快捷键: <code>Ctrl + U</code></p><h2 id="修剪尾随空格" tabindex="-1"><a class="header-anchor" href="#修剪尾随空格" aria-hidden="true">#</a> 修剪尾随空格</h2><p>键盘快捷键: <code>Ctrl + K Ctrl + X</code></p><h2 id="转换文本命令" tabindex="-1"><a class="header-anchor" href="#转换文本命令" aria-hidden="true">#</a> 转换文本命令</h2><p>您可以使用 <strong>命令面板</strong> 中的 <strong>转换</strong> 命令将选定的文本更改为大写，小写和标题。</p><p><img src="'+o+'" alt="转换文字指令" loading="lazy"></p><h2 id="代码格式化" tabindex="-1"><a class="header-anchor" href="#代码格式化" aria-hidden="true">#</a> 代码格式化</h2><p>当前选择的源代码: <code>Ctrl + K Ctrl + F</code></p><p>整个文档: <code>Shift + Alt + F</code></p><h2 id="代码折叠" tabindex="-1"><a class="header-anchor" href="#代码折叠" aria-hidden="true">#</a> 代码折叠</h2><p>键盘快捷键: <code>Ctrl + Shift + [</code> 和 <code>Ctrl + Shift +]</code></p><p>您还可以使用全部折叠(<code>Ctrl + K Ctrl + 0</code>)和全部展开(<code>Ctrl + K Ctrl + J</code>)来折叠/展开编辑器中的所有区域。</p><p>您可以使用 <strong>折叠所有块注释</strong>(<code>Ctrl + K Ctrl + /</code>)折叠所有块注释。</p><h2 id="选择当前行" tabindex="-1"><a class="header-anchor" href="#选择当前行" aria-hidden="true">#</a> 选择当前行</h2><p>键盘快捷键: <code>Ctrl + L</code></p><h2 id="导航到文件的开头和结尾" tabindex="-1"><a class="header-anchor" href="#导航到文件的开头和结尾" aria-hidden="true">#</a> 导航到文件的开头和结尾</h2><p>键盘快捷键: <code>Ctrl + Home</code> 和 <code>Ctrl + End</code></p><h2 id="打开-markdown-预览" tabindex="-1"><a class="header-anchor" href="#打开-markdown-预览" aria-hidden="true">#</a> 打开 Markdown 预览</h2><p>在 Markdown 文件中，使用</p><p>键盘快捷键: <code>Ctrl + Shift + V</code></p><p><img src="'+n+'" alt="Markdown 预览" loading="lazy"></p><h2 id="并排-markdown-编辑和预览" tabindex="-1"><a class="header-anchor" href="#并排-markdown-编辑和预览" aria-hidden="true">#</a> 并排 Markdown 编辑和预览</h2><p>在 Markdown 文件中，使用</p><p>键盘快捷键: <code>Ctrl + K V</code></p><p>预览和编辑器将与您在任一视图中的滚动同步。</p><p><img src="'+t+'" alt="并排 Markdown 预览" loading="lazy"></p>',63),u=[l];function f(m,_){return i(),s("div",null,u)}const C=c(p,[["render",f],["__file","edit.html.vue"]]);export{C as default};
