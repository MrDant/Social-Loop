import{_ as $,E as k,J as m,a1 as d,K as U,L as w,D as N,q as z,o as s,c as n,N as L,O as A,P as t,Q as l,w as B,R as r,V as c,a3 as u,t as p,ac as K}from"./entry.dacc0237.js";import{_ as v}from"./LinkCustom.vue.adeffeaa.js";import{o as V}from"./omit.c8ee7f34.js";import"./_baseGet.7027903f.js";import"./_Uint8Array.2001a1b1.js";import"./_getAllKeysIn.26012f41.js";const h=k({components:{UIcon:m,UAvatar:d,ULinkCustom:v},props:{links:{type:Array,default:()=>[]},ui:{type:Object,default:()=>U.ui.verticalNavigation}},setup(a){const o=w();return{ui:N(()=>z({},a.ui,o.ui.verticalNavigation)),omit:V}}});function D(a,o,f,E,I,O){const g=d,b=m,C=v;return s(),n("nav",{class:t(a.ui.wrapper)},[(s(!0),n(L,null,A(a.links,(e,y)=>(s(),l(C,c({key:y},a.omit(e,["label","icon","iconClass","avatar","badge","click"]),{class:[a.ui.base,a.ui.padding,a.ui.width,a.ui.ring,a.ui.rounded,a.ui.font,a.ui.size],"active-class":a.ui.active,"inactive-class":a.ui.inactive,onClick:e.click,onKeyup:o[0]||(o[0]=K(i=>i.target.blur(),["enter"]))}),{default:B(({isActive:i})=>[r(a.$slots,"avatar",{link:e},()=>[e.avatar?(s(),l(g,c({key:0},{size:a.ui.avatar.size,...e.avatar},{class:[a.ui.avatar.base]}),null,16,["class"])):u("",!0)]),r(a.$slots,"icon",{link:e,isActive:i},()=>[e.icon?(s(),l(b,{key:0,name:e.icon,class:t([a.ui.icon.base,i?a.ui.icon.active:a.ui.icon.inactive,e.iconClass])},null,8,["name","class"])):u("",!0)]),r(a.$slots,"default",{link:e},()=>[e.label?(s(),n("span",{key:0,class:t(a.ui.label)},p(e.label),3)):u("",!0)]),r(a.$slots,"badge",{link:e,isActive:i},()=>[e.badge?(s(),n("span",{key:0,class:t([a.ui.badge.base,i?a.ui.badge.active:a.ui.badge.inactive])},p(e.badge),3)):u("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))],2)}const Q=$(h,[["render",D]]);export{Q as default};