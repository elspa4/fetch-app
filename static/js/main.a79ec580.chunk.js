(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c,a,r=n(0),i=n.n(r),s=n(17),l=n.n(s),j=(n(67),n(68),n(32)),u=n(26),o=n(27),d=n(107),b=n(108),h=n(109),O=n(110),p=n(111),x=n(112),f=n(3),m=Object(o.a)(d.a)(c||(c=Object(u.a)(["\n  border: 1px solid #e3e3e3;\n  margin: auto;\n  max-width: 500px;\n"]))),v=function(e){var t=e.items,n=e.showListId,c=void 0!==n&&n;return Object(f.jsx)(m,{children:Object(f.jsxs)(b.a,{size:"small",children:[Object(f.jsx)(h.a,{children:Object(f.jsxs)(O.a,{children:[c?Object(f.jsx)(p.a,{children:"List ID"}):null,Object(f.jsx)(p.a,{children:"ID"}),Object(f.jsx)(p.a,{children:"Name"})]})}),Object(f.jsx)(x.a,{children:t.map((function(e){return Object(f.jsxs)(O.a,{children:[c?Object(f.jsx)(p.a,{children:e.listId}):null,Object(f.jsx)(p.a,{children:e.id}),Object(f.jsx)(p.a,{children:e.name})]},e.id)}))})]})})},g=n(116),I=n(113),w=n(115),S=function(e){var t=e.tabValue,n=e.index,c=e.children;return Object(f.jsx)("div",{role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n),children:t===n&&Object(f.jsx)(w.a,{p:3,children:c})})},y=n(34),C=n.n(y),E=n(35),L=n(55),k=n(56),A=n.n(k),D=function(){var e=Object(L.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A.a.get("https://fetch-hiring.s3.amazonaws.com/hiring.json").then((function(e){var t=((null===e||void 0===e?void 0:e.data)||[]).filter((function(e){return e.name})),n=t.map((function(e){return e.listId})),c=Object(E.a)(new Set(n)).sort(),a=[],r=[];return c.forEach((function(e){var n=t.filter((function(t){return t.listId===e}));n.sort((function(e,t){return((null===e||void 0===e?void 0:e.name)||"").localeCompare((null===t||void 0===t?void 0:t.name)||"",void 0,{numeric:!0})}));var c={listId:e,items:n};a.push(c),r.push.apply(r,Object(E.a)(n))})),{groups:a,ungrouped:r}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=o.a.h1(a||(a=Object(u.a)(["\n  color: #300c3a;\n"]))),z=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),i=Object(j.a)(a,2),s=i[0],l=i[1],u=Object(r.useState)(0),o=Object(j.a)(u,2),d=o[0],b=o[1];return Object(r.useEffect)((function(){D().then((function(e){c(e.groups),l(e.ungrouped)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(V,{children:"Elena's Coding Challenge App"}),Object(f.jsxs)(g.a,{value:d,onChange:function(e,t){b(t)},centered:!0,children:[Object(f.jsx)(I.a,{label:"All"}),n.map((function(e){return Object(f.jsx)(I.a,{label:"List ID: ".concat(e.listId)},"tab-".concat(e.listId))}))]}),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(S,{tabValue:d,index:0,children:Object(f.jsx)(v,{items:s,showListId:!0})}),n.map((function(e,t){return Object(f.jsx)(S,{tabValue:d,index:t+1,children:Object(f.jsx)(v,{items:e.items})})}))]})]})};var F=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(z,{})})};l.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.a79ec580.chunk.js.map