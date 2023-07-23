import{o as b,u as L}from"./dom.bfe96e30.js";import{n as I,H as y,r as P,D as O}from"./entry.dacc0237.js";var A=Object.defineProperty,g=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t,n)=>(g(e,typeof t!="symbol"?t+"":t,n),n);class M{constructor(){w(this,"current",this.detect()),w(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let E=new M;function N(e){if(E.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=b(e);if(t)return t.ownerDocument}return document}let h=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(T||{}),D=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(D||{}),_=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(_||{});function x(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(h)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var F=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(F||{});function S(e,t=0){var n;return e===((n=N(e))==null?void 0:n.body)?!1:L(t,{[0](){return e.matches(h)},[1](){let u=e;for(;u!==null;){if(u.matches(h))return!0;u=u.parentElement}return!1}})}function V(e){let t=N(e);I(()=>{t&&!S(t.activeElement,0)&&k(e)})}var $=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))($||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function k(e){e==null||e.focus({preventScroll:!0})}let K=["textarea","input"].join(",");function C(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,K))!=null?n:!1}function G(e,t=n=>n){return e.slice().sort((n,u)=>{let l=t(n),r=t(u);if(l===null||r===null)return 0;let s=l.compareDocumentPosition(r);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t){return H(x(),t,{relativeTo:e})}function H(e,t,{sorted:n=!0,relativeTo:u=null,skipElements:l=[]}={}){var r;let s=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,o=Array.isArray(e)?n?G(e):e:x(e);l.length>0&&o.length>1&&(o=o.filter(a=>!l.includes(a))),u=u??s.activeElement;let v=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(u))-1;if(t&4)return Math.max(0,o.indexOf(u))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=t&32?{preventScroll:!0}:{},m=0,f=o.length,d;do{if(m>=f||m+f<=0)return 0;let a=c+m;if(t&16)a=(a+f)%f;else{if(a<0)return 3;if(a>=f)return 1}d=o[a],d==null||d.focus(i),m+=v}while(d!==s.activeElement);return t&6&&C(d)&&d.select(),2}function p(e,t,n){E.isServer||y(u=>{document.addEventListener(e,t,n),u(()=>document.removeEventListener(e,t,n))})}function R(e,t,n){E.isServer||y(u=>{window.addEventListener(e,t,n),u(()=>window.removeEventListener(e,t,n))})}function X(e,t,n=O(()=>!0)){function u(r,s){if(!n.value||r.defaultPrevented)return;let o=s(r);if(o===null||!o.getRootNode().contains(o))return;let v=function c(i){return typeof i=="function"?c(i()):Array.isArray(i)||i instanceof Set?i:[i]}(e);for(let c of v){if(c===null)continue;let i=c instanceof HTMLElement?c:b(c);if(i!=null&&i.contains(o)||r.composed&&r.composedPath().includes(i))return}return!S(o,F.Loose)&&o.tabIndex!==-1&&r.preventDefault(),t(r,o)}let l=P(null);p("mousedown",r=>{var s,o;n.value&&(l.value=((o=(s=r.composedPath)==null?void 0:s.call(r))==null?void 0:o[0])||r.target)},!0),p("click",r=>{l.value&&(u(r,()=>l.value),l.value=null)},!0),R("blur",r=>u(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}export{x as E,X as F,T as N,G as O,H as P,k as S,D as T,V as _,R as a,E as c,F as h,N as m,W as v,S as w};
