import{d as _,S as p,b as B,e as d,f as k,r as nn,c as en,g as N,h as tn,a as rn}from"./_baseGet.7027903f.js";import{d as $,i as on,a as an,e as cn,f as fn,k as D,g as sn,U as O,h as un,j,n as y,b as G,l as ln,S as gn,m as bn}from"./_Uint8Array.2001a1b1.js";import{a as R,g as K,k as H,b as Tn,c as Y}from"./_getAllKeysIn.26012f41.js";var w=Object.create,pn=function(){function n(){}return function(e){if(!_(e))return{};if(w)return w(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}();const yn=pn;function dn(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}function jn(n,e){var t=-1,o=n.length;for(e||(e=Array(o));++t<o;)e[t]=n[t];return e}var An=800,hn=16,mn=Date.now;function Sn(n){var e=0,t=0;return function(){var o=mn(),r=hn-(o-t);if(t=o,r>0){if(++e>=An)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function vn(n){return function(){return n}}var $n=$?function(n,e){return $(n,"toString",{configurable:!0,enumerable:!1,value:vn(e),writable:!0})}:on;const On=$n;var wn=Sn(On);const xn=wn;function Cn(n,e){for(var t=-1,o=n==null?0:n.length;++t<o&&e(n[t],t,n)!==!1;);return n}function b(n,e,t,o){var r=!t;t||(t={});for(var i=-1,c=e.length;++i<c;){var f=e[i],s=o?o(t[f],n[f],f,t,n):void 0;s===void 0&&(s=n[f]),r?an(t,f,s):R(t,f,s)}return t}var x=Math.max;function Fn(n,e,t){return e=x(e===void 0?n.length-1:e,0),function(){for(var o=arguments,r=-1,i=x(o.length-e,0),c=Array(i);++r<i;)c[r]=o[e+r];r=-1;for(var f=Array(e+1);++r<e;)f[r]=o[r];return f[e]=t(c),dn(n,this,f)}}var C=p?p.isConcatSpreadable:void 0;function En(n){return B(n)||cn(n)||!!(C&&n&&n[C])}function W(n,e,t,o,r){var i=-1,c=n.length;for(t||(t=En),r||(r=[]);++i<c;){var f=n[i];e>0&&t(f)?e>1?W(f,e-1,t,o,r):fn(r,f):o||(r[r.length]=f)}return r}function Ln(n){var e=n==null?0:n.length;return e?W(n,1):[]}function In(n){return xn(Fn(n,void 0,Ln),n+"")}var Pn="[object Object]",Mn=Function.prototype,Un=Object.prototype,q=Mn.toString,_n=Un.hasOwnProperty,Bn=q.call(Object);function Nn(n){if(!d(n)||k(n)!=Pn)return!1;var e=K(n);if(e===null)return!0;var t=_n.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&q.call(t)==Bn}function Dn(n,e,t){var o=-1,r=n.length;e<0&&(e=-e>r?0:r+e),t=t>r?r:t,t<0&&(t+=r),r=e>t?0:t-e>>>0,e>>>=0;for(var i=Array(r);++o<r;)i[o]=n[o+e];return i}function Gn(n,e){return n&&b(e,D(e),n)}function Rn(n,e){return n&&b(e,H(e),n)}var J=typeof exports=="object"&&exports&&!exports.nodeType&&exports,F=J&&typeof module=="object"&&module&&!module.nodeType&&module,Kn=F&&F.exports===J,E=Kn?nn.Buffer:void 0,L=E?E.allocUnsafe:void 0;function Hn(n,e){if(e)return n.slice();var t=n.length,o=L?L(t):new n.constructor(t);return n.copy(o),o}function Yn(n,e){return b(n,sn(n),e)}function Wn(n,e){return b(n,Tn(n),e)}var qn=Object.prototype,Jn=qn.hasOwnProperty;function Qn(n){var e=n.length,t=new n.constructor(e);return e&&typeof n[0]=="string"&&Jn.call(n,"index")&&(t.index=n.index,t.input=n.input),t}function A(n){var e=new n.constructor(n.byteLength);return new O(e).set(new O(n)),e}function Xn(n,e){var t=e?A(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}var Zn=/\w*$/;function Vn(n){var e=new n.constructor(n.source,Zn.exec(n));return e.lastIndex=n.lastIndex,e}var I=p?p.prototype:void 0,P=I?I.valueOf:void 0;function zn(n){return P?Object(P.call(n)):{}}function kn(n,e){var t=e?A(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}var ne="[object Boolean]",ee="[object Date]",te="[object Map]",re="[object Number]",oe="[object RegExp]",ae="[object Set]",ie="[object String]",ce="[object Symbol]",fe="[object ArrayBuffer]",se="[object DataView]",ue="[object Float32Array]",le="[object Float64Array]",ge="[object Int8Array]",be="[object Int16Array]",Te="[object Int32Array]",pe="[object Uint8Array]",ye="[object Uint8ClampedArray]",de="[object Uint16Array]",je="[object Uint32Array]";function Ae(n,e,t){var o=n.constructor;switch(e){case fe:return A(n);case ne:case ee:return new o(+n);case se:return Xn(n,t);case ue:case le:case ge:case be:case Te:case pe:case ye:case de:case je:return kn(n,t);case te:return new o;case re:case ie:return new o(n);case oe:return Vn(n);case ae:return new o;case ce:return zn(n)}}function he(n){return typeof n.constructor=="function"&&!un(n)?yn(K(n)):{}}var me="[object Map]";function Se(n){return d(n)&&j(n)==me}var M=y&&y.isMap,ve=M?G(M):Se;const $e=ve;var Oe="[object Set]";function we(n){return d(n)&&j(n)==Oe}var U=y&&y.isSet,xe=U?G(U):we;const Ce=xe;var Fe=1,Ee=2,Le=4,Q="[object Arguments]",Ie="[object Array]",Pe="[object Boolean]",Me="[object Date]",Ue="[object Error]",X="[object Function]",_e="[object GeneratorFunction]",Be="[object Map]",Ne="[object Number]",Z="[object Object]",De="[object RegExp]",Ge="[object Set]",Re="[object String]",Ke="[object Symbol]",He="[object WeakMap]",Ye="[object ArrayBuffer]",We="[object DataView]",qe="[object Float32Array]",Je="[object Float64Array]",Qe="[object Int8Array]",Xe="[object Int16Array]",Ze="[object Int32Array]",Ve="[object Uint8Array]",ze="[object Uint8ClampedArray]",ke="[object Uint16Array]",nt="[object Uint32Array]",a={};a[Q]=a[Ie]=a[Ye]=a[We]=a[Pe]=a[Me]=a[qe]=a[Je]=a[Qe]=a[Xe]=a[Ze]=a[Be]=a[Ne]=a[Z]=a[De]=a[Ge]=a[Re]=a[Ke]=a[Ve]=a[ze]=a[ke]=a[nt]=!0;a[Ue]=a[X]=a[He]=!1;function T(n,e,t,o,r,i){var c,f=e&Fe,s=e&Ee,V=e&Le;if(t&&(c=r?t(n,o,r,i):t(n)),c!==void 0)return c;if(!_(n))return n;var h=B(n);if(h){if(c=Qn(n),!f)return jn(n,c)}else{var g=j(n),m=g==X||g==_e;if(ln(n))return Hn(n,f);if(g==Z||g==Q||m&&!r){if(c=s||m?{}:he(n),!f)return s?Wn(n,Rn(c,n)):Yn(n,Gn(c,n))}else{if(!a[g])return r?n:{};c=Ae(n,g,f)}}i||(i=new gn);var S=i.get(n);if(S)return S;i.set(n,c),Ce(n)?n.forEach(function(u){c.add(T(u,e,t,u,n,i))}):$e(n)&&n.forEach(function(u,l){c.set(l,T(u,e,t,l,n,i))});var z=V?s?Y:bn:s?H:D,v=h?void 0:z(n);return Cn(v||n,function(u,l){v&&(l=u,u=n[l]),R(c,l,T(u,e,t,l,n,i))}),c}function et(n){var e=n==null?0:n.length;return e?n[e-1]:void 0}function tt(n,e){return e.length<2?n:en(n,Dn(e,0,-1))}function rt(n,e){return e=N(e,n),n=tt(n,e),n==null||delete n[tn(et(e))]}function ot(n){return Nn(n)?void 0:n}var at=1,it=2,ct=4,ft=In(function(n,e){var t={};if(n==null)return t;var o=!1;e=rn(e,function(i){return i=N(i,n),o||(o=i.length>1),i}),b(n,Y(n),t),o&&(t=T(t,at|it|ct,ot));for(var r=e.length;r--;)rt(t,e[r]);return t});const gt=ft;export{Dn as b,gt as o};