(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-646d873e","chunk-73b1e3c1","chunk-2d0a3342"],{"00d0":function(e,t,a){"use strict";a.r(t),a.d(t,"crudOptions",(function(){return n}));var n=function(e){return{pageOptions:{compact:!0},options:{height:"100%"},formOptions:{defaultSpan:12},rowHandle:{fixed:"right",edit:{thin:!0,type:"primary",text:null,title:"编辑"},remove:{thin:!0,text:null,title:"删除"},width:100},columns:[{title:"单选远程",key:"status",sortable:!0,search:{},type:"select",dict:{url:"/dicts/OpenStatusEnum"},minWidth:200},{title:"默认隐藏",key:"text1",show:!1,sortable:!0,minWidth:200},{title:"禁用字典缓存",key:"disableCache",sortable:!0,search:{},type:"select",disabled:!0,dict:{url:"/dicts/OpenStatusEnum2",cache:!1},form:{helper:"禁用字典缓存，每次打开对话框都会发出字典请求"},minWidth:200},{title:"单选，本地",key:"select_local",sortable:!0,search:{disabled:!0},type:"select",dict:{data:[{value:"sz",label:"深圳"},{value:"gz",label:"广州"},{value:"wh",label:"武汉"},{value:"sh",label:"上海"}]},minWidth:200},{title:"多选,本地",key:"mselect",sortable:!0,search:{disabled:!1},type:"select",form:{component:{props:{filterable:!0,multiple:!0,clearable:!0}}},dict:{data:[{value:"sz",label:"深圳"},{value:"gz",label:"广州"},{value:"wh",label:"武汉"},{value:"sh",label:"上海"}]},minWidth:200},{title:"级联单选",key:"cascader1",sortable:!0,search:{disabled:!1},type:"cascader",dict:{url:"/select/cascadeData"},minWidth:200},{title:"级联多选",key:"mcascader",sortable:!0,search:{disabled:!0},type:"cascader-multi",dict:{url:"/select/cascadeData"},minWidth:200},{title:"radio",key:"status2",sortable:!0,search:{disabled:!1},type:"radio",dict:{url:"/dicts/OpenStatusEnum"},form:{rules:[{required:!0,message:"请选择一个选项"}],component:{span:24},helper:"rule校验，我是必填项"},minWidth:200},{title:"开关组件",key:"switch",sortable:!0,search:{disabled:!1},type:"dict-switch",dict:{data:[{value:!0,label:"开启"},{value:!1,label:"关闭"}]},form:{component:{span:24,events:{blur:function(){console.log("on blur")}}},valueChange:function(e,t,a){console.log("您选中了：",t)}},minWidth:200}]}}},2892:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",{class:{"page-compact":e.crud.pageOptions.compact}},[a("template",{slot:"header"},[e._v(" 右上角工具条 "),a("span",{staticStyle:{color:"gray","font-size":"12px"}},[e._v("【点击右边帮助按钮，查看如何从旧版页面升级】")]),a("example-helper",{attrs:{title:"帮助说明"}},[a("div",[e._v("本次升级，兼容旧版本。旧版本不做任何更改可以继续使用")]),a("br"),a("div",[e._v(" 从旧版本升级，请按如下修改： "),a("ul",[a("li",[e._v("【必须配置】crud.options.height:'100%' ")]),a("li",[e._v("'<crud-search />'组件放到d2-crud的header里面去")]),a("li",[e._v("删除'< crud-footer />翻页组件，采用d2-crud内置pagination")]),a("li",[e._v('<d2-crud>增加属性 :pagination="crud.pagination"')]),a("li",[e._v('<d2-crud>增加事件@pagination-change="handlePaginationChange"')]),a("li",[e._v("<d2-container :class=\"{'page-compact':crud.pageOptions.compact}\">")])])])])],1),a("d2-crud-x",{ref:"d2Crud",attrs:{columns:e.crud.columns,data:e.crud.list,rowHandle:e.crud.rowHandle,"edit-title":"修改","add-template":e.crud.addTemplate,"add-rules":e.crud.addRules,"edit-template":e.crud.editTemplate,"edit-rules":e.crud.editRules,"form-options":e.crud.formOptions,options:e.crud.options,loading:e.crud.loading,pagination:e.crud.pagination},on:{"pagination-change":e.handlePaginationChange,"dialog-open":e.handleDialogOpen,"row-edit":e.handleRowEdit,"row-add":e.handleRowAdd,"row-remove":e.handleRowRemove,"dialog-cancel":e.handleDialogCancel,"form-data-change":e.handleFormDataChange}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("crud-search",{ref:"search",attrs:{options:e.crud.searchOptions},on:{submit:e.handleSearch}}),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addRow}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 新增")]),a("crud-toolbar",{attrs:{search:e.crud.searchOptions.show,compact:e.crud.pageOptions.compact,columns:e.crud.columns},on:{"update:search":function(t){return e.$set(e.crud.searchOptions,"show",t)},"update:compact":function(t){return e.$set(e.crud.pageOptions,"compact",t)},refresh:function(t){return e.doRefresh()},"columns-filter-changed":e.handleColumnsFilterChanged}})],1)])],2)},r=[],c=a("eac9"),d=a("00d0"),l=a("1fbf"),i={name:"formToolbar",components:{},mixins:[l["d2CrudPlus"].crud],data:function(){return{}},methods:{getCrudOptions:function(){return Object(d["crudOptions"])(this)},pageRequest:function(e){return Object(c["GetList"])(e)},addRequest:function(e){return Object(c["AddObj"])(e)},updateRequest:function(e){return Object(c["UpdateObj"])(e)},delRequest:function(e){return Object(c["DelObj"])(e.id)}}},o=i,s=a("2877"),u=Object(s["a"])(o,n,r,!1,null,null,null);t["default"]=u.exports},eac9:function(e,t,a){"use strict";a.r(t),a.d(t,"GetList",(function(){return r})),a.d(t,"AddObj",(function(){return c})),a.d(t,"UpdateObj",(function(){return d})),a.d(t,"DelObj",(function(){return l}));var n=a("f58c");function r(e){return Object(n["a"])({url:"/toolbar/page",method:"get",data:e})}function c(e){return Object(n["a"])({url:"/toolbar/add",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/toolbar/update",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/toolbar/delete",method:"post",data:{id:e}})}},f58c:function(e,t,a){"use strict";var n=a("22ce"),r=n["c"];t["a"]=r}}]);