import{_ as a,W as s,X as n,$ as e,a2 as t}from"./framework-fec69ff1.js";const d={},p=t("<p>WXSS (WeiXin Style Sheets) 是一套样式语言，用于描述 WXML 的组件样式。</p><p>WXSS 用来决定 WXML 的组件应该怎么显示。</p><p>为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。</p><p>与 CSS 相比，WXSS 扩展的特性有:</p><ul><li>尺寸单位</li><li>样式导入</li></ul><p>与 CSS 相比，WXSS 缺失的特性有:</p><ul><li>一部分高级选择器</li><li>一部分 CSS3 高级功能</li></ul>",7),c=t(`<h2 id="尺寸单位" tabindex="-1"><a class="header-anchor" href="#尺寸单位" aria-hidden="true">#</a> 尺寸单位</h2><p>rpx(responsive pixel): 可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。</p><table><thead><tr><th>设备</th><th>rpx 换算 px (屏幕宽度/750)</th><th>px 换算 rpx (750/屏幕宽度)</th></tr></thead><tbody><tr><td>iPhone5</td><td>1rpx = 0.42px</td><td>1px = 2.34rpx</td></tr><tr><td>iPhone6</td><td>1rpx = 0.5px</td><td>1px = 2rpx</td></tr><tr><td>iPhone6 Plus</td><td>1rpx = 0.552px</td><td>1px = 1.81rpx</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在较小的屏幕上不可避免的会有一些毛刺，请在开发时尽量避免这种情况。</p></div><h2 id="样式导入" tabindex="-1"><a class="header-anchor" href="#样式导入" aria-hidden="true">#</a> 样式导入</h2><p>使用 <code>@import</code> 语句可以导入外联样式表，<code>@import</code> 后跟需要导入的外联样式表的相对路径，用 <code>;</code> 表示语句结束。</p><p>示例代码:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/** common.wxss **/</span>
<span class="token selector">.small-p</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/** app.wxss **/</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;common.wxss&quot;</span><span class="token punctuation">;</span></span>
<span class="token selector">.middle-p</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> 内联样式</h2><p>框架组件上支持使用 <code>style</code>, <code>class</code> 属性来控制组件的样式。</p><ul><li><p><code>style</code>: 静态的样式统一写到 <code>class</code> <code>中。style</code> 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 <code>style</code> 中，以免影响渲染速度。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color:{{color}};<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>class</code>: 用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上 <code>.</code>，样式类名之间用空格分隔。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>normal_view<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2><p>目前支持的选择器有:</p><table><thead><tr><th>选择器</th><th>样例</th><th>样例描述</th></tr></thead><tbody><tr><td>.class</td><td>.intro</td><td>选择所有拥有 <code>class=&quot;intro&quot;</code> 的组件</td></tr><tr><td>#id</td><td>#firstname</td><td>选择拥有 <code>id=&quot;firstname&quot;</code> 的组件</td></tr><tr><td>element</td><td>view</td><td>选择所有 view 组件</td></tr><tr><td>element, element</td><td>view, checkbox</td><td>选择所有文档的 view 组件和所有的 checkbox 组件</td></tr><tr><td>::after</td><td>view::after</td><td>在 view 组件后边插入内容</td></tr><tr><td>::before</td><td>view::before</td><td>在 view 组件前边插入内容</td></tr></tbody></table><h2 id="全局样式与局部样式" tabindex="-1"><a class="header-anchor" href="#全局样式与局部样式" aria-hidden="true">#</a> 全局样式与局部样式</h2><p>定义在 <code>app.wxss</code> 中的样式为全局样式，作用于每一个页面。在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 <code>app.wxss</code> 中相同的选择器。</p>`,17);function i(o,l){return s(),n("div",null,[p,e(" more "),c])}const u=a(d,[["render",i],["__file","wxss.html.vue"]]);export{u as default};
