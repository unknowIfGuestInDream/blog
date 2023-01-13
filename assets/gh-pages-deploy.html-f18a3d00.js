import{_ as n,W as s,X as t,$ as i,Y as e,Z as c,a0 as r,a2 as d,G as o}from"./framework-0e132572.js";const l={},p=e("p",null,"github-pages-deploy-action 用于自动将网站内容部署到 GitHub Pages。",-1),h=e("p",null,"您可以使用这个 Action 将代码推送到您想要的任何分支中，包括 gh-pages 和 docs, 甚至可以处理跨存储库部署。",-1),u=d(`<h2 id="重要配置" tabindex="-1"><a class="header-anchor" href="#重要配置" aria-hidden="true">#</a> 重要配置</h2><h3 id="branch" tabindex="-1"><a class="header-anchor" href="#branch" aria-hidden="true">#</a> branch</h3><p>此项必填，填入您希望部署到的分支，例如 gh-pages 或 docs</p><h3 id="folder" tabindex="-1"><a class="header-anchor" href="#folder" aria-hidden="true">#</a> folder</h3><p>此项必填，填入存储库中要部署的文件夹。此项自动识别为相对路径。</p><ul><li><p>如您的构建输出到 dist 目录，可以直接设置 <code>dist</code></p></li><li><p>如果您希望部署根目录，请设置 <code>.</code></p></li><li><p>如果您希望使用绝对路径访问 workflow 所在的 server，请在路径前添加 <code>~</code></p></li></ul><h2 id="可选配置" tabindex="-1"><a class="header-anchor" href="#可选配置" aria-hidden="true">#</a> 可选配置</h2><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h3><p>此选项默认为可访问存储库的 Token。</p><p>如果您需要更多权限 (例如，部署到另一个存储库) ，可以通过此选项设置个人访问令牌 (PAT) 。</p><p>本选项的值应该存储在 secrets 中。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>建议在生成新的 PAT 时选择所需的最少权限范围</p></div><h3 id="ssh-key" tabindex="-1"><a class="header-anchor" href="#ssh-key" aria-hidden="true">#</a> ssh-key</h3><p>此选项可以填入部署用的 SSH 专用密钥，(本选项的值应该存储在 secrets 中)，也可以将其设置为 <code>true</code> 使用现有的 SSH 客户端配置，使用 SSH 部署。</p><h3 id="repository-name" tabindex="-1"><a class="header-anchor" href="#repository-name" aria-hidden="true">#</a> repository-name</h3><p>允许您指定其他存储库路径，只要您有权将其推送。格式应为: <code>用户名/存储库名称</code>。您需要设置 token 为 PAT，此配置选项才能正常运行。</p><h3 id="target-folder" tabindex="-1"><a class="header-anchor" href="#target-folder" aria-hidden="true">#</a> target-folder</h3><p>如果要将部署文件夹的内容推送到部署分支上的特定目录中，可以在此处指定。</p><h3 id="commit-message" tabindex="-1"><a class="header-anchor" href="#commit-message" aria-hidden="true">#</a> commit-message</h3><p>定制提交信息</p><h3 id="clean" tabindex="-1"><a class="header-anchor" href="#clean" aria-hidden="true">#</a> clean</h3><p>如果您的项目在构建时生成哈希文件，则可以使用此选项在每次部署时从部署分支的目标文件夹中自动将其删除。</p><p>此选项默认情况下处于启用状态，可以通过将其设置为来关闭 <code>false</code>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>也就是每次部署默认是全新的，不会保留任何上一次部署的文件。您需要保证部署时您已经拥有了所有需要的文件。</p></div><h3 id="clean-exclude" tabindex="-1"><a class="header-anchor" href="#clean-exclude" aria-hidden="true">#</a> clean-exclude</h3><p>如果您需要使用 <code>clean</code> 但想保留某些文件或文件夹，则可以使用此选项。这应该在多行字符串中将每个模式包含为一行。</p><h3 id="single-commit" tabindex="-1"><a class="header-anchor" href="#single-commit" aria-hidden="true">#</a> single-commit</h3><p>如果您希望在部署分支只有一次最新的提交，而不是维护完整的历史记录，则可以将此选项切换为 <code>true</code>。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用此选项还将导致从部署分支中移除所有现有历史记录。</p></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p>当构建完整网站后，请添加下列步骤:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy 🚀
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token comment"># 需要部署到的分支</span>
    <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
    <span class="token comment"># 需要部署的文件夹</span>
    <span class="token key atrule">folder</span><span class="token punctuation">:</span> dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h2>`,33),m={href:"https://github.com/JamesIves/github-pages-deploy-action",target:"_blank",rel:"noopener noreferrer"};function g(k,b){const a=o("ExternalLinkIcon");return s(),t("div",null,[p,h,i(" more "),u,e("p",null,[e("a",m,[c("https://github.com/JamesIves/github-pages-deploy-action"),r(a)])])])}const v=n(l,[["render",g],["__file","gh-pages-deploy.html.vue"]]);export{v as default};
