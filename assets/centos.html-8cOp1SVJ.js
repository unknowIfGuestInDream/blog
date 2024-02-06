import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,f as a}from"./app--7H4MSuP.js";const s={},o=a(`<h2 id="管理工具" tabindex="-1"><a class="header-anchor" href="#管理工具"><span>管理工具</span></a></h2><ul><li>yum (Centos 7)</li><li>dnf (Centos 8)</li></ul><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn"><span>yarn</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--silent</span> <span class="token parameter variable">--location</span> https://dl.yarnpkg.com/rpm/yarn.repo <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/yarn.repo

<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">yarn</span>
<span class="token comment">## OR ##</span>
<span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre></div><p>测试是否安装成功:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token parameter variable">--version</span>
</code></pre></div>`,6),l=[o];function r(c,p){return e(),n("div",null,l)}const d=t(s,[["render",r],["__file","centos.html.vue"]]),u=JSON.parse('{"path":"/linux/centos.html","title":"CentOS 教程","lang":"zh-CN","frontmatter":{"title":"CentOS 教程","icon":"centos","date":"2019-11-23T00:00:00.000Z","category":"Linux","description":"管理工具 yum (Centos 7) dnf (Centos 8) yarn 测试是否安装成功: ","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/linux/centos.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"CentOS 教程"}],["meta",{"property":"og:description","content":"管理工具 yum (Centos 7) dnf (Centos 8) yarn 测试是否安装成功: "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2019-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS 教程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"管理工具","slug":"管理工具","link":"#管理工具","children":[]},{"level":2,"title":"yarn","slug":"yarn","link":"#yarn","children":[]}],"git":{"createdTime":1706938124000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":0.17,"words":52},"filePathRelative":"linux/centos.md","localizedDate":"2019年11月23日","excerpt":"","autoDesc":true}');export{d as comp,u as data};
