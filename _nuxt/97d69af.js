(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{294:function(t,e,r){"use strict";var o=r(9),n=r(634),d=r.n(n);o.default.use(d.a)},334:function(t,e,r){var content=r(687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("5c346d62",content,!0,{sourceMap:!1})},335:function(t,e,r){var content=r(689);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("8eb31e8e",content,!0,{sourceMap:!1})},336:function(t,e,r){var content=r(691);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("2d0f766a",content,!0,{sourceMap:!1})},626:function(t,e,r){"use strict";r.r(e);r(65);var o={data:function(){return{isActive:!1}},mounted:function(){var t=this;window.addEventListener("scroll",this.handleScroll),document.querySelectorAll(".mobileNav li").forEach((function(li){return li.addEventListener("click",t.toggleNav)}))},methods:{handleScroll:function(){window.scrollY>10?this.isActive=!0:this.isActive=!1},toggleNav:function(){document.querySelectorAll(".mobileNav, div.hamburger .line").forEach((function(t){t.classList.toggle("active")}))}}},n=(r(688),r(52)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"headerWrapper"},[r("header",{class:{active:t.isActive}},[r("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),r("div",{staticClass:"hamburger",on:{click:t.toggleNav}},[r("div",{staticClass:"hamburgerOne line"}),t._v(" "),r("div",{staticClass:"hamburgerTwo line"}),t._v(" "),r("div",{staticClass:"hamburgerThree line"})]),t._v(" "),r("nav",{staticClass:"webNav"},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("\n              Home\n            ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/about"}},[t._v("\n              About\n            ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/team"}},[t._v("\n              Team\n            ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/contact"}},[t._v("\n              Contact\n            ")])],1)])]),t._v(" "),r("nav",{staticClass:"mobileNav"},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("\n              Home\n            ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/about"}},[t._v("\n              About\n            ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/team"}},[t._v("\n              Team\n            ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/contact"}},[t._v("\n              Contact\n            ")])],1)]),t._v(" "),t._m(1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("p",[t._v("Mercy")]),t._v(" "),r("p",[t._v("Health")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("p",[t._v("Mercy")]),t._v(" "),r("p",[t._v("Health")])])}],!1,null,"daae2f54",null);e.default=component.exports;installComponents(component,{Header:r(626).default})},627:function(t,e,r){"use strict";r.r(e);var o={},n=(r(690),r(52)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),r("div",{staticClass:"links"},[r("h2",[t._v("Useful Links")]),t._v(" "),r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("\n            Home\n          ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/about"}},[t._v("\n            About\n          ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/team"}},[t._v("\n            Team\n          ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/contact"}},[t._v("\n            Contact\n          ")])],1)])]),t._v(" "),r("div",{staticClass:"contact"},[r("h2",[t._v("Contact Us")]),t._v(" "),r("p",[r("a-icon",{attrs:{type:"phone"}}),t._v("123-123-1234")],1),t._v(" "),r("p",[r("a-icon",{attrs:{type:"mail"}}),t._v("123456@mail.com")],1),t._v(" "),r("p",{staticStyle:{"margin-bottom":"0px"}},[r("a-icon",{attrs:{type:"environment"}}),t._v("123-456 Street Ave.")],1),t._v(" "),r("p",{staticStyle:{"padding-left":"24px"}},[t._v("Vancouver, BC, V3N 1T4")])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logoContainer"},[r("div",{staticClass:"logo"},[r("p",[t._v("Mercy")]),t._v(" "),r("p",[t._v("Health")])]),t._v(" "),r("div",{staticClass:"socials"},[r("img",{attrs:{src:"/img/svg/fb.svg",alt:""}}),t._v(" "),r("img",{attrs:{src:"/img/svg/ins.svg",alt:""}}),t._v(" "),r("img",{attrs:{src:"/img/svg/twt.svg",alt:""}}),t._v(" "),r("img",{attrs:{src:"/img/svg/link.svg",alt:""}})])])}],!1,null,"734c13d6",null);e.default=component.exports;installComponents(component,{Footer:r(627).default})},638:function(t,e,r){"use strict";r(686);var o=r(52),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Nuxt"),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(626).default,Footer:r(627).default})},640:function(t,e,r){r(641),t.exports=r(642)},683:function(t,e,r){var content=r(684);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("bab5ccb4",content,!0,{sourceMap:!1})},684:function(t,e,r){var o=r(60)(!1);o.push([t.i,'.wrapper{max-width:1000px;width:85vw;margin:0 auto}a{color:inherit}.logo{background-color:#fff;padding:10px;border-radius:10px}.logo p{font-weight:700;text-transform:uppercase;font-family:"Lato",sans-serif;margin-bottom:0}.logo p:first-child{color:#59ad48}.logo p:last-child{color:#445095}img{max-width:100%}.btn{background-color:#358fc1;color:#fff;width:200px;height:50px;border-radius:30px;display:flex;justify-content:center;align-items:center;transition:background-color .5s ease}.btn:focus,.btn:hover{background-color:#59ad48;cursor:pointer}',""]),t.exports=o},686:function(t,e,r){"use strict";r(334)},687:function(t,e,r){var o=r(60)(!1);o.push([t.i,'.wrapper{max-width:1000px;width:85vw;margin:0 auto}a{color:inherit}.logo{background-color:#fff;padding:10px;border-radius:10px}.logo p{font-weight:700;text-transform:uppercase;font-family:"Lato",sans-serif;margin-bottom:0}.logo p:first-child{color:#59ad48}.logo p:last-child{color:#445095}img{max-width:100%}.btn{background-color:#358fc1;color:#fff;width:200px;height:50px;border-radius:30px;display:flex;justify-content:center;align-items:center;transition:background-color .5s ease}.btn:focus,.btn:hover{background-color:#59ad48;cursor:pointer}*{font-family:"Roboto",sans-serif}h1,h2,h3,h4,h5{font-family:"Lato",sans-serif}',""]),t.exports=o},688:function(t,e,r){"use strict";r(335)},689:function(t,e,r){var o=r(60)(!1);o.push([t.i,'.wrapper[data-v-daae2f54]{max-width:1000px;width:85vw;margin:0 auto}a[data-v-daae2f54]{color:inherit}.logo[data-v-daae2f54]{background-color:#fff;padding:10px;border-radius:10px}.logo p[data-v-daae2f54]{font-weight:700;text-transform:uppercase;font-family:"Lato",sans-serif;margin-bottom:0}.logo p[data-v-daae2f54]:first-child{color:#59ad48}.logo p[data-v-daae2f54]:last-child{color:#445095}img[data-v-daae2f54]{max-width:100%}.btn[data-v-daae2f54]{background-color:#358fc1;color:#fff;width:200px;height:50px;border-radius:30px;display:flex;justify-content:center;align-items:center;transition:background-color .5s ease}.btn[data-v-daae2f54]:focus,.btn[data-v-daae2f54]:hover{background-color:#59ad48;cursor:pointer}.headerWrapper[data-v-daae2f54],header[data-v-daae2f54]{height:100px}header[data-v-daae2f54]{display:flex;align-items:center;position:fixed;top:0;left:0;transition:all .3s ease;background-color:#fff;width:100%;z-index:8}header.active[data-v-daae2f54]{height:70px;box-shadow:0 10px 40px -20px rgba(62,88,71,.8)}header .wrapper[data-v-daae2f54]{display:flex;position:relative;justify-content:space-between}header .wrapper .logo[data-v-daae2f54]{margin-right:20px}header .wrapper .logo p[data-v-daae2f54]{margin-bottom:0}header .wrapper nav ul[data-v-daae2f54]{list-style:none;display:flex;text-align:center}header .wrapper nav ul li[data-v-daae2f54]{font-size:20px;color:#737373;font-family:"Lato",sans-serif}header .wrapper nav ul li .nuxt-link-exact-active[data-v-daae2f54],header .wrapper nav ul li a[data-v-daae2f54]:focus,header .wrapper nav ul li a[data-v-daae2f54]:hover{transform:color .5s ease;color:#59ad48}header .wrapper .hamburger[data-v-daae2f54]{display:none;position:absolute;top:50%;transform:translateY(-75%);right:15px;z-index:10;padding:10px}header .wrapper .hamburger .line[data-v-daae2f54]{background-color:#59ad48}header .wrapper .hamburger[data-v-daae2f54]:focus,header .wrapper .hamburger[data-v-daae2f54]:hover{cursor:pointer}header .wrapper .hamburger div[data-v-daae2f54]{position:relative;width:35px;height:4px;border-radius:5px;transition:all .3s}header .wrapper .hamburger div.hamburgerOne[data-v-daae2f54]{top:0}header .wrapper .hamburger div.hamburgerOne.active[data-v-daae2f54]{transform:rotate(45deg);transform-origin:top left}header .wrapper .hamburger div.hamburgerTwo[data-v-daae2f54]{top:8px}header .wrapper .hamburger div.hamburgerTwo.active[data-v-daae2f54]{opacity:0}header .wrapper .hamburger div.hamburgerThree[data-v-daae2f54]{top:16px}header .wrapper .hamburger div.hamburgerThree.active[data-v-daae2f54]{transform:rotate(-45deg);transform-origin:bottom left}.webNav[data-v-daae2f54]{display:flex;align-items:center}.webNav ul[data-v-daae2f54]{flex-direction:row;margin-bottom:0}.webNav ul li[data-v-daae2f54]{margin-right:20px}.mobileNav[data-v-daae2f54]{display:none;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;width:300px;position:fixed;top:0;right:-310px;box-shadow:0 10px 40px -20px rgba(62,88,71,.8);transition:all .5s ease;z-index:9;background-color:#fff}.mobileNav.active[data-v-daae2f54]{right:0}.mobileNav ul[data-v-daae2f54]{flex-direction:column;justify-content:center;padding:0;margin-bottom:50px}.mobileNav ul li[data-v-daae2f54]{height:40px}.mobileNav ul li a[data-v-daae2f54]{width:100%;height:100%}@media (max-width:767px){.webNav[data-v-daae2f54]{display:none}.hamburger[data-v-daae2f54]{display:block!important}.mobileNav[data-v-daae2f54]{display:flex}}',""]),t.exports=o},690:function(t,e,r){"use strict";r(336)},691:function(t,e,r){var o=r(60)(!1);o.push([t.i,'.wrapper[data-v-734c13d6]{max-width:1000px;width:85vw;margin:0 auto}a[data-v-734c13d6]{color:inherit}.logo[data-v-734c13d6]{background-color:#fff;padding:10px;border-radius:10px}.logo p[data-v-734c13d6]{font-weight:700;text-transform:uppercase;font-family:"Lato",sans-serif;margin-bottom:0}.logo p[data-v-734c13d6]:first-child{color:#59ad48}.logo p[data-v-734c13d6]:last-child{color:#445095}img[data-v-734c13d6]{max-width:100%}.btn[data-v-734c13d6]{background-color:#358fc1;color:#fff;width:200px;height:50px;border-radius:30px;display:flex;justify-content:center;align-items:center;transition:background-color .5s ease}.btn[data-v-734c13d6]:focus,.btn[data-v-734c13d6]:hover{background-color:#59ad48;cursor:pointer}footer[data-v-734c13d6]{background-image:linear-gradient(0deg,#2daea2,#59ad48 50%);padding:30px 0;color:#fff}footer h2[data-v-734c13d6]{font-weight:700;color:#fff}footer .wrapper[data-v-734c13d6]{display:flex;justify-content:space-between}footer .socials[data-v-734c13d6]{display:flex}footer .socials img[data-v-734c13d6]{max-width:25px;max-height:25px;margin-right:10px;filter:invert(180)}footer .links ul[data-v-734c13d6]{list-style:none;padding-left:0;margin-bottom:0}footer .links ul li[data-v-734c13d6]{margin-bottom:5px}footer .contact p i[data-v-734c13d6]{margin-right:10px;transform:scaleX(-1)}@media (max-width:767px){footer[data-v-734c13d6]{padding-bottom:0}footer .wrapper[data-v-734c13d6]{flex-direction:column;padding-left:30px}footer .wrapper .contact[data-v-734c13d6],footer .wrapper .links[data-v-734c13d6],footer .wrapper .logoContainer[data-v-734c13d6]{margin-bottom:30px}}',""]),t.exports=o},874:function(t,e,r){var map={"./af":397,"./af.js":397,"./ar":398,"./ar-dz":399,"./ar-dz.js":399,"./ar-kw":400,"./ar-kw.js":400,"./ar-ly":401,"./ar-ly.js":401,"./ar-ma":402,"./ar-ma.js":402,"./ar-sa":403,"./ar-sa.js":403,"./ar-tn":404,"./ar-tn.js":404,"./ar.js":398,"./az":405,"./az.js":405,"./be":406,"./be.js":406,"./bg":407,"./bg.js":407,"./bm":408,"./bm.js":408,"./bn":409,"./bn-bd":410,"./bn-bd.js":410,"./bn.js":409,"./bo":411,"./bo.js":411,"./br":412,"./br.js":412,"./bs":413,"./bs.js":413,"./ca":414,"./ca.js":414,"./cs":415,"./cs.js":415,"./cv":416,"./cv.js":416,"./cy":417,"./cy.js":417,"./da":418,"./da.js":418,"./de":419,"./de-at":420,"./de-at.js":420,"./de-ch":421,"./de-ch.js":421,"./de.js":419,"./dv":422,"./dv.js":422,"./el":423,"./el.js":423,"./en-au":424,"./en-au.js":424,"./en-ca":425,"./en-ca.js":425,"./en-gb":426,"./en-gb.js":426,"./en-ie":427,"./en-ie.js":427,"./en-il":428,"./en-il.js":428,"./en-in":429,"./en-in.js":429,"./en-nz":430,"./en-nz.js":430,"./en-sg":431,"./en-sg.js":431,"./eo":432,"./eo.js":432,"./es":433,"./es-do":434,"./es-do.js":434,"./es-mx":435,"./es-mx.js":435,"./es-us":436,"./es-us.js":436,"./es.js":433,"./et":437,"./et.js":437,"./eu":438,"./eu.js":438,"./fa":439,"./fa.js":439,"./fi":440,"./fi.js":440,"./fil":441,"./fil.js":441,"./fo":442,"./fo.js":442,"./fr":443,"./fr-ca":444,"./fr-ca.js":444,"./fr-ch":445,"./fr-ch.js":445,"./fr.js":443,"./fy":446,"./fy.js":446,"./ga":447,"./ga.js":447,"./gd":448,"./gd.js":448,"./gl":449,"./gl.js":449,"./gom-deva":450,"./gom-deva.js":450,"./gom-latn":451,"./gom-latn.js":451,"./gu":452,"./gu.js":452,"./he":453,"./he.js":453,"./hi":454,"./hi.js":454,"./hr":455,"./hr.js":455,"./hu":456,"./hu.js":456,"./hy-am":457,"./hy-am.js":457,"./id":458,"./id.js":458,"./is":459,"./is.js":459,"./it":460,"./it-ch":461,"./it-ch.js":461,"./it.js":460,"./ja":462,"./ja.js":462,"./jv":463,"./jv.js":463,"./ka":464,"./ka.js":464,"./kk":465,"./kk.js":465,"./km":466,"./km.js":466,"./kn":467,"./kn.js":467,"./ko":468,"./ko.js":468,"./ku":469,"./ku.js":469,"./ky":470,"./ky.js":470,"./lb":471,"./lb.js":471,"./lo":472,"./lo.js":472,"./lt":473,"./lt.js":473,"./lv":474,"./lv.js":474,"./me":475,"./me.js":475,"./mi":476,"./mi.js":476,"./mk":477,"./mk.js":477,"./ml":478,"./ml.js":478,"./mn":479,"./mn.js":479,"./mr":480,"./mr.js":480,"./ms":481,"./ms-my":482,"./ms-my.js":482,"./ms.js":481,"./mt":483,"./mt.js":483,"./my":484,"./my.js":484,"./nb":485,"./nb.js":485,"./ne":486,"./ne.js":486,"./nl":487,"./nl-be":488,"./nl-be.js":488,"./nl.js":487,"./nn":489,"./nn.js":489,"./oc-lnc":490,"./oc-lnc.js":490,"./pa-in":491,"./pa-in.js":491,"./pl":492,"./pl.js":492,"./pt":493,"./pt-br":494,"./pt-br.js":494,"./pt.js":493,"./ro":495,"./ro.js":495,"./ru":496,"./ru.js":496,"./sd":497,"./sd.js":497,"./se":498,"./se.js":498,"./si":499,"./si.js":499,"./sk":500,"./sk.js":500,"./sl":501,"./sl.js":501,"./sq":502,"./sq.js":502,"./sr":503,"./sr-cyrl":504,"./sr-cyrl.js":504,"./sr.js":503,"./ss":505,"./ss.js":505,"./sv":506,"./sv.js":506,"./sw":507,"./sw.js":507,"./ta":508,"./ta.js":508,"./te":509,"./te.js":509,"./tet":510,"./tet.js":510,"./tg":511,"./tg.js":511,"./th":512,"./th.js":512,"./tk":513,"./tk.js":513,"./tl-ph":514,"./tl-ph.js":514,"./tlh":515,"./tlh.js":515,"./tr":516,"./tr.js":516,"./tzl":517,"./tzl.js":517,"./tzm":518,"./tzm-latn":519,"./tzm-latn.js":519,"./tzm.js":518,"./ug-cn":520,"./ug-cn.js":520,"./uk":521,"./uk.js":521,"./ur":522,"./ur.js":522,"./uz":523,"./uz-latn":524,"./uz-latn.js":524,"./uz.js":523,"./vi":525,"./vi.js":525,"./x-pseudo":526,"./x-pseudo.js":526,"./yo":527,"./yo.js":527,"./zh-cn":528,"./zh-cn.js":528,"./zh-hk":529,"./zh-hk.js":529,"./zh-mo":530,"./zh-mo.js":530,"./zh-tw":531,"./zh-tw.js":531};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=874}},[[640,6,1,7]]]);