import{g as v,a as p,_ as d}from"./app-e34b7076.js";import{c as w,r as n,z as g,h as f,o as h,j as e}from"./framework-a4b0319b.js";const m='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M240.496 272c-13.504 0-25.664 5.632-34.384 14.608l-.048-.048-189.216 189.2A47.664 47.664 0 0 0 0 512c0 13.504 5.616 25.664 14.592 34.368l-.032.064 192 192 .048-.064A47.68 47.68 0 0 0 240 752a48 48 0 0 0 48-48c0-12.992-5.216-24.752-13.616-33.392l.048-.048-158.304-158.32 157.808-157.808-.048-.048A47.808 47.808 0 0 0 288.496 320a48 48 0 0 0-48-48zm784 240c0-14.56-6.608-27.44-16.848-36.24l-189.216-189.2-.032.048A47.872 47.872 0 0 0 784 272a48 48 0 0 0-48 48c0 13.504 5.632 25.664 14.608 34.384l-.048.048L908.368 512.24l-158.32 158.32.048.048A47.808 47.808 0 0 0 736.48 704a48 48 0 0 0 48 48c12.992 0 24.752-5.216 33.408-13.632l.048.064 192-192-.048-.064A47.68 47.68 0 0 0 1024.496 512zM640 128c-20.8 0-38.496 13.232-45.168 31.712L339.2 830.784a48 48 0 0 0 89.968 33.504L684.8 193.216A48 48 0 0 0 640 128z"/></svg>',y=a=>p({},{autoResize:!0,showCode:!1,showCompileOutput:!1,showImportMap:!0,clearConsole:!1,layout:"vertical",ssr:!1},JSON.parse(decodeURIComponent(a)));var R=w({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(a){const i=n(!0),s=g(),l=n(),t=f(()=>y(a.settings)),o=n(t.value.showCode||!1),u=async()=>{const{ReplStore:r,Repl:c}=await d(()=>import("./vue-repl-8c84e965.js"),["assets/vue-repl-8c84e965.js","assets/app-e34b7076.js","assets/framework-a4b0319b.js"]);s.value=c,l.value=new r({serializedState:decodeURIComponent(a.files),showOutput:!0}),t.value.vueVersion&&await l.value.setVueVersion(t.value.vueVersion)};return h(async()=>{await u(),i.value=!1}),()=>[e("div",{class:"vue-playground-wrapper"},[e("div",{class:"title-wrapper"},[a.title?e("div",{class:"title"},decodeURIComponent(a.title)):null,e("div",{class:"actions"},[e("button",{class:"action",innerHTML:m,onClick:()=>{o.value=!o.value}})])]),e("div",{class:["repl-container",o.value?"show-code":"hide-code"]},[i.value?e(v,{class:"preview-loading",height:192}):null,s.value?e(s.value,{store:l.value,...t.value}):null])])]}});export{R as default};
