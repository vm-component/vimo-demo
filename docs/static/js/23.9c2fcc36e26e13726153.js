webpackJsonp([23],{1082:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(34),l=n(33),a=n(445),o=n(1114);t.default={name:"name",data:function(){return{gaming:"nes",gamingNoValue:"",currency:"",currencies:[{symbol:"$",code:"USD",name:"US Dollar"},{symbol:"€",code:"EUR",name:"Euro"},{symbol:"£",code:"FKP",name:"Falkland Islands Pound"},{symbol:"¢",code:"GHS",name:"Ghana Cedi"}]}},props:{},watch:{},computed:{},methods:{onChange:function(e){console.debug("外部监听 onChange 事件, 返回值: "+e)},onSelect:function(e){console.debug("外部监听 onSelect 事件, 返回值: "+e)},onCancel:function(e){console.debug("外部监听 onCancel 事件, 返回值: "+e)}},created:function(){},mounted:function(){},activated:function(){},components:{List:i.List,Item:l.Item,ListHeader:l.ListHeader,Label:a.Label,Select:o.Select,Option:o.Option,ItemGroup:l.ItemGroup}}},1114:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Option=t.Select=void 0;var l=n(728),a=i(l),o=n(729),s=i(o);t.Select=s.default,t.Option=a.default},422:function(e,t,n){n(947);var i=n(0)(n(1082),n(830),"data-v-7c756114",null);e.exports=i.exports},440:function(e,t,n){t=e.exports=n(345)(),t.push([e.i,".ion-label{display:block;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin:0;font-size:inherit;text-overflow:ellipsis;white-space:nowrap}.item-input .ion-label{-webkit-box-flex:initial;-webkit-flex:initial;-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}[text-wrap] .ion-label{white-space:normal}.ion-label[fixed]{-webkit-box-flex:0;-webkit-flex:0 0 100px;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.item-label-floating .ion-label,.item-label-stacked .ion-label{-webkit-align-self:stretch;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;width:auto;max-width:100%}.ion-label[floating],.ion-label[stacked]{margin-bottom:0}.item-label-floating .input-wrapper,.item-label-stacked .input-wrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.item-label-floating .ion-select,.item-label-stacked .ion-select{-webkit-align-self:stretch;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;max-width:100%}.item-select .ion-label[floating]{-webkit-transform:translateZ(0) scale(.8);transform:translateZ(0) scale(.8)}.label-ios{margin:11px 8px 11px 0}.label-ios+.input+.cloned-input,.label-ios+.ion-input .text-input,.label-ios+.ion-textarea .text-input{margin-left:16px;width:-webkit-calc(100% - 8px - 16px);width:calc(100% - 8px - 16px)}.label-ios[stacked]{margin-bottom:4px;font-size:12px}.label-ios[floating]{margin-bottom:0;-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out,-webkit-transform .15s ease-in-out}.input-has-focus .label-ios[floating],.input-has-value .label-ios[floating]{-webkit-transform:translateZ(0) scale(.8);transform:translateZ(0) scale(.8)}.item-ios.item-label-floating [item-right],.item-ios.item-label-stacked [item-right]{margin-top:6px;margin-bottom:6px}.item-datetime .label-ios-primary,.item-input .label-ios-primary,.item-select .label-ios-primary,.label-ios-primary{color:#387ef5}.item-datetime .label-ios-secondary,.item-input .label-ios-secondary,.item-select .label-ios-secondary,.label-ios-secondary{color:#32db64}.item-datetime .label-ios-danger,.item-input .label-ios-danger,.item-select .label-ios-danger,.label-ios-danger{color:#f53d3d}.item-datetime .label-ios-light,.item-input .label-ios-light,.item-select .label-ios-light,.label-ios-light{color:#f4f4f4}.item-datetime .label-ios-dark,.item-input .label-ios-dark,.item-select .label-ios-dark,.label-ios-dark{color:#222}.label-md{margin:13px 8px 13px 0}[text-wrap] .label-md{font-size:12px;line-height:100%}.item-datetime .label-md,.item-input .label-md,.item-select .label-md{color:#999}.label-md[stacked]{font-size:12px}.label-md[floating]{-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out,-webkit-transform .15s ease-in-out}.label-md[floating],.label-md[stacked]{margin-bottom:0;margin-left:0}.input-has-focus .label-md[floating],.input-has-focus .label-md[stacked]{color:#387ef5}.input-has-focus .label-md[floating],.input-has-value .label-md[floating]{-webkit-transform:translateZ(0) scale(.8);transform:translateZ(0) scale(.8)}.item-md.item-label-floating [item-right],.item-md.item-label-stacked [item-right]{margin-top:7px;margin-bottom:7px}.item-datetime .label-md-primary,.item-input .label-md-primary,.item-select .label-md-primary,.label-md-primary{color:#387ef5}.item-datetime .label-md-secondary,.item-input .label-md-secondary,.item-select .label-md-secondary,.label-md-secondary{color:#32db64}.item-datetime .label-md-danger,.item-input .label-md-danger,.item-select .label-md-danger,.label-md-danger{color:#f53d3d}.item-datetime .label-md-light,.item-input .label-md-light,.item-select .label-md-light,.label-md-light{color:#f4f4f4}.item-datetime .label-md-dark,.item-input .label-md-dark,.item-select .label-md-dark,.label-md-dark{color:#222}","",{version:3,sources:["/Users/Hsiang/GitHub/Vimo/dev/raw/components/label/label.vue"],names:[],mappings:"AACA,WACE,cAAe,AACf,gBAAiB,AACjB,mBAAoB,AACpB,eAAgB,AACZ,WAAY,AACR,OAAQ,AAChB,SAAU,AACV,kBAAmB,AACnB,uBAAwB,AACxB,kBAAoB,CACrB,AACD,uBACE,yBAA0B,AAC1B,qBAAsB,AAClB,iBAAkB,AACd,aAAc,AACtB,gBAAiB,AACjB,mBAAqB,CACtB,AACD,uBACE,kBAAoB,CACrB,AACD,kBACE,mBAAoB,AACpB,uBAAwB,AACpB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,+DAEE,2BAA4B,AACxB,4BAA6B,AACrB,2BAA4B,AAChC,mBAAoB,AAC5B,WAAY,AACZ,cAAgB,CACjB,AACD,yCAEE,eAAiB,CAClB,AACD,uEAEE,mBAAoB,AACpB,eAAgB,AACZ,WAAY,AACR,OAAQ,AAChB,4BAA6B,AAC7B,6BAA8B,AAC9B,8BAA+B,AAC3B,0BAA2B,AACvB,qBAAuB,CAChC,AACD,iEAEE,2BAA4B,AACxB,4BAA6B,AACrB,2BAA4B,AAChC,mBAAoB,AAC5B,cAAgB,CACjB,AACD,kCACE,0CAAmD,AAC3C,iCAA2C,CACpD,AACD,WACE,sBAAwB,CACzB,AACD,uGAGE,iBAAkB,AAClB,sCAA8C,AAC9C,6BAAsC,CACvC,AACD,oBACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,qBACE,gBAAiB,AACjB,wCAA2C,AACnC,gCAAmC,AAC3C,kCAAmC,AAC3B,0BAA2B,AACnC,sDAAwD,AACxD,8CAAgD,AAChD,sCAAwC,AACxC,wEAA6E,CAC9E,AACD,4EAEE,0CAAmD,AAC3C,iCAA2C,CACpD,AACD,qFAEE,eAAgB,AAChB,iBAAmB,CACpB,AACD,oHAIE,aAAe,CAChB,AACD,4HAIE,aAAe,CAChB,AACD,gHAIE,aAAe,CAChB,AACD,4GAIE,aAAe,CAChB,AACD,wGAIE,UAAY,CACb,AACD,UACE,sBAAwB,CACzB,AACD,sBACE,eAAgB,AAChB,gBAAkB,CACnB,AACD,sEAGE,UAAY,CACb,AACD,mBACE,cAAgB,CACjB,AACD,oBACE,wCAA2C,AACnC,gCAAmC,AAC3C,kCAAmC,AAC3B,0BAA2B,AACnC,sDAAwD,AACxD,8CAAgD,AAChD,sCAAwC,AACxC,wEAA6E,CAC9E,AACD,uCAEE,gBAAiB,AACjB,aAAe,CAChB,AACD,yEAEE,aAAe,CAChB,AACD,0EAEE,0CAAmD,AAC3C,iCAA2C,CACpD,AACD,mFAEE,eAAgB,AAChB,iBAAmB,CACpB,AACD,gHAIE,aAAe,CAChB,AACD,wHAIE,aAAe,CAChB,AACD,4GAIE,aAAe,CAChB,AACD,wGAIE,aAAe,CAChB,AACD,oGAIE,UAAY,CACb",file:"label.vue",sourcesContent:["\n.ion-label {\n  display: block;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.item-input .ion-label {\n  -webkit-box-flex: initial;\n  -webkit-flex: initial;\n      -ms-flex: initial;\n          flex: initial;\n  max-width: 200px;\n  pointer-events: none;\n}\n[text-wrap] .ion-label {\n  white-space: normal;\n}\n.ion-label[fixed] {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 100px;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 200px;\n}\n.item-label-stacked .ion-label,\n.item-label-floating .ion-label {\n  -webkit-align-self: stretch;\n      -ms-flex-item-align: stretch;\n              -ms-grid-row-align: stretch;\n          align-self: stretch;\n  width: auto;\n  max-width: 100%;\n}\n.ion-label[stacked],\n.ion-label[floating] {\n  margin-bottom: 0;\n}\n.item-label-stacked .input-wrapper,\n.item-label-floating .input-wrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.item-label-stacked .ion-select,\n.item-label-floating .ion-select {\n  -webkit-align-self: stretch;\n      -ms-flex-item-align: stretch;\n              -ms-grid-row-align: stretch;\n          align-self: stretch;\n  max-width: 100%;\n}\n.item-select .ion-label[floating] {\n  -webkit-transform: translate3d(0, 0, 0) scale(0.8);\n          transform: translate3d(0, 0, 0) scale(0.8);\n}\n.label-ios {\n  margin: 11px 8px 11px 0;\n}\n.label-ios + .ion-input .text-input,\n.label-ios + .ion-textarea .text-input,\n.label-ios + .input + .cloned-input {\n  margin-left: 16px;\n  width: -webkit-calc(100% - (16px / 2) - 16px);\n  width: calc(100% - (16px / 2) - 16px);\n}\n.label-ios[stacked] {\n  margin-bottom: 4px;\n  font-size: 12px;\n}\n.label-ios[floating] {\n  margin-bottom: 0;\n  -webkit-transform: translate3d(0, 27px, 0);\n          transform: translate3d(0, 27px, 0);\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transition: -webkit-transform 150ms ease-in-out;\n  transition: -webkit-transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\n}\n.input-has-focus .label-ios[floating],\n.input-has-value .label-ios[floating] {\n  -webkit-transform: translate3d(0, 0, 0) scale(0.8);\n          transform: translate3d(0, 0, 0) scale(0.8);\n}\n.item-ios.item-label-stacked [item-right],\n.item-ios.item-label-floating [item-right] {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.label-ios-primary,\n.item-input .label-ios-primary,\n.item-select .label-ios-primary,\n.item-datetime .label-ios-primary {\n  color: #387ef5;\n}\n.label-ios-secondary,\n.item-input .label-ios-secondary,\n.item-select .label-ios-secondary,\n.item-datetime .label-ios-secondary {\n  color: #32db64;\n}\n.label-ios-danger,\n.item-input .label-ios-danger,\n.item-select .label-ios-danger,\n.item-datetime .label-ios-danger {\n  color: #f53d3d;\n}\n.label-ios-light,\n.item-input .label-ios-light,\n.item-select .label-ios-light,\n.item-datetime .label-ios-light {\n  color: #f4f4f4;\n}\n.label-ios-dark,\n.item-input .label-ios-dark,\n.item-select .label-ios-dark,\n.item-datetime .label-ios-dark {\n  color: #222;\n}\n.label-md {\n  margin: 13px 8px 13px 0;\n}\n[text-wrap] .label-md {\n  font-size: 12px;\n  line-height: 100%;\n}\n.item-input .label-md,\n.item-select .label-md,\n.item-datetime .label-md {\n  color: #999;\n}\n.label-md[stacked] {\n  font-size: 12px;\n}\n.label-md[floating] {\n  -webkit-transform: translate3d(0, 27px, 0);\n          transform: translate3d(0, 27px, 0);\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transition: -webkit-transform 150ms ease-in-out;\n  transition: -webkit-transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\n}\n.label-md[stacked],\n.label-md[floating] {\n  margin-bottom: 0;\n  margin-left: 0;\n}\n.input-has-focus .label-md[stacked],\n.input-has-focus .label-md[floating] {\n  color: #387ef5;\n}\n.input-has-focus .label-md[floating],\n.input-has-value .label-md[floating] {\n  -webkit-transform: translate3d(0, 0, 0) scale(0.8);\n          transform: translate3d(0, 0, 0) scale(0.8);\n}\n.item-md.item-label-stacked [item-right],\n.item-md.item-label-floating [item-right] {\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n.label-md-primary,\n.item-input .label-md-primary,\n.item-select .label-md-primary,\n.item-datetime .label-md-primary {\n  color: #387ef5;\n}\n.label-md-secondary,\n.item-input .label-md-secondary,\n.item-select .label-md-secondary,\n.item-datetime .label-md-secondary {\n  color: #32db64;\n}\n.label-md-danger,\n.item-input .label-md-danger,\n.item-select .label-md-danger,\n.item-datetime .label-md-danger {\n  color: #f53d3d;\n}\n.label-md-light,\n.item-input .label-md-light,\n.item-select .label-md-light,\n.item-datetime .label-md-light {\n  color: #f4f4f4;\n}\n.label-md-dark,\n.item-input .label-md-dark,\n.item-select .label-md-dark,\n.item-datetime .label-md-dark {\n  color: #222;\n}\n"],sourceRoot:""}])},441:function(e,t,n){n(443);var i=n(0)(n(444),n(442),null,null);e.exports=i.exports},442:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",{staticClass:"ion-label label",class:[e.modeClass,e.colorClass],attrs:{fixed:e.fixed,floating:e.floating,stacked:e.stacked}},[e._t("default")],2)},staticRenderFns:[]}},443:function(e,t,n){var i=n(440);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(346)("4ae2c745",i,!0)},444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);t.default={name:"Label",data:function(){return{itemComponent:null}},props:{mode:{type:String,default:function(){return this.$config.get("mode")||"ios"}},color:[String],fixed:[Boolean],floating:[Boolean],stacked:[Boolean]},computed:{modeClass:function(){return"label-"+this.mode},colorClass:function(){return this.color?"label-"+this.mode+"-"+this.color:""}},mounted:function(){"item"===this.$parent.$options._componentTag.toLowerCase()&&(this.itemComponent=this.$parent,(0,i.setElementClass)(this.itemComponent.$el,"item-label-fixed",this.fixed),(0,i.setElementClass)(this.itemComponent.$el,"item-label-floating",this.floating),(0,i.setElementClass)(this.itemComponent.$el,"item-label-stacked",this.stacked),this.itemComponent.labelComponent=this)}}},445:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;var i=n(441),l=function(e){return e&&e.__esModule?e:{default:e}}(i);t.Label=l.default},667:function(e,t,n){t=e.exports=n(345)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"select.vue",sourceRoot:""}])},676:function(e,t,n){t=e.exports=n(345)(),t.push([e.i,".ion-select{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;max-width:45%}.select-text{overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap}.item-multiple-inputs .ion-select{position:relative}.item-select-disabled .ion-label,.select-disabled{opacity:.4;pointer-events:none}.select-ios{padding:11px 8px 11px 16px}.select-ios .select-placeholder{color:#999}.select-ios .select-icon{position:relative;width:12px;height:18px}.select-ios .select-icon .select-icon-inner{position:absolute;top:50%;left:5px;margin-top:-2px;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:#999;pointer-events:none}.select-md{padding:13px 8px 13px 16px}.select-md .select-placeholder{color:#999}.select-md .item-select ion-label{margin-left:0}.select-md .select-icon{position:relative;width:12px;height:19px}.select-md .select-icon .select-icon-inner{position:absolute;top:50%;left:5px;margin-top:-3px;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:#999;pointer-events:none}","",{version:3,sources:["/Users/Hsiang/GitHub/Vimo/dev/raw/components/select/select.vue"],names:[],mappings:"AACA,YACE,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,aAAe,CAChB,AACD,aACE,gBAAiB,AACjB,mBAAoB,AACpB,eAAgB,AACZ,WAAY,AACR,OAAQ,AAChB,eAAgB,AAChB,kBAAmB,AACnB,uBAAwB,AACxB,kBAAoB,CACrB,AACD,kCACE,iBAAmB,CACpB,AACD,kDAEE,WAAY,AACZ,mBAAqB,CACtB,AACD,YACE,0BAA4B,CAC7B,AACD,gCACE,UAAY,CACb,AACD,yBACE,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AACD,4CACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,gBAAiB,AACjB,QAAS,AACT,SAAU,AACV,qBAAsB,AACtB,mCAAoC,AACpC,kCAAmC,AACnC,WAAY,AACZ,mBAAqB,CACtB,AACD,WACE,0BAA4B,CAC7B,AACD,+BACE,UAAY,CACb,AACD,kCACE,aAAe,CAChB,AACD,wBACE,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AACD,2CACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,gBAAiB,AACjB,QAAS,AACT,SAAU,AACV,qBAAsB,AACtB,mCAAoC,AACpC,kCAAmC,AACnC,WAAY,AACZ,mBAAqB,CACtB",file:"select.vue",sourcesContent:["\n.ion-select {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  max-width: 45%;\n}\n.select-text {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 16px;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.item-multiple-inputs .ion-select {\n  position: relative;\n}\n.select-disabled,\n.item-select-disabled .ion-label {\n  opacity: .4;\n  pointer-events: none;\n}\n.select-ios {\n  padding: 11px 8px 11px 16px;\n}\n.select-ios .select-placeholder {\n  color: #999;\n}\n.select-ios .select-icon {\n  position: relative;\n  width: 12px;\n  height: 18px;\n}\n.select-ios .select-icon .select-icon-inner {\n  position: absolute;\n  top: 50%;\n  left: 5px;\n  margin-top: -2px;\n  width: 0;\n  height: 0;\n  border-top: 5px solid;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  color: #999;\n  pointer-events: none;\n}\n.select-md {\n  padding: 13px 8px 13px 16px;\n}\n.select-md .select-placeholder {\n  color: #999;\n}\n.select-md .item-select ion-label {\n  margin-left: 0;\n}\n.select-md .select-icon {\n  position: relative;\n  width: 12px;\n  height: 19px;\n}\n.select-md .select-icon .select-icon-inner {\n  position: absolute;\n  top: 50%;\n  left: 5px;\n  margin-top: -3px;\n  width: 0;\n  height: 0;\n  border-top: 5px solid;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  color: #999;\n  pointer-events: none;\n}\n"],sourceRoot:""}])},728:function(e,t,n){var i=n(0)(n(998),n(813),null,null);e.exports=i.exports},729:function(e,t,n){n(956);var i=n(0)(n(999),n(839),null,null);e.exports=i.exports},813:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{attrs:{value:e.value,label:e.label,disabled:e.disabled,checked:e.checked}})},staticRenderFns:[]}},830:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",[n("Header",[n("Navbar",[n("Title",[e._v("Select")])],1)],1),e._v(" "),n("Content",{staticClass:"outer-content"},[n("div",{attrs:{padding:""}},[n("h5",[e._v("简介")]),e._v(" "),n("p",[e._v("Select组件用于单类型数据但多选, 如果是多类型数据选择, 请选Picker组件.")])]),e._v(" "),n("List",[n("ListHeader",[e._v("单选")]),e._v(" "),n("Item",[n("Label",[e._v("Gender")]),e._v(" "),n("Select",{attrs:{"item-right":"",placeholder:"Select",interface:"action-sheet"},on:{onChange:e.onChange,onSelect:e.onSelect,onCancel:e.onCancel}},[n("Option",{attrs:{value:"f"}},[e._v("Female")]),e._v(" "),n("Option",{attrs:{value:"m"}},[e._v("Male")])],1)],1),e._v(" "),n("Item",[n("Label",[e._v("Gender")]),e._v(" "),n("Select",{attrs:{"item-right":"",placeholder:"Select",interface:"alert"},on:{onChange:e.onChange,onSelect:e.onSelect,onCancel:e.onCancel}},[n("Option",{attrs:{value:"f",checked:""}},[e._v("Female")]),e._v(" "),n("Option",{attrs:{value:"m"}},[e._v("Male")])],1)],1),e._v(" "),n("Item",[n("Label",[e._v("Gender")]),e._v(" "),n("Select",{attrs:{"item-right":"",placeholder:"Multi Select",interface:"alert",multiple:!0},on:{onChange:e.onChange,onSelect:e.onSelect,onCancel:e.onCancel}},[n("Option",{attrs:{value:"f"}},[e._v("Female")]),e._v(" "),n("Option",{attrs:{value:"m"}},[e._v("Male")])],1)],1),e._v(" "),n("Item",[n("Label",[e._v("Gender")]),e._v(" "),n("Select",{attrs:{"item-right":"",placeholder:"Disabled Select",disabled:!0,interface:"alert",multiple:!0},on:{onChange:e.onChange,onSelect:e.onSelect,onCancel:e.onCancel}},[n("Option",{attrs:{value:"f"}},[e._v("Female")]),e._v(" "),n("Option",{attrs:{value:"m"}},[e._v("Male")])],1)],1),e._v(" "),n("Item",[n("Label",[e._v("能修改选中值文本")]),e._v(" "),n("Select",{attrs:{"item-right":"",placeholder:"请选择",selectedText:"已选择",interface:"alert",multiple:!0}},[n("Option",{attrs:{value:"f"}},[e._v("Female")]),e._v(" "),n("Option",{attrs:{value:"m"}},[e._v("Male")])],1)],1)],1),e._v(" "),n("List",[n("ListHeader",[n("span",[e._v("Option组件没有value的情况")])]),e._v(" "),n("Item",[n("Label",[e._v("Gaming")]),e._v(" "),n("Select",{attrs:{multiple:!0},model:{value:e.gamingNoValue,callback:function(t){e.gamingNoValue=t},expression:"gamingNoValue"}},[n("Option",[e._v("NES")]),e._v(" "),n("Option",[e._v("Nintendo64")]),e._v(" "),n("Option",[e._v("PlayStation")]),e._v(" "),n("Option",[e._v("Sega Genesis")]),e._v(" "),n("Option",[e._v("Sega Saturn")]),e._v(" "),n("Option",[e._v("SNES")])],1)],1)],1),e._v(" "),n("div",{attrs:{"text-cente":"",padding:""}},[n("p",{attrs:{"text-center":""}},[e._v("Gaming选中值: "+e._s(e.gamingNoValue))])]),e._v(" "),n("List",[n("ListHeader",[n("span",[e._v("单选 (v-model)")])]),e._v(" "),n("Item",[n("Label",[e._v("Gaming")]),e._v(" "),n("Select",{attrs:{multiple:!0},model:{value:e.gaming,callback:function(t){e.gaming=t},expression:"gaming"}},[n("Option",{attrs:{value:"nes",checked:"",disabled:""}},[e._v("NES")]),e._v(" "),n("Option",{attrs:{value:"n64",checked:""}},[e._v("Nintendo64")]),e._v(" "),n("Option",{attrs:{value:"ps",checked:""}},[e._v("PlayStation")]),e._v(" "),n("Option",{attrs:{value:"genesis"}},[e._v("Sega Genesis")]),e._v(" "),n("Option",{attrs:{value:"saturn"}},[e._v("Sega Saturn")]),e._v(" "),n("Option",{attrs:{value:"snes",disabled:""}},[e._v("SNES")])],1)],1)],1),e._v(" "),n("div",{attrs:{"text-cente":"",padding:""}},[n("p",{attrs:{"text-center":""}},[e._v("Gaming选中值: "+e._s(e.gaming))]),e._v(" "),n("small",[n("span",[e._v("  * Option中checked是NES/Nintendo64/PlayStation, 而v-model中的值是Option中checked是选中的是NES, 优先使用v-modal中的值")])])]),e._v(" "),n("List",[n("ListHeader",[n("span",[e._v("单选 (v-model && v-for)")])]),e._v(" "),n("Item",[n("Label",[e._v("Currency")]),e._v(" "),n("Select",{model:{value:e.currency,callback:function(t){e.currency=t},expression:"currency"}},e._l(e.currencies,function(t,i){return n("Option",{key:i,attrs:{value:t}},[n("span",[e._v(e._s(t.symbol)+" ("+e._s(t.code)+") "+e._s(t.name))])])}))],1)],1),e._v(" "),n("div",{attrs:{"text-cente":"",padding:""}},[n("p",{attrs:{"text-center":""}},[e._v("Currency选中值: "+e._s(e.currency))])])],1)],1)},staticRenderFns:[]}},839:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ion-select",class:[e.modeClass,{"select-disabled":e.isDisabled}]},[e.text?n("div",{staticClass:"select-text"},[e._v(e._s(e.selectedText||e.text))]):n("div",{staticClass:"select-placeholder select-text"},[e._v(e._s(e.placeholder))]),e._v(" "),e._m(0),e._v(" "),n("button",{staticClass:"item-cover",attrs:{"aria-haspopup":"true",id:e.id,"ion-button":"item-cover"},on:{click:function(t){e.onPointerDownHandler(t)}}}),e._v(" "),e._t("default")],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-icon"},[n("div",{staticClass:"select-icon-inner"})])}]}},947:function(e,t,n){var i=n(667);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(346)("60f58488",i,!0)},956:function(e,t,n){var i=n(676);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(346)("16200b1a",i,!0)},998:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);t.default={name:"Option",data:function(){return{selectComponent:null,label:null,isChecked:this.checked,optionValue:this.value}},props:{value:[Object,String,Array],disabled:[Boolean],text:[String],checked:[Boolean]},methods:{getText:function(){if(this.text)return this.text.trim();if(this.$slots.default&&this.$slots.default[0]&&this.$slots.default[0].text)return this.$slots.default[0].text.trim();if(this.$slots.default&&this.$slots.default[0]&&this.$slots.default[0].tag&&this.$slots.default[0].children[0].text){var e="";return this.$slots.default.forEach(function(t){t.children&&t.children.length>0&&t.children[0]&&t.children[0].text&&(e+=t.children[0].text.trim())}),e}return""}},created:function(){this.label=this.getText(),"select"===this.$parent.$options._componentTag.toLowerCase()&&(this.selectComponent=this.$parent,this.selectComponent.recordOption(this)),console.assert(this.selectComponent,"Option组件必须在Select组件之内使用!"),(0,i.isBlank)(this.optionValue)&&(this.optionValue=this.label)}}},999:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(24),l=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(1),o=n(84),s=n(85),r=0;t.default={name:"Select",data:function(){return{isDisabled:this.disabled,id:"rb-"+r++,itemComponent:null,optionComponents:[],texts:[],text:null,timer:null,values:[]}},props:{cancelText:{type:String,default:function(){return"Cancel"}},okText:{type:String,default:function(){return"OK"}},disabled:[Boolean],interface:{type:String,default:function(){return"alert"}},multiple:[Boolean],placeholder:[String],selectOptions:{type:Object,default:function(){return{}}},selectedText:[String],mode:{type:String,default:function(){return this.$config.get("mode")||"ios"}},value:[Object,String,Array]},watch:{disabled:function(e){this.setDisabled((0,a.isTrueProperty)(e))}},computed:{modeClass:function(){return"select select-"+this.mode}},methods:{setDisabled:function(e){this.isDisabled=e,this.itemComponent&&(0,a.setElementClass)(this.itemComponent.$el,"item-select-disabled",e)},onPointerDownHandler:function(e){e.preventDefault(),e.stopPropagation(),this.open()},open:function(){var e,t=this;if(!this.isDisabled){console.debug("select, open alert");var n=JSON.parse((0,l.default)(this.selectOptions));n.buttons=[{text:this.cancelText,role:"cancel",handler:function(){t.$emit("onCancel",null)}}],!n.title&&this.itemComponent&&(n.title=this.itemComponent.getLabelText()),"action-sheet"===this.interface&&this.optionComponents.length>6&&(console.warn('Interface cannot be "action-sheet" with more than 6 options. Using the "alert" interface.'),this.interface="alert"),"action-sheet"===this.interface&&this.multiple&&(console.warn('Interface cannot be "action-sheet" with a multi-value select. Using the "alert" interface.'),this.interface="alert"),"action-sheet"===this.interface?(n.buttons=n.buttons.concat(this.optionComponents.map(function(e){return{role:e.isChecked?"selected":"",text:e.label,handler:function(){t.onChange(e.optionValue),t.$emit("onChange",e.optionValue),t.$emit("input",e.optionValue),t.$emit("onSelect",e.optionValue)}}})),e="select-action-sheet",e+=n.cssClass?" "+n.cssClass:"",n.cssClass=e,o.ActionSheet.present(n)):(this.interface="alert",n.inputs=this.optionComponents.map(function(e){return{type:t.multiple?"checkbox":"radio",label:e.label,value:e.optionValue,checked:e.isChecked,disabled:e.disabled,handler:function(n){n.isChecked&&t.$emit("onSelect",e.optionValue)}}}),e="select-alert",this.multiple?e+=" multiple-select-alert":e+=" single-select-alert",e+=n.cssClass?" "+n.cssClass:"",n.cssClass=e,n.buttons.push({text:this.okText,handler:function(e){t.onChange(e),t.$emit("onChange",e),t.$emit("input",e)}}),s.Alert.present(n))}},onChange:function(e){console.debug("select, onChange value:",e),this.values=Array.isArray(e)?e:(0,a.isBlank)(e)?[]:[e],this.updOpts()},updOpts:function(){var e=this;this.texts=[],this.optionComponents&&this.optionComponents.forEach(function(t){t.isChecked=e.values.some(function(e){return(0,a.isCheckedProperty)(e,t.optionValue)}),t.isChecked&&e.texts.push(t.label)}),this.text=this.texts.join(", "),console.debug("updOpts")},recordOption:function(e){var t=this;this.optionComponents.push(e),(0,a.isBlank)(this.value)&&(this.values=this.optionComponents.filter(function(e){return e.isChecked}).map(function(e){return e.optionValue})),this.timer&&window.clearTimeout(this.timer),this.timer=window.setTimeout(function(){t.updOpts()},0)}},created:function(){},mounted:function(){"item"===this.$parent.$options._componentTag.toLowerCase()&&(this.itemComponent=this.$parent,(0,a.setElementClass)(this.itemComponent.$el,"item-select",!0)),(0,a.isBlank)(this.value)||this.values.push(this.value)},activated:function(){},components:{}}}});
//# sourceMappingURL=23.9c2fcc36e26e13726153.js.map