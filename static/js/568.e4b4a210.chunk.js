"use strict";(self.webpackChunkYour_Pet_Team_Project=self.webpackChunkYour_Pet_Team_Project||[]).push([[568],{9568:function(n,i,e){e.r(i),e.d(i,{default:function(){return v}});var a,s,t=e(2791),r=e(9434),o=e(1444),l=function(n){return n.friends.items},c=e(9439),d={item_container:"Friends_item_container__z44dp",main_info:"Friends_main_info__x3vda",info_img:"Friends_info_img__LEL01",item_img:"Friends_item_img__vv3kM",item_title:"Friends_item_title__BnkEA",info_head:"Friends_info_head__XqgCx",items_info:"Friends_items_info__enamO",item_info_div:"Friends_item_info_div__w0tg9",info_list_item:"Friends_info_list_item__mt+gK",info_main:"Friends_info_main__qkMnv",info_list:"Friends_info_list__uUEHF",modal:"Friends_modal__j5o3U",modal_content:"Friends_modal_content__9yHNs",modal_li:"Friends_modal_li__IAwFs",backdrop:"Friends_backdrop__pQoDe"},_=e(184),m=function(n){var i=n.item,e=(0,t.useState)(!1),a=(0,c.Z)(e,2),s=a[0],r=a[1],o=(0,t.useCallback)((function(){r(!1)}),[]);(0,t.useEffect)((function(){var n=function(n){"Escape"===n.code&&o()};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[o]);var l=function(n){return n.padStart(5,"0")};return(0,_.jsx)("li",{children:(0,_.jsxs)("div",{className:d.item_container,children:[(0,_.jsx)("div",{className:d.title_div,children:(0,_.jsx)("h3",{children:(0,_.jsx)("a",{href:i.url,target:"blank",className:d.item_title,children:i.title})})}),(0,_.jsxs)("div",{className:d.main_info,children:[(0,_.jsx)("div",{className:d.info_img,children:(0,_.jsx)("img",{src:i.imageUrl,alt:"friends-avatar",className:d.item_img})}),(0,_.jsx)("div",{className:d.items_info,children:(0,_.jsxs)("ul",{className:d.info_list,children:[null!==i.workDays&&(0,_.jsxs)("li",{className:d.info_list_item,children:[" ","Time:",(0,_.jsx)("a",{href:"dffdfsd",className:d.info_main,onClick:function(n){n.preventDefault(),r(!0)},children:function(){if(i.workDays&&Array.isArray(i.workDays)){var n=i.workDays.find((function(n){return n.isOpen}));if(n){var e=l(n.from),a=l(n.to);return" ".concat(e," - ").concat(a)}}return null}()})]}),s&&(0,_.jsx)("div",{className:d.backdrop,onClick:function(n){n.target===n.currentTarget&&o()},children:(0,_.jsx)("div",{className:d.modal,children:(0,_.jsx)("ul",{className:d.modal_content,children:function(){var n=["MU","TU","WE","TH","FR","SA","SU"];return i.workDays&&Array.isArray(i.workDays)?i.workDays.map((function(i,e){return(0,_.jsx)("li",{className:d.modal_li,children:i.isOpen?"".concat(n[e]," : ").concat(i.from," - ").concat(i.to):""},e)})):null}()})})}),i.addressUrl&&(0,_.jsxs)("li",{className:d.info_list_item,children:["Adress:",(0,_.jsx)("a",{href:i.addressUrl,className:d.info_main,target:"blank",children:i.address})]}),i.email&&(0,_.jsxs)("li",{className:d.info_list_item,children:["Email:",(0,_.jsx)("a",{href:"mailto:".concat(i.email),className:d.info_main,target:"blank",children:i.email})]}),i.phone&&(0,_.jsxs)("li",{className:d.info_list_item,children:["Phone:",(0,_.jsx)("a",{href:"tel:".concat(i.phone),className:d.info_main,children:i.phone})]})]})})]})]})})},f="FriendsList_list__V5-Hd",u=function(n){var i=n.friend;return(0,_.jsx)("ul",{className:f,children:i.map((function(n){return(0,_.jsx)(m,{item:n},n._id)}))})},h=e(168),x=e(9202),p=x.Z.h2(a||(a=(0,h.Z)(["\n  text-align: center;\n\n  @media screen and (max-width: 747.98px) {\n    font-size: 24px;\n    margin-top: 40px;\n    margin-bottom: 24px;\n  }\n\n  @media screen and (min-width: 748px) {\n    font-size: 48px;\n    margin-bottom: 40px;\n    margin-top: 80px;\n  }\n"]))),j=x.Z.div(s||(s=(0,h.Z)(["\n  background-color: #fef9f9;\n  margin-bottom: 75px;\n\n@media screen and (min-width: 748px) {\n  margin-bottom: 170px;\n}\n\n@media screen and (min-width: 1280px) {\n  margin-bottom: 69px;\n}\n"]))),v=function(){var n=(0,r.I0)(),i=(0,r.v9)(l);return(0,t.useEffect)((function(){n((0,o._)())}),[n]),(0,_.jsxs)(j,{children:[(0,_.jsx)(p,{children:"Our friends"}),(0,_.jsx)(u,{friend:i})]})}}}]);
//# sourceMappingURL=568.e4b4a210.chunk.js.map