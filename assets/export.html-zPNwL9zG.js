import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,f as s}from"./app--7H4MSuP.js";const n={},o=s(`<h1 id="export" tabindex="-1"><a class="header-anchor" href="#export"><span>export</span></a></h1><p><code>export</code> 命令用于向子 Shell 输出变量。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">hotellogs</span><span class="token operator">=</span><span class="token string">&quot;/workspace/hotel-api/storage/logs&quot;</span>
</code></pre></div><p>然后执行下面的命令，新建一个子 Shell。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">bash</span>
<span class="token builtin class-name">cd</span> hotellogs
</code></pre></div><p>上面命令的执行结果会进入 <code>hotellogs</code> 变量指向的目录。</p><p><code>export</code> 命令还可以显示所有环境变量。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/zsh
<span class="token assign-left variable">AWS_HOME</span><span class="token operator">=</span>/Users/adnanadnan/.aws
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8
<span class="token assign-left variable">LC_CTYPE</span><span class="token operator">=</span>en_US.UTF-8
<span class="token assign-left variable">LESS</span><span class="token operator">=</span>-R
</code></pre></div><p>如果想查看单个变量，使用 <code>echo $VARIABLE_NAME</code>。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/usr/bin/zsh
</code></pre></div>`,10),l=[o];function p(r,c){return t(),a("div",null,l)}const h=e(n,[["render",p],["__file","export.html.vue"]]),m=JSON.parse('{"path":"/linux/bash/archives/commands/export.html","title":"export","lang":"zh-CN","frontmatter":{"date":"2024-02-03T00:00:00.000Z","description":"export export 命令用于向子 Shell 输出变量。 然后执行下面的命令，新建一个子 Shell。 上面命令的执行结果会进入 hotellogs 变量指向的目录。 export 命令还可以显示所有环境变量。 如果想查看单个变量，使用 echo $VARIABLE_NAME。 ","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/linux/bash/archives/commands/export.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"export"}],["meta",{"property":"og:description","content":"export export 命令用于向子 Shell 输出变量。 然后执行下面的命令，新建一个子 Shell。 上面命令的执行结果会进入 hotellogs 变量指向的目录。 export 命令还可以显示所有环境变量。 如果想查看单个变量，使用 echo $VARIABLE_NAME。 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2024-02-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"export\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[],"git":{"createdTime":1706938124000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":0.35,"words":106},"filePathRelative":"linux/bash/archives/commands/export.md","localizedDate":"2024年2月3日","excerpt":"","autoDesc":true}');export{h as comp,m as data};
