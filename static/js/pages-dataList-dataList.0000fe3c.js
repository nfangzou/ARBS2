(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dataList-dataList"],{"0fbb":function(t,i,e){"use strict";e("6a54");var n=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("2634")),s=n(e("2fdc"));e("e966"),e("c223"),e("c9b5"),e("bf0f"),e("ab80"),e("e838"),e("64aa");n(e("cc44"));var o=n(e("f77f")),r=n(e("7d26")),l=(n(e("3b3c")),e("27cb"),n(e("a2be"))),c=e("6ba0"),u={components:{wLoading:l.default,back:o.default},data:function(){return{myAddress:"",userAddress:"",Approve:!1,allowanceB:0,tabList:["home19","home20","withdrawal","list3"],tapIndex1:0,joinType:!1,joinInput:"",JoinList:[],myTeam:[],coinLog:[],myDraw:[],limitAll:0,limit:20,page:1}},onLoad:function(t){var i=this;this.userAddress=void 0==t.userAddress?"":t.userAddress;var e=this;e.Init((function(){uni.setStorageSync("address",i.myAddress);var t=new e.ethers.providers.Web3Provider(window.ethereum);e.contract=new e.ethers.Contract(e.contractAddress,r.default,t.getSigner()),e.getMyJoinList()}))},onReachBottom:function(){this.limitAll>this.page&&(this.page++,0==this.tapIndex1?this.getMyJoinList():1==this.tapIndex1?this.getMyTeam():2==this.tapIndex1?this.getMyDraw():this.getMyCoinLog())},methods:{coinType:function(t){return 1==t?this.$t("fromData1"):2==t?this.$t("fromData2"):3==t?this.$t("fromData3"):4==t?this.$t("fromData4"):this.$t("fromData5")},backOn:function(){uni.navigateBack()},plusXing2:function(t){if(0==t.length)return"";t.length;for(var i="",e=0;e<3;e++)i+="*";return t.substring(0,4)+i+t.substring(t.length-4)},pageCount:function(t,i){return t>0?t<i?1:t%i?parseInt(t/i)+1:t/i:0},getMyDraw:function(){var t=this;(0,c.getMyDraw)({page:this.page,limit:20,address:this.myAddress}).then((function(i){0==i.code&&(t.myDraw=t.myDraw.concat(i.data),t.limitAll=t.pageCount(i.num,t.limit))}))},getMyCoinLog:function(){var t=this;(0,c.getMyCoinLog)({page:this.page,limit:20,address:this.myAddress}).then((function(i){0==i.code&&(t.coinLog=t.coinLog.concat(i.data),t.limitAll=t.pageCount(i.num,t.limit))}))},getMyTeam:function(){var t=this;(0,c.getMyTeam)({page:this.page,limit:20,address:this.myAddress}).then((function(i){0==i.code&&(t.myTeam=t.myTeam.concat(i.data),t.limitAll=t.pageCount(i.num,t.limit))}))},getMyJoinList:function(){var t=this;(0,c.getMyJoinList)({page:this.page,limit:20,address:this.myAddress}).then((function(i){0==i.code&&(t.JoinList=t.JoinList.concat(i.data),t.limitAll=t.pageCount(i.num,t.limit))}))},debounceClick:function(t){var i=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){i.clickTap(t)}),200)},clickTap:function(t){this.tapIndex1=t,this.page=1,this.JoinList=[],this.myTeam=[],this.coinLog=[],this.myDraw=[],0==t?this.getMyJoinList():1==t?this.getMyTeam():2==t?this.getMyDraw():this.getMyCoinLog()},clickBing:function(){this.$refs.popup1.open()},getMsg:function(t){var i="zh-CN"==this._i18n.locale?"en-US":"zh-CN";uni.setStorageSync("language",i),this._i18n.locale=i},mobileFilter1:function(t){var i=t.toString();return i},mobileFilter2:function(t){var i=t.toString(),e=this.ethers.utils.formatUnits(i);return parseInt(e)===parseFloat(e)?parseInt(e):Number(e).toFixed(4)},formatDate:function(t){var i=1e3*t;(new Date).getTime(),t=new Date;t.setTime(i);var e=t.getFullYear(),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,a=t.getDate()<10?"0"+t.getDate():t.getDate(),s=t.getHours()<10?"0"+t.getHours():t.getHours(),o=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),r=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),l=e+"-"+n+"-"+a+" "+s+":"+o+":"+r;return l},Init:function(t){var i=this;return(0,s.default)((0,a.default)().mark((function e(){var n,s;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("undefined"!==typeof window.ethereum){e.next=4;break}console.log("请安装MetaMask"),e.next=10;break;case 4:return n=new i.ethers.providers.Web3Provider(window.ethereum),e.next=7,n.send("eth_requestAccounts",[]);case 7:s=e.sent,i.myAddress=s[0],t();case 10:case"end":return e.stop()}}),e)})))()}}};i.default=u},"132b":function(t,i,e){"use strict";e.r(i);var n=e("9328"),a=e("4a4c");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("c50d");var o=e("828b"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"aa055056",null,!1,n["a"],void 0);i["default"]=r.exports},"1cfb":function(t,i,e){var n=e("c86c"),a=e("2ec5b"),s=e("3d37");i=n(!1);var o=a(s);i.push([t.i,".content[data-v-aa055056]{width:100%;height:100%;background-image:url("+o+");background-size:100% 100%;min-height:100vh;box-sizing:border-box;padding:0 %?30?% %?10?% %?30?%}.joinList[data-v-aa055056]{margin-top:%?30?%}.joinList .titleTab[data-v-aa055056]{display:flex;justify-content:space-between;align-items:center}.joinList .titleTab .tabName[data-v-aa055056]{width:50%;height:%?92?%;line-height:%?92?%;text-align:center}.joinList .titleTab .tapActive[data-v-aa055056]{background-color:#0070c0;color:#fff}.joinList .titleTab .tapNoActive[data-v-aa055056]{background-color:#fff;color:#666}.joinList .listType[data-v-aa055056]{background-color:#fff;border-bottom-left-radius:%?30?%;border-bottom-right-radius:%?30?%;border:%?4?% solid #0070c0}.joinList .listType .listTitle[data-v-aa055056]{height:%?66?%;line-height:%?66?%;display:flex;justify-content:space-between;align-items:center;background-color:#c7e6fc;padding:0 %?34?%}.joinList .listType .listTitle uni-text[data-v-aa055056]{width:33.3%;padding:%?10?% 0;text-align:center;font-family:SimHei;font-weight:400;font-size:%?28?%;color:#333}.joinList .listType .listShy[data-v-aa055056]{padding:%?15?% %?34?%}.joinList .listType .listShy .listOne[data-v-aa055056]{display:flex;justify-content:space-between;align-items:center;border-bottom:%?2?% solid #c5c4cf;height:%?83?%}.joinList .listType .listShy .listOne uni-text[data-v-aa055056]{width:33.3%;padding:%?10?% 0;text-align:center;font-family:SimHei;font-weight:400;font-size:%?30?%;color:#333}.joinList .listType .listShy .listOne[data-v-aa055056]:last-child{border:0}.joinList .listType .endMore[data-v-aa055056]{width:100%;height:%?89?%;line-height:%?89?%;display:flex;justify-content:center;font-family:SimHei;font-weight:400;font-size:%?28?%;color:#333}.backOn uni-image[data-v-aa055056]{width:%?80?%;height:%?80?%}.listTitle1 uni-text[data-v-aa055056]{width:25%!important}.listShy1[data-v-aa055056]{padding:0 %?34?%}.listShy1 .listOne1[data-v-aa055056]{display:flex;justify-content:space-between;align-items:center;border-bottom:%?2?% solid #c5c4cf;height:%?83?%}.listShy1 .listOne1 uni-text[data-v-aa055056]{width:25%!important;padding:%?10?% 0;text-align:center;font-family:SimHei;font-weight:400;font-size:%?30?%;color:#333}.listTitle2 uni-text[data-v-aa055056]{width:50%!important}.listShy2[data-v-aa055056]{padding:0 %?34?%}.listShy2 .listOne2[data-v-aa055056]{display:flex;justify-content:space-between;align-items:center;border-bottom:%?2?% solid #c5c4cf;height:%?83?%}.listShy2 .listOne2 uni-text[data-v-aa055056]{width:50%!important;padding:%?10?% 0;text-align:center;font-family:SimHei;font-weight:400;font-size:%?30?%;color:#333}",""]),t.exports=i},"4a4c":function(t,i,e){"use strict";e.r(i);var n=e("0fbb"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},9328:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"content"},[n("back",{ref:"child",attrs:{text:t.myAddress,type:"true",classType:"true",subheading:"true"},on:{getMsg:function(i){arguments[0]=i=t.$handleEvent(i),t.getMsg.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"backOn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.backOn.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:e("aacd"),mode:""}})],1),n("v-uni-view",{staticClass:"joinList"},[n("v-uni-view",{staticClass:"titleTab"},t._l(t.tabList,(function(i,e){return n("v-uni-view",{key:e,staticClass:"tabName",class:[t.tapIndex1==e?"tapActive":"tapNoActive"],style:{borderTopLeftRadius:0==e?"30rpx":"0",borderTopRightRadius:3==e?"30rpx":"0"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.debounceClick(e)}}},[t._v(t._s(t.$t(i)))])})),1),0==t.tapIndex1?n("v-uni-view",{staticClass:"listType"},[n("v-uni-view",{staticClass:"listTitle"},[n("v-uni-text",[t._v(t._s(t.$t("home10")))]),n("v-uni-text",[t._v(t._s(t.$t("fromData7")))]),n("v-uni-text",[t._v(t._s(t.$t("home12")))])],1),n("v-uni-view",{staticClass:"listShy"},t._l(t.JoinList,(function(i){return n("v-uni-view",{staticClass:"listOne"},[n("v-uni-text",[t._v(t._s(i.inputAmount))]),n("v-uni-text",[t._v(t._s(i.changeAmount))]),n("v-uni-text",[t._v(t._s(t.formatDate(i.logTime)))])],1)})),1)],1):t._e(),1==t.tapIndex1?n("v-uni-view",{staticClass:"listType"},[n("v-uni-view",{staticClass:"listTitle listTitle1"},[n("v-uni-text",[t._v(t._s(t.$t("list1")))]),n("v-uni-text",[t._v(t._s(t.$t("home10")))]),n("v-uni-text",{staticStyle:{width:"15% !important"}},[t._v(t._s(t.$t("list2")))]),n("v-uni-text",{staticStyle:{width:"35% !important"}},[t._v(t._s(t.$t("home12")))])],1),n("v-uni-view",{staticClass:"listShy listShy1"},t._l(t.myTeam,(function(i){return n("v-uni-view",{staticClass:"listOne listOne1"},[n("v-uni-text",[t._v(t._s(t.plusXing2(i.userAddress)))]),n("v-uni-text",[t._v(t._s(i.inputAmount))]),n("v-uni-text",{staticStyle:{width:"15% !important"}},[t._v(t._s(i.teamLevel))]),n("v-uni-text",{staticStyle:{width:"35% !important"}},[t._v(t._s(t.formatDate(i.regTime)))])],1)})),1)],1):t._e(),2==t.tapIndex1?n("v-uni-view",{staticClass:"listType"},[n("v-uni-view",{staticClass:"listTitle listTitle2"},[n("v-uni-text",[t._v(t._s(t.$t("list4")))]),n("v-uni-text",[t._v(t._s(t.$t("home12")))])],1),n("v-uni-view",{staticClass:"listShy listShy2"},t._l(t.myDraw,(function(i){return n("v-uni-view",{staticClass:"listOne listOne2"},[n("v-uni-text",[t._v(t._s(i.drawAmount))]),n("v-uni-text",[t._v(t._s(t.formatDate(i.logTime)))])],1)})),1)],1):t._e(),3==t.tapIndex1?n("v-uni-view",{staticClass:"listType"},[n("v-uni-view",{staticClass:"listTitle"},[n("v-uni-text",[t._v(t._s(t.$t("list4")))]),n("v-uni-text",[t._v(t._s(t.$t("list5")))]),n("v-uni-text",[t._v(t._s(t.$t("home12")))])],1),n("v-uni-view",{staticClass:"listShy listShy1"},t._l(t.coinLog,(function(i){return n("v-uni-view",{staticClass:"listOne"},[n("v-uni-text",[t._v(t._s(i.changeNum))]),n("v-uni-text",[t._v(t._s(t.coinType(i.changeType)))]),n("v-uni-text",[t._v(t._s(t.formatDate(i.logTime)))])],1)})),1)],1):t._e()],1)],1)},a=[]},aacd:function(t,i,e){t.exports=e.p+"static/backIcon.png"},c50d:function(t,i,e){"use strict";var n=e("ce83"),a=e.n(n);a.a},ce83:function(t,i,e){var n=e("1cfb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("50f9205f",n,!0,{sourceMap:!1,shadowMode:!1})}}]);