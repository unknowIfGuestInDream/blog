import{_ as i,W as l,X as u,Y as s,Z as n,a0 as e,a1 as o,a2 as a,E as p}from"./framework-65b62f32.js";const d={},r=a(`<h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h2><ul><li>将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用</li><li>将复杂的页面拆分成多个低耦合的模块，有助于代码维护。</li></ul><h2 id="创建自定义组件" tabindex="-1"><a class="header-anchor" href="#创建自定义组件" aria-hidden="true">#</a> 创建自定义组件</h2><p>类似于页面，一个自定义组件由 <code>json</code> <code>wxml</code> <code>wxss</code> <code>js</code> 4 个文件组成。</p><p>要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 <code>component</code> 字段设为 <code>true</code> 可将这一组文件设为自定义组件):</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),m=s("code",null,"wxml",-1),v=s("code",null,"wxss",-1),k=a(`<details class="hint-container details"><summary>代码示例</summary><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 这是自定义组件的内部WXML结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{innerText}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*这里的样式只应用于这个自定义组件*/</span>
<span class="token selector">.inner</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="hint-container warning"><p class="hint-container-title">Note</p><p>在组件 <code>wxss</code> 中不应使用 ID 选择器、属性选择器和标签名选择器。</p></div><p>在自定义组件的 js 文件中，需要使用 <code>Component()</code> 来注册组件，并提供组件的属性定义、内部数据和自定义方法。</p>`,3),g=s("code",null,"wxml",-1),h=a(`<details class="hint-container details"><summary>代码示例</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里定义了innerText属性，属性值可以在组件使用时指定</span>
    <span class="token literal-property property">innerText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;default value&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里是一些组件内部数据</span>
    <span class="token literal-property property">someData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里是一个自定义方法</span>
    <span class="token function">customMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="使用自定义组件" tabindex="-1"><a class="header-anchor" href="#使用自定义组件" aria-hidden="true">#</a> 使用自定义组件</h2><p>自定义组件在使用时与基础组件非常相似。</p><p>使用已注册的自定义组件前，首先要在页面的 json 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;component-tag-name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/the/custom/component&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，在页面的 <code>wxml</code> 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>在 app.json 中也可以声明 <code>usingComponents</code> 字段，在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。</p></div>`,7),b={class:"hint-container details"},_=s("summary",null,"代码示例",-1),x={href:"https://developers.weixin.qq.com/s/OMfVAKmZ6KZT",target:"_blank",rel:"noopener noreferrer"},y=a(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 以下是对一个自定义组件的引用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-tag-name</span> <span class="token attr-name">inner-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Some text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f=a('<p>自定义组件的 <code>wxml</code> 节点结构在与数据结合之后，将被插入到引用位置内。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><ul><li>因为 WXML 节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。</li><li>自定义组件也是可以引用自定义组件的，引用方法类似于页面引用自定义组件的方式(使用 <code>usingComponents</code> 字段)。</li><li>自定义组件和页面所在项目根目录名不能以 <code>wx-</code> 为前缀，否则会报错。</li></ul></div><p>注意，是否在页面文件中使用 <code>usingComponents</code> 会使得页面的 <code>this</code> 对象的原型稍有差异，包括:</p><ul><li>使用 <code>usingComponents</code> 页面的原型与不使用时不一致，即 <code>Object.getPrototypeOf(this)</code> 结果不同。</li><li>使用 <code>usingComponents</code> 时会多一些方法，如 <code>selectComponent</code> 。</li><li>出于性能考虑，使用 <code>usingComponents</code> 时， <code>setData</code> 内容不会被直接深复制，即 <code>this.setData({ field: obj })</code> 后 <code>this.data.field === obj</code>。(深复制会在这个值被组件间传递时发生。)</li></ul><p>如果页面比较复杂，新增或删除 <code>usingComponents</code> 定义段时建议重新测试一下。</p>',5);function j(q,w){const t=p("RouterLink"),c=p("ExternalLinkIcon");return l(),u("div",null,[r,s("p",null,[n("同时，还要在 "),m,n(" 文件中编写组件模板，在 "),v,n(" 文件中加入组件样式，它们的写法与页面的写法类似。具体细节和注意事项参见 "),e(t,{to:"/en/code/mini-app/guide/custom-component/style.html"},{default:o(()=>[n("组件模板和样式")]),_:1}),n(" 。")]),k,s("p",null,[n("组件的属性值和内部数据将被用于组件 "),g,n(" 的渲染，其中，属性值是可由组件外部传入的。更多细节参见 "),e(t,{to:"/en/code/mini-app/guide/custom-component/component.html"},{default:o(()=>[n("Component 构造器")]),_:1}),n(" 。")]),h,s("details",b,[_,s("p",null,[s("a",x,[n("在开发者工具中预览效果"),e(c)])]),y]),f])}const L=i(d,[["render",j],["__file","intro.html.vue"]]);export{L as default};
