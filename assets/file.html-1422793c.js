import{_ as e,W as a,X as d,a2 as r}from"./framework-4fdeb3a3.js";const n={},c=r(`<h2 id="切换侧边栏" tabindex="-1"><a class="header-anchor" href="#切换侧边栏" aria-hidden="true">#</a> 切换侧边栏</h2><p>键盘快捷键: <code>Ctrl + B</code></p><h2 id="切换面板" tabindex="-1"><a class="header-anchor" href="#切换面板" aria-hidden="true">#</a> 切换面板</h2><p>键盘快捷键: <code>Ctrl + J</code></p><h2 id="zen-模式" tabindex="-1"><a class="header-anchor" href="#zen-模式" aria-hidden="true">#</a> Zen 模式</h2><p>键盘快捷键: <code>Ctrl + K Z</code></p><p>进入无干扰禅宗模式。</p><p>按两次 <code>Esc</code> 键退出 Zen 模式。</p><h2 id="并排编辑" tabindex="-1"><a class="header-anchor" href="#并排编辑" aria-hidden="true">#</a> 并排编辑</h2><p>键盘快捷键: <code>Ctrl + \\</code></p><p>您还可以拖放编辑器以创建新的编辑器组，并在组之间移动编辑器。</p><h2 id="编辑之间切换" tabindex="-1"><a class="header-anchor" href="#编辑之间切换" aria-hidden="true">#</a> 编辑之间切换</h2><p>键盘快捷键: <code>Ctrl + 1</code>，<code>Ctrl + 2</code>，<code>Ctrl + 3</code></p><h2 id="移至资源管理器窗口" tabindex="-1"><a class="header-anchor" href="#移至资源管理器窗口" aria-hidden="true">#</a> 移至资源管理器窗口</h2><p>键盘快捷键: <code>Ctrl + Shift + E</code></p><h2 id="创建或打开一个文件" tabindex="-1"><a class="header-anchor" href="#创建或打开一个文件" aria-hidden="true">#</a> 创建或打开一个文件</h2><p>键盘快捷键: <code>Ctrl + click</code></p><p>您可以通过将光标移动到文件链接并使用 <code>Ctrl + click</code> 来快速打开文件或图像或创建新文件。</p><h2 id="关闭当前打开的文件夹" tabindex="-1"><a class="header-anchor" href="#关闭当前打开的文件夹" aria-hidden="true">#</a> 关闭当前打开的文件夹</h2><p>键盘快捷键: <code>Ctrl + F4</code></p><h2 id="导航历史" tabindex="-1"><a class="header-anchor" href="#导航历史" aria-hidden="true">#</a> 导航历史</h2><p>浏览整个历史记录: <code>Ctrl + Tab</code></p><p>向后导航: <code>Alt + ←</code></p><p>向前导航: <code>Alt + →</code></p><h2 id="文件关联" tabindex="-1"><a class="header-anchor" href="#文件关联" aria-hidden="true">#</a> 文件关联</h2><p>为未正确检测到的文件创建语言关联。例如，许多带有自定义文件扩展名的配置文件实际上是 JSON。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;.database&quot;</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防止脏写入" tabindex="-1"><a class="header-anchor" href="#防止脏写入" aria-hidden="true">#</a> 防止脏写入</h2><p>当您尝试保存已经再打开后再度在磁盘上发生更改的文件时，VS Code 将显示一条错误消息。VS Code 阻止保存文件，以防止覆盖在编辑器之外进行的更改。</p><p>为了解决保存冲突，请在错误消息中单击 <strong>比较</strong> 操作以打开差异编辑器，该差异编辑器将向您显示磁盘上文件的内容(左侧)，与 VS Code 中的内容(右侧)相比:</p><p>使用编辑器工具栏中的操作来解决保存冲突。您可以接受更改并覆盖磁盘上的所有更改，也可以还原为磁盘上的版本。还原意味着您的更改将丢失。</p><p>注意: 该文件将保持 <code>dirty</code> 状态，直到您选择两个解决冲突的操作之一后才能保存。</p>`,32),o=[c];function s(t,i){return a(),d("div",null,o)}const p=e(n,[["render",s],["__file","file.html.vue"]]);export{p as default};
