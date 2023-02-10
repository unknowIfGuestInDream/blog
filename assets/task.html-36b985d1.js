const n=JSON.parse('{"key":"v-fd69a6ea","path":"/software/vscode/guide/task.html","title":"任务执行器","lang":"zh-CN","frontmatter":{"title":"任务执行器","icon":"operate","category":["VS Code"],"tag":["VS Code","软件"],"description":"自动检测任务 从顶层菜单中选择终端，运行命令配置任务，然后选择您要运行的任务类型。这将生成一个 tasks.json 文件。有关更多详细信息，请参见 任务文档。 { // See &lt;https://go.microsoft.com/fwlink/?LinkId=733558&gt; // for the documentation about the tasks.json format \\"version\\": \\"2.0.0\\", \\"tasks\\": [ { \\"type\\": \\"npm\\", \\"script\\": \\"install\\", \\"group\\": { \\"kind\\": \\"build\\", \\"isDefault\\": true } } ] }","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/software/vscode/guide/task.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/software/vscode/guide/task.html"}],["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/software/vscode/guide/task.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"任务执行器"}],["meta",{"property":"og:description","content":"自动检测任务 从顶层菜单中选择终端，运行命令配置任务，然后选择您要运行的任务类型。这将生成一个 tasks.json 文件。有关更多详细信息，请参见 任务文档。 { // See &lt;https://go.microsoft.com/fwlink/?LinkId=733558&gt; // for the documentation about the tasks.json format \\"version\\": \\"2.0.0\\", \\"tasks\\": [ { \\"type\\": \\"npm\\", \\"script\\": \\"install\\", \\"group\\": { \\"kind\\": \\"build\\", \\"isDefault\\": true } } ] }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2022-10-08T10:03:39.000Z"}],["meta",{"property":"article:tag","content":"VS Code"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-10-08T10:03:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"任务执行器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-10-08T10:03:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"自动检测任务","slug":"自动检测任务","link":"#自动检测任务","children":[]},{"level":2,"title":"从终端菜单运行任务","slug":"从终端菜单运行任务","link":"#从终端菜单运行任务","children":[]},{"level":2,"title":"定义任务的键盘快捷键","slug":"定义任务的键盘快捷键","link":"#定义任务的键盘快捷键","children":[]},{"level":2,"title":"从资源管理器中将 npm 脚本作为任务运行","slug":"从资源管理器中将-npm-脚本作为任务运行","link":"#从资源管理器中将-npm-脚本作为任务运行","children":[]}],"git":{"createdTime":1665153728000,"updatedTime":1665223419000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":1.86,"words":558},"filePathRelative":"software/vscode/guide/task.md","localizedDate":"2022年10月7日","excerpt":"<h2> 自动检测任务</h2>\\n<p>从顶层菜单中选择<strong>终端</strong>，运行命令<strong>配置任务</strong>，然后选择您要运行的任务类型。这将生成一个 <code>tasks.json</code> 文件。有关更多详细信息，请参见 <a href=\\"https://code.visualstudio.com/docs/editor/debugging\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">任务文档</a>。</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// See &lt;https://go.microsoft.com/fwlink/?LinkId=733558&gt;</span>\\n  <span class=\\"token comment\\">// for the documentation about the tasks.json format</span>\\n  <span class=\\"token property\\">\\"version\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"2.0.0\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"tasks\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">\\"type\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"npm\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"script\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"install\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"group\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">\\"kind\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"build\\"</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token property\\">\\"isDefault\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
