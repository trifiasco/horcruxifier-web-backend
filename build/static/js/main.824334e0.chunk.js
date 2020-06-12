(this["webpackJsonphorcruxifier-web-app"]=this["webpackJsonphorcruxifier-web-app"]||[]).push([[0],{45:function(e,t,n){},54:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},66:function(e,t,n){e.exports=n(93)},71:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),i=(n(71),n(45),n(29)),l=n(138),u=n(54),s=n.n(u),f=n(18),d=n.n(f),p=n(26),m=n(41),h=n.n(m),b=n(55),x=n.n(b),y=n(140),E=n(137),v=n(136),w=n(134),g=n(135),O=n(133),j=n(128),k=a.a.forwardRef((function(e,t){return a.a.createElement(j.a,Object.assign({direction:"up",ref:t},e))})),C=function(e){var t=e.open,n=e.variant,c=e.onClose,o=e.onUpload,u=function(e){switch(e){case"horcruxify":return{title:"Horcruxify",sectionHeader:"Upload a file"};case"de-horcruxify":return{title:"De-Horcruxify",sectionHeader:"Upload a folder"};default:return{}}}(n),s=Object(r.useState)({selectedFile:null}),f=Object(i.a)(s,2),m=f[0],h=f[1],b=Object(r.useState)(""),x=Object(i.a)(b,2),j=x[0],C=x[1],F=function(e){if("horcruxify"===n){var t=e.target.files[0];h({selectedFile:t,loaded:0})}else h({selectedFile:e.target.files})},S=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(m,j,n);case 2:h({selectedFile:null}),C(""),c();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(y.a,{open:t,TransitionComponent:k,keepMounted:!0,onClose:c,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},a.a.createElement(O.a,{id:"alert-dialog-slide-title"},u.title),a.a.createElement(w.a,null,"horcruxify"===n?a.a.createElement("input",{type:"file",name:"file",onChange:F}):a.a.createElement("input",{type:"file",name:"file",multiple:!0,onChange:F}),a.a.createElement("div",null,a.a.createElement(E.a,{id:"standard-basic",label:"Enter a password",onChange:function(e){var t=e.target.value;C(t)}}),a.a.createElement(g.a,{style:{color:"red"}},"If you forget your password, you won't be able to de-horcruxify"))),a.a.createElement(v.a,null,a.a.createElement(l.a,{onClick:c,color:"primary"},"Cancel"),a.a.createElement(l.a,{onClick:S,color:"primary"},"Process"))))},F=function(e){var t=function(){var e=Object(p.a)(d.a.mark((function e(t,r){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("DELETE",t,null,{filename:r});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),n=function(){var e=Object(p.a)(d.a.mark((function e(t,n,r,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="GET"===e.t0?3:"POST"===e.t0?6:"DELETE"===e.t0?9:12;break;case 3:return e.next=5,fetch("".concat(n,"?filename=").concat(encodeURIComponent(a.filename)));case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,h.a.post(n,r,{});case 8:return e.abrupt("return",e.sent);case 9:return e.next=11,h.a.delete(n,{params:a});case 11:return e.abrupt("return",e.sent);case 12:return e.abrupt("return");case 13:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),r=function(){var e=Object(p.a)(d.a.mark((function e(r,a,c){var o,i,l,u,s,f;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=new FormData,"","horcruxify"===c)o.append("file",r.selectedFile),i="".concat("","/horcruxify");else{for(l=0;l<r.selectedFile.length;l++)o.append("file",r.selectedFile[l]);i="".concat("","/dehorcruxify")}return o.append("password",a),e.next=6,n("POST",i,o,{});case 6:if(200!==(u=e.sent).status){e.next=18;break}return e.next=10,n("GET",i,null,{filename:u.data});case 10:return s=e.sent,e.next=13,s.blob();case 13:return f=e.sent,x()(f,"horcruxify"===c?"horcruxes.zip":"original.txt"),console.log("file should be downloaded by now!!"),e.next=18,t(i,u.data);case 18:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return a.a.createElement(C,Object.assign({onUpload:r},e))},S=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(r.useState)("horcruxify"),f=Object(i.a)(u,2),d=f[0],p=f[1];return a.a.createElement("div",null,a.a.createElement("img",{src:s.a,alt:"logo",className:"App-logo"}),a.a.createElement("div",null,a.a.createElement(l.a,{variant:"contained",color:"primary",onClick:function(){p("horcruxify"),o(!0)}},"Horcruxify"),a.a.createElement(l.a,{variant:"contained",color:"primary",onClick:function(){p("de-horcruxify"),o(!0)}},"De-Horcruxify"),a.a.createElement(F,Object.assign({onClose:function(){o(!1)}},{open:c,variant:d}))))};var T=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.824334e0.chunk.js.map