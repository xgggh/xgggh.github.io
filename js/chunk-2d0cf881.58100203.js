(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf881"],{"63b0":function(e,t,l){"use strict";l.r(t),l.d(t,"crudOptions",(function(){return a}));var a=function(e){return{pageOptions:{compact:!0},options:{},formOptions:{defaultSpan:12},rowHandle:{fixed:"right",edit:{thin:!0,type:"primary",text:null,title:"编辑"},remove:{thin:!0,text:null,title:"删除"},width:100},columns:[{title:"单选远程",key:"status",sortable:!0,search:{},type:"select",dict:{url:"/dicts/OpenStatusEnum"},minWidth:200},{title:"默认隐藏",key:"text1",show:!1,sortable:!0,minWidth:200},{title:"禁用字典缓存",key:"disableCache",sortable:!0,search:{},type:"select",disabled:!0,dict:{url:"/dicts/OpenStatusEnum2",cache:!1},form:{helper:"禁用字典缓存，每次打开对话框都会发出字典请求"},minWidth:200},{title:"单选，本地",key:"select_local",sortable:!0,search:{disabled:!0},type:"select",dict:{data:[{value:"sz",label:"深圳"},{value:"gz",label:"广州"},{value:"wh",label:"武汉"},{value:"sh",label:"上海"}]},minWidth:200},{title:"多选,本地",key:"mselect",sortable:!0,search:{disabled:!1},type:"select",form:{component:{props:{filterable:!0,multiple:!0,clearable:!0}}},dict:{data:[{value:"sz",label:"深圳"},{value:"gz",label:"广州"},{value:"wh",label:"武汉"},{value:"sh",label:"上海"}]},minWidth:200},{title:"级联单选",key:"cascader1",sortable:!0,search:{disabled:!1},type:"cascader",dict:{url:"/select/cascadeData"},minWidth:200},{title:"级联多选",key:"mcascader",sortable:!0,search:{disabled:!0},type:"cascader-multi",dict:{url:"/select/cascadeData"},minWidth:200},{title:"radio",key:"status2",sortable:!0,search:{disabled:!1},type:"radio",dict:{url:"/dicts/OpenStatusEnum"},form:{rules:[{required:!0,message:"请选择一个选项"}],component:{span:24},helper:"rule校验，我是必填项"},minWidth:200},{title:"开关组件",key:"switch",sortable:!0,search:{disabled:!1},type:"dict-switch",dict:{data:[{value:!0,label:"开启"},{value:!1,label:"关闭"}]},form:{component:{span:24,events:{blur:function(){console.log("on blur")}}},valueChange:function(e,t,l){console.log("您选中了：",t)}},minWidth:200}]}}}}]);