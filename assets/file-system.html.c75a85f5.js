import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,d as i,a as n,b as t,e,f as a,r as l}from"./app.6a7adab4.js";const d={},u=a(`<p>\u6587\u4EF6\u7CFB\u7EDF\u662F\u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u7684\u4E00\u5957\u4EE5\u5C0F\u7A0B\u5E8F\u548C\u7528\u6237\u7EF4\u5EA6\u9694\u79BB\u7684\u5B58\u50A8\u4EE5\u53CA\u4E00\u5957\u76F8\u5E94\u7684\u7BA1\u7406\u63A5\u53E3\u3002\u901A\u8FC7 <code>wx.getFileSystemManager()</code> \u53EF\u4EE5\u83B7\u53D6\u5230\u5168\u5C40\u552F\u4E00\u7684\u6587\u4EF6\u7CFB\u7EDF\u7BA1\u7406\u5668\uFF0C\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\u7684\u7BA1\u7406\u64CD\u4F5C\u901A\u8FC7 FileSystemManager \u6765\u8C03\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getFileSystemManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6587\u4EF6\u4E3B\u8981\u5206\u4E3A\u4E24\u5927\u7C7B:</p><ul><li>\u4EE3\u7801\u5305\u6587\u4EF6: \u4EE3\u7801\u5305\u6587\u4EF6\u6307\u7684\u662F\u5728\u9879\u76EE\u76EE\u5F55\u4E2D\u6DFB\u52A0\u7684\u6587\u4EF6\u3002</li><li>\u672C\u5730\u6587\u4EF6: \u901A\u8FC7\u8C03\u7528\u63A5\u53E3\u672C\u5730\u4EA7\u751F\uFF0C\u6216\u901A\u8FC7\u7F51\u7EDC\u4E0B\u8F7D\u4E0B\u6765\uFF0C\u5B58\u50A8\u5230\u672C\u5730\u7684\u6587\u4EF6\u3002</li></ul>`,4),r=a('<p>\u5176\u4E2D\u672C\u5730\u6587\u4EF6\u53C8\u5206\u4E3A\u4E09\u79CD:</p><ul><li><p>\u672C\u5730\u4E34\u65F6\u6587\u4EF6: \u4E34\u65F6\u4EA7\u751F\uFF0C\u968F\u65F6\u4F1A\u88AB\u56DE\u6536\u7684\u6587\u4EF6\u3002\u4E0D\u9650\u5236\u5B58\u50A8\u5927\u5C0F\u3002</p></li><li><p>\u672C\u5730\u7F13\u5B58\u6587\u4EF6: \u5C0F\u7A0B\u5E8F\u901A\u8FC7\u63A5\u53E3\u628A\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u7F13\u5B58\u540E\u4EA7\u751F\u7684\u6587\u4EF6\uFF0C\u4E0D\u80FD\u81EA\u5B9A\u4E49\u76EE\u5F55\u548C\u6587\u4EF6\u540D\u3002\u8DDF\u672C\u5730\u7528\u6237\u6587\u4EF6\u5171\u8BA1\uFF0C\u666E\u901A\u5C0F\u7A0B\u5E8F\u6700\u591A\u53EF\u5B58\u50A8 10MB\uFF0C\u6E38\u620F\u7C7B\u76EE\u7684\u5C0F\u7A0B\u5E8F\u6700\u591A\u53EF\u5B58\u50A8 50MB\u3002</p></li><li><p>\u672C\u5730\u7528\u6237\u6587\u4EF6: \u5C0F\u7A0B\u5E8F\u901A\u8FC7\u63A5\u53E3\u628A\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u7F13\u5B58\u540E\u4EA7\u751F\u7684\u6587\u4EF6\uFF0C\u5141\u8BB8\u81EA\u5B9A\u4E49\u76EE\u5F55\u548C\u6587\u4EF6\u540D\u3002\u8DDF\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u5171\u8BA1\uFF0C\u666E\u901A\u5C0F\u7A0B\u5E8F\u6700\u591A\u53EF\u5B58\u50A8 10MB\uFF0C\u6E38\u620F\u7C7B\u76EE\u7684\u5C0F\u7A0B\u5E8F\u6700\u591A\u53EF\u5B58\u50A8 50MB\u3002</p></li></ul><h2 id="\u4EE3\u7801\u5305\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5305\u6587\u4EF6" aria-hidden="true">#</a> \u4EE3\u7801\u5305\u6587\u4EF6</h2><p>\u7531\u4E8E\u4EE3\u7801\u5305\u6587\u4EF6\u5927\u5C0F\u9650\u5236\uFF0C\u4EE3\u7801\u5305\u6587\u4EF6\u9002\u7528\u4E8E\u653E\u7F6E\u9996\u6B21\u52A0\u8F7D\u65F6\u9700\u8981\u7684\u6587\u4EF6\u3002</p><h3 id="\u8BBF\u95EE\u4EE3\u7801\u5305\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u4EE3\u7801\u5305\u6587\u4EF6" aria-hidden="true">#</a> \u8BBF\u95EE\u4EE3\u7801\u5305\u6587\u4EF6</h3><p>\u4EE3\u7801\u5305\u6587\u4EF6\u7684\u8BBF\u95EE\u65B9\u5F0F\u662F\u4ECE\u9879\u76EE\u6839\u76EE\u5F55\u5F00\u59CB\u5199\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4E0D\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\u7684\u5199\u6CD5\u3002</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>\u8FD9\u4E2A\u548C Node.js \u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u8BF7\u7279\u522B\u6CE8\u610F\u4E00\u4E0B\u3002</p><p>\u5982: <code>/a/b/c</code>\u3001<code>a/b/c</code> \u90FD\u662F\u5408\u6CD5\u7684\uFF0C<code>./a/b/c</code> <code>../a/b/c</code> \u5219\u4E0D\u5408\u6CD5\u3002</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/code-package.ea949c8d.png" alt="path" loading="lazy"></p></div><h3 id="\u4FEE\u6539\u4EE3\u7801\u5305\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u4EE3\u7801\u5305\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u4EE3\u7801\u5305\u6587\u4EF6</h3><p>\u4EE3\u7801\u5305\u5185\u7684\u6587\u4EF6\u65E0\u6CD5\u5728\u8FD0\u884C\u540E\u52A8\u6001\u4FEE\u6539\u6216\u5220\u9664\uFF0C\u4FEE\u6539\u4EE3\u7801\u5305\u6587\u4EF6\u9700\u8981\u91CD\u65B0\u53D1\u5E03\u7248\u672C\u3002</p><h3 id="\u672C\u5730\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6587\u4EF6" aria-hidden="true">#</a> \u672C\u5730\u6587\u4EF6</h3><p>\u672C\u5730\u6587\u4EF6\u6307\u7684\u662F\u5C0F\u7A0B\u5E8F\u88AB\u7528\u6237\u6DFB\u52A0\u5230\u624B\u673A\u540E\uFF0C\u4F1A\u6709\u4E00\u5757\u72EC\u7ACB\u7684\u6587\u4EF6\u5B58\u50A8\u533A\u57DF\uFF0C\u4EE5\u7528\u6237\u7EF4\u5EA6\u9694\u79BB\u3002\u5373\u540C\u4E00\u53F0\u624B\u673A\uFF0C\u6BCF\u4E2A\u5FAE\u4FE1\u7528\u6237\u4E0D\u80FD\u8BBF\u95EE\u5230\u5176\u4ED6\u767B\u5F55\u7528\u6237\u7684\u6587\u4EF6\uFF0C\u540C\u4E00\u4E2A\u7528\u6237\u4E0D\u540C appId \u4E4B\u95F4\u7684\u6587\u4EF6\u4E5F\u4E0D\u80FD\u4E92\u76F8\u8BBF\u95EE\u3002</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/file-sandbox.9ef4d15a.png" alt="\u672C\u5730\u6587\u4EF6\u6C99\u76D2.png" loading="lazy"></p><p>\u672C\u5730\u6587\u4EF6\u7684\u6587\u4EF6\u8DEF\u5F84\u5747\u4E3A\u4EE5\u4E0B\u683C\u5F0F:</p>',13),k=n("div",null,[n("p",null,[n("code",{"v-pre":""},"{{\u534F\u8BAE\u540D}}://\u6587\u4EF6\u8DEF\u5F84")])],-1),h=a(`<blockquote><p>\u5176\u4E2D\uFF0C\u534F\u8BAE\u540D\u5728 iOS/Android \u5BA2\u6237\u7AEF\u4E3A <code>&quot;wxfile&quot;</code>\uFF0C\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E0A\u4E3A <code>&quot;http&quot;</code>\uFF0C\u5F00\u53D1\u8005\u65E0\u9700\u5173\u6CE8\u8FD9\u4E2A\u5DEE\u5F02\uFF0C\u4E5F\u4E0D\u5E94\u5728\u4EE3\u7801\u4E2D\u53BB\u786C\u7F16\u7801\u5B8C\u6574\u6587\u4EF6\u8DEF\u5F84\u3002</p></blockquote><h3 id="\u672C\u5730\u4E34\u65F6\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u4E34\u65F6\u6587\u4EF6" aria-hidden="true">#</a> \u672C\u5730\u4E34\u65F6\u6587\u4EF6</h3><p>\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u53EA\u80FD\u901A\u8FC7\u8C03\u7528\u7279\u5B9A\u63A5\u53E3\u4EA7\u751F\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5199\u5165\u5185\u5BB9\u3002\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u4EA7\u751F\u540E\uFF0C\u4EC5\u5728\u5F53\u524D\u751F\u547D\u5468\u671F\u5185\u6709\u6548\uFF0C\u91CD\u542F\u4E4B\u540E\u5373\u4E0D\u53EF\u7528\u3002\u56E0\u6B64\uFF0C\u4E0D\u53EF\u628A\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u8DEF\u5F84\u5B58\u50A8\u8D77\u6765\u4E0B\u6B21\u4F7F\u7528\u3002\u5982\u679C\u9700\u8981\u4E0B\u6B21\u5728\u4F7F\u7528\uFF0C\u53EF\u901A\u8FC7 <code>FileSystemManager.saveFile()</code> \u6216 <code>FileSystemManager.copyFile()</code> \u63A5\u53E3\u628A\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u8F6C\u6362\u6210\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u6216\u672C\u5730\u7528\u6237\u6587\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> tempFilePaths <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">;</span> <span class="token comment">// tempFilePaths \u7684\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u8DEF\u5F84</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m={id:"\u672C\u5730\u7F13\u5B58\u6587\u4EF6",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#\u672C\u5730\u7F13\u5B58\u6587\u4EF6","aria-hidden":"true"},"#",-1),g=a(`<p>\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u53EA\u80FD\u901A\u8FC7\u8C03\u7528\u7279\u5B9A\u63A5\u53E3\u4EA7\u751F\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5199\u5165\u5185\u5BB9\u3002\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u4EA7\u751F\u540E\uFF0C\u91CD\u542F\u4E4B\u540E\u4ECD\u53EF\u7528\u3002\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u53EA\u80FD\u901A\u8FC7 <code>FileSystemManager.saveFile()</code> \u63A5\u53E3\u5C06\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u4FDD\u5B58\u83B7\u5F97\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">tempFilePath</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4F20\u5165\u4E00\u4E2A\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u8DEF\u5F84</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>savedFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// res.savedFilePath \u4E3A\u4E00\u4E2A\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u8DEF\u5F84</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u662F\u6700\u521D\u7684\u8BBE\u8BA1\uFF0C1.7.0 \u7248\u672C\u5F00\u59CB\uFF0C\u63D0\u4F9B\u4E86\u529F\u80FD\u66F4\u5B8C\u6574\u7684\u672C\u5730\u7528\u6237\u6587\u4EF6\uFF0C\u53EF\u4EE5\u5B8C\u5168\u8986\u76D6\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u7684\u529F\u80FD\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u517C\u5BB9\u4F4E\u4E8E 1.7.0 \u7248\u672C\uFF0C\u53EF\u4EE5\u4E0D\u4F7F\u7528\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u3002</p></div>`,3),b={id:"\u672C\u5730\u7528\u6237\u6587\u4EF6",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#\u672C\u5730\u7528\u6237\u6587\u4EF6","aria-hidden":"true"},"#",-1),_=a('<blockquote><p>\u4ECE 1.7.0 \u7248\u672C\u5F00\u59CB\u65B0\u589E</p></blockquote><p>\u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7528\u6237\u6587\u4EF6\u76EE\u5F55\uFF0C\u6709\u5B8C\u5168\u81EA\u7531\u7684\u8BFB\u5199\u6743\u9650\u3002\u901A\u8FC7 <code>wx.env.USER_DATA_PATH</code> \u53EF\u4EE5\u83B7\u53D6\u5230\u8FD9\u4E2A\u76EE\u5F55\u7684\u8DEF\u5F84\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5728\u672C\u5730\u7528\u6237\u6587\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6 hello.txt\uFF0C\u5199\u5165\u5185\u5BB9 &quot;hello, world&quot;</span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getFileSystemManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nfs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wx<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">USER_DATA_PATH</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/hello.txt</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token string">&quot;hello, world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BFB\u5199\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u5199\u6743\u9650" aria-hidden="true">#</a> \u8BFB\u5199\u6743\u9650</h4><table><thead><tr><th>\u63A5\u53E3\u3001\u7EC4\u4EF6</th><th>\u8BFB</th><th>\u5199</th></tr></thead><tbody><tr><td>\u4EE3\u7801\u5305\u6587\u4EF6</td><td>\u6709</td><td>\u65E0</td></tr><tr><td>\u672C\u5730\u4E34\u65F6\u6587\u4EF6</td><td>\u6709</td><td>\u65E0</td></tr><tr><td>\u672C\u5730\u7F13\u5B58\u6587\u4EF6</td><td>\u6709</td><td>\u65E0</td></tr><tr><td>\u672C\u5730\u7528\u6237\u6587\u4EF6</td><td>\u6709</td><td>\u6709</td></tr></tbody></table><h3 id="\u6E05\u7406\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7406\u7B56\u7565" aria-hidden="true">#</a> \u6E05\u7406\u7B56\u7565</h3><ul><li>\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u53EA\u4FDD\u8BC1\u5728\u5C0F\u7A0B\u5E8F\u5F53\u524D\u751F\u547D\u5468\u671F\u5185\uFF0C\u4E00\u65E6\u5C0F\u7A0B\u5E8F\u88AB\u5173\u95ED\u5C31\u53EF\u80FD\u88AB\u6E05\u7406\uFF0C\u5373\u4E0B\u6B21\u51B7\u542F\u52A8\u4E0D\u4FDD\u8BC1\u53EF\u7528\u3002</li><li>\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u548C\u672C\u5730\u7528\u6237\u6587\u4EF6\u7684\u6E05\u7406\u65F6\u673A\u8DDF\u4EE3\u7801\u5305\u4E00\u6837\uFF0C\u53EA\u6709\u5728\u4EE3\u7801\u5305\u88AB\u6E05\u7406\u7684\u65F6\u4F1A\u88AB\u6E05\u7406\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>\u6240\u4EE5\u8BF4\u672C\u5730\u7528\u6237\u6587\u4EF6\u662F\u5341\u5206\u4FDD\u9669\u7684\uFF0C\u672C\u5730\u7528\u6237\u6587\u4EF6\u4E00\u5B9A\u548C\u5C0F\u7A0B\u5E8F\u6587\u4EF6\u4E00\u8D77\u6D88\u5931\u3002</p><p>\u6CE8: \u5982\u679C\u7528\u6237\u592A\u957F\u65F6\u95F4\u4E0D\u4F7F\u7528\u5C0F\u7A0B\u5E8F\u6216\u8005\u624B\u673A\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u5C0F\u7A0B\u5E8F\u4EE3\u7801\u5305\u4E5F\u662F\u53EF\u80FD\u88AB\u6740\u6389\u7684\u3002\u8FD9\u6837\u7528\u6237\u672C\u5730\u7684\u6240\u6709\u6570\u636E\u5C31\u4F1A\u4E00\u8D77\u4E22\u5931\u3002\u7528\u6237\u518D\u6B21\u6253\u5F00\u5C0F\u7A0B\u5E8F\u4F1A\u91CD\u65B0\u4E0B\u8F7D\u5C0F\u7A0B\u5E8F\u4EE3\u7801\u5305\u5E76\u8FDB\u5165\u521D\u59CB\u5316\u6D41\u7A0B\u3002</p></div>',8);function x(y,q){const s=l("Badge");return o(),c("div",null,[u,i(" more "),r,k,h,n("h3",m,[v,t(" \u672C\u5730\u7F13\u5B58\u6587\u4EF6 "),e(s,{text:"\u65E0\u9700\u4F7F\u7528",type:"grey"})]),g,n("h3",b,[f,t(" \u672C\u5730\u7528\u6237\u6587\u4EF6 "),e(s,{text:"\u91CD\u8981",type:"error"})]),_])}const j=p(d,[["render",x],["__file","file-system.html.vue"]]);export{j as default};
