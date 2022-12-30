import{_ as o,W as d,X as c,Y as e,Z as n,a0 as a,a1 as l,a2 as i,E as t}from"./framework-65b62f32.js";const h="/assets/uri-f8bf10aa.png",u={},R=i('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><strong>统一资源标识符</strong>(英语: Uniform Resource Identifier，缩写: URI)在电脑术语中是一个用于标识某一互联网资源名称的字符串。</p><p>该种标识允许用户对网络中(一般指万维网)的资源通过特定的协议进行交互操作。URI 的最常见的形式是统一资源定位符(URL)，经常指定为非正式的网址。更罕见的用法是统一资源名称(URN)，其目的是通过提供一种途径。用于在特定的名字空间资源的标识，以补充网址。</p><h2 id="与-url-和-urn-的关系" tabindex="-1"><a class="header-anchor" href="#与-url-和-urn-的关系" aria-hidden="true">#</a> 与 URL 和 URN 的关系</h2><h3 id="urn" tabindex="-1"><a class="header-anchor" href="#urn" aria-hidden="true">#</a> URN</h3><p><strong>统一资源名称</strong>(英语: Uniform Resource Name，缩写: URN)是统一资源标识(URI)的历史名字，它使用 <code>urn:</code> 作为 URI scheme。</p>',6),U={class:"hint-container info"},p=e("p",{class:"hint-container-title"},"関連情報",-1),m={href:"https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%90%8D",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"url",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#url","aria-hidden":"true"},"#"),n(" URL")],-1),v=e("p",null,[e("strong",null,"统一资源定位符"),n("(英语: Uniform Resource Locator，缩写: URL；或称统一资源定位器、定位地址、URL 地址，俗称网页地址或简称网址)是因特网上标准的资源的地址(Address)，如同在网络上的门牌。")],-1),f={class:"hint-container info"},L=e("p",{class:"hint-container-title"},"関連情報",-1),b=i('<h3 id="关系" tabindex="-1"><a class="header-anchor" href="#关系" aria-hidden="true">#</a> 关系</h3><p><img src="'+h+'" alt="URL方案分类图" loading="lazy"></p><p>URL(定位符)和 URN(名称)方案属于 URI 的子类，URI 可以为 URL 或 URN 两者之一或同时是 URI 和 URN。技术上讲，URL 和 URN 属于资源 ID；但是，人们往往无法将某种方案归类于两者中的某一个: 所有的 URI 都可被作为名称看待，而某些方案同时体现了两者中的不同部分。 URI 可被视为定位符(URL)，名称(URN)或两者兼备。统一资源名(URN)如同一个人的名称，而统一资源定位符(URL)代表一个人的住址。换言之，URN 定义某事物的身份，而 URL 提供查找该事物的方法。</p><div class="hint-container tip"><p class="hint-container-title">例子</p><p>用于标识唯一书目的 ISBN 系统是一个典型的 URN 使用范例。例如，ISBN <code>0-486-27557-4</code> 无二义性地标识出莎士比亚的戏剧《罗密欧与朱丽叶》的某一特定版本。为获得该资源并阅读该书，人们需要它的位置，也就是一个 URL 地址。在类 Unix 操作系统中，一个典型的 URL 地址可能是一个文件目录，例如 <code>file:///home/username/RomeoAndJuliet.pdf</code>。该 URL 标识出存储于本地硬盘中的电子书文件。因此，URL 和 URN 有着互补的作用。</p></div><h3 id="技术观点" tabindex="-1"><a class="header-anchor" href="#技术观点" aria-hidden="true">#</a> 技术观点</h3>',5),N={href:"http://www.wikipedia.org/",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"www.wikipedia.org",-1),x=e("code",null,"urn:ISBN 0-395-36341-1",-1),g=i(`<p>技术刊物，特别是 IETF 和 W3C 发布的标准中，通常不再使用“URL”这一术语，因为很少需要区别 URL 和 URI。但是，在非技术文献和万维网软件中，URL 这一术语仍被广泛使用。此外，术语“网址”(没有正式定义)在非技术文献中时常作为 URL 或 URI 的同义词出现，虽然往往其指代的只是“http”和“https”协议。</p><h2 id="文法格式" tabindex="-1"><a class="header-anchor" href="#文法格式" aria-hidden="true">#</a> 文法格式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                    hierarchical part
        ┌───────────────────┴─────────────────────┐
                    authority               path
        ┌───────────────┴───────────────┐┌───┴────┐
  abc://username:password@example.com:123/path/data?key=value&amp;key2=value2#fragid1
  └┬┘   └───────┬───────┘ └────┬────┘ └┬┘           └─────────┬─────────┘ └──┬──┘
scheme  user information     host     port                  query         fragment

  urn:example:mammal:monotreme:echidna
  └┬┘ └──────────────┬───────────────┘
scheme              path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(k,B){const r=t("ExternalLinkIcon"),s=t("RouterLink");return d(),c("div",null,[R,e("div",U,[p,e("p",null,[n("更多详情请见 "),e("a",m,[n("维基百科"),a(r)])])]),_,v,e("div",f,[L,e("p",null,[n("更多详情请见 "),a(s,{to:"/ja/code/website/html/definition/url.html"},{default:l(()=>[n("URL")]),_:1})])]),b,e("p",null,[n("URL 是一种 URI，它标识一个互联网资源，并指定对其进行操作或获取该资源的方法。可能通过对主要访问手段的描述，也可能通过网络“位置”进行标识。例如，"),e("a",N,[n("http://www.wikipedia.org/"),a(r)]),n(" 这个 URL，标识一个特定资源(首页)并表示该资源的某种形式(例如以编码字符表示的，首页的 HTML 代码)是可以通过 HTTP 协议从 "),I,n(" 这个网络主机获得的。URN 是基于某名字空间通过名称指定资源的 URI。人们可以通过 URN 来指出某个资源，而无需指出其位置和获得方式。资源无需是基于互联网的。例如，URN "),x,n(" 指定标识系统(即国际标准书号 ISBN)和某资源在该系统中的唯一表示的 URI。它可以允许人们在不指出其位置和获得方式的情况下谈论这本书。")]),g])}const y=o(u,[["render",w],["__file","uri.html.vue"]]);export{y as default};
