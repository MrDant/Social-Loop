import{E as O,r as k,D as S,F as oe,G as W,j as ue,H as le,n as w,I as se,_ as re,J as Y,a1 as Z,K as ie,L as de,q as z,M as C,o as h,Q as D,w as R,b as A,R as q,a as Q,c as P,P as T,a2 as pe,U as ce,V as _,N as F,O as L,a3 as U,t as J,d as ve}from"./entry.dacc0237.js";import X from"./Kbd.798baf09.js";import{_ as ee}from"./LinkCustom.vue.adeffeaa.js";import{u as me}from"./usePopper.cf5e9b70.js";import{o as M,u as fe,H as B,t as j,N as x,a as b}from"./dom.bfe96e30.js";import{p as be,u as ge,x as Ie,a as y}from"./use-tracked-pointer.220f5eae.js";import{c as Me,l as N,p as ye}from"./open-closed.dddb8e01.js";import{b as he}from"./use-resolve-button-type.8be0fdf6.js";import{F as Se,w as ke,h as Re,v as Pe,N as G,_ as te,O as Te}from"./use-outside-click.1042b592.js";import{p as we}from"./use-text-value.f33c54bc.js";import{o as De}from"./omit.c8ee7f34.js";import"./_baseIteratee.2dcf497f.js";import"./_Uint8Array.2001a1b1.js";import"./_baseGet.7027903f.js";import"./get.63e62d79.js";import"./_getAllKeysIn.26012f41.js";var Oe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Oe||{}),Ce=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ce||{});function Ae(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let ne=Symbol("MenuContext");function E(e){let m=se(ne,null);if(m===null){let f=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,E),f}return m}let Ne=O({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:m,attrs:f}){let g=k(1),t=k(null),v=k(null),l=k([]),d=k(""),r=k(null),i=k(1);function n(o=s=>s){let s=r.value!==null?l.value[r.value]:null,u=Te(o(l.value.slice()),I=>M(I.dataRef.domRef)),a=s?u.indexOf(s):null;return a===-1&&(a=null),{items:u,activeItemIndex:a}}let p={menuState:g,buttonRef:t,itemsRef:v,items:l,searchQuery:d,activeItemIndex:r,activationTrigger:i,closeMenu:()=>{g.value=1,r.value=null},openMenu:()=>g.value=0,goToItem(o,s,u){let a=n(),I=Ie(o===y.Specific?{focus:y.Specific,id:s}:{focus:o},{resolveItems:()=>a.items,resolveActiveIndex:()=>a.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.disabled});d.value="",r.value=I,i.value=u??1,l.value=a.items},search(o){let s=d.value!==""?0:1;d.value+=o.toLowerCase();let u=(r.value!==null?l.value.slice(r.value+s).concat(l.value.slice(0,r.value+s)):l.value).find(I=>I.dataRef.textValue.startsWith(d.value)&&!I.dataRef.disabled),a=u?l.value.indexOf(u):-1;a===-1||a===r.value||(r.value=a,i.value=1)},clearSearch(){d.value=""},registerItem(o,s){let u=n(a=>[...a,{id:o,dataRef:s}]);l.value=u.items,r.value=u.activeItemIndex,i.value=1},unregisterItem(o){let s=n(u=>{let a=u.findIndex(I=>I.id===o);return a!==-1&&u.splice(a,1),u});l.value=s.items,r.value=s.activeItemIndex,i.value=1}};return Se([t,v],(o,s)=>{var u;p.closeMenu(),ke(s,Re.Loose)||(o.preventDefault(),(u=M(t))==null||u.focus())},S(()=>g.value===0)),oe(ne,p),Me(S(()=>fe(g.value,{[0]:N.Open,[1]:N.Closed}))),()=>{let o={open:g.value===0,close:p.closeMenu};return B({ourProps:{},theirProps:e,slot:o,slots:m,attrs:f,name:"Menu"})}}}),Be=O({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${j()}`}},setup(e,{attrs:m,slots:f,expose:g}){let t=E("MenuButton");g({el:t.buttonRef,$el:t.buttonRef});function v(i){switch(i.key){case b.Space:case b.Enter:case b.ArrowDown:i.preventDefault(),i.stopPropagation(),t.openMenu(),w(()=>{var n;(n=M(t.itemsRef))==null||n.focus({preventScroll:!0}),t.goToItem(y.First)});break;case b.ArrowUp:i.preventDefault(),i.stopPropagation(),t.openMenu(),w(()=>{var n;(n=M(t.itemsRef))==null||n.focus({preventScroll:!0}),t.goToItem(y.Last)});break}}function l(i){switch(i.key){case b.Space:i.preventDefault();break}}function d(i){e.disabled||(t.menuState.value===0?(t.closeMenu(),w(()=>{var n;return(n=M(t.buttonRef))==null?void 0:n.focus({preventScroll:!0})})):(i.preventDefault(),t.openMenu(),Ae(()=>{var n;return(n=M(t.itemsRef))==null?void 0:n.focus({preventScroll:!0})})))}let r=he(S(()=>({as:e.as,type:m.type})),t.buttonRef);return()=>{var i;let n={open:t.menuState.value===0},{id:p,...o}=e,s={ref:t.buttonRef,id:p,type:r.value,"aria-haspopup":"menu","aria-controls":(i=M(t.itemsRef))==null?void 0:i.id,"aria-expanded":e.disabled?void 0:t.menuState.value===0,onKeydown:v,onKeyup:l,onClick:d};return B({ourProps:s,theirProps:o,slot:n,attrs:m,slots:f,name:"MenuButton"})}}}),Ee=O({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${j()}`}},setup(e,{attrs:m,slots:f,expose:g}){let t=E("MenuItems"),v=k(null);g({el:t.itemsRef,$el:t.itemsRef}),be({container:S(()=>M(t.itemsRef)),enabled:S(()=>t.menuState.value===0),accept(n){return n.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});function l(n){var p;switch(v.value&&clearTimeout(v.value),n.key){case b.Space:if(t.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),t.search(n.key);case b.Enter:if(n.preventDefault(),n.stopPropagation(),t.activeItemIndex.value!==null){let o=t.items.value[t.activeItemIndex.value];(p=M(o.dataRef.domRef))==null||p.click()}t.closeMenu(),te(M(t.buttonRef));break;case b.ArrowDown:return n.preventDefault(),n.stopPropagation(),t.goToItem(y.Next);case b.ArrowUp:return n.preventDefault(),n.stopPropagation(),t.goToItem(y.Previous);case b.Home:case b.PageUp:return n.preventDefault(),n.stopPropagation(),t.goToItem(y.First);case b.End:case b.PageDown:return n.preventDefault(),n.stopPropagation(),t.goToItem(y.Last);case b.Escape:n.preventDefault(),n.stopPropagation(),t.closeMenu(),w(()=>{var o;return(o=M(t.buttonRef))==null?void 0:o.focus({preventScroll:!0})});break;case b.Tab:n.preventDefault(),n.stopPropagation(),t.closeMenu(),w(()=>Pe(M(t.buttonRef),n.shiftKey?G.Previous:G.Next));break;default:n.key.length===1&&(t.search(n.key),v.value=setTimeout(()=>t.clearSearch(),350));break}}function d(n){switch(n.key){case b.Space:n.preventDefault();break}}let r=ye(),i=S(()=>r!==null?(r.value&N.Open)===N.Open:t.menuState.value===0);return()=>{var n,p;let o={open:t.menuState.value===0},{id:s,...u}=e,a={"aria-activedescendant":t.activeItemIndex.value===null||(n=t.items.value[t.activeItemIndex.value])==null?void 0:n.id,"aria-labelledby":(p=M(t.buttonRef))==null?void 0:p.id,id:s,onKeydown:l,onKeyup:d,role:"menu",tabIndex:0,ref:t.itemsRef};return B({ourProps:a,theirProps:u,slot:o,attrs:m,slots:f,features:x.RenderStrategy|x.Static,visible:i.value,name:"MenuItems"})}}}),He=O({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${j()}`}},setup(e,{slots:m,attrs:f,expose:g}){let t=E("MenuItem"),v=k(null);g({el:v,$el:v});let l=S(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),d=we(v),r=S(()=>({disabled:e.disabled,get textValue(){return d()},domRef:v}));W(()=>t.registerItem(e.id,r)),ue(()=>t.unregisterItem(e.id)),le(()=>{t.menuState.value===0&&l.value&&t.activationTrigger.value!==0&&w(()=>{var a,I;return(I=(a=M(v))==null?void 0:a.scrollIntoView)==null?void 0:I.call(a,{block:"nearest"})})});function i(a){if(e.disabled)return a.preventDefault();t.closeMenu(),te(M(t.buttonRef))}function n(){if(e.disabled)return t.goToItem(y.Nothing);t.goToItem(y.Specific,e.id)}let p=ge();function o(a){p.update(a)}function s(a){p.wasMoved(a)&&(e.disabled||l.value||t.goToItem(y.Specific,e.id,0))}function u(a){p.wasMoved(a)&&(e.disabled||l.value&&t.goToItem(y.Nothing))}return()=>{let{disabled:a}=e,I={active:l.value,disabled:a,close:t.closeMenu},{id:c,...H}=e;return B({ourProps:{id:c,ref:v,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,disabled:void 0,onClick:i,onFocus:n,onPointerenter:o,onMouseenter:o,onPointermove:s,onMousemove:s,onPointerleave:u,onMouseleave:u},theirProps:{...f,...H},slot:I,attrs:f,slots:m,name:"MenuItem"})}}});const _e=O({components:{HMenu:Ne,HMenuButton:Be,HMenuItems:Ee,HMenuItem:He,UIcon:Y,UAvatar:Z,UKbd:X,ULinkCustom:ee},props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:50},closeDelay:{type:Number,default:0},ui:{type:Object,default:()=>ie.ui.dropdown}},setup(e){const m=de(),f=S(()=>z({},e.ui,m.ui.dropdown)),g=S(()=>z(e.mode==="hover"?{offsetDistance:0}:{},e.popper,f.value.popper)),[t,v]=me(g.value),l=k(null);let d=null,r=null;W(()=>{setTimeout(()=>{var u;const o=(u=t.value)==null?void 0:u.$.provides;if(!o)return;const s=Object.getOwnPropertySymbols(o);l.value=s.length&&o[s[0]]},200)});const i=S(()=>{var s,u;const o=((s=e.popper)==null?void 0:s.offsetDistance)||((u=f.value.popper)==null?void 0:u.offsetDistance)||8;return e.mode==="hover"?{paddingTop:`${o}px`,paddingBottom:`${o}px`}:{}});function n(){e.mode!=="hover"||!l.value||(r&&(clearTimeout(r),r=null),l.value.menuState!==0&&(d=d||setTimeout(()=>{l.value.openMenu&&l.value.openMenu(),d=null},e.openDelay)))}function p(){e.mode!=="hover"||!l.value||(d&&(clearTimeout(d),d=null),l.value.menuState!==1&&(r=r||setTimeout(()=>{l.value.closeMenu&&l.value.closeMenu(),r=null},e.closeDelay)))}return{ui:f,trigger:t,container:v,containerStyle:i,onMouseOver:n,onMouseLeave:p,omit:De}}}),Fe=["disabled"],Le={class:"truncate"};function Ue(e,m,f,g,t,v){const l=C("HMenuButton"),d=Y,r=Z,i=X,n=ee,p=C("HMenuItem"),o=C("HMenuItems"),s=C("HMenu");return h(),D(s,{as:"div",class:T(e.ui.wrapper),onMouseleave:e.onMouseLeave},{default:R(({open:u})=>[A(l,{ref:"trigger",as:"div",disabled:e.disabled,class:"inline-flex w-full",role:"button",onMouseover:e.onMouseOver},{default:R(()=>[q(e.$slots,"default",{open:u,disabled:e.disabled},()=>[Q("button",{disabled:e.disabled}," Open ",8,Fe)])]),_:2},1032,["disabled","onMouseover"]),u&&e.items.length?(h(),P("div",{key:0,ref:"container",class:T([e.ui.container,e.ui.width]),style:pe(e.containerStyle),onMouseover:m[0]||(m[0]=(...a)=>e.onMouseOver&&e.onMouseOver(...a))},[A(ce,_({appear:""},e.ui.transition),{default:R(()=>[A(o,{class:T([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:R(()=>[(h(!0),P(F,null,L(e.items,(a,I)=>(h(),P("div",{key:I,class:T(e.ui.padding)},[(h(!0),P(F,null,L(a,(c,H)=>(h(),D(p,{key:H,disabled:c.disabled},{default:R(({active:K,disabled:ae})=>[A(n,_(e.omit(c,["label","icon","iconClass","avatar","shortcuts","click"]),{class:[e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,K?e.ui.item.active:e.ui.item.inactive,ae&&e.ui.item.disabled],onClick:c.click}),{default:R(()=>[q(e.$slots,c.slot||"item",{item:c},()=>{var $;return[c.icon?(h(),D(d,{key:0,name:c.icon,class:T([e.ui.item.icon.base,K?e.ui.item.icon.active:e.ui.item.icon.inactive,c.iconClass])},null,8,["name","class"])):c.avatar?(h(),D(r,_({key:1},{size:e.ui.item.avatar.size,...c.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):U("",!0),Q("span",Le,J(c.label),1),($=c.shortcuts)!=null&&$.length?(h(),P("span",{key:2,class:T(e.ui.item.shortcuts)},[(h(!0),P(F,null,L(c.shortcuts,V=>(h(),D(i,{key:V},{default:R(()=>[ve(J(V),1)]),_:2},1024))),128))],2)):U("",!0)]})]),_:2},1040,["class","onClick"])]),_:2},1032,["disabled"]))),128))],2))),128))]),_:3},8,["class"])]),_:3},16)],38)):U("",!0)]),_:3},8,["class","onMouseleave"])}const nt=re(_e,[["render",Ue]]);export{nt as default};