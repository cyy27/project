webpackJsonp([7],{feCn:function(e,t){},h1o3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Dd8w"),n=a.n(r),o=a("YtJ0"),l=a("NYxO"),i={name:"CheckPhone",data:function(){return{formValidate:{phone:"",checkNum:""},ruleValidate:{phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{type:"string",pattern:/^1[3|4|5|7|8][0-9]{9}$/,message:"手机号格式出错",trigger:"blur"}],checkNum:[{required:!0,message:"必须填写验证码",trigger:"blur"},{type:"string",min:4,max:4,message:"验证码长度错误",trigger:"blur"}]}}},methods:n()({},Object(l.d)(["SET_SIGN_UP_SETP"]),{getcheckNum:function(){11===this.formValidate.phone.length?this.$Message.success({content:"验证码为: 1234",duration:6,closable:!0}):this.$Message.error({content:"请输入正确的手机号",duration:6,closable:!0})},handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?(t.$router.push({path:"/SignUp/inputInfo",query:{phone:t.formValidate.phone}}),t.SET_SIGN_UP_SETP(1)):t.$Message.error({content:"请填写正确的信息",duration:6,closable:!0})})}}),store:o.a},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-form"},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,"label-width":80,rules:e.ruleValidate}},[a("FormItem",{attrs:{label:"手机号",prop:"phone"}},[a("i-input",{attrs:{clearable:"",size:"large",placeholder:"请输入手机号"},model:{value:e.formValidate.phone,callback:function(t){e.$set(e.formValidate,"phone",t)},expression:"formValidate.phone"}})],1),e._v(" "),a("FormItem",{attrs:{label:"验证码",prop:"checkNum"}},[a("i-input",{attrs:{size:"large",placeholder:"请输入验证码"},model:{value:e.formValidate.checkNum,callback:function(t){e.$set(e.formValidate,"checkNum",t)},expression:"formValidate.checkNum"}},[a("Button",{attrs:{slot:"append"},on:{click:e.getcheckNum},slot:"append"},[e._v("获取验证码")])],1)],1),e._v(" "),a("Button",{attrs:{type:"error",size:"large",long:""},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("验证手机号")])],1)],1)},staticRenderFns:[]};var c=a("VU/8")(i,s,!1,function(e){a("feCn")},"data-v-a046564c",null);t.default=c.exports}});
//# sourceMappingURL=7.257e06b6bea40b0559f5.js.map