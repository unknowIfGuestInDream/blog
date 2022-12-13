const t=JSON.parse('{"key":"v-39a5f5ca","path":"/software/git/install.html","title":"安装与配置","lang":"zh-CN","frontmatter":{"title":"安装与配置","icon":"install","order":1,"category":["Git"],"tag":["Git","软件","安装"],"description":"Git 下载 官网在国外，网速较慢。在安装 Git 前推荐安装好 VS Code。 官网下载 Git 的安装 同意协议并选择安装位置 (不建议更改安装位置) 启用 LFS 支持，其他随意 (影响不大) 自行决定是否创建启动菜单 选择使用 VS Code 作为 git 的默认编辑器。 选择 Git 使用的默认分支名，GitHub 已经将默认分支名称改为 main。 相关信息 在 2020 年的黑人运动中，部分黑人认为 master 这个词是对它们的冒犯。 选择第二项，这将允许您在第三方工具中使用 Git，同时不会覆盖默认的 Windows 命令。 使用 OpenSSL Library 提示 如果自己公司有 CA，或者在开发中需要 Git 承认某些自签 CA，则需要选择第二项。 务必选择最后一项 “原样检出与提交” 选择 Git 终端 提示 如果您对 VS Code 和 PowerShell 还不熟悉，建议选择 MinTTY，以方便您接下来在学习中对 Git Bash 的临时使用。 选择 git pull 的默认行为，保持默认不要改动 选择凭据储存管理器，请选择第一个跨平台管理器 额外的选项确认，均勾选即可 一些实验性的功能，通常不太稳定或有 bug，不同 Git 版本会有差异，可根据自身情况确定","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/software/git/install.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"安装与配置"}],["meta",{"property":"og:description","content":"Git 下载 官网在国外，网速较慢。在安装 Git 前推荐安装好 VS Code。 官网下载 Git 的安装 同意协议并选择安装位置 (不建议更改安装位置) 启用 LFS 支持，其他随意 (影响不大) 自行决定是否创建启动菜单 选择使用 VS Code 作为 git 的默认编辑器。 选择 Git 使用的默认分支名，GitHub 已经将默认分支名称改为 main。 相关信息 在 2020 年的黑人运动中，部分黑人认为 master 这个词是对它们的冒犯。 选择第二项，这将允许您在第三方工具中使用 Git，同时不会覆盖默认的 Windows 命令。 使用 OpenSSL Library 提示 如果自己公司有 CA，或者在开发中需要 Git 承认某些自签 CA，则需要选择第二项。 务必选择最后一项 “原样检出与提交” 选择 Git 终端 提示 如果您对 VS Code 和 PowerShell 还不熟悉，建议选择 MinTTY，以方便您接下来在学习中对 Git Bash 的临时使用。 选择 git pull 的默认行为，保持默认不要改动 选择凭据储存管理器，请选择第一个跨平台管理器 额外的选项确认，均勾选即可 一些实验性的功能，通常不太稳定或有 bug，不同 Git 版本会有差异，可根据自身情况确定"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T10:03:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:tag","content":"安装"}],["meta",{"property":"article:modified_time","content":"2022-10-08T10:03:39.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/software/git/install.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/software/git/install.html"}]]},"headers":[{"level":2,"title":"Git 下载","slug":"git-下载","link":"#git-下载","children":[]},{"level":2,"title":"Git 的安装","slug":"git-的安装","link":"#git-的安装","children":[]},{"level":2,"title":"Git Bash","slug":"git-bash","link":"#git-bash","children":[]},{"level":2,"title":"Git 的初次配置","slug":"git-的初次配置","link":"#git-的初次配置","children":[]}],"git":{"createdTime":1665153728000,"updatedTime":1665223419000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":3.72,"words":1115},"localizedDate":"2022年10月7日","filePathRelative":"software/git/install.md","excerpt":"<h2> Git 下载</h2>\\n<p>官网在国外，网速较慢。在安装 Git 前推荐安装好 <a href=\\"/software/vscode/\\" target=\\"blank\\">VS Code</a>。</p>\\n<ul>\\n<li><a href=\\"https://git-scm.com/downloads/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网下载</a></li>\\n</ul>\\n<h2> Git 的安装</h2>\\n<ol>\\n<li>\\n<p>同意协议并选择安装位置 (不建议更改安装位置)</p>\\n<p><img src=\\"/assets/software/git/install1.png\\" alt=\\"安装协议\\" loading=\\"lazy\\"></p>\\n<p><img src=\\"/assets/software/git/install2.png\\" alt=\\"安装位置\\" loading=\\"lazy\\"></p>\\n</li>\\n<li>\\n<p>启用 LFS 支持，其他随意 (影响不大)</p>\\n<p><img src=\\"/assets/software/git/install3.png\\" alt=\\"组件选择\\" loading=\\"lazy\\"></p>\\n</li>\\n<li>\\n<p>自行决定是否创建启动菜单</p>\\n<p><img src=\\"/assets/software/git/install4.png\\" alt=\\"是否创建启动菜\\" loading=\\"lazy\\"></p>\\n</li>\\n<li>\\n<p>选择使用 VS Code 作为 git 的默认编辑器。</p>\\n<p><img src=\\"/assets/software/git/install5.png\\" alt=\\"设置默认编辑器\\" loading=\\"lazy\\"></p>\\n</li>\\n<li>\\n<p>选择 Git 使用的默认分支名，GitHub 已经将默认分支名称改为 main。</p>\\n<p><img src=\\"/assets/software/git/install6.png\\" alt=\\"设置默认分支名称\\" loading=\\"lazy\\"></p>\\n<div class=\\"custom-container info\\">\\n<p class=\\"custom-container-title\\">相关信息</p>\\n<p>在 2020 年的黑人运动中，部分黑人认为 master 这个词是对它们的冒犯。</p>\\n</div>\\n</li>\\n<li>\\n<p>选择第二项，这将允许您在第三方工具中使用 Git，同时不会覆盖默认的 Windows 命令。</p>\\n<p><img src=\\"/assets/software/git/install7.png\\" alt=\\"Git 命令行\\" loading=\\"lazy\\"></p>\\n</li>\\n<li>\\n<p>使用 OpenSSL Library</p>\\n<p><img src=\\"/assets/software/git/install8.png\\" alt=\\"Git SSL\\" loading=\\"lazy\\"></p>\\n<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">提示</p>\\n<p>如果自己公司有 CA，或者在开发中需要 Git 承认某些自签 CA，则需要选择第二项。</p>\\n</div>\\n</li>\\n<li>\\n<p>务必选择最后一项 “原样检出与提交”</p>\\n<p><img src=\\"/assets/software/git/install9.png\\" alt=\\"Git 行尾设置\\" loading=\\"lazy\\"></p>\\n</li>\\n<li>\\n<p>选择 Git 终端</p>\\n<p><img src=\\"/assets/software/git/install10.png\\" alt=\\"Git 终端\\" loading=\\"lazy\\"></p>\\n<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">提示</p>\\n<p>如果您对 VS Code 和 PowerShell 还不熟悉，建议选择 MinTTY，以方便您接下来在学习中对 Git Bash 的临时使用。</p>\\n</div>\\n</li>\\n<li>\\n<p>选择 <code>git pull</code> 的默认行为，保持默认不要改动</p>\\n<p><img src=\\"/assets/software/git/install11.png\\" alt=\\"Git Pull Action\\" loading=\\"lazy\\"></p>\\n</li>\\n<li>\\n<p>选择凭据储存管理器，请选择第一个跨平台管理器</p>\\n<p><img src=\\"/assets/software/git/install12.png\\" alt=\\"凭据储存管理器设置\\" loading=\\"lazy\\"></p>\\n</li>\\n<li>\\n<p>额外的选项确认，均勾选即可</p>\\n<p><img src=\\"/assets/software/git/install13.png\\" alt=\\"额外选项\\" loading=\\"lazy\\"></p>\\n</li>\\n<li>\\n<p>一些实验性的功能，通常不太稳定或有 bug，不同 Git 版本会有差异，可根据自身情况确定</p>\\n<p><img src=\\"/assets/software/git/install14.png\\" alt=\\"实验性功能\\" loading=\\"lazy\\"></p>\\n</li>\\n</ol>","autoDesc":true}');export{t as data};
