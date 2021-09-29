(function(t){function e(e){for(var r,s,i=e[0],u=e[1],c=e[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c6f8bff2"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("router-view")],1)],1)},o=[],s={name:"App",data:function(){return{}}},i=s,u=n("2877"),c=n("6544"),l=n.n(c),f=n("7496"),p=n("40dc"),h=n("8336"),m=n("132d"),d=n("adda"),v=n("f6c4"),y=n("2fa4"),b=Object(u["a"])(i,a,o,!1,null,null,null),g=b.exports;l()(b,{VApp:f["a"],VAppBar:p["a"],VBtn:h["a"],VIcon:m["a"],VImg:d["a"],VMain:v["a"],VSpacer:y["a"]});n("d3b7"),n("3ca3"),n("ddb0");var w=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hello-world")},x=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:"/logo.svg",contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},C=[],k={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},V=k,O=n("62ad"),P=n("a523"),E=n("0fd9"),A=Object(u["a"])(V,j,C,!1,null,null,null),L=A.exports;l()(A,{VCol:O["a"],VContainer:P["a"],VImg:d["a"],VRow:E["a"]});var S={name:"Home",components:{HelloWorld:L}},M=S,T=Object(u["a"])(M,_,x,!1,null,null,null),q=T.exports;r["default"].use(w["a"]);var H=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=new w["a"]({routes:H}),W=I,$=n("ce5b"),N=n.n($);n("bf40");r["default"].use(N.a);var B={icons:{iconfont:"mdi"}},D=new N.a(B);r["default"].config.productionTip=!1,new r["default"]({router:W,vuetify:D,render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.90cc5def.js.map