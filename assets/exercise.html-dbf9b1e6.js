import{_ as s,X as n,Y as e,a3 as a}from"./framework-0ff09816.js";const o={},t=a(`<h2 id="bmi" tabindex="-1"><a class="header-anchor" href="#bmi" aria-hidden="true">#</a> BMI</h2><p>小明的成绩从去年的 72 分提升到了今年的 85 分，请计算小明成绩提升的百分点，并用字符串格式化显示出 &#39;xx.x%&#39;，只保留小数点后 1 位:</p><p>答案<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>score1 <span class="token operator">=</span> <span class="token number">72</span>

score2 <span class="token operator">=</span> <span class="token number">85</span>

result <span class="token operator">=</span> <span class="token punctuation">(</span>score2 <span class="token operator">-</span> score1<span class="token punctuation">)</span> <span class="token operator">/</span> score1 <span class="token operator">*</span> <span class="token number">100</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;小明成绩提升了%.1f%%&#39;</span> <span class="token operator">%</span> result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></li></ol></section>`,5),c=[t];function r(l,p){return n(),e("div",null,c)}const d=s(o,[["render",r],["__file","exercise.html.vue"]]);export{d as default};
