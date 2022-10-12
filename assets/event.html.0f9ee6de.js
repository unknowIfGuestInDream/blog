import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,d as p,a as n,f as c}from"./app.963e91c8.js";const e={},o=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u7AE0\u8282\u8FC7\u65F6"),n("p",null,"\u7531\u4E8E\u76EE\u524D\u5404\u6D4F\u89C8\u5668 API \u5DF2\u7ECF\u57FA\u672C\u7EDF\u4E00\uFF0C\u65E0\u9700\u4F7F\u7528 jQuery \u7ED1\u5B9A\u4E8B\u4EF6\u4E86\u3002")],-1),i=c(`<p>\u56E0\u4E3A JavaScript \u5728\u6D4F\u89C8\u5668\u4E2D\u4EE5\u5355\u7EBF\u7A0B\u6A21\u5F0F\u8FD0\u884C\uFF0C\u9875\u9762\u52A0\u8F7D\u540E\uFF0C\u4E00\u65E6\u9875\u9762\u4E0A\u6240\u6709\u7684 JavaScript \u4EE3\u7801\u88AB\u6267\u884C\u5B8C\u540E\uFF0C\u5C31\u53EA\u80FD\u4F9D\u8D56\u89E6\u53D1\u4E8B\u4EF6\u6765\u6267\u884C JavaScript \u4EE3\u7801\u3002</p><p>\u6D4F\u89C8\u5668\u5728\u63A5\u6536\u5230\u7528\u6237\u7684\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u540E\uFF0C\u4F1A\u81EA\u52A8\u5728\u5BF9\u5E94\u7684 DOM \u8282\u70B9\u4E0A\u89E6\u53D1\u76F8\u5E94\u7684\u4E8B\u4EF6\u3002\u5982\u679C\u8BE5\u8282\u70B9\u5DF2\u7ECF\u7ED1\u5B9A\u4E86\u5BF9\u5E94\u7684 JavaScript \u5904\u7406\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u5C31\u4F1A\u81EA\u52A8\u8C03\u7528\u3002</p><p>\u7531\u4E8E\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u4EE3\u7801\u90FD\u4E0D\u592A\u4E00\u6837\uFF0C\u6240\u4EE5\u7528 jQuery \u6765\u5199\u4EE3\u7801\uFF0C\u5C31\u5C4F\u853D\u4E86\u4E0D\u540C\u6D4F\u89C8\u5668\u7684\u5DEE\u5F02\uFF0C\u6211\u4EEC\u603B\u662F\u7F16\u5199\u76F8\u540C\u7684\u4EE3\u7801\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBE\u8981\u5728\u7528\u6237\u70B9\u51FB\u4E86\u8D85\u94FE\u63A5\u65F6\u5F39\u51FA\u63D0\u793A\u6846\uFF0C\u6211\u4EEC\u7528 jQuery \u8FD9\u6837\u7ED1\u5B9A\u4E00\u4E2A <code>click</code> \u4E8B\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* HTML:
 *
 * &lt;a id=&quot;test-link&quot; href=&quot;#0&quot;&gt;\u70B9\u6211\u8BD5\u8BD5&lt;/a&gt;
 *
 */</span>

<span class="token comment">// \u83B7\u53D6\u8D85\u94FE\u63A5\u7684jQuery\u5BF9\u8C61:</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-link&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>on</code> \u65B9\u6CD5\u7528\u6765\u7ED1\u5B9A\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u6211\u4EEC\u9700\u8981\u4F20\u5165\u4E8B\u4EF6\u540D\u79F0\u548C\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570\u3002</p><p>\u53E6\u4E00\u79CD\u66F4\u7B80\u5316\u7684\u5199\u6CD5\u662F\u76F4\u63A5\u8C03\u7528 <code>click()</code> \u65B9\u6CD5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E24\u8005\u5B8C\u5168\u7B49\u4EF7\u3002\u6211\u4EEC\u901A\u5E38\u7528\u540E\u9762\u7684\u5199\u6CD5\u3002</p><p>jQuery \u80FD\u591F\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u4E3B\u8981\u5305\u62EC:</p><h2 id="\u9F20\u6807\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9F20\u6807\u4E8B\u4EF6" aria-hidden="true">#</a> \u9F20\u6807\u4E8B\u4EF6</h2><ul><li><code>click</code>: \u9F20\u6807\u5355\u51FB\u65F6\u89E6\u53D1\uFF1B</li><li><code>dblclick</code>: \u9F20\u6807\u53CC\u51FB\u65F6\u89E6\u53D1\uFF1B</li><li><code>mouseenter</code>: \u9F20\u6807\u8FDB\u5165\u65F6\u89E6\u53D1\uFF1B</li><li><code>mouseleave</code>: \u9F20\u6807\u79FB\u51FA\u65F6\u89E6\u53D1\uFF1B</li><li><code>mousemove</code>: \u9F20\u6807\u5728 DOM \u5185\u90E8\u79FB\u52A8\u65F6\u89E6\u53D1\uFF1B</li><li><code>hover</code>: \u9F20\u6807\u8FDB\u5165\u548C\u9000\u51FA\u65F6\u89E6\u53D1\u4E24\u4E2A\u51FD\u6570\uFF0C\u76F8\u5F53\u4E8E <code>mouseenter</code> \u52A0\u4E0A <code>mouseleave</code>\u3002</li></ul><h2 id="\u952E\u76D8\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u952E\u76D8\u4E8B\u4EF6" aria-hidden="true">#</a> \u952E\u76D8\u4E8B\u4EF6</h2><p>\u952E\u76D8\u4E8B\u4EF6\u4EC5\u4F5C\u7528\u5728\u5F53\u524D\u7126\u70B9\u7684 DOM \u4E0A\uFF0C\u901A\u5E38\u662F <code>&lt;input&gt;</code> \u548C <code>&lt;textarea&gt;</code>\u3002</p><ul><li><code>keydown</code>: \u952E\u76D8\u6309\u4E0B\u65F6\u89E6\u53D1\uFF1B</li><li><code>keyup</code>: \u952E\u76D8\u677E\u5F00\u65F6\u89E6\u53D1\uFF1B</li><li><code>keypress</code>: \u6309\u4E00\u6B21\u952E\u540E\u89E6\u53D1\u3002</li></ul><h2 id="\u5176\u4ED6\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u4E8B\u4EF6" aria-hidden="true">#</a> \u5176\u4ED6\u4E8B\u4EF6</h2><ul><li><code>focus</code>: \u5F53 DOM \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1\uFF1B</li><li><code>blur</code>: \u5F53 DOM \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\uFF1B</li><li><code>change</code>: \u5F53 <code>&lt;input&gt;</code>\u3001<code>&lt;select&gt;</code> \u6216 <code>&lt;textarea&gt;</code> \u7684\u5185\u5BB9\u6539\u53D8\u65F6\u89E6\u53D1\uFF1B</li><li><code>submit</code>: \u5F53 <code>&lt;form&gt;</code> \u63D0\u4EA4\u65F6\u89E6\u53D1\uFF1B</li><li><code>ready</code>: \u5F53\u9875\u9762\u88AB\u8F7D\u5165\u5E76\u4E14 DOM \u6811\u5B8C\u6210\u521D\u59CB\u5316\u540E\u89E6\u53D1\u3002</li></ul><p>\u5176\u4E2D\uFF0C<code>ready</code> \u4EC5\u4F5C\u7528\u4E8E document \u5BF9\u8C61\u3002\u7531\u4E8E ready \u4E8B\u4EF6\u5728 DOM \u5B8C\u6210\u521D\u59CB\u5316\u540E\u89E6\u53D1\uFF0C\u4E14\u53EA\u89E6\u53D1\u4E00\u6B21\uFF0C\u6240\u4EE5\u975E\u5E38\u9002\u5408\u7528\u6765\u5199\u5176\u4ED6\u7684\u521D\u59CB\u5316\u4EE3\u7801\u3002\u5047\u8BBE\u6211\u4EEC\u60F3\u7ED9\u4E00\u4E2A <code>&lt;form&gt;</code> \u8868\u5355\u7ED1\u5B9A submit \u4E8B\u4EF6\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u6CA1\u6709\u9884\u671F\u7684\u6548\u679C:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// \u4EE3\u7801\u6709\u8BEF:</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#testForm).on(&#39;</span>submit&#39;<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;submit!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testForm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A JavaScript \u5728\u6B64\u6267\u884C\u7684\u65F6\u5019\uFF0C<code>&lt;form&gt;</code> \u5C1A\u672A\u8F7D\u5165\u6D4F\u89C8\u5668\uFF0C\u6240\u4EE5 <code>$(&#39;#testForm)</code> \u8FD4\u56DE <code>[]</code>\uFF0C\u5E76\u6CA1\u6709\u7ED1\u5B9A\u4E8B\u4EF6\u5230\u4EFB\u4F55 DOM \u4E0A\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u81EA\u5DF1\u7684\u521D\u59CB\u5316\u4EE3\u7801\u5FC5\u987B\u653E\u5230 document \u5BF9\u8C61\u7684 <code>ready</code> \u4E8B\u4EF6\u4E2D\uFF0C\u4FDD\u8BC1 DOM \u5DF2\u5B8C\u6210\u521D\u59CB\u5316:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;ready&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#testForm).on(&#39;</span>submit&#39;<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;submit!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testForm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5199\u5C31\u6CA1\u6709\u95EE\u9898\u4E86\u3002\u56E0\u4E3A\u76F8\u5173\u4EE3\u7801\u4F1A\u5728 DOM \u6811\u521D\u59CB\u5316\u540E\u518D\u6267\u884C\u3002</p><p>\u7531\u4E8E <code>ready</code> \u4E8B\u4EF6\u4F7F\u7528\u975E\u5E38\u666E\u904D\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8FD9\u6837\u7B80\u5316:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// on(&#39;submit&#39;, function)\u4E5F\u53EF\u4EE5\u7B80\u5316:</span>
    <span class="token function">$</span><span class="token punctuation">(</span>&#39;#testForm<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;submit!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751A\u81F3\u8FD8\u53EF\u4EE5\u518D\u7B80\u5316\u4E3A:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// init...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u8FD9\u79CD\u5199\u6CD5\u6700\u4E3A\u5E38\u89C1\u3002\u5982\u679C\u60A8\u9047\u5230 <code>$(function () {...})</code> \u7684\u5F62\u5F0F\uFF0C\u7262\u8BB0\u8FD9\u662F document \u5BF9\u8C61\u7684 <code>ready</code> \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002</p><p>\u5B8C\u5168\u53EF\u4EE5\u53CD\u590D\u7ED1\u5B9A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u5B83\u4EEC\u4F1A\u4F9D\u6B21\u6267\u884C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;init A...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;init B...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;init C...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u4EF6\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u53C2\u6570" aria-hidden="true">#</a> \u4E8B\u4EF6\u53C2\u6570</h2><p>\u6709\u4E9B\u4E8B\u4EF6\uFF0C\u5982 <code>mousemove</code> \u548C <code>keypress</code>\uFF0C\u6211\u4EEC\u9700\u8981\u83B7\u53D6\u9F20\u6807\u4F4D\u7F6E\u548C\u6309\u952E\u7684\u503C\uFF0C\u5426\u5219\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\u5C31\u6CA1\u4EC0\u4E48\u610F\u4E49\u4E86\u3002\u6240\u6709\u4E8B\u4EF6\u90FD\u4F1A\u4F20\u5165 Event \u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u53EF\u4EE5\u4ECE Event \u5BF9\u8C61\u4E0A\u83B7\u53D6\u5230\u66F4\u591A\u7684\u4FE1\u606F:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#testMouseMoveDiv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mousemove</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#testMouseMoveSpan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;pageX = &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>pageX <span class="token operator">+</span> <span class="token string">&quot;, pageY = &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D6\u6D88\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u7ED1\u5B9A" aria-hidden="true">#</a> \u53D6\u6D88\u7ED1\u5B9A</h2><p>\u4E00\u4E2A\u5DF2\u88AB\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u53EF\u4EE5\u89E3\u9664\u7ED1\u5B9A\uFF0C\u901A\u8FC7 <code>off(&#39;click&#39;, function)</code> \u5B9E\u73B0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7ED1\u5B9A\u4E8B\u4EF6</span>

<span class="token comment">// 10\u79D2\u949F\u540E\u89E3\u9664\u7ED1\u5B9A:</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token literal-property property">\u9700\u8981\u7279\u522B\u6CE8\u610F\u7684\u662F\uFF0C\u4E0B\u9762\u8FD9\u79CD\u5199\u6CD5\u662F\u65E0\u6548\u7684</span><span class="token operator">:</span>

<span class="token comment">// \u7ED1\u5B9A\u4E8B\u4EF6:</span>
a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u89E3\u9664\u7ED1\u5B9A:</span>
a<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u56E0\u4E3A\u4E24\u4E2A\u533F\u540D\u51FD\u6570\u867D\u7136\u957F\u5F97\u4E00\u6A21\u4E00\u6837\uFF0C\u4F46\u662F\u5B83\u4EEC\u662F\u4E24\u4E2A\u4E0D\u540C\u7684\u51FD\u6570\u5BF9\u8C61\uFF0C<code>off(&#39;click&#39;, function () {...})</code> \u65E0\u6CD5\u79FB\u9664\u5DF2\u7ED1\u5B9A\u7684\u7B2C\u4E00\u4E2A\u533F\u540D\u51FD\u6570\u3002</p><p>\u4E3A\u4E86\u5B9E\u73B0\u79FB\u9664\u6548\u679C\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>off(&#39;click&#39;)</code> \u4E00\u6B21\u6027\u79FB\u9664\u5DF2\u7ED1\u5B9A\u7684 click \u4E8B\u4EF6\u7684\u6240\u6709\u5904\u7406\u51FD\u6570\u3002</p><p>\u540C\u7406\uFF0C\u65E0\u53C2\u6570\u8C03\u7528 <code>off()</code> \u4E00\u6B21\u6027\u79FB\u9664\u5DF2\u7ED1\u5B9A\u7684\u6240\u6709\u7C7B\u578B\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002</p><h2 id="\u4E8B\u4EF6\u89E6\u53D1\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u89E6\u53D1\u6761\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6\u89E6\u53D1\u6761\u4EF6</h2><p>\u4E00\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u95EE\u9898\u662F\uFF0C\u4E8B\u4EF6\u7684\u89E6\u53D1\u603B\u662F\u7531\u7528\u6237\u64CD\u4F5C\u5F15\u53D1\u7684\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u76D1\u63A7\u6587\u672C\u6846\u7684\u5185\u5BB9\u6539\u52A8:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

input<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;changed...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7528\u6237\u5728\u6587\u672C\u6846\u4E2D\u8F93\u5165\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1 <code>change</code> \u4E8B\u4EF6\u3002\u4F46\u662F\uFF0C\u5982\u679C\u7528 JavaScript \u4EE3\u7801\u53BB\u6539\u52A8\u6587\u672C\u6846\u7684\u503C\uFF0C\u5C06\u4E0D\u4F1A\u89E6\u53D1 <code>change</code> \u4E8B\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

input<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;change it!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u65E0\u6CD5\u89E6\u53D1change\u4E8B\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u7528\u4EE3\u7801\u89E6\u53D1 <code>change</code> \u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u65E0\u53C2\u6570\u7684 <code>change()</code> \u65B9\u6CD5\u6765\u89E6\u53D1\u8BE5\u4E8B\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

input<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;change it!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
input<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u89E6\u53D1change\u4E8B\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>input.change()</code> \u76F8\u5F53\u4E8E <code>input.trigger(&#39;change&#39;)</code>\uFF0C\u5B83\u662F <code>trigger()</code> \u65B9\u6CD5\u7684\u7B80\u5199\u3002</p><p>\u4E3A\u4EC0\u4E48\u6211\u4EEC\u5E0C\u671B\u624B\u52A8\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\u5462? \u5982\u679C\u4E0D\u8FD9\u4E48\u505A\uFF0C\u5F88\u591A\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u5F97\u5199\u4E24\u4EFD\u4E00\u6A21\u4E00\u6837\u7684\u4EE3\u7801\u3002</p><h2 id="\u6D4F\u89C8\u5668\u5B89\u5168\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5B89\u5168\u9650\u5236" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u5B89\u5168\u9650\u5236</h2><p>\u5728\u6D4F\u89C8\u5668\u4E2D\uFF0C\u6709\u4E9B JavaScript \u4EE3\u7801\u53EA\u6709\u5728\u7528\u6237\u89E6\u53D1\u4E0B\u624D\u80FD\u6267\u884C\uFF0C\u4F8B\u5982\uFF0C<code>window.open()</code> \u51FD\u6570:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65E0\u6CD5\u5F39\u51FA\u65B0\u7A97\u53E3\uFF0C\u5C06\u88AB\u6D4F\u89C8\u5668\u5C4F\u853D:</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B \u201C\u654F\u611F\u4EE3\u7801\u201D \u53EA\u80FD\u7531\u7528\u6237\u64CD\u4F5C\u6765\u89E6\u53D1:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> button1 <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#testPopupButton1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> button2 <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#testPopupButton2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">popupTestWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

button1<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">popupTestWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

button2<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E0D\u7ACB\u523B\u6267\u884C popupTestWindow()\uFF0C100 \u6BEB\u79D2\u540E\u6267\u884C:</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>popupTestWindow<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7528\u6237\u70B9\u51FB button1 \u65F6\uFF0C<code>click</code> \u4E8B\u4EF6\u88AB\u89E6\u53D1\uFF0C\u7531\u4E8E <code>popupTestWindow()</code> \u5728 <code>click</code> \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5185\u6267\u884C\uFF0C\u8FD9\u662F\u6D4F\u89C8\u5668\u5141\u8BB8\u7684\uFF0C\u800C button2 \u7684 <code>click</code> \u4E8B\u4EF6\u5E76\u672A\u7ACB\u523B\u6267\u884C <code>popupTestWindow()</code>\uFF0C\u5EF6\u8FDF\u6267\u884C\u7684 <code>popupTestWindow()</code> \u5C06\u88AB\u6D4F\u89C8\u5668\u62E6\u622A\u3002</p>`,54);function u(l,d){return a(),t("div",null,[o,p(" more "),i])}const v=s(e,[["render",u],["__file","event.html.vue"]]);export{v as default};
