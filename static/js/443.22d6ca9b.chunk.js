"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[443],{1289:function(e,t,n){n.d(t,{Z:function(){return f}});var r,o,a=n(501),i=n(6871),s=n(168),c=n(6444),u=c.ZP.ul(r||(r=(0,s.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=c.ZP.li(o||(o=(0,s.Z)(["\n  text-decoration: none;\n  margin-right: 30px;\n  margin-top: 10px;\n  text-align: start;\n  font-size: 16px;\n  font-family:Verdana, Geneva, Tahoma, sans-serif\n  border-radius: 2px;\n"]))),d=n(184);function f(e){var t=e.movies,n=(0,i.TH)();return(0,d.jsx)(u,{children:t.map((function(e,t){return(0,d.jsxs)(l,{children:[" ",e.text,(0,d.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})]},t)}))})}},8183:function(e,t,n){n.d(t,{HI:function(){return u},IQ:function(){return f},Tn:function(){return d},e2:function(){return c},gH:function(){return l}});var r=n(5861),o=n(7757),a=n.n(o),i=n(4569),s=n.n(i);s().defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/movie/day?page=1&api_key=9c596d0a0c0e277ef870e9f34838eddd");case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=9c596d0a0c0e277ef870e9f34838eddd"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=9c596d0a0c0e277ef870e9f34838eddd&query=".concat(t,"\n"));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=9c596d0a0c0e277ef870e9f34838eddd&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=9c596d0a0c0e277ef870e9f34838eddd&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8443:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var r=n(907);var o=n(181);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i,s,c,u,l=n(885),d=n(168),f=n(6444),p=f.ZP.div(i||(i=(0,d.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #324191;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),m=f.ZP.form(s||(s=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),g=f.ZP.button(c||(c=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.2;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  background: #324191;\n  :hover {\n    opacity: 0.7;\n  }\n"]))),v=f.ZP.input(u||(u=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n  font: inherit;\n  font-size: 18px;\n"]))),y=n(2791);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=x(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var O=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=x(e))&&(r&&(r+=" "),r+=t);return r},C=["theme","type"],_=["delay","staleId"];function I(e){return"number"===typeof e&&!isNaN(e)}function w(e){return"boolean"===typeof e}function k(e){return"string"===typeof e}function L(e){return"function"===typeof e}function P(e){return k(e)||L(e)?e:null}function N(e){return 0===e||e}function R(e){return(0,y.isValidElement)(e)||k(e)||L(e)||I(e)}var S={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},j={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function D(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,u=e.done,l=e.nodeRef,d=e.isIn,f=o?t+"--"+a:t,p=o?n+"--"+a:n,m=(0,y.useRef)(),g=(0,y.useRef)(0);function v(e){if(e.target===l.current){var t=l.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",v),t.removeEventListener("animationcancel",v),0===g.current&&"animationcancel"!==e.type&&(t.className=m.current)}}function h(){var e=l.current;e.removeEventListener("animationend",h),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()}return(0,y.useLayoutEffect)((function(){!function(){var e=l.current;m.current=e.className,e.className+=" "+f,e.addEventListener("animationend",v),e.addEventListener("animationcancel",v)}()}),[]),(0,y.useEffect)((function(){d||(s?h():function(){g.current=1;var e=l.current;e.className+=" "+p,e.addEventListener("animationend",h)}())}),[d]),y.createElement(y.Fragment,null,r)}}function M(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var A={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,a([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},B=function(e){var t=e.theme,n=e.type,r=E(e,C);return y.createElement("svg",T({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var Z={info:function(e){return y.createElement(B,T({},e),y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return y.createElement(B,T({},e),y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return y.createElement(B,T({},e),y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return y.createElement(B,T({},e),y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return y.createElement("div",{className:"Toastify__spinner"})}};function z(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(L(o)?a=o(i):(0,y.isValidElement)(o)?a=(0,y.cloneElement)(o,i):k(o)||I(o)?a=o:r?a=Z.spinner():function(e){return e in Z}(n)&&(a=Z[n](i))),a}function F(e){var t=(0,y.useReducer)((function(e){return e+1}),0),n=(0,l.Z)(t,2)[1],r=(0,y.useState)([]),o=(0,l.Z)(r,2),i=o[0],s=o[1],c=(0,y.useRef)(null),u=(0,y.useRef)(new Map).current,d=function(e){return-1!==i.indexOf(e)},f=(0,y.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return u.get(e)}}).current;function p(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function m(e){s((function(t){return N(e)?t.filter((function(t){return t!==e})):[]}))}function g(){var e=f.queue.shift();h(e.toastContent,e.toastProps,e.staleId)}function v(e,t){var r=t.delay,o=t.staleId,a=E(t,_);if(R(e)&&!function(e){return!c.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||u.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,s=a.updateId,l=a.data,d=f.props,p=function(){return m(i)},v=null==s;v&&f.count++;var b,T,x={toastId:i,updateId:s,data:l,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||d.theme,icon:null!=a.icon?a.icon:d.icon,isIn:!1,key:a.key||f.toastKey++,type:a.type,closeToast:p,closeButton:a.closeButton,rtl:d.rtl,position:a.position||d.position,transition:a.transition||d.transition,className:P(a.className||d.toastClassName),bodyClassName:P(a.bodyClassName||d.bodyClassName),style:a.style||d.toastStyle,bodyStyle:a.bodyStyle||d.bodyStyle,onClick:a.onClick||d.onClick,pauseOnHover:w(a.pauseOnHover)?a.pauseOnHover:d.pauseOnHover,pauseOnFocusLoss:w(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:d.pauseOnFocusLoss,draggable:w(a.draggable)?a.draggable:d.draggable,draggablePercent:a.draggablePercent||d.draggablePercent,draggableDirection:a.draggableDirection||d.draggableDirection,closeOnClick:w(a.closeOnClick)?a.closeOnClick:d.closeOnClick,progressClassName:P(a.progressClassName||d.progressClassName),progressStyle:a.progressStyle||d.progressStyle,autoClose:!a.isLoading&&(b=a.autoClose,T=d.autoClose,!1===b||I(b)&&b>0?b:T),hideProgressBar:w(a.hideProgressBar)?a.hideProgressBar:d.hideProgressBar,progress:a.progress,role:a.role||d.role,deleteToast:function(){var e=M(u.get(i),"removed");u.delete(i),A.emit(4,e);var t=f.queue.length;if(f.count=N(i)?f.count-1:f.count-f.displayedToast,f.count<0&&(f.count=0),t>0){var r=N(i)?1:f.props.limit;if(1===t||1===r)f.displayedToast++,g();else{var o=r>t?t:r;f.displayedToast=o;for(var a=0;a<o;a++)g()}}else n()}};x.iconOut=z(x),L(a.onOpen)&&(x.onOpen=a.onOpen),L(a.onClose)&&(x.onClose=a.onClose),x.closeButton=d.closeButton,!1===a.closeButton||R(a.closeButton)?x.closeButton=a.closeButton:!0===a.closeButton&&(x.closeButton=!R(d.closeButton)||d.closeButton);var O=e;(0,y.isValidElement)(e)&&!k(e.type)?O=(0,y.cloneElement)(e,{closeToast:p,toastProps:x,data:l}):L(e)&&(O=e({closeToast:p,toastProps:x,data:l})),d.limit&&d.limit>0&&f.count>d.limit&&v?f.queue.push({toastContent:O,toastProps:x,staleId:o}):I(r)?setTimeout((function(){h(O,x,o)}),r):h(O,x,o)}}function h(e,t,n){var r=t.toastId;n&&u.delete(n);var o={content:e,props:t};u.set(r,o),s((function(e){return[].concat(a(e),[r]).filter((function(e){return e!==n}))})),A.emit(4,M(o,null==o.props.updateId?"added":"updated"))}return(0,y.useEffect)((function(){return f.containerId=e.containerId,A.cancelEmit(3).on(0,v).on(1,(function(e){return c.current&&m(e)})).on(5,p).emit(2,f),function(){u.clear(),A.emit(3,f)}}),[]),(0,y.useEffect)((function(){f.props=e,f.isToastActive=d,f.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(u.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:c,isToastActive:d}}function H(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function q(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function U(e){var t=(0,y.useState)(!1),n=(0,l.Z)(t,2),r=n[0],o=n[1],a=(0,y.useState)(!1),i=(0,l.Z)(a,2),s=i[0],c=i[1],u=(0,y.useRef)(null),d=(0,y.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,f=(0,y.useRef)(e),p=e.autoClose,m=e.pauseOnHover,g=e.closeToast,v=e.onClick,h=e.closeOnClick;function b(t){if(e.draggable){d.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",C),document.addEventListener("touchmove",O),document.addEventListener("touchend",C);var n=u.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=H(t.nativeEvent),d.y=q(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(d.boundingRect){var t=d.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&d.x>=o&&d.x<=a&&d.y>=n&&d.y<=r?x():E()}}function E(){o(!0)}function x(){o(!1)}function O(t){var n=u.current;d.canDrag&&n&&(d.didMove=!0,r&&x(),d.x=H(t),d.y=q(t),"x"===e.draggableDirection?d.delta=d.x-d.start:d.delta=d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+d.delta+"px)",n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function C(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",C);var t=u.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return c(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,y.useEffect)((function(){f.current=e})),(0,y.useEffect)((function(){return u.current&&u.current.addEventListener("d",E,{once:!0}),L(e.onOpen)&&e.onOpen((0,y.isValidElement)(e.children)&&e.children.props),function(){var e=f.current;L(e.onClose)&&e.onClose((0,y.isValidElement)(e.children)&&e.children.props)}}),[]),(0,y.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||x();window.addEventListener("focus",E),window.addEventListener("blur",x)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",x))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return p&&m&&(_.onMouseEnter=x,_.onMouseLeave=E),h&&(_.onClick=function(e){v&&v(e),d.canCloseOnClick&&g()}),{playToast:E,pauseToast:x,isRunning:r,preventExitTransition:s,toastRef:u,eventHandlers:_}}function Q(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return y.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function V(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=e.hide,i=e.className,s=e.style,c=e.controlledProgress,u=e.progress,l=e.rtl,d=e.isIn,f=e.theme,p=T(T({},s),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1});c&&(p.transform="scaleX("+u+")");var m=O("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+f,"Toastify__progress-bar--"+o,h({},"Toastify__progress-bar--rtl",l)),g=L(i)?i({rtl:l,type:o,defaultClassName:m}):O(m,i),v=h({},c&&u>=1?"onTransitionEnd":"onAnimationEnd",c&&u<1?null:function(){d&&r()});return y.createElement("div",T({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:g,style:p},v))}V.defaultProps={type:j.DEFAULT,hide:!1};var G=function(e){var t=U(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,u=e.onClick,l=e.type,d=e.hideProgressBar,f=e.closeToast,p=e.transition,m=e.position,g=e.className,v=e.style,b=e.bodyClassName,E=e.bodyStyle,x=e.progressClassName,C=e.progressStyle,_=e.updateId,I=e.role,w=e.progress,k=e.rtl,P=e.toastId,N=e.deleteToast,R=e.isIn,S=e.isLoading,j=e.iconOut,D=e.theme,M=O("Toastify__toast","Toastify__toast-theme--"+D,"Toastify__toast--"+l,h({},"Toastify__toast--rtl",k)),A=L(g)?g({rtl:k,position:m,type:l,defaultClassName:M}):O(M,g),B=!!w,Z={closeToast:f,type:l,theme:D},z=null;return!1===i||(z=L(i)?i(Z):y.isValidElement(i)?y.cloneElement(i,Z):Q(Z)),y.createElement(p,{isIn:R,done:N,position:m,preventExitTransition:r,nodeRef:o},y.createElement("div",T(T({id:P,onClick:u,className:A},a),{},{style:v,ref:o}),y.createElement("div",T(T({},R&&{role:I}),{},{className:L(b)?b({type:l}):O("Toastify__toast-body",b),style:E}),null!=j&&y.createElement("div",{className:O("Toastify__toast-icon",h({},"Toastify--animate-icon Toastify__zoom-enter",!S))},j),y.createElement("div",null,s)),z,(c||B)&&y.createElement(V,T(T({},_&&!B?{key:"pb-"+_}:{}),{},{rtl:k,theme:D,delay:c,isRunning:n,isIn:R,closeToast:f,hide:d,type:l,style:C,className:x,controlledProgress:B,progress:w}))))},W=D({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),X=(D({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),D({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),D({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,y.forwardRef)((function(e,t){var n=F(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,u=e.containerId;function l(e){var t=O("Toastify__toast-container","Toastify__toast-container--"+e,h({},"Toastify__toast-container--rtl",c));return L(i)?i({position:e,rtl:c,defaultClassName:t}):O(t,P(i))}return(0,y.useEffect)((function(){t&&(t.current=o.current)}),[]),y.createElement("div",{ref:o,className:"Toastify",id:u},r((function(e,t){var n=t.length?T({},s):T(T({},s),{},{pointerEvents:"none"});return y.createElement("div",{className:l(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,o=e.props;return y.createElement(G,T(T({},o),{},{isIn:a(o.toastId),style:T(T({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+o.key}),r)})))})))})));X.displayName="ToastContainer",X.defaultProps={position:S.TOP_RIGHT,transition:W,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:Q,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Y,K=new Map,J=[];function $(){return Math.random().toString(36).substring(2,9)}function ee(e){return e&&(k(e.toastId)||I(e.toastId))?e.toastId:$()}function te(e,t){return K.size>0?A.emit(0,e,t):J.push({content:e,options:t}),t.toastId}function ne(e,t){return T(T({},t),{},{type:t&&t.type||e,toastId:ee(t)})}function re(e){return function(t,n){return te(t,ne(e,n))}}function oe(e,t){return te(e,ne(j.DEFAULT,t))}oe.loading=function(e,t){return te(e,ne(j.DEFAULT,T({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},oe.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=k(o)?oe.loading(o,n):oe.loading(o.render,T(T({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=T(T(T({type:e},s),n),{},{data:o}),i=k(t)?{render:t}:t;return r?oe.update(r,T(T({},a),i)):oe(i.render,T(T({},a),i)),o}oe.dismiss(r)},u=L(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},oe.success=re(j.SUCCESS),oe.info=re(j.INFO),oe.error=re(j.ERROR),oe.warning=re(j.WARNING),oe.warn=oe.warning,oe.dark=function(e,t){return te(e,ne(j.DEFAULT,T({theme:"dark"},t)))},oe.dismiss=function(e){return A.emit(1,e)},oe.clearWaitingQueue=function(e){return void 0===e&&(e={}),A.emit(5,e)},oe.isActive=function(e){var t=!1;return K.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},oe.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=K.get(n||Y);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=T(T(T({},r),t),{},{toastId:t.toastId||e,updateId:$()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,te(i,a)}}),0)},oe.done=function(e){oe.update(e,{progress:1})},oe.onChange=function(e){return A.on(4,e),function(){A.off(4,e)}},oe.POSITION=S,oe.TYPE=j,A.on(2,(function(e){Y=e.containerId||e,K.set(Y,e),J.forEach((function(e){A.emit(0,e.content,e.options)})),J=[]})).on(3,(function(e){K.delete(e.containerId||e),0===K.size&&A.off(0).off(1).off(5)}));var ae=n(184);function ie(e){var t=e.handleOnSubmit,n=(0,y.useState)(""),r=(0,l.Z)(n,2),o=r[0],a=r[1];return(0,ae.jsx)(p,{children:(0,ae.jsxs)(m,{onSubmit:function(e){e.preventDefault(),""!==o.trim()?t(o):oe("Empty request!")},children:[(0,ae.jsx)(v,{placeholder:"Movie name",type:"text",autoComplete:"off",name:"movieName",onChange:function(e){a(e.currentTarget.value.toLowerCase())},value:o}),(0,ae.jsx)(g,{type:"submit",children:"Search"}),(0,ae.jsx)(X,{})]})})}var se=n(501),ce=n(8183),ue=n(1289);function le(){var e=(0,y.useState)([]),t=(0,l.Z)(e,2),n=t[0],r=t[1],o=(0,se.lr)({}),i=(0,l.Z)(o,2),s=i[0],c=i[1],u=s.get("query");return(0,y.useEffect)((function(){(0,ce.gH)(),u&&(0,ce.gH)(u).then((function(e){return r(e)}))}),[u]),(0,ae.jsxs)("div",{children:[(0,ae.jsx)("h1",{children:"Search Movies"}),(0,ae.jsx)(ie,{handleOnSubmit:function(e){r(a(e)),c({query:e})}}),(0,ae.jsx)(ue.Z,{movies:n})]})}}}]);
//# sourceMappingURL=443.22d6ca9b.chunk.js.map