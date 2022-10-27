import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,f as a}from"./app.9d9222aa.js";const i={},t=a(`<h2 id="\u7BA1\u7406\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u4FEE\u6539" aria-hidden="true">#</a> \u7BA1\u7406\u4FEE\u6539</h2><p>Git \u6BD4\u5176\u4ED6\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u8BBE\u8BA1\u5F97\u4F18\u79C0\uFF0C\u56E0\u4E3A Git \u8DDF\u8E2A\u5E76\u7BA1\u7406\u7684\u662F\u4FEE\u6539\uFF0C\u800C\u975E\u6587\u4EF6\u3002</p><p>\u60A8\u4F1A\u95EE\uFF0C\u4EC0\u4E48\u662F\u4FEE\u6539? \u6BD4\u5982\u60A8\u65B0\u589E\u4E86\u4E00\u884C\uFF0C\u8FD9\u5C31\u662F\u4E00\u4E2A\u4FEE\u6539\uFF0C\u5220\u9664\u4E86\u4E00\u884C\uFF0C\u4E5F\u662F\u4E00\u4E2A\u4FEE\u6539\uFF0C\u66F4\u6539\u4E86\u67D0\u4E9B\u5B57\u7B26\uFF0C\u4E5F\u662F\u4E00\u4E2A\u4FEE\u6539\uFF0C\u5220\u4E86\u4E00\u4E9B\u53C8\u52A0\u4E86\u4E00\u4E9B\uFF0C\u4E5F\u662F\u4E00\u4E2A\u4FEE\u6539\uFF0C\u751A\u81F3\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u4EF6\uFF0C\u4E5F\u7B97\u4E00\u4E2A\u4FEE\u6539\u3002</p><p>\u4E3A\u4EC0\u4E48\u8BF4 Git \u7BA1\u7406\u7684\u662F\u4FEE\u6539\uFF0C\u800C\u4E0D\u662F\u6587\u4EF6\u5462? \u6211\u4EEC\u8FD8\u662F\u505A\u5B9E\u9A8C\u3002\u7B2C\u4E00\u6B65\uFF0C\u5BF9 readme.txt \u505A\u4E00\u4E2A\u4FEE\u6539\uFF0C\u6BD4\u5982\u52A0\u4E00\u884C\u5185\u5BB9:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt
Git is a distributed version control system.
Git is <span class="token function">free</span> software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u6DFB\u52A0:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt
<span class="token comment"># nothing</span>
$ <span class="token function">git</span> status
  On branch master
  Changes to be committed:
    <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u518D\u4FEE\u6539 readme.txt:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt
Git is a distributed version control system.
Git is <span class="token function">free</span> software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D0\u4EA4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;git tracks changes&quot;</span>
<span class="token punctuation">[</span>master 519219b<span class="token punctuation">]</span> <span class="token function">git</span> tracks changes
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D0\u4EA4\u540E\uFF0C\u518D\u770B\u770B\u72B6\u6001:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    modified:   readme.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u600E\u4E48\u7B2C\u4E8C\u6B21\u7684\u4FEE\u6539\u6CA1\u6709\u88AB\u63D0\u4EA4? \u6211\u4EEC\u56DE\u987E\u4E00\u4E0B\u64CD\u4F5C\u8FC7\u7A0B:</p><p>\u7B2C\u4E00\u6B21\u4FEE\u6539 \u2192 <code>git add</code> \u2192 \u7B2C\u4E8C\u6B21\u4FEE\u6539 \u2192 <code>git commit</code></p><p>\u60A8\u770B\uFF0C\u6211\u4EEC\u524D\u9762\u8BB2\u4E86\uFF0CGit \u7BA1\u7406\u7684\u662F\u4FEE\u6539\uFF0C\u5F53\u60A8\u7528 <code>git add</code> \u547D\u4EE4\u540E\uFF0C\u5728\u5DE5\u4F5C\u533A\u7684\u7B2C\u4E00\u6B21\u4FEE\u6539\u88AB\u653E\u5165\u6682\u5B58\u533A\uFF0C\u51C6\u5907\u63D0\u4EA4\uFF0C\u4F46\u662F\uFF0C\u5728\u5DE5\u4F5C\u533A\u7684\u7B2C\u4E8C\u6B21\u4FEE\u6539\u5E76\u6CA1\u6709\u653E\u5165\u6682\u5B58\u533A\uFF0C\u6240\u4EE5\uFF0C<code>git commit</code> \u53EA\u8D1F\u8D23\u628A\u6682\u5B58\u533A\u7684\u4FEE\u6539\u63D0\u4EA4\u4E86\uFF0C\u4E5F\u5C31\u662F\u7B2C\u4E00\u6B21\u7684\u4FEE\u6539\u88AB\u63D0\u4EA4\u4E86\uFF0C\u7B2C\u4E8C\u6B21\u7684\u4FEE\u6539\u4E0D\u4F1A\u88AB\u63D0\u4EA4\u3002</p><p>\u63D0\u4EA4\u540E\uFF0C\u7528 <code>git diff HEAD -- readme.txt</code> \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5DE5\u4F5C\u533A\u548C\u7248\u672C\u5E93\u91CC\u9762\u6700\u65B0\u7248\u672C\u7684\u533A\u522B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span> HEAD -- readme.txt
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/readme.txt b/readme.txt
index 76d770f<span class="token punctuation">..</span>a9c5755 <span class="token number">100644</span>
--- a/readme.txt
+++ b/readme.txt
@@ -1,4 +1,4 @@
 Git is a distributed version control system.
 Git is <span class="token function">free</span> software distributed under the GPL.
 Git has a mutable index called stage.
<span class="token parameter variable">-Git</span> tracks changes.
+Git tracks changes of files.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u89C1\uFF0C\u7B2C\u4E8C\u6B21\u4FEE\u6539\u786E\u5B9E\u6CA1\u6709\u88AB\u63D0\u4EA4\u3002</p><p>\u90A3\u600E\u4E48\u63D0\u4EA4\u7B2C\u4E8C\u6B21\u4FEE\u6539\u5462? \u60A8\u53EF\u4EE5\u7EE7\u7EED <code>git add</code> \u518D <code>git commit</code>\uFF0C\u4E5F\u53EF\u4EE5\u522B\u7740\u6025\u63D0\u4EA4\u7B2C\u4E00\u6B21\u4FEE\u6539\uFF0C\u5148 <code>git add</code> \u7B2C\u4E8C\u6B21\u4FEE\u6539\uFF0C\u518D <code>git commit</code>\uFF0C\u5C31\u76F8\u5F53\u4E8E\u628A\u4E24\u6B21\u4FEE\u6539\u5408\u5E76\u540E\u4E00\u5757\u63D0\u4EA4\u4E86:</p><p>\u7B2C\u4E00\u6B21\u4FEE\u6539 \u2192 <code>git add</code> \u2192 \u7B2C\u4E8C\u6B21\u4FEE\u6539 \u2192 <code>git add</code> \u2192 <code>git commit</code></p><p>\u597D\uFF0C\u73B0\u5728\uFF0C\u628A\u7B2C\u4E8C\u6B21\u4FEE\u6539\u63D0\u4EA4\u4E86\uFF0C\u7136\u540E\u5F00\u59CB\u5C0F\u7ED3\u3002</p><h3 id="\u7BA1\u7406\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u5C0F\u7ED3" aria-hidden="true">#</a> \u7BA1\u7406\u5C0F\u7ED3</h3><p>\u73B0\u5728\uFF0C\u60A8\u53C8\u7406\u89E3\u4E86 Git \u662F\u5982\u4F55\u8DDF\u8E2A\u4FEE\u6539\u7684\uFF0C\u6BCF\u6B21\u4FEE\u6539\uFF0C\u5982\u679C\u4E0D\u7528 <code>git add</code> \u5230\u6682\u5B58\u533A\uFF0C\u90A3\u5C31\u4E0D\u4F1A\u52A0\u5165\u5230 <code>commit</code> \u4E2D\u3002</p><h2 id="\u64A4\u6D88\u5BF9\u6587\u4EF6\u7684\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u64A4\u6D88\u5BF9\u6587\u4EF6\u7684\u4FEE\u6539" aria-hidden="true">#</a> \u64A4\u6D88\u5BF9\u6587\u4EF6\u7684\u4FEE\u6539</h2><p>\u81EA\u7136\uFF0C\u60A8\u662F\u4E0D\u4F1A\u72AF\u9519\u7684\u3002\u4E0D\u8FC7\u73B0\u5728\u662F\u51CC\u6668\u4E24\u70B9\uFF0C\u60A8\u6B63\u5728\u8D76\u4E00\u4EFD\u5DE5\u4F5C\u62A5\u544A\uFF0C\u60A8\u5728 readme.txt \u4E2D\u6DFB\u52A0\u4E86\u4E00\u884C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt
Git is a distributed version control system.
Git is <span class="token function">free</span> software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
My stupid boss still prefers SVN.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u60A8\u51C6\u5907\u63D0\u4EA4\u524D\uFF0C\u4E00\u676F\u5496\u5561\u8D77\u4E86\u4F5C\u7528\uFF0C\u60A8\u731B\u7136\u53D1\u73B0\u4E86 <code>&#39;stupid boss&#39;</code> \u53EF\u80FD\u4F1A\u8BA9\u60A8\u4E22\u6389\u8FD9\u4E2A\u6708\u7684\u5956\u91D1!</p><p>\u65E2\u7136\u9519\u8BEF\u53D1\u73B0\u5F97\u5F88\u53CA\u65F6\uFF0C\u5C31\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u7EA0\u6B63\u5B83\u3002\u60A8\u53EF\u4EE5\u5220\u6389\u6700\u540E\u4E00\u884C\uFF0C\u624B\u52A8\u628A\u6587\u4EF6\u6062\u590D\u5230\u4E0A\u4E00\u4E2A\u7248\u672C\u7684\u72B6\u6001\u3002\u5982\u679C\u7528 <code>git status</code> \u67E5\u770B\u4E00\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    modified:   readme.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u53EF\u4EE5\u53D1\u73B0\uFF0CGit \u4F1A\u544A\u8BC9\u60A8\uFF0C<code>git checkout -- &lt;file&gt;</code> \u53EF\u4EE5\u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -- readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u547D\u4EE4 <code>git checkout -- readme.txt</code> \u610F\u601D\u5C31\u662F\uFF0C\u628A readme.txt \u6587\u4EF6\u5728\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\u5168\u90E8\u64A4\u9500\uFF0C\u8FD9\u91CC\u6709\u4E24\u79CD\u60C5\u51B5:</p><p>\u4E00\u79CD\u662F readme.txt \u81EA\u4FEE\u6539\u540E\u8FD8\u6CA1\u6709\u88AB\u653E\u5230\u6682\u5B58\u533A\uFF0C\u73B0\u5728\uFF0C\u64A4\u9500\u4FEE\u6539\u5C31\u56DE\u5230\u548C\u7248\u672C\u5E93\u4E00\u6A21\u4E00\u6837\u7684\u72B6\u6001\uFF1B</p><p>\u4E00\u79CD\u662F readme.txt \u5DF2\u7ECF\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u540E\uFF0C\u53C8\u4F5C\u4E86\u4FEE\u6539\uFF0C\u73B0\u5728\uFF0C\u64A4\u9500\u4FEE\u6539\u5C31\u56DE\u5230\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u540E\u7684\u72B6\u6001\u3002</p><p>\u603B\u4E4B\uFF0C\u5C31\u662F\u8BA9\u8FD9\u4E2A\u6587\u4EF6\u56DE\u5230\u6700\u8FD1\u4E00\u6B21 <code>git commit</code> \u6216 <code>git add</code> \u65F6\u7684\u72B6\u6001\u3002</p><p>\u73B0\u5728\uFF0C\u770B\u770B readme.txt \u7684\u6587\u4EF6\u5185\u5BB9:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt
Git is a distributed version control system.
Git is <span class="token function">free</span> software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u4EF6\u5185\u5BB9\u679C\u7136\u590D\u539F\u4E86\u3002</p><p><code>git checkout -- file</code> \u547D\u4EE4\u4E2D\u7684 <code>--</code> \u5F88\u91CD\u8981\uFF0C\u6CA1\u6709 <code>--</code>\uFF0C\u5C31\u53D8\u6210\u4E86\u201C\u5207\u6362\u5230\u53E6\u4E00\u4E2A\u5206\u652F\u201D\u7684\u547D\u4EE4\uFF0C\u6211\u4EEC\u5728\u540E\u9762\u7684\u5206\u652F\u7BA1\u7406\u4E2D\u4F1A\u518D\u6B21\u9047\u5230 <code>git checkout</code> \u547D\u4EE4\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BF7\u52A1\u5FC5\u8BB0\u5F97 <code>git checkout -- &lt;file&gt;</code> \u662F\u4E00\u4E2A\u5371\u9669\u7684\u547D\u4EE4\u3002\u60A8\u5BF9\u90A3\u4E2A\u6587\u4EF6\u5728\u672C\u5730\u7684\u4EFB\u4F55\u4FEE\u6539\u90FD\u4F1A\u6D88\u5931\u2014\u2014Git \u4F1A\u7528\u6700\u8FD1\u63D0\u4EA4\u7684\u7248\u672C\u8986\u76D6\u6389\u5B83\u3002</p><p>\u9664\u975E\u60A8\u786E\u5B9E\u6E05\u695A\u4E0D\u60F3\u8981\u5BF9\u90A3\u4E2A\u6587\u4EF6\u7684\u672C\u5730\u4FEE\u6539\u4E86\uFF0C\u5426\u5219\u8BF7\u4E0D\u8981\u4F7F\u7528\u8FD9\u4E2A\u547D\u4EE4\u3002</p></div><h2 id="\u53D6\u6D88\u6682\u5B58\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u6682\u5B58\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u53D6\u6D88\u6682\u5B58\u7684\u6587\u4EF6</h2><p>\u73B0\u5728\u5047\u5B9A\u662F\u51CC\u6668 3 \u70B9\uFF0C\u60A8\u4E0D\u4F46\u5199\u4E86\u4E00\u4E9B\u80E1\u8BDD\uFF0C\u8FD8 <code>git add</code> \u5230\u6682\u5B58\u533A\u4E86:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt
Git is a distributed version control system.
Git is <span class="token function">free</span> software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
My stupid boss still prefers SVN.

<span class="token function">git</span> <span class="token function">add</span> readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E86\u5E78\u7684\u662F\uFF0C\u5728 <code>commit</code> \u4E4B\u524D\uFF0C\u60A8\u53D1\u73B0\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002\u7528 <code>git status</code> \u67E5\u770B\u4E00\u4E0B\uFF0C\u4FEE\u6539\u53EA\u662F\u6DFB\u52A0\u5230\u4E86\u6682\u5B58\u533A\uFF0C\u8FD8\u6CA1\u6709\u63D0\u4EA4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

    modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git \u540C\u6837\u544A\u8BC9\u6211\u4EEC\uFF0C\u7528\u547D\u4EE4 <code>git reset HEAD &lt;file&gt;</code> \u53EF\u4EE5\u628A\u6682\u5B58\u533A\u7684\u4FEE\u6539\u64A4\u9500\u6389(unstage)\uFF0C\u91CD\u65B0\u653E\u56DE\u5DE5\u4F5C\u533A:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reset HEAD readme.txt
Unstaged changes after reset:
M    readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git reset</code> \u547D\u4EE4\u65E2\u53EF\u4EE5\u56DE\u9000\u7248\u672C\uFF0C\u4E5F\u53EF\u4EE5\u628A\u6682\u5B58\u533A\u7684\u4FEE\u6539\u56DE\u9000\u5230\u5DE5\u4F5C\u533A\u3002\u5F53\u6211\u4EEC\u7528 <code>HEAD</code> \u65F6\uFF0C\u8868\u793A\u5F53\u524D\u7684\u6307\u9488(\u6700\u65B0\u7684\u7248\u672C)\u3002</p><p>\u518D\u7528 <code>git status</code> \u67E5\u770B\u4E00\u4E0B\uFF0C\u73B0\u5728\u6682\u5B58\u533A\u662F\u5E72\u51C0\u7684\uFF0C\u5DE5\u4F5C\u533A\u6709\u4FEE\u6539:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u8BB0\u5F97\u5982\u4F55\u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\u5417?</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -- readme.txt

$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6574\u4E2A\u4E16\u754C\u7EC8\u4E8E\u6E05\u9759\u4E86!</p><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u90A3\u4E48\u5982\u679C\u60A8\u60F3\u8981\u4E22\u5F03\u5DE5\u4F5C\u533A\u548C\u6682\u5B58\u533A\u5168\u90E8\u66F4\u6539\u5462? \u4E0D\u8981\u5FD8\u4E86 <code>HEAD</code> \u5C31\u662F\u5F53\u524D\u6307\u9488\uFF0C\u6240\u4EE5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C31\u662F\u4E22\u5F03\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A\u7684\u5168\u90E8\u6587\u4EF6\u5566\u3002</p></div><p>\u73B0\u5728\uFF0C\u5047\u8BBE\u60A8\u4E0D\u4F46\u6539\u9519\u4E86\u4E1C\u897F\uFF0C\u8FD8\u4ECE\u6682\u5B58\u533A\u63D0\u4EA4\u5230\u4E86\u7248\u672C\u5E93\uFF0C\u600E\u4E48\u529E\u5462? \u8FD8\u8BB0\u5F97\u7248\u672C\u56DE\u9000\u4E00\u8282\u5417? \u53EF\u4EE5\u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C\u3002\u4E0D\u8FC7\uFF0C\u8FD9\u662F\u6709\u6761\u4EF6\u7684\uFF0C\u5C31\u662F\u60A8\u8FD8\u6CA1\u6709\u628A\u81EA\u5DF1\u7684\u672C\u5730\u7248\u672C\u5E93\u63A8\u9001\u5230\u8FDC\u7A0B\u3002\u8FD8\u8BB0\u5F97 Git \u662F\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u5417? \u6211\u4EEC\u540E\u9762\u4F1A\u8BB2\u5230\u8FDC\u7A0B\u7248\u672C\u5E93\uFF0C\u4E00\u65E6\u60A8\u628A <code>stupid boss</code> \u63D0\u4EA4\u63A8\u9001\u5230\u8FDC\u7A0B\u7248\u672C\u5E93\uFF0C\u60A8\u5C31\u771F\u7684\u60E8\u4E86\u2026\u2026</p><h3 id="\u64A4\u9500\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u5C0F\u7ED3" aria-hidden="true">#</a> \u64A4\u9500\u5C0F\u7ED3</h3><p>\u573A\u666F 1: \u5F53\u60A8\u6539\u4E71\u4E86\u5DE5\u4F5C\u533A\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u60F3\u76F4\u63A5\u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\u65F6\uFF0C\u7528\u547D\u4EE4 <code>git checkout -- file</code>\u3002</p><p>\u573A\u666F 2: \u5F53\u60A8\u4E0D\u4F46\u6539\u4E71\u4E86\u5DE5\u4F5C\u533A\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u8FD8\u6DFB\u52A0\u5230\u4E86\u6682\u5B58\u533A\u65F6\uFF0C\u60F3\u4E22\u5F03\u4FEE\u6539\uFF0C\u5206\u4E24\u6B65\uFF0C\u7B2C\u4E00\u6B65\u7528\u547D\u4EE4 <code>git reset HEAD &lt;file&gt;</code>\uFF0C\u5C31\u56DE\u5230\u4E86\u573A\u666F 1\uFF0C\u7B2C\u4E8C\u6B65\u6309\u573A\u666F 1 \u64CD\u4F5C\u3002</p><p>\u573A\u666F 3: \u5DF2\u7ECF\u63D0\u4EA4\u4E86\u4E0D\u5408\u9002\u7684\u4FEE\u6539\u5230\u7248\u672C\u5E93\u65F6\uFF0C\u60F3\u8981\u64A4\u9500\u672C\u6B21\u63D0\u4EA4\uFF0C\u53C2\u8003\u7248\u672C\u56DE\u9000\u4E00\u8282\uFF0C\u4E0D\u8FC7\u524D\u63D0\u662F\u6CA1\u6709\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93\u3002</p><hr><h2 id="\u5220\u9664\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a> \u5220\u9664\u6587\u4EF6</h2><h3 id="\u5982\u4F55\u5220\u9664\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a> \u5982\u4F55\u5220\u9664\u6587\u4EF6</h3><p>\u5728 Git \u4E2D\uFF0C\u5220\u9664\u4E5F\u662F\u4E00\u4E2A\u4FEE\u6539\u64CD\u4F5C\uFF0C\u6211\u4EEC\u5B9E\u6218\u4E00\u4E0B\uFF0C\u5148\u6DFB\u52A0\u4E00\u4E2A\u65B0\u6587\u4EF6 test.txt \u5230 Git \u5E76\u4E14\u63D0\u4EA4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> test.txt

$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add test.txt&quot;</span>
<span class="token punctuation">[</span>master b84166e<span class="token punctuation">]</span> <span class="token function">add</span> test.txt
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u60A8\u901A\u5E38\u76F4\u63A5\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u628A\u6CA1\u7528\u7684\u6587\u4EF6\u5220\u4E86\uFF0C\u6216\u8005\u7528 <code>rm</code> \u547D\u4EE4\u5220\u4E86:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65F6\u5019\uFF0CGit \u77E5\u9053\u60A8\u5220\u9664\u4E86\u6587\u4EF6\uFF0C\u56E0\u6B64\uFF0C\u5DE5\u4F5C\u533A\u548C\u7248\u672C\u5E93\u5C31\u4E0D\u4E00\u81F4\u4E86\uFF0C<code>git status</code> \u547D\u4EE4\u4F1A\u7ACB\u523B\u544A\u8BC9\u60A8\u54EA\u4E9B\u6587\u4EF6\u88AB\u5220\u9664\u4E86:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add/rm &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    deleted:    test.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u60A8\u6709\u4E24\u4E2A\u9009\u62E9\uFF0C\u4E00\u662F\u786E\u5B9E\u8981\u4ECE\u7248\u672C\u5E93\u4E2D\u5220\u9664\u8BE5\u6587\u4EF6\uFF0C\u90A3\u5C31\u7528\u547D\u4EE4 <code>git rm</code> \u5220\u6389\uFF0C\u5E76\u4E14 <code>git commit</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">rm</span> test.txt
<span class="token function">rm</span> <span class="token string">&#39;test.txt&#39;</span>

$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;remove test.txt&quot;</span>
<span class="token punctuation">[</span>master d46f35e<span class="token punctuation">]</span> remove test.txt
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 delete mode <span class="token number">100644</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u6587\u4EF6\u5C31\u4ECE\u7248\u672C\u5E93\u4E2D\u88AB\u5220\u9664\u4E86\u3002</p><h3 id="\u64A4\u9500\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u5220\u9664" aria-hidden="true">#</a> \u64A4\u9500\u5220\u9664</h3><p>\u53E6\u4E00\u79CD\u60C5\u51B5\u662F\u5220\u9519\u4E86\uFF0C\u56E0\u4E3A\u7248\u672C\u5E93\u91CC\u8FD8\u6709\u5462\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5F88\u8F7B\u677E\u5730\u628A\u8BEF\u5220\u7684\u6587\u4EF6\u6062\u590D\u5230\u6700\u65B0\u7248\u672C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -- test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>git checkout</code> \u5176\u5B9E\u662F\u7528\u7248\u672C\u5E93\u91CC\u7684\u7248\u672C\u66FF\u6362\u5DE5\u4F5C\u533A\u7684\u7248\u672C\uFF0C\u65E0\u8BBA\u5DE5\u4F5C\u533A\u662F\u4FEE\u6539\u8FD8\u662F\u5220\u9664\uFF0C\u90FD\u53EF\u4EE5\u201C\u4E00\u952E\u8FD8\u539F\u201D\u3002</p><h3 id="\u5220\u9664\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5C0F\u7ED3" aria-hidden="true">#</a> \u5220\u9664\u5C0F\u7ED3</h3><p>\u547D\u4EE4 <code>git rm</code> \u7528\u4E8E\u5220\u9664\u4E00\u4E2A\u6587\u4EF6\u3002\u5982\u679C\u4E00\u4E2A\u6587\u4EF6\u5DF2\u7ECF\u88AB\u63D0\u4EA4\u5230\u7248\u672C\u5E93\uFF0C\u90A3\u4E48\u60A8\u6C38\u8FDC\u4E0D\u7528\u62C5\u5FC3\u8BEF\u5220\uFF0C\u4F46\u662F\u8981\u5C0F\u5FC3\uFF0C\u60A8\u53EA\u80FD\u6062\u590D\u6587\u4EF6\u5230\u6700\u65B0\u7248\u672C\uFF0C\u60A8\u4F1A\u4E22\u5931\u6700\u8FD1\u4E00\u6B21\u63D0\u4EA4\u540E\u60A8\u4FEE\u6539\u7684\u5185\u5BB9\u3002</p>`,78),d=[t];function c(l,o){return n(),e("div",null,d)}const p=s(i,[["render",c],["__file","change.html.vue"]]);export{p as default};
