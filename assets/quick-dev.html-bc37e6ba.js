import{_ as s,W as n,X as a,$ as d,a2 as e}from"./framework-8ee916d6.js";const i={},c=e(`<p>您可以使用 <code>vue serve</code> 和 <code>vue build</code> 命令对单个 <code>*.vue</code> 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli-service-global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),t=e('<h2 id="vue-serve" tabindex="-1"><a class="header-anchor" href="#vue-serve" aria-hidden="true">#</a> vue serve</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>Usage: serve <span class="token url">[<span class="token content">options</span>][<span class="token variable">entry</span>]</span>\n\n在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器\n\nOptions:\n\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-o`</span>, <span class="token code-snippet code keyword">`--open`</span>: 打开浏览器\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-c`</span>, <span class="token code-snippet code keyword">`--copy`</span>: 将本地 URL 复制到剪切板\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-h`</span>, <span class="token code-snippet code keyword">`--help`</span>: 输出用法信息\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您所需要的仅仅是一个 <code>App.vue</code> 文件:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在这个 <code>App.vue</code> 文件所在的目录下运行:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vue serve\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">ヒント</p><p><code>vue serve</code> 使用了和 <code>vue create</code> 创建的项目相同的默认设置 (webpack、Babel、PostCSS 和 ESLint)。它会在当前目录自动推导入口文件——入口可以是 <code>main.js</code>、<code>index.js</code>、<code>App.vue</code> 或 <code>app.vue</code> 中的一个。您也可以显式地指定入口文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vue serve MyComponent.vue\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="vue-build" tabindex="-1"><a class="header-anchor" href="#vue-build" aria-hidden="true">#</a> vue build</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>Usage: build <span class="token url">[<span class="token content">options</span>][<span class="token variable">entry</span>]</span>\n\n在生产环境模式下零配置构建一个 .js 或 .vue 文件\n\nOptions:\n\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-t`</span>, <span class="token code-snippet code keyword">`--target &lt;target&gt;`</span>: 构建目标 (app | lib | wc | wc-async, 默认值: app)\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-n`</span>, <span class="token code-snippet code keyword">`--name &lt;name&gt;`</span>: 库的名字或 Web Components 组件的名字 (默认值: 入口文件名)\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-d`</span>, <span class="token code-snippet code keyword">`--dest &lt;dir&gt;`</span>: 输出目录 (默认值: dist)\n<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`-h`</span>, <span class="token code-snippet code keyword">`--help`</span>: 输出用法信息\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您也可以使用 <code>vue build</code> 将目标文件构建成一个生产环境的包并用来部署:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vue build MyComponent.vue\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>vue build</code> 也提供了将组件构建成为一个库或一个 Web Components 组件的能力。</p>',12);function l(o,p){return n(),a("div",null,[c,d(" more "),t])}const r=s(i,[["render",l],["__file","quick-dev.html.vue"]]);export{r as default};
