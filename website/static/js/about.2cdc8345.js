(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3e4a":function(t,e,a){"use strict";var n=a("4909"),s=a.n(n);s.a},4909:function(t,e,a){},"66d7":function(t,e,a){"use strict";var n=a("761f"),s=a.n(n);s.a},"761f":function(t,e,a){},"91bc":function(t,e,a){"use strict";var n=a("d404"),s=a.n(n);s.a},"968f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reader"},[a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",[a("Preview")],1),a("b-col",{staticClass:"text-left",attrs:{cols:"5"}},[a("OCRText")],1),a("b-col",{staticClass:"text-left"},[a("Medicine")],1)],1)],1)],1)},s=[],i=(a("cadf"),a("551c"),a("f751"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image-preview"},[t.url?a("img",{attrs:{src:t.url,id:"image",alt:""}}):t._e(),a("br"),a("span",{staticClass:"name"},[t._v(t._s(t.file.name))])])}),r=[],c=a("cebc"),l=a("2f62"),o={name:"preview",data:{url:null},computed:Object(c["a"])({},Object(l["b"])(["file"])),created:function(){this.file&&(this.url=URL.createObjectURL(this.file))}},u=o,f=(a("66d7"),a("2877")),d=Object(f["a"])(u,i,r,!1,null,"51f67b30",null),v=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("h1",[t._v("Advices")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.enLang,expression:"enLang"}],staticStyle:{"white-space":"pre"}},[t._v("\n        "+t._s(t.tesseract)+"\n    ")]),t.loading?a("div",{staticClass:"loader"}):t._e(),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.enLang,expression:"!enLang"}],staticStyle:{"white-space":"pre"}},[t._v("\n        "+t._s(t.translateData)+"\n    ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.translateData,expression:"!translateData"}],staticClass:"trans",on:{click:t.translate}},[t._v("Translate")]),a("button",{staticClass:"trans",on:{click:t.toggle}},[t._v("Toggle Language")])])},p=[],m=a("bc3a"),b=a.n(m),_={name:"OCRText",data:function(){return{loading:!1,translateData:"",enLang:!0}},computed:Object(c["a"])({},Object(l["b"])(["tesseract"])),methods:{toggle:function(){this.enLang=!this.enLang},translate:function(){var t=this;this.loading=!0;var e=new FormData;e.append("txt",this.tesseract),b.a.post("http://127.0.0.1:5000/translate",e).then(function(e){t.translateData=e.data,t.enLang=!1,t.loading=!1}).catch(function(e){t.error=e})}}},g=_,w=(a("91bc"),Object(f["a"])(g,h,p,!1,null,null,null)),x=w.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("h1",[t._v("Medicines")]),a("ul",[a("h3",[t._v("Tabs:")]),t._l(t.merki.drugs.drug,function(e){return a("li",{key:e},[t._v(t._s(e.drugName)+"\n            "),a("ul",[e.freq?a("li",[t._v(t._s(e.freq))]):a("li",[t._v(t._s(e.surroundingText.replace(/[^a-zA-Z 0-9]/g," ")))])])])})],2)])},O=[],j={name:"medicine",data:function(){return{merki:"loading"}},computed:Object(c["a"])({},Object(l["b"])(["tesseract"])),watch:{tesseract:function(t,e){var a=this;if(t){var n=new FormData;n.append("txt",this.tesseract),b.a.post("http://localhost:5000/merki",n).then(function(t){a.merki=t.data,console.log(t.data.drugs)}).catch(function(t){console.log(t)})}}}},L=j,k=(a("3e4a"),Object(f["a"])(L,C,O,!1,null,null,null)),T=k.exports,D={name:"reader",components:{Preview:v,OCRText:x,Medicine:T}},E=D,$=Object(f["a"])(E,n,s,!1,null,null,null);e["default"]=$.exports},d404:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],i=a("2877"),r={},c=Object(i["a"])(r,n,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=about.2cdc8345.js.map