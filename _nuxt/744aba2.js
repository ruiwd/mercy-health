(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1181:function(e,t,n){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=(o(n(1)),n(6)),u=o(a),s=o(n(7)),r=o(n(8)),p=o(n(9)),b=o(n(10)),c=o(n(11)),d=o(n(14)),l=[],f=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(f=!0),f)return l=(0,c.default)(l,m),(0,b.default)(l,m.once),l},h=function(){l=(0,d.default)(),v()},y=function(){l.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},w=function(e){return!0===e||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&!0===e()},k=function(e){m=i(m,e),l=(0,d.default)();var t=document.all&&!window.atob;return w(m.disable)||t?y():(m.disableMutationObserver||r.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,(function(){v(!0)})):document.addEventListener(m.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,s.default)(v,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,m.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)((function(){(0,b.default)(l,m.once)}),m.throttleDelay)),m.disableMutationObserver||r.default.ready("[data-aos]",h),l)};e.exports={init:k,refresh:v,refreshHard:h}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,j=t,g=e.apply(o,n)}function r(e){return j=e,y=setTimeout(d,t),O?o(e):g}function a(e){var i=t-(e-w);return S?x(i,h-(e-j)):i}function c(e){var n=e-w;return void 0===w||n>=t||n<0||S&&e-j>=h}function d(){var e=_();return c(e)?l(e):void(y=setTimeout(d,a(e)))}function l(e){return y=void 0,M&&b?o(e):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),j=0,b=w=v=y=void 0}function p(){return void 0===y?g:l(_())}function m(){var e=_(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===y)return r(w);if(S)return y=setTimeout(d,t),o(w)}return void 0===y&&(y=setTimeout(d,t)),g}var b,v,h,g,y,w,j=0,O=!1,S=!1,M=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(O=!!n.leading,h=(S="maxWait"in n)?k(u(n.maxWait)||0,t):h,M="trailing"in n?!!n.trailing:M),m.cancel=f,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function a(e){return"symbol"==(void 0===e?"undefined":c(e))||r(e)&&w.call(e)==l}function u(e){if("number"==typeof e)return e;if(a(e))return d;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?d:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",d=NaN,l="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,h="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,y=h||g||Function("return this")(),w=Object.prototype.toString,k=Math.max,x=Math.min,_=function(){return y.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,j=t,g=e.apply(o,n)}function r(e){return j=e,y=setTimeout(d,t),O?i(e):g}function u(e){var i=t-(e-_);return S?k(i,h-(e-j)):i}function s(e){var n=e-_;return void 0===_||n>=t||n<0||S&&e-j>=h}function d(){var e=x();return s(e)?l(e):void(y=setTimeout(d,u(e)))}function l(e){return y=void 0,M&&b?i(e):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),j=0,b=_=v=y=void 0}function p(){return void 0===y?g:l(x())}function m(){var e=x(),n=s(e);if(b=arguments,v=this,_=e,n){if(void 0===y)return r(_);if(S)return y=setTimeout(d,t),i(_)}return void 0===y&&(y=setTimeout(d,t)),g}var b,v,h,g,y,_,j=0,O=!1,S=!1,M=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(O=!!n.leading,h=(S="maxWait"in n)?w(a(n.maxWait)||0,t):h,M="trailing"in n?!!n.trailing:M),m.cancel=f,m.flush=p,m}function o(e){var t=void 0===e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":u(e))}function r(e){return"symbol"==(void 0===e?"undefined":u(e))||i(e)&&y.call(e)==d}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):f.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===t?"undefined":u(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||h||Function("return this")(),y=Object.prototype.toString,w=Math.max,k=Math.min,x=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,r=new(o())(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return u()}))}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,r){n(e,i+o,t)}))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(12)),a=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)})),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(13)),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},1184:function(e,t,n){var content=n(1191);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(61).default)("fe8b5cbc",content,!0,{sourceMap:!1})},1190:function(e,t,n){"use strict";n(1184)},1191:function(e,t,n){var o=n(60)(!1);o.push([e.i,'.wrapper[data-v-4c78774e]{max-width:1000px;width:85vw;margin:0 auto}a[data-v-4c78774e]{color:inherit}.logo[data-v-4c78774e]{background-color:#fff;padding:10px;border-radius:10px}.logo p[data-v-4c78774e]{font-weight:700;text-transform:uppercase;font-family:"Lato",sans-serif;margin-bottom:0}.logo p[data-v-4c78774e]:first-child{color:#59ad48}.logo p[data-v-4c78774e]:last-child{color:#445095}img[data-v-4c78774e]{max-width:100%}.btn[data-v-4c78774e]{background-color:#358fc1;color:#fff;width:200px;height:50px;border-radius:30px;display:flex;justify-content:center;align-items:center;transition:background-color .5s ease}.btn[data-v-4c78774e]:focus,.btn[data-v-4c78774e]:hover{background-color:#59ad48;cursor:pointer}.hero[data-v-4c78774e]{width:100%;height:350px;background-image:linear-gradient(90deg,transparent,rgba(53,143,193,.5)),url(/img/opportunities/banner1.jpg);background-position:50%;background-size:cover;background-repeat:no-repeat}.hero .wrapper[data-v-4c78774e]{display:flex;justify-content:flex-end;align-items:center;height:100%}.hero .wrapper h2[data-v-4c78774e]{color:#fff;font-size:50px;font-weight:700;text-transform:uppercase;margin-bottom:0}.text[data-v-4c78774e]{padding:50px 0}.text h3[data-v-4c78774e]{font-size:30px;font-style:italic}.text li[data-v-4c78774e],.text p[data-v-4c78774e]{color:#737373}.text li[data-v-4c78774e]{margin-bottom:5px}',""]),e.exports=o},1196:function(e,t,n){"use strict";n.r(t);var o=n(1181),r=n.n(o),c=(n(639),{mounted:function(){r.a.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:100,delay:0,duration:1500,easing:"ease",once:!0,mirror:!1,anchorPlacement:"top-bottom"})}}),d=(n(1190),n(52)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("section",{staticClass:"hero"},[n("div",{staticClass:"wrapper"},[n("h2",{attrs:{"data-aos":"fade-up"}},[e._v("\n        Our Team\n      ")])])]),e._v(" "),n("section",{staticClass:"text"},[n("div",{staticClass:"wrapper"},[n("h3",{attrs:{"data-aos":"fade-up"}},[e._v("Management Team")]),e._v(" "),n("p",{attrs:{"data-aos":"fade-up"}},[e._v("\n        The applicant Mr. LIU Gang, General Manager of Shanghai Ciyuan Rehabilitation Hospital Co., Ltd., enjoys rich experience in overall corporate operation and administration. During his term of office, he led his team to execute various major strategies of the company to realize its sound development, and his responsibilities in this period are as follows:\n      ")]),e._v(" "),n("ol",[n("li",{attrs:{"data-aos":"fade-up"}},[e._v("\n          Lead the comprehensive operation of the rehabilitation hospital, including market exploration, operating system construction, team building, section arrangement and design of corresponding service and business mode, procedures and system.\n        ")]),e._v(" "),n("li",{attrs:{"data-aos":"fade-up"}},[e._v("\n          Complete the formulation of various procedures, systems and structure of the rehabilitation hospital.\n        ")]),e._v(" "),n("li",{attrs:{"data-aos":"fade-up"}},[e._v("\n          Take full charge of and coordinate work related to personnel and team building during the operation of the rehabilitation hospital.\n        ")]),e._v(" "),n("li",{attrs:{"data-aos":"fade-up"}},[e._v("\n          Cultivate service level and quality and professional skills to provide quality medical treatment, nursing and other services for clients.\n        ")]),e._v(" "),n("li",{attrs:{"data-aos":"fade-up"}},[e._v('\n          Focus on and learn green therapy, vis medicatrix nature, conditioning regimen for cancer and other therapies for intractable diseases to realize“rehabilitation and health-regimen combination".\n        ')]),e._v(" "),n("li",{attrs:{"data-aos":"fade-up"}},[e._v("\n          Address major emergencies and foreign relations of the hospital.\n        ")])]),e._v(" "),n("h3",{attrs:{"data-aos":"fade-up"}},[e._v("Parent Company Team")]),e._v(" "),n("p",{attrs:{"data-aos":"fade-up"}},[e._v("\n        Shanghai Ciyuan Rehabilitation Hospital Co.,Ltd, owns a high-quality professional and technical team of rehabilitation medicine and rehabilitation therapy.Its core medical team is composed of about two hundred talent with advanced educational background and high quality, including disciplinary leaders, returned experts, experts from Grade Ill hospitals and professional  linicians, rehabilitation therapists, primary nurses and so forth. It adopts classified and line-based management of general manager, departments, functional sections or business sections of the hospital, of which, the functional sections include the President's Office, Personnel Section,Medical Section, Nursing Section, Outpatient Office, Logistics Support Section,Purchasing Section,Finance Section, Information Section,Commercial Office and Rehabilitation Development Department, and the business sections comprise Clinical Section, Pharmacy  Section and Medical Technology Section.\n      ")])])])])}],!1,null,"4c78774e",null);t.default=component.exports}}]);