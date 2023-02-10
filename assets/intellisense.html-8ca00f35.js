import{_ as a,a as e,b as o,c as p,d as t}from"./replace-6dd76d59.js";import{_ as r,X as c,Y as l,Z as i,$ as n,a1 as u,a2 as d,a3 as k,H as m}from"./framework-0ff09816.js";const v={},b=k('<p>使用 <code>Ctrl + Space</code> 触发智能提示组件。</p><p><img src="'+a+'" alt="智能提示组件" loading="lazy"></p><p>您可以查看可用的方法，参数提示，简短文档等。</p><h2 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转" aria-hidden="true">#</a> 跳转</h2><p>选择一个符号然后输入 <code>Alt + F12</code>，您就可以使用上下文菜单了。</p><p><img src="'+e+'" alt="上下文菜单" loading="lazy"></p><h2 id="跳转到定义" tabindex="-1"><a class="header-anchor" href="#跳转到定义" aria-hidden="true">#</a> 跳转到定义</h2><p>选择一个符号然后输入 <code>F12</code>，您也可以使用上下文菜单或 <code>Ctrl + Click</code></p><p><img src="'+o+'" alt="跳转到定义" loading="lazy"></p><p>您可以使用 <strong>转到 &gt; 返回</strong> 命令或快捷键 <code>Alt + ←</code> 来返回您的上个位置。</p><h2 id="跳转到引用" tabindex="-1"><a class="header-anchor" href="#跳转到引用" aria-hidden="true">#</a> 跳转到引用</h2><p>选择一个符号输入 <code>Shift + F12</code>，即可打开上下文菜单查看所有引用。</p><h2 id="查看所有引用" tabindex="-1"><a class="header-anchor" href="#查看所有引用" aria-hidden="true">#</a> 查看所有引用</h2><p>选择一个符号，然后按 <code>Shift + Alt + F12</code> 打开 <strong>引用</strong> 视图，在专用视图中显示文件的所有符号。</p><h2 id="重命名符号" tabindex="-1"><a class="header-anchor" href="#重命名符号" aria-hidden="true">#</a> 重命名符号</h2><p>选择一个符号，然后按下 <code>F2</code>。或者，您可以使用上下文菜单。</p><p><img src="'+p+'" alt="重命名符号" loading="lazy"></p><h2 id="搜索和修改" tabindex="-1"><a class="header-anchor" href="#搜索和修改" aria-hidden="true">#</a> 搜索和修改</h2><p>除了搜索和替换表达式之外，您还可以使用带有捕获组的正则表达式搜索和重用匹配的部分。通过单击 <strong>使用正则表达式</strong> <code>.*</code> 按钮(<code>Alt + R</code>)在搜索框中启用正则表达式，然后编写正则表达式并使用括号定义组。然后，您可以在替换字段使用 <code>$1</code>，<code>$2</code> 等来输入每个组中匹配的内容。</p><p><img src="'+t+`" alt="搜索和修改" loading="lazy"></p><h2 id="eslintrc-json" tabindex="-1"><a class="header-anchor" href="#eslintrc-json" aria-hidden="true">#</a> .eslintrc.json</h2><p>安装 ESLint 扩展，并根据您的需要配置。请查阅 ESLint 规范以获取有关其格式化规则和选项的详细信息。</p><p>这是使用 ES6 的配置。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commonjs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;es6&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ecmaFeatures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;classes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;defaultParams&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;no-const-assign&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-extra-semi&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-fallthrough&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-empty&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-mixed-spaces-and-tabs&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-redeclare&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-this-before-super&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-undef&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-unreachable&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-use-before-define&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;constructor-super&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;curly&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eqeqeq&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;func-names&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;valid-typeof&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><p>IntelliSense 会为 package.json 文件提供智能提示。</p><h2 id="emmet-语法" tabindex="-1"><a class="header-anchor" href="#emmet-语法" aria-hidden="true">#</a> Emmet 语法</h2>`,27);function h(q,y){const s=m("RouterLink");return c(),l("div",null,[b,i("p",null,[n("支持 "),u(s,{to:"/code/website/emmet/"},{default:d(()=>[n("Emmet 语法")]),_:1}),n("。")])])}const _=r(v,[["render",h],["__file","intellisense.html.vue"]]);export{_ as default};
