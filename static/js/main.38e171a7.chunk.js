(this["webpackJsonpbox-office"]=this["webpackJsonpbox-office"]||[]).push([[0],{36:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(24),c=t.n(i),a=t(10),o=(t(36),t(2)),s=t(4),d=t(11),l=t(30),b=t(6),j=t(20),p=t.n(j),u=t(25),x="https://api.tvmaze.com";function h(n){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(p.a.mark((function n(e){var t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(x).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,e,t){var i=Object(r.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),c=Object(b.a)(i,2),a=c[0],o=c[1];return Object(r.useEffect)((function(){localStorage.setItem(t,JSON.stringify(a))}),[a,t]),[a,o]}function f(n,e){switch(e.type){case"ADD":return[].concat(Object(l.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}}function O(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return m(f,[],n)}var v=function(n,e){switch(e.type){case"FETCH_SUCCESS":return Object(d.a)(Object(d.a)({},n),{},{detail:e.detail,isLoading:!1});case"FETCH_FAILED":return Object(d.a)(Object(d.a)({},n),{},{isLoading:!1,error:e.error});default:return n}};var A,w,C,y,B,D,E,R,S,F,N,V,I,k,Q,z,P,W,U,H,q,L="data:image/png;base64,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",J=t(3),M=o.b.div(A||(A=Object(J.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .actor {\n    margin-left: 25px;\n\n    .bold {\n      font-weight: bold;\n    }\n  }\n"]))),X=t(0),Y=function(n){var e=n.cast;return Object(X.jsx)(M,{children:e.map((function(n,e){var t=n.person,r=n.character,i=n.voice;return Object(X.jsxs)("div",{className:"cast-item",children:[Object(X.jsx)("div",{className:"pic-wrapper",children:Object(X.jsx)("img",{src:t.image?t.image.medium:L,alt:"cast-person"})}),Object(X.jsx)("div",{className:"actor",children:Object(X.jsxs)("span",{children:[Object(X.jsxs)("span",{className:"bold",children:[" ",t.name," "]}),"| ",r.name," ",i?"| Voice":""]})})]},e)}))})},K=t(29),Z=t.n(K),T=Object(o.b)(Z.a)(w||(w=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),G=o.b.div(C||(C=Object(J.a)(["\n  width: 300px;\n  height: 100%;\n  margin: 0 15px 40px;\n\n  .img-wrapper {\n    width: 100%;\n    border-radius: 40px;\n    height: 420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n\n    img {\n      object-fit: cover;\n      height: 100%;\n      width: 100%;\n    }\n  }\n\n  h1 {\n    margin: 10px 0;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 0;\n  }\n"]))),_=o.b.div(y||(y=Object(J.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-color: #ffc806;\n  background-color: ",";\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n"])),(function(n){return n.active?"#ffc806":"#ddd"})),$=o.b.div(B||(B=Object(J.a)(["\n  display: flex;\n  margin-bottom: 40px;\n\n  img {\n    min-width: 250px;\n    width: 300px;\n    max-height: 450px;\n    border: 1px solid #ddd;\n    border-radius: 40px;\n  }\n\n  .text-side {\n    margin-left: 20px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]))),nn=o.b.div(D||(D=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]))),en=o.b.div(E||(E=Object(J.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]))),tn=function(n){var e=n.name,t=n.rating,r=n.summary,i=n.tags,c=n.image;return Object(X.jsxs)($,{children:[Object(X.jsx)("img",{src:c?c.original:L,alt:"show-cover"}),Object(X.jsxs)("div",{className:"text-side",children:[Object(X.jsxs)(nn,{children:[Object(X.jsx)("h1",{children:e}),Object(X.jsxs)("div",{children:[Object(X.jsx)(_,{active:!0}),Object(X.jsx)("span",{children:t.average||"N/A"})]})]}),Object(X.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:r}}),Object(X.jsxs)("div",{children:["Tags:"," ",Object(X.jsx)(en,{children:i.map((function(n,e){return Object(X.jsx)("span",{children:n},e)}))})]})]})]})},rn=o.b.div(R||(R=Object(J.a)(["\n  padding: 0 20px;\n\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]))),cn=o.b.div(S||(S=Object(J.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"]))),an=o.b.div(F||(F=Object(J.a)(["\n  p {\n    margin: 5px 0;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]))),on=function(n){var e=n.status,t=n.premiered,r=n.network;return Object(X.jsxs)(an,{children:[Object(X.jsxs)("p",{children:["Status: ",Object(X.jsx)("span",{children:e})]}),Object(X.jsxs)("p",{children:["Premiered ",t," ",r?"on ".concat(r.name):null]})]})},sn=o.b.div(N||(N=Object(J.a)(["\n  p {\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]))),dn=o.b.div(V||(V=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]))),ln=function(n){var e=n.seasons;return Object(X.jsxs)(sn,{children:[Object(X.jsxs)("p",{children:["Seasons in total: ",Object(X.jsx)("span",{children:e.length})]}),Object(X.jsxs)("p",{children:["Episodes in total:"," ",Object(X.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(X.jsx)(dn,{children:e.map((function(n){return Object(X.jsxs)("div",{className:"season-item",children:[Object(X.jsxs)("div",{className:"left",children:[Object(X.jsxs)("p",{children:["Season ",n.number]}),Object(X.jsxs)("p",{children:["Episodes: ",Object(X.jsx)("span",{children:n.episodeOrder})]})]}),Object(X.jsxs)("div",{className:"right",children:["Aired:"," ",Object(X.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})},bn=function(){var n=function(n){var e=Object(r.useReducer)(v,{detail:null,isLoading:!0,error:null}),t=Object(b.a)(e,2),i=t[0],c=t[1];return Object(r.useEffect)((function(){var e=!0;return h("/shows/".concat(n,"?embed[]=seasons&embed[]=cast")).then((function(n){e&&c({type:"FETCH_SUCCESS",detail:n})})).catch((function(n){e&&c({type:"FETCH_FAILED",error:n.message})})),function(){e=!1}}),[n]),i}(Object(s.g)().id),e=n.detail,t=n.isLoading,i=n.error;return t?Object(X.jsx)("div",{children:"Data is being loaded."}):i?Object(X.jsxs)("div",{children:["Error ocurred : ",i,"."]}):(console.log("detail",e),Object(X.jsxs)(rn,{children:[Object(X.jsx)(tn,{image:e.image,name:e.name,rating:e.rating,summary:e.summary,tags:e.genres}),Object(X.jsxs)(cn,{children:[Object(X.jsx)("h2",{children:"Info:"}),Object(X.jsx)(on,{status:e.status,network:e.network,premiered:e.premiered})]}),Object(X.jsxs)(cn,{children:[Object(X.jsx)("h2",{children:"Seasons:"}),Object(X.jsx)(ln,{seasons:e._embedded.seasons})]}),Object(X.jsxs)(cn,{children:[Object(X.jsx)("h2",{children:"Cast:"}),Object(X.jsx)(Y,{cast:e._embedded.cast})]})]}))},jn=Object(o.b)(G)(I||(I=Object(J.a)(["\n  .deathday {\n    margin: 0;\n    margin-top: 15px;\n    font-weight: bold;\n  }\n"]))),pn=function(n){var e=n.image,t=n.name,r=n.gender,i=n.country,c=n.birthday,a=n.deathday;return Object(X.jsxs)(jn,{children:[Object(X.jsx)("div",{className:"img-wrapper",children:Object(X.jsx)("img",{src:e,alt:"actor"})}),Object(X.jsxs)("h1",{children:[t," ",r?"(".concat(r,")"):null]}),Object(X.jsx)("p",{children:i?"Comes from ".concat(i):"No country known"}),c?Object(X.jsxs)("p",{children:["Born ",c]}):null,Object(X.jsx)("p",{className:"deathday",children:a?"Died ".concat(a):"Alive"})]})},un=function(n){var e=n.data;return Object(X.jsx)(T,{children:e.map((function(n){var e=n.person;return Object(X.jsx)(pn,{name:e.name,country:e.country?e.country.name:null,birthday:e.birthday,deathday:e.deathday,gender:e.gender,image:e.image?e.image.medium:L},e.id)}))})},xn=t(31),hn=["label"],gn=o.b.label(k||(k=Object(J.a)(["\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 13px;\n  user-select: none;\n  font-weight: 700;\n  line-height: 1.65;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #fff;\n    border: 2px solid ",";\n    border-radius: 50%;\n  }\n\n  input:checked ~ span {\n    background-color: #fff;\n    border: 2px solid ",";\n  }\n\n  span:after {\n    content: '';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ span:after {\n    display: block;\n  }\n\n  span:after {\n    top: 4px;\n    left: 4px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ",";\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),mn=function(n){var e=n.label,t=Object(xn.a)(n,hn);return Object(X.jsxs)(gn,{htmlFor:t.id,children:[e,Object(X.jsx)("input",Object(d.a)(Object(d.a)({},t),{},{type:"radio"})),Object(X.jsx)("span",{})]})},fn=Object(r.memo)(mn),On=o.b.ul(Q||(Q=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]))),vn=Object(o.b)(a.b)(z||(z=Object(J.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n    &:after {\n      content: '';\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ",";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),An=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}],wn=function(){var n=Object(s.f)();return Object(X.jsx)("div",{children:Object(X.jsx)(On,{children:An.map((function(e){return Object(X.jsx)("li",{children:Object(X.jsx)(vn,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text})},e.to)}))})})},Cn=Object(r.memo)(wn),yn=o.b.div(P||(P=Object(J.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  p {\n    color: ",";\n    margin: 0;\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark})),Bn=function(n){var e=n.title,t=n.subtitle;return Object(X.jsxs)(yn,{children:[Object(X.jsx)("h1",{children:e}),Object(X.jsx)("p",{children:t})]})},Dn=Object(r.memo)(Bn),En=function(n){var e=n.children;return Object(X.jsxs)("div",{children:[Object(X.jsx)(Dn,{title:"Box Office",subtitle:"Are you searching for a movie or actor ?"}),Object(X.jsx)(Cn,{}),e]})},Rn=Object(o.b)(G)(W||(W=Object(J.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]))),Sn=function(n){var e=n.id,t=n.image,r=n.name,i=n.summary,c=n.onStarClick,o=n.isStarred,s=i?"".concat(i.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(X.jsxs)(Rn,{children:[Object(X.jsx)("div",{className:"img-wrapper",children:Object(X.jsx)("img",{src:t,alt:"show"})}),Object(X.jsx)("h1",{children:r}),Object(X.jsx)("p",{children:s}),Object(X.jsxs)("div",{className:"btns",children:[Object(X.jsx)(a.b,{to:"/show/".concat(e),children:"Read more"}),Object(X.jsx)("button",{type:"button",onClick:c,children:Object(X.jsx)(_,{active:o})})]})]})},Fn=Object(r.memo)(Sn),Nn=function(n){var e=n.data,t=O(),i=Object(b.a)(t,2),c=i[0],a=i[1];return Object(X.jsxs)(T,{children:[e.map((function(n){var e=n.show,t=c.includes(e.id),i=Object(r.useCallback)((function(){a(t?{type:"REMOVE",showId:e.id}:{type:"ADD",showId:e.id})}),[t,e.id]);return Object(X.jsx)(Fn,{id:e.id,name:e.name,image:e.image?e.image.medium:L,summary:e.summary,onStarClick:i,isStarred:t},e.id)})),";"]})},Vn=o.b.input(U||(U=Object(J.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n"]))),In=o.b.div(H||(H=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n\n  div {\n    margin: 0 15px;\n  }\n"]))),kn=o.b.div(q||(q=Object(J.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n\n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(n){return n.theme.mainColors.blue})),Qn=function(n){return n&&0===n.length?Object(X.jsx)("div",{children:"No results"}):n&&n.length>0?n[0].show?Object(X.jsx)(Nn,{data:n}):Object(X.jsx)(un,{data:n}):null},zn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(r.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(b.a)(e,2),i=t[0],c=t[1],a=Object(r.useCallback)((function(e){c(e),sessionStorage.setItem(n,JSON.stringify(e))}),[n]);return[i,a]}(),e=Object(b.a)(n,2),t=e[0],i=e[1],c=Object(r.useState)(null),a=Object(b.a)(c,2),o=a[0],s=a[1],d=Object(r.useState)("shows"),l=Object(b.a)(d,2),j=l[0],p=l[1],u="shows"===j,x=function(){h("/search/".concat(j,"?q=").concat(t)).then((function(n){s(n)}))},g=Object(r.useCallback)((function(n){i(n.target.value)}),[i]),m=Object(r.useCallback)((function(n){p(n.target.value)}),[]);return Object(X.jsxs)(En,{children:[Object(X.jsx)(Vn,{type:"text",placeholder:"Search for something",onKeyDown:function(n){13===n.keyCode&&x()},onChange:g,value:t}),Object(X.jsxs)(In,{children:[Object(X.jsx)("div",{children:Object(X.jsx)(fn,{label:"Shows",id:"shows-search",value:"shows",checked:u,onChange:m})}),Object(X.jsx)("div",{children:Object(X.jsx)(fn,{label:"Actors",id:"actors-search",value:"people",checked:!u,onChange:m})})]}),Object(X.jsx)(kn,{children:Object(X.jsx)("button",{type:"button",onClick:x,children:"Search"})}),Qn(o)]})},Pn=function(){var n=O(),e=Object(b.a)(n,1)[0],t=Object(r.useState)(null),i=Object(b.a)(t,2),c=i[0],a=i[1],o=Object(r.useState)(!0),s=Object(b.a)(o,2),d=s[0],l=s[1],j=Object(r.useState)(null),p=Object(b.a)(j,2),u=p[0],x=p[1];return Object(r.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return h("/shows/".concat(n))}));Promise.all(n).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){console.log("results",n),a(n),l(!1)})).catch((function(n){x(n.message),l(!1)}))}else l(!1)}),[e]),Object(X.jsxs)(En,{children:[d&&Object(X.jsx)("div",{children:"Shows are still Loading"}),u&&Object(X.jsxs)("div",{children:["Error occured:",u]}),!d&&!c&&Object(X.jsx)("div",{children:"No starred Shows"}),!d&&!u&&c&&Object(X.jsx)(Nn,{data:c})]})},Wn={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var Un=function(){return Object(X.jsx)(o.a,{theme:Wn,children:Object(X.jsxs)(s.c,{children:[Object(X.jsx)(s.a,{exact:!0,path:"/",children:Object(X.jsx)(zn,{})}),Object(X.jsx)(s.a,{exact:!0,path:"/starred",children:Object(X.jsx)(Pn,{})}),Object(X.jsx)(s.a,{exact:!0,path:"/show/:id",children:Object(X.jsx)(bn,{})}),Object(X.jsx)(s.a,{children:Object(X.jsx)("div",{children:"404 error, Page not found"})})]})})},Hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))};c.a.render(Object(X.jsx)(a.a,{children:Object(X.jsx)(Un,{})}),document.getElementById("root")),Hn()}},[[46,1,2]]]);
//# sourceMappingURL=main.38e171a7.chunk.js.map