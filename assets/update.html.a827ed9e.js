import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,b as s,e as o,f as c,r as i}from"./app.9d9222aa.js";const l={},u=n("h2",{id:"\u672A\u542F\u52A8\u65F6\u66F4\u65B0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u672A\u542F\u52A8\u65F6\u66F4\u65B0","aria-hidden":"true"},"#"),s(" \u672A\u542F\u52A8\u65F6\u66F4\u65B0")],-1),r=n("p",null,"\u5F00\u53D1\u8005\u5728\u7BA1\u7406\u540E\u53F0\u53D1\u5E03\u65B0\u7248\u672C\u7684\u5C0F\u7A0B\u5E8F\u4E4B\u540E\uFF0C\u5982\u679C\u67D0\u4E2A\u7528\u6237\u672C\u5730\u6709\u5C0F\u7A0B\u5E8F\u7684\u5386\u53F2\u7248\u672C\uFF0C\u6B64\u65F6\u6253\u5F00\u7684\u53EF\u80FD\u8FD8\u662F\u65E7\u7248\u672C\u3002\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u4F1A\u6709\u82E5\u5E72\u4E2A\u65F6\u673A\u53BB\u68C0\u67E5\u672C\u5730\u7F13\u5B58\u7684\u5C0F\u7A0B\u5E8F\u6709\u6CA1\u6709\u66F4\u65B0\u7248\u672C\uFF0C\u5982\u679C\u6709\u5219\u4F1A\u9759\u9ED8\u66F4\u65B0\u5230\u65B0\u7248\u672C\u3002\u603B\u7684\u6765\u8BF4\uFF0C\u5F00\u53D1\u8005\u5728\u540E\u53F0\u53D1\u5E03\u65B0\u7248\u672C\u4E4B\u540E\uFF0C\u65E0\u6CD5\u7ACB\u523B\u5F71\u54CD\u5230\u6240\u6709\u73B0\u7F51\u7528\u6237\uFF0C\u4F46\u6700\u5DEE\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u5728\u53D1\u5E03\u4E4B\u540E 24 \u5C0F\u65F6\u4E4B\u5185\u4E0B\u53D1\u65B0\u7248\u672C\u4FE1\u606F\u5230\u7528\u6237\u3002\u7528\u6237\u4E0B\u6B21\u6253\u5F00\u65F6\u4F1A\u5148\u66F4\u65B0\u6700\u65B0\u7248\u672C\u518D\u6253\u5F00\u3002",-1),d=n("h2",{id:"\u542F\u52A8\u65F6\u66F4\u65B0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u542F\u52A8\u65F6\u66F4\u65B0","aria-hidden":"true"},"#"),s(" \u542F\u52A8\u65F6\u66F4\u65B0")],-1),k=n("p",null,"\u5C0F\u7A0B\u5E8F\u6BCF\u6B21\u51B7\u542F\u52A8\u65F6\uFF0C\u90FD\u4F1A\u68C0\u67E5\u662F\u5426\u6709\u66F4\u65B0\u7248\u672C\uFF0C\u5982\u679C\u53D1\u73B0\u6709\u65B0\u7248\u672C\uFF0C\u5C06\u4F1A\u5F02\u6B65\u4E0B\u8F7D\u65B0\u7248\u672C\u7684\u4EE3\u7801\u5305\uFF0C\u5E76\u540C\u65F6\u7528\u5BA2\u6237\u7AEF\u672C\u5730\u7684\u5305\u8FDB\u884C\u542F\u52A8\uFF0C\u5373\u65B0\u7248\u672C\u7684\u5C0F\u7A0B\u5E8F\u9700\u8981\u7B49\u4E0B\u4E00\u6B21\u51B7\u542F\u52A8\u624D\u4F1A\u5E94\u7528\u4E0A\u3002",-1),v={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"wx.getUpdateManager",-1),b=c(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> updateManager <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getUpdateManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onCheckForUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8BF7\u6C42\u5B8C\u65B0\u7248\u672C\u4FE1\u606F\u7684\u56DE\u8C03</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>hasUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onUpdateReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u66F4\u65B0\u63D0\u793A&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u7248\u672C\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0C\u662F\u5426\u91CD\u542F\u5E94\u7528\uFF1F&quot;</span><span class="token punctuation">,</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u65B0\u7684\u7248\u672C\u5DF2\u7ECF\u4E0B\u8F7D\u597D\uFF0C\u8C03\u7528 applyUpdate \u5E94\u7528\u65B0\u7248\u672C\u5E76\u91CD\u542F</span>
        updateManager<span class="token punctuation">.</span><span class="token function">applyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onUpdateFailed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u65B0\u7248\u672C\u4E0B\u8F7D\u5931\u8D25</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function _(h,f){const a=i("ExternalLinkIcon");return e(),p("div",null,[u,r,d,k,n("p",null,[s("\u5982\u679C\u9700\u8981\u9A6C\u4E0A\u5E94\u7528\u6700\u65B0\u7248\u672C\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),n("a",v,[m,o(a)]),s(" API \u8FDB\u884C\u5904\u7406\u3002")]),b])}const y=t(l,[["render",_],["__file","update.html.vue"]]);export{y as default};
