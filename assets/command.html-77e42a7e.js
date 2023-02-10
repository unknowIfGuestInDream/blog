const e=JSON.parse('{"key":"v-0000060b","path":"/en/software/vscode/guide/command.html","title":"命令行","lang":"en-US","frontmatter":{"title":"命令行","icon":"shell","category":["VS Code"],"tag":["VS Code","软件"],"description":"VS Code 具有强大的命令行界面(CLI)，可让您自定义启动编辑器以支持各种情况的方式。 确保 VS Code 可执行文件已经添加到您的环境变量。只需键入 code 即可启动 VS Code。 # 使用 code 打开当前文件夹 code . # 在最近使用面板 code -r . # 打开新窗口 code -n # 改编当前语言 code --locale=es # 打开文件比较器 code --diff &lt;file1&gt; &lt;file2&gt; # 打开文件并跳转到指定的行(和列) code --goto package.json:10:5 # 查看帮助选项 code --help # 禁用所有扩展 code --disable-extensions .","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/software/vscode/guide/command.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/software/vscode/guide/command.html"}],["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/software/vscode/guide/command.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"命令行"}],["meta",{"property":"og:description","content":"VS Code 具有强大的命令行界面(CLI)，可让您自定义启动编辑器以支持各种情况的方式。 确保 VS Code 可执行文件已经添加到您的环境变量。只需键入 code 即可启动 VS Code。 # 使用 code 打开当前文件夹 code . # 在最近使用面板 code -r . # 打开新窗口 code -n # 改编当前语言 code --locale=es # 打开文件比较器 code --diff &lt;file1&gt; &lt;file2&gt; # 打开文件并跳转到指定的行(和列) code --goto package.json:10:5 # 查看帮助选项 code --help # 禁用所有扩展 code --disable-extensions ."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"article:tag","content":"VS Code"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令行\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-10-08T11:40:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":".vscode 文件夹","slug":"vscode-文件夹","link":"#vscode-文件夹","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":0.7,"words":210},"filePathRelative":"en/software/vscode/guide/command.md","localizedDate":"October 8, 2022","excerpt":"<p>VS Code 具有强大的命令行界面(CLI)，可让您自定义启动编辑器以支持各种情况的方式。</p>\\n<p>确保 VS Code 可执行文件已经添加到您的环境变量。只需键入 <code>code</code> 即可启动 VS Code。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 使用 code 打开当前文件夹</span>\\ncode <span class=\\"token builtin class-name\\">.</span>\\n\\n<span class=\\"token comment\\"># 在最近使用面板</span>\\ncode <span class=\\"token parameter variable\\">-r</span> <span class=\\"token builtin class-name\\">.</span>\\n\\n<span class=\\"token comment\\"># 打开新窗口</span>\\ncode <span class=\\"token parameter variable\\">-n</span>\\n\\n<span class=\\"token comment\\"># 改编当前语言</span>\\ncode <span class=\\"token parameter variable\\">--locale</span><span class=\\"token operator\\">=</span>es\\n\\n<span class=\\"token comment\\"># 打开文件比较器</span>\\ncode <span class=\\"token parameter variable\\">--diff</span> <span class=\\"token operator\\">&lt;</span>file<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">1</span>&gt;</span> <span class=\\"token operator\\">&lt;</span>file<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">2</span>&gt;</span>\\n\\n<span class=\\"token comment\\"># 打开文件并跳转到指定的行(和列)</span>\\ncode <span class=\\"token parameter variable\\">--goto</span> package.json:10:5\\n\\n<span class=\\"token comment\\"># 查看帮助选项</span>\\ncode <span class=\\"token parameter variable\\">--help</span>\\n\\n<span class=\\"token comment\\"># 禁用所有扩展</span>\\ncode --disable-extensions <span class=\\"token builtin class-name\\">.</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
