import{_ as r,d as n,o as s,c as a,Z as c,$ as d,k as o,a as i}from"./chunks/framework.df6e7049.js";const l=n({setup(){const e=c({password:"123",ret:"",show:!1}),t=()=>{e.ret=prompt("请输入密码"),e.ret!==null&&(e.ret!==e.password?t():e.show=!0)};return t(),{...d(e)}}}),x=JSON.parse('{"title":"测试加密","description":"","frontmatter":{},"headers":[],"relativePath":"Web/Html/Html2/h2.md","filePath":"Web/Html/Html2/h2.md"}'),_={key:0},h=o("h1",{id:"测试加密",tabindex:"-1"},[i("测试加密 "),o("a",{class:"header-anchor",href:"#测试加密","aria-label":'Permalink to "测试加密"'},"​")],-1),p=o("p",null,"这种方式，只需要查看 md 文档即可",-1),f=[h,p],m={key:1};function u(e,t,k,v,w,$){return s(),a("div",null,[e.show?(s(),a("div",_,f)):(s(),a("div",m,"该文档内容加密了哟！"))])}const H=r(l,[["render",u]]);export{x as __pageData,H as default};