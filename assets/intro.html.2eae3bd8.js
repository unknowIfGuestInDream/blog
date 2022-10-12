import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as d,a,b as n,e as s,w as t,d as u,f as r,r as o}from"./app.cad6791d.js";const m={},k=a("p",null,"\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u6846\u67B6\u7684\u76EE\u6807\u662F\u901A\u8FC7\u5C3D\u53EF\u80FD\u7B80\u5355\u3001\u9AD8\u6548\u7684\u65B9\u5F0F\u8BA9\u5F00\u53D1\u8005\u53EF\u4EE5\u5728\u5FAE\u4FE1\u4E2D\u5F00\u53D1\u5177\u6709\u539F\u751F APP \u4F53\u9A8C\u7684\u670D\u52A1\u3002",-1),v=a("strong",null,"\u903B\u8F91\u5C42",-1),h=a("strong",null,"\u89C6\u56FE\u5C42",-1),_={id:"\u54CD\u5E94\u7684\u6570\u636E\u7ED1\u5B9A",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#\u54CD\u5E94\u7684\u6570\u636E\u7ED1\u5B9A","aria-hidden":"true"},"#",-1),b=a("p",null,"\u6846\u67B6\u7684\u6838\u5FC3\u662F\u4E00\u4E2A\u54CD\u5E94\u7684\u6570\u636E\u7ED1\u5B9A\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u8BA9\u6570\u636E\u4E0E\u89C6\u56FE\u975E\u5E38\u7B80\u5355\u5730\u4FDD\u6301\u540C\u6B65\u3002\u5F53\u505A\u6570\u636E\u4FEE\u6539\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u5728\u903B\u8F91\u5C42\u4FEE\u6539\u6570\u636E\uFF0C\u89C6\u56FE\u5C42\u5C31\u4F1A\u505A\u76F8\u5E94\u7684\u66F4\u65B0\u3002",-1),f={href:"https://developers.weixin.qq.com/s/l0gLEKmv6gZa",target:"_blank",rel:"noopener noreferrer"},x=r(`<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- This is our View --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> Hello {{name}}! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Click me! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// This is our App Service.</span>
<span class="token comment">// This is our data.</span>
<span class="token keyword">const</span> helloData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;WeChat&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Register a Page.</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> helloData<span class="token punctuation">,</span>
  <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// sent data change to view</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;MINA&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u5F00\u53D1\u8005\u901A\u8FC7\u6846\u67B6\u5C06\u903B\u8F91\u5C42\u6570\u636E\u4E2D\u7684 <code>name</code> \u4E0E\u89C6\u56FE\u5C42\u7684 <code>name</code> \u8FDB\u884C\u4E86\u7ED1\u5B9A\uFF0C\u6240\u4EE5\u5728\u9875\u9762\u4E00\u6253\u5F00\u7684\u65F6\u5019\u4F1A\u663E\u793A <code>Hello WeChat!</code>\uFF1B</li><li>\u5F53\u70B9\u51FB\u6309\u94AE\u7684\u65F6\u5019\uFF0C\u89C6\u56FE\u5C42\u4F1A\u53D1\u9001 <code>changeName</code> \u7684\u4E8B\u4EF6\u7ED9\u903B\u8F91\u5C42\uFF0C\u903B\u8F91\u5C42\u627E\u5230\u5E76\u6267\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF1B</li><li>\u56DE\u8C03\u51FD\u6570\u89E6\u53D1\u540E\uFF0C\u903B\u8F91\u5C42\u6267\u884C <code>setData</code> \u7684\u64CD\u4F5C\uFF0C\u5C06 <code>data</code> \u4E2D\u7684 <code>name</code> \u4ECE <code>WeChat</code> \u53D8\u4E3A <code>MINA</code>\uFF0C\u56E0\u4E3A\u8BE5\u6570\u636E\u548C\u89C6\u56FE\u5C42\u5DF2\u7ECF\u7ED1\u5B9A\u4E86\uFF0C\u4ECE\u800C\u89C6\u56FE\u5C42\u4F1A\u81EA\u52A8\u6539\u53D8\u4E3A <code>Hello MINA!</code>\u3002</li></ol><h2 id="\u9875\u9762\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u7BA1\u7406" aria-hidden="true">#</a> \u9875\u9762\u7BA1\u7406</h2>`,4),w=a("strong",null,"\u6846\u67B6",-1),j=a("strong",null,"\u6846\u67B6",-1),N=a("strong",null,"\u6846\u67B6",-1),q=a("h2",{id:"\u57FA\u7840\u7EC4\u4EF6",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u57FA\u7840\u7EC4\u4EF6","aria-hidden":"true"},"#"),n(" \u57FA\u7840\u7EC4\u4EF6")],-1),y=a("strong",null,"\u6846\u67B6",-1),A=a("h2",{id:"\u4E30\u5BCC\u7684-api",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u4E30\u5BCC\u7684-api","aria-hidden":"true"},"#"),n(" \u4E30\u5BCC\u7684 API")],-1),C=a("strong",null,"\u6846\u67B6",-1);function I(L,P){const e=o("RouterLink"),p=o("Badge"),c=o("ExternalLinkIcon");return l(),d("div",null,[k,a("p",null,[n("\u6574\u4E2A\u5C0F\u7A0B\u5E8F\u6846\u67B6\u7CFB\u7EDF\u5206\u4E3A\u4E24\u90E8\u5206: "),s(e,{to:"/ja/code/mini-app/guide/service/"},{default:t(()=>[v]),_:1}),n(" (App Service) \u548C "),s(e,{to:"/ja/code/mini-app/guide/view/"},{default:t(()=>[h]),_:1}),n(" (../view)\u3002\u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u4E86\u81EA\u5DF1\u7684\u89C6\u56FE\u5C42\u63CF\u8FF0\u8BED\u8A00 "),s(e,{to:"/ja/code/mini-app/guide/view/wxml.html"},{default:t(()=>[n("WXML")]),_:1}),n(" \u548C "),s(e,{to:"/ja/code/mini-app/guide/view/wxss.html"},{default:t(()=>[n("WXSS")]),_:1}),n("\uFF0C\u4EE5\u53CA\u57FA\u4E8E JavaScript \u7684\u903B\u8F91\u5C42\u6846\u67B6\uFF0C\u5E76\u5728\u89C6\u56FE\u5C42\u4E0E\u903B\u8F91\u5C42\u95F4\u63D0\u4F9B\u4E86\u6570\u636E\u4F20\u8F93\u548C\u4E8B\u4EF6\u7CFB\u7EDF\uFF0C\u8BA9\u5F00\u53D1\u8005\u80FD\u591F\u4E13\u6CE8\u4E8E\u6570\u636E\u4E0E\u903B\u8F91\u3002")]),u(" more "),a("h2",_,[g,n(" \u54CD\u5E94\u7684\u6570\u636E\u7ED1\u5B9A "),s(p,{text:"\u52A1\u5FC5\u7406\u89E3",type:"error"})]),b,a("p",null,[a("a",f,[n("\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u9884\u89C8\u6548\u679C"),s(c)])]),x,a("p",null,[w,n(" \u7BA1\u7406\u4E86\u6574\u4E2A\u5C0F\u7A0B\u5E8F\u7684\u9875\u9762\u8DEF\u7531\uFF0C\u53EF\u4EE5\u505A\u5230\u9875\u9762\u95F4\u7684\u65E0\u7F1D\u5207\u6362\uFF0C\u5E76\u7ED9\u4EE5\u9875\u9762\u5B8C\u6574\u7684 "),s(e,{to:"/ja/code/mini-app/guide/service/lifetime.html"},{default:t(()=>[n("\u751F\u547D\u5468\u671F")]),_:1}),n("\u3002\u5F00\u53D1\u8005\u9700\u8981\u505A\u7684\u53EA\u662F\u5C06\u9875\u9762\u7684\u6570\u636E\u3001\u65B9\u6CD5\u3001\u751F\u547D\u5468\u671F\u51FD\u6570\u6CE8\u518C\u5230 "),j,n(" \u4E2D\uFF0C\u5176\u4ED6\u7684\u4E00\u5207\u590D\u6742\u7684\u64CD\u4F5C\u90FD\u4EA4\u7531 "),N,n(" \u5904\u7406\u3002")]),q,a("p",null,[y,n(" \u63D0\u4F9B\u4E86\u4E00\u5957\u57FA\u7840\u7684 "),s(e,{to:"/ja/code/mini-app/guide/view/component.html"},{default:t(()=>[n("\u7EC4\u4EF6")]),_:1}),n("\uFF0C"),s(e,{to:"/ja/code/mini-app/guide/view/component.html"},{default:t(()=>[n("\u8FD9\u4E9B\u7EC4\u4EF6")]),_:1}),n(" \u81EA\u5E26\u5FAE\u4FE1\u98CE\u683C\u7684\u6837\u5F0F\u4EE5\u53CA\u7279\u6B8A\u7684\u903B\u8F91\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u7EC4\u5408\u57FA\u7840\u7EC4\u4EF6\uFF0C\u521B\u5EFA\u51FA\u5F3A\u5927\u7684\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u3002")]),A,a("p",null,[C,n(" \u63D0\u4F9B\u4E30\u5BCC\u7684 "),s(e,{to:"/ja/code/mini-app/guide/service/api/"},{default:t(()=>[n("\u5FAE\u4FE1\u539F\u751F API")]),_:1}),n("\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u8C03\u8D77\u5FAE\u4FE1\u63D0\u4F9B\u7684\u80FD\u529B\uFF0C\u5982\u83B7\u53D6\u7528\u6237\u4FE1\u606F\uFF0C\u672C\u5730\u5B58\u50A8\uFF0C\u652F\u4ED8\u529F\u80FD\u7B49\u3002")])])}const B=i(m,[["render",I],["__file","intro.html.vue"]]);export{B as default};
