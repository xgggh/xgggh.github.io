(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7856cfe"],{"033b":function(t,e,n){var i=n("3433");t.exports=i("navigator","userAgent")||""},"0dc7":function(t,e,n){"use strict";var i=n("338a"),o=n("88b8"),r=n("67e6"),s=n("c45c"),a="toString",c=RegExp.prototype,d=c[a],u=r((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),f=d.name!=a;(u||f)&&i(RegExp.prototype,a,(function(){var t=o(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?s.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"18d0":function(t,e,n){},22660:function(t,e,n){"use strict";var i=n("6ed5"),o=n("4a98"),r=n("7c9b");t.exports=function(t,e,n){var s=i(e);s in t?o.f(t,s,r(0,n)):t[s]=n}},"413d":function(t,e,n){var i,o,r=n("349a"),s=n("033b"),a=r.process,c=a&&a.versions,d=c&&c.v8;d?(i=d.split("."),o=i[0]+i[1]):s&&(i=s.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=s.match(/Chrome\/(\d+)/),i&&(o=i[1]))),t.exports=o&&+o},"6abe":function(t,e,n){var i=n("349a"),o=n("5f59"),r=n("889f"),s=n("b542");for(var a in o){var c=i[a],d=c&&c.prototype;if(d&&d.forEach!==r)try{s(d,"forEach",r)}catch(u){d.forEach=r}}},"889f":function(t,e,n){"use strict";var i=n("8c14").forEach,o=n("a5d6"),r=n("d8a9"),s=o("forEach"),a=r("forEach");t.exports=s&&a?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"8f0c":function(t,e,n){var i=n("67e6"),o=n("dfb8"),r=n("413d"),s=o("species");t.exports=function(t){return r>=51||!i((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},a020:function(t,e,n){"use strict";var i=n("49ca"),o=n("b7dc"),r=n("9966"),s=n("1ec2"),a=n("fd6a"),c=n("0d80"),d=n("22660"),u=n("dfb8"),f=n("8f0c"),l=n("d8a9"),h=f("slice"),p=l("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),E=[].slice,v=Math.max;i({target:"Array",proto:!0,forced:!h||!p},{slice:function(t,e){var n,i,u,f=c(this),l=a(f.length),h=s(t,l),p=s(void 0===e?l:e,l);if(r(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?o(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return E.call(f,h,p);for(i=new(void 0===n?Array:n)(v(p-h,0)),u=0;h<p;h++,u++)h in f&&d(i,u,f[h]);return i.length=u,i}})},a908:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d2p-ueditor"},[n("script",{ref:"script",attrs:{name:t.name,type:"text/plain"}})])},o=[];n("a020"),n("d206"),n("f5ac"),n("0dc7"),n("6abe");function r(){this.listeners={},this.on=function(t,e){void 0===this.listeners[t]&&(this.listeners[t]=[]),this.listeners[t].push(e)},this.emit=function(t){this.listeners[t]&&this.listeners[t].forEach((function(t){return t()}))}}var s=r,a=n("0e00"),c=n("73c5"),d={name:"d2p-ueditor",mixins:[a["a"].inputBase],props:{value:{type:String,default:""},config:{type:Object,default:function(){return{}}},name:{type:String,default:""}},data:function(){return{editor:void 0,mixedConfig:{}}},watch:{disabled:function(t){this.editor&&(t?this.editor.setDisabled():this.editor.setEnabled())},value:function(t){this.$emit("change",t),this.editor.getContent()!==t&&this.setValue(t)}},created:function(){this.initValue=this.value},mounted:function(){var t=this;Object.assign(this.mixedConfig,c["a"]),Object.assign(this.mixedConfig,this.config),this._checkDependencies().then((function(){t.$refs.script?t._initEditor():t.$nextTick((function(){return t._initEditor()}))}))},methods:{onInput:function(t){this.currentValue=t,this.$emit("input",t)},onChange:function(t){this.$emit("change",t)},_initEditor:function(){var t=this;this.$refs.script.id=this.id="editor_"+Math.random().toString(16).slice(-6),this.$emit("beforeInit",this.id,this.mixedConfig),this.editor=window.UE.getEditor(this.id,this.mixedConfig),this.editor.addListener("ready",(function(){console.log("ueditor ready"),2===t.status?t.editor.setContent(t.value):(t.status=2,t.$emit("ready",{vm:t,editor:t.editor}),t.initValue&&t.editor.setContent(t.initValue)),t.editor&&(t.disabled?t.editor.setDisabled():t.editor.setEnabled()),t.editor.addListener("contentChange",t.contentChangeHandler)}))},_checkDependencies:function(){var t=this;return new Promise((function(e,n){var i=!!window.UE&&!!window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length&&!!window.UE.getEditor;i?e():window.$loadEnv?window.$loadEnv.on("scriptsLoaded",(function(){e()})):(window.$loadEnv=new s,t._loadConfig().then((function(){return t._loadCore()})).then((function(){e(),window.$loadEnv.emit("scriptsLoaded")})))}))},_loadConfig:function(){var t=this;return new Promise((function(e,n){if(window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length)e();else{var i=document.createElement("script");i.type="text/javascript",i.src=t.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(i),i.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length?e():console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",i.src)}}}))},_loadCore:function(){var t=this;return new Promise((function(e,n){if(window.UE&&window.UE.getEditor)e();else{var i=document.createElement("script");i.type="text/javascript",i.src=t.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.min.js",document.getElementsByTagName("head")[0].appendChild(i),i.onload=function(){window.UE&&window.UE.getEditor?e():console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",i.src)}}}))},contentChangeHandler:function(){this.$emit("input",this.editor.getContent())},_setContent:function(t){t!==this.editor.getContent()&&this.editor.setContent(t)},setValue:function(t){switch(this.status){case 0:case 1:this.initValue=t;break;case 2:this._setContent(t);break}}},beforeDestroy:function(){this.editor&&this.editor.destroy&&this.editor.destroy()}},u=d,f=(n("ea45"),n("2877")),l=Object(f["a"])(u,i,o,!1,null,null,null);e["default"]=l.exports},c45c:function(t,e,n){"use strict";var i=n("88b8");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d206:function(t,e,n){var i=n("49ca"),o=n("862a"),r=n("0d24"),s=n("67e6"),a=s((function(){r(1)}));i({target:"Object",stat:!0,forced:a},{keys:function(t){return r(o(t))}})},ea45:function(t,e,n){"use strict";var i=n("18d0"),o=n.n(i);o.a}}]);