(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43e7889a"],{"28e0":function(t,a,e){},"5cd8":function(t,a,e){"use strict";e("99af");var n=e("b775"),i="/donation";a["a"]={getPageList:function(t,a,e){return Object(n["a"])({url:"".concat(i,"/").concat(t,"/").concat(a),method:"get",params:e})}}},"718e":function(t,a,e){"use strict";e("28e0")},db86:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"search-div"},[e("el-form",{attrs:{"label-width":"70px",size:"small"}},[e("el-row",[e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"流水号"}},[e("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"根据捐赠流水号搜索"},model:{value:t.searchObj.donationId,callback:function(a){t.$set(t.searchObj,"donationId",a)},expression:"searchObj.donationId"}})],1)],1)],1),e("el-row",{staticStyle:{display:"flex"}},[e("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini",loading:t.isLoading},on:{click:function(a){return t.fetchData()}}},[t._v("搜 索")]),e("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:function(a){return t.resetData()}}},[t._v("重 置")])],1)],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tableData,stripe:""}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e("el-form-item",{attrs:{label:"捐赠物品"}},[e("span",[t._v(t._s(a.row.donationItem))])]),e("el-form-item",{attrs:{label:"捐赠物品接受者 / 单位"}},[e("span",[t._v(t._s(a.row.donateAccept))])]),e("el-form-item",{attrs:{label:"捐赠物始发位置"}},[e("span",[t._v(t._s(a.row.sendLocation))])]),e("el-form-item",{attrs:{label:"捐赠物当前位置"}},[e("span",[t._v(t._s(a.row.currentLocation))])]),e("el-form-item",{attrs:{label:"捐赠物终到位置"}},[e("span",[t._v(t._s(a.row.acceptLocation))])]),e("el-form-item",{attrs:{label:"预计到达日期"}},[e("span",[t._v(t._s(a.row.estArriveTime))])]),e("el-form-item",{attrs:{label:"捐赠详细描述"}},[e("span",[t._v(t._s(a.row.donateDescription))])])],1)]}}])}),e("el-table-column",{attrs:{label:"流水号",prop:"donationId"}}),e("el-table-column",{attrs:{label:"捐赠人",prop:"donatorName"}}),e("el-table-column",{attrs:{label:"简短描述"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(t._s(a.row.donateDescription.substring(0,7).concat("...")))]}}])})],1),e("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{"current-page":t.page,total:t.total,"page-size":t.limit,layout:"total, prev, pager, next, jumper"},on:{"current-change":t.fetchData}})],1)},i=[],o=e("5cd8"),l={name:"DonationList",data:function(){return{isLoading:!0,total:0,page:1,limit:10,searchObj:{},tableData:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page=a,o["a"].getPageList(this.page,this.limit,this.searchObj).then((function(a){t.tableData=a.data.records,t.total=a.data.total,t.isLoading=!1}))},resetData:function(){this.searchObj={},this.fetchData()}}},s=l,r=(e("718e"),e("2877")),c=Object(r["a"])(s,n,i,!1,null,null,null);a["default"]=c.exports}}]);