(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0daf06"],{"6e78":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",{staticClass:"container"},[a("p",[e._v("Formulário para cadastro de items no inventório.")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.salvar(t)}}},[a("label",[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.name,expression:"item.name"}],attrs:{type:"text",placeholder:"Name"},domProps:{value:e.item.name},on:{input:function(t){t.target.composing||e.$set(e.item,"name",t.target.value)}}}),a("label",[e._v("Category")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.category,expression:"item.category"}],attrs:{type:"text",placeholder:"Category"},domProps:{value:e.item.category},on:{input:function(t){t.target.composing||e.$set(e.item,"category",t.target.value)}}}),a("label",[e._v("Value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.value,expression:"item.value"}],attrs:{type:"number",step:"0.01",placeholder:"Value"},domProps:{value:e.item.value},on:{input:function(t){t.target.composing||e.$set(e.item,"value",t.target.value)}}}),a("label",[e._v("Complete")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.complete,expression:"item.complete"}],attrs:{type:"text",placeholder:"true or false"},domProps:{value:e.item.complete},on:{input:function(t){t.target.composing||e.$set(e.item,"complete",t.target.value)}}}),e._m(1)]),a("p",[e._v("Retornar quantos itens estão no inventório de acordo com o parametro complete.")]),a("label",[e._v("Complete")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.complete,expression:"complete"}],attrs:{type:"text",placeholder:"all or true or false"},domProps:{value:e.complete},on:{input:function(t){t.target.composing||(e.complete=t.target.value)}}}),a("button",{staticClass:"waves-effect waves-light btn-small",on:{click:function(t){return e.howMany()}}},[e._v("How many ?")]),a("table",[e._m(2),a("tbody",e._l(e.items,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.id))]),a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.category))]),a("td",[e._v(e._s(t.value))]),a("td",[e._v(e._s(t.complete))]),a("td",[a("button",{staticClass:"waves-effect btn-small blue darken-1",on:{click:function(a){return e.atualizaItem(t.id)}}},[a("i",{staticClass:"material-icons"},[e._v("create")])]),a("button",{staticClass:"waves-effect btn-small red darken-1",on:{click:function(a){return e.deletaItem(t.id)}}},[a("i",{staticClass:"material-icons"},[e._v("delete_sweep")])])])])})),0)])])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrapper blue darken-1"},[a("a",{staticClass:"brand-logo center",attrs:{href:"#"}},[e._v("Inventory - FrontEnd - Soma")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"waves-effect waves-light btn-small"},[e._v("Salvar"),a("i",{staticClass:"material-icons left"},[e._v("save")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("ID")]),a("th",[e._v("NAME")]),a("th",[e._v("CATEGORY")]),a("th",[e._v("VALUE")]),a("th",[e._v("COMPLETE")]),a("th",[e._v("OPÇÕES")])])])}],i=a("e0a4"),l={data:function(){return{item:{id:"",name:"",category:"",value:"",complete:""},complete:"",items:[]}},created:function(){this.listar(),console.log(this.complete)},methods:{listar:function(){var e=this;i["a"].listar().then((function(t){e.items=t.data}))},salvar:function(){var e=this;this.item.complete="true"===this.item.complete,i["a"].salvar(this.item).then((function(t){alert("Salvo com sucesso"),console.log(t),e.listar()}))},deletaItem:function(e){var t=this;console.log(e),i["a"].deletar(e).then((function(e){t.listar(),console.log(e)}))},atualizaItem:function(e){this.$router.push("/inventory/"+e)},howMany:function(){return""==this.complete?this.$router.push("/howmany"):this.$router.push({path:"howmany",query:{complete:this.complete}})},editar:function(e){this.item=e}}},r=l,s=a("2877"),c=Object(s["a"])(r,o,n,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0daf06.3b32ce4c.js.map