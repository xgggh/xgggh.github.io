(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226c81"],{e9b9:function(e,o,t){"use strict";t.r(o),t.d(o,"crudOptions",(function(){return n}));var p=t("c276"),n=function(e){return{options:{height:"100%"},searchOptions:{show:null},columns:[{title:"头像",key:"avatar1",type:"avatar-uploader",width:120,form:{component:{props:{uploader:{type:"cos"}},span:24}}},{title:"私有bucket",key:"privateBucket",type:"image-uploader",width:120,form:{component:{props:{uploader:{type:"cos"},returnType:"key",buildUrl:function(e,o){return"/api/upload/cos/download?key="+e+"&token="+p["a"].cookies.get("token")}},span:24}},component:{props:{buildUrl:function(e){return"/api/upload/cos/download?key="+e+"&token="+p["a"].cookies.get("token")}}}},{title:"照片墙",key:"image",type:"image-uploader",width:150,align:"left",form:{component:{props:{uploader:{type:"cos"},elProps:{multiple:!0,limit:5},sizeLimit:51200},span:24},helper:"限制文件大小不能超过50k"}},{title:"图片列表",key:"image2",type:"image-uploader",width:150,align:"left",form:{component:{props:{uploader:{type:"cos"},elProps:{multiple:!0,listType:"picture",limit:5}}}},component:{props:{buildUrl:function(e){return e+"?token="+p["a"].cookies.get("token")}}}},{title:"文件",key:"file",sortable:!0,type:"file-uploader",align:"left",form:{component:{props:{elProps:{onPreview:function(e){window.open(e.url)},limit:0},uploader:{type:"cos",custom:{keepName:!0}}},span:20}}}]}}}}]);