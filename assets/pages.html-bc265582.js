import{_ as t,W as a,X as s,$ as d,Y as e,Z as i,a2 as h}from"./framework-d8ef9316.js";const o={},r=e("p",null,"GitHub Pages 是静态站点托管服务，可直接从 GitHub 上的存储库中获取 HTML，CSS 和 JavaScript 文件，还可以选择在构建过程中运行这些文件并发布网站。",-1),n=e("p",null,[i("您可以将站点托管在 GitHub 的 "),e("code",null,"github.io"),i(" 域名或您自己的自定义域名上。")],-1),c=h('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>GitHub Pages 站点共有三种类型: 项目，用户和组织。</p><p>项目站点连接到 GitHub 上托管的特定项目，而用户和组织站点已连接到特定的 GitHub 帐户。</p><ul><li>要发布用户站点，您必须创建一个名为的用户帐户拥有的存储库 <code>&lt;username&gt;.github.io</code>。</li><li>要发布组织站点，您必须创建一个名为的组织所拥有的存储库 <code>&lt;organization&gt;.github.io</code>。</li></ul><p>除非您使用自定义域名，否则用户站点和组织站点均位于 <code>http(s)://&lt;username&gt;.github.io</code> 或 <code>http(s)://&lt;organization&gt;.github.io</code>。</p><p>项目站点的源文件与其项目存储在同一存储库中。除非您使用自定义域，否则项目站点可在 <code>http(s)://&lt;username&gt;.github.io/&lt;repository&gt;</code> 或 <code>http(s)://&lt;organization&gt;.github.io/&lt;repository&gt;</code> 访问。</p><p>虽然您只能在 GitHub 上为每个帐户创建一个用户或组织站点。但无论是组织还是用户帐户拥有的项目站点都是无限的。</p><h2 id="发布源文件到-github-pages" tabindex="-1"><a class="header-anchor" href="#发布源文件到-github-pages" aria-hidden="true">#</a> 发布源文件到 GitHub Pages</h2><div class="hint-container danger"><p class="hint-container-title">警告</p><p>GitHub Pages 站点 默认在互联网上公开，即使站点的仓库是私有的。</p></div><p>如果您的存储库中存在默认发布源，则 GitHub Pages 将自动从该源发布网站。用户和组织站点的默认发布源是存储库的默认分支的根目录。项目站点的默认发布源是 gh-pages 分支的根目录。</p><p>您需要跳转到 Settings (设置) 选项卡，下来找到 GitHub Pages 的配置部分。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>您只能在根目录 (<code>/</code>) 和 文档目录 (<code>/docs</code>) 之间进行选择，而不能将仓库内的任意文件夹作为发布源。</p></div><h3 id="静态站点" tabindex="-1"><a class="header-anchor" href="#静态站点" aria-hidden="true">#</a> 静态站点</h3><p>GitHub Pages 发布您推送到存储库的所有静态文件，这意味它不支持服务器端语言，例如 PHP，Ruby 或 Python。也就是您只能通过 GitHub Pages 发布 “无后端” 的纯静态站点。</p><h3 id="限制" tabindex="-1"><a class="header-anchor" href="#限制" aria-hidden="true">#</a> 限制</h3><ul><li><p>GitHub Pages 网站不得超过 1 GB。</p></li><li><p>GitHub Pages 站点的带宽限制为每月 100GB。</p></li><li><p>GitHub Pages 站点限制为每小时最多构建 10 次。</p></li></ul><h3 id="子模块" tabindex="-1"><a class="header-anchor" href="#子模块" aria-hidden="true">#</a> 子模块</h3><p>如果 GitHub Pages 站点的仓库包含子模块，则在构建站点时会自动拉取其内容。</p><p>只能使用指向公共仓库的子模块，因为 GitHub Pages 服务器无法访问私有仓库。</p><p>对子模块 (包括嵌套子模块) 使用 <code>https://</code> 只读 URL。 您可以在 .gitmodules 文件中进行此更改。</p><h2 id="取消发布" tabindex="-1"><a class="header-anchor" href="#取消发布" aria-hidden="true">#</a> 取消发布</h2><h3 id="取消发布项目站点" tabindex="-1"><a class="header-anchor" href="#取消发布项目站点" aria-hidden="true">#</a> 取消发布项目站点</h3><ol><li>在 GitHub 上，导航到仓库的主页面。</li><li>如果仓库中存在 gh-pages 分支，请删除 gh-pages 分支。</li><li>在仓库名称下，单击 Settings (设置) 。</li><li>在“ GitHub Pages”下，使用 Source (源) 下拉菜单并选择 None (无) 。</li></ol><h3 id="取消发布用户或组织站点" tabindex="-1"><a class="header-anchor" href="#取消发布用户或组织站点" aria-hidden="true">#</a> 取消发布用户或组织站点</h3><ol><li>在 GitHub 上，导航到仓库的主页面。</li><li>删除用作发布源的分支，或删除整个仓库。</li></ol><h2 id="自定义域名" tabindex="-1"><a class="header-anchor" href="#自定义域名" aria-hidden="true">#</a> 自定义域名</h2><p>您可以在对应仓库的 Settings (设置) 选项卡设置自定义域名，同时您需要将自定义域名的 CNAME 记录指向 <code>&lt;用户名&gt;.github.io</code>。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>自定义域名的控制是由发布源文件夹下的 CNAME 文件控制的，您可以直接创建这个文件写入链接。</p><p>同时，GitHub Pages 要求这个文件一直存在，否则自定义域名会失效。</p></div>',28);function l(p,u){return a(),s("div",null,[r,n,d(" more "),c])}const b=t(o,[["render",l],["__file","pages.html.vue"]]);export{b as default};
