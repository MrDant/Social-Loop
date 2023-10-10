import{_ as h,E as B,K as T,L as V,D as i,q as D,M as l,o as m,Q as c,w as t,b as p,P as u,V as g,a as b,a3 as w,R as H}from"./entry.dacc0237.js";import{U as k,G as P,S,h as $}from"./transition.86f134f6.js";import"./dom.bfe96e30.js";import"./hidden.f6e7081c.js";import"./use-outside-click.1042b592.js";import"./use-root-containers.c1936fd9.js";import"./open-closed.dddb8e01.js";import"./disposables.104b7b0c.js";const R=B({components:{HDialog:k,HDialogPanel:P,TransitionRoot:S,TransitionChild:$},props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},ui:{type:Object,default:()=>T.ui.slideover}},emits:["update:modelValue","close"],setup(e,{emit:a}){const d=V(),n=i(()=>D({},e.ui,d.ui.slideover)),r=i({get(){return e.modelValue},set(o){a("update:modelValue",o)}}),f=i(()=>e.transition?{...n.value.transition,enterFrom:e.side==="left"?"-translate-x-full":"translate-x-full",enterTo:"translate-x-0",leaveFrom:"translate-x-0",leaveTo:e.side==="left"?"-translate-x-full":"translate-x-full"}:{});function s(o){r.value=o,a("close")}return{ui:n,isOpen:r,transitionClass:f,close:s}}});function N(e,a,d,n,r,f){const s=l("TransitionChild"),o=l("HDialogPanel"),v=l("HDialog"),C=l("TransitionRoot");return m(),c(C,{as:"template",appear:e.appear,show:e.isOpen},{default:t(()=>[p(v,{class:u([e.ui.wrapper,{"justify-end":e.side==="right"}]),onClose:a[0]||(a[0]=y=>!e.preventClose&&e.close(y))},{default:t(()=>[e.overlay?(m(),c(s,g({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:t(()=>[b("div",{class:u([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):w("",!0),p(s,g({as:"template",appear:e.appear},e.transitionClass),{default:t(()=>[p(o,{class:u([e.ui.base,e.ui.width,e.ui.background,e.ui.ring,e.ui.padding])},{default:t(()=>[H(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])]),_:3},8,["class"])]),_:3},8,["appear","show"])}const E=h(R,[["render",N]]);export{E as default};