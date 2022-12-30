import{_ as n,W as s,X as i,Y as a,Z as e,a0 as r,a2 as o,E as l}from"./framework-65b62f32.js";const d={},c=a("h1",{id:"git-large-file-storage",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#git-large-file-storage","aria-hidden":"true"},"#"),e(" Git Large File Storage")],-1),u={href:"http://GitHub.com",target:"_blank",rel:"noopener noreferrer"},p=o(`<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><ol><li><p>Download and install the Git command-line extension. Once downloaded and installed, set up Git LFS and its respective hooks by running:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> lfs <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You’ll need to run this in your repository directory, once per repository.</p></li><li><p>Select the file types you’d like Git LFS to manage (or directly edit your .gitattributes). You can configure file extensions at anytime.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> lfs track <span class="token string">&quot;*.psd&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Make sure to track <code>.gitattributes</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> .gitattributes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,2);function g(h,m){const t=l("ExternalLinkIcon");return s(),i("div",null,[c,a("p",null,[e("Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like "),a("a",u,[e("GitHub.com"),r(t)]),e(" or GitHub Enterprise.")]),p])}const f=n(d,[["render",g],["__file","gitLFS.html.vue"]]);export{f as default};
