(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21765e"],{c70d:function(e,a,r){"use strict";r.r(a),r.d(a,"crudOptions",(function(){return s}));var s={columns:[{title:"id",key:"id",width:"90",sortable:!0,disabled:!0,search:{name:"id",disabled:!0},align:"center",form:{addDisabled:!0,editDisabled:!0,rules:[{required:!0,message:"请输入id"}]}},{title:"添加时间",key:"createDate",sortable:!0,align:"center",search:{disabled:!0},type:"datetime",width:"160",form:{addDisabled:!0,editDisabled:!0,rules:[{required:!0,message:"请输入添加时间"}]}},{title:"房间名称",key:"name",sortable:!0,search:{name:"name",disabled:!1},form:{rules:[{required:!0,message:"请输入房间名称"}]},component:{name:"values-format"}},{title:"房间状态",key:"status",sortable:!0,align:"center",width:"150",search:{name:"status",disabled:!1,component:{props:{clearable:!0}}},type:"select",form:{rules:[{required:!0,message:"请输入房间状态"}]},dict:{data:[{value:0,label:"正常",color:"primary"},{value:3,label:"故障",color:"danger"},{value:4,label:"停用",color:"info"}]}},{title:"房间类型",key:"roomType",sortable:!0,align:"center",width:"150",search:{name:"room_type",disabled:!1,component:{props:{clearable:!0}}},type:"select",form:{rules:[{required:!0,message:"请输入房间类型"}]},dict:{url:"/hotel/roomtype/options"}},{title:"备注",key:"remark",columnName:"remark",sortable:!0,search:{name:"remark",disabled:!0},form:{rules:[{required:!1,message:"请输入备注"}]}}]}}}]);