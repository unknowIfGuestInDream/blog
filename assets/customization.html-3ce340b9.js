import{_ as i,W as l,X as r,Y as n,Z as s,a0 as a,a1 as d,a2 as e,E as o}from"./framework-ae009c3e.js";const c={},u=e('<p>您可以做很多事情来个性化 VS Code。</p><ul><li>改变您的主题</li><li>改变您的文件图标</li><li>更改键盘快捷键</li><li>调整设置</li><li>安装扩展</li></ul><h2 id="更改主题" tabindex="-1"><a class="header-anchor" href="#更改主题" aria-hidden="true">#</a> 更改主题</h2><p>键盘快捷键: <code>Ctrl + K Ctrl + T</code></p><p>您可以从 VS Code 扩展市场中安装更多主题。</p><p>此外，您可以安装和更改文件图标主题。</p><div class="custom-container tip"><p class="custom-container-title">ヒント</p><p>unknowIfGuestInDream 个人推荐 <code>One Dark Pro</code> 主题和 <code>Material Icon Theme</code> 文件图标主题。</p><p>您需要从扩展应用应用商店中安装它们。</p></div><h2 id="自定义键盘快捷键" tabindex="-1"><a class="header-anchor" href="#自定义键盘快捷键" aria-hidden="true">#</a> 自定义键盘快捷键</h2><p>键盘快捷键: <code>Ctrl + K Ctrl + S</code></p><p>您可以搜索快捷方式并将自己的键绑定添加到 <code>keybindings.json</code> 文件中。</p>',10),v=e(`<h2 id="调整您的设置" tabindex="-1"><a class="header-anchor" href="#调整您的设置" aria-hidden="true">#</a> 调整您的设置</h2><p>默认情况下，VS Code 显示 <strong>设置</strong> 编辑器，您还可以通过使用 <strong>打开设置(JSON)</strong> 命令打开 <code>settings.json</code>。</p><p>键盘快捷键: <code>Ctrl + ,</code></p><p><strong>示例</strong>:</p><ul><li><p>更改各种 UI 元素的字体大小</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// Main editor</span>
<span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token comment">// Terminal panel</span>
<span class="token property">&quot;terminal.integrated.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
<span class="token comment">// Output panel</span>
<span class="token property">&quot;[Log]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">15</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更改缩放等级</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>字体连字</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Fira Code&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">ヒント</p><p>这需要安装支持字体连字的字体。FiraCode 是 VS Code 团队中流行的字体。</p><p>unknowIfGuestInDream 也强力推荐安装并使用这一字体 (字体详见云文档共享文件)</p></div></li><li><p>自动保存</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;afterDelay&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您也可以使用 <code>文件 &gt; 自动保存</code> 从顶层菜单切换自动保存。</p></li><li><p>保存时格式化</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>粘贴格式</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>更改制表符的大小</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>空格或制表符</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;editor.insertSpaces&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>渲染空白</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;editor.renderWhitespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，在文本选择中呈现空白字符。</p></li><li><p>忽略文件/文件夹</p><p>从编辑器窗口中删除这些文件/文件夹。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;somefolder/&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;somefile&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从搜索结果中删除这些文件/文件夹。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;search.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;someFolder/&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;somefile&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>以及许多其他定制。</p><h2 id="语言特定的设置" tabindex="-1"><a class="header-anchor" href="#语言特定的设置" aria-hidden="true">#</a> 语言特定的设置</h2>`,7),m={href:"https://code.visualstudio.com/docs/languages/identifiers",target:"_blank",rel:"noopener noreferrer"},k=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;[languageid]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">ヒント</p><p>您还可以使用 <strong>配置语言特定的设置</strong> 命令来创建特定于语言的设置。</p></div>`,2);function b(g,h){const t=o("RouterLink"),p=o("ExternalLinkIcon");return l(),r("div",null,[u,n("p",null,[s("有关更多信息，请参见 "),a(t,{to:"/ja/software/vscode/shortcut-key.html#%E5%BF%AB%E6%8D%B7%E9%94%AE%E7%BC%96%E8%BE%91%E5%99%A8"},{default:d(()=>[s("快捷键键绑定")]),_:1}),s("。")]),v,n("p",null,[s("您可以通过语言标识符来确定只需要特定语言的设置的范围。您可以在 "),n("a",m,[s("语言标识符"),a(p)]),s(" 参考中找到常用语言 ID 的列表。")]),k])}const j=i(c,[["render",b],["__file","customization.html.vue"]]);export{j as default};
