webpackJsonp([83],{1036:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"name",data:function(){return{}},methods:{openIndicatorInfinity:function(){var t=this;this.$indicator.present(),setTimeout(function(){t.$indicator.dismiss()},1e4)},openIndicator1000:function(){var t=this;this.$indicator.present(),setTimeout(function(){t.$indicator.dismiss()},1e3)},openIndicator300:function(){var t=this;this.$indicator.present(),setTimeout(function(){t.$indicator.dismiss()},300)},openIndicator100:function(){var t=this;this.$indicator.present(),setTimeout(function(){t.$indicator.dismiss()},100)},openIndicator20:function(){var t=this;this.$indicator.present(),setTimeout(function(){t.$indicator.dismiss()},20)}},created:function(){},mounted:function(){},activated:function(){},components:{}}},380:function(t,n,i){i(898);var o=i(0)(i(1036),i(777),"data-v-32b749a7",null);t.exports=o.exports},618:function(t,n,i){n=t.exports=i(345)(),n.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"indicator.vue",sourceRoot:""}])},777:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("Page",[i("Header",[i("Navbar",[i("Title",[t._v("Indicator")])],1)],1),t._v(" "),i("Content",{staticClass:"outer-content",attrs:{padding:""}},[i("p",[t._v("Indicator")]),t._v(" "),i("p",[t._v("Loading的简单版, 用于无提示的Loading使用场景, 且开启最多存在10s, 10s后自动关闭.")]),t._v(" "),i("p",[t._v("如果路由切换则关闭组件")]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.openIndicatorInfinity}},[t._v("Open infinity(max 10s)")]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.openIndicator1000}},[t._v("Open 1000ms")]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.openIndicator300}},[t._v("Open 300ms")]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.openIndicator100}},[t._v("Open 100ms")]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.openIndicator20}},[t._v("Open 20ms")])],1)],1)},staticRenderFns:[]}},898:function(t,n,i){var o=i(618);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(346)("e1bd2d34",o,!0)}});
//# sourceMappingURL=83.46c75a60c73f10496b7d.js.map