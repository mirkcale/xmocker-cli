webpackJsonp([2],{188:function(t,e,i){i(329);var a=i(12)(i(232),i(374),"data-v-c47adb7a",null);t.exports=a.exports},194:function(t,e,i){i(325);var a=i(12)(i(238),i(368),"data-v-7b9dff38",null);t.exports=a.exports},199:function(t,e,i){i(327);var a=i(12)(i(243),i(371),"data-v-b254faf2",null);t.exports=a.exports},202:function(t,e,i){"use strict";var a=i(28);e.a={data:function(){return{apiInfo:{}}},methods:{btnView:function(){this.$router.push({name:"API详情",query:{id:this.apiInfo.id,project:this.apiInfo.project}})},btnProject:function(){this.$router.push({name:"项目详情",query:{id:this.apiInfo.project}})},btnEdit:function(){this.$router.push({name:"API编辑",query:{id:this.apiInfo.id,project:this.apiInfo.project}})},btnDelete:function(){var t=this;this.$Modal.confirm({title:"是否删除该API？",content:"<p>删除后将相关的分支均会删除且无法恢复</p>",onOk:function(){i.i(a.k)({id:t.apiInfo.id}).then(t.afterEdit)}})},afterEdit:function(t){t.code||(this.$Message.success(t.message),this.$emit("delete"))}}}},203:function(t,e,i){i(207);var a=i(12)(i(205),i(210),null,null);t.exports=a.exports},204:function(t,e,i){"use strict";var a=i(28);e.a={data:function(){return{projInfo:{}}},methods:{btnEdit:function(){this.$router.push({name:"项目编辑",query:{id:this.projInfo.id}})},btnView:function(){this.$router.push({name:"项目详情",query:{id:this.projInfo.id}})},btnDelete:function(){var t=this;this.$Modal.confirm({title:"是否删除该项目？",content:"<p>删除后将相关的API均会删除且无法恢复</p>",onOk:function(){i.i(a.d)({id:t.projInfo.id}).then(t.afterEdit)}})},btnPlay:function(){i.i(a.e)({id:this.projInfo.id,force:!1}).then(this.afterEdit)},btnRefresh:function(){i.i(a.e)({id:this.projInfo.id,force:!0}).then(this.afterEdit)},btnStop:function(){i.i(a.f)({id:this.projInfo.id}).then(this.afterEdit)},afterEdit:function(t){t.code||(this.$Message.success(t.message),this.freshProject())}}}},205:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(202),n=i(28);e.default={name:"api-card",mixins:[a.a],data:function(){return{topBarItems:[{name:"编辑",type:"edit",action:"btnEdit"},{name:"删除",type:"android-remove-circle",action:"btnDelete"},{name:"查看详情",type:"eye",action:"btnView"}],methodList:[{value:"GET",label:"GET"},{value:"POST",label:"POST"},{value:"PUT",label:"PUT"},{value:"DELETE",label:"DELETE"},{value:"PATCH",label:"PATCH"}],libList:[],ModelList:[],throwList:[{value:"304",label:"304"},{value:"400",label:"400"},{value:"404",label:"404"},{value:"502",label:"502"}],modifyPort:8080,modifyDelay:0,modifyPageNo:0,modifyFixedOutput:"",modifyPathEqual:"",modifyPath:"",modifyFixedType:"",modifyFixedWrong:"",modifyFixedBranch:"",modifyFixedThrow:"",modifyUrl:"",modifyMethod:"",modifyKeys:["path","delay","port","pageNo","pathEqual","url","method"]}},props:{name:{type:String},id:{type:String},method:{type:String},project:{type:String},url:{type:String},path:{type:String},pathEqual:{type:String},delay:{type:Number,default:0},fixedOutput:{type:Object},description:{type:String},pageNo:{type:String},fromSearch:{type:Boolean}},watch:{port:function(){this.setModifyData()},id:function(){this.setModifyData()}},computed:{proxyText:function(){return["本地","服务器","混合"][this.proxyType]||"未知"},fixedText:function(){var t=["错误","异常","分支"],e=this.fixedOutput&&void 0!==this.fixedOutput.type?t[this.fixedOutput.type]:0;return e?e+" ->"+this.fixedOutput.name:"未设置"}},methods:{submitItem:function(t){t.id=this.id,i.i(n.g)(t).then(this.afterEdit)},submitFixData:function(){var t=this.modifyFixedType,e={type:t,project:this.project,api:this.id};e.id="1"===t?this.modifyFixedWrong:"3"===t?this.modifyFixedBranch:void 0,e.data="2"===t?{code:~~this.modifyFixedThrow}:void 0,i.i(n.h)(e).then(this.afterEdit)},setGData:function(){this.apiInfo.id=this.id,this.apiInfo.project=this.project},setModifyData:function(){var t=this;this.modifyKeys.forEach(function(e){var i="modify"+e[0].toUpperCase()+e.slice(1);void 0!==t[e]&&(t[i]=t[e])})},getSelection:function(){this.getModelList(),this.getLibList()},getLibList:function(){var t=this,e={pageSize:1e3,pageNo:0};i.i(n.i)(e).then(function(e){e.code||(t.libList=e.data.list)})},getModelList:function(){var t=this,e={pageSize:1e3,pageNo:0,baseid:this.id};i.i(n.j)(e).then(function(e){e.code||(t.ModelList=e.data.list)})}},mounted:function(){this.setGData(),this.setModifyData()}}},206:function(t,e,i){e=t.exports=i(184)(),e.push([t.i,".cus-dw-icon{margin-right:5px!important}.cus-list-db li{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cus-list-db li,.cus-tooltip{display:-webkit-box;display:-ms-flexbox;display:flex}.cus-tooltip{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.cus-tooltip .ivu-btn{margin-top:10px}.cus-tooltip-text{width:100%;margin-top:10px;margin-bottom:10px;word-break:break-word;white-space:normal}.cus-tooltip-oneline{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cus-tooltip-list{width:100%}.cus-list-right,.cus-tooltip-list li{display:-webkit-box;display:-ms-flexbox;display:flex}.cus-list-right>span:first-child{max-width:120px;overflow:hidden;height:20px;margin-right:5px;text-overflow:ellipsis;white-space:nowrap}.cus-description{position:relative;max-width:224px;word-break:break-all;height:60px;line-height:20px;overflow:hidden}.cus-card-tbar-btn{margin-left:10px}.cus-radio-group{width:100%}.cus-radio-group,.cus-radio-group .selection-list{display:-webkit-box;display:-ms-flexbox;display:flex}.cus-radio-group .selection-list{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.cus-radio-group .radio-select{display:block;margin:3px 0;margin-left:20px}","",{version:3,sources:["D:/fe/other/project/fe-mock-server/web/src/components/card/api-card.vue"],names:[],mappings:"AACA,aACE,0BAA4B,CAC7B,AACD,gBAIE,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CACxC,AACD,6BAPE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CAgBf,AAXD,aAIE,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,sBAAuB,AACnB,mBAAoB,AAChB,oBAAsB,CAC/B,AACD,sBACE,eAAiB,CAClB,AACD,kBACE,WAAY,AACZ,gBAAiB,AACjB,mBAAoB,AACpB,sBAAuB,AACvB,kBAAoB,CACrB,AACD,qBACE,WAAY,AACZ,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CACxC,AACD,kBACE,UAAY,CACb,AAMD,qCACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,iCACE,gBAAiB,AACjB,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,uBAAwB,AACxB,kBAAoB,CACrB,AACD,iBACE,kBAAmB,AACnB,gBAAiB,AACjB,qBAAsB,AACtB,YAAa,AACb,iBAAkB,AAClB,eAAiB,CAClB,AACD,mBACE,gBAAkB,CACnB,AACD,iBAIE,UAAY,CACb,AACD,kDALE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CAWf,AARD,iCAIE,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAChC,AACD,+BACE,cAAe,AACf,aAAc,AACd,gBAAkB,CACnB",file:"api-card.vue",sourcesContent:["\n.cus-dw-icon {\r\n  margin-right: 5px!important;\n}\n.cus-list-db li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\n}\n.cus-tooltip {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\n}\n.cus-tooltip .ivu-btn {\r\n  margin-top: 10px;\n}\n.cus-tooltip-text {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  word-break: break-word;\r\n  white-space: normal;\n}\n.cus-tooltip-oneline {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\n}\n.cus-tooltip-list {\r\n  width: 100%;\n}\n.cus-tooltip-list li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.cus-list-right {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.cus-list-right>span:first-child {\r\n  max-width: 120px;\r\n  overflow: hidden;\r\n  height: 20px;\r\n  margin-right: 5px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\n}\n.cus-description {\r\n  position: relative;\r\n  max-width: 224px;\r\n  word-break: break-all;\r\n  height: 60px;\r\n  line-height: 20px;\r\n  overflow: hidden;\n}\n.cus-card-tbar-btn {\r\n  margin-left: 10px;\n}\n.cus-radio-group {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\n}\n.cus-radio-group .selection-list{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\n}\n.cus-radio-group .radio-select{\r\n  display: block;\r\n  margin: 3px 0;\r\n  margin-left: 20px;\n}\r\n"],sourceRoot:""}])},207:function(t,e,i){var a=i(206);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(185)("76640214",a,!0)},210:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",[i("p",{staticStyle:{"max-width":"70%"},attrs:{title:t.name},slot:"title"},[i("Icon",{attrs:{type:"at"}}),t._v("\n    "+t._s(t.name)+"\n  ")],1),t._v(" "),i("template",{slot:"extra"},[t._l(t.topBarItems,function(e){return t.fromSearch?t._e():i("a",{key:e.name,staticClass:"cus-card-tbar-btn",attrs:{href:"javascript:void(0)"}},[i("Icon",{attrs:{type:e.type,color:"#9ea7b4"},nativeOn:{click:function(i){t.btnAction(e.action)}}})],1)}),t._v(" "),t.fromSearch?i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.btnAction("btnProject")}}},[t._v("项目详情")]):t._e(),t._v(" "),t.fromSearch?i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.btnAction("btnView")}}},[t._v("详情")]):t._e()],2),t._v(" "),i("ul",{staticClass:"cus-list-db"},[i("li",[i("span",[t._v("URL")]),t._v(" "),i("div",{staticClass:"cus-list-right"},[i("span",{staticClass:"cus-show-value"},[t._v(t._s(t.method||t.url?t.method+" -> "+t.url:"暂无"))]),t._v(" "),t.fromSearch?t._e():i("Poptip",{attrs:{placement:"right",width:"300"}},[i("a",{attrs:{href:"javascript:void(0)"}},[t._v("修改")]),t._v(" "),i("div",{staticClass:"cus-tooltip",slot:"content"},[i("p",{staticClass:"cus-tooltip-text"},[t._v('URL地址是访问请求的url地址，以 "/" 开头，修改实时生效')]),t._v(" "),i("Input",{attrs:{placeholder:"请填写url"},model:{value:t.modifyUrl,callback:function(e){t.modifyUrl=e},expression:"modifyUrl"}}),t._v(" "),i("Select",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"请填写请求方法"},model:{value:t.modifyMethod,callback:function(e){t.modifyMethod=e},expression:"modifyMethod"}},t._l(t.methodList,function(e){return i("Option",{key:e,attrs:{value:e.value}},[t._v(t._s(e.label))])})),t._v(" "),i("Button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){t.submitItem({url:t.modifyUrl,method:t.modifyMethod})}}},[t._v("提交")])],1)])],1)]),t._v(" "),i("li",[i("span",[t._v("二级路径")]),t._v(" "),i("div",{staticClass:"cus-list-right"},[i("span",{staticClass:"cus-show-value"},[t._v(t._s(t.path||t.pathEqual?t.path+" ==> "+t.pathEqual:"未开启"))]),t._v(" "),t.fromSearch?t._e():i("Poptip",{attrs:{placement:"right",width:"300"}},[i("a",{attrs:{href:"javascript:void(0)"}},[t._v("修改")]),t._v(" "),i("div",{staticClass:"cus-tooltip",slot:"content"},[i("p",{staticClass:"cus-tooltip-text"},[t._v("指定二级路径后，会先判断URL是否符合，然后判断请求传入的参数指定字段是否和预期值相等。")]),t._v(" "),i("Input",{attrs:{placeholder:"请填写指定字段"},model:{value:t.modifyPath,callback:function(e){t.modifyPath=e},expression:"modifyPath"}}),t._v(" "),i("Input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"请填写字段预期值"},model:{value:t.modifyPathEqual,callback:function(e){t.modifyPathEqual=e},expression:"modifyPathEqual"}}),t._v(" "),i("Button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){t.submitItem({path:t.modifyPath,pathEqual:t.modifyPathEqual})}}},[t._v("提交")])],1)])],1)]),t._v(" "),i("li",[i("span",[t._v("延时设置")]),t._v(" "),i("div",{staticClass:"cus-list-right"},[i("span",{staticClass:"cus-show-value"},[t._v(t._s(t.delay||"无延时"))]),t._v(" "),t.fromSearch?t._e():i("Poptip",{attrs:{placement:"right",width:"300"}},[i("a",{attrs:{href:"javascript:void(0)"}},[t._v("修改")]),t._v(" "),i("div",{staticClass:"cus-tooltip",slot:"content"},[i("p",{staticClass:"cus-tooltip-text"},[t._v("延时是指获取数据后延时返回，单位为ms")]),t._v(" "),i("div",{staticClass:"cus-tooltip-oneline"},[i("Input-number",{attrs:{min:0,placeholder:"延时时长",size:"small"},model:{value:t.modifyDelay,callback:function(e){t.modifyDelay=e},expression:"modifyDelay"}}),t._v(" "),i("Button",{staticStyle:{margin:"0"},attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){t.submitItem({delay:t.modifyDelay})}}},[t._v("提交")])],1)])])],1)]),t._v(" "),i("li",[i("span",[t._v("固定数据")]),t._v(" "),i("div",{staticClass:"cus-list-right"},[i("span",{staticClass:"cus-show-value"},[t._v(t._s(t.fixedText))]),t._v(" "),t.fromSearch?t._e():i("Poptip",{attrs:{placement:"bottom-end",width:"300"}},[i("a",{attrs:{href:"javascript:void(0)"},on:{click:t.getSelection}},[t._v("修改")]),t._v(" "),i("div",{staticClass:"cus-tooltip",slot:"content"},[i("p",{staticClass:"cus-tooltip-text"},[t._v("选择要设置的固定数据")]),t._v(" "),i("div",{staticClass:"cus-radio-group"},[i("Radio-group",{attrs:{vertical:""},model:{value:t.modifyFixedType,callback:function(e){t.modifyFixedType=e},expression:"modifyFixedType"}},[i("Radio",{attrs:{label:"1"}},[t._v("错误")]),t._v(" "),i("Radio",{attrs:{label:"2"}},[t._v("异常")]),t._v(" "),i("Radio",{attrs:{label:"3"}},[t._v("分支")]),t._v(" "),i("Radio",{attrs:{label:"0"}},[t._v("无")])],1),t._v(" "),i("div",{staticClass:"selection-list"},[i("Select",{staticClass:"radio-select",attrs:{placeholder:"错误",size:"small"},model:{value:t.modifyFixedWrong,callback:function(e){t.modifyFixedWrong=e},expression:"modifyFixedWrong"}},t._l(t.libList,function(e){return i("Option",{key:e,attrs:{value:e._id}},[t._v(t._s(e.name))])})),t._v(" "),i("Select",{staticClass:"radio-select",attrs:{placeholder:"异常",size:"small"},model:{value:t.modifyFixedThrow,callback:function(e){t.modifyFixedThrow=e},expression:"modifyFixedThrow"}},t._l(t.throwList,function(e){return i("Option",{key:e,attrs:{value:e.value}},[t._v(t._s(e.label))])})),t._v(" "),i("Select",{staticClass:"radio-select",attrs:{placeholder:"分支",size:"small"},model:{value:t.modifyFixedBranch,callback:function(e){t.modifyFixedBranch=e},expression:"modifyFixedBranch"}},t._l(t.ModelList,function(e){return i("Option",{key:e,attrs:{value:e._id}},[t._v(t._s(e.name))])}))],1)],1),t._v(" "),i("Button",{staticStyle:{margin:"0"},attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){t.submitFixData()}}},[t._v("提交")])],1)])],1)]),t._v(" "),i("li",[i("span",[t._v("API描述")]),t._v(" "),i("span",{staticClass:"cus-description",attrs:{title:t.description}},[t._v("\n        "+t._s(t.description)+"\n      ")])])])],2)},staticRenderFns:[]}},216:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"sync-list",data:function(){return{columns:[{type:"selection",align:"center",width:60},{title:"选择API同步",key:"name"}],selectedList:[]}},props:{data:{type:Array,default:[]},name:{type:String},type:{type:String}},methods:{clientDownLoadApi:function(t){this.$emit("submit",this.selectedList)},setSelection:function(t){this.selectedList=t}}}},220:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(202);e.default={name:"detail-api",mixins:[a.a],data:function(){return{topBarItems:[{name:"编辑",type:"edit",action:"btnEdit"},{name:"删除",type:"android-remove-circle",action:"btnDelete"}],simpleItem:[{label:"名称",key:"name"},{label:"方法",key:"method"},{label:"URL",key:"url"},{label:"二级路径",key:"path"},{label:"二级路径字段预期值",key:"pathEqual"},{label:"延时设置",key:"delay"},{label:"描述",key:"description"}],modelItem:[],modelItemPre:[{label:"判断条件",key:"condition",type:"javascript"},{label:"输出过滤函数",key:"afterFunc",type:"javascript"},{label:"输入参数模板",key:"inputParam",type:"json"},{label:"输出参数模板",key:"outputParam",type:"json"},{label:"mock数据",key:"data",type:"json"}]}},props:{info:{type:Object,default:{}}},created:function(){this.setGData()},methods:{setGData:function(){var t=this.$route.query;this.apiInfo.id=t.id,this.apiInfo.project=t.project}}}},222:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(28),n=i(204);e.default={name:"detail-project",mixins:[n.a],data:function(){return{topBarItems:[{name:"启动",type:"play",action:"btnPlay"},{name:"停止",type:"stop",action:"btnStop"},{name:"刷新",type:"refresh",action:"btnRefresh"}],topDropdownItems:[{name:"编辑",type:"edit",action:"btnEdit"},{name:"删除",type:"android-remove-circle",action:"btnDelete"}],simpleItem:[{label:"项目名称",key:"name"},{label:"简称",key:"shortcut"},{label:"本地路径",key:"path"},{label:"启动端口",key:"port"},{label:"父级项目名称",key:"parentName"},{label:"分页数",key:"pageNo"},{label:"404代理服务器地址",key:"proxyTo"},{label:"网页注入",key:"injectHtml",type:"boolean"}],projData:{name:"",shortcut:"",path:"",port:"",parentName:"",pageNo:0,proxyTo:"",injectHtml:!1,proxyTable:[],staticPath:[],urls:[],gulp:{}}}},props:{info:{type:Object,default:function(){return{name:""}}}},watch:{info:function(){this.initData()},"info.id":function(){}},methods:{getItemVal:function(t){return"boolean"===t.type?this.projData[t.key]?"是":"否":this.projData[t.key]||"未配置"},submitItem:function(t,e){var n={id:this.id};n[t]=e,i.i(a.c)(n).then(this.afterEdit)},btnEdit:function(){this.$router.push({name:"项目编辑",query:{id:this.info._id,fromDetail:!0}})},initData:function(){this.projInfo.id=this.info._id,this.copyToObj(this.projData,this.info)},getUrl:function(t){return"http://"+window.location.hostname+":"+this.projData.port+t.url}},created:function(){this.initData()}}},232:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(338),n=i.n(a),s=i(28);e.default={name:"api-detail",data:function(){return{info:{}}},components:{detailApi:n.a},watch:{},mounted:function(){var t=this.$route.query;t.id&&this.getApiDetail({id:t.id})},methods:{getApiDetail:function(t){var e=this;return i.i(s.A)(t).then(function(t){t.code||(e.info=t.data.result)})}}}},238:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(203),n=i.n(a),s=i(340),o=i.n(s),r=i(28);e.default={name:"projectDetail",data:function(){return{jsonData:"",info:{},searchVal:"",apiList:[],pageInfo:{pageNo:0,pageSize:6,total:0},loading:!0}},components:{apiCard:n.a,detailProject:o.a},computed:{},watch:{searchVal:function(t){var e=this;this.pageInfo.pageNo=0,this.pageInfo.total=1,clearTimeout(this.delayHandle),this.delayHandle=setTimeout(function(){e.getApi()},200)}},mounted:function(){var t=this;this.checkProjectList().then(function(){if(t.$route.query.id){var e=t.$route.query.id,i=t.$store.state.project.list.find(function(t){return t._id===e});t.setPageSize(),i?(t.info=i,t.getApi()):t.$Message.error("项目未找到！")}else t.$Message.error("抱歉，走错了呢")})},methods:{getApi:function(){var t=this;clearTimeout(this.delayHandle),this.loading=!0;var e=this.searchVal?r.x:r.y,i={project:this.info._id,pageSize:this.pageInfo.pageSize,pageNo:this.pageInfo.pageNo};return this.searchVal&&(i.words=this.searchVal),e(i).then(function(e){t.loading=!1,e.code||(t.apiList=e.data.list,t.pageInfo.total=e.data.pagination.pageCnt||1)})},pageNext:function(){this.pageInfo.pageNo>=this.pageInfo.total-1||(this.pageInfo.pageNo++,this.getApi())},pageBefore:function(){this.pageInfo.pageNo<=0||(this.pageInfo.pageNo--,this.getApi())},addApi:function(){this.$router.push({name:"API编辑",query:{project:this.info._id}})},copyApi:function(){this.$router.push({name:"API复制",query:{id:this.info._id,name:this.info.name}})},setPageSize:function(){var t=document.querySelector(".right-container").getBoundingClientRect(),e=Math.floor((t.width-52)/356),i=Math.floor((t.height-32)/268),a=i*e;this.pageInfo.pageSize=a<6?6:a}}}},243:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(29),n=i.n(a),s=i(28),o=i(336),r=i.n(o),l=n.a;e.default={name:"sync-list",data:function(){return{list:{},typeList:[{name:"落后于服务端",key:"behind",download:"base"},{name:"领先于服务端",key:"ahead",download:"base"},{name:"本机独有",key:"clientSide",download:""},{name:"服务端独有",key:"serverSide",download:"all"},{name:"无变化项目",key:"unchanged",download:""},{name:"未知项目",key:"unstaged",download:""}]}},components:{syncCard:r.a},created:function(){this.getSyncData()},methods:{getSyncData:function(){var t=this,e=this.$route.query.id;return this.id=e,i.i(s.n)({id:e}).then(function(e){e.code||(t.list=e.data)})},clientDownLoadApi:function(t){var e=this,a=t.map(function(t){return t._id});return i.i(s.o)({project:this.id,ids:a.join(",")}).then(function(t){t.code||e.$Message.success(t.message)})},filterList:function(t){return(this.list[t]||[]).map(function(e){return l((e.client||e.server).base,{key:t})})}}}},266:function(t,e,i){e=t.exports=i(184)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"select-api-card.vue",sourceRoot:""}])},272:function(t,e,i){e=t.exports=i(184)(),e.push([t.i,".cus-detail-list-simple[data-v-468bb716]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.cus-detail-list-simple>span[data-v-468bb716]:first-child{width:140px}.cus-detail-list-json>.json-list[data-v-468bb716]{padding-left:28px}.json-list[data-v-468bb716]{word-break:break-all}","",{version:3,sources:["D:/fe/other/project/fe-mock-server/web/src/components/detail/detail-project.vue"],names:[],mappings:"AACA,yCACE,WAAY,AACZ,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,0DACE,WAAa,CACd,AACD,kDACE,iBAAmB,CACpB,AACD,4BACE,oBAAsB,CACvB",file:"detail-project.vue",sourcesContent:["\n.cus-detail-list-simple[data-v-468bb716] {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.cus-detail-list-simple>span[data-v-468bb716]:first-child {\r\n  width: 140px;\n}\n.cus-detail-list-json>.json-list[data-v-468bb716] {\r\n  padding-left: 28px;\n}\n.json-list[data-v-468bb716] {\r\n  word-break: break-all;\n}\r\n"],sourceRoot:""}])},280:function(t,e,i){e=t.exports=i(184)(),e.push([t.i,".left-info{margin-top:0}","",{version:3,sources:["D:/fe/other/project/fe-mock-server/web/src/components/detail/detail-api.vue"],names:[],mappings:"AACA,WACE,YAAc,CACf",file:"detail-api.vue",sourcesContent:["\n.left-info {\n  margin-top: 0;\n}\n"],sourceRoot:""}])},283:function(t,e,i){e=t.exports=i(184)(),e.push([t.i,".left-info[data-v-7b9dff38]{margin-top:0}","",{version:3,sources:["D:/fe/other/project/fe-mock-server/web/src/pages/project-detail.vue"],names:[],mappings:"AACA,4BACE,YAAc,CACf",file:"project-detail.vue",sourcesContent:["\n.left-info[data-v-7b9dff38] {\r\n  margin-top: 0;\n}\r\n"],sourceRoot:""}])},285:function(t,e,i){e=t.exports=i(184)(),e.push([t.i,".sync-body-list[data-v-b254faf2],.sync-list[data-v-b254faf2]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.sync-list>div[data-v-b254faf2]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:45%;flex-basis:45%;margin:10px}.sync-body-list[data-v-b254faf2]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.sync-body-list>div[data-v-b254faf2]{-ms-flex-preferred-size:150px;flex-basis:150px;margin:10px}","",{version:3,sources:["D:/fe/other/project/fe-mock-server/web/src/pages/sync-api.vue"],names:[],mappings:"AACA,6DACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,cAAgB,CACrB,AACD,gCACE,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,4BAA6B,AACzB,eAAgB,AACpB,WAAa,CACd,AACD,iCACE,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CACjC,AACD,qCACE,8BAA+B,AAC3B,iBAAkB,AACtB,WAAa,CACd",file:"sync-api.vue",sourcesContent:["\n.sync-list[data-v-b254faf2], .sync-body-list[data-v-b254faf2] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\n}\n.sync-list>div[data-v-b254faf2] {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  -ms-flex-preferred-size: 45%;\r\n      flex-basis: 45%;\r\n  margin: 10px;\n}\n.sync-body-list[data-v-b254faf2] {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\n}\n.sync-body-list>div[data-v-b254faf2] {\r\n  -ms-flex-preferred-size: 150px;\r\n      flex-basis: 150px;\r\n  margin: 10px;\n}\r\n\r\n"],sourceRoot:""}])},287:function(t,e,i){e=t.exports=i(184)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"api-detail.vue",sourceRoot:""}])},308:function(t,e,i){var a=i(266);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(185)("df0ec4d8",a,!0)},314:function(t,e,i){var a=i(272);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(185)("657a3b98",a,!0)},322:function(t,e,i){var a=i(280);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(185)("18299d79",a,!0)},325:function(t,e,i){var a=i(283);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(185)("a91a8bf4",a,!0)},327:function(t,e,i){var a=i(285);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(185)("210f60e8",a,!0)},329:function(t,e,i){var a=i(287);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(185)("21fa1f3f",a,!0)},336:function(t,e,i){i(308);var a=i(12)(i(216),i(354),"data-v-252f946a",null);t.exports=a.exports},338:function(t,e,i){i(322);var a=i(12)(i(220),i(365),null,null);t.exports=a.exports},340:function(t,e,i){i(314);var a=i(12)(i(222),i(359),"data-v-468bb716",null);t.exports=a.exports},354:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",[i("p",{slot:"title"},[t._v(t._s(t.name))]),t._v(" "),i("Table",{attrs:{columns:t.columns,data:t.data,height:"300",size:"small"},on:{"on-selection-change":t.setSelection}}),t._v(" "),i("div",{staticStyle:{padding:"10px 0","text-align":"right"}},["clientSide"!=t.type?i("Button",{attrs:{type:"primary"},on:{click:function(e){t.clientDownLoadApi(t.item)}}},[t._v("提交")]):t._e()],1)],1)},staticRenderFns:[]}},359:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",{attrs:{bordered:"bordered","dis-hover":"dis-hover"}},[i("p",{slot:"title"},[t._v("\n    "+t._s(t.info.name)+"\n  ")]),t._v(" "),i("template",{slot:"extra"},[t._l(t.topBarItems,function(e){return i("a",{staticClass:"cus-card-tbar-btn",attrs:{href:"javascript:void(0)"}},[i("Icon",{attrs:{type:e.type,color:"#9ea7b4"},nativeOn:{click:function(i){t.btnAction(e.action)}}})],1)}),t._v(" "),i("Dropdown",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"click",placement:"bottom-end"}},[i("a",{attrs:{href:"javascript:void(0)"}},[i("Icon",{attrs:{type:"more",color:"#9ea7b4"}})],1),t._v(" "),i("Dropdown-menu",{slot:"list"},t._l(t.topDropdownItems,function(e){return i("Dropdown-item",{key:e.type,nativeOn:{click:function(i){t.btnAction(e.action)}}},[i("Icon",{staticClass:"cus-dw-icon",attrs:{type:e.type,color:"#9ea7b4"}}),t._v(t._s(e.name)+"\n        ")],1)}))],1)],2),t._v(" "),t._l(t.simpleItem,function(e){return i("div",{staticClass:"cus-detail-list-simple"},[i("span",[t._v(t._s(e.label)+": ")]),t._v(" "),i("span",[t._v(t._s(t.getItemVal(e)))])])}),t._v(" "),i("div",{staticClass:"cus-detail-list-json"},[i("span",[t._v("静态资源")]),t._v(" "),i("div",{staticClass:"json-list"},[t.projData.staticPath&&t.projData.staticPath.length?t._e():i("span",[t._v("未配置")]),t._v(" "),t._l(t.projData.staticPath,function(e){return i("div",[t._v(t._s(e))])})],2)]),t._v(" "),i("div",{staticClass:"cus-detail-list-json"},[i("span",[t._v("代理")]),t._v(" "),i("div",{staticClass:"json-list"},[t.projData.proxyTable&&t.projData.proxyTable.length?t._e():i("span",[t._v("未配置")]),t._v(" "),t._l(t.projData.proxyTable,function(e){return i("div",[i("span",[t._v(t._s(e.api))]),i("span",[t._v(t._s(e.target))])])})],2)]),t._v(" "),i("div",{staticClass:"cus-detail-list-json"},[i("span",[t._v("常用URL列表")]),t._v(" "),i("div",{staticClass:"json-list"},[t.projData.urls&&t.projData.urls.length?t._e():i("span",[t._v("未配置")]),t._v(" "),t._l(t.projData.urls,function(e){return e.list?i("div",{staticClass:"json-list-folder"},t._l(e.list,function(e){return i("div",{staticClass:"json-list-urls"},[i("span",[t._v(t._s(e.name))]),t._v(" "),i("a",{attrs:{href:t.getUrl(e)}},[t._v(t._s(e.url))])])})):t._e()}),t._v(" "),t._l(t.projData.urls,function(e){return e.list?t._e():i("div",{staticClass:"json-list-urls"},[i("span",[t._v(t._s(e.name))]),t._v(" "),i("a",{staticStyle:{"word-break":"break-all"},attrs:{href:t.getUrl(e),target:"_blank"}},[t._v(t._s(e.url))])])})],2)]),t._v(" "),i("div",{staticClass:"cus-detail-list-json"},[i("span",[t._v("GULP配置")]),t._v(" "),i("div",{staticClass:"json-list"},[t.projData.gulp&&Object.keys(t.projData.gulp).length?t._e():i("span",[t._v("未配置")]),t._v(" "),t._l(t.projData.gulp,function(e,a){return i("div",[i("span",[t._v(t._s(a))]),t._v(" -> "),i("span",[t._v(t._s(e))])])})],2)])],2)},staticRenderFns:[]}},365:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cus-api-detail"},[i("Card",{staticClass:"left-info",attrs:{bordered:"bordered","dis-hover":"dis-hover"}},[i("p",{slot:"title"},[t._v("\n      "+t._s(t.info.name)+"\n    ")]),t._v(" "),i("template",{slot:"extra"},t._l(t.topBarItems,function(e){return i("a",{key:e.action,staticStyle:{"margin-right":"10px"},attrs:{href:"javascript:void(0)"}},[i("Icon",{attrs:{type:e.type,color:"#9ea7b4"},nativeOn:{click:function(i){t.btnAction(e.action)}}})],1)})),t._v(" "),t._l(t.simpleItem,function(e){return i("div",{key:e.key,staticClass:"cus-detail-list-simple"},[i("span",[t._v(t._s(e.label)+": ")]),t._v(" "),i("span",[t._v(t._s(t.info[e.key]||"未配置"))])])})],2),t._v(" "),i("Card",{staticClass:"right-container",attrs:{bordered:"bordered","dis-hover":"dis-hover"}},[i("p",{slot:"title"},[i("Icon",{attrs:{type:"ios-film-outline"}}),t._v("\n        API分支列表\n    ")],1),t._v(" "),i("div",{staticClass:"right-list"},[t._l(t.info.model,function(e){return i("Card",{key:e._id,staticClass:"right-list-item"},[i("p",{slot:"title"},[t._v("\n          分支 - "+t._s(e.name)+"\n        ")]),t._v(" "),t._l(t.modelItem,function(a){return i("div",{key:a.key,staticClass:"cus-detail-list-simple"},[i("span",[t._v(t._s(a.label)+": ")]),t._v(" "),i("span",[t._v(t._s(e[a.key]||"未配置"))])])}),t._v(" "),t._l(t.modelItemPre,function(a){return i("div",{key:a.key,staticClass:"cus-detail-list-simple"},[i("span",[t._v(t._s(a.label)+": ")]),t._v(" "),i("pre",[i("code",[t._v(t._s(e[a.key]))])])])})],2)}),t._v(" "),t._l([1,2,3,4,5,6,7,8,9,10],function(t){return i("div",{key:t,staticClass:"flex-fill"})})],2)])],1)},staticRenderFns:[]}},368:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-detail"},[i("detail-project",{staticClass:"left-info",attrs:{info:t.info}}),t._v(" "),i("Card",{staticClass:"right-container",attrs:{bordered:"bordered","dis-hover":"dis-hover"}},[i("p",{slot:"title"},[i("Icon",{attrs:{type:"ios-film-outline"}}),t._v("\r\n        API列表\r\n        ")],1),i("div",{staticClass:"cus-card-left-bar"},[i("Input",{staticStyle:{width:"150px",margin:"0 10px"},attrs:{icon:"search",placeholder:"输入API名进行检索"},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}}),t._v(" "),i("a",{staticClass:"cus-action-link",staticStyle:{"margin-right":"10px"},attrs:{href:"javascript:;"},on:{click:t.addApi}},[i("Icon",{attrs:{type:"plus-round"}}),t._v(" 新建")],1),t._v(" "),i("a",{staticClass:"cus-action-link",staticStyle:{"margin-right":"10px"},attrs:{href:"javascript:;"},on:{click:t.copyApi}},[i("Icon",{attrs:{type:"arrow-down-a"}}),t._v(" 从其他项目导入")],1)],1),t._v(" "),i("p"),t._v(" "),i("template",{slot:"extra"},[i("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"},on:{click:function(e){t.pageBefore()}}},[t._v("\r\n           "),i("Icon",{attrs:{type:"chevron-left"}}),t._v(" \r\n        ")],1),t._v(" "),i("div",{staticClass:"cus-page-info"},[i("span",[t._v(t._s(t.pageInfo.pageNo+1))]),t._v("/"),i("span",[t._v(t._s(t.pageInfo.total))])]),t._v(" "),i("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"},on:{click:function(e){t.pageNext()}}},[t._v("\r\n           "),i("Icon",{attrs:{type:"chevron-right"}}),t._v(" \r\n        ")],1)]),t._v(" "),i("div",{staticClass:"right-list",staticStyle:{position:"relative",height:"100%"}},[t.loading?i("Spin",{staticStyle:{"background-color":"rgba(255, 255, 255, .3)"},attrs:{fix:""}},[i("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),t._v(" "),i("div",[t._v("Loading")])],1):t._e(),t._v(" "),t._l(t.apiList,function(e){return i("apiCard",{key:e._id,staticClass:"right-list-item card-color",attrs:{name:e.name,id:e._id,method:e.method,project:e.project,url:e.url,path:e.path,pathEqual:e.pathEqual,delay:e.delay,fixedOutput:e.fixedOutput,description:e.description,pageNo:e.pageNo},on:{delete:t.getApi}})}),t._v(" "),t._l([1,2,3,4,5,6,7,8,9,10],function(t){return i("div",{key:t,staticClass:"flex-fill"})})],2)],2)],1)},staticRenderFns:[]}},371:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sync-list"},[t._l(t.typeList,function(e){return t.list[e.key]&&t.list[e.key].length?i("syncCard",{key:e.key,attrs:{data:t.filterList(e.key),name:e.name,show:"clientSide"!==e.key},on:{submit:t.clientDownLoadApi}}):t._e()}),t._v(" "),t._l([1,2,3,4,5,6,7,8,9,10],function(t){return i("div",{key:t})})],2)},staticRenderFns:[]}},374:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("detailApi",{attrs:{info:t.info}})},staticRenderFns:[]}}});
//# sourceMappingURL=detail.28e02081.js.map