webpackJsonp([47],{1079:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(474);t.default={data:function(){return{fruit:"apple",onChangeValue:null,onSelectValue:null}},watch:{},computed:{},methods:{onChangeHandler:function(e){console.debug("当前的Segment值发生变化: "+e),this.onChangeValue=e},onSelectHandler:function(e){console.debug("点击了SegmentButton按钮, 这个按钮的值: "+e),this.onSelectValue=e}},created:function(){},mounted:function(){},activated:function(){},components:{Segment:o.Segment,SegmentButton:o.SegmentButton}}},419:function(e,t,n){n(958);var o=n(0)(n(1079),n(841),null,null);e.exports=o.exports},466:function(e,t,n){t=e.exports=n(345)(),t.push([e.i,".ion-segment{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%}.segment-button{position:relative;display:block;overflow:hidden;margin-right:0;margin-left:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}.segment-ios .segment-button{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:0;height:32px;border:1px solid #387ef5;font-size:13px;line-height:30px;color:#387ef5;background-color:transparent}.segment-ios .segment-button .ion-icon{font-size:26px;line-height:28px}.segment-ios .segment-button.segment-activated{color:#fff;background-color:#387ef5;opacity:1;-webkit-transition:all .1s linear;transition:all .1s linear}.segment-ios .segment-button:hover:not(.segment-activated){background-color:rgba(56,126,245,.1);-webkit-transition:all .1s linear;transition:all .1s linear}.segment-ios .segment-button:active:not(.segment-activated){background-color:rgba(56,126,245,.16);-webkit-transition:all .1s linear;transition:all .1s linear}.segment-ios .segment-button:first-of-type{margin-right:0;border-radius:4px 0 0 4px}.segment-ios .segment-button:not(:first-of-type){border-left-width:0}.segment-ios .segment-button:last-of-type{margin-left:0;border-left-width:0;border-radius:0 4px 4px 0}.segment-ios .segment-button-disabled{color:rgba(56,126,245,.3);pointer-events:none}.toolbar-ios .segment-ios{position:absolute;top:0;right:0;bottom:0;left:0}.toolbar-ios .segment-button{max-width:100px;height:26px;font-size:12px;line-height:25px}.toolbar-ios .segment-button .ion-icon{font-size:22px;line-height:24px}.segment-ios-primary .segment-button{border-color:#387ef5;color:#387ef5}.segment-ios-primary .segment-button:hover:not(.segment-activated){background-color:rgba(56,126,245,.1)}.segment-ios-primary .segment-button:active:not(.segment-activated){background-color:rgba(56,126,245,.16)}.segment-ios-primary .segment-button.segment-activated{color:#fff;background-color:#387ef5}.segment-ios-primary .segment-button-disabled{color:rgba(56,126,245,.3)}.toolbar-ios-primary .segment-ios .segment-button.segment-activated{color:#387ef5}.segment-ios-secondary .segment-button{border-color:#32db64;color:#32db64}.segment-ios-secondary .segment-button:hover:not(.segment-activated){background-color:rgba(50,219,100,.1)}.segment-ios-secondary .segment-button:active:not(.segment-activated){background-color:rgba(50,219,100,.16)}.segment-ios-secondary .segment-button.segment-activated{color:#fff;background-color:#32db64}.segment-ios-secondary .segment-button-disabled{color:rgba(50,219,100,.3)}.toolbar-ios-secondary .segment-ios .segment-button.segment-activated{color:#32db64}.segment-ios-danger .segment-button{border-color:#f53d3d;color:#f53d3d}.segment-ios-danger .segment-button:hover:not(.segment-activated){background-color:rgba(245,61,61,.1)}.segment-ios-danger .segment-button:active:not(.segment-activated){background-color:rgba(245,61,61,.16)}.segment-ios-danger .segment-button.segment-activated{color:#fff;background-color:#f53d3d}.segment-ios-danger .segment-button-disabled{color:rgba(245,61,61,.3)}.toolbar-ios-danger .segment-ios .segment-button.segment-activated{color:#f53d3d}.segment-ios-light .segment-button{border-color:#f4f4f4;color:#f4f4f4}.segment-ios-light .segment-button:hover:not(.segment-activated){background-color:hsla(0,0%,96%,.1)}.segment-ios-light .segment-button:active:not(.segment-activated){background-color:hsla(0,0%,96%,.16)}.segment-ios-light .segment-button.segment-activated{color:#000;background-color:#f4f4f4}.segment-ios-light .segment-button-disabled{color:hsla(0,0%,96%,.3)}.toolbar-ios-light .segment-ios .segment-button.segment-activated{color:#f4f4f4}.segment-ios-dark .segment-button{border-color:#222;color:#222}.segment-ios-dark .segment-button:hover:not(.segment-activated){background-color:rgba(34,34,34,.1)}.segment-ios-dark .segment-button:active:not(.segment-activated){background-color:rgba(34,34,34,.16)}.segment-ios-dark .segment-button.segment-activated{color:#fff;background-color:#222}.segment-ios-dark .segment-button-disabled{color:rgba(34,34,34,.3)}.toolbar-ios-dark .segment-ios .segment-button.segment-activated{color:#222}.segment-md .segment-button{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:0 6px;width:0;height:42px;border-bottom-width:2px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.1);font-size:12px;font-weight:500;line-height:40px;text-transform:uppercase;color:#387ef5;background-color:transparent;opacity:.7;-webkit-transition:all .1s linear;transition:all .1s linear}.segment-md .segment-button .ion-icon{font-size:26px;line-height:40px}.segment-md .segment-button.segment-activated,.segment-md .segment-button:active{border-color:#387ef5;opacity:1}.segment-md .segment-button-disabled{opacity:.3;pointer-events:none}.toolbar .segment-md{margin:0 auto}.toolbar .segment-md .segment-button.segment-activated,.toolbar .segment-md .segment-button:active{opacity:1}.segment-md-primary .segment-button{color:#387ef5}.segment-md-primary .segment-button.segment-activated,.segment-md-primary .segment-button:active{border-color:#387ef5;color:#387ef5;opacity:1}.segment-md-secondary .segment-button{color:#32db64}.segment-md-secondary .segment-button.segment-activated,.segment-md-secondary .segment-button:active{border-color:#32db64;color:#32db64;opacity:1}.segment-md-danger .segment-button{color:#f53d3d}.segment-md-danger .segment-button.segment-activated,.segment-md-danger .segment-button:active{border-color:#f53d3d;color:#f53d3d;opacity:1}.segment-md-light .segment-button{color:#f4f4f4}.segment-md-light .segment-button.segment-activated,.segment-md-light .segment-button:active{border-color:#f4f4f4;color:#f4f4f4;opacity:1}.segment-md-dark .segment-button{color:#222}.segment-md-dark .segment-button.segment-activated,.segment-md-dark .segment-button:active{border-color:#222;color:#222;opacity:1}","",{version:3,sources:["/Users/Hsiang/GitHub/Vimo/dev/raw/components/segment/segment.vue"],names:[],mappings:"AACA,aACE,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AACpB,eAAgB,AACZ,WAAY,AACR,OAAQ,AAChB,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,uBAAwB,AAChC,UAAY,CACb,AACD,gBACE,kBAAmB,AACnB,cAAe,AACf,gBAAiB,AACjB,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,uBAAwB,AACxB,mBAAoB,AACpB,cAAgB,CACjB,AACD,6BACE,mBAAoB,AACpB,eAAgB,AACZ,WAAY,AACR,OAAQ,AAChB,QAAS,AACT,YAAa,AAIb,yBAAsB,AACtB,eAAgB,AAChB,iBAAkB,AAClB,cAAe,AACf,4BAA8B,CAC/B,AACD,uCACI,eAAgB,AAChB,gBAAkB,CACrB,AACD,+CACI,WAAY,AACZ,yBAA0B,AAC1B,UAAW,AACX,kCAAqC,AACrC,yBAA6B,CAChC,AACD,2DACI,qCAA0C,AAC1C,kCAAqC,AACrC,yBAA6B,CAChC,AACD,4DACI,sCAA2C,AAC3C,kCAAqC,AACrC,yBAA6B,CAChC,AACD,2CACI,eAAgB,AAChB,yBAA2B,CAC9B,AACD,iDACI,mBAAqB,CACxB,AACD,0CACI,cAAe,AACf,oBAAqB,AACrB,yBAA2B,CAC9B,AACD,sCACE,0BAA+B,AAC/B,mBAAqB,CACtB,AACD,0BACE,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,SAAU,AACV,MAAQ,CACT,AACD,6BACE,gBAAiB,AACjB,YAAa,AACb,eAAgB,AAChB,gBAAkB,CACnB,AACD,uCACI,eAAgB,AAChB,gBAAkB,CACrB,AACD,qCACE,qBAAsB,AACtB,aAAe,CAChB,AACD,mEACI,oCAA0C,CAC7C,AACD,oEACI,qCAA2C,CAC9C,AACD,uDACI,WAAY,AACZ,wBAA0B,CAC7B,AACD,8CACE,yBAA+B,CAChC,AACD,oEACE,aAAe,CAChB,AACD,uCACE,qBAAsB,AACtB,aAAe,CAChB,AACD,qEACI,oCAA0C,CAC7C,AACD,sEACI,qCAA2C,CAC9C,AACD,yDACI,WAAY,AACZ,wBAA0B,CAC7B,AACD,gDACE,yBAA+B,CAChC,AACD,sEACE,aAAe,CAChB,AACD,oCACE,qBAAsB,AACtB,aAAe,CAChB,AACD,kEACI,mCAAyC,CAC5C,AACD,mEACI,oCAA0C,CAC7C,AACD,sDACI,WAAY,AACZ,wBAA0B,CAC7B,AACD,6CACE,wBAA8B,CAC/B,AACD,mEACE,aAAe,CAChB,AACD,mCACE,qBAAsB,AACtB,aAAe,CAChB,AACD,iEACI,kCAA2C,CAC9C,AACD,kEACI,mCAA4C,CAC/C,AACD,qDACI,WAAY,AACZ,wBAA0B,CAC7B,AACD,4CACE,uBAAgC,CACjC,AACD,kEACE,aAAe,CAChB,AACD,kCACE,kBAAmB,AACnB,UAAY,CACb,AACD,gEACI,kCAAwC,CAC3C,AACD,iEACI,mCAAyC,CAC5C,AACD,oDACI,WAAY,AACZ,qBAAuB,CAC1B,AACD,2CACE,uBAA6B,CAC9B,AACD,iEACE,UAAY,CACb,AACD,4BACE,mBAAoB,AACpB,eAAgB,AACZ,WAAY,AACR,OAAQ,AAChB,cAAe,AACf,QAAS,AACT,YAAa,AACb,wBAAyB,AACzB,0BAA2B,AAC3B,mCAAwC,AACxC,eAAgB,AAChB,gBAAiB,AACjB,iBAAkB,AAClB,yBAA0B,AAC1B,cAAe,AACf,6BAA8B,AAC9B,WAAa,AACb,kCAAqC,AACrC,yBAA6B,CAC9B,AACD,sCACI,eAAgB,AAChB,gBAAkB,CACrB,AACD,iFACI,qBAAsB,AACtB,SAAW,CACd,AACD,qCACE,WAAa,AACb,mBAAqB,CACtB,AACD,qBACE,aAAe,CAChB,AACD,mGAEE,SAAW,CACZ,AACD,oCACE,aAAe,CAChB,AACD,iGACI,qBAAsB,AACtB,cAAe,AACf,SAAW,CACd,AACD,sCACE,aAAe,CAChB,AACD,qGACI,qBAAsB,AACtB,cAAe,AACf,SAAW,CACd,AACD,mCACE,aAAe,CAChB,AACD,+FACI,qBAAsB,AACtB,cAAe,AACf,SAAW,CACd,AACD,kCACE,aAAe,CAChB,AACD,6FACI,qBAAsB,AACtB,cAAe,AACf,SAAW,CACd,AACD,iCACE,UAAY,CACb,AACD,2FACI,kBAAmB,AACnB,WAAY,AACZ,SAAW,CACd",file:"segment.vue",sourcesContent:["\n.ion-segment {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n.segment-button {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  margin-right: 0;\n  margin-left: 0;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.segment-ios .segment-button {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 0;\n  height: 32px;\n  border-width: 1px;\n  /*no*/\n  border-style: solid;\n  border-color: #387ef5;\n  font-size: 13px;\n  line-height: 30px;\n  color: #387ef5;\n  background-color: transparent;\n}\n.segment-ios .segment-button .ion-icon {\n    font-size: 26px;\n    line-height: 28px;\n}\n.segment-ios .segment-button.segment-activated {\n    color: #fff;\n    background-color: #387ef5;\n    opacity: 1;\n    -webkit-transition: 100ms all linear;\n    transition: 100ms all linear;\n}\n.segment-ios .segment-button:hover:not(.segment-activated) {\n    background-color: rgba(56, 126, 245, 0.1);\n    -webkit-transition: 100ms all linear;\n    transition: 100ms all linear;\n}\n.segment-ios .segment-button:active:not(.segment-activated) {\n    background-color: rgba(56, 126, 245, 0.16);\n    -webkit-transition: 100ms all linear;\n    transition: 100ms all linear;\n}\n.segment-ios .segment-button:first-of-type {\n    margin-right: 0;\n    border-radius: 4px 0 0 4px;\n}\n.segment-ios .segment-button:not(:first-of-type) {\n    border-left-width: 0;\n}\n.segment-ios .segment-button:last-of-type {\n    margin-left: 0;\n    border-left-width: 0;\n    border-radius: 0 4px 4px 0;\n}\n.segment-ios .segment-button-disabled {\n  color: rgba(56, 126, 245, 0.3);\n  pointer-events: none;\n}\n.toolbar-ios .segment-ios {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.toolbar-ios .segment-button {\n  max-width: 100px;\n  height: 26px;\n  font-size: 12px;\n  line-height: 25px;\n}\n.toolbar-ios .segment-button .ion-icon {\n    font-size: 22px;\n    line-height: 24px;\n}\n.segment-ios-primary .segment-button {\n  border-color: #387ef5;\n  color: #387ef5;\n}\n.segment-ios-primary .segment-button:hover:not(.segment-activated) {\n    background-color: rgba(56, 126, 245, 0.1);\n}\n.segment-ios-primary .segment-button:active:not(.segment-activated) {\n    background-color: rgba(56, 126, 245, 0.16);\n}\n.segment-ios-primary .segment-button.segment-activated {\n    color: #fff;\n    background-color: #387ef5;\n}\n.segment-ios-primary .segment-button-disabled {\n  color: rgba(56, 126, 245, 0.3);\n}\n.toolbar-ios-primary .segment-ios .segment-button.segment-activated {\n  color: #387ef5;\n}\n.segment-ios-secondary .segment-button {\n  border-color: #32db64;\n  color: #32db64;\n}\n.segment-ios-secondary .segment-button:hover:not(.segment-activated) {\n    background-color: rgba(50, 219, 100, 0.1);\n}\n.segment-ios-secondary .segment-button:active:not(.segment-activated) {\n    background-color: rgba(50, 219, 100, 0.16);\n}\n.segment-ios-secondary .segment-button.segment-activated {\n    color: #fff;\n    background-color: #32db64;\n}\n.segment-ios-secondary .segment-button-disabled {\n  color: rgba(50, 219, 100, 0.3);\n}\n.toolbar-ios-secondary .segment-ios .segment-button.segment-activated {\n  color: #32db64;\n}\n.segment-ios-danger .segment-button {\n  border-color: #f53d3d;\n  color: #f53d3d;\n}\n.segment-ios-danger .segment-button:hover:not(.segment-activated) {\n    background-color: rgba(245, 61, 61, 0.1);\n}\n.segment-ios-danger .segment-button:active:not(.segment-activated) {\n    background-color: rgba(245, 61, 61, 0.16);\n}\n.segment-ios-danger .segment-button.segment-activated {\n    color: #fff;\n    background-color: #f53d3d;\n}\n.segment-ios-danger .segment-button-disabled {\n  color: rgba(245, 61, 61, 0.3);\n}\n.toolbar-ios-danger .segment-ios .segment-button.segment-activated {\n  color: #f53d3d;\n}\n.segment-ios-light .segment-button {\n  border-color: #f4f4f4;\n  color: #f4f4f4;\n}\n.segment-ios-light .segment-button:hover:not(.segment-activated) {\n    background-color: rgba(244, 244, 244, 0.1);\n}\n.segment-ios-light .segment-button:active:not(.segment-activated) {\n    background-color: rgba(244, 244, 244, 0.16);\n}\n.segment-ios-light .segment-button.segment-activated {\n    color: #000;\n    background-color: #f4f4f4;\n}\n.segment-ios-light .segment-button-disabled {\n  color: rgba(244, 244, 244, 0.3);\n}\n.toolbar-ios-light .segment-ios .segment-button.segment-activated {\n  color: #f4f4f4;\n}\n.segment-ios-dark .segment-button {\n  border-color: #222;\n  color: #222;\n}\n.segment-ios-dark .segment-button:hover:not(.segment-activated) {\n    background-color: rgba(34, 34, 34, 0.1);\n}\n.segment-ios-dark .segment-button:active:not(.segment-activated) {\n    background-color: rgba(34, 34, 34, 0.16);\n}\n.segment-ios-dark .segment-button.segment-activated {\n    color: #fff;\n    background-color: #222;\n}\n.segment-ios-dark .segment-button-disabled {\n  color: rgba(34, 34, 34, 0.3);\n}\n.toolbar-ios-dark .segment-ios .segment-button.segment-activated {\n  color: #222;\n}\n.segment-md .segment-button {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 0 6px;\n  width: 0;\n  height: 42px;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(0, 0, 0, 0.1);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 40px;\n  text-transform: uppercase;\n  color: #387ef5;\n  background-color: transparent;\n  opacity: 0.7;\n  -webkit-transition: 100ms all linear;\n  transition: 100ms all linear;\n}\n.segment-md .segment-button .ion-icon {\n    font-size: 26px;\n    line-height: 40px;\n}\n.segment-md .segment-button:active, .segment-md .segment-button.segment-activated {\n    border-color: #387ef5;\n    opacity: 1;\n}\n.segment-md .segment-button-disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.toolbar .segment-md {\n  margin: 0 auto;\n}\n.toolbar .segment-md .segment-button:active,\n.toolbar .segment-md .segment-button.segment-activated {\n  opacity: 1;\n}\n.segment-md-primary .segment-button {\n  color: #387ef5;\n}\n.segment-md-primary .segment-button:active, .segment-md-primary .segment-button.segment-activated {\n    border-color: #387ef5;\n    color: #387ef5;\n    opacity: 1;\n}\n.segment-md-secondary .segment-button {\n  color: #32db64;\n}\n.segment-md-secondary .segment-button:active, .segment-md-secondary .segment-button.segment-activated {\n    border-color: #32db64;\n    color: #32db64;\n    opacity: 1;\n}\n.segment-md-danger .segment-button {\n  color: #f53d3d;\n}\n.segment-md-danger .segment-button:active, .segment-md-danger .segment-button.segment-activated {\n    border-color: #f53d3d;\n    color: #f53d3d;\n    opacity: 1;\n}\n.segment-md-light .segment-button {\n  color: #f4f4f4;\n}\n.segment-md-light .segment-button:active, .segment-md-light .segment-button.segment-activated {\n    border-color: #f4f4f4;\n    color: #f4f4f4;\n    opacity: 1;\n}\n.segment-md-dark .segment-button {\n  color: #222;\n}\n.segment-md-dark .segment-button:active, .segment-md-dark .segment-button.segment-activated {\n    border-color: #222;\n    color: #222;\n    opacity: 1;\n}\n"],sourceRoot:""}])},467:function(e,t,n){var o=n(0)(n(472),n(470),null,null);e.exports=o.exports},468:function(e,t,n){n(471);var o=n(0)(n(473),n(469),null,null);e.exports=o.exports},469:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"ion-segment segment",class:[e.modeClass,e.colorClass]},[e._t("default")],2)},staticRenderFns:[]}},470:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"ion-segment-button segment-button",class:{"segment-activated":e.isSelected,"segment-button-disabled":e.isDisabled},on:{click:function(t){e.onPointerDownHandler(t)}}},[e._t("default")],2)},staticRenderFns:[]}},471:function(e,t,n){var o=n(466);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(346)("73e80d6e",o,!0)},472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);t.default={name:"SegmentButton",data:function(){return{theValue:null,isInit:!1,parentComponent:null,isSelected:!1,isDisabled:!1}},props:{value:[String,Number],disabled:[Boolean],mode:{type:String,default:function(){return this.$config.get("mode")||"ios"}}},watch:{disabled:function(e){this.setDisabled((0,o.isTrueProperty)(e))}},methods:{setDisabled:function(e){this.setState(null),this.isDisabled=e},setState:function(e){var t=e===this.theValue&&!this.isDisabled;this.isSelected!==t&&(this.isSelected=t,this.isInit&&this.isSelected&&this.$emit("onSelect",this.theValue))},onPointerDownHandler:function(e){e.preventDefault(),e.stopPropagation(),this.parentComponent&&this.parentComponent.onChildChange(this.theValue)},getValue:function(){if(this.isInit)return this.theValue;var e=void 0;return(0,o.isPresent)(this.value)?(e=this.value,(0,o.isString)(this.value)&&(e=this.value.trim())):this.$slots.default&&this.$slots.default[0]&&this.$slots.default[0].text?e=this.$slots.default[0].text.trim():this.$slots.default&&this.$slots.default[0]&&this.$slots.default[0].tag&&this.$slots.default[0].children[0].text&&this.$slots.default.forEach(function(t){t.children&&t.children.length>0&&t.children[0]&&t.children[0].text&&(e+=t.children[0].text.trim())}),e}},mounted:function(){if("segment"!==this.$parent.$options._componentTag.toLowerCase())return console.error("The component of SegmentButton must combine with Segment component!"),!1;this.parentComponent=this.$parent,this.parentComponent.recordChild(this),this.theValue=this.getValue(),this.setDisabled(this.disabled),this.isInit=!0}}},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Segment",props:{value:[String,Number],color:[String],mode:{type:String,default:function(){return this.$config.get("mode")||"ios"}},disabled:[Boolean]},data:function(){return{childComponents:[],timer:null,theValue:this.value}},watch:{value:function(e){console.log("value"),console.log(e),this.refreshChildState(e)}},computed:{modeClass:function(){return"segment-"+this.mode},colorClass:function(){return this.color?"segment-"+this.mode+"-"+this.color:""}},methods:{recordChild:function(e){var t=this;this.childComponents.push(e),this.timer&&window.clearTimeout(this.timer),this.timer=setTimeout(function(){t.refreshChildState(t.value)},0)},onChildChange:function(e){this.refreshChildState(e),this.$emit("input",e),this.$emit("onChange",e)},refreshChildState:function(e){this.childComponents.forEach(function(t){t.isDisabled||t.setState(e)})}}}},474:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SegmentButton=t.Segment=void 0;var s=n(467),i=o(s),r=n(468),a=o(r);t.Segment=a.default,t.SegmentButton=i.default},678:function(e,t,n){t=e.exports=n(345)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"normal.vue",sourceRoot:""}])},841:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",[n("Header",[n("Navbar",[n("Title",[e._v("普通用法")])],1),e._v(" "),n("Toolbar",[n("Segment",{on:{onChange:e.onChangeHandler},model:{value:e.fruit,callback:function(t){e.fruit=t},expression:"fruit"}},[n("SegmentButton",{attrs:{value:"apple"},on:{onSelect:e.onSelectHandler}},[e._v("Apple")]),e._v(" "),n("SegmentButton",{attrs:{value:"orange"},on:{onSelect:e.onSelectHandler}},[e._v("Orange")]),e._v(" "),n("SegmentButton",{attrs:{value:"pear"},on:{onSelect:e.onSelectHandler}},[e._v("Pear")]),e._v(" "),n("SegmentButton",{attrs:{value:"disabled",disabled:!0},on:{onSelect:e.onSelectHandler}},[e._v("Disabled\n                ")])],1)],1)],1),e._v(" "),n("Content",{attrs:{padding:""}},[n("h1",[e._v("Title")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut blanditiis deserunt dolorem eos id maiores, modi neque nisi non, nostrum officia pariatur porro quo recusandae tenetur ullam ut vitae!")]),e._v(" "),n("div",[n("strong",[e._v("当前选择的结果: "+e._s(e.fruit))])]),e._v(" "),n("div",[n("strong",[e._v("onChange返回结果: "+e._s(e.onChangeValue))])]),e._v(" "),n("div",[n("strong",[e._v("onSelected返回结果: "+e._s(e.onSelectValue))])]),e._v(" "),n("Button",{attrs:{block:""},on:{click:function(t){e.fruit="orange"}}},[e._v("设置为Orange")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut blanditiis deserunt dolorem eos id maiores, modi neque nisi non, nostrum officia pariatur porro quo recusandae tenetur ullam ut vitae!")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut blanditiis deserunt dolorem eos id maiores, modi neque nisi non, nostrum officia pariatur porro quo recusandae tenetur ullam ut vitae!")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut blanditiis deserunt dolorem eos id maiores, modi neque nisi non, nostrum officia pariatur porro quo recusandae tenetur ullam ut vitae!")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut blanditiis deserunt dolorem eos id maiores, modi neque nisi non, nostrum officia pariatur porro quo recusandae tenetur ullam ut vitae!")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut blanditiis deserunt dolorem eos id maiores, modi neque nisi non, nostrum officia pariatur porro quo recusandae tenetur ullam ut vitae!")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut blanditiis deserunt dolorem eos id maiores, modi neque nisi non, nostrum officia pariatur porro quo recusandae tenetur ullam ut vitae!")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut blanditiis deserunt dolorem eos id maiores, modi neque nisi non, nostrum officia pariatur porro quo recusandae tenetur ullam ut vitae!")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut blanditiis deserunt dolorem eos id maiores, modi neque nisi non, nostrum officia pariatur porro quo recusandae tenetur ullam ut vitae!")])],1)],1)},staticRenderFns:[]}},958:function(e,t,n){var o=n(678);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(346)("cd589ac6",o,!0)}});
//# sourceMappingURL=47.c3b8282e232b58b19e3c.js.map