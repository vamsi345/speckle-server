(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"95802905"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;o.push([15,"chunk-vendors"]),n()})({0:function(e,t){},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t,n){e.exports=n("7fba")},2:function(e,t){},3:function(e,t){},4:function(e,t){},"402c":function(e,t,n){"use strict";n("5363");var r=n("2b0e"),a=n("f309");r["a"].use(a["a"]),t["a"]=new a["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#262E37",secondary:"#0A66FF",accent:"#0A66FF",error:"#FF5252",info:"#0A66FF",success:"#0A66FF",warning:"#FFC107"}}}})},5:function(e,t){},6:function(e,t){},7:function(e,t){},"7fba":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("span",{staticClass:"title ml-3 mr-5"},[e._v("Speckle "),n("span",{staticClass:"font-weight-light"},[e._v("2")])]),n("v-spacer")],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"",color:"grey lighten-4"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[e._v(" So you think somthig should be here? ")]),n("v-content",[n("router-view")],1)],1)},s=[],i=n("fdab"),c={name:"App",components:{HelloWorld:i["a"]},data:function(){return{setup:!0,drawer:!0}}},u=c,l=n("2877"),p=n("6544"),f=n.n(p),h=n("7496"),d=n("40dc"),m=n("5bc1"),b=n("a75b"),v=n("f774"),g=n("2fa4"),y=Object(l["a"])(u,o,s,!1,null,null,null),w=y.exports;f()(y,{VApp:h["a"],VAppBar:d["a"],VAppBarNavIcon:m["a"],VContent:b["a"],VNavigationDrawer:v["a"],VSpacer:g["a"]});n("d3b7");var k=n("8c4f");n("bb51");a["a"].use(k["a"]);var _=[{path:"/",name:"Home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],x=new k["a"]({mode:"history",base:"/",routes:_}),j=x,C=n("2f62");a["a"].use(C["a"]);var O=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=n("402c"),A=n("ca94"),P=(n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),n("4556")),E=n.n(P),T="spklwebapp",V="spklwebapp";function R(){return I.apply(this,arguments)}function I(){return I=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search).get("access_code"),!t){e.next=11;break}return e.next=4,F(t);case 4:if(n=e.sent,!n.hasOwnProperty("token")){e.next=11;break}return localStorage.clear(),localStorage.setItem("AuthToken",n.token),localStorage.setItem("RefreshToken",n.refreshToken),window.history.replaceState({},document.title,"/"),e.abrupt("return",!0);case 11:if(r=localStorage.getItem("AuthToken"),!r){e.next=21;break}return e.next=15,fetch("/graphql",{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify({query:"{ user { id } }"})});case 15:return a=e.sent,e.next=18,a.json();case 18:if(o=e.sent.data,!o.user){e.next=21;break}return e.abrupt("return",!0);case 21:if(s=localStorage.getItem("RefreshToken"),!s){e.next=33;break}return e.next=25,fetch("/auth/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:s,appId:T,appSecret:V})});case 25:return i=e.sent,e.next=28,i.json();case 28:if(c=e.sent,!c.hasOwnProperty("token")){e.next=33;break}return localStorage.setItem("AuthToken",c.token),localStorage.setItem("RefreshToken",c.refreshToken),e.abrupt("return",!0);case 33:return q(),e.abrupt("return",!1);case 35:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function F(e){return N.apply(this,arguments)}function N(){return N=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("found local challenge: "+localStorage.getItem("appChallenge")),e.next=3,fetch("/auth/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accessCode:t,appId:T,appSecret:V,challenge:localStorage.getItem("appChallenge")})});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function q(){localStorage.setItem("appChallenge",E()({length:10})),window.location="/auth?app_id=spklwebapp&challenge=".concat(localStorage.getItem("appChallenge"))}a["a"].config.productionTip=!1,Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return");case 5:new a["a"]({router:j,store:O,vuetify:S["a"],apolloProvider:Object(A["a"])(),render:function(e){return e(w)}}).$mount("#app");case 6:case"end":return e.stop()}}),e)})))()},8:function(e,t){},9:function(e,t){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.63a7d78d.svg"},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Hello, "+e._s(e.user.name)+"! "),n("code",[e._v(e._s(e.user.id))])])])},a=[],o=n("8785"),s=(n("fdab"),n("9530")),i=n.n(s);function c(){var e=Object(o["a"])([" query { user { name id } } "]);return c=function(){return e},e}var u={name:"Home",apollo:{user:{query:i()(c())}},data:function(){return{user:{name:null,id:null}}}},l=u,p=n("2877"),f=Object(p["a"])(l,r,a,!1,null,null,null);t["default"]=f.exports},ca94:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n("96cf"),n("1da1");var r=n("5530"),a=n("2b0e"),o=n("522d"),s=n("efe7"),i=n("633a");a["a"].use(o["a"]);var c="AuthToken",u=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_HTTP||"http://localhost:3000/graphql",l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_WS||"ws://localhost:3000/graphql",p=new i["SubscriptionClient"](l,{reconnect:!0}),f={httpEndpoint:u,wsEndpoint:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_WS||"ws://localhost:3000/graphql",tokenName:c,persisting:!1,websocketsOnly:!1,ssr:!1,networkInterface:p};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(s["createApolloClient"])(Object(r["a"])(Object(r["a"])({},f),e)),n=t.apolloClient,a=t.wsClient;n.wsClient=a;var i=new o["a"]({defaultClient:n,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return i}},fdab:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[e._v(" For help and collaboration with other Vuetify developers, "),r("br"),e._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.whatsNext,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.importantLinks,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.ecosystem,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1)],1)],1)},a=[],o={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},s=o,i=n("2877"),c=n("6544"),u=n.n(c),l=n("62ad"),p=n("a523"),f=n("adda"),h=n("0fd9"),d=Object(i["a"])(s,r,a,!1,null,null,null);t["a"]=d.exports;u()(d,{VCol:l["a"],VContainer:p["a"],VImg:f["a"],VRow:h["a"]})}});
//# sourceMappingURL=app.d87c0378.js.map