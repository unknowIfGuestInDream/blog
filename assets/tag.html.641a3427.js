import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as e}from"./app.c23862ec.js";const i={},t=e(`<h2 id="\u4E3A\u4EC0\u4E48\u8981\u6709-tag" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u6709-tag" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u6709 tag</h2><p>\u53D1\u5E03\u4E00\u4E2A\u7248\u672C\u65F6\uFF0C\u6211\u4EEC\u901A\u5E38\u5148\u5728\u7248\u672C\u5E93\u4E2D\u6253\u4E00\u4E2A\u6807\u7B7E (<code>tag</code>)\uFF0C\u8FD9\u6837\uFF0C\u5C31\u552F\u4E00\u786E\u5B9A\u4E86\u6253\u6807\u7B7E\u65F6\u523B\u7684\u7248\u672C\u3002\u5C06\u6765\u65E0\u8BBA\u4EC0\u4E48\u65F6\u5019\uFF0C\u53D6\u67D0\u4E2A\u6807\u7B7E\u7684\u7248\u672C\uFF0C\u5C31\u662F\u628A\u90A3\u4E2A\u6253\u6807\u7B7E\u7684\u65F6\u523B\u7684\u5386\u53F2\u7248\u672C\u53D6\u51FA\u6765\u3002\u6240\u4EE5\uFF0C\u6807\u7B7E\u4E5F\u662F\u7248\u672C\u5E93\u7684\u4E00\u4E2A\u5FEB\u7167\u3002</p><p>Git \u7684\u6807\u7B7E\u867D\u7136\u662F\u7248\u672C\u5E93\u7684\u5FEB\u7167\uFF0C\u4F46\u5176\u5B9E\u5B83\u5C31\u662F\u6307\u5411\u67D0\u4E2A <code>commit</code> \u7684\u6307\u9488(\u8DDF\u5206\u652F\u5F88\u50CF\u5BF9\u4E0D\u5BF9? \u4F46\u662F\u5206\u652F\u53EF\u4EE5\u79FB\u52A8\uFF0C\u6807\u7B7E\u4E0D\u80FD\u79FB\u52A8)\uFF0C\u6240\u4EE5\uFF0C\u521B\u5EFA\u548C\u5220\u9664\u6807\u7B7E\u90FD\u662F\u77AC\u95F4\u5B8C\u6210\u7684\u3002</p><p>Git \u6709 <code>commit</code>\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u8981\u5F15\u5165 <code>tag</code>?</p><p>\u201C\u8BF7\u628A\u4E0A\u5468\u4E00\u7684\u90A3\u4E2A\u7248\u672C\u6253\u5305\u53D1\u5E03\uFF0C<code>commit</code> \u53F7\u662F 6a5819e...\u201D</p><p>\u201C\u4E00\u4E32\u4E71\u4E03\u516B\u7CDF\u7684\u6570\u5B57\u4E0D\u597D\u627E! \u201D</p><p>\u5982\u679C\u6362\u4E00\u4E2A\u529E\u6CD5:</p><p>\u201C\u8BF7\u628A\u4E0A\u5468\u4E00\u7684\u90A3\u4E2A\u7248\u672C\u6253\u5305\u53D1\u5E03\uFF0C\u7248\u672C\u53F7\u662F <code>v1.2</code>\u201D</p><p>\u201C\u597D\u7684\uFF0C\u6309\u7167 <code>tag v1.2</code> \u67E5\u627E <code>commit</code> \u5C31\u884C! \u201D</p><p>\u6240\u4EE5\uFF0C<code>tag</code> \u5C31\u662F\u4E00\u4E2A\u8BA9\u4EBA\u5BB9\u6613\u8BB0\u4F4F\u7684\u6709\u610F\u4E49\u7684\u540D\u5B57\uFF0C\u5B83\u8DDF\u67D0\u4E2A <code>commit</code> \u7ED1\u5728\u4E00\u8D77\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u63A8\u8350\u7684\u6807\u7B7E\u89C4\u8303\u662F\u4EE5\u5C0F\u5199\u5B57\u6BCD <code>v</code> \u5F00\u5934\uFF0C\u540E\u63A5 <code>x.x</code> \u6216 <code>x.x.x</code> \u7B49\u82E5\u5E72\u4F4D\u7248\u672C\u53F7\u3002</p></div><h2 id="\u521B\u5EFA\u8F7B\u91CF\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8F7B\u91CF\u6807\u7B7E" aria-hidden="true">#</a> \u521B\u5EFA\u8F7B\u91CF\u6807\u7B7E</h2><p>\u5728 Git \u4E2D\u6253\u6807\u7B7E\u975E\u5E38\u7B80\u5355\uFF0C\u9996\u5148\uFF0C\u5207\u6362\u5230\u9700\u8981\u6253\u6807\u7B7E\u7684\u5206\u652F\u4E0A:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
* dev
  master
$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">&#39;master&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u6572\u547D\u4EE4 <code>git tag &lt;name&gt;</code> \u5C31\u53EF\u4EE5\u6253\u4E00\u4E2A\u65B0\u6807\u7B7E:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag v1.0
-- no output --
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u7528\u547D\u4EE4 <code>git tag</code> \u67E5\u770B\u6240\u6709\u6807\u7B7E:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag
v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u6807\u7B7E\u662F\u6253\u5728\u6700\u65B0\u63D0\u4EA4\u7684 <code>commit</code> \u4E0A\u7684\u3002\u6709\u65F6\u5019\uFF0C\u5982\u679C\u5FD8\u4E86\u6253\u6807\u7B7E\uFF0C\u6BD4\u5982\uFF0C\u73B0\u5728\u5DF2\u7ECF\u662F\u5468\u4E94\u4E86\uFF0C\u4F46\u5E94\u8BE5\u5728\u5468\u4E00\u6253\u7684\u6807\u7B7E\u6CA1\u6709\u6253\uFF0C\u600E\u4E48\u529E?</p><p>\u65B9\u6CD5\u662F\u627E\u5230\u5386\u53F2\u63D0\u4EA4\u7684 <code>commit id</code>\uFF0C\u7136\u540E\u6253\u4E0A\u5C31\u53EF\u4EE5\u4E86:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline --abbrev-commit
12a631b <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master, tag: v1.0, origin/master<span class="token punctuation">)</span> merged bug fix <span class="token number">101</span>
4c805e2 fix bug <span class="token number">101</span>
e1e9c68 merge with no-ff
f52c633 <span class="token function">add</span> merge
cf810e4 conflict fixed
5dc6824 <span class="token operator">&amp;</span> simple
14096d0 AND simple
b17d20e branch <span class="token builtin class-name">test</span>
d46f35e remove test.txt
b84166e <span class="token function">add</span> test.txt
519219b <span class="token function">git</span> tracks changes
e43a48b understand how stage works
1094adb append GPL
e475afc <span class="token function">add</span> distributed
eaadf4e wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u65B9\u8BF4\u8981\u5BF9 <code>add merge</code> \u8FD9\u6B21\u63D0\u4EA4\u6253\u6807\u7B7E\uFF0C\u5B83\u5BF9\u5E94\u7684 <code>commit id</code> \u662F <code>f52c633</code>\uFF0C\u6572\u5165\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag v0.9 f52c633
<span class="token parameter variable">--no</span> output --
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u7528\u547D\u4EE4 <code>git tag</code> \u67E5\u770B\u6807\u7B7E:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag
v0.9
v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u6807\u7B7E\u4E0D\u662F\u6309\u65F6\u95F4\u987A\u5E8F\u5217\u51FA\uFF0C\u800C\u662F\u6309\u5B57\u6BCD\u6392\u5E8F\u7684\u3002\u53EF\u4EE5\u7528 <code>git show &lt;tagname&gt;</code> \u67E5\u770B\u6807\u7B7E\u4FE1\u606F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> show v0.9
commit f52c63349bc3c1593499807e5c8e972b82c8f286 <span class="token punctuation">(</span>tag: v0.9<span class="token punctuation">)</span>
Author: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">18</span> <span class="token number">21</span>:56:54 <span class="token number">2018</span> +0800

    <span class="token function">add</span> merge

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/readme.txt b/readme.txt
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>v0.9</code> \u786E\u5B9E\u6253\u5728 <code>add merge</code> \u8FD9\u6B21\u63D0\u4EA4\u4E0A\u3002</p><h2 id="\u9644\u6CE8\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u9644\u6CE8\u6807\u7B7E" aria-hidden="true">#</a> \u9644\u6CE8\u6807\u7B7E</h2><p>Git \u8FD8\u53EF\u4EE5\u521B\u5EFA\u5E26\u6709\u8BF4\u660E\u7684\u6807\u7B7E\uFF0C\u7528 <code>-a</code> \u6307\u5B9A\u6807\u7B7E\u540D\uFF0C<code>-m</code> \u6307\u5B9A\u8BF4\u660E\u6587\u5B57:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag <span class="token parameter variable">-a</span> v0.1 <span class="token parameter variable">-m</span> <span class="token string">&quot;version 0.1 released&quot;</span> 1094adb
<span class="token parameter variable">--no</span> output --
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u547D\u4EE4 <code>git show &lt;tagname&gt;</code> \u53EF\u4EE5\u770B\u5230\u8BF4\u660E\u6587\u5B57:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> show v0.1
tag v0.1
Tagger: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">18</span> <span class="token number">22</span>:48:43 <span class="token number">2018</span> +0800

version <span class="token number">0.1</span> released

commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 <span class="token punctuation">(</span>tag: v0.1<span class="token punctuation">)</span>
Author: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>
Date:   Fri May <span class="token number">18</span> <span class="token number">21</span>:06:15 <span class="token number">2018</span> +0800

    append GPL

<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/readme.txt b/readme.txt
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u30D2\u30F3\u30C8</p><p>\u6807\u7B7E\u603B\u662F\u548C\u67D0\u4E2A commit \u6302\u94A9\u3002\u5982\u679C\u8FD9\u4E2A commit \u65E2\u51FA\u73B0\u5728 master \u5206\u652F\uFF0C\u53C8\u51FA\u73B0\u5728 dev \u5206\u652F\uFF0C\u90A3\u4E48\u5728\u8FD9\u4E24\u4E2A\u5206\u652F\u4E0A\u90FD\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u6807\u7B7E\u3002</p></div><h3 id="\u6DFB\u52A0\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5C0F\u7ED3" aria-hidden="true">#</a> \u6DFB\u52A0\u5C0F\u7ED3</h3><p>\u547D\u4EE4 <code>git tag &lt;tagname&gt;</code> \u7528\u4E8E\u65B0\u5EFA\u4E00\u4E2A\u6807\u7B7E\uFF0C\u9ED8\u8BA4\u4E3A <code>HEAD</code>\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A <code>commit id</code>\uFF1B</p><p>\u547D\u4EE4 <code>git tag -a &lt;tagname&gt; -m &quot;blablabla...&quot;</code> \u53EF\u4EE5\u6307\u5B9A\u6807\u7B7E\u4FE1\u606F\uFF1B</p><p>\u547D\u4EE4 <code>git tag</code> \u53EF\u4EE5\u67E5\u770B\u6240\u6709\u6807\u7B7E\u3002</p><h2 id="\u64CD\u4F5C\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u6807\u7B7E" aria-hidden="true">#</a> \u64CD\u4F5C\u6807\u7B7E</h2><p>\u5982\u679C\u6807\u7B7E\u6253\u9519\u4E86\uFF0C\u4E5F\u53EF\u4EE5\u5220\u9664:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag <span class="token parameter variable">-d</span> v0.1
Deleted tag <span class="token string">&#39;v0.1&#39;</span> <span class="token punctuation">(</span>was f15b0dd<span class="token punctuation">)</span><span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u521B\u5EFA\u7684\u6807\u7B7E\u90FD\u53EA\u5B58\u50A8\u5728\u672C\u5730\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u63A8\u9001\u5230\u8FDC\u7A0B\u3002\u6240\u4EE5\uFF0C\u6253\u9519\u7684\u6807\u7B7E\u53EF\u4EE5\u5728\u672C\u5730\u5B89\u5168\u5220\u9664\u3002</p><p>\u5982\u679C\u8981\u63A8\u9001\u67D0\u4E2A\u6807\u7B7E\u5230\u8FDC\u7A0B\uFF0C\u4F7F\u7528\u547D\u4EE4 <code>git push origin &lt;tagname&gt;</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin v1.0
Total <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
To github.com:Hope-Studio/learngit.git
 * <span class="token punctuation">[</span>new tag<span class="token punctuation">]</span>         v1.0 -<span class="token operator">&gt;</span> v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\uFF0C\u4E00\u6B21\u6027\u63A8\u9001\u5168\u90E8\u5C1A\u672A\u63A8\u9001\u5230\u8FDC\u7A0B\u7684\u672C\u5730\u6807\u7B7E:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>
Total <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
To github.com:Hope-Studio/learngit.git
 * <span class="token punctuation">[</span>new tag<span class="token punctuation">]</span>         v0.9 -<span class="token operator">&gt;</span> v0.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6807\u7B7E\u5DF2\u7ECF\u63A8\u9001\u5230\u8FDC\u7A0B\uFF0C\u8981\u5220\u9664\u8FDC\u7A0B\u6807\u7B7E\u5C31\u9EBB\u70E6\u4E00\u70B9\uFF0C\u5148\u4ECE\u672C\u5730\u5220\u9664:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag <span class="token parameter variable">-d</span> v0.9
Deleted tag <span class="token string">&#39;v0.9&#39;</span> <span class="token punctuation">(</span>was f52c633<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u4ECE\u8FDC\u7A0B\u5220\u9664\u3002\u5220\u9664\u547D\u4EE4\u4E5F\u662F push\uFF0C\u4F46\u662F\u683C\u5F0F\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin :refs/tags/v0.9
To github.com:Hope-Studio/learngit.git
 - <span class="token punctuation">[</span>deleted<span class="token punctuation">]</span>         v0.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u770B\u770B\u662F\u5426\u771F\u7684\u4ECE\u8FDC\u7A0B\u5E93\u5220\u9664\u4E86\u6807\u7B7E\uFF0C\u53EF\u4EE5\u767B\u9646 GitHub \u67E5\u770B\u3002</p><h3 id="\u7BA1\u7406\u6807\u7B7E\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u6807\u7B7E\u5C0F\u7ED3" aria-hidden="true">#</a> \u7BA1\u7406\u6807\u7B7E\u5C0F\u7ED3</h3><ul><li><p>\u547D\u4EE4 <code>git push origin &lt;tagname&gt;</code> \u53EF\u4EE5\u63A8\u9001\u4E00\u4E2A\u672C\u5730\u6807\u7B7E\uFF1B</p></li><li><p>\u547D\u4EE4 <code>git push origin --tags</code> \u53EF\u4EE5\u63A8\u9001\u5168\u90E8\u672A\u63A8\u9001\u8FC7\u7684\u672C\u5730\u6807\u7B7E\uFF1B</p></li><li><p>\u547D\u4EE4 <code>git tag -d &lt;tagname&gt;</code> \u53EF\u4EE5\u5220\u9664\u4E00\u4E2A\u672C\u5730\u6807\u7B7E\uFF1B</p></li><li><p>\u547D\u4EE4 <code>git push origin :refs/tags/&lt;tagname&gt;</code> \u53EF\u4EE5\u5220\u9664\u4E00\u4E2A\u8FDC\u7A0B\u6807\u7B7E\u3002</p></li></ul>`,53),c=[t];function d(l,o){return a(),s("div",null,c)}const u=n(i,[["render",d],["__file","tag.html.vue"]]);export{u as default};
