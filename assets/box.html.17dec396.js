import{_ as l}from"./box-model.ed915006.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as u,d,e as a,w as e,a as n,b as s,f as r,r as o}from"./app.cad6791d.js";const m={},k=n("p",null,"CSS \u76D2\u6A21\u578B\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u76D2\u5B50\uFF0C\u5C01\u88C5\u5468\u56F4\u7684 HTML \u5143\u7D20\uFF0C\u5B83\u5305\u62EC: \u8FB9\u8DDD\uFF0C\u8FB9\u6846\uFF0C\u586B\u5145\uFF0C\u548C\u5B9E\u9645\u5185\u5BB9\u3002",-1),b=r('<h2 id="\u76D2\u6A21\u578B\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u76D2\u6A21\u578B\u4ECB\u7ECD" aria-hidden="true">#</a> \u76D2\u6A21\u578B\u4ECB\u7ECD</h2><p>\u4E0B\u9762\u7684\u56FE\u7247\u8BF4\u660E\u4E86\u76D2\u5B50\u6A21\u578B (Box Model):</p><p><img src="'+l+`" alt="Box Model \u793A\u610F\u56FE" loading="lazy"></p><p>\u4E0D\u540C\u90E8\u5206\u7684\u8BF4\u660E:</p><ul><li>Content box (\u5185\u5BB9) - \u76D2\u5B50\u7684\u5185\u5BB9\uFF0C\u663E\u793A\u6587\u672C\u548C\u56FE\u50CF\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>width</code> \u548C <code>height</code> \u8BBE\u7F6E\u5927\u5C0F\u3002</li><li>Padding box (\u5185\u8FB9\u8DDD) - \u5305\u56F4\u5728\u5185\u5BB9\u533A\u57DF\u5916\u90E8\u7684\u7A7A\u767D\u533A\u57DF\uFF0C\u901A\u8FC7 <code>padding</code> \u5C5E\u6027\u8BBE\u7F6E\u3002</li><li>Border box (\u8FB9\u6846) - \u56F4\u7ED5\u5728\u586B\u5145\u548C\u5185\u5BB9\u5916\u7684\u8FB9\u6846\uFF0C\u901A\u8FC7 <code>border</code> \u5C5E\u6027\u8BBE\u7F6E\u3002</li><li>Margin box (\u5916\u8FB9\u8DDD) - \u8FD9\u662F\u6700\u5916\u9762\u7684\u533A\u57DF\uFF0C\u662F\u76D2\u5B50\u548C\u5176\u4ED6\u5143\u7D20\u4E4B\u95F4\u7684\u7A7A\u767D\u533A\u57DF\uFF0C\u901A\u8FC7 <code>margin</code> \u5C5E\u6027\u8BBE\u7F6E\u3002</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 25px solid green<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u6B63\u786E\u8BBE\u7F6E\u5143\u7D20\u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E2D\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u60A8\u9700\u8981\u77E5\u9053\u7684\u76D2\u6A21\u578B\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002</p><h2 id="\u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6" aria-hidden="true">#</a> \u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6</h2><p>\u5F53\u60A8\u6307\u5B9A\u4E00\u4E2A CSS \u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5C5E\u6027\u65F6\uFF0C\u60A8\u53EA\u662F\u8BBE\u7F6E\u5185\u5BB9\u533A\u57DF(content box)\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002<code>padding</code> \u548C <code>border</code> \u518D\u52A0\u4E0A\u8BBE\u7F6E\u7684\u5BBD\u9AD8\u4E00\u8D77\u51B3\u5B9A\u6574\u4E2A\u76D2\u5B50\u7684\u5927\u5C0F\u3002</p>`,9),x=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 25px solid green"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 25px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 25px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("p",null,"\u5143\u7D20\u76D2\u5B50\u7684\u5927\u5C0F\u4E3A: 300px (\u5BBD) + 50px (\u5DE6 + \u53F3\u586B\u5145) + 50px (\u5DE6 + \u53F3\u8FB9\u6846) = 400px",-1),_=n("p",null,"\u5143\u7D20\u5360\u636E\u7684\u7A7A\u95F4\u4E3A: 300px (\u5BBD) + 50px (\u5DE6 + \u53F3\u586B\u5145) + 50px (\u5DE6 + \u53F3\u8FB9\u6846) + 50px (\u5DE6 + \u53F3\u8FB9\u8DDD) = 450px",-1),g=n("p",null,"\u8BD5\u60F3\u4E00\u4E0B\uFF0C\u60A8\u53EA\u6709 250px \u7684\u7A7A\u95F4\u3002\u8BA9\u6211\u4EEC\u8BBE\u7F6E\u603B\u5BBD\u5EA6\u4E3A 250px \u7684\u5143\u7D20:",-1),E=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div.box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 220px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 5px solid gray"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("p",null,"\u6700\u7EC8\u5143\u7D20\u7684\u603B\u5BBD\u5EA6\u8BA1\u7B97\u516C\u5F0F\u662F\u8FD9\u6837\u7684:",-1),y=n("p",null,"\u5143\u7D20\u7684\u5BBD\u5EA6 = \u5BBD\u5EA6 + \u5DE6\u586B\u5145 + \u53F3\u586B\u5145 + \u5DE6\u8FB9\u6846 + \u53F3\u8FB9\u6846 \u5143\u7D20\u5360\u636E\u7684\u6C34\u5E73\u7A7A\u95F4 = \u5BBD\u5EA6 + \u5DE6\u586B\u5145 + \u53F3\u586B\u5145 + \u5DE6\u8FB9\u6846 + \u53F3\u8FB9\u6846 + \u5DE6\u8FB9\u8DDD + \u53F3\u8FB9\u8DDD",-1),A=n("p",null,"\u5143\u7D20\u7684\u603B\u9AD8\u5EA6\u6700\u7EC8\u8BA1\u7B97\u516C\u5F0F\u662F\u8FD9\u6837\u7684:",-1),N=n("p",null,"\u5143\u7D20\u7684\u9AD8\u5EA6 = \u9AD8\u5EA6 + \u9876\u90E8\u586B\u5145 + \u5E95\u90E8\u586B\u5145 + \u4E0A\u8FB9\u6846 + \u4E0B\u8FB9\u6846 \u5143\u7D20\u5360\u636E\u7684\u5782\u76F4\u7A7A\u95F4 = \u9AD8\u5EA6 + \u9876\u90E8\u586B\u5145 + \u5E95\u90E8\u586B\u5145 + \u4E0A\u8FB9\u6846 + \u4E0B\u8FB9\u6846 + \u4E0A\u8FB9\u8DDD + \u4E0B\u8FB9\u8DDD",-1),w={class:"custom-container tip"},C=n("p",{class:"custom-container-title"},"Tips",-1);function S(D,M){const t=o("CodeDemo"),c=o("RouterLink");return i(),u("div",null,[k,d(" more "),b,a(t,{id:"code-demo-48",type:"normal",title:"%E5%85%83%E7%B4%A0%E7%9A%84%E5%AE%BD%E5%BA%A6%E4%B8%8E%E9%AB%98%E5%BA%A6",code:"eNo9zT0KwzAMQOGrCM2lDS1d3J+TeHEi4wgc2VihNYTcvW4CWd83vAXHeYpo8En8gSE61ZfFPlWLcHlbwRMOqs0bn1uGxQrAl2keDdy6LtfHP/SpkC8GrvdcQVNkglC8lw2zI2IJu25lciWwHGFtn/UHBzcs3g=="},{default:e(()=>[x,h,v,_]),_:1}),g,a(t,{id:"code-demo-61",type:"normal",title:"%E6%80%BB%E5%AE%BD%E5%BA%A6%20250px%20%E7%9A%84%E5%85%83%E7%B4%A0",code:"eNo1zcsKwjAQheFXOcxatBbcxMuTZJN2JA2kScgUjZS+u6PQ5fm/xVlpWuZIhm4cXhijE7lbGnKzhNPDJjrQKKKufNSM1SbgHXiZDPq+K+36C8Uxh+QNznsZcuVnNbiUBskxMHx1nz/NrvqQDDpdm15sXyROKyo="},{default:e(()=>[E,B]),_:1}),f,y,A,N,n("div",w,[C,n("p",null,[s("\u66F4\u591A\u76F8\u5173\u53EF\u89C1 "),a(c,{to:"/en/code/website/css/intro/box.html"},{default:e(()=>[s("\u76D2\u6A21\u578B")]),_:1})])])])}const K=p(m,[["render",S],["__file","box.html.vue"]]);export{K as default};
