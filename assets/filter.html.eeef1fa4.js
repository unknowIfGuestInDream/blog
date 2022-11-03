import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.70f43444.js";const p={},t=e(`<p>Python \u5185\u5EFA\u7684 <code>filter()</code> \u51FD\u6570\u7528\u4E8E\u8FC7\u6EE4\u5E8F\u5217\u3002</p><p>\u548C <code>map()</code> \u7C7B\u4F3C\uFF0C<code>filter()</code> \u4E5F\u63A5\u6536\u4E00\u4E2A\u51FD\u6570\u548C\u4E00\u4E2A\u5E8F\u5217\u3002\u548C <code>map()</code> \u4E0D\u540C\u7684\u662F\uFF0C<code>filter()</code> \u628A\u4F20\u5165\u7684\u51FD\u6570\u4F9D\u6B21\u4F5C\u7528\u4E8E\u6BCF\u4E2A\u5143\u7D20\uFF0C\u7136\u540E\u6839\u636E\u8FD4\u56DE\u503C\u662F <code>True</code> \u8FD8\u662F <code>False</code> \u51B3\u5B9A\u4FDD\u7559\u8FD8\u662F\u4E22\u5F03\u8BE5\u5143\u7D20\u3002</p><p>\u4F8B\u5982\uFF0C\u5728\u4E00\u4E2A list \u4E2D\uFF0C\u5220\u6389\u5076\u6570\uFF0C\u53EA\u4FDD\u7559\u5947\u6570\uFF0C\u53EF\u4EE5\u8FD9\u4E48\u5199:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">is_odd</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span>

<span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">filter</span><span class="token punctuation">(</span>is_odd<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># \u7ED3\u679C: [1, 5, 9, 15]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u628A\u4E00\u4E2A\u5E8F\u5217\u4E2D\u7684\u7A7A\u5B57\u7B26\u4E32\u5220\u6389\uFF0C\u53EF\u4EE5\u8FD9\u4E48\u5199:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">not_empty</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> s <span class="token keyword">and</span> s<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">filter</span><span class="token punctuation">(</span>not_empty<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;  &#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># \u7ED3\u679C: [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u89C1\u7528 <code>filter()</code> \u8FD9\u4E2A\u9AD8\u9636\u51FD\u6570\uFF0C\u5173\u952E\u5728\u4E8E\u6B63\u786E\u5B9E\u73B0\u4E00\u4E2A\u201C\u7B5B\u9009\u201D\u51FD\u6570\u3002</p><p>\u6CE8\u610F\u5230 <code>filter()</code> \u51FD\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A Iterator\uFF0C\u4E5F\u5C31\u662F\u4E00\u4E2A\u60F0\u6027\u5E8F\u5217\uFF0C\u6240\u4EE5\u8981\u5F3A\u8FEB <code>filter()</code> \u5B8C\u6210\u8BA1\u7B97\u7ED3\u679C\uFF0C\u9700\u8981\u7528 <code>list()</code> \u51FD\u6570\u83B7\u5F97\u6240\u6709\u7ED3\u679C\u5E76\u8FD4\u56DE list\u3002</p><h2 id="\u7528-filter-\u6C42\u7D20\u6570" tabindex="-1"><a class="header-anchor" href="#\u7528-filter-\u6C42\u7D20\u6570" aria-hidden="true">#</a> \u7528 filter \u6C42\u7D20\u6570</h2><p>\u8BA1\u7B97\u7D20\u6570\u7684\u4E00\u4E2A\u65B9\u6CD5\u662F\u57C3\u6C0F\u7B5B\u6CD5\uFF0C\u5B83\u7684\u7B97\u6CD5\u7406\u89E3\u8D77\u6765\u975E\u5E38\u7B80\u5355:</p><p>\u9996\u5148\uFF0C\u5217\u51FA\u4ECE 2 \u5F00\u59CB\u7684\u6240\u6709\u81EA\u7136\u6570\uFF0C\u6784\u9020\u4E00\u4E2A\u5E8F\u5217:</p><p>2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...</p><p>\u53D6\u5E8F\u5217\u7684\u7B2C\u4E00\u4E2A\u6570 2\uFF0C\u5B83\u4E00\u5B9A\u662F\u7D20\u6570\uFF0C\u7136\u540E\u7528 2 \u628A\u5E8F\u5217\u7684 2 \u7684\u500D\u6570\u7B5B\u6389:</p><p>3, <s>4</s>, 5, <s>6</s>, 7, <s>8</s>, 9, <s>10</s>, 11, <s>12</s>, 13, <s>14</s>, 15, <s>16</s>, 17, <s>18</s>, 19, <s>20</s>, ...</p><p>\u53D6\u65B0\u5E8F\u5217\u7684\u7B2C\u4E00\u4E2A\u6570 3\uFF0C\u5B83\u4E00\u5B9A\u662F\u7D20\u6570\uFF0C\u7136\u540E\u7528 3 \u628A\u5E8F\u5217\u7684 3 \u7684\u500D\u6570\u7B5B\u6389:</p><p>5, <s>6</s>, 7, <s>8</s>, <s>9</s>, <s>10</s>, 11, <s>12</s>, 13, <s>14</s>, <s>15</s>, <s>16</s>, 17, <s>18</s>, 19, <s>20</s>, ...</p><p>\u53D6\u65B0\u5E8F\u5217\u7684\u7B2C\u4E00\u4E2A\u6570 5\uFF0C\u7136\u540E\u7528 5 \u628A\u5E8F\u5217\u7684 5 \u7684\u500D\u6570\u7B5B\u6389:</p><p>7, <s>8</s>, <s>9</s>, <s>10</s>, 11, <s>12</s>, 13, <s>14</s>, <s>15</s>, <s>16</s>, 17, <s>18</s>, 19, <s>20</s>, ...</p><p>\u4E0D\u65AD\u7B5B\u4E0B\u53BB\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6240\u6709\u7684\u7D20\u6570\u3002</p><p>\u7528 Python \u6765\u5B9E\u73B0\u8FD9\u4E2A\u7B97\u6CD5\uFF0C\u53EF\u4EE5\u5148\u6784\u9020\u4E00\u4E2A\u4ECE 3 \u5F00\u59CB\u7684\u5947\u6570\u5E8F\u5217:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">_odd_iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">2</span>
        <span class="token keyword">yield</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u8FD9\u662F\u4E00\u4E2A\u751F\u6210\u5668\uFF0C\u5E76\u4E14\u662F\u4E00\u4E2A\u65E0\u9650\u5E8F\u5217\u3002</p><p>\u7136\u540E\u5B9A\u4E49\u4E00\u4E2A\u7B5B\u9009\u51FD\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">_not_divisible</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">%</span> n <span class="token operator">&gt;</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u751F\u6210\u5668\uFF0C\u4E0D\u65AD\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u7D20\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">primes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">yield</span> <span class="token number">2</span>
    it <span class="token operator">=</span> _odd_iter<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u521D\u59CB\u5E8F\u5217</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        n <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token comment"># \u8FD4\u56DE\u5E8F\u5217\u7684\u7B2C\u4E00\u4E2A\u6570</span>
        <span class="token keyword">yield</span> n
        it <span class="token operator">=</span> <span class="token builtin">filter</span><span class="token punctuation">(</span>_not_divisible<span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> it<span class="token punctuation">)</span> <span class="token comment"># \u6784\u9020\u65B0\u5E8F\u5217</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u751F\u6210\u5668\u5148\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u7D20\u6570 2\uFF0C\u7136\u540E\uFF0C\u5229\u7528 <code>filter()</code> \u4E0D\u65AD\u4EA7\u751F\u7B5B\u9009\u540E\u7684\u65B0\u7684\u5E8F\u5217\u3002</p><p>\u7531\u4E8E <code>primes()</code> \u4E5F\u662F\u4E00\u4E2A\u65E0\u9650\u5E8F\u5217\uFF0C\u6240\u4EE5\u8C03\u7528\u65F6\u9700\u8981\u8BBE\u7F6E\u4E00\u4E2A\u9000\u51FA\u5FAA\u73AF\u7684\u6761\u4EF6:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6253\u53701000\u4EE5\u5185\u7684\u7D20\u6570</span>

<span class="token keyword">for</span> n <span class="token keyword">in</span> primes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u5230 Iterator \u662F\u60F0\u6027\u8BA1\u7B97\u7684\u5E8F\u5217\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u7528 Python \u8868\u793A\u201C\u5168\u4F53\u81EA\u7136\u6570\u201D\uFF0C\u201C\u5168\u4F53\u7D20\u6570\u201D\u8FD9\u6837\u7684\u5E8F\u5217\uFF0C\u800C\u4EE3\u7801\u975E\u5E38\u7B80\u6D01\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p><code>filter()</code> \u7684\u4F5C\u7528\u662F\u4ECE\u4E00\u4E2A\u5E8F\u5217\u4E2D\u7B5B\u51FA\u7B26\u5408\u6761\u4EF6\u7684\u5143\u7D20\u3002\u7531\u4E8E <code>filter()</code> \u4F7F\u7528\u4E86\u60F0\u6027\u8BA1\u7B97\uFF0C\u6240\u4EE5\u53EA\u6709\u5728\u53D6 <code>filter()</code> \u7ED3\u679C\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u771F\u6B63\u7B5B\u9009\u5E76\u6BCF\u6B21\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u7B5B\u51FA\u7684\u5143\u7D20\u3002</p>`,32),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","filter.html.vue"]]);export{r as default};
