import{_ as o,W as n,X as s,Y as t}from"./framework-303b4bc8.js";const e={},_=t("p",null,"在编写代码的时候，临时的软件选择需要注意。",-1),c=t("p",null,"请注意，绝对不能用 Word 和写字板。Word 和写字板保存的不是纯文本文件。",-1),i=t("p",null,"千万不要使用 Windows 自带的记事本编辑任何文本文件。",-1),l=t("p",null,"原因是 Microsoft 开发记事本的团队使用了一个非常弱智的行为来保存 UTF-8 编码的文件，他们自作聪明地在每个文件开头添加了几个特殊字符(UTF-8 BOM，即 0xefbbbf)，您会遇到很多不可思议的问题，比如，网页第一行可能会显示一个“?”，明明正确的程序一编译就报语法错误，等等，都是由记事本的弱智行为带来的。",-1),d=t("p",null,"这个弱智行为从 Windows XP 影响到 Windows 10，在最新的 Windows 10 版本(20H2) 中，才得到解决。",-1),a=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"ヒント"),t("p",null,"如果实在是临时急用，需要用记事本替代改一下代码，也要一定注意，保存文件时使用 ANSI 编码，并且暂时不要输入(包含)中文。")],-1),r=[_,c,i,l,d,a];function p(h,u){return n(),s("div",null,r)}const W=o(e,[["render",p],["__file","notepad.html.vue"]]);export{W as default};
