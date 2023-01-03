import{_ as p,W as e,X as l,$ as o,Y as a,Z as n,a0 as c,a2 as s,E as u}from"./framework-fec69ff1.js";const i={},d=a("p",null,"无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在 Windows 中还是在 Linux 中，文件的具体位置都用文档的路径标注。",-1),k=a("p",null,"路径常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。",-1),r=s(`<h2 id="物理路径" tabindex="-1"><a class="header-anchor" href="#物理路径" aria-hidden="true">#</a> 物理路径</h2><p>物理路径的英文全称是: Physical path，它就是指硬盘上文件的路径，比如下面的文件位置表示方法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>d:\\wwwroot\\html\\a.html
d:\\wwwroot\\html\\photo\\b.html
d:\\wwwroot\\html\\photo\\c.html
d:\\wwwroot\\html\\photo\\ours\\d.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>D:</code> 与 <code>d:</code> 均可。盘符不分大小写。</p></blockquote><p>一般来说物理路径可用于访问本地文件，即不通过 WEB 服务器(如: 本地调试)等的情况下。</p><h2 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h2><p>相对路径的英文全称是 Relative Path，我们可以从以下三个方面来了解它的用法 (以“物理路径”中的位置情况为例):</p><ul><li><p>如何表示同级目录的文件</p><p>b.html 和 c.html 在同一个文件夹下，如果 b.html 需要链接到 c.html，可以在 b.html 中这样写:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>同目录下文件间互相链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码中的 <code>./</code> 代表同级目录。</p><p><code>./</code>是相对路径，也可以省略不写，省略不写，即直接以文件夹或文件名称开头的路径也是相对路径。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>同目录下文件间互相链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如何表示上级目录的文件</p><p>a.html 是 b.html 和 c.html 的上级目录中的文件，如果 b.html 或 c.html 链接到 a.html，可以在 b.html 或 c.html 中这样写:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到上级目录中的文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码中的 <code>../</code> 代表一级上级目录(间隔一个目录)。</p><p>需要注意的是: “<code>../../</code>”代表二级上级目录(间隔两个目录)，比如 a.html 是 d.html 的前两级目录，同时 d.html 需要链接到 a.html，可以在 d.html 中这样写:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到上级目录的上级目录中的文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如何表示子目录的文件</p><p>b.html 和 c.html 是 a.html 的子目录中的文件，如果需要在 a.html 中链接到 b.html， 可以在 a.html 中这样写:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>photo/b.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到子目录(photo)中的文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
如果需要在a.html中链接到d.html，可以在a.html中这样写
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>photo/ours/d.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到子目录(photo/ourd/)中的文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="绝对路径" tabindex="-1"><a class="header-anchor" href="#绝对路径" aria-hidden="true">#</a> 绝对路径</h2>`,9),h={href:"http://www.deerol.com",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到a.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/photo/b.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到b.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/photo/c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到c.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/photo/ours/d.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到d.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根目录" tabindex="-1"><a class="header-anchor" href="#根目录" aria-hidden="true">#</a> 根目录</h2><p>根目录的英文全称是 Root directory，去掉绝对路径前面的域名就是根目录，所以它可以理解为是网站的最上层目录。它的表示方法如下:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到a.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/photo/b.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到b.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/photo/c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到c.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/photo/ours/d.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到d.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在服务器上，根目录即代表网站主页所在的目录。网站服务器一般只能访问网站主页所在文件夹内的文件与文件夹。</p>`,5);function g(v,b){const t=u("ExternalLinkIcon");return e(),l("div",null,[d,k,o(" more "),r,a("p",null,[n("绝对路径的英文全称是 Absolute Path，它就是带有网址的路径。比如您有一个域名 "),a("a",h,[n("www.deerol.com"),c(t)]),n("，其域名指向 d:\\wwwroot，那么上面的四个文件就可以这么表示:")]),m])}const w=p(i,[["render",g],["__file","path.html.vue"]]);export{w as default};
