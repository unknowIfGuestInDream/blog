import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,d as i,e as t,w as c,a as n,f as a,r as u,b as s}from"./app.70f43444.js";const d={},r=n("p",null,"\u672C\u6587\u4ECB\u7ECD CSS \u7684\u4E00\u4E9B\u6700\u57FA\u672C\u7684\u6982\u5FF5: \u5C42\u53E0\u3001\u4F18\u5148\u7EA7\u548C\u7EE7\u627F\u3002",-1),k=a(`<h2 id="\u51B2\u7A81\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u51B2\u7A81\u89C4\u5219" aria-hidden="true">#</a> \u51B2\u7A81\u89C4\u5219</h2><p>CSS \u4EE3\u8868\u5C42\u53E0\u6837\u5F0F\u8868\uFF0C\u6211\u4EEC\u9700\u8981\u7406\u89E3\u7B2C\u4E00\u4E2A\u8BCD cascading\u3002</p><p><strong>Cascade</strong>, \u548C\u5B83\u5BC6\u5207\u76F8\u5173\u7684\u6982\u5FF5\u662F <strong>Specificity</strong>\uFF0C\u51B3\u5B9A\u5728\u53D1\u751F\u51B2\u7A81\u7684\u65F6\u5019\u5E94\u8BE5\u4F7F\u7528\u54EA\u6761\u89C4\u5219\u3002</p><p>\u8FD9\u91CC\u4E5F\u6709\u7EE7\u627F\u7684\u6982\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E9B CSS \u5C5E\u6027\u7EE7\u627F\u5F53\u524D\u5143\u7D20\u7684\u7236\u5143\u7D20\u4E0A\u8BBE\u7F6E\u7684\u503C\uFF0C\u6709\u4E9B\u5219\u4E0D\u7EE7\u627F\u3002\u8FD9\u4E5F\u53EF\u80FD\u5BFC\u81F4\u4E00\u4E9B\u548C\u671F\u671B\u4E0D\u540C\u7684\u7ED3\u679C\u3002</p><h3 id="\u5C42\u53E0" tabindex="-1"><a class="header-anchor" href="#\u5C42\u53E0" aria-hidden="true">#</a> \u5C42\u53E0</h3><p>Style sheets cascade(\u6837\u5F0F\u8868\u5C42\u53E0) \u51B3\u5B9A\u4E86 CSS \u89C4\u5219\u7684\u987A\u5E8F\u5F88\u91CD\u8981\u3002</p><p>\u5F53\u5E94\u7528\u4E24\u6761\u540C\u7EA7\u522B\u7684\u89C4\u5219\u5230\u4E00\u4E2A\u5143\u7D20\u7684\u65F6\u5019\uFF0C\u5199\u5728\u540E\u9762\u7684\u5C31\u662F\u5B9E\u9645\u4F7F\u7528\u7684\u89C4\u5219\u3002</p><p><strong>\u6848\u4F8B</strong>: \u6211\u4EEC\u6709\u4E24\u4E2A\u5173\u4E8E <code>h1</code> \u7684\u89C4\u5219\u3002\u8FD9\u4E9B\u89C4\u5219\u6709\u76F8\u540C\u7684\u4F18\u5148\u7EA7\uFF0C\u987A\u5E8F\u5728\u6700\u540E\u7684\u751F\u6548\uFF0C\u6240\u4EE5 <code>h1</code> \u6700\u540E\u663E\u793A\u4E3A\u84DD\u8272\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>unknowIfGuestInDream is handsome!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u4F18\u5148\u7EA7</h3><p>\u6D4F\u89C8\u5668\u662F\u6839\u636E\u4F18\u5148\u7EA7\u6765\u51B3\u5B9A\u5F53\u591A\u4E2A\u89C4\u5219\u6709\u4E0D\u540C\u9009\u62E9\u5668\u5BF9\u5E94\u76F8\u540C\u7684\u5143\u7D20\u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528\u54EA\u4E2A\u89C4\u5219\u3002\u5B83\u57FA\u672C\u4E0A\u662F\u4E00\u4E2A\u8861\u91CF\u9009\u62E9\u5668\u5177\u4F53\u9009\u62E9\u54EA\u4E9B\u533A\u57DF\u7684\u5C3A\u5EA6:</p><ul><li>\u4E00\u4E2A\u5143\u7D20\u9009\u62E9\u5668\u4E0D\u662F\u5F88\u5177\u4F53 (\u5B83\u4F1A\u9009\u62E9\u9875\u9762\u4E0A\u8BE5\u7C7B\u578B\u7684\u6240\u6709\u5143\u7D20)\uFF0C\u6240\u4EE5\u5B83\u7684\u4F18\u5148\u7EA7\u5C31\u4F1A\u4F4E\u4E00\u4E9B\u3002</li><li>\u4E00\u4E2A\u7C7B\u9009\u62E9\u5668\u7A0D\u5FAE\u5177\u4F53\u70B9 (\u5B83\u4F1A\u9009\u62E9\u8BE5\u9875\u9762\u4E2D\u6709\u7279\u5B9A class \u5C5E\u6027\u503C\u7684\u5143\u7D20)\uFF0C\u6240\u4EE5\u5B83\u7684\u4F18\u5148\u7EA7\u5C31\u8981\u9AD8\u4E00\u70B9\u3002</li></ul>`,13),m=n("p",null,[s("\u4E0A\u9762\u7684 "),n("code",null,"h1"),s(" \u4F1A\u663E\u793A\u7EA2\u8272 (\u7C7B\u9009\u62E9\u5668\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\uFF0C\u5373\u4F7F\u5143\u7D20\u9009\u62E9\u5668\u987A\u5E8F\u5728\u5B83\u540E\u9762)\u3002")],-1),g=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("main-heading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("unknowIfGuestInDream is handsome!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".main-heading"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"h1"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=a(`<h3 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h3><p>\u4E00\u4E9B\u8BBE\u7F6E\u5728\u7236\u5143\u7D20\u4E0A\u7684 CSS \u5C5E\u6027\u662F\u53EF\u4EE5\u88AB\u5B50\u5143\u7D20\u7EE7\u627F\u7684\uFF0C\u6709\u4E9B\u5219\u4E0D\u80FD\u3002</p><p><strong>\u6848\u4F8B</strong>: \u5982\u679C\u60A8\u8BBE\u7F6E\u4E00\u4E2A\u5143\u7D20\u7684 <code>color</code> \u548C <code>font-family</code> \uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6BCF\u4E2A\u5728\u91CC\u9762\u7684\u5143\u7D20\u4E5F\u90FD\u4F1A\u6709\u76F8\u540C\u7684\u5C5E\u6027\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u6574\u4E2A\u6587\u6863\u7684\u6587\u5B57\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u90FD\u662F\u84DD\u7684\uFF0C\u9664\u975E\u9488\u5BF9\u6027\u7684\u8BBE\u7F6E\u4E3A\u5176\u4ED6\u989C\u8272 */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4E00\u4E9B\u5C5E\u6027\u662F\u4E0D\u80FD\u7EE7\u627F\u7684\u3002\u6BD4\u5982\u60A8\u5728\u4E00\u4E2A\u5143\u7D20\u4E0A\u8BBE\u7F6E <code>width: 50%</code> \uFF0C\u6240\u6709\u7684\u540E\u4EE3\u4E0D\u4F1A\u662F\u7236\u5143\u7D20\u7684\u5BBD\u5EA6\u7684 50%\u3002\u5982\u679C\u8FD9\u4E2A\u4E5F\u53EF\u4EE5\u7EE7\u627F\u7684\u8BDD\uFF0CCSS \u5C31\u4F1A\u5F88\u96BE\u4F7F\u7528\u4E86!</p></div><h2 id="\u7406\u89E3\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3\u7EE7\u627F" aria-hidden="true">#</a> \u7406\u89E3\u7EE7\u627F</h2><p>\u6211\u4EEC\u4ECE\u7EE7\u627F\u5F00\u59CB\u3002\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\u6211\u4EEC\u6709\u4E00\u4E2A <code>ul</code>\uFF0C\u91CC\u9762\u6709\u4E24\u4E2A\u65E0\u5E8F\u5217\u8868\u3002\u6211\u4EEC\u5DF2\u7ECF\u7ED9 <code>&lt;ul&gt;</code> \u8BBE\u7F6E\u4E86 <code>border</code>\uFF0C <code>padding</code> \u548C <code>color</code>.</p><p><code>color</code> \u5E94\u7528\u5728\u76F4\u63A5\u5B50\u5143\u7D20\uFF0C\u4E5F\u5F71\u54CD\u5176\u4ED6\u540E\u4EE3\uFF0C\u5982\u5B50\u5143\u7D20 <code>&lt;li&gt;</code>\uFF0C\u548C\u7B2C\u4E00\u4E2A\u5D4C\u5957\u5217\u8868\u4E2D\u7684\u5B50\u9879\u3002\u7136\u540E\u6DFB\u52A0\u4E86\u4E00\u4E2A <code>special</code> \u7C7B\u5230\u7B2C\u4E8C\u4E2A\u5D4C\u5957\u5217\u8868\u3002\u8BE5\u7C7B\u58F0\u660E\u4E86\u4E0D\u540C\u7684\u989C\u8272\u3002\u7136\u540E\u901A\u8FC7\u5B83\u7684\u5B50\u5143\u7D20\u7EE7\u627F\u3002</p>`,8),b=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("main"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Item One"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    Item Two
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("2.1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("2.2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    Item Three
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("special"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        3.1
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("3.1.1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("3.1.2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("3.2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".main"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" rebeccapurple"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 2px solid #ccc"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 1em"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".special"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" black"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" bold"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=a('<p>\u50CF <code>width</code> (\u4E0A\u9762\u63D0\u5230\u7684), <code>margin</code>, <code>padding</code>, \u548C <code>border</code> \u4E0D\u4F1A\u88AB\u7EE7\u627F\u3002\u5982\u679C <code>border</code> \u53EF\u4EE5\u88AB\u7EE7\u627F\uFF0C\u6BCF\u4E2A\u5217\u8868\u548C\u5217\u8868\u9879\u90FD\u4F1A\u83B7\u5F97\u4E00\u4E2A\u8FB9\u6846 \u2014 \u53EF\u80FD\u5C31\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\u7ED3\u679C!</p><p>\u54EA\u4E9B\u5C5E\u6027\u5C5E\u4E8E\u9ED8\u8BA4\u7EE7\u627F\u5F88\u5927\u7A0B\u5EA6\u4E0A\u662F\u7531\u5E38\u8BC6\u51B3\u5B9A\u7684\u3002</p><h3 id="\u63A7\u5236\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u7EE7\u627F" aria-hidden="true">#</a> \u63A7\u5236\u7EE7\u627F</h3><p>CSS \u4E3A\u63A7\u5236\u7EE7\u627F\u63D0\u4F9B\u4E86\u56DB\u4E2A\u7279\u6B8A\u7684\u901A\u7528\u5C5E\u6027\u503C\u3002\u6BCF\u4E2A CSS \u5C5E\u6027\u90FD\u63A5\u6536\u8FD9\u4E9B\u503C\u3002</p><ul><li><code>inherit</code>: \u4F7F\u5B50\u5143\u7D20\u5C5E\u6027\u548C\u7236\u5143\u7D20\u76F8\u540C\u3002\u5B9E\u9645\u4E0A\u5C31\u662F &quot;\u5F00\u542F\u7EE7\u627F&quot;.</li><li><code>initial</code>: \u4E0E\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F\u76F8\u540C\u3002\u5982\u679C\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F\u4E2D\u672A\u8BBE\u7F6E\u4E14\u8BE5\u5C5E\u6027\u662F\u81EA\u7136\u7EE7\u627F\u7684\uFF0C\u90A3\u4E48\u4F1A\u8BBE\u7F6E\u4E3A <code>inherit</code>\u3002</li><li><code>unset</code>: \u5C06\u5C5E\u6027\u91CD\u7F6E\u4E3A\u81EA\u7136\u503C\uFF0C\u4E5F\u5C31\u662F\u5982\u679C\u5C5E\u6027\u662F\u81EA\u7136\u7EE7\u627F\u90A3\u4E48\u5C31\u662F <code>inherit</code>\uFF0C\u5426\u5219\u548C <code>initial</code> \u4E00\u6837</li></ul><div class="custom-container info"><p class="custom-container-title">\u95A2\u9023\u60C5\u5831</p><p>\u8FD8\u6709\u4E00\u4E2A\u5C5E\u6027 <code>revert</code>\uFF0C\u4F46\u53EA\u6709\u5F88\u5C11\u7684\u6D4F\u89C8\u5668\u652F\u6301\u3002</p></div><h3 id="\u91CD\u8BBE\u6240\u6709\u5C5E\u6027\u503C" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8BBE\u6240\u6709\u5C5E\u6027\u503C" aria-hidden="true">#</a> \u91CD\u8BBE\u6240\u6709\u5C5E\u6027\u503C</h3><p>CSS \u7684\u7F29\u5199\u5C5E\u6027 <code>all</code> \u53EF\u4EE5\u7528\u4E8E\u540C\u65F6\u5C06\u8FD9\u4E9B\u7EE7\u627F\u503C\u4E2D\u7684\u4E00\u4E2A\u5E94\u7528\u4E8E(\u51E0\u4E4E)\u6240\u6709\u5C5E\u6027\u3002\u5B83\u7684\u503C\u53EF\u4EE5\u662F\u5176\u4E2D\u4EFB\u610F\u4E00\u4E2A(<code>inherit</code>, <code>initial</code>, <code>unset</code>, <code>revert</code>)\u3002\u8FD9\u662F\u4E00\u79CD\u64A4\u9500\u5BF9\u6837\u5F0F\u6240\u505A\u66F4\u6539\u7684\u7B80\u4FBF\u65B9\u6CD5\uFF0C\u4EE5\u4FBF\u56DE\u5230\u9ED8\u8BA4\u72B6\u6001\u3002</p>',8),x=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("blockquote")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("This blockquote is styled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("blockquote")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("blockquote")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fix-this"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("This blockquote is not styled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("blockquote")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"blockquote"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 2px solid green"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".fix-this"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"all"),n("span",{class:"token punctuation"},":"),s(" unset"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=a(`<h2 id="\u7406\u89E3\u5C42\u53E0" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3\u5C42\u53E0" aria-hidden="true">#</a> \u7406\u89E3\u5C42\u53E0</h2><p>\u6709\u4E09\u4E2A\u56E0\u7D20\u9700\u8981\u8003\u8651\uFF0C\u6839\u636E\u91CD\u8981\u6027\u6392\u5E8F\u5982\u4E0B:</p><ol><li>\u91CD\u8981\u7A0B\u5EA6</li><li>\u4F18\u5148\u7EA7</li><li>\u8D44\u6E90\u987A\u5E8F</li></ol><p>\u6211\u4EEC\u4ECE\u4E0B\u5F80\u4E0A\uFF0C\u770B\u770B\u6D4F\u89C8\u5668\u662F\u5982\u4F55\u51B3\u5B9A\u8BE5\u5E94\u7528\u54EA\u4E2A CSS \u89C4\u5219\u7684\u3002</p><h3 id="\u8D44\u6E90\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90\u987A\u5E8F" aria-hidden="true">#</a> \u8D44\u6E90\u987A\u5E8F</h3><p>\u6211\u4EEC\u5DF2\u7ECF\u770B\u5230\u4E86\u987A\u5E8F\u5BF9\u4E8E\u5C42\u53E0\u7684\u91CD\u8981\u6027\u3002\u5982\u679C\u60A8\u6709\u8D85\u8FC7\u4E00\u6761\u89C4\u5219\uFF0C\u800C\u4E14\u90FD\u662F\u76F8\u540C\u7684\u6743\u91CD\uFF0C\u90A3\u4E48\u6700\u540E\u9762\u7684\u89C4\u5219\u4F1A\u5E94\u7528\u3002\u53EF\u4EE5\u7406\u89E3\u4E3A\u540E\u9762\u7684\u89C4\u5219\u8986\u76D6\u524D\u9762\u7684\u89C4\u5219\uFF0C\u76F4\u5230\u6700\u540E\u4E00\u4E2A\u5F00\u59CB\u8BBE\u7F6E\u6837\u5F0F\u3002</p><h3 id="\u4F18\u5148\u7EA7\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7\u8BA1\u7B97" aria-hidden="true">#</a> \u4F18\u5148\u7EA7\u8BA1\u7B97</h3><p>\u5728\u60A8\u4E86\u89E3\u4E86\u987A\u5E8F\u7684\u91CD\u8981\u6027\u540E\uFF0C\u4F1A\u53D1\u73B0\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6709\u4E9B\u89C4\u5219\u5728\u6700\u540E\u51FA\u73B0\uFF0C\u4F46\u662F\u5374\u5E94\u7528\u4E86\u524D\u9762\u7684\u89C4\u5219\u3002</p><p>\u53EA\u8981\u524D\u9762\u7684\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\uFF0C\u6D4F\u89C8\u5668\u5C31\u628A\u5B83\u9009\u62E9\u4E3A\u5143\u7D20\u7684\u6837\u5F0F\u3002\u5C31\u50CF\u524D\u9762\u770B\u5230\u7684\uFF0C\u7C7B\u9009\u62E9\u5668\u7684\u6743\u91CD\u5927\u4E8E\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u56E0\u6B64\u7C7B\u4E0A\u5B9A\u4E49\u7684\u5C5E\u6027\u5C06\u8986\u76D6\u5E94\u7528\u4E8E\u5143\u7D20\u4E0A\u7684\u5C5E\u6027\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u867D\u7136\u6211\u4EEC\u8003\u8651\u7684\u662F\u9009\u62E9\u5668\uFF0C\u4F46\u662F\u53EA\u6709\u76F8\u540C\u7684\u5C5E\u6027\u4F1A\u88AB\u8986\u76D6\uFF0C\u4E0D\u4F1A\u8986\u76D6\u6240\u6709\u89C4\u5219\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F18\u5148\u7EA7\u4F4E\u7684\u9009\u62E9\u5668\u7684\u5176\u4ED6\u4E0D\u51B2\u7A81\u58F0\u660E\u4ECD\u4F1A\u751F\u6548\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">\u6280\u5DE7</p><p>\u4E00\u79CD\u5E38\u89C1\u7684\u505A\u6CD5\u662F\u7ED9\u57FA\u672C\u5143\u7D20\u5B9A\u4E49\u901A\u7528\u6837\u5F0F\uFF0C\u7136\u540E\u7ED9\u4E0D\u540C\u7684\u5143\u7D20\u521B\u5EFA\u5BF9\u5E94\u7684\u7C7B\u3002</p><p>\u6BD4\u5982\u6211\u7684\u535A\u5BA2\u5BF9\u5F88\u591A\u6807\u7B7E\u7684\u6837\u5F0F\u8FDB\u884C\u4E86\u8C03\u6574(\u6BD4\u5982\u51CF\u5C0F\u4E86 <code>&lt;h1&gt;</code> \u7684\u5B57\u4F53\u5927\u5C0F\u4EE5\u53CA\u6807\u9898\u7684\u5B57\u4F53\u7C97\u7EC6)\uFF0C\u5E76\u901A\u8FC7\u7C7B\u6765\u5BF9\u7279\u5B9A\u533A\u57DF\u7684\u6807\u7B7E\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u6837\u5F0F\u8C03\u6574\u3002</p></div><p>\u672C\u8D28\u4E0A\uFF0C\u4E0D\u540C\u7C7B\u578B\u7684\u9009\u62E9\u5668\u6709\u4E0D\u540C\u7684\u5206\u6570\u503C\uFF0C\u628A\u8FD9\u4E9B\u5206\u6570\u76F8\u52A0\u5C31\u5F97\u5230\u7279\u5B9A\u9009\u62E9\u5668\u7684\u6743\u91CD\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u8FDB\u884C\u5339\u914D\u3002</p><p>\u4E00\u4E2A\u9009\u62E9\u5668\u7684\u4F18\u5148\u7EA7\u53EF\u4EE5\u8BF4\u662F\u7531\u56DB\u4E2A\u90E8\u5206\u76F8\u52A0 (\u5206\u91CF)\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u4E2A\u5341\u767E\u5343 \u2014 \u56DB\u4F4D\u6570\u7684\u56DB\u4E2A\u4F4D\u6570:</p><ul><li>\u5343\u4F4D: \u5982\u679C\u58F0\u660E\u5728 style \u7684\u5C5E\u6027(\u5185\u8054\u6837\u5F0F)\u5219\u8BE5\u4F4D\u5F97\u4E00\u5206\u3002\u8FD9\u6837\u7684\u58F0\u660E\u6CA1\u6709\u9009\u62E9\u5668\uFF0C\u6240\u4EE5\u5B83\u5F97\u5206\u603B\u662F 1000\u3002</li><li>\u767E\u4F4D: \u9009\u62E9\u5668\u4E2D\u5305\u542B ID \u9009\u62E9\u5668\u5219\u8BE5\u4F4D\u5F97\u4E00\u5206\u3002</li><li>\u5341\u4F4D: \u9009\u62E9\u5668\u4E2D\u5305\u542B\u7C7B\u9009\u62E9\u5668\u3001\u5C5E\u6027\u9009\u62E9\u5668\u6216\u8005\u4F2A\u7C7B\u5219\u8BE5\u4F4D\u5F97\u4E00\u5206\u3002</li><li>\u4E2A\u4F4D: \u9009\u62E9\u5668\u4E2D\u5305\u542B\u5143\u7D20\u3001\u4F2A\u5143\u7D20\u9009\u62E9\u5668\u5219\u8BE5\u4F4D\u5F97\u4E00\u5206\u3002</li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u901A\u7528\u9009\u62E9\u5668 (<code>*</code>)\uFF0C\u7EC4\u5408\u7B26 (<code>+</code>, <code>&gt;</code>, <code>~</code>, \u7A7A\u683C)\uFF0C\u548C\u5426\u5B9A\u4F2A\u7C7B (<code>:not</code>) \u4E0D\u4F1A\u5F71\u54CD\u4F18\u5148\u7EA7\u3002</p></div><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5728\u8FDB\u884C\u8BA1\u7B97\u65F6\u4E0D\u5141\u8BB8\u8FDB\u884C\u8FDB\u4F4D\uFF0C\u4F8B\u5982\uFF0C20 \u4E2A\u7C7B\u9009\u62E9\u5668\u4EC5\u4EC5\u610F\u5473\u7740 20 \u4E2A\u5341\u4F4D\uFF0C\u800C\u4E0D\u80FD\u89C6\u4E3A \u4E24\u4E2A\u767E\u4F4D\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u65E0\u8BBA\u591A\u5C11\u4E2A\u7C7B\u9009\u62E9\u5668\u7684\u6743\u91CD\u53E0\u52A0\uFF0C\u90FD\u4E0D\u4F1A\u8D85\u8FC7\u4E00\u4E2A ID \u9009\u62E9\u5668\u3002</p></div><h2 id="important" tabindex="-1"><a class="header-anchor" href="#important" aria-hidden="true">#</a> !important</h2><p><code>!important</code> \u53EF\u4EE5\u7528\u6765\u8986\u76D6\u6240\u6709\u4E0A\u9762\u6240\u6709\u4F18\u5148\u7EA7\u8BA1\u7B97\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">button</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BF7\u4E0D\u8981\u6EE5\u7528 <code>!important</code>\uFF0C\u53EA\u6709\u5728\u4E0D\u5F97\u4E0D\u4F7F\u7528\u7684\u60C5\u51B5\u4E0B\u518D\u8FDB\u884C\u4F7F\u7528\u3002</p><p>\u8986\u76D6 <code>!important</code> \u552F\u4E00\u7684\u529E\u6CD5\u5C31\u662F\u53E6\u4E00\u4E2A <code>!important</code> \u5177\u6709\u76F8\u540C\u4F18\u5148\u7EA7\u800C\u4E14\u987A\u5E8F\u9760\u540E\uFF0C\u6216\u8005\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002</p></div>`,20);function C(w,E){const e=u("CodeDemo");return l(),p("div",null,[r,i(" more "),k,t(e,{id:"code-demo-48",type:"normal",title:"%E6%A1%88%E4%BE%8B",code:"eNpNzT0OwjAMQOGrGM/8qGspnZBQ7+AlJAZHJI4UN2KoencqsXR+0vcWlDkn7HGQDnxyZjfC7KKehF2I+iYcm360fKfXo7HNk94ruwzRQJwGK5kPw0W6kRSP6M0267wHYCEF8CWV2kPlcCVdSUm33748U+N/wvUH9jIzRg=="},{default:c(()=>[m,g,h]),_:1}),v,t(e,{id:"code-demo-79",type:"normal",title:"%E7%BB%A7%E6%89%BF%E6%A1%88%E4%BE%8B",code:"eNp9UDFuwzAM/Aqhrq0DO5vrZu/UpaMWmWJjobQkSA5SIMjfK9uy4wRoJ+nueIcjL6Ibeha1aE4MyCrGNyl6ZawUB2kBGjaH94F6+LDU7BJYyPEFmKTPs5tRysj8PFMV5eq5cdWGa3bZ8md2F4jW9LVh9IRGcS65ZC9/gH1R3sC21jKaBh7KbZVtxbuaM3hYaf/vShmLZ4ExpkMX43XhMk6gYxdqCNQSovKn4JleR6F1QVNSKv8D0bHR8ISIk+SV1sYeayipT8RVWmmLfI671JYVfk+WL2eHlzOZYzck2rGefeL6CwJVkuM="},{default:c(()=>[b,f]),_:1}),_,t(e,{id:"code-demo-123",type:"normal",title:"%E9%87%8D%E8%AE%BE%E6%89%80%E6%9C%89%E5%B1%9E%E6%80%A7%E5%80%BC",code:"eNp9jk0OgjAQha8ymbVI4hIrp3DJBtoKhLGDnZJgCHe3SIywYfn+vrwJm/AkzFBVxLp7DRxsXjgA1ef3phX42xCVhDdZo9I+dlS6m0Rj09VUitwKfLRjEiKnwAOq43BExhNqkfhxs5oWWlXqrvY8OJNoJvYZeGuu34S9sVFf+hGEqTVQe2tdzObl6fl3a+WURBkMTmxYCzh/AK6CY9I="},{default:c(()=>[x,S]),_:1}),y])}const B=o(d,[["render",C],["__file","cascade.html.vue"]]);export{B as default};
