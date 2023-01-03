import{_ as e}from"./task-runner-d50f2696.js";import{_ as o,W as t,X as p,Y as s,Z as n,a0 as c,a2 as r,E as i}from"./framework-fec69ff1.js";const l={},d=s("h2",{id:"自动检测任务",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自动检测任务","aria-hidden":"true"},"#"),n(" 自动检测任务")],-1),u=s("strong",null,"终端",-1),k=s("strong",null,"配置任务",-1),m=s("code",null,"tasks.json",-1),v={href:"https://code.visualstudio.com/docs/editor/debugging",target:"_blank",rel:"noopener noreferrer"},h=r(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// See &lt;https://go.microsoft.com/fwlink/?LinkId=733558&gt;</span>
  <span class="token comment">// for the documentation about the tasks.json format</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token string">&quot;install&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;kind&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isDefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自动生成有时会出现问题。请查阅文档，以确保一切正常。</p><h2 id="从终端菜单运行任务" tabindex="-1"><a class="header-anchor" href="#从终端菜单运行任务" aria-hidden="true">#</a> 从终端菜单运行任务</h2><p>从顶层菜单中选择 <strong>终端 &gt; 运行任务</strong>，然后选择要运行的任务。通过运行命令 <strong>终止任务</strong> 终止正在运行的任务</p><p><img src="`+e+`" alt="任务执行器" loading="lazy"></p><h2 id="定义任务的键盘快捷键" tabindex="-1"><a class="header-anchor" href="#定义任务的键盘快捷键" aria-hidden="true">#</a> 定义任务的键盘快捷键</h2><p>您可以为任何任务定义键盘快捷键。从命令面板(<code>Ctrl + Shift + P</code>)中，选择 <strong>首选项: 打开键盘快捷方式文件</strong>，将所需的快捷方式绑定到 <code>workbench.action.tasks.runTask</code> 命令，然后将 任务 定义为 <code>args</code>。</p><p>例如，要将 <code>Ctrl + H</code> 绑定到 <strong>运行任务</strong>，请添加以下内容:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+h&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.tasks.runTask&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Run tests&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="从资源管理器中将-npm-脚本作为任务运行" tabindex="-1"><a class="header-anchor" href="#从资源管理器中将-npm-脚本作为任务运行" aria-hidden="true">#</a> 从资源管理器中将 npm 脚本作为任务运行</h2><p>使用该设置 <code>npm.enableScriptExplorer</code>，您可以启用一个浏览器，该浏览器显示在工作空间中定义的脚本。</p><p>在资源管理器中，您可以在编辑器中打开脚本，将其作为任务运行，然后使用节点调试器启动它(当脚本定义了诸如 <code>--inspect-brk</code> 的调试选项时)。单击时的默认操作是打开脚本。要单击运行脚本，请设置 <code>npm.scriptExplorerAction</code> 为 <strong>运行</strong>。使用 <code>npm.exclude</code> 设置可以排除 <code>package.json</code> 特定文件夹中包含的文件中的脚本。</p><p>通过设置 <code>npm.enableRunFromFolder</code>，您可以启用从文件资源管理器的上下文菜单中为文件夹运行 npm 脚本的功能。选择文件夹后，该设置将启用命令 <strong>在文件夹中运行 npm 脚本...</strong>。该命令显示此文件夹中包含的 npm 脚本的快速选择列表，您可以选择要作为任务执行的脚本。</p>`,13);function g(b,q){const a=i("ExternalLinkIcon");return t(),p("div",null,[d,s("p",null,[n("从顶层菜单中选择"),u,n("，运行命令"),k,n("，然后选择您要运行的任务类型。这将生成一个 "),m,n(" 文件。有关更多详细信息，请参见 "),s("a",v,[n("任务文档"),c(a)]),n("。")]),h])}const x=o(l,[["render",g],["__file","task.html.vue"]]);export{x as default};
