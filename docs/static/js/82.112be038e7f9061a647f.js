webpackJsonp([82],{1030:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"name",data:function(){return{isActive:!1,inputValue:"",inputValueForDisplay:[],trigger:0}},props:{},watch:{},computed:{},methods:{GoSnake:function(){this.trigger=Math.random()},focusInput:function(){console.debug("focusInput"),document.getElementById("hidedInput").focus()},onfocus:function(){},valueChange:function(){console.debug("valueChange");var t=this.inputValue.toString().split("");t.length<12?this.inputValueForDisplay=t:(t.pop(),this.inputValue=t.join(""))}},created:function(){},mounted:function(){},activated:function(){},components:{}}},374:function(t,n,e){e(901);var a=e(0)(e(1030),e(780),"data-v-398d61fa",null);t.exports=a.exports},621:function(t,n,e){n=t.exports=e(345)(),n.push([t.i,".gl__button[data-v-398d61fa]{width:100%;height:100px;background:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.gl__button .snakebox[data-v-398d61fa]{width:250px;height:50px}.gl__button .snakebox .inner[data-v-398d61fa]{height:100%;color:red;font-size:18px;opacity:1}.gl__button .snakebox .inner[data-v-398d61fa],.gl__input[data-v-398d61fa]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%}.gl__input[data-v-398d61fa]{height:100px;background:#000}.gl__input .snakebox[data-v-398d61fa]{width:250px;height:50px}.gl__input .snakebox .inner[data-v-398d61fa]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;color:#fff;font-size:24px;opacity:1;padding:0 15px}.gl__input .snakebox .inner #hidedInput[data-v-398d61fa]{position:absolute;top:0;left:-1px;padding:0 15px;opacity:0;height:100%;width:100%;background:transparent}.list-enter-active[data-v-398d61fa],.list-leave-active[data-v-398d61fa]{-webkit-transition:all .3s;transition:all .3s}.list-enter[data-v-398d61fa],.list-leave-active[data-v-398d61fa]{opacity:0}.demo[data-v-398d61fa]{width:100%;height:100px;background:#ddd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.demo .snakebox[data-v-398d61fa]{width:300px;height:50px}.demo .snakebox .inner[data-v-398d61fa]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:100%}","",{version:3,sources:["/Users/Hsiang/GitHub/Vimo/dev/src/example/gl-input.vue"],names:[],mappings:"AACA,6BACE,WAAY,AACZ,aAAc,AACd,gBAAiB,AACjB,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,uCACI,YAAa,AACb,WAAa,CAChB,AACD,8CAaM,YAAa,AAEb,UAAW,AACX,eAAgB,AAChB,SAAW,CAChB,AACD,0EAlBM,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAE5B,UAAY,CAqBjB,AAhBD,4BAEE,aAAc,AACd,eAAiB,CAalB,AACD,sCACI,YAAa,AACb,WAAa,CAChB,AACD,6CACM,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACxB,mCAAoC,AAChC,oBAAqB,AACjB,2BAA4B,AACpC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,eAAgB,AAChB,UAAW,AACX,cAAgB,CACrB,AACD,yDACQ,kBAAmB,AACnB,MAAO,AACP,UAAW,AACX,eAAgB,AAChB,UAAW,AACX,YAAa,AACb,WAAY,AACZ,sBAAwB,CAC/B,AACD,wEACE,2BAA8B,AAC9B,kBAAsB,CACvB,AACD,iEACE,SAAW,CACZ,AACD,uBACE,WAAY,AACZ,aAAc,AACd,gBAAiB,AACjB,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,iCACI,YAAa,AACb,WAAa,CAChB,AACD,wCACM,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,UAAY,CACjB",file:"gl-input.vue",sourcesContent:["\n.gl__button[data-v-398d61fa] {\n  width: 100%;\n  height: 100px;\n  background: #000;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.gl__button .snakebox[data-v-398d61fa] {\n    width: 250px;\n    height: 50px;\n}\n.gl__button .snakebox .inner[data-v-398d61fa] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 100%;\n      width: 100%;\n      color: red;\n      font-size: 18px;\n      opacity: 1;\n}\n.gl__input[data-v-398d61fa] {\n  width: 100%;\n  height: 100px;\n  background: #000;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.gl__input .snakebox[data-v-398d61fa] {\n    width: 250px;\n    height: 50px;\n}\n.gl__input .snakebox .inner[data-v-398d61fa] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: start;\n      -webkit-justify-content: flex-start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 100%;\n      width: 100%;\n      color: #fff;\n      font-size: 24px;\n      opacity: 1;\n      padding: 0 15px;\n}\n.gl__input .snakebox .inner #hidedInput[data-v-398d61fa] {\n        position: absolute;\n        top: 0;\n        left: -1px;\n        padding: 0 15px;\n        opacity: 0;\n        height: 100%;\n        width: 100%;\n        background: transparent;\n}\n.list-enter-active[data-v-398d61fa], .list-leave-active[data-v-398d61fa] {\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n}\n.list-enter[data-v-398d61fa], .list-leave-active[data-v-398d61fa] {\n  opacity: 0;\n}\n.demo[data-v-398d61fa] {\n  width: 100%;\n  height: 100px;\n  background: #ddd;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.demo .snakebox[data-v-398d61fa] {\n    width: 300px;\n    height: 50px;\n}\n.demo .snakebox .inner[data-v-398d61fa] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 100%;\n      width: 100%;\n}\n"],sourceRoot:""}])},780:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Page",[e("Header",[e("Navbar",[e("Title",[t._v("Gl-Input")])],1)],1),t._v(" "),e("Content",{attrs:{padding:""}},[e("div",{staticClass:"gl__input"},[e("SnakeBox",{staticClass:"snakebox",attrs:{trigger:t.trigger,disableClick:!0,auto:!0,duration:750,startPosition:20,color:"#fff"}},[e("section",{staticClass:"inner",on:{click:t.focusInput}},[e("transition-group",{staticClass:"gl-content--spanBox",attrs:{name:"list",tag:"span"}},t._l(t.inputValueForDisplay,function(n){return e("span",{key:n,staticClass:"gl-content__spanBox--span"},[t._v(t._s(n))])})),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"number",id:"hidedInput"},domProps:{value:t.inputValue},on:{focus:t.onfocus,keyup:t.valueChange,input:function(n){n.target.composing||(t.inputValue=n.target.value)},blur:function(n){t.$forceUpdate()}}})],1)])],1),t._v(" "),e("Button",{attrs:{type:"solid"},on:{click:t.GoSnake}},[t._v("GoSnake")]),t._v(" "),e("div",{staticClass:"gl__button"},[e("SnakeBox",{staticClass:"snakebox",attrs:{delay:500,auto:!0,duration:750,startPosition:20,color:"red"}},[e("section",{staticClass:"inner"},[t._v("\n                    CREATE MY ACCOUNT\n                ")])])],1),t._v(" "),e("p",[t._v("* 刷新之后才能再次看到效果")]),t._v(" "),e("p",[t._v("自动运行及点击")]),t._v(" "),e("div",{staticClass:"demo"},[e("SnakeBox",{staticClass:"snakebox",attrs:{auto:!0,color:"red"}},[e("section",{staticClass:"inner"},[t._v("\n                    动画自动执行\n                ")])])],1),t._v(" "),e("div",{staticClass:"demo"},[e("SnakeBox",{staticClass:"snakebox",attrs:{color:"red"}},[e("section",{staticClass:"inner"},[t._v("\n                    点击运行动画\n                ")])])],1),t._v(" "),e("p",[t._v("选择起始位置及持续时间")]),t._v(" "),e("div",{staticClass:"demo"},[e("SnakeBox",{staticClass:"snakebox",attrs:{startPosition:50,duration:500}},[e("section",{staticClass:"inner"},[t._v("\n                    左侧从一半开始,持续500ms\n                ")])])],1),t._v(" "),e("div",{staticClass:"demo"},[e("SnakeBox",{staticClass:"snakebox",attrs:{initState:"right",startPosition:50,duration:500}},[e("section",{staticClass:"inner"},[t._v("\n                    右侧从一半开始,持续500ms\n                ")])])],1),t._v(" "),e("p",[t._v("设置延迟")]),t._v(" "),e("div",{staticClass:"demo"},[e("SnakeBox",{staticClass:"snakebox",attrs:{color:"blue",delay:500,startPosition:30,duration:500}},[e("section",{staticClass:"inner"},[t._v("\n                    延迟500ms后再执行\n                ")])])],1),t._v(" "),e("p",[t._v("设置动画比例")]),t._v(" "),e("div",{staticClass:"demo"},[e("SnakeBox",{staticClass:"snakebox",attrs:{radio:40,color:"green",startPosition:30,duration:500}},[e("section",{staticClass:"inner"},[t._v("\n                    动画比例40\n                ")])])],1),t._v(" "),e("div",{staticClass:"demo"},[e("SnakeBox",{staticClass:"snakebox",attrs:{radio:4,color:"green",startPosition:30,duration:500}},[e("section",{staticClass:"inner"},[t._v("\n                    动画比例4\n                ")])])],1)],1)],1)},staticRenderFns:[]}},901:function(t,n,e){var a=e(621);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(346)("9b736c54",a,!0)}});
//# sourceMappingURL=82.112be038e7f9061a647f.js.map