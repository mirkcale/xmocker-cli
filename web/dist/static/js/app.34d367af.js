webpackJsonp([4],{100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(52),i=n.n(r),a=n(11),o=n(77),s=n.n(o),c=n(72),u=n(44),l=n(76),f=n.n(l),p=n(74),d=(n.n(p),n(71)),m=n(75),h=(n.n(m),n(70),n(73));a.default.use(f.a),a.default.prototype.$socket=new h.a(u.a),a.default.config.productionTip=!1,a.default.mixin(i()({},d.a)),new a.default({el:"#app",router:c.a,store:u.a,template:"<App/>",components:{App:s.a}})},101:function(t,e){},102:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"cartProducts",function(){return r});var r=function(t){}},103:function(t,e,n){"use strict";var r,i=n(80),a=n.n(i),o=n(21),s=n.n(o),c=n(53),u=n.n(c),l=n(29),f=n.n(l),p=n(51),d=n.n(p),m=n(28),h={SET_LOGS:"SET_LOGS",ADD_LOGS:"ADD_LOGS",GET_LOGS:"GET_LOGS",CLEAR_LOGS:"CLEAR_LOGS"},v={error:{list:[],pageNo:0,total:0,isOver:!1,lastTime:""},his:{list:[],pageNo:0,total:0,isOver:!1,lastTime:""},proxy:{list:[],pageNo:0,total:0,isOver:!1,lastTime:""},record:{list:[],pageNo:0,total:0,isOver:!1,lastTime:""},collector:{list:[],pageNo:0,total:0,isOver:!1,lastTime:""}},_={},b=s()({},h.GET_LOGS,function(t,e){var r=this,i=(t.dispatch,t.state),a=t.commit,o=e.type,s=e.search,c=e.refresh;return d()(u.a.mark(function t(){var e,l,p;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i[o],c&&a(h.CLEAR_LOGS,{type:o}),!e.isOver){t.next=4;break}return t.abrupt("return");case 4:return l=f()({},s,{type:o,pageNo:e.pageNo,pageSize:20}),t.next=7,n.i(m.G)(l).catch(function(t){return console.log(t)});case 7:if(p=t.sent,!p.code){t.next=10;break}return t.abrupt("return");case 10:a(h.SET_LOGS,{type:o,data:p.data});case 11:case"end":return t.stop()}},t,r)}))()}),g=(r={},s()(r,h.SET_LOGS,function(t,e){var n,r=e.type,i=e.data,o=t[r];(n=o.list).push.apply(n,a()(i.list)),o.pageNo=i.pagination.pageNo+1,o.total=i.pagination.total,Math.floor(o.total/20)<o.pageNo&&(o.isOver=!0),o.lastTime=o.list.length?o.list.reduce(function(t,e){return t.time<e.time?e:t}).time:""}),s()(r,h.CLEAR_LOGS,function(t,e){var n=e.type,r=t[n];r.list.splice(0,r.list.length),r.pageNo=0,r.total=0,r.isOver=!1,r.lastTime=""}),s()(r,h.ADD_LOGS,function(t,e){var n=e.logType,r=t[n];r.list.unshift(e.data),r.lastTime=e.data.time}),r);e.a={namespaced:!0,state:v,getters:_,actions:b,mutations:g}},104:function(t,e,n){"use strict";var r,i=n(21),a=n.n(i),o=n(53),s=n.n(o),c=n(51),u=n.n(c),l={SET_PROJECT_LIST:"SET_PROJECT_LIST",CHECK_PROJECT_LIST:"CHECK_PROJECT_LIST",INCREMENT:"INCREMENT",SET_PAGE_SIZE:"SET_PAGE_SIZE"},f={list:[],pageSize:6,pageNo:0},p={selector:function(t){return t.list.map(function(t){return{name:t.name,id:t._id}})},pagedList:function(t){return t.list.slice(t.pageNo*t.pageSize,t.pageNo*t.pageSize+t.pageSize)},totalSize:function(t){return Math.ceil(t.list.length/t.pageSize)},reachLast:function(t){return(t.pageNo+1)*t.pageSize>=t.list.length},reachZero:function(t){return t.pageNo<=0}},d=a()({},l.CHECK_PROJECT_LIST,function(t,e){var n=this;t.dispatch;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getProjectList();case 2:case"end":return t.stop()}},t,n)}))()}),m=(r={},a()(r,l.SET_PROJECT_LIST,function(t,e){t.list=e}),a()(r,l.INCREMENT,function(t,e){e>0&&p.reachLast(t)||e<0&&p.reachZero(t)||(t.pageNo+=e)}),a()(r,l.SET_PAGE_SIZE,function(t,e){t.pageSize=e}),r);e.a={namespaced:!0,state:f,getters:p,actions:d,mutations:m}},107:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(21),i=n.n(r);e.default={props:{prefixCls:{type:String,default:""},duration:{type:Number,default:1.5},type:{type:String},content:{type:String,default:""},styles:{type:Object,default:function(){return{right:"50%"}}},closable:{type:Boolean,default:!1},className:{type:String},name:{type:String,required:!0},onClose:{type:Function},transitionName:{type:String}},data:function(){return{withDesc:!1}},computed:{baseClass:function(){return this.prefixCls+"-notice"},classes:function(){var t;return[this.baseClass,(t={},i()(t,""+this.className,!!this.className),i()(t,this.baseClass+"-closable",this.closable),i()(t,this.baseClass+"-with-desc",this.withDesc),t)]},contentClasses:function(){return this.baseClass+"-content"}},methods:{clearCloseTimer:function(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close:function(){this.clearCloseTimer(),this.onClose(),this.$parent.close(this.name)}},mounted:function(){var t=this;this.clearCloseTimer(),0!==this.duration&&(this.closeTimer=setTimeout(function(){t.close()},1e3*this.duration)),"ivu-notice"===this.prefixCls&&(this.withDesc=""!==this.$refs.content.querySelectorAll("."+this.prefixCls+"-desc")[0].innerHTML)},beforeDestroy:function(){this.clearCloseTimer()}}},108:function(t,e,n){"use strict";function r(){return"ivuNotification_"+f+"_"+l++}Object.defineProperty(e,"__esModule",{value:!0});var i=n(29),a=n.n(i),o=n(21),s=n.n(o),c=n(173),u=n.n(c),l=0,f=Date.now();e.default={components:{Notice:u.a},props:{prefixCls:{type:String,default:"ivu-notification"},styles:{type:Object,default:function(){return{top:"65px",left:"50%"}}},content:{type:String},className:{type:String}},data:function(){return{notices:[]}},computed:{classes:function(){return[""+this.prefixCls,s()({},""+this.className,!!this.className)]}},methods:{add:function(t){var e=t.name||r(),n=a()({styles:{right:"50%"},content:"",duration:1.5,closable:!1,name:e},t);this.notices.push(n)},close:function(t){for(var e=this.notices,n=0;n<e.length;n++)if(e[n].name===t){this.notices.splice(n,1);break}},closeAll:function(){this.notices=[]}}}},109:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(28);e.default={name:"app",created:function(){this.initSocket()},watch:{"$store.state.collectorToast":function(t){var e=t[t.length-1];this.toastCollector(e)}},methods:{initSocket:function(){var t=this;n.i(r.a)().then(function(e){var n=6001;e.code||(n=e.data.managePort||6001),t.$socket.init({port:n})})},toastCollector:function(t){var e=t.client.device||{},n=t.client.browser||{},r=t.client.os||{},i=t.err||{},a="";a+="IP地址："+t.ip,a+="<br>设备："+e.vendor+" -- "+e.model,a+="<br>浏览器："+n.name+" -- "+n.version,a+="<br>系统："+r.name+" -- "+r.version,a+="<br>错误详情："+i.msg+"<br>行号："+i.lineno+"<br>列号："+i.colno+"<br>"+(i.stack||""),this.$Notice.error({title:"客户端上传错误提示",desc:a})}}}},110:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page-action-project-list",data:function(){return{}},methods:{projectNext:function(t,e){this.$store.commit("project/INCREMENT",e)}}}},111:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page-action-project-list",data:function(){return{}},computed:{pageNo:function(){return this.$store.state.project.pageNo+1},total:function(){return this.$store.getters["project/totalSize"]}},methods:{projectNext:function(t,e){this.$store.commit("project/INCREMENT",e)},addProject:function(){this.$router.push({name:"项目编辑"})}}}},112:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"layout-default",data:function(){return{shrink:!0}},created:function(){var t=window.localStorage.getItem("layout-toggle");this.shrink=!!t},computed:{actionBar:function(){return this.$store.state.actionBar},actived:function(){return this.$route.path.slice(1)||"index"},iconSize:function(){return 5===this.spanLeft?14:24},breadList:function(){return this.$route.meta.breadList||this.$store.state.breadList}},methods:{selectMenu:function(t){this.$router.push({name:t})},toggleClick:function(){this.shrink=!this.shrink,window.localStorage.setItem("layout-toggle",this.shrink?1:"")},breadClick:function(t,e){var n=this.breadList.length-e-1;n>=1&&this.$router.go(-n)}}}},161:function(t,e){},162:function(t,e){},163:function(t,e){},164:function(t,e){},170:function(t,e,n){n(161);var r=n(12)(n(110),n(175),null,null);t.exports=r.exports},171:function(t,e,n){n(164);var r=n(12)(n(111),n(177),null,null);t.exports=r.exports},172:function(t,e,n){n(163),n(162);var r=n(12)(n(112),n(176),"data-v-1a352890",null);t.exports=r.exports},173:function(t,e,n){var r=n(12)(n(107),n(178),null,null);t.exports=r.exports},174:function(t,e,n){var r=n(12)(n(108),n(179),null,null);t.exports=r.exports},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block",float:"right"}},[n("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"}},[t._v("新增API")]),t._v(" "),n("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"}},[t._v("搜索")]),t._v(" "),n("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"},on:{click:function(e){t.projectNext(e,-1)}}},[t._v("上一页")]),t._v(" "),n("span",[t._v("0")]),t._v("/"),n("span",[t._v("0")]),t._v(" "),n("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"},on:{click:function(e){t.projectNext(e,1)}}},[t._v("下一页")])])},staticRenderFns:[]}},176:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"layout-menu-left",class:{shrink:t.shrink}},[n("Menu",{staticClass:"layout-menu-list",attrs:{"active-name":t.actived,width:"auto"}},[n("li",{staticClass:"toggle-button",staticStyle:{color:"#3d3d3d"},on:{click:t.toggleClick}},[n("Icon",{attrs:{type:"navicon",size:"24"}})],1),t._v(" "),n("Menu-item",{attrs:{name:"search"},nativeOn:{click:function(e){t.selectMenu("搜索")}}},[n("Icon",{attrs:{type:"search",size:"18"}}),t._v(" "),n("span",{staticClass:"layout-text"},[t._v("搜索")])],1),t._v(" "),n("Menu-item",{attrs:{name:"projectList"},nativeOn:{click:function(e){t.selectMenu("项目列表")}}},[n("Icon",{attrs:{type:"ios-keypad",size:"18"}}),t._v(" "),n("span",{staticClass:"layout-text"},[t._v("项目列表")])],1),t._v(" "),n("Menu-item",{attrs:{name:"config"},nativeOn:{click:function(e){t.selectMenu("基础配置")}}},[n("Icon",{attrs:{type:"gear-b",size:"18"}}),t._v(" "),n("span",{staticClass:"layout-text"},[t._v("配置")])],1),t._v(" "),n("Menu-item",{attrs:{name:"syncList"},nativeOn:{click:function(e){t.selectMenu("同步")}}},[n("Icon",{attrs:{type:"arrow-swap",size:"18"}}),t._v(" "),n("span",{staticClass:"layout-text"},[t._v("同步")])],1),t._v(" "),n("Menu-item",{attrs:{name:"log"},nativeOn:{click:function(e){t.selectMenu("日志")}}},[n("Icon",{attrs:{type:"bug",size:"18"}}),t._v(" "),n("span",{staticClass:"layout-text"},[t._v("日志")])],1),t._v(" "),n("Menu-item",{attrs:{name:"about"},nativeOn:{click:function(e){t.selectMenu("关于")}}},[n("Icon",{attrs:{type:"information-circled",size:"18"}}),t._v(" "),n("span",{staticClass:"layout-text"},[t._v("关于")])],1)],1)],1),t._v(" "),n("div",{staticClass:"layout-right"},[n("div",{staticClass:"layout-breadcrumb"},[n("Breadcrumb",t._l(t.breadList,function(e,r){return n("Breadcrumb-item",{key:r,attrs:{href:""},nativeOn:{click:function(n){t.breadClick(e,r)}}},[t._v(t._s(e.name))])}))],1),t._v(" "),n("div",{staticClass:"layout-content"},[n("transition",{attrs:{name:"scale-out",mode:"out-in"}},[n("router-view")],1)],1)])])},staticRenderFns:[]}},177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block",float:"right"}},[n("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"},on:{click:t.addProject}},[t._v("新增项目")]),t._v(" "),n("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"}},[t._v("搜索")]),t._v(" "),n("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"},on:{click:function(e){t.projectNext(e,-1)}}},[t._v("上一页")]),t._v(" "),n("div",{staticClass:"cus-page-info"},[n("span",[t._v(t._s(t.pageNo))]),t._v("/"),n("span",[t._v(t._s(t.total))])]),t._v(" "),n("a",{staticClass:"cus-action-link",attrs:{href:"javascript:;"},on:{click:function(e){t.projectNext(e,1)}}},[t._v("下一页")])])},staticRenderFns:[]}},178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transitionName}},[n("div",{class:t.classes,style:t.styles},["notice"===t.type?[n("div",{ref:"content",class:[t.baseClass+"-content"],domProps:{innerHTML:t._s(t.content)}}),t._v(" "),t.closable?n("a",{class:[t.baseClass+"-close"],on:{click:t.close}},[n("i",{staticClass:"ivu-icon ivu-icon-ios-close-empty"})]):t._e()]:t._e(),t._v(" "),"message"===t.type?[n("div",{ref:"content",class:[t.baseClass+"-content"]},[n("div",{class:[t.baseClass+"-content-text"],domProps:{innerHTML:t._s(t.content)}}),t._v(" "),t.closable?n("a",{class:[t.baseClass+"-close"],on:{click:t.close}},[n("i",{staticClass:"ivu-icon ivu-icon-ios-close-empty"})]):t._e()])]:t._e()],2)])},staticRenderFns:[]}},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes,style:t.styles},t._l(t.notices,function(e){return n("Notice",{key:e.name,attrs:{"prefix-cls":t.prefixCls,styles:e.styles,type:e.type,content:e.content,duration:e.duration,closable:e.closable,name:e.name,"transition-name":e.transitionName,"on-close":e.onClose}})}))},staticRenderFns:[]}},180:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},28:function(t,e,n){"use strict";n.d(e,"t",function(){return u}),n.d(e,"u",function(){return l}),n.d(e,"i",function(){return f}),n.d(e,"s",function(){return p}),n.d(e,"v",function(){return d}),n.d(e,"c",function(){return m}),n.d(e,"w",function(){return h}),n.d(e,"F",function(){return v}),n.d(e,"d",function(){return _}),n.d(e,"e",function(){return b}),n.d(e,"f",function(){return g}),n.d(e,"y",function(){return y}),n.d(e,"x",function(){return C}),n.d(e,"A",function(){return S}),n.d(e,"g",function(){return T}),n.d(e,"z",function(){return L}),n.d(e,"h",function(){return E}),n.d(e,"j",function(){return N}),n.d(e,"B",function(){return k}),n.d(e,"C",function(){return j}),n.d(e,"D",function(){return O}),n.d(e,"k",function(){return x}),n.d(e,"E",function(){return P}),n.d(e,"p",function(){return w}),n.d(e,"n",function(){return I}),n.d(e,"q",function(){return M}),n.d(e,"r",function(){return A}),n.d(e,"o",function(){return R}),n.d(e,"l",function(){return $}),n.d(e,"a",function(){return G}),n.d(e,"m",function(){return D}),n.d(e,"G",function(){return z}),n.d(e,"b",function(){return q});var r=n(20),i=n.n(r),a=n(82),o=n.n(a),s=n(106),c=o.a.create({baseURL:"/mock"});c.interceptors.response.use(function(t){return t.data.code&&s.a.error(t.data.message),t.data},function(t){return i.a.reject(t)});var u=function(t){return c.put("/lib",t)},l=function(t){return c.post("/lib",t)},f=function(t){return c.request({url:"/lib",params:t})},p=function(t){return c.request({url:"/libDetail",params:t})},d=function(t){return c.request({url:"/lib",method:"delete",params:t})},m=function(t){return c.put("/project",t)},h=function(t){return c.post("/project",t)},v=function(t){return c.request({url:"/project",params:t})},_=function(t){return c.request({url:"/project",method:"delete",params:t})},b=function(t){return c.put("/startProject",t)},g=function(t){return c.put("/stopProject",t)},y=function(t){return c.request({url:"/api",params:t})},C=function(t){return c.request({url:"/search/api",params:t})},S=function(t){return c.request({url:"/apiDetail",params:t})},T=function(t){return c.put("/apiBase",t)},L=function(t){return c.put("/copyApi",t)},E=function(t){return c.put("/apiStatus",t)},N=function(t){return c.request({url:"/apiModelList",params:t})},k=function(t){return c.post("/apiBase",t)},j=function(t){return c.put("/apiModel",t)},O=function(t){return c.post("/apiModel",t)},x=function(t){return c.request({url:"/api",method:"delete",params:t})},P=function(t){return c.request({url:"/apiModel",method:"delete",params:t})},w=function(t){return c.request({url:"/clientGetProjDiff",params:t})},I=function(t){return c.request({url:"/clientGetApiDiff",params:t})},M=function(t){return c.put("/clientDownLoadProjBase",t)},A=function(t){return c.put("/clientDownLoadProj",t)},R=function(t){return c.put("/clientDownLoadApi",t)},$=function(t){return c.put("/appBase",t)},G=function(t){return c.request({url:"/appBase",params:t})},D=function(t){return c.put("/upgradeV0",t)},z=function(t){return c.request({url:"/log",params:t})},q=function(t){return c.request({url:"/search",params:t})}},44:function(t,e,n){"use strict";var r=n(11),i=n(183),a=n(101),o=(n.n(a),n(102)),s=n(104),c=n(103);r.default.use(i.a);var u={actionBar:"",breadList:[],collectorToast:[]},l={SET_ACTIONBAR:function(t,e){t.actionBar=e},SET_BREADLIST:function(t,e){var n=e.map(function(t){return"string"==typeof t?{name:t,href:-1}:t});t.breadList=n},COLLECTOR_TOAST:function(t,e){t.collectorToast.push(e.data)}};e.a=new i.a.Store({state:u,actions:a,getters:o,mutations:l,modules:{project:s.a,log:c.a},strict:!1})},70:function(t,e,n){"use strict";var r=n(11);r.default.component("project-list-action",n(171)),r.default.component("project-detail-action",n(170))},71:function(t,e,n){"use strict";var r=n(79),i=n.n(r),a=n(20),o=n.n(a),s=n(28);e.a={methods:{getProjectList:function(){var t=this;return n.i(s.F)({pageSize:5e3}).then(function(e){e.code||(e.data.list.sort(function(t,e){return t.status?0:e.status?1:0}),t.$store.commit("project/SET_PROJECT_LIST",e.data.list))})},checkProjectList:function(){return this.$store.state.project.list.length?o.a.resolve():this.freshProject()},freshProject:function(){return this.$store.dispatch("project/CHECK_PROJECT_LIST",this)},btnAction:function(t){"function"==typeof this[t]&&this[t]()},copyToObj:function(t,e,n){i()(t).forEach(function(n){void 0!==e[n]&&(t[n]=e[n])}),n&&n.forEach(function(n){"string"==typeof n?void 0!==e[n]&&(t[n]=e[n]):void 0!==e[n[1]]&&(t[n[0]]=e[n[1]])})}}}},72:function(t,e,n){"use strict";var r=n(11),i=n(181),a=n(44);r.default.use(i.a);var o=function(t){return n.e(1).then(function(){return t(n(189))}.bind(null,n)).catch(n.oe)},s=function(t){return n.e(2).then(function(){return t(n(188))}.bind(null,n)).catch(n.oe)},c=function(t){return n.e(0).then(function(){return t(n(187))}.bind(null,n)).catch(n.oe)},u=function(t){return n.e(0).then(function(){return t(n(196))}.bind(null,n)).catch(n.oe)},l=function(t){return n.e(2).then(function(){return t(n(194))}.bind(null,n)).catch(n.oe)},f=function(t){return n.e(1).then(function(){return t(n(195))}.bind(null,n)).catch(n.oe)},p=function(t){return n.e(1).then(function(){return t(n(192))}.bind(null,n)).catch(n.oe)},d=function(t){return n.e(0).then(function(){return t(n(200))}.bind(null,n)).catch(n.oe)},m=function(t){return n.e(2).then(function(){return t(n(199))}.bind(null,n)).catch(n.oe)},h=function(t){return n.e(1).then(function(){return t(n(190))}.bind(null,n)).catch(n.oe)},v=function(t){return n.e(0).then(function(){return t(n(191))}.bind(null,n)).catch(n.oe)},_=function(t){return n.e(0).then(function(){return t(n(198))}.bind(null,n)).catch(n.oe)},b=function(t){return n.e(0).then(function(){return t(n(197))}.bind(null,n)).catch(n.oe)},g=function(t){return n.e(0).then(function(){return t(n(186))}.bind(null,n)).catch(n.oe)},y=function(t){return n.e(0).then(function(){return t(n(193))}.bind(null,n)).catch(n.oe)},C=new i.a({routes:[{path:"/",component:n(172),children:[{path:"/index",name:"首页",component:v,meta:{breadList:[{name:"首页",menuName:"首页"}]}},{path:"apiEditor",name:"API编辑",component:o},{path:"apiDetail",name:"API详情",component:s,meta:{breadList:[{name:"项目列表",menuName:"项目列表"},{name:"项目详情"},{name:"API详情"}]}},{path:"apiCopy",name:"API复制",component:c,meta:{breadList:[{name:"项目列表",menuName:"项目列表"},{name:"项目详情"},{name:"API复制"}]}},{path:"projectList",name:"项目列表",component:u,alias:"/",meta:{breadList:[{name:"项目列表",menuName:"项目列表"}]}},{path:"projectDetail",name:"项目详情",component:l,meta:{breadList:[{name:"项目列表",menuName:"项目列表"},{name:"项目详情"}]}},{path:"projectEditor",name:"项目编辑",component:f},{path:"libEditor",name:"模板编辑",component:p},{path:"syncList",name:"同步",component:d,meta:{breadList:[{name:"同步",menuName:"同步"}]}},{path:"syncApi",name:"同步API",component:m,meta:{breadList:[{name:"同步",menuName:"同步"},{name:"API"}]}},{path:"search",name:"搜索",component:_,meta:{breadList:[{name:"搜索",menuName:"搜索"}]}},{path:"search/detail",name:"搜索详情",component:b,meta:{breadList:[{name:"搜索",menuName:"搜索"},{name:"搜索详情"}]}},{path:"config",name:"基础配置",component:h,meta:{breadList:[{name:"基础配置",menuName:"基础配置"}]}},{path:"log",name:"日志",component:y,meta:{breadList:[{name:"日志",menuName:"日志"}]}},{path:"about",name:"关于",component:g,meta:{breadList:[{name:"关于",menuName:"关于"}]}}]}]});C.beforeEach(function(t,e,n){return a.a.commit("SET_ACTIONBAR",t.meta.actionBar),n()}),e.a=C},73:function(t,e,n){"use strict";var r=n(78),i=n.n(r),a=n(20),o=n.n(a),s=n(116),c=n.n(s),u=n(117),l=n.n(u),f=function(){function t(e){c()(this,t),this.container={},this.store=e,this.unSendList=[]}return l()(t,[{key:"init",value:function(t){var e=this,n=t.port,r=void 0===n?6001:n,i=void 0,a="https:"===window.location.protocol?"wss://"+window.location.hostname+":"+r+"/mock":"ws://"+window.location.hostname+":"+r+"/mock";i=new WebSocket(a),i.onopen=function(t){e.socket=i,e.unSendList.length&&e.unSendList.forEach(function(t){e.socket.send(t)}),e.unSendList=[],i.onmessage=function(t){try{var n=JSON.parse(t.data)}catch(t){}if(n){var r=n.id;if(r){var i=e.container[r];if(!i)return;i.resolve(n),delete e.container[r]}else e.savePush(n)}}},i.onclose=function(t){setTimeout(e.init,5e3)},i.onerror=function(t){}}},{key:"send",value:function(t){var e=this;return new o.a(function(n,r){t.id=+new Date,e.container[t.id]={resolve:n,reject:r};var a=i()(t);e.socket?e.socket.send(a):e.unSendList.push(a)})}},{key:"savePush",value:function(t){var e=t.type,n=t.action;this.store.commit(e+"/"+n,t),"collector"===t.logType&&this.store.commit("COLLECTOR_TOAST",t)}}]),t}();e.a=f},74:function(t,e){},75:function(t,e){},77:function(t,e,n){var r=n(12)(n(109),n(180),null,null);t.exports=r.exports}},[100]);
//# sourceMappingURL=app.34d367af.js.map