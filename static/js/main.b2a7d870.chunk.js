(this["webpackJsonpjh-blog-rtk"]=this["webpackJsonpjh-blog-rtk"]||[]).push([[0],{441:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),c=e(42),o=e(6),i=e(18),s=e(3),u=e(4),d="@media screen and (min-width: 576px)",p=e.p+"static/media/Inconsolata.3841494d.woff",f=e.p+"static/media/Inconsolata.e73ec33c.woff2";function b(){var n=Object(s.a)(["\n  @font-face {\n    font-family: 'Inconsolata';\n    src: local('Inconsolata'),\n      url(",") format('woff'),\n      url(",") format('woff2'),\n      font-weight: 300;\n      font-style: normal;\n  }\n\n  * {\n    font-family: 'Inconsolata', monospace;\n    margin: 0;\n    box-sizing: border-box;\n    text-align: center;\n    font-size: 16px;\n    overflow-wrap: break-word;\n    "," {\n      font-size: 20px;\n    }\n  }\n  li {\n    list-style-type: none;\n  }\n  main {\n    position: relative;\n    margin: auto;\n    top: 76px;\n    min-height: 500px;\n    max-width: 1080px;\n    min-height: calc(100vh - 76px - 38px);\n    width: 100%;\n    padding: 25px;\n  }\n  a {\n    text-decoration: none;\n    color: #222;\n  }\n  input {\n    text-align: left;\n    margin: 15px;\n  }\n  h1 {\n    font-size: 28px;\n    "," {\n      font-size: 32px;\n    }\n  }\n  h2 {\n    margin: 10px 0 25px;\n    padding: 5px;\n    text-align: left;\n    font-size: 24px;\n    "," {\n      font-size: 28px;\n    }\n  }\n"]);return b=function(){return n},n}var l=Object(u.a)(b(),p,f,d,d,d),j=e(11),x=e(8),h=e(2),g=e.n(h),O=e(7),v="token",m=function(n){return localStorage.setItem(v,n)},w=function(){return localStorage.getItem(v)},y="https://student-json-api.lidemy.me",k=function(){var n=Object(O.a)(g.a.mark((function n(t){var e,r,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=6;break}return n.next=3,fetch("".concat(y,"/posts?_sort=createdAt&_order=desc&_limit=5&_page=").concat(t));case 3:e=n.sent,n.next=9;break;case 6:return n.next=8,fetch("".concat(y,"/posts?_sort=createdAt&_order=desc"));case 8:e=n.sent;case 9:return n.next=11,e.json();case 11:return r=n.sent,a={posts:r,totalPosts:Number(e.headers.get("x-total-count")),page:t},n.abrupt("return",a);case 14:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),P=function(){var n=Object(O.a)(g.a.mark((function n(t){var e,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(y,"/posts?id=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r[0]);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),S=function(){var n=Object(O.a)(g.a.mark((function n(){var t,e,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=w(),n.next=3,fetch("".concat(y,"/me"),{headers:{authorization:"Bearer ".concat(t)}});case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),L=function(){var n=Object(O.a)(g.a.mark((function n(t,e){var r,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(y,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:e})});case 2:return r=n.sent,n.next=5,r.json();case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),E=function(){var n=Object(O.a)(g.a.mark((function n(t,e){var r,a,c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=w(),n.next=3,fetch("".concat(y,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(r)},body:JSON.stringify({title:t,body:e})});case 3:return a=n.sent,n.next=6,a.json();case 6:return c=n.sent,n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),F=function(){var n=Object(O.a)(g.a.mark((function n(t,e,r){var a,c,o;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=w(),n.next=3,fetch("".concat(y,"/posts/").concat(r),{method:"PATCH",headers:{"content-type":"application/json",authorization:"Bearer ".concat(a)},body:JSON.stringify({title:t,body:e})});case 3:return c=n.sent,n.next=6,c.json();case 6:return o=n.sent,n.abrupt("return",o);case 8:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),z=function(){var n=Object(O.a)(g.a.mark((function n(t){var e,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(y,"/posts/").concat(t),{method:"DELETE",headers:{"content-type":"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),I=Object(i.b)({name:"posts",initialState:{posts:[],totalPosts:0,currentPage:1,isLoading:!1,hasErrors:!1},reducers:{getPosts:function(n){n.isLoading=!0},getPostsSuccess:function(n,t){n.posts=t.payload.posts,n.currentPage=t.payload.page,n.totalPosts=t.payload.totalPosts,n.isLoading=!1,n.hasErrors=!1},getPostsFailure:function(n){n.isLoading=!1,n.hasErrors=!0}}}),A=I.actions,N=A.getPosts,M=A.getPostsSuccess,$=A.getPostsFailure,C=function(n){return n.posts},J=I.reducer,T=function(n){return function(){var t=Object(O.a)(g.a.mark((function t(e){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(N()),t.prev=1,t.next=4,k(n);case 4:r=t.sent,e(M(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e($());case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},B=e(99),D=e.n(B),R=e(445),_=e(444);function H(){var n=Object(s.a)(["\n  & > * {\n    overflow-wrap: break-word;\n    white-space: pre-wrap;\n    text-align: left;\n    "," {\n      padding: 5px 25px;\n    }\n  }\n"]);return H=function(){return n},n}function U(){var n=Object(s.a)(["\n  display: inline-block;\n  margin: 15px 25px;\n  text-align: left;\n  text-decoration: underline #aaacaf solid 3px;\n  transition: all ease-in-out 0.5s;\n  :hover {\n    color: #fff;\n    background: #aaacaf;\n  }\n"]);return U=function(){return n},n}function G(){var n=Object(s.a)(["\n  display: inline-block;\n  margin: 5px 25px;\n  padding: 5px;\n  border: 2px solid #abacad;\n  cursor: pointer;\n"]);return G=function(){return n},n}function W(){var n=Object(s.a)(["\n  display: inline-block;\n  margin: 5px 25px;\n  padding: 5px;\n  border: 2px solid #abacad;\n"]);return W=function(){return n},n}function Y(){var n=Object(s.a)(["\n  transition: all ease-in-out 0.5s;\n  overflow-wrap: break-word;\n  ","\n"]);return Y=function(){return n},n}function q(){var n=Object(s.a)(["\n  margin: 0;\n  color: #abacad;\n  text-align: left;\n"]);return q=function(){return n},n}function K(){var n=Object(s.a)(["\n  text-align: left;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #cacdcc;\n\n  "," {\n    margin: 30px 70px 20px;\n  }\n"]);return K=function(){return n},n}var Q=function(n){var t=n.language,e=n.value;return Object(r.jsx)(R.a,{language:t,style:_.a,showLineNumbers:!0,customStyle:{maxWidth:"80vw"},children:e||""})},V=u.b.div(K(),d),X=u.b.p(q()),Z=u.b.h2(Y(),(function(n){return!0!==n.$singlePost&&"\n      :hover {\n        color: #fff;\n        background: #aaacaf;\n      }\n    "})),nn=Object(u.b)(j.b)(W()),tn=u.b.div(G()),en=Object(u.b)(j.b)(U()),rn=Object(u.b)(D.a)(H(),d),an=function(n){var t=n.post,e=(n.user,n.userId),a=n.excerpt,c=n.archive,o=n.handleDeletePost,i=new Date(t.createdAt).toLocaleString();return Object(r.jsxs)(V,{children:[Object(r.jsx)(X,{children:i.split(",")[0]}),a||c?Object(r.jsx)(j.b,{to:"/post/".concat(t.id),children:Object(r.jsx)(Z,{children:t.title})}):Object(r.jsx)(Z,{$singlePost:!0,children:t.title}),e===t.userId&&Object(r.jsx)(nn,{to:"/edit-post/".concat(t.id),children:"Edit"}),e===t.userId&&Object(r.jsx)(tn,{onClick:function(){window.confirm("Delete this post?")&&o(t.id)},children:"Delete"}),!c&&Object(r.jsx)(rn,{renderers:{code:Q},children:a&&t.body.length>99?"".concat(t.body.substring(0,200),"..."):t.body}),a&&t.body.length>99&&Object(r.jsx)(en,{to:"/post/".concat(t.id),children:"Read More..."})]})};function cn(){var n=Object(s.a)(['\n  margin: auto;\n  margin-top: 30px;\n  position: relative;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  background-color: #cdcecf;\n  color: #cdcecf;\n  animation: dotFlashing 1s infinite linear alternate;\n  animation-delay: 0.5s;\n  &::before,\n  &::after {\n    content: "";\n    display: inline-block;\n    position: absolute;\n    top: 0;\n  }\n  &::before {\n    left: -15px;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #cdcecf;\n    color: #cdcecf;\n    animation: dotFlashing 1s infinite linear alternate;\n    animation-delay: 0s;\n  }\n  &::after {\n    left: 15px;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #cdcecf;\n    color: #cdcecf;\n    animation: dotFlashing 1s infinite linear alternate;\n    animation-delay: 1s;\n  }\n\n  @keyframes dotFlashing {\n    0% {\n      background-color: #cdcecf;\n    }\n    50%,\n    100% {\n      background-color: #fdfeff;\n    }\n  }\n']);return cn=function(){return n},n}function on(){var n=Object(s.a)(["\n  color: #cdcecf;\n  font-size: 28px;\n"]);return on=function(){return n},n}var sn=u.b.div(on()),un=u.b.div(cn()),dn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(sn,{children:"Loading"}),Object(r.jsx)(un,{})]})};function pn(){var n=Object(s.a)(["\n  cursor: pointer;\n  padding: 5px;\n  ","\n"]);return pn=function(){return n},n}function fn(){var n=Object(s.a)(["\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  max-width: 80vw;\n"]);return fn=function(){return n},n}var bn=u.b.div(fn()),ln=u.b.div(pn(),(function(n){return n.$active&&"\n      font-weight: bold;\n      background: #aaadaf;\n      color: #fff;\n    "})),jn=function(n){for(var t=n.currentPage,e=n.totalPosts,a=n.handlePagination,c=Math.ceil(e/5),o=[],i=0;i<c;i++)o.push(i+1);return Object(r.jsx)(bn,{children:o.map((function(n){return Object(r.jsx)(ln,{onClick:function(){return a(n)},$active:n===t,children:n},n)}))})},xn=function(){var n=Object(o.b)(),t=Object(o.c)(C),e=t.posts,c=t.totalPosts,i=t.currentPage,s=t.isLoading,u=t.hasErrors;Object(a.useLayoutEffect)((function(){n(T(1))}),[n]);var d=function(t){n(T(t))};return Object(r.jsx)(r.Fragment,{children:s?Object(r.jsx)(dn,{}):u?Object(r.jsx)("p",{children:"Sorry! Something went wrong..."}):Object(r.jsxs)(r.Fragment,{children:[e.map((function(n){return Object(r.jsx)(an,{post:n,excerpt:!0},n.id)})),Object(r.jsx)(jn,{currentPage:i,totalPosts:c,handlePagination:d})]})})},hn=Object(i.b)({name:"user",initialState:{user:"",userId:"",isLoading:!1,hasErrors:!1},reducers:{getMe:function(n){n.isLoading=!0},getMeSuccess:function(n,t){n.userId=t.payload.data.id,n.user=t.payload.data.username,n.isLoading=!1,n.hasErrors=!1},getMeFailure:function(n){n.isLoading=!1,n.hasErrors=!0},login:function(n){n.isLoading=!0},loginSuccess:function(n,t){n.isLoading=!1,n.hasErrors=!1},loginFailure:function(n){n.isLoading=!1,n.hasErrors=!0}}}),gn=hn.actions,On=gn.getMe,vn=gn.getMeSuccess,mn=gn.getMeFailure,wn=gn.login,yn=gn.loginSuccess,kn=gn.loginFailure,Pn=function(n){return n.user},Sn=hn.reducer,Ln=function(n,t){return function(){var e=Object(O.a)(g.a.mark((function e(r){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(wn()),e.prev=1,e.next=4,L(n,t);case 4:a=e.sent,m(a.token),r(yn(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r(kn());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}()},En=function(){return function(){var n=Object(O.a)(g.a.mark((function n(t){var e;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(On()),n.prev=1,n.next=4,S();case 4:e=n.sent,t(vn(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),t(mn());case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},Fn=function(){var n=Object(o.b)(),t=Object(o.c)(C),e=t.posts,c=t.isLoading,i=t.hasErrors,s=Object(o.c)(Pn).userId;Object(a.useLayoutEffect)((function(){n(T())}),[n]);return Object(r.jsx)(r.Fragment,{children:c?Object(r.jsx)(dn,{}):i?Object(r.jsx)("p",{children:"Sorry! Something went wrong..."}):Object(r.jsx)(r.Fragment,{children:e.map((function(n){return Object(r.jsx)(an,{post:n,userId:s,archive:!0},n.id)}))})})},zn=Object(i.b)({name:"post",initialState:{post:{},isLoading:!1,hasErrors:!1,errorMessage:null},reducers:{getPost:function(n){n.isLoading=!0},getPostSuccess:function(n,t){n.post=t.payload,n.isLoading=!1,n.hasErrors=!1},getPostFailure:function(n,t){n.errorMessage=t.payload,n.isLoading=!1,n.hasErrors=!0},clearPost:function(n){n.post={},n.isLoading=!1,n.hasErrors=!1}}}),In=zn.actions,An=In.getPost,Nn=In.getPostSuccess,Mn=In.getPostFailure,$n=In.clearPost,Cn=function(n){return n.post},Jn=zn.reducer,Tn=function(n){return function(){var t=Object(O.a)(g.a.mark((function t(e){var r,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(An()),t.prev=1,t.next=4,P(n);case 4:r=t.sent,e(Nn(r)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a=JSON.stringify(t.t0),e(Mn(a));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},Bn=Object(i.b)({name:"editor",initialState:{postResponse:null,isLoading:!1,hasErrors:!1},reducers:{editOperation:function(n){n.isLoading=!0},editPostSuccess:function(n,t){n.postResponse=t.payload,n.isLoading=!1,n.hasErrors=!1},editPostFailure:function(n){n.isLoading=!1,n.hasErrors=!0},deletePostSuccess:function(n,t){n.postResponse=t.payload,n.isLoading=!1,n.hasErrors=!1},deletePostFailure:function(n){n.isLoading=!1,n.hasErrors=!0},clearPostResponse:function(n,t){n.postResponse=null,n.isLoading=!1,n.hasErrors=!1}}}),Dn=Bn.actions,Rn=Dn.editOperation,_n=Dn.editPostSuccess,Hn=Dn.editPostFailure,Un=Dn.deletePostSuccess,Gn=Dn.deletePostFailure,Wn=Dn.clearPostResponse,Yn=function(n){return n.editor},qn=Bn.reducer,Kn=function(n,t,e){return function(){var r=Object(O.a)(g.a.mark((function r(a){var c;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a(Rn()),r.prev=1,c={},!e){r.next=9;break}return r.next=6,F(n,t,e);case 6:c=r.sent,r.next=12;break;case 9:return r.next=11,E(n,t);case 11:c=r.sent;case 12:a(_n(c)),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(1),a(Hn());case 18:case"end":return r.stop()}}),r,null,[[1,15]])})));return function(n){return r.apply(this,arguments)}}()},Qn=function(n){return function(){var t=Object(O.a)(g.a.mark((function t(e){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Rn()),t.prev=1,t.next=4,z(n);case 4:r=t.sent,e(Un(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Gn());case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},Vn=function(){var n=Object(x.i)().id,t=Object(x.g)(),e=w(),c=Object(o.b)(),i=Object(o.c)(Cn),s=i.post,u=i.isLoading,d=i.hasErrors,p=Object(o.c)(Pn),f=p.user,b=p.userId;Object(a.useLayoutEffect)((function(){c(Tn(n)),c(En())}),[c,n,e,d]);var l=function(){var n=Object(O.a)(g.a.mark((function n(e){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c(Qn(e));case 2:t.push("/");case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:u?Object(r.jsx)(dn,{}):d?Object(r.jsx)("p",{children:"Sorry! Something went wrong..."}):s?Object(r.jsx)(an,{post:s,user:f,userId:b,handleDeletePost:l},s.id):t.push("/")})},Xn=e(28),Zn=e(29),nt=e(43);function tt(){var n=Object(s.a)(["\n  text-align: left;\n  margin: 15px;\n  padding: 10px;\n  width: 80%;\n  resize: none;\n  height: 500px;\n"]);return tt=function(){return n},n}function et(){var n=Object(s.a)(["\n  font-size: 28px;\n  text-align: left;\n  margin: 15px;\n  padding: 15px 15px 0;\n  border: none;\n  border-bottom: 2px solid #cccdcf;\n  width: 80%;\n"]);return et=function(){return n},n}var rt=u.b.input(et()),at=u.b.textarea(tt()),ct=function(n){var t=n.post,e=Object(x.g)(),c=Object(o.b)(),i=Object(o.c)(Pn).user,s=Object(o.c)(Yn).postResponse;Object(a.useEffect)((function(){return c(En()),console.log(s),s&&s.id&&e.push("/post/".concat(s.id)),function(){c((function(n){n(Wn())}))}}),[c,s,e]);var u="",d="";"undefined"!==typeof t&&(u=t.title,d=t.body);var p=Object(a.useState)((function(){return{postTitle:u,postBody:d}})),f=Object(nt.a)(p,2),b=f[0],l=f[1],j=b.postTitle,h=b.postBody,v=function(n){var t=n.target,e=t.name,r=t.value;l((function(n){return Object(Zn.a)(Object(Zn.a)({},n),{},Object(Xn.a)({},e,r))}))},m=function(){var n=Object(O.a)(g.a.mark((function n(e){var r,a,o;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),r=b.postTitle,a=b.postBody,o=null,"undefined"!==typeof t&&(o=t.id),n.next=6,c(Kn(r,a,o));case 6:console.log(s);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return i?Object(r.jsxs)("form",{onSubmit:m,children:[Object(r.jsx)(rt,{type:"text",name:"postTitle",value:j,placeholder:"Title",onChange:v}),Object(r.jsx)(at,{type:"textarea",name:"postBody",value:h,onChange:v}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Submit"})]}):Object(r.jsx)("div",{children:"You are now allowed here!"})},ot=function(){return Object(r.jsx)(ct,{})},it=function(){var n=Object(o.b)(),t=Object(x.i)().id,e=Object(o.c)(Cn),c=e.post,i=e.isLoading,s=e.hasErrors,u=Object(x.g)();Object(a.useLayoutEffect)((function(){return n(Tn(t)),function(){n((function(n){n($n())}))}}),[n,t,u]);return Object(r.jsx)(r.Fragment,{children:i?Object(r.jsx)(dn,{}):s?Object(r.jsx)("p",{children:"Something went wrong..."}):c?Object(r.jsx)(ct,{post:c},c.id):Object(r.jsx)(ct,{})})};function st(){var n=Object(s.a)(["\n  text-align: left;\n"]);return st=function(){return n},n}function ut(){var n=Object(s.a)(["\n  text-align: left;\n  font-size: 28px;\n"]);return ut=function(){return n},n}function dt(){var n=Object(s.a)(["\n  padding: 20px 70px;\n"]);return dt=function(){return n},n}var pt=u.b.section(dt()),ft=u.b.h1(ut()),bt=u.b.div(st());function lt(){return Object(r.jsxs)(pt,{children:[Object(r.jsx)(ft,{children:"About"}),Object(r.jsx)(bt,{children:"JAS0N HUANG"})]})}var jt=function(){var n=Object(o.b)(),t=Object(o.c)(Pn).user,e=Object(a.useState)({username:"",password:""}),c=Object(nt.a)(e,2),i=c[0],s=c[1],u=i.username,d=i.password,p=Object(x.g)();Object(a.useEffect)((function(){n(En()),""!==t&&p.push("/")}),[n,t,p]);var f=function(n){var t=n.target,e=t.name,r=t.value;s((function(n){return Object(Zn.a)(Object(Zn.a)({},n),{},Object(Xn.a)({},e,r))}))},b=function(){var t=Object(O.a)(g.a.mark((function t(e){var r,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=i.username,a=i.password,t.next=4,n(Ln(r,a));case 4:n(En());case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(r.jsx)("section",{children:Object(r.jsxs)("form",{onSubmit:b,children:[Object(r.jsxs)("label",{children:["Username",Object(r.jsx)("input",{type:"text",name:"username",value:u,onChange:f})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("label",{children:["Password",Object(r.jsx)("input",{type:"password",name:"password",value:d,onChange:f})]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Login"})]})})};function xt(){var n=Object(s.a)(["\n  color: #fff;\n  transition: all ease-in-out 0.5s;\n  padding: 2px;\n  margin: 2px;\n  "," {\n    padding: 15px;\n    margin: auto 15px;\n  }\n\n  :hover {\n    background: #aaadaf;\n  }\n  ","\n"]);return xt=function(){return n},n}function ht(){var n=Object(s.a)(["\n  transition: all ease-in-out 0.5s;\n  padding: 2px;\n  margin: 2px;\n  border: solid 1px #dedfff;\n  "," {\n    border: none;\n    padding: 15px;\n    margin: auto 15px;\n  }\n  :hover {\n    color: #fff;\n    background: #aaadaf;\n  }\n  ","\n"]);return ht=function(){return n},n}function gt(){var n=Object(s.a)(["\n  font-size: 32px;\n  font-weight: bold;\n  background: #aaadaf;\n  color: #fff;\n  padding: 15px 10px;\n  margin: 0px 10px;\n"]);return gt=function(){return n},n}function Ot(){var n=Object(s.a)(["\n  margin: auto;\n  display: flex;\n  width: 100%;\n  max-width: 1080px;\n  align-items: center;\n  justify-content: space-between;\n"]);return Ot=function(){return n},n}function vt(){var n=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  border-top: #aaadaf 8px solid;\n  box-shadow: 0px 10px 10px 10px #fff;\n  background: #fff;\n  z-index: 99;\n"]);return vt=function(){return n},n}var mt=u.b.div(vt()),wt=u.b.header(Ot()),yt=Object(u.b)(j.b)(gt()),kt=Object(u.b)(j.b)(ht(),d,(function(n){return n.$active&&"\n      font-weight: bold;\n      background: #aaadaf;\n      color: #fff;\n    "})),Pt=Object(u.b)(j.b)(xt(),d,(function(n){return n.$active&&"\n      font-weight: bold;\n      background: #aaadaf;\n      color: #fff;\n    "})),St=function(){var n=Object(o.b)(),t=Object(x.h)(),e=Object(x.g)(),c=Object(o.c)(Pn).user;Object(a.useEffect)((function(){n(En())}),[n,c]);return Object(r.jsx)(mt,{children:Object(r.jsxs)(wt,{children:[Object(r.jsx)(yt,{to:"/",children:"JH"}),Object(r.jsxs)("nav",{children:[c&&Object(r.jsx)(kt,{to:"/new-post",$active:"/new-post"===t.pathname,children:"New"}),Object(r.jsx)(kt,{to:"/archive",$active:"/archive"===t.pathname,children:"Archive"}),Object(r.jsx)(kt,{to:"/about",$active:"/about"===t.pathname,children:"About"}),c&&Object(r.jsx)(kt,{to:"/",onClick:function(){m(null),n(En()),e.go(0)},children:"Logout"}),!c&&Object(r.jsx)(Pt,{to:"/login",$active:"/login"===t.pathname,children:"Login"})]})]})})};function Lt(){var n=Object(s.a)(["\n  display: inline-block;\n  height: 28px;\n  width: 28px;\n  margin: 0 5px;\n  "," {\n    margin: 0 15px;\n  }\n"]);return Lt=function(){return n},n}function Et(){var n=Object(s.a)(["\n  text-align: right;\n"]);return Et=function(){return n},n}function Ft(){var n=Object(s.a)(["\n  margin: auto 5px;\n  height: 20px;\n  "," {\n    margin: auto 10px;\n  }\n"]);return Ft=function(){return n},n}function zt(){var n=Object(s.a)(["\n  line-height: 30px;\n  font-size: 16px;\n"]);return zt=function(){return n},n}function It(){var n=Object(s.a)(["\n  display: flex;\n"]);return It=function(){return n},n}function At(){var n=Object(s.a)(["\n  margin: auto;\n  padding: 0 5px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 1080px;\n  align-items: left;\n  line-height: 30px;\n  align-items: center;\n  "," {\n    padding: 0 10px;\n  }\n"]);return At=function(){return n},n}function Nt(){var n=Object(s.a)(["\n  height: 38px;\n  position: relative;\n  bottom: -76px;\n  width: 100%;\n  box-shadow: 0px -10px 10px 10px #fff;\n  background: #fff;\n  z-index: 99;\n  line-height: 30px;\n  ","{\n    border-bottom: #aaadaf 8px solid;\n  }\n"]);return Nt=function(){return n},n}var Mt=u.b.div(Nt(),d),$t=u.b.footer(At(),d),Ct=u.b.div(It()),Jt=u.b.p(zt()),Tt=u.b.img(Ft(),d),Bt=u.b.div(Et()),Dt=u.b.img(Lt(),d);function Rt(){return Object(r.jsx)(Mt,{children:Object(r.jsxs)($t,{children:[Object(r.jsxs)(Ct,{children:[Object(r.jsx)(Jt,{children:"JAS0N HUANG"}),Object(r.jsx)(Tt,{src:"https://upload.wikimedia.org/wikipedia/commons/a/a3/Cc.logo.circle.svg"}),Object(r.jsx)(Jt,{children:"2021"})]}),Object(r.jsxs)(Bt,{children:[Object(r.jsx)("a",{href:"https://github.com/jas0nhuang",children:Object(r.jsx)(Dt,{src:"./img/github.svg"})}),Object(r.jsx)("a",{href:"mailto:jas0nhuang@tuta.io",children:Object(r.jsx)(Dt,{src:"./img/email.svg"})})]})]})})}var _t=function(){return Object(r.jsxs)(j.a,{children:[Object(r.jsx)(St,{}),Object(r.jsx)("main",{children:Object(r.jsxs)(x.d,{children:[Object(r.jsx)(x.b,{exact:!0,path:"/",children:Object(r.jsx)(xn,{})}),Object(r.jsx)(x.b,{exact:!0,path:"/post/:id",children:Object(r.jsx)(Vn,{})}),Object(r.jsx)(x.b,{exact:!0,path:"/new-post",children:Object(r.jsx)(ot,{})}),Object(r.jsx)(x.b,{exact:!0,path:"/edit-post/:id",children:Object(r.jsx)(it,{})}),Object(r.jsx)(x.b,{exact:!0,path:"/archive",children:Object(r.jsx)(Fn,{})}),Object(r.jsx)(x.b,{exact:!0,path:"/about",children:Object(r.jsx)(lt,{})}),Object(r.jsx)(x.b,{exact:!0,path:"/login",children:Object(r.jsx)(jt,{})}),Object(r.jsx)(x.a,{to:"/"})]})}),Object(r.jsx)(Rt,{})]})},Ht=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(_t,{})]})},Ut=e(13),Gt=Object(Ut.c)({posts:J,post:Jn,user:Sn,editor:qn}),Wt=Object(i.a)({reducer:Gt});Object(c.render)(Object(r.jsx)(o.a,{store:Wt,children:Object(r.jsx)(Ht,{})}),document.getElementById("root"))}},[[441,1,2]]]);
//# sourceMappingURL=main.b2a7d870.chunk.js.map