(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226189"],{e6ce:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.hasLocalStrategy?r("v-container",{attrs:{fluid:""}},[r("v-form",{ref:"form"},[r("v-row",{staticStyle:{"margin-top":"-10px"},attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"your email",rules:e.validation.emailRules,solo:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("v-col",{attrs:{xs:"6",sm:"6"}},[r("v-text-field",{staticStyle:{"margin-top":"-12px"},attrs:{label:"first name",rules:e.validation.nameRules,solo:""},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})],1),r("v-col",{attrs:{xs:"6",sm:"6"}},[r("v-text-field",{staticStyle:{"margin-top":"-12px"},attrs:{label:"last name",rules:e.validation.nameRules,solo:""},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})],1),r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-text-field",{staticStyle:{"margin-top":"-12px"},attrs:{label:"company/team",rules:e.validation.companyRules,solo:""},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-text-field",{staticStyle:{"margin-top":"-12px"},attrs:{label:"password",type:"password",rules:e.validation.passwordRules,solo:""},on:{keydown:e.debouncedPwdTest},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-text-field",{staticStyle:{"margin-top":"-12px"},attrs:{label:"confirm password",type:"password",rules:e.validation.passwordRules,solo:""},model:{value:e.form.passwordConf,callback:function(t){e.$set(e.form,"passwordConf",t)},expression:"form.passwordConf"}})],1),r("v-col",{staticClass:"py-2 px-2",staticStyle:{"margin-top":"-18px"},attrs:{cols:"12"}},[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("v-col",{staticClass:"flex-grow-1 flex-shrink-0",staticStyle:{"min-width":"100px","max-width":"100%"},attrs:{cols:"12"}},[r("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"mt-1 mb-0",attrs:{height:"5",color:e.passwordStrength>=75?"green":e.passwordStrength>=50?"orange":"red"},model:{value:e.passwordStrength,callback:function(t){e.passwordStrength=t},expression:"passwordStrength"}})],1),r("v-col",{staticClass:"caption text-center mt-3",attrs:{cols:"12"}},[e._v(" "+e._s(this.pwdSuggestions?this.pwdSuggestions:this.form.password?"Looks good.":"Password strength")+" "),this.form.password!==this.form.passwordConf?r("span",[r("b",[e._v("Passwords do not match.")])]):e._e()])],1)],1),r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticStyle:{"margin-top":"-0px"},attrs:{block:"",large:"",color:"accent"},on:{click:e.registerUser}},[e._v("Sign Up")]),r("p",{staticClass:"text-center"},[r("v-btn",{staticClass:"mt-5",attrs:{text:"",small:"",block:"",color:"accent",to:{name:"Login",query:{appId:e.$route.query.appId}}}},[e._v("Login")])],1)],1)],1),r("v-snackbar",{attrs:{"multi-line":""},model:{value:e.registrationError,callback:function(t){e.registrationError=t},expression:"registrationError"}},[e._v(" "+e._s(e.errorMessage)+" "),r("v-btn",{attrs:{color:"red",text:""},on:{click:function(t){e.registrationError=!1}}},[e._v(" Close ")])],1)],1)],1):e._e()},s=[],o=(r("99af"),r("c740"),r("d3b7"),r("ac1f"),r("3ca3"),r("841c"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),n=r("8785"),l=r("9530"),i=r.n(l),c=(r("ca94"),r("f7fe")),m=r.n(c),u=r("4556"),d=r.n(u);function p(){var e=Object(n["a"])([' query{ userPwdStrength(pwd:"','")}']);return p=function(){return e},e}function f(){var e=Object(n["a"])([" query { serverInfo { name company adminContact termsOfService scopes { name description } authStrategies { id name color icon url } } }  "]);return f=function(){return e},e}var w={name:"Registration",apollo:{serverInfo:{query:i()(f())}},computed:{hasLocalStrategy:function(){return-1!==this.serverInfo.authStrategies.findIndex((function(e){return"local"===e.id}))}},methods:{debouncedPwdTest:m()(Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$apollo.query({query:i()(p(),this.form.password)});case 2:t=e.sent,this.passwordStrength=25*t.data.userPwdStrength.score,this.pwdSuggestions=t.data.userPwdStrength.feedback.suggestions[0];case 5:case"end":return e.stop()}}),e,this)}))),1e3),registerUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=e.$refs.form.validate(),r){t.next=4;break}throw new Error("Form validation failed");case 4:if(e.form.password===e.form.passwordConf){t.next=6;break}throw new Error("Passwords do not match");case 6:if(!(e.passwordStrength<3)){t.next=8;break}throw new Error("Password too weak");case 8:return t.next=10,fetch("/auth/local/register?appId=".concat(e.appId,"&challenge=").concat(e.challenge),{method:"POST",headers:{"Content-Type":"application/json"},redirect:"follow",body:JSON.stringify({email:e.form.email,company:e.form.company,password:e.form.password,name:"".concat(e.form.firstName," ").concat(e.form.lastName),username:"".concat(e.form.firstName,"-").concat(e.form.lastName)})});case 10:a=t.sent,a.redirected&&(window.location=a.url),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](0),e.errorMessage=t.t0.message,e.registrationError=!0;case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))()}},data:function(){return{serverInfo:{authStrategies:[]},form:{email:null,firstName:null,lastName:null,company:null,password:null,passwordConf:null},registrationError:!1,errorMessage:"",validation:{companyRules:[function(e){return!!e||"Required"}],passwordRules:[function(e){return!!e||"Required"}],nameRules:[function(e){return!!e||"Required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]},passwordStrength:1,pwdSuggestions:null,appId:null,challenge:null}},mounted:function(){var e=new URLSearchParams(window.location.search),t=e.get("appId"),r=e.get("challenge");this.appId=t||"spklwebapp",r||"spklwebapp"!==this.appId?r&&(this.challenge=r):(this.challenge=d()({length:10}),localStorage.setItem("appChallenge",this.challenge))}},g=w,h=r("2877"),v=r("6544"),b=r.n(v),x=r("8336"),y=r("62ad"),S=r("a523"),k=r("4bd4"),R=r("8e36"),C=r("0fd9"),N=r("2db4"),I=r("8654"),E=Object(h["a"])(g,a,s,!1,null,null,null);t["default"]=E.exports;b()(E,{VBtn:x["a"],VCol:y["a"],VContainer:S["a"],VForm:k["a"],VProgressLinear:R["a"],VRow:C["a"],VSnackbar:N["a"],VTextField:I["a"]})}}]);
//# sourceMappingURL=chunk-2d226189.28513e35.js.map