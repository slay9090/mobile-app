(function(t){function e(e){for(var r,a,c=e[0],i=e[1],u=e[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"32507fe6","chunk-4b3e2d6b":"f2fb96dd"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1,"chunk-4b3e2d6b":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"1ab4344c","chunk-4b3e2d6b":"b2aa5bbc"}[t]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],d.parentNode.removeChild(d),n(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/mobile-app/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"015f":function(t,e,n){"use strict";n("8cc6")},"080c":function(t,e,n){t.exports=n.p+"img/Arrow_2.fc190ada.svg"},"3d9c":function(t,e,n){t.exports=n.p+"img/Battery.ab561cd1.svg"},"5c0b":function(t,e,n){"use strict";n("9c0c")},6698:function(t,e,n){t.exports=n.p+"img/CellularConnection.43d840d5.svg"},"8cc6":function(t,e,n){},"9c0c":function(t,e,n){},c89b:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app_wrapper"},[n("div",{staticClass:"app_container"},[n("NavBar"),n("div",{staticClass:"app_content"},[n("router-view")],1),n("Footer")],1)])])},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar"},[r("div",{staticClass:"status-block"},[r("div",{staticClass:"status-block_time"},[t._v("08:15")]),r("div",{staticClass:"status-block_connections"},[r("img",{attrs:{src:n("6698")}}),r("img",{attrs:{src:n("e9ec")}}),r("img",{attrs:{src:n("3d9c")}})])]),r("div",{staticClass:"panel-block"},[r("div",{staticClass:"panel-block_title"},[t.$route.name!==t.stepsMap.orders[0]?r("button",{staticClass:"btn_previes",on:{click:t.back}},[r("img",{attrs:{src:n("080c")}})]):t._e(),r("span",{staticClass:"panel-block_title__text"},[t._v(t._s(t.stepsMap[t.routeName]?t.stepsMap[t.routeName].navTitle:null))])])])])},c=[],i=(n("b0c0"),{orders:["page1","page2"],page1:{validationsFields:["sex"],navTitle:"Выберите пол"},page2:{navTitle:"Физические показатели"}}),u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(u["a"]);var l=[{path:"/",redirect:"/".concat(i.orders[0])},{path:"/".concat(i.orders[0]),name:i.orders[0],component:function(){return n.e("about").then(n.bind(null,"2b0b"))}},{path:"/".concat(i.orders[1]),name:i.orders[1],component:function(){return n.e("chunk-4b3e2d6b").then(n.bind(null,"223d"))}}],p=new u["a"]({mode:"history",base:"/mobile-app/",routes:l}),d=p,f={name:"NavBar",data:function(){return{stepsMap:i}},computed:{routeName:function(){return this.$route.name}},methods:{back:function(){var t=i.orders.indexOf(this.$route.name);d.push({path:i.orders[t-1]})}}},b=f,v=(n("015f"),n("2877")),m=Object(v["a"])(b,s,c,!1,null,"c4a9c09c",null),h=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("button",{staticClass:"btn_next",on:{click:t.next}},[n("span",{staticClass:"btn_next_text"},[t._v("Далее")])]),n("div",{staticClass:"separator-line"})])},_=[],y=n("5530"),C=n("2f62"),x={name:"Footer",computed:Object(y["a"])({},Object(C["b"])(["getPerson"])),methods:{next:function(){var t=i.orders.indexOf(this.$route.name);i.orders[t+1]?d.push({path:i.orders[t+1]}):alert(JSON.stringify(this.getPerson))}}},k=x,w=(n("cfa3"),Object(v["a"])(k,g,_,!1,null,"77ac9d8d",null)),O=w.exports,j={name:"App",components:{Footer:O,NavBar:h}},P=j,E=(n("5c0b"),Object(v["a"])(P,a,o,!1,null,null,null)),N=E.exports;r["a"].use(C["a"]);var S=new C["a"].Store({state:{person:{}},mutations:{setPersonData:function(t,e){console.log(e),t.person=e}},actions:{},getters:{getPerson:function(t){return t.person}}});r["a"].config.productionTip=!1,new r["a"]({router:d,store:S,render:function(t){return t(N)}}).$mount("#app")},cfa3:function(t,e,n){"use strict";n("c89b")},e9ec:function(t,e,n){t.exports=n.p+"img/Wifi.cf321d19.svg"}});
//# sourceMappingURL=app.9fd28363.js.map