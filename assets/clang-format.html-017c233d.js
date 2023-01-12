import{_ as n,W as c,X as d,$ as t,Y as e,Z as a,a0 as l,a2 as s,G as i}from"./framework-269d85ce.js";const r={},p=e("p",null,[a("clang-format 是一种代码格式化工具，可用于格式化(排版) C / C++ / Java / JavaScript / Objective-C / Protobuf / C# 的代码。它支持多种预设代码风格与自定义风格 (通过编写 "),e("code",null,".clang-format"),a(" 文件)。")],-1),u=s(`<h2 id="自定义格式化" tabindex="-1"><a class="header-anchor" href="#自定义格式化" aria-hidden="true">#</a> 自定义格式化</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>clang-format <span class="token parameter variable">-style</span><span class="token operator">=</span>格式名 -dump-config <span class="token operator">&gt;</span> .clang-format\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，格式名的取值可以为 <code>LLVM</code>, <code>Google</code>, <code>Chromium</code>, <code>Mozilla</code>, <code>Webkit</code> 中的任一种，这会将对应格式预设写入 <code>.clang-format</code> 文件。</p><h2 id="使用命令行" tabindex="-1"><a class="header-anchor" href="#使用命令行" aria-hidden="true">#</a> 使用命令行</h2><h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>clang-format <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="可用选项" tabindex="-1"><a class="header-anchor" href="#可用选项" aria-hidden="true">#</a> 可用选项</h3><ul><li><p><code>--Werror</code>: 将格式化警告变为错误</p></li><li><p><code>--Wno-error=unknown</code>: 未知的格式化选项仅产生警告。</p><p>这可以保持格式化启用，即使配置包含未知 (较新) 选项。</p></li><li><p><code>--assume-filename=&lt;string&gt;</code>: 覆盖用于确定语言的文件名。</p><p>通常在从 stdin 读取时，帮助 clang-fomat 获取文件名</p></li><li><p><code>--dry-run</code> 或 <code>-n</code>: 如果设置，实际上不进行格式更改</p></li><li><p><code>--dump-config</code>: 将配置选项转储到标准输出并退出, 可以与 <code>--style</code> 选项一起使用。</p></li><li><p><code>--fallback-style=&lt;string&gt;</code>: 设置回退的默认格式，通常在 clang-format 找不到配置文件时使用。</p><p>设置 <code>--fallback-style=none</code> 可以在这种情况下跳过格式化</p></li><li><p><code>--ferror-limit=&lt;uint&gt;</code>: 设置 clang-format 输出的最大错误数，超过将停止输出。</p><p>请仅与 <code>--dry-run</code> 或 <code>-n</code> 配合使用，<code>0</code> 意味着无限制</p></li><li><p><code>-i</code>: 替换输入文件</p></li><li><p><code>--length=&lt;uint&gt;</code>: 格式化指定长度范围</p><p>可以通过指定多个偏移和长度对来格式化几个范围。</p><p>当仅指定一个偏移量而没有 <code>--length</code>，clang-format 会一直格式化到文件的最后。</p><p>只能与一个输入文件一起使用。</p></li><li><p><code>--lines=&lt;string&gt;</code>: 格式为 <code>&lt;start line&gt;:&lt;end line&gt;</code></p><p>设置格式化行的范围(起始为第一行)，可以通过指定多个范围来格式化多行。</p><p>不能与 <code>--offset</code> 和 <code>--length</code> 一起使用。</p><p>只能与一个输入文件一起使用。</p></li><li><p><code>--offset=&lt;uint&gt;</code>: 格式化从此字节偏移量开始的范围。</p><p>可以通过指定多个范围来格式化几个偏移量和长度对。</p><p>只能与一个输入文件一起使用。</p></li><li><p><code>--output-replacements-xml</code>: 输出 XML</p></li><li><p><code>--sort-includes</code>: 如果设置，将覆盖包含排序行为。由 SortIncludes 样式标志确定</p></li><li><p><code>--style=&lt;string&gt;</code> 编码样式</p><p>当前支持: <code>LLVM</code>, <code>Google</code>, <code>Chromium</code>, <code>Mozilla</code>, <code>Webkit</code></p><p>使用 <code>--style=file</code> 从中文件加载样式配置</p><p>使用 <code>--style=&quot;{key:value,...}&quot;</code> 来设置特定的参数， 例如: <code>&quot;{BasedOnStyle: llvm, IndentWidth: 8}&quot;</code></p></li><li><p><code>--verbose</code>: 输出处理的文件列表</p></li></ul><h2 id="vs-code" tabindex="-1"><a class="header-anchor" href="#vs-code" aria-hidden="true">#</a> VS Code</h2><p>在 VS Code 中安装 C/C++ 插件以启用两者支持时会自动安装 clang-format，因此无需进行任何操作，即可在 C/C++ 文件中对代码进行格式化。</p><h2 id="推荐样式" tabindex="-1"><a class="header-anchor" href="#推荐样式" aria-hidden="true">#</a> 推荐样式</h2><p>unknowIfGuestInDream 推荐使用 Google 预设，所以在个人与工作室的每个项目中，都会使用 Google 编码风格。</p><p>建议在 VS Code 中配置默认格式风格:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;C_Cpp.clang_format_fallbackStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Google&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档" aria-hidden="true">#</a> 官方文档</h2>`,15),h={href:"http://clang.llvm.org/docs/ClangFormat.html",target:"_blank",rel:"noopener noreferrer"};function g(m,f){const o=i("ExternalLinkIcon");return c(),d("div",null,[p,t(" more "),u,e("ul",null,[e("li",null,[e("a",h,[a("地址"),l(o)]),a(" (需 VPN)")])])])}const b=n(r,[["render",g],["__file","clang-format.html.vue"]]);export{b as default};
