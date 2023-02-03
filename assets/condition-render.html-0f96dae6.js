import{_ as a,W as n,X as s,a2 as t}from"./framework-4fdeb3a3.js";const e={},p=t(`<h2 id="wx-if" tabindex="-1"><a class="header-anchor" href="#wx-if" aria-hidden="true">#</a> wx:if</h2><p>在框架中，使用 <code>wx:if=&quot;&quot;</code> 来判断是否需要渲染该代码块:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> True <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以用 <code>wx:elif</code> 和 <code>wx:else</code> 来添加一个 <code>else</code> 块:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{length &gt; 5}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 1 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>elif</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{length &gt; 2}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>else</span><span class="token punctuation">&gt;</span></span> 3 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="block-wx-if" tabindex="-1"><a class="header-anchor" href="#block-wx-if" aria-hidden="true">#</a> block wx:if</h2><p>因为 <code>wx:if</code> 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 <code>&lt;block /&gt;</code> 标签将多个组件包装起来，并在上边使用 <code>wx:if</code> 控制属性。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{true}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> view1 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> view2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p><code>&lt;block /&gt;</code> 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。</p></div><h2 id="wx-if-vs-hidden" tabindex="-1"><a class="header-anchor" href="#wx-if-vs-hidden" aria-hidden="true">#</a> wx:if vs hidden</h2><p>因为 <code>wx:if</code> 之中的模板也可能包含数据绑定，所以当 <code>wx:if</code> 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。</p><p>同时 <code>wx:if</code> 也是惰性的，如果在初始渲染条件为 <code>false</code>，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。</p><p>相比之下，<code>hidden</code> 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>一般来说，<code>wx:if</code> 有更高的切换消耗而 <code>hidden</code> 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 <code>hidden</code> 更好，如果在运行时条件不大可能改变则 <code>wx:if</code> 较好。</p></div>`,14),c=[p];function o(l,i){return n(),s("div",null,c)}const d=a(e,[["render",o],["__file","condition-render.html.vue"]]);export{d as default};
