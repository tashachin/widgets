(()=>{var t={176:(t,e,r)=>{var n=r(52);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},400:(t,e,r)=>{var n=r(229);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},635:(t,e,r)=>{var n=r(859),o=r(52),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},229:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},859:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},394:(t,e,r)=>{var n=r(400),o=r(229),i=r(635);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},52:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},787:(t,e,r)=>{var n=r(400),o=r(394),i=r(176),u=r(66),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(i(t),e=u(e,!0),i(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},66:(t,e,r)=>{var n=r(52);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},936:(t,e,r)=>{var n=r(400),o=r(787).f,i=Function.prototype,u=i.toString,c=/^\s*function ([^ (]*)/,l="name";n&&!(l in i)&&o(i,l,{configurable:!0,get:function(){try{return u.call(this).match(c)[1]}catch(t){return""}}})}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,r)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r.r(n),r.d(n,{default:()=>b});r(936);const u=require("react");var c=r.n(u);const l=require("styled-components");var a=r.n(l);const f=require("@prifina/hooks");var s=a().div.withConfig({displayName:"Hello__Container",componentId:"sc-14au13b-0"})(["height:200px;font-size:16px;width:200px;display:flex;justify-content:center;align-items:center;"]),p="helloWidget",y=function(e){e.Context;var r=i(e,["Context"]);console.log("HELLO PROPS",r);var n=r.msg,l=r.data,a=(0,f.usePrifina)(),y=a.onUpdate,b=new(0,a.Prifina)({appiD:p});console.log("HELLO HOOK ",b);var d=n||"Hello, ",v=o((0,u.useState)(d),2),g=v[0],m=v[1],h=o((0,u.useState)(l),2),O=h[0],j=(h[1],t(l.currentUser)?l.currentUser.name:""),S=function(t){console.log("HELLO UPDATE ",t),m(t.msg)};return(0,u.useEffect)((function(){console.log("HELLO UPDATE INIT "),y(p,S)}),[]),(0,u.useEffect)((function(){console.log("UPDATE HELLO DATA ",O),void 0!==O.settings&&O.settings.msg&&m(O.settings.msg)}),[O]),c().createElement(s,null,c().createElement("div",null,c().createElement("div",null,g),c().createElement("div",null,j)))};y.displayName="Hello";const b=y})();var o=exports;for(var i in n)o[i]=n[i];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();