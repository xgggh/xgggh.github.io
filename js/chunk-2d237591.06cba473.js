(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237591"],{fb76:function(n,e,t){"use strict";t.r(e),e["default"]={init:"  import Vue from 'vue'\n  import d2Crud from 'd2-crud-x'\n  import { d2CrudPlus } from 'd2-crud-plus'\n  import { D2pIconSelector } from 'd2p-extends'\n  // 安装扩展插件\n  Vue.use(D2pIconSelector)\n  ",crud:"export const crudOptions = {\n  columns: [\n    {\n      title: '图标选择',\n      key: 'iconSelect',\n      sortable: true,\n      type: 'icon-selector' // 字段类型\n    },\n    {\n      title: '用户可输入',\n      key: 'iconSelect2',\n      sortable: true,\n      type: 'icon-selector',\n      form: {\n        component: { // 组件参数配置\n          props: {\n            'user-input': true \n          }\n        }\n      }\n    }\n  ]\n}\n",template:"\n  "}}}]);