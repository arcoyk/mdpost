webpackJsonp([1],{Cx9H:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"app"}},[t._m(0),t._v(" "),a("div",{staticClass:"col s2"}),t._v(" "),a("div",{staticClass:"col s7"},[a("router-view")],1),t._v(" "),a("div",{staticClass:"col s3"}),t._v(" "),t._m(1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col row s12"},[e("div",{staticClass:"headtile col s4"},[e("a",{staticClass:"black-text",attrs:{href:"/"}},[e("div",{staticClass:"mdpost"},[this._v("mdpost")])])]),this._v(" "),e("div",{staticClass:"headtile col s4"}),this._v(" "),e("div",{staticClass:"headtile col s4"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer col row s12"},[e("a",{staticClass:"grey-text",attrs:{href:"https://mdpost2.herokuapp.com/page/18"}},[this._v("what's mdpost")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"add btn-floating blue btn-flat",attrs:{href:"/page/new"}},[e("i",{staticClass:"material-icons"},[this._v("add")])])}]};var s=a("VU/8")({name:"App"},i,!1,function(t){a("Cx9H")},"data-v-697f8954",null).exports,o=a("/ocq"),c=a("mtWM"),l=a.n(c),r="https://yoyoku.herokuapp.com/",p=a("+sNg"),d=a.n(p),u=a("WiKS"),g={name:"Page",components:{vueHeadful:a.n(u).a},mounted:function(){this.initPage()},methods:{initPage:function(){"new"==this.$route.params.id?(this.newpage=!0,this.editmode=!0):this.loadPage()},initContent:function(){document.querySelector(".content").innerHTML=d.a.markdown.toHTML(this.page.content)},loadPage:function(){var t=this;l.a.get(r+"pages/"+t.$route.params.id,{}).then(function(e){t.page=e.data,t.initContent()}).catch(function(t){})},postPage:function(){var t=this;l.a.post(r+"pages",{title:t.page.title,content:t.page.content}).then(function(e){t.$router.push(""+e.data.id),t.page=e.data,t.newpage=!1,t.editmode=!1,setTimeout(t.initContent,1)}).catch(function(t){})},editPage:function(){var t=this;l.a.put(r+"pages/"+t.page.id,{title:t.page.title,content:t.page.content}).then(function(e){t.page=e.data,t.editmode=!1,setTimeout(t.initContent,1)}).catch(function(t){})},deletePage:function(){l.a.delete(r+"pages/"+this.page.id,{}).then(function(t){console.log(t)}).catch(function(t){})}},data:function(){return{page:{title:"",content:""},newpage:!1,editmode:!1}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[t.editmode?a("span",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.page.title,expression:"page.title"}],attrs:{autofocus:"",placeholder:"title"},domProps:{value:t.page.title},on:{input:function(e){e.target.composing||t.$set(t.page,"title",e.target.value)}}},[t._v(t._s(t.page.title))]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.page.content,expression:"page.content"}],staticStyle:{height:"1000px"},attrs:{placeholder:"markdown available"},domProps:{value:t.page.content},on:{input:function(e){e.target.composing||t.$set(t.page,"content",e.target.value)}}})]):a("span",[a("h3",[t._v(t._s(t.page.title))]),t._v(" "),a("p",[t._v(t._s((""+t.page.updated_at).split("T")[0]))]),t._v(" "),a("p",{staticClass:"content"})])]),t._v(" "),a("div",{staticClass:"controler"},[t.newpage?a("a",{staticClass:"btn-floating btn-flat blue",on:{click:function(e){t.postPage()}}},[a("i",{staticClass:"material-icons"},[t._v("save")])]):0==t.editmode?a("a",{staticClass:"btn-floating btn-flat blue",on:{click:function(e){t.editmode=!0}}},[a("i",{staticClass:"material-icons"},[t._v("edit")])]):a("a",{staticClass:"btn-floating btn-flat blue",on:{click:function(e){t.editPage()}}},[a("i",{staticClass:"material-icons"},[t._v("save")])]),t._v(" "),a("vue-headful",{attrs:{title:"mdpost "+t.page.title}})],1)])},staticRenderFns:[]};var f=a("VU/8")(g,v,!1,function(t){a("Rup/")},null,null).exports,h={name:"Pages",components:{page:f},mounted:function(){this.loadPages()},methods:{newPage:function(){l.a.get(r+"/new",{}).then(function(t){}).catch(function(t){})},loadPages:function(){var t=this;l.a.get(r+"pages",{}).then(function(e){t.pages=e.data}).catch(function(t){})}},data:function(){return{pages:[]}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.pages,function(e){return a("div",{key:e.id,staticClass:"row"},[a("div",{staticClass:"container",attrs:{href:"/page/"+e.id}},[a("div",{staticClass:"row"},[a("a",{staticClass:"black-text",attrs:{href:"/page/"+e.id}},[a("h6",[a("b",[t._v("\n              "+t._s(e.title)+"\n            ")])])]),t._v("\n        "+t._s((""+e.updated_at).split("T")[0])+"\n      ")])])])}))},staticRenderFns:[]},_=a("VU/8")(h,m,!1,null,null,null).exports;n.a.use(o.a);var C=new o.a({mode:"history",routes:[{path:"/",name:"Pages",component:_},{path:"/page/:id",name:"Page",component:f}]}),w=(a("0lrd"),a("M4fF"),a("AYPi")),P=a.n(w);a("gkYU"),a("aqYZ"),n.a.config.productionTip=!1,new n.a({el:"#app",router:C,components:{App:s},template:"<App/>"}),n.a.use(P.a,{id:"UA-128284908-1",router:C})},"Rup/":function(t,e){},aqYZ:function(t,e){},gkYU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2e55d00a5d69bb281bac.js.map