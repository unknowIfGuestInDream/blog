import{_ as p,W as c,X as i,$ as u,Y as n,a0 as s,a1 as l,Z as a,a2 as r,E as t}from"./framework-ae009c3e.js";const d={},k=n("p",null,"Vuex 是 Vue 官方出品的状态管理组件，是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。",-1),v=r(`<p>我们可以从下面一个简单的状态管理案例开始。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// state</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// view</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;{{ count }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token comment">// actions</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个状态自管理应用包含以下几个部分:</p><ul><li>state: 驱动应用的数据源；</li><li>view: 以声明方式将 state 映射到视图；</li><li>actions: 响应在 view 上的用户输入导致的状态变化。</li></ul><p>以下是一个表示“单向数据流”理念的简单示意:</p><p><img src="https://vuex.vuejs.org/flow.png" alt="图片" loading="lazy"></p><p>但是，当我们的应用遇到<strong>多个组件共享状态</strong>时，单向数据流的简洁性很容易被破坏:</p><ul><li>多个视图依赖于同一状态。</li><li>来自不同视图的行为需要变更同一状态。</li></ul><p>此时，我们就需要进行复杂的组件通信，这在开发中很不方便。</p><p><strong>所以此时</strong>，我们就需要 <strong>Vuex</strong>!</p><h2 id="vuex-介绍" tabindex="-1"><a class="header-anchor" href="#vuex-介绍" aria-hidden="true">#</a> Vuex 介绍</h2><p>每一个 Vuex 应用的核心就是 <code>store</code> (仓库)。“store”基本上就是一个容器，它包含着您的应用中大部分的状态 (<code>state</code>)。Vuex 和单纯的全局对象有以下两点不同:</p><p>Vuex 的状态存储是响应式的。当 Vue 组件从 <code>store</code> 中读取状态的时候，若 <code>store</code> 中的状态发生变化，那么相应的组件也会相应地得到高效更新。</p><p>您不能直接改变 <code>store</code> 中的状态。改变 <code>store</code> 中的状态的唯一途径就是显式地提交 (commit) <code>mutation</code>。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。</p><h3 id="最简单的-store" tabindex="-1"><a class="header-anchor" href="#最简单的-store" aria-hidden="true">#</a> 最简单的 Store</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> Vuex<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，可以通过 <code>store.state</code> 来获取状态对象，以及通过 <code>store.commit</code> 方法触发状态变更:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;increment&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -&gt; 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，任何使用了 <code>store.state.count</code> 的组件都会得到对应的更新。</p><p>通过提交 mutation 的方式，而非直接改变 <code>store.state.count</code>，是因为我们想要更明确地追踪到状态的变化。这个简单的约定能够让您的意图更加明显，这样您在阅读代码的时候能更容易地解读应用内部的状态改变。</p><h3 id="vuex-的意义" tabindex="-1"><a class="header-anchor" href="#vuex-的意义" aria-hidden="true">#</a> Vuex 的意义</h3><p>在引入 Vuex 之后，Vuex 会被全局挂载，这意味着访问任何一个组件的 <code>this.$store</code> 都会指向同一个——我们引入的 Vuex。</p><p>也就是说，我们可以在所有组件内使用 <code>this.$store.state</code> 来共享同一份数据，并在数据发生改变的时候得到更新。</p><div class="custom-container info"><p class="custom-container-title">関連情報</p><p>在 setup 中，需要使用 useStore 函数来获取 store 对象。</p></div><p>任何时候，提交一个 <code>mutation</code> 到 Vuex，会触发这份共享数据的变更，并通知全局的任何一个使用了变更数据的组件进行变更。</p><p>所以说 Vuex 通过在全局范围内的所有组件引入，使得全局共享了同一份数据，全局的任何组件都可以更新这份数据，同时一旦数据发生更新，全局任意使用了更新数据的组件也会立即的到更新通知并完成自身更新。</p><p>这份数据 (state) 就成为状态，而 Vuex 自身就成为了一个状态树。通过这种方式，全局的状态统一、状态共享与通信变得十分简单。</p><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h3><p>State 即是全局共享的那一份数据。</p><p>每个使用了 State 组件一般只使用了全局 State 的少量数据，而且对其他部分的数据结构并不知情。</p><p>由于状态被全局共享，为了整个应用的稳定考虑，那么就不可能允许任何一个组件随意改变这个状态，否则一旦删除或改变了一些被其他组件使用的状态，就可能会造成其他组件异常。所以 State 是一份响应式的只读属性。</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p>直接改变 state 是严厉禁止的!!!!</p></div><h3 id="mutation" tabindex="-1"><a class="header-anchor" href="#mutation" aria-hidden="true">#</a> Mutation</h3><p>因为上面的安全缘故，State 被设置只读，那么最安全的方式就是预先设置好一系列改变方式，来有条理、安全地改变 State 的数据。</p><p>Mutation 就是这样是设置的。所有 Mutation 都是一个函数，可以给这个函数传递参数。当组件想要改变状态时，他们需要通过 <code>store.commit(&lt;mutation函数名&gt;, &lt;参数&gt;)</code> 的方式，来触发对应的 Mutation 函数，在 Mutation 函数执行的过程中，按照预先设置好的方法改变 State。</p><p>所以总之，Mutation 就是一系列设置好的函数，每个函数是一个改变 State 的方式，组件想要改变 State 状态的时候，就调用这些方法。这样就达到了，既可以让组件改变状态，又阻止了组件随意改变状态，保障了整颗状态树的稳定性。</p><h3 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h3><p>在 Vuex 中，还设置了 <code>Getter</code> 和 <code>Action</code> 两种概念。</p><h4 id="getter" tabindex="-1"><a class="header-anchor" href="#getter" aria-hidden="true">#</a> Getter</h4><p>Getter 是 State 的派生。</p><p>有时候我们不是直接使用 State 中的数据，而是需要从 <code>store</code> 中的 <code>state</code> 中派生出一些状态，也就是对 State 的数据进行一些处理再使用。</p><p>如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。</p><p>所以 Vuex 允许我们在 <code>store</code> 中定义 “<code>getter</code>” (可以认为是 <code>store</code> 的计算属性)。就像计算属性一样，<code>getter</code> 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</p><h4 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h4><p>有些时候，我们可能会需要连续改变 state，这就意味着我们要接连触发多个 mutation，但是如果 mutation 是异步的(比如包含了网络操作)，组件就不知道何时 mutation 会执行完进行 state 的改变，这个时候 <code>Action</code> 就被设计出来。</p><p>Action 类似于 <code>mutation</code>，不同在于:</p><ul><li><p>Action 提交的是 <code>mutation</code>，而不是直接变更状态。</p></li><li><p>Action 可以包含任意异步操作。</p></li></ul><p>所以，这样组件只需要调用 <code>Action</code>，把多次提交 <code>mutation</code> 的任务交给 Action，这样就完成了复杂 <code>mutation</code> 的提交。</p><hr><p>更多详细的东西大家还是要看文档!</p><h2 id="vuex-模块化" tabindex="-1"><a class="header-anchor" href="#vuex-模块化" aria-hidden="true">#</a> Vuex 模块化</h2><p>可以想象，随着整个网站架构的变大，网页数的扩张，状态树将会越来越庞大，可能有数十上百个 state 子项和同等数量级的 mutation。</p><p>所以自然，Vuex 也支持模块化。</p><p>每个子 vuex 包含了自身完整的 <code>state</code>、<code>mutation</code> 与 <code>action</code>，通过主 Vuex 的 <code>module</code> 属性引入，在使用时会把对应的项目注入自身的对应部分。</p><h2 id="vuex-案例" tabindex="-1"><a class="header-anchor" href="#vuex-案例" aria-hidden="true">#</a> Vuex 案例</h2>`,55),m=n("h2",{id:"文档地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文档地址","aria-hidden":"true"},"#"),a(" 文档地址")],-1),h={href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"};function x(b,g){const e=t("RouterLink"),o=t("ExternalLinkIcon");return c(),i("div",null,[k,u(" more "),v,n("ul",null,[n("li",null,[s(e,{to:"/ja/code/vue/vuex/demo.html"},{default:l(()=>[a("点击此处")]),_:1})])]),m,n("p",null,[a("文档地址: "),n("a",h,[a("Vuex 教程"),s(o)])])])}const V=p(d,[["render",x],["__file","get-started.html.vue"]]);export{V as default};
