import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c,d as l,a as e,b as n,e as a,w as i,f as t,r}from"./app.6a7adab4.js";const p={},u=e("p",null,[n("\u4EC0\u4E48\u662F\u4ED3\u5E93\u5462? \u82F1\u6587\u540D"),e("strong",null,"repository"),n("\uFF0C\u60A8\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u6210\u4E00\u4E2A\u76EE\u5F55\uFF0C\u8FD9\u4E2A\u76EE\u5F55\u91CC\u9762\u7684\u6240\u6709\u6587\u4EF6\u90FD\u53EF\u4EE5\u88AB Git \u7BA1\u7406\u8D77\u6765\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u7684\u4FEE\u6539\u3001\u5220\u9664\uFF0C Git \u90FD\u80FD\u8DDF\u8E2A\uFF0C\u4EE5\u4FBF\u4EFB\u4F55\u65F6\u523B\u90FD\u53EF\u4EE5\u8FFD\u8E2A\u5386\u53F2\uFF0C\u6216\u8005\u5728\u5C06\u6765\u67D0\u4E2A\u65F6\u523B\u53EF\u4EE5\u201C\u8FD8\u539F\u201D\u3002")],-1),m=t(`<h2 id="\u521D\u59CB\u5316\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u4ED3\u5E93" aria-hidden="true">#</a> \u521D\u59CB\u5316\u4ED3\u5E93</h2><p>\u521B\u5EFA\u4E00\u4E2A\u4ED3\u5E93\u975E\u5E38\u7B80\u5355\uFF0C\u9996\u5148\uFF0C\u9009\u62E9\u4E00\u4E2A\u5408\u9002\u7684\u5730\u65B9\uFF0C\u521B\u5EFA\u4E00\u4E2A\u7A7A\u76EE\u5F55:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># open shell (PowerShell on Windows) in a proper directory</span>
$ <span class="token function">mkdir</span> learngit
$ <span class="token builtin class-name">cd</span> learngit
$ <span class="token builtin class-name">pwd</span>
/users/hope-studio/learngit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>pwd</code> \u547D\u4EE4\u7528\u4E8E\u663E\u793A\u5F53\u524D\u76EE\u5F55\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><ul><li>\u4F7F\u7528 Windows \u7CFB\u7EDF\u65F6\uFF0C\u4E3A\u4E86\u907F\u514D\u9047\u5230\u5404\u79CD\u83AB\u540D\u5176\u5999\u7684\u95EE\u9898\uFF0C\u8BF7\u786E\u4FDD\u76EE\u5F55\u540D(\u5305\u62EC\u7236\u76EE\u5F55)\u4E0D\u5305\u542B\u4E2D\u6587\u3002</li><li>\u4E3A\u4E86\u786E\u4FDD\u80FD\u591F\u6267\u884C\u8DE8\u5E73\u53F0\u7684\u547D\u4EE4\uFF0C\u8BF7\u5728 Windows \u4E0A\u5B89\u88C5 PowerShell \u5E76\u8BBE\u7F6E\u4E3A VS Code \u7684\u9ED8\u8BA4\u7EC8\u7AEF\u3002</li></ul></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u901A\u8FC7 <code>git init</code> \u547D\u4EE4\u628A\u8FD9\u4E2A\u76EE\u5F55\u53D8\u6210 Git \u53EF\u4EE5\u7BA1\u7406\u7684\u4ED3\u5E93:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> init
Initialized empty Git repository <span class="token keyword">in</span> /users/hope-studio/learngit/.git/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u77AC\u95F4 Git \u5C31\u628A\u4ED3\u5E93\u5EFA\u597D\u4E86\uFF0C\u800C\u4E14\u544A\u8BC9\u60A8\u662F\u4E00\u4E2A\u7A7A\u7684\u4ED3\u5E93(empty Git repository)\uFF0C\u53EF\u4EE5\u53D1\u73B0\u5F53\u524D\u76EE\u5F55\u4E0B\u591A\u4E86\u4E00\u4E2A.git \u7684\u76EE\u5F55\uFF0C\u8FD9\u4E2A\u76EE\u5F55\u662F Git \u6765\u8DDF\u8E2A\u7BA1\u7406\u4ED3\u5E93\u7684\uFF0C\u5982\u679C\u8FD9\u4E2A\u76EE\u5F55\u91CC\u9762\u7684\u6587\u4EF6\u7834\u574F\u4E86\uFF0CGit \u4ED3\u5E93\u4E5F\u7834\u574F\u4E86\u3002</p><p>\u5982\u679C\u60A8\u6CA1\u6709\u770B\u5230 .git \u76EE\u5F55\uFF0C\u90A3\u662F\u56E0\u4E3A\u8FD9\u4E2A\u76EE\u5F55\u9ED8\u8BA4\u662F\u9690\u85CF\u7684\uFF0C\u7528 <code>ls -ah</code> \u547D\u4EE4\u5C31\u53EF\u4EE5\u770B\u89C1\u3002</p><p>\u4E5F\u4E0D\u4E00\u5B9A\u5FC5\u987B\u5728\u7A7A\u76EE\u5F55\u4E0B\u521B\u5EFA Git \u4ED3\u5E93\uFF0C\u9009\u62E9\u4E00\u4E2A\u5DF2\u7ECF\u6709\u4E1C\u897F\u7684\u76EE\u5F55\u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u8BF7\u4E0D\u8981\u7528\u5DF2\u7ECF\u5728\u4F7F\u7528\u7684\u9879\u76EE\u7EC3\u4E60 Git!</p></div><h2 id="\u628A\u6587\u4EF6\u6DFB\u52A0\u5230\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u628A\u6587\u4EF6\u6DFB\u52A0\u5230\u4ED3\u5E93" aria-hidden="true">#</a> \u628A\u6587\u4EF6\u6DFB\u52A0\u5230\u4ED3\u5E93</h2><p>\u9996\u5148\u8FD9\u91CC\u518D\u660E\u786E\u4E00\u4E0B\uFF0C\u6240\u6709\u7684\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF0C\u5176\u5B9E\u53EA\u80FD\u8DDF\u8E2A\u6587\u672C\u6587\u4EF6\u7684\u6539\u52A8\uFF0C\u6BD4\u5982 TXT \u6587\u4EF6\uFF0C\u7F51\u9875\uFF0C\u6240\u6709\u7684\u7A0B\u5E8F\u4EE3\u7801\u7B49\u7B49\uFF0CGit \u4E5F\u4E0D\u4F8B\u5916\u3002\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u53EF\u4EE5\u544A\u8BC9\u60A8\u6BCF\u6B21\u7684\u6539\u52A8\uFF0C\u6BD4\u5982\u5728\u7B2C 5 \u884C\u52A0\u4E86\u4E00\u4E2A\u5355\u8BCD\u201CLinux\u201D\uFF0C\u5728\u7B2C 8 \u884C\u5220\u4E86\u4E00\u4E2A\u5355\u8BCD\u201CWindows\u201D\u3002\u800C\u56FE\u7247\u3001\u89C6\u9891\u8FD9\u4E9B\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u867D\u7136\u4E5F\u80FD\u7531\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u7BA1\u7406\uFF0C\u4F46\u6CA1\u6CD5\u8DDF\u8E2A\u6587\u4EF6\u7684\u53D8\u5316\uFF0C\u53EA\u80FD\u628A\u4E8C\u8FDB\u5236\u6587\u4EF6\u6BCF\u6B21\u6539\u52A8\u4E32\u8D77\u6765\uFF0C\u4E5F\u5C31\u662F\u53EA\u77E5\u9053\u56FE\u7247\u4ECE 100KB \u6539\u6210\u4E86 120KB\uFF0C\u4F46\u5230\u5E95\u6539\u4E86\u5565\uFF0C\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u4E0D\u77E5\u9053\uFF0C\u4E5F\u6CA1\u6CD5\u77E5\u9053\u3002(Microsoft \u7684 Word \u683C\u5F0F\u662F\u4E8C\u8FDB\u5236\u683C\u5F0F\uFF0C\u6240\u4EE5\u5F88\u4E0D\u5E78) \u6240\u4EE5\u8981\u4F7F\u7528\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF0C\u5C31\u8981\u4EE5\u7EAF\u6587\u672C\u65B9\u5F0F\u7F16\u5199\u6587\u4EF6\u3002</p>`,13),v={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"\u30D2\u30F3\u30C8",-1),g=e("p",null,"\u56E0\u4E3A\u6587\u672C\u662F\u6709\u7F16\u7801\u7684\uFF0C\u6BD4\u5982\u4E2D\u6587\u6709\u5E38\u7528\u7684 GBK \u7F16\u7801\uFF0C\u65E5\u6587\u6709 Shift_JIS \u7F16\u7801\uFF0C\u5982\u679C\u6CA1\u6709\u5386\u53F2\u9057\u7559\u95EE\u9898\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u4F7F\u7528\u6807\u51C6\u7684 UTF-8 \u7F16\u7801\uFF0C\u6240\u6709\u8BED\u8A00\u4F7F\u7528\u540C\u4E00\u79CD\u7F16\u7801\uFF0C\u65E2\u6CA1\u6709\u51B2\u7A81\uFF0C\u53C8\u88AB\u6240\u6709\u5E73\u53F0\u6240\u652F\u6301\u3002",-1),b={class:"custom-container warning"},f=e("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),k=e("p",null,"\u5343\u4E07\u4E0D\u8981\u4F7F\u7528 Windows \u81EA\u5E26\u7684\u8BB0\u4E8B\u672C\u7F16\u8F91\u4EFB\u4F55\u6587\u672C\u6587\u4EF6\u3002",-1),_=t(`<p>\u73B0\u5728\u7F16\u5199\u4E00\u4E2A readme.txt \u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a version control system.
Git is free software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u5B9A\u8981\u653E\u5230 <code>learngit</code> \u76EE\u5F55\u4E0B(\u5B50\u76EE\u5F55\u4E5F\u884C)\uFF0C\u56E0\u4E3A\u8FD9\u662F\u4E00\u4E2A Git \u4ED3\u5E93\uFF0C\u653E\u5230\u5176\u4ED6\u5730\u65B9 Git \u518D\u5389\u5BB3\u4E5F\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\u3002</p><p>\u628A\u4E00\u4E2A\u6587\u4EF6\u653E\u5230 Git \u4ED3\u5E93\u53EA\u9700\u8981\u4E24\u6B65:</p><ol><li><p>\u7528\u547D\u4EE4 <code>git add</code> \u544A\u8BC9 Git\uFF0C\u628A\u6587\u4EF6\u6DFB\u52A0\u5230\u4ED3\u5E93:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u6CA1\u6709\u4EFB\u4F55\u663E\u793A\uFF0C\u8FD9\u5C31\u5BF9\u4E86\uFF0CUnix \u7684\u54F2\u5B66\u662F\u201C\u6CA1\u6709\u6D88\u606F\u5C31\u662F\u597D\u6D88\u606F\u201D\uFF0C\u8BF4\u660E\u6DFB\u52A0\u6210\u529F\u3002</p></li><li><p>\u7528\u547D\u4EE4 <code>git commit</code> \u544A\u8BC9 Git\uFF0C\u628A\u6587\u4EF6\u63D0\u4EA4\u5230\u4ED3\u5E93:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;wrote a readme file&quot;</span>
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> eaadf4e<span class="token punctuation">]</span> wrote a readme <span class="token function">file</span>
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git commit</code> \u547D\u4EE4\uFF0C<code>-m</code> \u540E\u9762\u8F93\u5165\u7684\u662F\u672C\u6B21\u63D0\u4EA4\u7684\u8BF4\u660E\uFF0C\u8FD9\u6837\u60A8\u5C31\u80FD\u4ECE\u5386\u53F2\u8BB0\u5F55\u91CC\u65B9\u4FBF\u5730\u627E\u5230\u6539\u52A8\u8BB0\u5F55\u3002</p><p><code>git commit</code> \u547D\u4EE4\u6267\u884C\u6210\u529F\u540E\u4F1A\u544A\u8BC9\u60A8\uFF0C<code>1 file changed</code>: 1 \u4E2A\u6587\u4EF6\u88AB\u6539\u52A8(\u6211\u4EEC\u65B0\u6DFB\u52A0\u7684 readme.txt \u6587\u4EF6)\uFF1B<code>2 insertions</code>: \u63D2\u5165\u4E86\u4E24\u884C\u5185\u5BB9(readme.txt \u6709\u4E24\u884C\u5185\u5BB9)\u3002</p></li></ol><p>\u4E3A\u4EC0\u4E48 Git \u6DFB\u52A0\u6587\u4EF6\u9700\u8981 <code>add</code>\uFF0C<code>commit</code> \u4E00\u5171\u4E24\u6B65\u5462? \u56E0\u4E3A <code>commit</code> \u53EF\u4EE5\u4E00\u6B21\u63D0\u4EA4\u5F88\u591A\u6587\u4EF6\uFF0C\u6240\u4EE5\u60A8\u53EF\u4EE5\u591A\u6B21 <code>add</code> \u4E0D\u540C\u7684\u6587\u4EF6\uFF0C\u6BD4\u5982:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> file1.txt
<span class="token function">git</span> <span class="token function">add</span> file2.txt file3.txt
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add 3 files.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><ul><li><p>\u521D\u59CB\u5316\u4E00\u4E2A Git \u4ED3\u5E93\uFF0C\u4F7F\u7528 <code>git init</code> \u547D\u4EE4\u3002</p></li><li><p>\u6DFB\u52A0\u6587\u4EF6\u5230 Git \u4ED3\u5E93\uFF0C\u5206\u4E24\u6B65:</p><ol><li>\u4F7F\u7528\u547D\u4EE4 <code>git add &lt;file&gt;</code>\uFF0C\u53EF\u53CD\u590D\u591A\u6B21\u4F7F\u7528\uFF0C\u6DFB\u52A0\u591A\u4E2A\u6587\u4EF6\uFF1B</li><li>\u4F7F\u7528\u547D\u4EE4 <code>git commit -m &lt;message&gt;</code>\uFF0C\u5B8C\u6210\u3002</li></ol></li></ul>`,9);function x(G,w){const s=r("RouterLink");return d(),c("div",null,[u,l(" more "),m,e("div",v,[h,g,e("ul",null,[e("li",null,[n("\u5177\u4F53\u8BE6\u60C5\u8BF7\u89C1 "),a(s,{to:"/ja/code/basic/encoding.html"},{default:i(()=>[n("\u6587\u4EF6\u7F16\u7801")]),_:1})])])]),e("div",b,[f,k,e("ul",null,[e("li",null,[n("\u5177\u4F53\u8BE6\u60C5\u8BF7\u89C1 "),a(s,{to:"/ja/code/windows/notepad.html"},{default:i(()=>[n("\u8BB0\u4E8B\u672C\u9057\u7559\u95EE\u9898")]),_:1})])])]),_])}const S=o(p,[["render",x],["__file","create-repo.html.vue"]]);export{S as default};
