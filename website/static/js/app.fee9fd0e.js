(function(e){function t(t){for(var r,o,s=t[0],u=t[1],l=t[2],c=0,f=[];c<s.length;c++)o=s[c],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2cdc8345"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"283bc0e8"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],c=l.getAttribute("data-href");if(c===r||c===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e),l=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:c})},12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/reader"}},[e._v("Reader")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view"),n("Footer",{attrs:{id:"footer"}})],1)},a=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("p",[e._v("© by Aman & Heinz")])])}],u={},l=u,c=n("2877"),f=Object(c["a"])(l,i,s,!1,null,null,null),d=f.exports,p={name:"App",components:{Footer:d}},m=p,v=(n("034f"),Object(c["a"])(m,o,a,!1,null,null,null)),h=v.exports,b=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Header",{attrs:{msg:"Prescription Reader"}}),n("upload-file")],1)},_=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h1",[e._v(e._s(e.msg))])])},w=[],O={name:"Header",props:{msg:String}},j=O,C=(n("b4fc"),Object(c["a"])(j,y,w,!1,null,"705376aa",null)),k=C.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.sendFile(t)}}},[n("div",{staticClass:"upload"},[n("font-awesome-icon",{attrs:{icon:"upload",id:"icon"}}),n("div",{staticClass:"file-picker"},[n("input",{attrs:{type:"file"},on:{change:e.selectFile}}),n("label",{staticClass:"file",attrs:{for:"file"}},[e._v("Pick a File...")])])],1),e.file?n("span",{staticClass:"file-name"},[e._v(e._s(e.file.name))]):e._e(),n("br"),e.error?n("span",{staticClass:"file-error"},[e._v(e._s(e.error))]):e._e(),n("br"),n("button",{directives:[{name:"show",rawName:"v-show",value:e.file,expression:"file"}],attrs:{type:"submit",id:"upload-btn"}},[e._v("Upload")])])])},E=[],P=n("cebc"),F=n("bc3a"),$=n.n(F),S=n("2f62"),T={name:"UploadFile",data:function(){return{error:""}},computed:Object(P["a"])({},Object(S["b"])(["file"])),methods:{selectFile:function(e){this.$store.dispatch("addImage",e.target.files[0])},sendFile:function(){var e=this;this.$router.push("reader");var t=new FormData;t.append("file",this.file),$.a.post("http://127.0.0.1:5000/upload",t,{onUploadProgress:function(e){console.log("Upload Progress: "+Math.round(e.loaded/e.total*100)+"%")}}).then(function(t){console.log(t),e.$store.dispatch("storeOCR",t.data)}).catch(function(t){e.error=t})}}},A=T,R=(n("de2c"),Object(c["a"])(A,x,E,!1,null,"55907a64",null)),H=R.exports,M={name:"home",components:{Header:k,UploadFile:H}},N=M,U=Object(c["a"])(N,g,_,!1,null,null,null),B=U.exports;r["a"].use(b["a"]);var q=new b["a"]({routes:[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/reader",name:"reader",component:function(){return n.e("about").then(n.bind(null,"968f"))}}]});n("7f7f");r["a"].use(S["a"],$.a);var D=new S["a"].Store({state:{tesseract:null,merki:"",file:""},getters:{},actions:{addImage:function(e,t){var n=e.commit;console.log(t.name),n("insertFile",t)},storeOCR:function(e,t){var n=e.commit;return n("storeOCR",t)}},mutations:{insertFile:function(e,t){console.log(t.name),e.file=t},storeOCR:function(e,t){e.tesseract=t}}}),I=n("9f7b"),J=n.n(I),L=(n("f9e3"),n("2dd8"),n("ecee")),z=n("c074"),G=n("ad3d");r["a"].use(J.a),L["c"].add(z["a"]),r["a"].component("font-awesome-icon",G["a"]),r["a"].config.productionTip=!1,new r["a"]({router:q,store:D,render:function(e){return e(h)}}).$mount("#app")},"64a9":function(e,t,n){},b4fc:function(e,t,n){"use strict";var r=n("e0d1"),o=n.n(r);o.a},cf09:function(e,t,n){},de2c:function(e,t,n){"use strict";var r=n("cf09"),o=n.n(r);o.a},e0d1:function(e,t,n){}});
//# sourceMappingURL=app.fee9fd0e.js.map