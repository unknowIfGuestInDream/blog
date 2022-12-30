import{_ as o,W as p,X as c,Y as s,Z as n,a0 as e,a2 as t,E as l}from"./framework-65b62f32.js";const i={},u=t(`<p>我们从一个简单的例子开始。</p><p>将以下代码复制到 <code>hello.ts</code> 中:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc hello.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时候会生成一个编译好的文件 <code>hello.js</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 中，使用 <code>:</code> 指定变量的类型，<code>:</code> 的前后有没有空格都可以。</p><p>上述例子中，我们用 <code>:</code> 指定 <code>person</code> 参数类型为 <code>string</code>。但是编译为 js 之后，并没有什么检查的代码被插入进来。</p><p><strong>TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。</strong></p>`,10),r=s("code",null,"let",-1),d=s("code",null,"var",-1),k={href:"http://es6.ruanyifeng.com/#docs/let",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>下面尝试把这段代码编译一下:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑器中会提示错误，编译的时候也会出错:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>index.ts<span class="token punctuation">(</span><span class="token number">6,22</span><span class="token punctuation">)</span>: error TS2345: Argument of <span class="token builtin class-name">type</span> <span class="token string">&#39;number[]&#39;</span> is not assignable to parameter of <span class="token builtin class-name">type</span> <span class="token string">&#39;string&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是还是生成了 js 文件:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TypeScript 编译的时候即使报错了，还是会生成编译结果</strong>，我们仍然可以使用这个编译之后的文件。</p>`,7),m=s("code",null,"tsconfig.json",-1),b=s("code",null,"noEmitOnError",-1),g=s("code",null,"tsconfig.json",-1),h={href:"http://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html",target:"_blank",rel:"noopener noreferrer"};function f(y,w){const a=l("ExternalLinkIcon");return p(),c("div",null,[u,s("blockquote",null,[s("p",null,[r,n(" 是 ES6 中的关键字，和 "),d,n(" 类似，用于定义一个局部变量，可以参阅 "),s("a",k,[n("let 和 const 命令"),e(a)]),n("。")])]),v,s("p",null,[n("如果要在报错的时候终止 js 文件的生成，可以在 "),m,n(" 中配置 "),b,n(" 即可。关于 "),g,n("，请参阅"),s("a",h,[n("官方手册"),e(a)]),n("("),s("a",_,[n("中文版"),e(a)]),n(")。")])])}const q=o(i,[["render",f],["__file","hello-typescript.html.vue"]]);export{q as default};
