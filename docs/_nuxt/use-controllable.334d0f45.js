import{r as a,D as f}from"./entry.dacc0237.js";function s(o={},u=null,e=[]){for(let[i,l]of Object.entries(o))r(e,n(u,i),l);return e}function n(o,u){return o?o+"["+u+"]":u}function r(o,u,e){if(Array.isArray(e))for(let[i,l]of e.entries())r(o,n(u,i.toString()),l);else e instanceof Date?o.push([u,e.toISOString()]):typeof e=="boolean"?o.push([u,e?"1":"0"]):typeof e=="string"?o.push([u,e]):typeof e=="number"?o.push([u,`${e}`]):e==null?o.push([u,""]):s(e,u,o)}function m(o){var u;let e=(u=o==null?void 0:o.form)!=null?u:o.closest("form");if(e){for(let i of e.elements)if(i.tagName==="INPUT"&&i.type==="submit"||i.tagName==="BUTTON"&&i.type==="submit"||i.nodeName==="INPUT"&&i.type==="image"){i.click();return}}}function c(o,u,e){let i=a(e==null?void 0:e.value),l=f(()=>o.value!==void 0);return[f(()=>l.value?o.value:i.value),function(t){return l.value||(i.value=t),u==null?void 0:u(t)}]}export{c as d,s as e,m as p};
