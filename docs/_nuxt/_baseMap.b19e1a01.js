import{k as h,c as b}from"./_Uint8Array.2001a1b1.js";function v(a){return function(e,r,s){for(var u=-1,n=Object(e),t=s(e),f=t.length;f--;){var i=t[a?f:++u];if(r(n[i],i,n)===!1)break}return e}}var p=v();const g=p;function k(a,e){return a&&g(a,e,h)}function x(a,e){return function(r,s){if(r==null)return r;if(!b(r))return a(r,s);for(var u=r.length,n=e?u:-1,t=Object(r);(e?n--:++n<u)&&s(t[n],n,t)!==!1;);return r}}var F=x(k);const d=F;function E(a,e){var r=-1,s=b(a)?Array(a.length):[];return d(a,function(u,n,t){s[++r]=e(u,n,t)}),s}export{d as a,E as b};