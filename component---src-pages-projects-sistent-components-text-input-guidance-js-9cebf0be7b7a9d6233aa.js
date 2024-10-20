"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[9361],{22514:function(e,t,n){n.d(t,{A:function(){return o}});var i=n(96540);const a=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"}];var l=n(96044);var r=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var o=()=>{var e,t;const{0:n,1:o}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=a.findIndex((t=>t.link===e));o(t)}),[]),i.createElement(r,null,n>0?i.createElement(l.default,{$secondary:!0,$url:null===(e=a[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<a.length-1?i.createElement(l.default,{$primary:!0,$url:null===(t=a[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},56759:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=n(96540),a=n(64810),l=n(86462),r=n(66054),o=n(58501),s=n(9184),c=n(96044),d=n(92121);const p=()=>{const e=(0,l.useLocation)(),{isDark:t}=(0,d.G)();return i.createElement(s.p,{title:"Text Input"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Text Input")),i.createElement("p",null,"Text inputs are important elements that help users interact with an experience by providing text commands that will in turn return expected results. These commands can range from providing a free range of personal information to entering a limited number of characters for a use case."),i.createElement("div",{className:"filterBtns"},i.createElement(c.default,{className:"/projects/sistent/components/text-input"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/components/text-input"),title:"Overview"}),i.createElement(c.default,{className:"/projects/sistent/components/text-input/guidance"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/components/text-input/guidance"),title:"Guidance"}),i.createElement(c.default,{className:"/projects/sistent/components/text-input/code"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/components/text-input/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"Although we have only one type of text input to be used, there are different roles that they can function in that ensure that these inputs prove sufficient for multiple use cases."),i.createElement("a",{id:"Function"},i.createElement("h2",null,"Function")),i.createElement("p",null),i.createElement("h3",null,"Default"),i.createElement("p",null,"Default text inputs are used for most of the input needs across an interface. From filling up forms to entering text content in provided form fields to complete an action or a task. this text input is mostly utilized. Icons are not seldom required in this text input, however, they can included when extremely necessary."),i.createElement(r.fI,{$Hcenter:!0},i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Input,{placeholder:"PlaceHolder"}))),i.createElement("h3",null,"Multiline"),i.createElement("p",null,"Multiline text input functions for input that requires more than one line of text. This text input adjusts vertically based on the amount of lines of text entered into the text field."),i.createElement(r.fI,{$Hcenter:!0},i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Input,{placeholder:"Placeholder",multiline:!0}))),i.createElement("a",{id:"Labelling"},i.createElement("h2",null,"Labelling")),i.createElement("p",null,"A couple of elements come together to support the input field depending on the context in is being used. These elements either provide added information or provide much needed support to ensure users are able to complete intended tasks."),i.createElement("h3",null,"Label"),i.createElement("p",null,"The label is an optional feature that can accompany the text input. It an be used to point out what is required in the input field."),i.createElement("h3",null,"Required"),i.createElement("p",null,"This type of label that is usually applied in forms to inform users of a compulsary information that is to be provided in order to complete the form. It is represented by an asterisk mark (*) that appears after the label text."),i.createElement("h3",null,"Helper text"),i.createElement("p",null,"Helper text appears at the bottom of the input field and it is primarily to serve as an alert for the user to inform them based on the input they have entered but only where necessary."))))};var m=()=>i.createElement(p,null)},9184:function(e,t,n){n.d(t,{p:function(){return p}});var i=n(96540),a=n(91580),l=n(66198),r=n(66054),o=n(22514),s=n(64810);const c=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var d=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:a}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;a(e)}),[]),i.createElement(c,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(s.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const p=e=>{let{title:t,children:n}=e;return i.createElement(a.A,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(l.A,null),i.createElement("div",{className:"page-section"},i.createElement(r.mc,null,n," ",i.createElement(o.A,null)),i.createElement(d,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-components-text-input-guidance-js-9cebf0be7b7a9d6233aa.js.map