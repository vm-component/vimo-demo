webpackJsonp([78],{1005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(24),l=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={data:function(){return{}},watch:{},computed:{},methods:{alert:function(){this.$alert.present({title:"Alert",message:"这是一个警告框, 点击背景可关闭. ",enableBackdropDismiss:!0,buttons:[{text:"确定",role:"",handler:function(e){}}]})},confirm:function(){var e=this;this.$alert.present({title:"Confirm",message:"这个是一个确认对话框, 包含取消按钮.",cssClass:"alertCssOuterMain",enableBackdropDismiss:!0,buttons:[{text:"取消",role:"cancel",icon:"icon-Destructive",cssClass:"",handler:function(){console.debug("button2 click")}},{text:"确定",role:"",handler:function(t){e.$alert.dismiss().then(function(e){console.debug("button3 click"),console.debug(e)})}}]})},threeBtn:function(){var e=this;this.$alert.present({title:"三个按钮",message:"当传入的button超过三个时, 则纵向显示, 且这个message也可以传入html结构",enableBackdropDismiss:!1,buttons:[{text:"不清楚",role:"",handler:function(e){}},{text:"取消",role:"cancel",handler:function(e){}},{text:"确定",role:"",handler:function(t){e.$alert.dismiss().then(function(e){console.debug("button3 click"),console.debug(e)})}}]})},input:function(){var e=this;this.$alert.present({title:"登录iTunes Store",message:'请输入您Apple ID"apple@icloud.com"的密码',enableBackdropDismiss:!0,inputs:[{type:"password",name:"password",placeholder:"密码",value:""}],buttons:[{text:"取消",role:"cancel",handler:function(){}},{text:"确定",role:"",handler:function(t){e.$alert.present({title:"请确认",message:"您输入的信息："+(0,l.default)(t),cssClass:"",enableBackdropDismiss:!0,buttons:[{text:"确定",role:"cancel",handler:function(t){e.$alert.dismiss().then(function(e){console.log("alert input2 dismiss promise")})}}]}).then(function(){console.log("alert input2 present promise")})}}]}).then(function(){console.log("alert input1 present promise")})},checkbox:function(){var e=this;this.$alert.present({title:"水果来了",message:"选择你喜欢吃的水果",enableBackdropDismiss:!0,inputs:[{type:"checkbox",value:"apple",label:"苹果",checked:!0,handler:function(e){console.log("checkbox1 clicked"),console.log(e)}},{type:"checkbox",value:"pear",label:"梨",checked:!1,disabled:!0,handler:function(e){console.log("checkbox2 clicked"),console.log(e)}},{type:"checkbox",value:"banana",label:"香蕉",checked:!0,handler:function(e){console.log("checkbox3 clicked"),console.log(e)}},{type:"checkbox",value:"orange",label:"橘子",checked:!1,handler:function(e){console.log("checkbox4 clicked"),console.log(e)}}],buttons:[{text:"取消",role:"cancel",handler:function(){return!1}},{text:"确定",role:"",handler:function(t){e.$alert.dismiss().then(function(n){e.$alert.present({title:"请确认",message:"您输入的信息："+(0,l.default)(t),cssClass:"",enableBackdropDismiss:!0,buttons:[{text:"确定",role:"",handler:function(e){}}]})})}}]})},radio:function(){var e=this;this.$alert.present({title:"水果来了",message:"你只能选择一个",enableBackdropDismiss:!0,inputs:[{type:"radio",value:"apple",label:"苹果",checked:!0,handler:function(e){console.log("radio clicked"),console.log(e)}},{type:"radio",value:"pear",label:"梨",checked:!1,disabled:!0,handler:function(e){console.log("radio2 clicked"),console.log(e)}},{type:"radio",value:"banana",label:"香蕉",checked:!1,handler:function(e){console.log("radio3 clicked"),console.log(e)}},{type:"radio",value:"orange",label:"橘子",checked:!1,handler:function(e){console.log("radio4 clicked"),console.log(e)}}],buttons:[{text:"取消",role:"cancel",handler:function(){return!1}},{text:"确定",role:"",handler:function(t){e.$alert.dismiss().then(function(n){e.$alert.present({title:"请确认",message:"您输入的信息："+(0,l.default)(t),cssClass:"",enableBackdropDismiss:!0,buttons:[{text:"确定",role:"",handler:function(e){}}]})})}}]})}},created:function(){},mounted:function(){},activated:function(){},deactivated:function(){},components:{}}},349:function(e,t,n){n(913);var o=n(0)(n(1005),n(793),"data-v-5520e674",null);e.exports=o.exports},633:function(e,t,n){t=e.exports=n(345)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"alert.vue",sourceRoot:""}])},793:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",[n("Header",[n("Navbar",[n("Title",[e._v("Alert")])],1)],1),e._v(" "),n("Content",{attrs:{padding:""}},[n("Button",{attrs:{block:""},on:{click:function(t){e.alert()}}},[e._v("Alert")]),e._v(" "),n("Button",{attrs:{color:"danger",block:""},on:{click:function(t){e.confirm()}}},[e._v("Confirm")]),e._v(" "),n("Button",{attrs:{color:"secondary",block:""},on:{click:function(t){e.threeBtn()}}},[e._v("Three Button")]),e._v(" "),n("Button",{attrs:{color:"dark",block:""},on:{click:function(t){e.input()}}},[e._v("Input")]),e._v(" "),n("Button",{attrs:{color:"dark",block:""},on:{click:function(t){e.checkbox()}}},[e._v("Checkbox")]),e._v(" "),n("Button",{attrs:{color:"primary",block:""},on:{click:function(t){e.radio()}}},[e._v("Radio")])],1)],1)},staticRenderFns:[]}},913:function(e,t,n){var o=n(633);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(346)("bcc14048",o,!0)}});
//# sourceMappingURL=78.8198f6099c83d892942f.js.map