import{E as C,o as r,c as d,R as l,V as i,Q as k,w as _,a as v,S as $,T as g,e as h}from"./entry.dacc0237.js";const y=["href","onClick"],S=C({__name:"LinkCustom",props:{activeClass:{type:String,default:""},inactiveClass:{type:String,default:""}},setup(s){const e=s;function c({isActive:t,isExactActive:a}){return t||a?e.activeClass:e.inactiveClass}return(t,a)=>{const u=h;return t.$attrs.to?(r(),k(u,{key:1,to:t.$attrs.to,custom:""},{default:_(({href:p,navigate:m,exact:f,isActive:o,isExactActive:n})=>[v("a",i(t.$attrs,{href:p,class:c({isActive:o,isExactActive:n}),onClick:m}),[l(t.$slots,"default",$(g({isActive:f?n:o})))],16,y)]),_:3},8,["to"])):(r(),d("button",i({key:0},t.$attrs,{class:s.inactiveClass}),[l(t.$slots,"default")],16))}}});export{S as _};
