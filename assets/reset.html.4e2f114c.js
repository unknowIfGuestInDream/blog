import{_ as n,a,b as s}from"./git2.a8ae4666.js";import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,f as d}from"./app.9d9222aa.js";const c={},o=d(`<p>\u4FEE\u6539 readme.txt \u6587\u4EF6\u5982\u4E0B:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software distributed under the GPL.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5C1D\u8BD5\u63D0\u4EA4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt
<span class="token comment"># nothing displayed</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;append GPL&quot;</span>
<span class="token punctuation">[</span>master 1094adb<span class="token punctuation">]</span> append GPL
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u50CF\u8FD9\u6837\u4E0D\u65AD\u5BF9\u6587\u4EF6\u8FDB\u884C\u4FEE\u6539\uFF0C\u7136\u540E\u4E0D\u65AD\u63D0\u4EA4\u4FEE\u6539\u5230\u7248\u672C\u5E93\u91CC\uFF0C\u6BCF\u5F53\u6587\u4EF6\u4FEE\u6539\u5230\u4E00\u5B9A\u7A0B\u5EA6\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u201C\u4FDD\u5B58\u4E00\u4E2A\u5FEB\u7167\u201D\uFF0C\u8FD9\u4E2A\u5FEB\u7167\u5728 Git \u4E2D\u88AB\u79F0\u4E3A <code>commit</code>\u3002\u5982\u679C\u628A\u6587\u4EF6\u6539\u4E71\u4E86\uFF0C\u6216\u8005\u8BEF\u5220\u4E86\u6587\u4EF6\uFF0C\u8FD8\u53EF\u4EE5\u4ECE\u6700\u8FD1\u7684\u4E00\u4E2A <code>commit</code> \u6062\u590D\uFF0C\u7136\u540E\u7EE7\u7EED\u5DE5\u4F5C\uFF0C\u800C\u4E0D\u662F\u628A\u51E0\u4E2A\u6708\u7684\u5DE5\u4F5C\u6210\u679C\u5168\u90E8\u4E22\u5931\u3002</p><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u56DE\u987E\u4E00\u4E0B <code>readme.txt</code> \u6587\u4EF6\u4E00\u5171\u6709\u51E0\u4E2A\u7248\u672C\u88AB\u63D0\u4EA4\u5230 Git \u4ED3\u5E93\u91CC\u4E86:</p><ul><li>\u7248\u672C 1: wrote a readme file</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a version control system.
Git is free software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7248\u672C 2: add distributed</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7248\u672C 3: append GPL</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software distributed under the GPL.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u7248\u672C\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7248\u672C\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u7248\u672C\u4FE1\u606F</h2><p>\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u7528 <code>git log</code> \u547D\u4EE4\u53EF\u4EE5\u544A\u8BC9\u6211\u4EEC\u5386\u53F2\u8BB0\u5F55\uFF0C\u5728 Git \u4E2D\uFF0C\u6211\u4EEC\u67E5\u770B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log
commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">18</span> <span class="token number">21</span>:06:15 <span class="token number">2018</span> +0800

    append GPL

commit e475afc93c209a690c39c13a46716e8fa000c366
Author: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">18</span> <span class="token number">21</span>:03:36 <span class="token number">2018</span> +0800

    <span class="token function">add</span> distributed

commit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0
Author: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">18</span> <span class="token number">20</span>:59:18 <span class="token number">2018</span> +0800

    wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git log</code> \u547D\u4EE4\u663E\u793A\u4ECE\u6700\u8FD1\u5230\u6700\u8FDC\u7684\u63D0\u4EA4\u65E5\u5FD7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 3 \u6B21\u63D0\u4EA4\uFF0C\u6700\u8FD1\u7684\u4E00\u6B21\u662F <code>append GPL</code>\uFF0C\u4E0A\u4E00\u6B21\u662F <code>add distributed</code>\uFF0C\u6700\u65E9\u7684\u4E00\u6B21\u662F <code>wrote a readme file</code>\u3002</p><p>\u5982\u679C\u5ACC\u8F93\u51FA\u4FE1\u606F\u592A\u591A\uFF0C\u770B\u5F97\u773C\u82B1\u7F2D\u4E71\u7684\uFF0C\u53EF\u4EE5\u8BD5\u8BD5\u52A0\u4E0A <code>--pretty=oneline</code> \u53C2\u6570:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
1094adb7b9b3807259d8cb349e7df1d4d6477073 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> append GPL
e475afc93c209a690c39c13a46716e8fa000c366 <span class="token function">add</span> distributed
eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0 wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u5927\u4E32\u7C7B\u4F3C <code>1094adb...</code> \u7684\u662F commit id (\u7248\u672C\u53F7)\uFF0C\u548C SVN \u4E0D\u4E00\u6837\uFF0CGit \u7684 commit id \u4E0D\u662F 1\uFF0C2\uFF0C3\u2026\u2026 \u9012\u589E\u7684\u6570\u5B57\uFF0C\u800C\u662F\u4E00\u4E2A SHA1 \u8BA1\u7B97\u51FA\u6765\u7684\u4E00\u4E2A\u975E\u5E38\u5927\u7684\u6570\u5B57\uFF0C\u7528\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF0C\u4E3A\u4EC0\u4E48 commit id \u9700\u8981\u7528\u8FD9\u4E48\u4E00\u5927\u4E32\u6570\u5B57\u8868\u793A\u5462? \u56E0\u4E3A Git \u662F\u5206\u5E03\u5F0F\u7684\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF0C\u591A\u4EBA\u5728\u540C\u4E00\u4E2A\u7248\u672C\u5E93\u91CC\u5DE5\u4F5C\uFF0C\u5982\u679C\u5927\u5BB6\u90FD\u7528 1\uFF0C2\uFF0C3\u2026\u2026 \u4F5C\u4E3A\u7248\u672C\u53F7\uFF0C\u90A3\u80AF\u5B9A\u5C31\u51B2\u7A81\u4E86\u3002</p><p>\u6BCF\u63D0\u4EA4\u4E00\u4E2A\u65B0\u7248\u672C\uFF0C\u5B9E\u9645\u4E0A Git \u5C31\u4F1A\u628A\u5B83\u4EEC\u81EA\u52A8\u4E32\u6210\u4E00\u6761\u65F6\u95F4\u7EBF\u3002\u5982\u679C\u4F7F\u7528\u53EF\u89C6\u5316\u5DE5\u5177\u67E5\u770B Git \u5386\u53F2\uFF0C\u5C31\u53EF\u4EE5\u66F4\u6E05\u695A\u5730\u770B\u5230\u63D0\u4EA4\u5386\u53F2\u7684\u65F6\u95F4\u7EBF:</p><p><img src="`+n+`" alt="Git \u65F6\u95F4\u7EBF" loading="lazy"></p><div class="custom-container tip"><p class="custom-container-title">\u66F4\u591A\u9009\u9879</p><p>\u5173\u4E8E <code>git log</code> \u7684\u66F4\u591A\u9009\u9879\uFF0C\u8BF7\u89C1 <a href="/file/git/progit_v2.1.45.pdf">ProGit \u4E66\u7C4D</a> \u7684 P43\u3002</p></div><h2 id="\u56DE\u9000\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u56DE\u9000\u7248\u672C" aria-hidden="true">#</a> \u56DE\u9000\u7248\u672C</h2><p>\u597D\u4E86\uFF0C\u73B0\u5728\u51C6\u5907\u628A readme.txt \u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C\uFF0C\u4E5F\u5C31\u662F <code>add distributed</code> \u7684\u90A3\u4E2A\u7248\u672C\uFF0C\u600E\u4E48\u505A\u5462?</p><p>\u9996\u5148\uFF0CGit \u5FC5\u987B\u77E5\u9053\u5F53\u524D\u7248\u672C\u662F\u54EA\u4E2A\u7248\u672C\uFF0C\u5728 Git \u4E2D\uFF0C\u7528 <code>HEAD</code> \u8868\u793A\u5F53\u524D\u7248\u672C\uFF0C\u4E5F\u5C31\u662F\u6700\u65B0\u7684\u63D0\u4EA4 <code>1094adb...</code> (\u6CE8\u610F\u6211\u7684\u63D0\u4EA4 ID \u548C\u60A8\u7684\u80AF\u5B9A\u4E0D\u4E00\u6837)\uFF0C\u4E0A\u4E00\u4E2A\u7248\u672C\u5C31\u662F <code>HEAD^</code>\uFF0C\u4E0A\u4E0A\u4E00\u4E2A\u7248\u672C\u5C31\u662F <code>HEAD^^</code>\uFF0C\u5F53\u7136\u5F80\u4E0A 100 \u4E2A\u7248\u672C\u5199 100 \u4E2A <code>^</code> \u6BD4\u8F83\u5BB9\u6613\u6570\u4E0D\u8FC7\u6765\uFF0C\u6240\u4EE5\u5199\u6210 <code>HEAD~100</code>\u3002</p><p>\u73B0\u5728\uFF0C\u8981\u628A\u5F53\u524D\u7248\u672C <code>append GPL</code> \u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C <code>add distributed</code>\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>git reset</code> \u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^
HEAD is now at e475afc <span class="token function">add</span> distributed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u770B readme.txt \u7684\u5185\u5BB9\u662F\u4E0D\u662F\u7248\u672C add distributed:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt
Git is a distributed version control system.
Git is <span class="token function">free</span> software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u679C\u7136\u88AB\u8FD8\u539F\u4E86\u3002</p><p>\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C wrote a readme file\uFF0C\u4E0D\u8FC7\u4E14\u6162\uFF0C\u7136\u6211\u4EEC\u7528 <code>git log</code> \u518D\u770B\u770B\u73B0\u5728\u7248\u672C\u5E93\u7684\u72B6\u6001:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log
commit e475afc93c209a690c39c13a46716e8fa000c366 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">18</span> <span class="token number">21</span>:03:36 <span class="token number">2018</span> +0800

    <span class="token function">add</span> distributed

commit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0
Author: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">18</span> <span class="token number">20</span>:59:18 <span class="token number">2018</span> +0800

    wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u65B0\u7684\u90A3\u4E2A\u7248\u672C append GPL \u5DF2\u7ECF\u770B\u4E0D\u5230\u4E86! \u80BF\u4E48\u529E?</p><p>\u529E\u6CD5\u5176\u5B9E\u8FD8\u662F\u6709\u7684\uFF0C\u53EA\u8981\u4E0A\u9762\u7684\u547D\u4EE4\u884C\u7A97\u53E3\u8FD8\u6CA1\u6709\u88AB\u5173\u6389\uFF0C\u60A8\u5C31\u53EF\u4EE5\u987A\u7740\u5F80\u4E0A\u627E\u554A\u627E\u554A\uFF0C\u627E\u5230\u90A3\u4E2A append GPL \u7684 commit id \u662F 1094adb...\uFF0C\u4E8E\u662F\u5C31\u53EF\u4EE5\u6307\u5B9A\u56DE\u5230\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 1094a
HEAD is now at 83b0afe append GPL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7248\u672C\u53F7\u6CA1\u5FC5\u8981\u5199\u5168\uFF0C\u524D\u51E0\u4F4D\u5C31\u53EF\u4EE5\u4E86\uFF0CGit \u4F1A\u81EA\u52A8\u53BB\u627E\u3002\u5F53\u7136\u4E5F\u4E0D\u80FD\u53EA\u5199\u524D\u4E00\u4E24\u4F4D\uFF0C\u56E0\u4E3A Git \u53EF\u80FD\u4F1A\u627E\u5230\u591A\u4E2A\u7248\u672C\u53F7\uFF0C\u5C31\u65E0\u6CD5\u786E\u5B9A\u662F\u54EA\u4E00\u4E2A\u4E86\u3002</p><p>\u518D\u5C0F\u5FC3\u7FFC\u7FFC\u5730\u770B\u770B readme.txt \u7684\u5185\u5BB9:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt
Git is a distributed version control system.
Git is <span class="token function">free</span> software distributed under the GPL.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u679C\u7136\uFF0C\u6211\u80E1\u6C49\u4E09\u53C8\u56DE\u6765\u4E86\u3002</p><p>Git \u7684\u7248\u672C\u56DE\u9000\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u56E0\u4E3A Git \u5728\u5185\u90E8\u6709\u4E2A\u6307\u5411\u5F53\u524D\u7248\u672C\u7684 <code>HEAD</code> \u6307\u9488\uFF0C\u5F53\u60A8\u56DE\u9000\u7248\u672C\u7684\u65F6\u5019\uFF0CGit \u4EC5\u4EC5\u662F\u628A <code>HEAD</code> \u4ECE\u6307\u5411 append GPL:</p><p><img src="`+a+'" alt="\u793A\u4F8B\u56FE4" loading="lazy"></p><p>\u6539\u4E3A\u6307\u5411 <code>add distributed</code>:</p><p><img src="'+s+`" alt="\u793A\u4F8B\u56FE5" loading="lazy"></p><p>\u7136\u540E\u987A\u4FBF\u628A\u5DE5\u4F5C\u533A\u7684\u6587\u4EF6\u66F4\u65B0\u4E86\u3002\u6240\u4EE5\u60A8\u8BA9 <code>HEAD</code> \u6307\u5411\u54EA\u4E2A\u7248\u672C\u53F7\uFF0C\u60A8\u5C31\u628A\u5F53\u524D\u7248\u672C\u5B9A\u4F4D\u5728\u54EA\u3002</p><h2 id="\u627E\u56DE-commit-id" tabindex="-1"><a class="header-anchor" href="#\u627E\u56DE-commit-id" aria-hidden="true">#</a> \u627E\u56DE commit id</h2><p>\u5982\u679C\u56DE\u9000\u5230\u4E86\u67D0\u4E2A\u7248\u672C\u627E\u4E0D\u5230\u65B0\u7248\u672C\u7684 <code>commit id</code>\uFF0C\u5728 Git \u4E2D\uFF0C\u5C31\u65E0\u6CD5\u7528 <code>$ git reset --hard HEAD^</code> \u56DE\u9000\u3002</p><p>\u6240\u4EE5 Git \u63D0\u4F9B\u4E86\u4E00\u4E2A\u547D\u4EE4 <code>git reflog</code> \u7528\u6765\u8BB0\u5F55\u60A8\u7684\u6BCF\u4E00\u6B21\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reflog
e475afc HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: reset: moving to HEAD^
1094adb <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit: append GPL
e475afc HEAD@<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>: commit: <span class="token function">add</span> distributed
eaadf4e HEAD@<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reflog
e475afc HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: reset: moving to HEAD^
1094adb <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit: append GPL
e475afc HEAD@<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>: commit: <span class="token function">add</span> distributed
eaadf4e HEAD@<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EC8\u4E8E\u8212\u4E86\u53E3\u6C14\uFF0C\u4ECE\u8F93\u51FA\u53EF\u77E5\uFF0Cappend GPL \u7684 commit id \u662F 1094adb\uFF0C\u73B0\u5728\uFF0C\u60A8\u53C8\u53EF\u4EE5\u4E58\u5750\u65F6\u5149\u673A\u56DE\u5230\u672A\u6765\u4E86\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><ul><li><p><code>HEAD</code> \u6307\u5411\u7684\u7248\u672C\u5C31\u662F\u5F53\u524D\u7248\u672C\uFF0C\u56E0\u6B64\uFF0CGit \u5141\u8BB8\u6211\u4EEC\u5728\u7248\u672C\u7684\u5386\u53F2\u4E4B\u95F4\u7A7F\u68AD\uFF0C\u4F7F\u7528\u547D\u4EE4 <code>git reset --hard commit_id</code>\u3002</p></li><li><p>\u7528 <code>git log</code> \u53EF\u4EE5\u67E5\u770B\u63D0\u4EA4\u5386\u53F2\uFF0C\u4EE5\u4FBF\u786E\u5B9A\u8981\u56DE\u9000\u5230\u54EA\u4E2A\u7248\u672C\u3002</p></li><li><p>\u7528 <code>git reflog</code> \u67E5\u770B\u547D\u4EE4\u5386\u53F2\uFF0C\u4EE5\u4FBF\u786E\u5B9A\u8981\u56DE\u5230\u672A\u6765\u7684\u54EA\u4E2A\u7248\u672C\u3002</p></li></ul>`,52),l=[o];function p(r,u){return i(),t("div",null,l)}const k=e(c,[["render",p],["__file","reset.html.vue"]]);export{k as default};
