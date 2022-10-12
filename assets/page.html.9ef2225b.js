import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as s,d as e,a as n,b as p,f as o}from"./app.963e91c8.js";const c={},i=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("p",null,[n("code",null,"page.ts"),p(" \u7528\u4E8E\u5C0F\u7A0B\u5E8F\u9875\u9762\u6E32\u67D3\u3002")])],-1),d=o(`<h2 id="\u63D2\u4EF6\u7684\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u7684\u5F15\u5165" aria-hidden="true">#</a> \u63D2\u4EF6\u7684\u5F15\u5165</h2><p>\u9996\u5148\u5728 <code>ts</code> \u6587\u4EF6\u5934\u90E8\u5F15\u5165 <code>page</code> \u4E0E <code>@mptool/enhance</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> $Page <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;\`@mptool/enhance&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> xxx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path/to/page/ts&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><h3 id="resolvepage" tabindex="-1"><a class="header-anchor" href="#resolvepage" aria-hidden="true">#</a> resolvePage()</h3><p><code>(option: PageQuery, page?: PageData, setGlobal = true) =&gt; PageData | null</code></p><p><strong>\u7B80\u4ECB:</strong></p><ul><li><p>\u6027\u8D28: \u540C\u6B65\u51FD\u6570</p></li><li><p>\u63CF\u8FF0: \u9884\u5904\u7406 <code>page</code> \u6570\u636E\u5199\u5165\u5168\u5C40\u6570\u636E</p></li><li><p>\u7528\u6CD5: \u5728\u9875\u9762 <code>onNavigate</code> \u65F6\u8C03\u7528\uFF0C</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>option</td><td>\u9875\u9762\u8DF3\u8F6C\u53C2\u6570</td></tr><tr><td>page</td><td>\u9875\u9762\u6570\u636E</td></tr><tr><td>setGlobal</td><td>\u662F\u5426\u5C06\u5904\u7406\u540E\u7684\u6570\u636E\u5199\u5165\u5230\u5168\u5C40\u6570\u636E\u4E2D</td></tr></tbody></table></li><li><p>\u8FD4\u56DE: \u5904\u7406\u540E\u7684 page \u914D\u7F6E</p></li></ul><p><strong>\u6848\u4F8B:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token function">onNavigate</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolvePage</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setpage" tabindex="-1"><a class="header-anchor" href="#setpage" aria-hidden="true">#</a> setPage()</h3><p><code>({ option, ctx, handle }: SetPageOption, page?: ComponentData[] | undefined, preload?: boolean) =&gt; void</code></p><p><strong>\u7B80\u4ECB:</strong></p><ul><li><p>\u63CF\u8FF0: \u8BBE\u7F6E\u672C\u5730\u754C\u9762\u6570\u636E\uFF0C\u5982\u679C\u4F20\u5165 <code>page</code> \u53C2\u6570\uFF0C\u5219\u6839\u636E <code>handle</code> \u7684\u503C\u51B3\u5B9A\u662F\u5426\u5728 <code>setData</code> \u524D\u5904\u7406 <code>page</code>\u3002</p><p>\u5982\u679C\u6CA1\u6709\u4F20\u5165 <code>page</code>\uFF0C\u5219\u4F7F\u7528 <code>PageOption.data.page</code>\u3002\u4E4B\u540E\u6839\u636E <code>preload</code> \u7684\u503C\u51B3\u5B9A\u662F\u5426\u5BF9\u9875\u9762\u94FE\u63A5\u8FDB\u884C\u9884\u52A0\u8F7D\u3002</p></li><li><p>\u7528\u6CD5: \u5728\u9875\u9762 <code>onLoad</code> \u65F6\u8C03\u7528</p></li><li><p>\u6027\u8D28: \u540C\u6B65\u51FD\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>object</td><td>\u914D\u7F6E\u5BF9\u8C61</td></tr><tr><td>page</td><td>\u9875\u9762\u6570\u636E</td></tr><tr><td>preload [default:true]</td><td>\u662F\u5426\u9884\u52A0\u8F7D\u5B50\u9875\u9762</td></tr></tbody></table><p><code>object</code> \u53C2\u6570:</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>option</td><td>\u9875\u9762\u4F20\u53C2</td></tr><tr><td>ctx</td><td>\u9875\u9762\u6307\u9488</td></tr><tr><td>handle [default:false]</td><td>\u9875\u9762\u662F\u5426\u5DF2\u7ECF\u88AB\u5904\u7406</td></tr></tbody></table></li></ul><p><strong>\u6848\u4F8B:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span>option<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> option<span class="token punctuation">,</span> ctx<span class="token operator">:</span> <span class="token keyword">this</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setonlinepage" tabindex="-1"><a class="header-anchor" href="#setonlinepage" aria-hidden="true">#</a> setOnlinePage()</h3><p><code>(option: PageOption, ctx: PageInstanceWithPage, preload = true) =&gt; void</code></p><p><strong>\u7B80\u4ECB:</strong></p><ul><li><p>\u63CF\u8FF0: \u8BBE\u7F6E\u5728\u7EBF\u754C\u9762\u6570\u636E</p></li><li><p>\u7528\u6CD5: \u5728\u9875\u9762 <code>onLoad</code> \u65F6\u8C03\u7528</p></li><li><p>\u6027\u8D28: \u540C\u6B65\u51FD\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>option</td><td>\u9875\u9762\u8DF3\u8F6C\u53C2\u6570</td></tr><tr><td>ctx</td><td>\u9875\u9762\u6307\u9488</td></tr><tr><td>preload [default:true]</td><td>\u662F\u5426\u9884\u52A0\u8F7D\u5B50\u9875\u9762</td></tr></tbody></table></li></ul><p><strong>\u6848\u4F8B:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span>res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setOnlinePage</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="popnotice" tabindex="-1"><a class="header-anchor" href="#popnotice" aria-hidden="true">#</a> popNotice()</h3><p><code>(id: string) =&gt; void</code></p><p><strong>\u7B80\u4ECB:</strong></p><ul><li><p>\u63CF\u8FF0: \u5F39\u51FA\u901A\u77E5</p></li><li><p>\u7528\u6CD5: \u5728\u9875\u9762 <code>onLoad</code> \u65F6\u8C03\u7528</p></li><li><p>\u6027\u8D28: \u540C\u6B65\u51FD\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>id</td><td>\u5F53\u524D\u754C\u9762\u7684\u6807\u8BC6\u7B26</td></tr></tbody></table></li></ul><p><strong>\u6848\u4F8B:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">popNotice</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getcolor" tabindex="-1"><a class="header-anchor" href="#getcolor" aria-hidden="true">#</a> getColor()</h3><p><code>(grey?: boolean) =&gt; Colors</code></p><p><strong>\u7B80\u4ECB:</strong></p><ul><li><p>\u63CF\u8FF0: \u83B7\u5F97\u9875\u9762\u80CC\u666F\u76F8\u5173\u989C\u8272</p></li><li><p>\u7528\u6CD5: \u5728\u9875\u9762 <code>onShow</code> \u65F6\u8C03\u7528</p></li><li><p>\u6027\u8D28: \u540C\u6B65\u51FD\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>grey [default:false]</td><td>\u9875\u9762\u662F\u5426\u4E3A\u7070\u8272\u80CC\u666F</td></tr></tbody></table></li></ul><p><strong>\u6848\u4F8B:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>page<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>grey<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function l(r,u){return t(),s("div",null,[i,e(" more "),d])}const k=a(c,[["render",l],["__file","page.html.vue"]]);export{k as default};
