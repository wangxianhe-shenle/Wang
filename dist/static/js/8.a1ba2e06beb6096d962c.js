webpackJsonp([8],{"8yGu":function(t,a){},qVNl:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("Zbtb");var n=e("Muz9"),s=e.n(n),o={components:{Head:e("EXBO").default},methods:{aaa:function(){this.$router.go(-1)},add:function(){var t=this;this.val&&s.a.get("https://elm.cangdu.org/v1/pois?type=nearby&keyword=a"+this.val).then(function(a){console.log(a),t.datas=a.data})},iteNa:function(){this.$router.push({name:"Address",query:{name:item.name}})}},data:function(){return{val:"",datas:[]}}},r={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"box"},[n("Head",[n("img",{attrs:{slot:"left",src:e("pvh7"),alt:""},on:{click:t.aaa},slot:"left"})]),t._v(" "),n("div",{staticClass:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],attrs:{type:"text"},domProps:{value:t.val},on:{input:function(a){a.target.composing||(t.val=a.target.value)}}}),t._v(" "),n("button",{on:{click:t.add}},[t._v("搜索")])]),t._v(" "),n("van-notice-bar",{attrs:{color:"#1989fa",background:"#ecf9ff","left-icon":"info-o"}},[t._v("\n            我想告诉大家，我想说，王显赫，属实是太帅了，帅到没有天理了\n            ")]),t._v(" "),n("div",{staticClass:"address"},t._l(t.datas,function(a){return n("ul",[n("router-link",{attrs:{tag:"li",to:{name:"Address",query:{name:a.name}}}},[t._v("\n               "+t._s(a.name)+"\n            ")]),t._v(" "),n("li",[t._v(t._s(a.address))])],1)}),0)],1)},staticRenderFns:[]};var i=e("VU/8")(o,r,!1,function(t){e("8yGu")},"data-v-6ee06fa1",null);a.default=i.exports}});
//# sourceMappingURL=8.a1ba2e06beb6096d962c.js.map