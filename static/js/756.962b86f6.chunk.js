"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[756],{8183:function(n,e,t){t.d(e,{HI:function(){return u},IQ:function(){return f},Tn:function(){return p},e2:function(){return s},gH:function(){return d}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),o=t.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/day?page=1&api_key=9c596d0a0c0e277ef870e9f34838eddd");case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"?api_key=9c596d0a0c0e277ef870e9f34838eddd"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/search/movie?api_key=9c596d0a0c0e277ef870e9f34838eddd&query=".concat(e,"\n"));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"/reviews?api_key=9c596d0a0c0e277ef870e9f34838eddd&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"/credits?api_key=9c596d0a0c0e277ef870e9f34838eddd&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9756:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,i,c,o=t(885),s=t(8183),u=t(168),d=t(6444),p=t(501),f=d.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n"]))),l=d.ZP.div(a||(a=(0,u.Z)(["\n  max-width: 50%;\n  margin: 20px;\n"]))),h=d.ZP.button(i||(i=(0,u.Z)(["\n  width: 100px;\n  height: 30px;\n  border-radius: 8px;\n  background: #0000FF;\n  color: #FFFF00;\n  font-size: 14px;\n  cursor: pointer;\n  border: none;\n  transform: scale(1);\n  transition-duration: 300ms;\n  margin-top: 10px;\n"]))),v=(0,d.ZP)(p.OL)(c||(c=(0,u.Z)(["\n  text-decoration: none;\n  margin: 20px;\n  font-size: 24px;\n  font-weight: 500;\n  color: #0000FF;\n  &.active {\n    color: #00a6ff;\n  }\n"]))),x=t(2791),g=t(6871),m=t(184);function j(){var n,e=(0,g.UO)(),t=(0,x.useState)(null),r=(0,o.Z)(t,2),a=r[0],i=r[1],c=(0,g.TH)().state,u=null!==(n=null===c||void 0===c?void 0:c.from)&&void 0!==n?n:"/";return(0,x.useEffect)((function(){(0,s.HI)(e.id).then((function(n){return i(n)}))}),[e.id]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{to:u,children:(0,m.jsx)(h,{type:"button",children:"Back"})}),(0,m.jsx)(f,{children:a&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{children:(0,m.jsx)("img",{src:a.poster_path?"https://image.tmdb.org/t/p/w300/".concat(a.poster_path):"https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg",alt:a.original_title})}),(0,m.jsxs)(l,{children:[(0,m.jsx)("h2",{children:a.original_title}),(0,m.jsx)("p",{children:"Rating ".concat(a.vote_average)}),(0,m.jsx)("h3",{children:"Owerview:"}),(0,m.jsx)("p",{children:a.overview}),(0,m.jsxs)("div",{children:[(0,m.jsx)("strong",{children:"Ganres: "}),a.genres.map((function(n){var e=n.id,t=n.name;return(0,m.jsx)("p",{children:t},e)}))]})]})]})}),(0,m.jsx)("hr",{}),(0,m.jsx)("h2",{children:"Additional information"}),(0,m.jsx)(v,{to:"cast",children:"Cast"}),(0,m.jsx)(v,{to:"reviews",children:"Rewiev"}),(0,m.jsx)(x.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading..."}),children:(0,m.jsx)(g.j3,{})})]})}}}]);
//# sourceMappingURL=756.962b86f6.chunk.js.map