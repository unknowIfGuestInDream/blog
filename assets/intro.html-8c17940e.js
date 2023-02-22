import{_ as s,W as r,X as c,$ as h,Y as e,Z as t,a0 as i,a1 as p,a2 as d,C as n}from"./framework-d7af73f9.js";const l={},u=e("p",null,"在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。",-1),_=e("p",null,"您可以发现、创建和共享操作以执行您喜欢的任何作业 (包括 CI/CD) ，并将操作合并到完全自定义的工作流程中。",-1),b=e("h2",{id:"特点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#特点","aria-hidden":"true"},"#"),t(" 特点")],-1),f=e("li",null,[e("p",null,"GitHub 把组成持续集成的操作称为 actions。")],-1),w=e("li",null,[e("p",null,"GitHub 允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。")],-1),v=e("li",null,[e("p",null,"如果您需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。")],-1),m={href:"https://github.com/sdras/awesome-actions",target:"_blank",rel:"noopener noreferrer"},x={class:"hint-container info"},G=e("p",{class:"hint-container-title"},"持续集成",-1),H=d('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>GitHub Actions 帮助您自动完成软件开发周期内的任务。 GitHub Actions 是事件驱动的，意味着您可以在指定事件发生后运行一系列命令。 例如，每次有人为仓库创建拉取请求时，您都可以自动运行命令来执行软件测试脚本。</p><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><p>下面是一起运行作业的多个 GitHub Actions 组件列表。 您可以查看这些组件如何相互作用。</p><h3 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow" aria-hidden="true">#</a> workflow</h3><p>工作流程 (workflow) 是您添加到仓库的自动化过程。 工作流程由一项或多项作业组成，可以计划或由事件触发。 工作流程可用于在 GitHub 上构建、测试、打包、发布或部署项目。</p><p>持续集成一次运行的过程，就是一个 workflow。</p><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h3><p>事件 (event) 是触发工作流程的特定活动。 例如，当有推送提交到仓库或者创建议题或拉取请求时，GitHub 就可能产生活动。</p><p>您还可以使用仓库的 web hook 在发生外部事件时触发工作流程。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>事件是 workflow 执行的判定。可以通过配置工作流程，来决定在哪些事件被触发执行。</p><p>同时工作流也可以读取触发事件的相关信息，以在不同情况下执行不同的任务。</p></div><h3 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs" aria-hidden="true">#</a> Jobs</h3><p>作业 (job) 是在同一运行服务器上执行的一组步骤。</p><p>默认情况下，包含多个作业的工作流程将同时运行这些作业。</p><p>您也可以配置工作流程按顺序运行作业。例如，工作流程可以有两个连续的任务来构建和测试代码，其中测试作业取决于构建作业的状态。如果构建作业失败，测试作业将不会运行。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>作业是工作流程中一个完整任务的封装。</p><p>一个 workflow 由一个或多个 jobs 构成，一次持续集成的运行，可以完成多个作业，对应多个任务。</p></div><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h3><p>步骤 (step) 是可以在作业中运行命令的单个任务。步骤可以是操作或 shell 命令。</p><p>作业中的每个步骤在同一运行器上执行，可让该作业中的操作互相共享数据。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>每个 job 由多个 step 构成，一步步完成。</p></div><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h3><p>操作 (Action) 是独立命令，它们组合到步骤以创建作业。</p><p>操作是工作流程最小的便携式构建块。 您可以创建自己的操作，也可以使用 GitHub 社区创建的操作。要在工作流程中使用操作，必须将其作为一个步骤。</p><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> Server</h3><p>运行器 (Server) 是安装了 GitHub Actions 运行器应用程序的服务器。</p><p>您可以使用 GitHub 托管的运行器或托管您自己的运行器。运行器将侦听可用的作业，每次运行一个作业，并将进度、日志和结果报告回 GitHub。</p><p>对于 GitHub 托管的运行器，工作流程中的每项作业都会在一个新的虚拟环境中运行。</p><p>GitHub 托管的运行器基于 Ubuntu Linux、Microsoft Windows 和 macOS。</p>',28);function k(A,C){const a=n("ExternalLinkIcon"),o=n("RouterLink");return r(),c("div",null,[u,_,h(" more "),b,e("ul",null,[f,w,v,e("li",null,[e("p",null,[t("GitHub 做了一个官方市场，可以搜索到他人提交的 actions。另外， "),e("a",m,[t("awesome actions"),i(a)]),t(" 仓库收集了很多有用的 actions。")])])]),e("div",x,[G,e("p",null,[t("关于持续集成 (CI) 的概念与介绍，详见 "),i(o,{to:"/en/code/basic/ci.html"},{default:p(()=>[t("基础 → 持续集成")]),_:1})])]),H])}const L=s(l,[["render",k],["__file","intro.html.vue"]]);export{L as default};
