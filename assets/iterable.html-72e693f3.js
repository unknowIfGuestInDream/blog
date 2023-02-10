import{_ as p,X as o,Y as c,Z as n,$ as s,a1 as e,a0 as l,a3 as t,H as i}from"./framework-0ff09816.js";const r={},u={href:"https://api.dart.dev/stable/dart-core/Iterable-class.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://api.dart.dev/stable/dart-core/List-class.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://api.dart.dev/stable/dart-core/Set-class.html",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"本节包含以下内容:",-1),m=n("ul",null,[n("li",null,"如何读取 Iterable 的元素。"),n("li",null,"如何检查 Iterable 的元素是否满足条件。"),n("li",null,"如何过滤 Iterable 的内容。"),n("li",null,"如何将 Iterable 的内容映射到其他值。")],-1),b=n("h2",{id:"什么是集合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是集合","aria-hidden":"true"},"#"),s(" 什么是集合")],-1),h=n("p",null,"集合是代表一组对象(称为元素)的对象。可迭代对象是一种集合。",-1),g=n("p",null,"集合可以为空，也可以包含许多元素。根据目的，集合可以具有不同的结构和实现。这些是一些最常见的集合类型:",-1),f={href:"https://api.dart.dev/stable/dart-core/List-class.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://api.dart.dev/stable/dart-core/Set-class.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://api.dart.dev/stable/dart-core/Map-class.html",target:"_blank",rel:"noopener noreferrer"},_=t('<h2 id="什么是可迭代的" tabindex="-1"><a class="header-anchor" href="#什么是可迭代的" aria-hidden="true">#</a> 什么是可迭代的</h2><p>一个 <code>Iterable</code> 是可以顺序访问的元素的集合。</p><p>在 Dart 中，一个 <code>Iterable</code> 是一个抽象类，这意味着您不能直接实例化它。但是，您可以 <code>Iterable</code> 通过创建新的 <code>List</code> 或来创建新的 <code>Set</code>。</p><p><code>List</code> 和 <code>Set</code> 都是 <code>Iterable</code>，所以它们具有和 <code>Iterable</code> 类相同的方法和属性。</p>',4),y=n("code",null,"Map",-1),x={href:"https://api.dart.dev/stable/dart-collection/HashMap-class.html",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"Map",-1),S=n("code",null,"Iterable",-1),E=n("code",null,"entries",-1),N=n("code",null,"values",-1),L=t(`<p>此示例显示 <code>List</code> 的 <code>int</code>，也为 <code>Iterable</code> 的 <code>int</code>:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> iterable <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个 List 的不同之处 在于，使用 <code>Iterable</code>，您不能保证按索引读取元素将是有效的。<code>Iterable</code> 相对 <code>List</code>，没有 <code>[]</code> 运算符。</p><p>例如，考虑以下代码，该代码无效:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> iterable <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
int value <span class="token operator">=</span> iterable<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您使用 <code>[]</code> 读取元素，则编译器会告诉您 <code>Iterable</code> 类上未定义运算符 &#39;<code>[]</code>&#39;，这意味着您不能在这种情况下使用 <code>[index]</code>。</p><p>您可以改为使用读取元素 <code>elementAt()</code>，该元素将逐步浏览可迭代的元素，直到到达该位置为止。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> iterable <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
int value <span class="token operator">=</span> iterable<span class="token punctuation">.</span><span class="token function">elementAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取元素" tabindex="-1"><a class="header-anchor" href="#读取元素" aria-hidden="true">#</a> 读取元素</h2><p>您可以使用 <code>for-in</code> 循环依次读取可迭代的元素。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> iterable <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;Salad&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Popcorn&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Toast&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> element <span class="token keyword">in</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在后台，<code>for-in</code> 循环使用迭代器。但是，您很少看到直接使用 <code>Iterator</code> API 的情况，因为 <code>for-in</code> 它更易于阅读和理解，并且不易出错。</p></div><div class="hint-container tip"><p class="hint-container-title">关键词</p><ul><li>Iterable: Dart Iterable 类。</li><li>Iterator: 用于使用 for-in 从 Iterable 对象读取元素的对象。</li><li><code>for-in</code> 循环: 一种简单的按顺序读取 <code>Iterable</code> 元素的方法。</li></ul></div><h3 id="使用-fist-和-last" tabindex="-1"><a class="header-anchor" href="#使用-fist-和-last" aria-hidden="true">#</a> 使用 <code>fist</code> 和 <code>last</code></h3><p>在某些情况下，您只想访问 <code>Iterable</code> 的第一个或最后一个元素。</p><p>使用 <code>Iterable</code> 类，您无法直接访问元素，因此无法调用 <code>iterable[0]</code> 来访问第一个元素。相反，您可以使用 <code>first</code> 获取第一个元素的。</p><p>同样，对于 Iterable 类，您不能使用运算符 <code>[]</code> 来访问最后一个元素，但是可以使用该 <code>last</code> 属性。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> iterable <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;Salad&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Popcorn&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Toast&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;The first element is </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">iterable<span class="token punctuation">.</span>first</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;The last element is </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">iterable<span class="token punctuation">.</span>last</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>因为访问 <code>Iterable</code> 的最后一个元素需要逐步浏览所有其他元素， 所以 <code>last</code> 可能很慢。使用 <code>first</code> 或 <code>last</code> 在一个空 <code>Iterable</code> 会产生 <code>StateError</code>。</p></div><h3 id="使用-firstwhere" tabindex="-1"><a class="header-anchor" href="#使用-firstwhere" aria-hidden="true">#</a> 使用 <code>firstWhere()</code></h3><p>您已经看到您可以按顺序访问 <code>Iterable</code> 元素，并且可以轻松获取第一个或最后一个元素。</p><p>现在，您将学习如何使用 <code>firstWhere()</code> 来找到满足某些条件的第一个元素。此方法要求您传递一个谓词(predicate)，该谓词是一个在输入满足特定条件时返回 true 的函数。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">String</span> element <span class="token operator">=</span> iterable<span class="token punctuation">.</span><span class="token function">firstWhere</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> element<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，如果要查找第一个字符数超过 5 个的 String，则必须传递一个在元素大小大于 5 时返回 true 的谓词。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>bool <span class="token function">predicate</span><span class="token punctuation">(</span><span class="token class-name">String</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> element<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;Salad&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Popcorn&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Toast&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Lasagne&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// You can find with a simple expression:</span>
  <span class="token keyword">var</span> element1 <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">firstWhere</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> element<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>element1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Or try using a function block:</span>
  <span class="token keyword">var</span> element2 <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">firstWhere</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> element<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>element2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Or even pass in a function reference:</span>
  <span class="token keyword">var</span> element3 <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">firstWhere</span><span class="token punctuation">(</span>predicate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>element3<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// You can also use an \`orElse\` function in case no value is found!</span>
  <span class="token keyword">var</span> element4 <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">firstWhere</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> element<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span>
    orElse<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string-literal"><span class="token string">&#39;None!&#39;</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>element4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，您可以看到三种不同的方式来编写谓词:</p><ul><li>作为表达式: 测试代码的一行使用箭头语法(<code>=&gt;</code>)。</li><li>作为一个块: 测试代码在方括号和 <code>return</code> 语句之间有多行。</li><li>作为函数: 测试代码位于 <code>firstWhere()</code> 作为参数传递给方法的外部函数中。</li></ul><p>没有正确或错误的方法。使用最适合您的方式，使您的代码更易于阅读和理解。</p><p>在示例中，<code>firstWhereWithOrElse()</code> 使用可选的 named 参数 <code>orElse</code> 调用了 <code>firstWhere()</code>。当找不到元素时，该参数提供了替代方法。在这种情况下，由于没有元素满足提供的条件，因此返回了文本 <code>&#39;None!&#39;</code>。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果没有元素满足测试谓词，并且 <code>orElse</code> 未提供参数，则 <code>firstWhere()</code> 抛出 <code>StateError</code>。</p></div><div class="hint-container tip"><p class="hint-container-title">快速回顾</p><ul><li>Iterable 中的元素必须被依次访问。</li><li>遍历所有元素的最简单方法是使用 <code>for-in</code> 循环。</li><li>您可以使用 <code>first</code> 和 <code>last</code> getter 获取第一个和最后一个元素。</li><li>您还可以通过找到第一个满足条件的元素 <code>firstWhere()</code>。</li><li>您可以将测试谓词编写为表达式，块或函数。</li></ul><p>关键词:</p><ul><li>谓词(Predicate): 满足特定条件时返回 true 的函数。</li></ul></div><h3 id="singlewhere" tabindex="-1"><a class="header-anchor" href="#singlewhere" aria-hidden="true">#</a> singleWhere</h3><p><code>singleWhere()</code> 工作方式与 <code>firstWhere()</code> 相似，但是在这种情况下，它只期望 Iterable 的一个元素满足谓词。如果 Iterable 满足谓词条件的元素超过一个或全部不满足，则该方法将引发 <code>StateError</code> 异常。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>singleWhere()</code> 依次执行直到 Iterable 的最后一个元素，如果 Iterable 数量为无限或包含大量元素，可能会导致问题。</p></div><h2 id="条件检查" tabindex="-1"><a class="header-anchor" href="#条件检查" aria-hidden="true">#</a> 条件检查</h2><p>使用 Iterable 时，有时您需要验证集合的所有元素都满足某些条件。</p><p>您可能很想使用这样的 <code>for-in</code> 循环来编写解决方案:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> item <span class="token keyword">in</span> items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，您可以使用 <code>every()</code> 方法完成相同操作:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">return</span> items<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> element<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>every()</code> 方法可以使代码更易读，更紧凑且更不易出错。</p><h3 id="使用-any-和-every" tabindex="-1"><a class="header-anchor" href="#使用-any-和-every" aria-hidden="true">#</a> 使用 any() 和 every()</h3><p>Iterable 类提供了两个方法，您可以用它来验证条件:</p><ul><li>any(): 如果至少一个元素满足条件，则返回 true。</li><li>every(): 如果所有元素都满足条件，则返回 true。</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;Salad&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Popcorn&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;Toast&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> element<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;a&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;At least one element contains &quot;a&quot;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> element<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;All elements have length &gt;= 5&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在示例中，<code>any()</code> 验证至少一个元素包含字符 <code>a</code>，<code>every()</code> 验证所有元素的长度等于或大于 5。</p><p>运行代码后，尝试更改 <code>any()</code> 的谓词，使其返回 false:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> element<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Z&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;At least one element contains &quot;Z&quot;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;No element contains &quot;Z&quot;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您还可以 <code>any()</code> 用来验证 Iterable 中没有任何元素满足特定条件。</p><div class="hint-container tip"><p class="hint-container-title">快速回顾</p><ul><li>尽管可以使用 <code>for-in</code> 循环来检查条件，但是有更好的方法可以执行此操作。</li><li>any() 允许您检查是否有任何元素满足条件。</li><li>every() 允许您检查所有元素均满足条件。</li></ul></div><h2 id="筛选" tabindex="-1"><a class="header-anchor" href="#筛选" aria-hidden="true">#</a> 筛选</h2><p>前面的部分介绍了 <code>firstWhere()</code> 与 <code>singleWhere()</code> 这些可以帮助您找到满足特定谓词的元素的方法。</p><p>但是，如果要查找满足特定条件的所有元素怎么办? 您可以使用 <code>where()</code> 方法来完成。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> evenNumbers <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> number<span class="token punctuation">.</span>isEven<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在此示例中， numbers 是包含多个 int 值的 Iterable，<code>where()</code> 会查找所有偶数。</p><p><code>where()</code> 的输出是另一个 Iterable，您可以使用它来对其进行迭代或应用其他 Iterable 方法。在下一个示例中，where() 的输出直接在 <code>for-in</code> 循环内部使用。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> evenNumbers <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> number<span class="token punctuation">.</span>isEven<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> number <span class="token keyword">in</span> evenNumbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">number</span></span><span class="token string"> is even&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-where" tabindex="-1"><a class="header-anchor" href="#使用-where" aria-hidden="true">#</a> 使用 where()</h3><p>此示例真是如何将 <code>where()</code> 与其他方法(例如 <code>any()</code>)一起使用。</p><p>在此示例中，<code>where()</code> 用于查找所有偶数，然后 <code>any()</code> 用于检查结果是否包含负数。</p><p>在示例的后面，<code>where()</code> 再次用于查找所有大于 1000 的数字。由于没有数字，结果为空 Iterable。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果没有元素满足 <code>where()</code> 中的谓词 ，则该方法返回 null Iterable。不同于 <code>singleWhere()</code> 或 <code>firstWhere()</code>， <code>where()</code> 不会引发 StateError 异常。</p></div><h3 id="使用-takewhile" tabindex="-1"><a class="header-anchor" href="#使用-takewhile" aria-hidden="true">#</a> 使用 takeWhile</h3><p>方法 <code>takeWhile()</code> 和 <code>skipWhile()</code> 还可以帮助您从 Iterable 中过滤元素。</p><p>这个例子展示了 <code>takeWhile()</code> 和 <code>skipWhile()</code> 是如何拆分包含数字的 Iterable。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> numbersUntilZero <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">takeWhile</span><span class="token punctuation">(</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> number <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Numbers until 0: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">numbersUntilZero</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> numbersAfterZero <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">skipWhile</span><span class="token punctuation">(</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> number <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Numbers after 0: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">numbersAfterZero</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，<code>takeWhile()</code> 返回一个 Iterable，其中包含所有导致满足谓词的元素的元素。另一方面，<code>skipWhile()</code> 返回一个移除了满足谓词的元素及它之前的所有元素的 Iterable。注意，包括满足谓词的元素。</p><div class="hint-container tip"><p class="hint-container-title">快速回顾</p><ul><li>使用 <code>where()</code> 过滤 Iterable 的元素。</li><li><code>where()</code> 的输出是另一个 Iterable。</li><li>使用 <code>takeWhile()</code> 和 <code>skipWhile()</code> 获取元素，直到满足条件为止。</li><li>这些方法的输出可以为空 Iterable。</li></ul></div><h2 id="映射" tabindex="-1"><a class="header-anchor" href="#映射" aria-hidden="true">#</a> 映射</h2><p>Iterables 使用 <code>map()</code> 方法进行映射。您可以在每个元素上应用功能，并用新元素替换每个元素。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> output <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> number <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在此示例中，Iterable 数字的每个元素都乘以 10。</p><p>您还可以使用 <code>map()</code> 将元素转换为其他对象，例如，将 int 全部转换为 String，如下面的示例所示。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> output <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> number<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>map()</code> 返回一个惰性的 Iterable，这意味着仅在迭代元素时才调用提供的函数。</p></div><div class="hint-container tip"><p class="hint-container-title">快速回顾</p><ul><li><code>map()</code> 将对应函数应用于 Iterable 的所有元素。</li><li><code>map()</code> 的输出是另一个 Iterable。</li><li>在 Iterable 迭代之前，不会调用该函数。</li></ul></div>`,76);function A(Z,T){const a=i("ExternalLinkIcon");return o(),c("div",null,[n("p",null,[s("本节教您如何使用实现 "),n("a",u,[s("Iterable"),e(a)]),s(" 类的集合 - 例如 "),n("a",d,[s("List"),e(a)]),s(" 和 "),n("a",k,[s("Set"),e(a)]),s("。可迭代对象是各种 Dart 应用程序的基本构建块，即使您没有注意到，您可能已经在使用它们。")]),v,m,l(" more "),b,h,g,n("ul",null,[n("li",null,[n("a",f,[s("List"),e(a)]),s(": 用于按元素索引读取元素。")]),n("li",null,[n("a",I,[s("Set"),e(a)]),s(": 用于包含只能出现一次的元素。")]),n("li",null,[n("a",w,[s("Map"),e(a)]),s(": 用于使用键读取元素。")])]),_,n("p",null,[s("一个 "),y,s(" 在其内部使用不同的数据结构，这取决于它的实现。例如，"),n("a",x,[s("HashMap"),e(a)]),s(" 使用一个哈希表，其中的元素(也称为 values)是使用键获得的。"),W,s(" 也可以使用 "),S,s(" 上的 "),E,s(" 或 "),N,s(" 属性读取他的元素。")]),L])}const M=p(r,[["render",A],["__file","iterable.html.vue"]]);export{M as default};
