webpackJsonp([14],{"/F+4":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("Muz9");var n={components:{Head:a("EXBO").default},data:function(){return{val:"",name:"",address:"",phone:"",beiphone:""}},mounted:function(){this.val=this.$route.query.name},methods:{aaa:function(){this.$router.go(-1)},sub:function(){this.$router.push({name:"Sea"})},add:function(){this.axios.post("https://elm.cangdu.org/v1/users/"+this.user_id+"/addresses",{})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("Head",[n("img",{attrs:{slot:"left",src:a("pvh7"),alt:""},on:{click:e.aaa},slot:"left"})]),e._v(" "),n("div",{staticClass:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入你的姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{type:"text",placeholder:"小区/写字楼/学校"},domProps:{value:e.val},on:{click:e.sub,input:function(t){t.target.composing||(e.val=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"请填写详细送餐地址"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请填写能够直接联系到你的手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.beiphone,expression:"beiphone"}],attrs:{type:"text",placeholder:"备用联系电话（选填）"},domProps:{value:e.beiphone},on:{input:function(t){t.target.composing||(e.beiphone=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.add}},[e._v("提交")])])],1)},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(e){a("/o1k")},"data-v-0ec01202",null);t.default=s.exports},"/o1k":function(e,t){}});
//# sourceMappingURL=14.d45f3568d5118e92fe2b.js.map