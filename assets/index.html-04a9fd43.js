import{_ as a,W as i,X as u,$ as c,Y as l,a0 as o,a1 as n,Z as e,E as s}from"./framework-ae009c3e.js";const p={},h=l("p",null,"这里是一些 Comsol 的学习资料整理与学习心得。",-1),m=l("div",{class:"custom-container tip"},[l("p",{class:"custom-container-title"},"写在前面"),l("p",null,"本教程只适用于从未接触过仿真的人员，内容比较基础。"),l("p",null,"我本人主要活跃在计算机相关领域，本科专业是物理学，并没有学过系统的工程原理、数值分析、模型建构以及相关的误差分析。COMSOL 是我本科制作毕设的软件，在毕设前，我也使用 COMSOL 构建了几个模型，完成了一些装置的模拟与优化。"),l("p",null,"本篇教程，是根据我对 COMSOL 以及有限元仿真的理解书写的，一定会有一些疏漏与理解错误之处，还望大家指出。另外我主要研究过的方向是传热与流体流动，在本教程的举例中，也大多以这两方面为主。对其他的方向与模块，我是不熟悉的。")],-1),_=l("h2",{id:"文档",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),e(" 文档")],-1),d={href:"https://mrhope.site/file/comsol/IntroductionToCOMSOLMultiphysics.zh_CN.pdf",target:"_blank",rel:"noopener noreferrer"},f={href:"https://mrhope.site/file/comsol/App%E5%BC%80%E5%8F%91%E5%99%A8%E7%AE%80%E4%BB%8B.pdf",target:"_blank",rel:"noopener noreferrer"},O={href:"https://mrhope.site/file/comsol/ApplicationProgrammingGuide.zh_CN.pdf",target:"_blank",rel:"noopener noreferrer"},g={href:"http://cn.comsol.com/multiphysics/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://cn.comsol.com/videos",target:"_blank",rel:"noopener noreferrer"},C={href:"https://cn.comsol.com/video-training",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cn.comsol.com/papers-presentations",target:"_blank",rel:"noopener noreferrer"},w=l("h2",{id:"其他杂项",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#其他杂项","aria-hidden":"true"},"#"),e(" 其他杂项")],-1),L={href:"https://cn.comsol.com/blogs/how-to-make-boundary-conditions-conditional-in-your-simulation/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://cn.comsol.com/blogs/how-to-customize-the-comsol-desktop-and-use-keyboard-shortcuts/",target:"_blank",rel:"noopener noreferrer"},S=l("sup",null,"®",-1),x={href:"https://cn.comsol.com/blogs/how-to-use-the-find-and-auto-completion-tools-for-faster-model-setup/",target:"_blank",rel:"noopener noreferrer"};function y(E,v){const t=s("RouterLink"),r=s("ExternalLinkIcon");return i(),u("div",null,[h,c(" more "),m,l("ul",null,[l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/install.html"},{default:n(()=>[e("软件下载与安装")]),_:1})])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/intro.html"},{default:n(()=>[e("有限元分析软件介绍")]),_:1})])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/get-started.html"},{default:n(()=>[e("快速上手 COMSOL")]),_:1})])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/geometry/"},{default:n(()=>[e("几何")]),_:1})]),l("ul",null,[l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/geometry/view.html"},{default:n(()=>[e("浏览几何")]),_:1})])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/geometry/build.html"},{default:n(()=>[e("构建几何")]),_:1})])])])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/select.html"},{default:n(()=>[e("选择")]),_:1})])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/material.html"},{default:n(()=>[e("材料")]),_:1})])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/physic-field.html"},{default:n(()=>[e("物理场")]),_:1})])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/mesh/"},{default:n(()=>[e("网格")]),_:1})])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/study.html"},{default:n(()=>[e("研究")]),_:1})])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/result.html"},{default:n(()=>[e("结果")]),_:1})])]),l("li",null,[l("p",null,[o(t,{to:"/en/software/comsol/app.html"},{default:n(()=>[e("APP")]),_:1})])])]),_,l("ul",null,[l("li",null,[l("p",null,[l("a",d,[e("COMSOL 新手指南"),o(r)])])]),l("li",null,[l("p",null,[l("a",f,[e("COMSOL App 开发器简介"),o(r)])])]),l("li",null,[l("p",null,[l("a",O,[e("COMSOL Multiphysics 应用程序编程指南"),o(r)])])]),l("li",null,[l("p",null,[l("a",g,[e("COMSOL 多物理场仿真百科"),o(r)])])]),l("li",null,[l("p",null,[l("a",k,[e("COMSOL 视频中心"),o(r)])])]),l("li",null,[l("p",null,[l("a",C,[e("COMSOL 在线课程回放"),o(r)]),e(" (应该是在疫情期间限时开放)")])]),l("li",null,[l("p",null,[l("a",b,[e("基于 COMSOL 的论文"),o(r)])])])]),w,l("ul",null,[l("li",null,[l("p",null,[l("a",L,[e("如何设置特殊边界条件"),o(r)])])]),l("li",null,[l("p",null,[l("a",M,[e("如何定制 COMSOL Desktop"),S,e(" 和使用键盘快捷键"),o(r)])])]),l("li",null,[l("p",null,[l("a",x,[e("使用查找工具和自动完成工具加快建模过程"),o(r)])])])])])}const A=a(p,[["render",y],["__file","index.html.vue"]]);export{A as default};
