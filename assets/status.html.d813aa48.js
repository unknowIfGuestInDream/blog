import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,f as a}from"./app.cad6791d.js";const i={},t=a(`<p>\u6211\u4EEC\u5DF2\u7ECF\u6210\u529F\u5730\u6DFB\u52A0\u5E76\u63D0\u4EA4\u4E86\u4E00\u4E2A readme.txt \u6587\u4EF6\uFF0C\u7EE7\u7EED\u4FEE\u6539 readme.txt \u6587\u4EF6\uFF0C\u6539\u6210\u5982\u4E0B\u5185\u5BB9:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u8FD0\u884C <code>git status</code> \u547D\u4EE4\u770B\u770B\u7ED3\u679C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    modified:   readme.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git status</code> \u547D\u4EE4\u53EF\u4EE5\u8F93\u51FA\u4ED3\u5E93\u5F53\u524D\u7684\u72B6\u6001\uFF0C\u4E0A\u9762\u7684\u547D\u4EE4\u8F93\u51FA\u544A\u8BC9\u6211\u4EEC\uFF0Creadme.txt \u88AB\u4FEE\u6539\u8FC7\u4E86\uFF0C\u4F46\u8FD8\u6CA1\u6709\u51C6\u5907\u63D0\u4EA4\u7684\u4FEE\u6539\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u7B80\u4ECB\u8F93\u51FA</p><p><code>git status</code> \u547D\u4EE4\u7684\u8F93\u51FA\u5341\u5206\u8BE6\u7EC6\uFF0C\u4F46\u5176\u7528\u8BED\u6709\u4E9B\u7E41\u7410\u3002Git \u6709\u4E00\u4E2A\u9009\u9879\u53EF\u4EE5\u5E2E\u60A8\u7F29\u77ED\u72B6\u6001\u547D\u4EE4\u7684\u8F93\u51FA\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4EE5\u7B80\u6D01\u7684\u65B9\u5F0F\u67E5\u770B\u66F4\u6539\u3002\u5982\u679C\u60A8\u4F7F\u7528 <code>git status -s</code> \u547D\u4EE4\u6216 <code>git status --short</code> \u547D\u4EE4\uFF0C\u60A8\u5C06\u5F97\u5230\u4E00\u79CD\u683C\u5F0F\u66F4\u4E3A\u7D27\u51D1\u7684\u8F93\u51FA\u3002</p><p>\u8F93\u51FA\u4E2D\u6709\u4E24\u680F\uFF0C\u5DE6\u680F\u6307\u660E\u4E86\u6682\u5B58\u533A\u7684\u72B6\u6001\uFF0C\u53F3\u680F\u6307\u660E\u4E86\u5DE5\u4F5C\u533A\u7684\u72B6\u6001\u3002</p><p>\u65B0\u6DFB\u52A0\u7684\u672A\u8DDF\u8E2A\u6587\u4EF6\u524D\u9762\u6709 <code>??</code> \u6807\u8BB0\uFF0C\u65B0\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u4E2D\u7684\u6587\u4EF6\u524D\u9762\u6709 <code>A</code> \u6807\u8BB0\uFF0C\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6\u524D\u9762\u6709 <code>M</code> \u6807\u8BB0\u3002</p><details class="custom-container details"><summary>\u6848\u4F8B</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status <span class="token parameter variable">-s</span>
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u72B6\u6001\u62A5\u544A\u663E\u793A: <code>README</code> \u6587\u4EF6\u5728\u5DE5\u4F5C\u533A\u5DF2\u4FEE\u6539\u4F46\u5C1A\u672A\u6682\u5B58\uFF0C\u800C <code>lib/simplegit.rb</code> \u6587\u4EF6\u5DF2\u4FEE\u6539\u4E14\u5DF2\u6682\u5B58\u3002<code>Rakefile</code> \u6587\u4EF6\u5DF2\u4FEE\u6539\uFF0C\u6682\u5B58\u540E\u53C8\u4F5C\u4E86\u4FEE\u6539\uFF0C\u56E0\u6B64\u8BE5\u6587\u4EF6\u7684\u4FEE\u6539\u4E2D\u65E2\u6709\u5DF2\u6682\u5B58\u7684\u90E8\u5206\uFF0C\u53C8\u6709\u672A\u6682\u5B58\u7684\u90E8\u5206\u3002</p></details></div><p>Git \u73B0\u5728\u53EA\u544A\u8BC9\u6211\u4EEC readme.txt \u88AB\u4FEE\u6539\u4E86\uFF0C\u6211\u4EEC\u7528 <code>git diff</code> \u8FD9\u4E2A\u547D\u4EE4\u80FD\u770B\u770B\u5177\u4F53\u4FEE\u6539\u4E86\u4EC0\u4E48\u5185\u5BB9:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span> readme.txt
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/readme.txt b/readme.txt
index 46d49bf<span class="token punctuation">..</span>9247db6 <span class="token number">100644</span>
--- a/readme.txt
+++ b/readme.txt
@@ -1,2 +1,2 @@
<span class="token parameter variable">-Git</span> is a version control system.
+Git is a distributed version control system.
 Git is <span class="token function">free</span> software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git diff</code> \u987E\u540D\u601D\u4E49\u5C31\u662F\u67E5\u770B difference\uFF0C\u663E\u793A\u7684\u683C\u5F0F\u6B63\u662F Unix \u901A\u7528\u7684 diff \u683C\u5F0F\uFF0C\u53EF\u4EE5\u4ECE\u4E0A\u9762\u7684\u547D\u4EE4\u8F93\u51FA\u770B\u5230\uFF0C\u6211\u4EEC\u5728\u7B2C\u4E00\u884C\u6DFB\u52A0\u4E86\u4E00\u4E2A distributed \u5355\u8BCD\u3002</p><p>\u77E5\u9053\u4E86\u5BF9 readme.txt \u4F5C\u4E86\u4EC0\u4E48\u4FEE\u6539\u540E\uFF0C\u518D\u628A\u5B83\u63D0\u4EA4\u5230\u4ED3\u5E93\u5C31\u653E\u5FC3\u591A\u4E86\uFF0C\u63D0\u4EA4\u4FEE\u6539\u548C\u63D0\u4EA4\u65B0\u6587\u4EF6\u662F\u4E00\u6837\u7684\u4E24\u6B65\uFF0C\u7B2C\u4E00\u6B65\u662F <code>git add</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt
<span class="token parameter variable">--no</span> output --
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u6CA1\u6709\u4EFB\u4F55\u8F93\u51FA\u3002\u5728\u6267\u884C\u7B2C\u4E8C\u6B65 <code>git commit</code> \u4E4B\u524D\uFF0C\u6211\u4EEC\u518D\u8FD0\u884C <code>git status</code> \u770B\u770B\u5F53\u524D\u4ED3\u5E93\u7684\u72B6\u6001:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

    modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git status</code> \u544A\u8BC9\u6211\u4EEC\uFF0C\u5C06\u8981\u88AB\u63D0\u4EA4\u7684\u4FEE\u6539\u5305\u62EC readme.txt\uFF0C\u4E0B\u4E00\u6B65\uFF0C\u5C31\u53EF\u4EE5\u653E\u5FC3\u5730\u63D0\u4EA4\u4E86:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add distributed&quot;</span>
<span class="token punctuation">[</span>master e475afc<span class="token punctuation">]</span> <span class="token function">add</span> distributed
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D0\u4EA4\u540E\uFF0C\u6211\u4EEC\u518D\u7528 <code>git status</code> \u547D\u4EE4\u770B\u770B\u4ED3\u5E93\u7684\u5F53\u524D\u72B6\u6001:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git \u544A\u8BC9\u6211\u4EEC\u5F53\u524D\u6CA1\u6709\u9700\u8981\u63D0\u4EA4\u7684\u4FEE\u6539\uFF0C\u800C\u4E14\uFF0C\u5DE5\u4F5C\u76EE\u5F55\u662F\u5E72\u51C0(working tree clean)\u7684\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><ul><li><p>\u8981\u968F\u65F6\u638C\u63E1\u5DE5\u4F5C\u533A\u7684\u72B6\u6001\uFF0C\u4F7F\u7528 <code>git status</code> \u547D\u4EE4\u3002</p></li><li><p>\u5982\u679C <code>git status</code> \u544A\u8BC9\u60A8\u6709\u6587\u4EF6\u88AB\u4FEE\u6539\u8FC7\uFF0C\u7528 <code>git diff</code> \u53EF\u4EE5\u67E5\u770B\u4FEE\u6539\u5185\u5BB9\u3002</p></li></ul>`,20),d=[t];function c(l,o){return n(),e("div",null,d)}const p=s(i,[["render",c],["__file","status.html.vue"]]);export{p as default};
