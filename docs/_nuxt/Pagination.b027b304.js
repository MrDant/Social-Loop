import{_ as A,E as G,h as V,K as r,L as q,D as c,q as E,o as p,c as z,R as N,Q as C,V as h,a3 as O,N as L,O as S,P as U}from"./entry.dacc0237.js";const I=G({components:{UButton:V},props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=7&&e<Number.MAX_VALUE}},size:{type:String,default:()=>r.ui.pagination.default.size,validator(e){return Object.keys(r.ui.button.size).includes(e)}},activeButton:{type:Object,default:()=>r.ui.pagination.default.activeButton},inactiveButton:{type:Object,default:()=>r.ui.pagination.default.inactiveButton},prevButton:{type:Object,default:()=>r.ui.pagination.default.prevButton},nextButton:{type:Object,default:()=>r.ui.pagination.default.nextButton},divider:{type:String,default:"…"},ui:{type:Object,default:()=>r.ui.pagination}},emits:["update:modelValue"],setup(e,{emit:k}){const B=q(),b=c(()=>E({},e.ui,B.ui.pagination)),i=c({get(){return e.modelValue},set(n){k("update:modelValue",n)}}),d=c(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(n,a)=>a+1)),f=c(()=>{if(!e.max||d.value.length<=5)return d.value;{const n=i.value,a=d.value.length,o=Math.floor((Math.min(e.max,a)-5)/2),g=n-o,m=n+o,y=g-1>1,P=m+1<a,t=[1];if(y&&t.push(e.divider),!P){const l=n+o+2-a;for(let s=n-o-l;s<=n-o-1;s++)t.push(s)}for(let l=g>2?g:2;l<=Math.min(a,m);l++)t.push(l);if(!y){const l=1-(n-o-2);for(let s=n+o+1;s<=n+o+l;s++)t.push(s)}return P&&t.push(e.divider),m<a&&t.push(a),t.length>=3&&t[1]===e.divider&&t[2]===3&&(t[1]=2),t.length>=3&&t[t.length-2]===e.divider&&t[t.length-1]===t.length&&(t[t.length-2]=t.length-1),t}}),u=c(()=>i.value>1),v=c(()=>i.value<d.value.length);function $(n){typeof n!="string"&&(i.value=n)}function j(){u.value&&i.value--}function M(){v.value&&i.value++}return{ui:b,currentPage:i,pages:d,displayedPages:f,canGoPrev:u,canGoNext:v,onClickPrev:j,onClickNext:M,onClickPage:$}}});function W(e,k,B,b,i,d){const f=V;return p(),z("div",{class:U(e.ui.wrapper)},[N(e.$slots,"prev",{onClick:e.onClickPrev},()=>[e.prevButton?(p(),C(f,h({key:0,size:e.size,disabled:!e.canGoPrev,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton,...e.prevButton},{ui:{rounded:""},onClick:e.onClickPrev}),null,16,["size","disabled","class","onClick"])):O("",!0)]),(p(!0),z(L,null,S(e.displayedPages,(u,v)=>(p(),C(f,h({key:v,size:e.size,label:`${u}`},u===e.currentPage?{...e.ui.default.activeButton,...e.activeButton}:{...e.ui.default.inactiveButton,...e.inactiveButton},{class:[{"pointer-events-none":typeof u=="string","z-[1]":u===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(u)}),null,16,["size","label","class","onClick"]))),128)),N(e.$slots,"next",{onClick:e.onClickNext},()=>[e.nextButton?(p(),C(f,h({key:0,size:e.size,disabled:!e.canGoNext,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton,...e.nextButton},{ui:{rounded:""},onClick:e.onClickNext}),null,16,["size","disabled","class","onClick"])):O("",!0)])],2)}const D=A(I,[["render",W]]);export{D as default};
