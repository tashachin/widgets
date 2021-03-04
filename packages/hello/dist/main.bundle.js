(()=>{var t={91:(t,e,r)=>{"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.useHooks=e.usePrifina=e.PrifinaContext=void 0;var o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var a=o?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=t[u]}r.default=t,e&&e.set(t,r);return r}(r(297));function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=r(48),f=["name","function"],s=(0,o.createContext)({});e.PrifinaContext=s;var p=function(t){var e=(0,o.useRef)(null),r=(0,o.useRef)([]),n=a((0,o.useState)({name:"Tero",uuid:"Testing-uuid"}),2),i=n[0],c=(n[1],(0,o.useCallback)((function(){return console.log("Prifina current",e.current),{check:"OK"}}),[])),l=(0,o.useCallback)((function(t){if(console.log("Prifina current",e.current),console.log("Prifina current connectors",e.current.init.connectors),!Object.keys(t).every((function(t){return f.indexOf(t)>-1})))throw new Error("Invalid connector, only (".concat(f.join(","),") allowed."));var r=e.current.init.connectors.findIndex((function(e){return e.getModuleName()===t.name}));if(-1===r)throw new Error("Connector (".concat(t.name,") not found!"));var n=e.current.init.connectors[r];if(Object.keys(n).indexOf(t.function)>-1)return n[t.function]();throw new Error("Connector function (".concat(t.function,") not found!"))}),[]),p=(0,o.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return localStorage.setItem("PrifinaAppSettings-"+e.current.init.appID,JSON.stringify(t)),!0}),[]),y=(0,o.useCallback)((function(){var t=JSON.parse(localStorage.getItem("PrifinaAppSettings-"+e.current.init.appID));return null===t&&(t={}),t}),[]),d=(0,o.useCallback)((function(){var t=JSON.parse(localStorage.getItem("PrifinaAppLocalization"));return null===t&&(t={calendar:"gregory",country:"FI",day:"2-digit",desktop:!0,language:"en-US,en;q=0.9",locale:"en-GB",mobile:!1,month:"2-digit",numberingSystem:"latn",smarttv:!1,tablet:!1,timeZone:"Europe/Helsinki",timeZoneOffset:-120,year:"numeric"}),t}),[]),g=(0,o.useCallback)((function(t){r.current.push({appID:e.current.init.appID,callback:t})}),[]),b=(0,o.useCallback)((function(){return r.current}),[]);return e.current={check:c,connector:l,setSettings:p,getSettings:y,getLocalization:d,onUpdate:g,getCallbacks:b,currentUser:i},console.log("Prifina ",e),o.default.createElement(s.Provider,u({value:e},t))};e.usePrifina=function(t){var e=t.appID,r=void 0===e?"":e,n=t.connectors,i=void 0===n?[]:n,u=(0,o.useContext)(s);return""===r&&(r=l.generate()),(0,o.useMemo)((function(){return u.current.init={stage:"dev",appID:r,connectors:i},u.current}),[u])};e.useHooks=function(){var t=(0,o.useContext)(s);return(0,o.useMemo)((function(){return t.current}),[t])},p.__docgenInfo={description:"",methods:[],displayName:"PrifinaContextProvider"};var y=p;e.default=y},931:(t,e,r)=>{"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"xZ",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"JL",{enumerable:!0,get:function(){return i.usePrifina}});(o=r(297))&&o.__esModule;var o,i=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=o?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=t[i]}r.default=t,e&&e.set(t,r);return r}(r(91));function u(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}},236:(t,e,r)=>{var n=r(618);function o(t,e){var r=new n(t,e);return function(t){return r.convert(t)}}o.BIN="01",o.OCT="01234567",o.DEC="0123456789",o.HEX="0123456789abcdef",t.exports=o},618:t=>{"use strict";function e(t,e){if(!(t&&e&&t.length&&e.length))throw new Error("Bad alphabet");this.srcAlphabet=t,this.dstAlphabet=e}e.prototype.convert=function(t){var e,r,n,o={},i=this.srcAlphabet.length,u=this.dstAlphabet.length,a=t.length,c="string"==typeof t?"":[];if(!this.isValid(t))throw new Error('Number "'+t+'" contains of non-alphabetic digits ('+this.srcAlphabet+")");if(this.srcAlphabet===this.dstAlphabet)return t;for(e=0;e<a;e++)o[e]=this.srcAlphabet.indexOf(t[e]);do{for(r=0,n=0,e=0;e<a;e++)(r=r*i+o[e])>=u?(o[n++]=parseInt(r/u,10),r%=u):n>0&&(o[n++]=0);a=n,c=this.dstAlphabet.slice(r,r+1).concat(c)}while(0!==n);return c},e.prototype.isValid=function(t){for(var e=0;e<t.length;++e)if(-1===this.srcAlphabet.indexOf(t[e]))return!1;return!0},t.exports=e},176:(t,e,r)=>{var n=r(52);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},400:(t,e,r)=>{var n=r(229);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},635:(t,e,r)=>{var n=r(859),o=r(52),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},229:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},859:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},394:(t,e,r)=>{var n=r(400),o=r(229),i=r(635);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},52:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},787:(t,e,r)=>{var n=r(400),o=r(394),i=r(176),u=r(66),a=Object.defineProperty;e.f=n?a:function(t,e,r){if(i(t),e=u(e,!0),i(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},66:(t,e,r)=>{var n=r(52);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},936:(t,e,r)=>{var n=r(400),o=r(787).f,i=Function.prototype,u=i.toString,a=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return u.call(this).match(a)[1]}catch(t){return""}}})},48:(t,e,r)=>{const n=r(236),o=r(107).v4,i="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",u={consistentLength:!0};let a;const c=(t,e,r)=>{const n=e(t.toLowerCase().replace(/-/g,""));return r&&r.consistentLength?n.padStart(r.shortIdLength,r.paddingChar):n};t.exports=(()=>{const t=(t,e)=>{const r=t||i,a={...u,...e};if([...new Set(Array.from(r))].length!==r.length)throw new Error("The provided Alphabet has duplicate characters resulting in unreliable results");const l=(f=r.length,Math.ceil(Math.log(2**128)/Math.log(f)));var f;const s={shortIdLength:l,consistentLength:a.consistentLength,paddingChar:r[0]},p=n(n.HEX,r),y=n(r,n.HEX),d=()=>c(o(),p,s),g={new:d,generate:d,uuid:o,fromUUID:t=>c(t,p,s),toUUID:t=>((t,e)=>{const r=e(t).padStart(32,"0").match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);return[r[1],r[2],r[3],r[4],r[5]].join("-")})(t,y),alphabet:r,maxLength:l};return Object.freeze(g),g};return t.constants={flickrBase58:i,cookieBase90:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~"},t.uuid=o,t.generate=()=>(a||(a=t(i).generate),a()),t})()},107:(t,e,r)=>{"use strict";var n;r.d(e,{v4:()=>s});var o=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}const u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const a=function(t){return"string"==typeof t&&u.test(t)};for(var c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));const f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r};const s=function(t,e,r){var n=(t=t||{}).random||(t.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var o=0;o<16;++o)e[r+o]=n[o];return e}return f(n)}},297:t=>{"use strict";t.exports=require("react")}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{default:()=>p});var t=r(297),e=r.n(t),o=r(931);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(936);const c=require("styled-components");var l=r.n(c)().div.withConfig({displayName:"Hello__Container",componentId:"sc-14au13b-0"})(["height:200px;font-size:16px;line-height:200px;text-align:center;width:200px;"]),f=function(r){console.log("HELLO PROPS ",r);var n=r.msg,u=r.data,c=(0,o.JL)({appID:"HelloWidget"}),f=c.currentUser,s=c.onUpdate,p=c.check;console.log("Logged in user ",f);var y=n||"Hello, "+f.name,d=a((0,t.useState)(y),2),g=d[0],b=d[1];return s((function(t){console.log("HELLO HERE ",t)})),console.log(s,i(s)),console.log(p()),(0,t.useEffect)((function(){console.log("UPDATE DATA ",u),void 0!==u&&u.msg&&b(u.msg)}),[u]),e().createElement(l,null,g)};f.displayName="Hello";const s=f;const p=function(t){return e().createElement(o.xZ,null,e().createElement(s,t))}})();var o=exports;for(var i in n)o[i]=n[i];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();