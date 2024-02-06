import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,f as n}from"./app--7H4MSuP.js";const t={},p=n(`<h1 id="grep" tabindex="-1"><a class="header-anchor" href="#grep"><span>grep</span></a></h1><p><code>grep</code> 命令用于文件内容的搜索，返回所有匹配的行。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> pattern filename
</code></pre></div><p>下面是一个例子。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">grep</span> admin /etc/passwd
_kadmin_admin:*:218:-2:Kerberos Admin Service:/var/empty:/usr/bin/false
_kadmin_changepw:*:219:-2:Kerberos Change Password Service:/var/empty:/usr/bin/false
_krb_kadmin:*:231:-2:Open Directory Kerberos Admin Service:/var/empty:/usr/bin/false
</code></pre></div><p>一般情况下，应该使用 <code>grep -R</code>，递归地找出当前目录下符合 <code>someVar</code> 的文件。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-FR</span> <span class="token string">&#39;someVar&#39;</span> <span class="token builtin class-name">.</span>
</code></pre></div><p>別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-iR</span> <span class="token string">&#39;somevar&#39;</span> <span class="token builtin class-name">.</span>
</code></pre></div><p>也可以用 <code>grep -l</code> 光打印出符合条件的文件名而非文件内容选段。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-lR</span> <span class="token string">&#39;somevar&#39;</span> <span class="token builtin class-name">.</span>
</code></pre></div><p>如果您写的脚本或批处理任务需要上面的输出内容，可以使用 while 和 read 来处理文件名中的空格和其他特殊字符:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-lR</span> someVar <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> <span class="token function">file</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token function">head</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
<span class="token keyword">done</span>
</code></pre></div><p>如果您在您的项目里使用了版本控制软件，它通常会在 .svn， .git， .hg 目录下包含一些元数据。您也可以很容易地用 grep -v 把这些目录移出搜索范围，当然得用 grep -F 指定一个恰当且确定的字符串，即要移除的目录名:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-R</span> <span class="token string">&#39;someVar&#39;</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-vF</span> <span class="token string">&#39;.svn&#39;</span>
</code></pre></div><p>部分版本的 grep 包含了 --exclude 和 --exclude-dir 选项，这看起来更加易读。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p><code>-i</code> 参数表示忽略大小写。</p><p><code>-r</code> 表示搜索某个目录下面的所有文件。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-r</span> admin /etc/
</code></pre></div><p><code>-v</code> 过滤包含某个词的行，即 <code>grep</code> 的逆操作。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示所有包含 vim，但不包含 grep 的行</span>
$ <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">vim</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span>
</code></pre></div>`,22),r=[p];function o(c,l){return e(),s("div",null,r)}const g=a(t,[["render",o],["__file","grep.html.vue"]]),m=JSON.parse('{"path":"/linux/bash/archives/commands/grep.html","title":"grep","lang":"zh-CN","frontmatter":{"date":"2024-02-03T00:00:00.000Z","description":"grep grep 命令用于文件内容的搜索，返回所有匹配的行。 下面是一个例子。 一般情况下，应该使用 grep -R，递归地找出当前目录下符合 someVar 的文件。 別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。 也可以用 grep -l 光打印出符合条件的文件名而非文件内容选段。 如果您写的脚本或批处理任务需要上面的输出内容，...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/linux/bash/archives/commands/grep.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"grep"}],["meta",{"property":"og:description","content":"grep grep 命令用于文件内容的搜索，返回所有匹配的行。 下面是一个例子。 一般情况下，应该使用 grep -R，递归地找出当前目录下符合 someVar 的文件。 別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。 也可以用 grep -l 光打印出符合条件的文件名而非文件内容选段。 如果您写的脚本或批处理任务需要上面的输出内容，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2024-02-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"grep\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]}],"git":{"createdTime":1706938124000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":1.35,"words":405},"filePathRelative":"linux/bash/archives/commands/grep.md","localizedDate":"2024年2月3日","excerpt":"","autoDesc":true}');export{g as comp,m as data};
