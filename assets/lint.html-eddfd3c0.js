import{_ as i,a as o}from"./vscode-output-eslint-f77a3ddf.js";import{_ as p,X as c,Y as l,Z as s,$ as n,a1 as e,a3 as t,H as r}from"./framework-0ff09816.js";const d={},u=t(`<p>TypeScript 的代码检查应当使用 ESLint + <code>typescript-eslint-parser</code>。</p><h2 id="什么是代码检查" tabindex="-1"><a class="header-anchor" href="#什么是代码检查" aria-hidden="true">#</a> 什么是代码检查</h2><p>代码检查主要是用来发现代码错误、统一代码风格。</p><p>在 JavaScript 项目中，我们一般使用 ESLint 来进行代码检查。它通过插件化的特性极大的丰富了适用范围，搭配 <code>typescript-eslint-parser</code> 之后，甚至可以用来检查 TypeScript 代码。</p><h2 id="为什么需要代码检查" tabindex="-1"><a class="header-anchor" href="#为什么需要代码检查" aria-hidden="true">#</a> 为什么需要代码检查</h2><p>有人会觉得，JavaScript 非常灵活，所以需要代码检查。而 TypeScript 已经能够在编译阶段检查出很多问题了，为什么还需要代码检查呢?</p><p>因为 TypeScript 关注的重心是类型的匹配，而不是代码风格。当团队的人员越来越多时，同样的逻辑不同的人写出来可能会有很大的区别:</p><ul><li>缩进应该是四个空格还是两个空格?</li><li>是否应该禁用 <code>var</code>?</li><li>接口名是否应该以 <code>I</code> 开头?</li><li>是否应该强制使用 <code>===</code> 而不是 <code>==</code>?</li></ul><p>这些问题 TypeScript 不会关注，但是却影响到多人协作开发时的效率、代码的可理解性以及可维护性。</p><p>下面来看一个具体的例子:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myName <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myNane<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myName<span class="token punctuation">.</span><span class="token function">toStrng</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// tsc 报错信息:</span>
<span class="token comment">//</span>
<span class="token comment">// index.ts(3,27): error TS2552: Cannot find name &#39;myNane&#39;. Did you mean &#39;myName&#39;?</span>
<span class="token comment">// index.ts(4,34): error TS2551: Property &#39;toStrng&#39; does not exist on type &#39;string&#39;. Did you mean &#39;toString&#39;?</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">// eslint 报错信息:</span>
<span class="token comment">//</span>
<span class="token comment">// /path/to/index.ts</span>
<span class="token comment">//   3:27  error  &#39;myNane&#39; is not defined         no-undef</span>
<span class="token comment">//   5:38  error  Missing semicolon               semi</span>
<span class="token comment">//</span>
<span class="token comment">// ✖ 2 problems (2 errors, 0 warnings)</span>
<span class="token comment">//   1 errors, 0 warnings potentially fixable with the \`--fix\` option.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>存在的问题</th><th><code>tsc</code> 是否报错</th><th><code>eslint</code> 是否报错</th></tr></thead><tbody><tr><td><code>myName</code> 被误写成了 <code>myNane</code></td><td>✅</td><td>✅</td></tr><tr><td><code>toString</code> 被误写成了 <code>toStrng</code></td><td>✅️</td><td>❌</td></tr><tr><td>少了一个分号</td><td>❌</td><td>✅</td></tr></tbody></table><p>上例中，由于 <code>eslint</code> 无法识别 <code>myName</code> 存在哪些方法，所以对于拼写错误的 <code>toString</code> 没有检查出来。</p><p>而代码风格的错误不影响编译，故少了一个分号的错误 <code>tsc</code> 没有检查出来。</p><p>对于未定义的变量 <code>myNane</code>，<code>tsc</code> 可以检测出来。<code>eslint</code> 需要能够独立于某个编译环境运行，所以能检测出此类错误，而对于 TypeScript 代码，这其实是一种冗余的检测了。</p><p>虽然发现代码错误比统一的代码风格更重要，但是当一个项目越来越庞大，开发人员也越来越多的时候，代码风格的约束还是必不可少的。</p><h2 id="在-typescript-中使用-eslint" tabindex="-1"><a class="header-anchor" href="#在-typescript-中使用-eslint" aria-hidden="true">#</a> 在 TypeScript 中使用 ESLint</h2><h3 id="安装-eslint" tabindex="-1"><a class="header-anchor" href="#安装-eslint" aria-hidden="true">#</a> 安装 ESLint</h3><p>ESLint 可以安装在当前项目中或全局环境下，因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。可以运行下面的脚本来安装:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> eslint --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),m={href:"https://github.com/eslint/espree",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"typescript-eslint-parser",-1),k=s("code",null,"typescript",-1),b=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> typescript typescript-eslint-parser --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 <code>typescript-eslint-parser</code> 对一部分 ESLint 规则支持性不好，故我们需要安装 <code>eslint-plugin-typescript</code>，弥补一些支持性不好的规则。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> eslint-plugin-typescript --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a> 创建配置文件</h3><p>ESLint 需要一个配置文件来决定对哪些规则进行检查，配置文件的名称一般是 <code>.eslintrc.js</code> 或 <code>.eslintrc.json</code>。</p><p>当运行 ESLint 的时候检查一个文件的时候，它会首先尝试读取该文件的目录下的配置文件，然后再一级一级往上查找，将所找到的配置合并起来，作为当前被检查文件的配置。</p><p>我们在项目的根目录下创建一个 <code>.eslintrc.js</code>，内容如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;typescript-eslint-parser&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;typescript&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外</span>
    <span class="token literal-property property">eqeqeq</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">null</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat</span>
    <span class="token string-property property">&quot;typescript/class-name-casing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置中，我们指定了两个规则，其中 <code>eqeqeq</code> 是 ESLint 原生的规则(它要求必须使用 <code>===</code> 或 <code>!==</code>，禁止使用 <code>==</code> 或 <code>!=</code>，与 <code>null</code> 比较时除外)，<code>typescript/class-name-casing</code> 是 <code>eslint-plugin-typescript</code> 为 ESLint 增加的规则(它要求类和接口的命名必须遵守帕斯卡命名法，比如 <code>PersianCat</code>)。</p><p>规则的取值一般是一个数组(上例中的 <code>eqeqeq</code>)，其中第一项是 <code>off</code>、<code>warn</code> 或 <code>error</code> 中的一个，表示关闭、警告和报错。后面的项都是该规则的其他配置。</p><p>如果没有其他配置的话，则可以将规则的取值简写为数组中的第一项(上例中的 <code>typescript/class-name-casing</code>)。</p><p>关闭、警告和报错的含义如下:</p><ul><li>关闭: 禁用此规则</li><li>警告: 代码检查时输出错误信息，但是不会影响到 exit code</li><li>报错: 发现错误时，不仅会输出错误信息，而且 exit code 将被设为 1(一般 exit code 不为 0 则表示执行出现错误)</li></ul><h3 id="检查一个-ts-文件" tabindex="-1"><a class="header-anchor" href="#检查一个-ts-文件" aria-hidden="true">#</a> 检查一个 ts 文件</h3><p>创建了配置文件之后，我们来创建一个 ts 文件看看是否能用 ESLint 去检查它了。</p><p>创建一个新文件 <code>index.ts</code>，将以下内容复制进去:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>tom<span class="token punctuation">.</span>age <span class="token operator">==</span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tom<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;is 25 years old.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行以下命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./node_modules/.bin/eslint index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>则会得到如下报错信息:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/path/to/index.ts
   <span class="token number">1</span>:11  error  Interface <span class="token string">&#39;person&#39;</span> must be PascalCased  typescript/class-name-casing
  <span class="token number">11</span>:13  error  Expected <span class="token string">&#39;===&#39;</span> and instead saw <span class="token string">&#39;==&#39;</span>     eqeqeq

✖ <span class="token number">2</span> problems <span class="token punctuation">(</span><span class="token number">2</span> errors, <span class="token number">0</span> warnings<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的结果显示，刚刚配置的两个规则都生效了: 接口 <code>person</code> 必须写成帕斯卡命名规范，<code>==</code> 必须写成 <code>===</code>。</p><p>需要注意的是，我们使用的是 <code>./node_modules/.bin/eslint</code>，而不是全局的 <code>eslint</code> 脚本，这是因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。</p><p>可是每次执行这么长一段脚本颇有不便，我们可以通过在 <code>package.json</code> 中添加一个 <code>script</code> 来创建一个 npm script 来简化这个步骤:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint index.ts&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时只需执行 <code>npm run eslint</code> 即可。</p><h3 id="检查整个项目的-ts-文件" tabindex="-1"><a class="header-anchor" href="#检查整个项目的-ts-文件" aria-hidden="true">#</a> 检查整个项目的 ts 文件</h3><p>我们的项目源文件一般是放在 <code>src</code> 目录下，所以需要将 <code>package.json</code> 中的 <code>eslint</code> 脚本改为对一个目录进行检查。由于 <code>eslint</code> 默认不会检查 <code>.ts</code> 后缀的文件，所以需要加上参数 <code>--ext .ts</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint src --ext .ts&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时执行 <code>npm run eslint</code> 即会检查 <code>src</code> 目录下的所有 <code>.ts</code> 后缀的文件。</p><h3 id="在-vs-code-中集成-eslint-检查" tabindex="-1"><a class="header-anchor" href="#在-vs-code-中集成-eslint-检查" aria-hidden="true">#</a> 在 VS Code 中集成 ESLint 检查</h3><p>在编辑器中集成 ESLint 检查，可以在开发过程中就发现错误，极大的增加了开发效率。</p><p>要在 VS Code 中集成 ESLint 检查，我们需要先安装 ESLint 插件，点击「扩展」按钮，搜索 ESLint，然后安装即可。</p><p>VS Code 中的 ESLint 插件默认是不会检查 <code>.ts</code> 后缀的，需要在「文件 =&gt; 首选项 =&gt; 设置」中，添加以下配置:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时再打开一个 <code>.ts</code> 文件，将鼠标移到红色提示处，即可看到这样的报错信息了:</p><p><img src="`+i+'" alt="VS Code ESLint 错误信息" loading="lazy"></p><h3 id="使用-alloyteam-的-eslint-配置" tabindex="-1"><a class="header-anchor" href="#使用-alloyteam-的-eslint-配置" aria-hidden="true">#</a> 使用 AlloyTeam 的 ESLint 配置</h3><p>ESLint 原生的规则和 <code>eslint-plugin-typescript</code> 的规则太多了，而且原生的规则有一些在 TypeScript 中支持的不好，需要禁用掉。</p>',39),h={href:"https://github.com/AlloyTeam/eslint-config-alloy#typescript",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>安装:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint typescript typescript-eslint-parser eslint-plugin-typescript eslint-config-alloy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在您的项目根目录下创建 <code>.eslintrc.js</code>，并将以下内容复制到文件中:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;eslint-config-alloy/typescript&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里填入您的项目需要的全局变量</span>
    <span class="token comment">// 这里值为 false 表示这个全局变量不允许被重新赋值，比如:</span>
    <span class="token comment">//</span>
    <span class="token comment">// jQuery: false,</span>
    <span class="token comment">// $: false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里填入您的项目需要的个性化配置，比如:</span>
    <span class="token comment">//</span>
    <span class="token comment">// // @fixable 一个缩进必须用两个空格替代</span>
    <span class="token comment">// &#39;indent&#39;: [</span>
    <span class="token comment">//     &#39;error&#39;,</span>
    <span class="token comment">//     2,</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//         SwitchCase: 1,</span>
    <span class="token comment">//         flatTernaryExpressions: true</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// ]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-eslint-检查-tsx-文件" tabindex="-1"><a class="header-anchor" href="#使用-eslint-检查-tsx-文件" aria-hidden="true">#</a> 使用 ESLint 检查 tsx 文件</h3><p>如果需要同时支持对 tsx 文件的检查，则需要对以上步骤做一些调整:</p><h4 id="安装-eslint-plugin-react" tabindex="-1"><a class="header-anchor" href="#安装-eslint-plugin-react" aria-hidden="true">#</a> 安装 <code>eslint-plugin-react</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint-plugin-react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="package-json-中的-scripts-eslint-添加-tsx-后缀" tabindex="-1"><a class="header-anchor" href="#package-json-中的-scripts-eslint-添加-tsx-后缀" aria-hidden="true">#</a> package.json 中的 <code>scripts.eslint</code> 添加 <code>.tsx</code> 后缀</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint src --ext .ts,.tsx&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vs-code-的配置中新增-typescriptreact-检查" tabindex="-1"><a class="header-anchor" href="#vs-code-的配置中新增-typescriptreact-检查" aria-hidden="true">#</a> VS Code 的配置中新增 typescriptreact 检查</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescriptreact&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-alloyteam-eslint-规则中的-typescript-react-版本" tabindex="-1"><a class="header-anchor" href="#使用-alloyteam-eslint-规则中的-typescript-react-版本" aria-hidden="true">#</a> 使用 AlloyTeam ESLint 规则中的 TypeScript React 版本</h4>`,13),y={href:"https://github.com/AlloyTeam/eslint-config-alloy#typescript-react",target:"_blank",rel:"noopener noreferrer"},f=t('<h2 id="troubleshootings" tabindex="-1"><a class="header-anchor" href="#troubleshootings" aria-hidden="true">#</a> Troubleshootings</h2><h3 id="cannot-find-module-typescript-eslint-parser" tabindex="-1"><a class="header-anchor" href="#cannot-find-module-typescript-eslint-parser" aria-hidden="true">#</a> Cannot find module typescript-eslint-parser</h3><p>您运行的是全局的 eslint，需要改为运行 <code>./node_modules/.bin/eslint</code>。</p><h3 id="cannot-read-property-type-of-null" tabindex="-1"><a class="header-anchor" href="#cannot-read-property-type-of-null" aria-hidden="true">#</a> cannot read property type of null</h3><p>需要关闭 <code>eslint-plugin-react</code> 中的规则 <code>react/jsx-indent</code>。</p>',5),q={href:"https://github.com/AlloyTeam/eslint-config-alloy/issues/new",target:"_blank",rel:"noopener noreferrer"},x=t('<h3 id="vs-code-没有显示出-eslint-的报错" tabindex="-1"><a class="header-anchor" href="#vs-code-没有显示出-eslint-的报错" aria-hidden="true">#</a> VS Code 没有显示出 ESLint 的报错</h3><ol><li>检查「文件 =&gt; 首选项 =&gt; 设置」中有没有配置正确</li><li>检查必要的 npm 包有没有安装</li><li>检查 <code>.eslintrc.js</code> 有没有配置</li><li>检查文件是不是在 <code>.eslintignore</code> 中</li></ol><p>如果以上步骤都不奏效，则可以在「文件 =&gt; 首选项 =&gt; 设置」中配置 <code>&quot;eslint.trace.server&quot;: &quot;messages&quot;</code>，按 <code>Ctrl</code>+<code>Shift</code>+<code>U</code> 打开输出面板，然后选择 ESLint 输出，查看具体错误。</p><p><img src="'+o+'" alt="VS Code 的 ESLint 输出" loading="lazy"></p><h3 id="为什么-eslint-无法检查出使用了未定义的变量-no-undef-规则为什么被关闭了" tabindex="-1"><a class="header-anchor" href="#为什么-eslint-无法检查出使用了未定义的变量-no-undef-规则为什么被关闭了" aria-hidden="true">#</a> 为什么 ESLint 无法检查出使用了未定义的变量(<code>no-undef</code> 规则为什么被关闭了)</h3>',5),S=s("code",null,"typescript-eslint-parser",-1),_={href:"https://github.com/eslint/typescript-eslint-parser/issues/416",target:"_blank",rel:"noopener noreferrer"},j=s("code",null,"no-undef",-1),E=t(`<p>所以我们一般会关闭 <code>no-undef</code> 规则。</p><h3 id="为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错" tabindex="-1"><a class="header-anchor" href="#为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错" aria-hidden="true">#</a> 为什么有些定义了的变量(比如使用 <code>enum</code> 定义的变量)未使用，ESLint 却没有报错</h3><p>因为无法支持这种变量定义的检查。建议在 <code>tsconfig.json</code> 中添加以下配置，使 <code>tsc</code> 编译过程能够检查出定义了未使用的变量:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了" tabindex="-1"><a class="header-anchor" href="#启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了" aria-hidden="true">#</a> 启用了 noUnusedParameters 之后，只使用了第二个参数，但是又必须传入第一个参数，这就会报错了</h3>`,5),L={href:"https://github.com/Microsoft/TypeScript/issues/9458",target:"_blank",rel:"noopener noreferrer"};function T(w,C){const a=r("ExternalLinkIcon");return c(),l("div",null,[u,s("p",null,[n("由于 ESLint 默认使用 "),s("a",m,[n("Espree"),e(a)]),n(" 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 "),v,n("，替代掉默认的解析器，别忘了同时安装 "),k,n(":")]),b,s("p",null,[n("这里我推荐使用 "),s("a",h,[n("AlloyTeam ESLint 规则中的 TypeScript 版本"),e(a)]),n("，它已经为我们提供了一套完善的配置规则。")]),g,s("p",null,[s("a",y,[n("AlloyTeam ESLint 规则中的 TypeScript React 版本"),e(a)])]),f,s("p",null,[n("如果仍然报错，多半是因为某些规则需要被关闭，可以使用「二分排错法」检查是哪个规则造成了错误。也欢迎"),s("a",q,[n("给 eslint-config-alloy 提 issue"),e(a)]),n("。")]),x,s("p",null,[n("因为 "),S,n(),s("a",_,[n("无法支持 "),j,n(" 规则"),e(a)]),n("。它针对正确的接口定义会报错。")]),E,s("p",null,[n("第一个参数以下划线开头即可，参考 "),s("a",L,[n("https://github.com/Microsoft/TypeScript/issues/9458"),e(a)])])])}const A=p(d,[["render",T],["__file","lint.html.vue"]]);export{A as default};
