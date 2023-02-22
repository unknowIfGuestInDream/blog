import{_ as s}from"./promise-d6e99177.js";import{_ as a,W as t,X as p,$ as e,Y as n,Z as o,a2 as c}from"./framework-d7af73f9.js";const u={},l=n("p",null,[n("code",null,"Canvas"),o(" 是 HTML5 新增的组件，它就像一块幕布，可以用 JavaScript 在上面绘制各种图表、动画等。")],-1),i=c(`<p>没有 Canvas 的年代，绘图只能借助 Flash 插件实现，页面不得不用 JavaScript 和 Flash 进行交互。有了 Canvas，我们就再也不需要 Flash 了，直接使用 JavaScript 完成绘制。</p><p>一个 Canvas 定义了一个指定尺寸的矩形框，在这个范围内我们可以随意绘制:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-canvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于浏览器对 HTML5 标准支持不一致，所以，通常在 <code>&lt;canvas&gt;</code> 内部添加一些说明性 HTML 代码，如果浏览器支持 Canvas，它将忽略 <code>&lt;canvas&gt;</code> 内部的 HTML，如果浏览器不支持 Canvas，它将显示 <code>&lt;canvas&gt;</code> 内部的 HTML:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-stock<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Current Price: 25.51<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用 Canvas 前，用 <code>canvas.getContext</code> 来测试浏览器是否支持 Canvas:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- HTML代码 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-canvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">heigth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>您的浏览器不支持Canvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;您的浏览器支持Canvas!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;您的浏览器不支持Canvas!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>getContext(&#39;2d&#39;)</code> 方法让我们拿到一个 <code>CanvasRenderingContext2D</code> 对象，所有的绘图操作都需要通过这个对象完成。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果需要绘制 3D 怎么办? HTML5 还有一个 WebGL 规范，允许在 Canvas 中绘制 3D 图形:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>gl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;webgl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本节我们只专注于绘制 2D 图形。</p><h2 id="绘制形状" tabindex="-1"><a class="header-anchor" href="#绘制形状" aria-hidden="true">#</a> 绘制形状</h2><p>我们可以在 Canvas 上绘制各种形状。在绘制前，我们需要先了解一下 Canvas 的坐标系统:</p><p><img src="`+s+`" alt="canvas-xy" loading="lazy"></p><p>Canvas 的坐标以左上角为原点，水平向右为 X 轴，垂直向下为 Y 轴，以像素为单位，所以每个点都是非负整数。</p><p><code>CanvasRenderingContext2D</code> 对象有若干方法来绘制图形:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-shape-canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#dddddd&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 设置颜色</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 把(10,10)位置大小为130x130的矩形涂色</span>
<span class="token comment">// 利用Path绘制复杂路径:</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Path2D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
path<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
path<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
path<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
path<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
path<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
path<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
path<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;#0000ff&quot;</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绘制文本" tabindex="-1"><a class="header-anchor" href="#绘制文本" aria-hidden="true">#</a> 绘制文本</h2><p>绘制文本就是在指定的位置输出文本，可以设置文本的字体、样式、阴影等，与 CSS 完全一致:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-text-canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>shadowOffsetX <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>shadowOffsetY <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>shadowBlur <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token string">&quot;#666666&quot;</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&quot;24px Arial&quot;</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#333333&quot;</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">&quot;带阴影的文字&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Canvas 除了能绘制基本的形状和文本，还可以实现动画、缩放、各种滤镜和像素转换等高级操作。如果要实现非常复杂的操作，考虑以下优化方案:</p><ul><li><p>通过创建一个不可见的 Canvas 来绘图，然后将最终绘制结果复制到页面的可见 Canvas 中；</p></li><li><p>尽量使用整数坐标而不是浮点数；</p></li><li><p>可以创建多个重叠的 Canvas 绘制不同的层，而不是在一个 Canvas 中绘制非常复杂的图；</p></li><li><p>背景图片如果不变可以直接用 <code>&lt;img&gt;</code> 标签并放到最底层。</p></li></ul>`,24);function k(r,d){return t(),p("div",null,[l,e(" more "),i])}const b=a(u,[["render",k],["__file","canvas.html.vue"]]);export{b as default};
