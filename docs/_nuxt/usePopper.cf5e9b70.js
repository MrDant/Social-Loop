import{r as Ot,G as ve,H as de,ad as Ft}from"./entry.dacc0237.js";import{b as Kt}from"./_baseIteratee.2dcf497f.js";import{d as Vt,g as Jt,h as he,c as me,a as ge}from"./_baseGet.7027903f.js";import{a as ye,c as be}from"./_getAllKeysIn.26012f41.js";import{r as we}from"./_Uint8Array.2001a1b1.js";function xe(t){return t===void 0}var Oe="Expected a function";function Ee(t){if(typeof t!="function")throw new TypeError(Oe);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Ae(t,e,r,n){if(!Vt(t))return t;e=Jt(e,t);for(var a=-1,i=e.length,u=i-1,o=t;o!=null&&++a<i;){var s=he(e[a]),c=r;if(s==="__proto__"||s==="constructor"||s==="prototype")return t;if(a!=u){var f=o[s];c=n?n(f,s,o):void 0,c===void 0&&(c=Vt(f)?f:we(e[a+1])?[]:{})}ye(o,s,c),o=o[s]}return t}function Pe(t,e,r){for(var n=-1,a=e.length,i={};++n<a;){var u=e[n],o=me(t,u);r(o,u)&&Ae(i,Jt(u,t),o)}return i}function Be(t,e){if(t==null)return{};var r=ge(be(t),function(n){return[n]});return e=Kt(e),Pe(t,r,function(n,a){return e(n,a[0])})}function De(t,e){return Be(t,Ee(Kt(e)))}function $(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function K(t){var e=$(t).Element;return t instanceof e||t instanceof Element}function L(t){var e=$(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Pt(t){if(typeof ShadowRoot>"u")return!1;var e=$(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var G=Math.max,dt=Math.min,Q=Math.round;function Et(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Qt(){return!/^((?!chrome|android).)*safari/i.test(Et())}function Z(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),a=1,i=1;e&&L(t)&&(a=t.offsetWidth>0&&Q(n.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Q(n.height)/t.offsetHeight||1);var u=K(t)?$(t):window,o=u.visualViewport,s=!Qt()&&r,c=(n.left+(s&&o?o.offsetLeft:0))/a,f=(n.top+(s&&o?o.offsetTop:0))/i,h=n.width/a,m=n.height/i;return{width:h,height:m,top:f,right:c+h,bottom:f+m,left:c,x:c,y:f}}function Bt(t){var e=$(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ce(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Te(t){return t===$(t)||!L(t)?Bt(t):Ce(t)}function j(t){return t?(t.nodeName||"").toLowerCase():null}function I(t){return((K(t)?t.ownerDocument:t.document)||window.document).documentElement}function Dt(t){return Z(I(t)).left+Bt(t).scrollLeft}function N(t){return $(t).getComputedStyle(t)}function Ct(t){var e=N(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function $e(t){var e=t.getBoundingClientRect(),r=Q(e.width)/t.offsetWidth||1,n=Q(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Le(t,e,r){r===void 0&&(r=!1);var n=L(e),a=L(e)&&$e(e),i=I(e),u=Z(t,a,r),o={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((j(e)!=="body"||Ct(i))&&(o=Te(e)),L(e)?(s=Z(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):i&&(s.x=Dt(i))),{x:u.left+o.scrollLeft-s.x,y:u.top+o.scrollTop-s.y,width:u.width,height:u.height}}function Zt(t){var e=Z(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function ht(t){return j(t)==="html"?t:t.assignedSlot||t.parentNode||(Pt(t)?t.host:null)||I(t)}function _t(t){return["html","body","#document"].indexOf(j(t))>=0?t.ownerDocument.body:L(t)&&Ct(t)?t:_t(ht(t))}function at(t,e){var r;e===void 0&&(e=[]);var n=_t(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),i=$(n),u=a?[i].concat(i.visualViewport||[],Ct(n)?n:[]):n,o=e.concat(u);return a?o:o.concat(at(ht(u)))}function Me(t){return["table","td","th"].indexOf(j(t))>=0}function It(t){return!L(t)||N(t).position==="fixed"?null:t.offsetParent}function Re(t){var e=/firefox/i.test(Et()),r=/Trident/i.test(Et());if(r&&L(t)){var n=N(t);if(n.position==="fixed")return null}var a=ht(t);for(Pt(a)&&(a=a.host);L(a)&&["html","body"].indexOf(j(a))<0;){var i=N(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return a;a=a.parentNode}return null}function mt(t){for(var e=$(t),r=It(t);r&&Me(r)&&N(r).position==="static";)r=It(r);return r&&(j(r)==="html"||j(r)==="body"&&N(r).position==="static")?e:r||Re(t)||e}var M="top",W="bottom",F="right",k="left",Tt="auto",gt=[M,W,F,k],_="start",ot="end",Se="clippingParents",te="viewport",nt="popper",ke="reference",Xt=gt.reduce(function(t,e){return t.concat([e+"-"+_,e+"-"+ot])},[]),ee=[].concat(gt,[Tt]).reduce(function(t,e){return t.concat([e,e+"-"+_,e+"-"+ot])},[]),je="beforeRead",We="read",He="afterRead",Ne="beforeMain",Fe="main",Ve="afterMain",Ie="beforeWrite",Xe="write",Ue="afterWrite",Ye=[je,We,He,Ne,Fe,Ve,Ie,Xe,Ue];function qe(t){var e=new Map,r=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function a(i){r.add(i.name);var u=[].concat(i.requires||[],i.requiresIfExists||[]);u.forEach(function(o){if(!r.has(o)){var s=e.get(o);s&&a(s)}}),n.push(i)}return t.forEach(function(i){r.has(i.name)||a(i)}),n}function ze(t){var e=qe(t);return Ye.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function Ge(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Ke(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}function Je(t,e){var r=$(t),n=I(t),a=r.visualViewport,i=n.clientWidth,u=n.clientHeight,o=0,s=0;if(a){i=a.width,u=a.height;var c=Qt();(c||!c&&e==="fixed")&&(o=a.offsetLeft,s=a.offsetTop)}return{width:i,height:u,x:o+Dt(t),y:s}}function Qe(t){var e,r=I(t),n=Bt(t),a=(e=t.ownerDocument)==null?void 0:e.body,i=G(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),u=G(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),o=-n.scrollLeft+Dt(t),s=-n.scrollTop;return N(a||r).direction==="rtl"&&(o+=G(r.clientWidth,a?a.clientWidth:0)-i),{width:i,height:u,x:o,y:s}}function Ze(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Pt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function At(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function _e(t,e){var r=Z(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Ut(t,e,r){return e===te?At(Je(t,r)):K(e)?_e(e,r):At(Qe(I(t)))}function tr(t){var e=at(ht(t)),r=["absolute","fixed"].indexOf(N(t).position)>=0,n=r&&L(t)?mt(t):t;return K(n)?e.filter(function(a){return K(a)&&Ze(a,n)&&j(a)!=="body"}):[]}function er(t,e,r,n){var a=e==="clippingParents"?tr(t):[].concat(e),i=[].concat(a,[r]),u=i[0],o=i.reduce(function(s,c){var f=Ut(t,c,n);return s.top=G(f.top,s.top),s.right=dt(f.right,s.right),s.bottom=dt(f.bottom,s.bottom),s.left=G(f.left,s.left),s},Ut(t,u,n));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function H(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function re(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ne(t){var e=t.reference,r=t.element,n=t.placement,a=n?H(n):null,i=n?tt(n):null,u=e.x+e.width/2-r.width/2,o=e.y+e.height/2-r.height/2,s;switch(a){case M:s={x:u,y:e.y-r.height};break;case W:s={x:u,y:e.y+e.height};break;case F:s={x:e.x+e.width,y:o};break;case k:s={x:e.x-r.width,y:o};break;default:s={x:e.x,y:e.y}}var c=a?re(a):null;if(c!=null){var f=c==="y"?"height":"width";switch(i){case _:s[c]=s[c]-(e[f]/2-r[f]/2);break;case ot:s[c]=s[c]+(e[f]/2-r[f]/2);break}}return s}function ae(){return{top:0,right:0,bottom:0,left:0}}function rr(t){return Object.assign({},ae(),t)}function nr(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}function $t(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,i=r.strategy,u=i===void 0?t.strategy:i,o=r.boundary,s=o===void 0?Se:o,c=r.rootBoundary,f=c===void 0?te:c,h=r.elementContext,m=h===void 0?nt:h,l=r.altBoundary,b=l===void 0?!1:l,d=r.padding,v=d===void 0?0:d,w=rr(typeof v!="number"?v:nr(v,gt)),A=m===nt?ke:nt,x=t.rects.popper,p=t.elements[b?A:m],g=er(K(p)?p:p.contextElement||I(t.elements.popper),s,f,u),y=Z(t.elements.reference),O=ne({reference:y,element:x,strategy:"absolute",placement:a}),D=At(Object.assign({},x,O)),P=m===nt?D:y,E={top:g.top-P.top+w.top,bottom:P.bottom-g.bottom+w.bottom,left:g.left-P.left+w.left,right:P.right-g.right+w.right},B=t.modifiersData.offset;if(m===nt&&B){var R=B[a];Object.keys(E).forEach(function(C){var X=[F,W].indexOf(C)>=0?1:-1,U=[M,W].indexOf(C)>=0?"y":"x";E[C]+=R[U]*X})}return E}var Yt={placement:"bottom",modifiers:[],strategy:"absolute"};function qt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function ar(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,i=a===void 0?Yt:a;return function(o,s,c){c===void 0&&(c=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Yt,i),modifiersData:{},elements:{reference:o,popper:s},attributes:{},styles:{}},h=[],m=!1,l={state:f,setOptions:function(w){var A=typeof w=="function"?w(f.options):w;d(),f.options=Object.assign({},i,f.options,A),f.scrollParents={reference:K(o)?at(o):o.contextElement?at(o.contextElement):[],popper:at(s)};var x=ze(Ke([].concat(n,f.options.modifiers)));return f.orderedModifiers=x.filter(function(p){return p.enabled}),b(),l.update()},forceUpdate:function(){if(!m){var w=f.elements,A=w.reference,x=w.popper;if(qt(A,x)){f.rects={reference:Le(A,mt(x),f.options.strategy==="fixed"),popper:Zt(x)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(E){return f.modifiersData[E.name]=Object.assign({},E.data)});for(var p=0;p<f.orderedModifiers.length;p++){if(f.reset===!0){f.reset=!1,p=-1;continue}var g=f.orderedModifiers[p],y=g.fn,O=g.options,D=O===void 0?{}:O,P=g.name;typeof y=="function"&&(f=y({state:f,options:D,name:P,instance:l})||f)}}}},update:Ge(function(){return new Promise(function(v){l.forceUpdate(),v(f)})}),destroy:function(){d(),m=!0}};if(!qt(o,s))return l;l.setOptions(c).then(function(v){!m&&c.onFirstUpdate&&c.onFirstUpdate(v)});function b(){f.orderedModifiers.forEach(function(v){var w=v.name,A=v.options,x=A===void 0?{}:A,p=v.effect;if(typeof p=="function"){var g=p({state:f,name:w,instance:l,options:x}),y=function(){};h.push(g||y)}})}function d(){h.forEach(function(v){return v()}),h=[]}return l}}var lt={passive:!0};function or(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,i=a===void 0?!0:a,u=n.resize,o=u===void 0?!0:u,s=$(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(f){f.addEventListener("scroll",r.update,lt)}),o&&s.addEventListener("resize",r.update,lt),function(){i&&c.forEach(function(f){f.removeEventListener("scroll",r.update,lt)}),o&&s.removeEventListener("resize",r.update,lt)}}const oe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:or,data:{}};function ir(t){var e=t.state,r=t.name;e.modifiersData[r]=ne({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const sr={name:"popperOffsets",enabled:!0,phase:"read",fn:ir,data:{}};var fr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ur(t,e){var r=t.x,n=t.y,a=e.devicePixelRatio||1;return{x:Q(r*a)/a||0,y:Q(n*a)/a||0}}function zt(t){var e,r=t.popper,n=t.popperRect,a=t.placement,i=t.variation,u=t.offsets,o=t.position,s=t.gpuAcceleration,c=t.adaptive,f=t.roundOffsets,h=t.isFixed,m=u.x,l=m===void 0?0:m,b=u.y,d=b===void 0?0:b,v=typeof f=="function"?f({x:l,y:d}):{x:l,y:d};l=v.x,d=v.y;var w=u.hasOwnProperty("x"),A=u.hasOwnProperty("y"),x=k,p=M,g=window;if(c){var y=mt(r),O="clientHeight",D="clientWidth";if(y===$(r)&&(y=I(r),N(y).position!=="static"&&o==="absolute"&&(O="scrollHeight",D="scrollWidth")),y=y,a===M||(a===k||a===F)&&i===ot){p=W;var P=h&&y===g&&g.visualViewport?g.visualViewport.height:y[O];d-=P-n.height,d*=s?1:-1}if(a===k||(a===M||a===W)&&i===ot){x=F;var E=h&&y===g&&g.visualViewport?g.visualViewport.width:y[D];l-=E-n.width,l*=s?1:-1}}var B=Object.assign({position:o},c&&fr),R=f===!0?ur({x:l,y:d},$(r)):{x:l,y:d};if(l=R.x,d=R.y,s){var C;return Object.assign({},B,(C={},C[p]=A?"0":"",C[x]=w?"0":"",C.transform=(g.devicePixelRatio||1)<=1?"translate("+l+"px, "+d+"px)":"translate3d("+l+"px, "+d+"px, 0)",C))}return Object.assign({},B,(e={},e[p]=A?d+"px":"",e[x]=w?l+"px":"",e.transform="",e))}function cr(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,i=r.adaptive,u=i===void 0?!0:i,o=r.roundOffsets,s=o===void 0?!0:o,c={placement:H(e.placement),variation:tt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,zt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:u,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,zt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const ie={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:cr,data:{}};function lr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},i=e.elements[r];!L(i)||!j(i)||(Object.assign(i.style,n),Object.keys(a).forEach(function(u){var o=a[u];o===!1?i.removeAttribute(u):i.setAttribute(u,o===!0?"":o)}))})}function pr(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],i=e.attributes[n]||{},u=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),o=u.reduce(function(s,c){return s[c]="",s},{});!L(a)||!j(a)||(Object.assign(a.style,o),Object.keys(i).forEach(function(s){a.removeAttribute(s)}))})}}const vr={name:"applyStyles",enabled:!0,phase:"write",fn:lr,effect:pr,requires:["computeStyles"]};var dr=[oe,sr,ie,vr],hr={left:"right",right:"left",bottom:"top",top:"bottom"};function pt(t){return t.replace(/left|right|bottom|top/g,function(e){return hr[e]})}var mr={start:"end",end:"start"};function Gt(t){return t.replace(/start|end/g,function(e){return mr[e]})}function gr(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,i=r.rootBoundary,u=r.padding,o=r.flipVariations,s=r.allowedAutoPlacements,c=s===void 0?ee:s,f=tt(n),h=f?o?Xt:Xt.filter(function(b){return tt(b)===f}):gt,m=h.filter(function(b){return c.indexOf(b)>=0});m.length===0&&(m=h);var l=m.reduce(function(b,d){return b[d]=$t(t,{placement:d,boundary:a,rootBoundary:i,padding:u})[H(d)],b},{});return Object.keys(l).sort(function(b,d){return l[b]-l[d]})}function yr(t){if(H(t)===Tt)return[];var e=pt(t);return[Gt(t),e,Gt(e)]}function br(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,i=a===void 0?!0:a,u=r.altAxis,o=u===void 0?!0:u,s=r.fallbackPlacements,c=r.padding,f=r.boundary,h=r.rootBoundary,m=r.altBoundary,l=r.flipVariations,b=l===void 0?!0:l,d=r.allowedAutoPlacements,v=e.options.placement,w=H(v),A=w===v,x=s||(A||!b?[pt(v)]:yr(v)),p=[v].concat(x).reduce(function(J,V){return J.concat(H(V)===Tt?gr(e,{placement:V,boundary:f,rootBoundary:h,padding:c,flipVariations:b,allowedAutoPlacements:d}):V)},[]),g=e.rects.reference,y=e.rects.popper,O=new Map,D=!0,P=p[0],E=0;E<p.length;E++){var B=p[E],R=H(B),C=tt(B)===_,X=[M,W].indexOf(R)>=0,U=X?"width":"height",T=$t(e,{placement:B,boundary:f,rootBoundary:h,altBoundary:m,padding:c}),S=X?C?F:k:C?W:M;g[U]>y[U]&&(S=pt(S));var it=pt(S),Y=[];if(i&&Y.push(T[R]<=0),o&&Y.push(T[S]<=0,T[it]<=0),Y.every(function(J){return J})){P=B,D=!1;break}O.set(B,Y)}if(D)for(var st=b?3:1,yt=function(V){var rt=p.find(function(ut){var q=O.get(ut);if(q)return q.slice(0,V).every(function(bt){return bt})});if(rt)return P=rt,"break"},et=st;et>0;et--){var ft=yt(et);if(ft==="break")break}e.placement!==P&&(e.modifiersData[n]._skip=!0,e.placement=P,e.reset=!0)}}const wr={name:"flip",enabled:!0,phase:"main",fn:br,requiresIfExists:["offset"],data:{_skip:!1}};function xr(t,e,r){var n=H(t),a=[k,M].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,u=i[0],o=i[1];return u=u||0,o=(o||0)*a,[k,F].indexOf(n)>=0?{x:o,y:u}:{x:u,y:o}}function Or(t){var e=t.state,r=t.options,n=t.name,a=r.offset,i=a===void 0?[0,0]:a,u=ee.reduce(function(f,h){return f[h]=xr(h,e.rects,i),f},{}),o=u[e.placement],s=o.x,c=o.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=u}const Er={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Or};function Ar(t){return t==="x"?"y":"x"}function vt(t,e,r){return G(t,dt(e,r))}function Pr(t,e,r){var n=vt(t,e,r);return n>r?r:n}function Br(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,i=a===void 0?!0:a,u=r.altAxis,o=u===void 0?!1:u,s=r.boundary,c=r.rootBoundary,f=r.altBoundary,h=r.padding,m=r.tether,l=m===void 0?!0:m,b=r.tetherOffset,d=b===void 0?0:b,v=$t(e,{boundary:s,rootBoundary:c,padding:h,altBoundary:f}),w=H(e.placement),A=tt(e.placement),x=!A,p=re(w),g=Ar(p),y=e.modifiersData.popperOffsets,O=e.rects.reference,D=e.rects.popper,P=typeof d=="function"?d(Object.assign({},e.rects,{placement:e.placement})):d,E=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),B=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,R={x:0,y:0};if(y){if(i){var C,X=p==="y"?M:k,U=p==="y"?W:F,T=p==="y"?"height":"width",S=y[p],it=S+v[X],Y=S-v[U],st=l?-D[T]/2:0,yt=A===_?O[T]:D[T],et=A===_?-D[T]:-O[T],ft=e.elements.arrow,J=l&&ft?Zt(ft):{width:0,height:0},V=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ae(),rt=V[X],ut=V[U],q=vt(0,O[T],J[T]),bt=x?O[T]/2-st-q-rt-E.mainAxis:yt-q-rt-E.mainAxis,se=x?-O[T]/2+st+q+ut+E.mainAxis:et+q+ut+E.mainAxis,wt=e.elements.arrow&&mt(e.elements.arrow),fe=wt?p==="y"?wt.clientTop||0:wt.clientLeft||0:0,Lt=(C=B==null?void 0:B[p])!=null?C:0,ue=S+bt-Lt-fe,ce=S+se-Lt,Mt=vt(l?dt(it,ue):it,S,l?G(Y,ce):Y);y[p]=Mt,R[p]=Mt-S}if(o){var Rt,le=p==="x"?M:k,pe=p==="x"?W:F,z=y[g],ct=g==="y"?"height":"width",St=z+v[le],kt=z-v[pe],xt=[M,k].indexOf(w)!==-1,jt=(Rt=B==null?void 0:B[g])!=null?Rt:0,Wt=xt?St:z-O[ct]-D[ct]-jt+E.altAxis,Ht=xt?z+O[ct]+D[ct]-jt-E.altAxis:kt,Nt=l&&xt?Pr(Wt,z,Ht):vt(l?Wt:St,z,l?Ht:kt);y[g]=Nt,R[g]=Nt-z}e.modifiersData[n]=R}}const Dr={name:"preventOverflow",enabled:!0,phase:"main",fn:Br,requiresIfExists:["offset"]},Cr=ar({defaultModifiers:[...dr,Er,wr,Dr,ie,oe]});function Sr({locked:t=!1,overflowPadding:e=8,offsetDistance:r=8,offsetSkid:n=0,gpuAcceleration:a=!0,adaptive:i=!0,scroll:u=!0,resize:o=!0,placement:s,strategy:c},f){const h=Ot(null),m=Ot(null),l=Ot(null);return ve(()=>{de(b=>{if(!m.value||!h.value&&!(f!=null&&f.value))return;const d=Ft(m),v=(f==null?void 0:f.value)||Ft(h);d instanceof HTMLElement&&v&&(l.value=Cr(v,d,De({placement:s,strategy:c,modifiers:[{name:"flip",enabled:!t},{name:"preventOverflow",options:{padding:e}},{name:"offset",options:{offset:[n,r]}},{name:"computeStyles",options:{adaptive:i,gpuAcceleration:a}},{name:"eventListeners",options:{scroll:u,resize:o}}]},xe)),b(l.value.destroy))})}),[h,m,l]}export{Sr as u};