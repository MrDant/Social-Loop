import{_ as b,E as h,K as n,L as g,D as u,q as y,Z as k,o,c as s,a as d,W as v,a9 as B,V as C,R as V,d as q,t as f,P as t,a3 as i}from"./entry.dacc0237.js";const S=h({inheritAttrs:!1,props:{value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>n.ui.checkbox.default.color,validator(e){return n.ui.colors.includes(e)}},ui:{type:Object,default:()=>n.ui.checkbox}},emits:["update:modelValue"],setup(e,{emit:l}){const p=g(),a=u(()=>y({},e.ui,p.ui.checkbox)),c=u({get(){return e.modelValue},set(r){l("update:modelValue",r)}}),m=u(()=>k(a.value.base,a.value.rounded,a.value.background,a.value.border,a.value.ring.replaceAll("{color}",e.color),a.value.color.replaceAll("{color}",e.color)));return{ui:a,toggle:c,inputClass:m}}}),$={class:"flex items-center h-5"},A=["id","name","required","value","disabled","checked","indeterminate"],N={key:0,class:"ms-3 text-sm"},D=["for"];function j(e,l,p,a,c,m){return o(),s("div",{class:t(e.ui.wrapper)},[d("div",$,[v(d("input",C({id:e.name,"onUpdate:modelValue":l[0]||(l[0]=r=>e.toggle=r),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:["form-checkbox",e.inputClass]},e.$attrs),null,16,A),[[B,e.toggle]])]),e.label||e.$slots.label?(o(),s("div",N,[d("label",{for:e.name,class:t(e.ui.label)},[V(e.$slots,"label",{},()=>[q(f(e.label),1)]),e.required?(o(),s("span",{key:0,class:t(e.ui.required)},"*",2)):i("",!0)],10,D),e.help?(o(),s("p",{key:0,class:t(e.ui.help)},f(e.help),3)):i("",!0)])):i("",!0)],2)}const E=b(S,[["render",j]]);export{E as default};
