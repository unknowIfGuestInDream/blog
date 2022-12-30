import{_ as s,W as a,X as i,$ as l,Y as e,Z as t,a0 as o,a2 as n,E as c}from"./framework-65b62f32.js";const p={},d=n(`<p>TypeScript 的命令行工具安装方法如下:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令会在全局环境下安装 <code>tsc</code> 命令，安装完成之后，我们就可以在任何地方执行 <code>tsc</code> 命令了。</p>`,3),h=n(`<p>编译一个 TypeScript 文件很简单:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc hello.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们约定使用 TypeScript 编写的文件以 <code>.ts</code> 为后缀，用 TypeScript 编写 React 时，以 <code>.tsx</code> 为后缀。</p><h2 id="编辑器" tabindex="-1"><a class="header-anchor" href="#编辑器" aria-hidden="true">#</a> 编辑器</h2><p>TypeScript 最大的优势便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。</p>`,5),u={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"它是一款开源，跨终端的轻量级编辑器，内置了 TypeScript 支持。",-1),m={href:"https://github.com/Microsoft/vscode/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"获取其他编辑器或 IDE 对 TypeScript 的支持:",-1),g={href:"https://github.com/Microsoft/TypeScript-Sublime-Plugin",target:"_blank",rel:"noopener noreferrer"},k={href:"https://atom.io/packages/atom-typescript",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.jetbrains.com/webstorm/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/ananthakumaran/tide",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/palantir/eclipse-typescript",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.microsoft.com/en-us/download/details.aspx?id=48593",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.microsoft.com/en-us/download/details.aspx?id=48739",target:"_blank",rel:"noopener noreferrer"};function E(V,N){const r=c("ExternalLinkIcon");return a(),i("div",null,[d,l(" more "),h,e("p",null,[t("主流的编辑器都支持 TypeScript，这里我推荐使用 "),e("a",u,[t("Visual Studio Code"),o(r)]),t("。")]),_,e("p",null,[t("另外它本身也是"),e("a",m,[t("用 TypeScript 编写的"),o(r)]),t("。")]),e("p",null,[t("下载安装: "),e("a",f,[t("https://code.visualstudio.com/"),o(r)])]),b,e("ul",null,[e("li",null,[e("a",g,[t("Sublime Text"),o(r)])]),e("li",null,[e("a",k,[t("Atom"),o(r)])]),e("li",null,[e("a",v,[t("WebStorm"),o(r)])]),e("li",null,[e("a",S,[t("Vim"),o(r)])]),e("li",null,[e("a",y,[t("Emacs"),o(r)])]),e("li",null,[e("a",T,[t("Eclipse"),o(r)])]),e("li",null,[e("a",w,[t("Visual Studio 2015"),o(r)])]),e("li",null,[e("a",x,[t("Visual Studio 2013"),o(r)])])])])}const B=s(p,[["render",E],["__file","get-typescript.html.vue"]]);export{B as default};
