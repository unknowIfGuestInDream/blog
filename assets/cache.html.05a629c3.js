import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as o,a as n,b as a,e,d as p,f as i,r as l}from"./app.c23862ec.js";const u={},r=n("p",null,"\u8FD9\u4E2A Action \u5141\u8BB8\u60A8\u7F13\u5B58\u4F9D\u8D56\u9879\u548C\u6784\u5EFA\u8F93\u51FA\u5185\u5BB9\u4EE5\u7F29\u77ED Workflow \u6267\u884C\u65F6\u95F4\u3002",-1),d=n("p",null,"\u65E5\u5E38\u6700\u591A\u4F7F\u7528\u7684\u5C31\u662F\u7F13\u5B58\u4F9D\u8D56\u9879\uFF0C\u5728\u6BCF\u4E2A\u5DE5\u4F5C\u6D41\u7A0B\u4E2D\uFF0C\u5C06\u5B89\u88C5\u540E\u7684\u4F9D\u8D56\u901A\u8FC7\u5B89\u88C5\u540E\u751F\u6210\u7684\u4F9D\u8D56\u7248\u672C\u6587\u4EF6\u7684\u54C8\u5E0C\u503C\u8FDB\u884C\u7F13\u5B58\u3002",-1),h=n("p",null,"\u5F53\u524D\u5DE5\u4F5C\u6D41\u7A0B\u7684\u7248\u672C\u6587\u4EF6\u54C8\u5E0C\u503C\u4E0E\u5386\u53F2\u7F13\u5B58\u4E2D\u7684\u67D0\u4E00\u9879\u5B8C\u5168\u76F8\u540C\u65F6\uFF0C\u76F4\u63A5\u8F7D\u5165\u8FD9\u4E9B\u4F9D\u8D56\u9879\u7F13\u5B58\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u514D\u53BB\u5B89\u88C5\u6B65\u9AA4\u3002",-1),k={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"\u7F13\u5B58\u4F9D\u8D56",-1),v={href:"https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"\u914D\u7F6E\u9879",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u9879","aria-hidden":"true"},"#"),a(" \u914D\u7F6E\u9879")],-1),y=n("h3",{id:"path",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#path","aria-hidden":"true"},"#"),a(" path")],-1),_=n("p",null,"\u8981\u7F13\u5B58\u548C\u8FD8\u539F\u7684\u6587\u4EF6\uFF0C\u76EE\u5F55\u548C\u901A\u914D\u7B26\u6A21\u5F0F\u7684\u5217\u8868\u3002",-1),f={class:"custom-container info"},g=n("p",{class:"custom-container-title"},"Info",-1),x={href:"https://github.com/actions/toolkit/tree/main/packages/glob",target:"_blank",rel:"noopener noreferrer"},w=i(`<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3><p>\u7528\u4E8E\u4FDD\u5B58\u7F13\u5B58\u4E0E\u8FD8\u539F\u7F13\u5B58\u7684\u7684\u5BC6\u94A5</p><h3 id="restore-keys" tabindex="-1"><a class="header-anchor" href="#restore-keys" aria-hidden="true">#</a> restore-keys</h3><p>\u5F53 key \u6CA1\u6709\u547D\u4E2D\u7F13\u5B58\u662F\u7528\u4E8E\u6062\u590D\u7F13\u5B58\u952E\u503C\u7684\u6709\u5E8F\u5217\u8868</p><h2 id="\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a> \u8F93\u51FA</h2><p><code>cache-hit</code>: \u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u660E\u662F\u5426\u627E\u5230\u4E0E\u8BE5\u952E\u5B8C\u5168\u5339\u914D\u7684\u503C</p><h2 id="\u7F13\u5B58\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u8303\u56F4" aria-hidden="true">#</a> \u7F13\u5B58\u8303\u56F4</h2><p>\u7F13\u5B58\u7684\u4F5C\u7528\u57DF\u4E3A\u7279\u5B9A\u7684\u952E\u548C\u5206\u652F\u3002\u9ED8\u8BA4\u5206\u652F\u7F13\u5B58\u53EF\u7528\u4E8E\u5176\u4ED6\u5206\u652F\u3002</p><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><p>Yarn:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
  <span class="token comment"># \u4F7F\u7528\u6B64 id \u83B7\u5F97 \`cache-hit\`</span>
  <span class="token comment"># (\`steps.yarn-cache.outputs.cache-hit != &#39;true&#39;\`)</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> node_modules/
    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      \${{ runner.os }}-yarn-</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
  <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
  <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u4E00\u4E2A\u7F13\u5B58\u952E" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u7F13\u5B58\u952E" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u7F13\u5B58\u952E</h2><p>\u7F13\u5B58\u952E\u53EF\u4EE5\u5305\u62EC GitHub Actions \u652F\u6301\u7684\u4EFB\u4F55\u4E0A\u4E0B\u6587\uFF0C\u51FD\u6570\uFF0C\u6587\u5B57\u548C\u8FD0\u7B97\u7B26\u3002</p><p>\u4F8B\u5982\uFF0C\u4F7F\u7528 <code>hashFiles</code> \u529F\u80FD\u53EF\u8BA9\u60A8\u5728\u4F9D\u5B58\u5173\u7CFB\u66F4\u6539\u65F6\u521B\u5EFA\u65B0\u7684\u7F13\u5B58\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
  <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      node_modules/</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528 cache-hit \u8F93\u51FA\uFF0C\u5F53\u5BF9\u5E94\u952E\u547D\u4E2D\u7279\u5B9A\u7F13\u5B58\u540E\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u540E\u7EED\u6B65\u9AA4 (\u4F8B\u5982\uFF0C\u5B89\u88C5\u6216\u6784\u5EFA) \u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
  <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
  <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F13\u5B58\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u9650\u5236" aria-hidden="true">#</a> \u7F13\u5B58\u9650\u5236</h2><p>\u4E00\u4E2A\u5B58\u50A8\u5E93\u6700\u591A\u53EF\u4EE5\u6709 5GB \u7684\u7F13\u5B58\u3002\u8FBE\u5230 5GB \u9650\u5236\u540E\uFF0C\u5C06\u6839\u636E\u4E0A\u6B21\u8BBF\u95EE\u7F13\u5B58\u7684\u65F6\u95F4\u9A71\u9010\u8F83\u65E9\u7684\u7F13\u5B58\u3002\u8FC7\u53BB\u672A\u8BBF\u95EE\u7684\u7F13\u5B58\u4E5F\u5C06\u88AB\u81EA\u52A8\u5220\u9664\u3002</p><h2 id="\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4ED3\u5E93" aria-hidden="true">#</a> \u4ED3\u5E93</h2>`,20),B={href:"https://github.com/actions/cache",target:"_blank",rel:"noopener noreferrer"};function I(N,V){const s=l("ExternalLinkIcon");return c(),o("div",null,[r,d,h,n("div",k,[m,n("p",null,[a("\u5173\u4E8E\u7F13\u5B58\u4F9D\u8D56\u7684\u6587\u6863\uFF0C\u8BE6\u89C1 "),n("a",v,[a("\u7F13\u5B58\u4F9D\u8D56\u9879\u4EE5\u52A0\u5FEB\u5DE5\u4F5C\u6D41\u7A0B"),e(s)]),a("\u3002")])]),p(" more "),b,y,_,n("div",f,[g,n("p",null,[a("\u652F\u6301\u7684 glob \u6A21\u5F0F\uFF0C\u8BF7\u53C2\u89C1 "),n("a",x,[a("@actions/glob"),e(s)]),a("\u3002")])]),w,n("p",null,[n("a",B,[a("https://github.com/actions/cache"),e(s)])])])}const F=t(u,[["render",I],["__file","cache.html.vue"]]);export{F as default};
