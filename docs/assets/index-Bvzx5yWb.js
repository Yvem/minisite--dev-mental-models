const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./_entrypoint-cBGCefXP.js","./reducers-Big8P6Z7.js","./_entrypoint-CnrtP_OJ.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=class extends Error{message__prefix;framesToPop;statusCode;constructor(e,t=500,n=1){super(`${e}!`),Object.setPrototypeOf(this,new.target.prototype),this.message__prefix=e,this.name=new.target.name,this.framesToPop=n,this.statusCode=t}},d=class extends u{constructor(e){super(`Assertion failed`,e),Object.setPrototypeOf(this,new.target.prototype),this.name=new.target.name}},f=class extends u{constructor(e){super(`Pre-condition failed`,e),Object.setPrototypeOf(this,new.target.prototype),this.name=new.target.name}},p=class extends u{constructor(e){super(`Post-condition failed`,e),Object.setPrototypeOf(this,new.target.prototype),this.name=new.target.name}},m=class extends u{constructor(e){super(`Invalid argument`,e),Object.setPrototypeOf(this,new.target.prototype),this.name=new.target.name}},h=(e,t,n={},r={})=>{e||b({...r,assertion:e,...t&&{assertion_description:t},error:new d(n.statusCode)})},g=(e,t,n={},r={})=>{e||b({...r,assertion:e,...t&&{assertion_description:t},error:new f(n.statusCode)})},_=(e,t,n={},r={})=>{e||b({...r,assertion:e,...t&&{assertion_description:t},error:new m(n.statusCode)})},v=(e,t,n={},r={})=>{e||b({...r,assertion:e,...t&&{assertion_description:t},error:new p(n.statusCode)})};Object.assign(h,{pre:g,post:v});function y(e){h(typeof e==`object`&&e);let[t,n]=Object.entries(e)[0]||[];h(t),h(typeof n==`function`);let r={caller:n,caller__name:t};return{forⵧparam(e){h(typeof e==`object`&&e);let[t,n]=Object.entries(e)[0]||[];h(t);let i={...r,object_under_check:n,object_under_check__name:t};return{assert:(e,t,n)=>_(e,t,n,i),require:(e,t,n)=>_(e,t,n,i)}},forⵧvalue(e){h(typeof e==`object`&&e);let[t,n]=Object.entries(e)[0]||[];h(t);let i={...r,object_under_check:n,object_under_check__name:t};return{assert:(e,t,n)=>h(e,t,n,i),post:(e,t,n)=>v(e,t,n,i),ensure:(e,t,n)=>v(e,t,n,i)}},assert:(e,t,n)=>h(e,t,n,r),pre:(e,t,n)=>g(e,t,n,r),require:(e,t,n)=>g(e,t,n,r),post:(e,t,n)=>v(e,t,n,r),ensure:(e,t,n)=>v(e,t,n,r)}}function b(e){let{caller:t,caller__name:n,object_under_check__name:r,assertion:i,assertion_description:a,error:o}=e,s=(typeof a==`function`&&(a=a()),a?String(a):(r&&=`assertion about ${r}`,typeof i==`boolean`?`should be true`:i===void 0?`should be defined`:i===null?`should not be null`:i===0?`should be a non-zero number`:i===0n?`should be a non-zero BigInt`:i===``?`should be a non-empty string`:isNaN(i)?`should not be NaN`:`should be truthy`)),c=[...n?[`${n}():`]:[],`${o.message__prefix}:`,...r?[`${r}`]:[],s].join(` `);throw c.endsWith(`!`)||(c+=`!`),o.message=c,console.warn(`!!! assertion failed !!!`),console.warn(`!!`,c),console.warn(`!!`,o),console.warn(`!! will now throw...`),o}var x=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function ee(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return w(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ee,ee):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(E,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function D(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function O(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ce={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ce,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ee,se)}catch(e){se(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.5`})),S=o(((e,t)=>{t.exports=x()}));window.addEventListener(`keydown`,function e(t){t.keyCode===9&&(document.body.classList.add(`user-is-tabbing`),window.removeEventListener(`keydown`,e))});function ee({id:e,css:t,href:n,document:r=window.document}){let i=r.getElementById(e);if(i)return i;let a=(()=>{if(t&&n)throw Error(`style_once(): conflicting css & href!`);if(t){let n=r.createElement(`style`);return n.setAttribute(`id`,e),n.innerHTML=t,n}if(n){let t=r.createElement(`link`);return t.setAttribute(`id`,e),t.rel=`stylesheet`,t.href=n,t}throw Error(`style_once(): you must provide css or href!`)})();return r.head.appendChild(a),a}function C(){new URLSearchParams(window.location.search).get(`ref`)===`webmanifest`&&(console.log(`Hello from @monorepo-private/css--framework / atomic--dimension.tsx: dynamically tweaking some CSS: o⋄full-viewport for iOs pinned app...`),ee({id:`pinned-webapp-adjustments--viewport`,css:`
:root {
	/* see @monorepo-private/css--framework/src/atomic/atomic--dimension.css#L28
	 * pinned apps on iOs: dv* are not full screen
	 */
	--o⋄full-viewport__width: 100lvw;
	--o⋄full-viewport__height: 100lvh;
}
`}))}C();var te={newline:10,reset:27};function w(e){if(!Number.isSafeInteger(e))throw Error(`integer expected: ${e}`)}function ne(e){if(!Number.isSafeInteger(e)||e<1||e>40)throw Error(`Invalid version=${e}. Expected number [1..40]`)}function T(e,t){return e.toString(2).padStart(t,`0`)}function re(e,t){let n=e%t;return n>=0?n:t+n}function E(e,t){return Array(e).fill(t)}function ie(e){return e-=e>>>1&1431655765,e=(e&858993459)+(e>>>2&858993459),(e+(e>>>4)&252645135)*16843009>>>24}function ae(e){let t=0,n=0;for(let r of e)t=Math.max(t,r.length),n+=r.length;let r=new Uint8Array(n),i=0;for(let n=0;n<t;n++)for(let t of e)n<t.length&&(r[i++]=t[n]);return r}function oe(){let e,t=1/0;return{add(n,r){n>=t||(e=r,t=n)},get:()=>e,score:()=>t}}function D(e){return Object.freeze({has:t=>e.includes(t),decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!=`string`)throw Error(`alphabet.decode input should be array of strings`);return t.map(t=>{if(typeof t!=`string`)throw Error(`alphabet.decode: not string element=${t}`);let n=e.indexOf(t);if(n===-1)throw Error(`Unknown letter: "${t}". Allowed: ${e}`);return n})},encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!=`number`)throw Error(`alphabet.encode input should be an array of numbers`);return t.map(t=>{if(w(t),t<0||t>=e.length)throw Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);return e[t]})}})}function O(e){if(e.length!==32)throw Error(`expects 32 element matrix`);let t=[1431655765,858993459,252645135,16711935,65535];for(let n=0;n<5;n++){let r=t[n]>>>0,i=1<<n,a=i<<1;for(let t=0;t<32;t+=a)for(let n=0;n<i;n++){let a=t+n,o=a+i,s=e[a]>>>0,c=e[o]>>>0,l=(s>>>i^c)&r;e[a]=(s^l<<i)>>>0,e[o]=(c^l)>>>0}}}var se=e=>1<<(e&31)>>>0,ce=(e,t)=>t===0?0:t===32?4294967295:(1<<t)-1<<e>>>0,le=class e{static size(e,t){if(typeof e==`number`&&(e={height:e,width:e}),!Number.isSafeInteger(e.height)&&e.height!==1/0)throw Error(`Bitmap: invalid height=${e.height} (${typeof e.height})`);if(!Number.isSafeInteger(e.width)&&e.width!==1/0)throw Error(`Bitmap: invalid width=${e.width} (${typeof e.width})`);return t!==void 0&&(e={width:Math.min(e.width,t.width),height:Math.min(e.height,t.height)}),e}static fromString(t){t=t.replace(/^\n+/g,``).replace(/\n+$/g,``);let n=t.split(String.fromCharCode(te.newline)),r=n.length,i,a=[];for(let e of n){let t=e.split(``).map(e=>{if(e===`X`)return!0;if(e===` `)return!1;if(e!==`?`)throw Error(`Bitmap.fromString: unknown symbol=${e}`)});if(i!==void 0&&t.length!==i)throw Error(`Bitmap.fromString different row sizes: width=${i} cur=${t.length}`);i=t.length,a.push(t)}return i===void 0&&(i=0),new e({height:r,width:i},a)}defined;value;tailMask;words;fullWords;height;width;constructor(t,n){let{height:r,width:i}=e.size(t);if(!Number.isSafeInteger(r)||r<=0)throw Error(`Bitmap: invalid height=${r}, expected positive safe integer dimension`);if(!Number.isSafeInteger(i)||i<=0)throw Error(`Bitmap: invalid width=${i}, expected positive safe integer dimension`);if(this.height=r,this.width=i,this.tailMask=ce(0,i&31||32),this.words=Math.ceil(i/32)|0,this.fullWords=Math.floor(i/32)|0,this.value=new Uint32Array(this.words*r),this.defined=new Uint32Array(this.value.length),n){if(n.length!==r)throw Error(`Bitmap: data height mismatch: exp=${r} got=${n.length}`);for(let e=0;e<r;e++){let t=n[e];if(!t||t.length!==i)throw Error(`Bitmap: data width mismatch at y=${e}: exp=${i} got=${t?.length}`);for(let n=0;n<i;n++)this.set(n,e,t[n])}}}point(e){return this.get(e.x,e.y)}isInside(e){return 0<=e.x&&e.x<this.width&&0<=e.y&&e.y<this.height}size(e){if(!e)return{height:this.height,width:this.width};let{x:t,y:n}=this.xy(e);return{height:this.height-n,width:this.width-t}}xy(e){if(typeof e==`number`&&(e={x:e,y:e}),!Number.isSafeInteger(e.x))throw Error(`Bitmap: invalid x=${e.x}`);if(!Number.isSafeInteger(e.y))throw Error(`Bitmap: invalid y=${e.y}`);return e.x=re(e.x,this.width),e.y=re(e.y,this.height),e}wordIndex(e,t){return t*this.words+(e>>>5)}bitIndex(e,t){return{word:this.wordIndex(e,t),bit:e&31}}isDefined(e,t){let n=this.wordIndex(e,t),r=se(e);return(this.defined[n]&r)!==0}get(e,t){let n=this.wordIndex(e,t),r=se(e);return(this.value[n]&r)!==0}maskWord(e,t,n){let{defined:r,value:i}=this;r[e]|=t,i[e]=i[e]&~t|-n&t}set(e,t,n){n!==void 0&&this.maskWord(this.wordIndex(e,t),se(e),n)}fillRectConst(e,t,n,r,i){if(n<=0||r<=0||i===void 0)return;let{value:a,defined:o,words:s}=this,c=e>>>5,l=e+n-1>>>5,u=e&31,d=e+n-1&31;for(let e=0;e<r;e++){let n=(t+e)*s;if(c===l){let e=ce(u,d-u+1);this.maskWord(n+c,e,i);continue}this.maskWord(n+c,ce(u,32-u),i);for(let e=c+1;e<l;e++)o[n+e]=4294967295,a[n+e]=i?4294967295:0;this.maskWord(n+l,ce(0,d+1),i)}}rectWords(e,t,n,r,i){for(let a=0;a<r;a++){let r=t+a;for(let t=0;t<n;){let o=e+t,{bit:s,word:c}=this.bitIndex(o,r),l=Math.min(32-s,n-t);i(c,o,t,a,l),t+=l}}}rect(t,n,r){let{x:i,y:a}=this.xy(t),{height:o,width:s}=e.size(n,this.size({x:i,y:a}));if(typeof r!=`function`)return this.fillRectConst(i,a,s,o,r),this;let{defined:c,value:l}=this;return this.rectWords(i,a,s,o,(e,t,n,i,a)=>{let o=0,s=l[e];for(let e=0;e<a;e++){let a=se(t+e),c=r({x:n+e,y:i},(s&a)!==0);c!==void 0&&(o|=a,s=s&~a|-c&a)}c[e]|=o,l[e]=s}),this}rectRead(t,n,r){let{x:i,y:a}=this.xy(t),{height:o,width:s}=e.size(n,this.size({x:i,y:a})),{value:c}=this;return this.rectWords(i,a,s,o,(e,t,n,i,a)=>{let o=c[e];for(let e=0;e<a;e++){let a=se(t+e);r({x:n+e,y:i},(o&a)!==0)}}),this}hLine(e,t,n){return this.rect(e,{width:t,height:1},n)}vLine(e,t,n){return this.rect(e,{width:1,height:t},n)}border(t=2,n){if(!Number.isSafeInteger(t)||t<=0)throw Error(`Bitmap.border: invalid size=${t}`);let r=new e({height:this.height+2*t,width:this.width+2*t});return r.rect(0,1/0,n),r.embed({x:t,y:t},this),r}embed(t,n){let{x:r,y:i}=this.xy(t),{height:a,width:o}=e.size(n.size(),this.size({x:r,y:i}));if(o<=0||a<=0)return this;let{value:s,defined:c}=this,{words:l,value:u}=n;for(let e=0;e<a;e++){let t=e*l;for(let a=0;a<o;){let d=r+a,{word:f,bit:p}=this.bitIndex(d,i+e),{word:m,bit:h}=n.bitIndex(a,e),g=Math.min(32-p,o-a),_=u[m],v=h&&m+1<t+l?u[m+1]:0,y=h?(_>>>h|v<<32-h)>>>0:_,b=ce(p,g),x=(y&ce(0,g))<<p>>>0;c[f]|=b,s[f]=s[f]&~b|x,a+=g}}return this}rectSlice(t,n=this.size()){let{x:r,y:i}=this.xy(t),{height:a,width:o}=e.size(n,this.size({x:r,y:i})),s=new e({height:a,width:o});return this.rectRead({x:r,y:i},{height:a,width:o},(e,t)=>{this.isDefined(r+e.x,i+e.y)&&s.set(e.x,e.y,t)}),s}transpose(){let{height:t,width:n,value:r,defined:i,words:a}=this,o=new e({height:n,width:t}),{words:s,value:c,defined:l,tailMask:u}=o,d=new Uint32Array(32),f=new Uint32Array(32);for(let e=0;e<t;e+=32)for(let p=0;p<a;p++){let a=Math.min(32,t-e);for(let t=0;t<a;t++){let n=this.wordIndex(32*p,e+t);d[t]=r[n],f[t]=i[n]}d.fill(0,a),f.fill(0,a),O(d),O(f);for(let t=0;t<32;t++){let r=p*32+t;if(r>=n)break;let i=o.wordIndex(e,r),a=e>>>5==s-1?u:4294967295;c[i]=d[t]&a,l[i]=f[t]&a}}return o}negate(){let e=this.defined.length;for(let t=0;t<e;t++)this.value[t]=~this.value[t],this.defined[t]=4294967295;return this}scale(t){if(!Number.isSafeInteger(t)||t>1024)throw Error(`invalid scale factor: ${t}`);let{height:n,width:r}=this;return new e({height:t*n,width:t*r}).rect({x:0,y:0},1/0,({x:e,y:n})=>this.get(e/t|0,n/t|0))}clone(){let t=new e(this.size());return t.defined.set(this.defined),t.value.set(this.value),t}assertDrawn(){let{height:e,width:t,defined:n,tailMask:r,fullWords:i,words:a}=this;if(!(!e||!t))for(let t=0;t<e;t++){let e=t*a;for(let t=0;t<i;t++)if(n[e+t]!==4294967295)throw Error(`Invalid color type=undefined`);if(a!==i&&(n[e+i]&r)!==r)throw Error(`Invalid color type=undefined`)}}countPatternInRow(e,t,...n){if(!Number.isSafeInteger(t)||t<=0||t>=32)throw Error(`wrong patternLen`);let r=(1<<t)-1,{height:i,width:a,value:o,words:s}=this;if(!Number.isSafeInteger(e)||e<0||e>=i)return 0;let c=0,l=this.wordIndex(0,e);for(let e=0,i=0;e<s;e++){let u=o[l+e],d=e===s-1&&a&31||32;for(let a=0;a<d;a++)if(i=(i<<1|u>>>a&1)&r,!(e*32+a+1<t)){for(let e of n)if(i===e){c++;break}}}return c}getRuns(e,t){let{height:n,width:r,value:i,words:a}=this;if(r===0||!Number.isSafeInteger(e)||e<0||e>=n)return;let o=0,s,c=this.wordIndex(0,e);for(let e=0;e<a;e++){let n=i[c+e],l=e===a-1&&r&31||32;for(let e=0;e<l;e++){let r=(n&1<<e)!=0;if(r===s){o++;continue}s!==void 0&&t(o,s),s=r,o=1}}s!==void 0&&t(o,s)}popcnt(){let{height:e,width:t,words:n,fullWords:r,tailMask:i}=this;if(!e||!t)return 0;let a=0;for(let t=0;t<e;t++){let e=t*n;for(let t=0;t<r;t++)a+=ie(this.value[e+t]);n!==r&&(a+=ie(this.value[e+r]&i))}return a}countBoxes2x2(e){let{height:t,width:n,words:r}=this;if(n<2||!Number.isSafeInteger(e)||e<0||e+1>=t)return 0;let i=this.wordIndex(0,e),a=this.wordIndex(0,e+1),o=n&31?ce(0,n-1&31):2147483647,s=0;for(let e=0;e<r;e++){let t=this.value[i+e],n=this.value[a+e],c=~(t^n)>>>0,l=e+1<r?this.value[i+e+1]>>>0:0,u=~(t^(t>>>1|(l&1)<<31)>>>0)>>>0,d=e+1<r?this.value[a+e+1]>>>0:0,f=~(n^(n>>>1|(d&1)<<31)>>>0)>>>0,p=(c&u&f)>>>0;e===r-1&&(p&=o),s+=ie(p)}return s}toString(){let e=String.fromCharCode(te.newline),t=``;for(let n=0;n<this.height;n++){let r=``;for(let e=0;e<this.width;e++){let t=this.get(e,n);r+=this.isDefined(e,n)?t?`X`:` `:`?`}t+=r+(n+1===this.height?``:e)}return t}toRaw(){let e=Array.from({length:this.height},()=>Array(this.width));for(let t=0;t<this.height;t++){let n=e[t];for(let e=0;e<this.width;e++)n[e]=this.get(e,t)}return e}toASCII(){let{height:e,width:t}=this,n=``;for(let r=0;r<e;r+=2){for(let i=0;i<t;i++){let t=this.get(i,r),a=r+1>=e?!0:this.get(i,r+1);!t&&!a?n+=`█`:!t&&a?n+=`▀`:t&&!a?n+=`▄`:t&&a&&(n+=` `)}n+=String.fromCharCode(te.newline)}return n}toTerm(){let e=String.fromCharCode(te.reset),t=e+`[0m`,n=e+`[1;47m  `+t,r=e+`[40m  `+t,i=String.fromCharCode(te.newline),a=``;for(let e=0;e<this.height;e++){for(let t=0;t<this.width;t++){let i=this.get(t,e);a+=i?r:n}a+=i}return a}toSVG(e=!0){let t=`<svg viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">`,n=``,r;return this.rectRead(0,1/0,(i,a)=>{if(!a)return;let{x:o,y:s}=i;if(!e){t+=`<rect x="${o}" y="${s}" width="1" height="1" />`;return}let c=`M${o} ${s}`;if(r){let e=`m${o-r.x} ${s-r.y}`;e.length<=c.length&&(c=e)}let l=o<10?`H${o}`:`h-1`;n+=`${c}h1v1${l}Z`,r=i}),e&&(t+=`<path d="${n}"/>`),t+=`</svg>`,t}toGIF(){let e=e=>[e&255,e>>>8&255],t=[...e(this.width),...e(this.height)],n=[];this.rectRead(0,1/0,(e,t)=>n.push(+(t===!0)));let r=[71,73,70,56,55,97,...t,246,0,0,255,255,255,...E(381,0),44,0,0,0,0,...t,0,7],i=Math.floor(n.length/126);for(let e=0;e<i;e++)r.push(127,128,...n.slice(126*e,126*(e+1)).map(e=>+e));return r.push(n.length%126+1,128,...n.slice(i*126).map(e=>+e)),r.push(1,129,0,59),new Uint8Array(r)}toImage(e=!1){let{height:t,width:n}=this.size(),r=new Uint8Array(t*n*(e?3:4)),i=0;for(let a=0;a<t;a++)for(let t=0;t<n;t++){let n=this.get(t,a)?0:255;r[i++]=n,r[i++]=n,r[i++]=n,e||(r[i++]=255)}return{height:t,width:n,data:r}}},ue=Object.freeze([`low`,`medium`,`quartile`,`high`]),de=Object.freeze([`numeric`,`alphanumeric`,`byte`,`kanji`,`eci`]),k=[26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],fe={low:[7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],medium:[10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],quartile:[13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],high:[17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]},pe={low:[1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],medium:[1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],quartile:[1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],high:[1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]},me=Object.freeze({size:Object.freeze({encode:e=>21+4*(e-1),decode:e=>(e-17)/4}),sizeType:e=>Math.floor((e+7)/17),alignmentPatterns(e){if(e===1)return[];let t=me.size.encode(e)-6-1,n=t-6,r=Math.ceil(n/28),i=Math.floor(n/r);i%2?i+=1:n%r*2>=r&&(i+=2);let a=[6];for(let e=1;e<r;e++)a.push(t-(r-e)*i);return a.push(t),a},ECCode:Object.freeze({low:1,medium:0,quartile:3,high:2}),formatMask:21522,formatBits(e,t){let n=me.ECCode[e]<<3|t,r=n;for(let e=0;e<10;e++)r=r<<1^(r>>9)*1335;return(n<<10|r)^me.formatMask},versionBits(e){let t=e;for(let e=0;e<12;e++)t=t<<1^(t>>11)*7973;return e<<12|t},alphabet:Object.freeze({numeric:D(`0123456789`),alphanumerc:D(`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`)}),lengthBits(e,t){return{numeric:[10,12,14],alphanumeric:[9,11,13],byte:[8,16,16],kanji:[8,10,12],eci:[0,0,0]}[t][me.sizeType(e)]},modeBits:Object.freeze({numeric:`0001`,alphanumeric:`0010`,byte:`0100`,kanji:`1000`,eci:`0111`}),capacity(e,t){let n=k[e-1],r=fe[t][e-1],i=pe[t][e-1],a=Math.floor(n/i)-r,o=i-n%i;return{words:r,numBlocks:i,shortBlocks:o,blockLen:a,capacity:(n-r*i)*8,total:(r+a)*i+i-o}}}),he=Object.freeze([(e,t)=>(e+t)%2==0,(e,t)=>t%2==0,(e,t)=>e%3==0,(e,t)=>(e+t)%3==0,(e,t)=>(Math.floor(t/2)+Math.floor(e/3))%2==0,(e,t)=>e*t%2+e*t%3==0,(e,t)=>(e*t%2+e*t%3)%2==0,(e,t)=>((e+t)%2+e*t%3)%2==0]),A={tables:(e=>{let t=E(256,0),n=E(256,0);for(let r=0,i=1;r<256;r++)t[r]=i,n[i]=r,i<<=1,i&256&&(i^=e);return{exp:t,log:n}})(285),exp:e=>A.tables.exp[e],log(e){if(e===0)throw Error(`GF.log: invalid arg=${e}`);return A.tables.log[e]%255},mul(e,t){return e===0||t===0?0:A.tables.exp[(A.tables.log[e]+A.tables.log[t])%255]},add:(e,t)=>e^t,pow:(e,t)=>A.tables.exp[A.tables.log[e]*t%255],inv(e){if(e===0)throw Error(`GF.inverse: invalid arg=${e}`);return A.tables.exp[255-A.tables.log[e]]},polynomial(e){if(e.length==0)throw Error(`GF.polymomial: invalid length`);if(e[0]!==0)return e;let t=0;for(;t<e.length-1&&e[t]==0;t++);return e.slice(t)},monomial(e,t){if(e<0)throw Error(`GF.monomial: invalid degree=${e}`);if(t==0)return[0];let n=E(e+1,0);return n[0]=t,A.polynomial(n)},degree:e=>e.length-1,coefficient:(e,t)=>e[A.degree(e)-t],mulPoly(e,t){if(e[0]===0||t[0]===0)return[0];let n=E(e.length+t.length-1,0);for(let r=0;r<e.length;r++)for(let i=0;i<t.length;i++)n[r+i]=A.add(n[r+i],A.mul(e[r],t[i]));return A.polynomial(n)},mulPolyScalar(e,t){if(t==0)return[0];if(t==1)return e;let n=E(e.length,0);for(let r=0;r<e.length;r++)n[r]=A.mul(e[r],t);return A.polynomial(n)},mulPolyMonomial(e,t,n){if(t<0)throw Error(`GF.mulPolyMonomial: invalid degree`);if(n==0)return[0];let r=E(e.length+t,0);for(let t=0;t<e.length;t++)r[t]=A.mul(e[t],n);return A.polynomial(r)},addPoly(e,t){if(e[0]===0)return t;if(t[0]===0)return e;let n=e,r=t;n.length>r.length&&([n,r]=[r,n]);let i=E(r.length,0),a=r.length-n.length,o=r.slice(0,a);for(let e=0;e<o.length;e++)i[e]=o[e];for(let e=a;e<r.length;e++)i[e]=A.add(n[e-a],r[e]);return A.polynomial(i)},remainderPoly(e,t){let n=Array.from(e);for(let r=0;r<e.length-t.length+1;r++){let e=n[r];if(e!==0)for(let i=1;i<t.length;i++)t[i]!==0&&(n[r+i]=A.add(n[r+i],A.mul(t[i],e)))}return n.slice(e.length-t.length+1,n.length)},divisorPoly(e){let t=[1];for(let n=0;n<e;n++)t=A.mulPoly(t,[1,A.pow(2,n)]);return t},evalPoly(e,t){if(t==0)return A.coefficient(e,0);let n=e[0];for(let r=1;r<e.length;r++)n=A.add(A.mul(t,n),e[r]);return n},euclidian(e,t,n){A.degree(e)<A.degree(t)&&([e,t]=[t,e]);let r=e,i=t,a=[0],o=[1];for(;2*A.degree(i)>=n;){let e=r,t=a;if(r=i,a=o,r[0]===0)throw Error(`rLast[0] === 0`);i=e;let n=[0],s=A.inv(r[0]);for(;A.degree(i)>=A.degree(r)&&i[0]!==0;){let e=A.degree(i)-A.degree(r),t=A.mul(i[0],s);n=A.addPoly(n,A.monomial(e,t)),i=A.addPoly(i,A.mulPolyMonomial(r,e,t))}if(n=A.mulPoly(n,a),o=A.addPoly(n,t),A.degree(i)>=A.degree(r))throw Error(`Division failed r: ${i}, rLast: ${r}`)}let s=A.coefficient(o,0);if(s==0)throw Error(`sigmaTilde(0) was zero`);let c=A.inv(s);return[A.mulPolyScalar(o,c),A.mulPolyScalar(i,c)]}};function ge(e){return{encode(t){let n=A.divisorPoly(e),r=Array.from(t);return r.push(...n.slice(0,-1).fill(0)),Uint8Array.from(A.remainderPoly(r,n))},decode(t){let n=t.slice(),r=A.polynomial(Array.from(t)),i=E(e,0),a=!1;for(let t=0;t<e;t++){let e=A.evalPoly(r,A.exp(t));i[i.length-1-t]=e,e!==0&&(a=!0)}if(!a)return n;i=A.polynomial(i);let o=A.monomial(e,1),[s,c]=A.euclidian(o,i,e),l=E(A.degree(s),0),u=0;for(let e=1;e<256&&u<l.length;e++)A.evalPoly(s,e)===0&&(l[u++]=A.inv(e));if(u!==l.length)throw Error(`RS.decode: invalid errors number`);for(let e=0;e<l.length;e++){let t=n.length-1-A.log(l[e]);if(t<0)throw Error(`RS.decode: invalid error location`);let r=A.inv(l[e]),i=1;for(let t=0;t<l.length;t++)e!==t&&(i=A.mul(i,A.add(1,A.mul(l[t],r))));n[t]=A.add(n[t],A.mul(A.evalPoly(c,r),A.inv(i)))}return n}}}function _e(e,t){let{words:n,shortBlocks:r,numBlocks:i,blockLen:a,total:o}=me.capacity(e,t),s=ge(n);return{encode(e){let t=[],n=[];for(let o=0;o<i;o++){let i=a+(o<r?0:1);t.push(e.subarray(0,i)),n.push(s.encode(e.subarray(0,i))),e=e.subarray(i)}let o=ae(t),c=ae(n),l=new Uint8Array(o.length+c.length);return l.set(o),l.set(c,o.length),l},decode(e){if(e.length!==o)throw Error(`interleave.decode: len(data)=${e.length}, total=${o}`);let t=[];for(let e=0;e<i;e++){let i=e<r;t.push(new Uint8Array(n+a+ +!i))}let c=0;for(let n=0;n<a;n++)for(let r=0;r<i;r++)t[r][n]=e[c++];for(let n=r;n<i;n++)t[n][a]=e[c++];for(let o=a;o<a+n;o++)for(let n=0;n<i;n++){let i=n<r;t[n][o+ +!i]=e[c++]}let l=[];for(let e of t)l.push(...Array.from(s.decode(e)).slice(0,-n));return Uint8Array.from(l)}}}function ve(e,t,n,r=!1){let i=me.size.encode(e),a=new le(i+2),o=new le(3).rect(0,3,!0).border(1,!1).border(1,!0).border(1,!1);a=a.embed(0,o).embed({x:-o.width,y:0},o).embed({x:0,y:-o.height},o),a=a.rectSlice(1,i);let s=new le(1).rect(0,1,!0).border(1,!1).border(1,!0),c=me.alignmentPatterns(e);for(let e of c)for(let t of c)a.isDefined(t,e)||a.embed({x:t-2,y:e-2},s);a=a.hLine({x:0,y:6},1/0,({x:e})=>a.isDefined(e,6)?void 0:e%2==0).vLine({x:6,y:0},1/0,({y:e})=>a.isDefined(6,e)?void 0:e%2==0);{let e=me.formatBits(t,n),o=t=>!r&&(e>>t&1)==1;for(let e=0;e<6;e++)a.set(8,e,o(e));for(let e=6;e<8;e++)a.set(8,e+1,o(e));for(let e=8;e<15;e++)a.set(8,i-15+e,o(e));for(let e=0;e<8;e++)a.set(i-e-1,8,o(e));for(let e=8;e<9;e++)a.set(15-e-1+1,8,o(e));for(let e=9;e<15;e++)a.set(15-e-1,8,o(e));a.set(8,i-8,!r)}if(e>=7){let t=me.versionBits(e);for(let e=0;e<18;e+=1){let n=!r&&(t>>e&1)==1,o=Math.floor(e/3),s=e%3+i-8-3;a.set(s,o,n),a.set(o,s,n)}}return a}function ye(e,t,n){let r=e,i=r.height,a=he[t],o=-1,s=i-1;for(let e=i-1;e>0;e-=2){for(e==6&&(e=5);;s+=o){for(let t=0;t<2;t+=1){let i=e-t;r.isDefined(i,s)||n(i,s,a(i,s))}if(s+o<0||s+o>=i)break}o=-o}}function be(e){let t=`numeric`;for(let n of e)if(!me.alphabet.numeric.has(n)&&(t=`alphanumeric`,!me.alphabet.alphanumerc.has(n)))return`byte`;return t}function xe(e){if(typeof e!=`string`)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function Se(e,t,n,r,i=xe){let a=``,o=n.length;if(r===`numeric`){let e=me.alphabet.numeric.decode(n.split(``)),t=e.length;for(let n=0;n<t-2;n+=3)a+=T(e[n]*100+e[n+1]*10+e[n+2],10);t%3==1?a+=T(e[t-1],4):t%3==2&&(a+=T(e[t-2]*10+e[t-1],7))}else if(r===`alphanumeric`){let e=me.alphabet.alphanumerc.decode(n.split(``)),t=e.length;for(let n=0;n<t-1;n+=2)a+=T(e[n]*45+e[n+1],11);t%2==1&&(a+=T(e[t-1],6))}else if(r===`byte`){let e=i(n);o=e.length,a=Array.from(e).map(e=>T(e,8)).join(``)}else throw Error(`encode: unsupported type`);let{capacity:s}=me.capacity(e,t),c=T(o,me.lengthBits(e,r)),l=me.modeBits[r]+c+a;if(l.length>s)throw Error(`Capacity overflow`);l+=`0`.repeat(Math.min(4,Math.max(0,s-l.length))),l.length%8&&(l+=`0`.repeat(8-l.length%8));for(let e=0;l.length!==s;e++)l+=`1110110000010001`[e%16];let u=Uint8Array.from(l.match(/(.{8})/g).map(e=>Number(`0b${e}`)));return _e(e,t).encode(u)}function j(e,t,n,r,i=!1){let a=ve(e,t,r,i),o=0,s=8*n.length;if(ye(a,r,(e,t,r)=>{let i=!1;o<s&&(i=(n[o>>>3]>>(7-o&7)&1)!=0,o++),a.set(e,t,i!==r)}),o!==s)throw Error(`QR: bytes left after draw`);return a}var Ce=e=>{let t=e.map(e=>e?`1`:`0`).join(``);return{len:t.length,n:Number(`0b${t}`)}},we=[!0,!1,!0,!0,!0,!1,!0],Te=[!1,!1,!1,!1],Ee=Ce([...we,...Te]),De=Ce([...Te,...we]);function Oe(e){let t=e,{width:n,height:r}=t,i=t.transpose(),a=0;for(let e=0;e<r;e++)t.getRuns(e,e=>{e>=5&&(a+=3+(e-5))});for(let e=0;e<n;e++)i.getRuns(e,e=>{e>=5&&(a+=3+(e-5))});let o=0;for(let e=0;e<r-1;e++)o+=3*t.countBoxes2x2(e);let s=0;for(let e=0;e<r;e++)s+=40*t.countPatternInRow(e,Ee.len,Ee.n,De.n);for(let e=0;e<n;e++)s+=40*i.countPatternInRow(e,Ee.len,Ee.n,De.n);let c=r*n,l=t.popcnt(),u=10*Math.ceil(Math.max(0,Math.abs(l*100-c*50)-c*5)/(c*5));return a+o+s+u}function ke(e,t,n,r){if(r===void 0){let i=oe();for(let r=0;r<he.length;r++)i.add(Oe(j(e,t,n,r,!0)),r);r=i.get()}if(r===void 0)throw Error(`Cannot find mask`);return j(e,t,n,r)}function Ae(e){if(!ue.includes(e))throw Error(`Invalid error correction mode=${e}. Expected: ${ue}`)}function je(e){if(!de.includes(e))throw Error(`Encoding: invalid mode=${e}. Expected: ${de}`);if(e===`kanji`||e===`eci`)throw Error(`Encoding: ${e} is not supported (yet?).`)}function M(e){if(![0,1,2,3,4,5,6,7].includes(e)||!he[e])throw Error(`Invalid mask=${e}. Expected number [0..7]`)}function Me(e,t=`raw`,n={}){let r=n,i=r.ecc===void 0?`medium`:r.ecc;Ae(i);let a=r.encoding===void 0?be(e):r.encoding;je(a),r.mask!==void 0&&M(r.mask);let o=r.version,s,c=Error(`Unknown error`);if(o!==void 0)ne(o),s=Se(o,i,e,a,r.textEncoder);else for(let t=1;t<=40;t++)try{s=Se(t,i,e,a,r.textEncoder),o=t;break}catch(e){c=e}if(!o||!s)throw c;let l=ke(o,i,s,r.mask);l.assertDrawn();let u=r.border===void 0?2:r.border;if(!Number.isSafeInteger(u)||u<=0)throw Error(`invalid border=${u}`);if(l=l.border(u,!1),r.scale!==void 0&&(l=l.scale(r.scale)),t===`raw`)return l.toRaw();if(t===`ascii`)return l.toASCII();if(t===`svg`)return l.toSVG(r.optimize);if(t===`gif`)return l.toGIF();if(t===`term`)return l.toTerm();throw Error(`Unknown output: ${t}`)}var Ne=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),N=o(((e,t)=>{t.exports=Ne()}))();function Pe({canonical_url:e,purchase_url:t}){let n=new Date().toISOString().slice(0,10),r=e??window.location.href,i=Me(r,`svg`);return(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`2em`,alignItems:`flex-start`},children:[(0,N.jsxs)(`ul`,{children:[(0,N.jsx)(`li`,{children:n}),t&&(0,N.jsx)(`li`,{children:(0,N.jsx)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,children:`Purchase / support`})}),(0,N.jsx)(`li`,{children:`Mentions do not imply endorsement: entries here simply mean "this may be worth looking into".`}),(0,N.jsx)(`li`,{children:`Made for personal use. No guarantee of completeness, accuracy, or fitness for any purpose.`})]}),(0,N.jsx)(`a`,{className:`own-indicator`,href:r,target:`_blank`,rel:`noopener noreferrer`,children:(0,N.jsxs)(`figure`,{style:{margin:0,textAlign:`center`,flexShrink:0},children:[(0,N.jsx)(`div`,{style:{width:`8em`,height:`8em`},dangerouslySetInnerHTML:{__html:i}}),(0,N.jsx)(`figcaption`,{children:`Latest version online`})]})})]})}var Fe=`who's who`;function Ie(e){return[...e.parent_headings,e.heading]}function Le(e){let t=Ie(e).join(` -- `);e.headingⵧfull&&(t+=` "${e.headingⵧfull}"`);let n=[e.description??``].filter(e=>!!e).join(` `);return[t,n].filter(e=>!!e).join(` = `)}function Re(e){return e.parent_headings[0]===Fe}function ze(e){return e.hasꓽevent!==`no`}var Be=(e,t)=>{let n=e._source.localeCompare(t._source);return n===0?e._lineno-t._lineno:n},Ve=(e,t)=>{let n=Le(e).toLowerCase(),r=Le(t).toLowerCase();y({compareꓽDigitalHoardingMeme:Ve}).ensure(n!==r,`duplicated lines should be equal (case insensitive) check input data! "${n}"`);let i=Ie(e).join(`ⵧ`).toLowerCase(),a=Ie(t).join(`ⵧ`).toLowerCase();return i===a?n.localeCompare(r):a.startsWith(i)?-1:i.startsWith(a)?1:i.localeCompare(a)},He=!0,P=`Invariant failed`;function Ue(e,t){if(!e){if(He)throw Error(P);var n=typeof t==`function`?t():t,r=n?`${P}: ${n}`:P;throw Error(r)}}var We=Ue,Ge=/^https?:\/\/\S+/g;function F(e){return!!e?.match(Ge)}var Ke=/^\d{4}-\d{2}-\d{2}/,qe=/^\d{4}-\d{2}/,Je=/^\d{4}/;function Ye(e){return!!e?.match(Ke)||!!e?.match(qe)||!!e?.match(Je)}function Xe(e,t){let n=y({addꓽutm_params:Xe}),r=Object.values(t).filter(e=>e!==void 0);n.forⵧparam({params:t}).require(r.length>0,`at least one UTM param must be provided`);let i=new URL(e);for(let e of[`utm_source`,`utm_medium`,`utm_campaign`,`utm_term`,`utm_content`])t[e]!==void 0&&i.searchParams.set(e,t[e]);return i.toString()}function Ze({s:e,memeplex:t,utm_source:n}){let r=e=>n?Xe(e,{utm_source:n}):e;return e.split(` `).flatMap((e,n)=>{if(F(e)){let t=new URL(e),i=[],a=t.pathname.split(`/`).filter(Boolean),o=(()=>{let e=t.host.startsWith(`www.`)?t.host.slice(4):t.host,o=e;if(e===`en.wikipedia.org`)return`wikipedia`;if(e===`github.com`){let t=a.slice(0,2),s=[...t];s.at(-1)===s.at(-2)&&s.pop(),o=[e,...s].join(`/`),s.length>=1&&i.push((0,N.jsx)(`a`,{href:r(`https://${e}/${s.join(`/`)}`),target:`_blank`,className:`own-indicator`,rel:`noopener noreferrer`,children:(0,N.jsx)(`img`,{className:`o⋄inline`,src:`https://img.shields.io/github/stars/${s.join(`/`)}?style=social`,alt:`stars`})},`${n}-stars`)),t.length===2&&i.push((0,N.jsx)(`a`,{href:r(`https://${e}/${t.join(`/`)}`),target:`_blank`,className:`own-indicator`,rel:`noopener noreferrer`,children:(0,N.jsx)(`img`,{className:`o⋄inline`,src:`https://img.shields.io/github/forks/${t.join(`/`)}?style=social`,alt:`forks`})},`${n}-forks`))}return o})();return i.unshift((0,N.jsx)(`a`,{href:r(e),target:`_blank`,rel:`noopener noreferrer`,children:o},`${n}-url`)),i}if(e===`=`||e===`--`||e===`ⵧ`)return(0,N.jsx)(`span`,{className:`separator`,children:e},n);if(!t.abbreviations[e])Object.values(t.abbreviations)[e];else return(0,N.jsx)(`abbr`,{title:t.abbreviations[e]?.headingⵧfull,children:e},n);return e}).flatMap(e=>[e,` `])}var I=l(S(),1);function Qe(e){let{_debug:t,meme:n,children:r,style:i={}}=e;return(0,N.jsxs)(`div`,{className:`meme-line`,style:i,children:[t&&[(0,N.jsx)(`small`,{className:`debug`,children:`${n._lineno}: ${n._source}`}),(0,N.jsx)(`br`,{})],r]},n._lineno)}function $e(e){return Object.keys(e.abbreviations).length}function et(e){let{_debug:t,isOpen:n,memeplex:r}=e,i=Object.entries(r.abbreviations).map(([t,n])=>{let r=n.headingⵧfull;return(0,N.jsxs)(Qe,{...e,meme:n,children:[(0,N.jsx)(`span`,{className:`heading`,children:t}),` = `,(0,N.jsx)(Ze,{s:r,...e})]})});return(0,N.jsxs)(`details`,{open:n??!t,children:[(0,N.jsx)(`summary`,{children:(0,N.jsxs)(`h2`,{children:[`Abbreviations (`,i.length,` entries)`]})}),i]})}function tt(e){console.log(`🔄 <Comments/>`,e);let{memeplex:t}=e;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`h1`,{children:`Comments`}),t.comments.map(t=>(0,N.jsx)(Qe,{...e,meme:t,children:(0,N.jsx)(Ze,{s:t._source,...e})}))]})}var nt=[`#b3cde3`,`#ccebc5`,`#decbe4`,`#ffffcc`,`#e5d8bd`,`#fddaec`].map(e=>e+`55`);function rt(e){let{_debug:t,meme:n,heading_path_counters:r=[]}=e,i=n.parent_headings.map((n,i)=>(0,N.jsx)(I.Fragment,{children:(0,N.jsxs)(`span`,{className:`parent-heading`,"data-h-index":r[i]??0,style:{backgroundColor:nt[(r[i]??0)%nt.length]},children:[(0,N.jsx)(Ze,{s:n,...e}),t&&(0,N.jsxs)(`span`,{className:`debug`,children:[`#`,r[i]??0]}),(0,N.jsx)(`span`,{className:`separator`,children:` ⵧ `})]})},i));i.push((0,N.jsxs)(`span`,{className:`heading`,"data-h-index":r[n.parent_headings.length]??0,style:{backgroundColor:nt[(r[n.parent_headings.length]??0)%nt.length]},children:[(0,N.jsx)(Ze,{s:n.headingⵧshortened||n.heading,...e}),!!n.headingⵧfull&&(0,N.jsx)(Ze,{s:`(${n.headingⵧfull})`,...e}),t&&(0,N.jsxs)(`span`,{className:`debug`,children:[`#`,r[n.parent_headings.length]??0]})]},`leaf`));let a=n.description?(0,N.jsx)(`span`,{className:`description`,children:(0,N.jsx)(Ze,{s:n.description,...e})}):null;return(0,N.jsxs)(Qe,{...e,meme:n,style:{},children:[i,a&&(0,N.jsx)(`span`,{className:`separator`,children:` = `}),a]})}function it(e){let{_debug:t,heading:n,memes:r,isOpen:i,bleed:a}=e,o=[],s=r.map((t,n)=>{let i=Ie(t),a=r[n-1]?Ie(r[n-1]):[],s=!1;return o=i.map((e,t)=>{if(s)return 0;let n=o[t]??0;return e===a[t]?n:(s=!0,n+1)}),(0,N.jsx)(rt,{...e,meme:t,heading_path_counters:o})});return(0,N.jsxs)(`details`,{open:i??!t,children:[(0,N.jsx)(`summary`,{children:(0,N.jsxs)(`h2`,{children:[n,` (`,s.length,` entries)`]})}),a?(0,N.jsx)(`div`,{className:`memes--bleed`,children:s}):(0,N.jsx)(`div`,{style:{marginInlineStart:`-2ch`},children:s})]})}function at(e){return e.memes.filter(e=>e.hasꓽevent!==`pure`).filter(e=>!Re(e)).length}function ot(e){console.log(`🔄 <Memes/>`,e);let{memeplex:t}=e,n=t.memes.filter(e=>e.hasꓽevent!==`pure`).filter(e=>!Re(e)).sort(Ve);return(0,N.jsx)(it,{...e,memes:n,heading:`Mental models`,isOpen:!0,bleed:!0})}function st(e){return e.newsfeeds.length}function L(e){console.log(`🔄 <NewsFeeds/>`,e);let{_debug:t,isOpen:n,memeplex:r}=e,i=r.newsfeeds.map(t=>(0,N.jsx)(Qe,{...e,meme:t,children:(0,N.jsx)(Ze,{s:t._source,...e})}));return(0,N.jsxs)(`details`,{open:n??!t,children:[(0,N.jsx)(`summary`,{children:(0,N.jsxs)(`h2`,{children:[`Newsfeeds (`,i.length,` entries)`]})}),i]})}function ct(e){return e.memes.filter(e=>ze(e)).length}function lt(e){let{memeplex:t}=e,n=t.memes.filter(e=>ze(e)).sort(Ve);return(0,N.jsx)(it,{...e,memes:n,heading:`Timeline`,bleed:!0})}function ut(e){console.log(`🔄 <Todos/>`,e);let{memeplex:t}=e;return t.todos.map(t=>(0,N.jsx)(Qe,{...e,meme:t,children:(0,N.jsx)(Ze,{s:t._source,...e})}))}function dt(e){return e.memes.filter(e=>Re(e)).length}function ft(e){console.log(`🔄 <WhoIsWho/>`,e);let{memeplex:t}=e,n=t.memes.filter(e=>Re(e)).map(e=>({...e,parent_headings:e.parent_headings.slice(1)})).sort(Ve);return(0,N.jsx)(it,{...e,memes:n,heading:`Who's who`})}function pt(e){console.log(`🔄 <Memeplex/>`,e);let t={...e,utm_source:e.utm_source??`yvem-mental-models`};return(0,N.jsxs)(`div`,{className:`memeplex`,children:[(0,N.jsx)(`h1`,{children:e.memeplex.title||`Mental Models`}),(0,N.jsx)(Pe,{...t}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{children:`Table of contents`}),(0,N.jsxs)(`ul`,{children:[(0,N.jsx)(`li`,{children:(0,N.jsxs)(`a`,{href:`#section--main`,children:[`Mental models (`,at(t.memeplex),` entries)`]})}),(0,N.jsx)(`li`,{children:(0,N.jsxs)(`a`,{href:`#section--timeline`,children:[`Timeline (`,ct(t.memeplex),` entries)`]})}),(0,N.jsx)(`li`,{children:(0,N.jsxs)(`a`,{href:`#section--who-is-who`,children:[`Who's who (`,dt(t.memeplex),` entries)`]})}),(0,N.jsx)(`li`,{children:(0,N.jsxs)(`a`,{href:`#section--newsfeeds`,children:[`Newsfeeds (`,st(t.memeplex),` entries)`]})}),(0,N.jsx)(`li`,{children:(0,N.jsxs)(`a`,{href:`#section--abbreviations`,children:[`Abbreviations (`,$e(t.memeplex),` entries)`]})})]})]}),e._debug&&(0,N.jsx)(`div`,{children:(0,N.jsx)(tt,{...t})}),e._debug&&(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h1`,{children:`Todos`}),(0,N.jsx)(ut,{...t})]}),(0,N.jsx)(`div`,{id:`section--main`,className:`memeplex-section`,children:(0,N.jsx)(ot,{...t})}),(0,N.jsx)(`div`,{id:`section--timeline`,className:`memeplex-section`,children:(0,N.jsx)(lt,{...t})}),(0,N.jsx)(`div`,{id:`section--who-is-who`,className:`memeplex-section`,children:(0,N.jsx)(ft,{...t})}),(0,N.jsx)(`div`,{id:`section--newsfeeds`,className:`memeplex-section`,children:(0,N.jsx)(L,{...t})}),(0,N.jsx)(`div`,{id:`section--abbreviations`,className:`memeplex-section`,children:(0,N.jsx)(et,{...t})})]})}var mt=`modulepreload`,ht=function(e,t){return new URL(e,t).href},gt={},_t=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=ht(t,n),t in gt)return;gt[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:mt,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},vt=_t(()=>import(`./_entrypoint-cBGCefXP.js`).then(e=>e.memeplex),__vite__mapDeps([0,1]),import.meta.url);_t(()=>import(`./_entrypoint-CnrtP_OJ.js`).then(e=>e.memeplex),__vite__mapDeps([2,1]),import.meta.url);function yt(){return vt}function bt(e){return console.log(`🔄 <Root/>`,e),(0,N.jsx)(pt,{memeplex:(0,I.use)(yt()),_debug:!1})}var xt=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,ee=-1,C=5,te=-1;function w(){return g?!0:!(e.unstable_now()-te<C)}function ne(){if(g=!1,S){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&w());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,E=re.port2;re.port1.onmessage=ne,T=function(){E.postMessage(null)}}else T=function(){_(ne,0)};function ie(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),St=o(((e,t)=>{t.exports=xt()})),Ct=o((e=>{var t=S();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),wt=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Ct()})),Tt=o((e=>{var t=St(),n=S(),r=wt();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for(`react.element`),m=Symbol.for(`react.transitional.element`),h=Symbol.for(`react.portal`),g=Symbol.for(`react.fragment`),_=Symbol.for(`react.strict_mode`),v=Symbol.for(`react.profiler`),y=Symbol.for(`react.consumer`),b=Symbol.for(`react.context`),x=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),C=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),T=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function E(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case g:return`Fragment`;case v:return`Profiler`;case _:return`StrictMode`;case ee:return`Suspense`;case C:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case h:return`Portal`;case b:return e.displayName||`Context`;case y:return(e._context.displayName||`Context`)+`.Consumer`;case x:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function k(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function A(e,t){switch(k(me,t),k(pe,e),k(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),k(fe,e)}function ge(){de(fe),de(pe),de(me)}function _e(e){e.memoizedState!==null&&k(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(k(pe,e),k(fe,n))}function ve(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),Qf._currentValue=se)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function j(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return j(e.type,!1);case 11:return j(e.type.render,!1);case 1:return j(e.type,!0);case 31:return xe(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,Ee=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,Oe=t.unstable_shouldYield,ke=t.unstable_requestPaint,Ae=t.unstable_now,je=t.unstable_getCurrentPriorityLevel,M=t.unstable_ImmediatePriority,Me=t.unstable_UserBlockingPriority,Ne=t.unstable_NormalPriority,N=t.unstable_LowPriority,Pe=t.unstable_IdlePriority,Fe=t.log,Ie=t.unstable_setDisableYieldValue,Le=null,Re=null;function ze(e){if(typeof Fe==`function`&&Ie(e),Re&&typeof Re.setStrictMode==`function`)try{Re.setStrictMode(Le,e)}catch{}}var Be=Math.clz32?Math.clz32:P,Ve=Math.log,He=Math.LN2;function P(e){return e>>>=0,e===0?32:31-(Ve(e)/He|0)|0}var Ue=256,We=262144,Ge=4194304;function F(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=F(n))):i=F(o):i=F(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=F(n))):i=F(o)):i=F(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function I(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Be(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Qe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Qe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Be(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function $e(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function et(e,t){var n=t&-t;return n=n&42?1:tt(n),(n&(e.suspendedLanes|t))===0?n:0}function tt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function rt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function it(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var at=Math.random().toString(36).slice(2),ot=`__reactFiber$`+at,st=`__reactProps$`+at,L=`__reactContainer$`+at,ct=`__reactEvents$`+at,lt=`__reactListeners$`+at,ut=`__reactHandles$`+at,dt=`__reactResources$`+at,ft=`__reactMarker$`+at;function pt(e){delete e[ot],delete e[st],delete e[ct],delete e[lt],delete e[ut]}function mt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[L]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ot])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function ht(e){if(e=e[ot]||e[L]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function _t(e){var t=e[dt];return t||=e[dt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function vt(e){e[ft]=!0}var yt=new Set,bt={};function xt(e,t){Ct(e,t),Ct(e+`Capture`,t)}function Ct(e,t){for(bt[e]=t,e=0;e<t.length;e++)yt.add(t[e])}var Tt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Et={},Dt={};function Ot(e){return Te.call(Dt,e)?!0:Te.call(Et,e)?!1:Tt.test(e)?Dt[e]=!0:(Et[e]=!0,!1)}function kt(e,t,n){if(Ot(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function At(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function jt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Mt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Nt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Pt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){if(!e._valueTracker){var t=Nt(e)?`checked`:`value`;e._valueTracker=Pt(e,t,``+e[t])}}function It(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Nt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Lt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Rt=/[\n"\\]/g;function zt(e){return e.replace(Rt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Bt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Mt(t)):e.value!==``+Mt(t)&&(e.value=``+Mt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ht(e,o,Mt(n)):Ht(e,o,Mt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Mt(s):e.removeAttribute(`name`)}function Vt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ft(e);return}n=n==null?``:``+Mt(n),t=t==null?n:``+Mt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ft(e)}function Ht(e,t,n){t===`number`&&Lt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ut(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wt(e,t,n){if(t!=null&&(t=``+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Mt(n)}function Gt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Mt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ft(e)}function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Jt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Yt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Jt(e,o,t[o])}function Xt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Zt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Qt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function en(){}var tn=null;function R(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var z=null,nn=null;function rn(e){var t=ht(e);if(t&&(e=t.stateNode)){var n=e[st]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+zt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[st]||null;if(!a)throw Error(i(90));Bt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&It(r)}break a;case`textarea`:Wt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}}}var an=!1;function on(e,t,n){if(an)return e(t,n);an=!0;try{return e(t)}finally{if(an=!1,(z!==null||nn!==null)&&(vu(),z&&(t=z,e=nn,nn=z=null,rn(t),e)))for(t=0;t<e.length;t++)rn(e[t])}}function sn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[st]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var cn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),ln=!1;if(cn)try{var un={};Object.defineProperty(un,`passive`,{get:function(){ln=!0}}),window.addEventListener(`test`,un,un),window.removeEventListener(`test`,un,un)}catch{ln=!1}var dn=null,fn=null,pn=null;function mn(){if(pn)return pn;var e,t=fn,n=t.length,r,i=`value`in dn?dn.value:dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return pn=i.slice(e,1<r?1-r:void 0)}function B(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hn(){return!0}function gn(){return!1}function V(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?hn:gn,this.isPropagationStopped=gn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=hn)},persist:function(){},isPersistent:hn}),t}var H={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=V(H),vn=f({},H,{view:0,detail:0}),yn=V(vn),bn,xn,Sn,Cn=f({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Sn&&(Sn&&e.type===`mousemove`?(bn=e.screenX-Sn.screenX,xn=e.screenY-Sn.screenY):xn=bn=0,Sn=e),bn)},movementY:function(e){return`movementY`in e?e.movementY:xn}}),wn=V(Cn),Tn=V(f({},Cn,{dataTransfer:0})),En=V(f({},vn,{relatedTarget:0})),Dn=V(f({},H,{animationName:0,elapsedTime:0,pseudoElement:0})),On=V(f({},H,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),kn=V(f({},H,{data:0})),An={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},jn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Mn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Nn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mn[e])?!!t[e]:!1}function Pn(){return Nn}var Fn=V(f({},vn,{key:function(e){if(e.key){var t=An[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=B(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?jn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pn,charCode:function(e){return e.type===`keypress`?B(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?B(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),In=V(f({},Cn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ln=V(f({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pn})),Rn=V(f({},H,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=V(f({},Cn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Bn=V(f({},H,{newState:0,oldState:0})),Vn=[9,13,27,32],Hn=cn&&`CompositionEvent`in window,Un=null;cn&&`documentMode`in document&&(Un=document.documentMode);var Wn=cn&&`TextEvent`in window&&!Un,Gn=cn&&(!Hn||Un&&8<Un&&11>=Un),U=` `,Kn=!1;function qn(e,t){switch(e){case`keyup`:return Vn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Jn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Yn=!1;function Xn(e,t){switch(e){case`compositionend`:return Jn(t);case`keypress`:return t.which===32?(Kn=!0,U):null;case`textInput`:return e=t.data,e===U&&Kn?null:e;default:return null}}function Zn(e,t){if(Yn)return e===`compositionend`||!Hn&&qn(e,t)?(e=mn(),pn=fn=dn=null,Yn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Gn&&t.locale!==`ko`?null:t.data;default:return null}}var Qn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Qn[e.type]:t===`textarea`}function er(e,t,n,r){z?nn?nn.push(r):nn=[r]:z=r,t=Td(t,`onChange`),0<t.length&&(n=new _n(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var tr=null,nr=null;function rr(e){vd(e,0)}function ir(e){if(It(gt(e)))return e}function ar(e,t){if(e===`change`)return t}var or=!1;if(cn){var sr;if(cn){var cr=`oninput`in document;if(!cr){var lr=document.createElement(`div`);lr.setAttribute(`oninput`,`return;`),cr=typeof lr.oninput==`function`}sr=cr}else sr=!1;or=sr&&(!document.documentMode||9<document.documentMode)}function ur(){tr&&(tr.detachEvent(`onpropertychange`,dr),nr=tr=null)}function dr(e){if(e.propertyName===`value`&&ir(nr)){var t=[];er(t,nr,e,R(e)),on(rr,t)}}function fr(e,t,n){e===`focusin`?(ur(),tr=t,nr=n,tr.attachEvent(`onpropertychange`,dr)):e===`focusout`&&ur()}function pr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ir(nr)}function mr(e,t){if(e===`click`)return ir(t)}function hr(e,t){if(e===`input`||e===`change`)return ir(t)}function gr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var _r=typeof Object.is==`function`?Object.is:gr;function vr(e,t){if(_r(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!_r(e[i],t[i]))return!1}return!0}function yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function br(e,t){var n=yr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=yr(n)}}function xr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lt(e.document)}return t}function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var wr=cn&&`documentMode`in document&&11>=document.documentMode,Tr=null,Er=null,Dr=null,Or=!1;function kr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Or||Tr==null||Tr!==Lt(r)||(r=Tr,`selectionStart`in r&&Cr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&vr(Dr,r)||(Dr=r,r=Td(Er,`onSelect`),0<r.length&&(t=new _n(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Tr)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var jr={animationend:Ar(`Animation`,`AnimationEnd`),animationiteration:Ar(`Animation`,`AnimationIteration`),animationstart:Ar(`Animation`,`AnimationStart`),transitionrun:Ar(`Transition`,`TransitionRun`),transitionstart:Ar(`Transition`,`TransitionStart`),transitioncancel:Ar(`Transition`,`TransitionCancel`),transitionend:Ar(`Transition`,`TransitionEnd`)},Mr={},W={};cn&&(W=document.createElement(`div`).style,`AnimationEvent`in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),`TransitionEvent`in window||delete jr.transitionend.transition);function Nr(e){if(Mr[e])return Mr[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in W)return Mr[e]=t[n];return e}var Pr=Nr(`animationend`),Fr=Nr(`animationiteration`),Ir=Nr(`animationstart`),Lr=Nr(`transitionrun`),Rr=Nr(`transitionstart`),G=Nr(`transitioncancel`),K=Nr(`transitionend`),zr=new Map,Br=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Br.push(`scrollEnd`);function Vr(e,t){zr.set(e,t),xt(t,[e])}var Hr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ur=[],Wr=0,Gr=0;function Kr(){for(var e=Wr,t=Gr=Wr=0;t<e;){var n=Ur[t];Ur[t++]=null;var r=Ur[t];Ur[t++]=null;var i=Ur[t];Ur[t++]=null;var a=Ur[t];if(Ur[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Xr(n,i,a)}}function qr(e,t,n,r){Ur[Wr++]=e,Ur[Wr++]=t,Ur[Wr++]=n,Ur[Wr++]=r,Gr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Jr(e,t,n,r){return qr(e,t,n,r),Zr(e)}function Yr(e,t){return qr(e,null,null,t),Zr(e)}function Xr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Be(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Zr(e){if(50<lu)throw lu=0,uu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qr={};function $r(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,t,n,r){return new $r(e,t,n,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ni(e,t){var n=e.alternate;return n===null?(n=ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ri(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ti(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=ei(31,n,t,a),e.elementType=ne,e.lanes=o,e;case g:return ai(n.children,a,o,t);case _:s=8,a|=24;break;case v:return e=ei(12,n,t,a|2),e.elementType=v,e.lanes=o,e;case ee:return e=ei(13,n,t,a),e.elementType=ee,e.lanes=o,e;case C:return e=ei(19,n,t,a),e.elementType=C,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case b:s=10;break a;case y:s=9;break a;case x:s=11;break a;case te:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ei(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ai(e,t,n,r){return e=ei(7,e,r,t),e.lanes=n,e}function oi(e,t,n){return e=ei(6,e,null,t),e.lanes=n,e}function si(e){var t=ei(18,null,null,0);return t.stateNode=e,t}function ci(e,t,n){return t=ei(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var li=new WeakMap;function ui(e,t){if(typeof e==`object`&&e){var n=li.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},li.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var di=[],fi=0,pi=null,mi=0,hi=[],gi=0,_i=null,vi=1,yi=``;function bi(e,t){di[fi++]=mi,di[fi++]=pi,pi=e,mi=t}function xi(e,t,n){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,_i=e;var r=vi;e=yi;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var a=32-Be(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vi=1<<32-Be(t)+i|n<<i|r,yi=a+e}else vi=1<<a|n<<i|r,yi=e}function Si(e){e.return!==null&&(bi(e,1),xi(e,1,0))}function Ci(e){for(;e===pi;)pi=di[--fi],di[fi]=null,mi=di[--fi],di[fi]=null;for(;e===_i;)_i=hi[--gi],hi[gi]=null,yi=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null}function wi(e,t){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,vi=t.id,yi=t.overflow,_i=e}var Ti=null,Ei=null,q=!1,Di=null,Oi=!1,ki=Error(i(519));function Ai(e){throw Ii(ui(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ki}function ji(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ot]=e,t[st]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),Gt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=en),t=!0):t=!1,t||Ai(e,!0)}function Mi(e){for(Ti=e.return;Ti;)switch(Ti.tag){case 5:case 31:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Ti=Ti.return}}function Ni(e){if(e!==Ti)return!1;if(!q)return Mi(e),q=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ei&&Ai(e),Mi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ei=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ei=uf(e)}else t===27?(t=Ei,Zd(e.type)?(e=lf,lf=null,Ei=e):Ei=t):Ei=Ti?cf(e.stateNode.nextSibling):null;return!0}function Pi(){Ei=Ti=null,q=!1}function Fi(){var e=Di;return e!==null&&(Yl===null?Yl=e:Yl.push.apply(Yl,e),Di=null),e}function Ii(e){Di===null?Di=[e]:Di.push(e)}var Li=ue(null),Ri=null,zi=null;function Bi(e,t,n){k(Li,t._currentValue),t._currentValue=n}function Vi(e){e._currentValue=Li.current,de(Li)}function Hi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ui(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Hi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Hi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Wi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;_r(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Ui(t,e,n,r),t.flags|=262144}function Gi(e){for(e=e.firstContext;e!==null;){if(!_r(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ki(e){Ri=e,zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qi(e){return Yi(Ri,e)}function Ji(e,t){return Ri===null&&Ki(e),Yi(e,t)}function Yi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},zi===null){if(e===null)throw Error(i(308));zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zi=zi.next=t;return n}var Xi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Zi=t.unstable_scheduleCallback,Qi=t.unstable_NormalPriority,$i={$$typeof:b,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ea(){return{controller:new Xi,data:new Map,refCount:0}}function ta(e){e.refCount--,e.refCount===0&&Zi(Qi,function(){e.controller.abort()})}var na=null,ra=0,ia=0,aa=null;function oa(e,t){if(na===null){var n=na=[];ra=0,ia=ud(),aa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ra++,t.then(sa,sa),t}function sa(){if(--ra===0&&na!==null){aa!==null&&(aa.status=`fulfilled`);var e=na;na=null,ia=0,aa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var la=D.S;D.S=function(e,t){Ql=Ae(),typeof t==`object`&&t&&typeof t.then==`function`&&oa(e,t),la!==null&&la(e,t)};var ua=ue(null);function da(){var e=ua.current;return e===null?Pl.pooledCache:e}function fa(e,t){t===null?k(ua,ua.current):k(ua,t.pool)}function pa(){var e=da();return e===null?null:{parent:$i._currentValue,pool:e}}var ma=Error(i(460)),ha=Error(i(474)),ga=Error(i(542)),_a={then:function(){}};function va(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ya(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(en,en),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ca(e),e;default:if(typeof t.status==`string`)t.then(en,en);else{if(e=Pl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ca(e),e}throw xa=t,ma}}function ba(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(xa=e,ma):e}}var xa=null;function Sa(){if(xa===null)throw Error(i(459));var e=xa;return xa=null,e}function Ca(e){if(e===ma||e===ga)throw Error(i(483))}var wa=null,J=0;function Ta(e){var t=J;return J+=1,wa===null&&(wa=[]),ya(wa,e,t)}function Ea(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Da(e,t){throw t.$$typeof===p?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Oa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ni(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=oi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===g?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&ba(i)===t.type)?(t=a(t,n.props),Ea(t,n),t.return=e,t):(t=ii(n.type,n.key,n.props,null,e.mode,r),Ea(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ai(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=oi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case m:return n=ii(t.type,t.key,t.props,null,e.mode,n),Ea(n,t),n.return=e,n;case h:return t=ci(t,e.mode,n),t.return=e,t;case w:return t=ba(t),f(e,t,n)}if(oe(t)||E(t))return t=ai(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ta(t),n);if(t.$$typeof===b)return f(e,Ji(e,t),n);Da(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case m:return n.key===i?l(e,t,n,r):null;case h:return n.key===i?u(e,t,n,r):null;case w:return n=ba(n),p(e,t,n,r)}if(oe(n)||E(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ta(n),r);if(n.$$typeof===b)return p(e,t,Ji(e,n),r);Da(e,n)}return null}function _(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case m:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case h:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=ba(r),_(e,t,n,r,i)}if(oe(r)||E(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return _(e,t,n,Ta(r),i);if(r.$$typeof===b)return _(e,t,n,Ji(t,r),i);Da(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,m=a=0,h=null;d!==null&&m<s.length;m++){d.index>m?(h=d,d=null):h=d.sibling;var g=p(i,d,s[m],c);if(g===null){d===null&&(d=h);break}e&&d&&g.alternate===null&&t(i,d),a=o(g,a,m),u===null?l=g:u.sibling=g,u=g,d=h}if(m===s.length)return n(i,d),q&&bi(i,m),l;if(d===null){for(;m<s.length;m++)d=f(i,s[m],c),d!==null&&(a=o(d,a,m),u===null?l=d:u.sibling=d,u=d);return q&&bi(i,m),l}for(d=r(d);m<s.length;m++)h=_(d,i,m,s[m],c),h!==null&&(e&&h.alternate!==null&&d.delete(h.key===null?m:h.key),a=o(h,a,m),u===null?l=h:u.sibling=h,u=h);return e&&d.forEach(function(e){return t(i,e)}),q&&bi(i,m),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,m=s,h=s=0,g=null,v=c.next();m!==null&&!v.done;h++,v=c.next()){m.index>h?(g=m,m=null):g=m.sibling;var y=p(a,m,v.value,l);if(y===null){m===null&&(m=g);break}e&&m&&y.alternate===null&&t(a,m),s=o(y,s,h),d===null?u=y:d.sibling=y,d=y,m=g}if(v.done)return n(a,m),q&&bi(a,h),u;if(m===null){for(;!v.done;h++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,h),d===null?u=v:d.sibling=v,d=v);return q&&bi(a,h),u}for(m=r(m);!v.done;h++,v=c.next())v=_(m,a,h,v.value,l),v!==null&&(e&&v.alternate!==null&&m.delete(v.key===null?h:v.key),s=o(v,s,h),d===null?u=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(a,e)}),q&&bi(a,h),u}function x(e,r,o,c){if(typeof o==`object`&&o&&o.type===g&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case m:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===g){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&ba(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ea(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===g?(c=ai(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ii(o.type,o.key,o.props,null,e.mode,c),Ea(c,o),c.return=e,e=c)}return s(e);case h:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ci(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=ba(o),x(e,r,o,c)}if(oe(o))return v(e,r,o,c);if(E(o)){if(l=E(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return x(e,r,Ta(o),c);if(o.$$typeof===b)return x(e,r,Ji(e,o),c);Da(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=oi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{J=0;var i=x(e,t,n,r);return wa=null,i}catch(t){if(t===ma||t===ga)throw t;var a=ei(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ka=Oa(!0),Aa=Oa(!1),ja=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Nl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Zr(e),Xr(e,null,n),t}return qr(e,r,t,n),Zr(e)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ra=!1;function za(){if(Ra){var e=aa;if(e!==null)throw e}}function Ba(e,t,n,r){Ra=!1;var i=e.updateQueue;ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(Fl&p)===p:(r&p)===p){p!==0&&p===ia&&(Ra=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:ja=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ul|=o,e.lanes=o,e.memoizedState=d}}function Va(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ha(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Va(n[e],t)}var Ua=ue(null),Wa=ue(0);function Ga(e,t){e=Vl,k(Wa,e),k(Ua,t),Vl=e|t.baseLanes}function Ka(){k(Wa,Vl),k(Ua,Ua.current)}function qa(){Vl=Wa.current,de(Ua),de(Wa)}var Ja=ue(null),Ya=null;function Xa(e){var t=e.alternate;k(to,to.current&1),k(Ja,e),Ya===null&&(t===null||Ua.current!==null||t.memoizedState!==null)&&(Ya=e)}function Za(e){k(to,to.current),k(Ja,e),Ya===null&&(Ya=e)}function Qa(e){e.tag===22?(k(to,to.current),k(Ja,e),Ya===null&&(Ya=e)):$a(e)}function $a(){k(to,to.current),k(Ja,Ja.current)}function eo(e){de(Ja),Ya===e&&(Ya=null),de(to)}var to=ue(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ro=0,Y=null,io=null,ao=null,X=!1,oo=!1,so=!1,co=0,lo=0,uo=null,fo=0;function po(){throw Error(i(321))}function mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_r(e[n],t[n]))return!1;return!0}function ho(e,t,n,r,i,a){return ro=a,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?js:Ms,so=!1,a=n(r,i),so=!1,oo&&(a=_o(t,n,r,i)),go(e),a}function go(e){D.H=As;var t=io!==null&&io.next!==null;if(ro=0,ao=io=Y=null,X=!1,lo=0,uo=null,t)throw Error(i(300));e===null||Ys||(e=e.dependencies,e!==null&&Gi(e)&&(Ys=!0))}function _o(e,t,n,r){Y=e;var a=0;do{if(oo&&(uo=null),lo=0,oo=!1,25<=a)throw Error(i(301));if(a+=1,ao=io=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Ns,o=t(n,r)}while(oo);return o}function vo(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?To(t):t,e=e.useState()[0],(io===null?null:io.memoizedState)!==e&&(Y.flags|=1024),t}function yo(){var e=co!==0;return co=0,e}function bo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xo(e){if(X){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}X=!1}ro=0,ao=io=Y=null,oo=!1,lo=co=0,uo=null}function So(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ao===null?Y.memoizedState=ao=e:ao=ao.next=e,ao}function Co(){if(io===null){var e=Y.alternate;e=e===null?null:e.memoizedState}else e=io.next;var t=ao===null?Y.memoizedState:ao.next;if(t!==null)ao=t,io=e;else{if(e===null)throw Y.alternate===null?Error(i(467)):Error(i(310));io=e,e={memoizedState:io.memoizedState,baseState:io.baseState,baseQueue:io.baseQueue,queue:io.queue,next:null},ao===null?Y.memoizedState=ao=e:ao=ao.next=e}return ao}function wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var t=lo;return lo+=1,uo===null&&(uo=[]),e=ya(uo,e,t),t=Y,(ao===null?t.memoizedState:ao.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?js:Ms),e}function Eo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return To(e);if(e.$$typeof===b)return qi(e)}throw Error(i(438,String(e)))}function Do(e){var t=null,n=Y.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Y.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=wo(),Y.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Oo(e,t){return typeof t==`function`?t(e):t}function Z(e){return ko(Co(),io,e)}function ko(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ro&f)===f:(Fl&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ia&&(d=!0);else if((ro&p)===p){u=u.next,p===ia&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,Y.lanes|=p,Ul|=p;f=u.action,so&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,Y.lanes|=f,Ul|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!_r(o,e.memoizedState)&&(Ys=!0,d&&(n=aa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ao(e){var t=Co(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);_r(o,t.memoizedState)||(Ys=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jo(e,t,n){var r=Y,a=Co(),o=q;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!_r((io||a).memoizedState,n);if(s&&(a.memoizedState=n,Ys=!0),a=a.queue,ns(Po.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ao!==null&&ao.memoizedState.tag&1){if(r.flags|=2048,Zo(9,{destroy:void 0},No.bind(null,r,a,n,t),null),Pl===null)throw Error(i(349));o||ro&127||Mo(r,t,n)}return n}function Mo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t=wo(),Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function No(e,t,n,r){t.value=n,t.getSnapshot=r,Fo(t)&&Io(e)}function Po(e,t,n){return n(function(){Fo(t)&&Io(e)})}function Fo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_r(e,n)}catch{return!0}}function Io(e){var t=Yr(e,2);t!==null&&pu(t,e,2)}function Lo(e){var t=So();if(typeof e==`function`){var n=e;if(e=n(),so){ze(!0);try{n()}finally{ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:e},t}function Ro(e,t,n,r){return e.baseState=n,ko(e,io,typeof r==`function`?r:Oo)}function zo(e,t,n,r,a){if(Ds(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Bo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Bo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Vo(e,t,s)}catch(n){Uo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Vo(e,t,a)}catch(n){Uo(e,t,n)}}function Vo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ho(e,t,n)},function(n){return Uo(e,t,n)}):Ho(e,t,n)}function Ho(e,t,n){t.status=`fulfilled`,t.value=n,Wo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Bo(e,n)))}function Uo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Wo(t),t=t.next;while(t!==r)}e.action=null}function Wo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Go(e,t){return t}function Ko(e,t){if(q){var n=Pl.formState;if(n!==null){a:{var r=Y;if(q){if(Ei){b:{for(var i=Ei,a=Oi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ei=cf(i.nextSibling),r=i.data===`F!`;break a}}Ai(r)}r=!1}r&&(t=n[0])}}return n=So(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},n.queue=r,n=ws.bind(null,Y,r),r.dispatch=n,r=Lo(!1),a=Es.bind(null,Y,!1,r.queue),r=So(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=zo.bind(null,Y,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function qo(e){return Jo(Co(),io,e)}function Jo(e,t,n){if(t=ko(e,t,Go)[0],e=Z(Oo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=To(t)}catch(e){throw e===ma?ga:e}else r=t;t=Co();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(Y.flags|=2048,Zo(9,{destroy:void 0},Yo.bind(null,i,n),null)),[r,a,e]}function Yo(e,t){e.action=t}function Xo(e){var t=Co(),n=io;if(n!==null)return Jo(t,n,e);Co(),t=t.memoizedState,n=Co();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Zo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Y.updateQueue,t===null&&(t=wo(),Y.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Qo(){return Co().memoizedState}function $o(e,t,n,r){var i=So();Y.flags|=e,i.memoizedState=Zo(1|t,{destroy:void 0},n,r===void 0?null:r)}function es(e,t,n,r){var i=Co();r=r===void 0?null:r;var a=i.memoizedState.inst;io!==null&&r!==null&&mo(r,io.memoizedState.deps)?i.memoizedState=Zo(t,a,n,r):(Y.flags|=e,i.memoizedState=Zo(1|t,a,n,r))}function ts(e,t){$o(8390656,8,e,t)}function ns(e,t){es(2048,8,e,t)}function rs(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=wo(),Y.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function is(e){var t=Co().memoizedState;return rs({ref:t,nextImpl:e}),function(){if(Nl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function as(e,t){return es(4,2,e,t)}function os(e,t){return es(4,4,e,t)}function ss(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cs(e,t,n){n=n==null?null:n.concat([e]),es(4,4,ss.bind(null,t,e),n)}function ls(){}function us(e,t){var n=Co();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ds(e,t){var n=Co();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&mo(t,r[1]))return r[0];if(r=e(),so){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r}function fs(e,t,n){return n===void 0||ro&1073741824&&!(Fl&261930)?e.memoizedState=t:(e.memoizedState=n,e=fu(),Y.lanes|=e,Ul|=e,n)}function ps(e,t,n,r){return _r(n,t)?n:Ua.current===null?!(ro&42)||ro&1073741824&&!(Fl&261930)?(Ys=!0,e.memoizedState=n):(e=fu(),Y.lanes|=e,Ul|=e,t):(e=fs(e,n,r),_r(e,t)||(Ys=!0),e)}function ms(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Es(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ts(e,t,ca(c,r),du(e)):Ts(e,t,r,du(e))}catch(n){Ts(e,t,{then:function(){},status:`rejected`,reason:n},du())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function hs(){}function gs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=_s(e).queue;ms(e,a,t,se,n===null?hs:function(){return vs(e),n(r)})}function _s(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vs(e){var t=_s(e);t.next===null&&(t=e.alternate.memoizedState),Ts(e,t.next.queue,{},du())}function ys(){return qi(Qf)}function bs(){return Co().memoizedState}function xs(){return Co().memoizedState}function Ss(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=du();e=Pa(n);var r=Fa(t,e,n);r!==null&&(pu(r,t,n),Ia(r,t,n)),t={cache:ea()},e.payload=t;return}t=t.return}}function Cs(e,t,n){var r=du();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ds(e)?Os(t,n):(n=Jr(e,t,n,r),n!==null&&(pu(n,e,r),ks(n,t,r)))}function ws(e,t,n){Ts(e,t,n,du())}function Ts(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))Os(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,_r(s,o))return qr(e,t,i,0),Pl===null&&Kr(),!1}catch{}if(n=Jr(e,t,i,r),n!==null)return pu(n,e,r),ks(n,t,r),!0}return!1}function Es(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(i(479))}else t=Jr(e,n,r,2),t!==null&&pu(t,e,2)}function Ds(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Os(e,t){oo=X=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ks(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}var As={readContext:qi,use:Eo,useCallback:po,useContext:po,useEffect:po,useImperativeHandle:po,useLayoutEffect:po,useInsertionEffect:po,useMemo:po,useReducer:po,useRef:po,useState:po,useDebugValue:po,useDeferredValue:po,useTransition:po,useSyncExternalStore:po,useId:po,useHostTransitionStatus:po,useFormState:po,useActionState:po,useOptimistic:po,useMemoCache:po,useCacheRefresh:po};As.useEffectEvent=po;var js={readContext:qi,use:Eo,useCallback:function(e,t){return So().memoizedState=[e,t===void 0?null:t],e},useContext:qi,useEffect:ts,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),$o(4194308,4,ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){$o(4,2,e,t)},useMemo:function(e,t){var n=So();t=t===void 0?null:t;var r=e();if(so){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=So();if(n!==void 0){var i=n(t);if(so){ze(!0);try{n(t)}finally{ze(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Cs.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=So();return e={current:e},t.memoizedState=e},useState:function(e){e=Lo(e);var t=e.queue,n=ws.bind(null,Y,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ls,useDeferredValue:function(e,t){return fs(So(),e,t)},useTransition:function(){var e=Lo(!1);return e=ms.bind(null,Y,e.queue,!0,!1),So().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Y,a=So();if(q){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Pl===null)throw Error(i(349));Fl&127||Mo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ts(Po.bind(null,r,o,e),[e]),r.flags|=2048,Zo(9,{destroy:void 0},No.bind(null,r,o,n,t),null),n},useId:function(){var e=So(),t=Pl.identifierPrefix;if(q){var n=yi,r=vi;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=fo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ys,useFormState:Ko,useActionState:Ko,useOptimistic:function(e){var t=So();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Es.bind(null,Y,!0,n),n.dispatch=t,[e,t]},useMemoCache:Do,useCacheRefresh:function(){return So().memoizedState=Ss.bind(null,Y)},useEffectEvent:function(e){var t=So(),n={impl:e};return t.memoizedState=n,function(){if(Nl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ms={readContext:qi,use:Eo,useCallback:us,useContext:qi,useEffect:ns,useImperativeHandle:cs,useInsertionEffect:as,useLayoutEffect:os,useMemo:ds,useReducer:Z,useRef:Qo,useState:function(){return Z(Oo)},useDebugValue:ls,useDeferredValue:function(e,t){return ps(Co(),io.memoizedState,e,t)},useTransition:function(){var e=Z(Oo)[0],t=Co().memoizedState;return[typeof e==`boolean`?e:To(e),t]},useSyncExternalStore:jo,useId:bs,useHostTransitionStatus:ys,useFormState:qo,useActionState:qo,useOptimistic:function(e,t){return Ro(Co(),io,e,t)},useMemoCache:Do,useCacheRefresh:xs};Ms.useEffectEvent=is;var Ns={readContext:qi,use:Eo,useCallback:us,useContext:qi,useEffect:ns,useImperativeHandle:cs,useInsertionEffect:as,useLayoutEffect:os,useMemo:ds,useReducer:Ao,useRef:Qo,useState:function(){return Ao(Oo)},useDebugValue:ls,useDeferredValue:function(e,t){var n=Co();return io===null?fs(n,e,t):ps(n,io.memoizedState,e,t)},useTransition:function(){var e=Ao(Oo)[0],t=Co().memoizedState;return[typeof e==`boolean`?e:To(e),t]},useSyncExternalStore:jo,useId:bs,useHostTransitionStatus:ys,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,t){var n=Co();return io===null?(n.baseState=e,[e,n.queue.dispatch]):Ro(n,io,e,t)},useMemoCache:Do,useCacheRefresh:xs};Ns.useEffectEvent=is;function Ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),i=Pa(r);i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(pu(t,e,r),Ia(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),i=Pa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(pu(t,e,r),Ia(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=Pa(n);r.tag=2,t!=null&&(r.callback=t),t=Fa(e,r,n),t!==null&&(pu(t,e,n),Ia(t,e,n))}};function Is(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(i,a):!0}function Ls(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fs.enqueueReplaceState(t,t.state,null)}function Rs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function zs(e){Hr(e)}function Bs(e){console.error(e)}function Vs(e){Hr(e)}function Hs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Us(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ws(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){Hs(e,t)},n}function Gs(e){return e=Pa(e),e.tag=3,e}function Ks(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Us(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Us(t,n,r),typeof i!=`function`&&(tu===null?tu=new Set([this]):tu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function qs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Wi(t,n,a,!0),n=Ja.current,n!==null){switch(n.tag){case 31:case 13:return Ya===null?Tu():n.alternate===null&&Hl===0&&(Hl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===_a?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===_a?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(i(435,n.tag))}return Wu(e,r,a),Tu(),!1}if(q)return t=Ja.current,t===null?(r!==ki&&(t=Error(i(423),{cause:r}),Ii(ui(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ui(r,n),a=Ws(e.stateNode,r,a),La(e,a),Hl!==4&&(Hl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ki&&(e=Error(i(422),{cause:r}),Ii(ui(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ui(o,n),Jl===null?Jl=[o]:Jl.push(o),Hl!==4&&(Hl=2),t===null)return!0;r=ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ws(n.stateNode,r,e),La(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(tu===null||!tu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Gs(a),Ks(a,e,n,r),La(n,a),!1}n=n.return}while(n!==null);return!1}var Js=Error(i(461)),Ys=!1;function Xs(e,t,n,r){t.child=e===null?Aa(t,null,n,r):ka(t,e.child,n,r)}function Zs(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ki(t),r=ho(e,t,n,o,a,i),s=yo(),e!==null&&!Ys?(bo(e,t,i),xc(e,t,i)):(q&&s&&Si(t),t.flags|=1,Xs(e,t,r,i),t.child)}function Qs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ti(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,$s(e,t,a,r,i)):(e=ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Sc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?vr:n,n(o,r)&&e.ref===t.ref)return xc(e,t,i)}return t.flags|=1,e=ni(a,r),e.ref=t.ref,e.return=t,t.child=e}function $s(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(vr(a,r)&&e.ref===t.ref)if(Ys=!1,t.pendingProps=r=a,Sc(e,i))e.flags&131072&&(Ys=!0);else return t.lanes=e.lanes,xc(e,t,i)}return sc(e,t,n,r,i)}function ec(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return nc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fa(t,a===null?null:a.cachePool),a===null?Ka():Ga(t,a),Qa(t);else return r=t.lanes=536870912,nc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&fa(t,null),Ka(),$a(t)):(fa(t,a.cachePool),Ga(t,a),$a(t),t.memoizedState=null);return Xs(e,t,i,n),t.child}function tc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function nc(e,t,n,r,i){var a=da();return a=a===null?null:{parent:$i._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&fa(t,null),Ka(),Qa(t),e!==null&&Wi(e,t,r,!0),t.childLanes=i,null}function rc(e,t){return t=gc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ic(e,t,n){return ka(t,e.child,null,n),e=rc(t,t.pendingProps),e.flags|=2,eo(t),t.memoizedState=null,e}function ac(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(q){if(r.mode===`hidden`)return e=rc(t,r),t.lanes=536870912,tc(null,e);if(Za(t),(e=Ei)?(e=rf(e,Oi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,Ei=null)):e=null,e===null)throw Ai(t);return t.lanes=536870912,null}return rc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Za(t),a)if(t.flags&256)t.flags&=-257,t=ic(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Ys||Wi(e,t,n,!1),a=(n&e.childLanes)!==0,Ys||a){if(r=Pl,r!==null&&(s=et(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Yr(e,s),pu(r,e,s),Js;Tu(),t=ic(e,t,n)}else e=o.treeContext,Ei=cf(s.nextSibling),Ti=t,q=!0,Di=null,Oi=!1,e!==null&&wi(t,e),t=rc(t,r),t.flags|=4096;return t}return e=ni(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function sc(e,t,n,r,i){return Ki(t),n=ho(e,t,n,r,void 0,i),r=yo(),e!==null&&!Ys?(bo(e,t,i),xc(e,t,i)):(q&&r&&Si(t),t.flags|=1,Xs(e,t,n,i),t.child)}function cc(e,t,n,r,i,a){return Ki(t),t.updateQueue=null,n=_o(t,r,n,i),go(e),r=yo(),e!==null&&!Ys?(bo(e,t,a),xc(e,t,a)):(q&&r&&Si(t),t.flags|=1,Xs(e,t,n,a),t.child)}function lc(e,t,n,r,i){if(Ki(t),t.stateNode===null){var a=Qr,o=n.contextType;typeof o==`object`&&o&&(a=qi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Fs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ma(t),o=n.contextType,a.context=typeof o==`object`&&o?qi(o):Qr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ps(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Fs.enqueueReplaceState(a,a.state,null),Ba(t,r,a,i),za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Rs(n,s);a.props=c;var l=a.context,u=n.contextType;o=Qr,typeof u==`object`&&u&&(o=qi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ls(t,a,r,o),ja=!1;var f=t.memoizedState;a.state=f,Ba(t,r,a,i),za(),l=t.memoizedState,s||f!==l||ja?(typeof d==`function`&&(Ps(t,n,d,r),l=t.memoizedState),(c=ja||Is(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Na(e,t),o=t.memoizedProps,u=Rs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Qr,typeof l==`object`&&l&&(c=qi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ls(t,a,r,c),ja=!1,f=t.memoizedState,a.state=f,Ba(t,r,a,i),za();var p=t.memoizedState;o!==d||f!==p||ja||e!==null&&e.dependencies!==null&&Gi(e.dependencies)?(typeof s==`function`&&(Ps(t,n,s,r),p=t.memoizedState),(u=ja||Is(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Gi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,oc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ka(t,e.child,null,i),t.child=ka(t,null,n,i)):Xs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=xc(e,t,i),e}function uc(e,t,n,r){return Pi(),t.flags|=256,Xs(e,t,n,r),t.child}var dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fc(e){return{baseLanes:e,cachePool:pa()}}function pc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Kl),e}function mc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(to.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(q){if(a?Xa(t):$a(t),(e=Ei)?(e=rf(e,Oi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,Ei=null)):e=null,e===null)throw Ai(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?($a(t),a=t.mode,c=gc({mode:`hidden`,children:c},a),r=ai(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=fc(n),r.childLanes=pc(e,s,n),t.memoizedState=dc,tc(null,r)):(Xa(t),hc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Xa(t),t.flags&=-257,t=_c(e,t,n)):t.memoizedState===null?($a(t),c=r.fallback,a=t.mode,r=gc({mode:`visible`,children:r.children},a),c=ai(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,ka(t,e.child,null,n),r=t.child,r.memoizedState=fc(n),r.childLanes=pc(e,s,n),t.memoizedState=dc,t=tc(null,r)):($a(t),t.child=e.child,t.flags|=128,t=null);else if(Xa(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ii({value:r,source:null,stack:null}),t=_c(e,t,n)}else if(Ys||Wi(e,t,n,!1),s=(n&e.childLanes)!==0,Ys||s){if(s=Pl,s!==null&&(r=et(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Yr(e,r),pu(s,e,r),Js;af(c)||Tu(),t=_c(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ei=cf(c.nextSibling),Ti=t,q=!0,Di=null,Oi=!1,e!==null&&wi(t,e),t=hc(t,r.children),t.flags|=4096);return t}return a?($a(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ni(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ai(c,a,n,null),c.flags|=2):c=ni(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,tc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=fc(n):(a=c.cachePool,a===null?a=pa():(l=$i._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=pc(e,s,n),t.memoizedState=dc,tc(e.child,r)):(Xa(t),n=e.child,e=n.sibling,n=ni(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function hc(e,t){return t=gc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function gc(e,t){return e=ei(22,e,null,t),e.lanes=0,e}function _c(e,t,n){return ka(t,e.child,null,n),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hi(e.return,t,n)}function yc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function bc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=to.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(to,o),Xs(e,t,r,n),r=q?mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,n,t);else if(e.tag===19)vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yc(t,!0,n,null,a,r);break;case`together`:yc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function xc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ul|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Wi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Gi(e))):!0}function Cc(e,t,n){switch(t.tag){case 3:A(t,t.stateNode.containerInfo),Bi(t,$i,e.memoizedState.cache),Pi();break;case 27:case 5:_e(t);break;case 4:A(t,t.stateNode.containerInfo);break;case 10:Bi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Za(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Xa(t),e=xc(e,t,n),e===null?null:e.sibling):mc(e,t,n):(Xa(t),t.flags|=128,null);Xa(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Wi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return bc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(to,to.current),r)break;return null;case 22:return t.lanes=0,ec(e,t,n,t.pendingProps);case 24:Bi(t,$i,e.memoizedState.cache)}return xc(e,t,n)}function wc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ys=!0;else{if(!Sc(e,n)&&!(t.flags&128))return Ys=!1,Cc(e,t,n);Ys=!!(e.flags&131072)}else Ys=!1,q&&t.flags&1048576&&xi(t,mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ba(t.elementType),t.type=e,typeof e==`function`)ti(e)?(r=Rs(e,r),t.tag=1,t=lc(null,t,e,r,n)):(t.tag=0,t=sc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===x){t.tag=11,t=Zs(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=Qs(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return sc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Rs(r,t.pendingProps),lc(e,t,r,a,n);case 3:a:{if(A(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Na(e,t),Ba(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Bi(t,$i,r),r!==o.cache&&Ui(t,[$i],n,!0),za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=uc(e,t,r,n);break a}else if(r!==a){a=ui(Error(i(424)),t),Ii(a),t=uc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ei=cf(e.firstChild),Ti=t,q=!0,Di=null,Oi=!0,n=Aa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Pi(),r===a){t=xc(e,t,n);break a}Xs(e,t,r,n)}t=t.child}return t;case 26:return oc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:q||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[ot]=t,r[st]=e,Pd(r,n,e),vt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&q&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),Ti=t,Oi=!0,a=Ei,Zd(t.type)?(lf=a,Ei=cf(r.firstChild)):Ei=a),Xs(e,t,t.pendingProps.children,n),oc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&q&&((a=r=Ei)&&(r=tf(r,t.type,t.pendingProps,Oi),r===null?a=!1:(t.stateNode=r,Ti=t,Ei=cf(r.firstChild),Oi=!1,a=!0)),a||Ai(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=ho(e,t,vo,null,null,n),Qf._currentValue=a),oc(e,t),Xs(e,t,r,n),t.child;case 6:return e===null&&q&&((e=n=Ei)&&(n=nf(n,t.pendingProps,Oi),n===null?e=!1:(t.stateNode=n,Ti=t,Ei=null,e=!0)),e||Ai(t)),null;case 13:return mc(e,t,n);case 4:return A(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ka(t,null,r,n):Xs(e,t,r,n),t.child;case 11:return Zs(e,t,t.type,t.pendingProps,n);case 7:return Xs(e,t,t.pendingProps,n),t.child;case 8:return Xs(e,t,t.pendingProps.children,n),t.child;case 12:return Xs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Bi(t,t.type,r.value),Xs(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Ki(t),a=qi(a),r=r(a),t.flags|=1,Xs(e,t,r,n),t.child;case 14:return Qs(e,t,t.type,t.pendingProps,n);case 15:return $s(e,t,t.type,t.pendingProps,n);case 19:return bc(e,t,n);case 31:return ac(e,t,n);case 22:return ec(e,t,n,t.pendingProps);case 24:return Ki(t),r=qi($i),e===null?(a=da(),a===null&&(a=Pl,o=ea(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ma(t),Bi(t,$i,a)):((e.lanes&n)!==0&&(Na(e,t),Ba(t,null,null,n),za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Bi(t,$i,r),r!==a.cache&&Ui(t,[$i],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Bi(t,$i,r))),Xs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Tc(e){e.flags|=4}function Ec(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw xa=_a,ha}else e.flags&=-16777217}function Dc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Su())e.flags|=8192;else throw xa=_a,ha}function Oc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,ql|=t)}function kc(e,t){if(!q)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ac(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jc(e,t,n){var r=t.pendingProps;switch(Ci(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ac(t),null;case 1:return Ac(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Vi($i),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ni(t)?Tc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fi())),Ac(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Tc(t),o===null?(Ac(t),Ec(t,a,null,r,n)):(Ac(t),Dc(t,o))):o?o===e.memoizedState?(Ac(t),t.flags&=-16777217):(Tc(t),Ac(t),Dc(t,o)):(e=e.memoizedProps,e!==r&&Tc(t),Ac(t),Ec(t,a,e,r,n)),null;case 27:if(ve(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Tc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ac(t),null}e=fe.current,Ni(t)?ji(t,e):(e=ff(a,r,n),t.stateNode=e,Tc(t))}return Ac(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Tc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ac(t),null}if(o=fe.current,Ni(t))ji(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ot]=t,o[st]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Tc(t)}}return Ac(t),Ec(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Tc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Ni(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ti,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||Ai(t,!0)}else e=Bd(e).createTextNode(r),e[ot]=t,t.stateNode=e}return Ac(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ni(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ot]=t}else Pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ac(t),e=!1}else n=Fi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(eo(t),t):(eo(t),null);if(t.flags&128)throw Error(i(558))}return Ac(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ot]=t}else Pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ac(t),a=!1}else a=Fi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(eo(t),t):(eo(t),null)}return eo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Oc(t,t.updateQueue),Ac(t),null);case 4:return ge(),e===null&&xd(t.stateNode.containerInfo),Ac(t),null;case 10:return Vi(t.type),Ac(t),null;case 19:if(de(to),r=t.memoizedState,r===null)return Ac(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)kc(r,!1);else{if(Hl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=no(e),o!==null){for(t.flags|=128,kc(r,!1),e=o.updateQueue,t.updateQueue=e,Oc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ri(n,e),n=n.sibling;return k(to,to.current&1|2),q&&bi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ae()>$l&&(t.flags|=128,a=!0,kc(r,!1),t.lanes=4194304)}else{if(!a)if(e=no(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Oc(t,e),kc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!q)return Ac(t),null}else 2*Ae()-r.renderingStartTime>$l&&n!==536870912&&(t.flags|=128,a=!0,kc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ac(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ae(),e.sibling=null,n=to.current,k(to,a?n&1|2:n&1),q&&bi(t,r.treeForkCount),e);case 22:case 23:return eo(t),qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ac(t),t.subtreeFlags&6&&(t.flags|=8192)):Ac(t),n=t.updateQueue,n!==null&&Oc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Vi($i),Ac(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Mc(e,t){switch(Ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vi($i),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(eo(t),t.alternate===null)throw Error(i(340));Pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(eo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(to),null;case 4:return ge(),null;case 10:return Vi(t.type),null;case 22:case 23:return eo(t),qa(),e!==null&&de(ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vi($i),null;case 25:return null;default:return null}}function Nc(e,t){switch(Ci(t),t.tag){case 3:Vi($i),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&eo(t);break;case 13:eo(t);break;case 19:de(to);break;case 10:Vi(t.type);break;case 22:case 23:eo(t),qa(),e!==null&&de(ua);break;case 24:Vi($i)}}function Pc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function Fc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function Ic(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ha(t,n)}catch(t){Uu(e,e.return,t)}}}function Lc(e,t,n){n.props=Rs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function Rc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function zc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}function Bc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Vc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[st]=t}catch(t){Uu(e,e.return,t)}}function Hc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Uc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=en));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Wc(e,t,n),e=e.sibling;e!==null;)Wc(e,t,n),e=e.sibling}function Gc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Gc(e,t,n),e=e.sibling;e!==null;)Gc(e,t,n),e=e.sibling}function Kc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ot]=e,t[st]=n}catch(t){Uu(e,e.return,t)}}var qc=!1,Jc=!1,Yc=!1,Xc=typeof WeakSet==`function`?WeakSet:Set,Zc=null;function Qc(e,t){if(e=e.containerInfo,Rd=sp,e=Sr(e),Cr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,Zc=t;Zc!==null;)if(t=Zc,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Zc=e;else for(;Zc!==null;){switch(t=Zc,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Rs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Zc=e;break}Zc=t.return}}function $c(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ml(e,n),r&4&&Pc(5,n);break;case 1:if(ml(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=Rs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}r&64&&Ic(n),r&512&&Rc(n,n.return);break;case 3:if(ml(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ha(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&Kc(n);case 26:case 5:ml(e,n),t===null&&r&4&&Bc(n),r&512&&Rc(n,n.return);break;case 12:ml(e,n);break;case 31:ml(e,n),r&4&&al(e,n);break;case 13:ml(e,n),r&4&&ol(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||qc,!r){t=t!==null&&t.memoizedState!==null||Jc,i=qc;var a=Jc;qc=r,(Jc=t)&&!a?gl(e,n,(n.subtreeFlags&8772)!=0):ml(e,n),qc=i,Jc=a}break;case 30:break;default:ml(e,n)}}function el(e){var t=e.alternate;t!==null&&(e.alternate=null,el(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tl=null,nl=!1;function rl(e,t,n){for(n=n.child;n!==null;)il(e,t,n),n=n.sibling}function il(e,t,n){if(Re&&typeof Re.onCommitFiberUnmount==`function`)try{Re.onCommitFiberUnmount(Le,n)}catch{}switch(n.tag){case 26:Jc||zc(n,t),rl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Jc||zc(n,t);var r=tl,i=nl;Zd(n.type)&&(tl=n.stateNode,nl=!1),rl(e,t,n),pf(n.stateNode),tl=r,nl=i;break;case 5:Jc||zc(n,t);case 6:if(r=tl,i=nl,tl=null,rl(e,t,n),tl=r,nl=i,tl!==null)if(nl)try{(tl.nodeType===9?tl.body:tl.nodeName===`HTML`?tl.ownerDocument.body:tl).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{tl.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}break;case 18:tl!==null&&(nl?(e=tl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(tl,n.stateNode));break;case 4:r=tl,i=nl,tl=n.stateNode.containerInfo,nl=!0,rl(e,t,n),tl=r,nl=i;break;case 0:case 11:case 14:case 15:Fc(2,n,t),Jc||Fc(4,n,t),rl(e,t,n);break;case 1:Jc||(zc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Lc(n,t,r)),rl(e,t,n);break;case 21:rl(e,t,n);break;case 22:Jc=(r=Jc)||n.memoizedState!==null,rl(e,t,n),Jc=r;break;default:rl(e,t,n)}}function al(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Uu(t,t.return,e)}}}function ol(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Uu(t,t.return,e)}}function sl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xc),t;default:throw Error(i(435,e.tag))}}function cl(e,t){var n=sl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function ll(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){tl=c.stateNode,nl=!1;break a}break;case 5:tl=c.stateNode,nl=!1;break a;case 3:case 4:tl=c.stateNode.containerInfo,nl=!0;break a}c=c.return}if(tl===null)throw Error(i(160));il(o,s,a),tl=null,nl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)dl(t,e),t=t.sibling}var ul=null;function dl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ll(t,e),fl(e),r&4&&(Fc(3,e,e.return),Pc(3,e),Fc(5,e,e.return));break;case 1:ll(t,e),fl(e),r&512&&(Jc||n===null||zc(n,n.return)),r&64&&qc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=ul;if(ll(t,e),fl(e),r&512&&(Jc||n===null||zc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ft]||o[ot]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ot]=e,vt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ot]=e,vt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Vc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:ll(t,e),fl(e),r&512&&(Jc||n===null||zc(n,n.return)),n!==null&&r&4&&Vc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ll(t,e),fl(e),r&512&&(Jc||n===null||zc(n,n.return)),e.flags&32){a=e.stateNode;try{Kt(a,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Vc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Yc=!0);break;case 6:if(ll(t,e),fl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Bf=null,a=ul,ul=gf(t.containerInfo),ll(t,e),ul=a,fl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Uu(e,e.return,t)}Yc&&(Yc=!1,pl(e));break;case 4:r=ul,ul=gf(e.stateNode.containerInfo),ll(t,e),fl(e),ul=r;break;case 12:ll(t,e),fl(e);break;case 31:ll(t,e),fl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,cl(e,r)));break;case 13:ll(t,e),fl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=Ae()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,cl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=qc,d=Jc;if(qc=u||a,Jc=d||l,ll(t,e),Jc=d,qc=u,fl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||qc||Jc||hl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,cl(e,n))));break;case 19:ll(t,e),fl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,cl(e,r)));break;case 30:break;case 21:break;default:ll(t,e),fl(e)}}function fl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Hc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Gc(e,Uc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Kt(o,``),n.flags&=-33),Gc(e,Uc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Wc(e,Uc(e),s);break;default:throw Error(i(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ml(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$c(e,t.alternate,t),t=t.sibling}function hl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fc(4,t,t.return),hl(t);break;case 1:zc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Lc(t,t.return,n),hl(t);break;case 27:pf(t.stateNode);case 26:case 5:zc(t,t.return),hl(t);break;case 22:t.memoizedState===null&&hl(t);break;case 30:hl(t);break;default:hl(t)}e=e.sibling}}function gl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:gl(i,a,n),Pc(4,a);break;case 1:if(gl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Va(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&Ic(a),Rc(a,a.return);break;case 27:Kc(a);case 26:case 5:gl(i,a,n),n&&r===null&&o&4&&Bc(a),Rc(a,a.return);break;case 12:gl(i,a,n);break;case 31:gl(i,a,n),n&&o&4&&al(i,a);break;case 13:gl(i,a,n),n&&o&4&&ol(i,a);break;case 22:a.memoizedState===null&&gl(i,a,n),Rc(a,a.return);break;case 30:break;default:gl(i,a,n)}t=t.sibling}}function _l(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ta(n))}function vl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ta(e))}function yl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bl(e,t,n,r),t=t.sibling}function bl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:yl(e,t,n,r),i&2048&&Pc(9,t);break;case 1:yl(e,t,n,r);break;case 3:yl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ta(e)));break;case 12:if(i&2048){yl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else yl(e,t,n,r);break;case 31:yl(e,t,n,r);break;case 13:yl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?yl(e,t,n,r):(a._visibility|=2,xl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?yl(e,t,n,r):Sl(e,t),i&2048&&_l(o,t);break;case 24:yl(e,t,n,r),i&2048&&vl(t.alternate,t);break;default:yl(e,t,n,r)}}function xl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:xl(a,o,s,c,i),Pc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,xl(a,o,s,c,i)):u._visibility&2?xl(a,o,s,c,i):Sl(a,o),i&&l&2048&&_l(o.alternate,o);break;case 24:xl(a,o,s,c,i),i&&l&2048&&vl(o.alternate,o);break;default:xl(a,o,s,c,i)}t=t.sibling}}function Sl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Sl(n,r),i&2048&&_l(r.alternate,r);break;case 24:Sl(n,r),i&2048&&vl(r.alternate,r);break;default:Sl(n,r)}t=t.sibling}}var Cl=8192;function wl(e,t,n){if(e.subtreeFlags&Cl)for(e=e.child;e!==null;)Tl(e,t,n),e=e.sibling}function Tl(e,t,n){switch(e.tag){case 26:wl(e,t,n),e.flags&Cl&&e.memoizedState!==null&&Gf(n,ul,e.memoizedState,e.memoizedProps);break;case 5:wl(e,t,n);break;case 3:case 4:var r=ul;ul=gf(e.stateNode.containerInfo),wl(e,t,n),ul=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Cl,Cl=16777216,wl(e,t,n),Cl=r):wl(e,t,n));break;default:wl(e,t,n)}}function El(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Zc=r,Al(r,e)}El(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ol(e),e=e.sibling}function Ol(e){switch(e.tag){case 0:case 11:case 15:Dl(e),e.flags&2048&&Fc(9,e,e.return);break;case 3:Dl(e);break;case 12:Dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,kl(e)):Dl(e);break;default:Dl(e)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Zc=r,Al(r,e)}El(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fc(8,t,t.return),kl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,kl(t));break;default:kl(t)}e=e.sibling}}function Al(e,t){for(;Zc!==null;){var n=Zc;switch(n.tag){case 0:case 11:case 15:Fc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ta(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Zc=r;else a:for(n=e;Zc!==null;){r=Zc;var i=r.sibling,a=r.return;if(el(r),r===n){Zc=null;break a}if(i!==null){i.return=a,Zc=i;break a}Zc=a}}}var jl={getCacheForType:function(e){var t=qi($i),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return qi($i).controller.signal}},Ml=typeof WeakMap==`function`?WeakMap:Map,Nl=0,Pl=null,Q=null,Fl=0,Il=0,Ll=null,Rl=!1,zl=!1,Bl=!1,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=null,Yl=null,Xl=!1,Zl=0,Ql=0,$l=1/0,eu=null,tu=null,nu=0,ru=null,iu=null,au=0,ou=0,su=null,cu=null,lu=0,uu=null;function du(){return Nl&2&&Fl!==0?Fl&-Fl:D.T===null?rt():ud()}function fu(){if(Kl===0)if(!(Fl&536870912)||q){var e=We;We<<=1,!(We&3932160)&&(We=262144),Kl=e}else Kl=536870912;return e=Ja.current,e!==null&&(e.flags|=32),Kl}function pu(e,t,n){(e===Pl&&(Il===2||Il===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Fl,Kl,!1)),Ze(e,n),(!(Nl&2)||e!==Pl)&&(e===Pl&&(!(Nl&2)&&(Wl|=n),Hl===4&&_u(e,Fl,Kl,!1)),nd(e))}function mu(e,t,n){if(Nl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||qe(e,t),a=r?Ou(e,t):Eu(e,t,!0),o=r;do{if(a===0){zl&&!r&&_u(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!gu(n)){a=Eu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Jl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,s).flags|=256),s=Eu(c,s,!1),s!==2){if(Bl&&!l){c.errorRecoveryDisabledLanes|=o,Wl|=o,a=4;break a}o=Yl,Yl=a,o!==null&&(Yl===null?Yl=o:Yl.push.apply(Yl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,Kl,!Rl);break a;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Zl+300-Ae(),10<a)){if(_u(r,t,Kl,!Rl),Ke(r,0,!0)!==0)break a;au=t,r.timeoutHandle=Kd(hu.bind(null,r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,`Throttled`,-0,0),a);break a}hu(r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,null,-0,0)}}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:en},Tl(t,a,d);var m=(a&62914560)===a?Zl-Ae():(a&4194048)===a?Ql-Ae():0;if(m=qf(d,m),m!==null){au=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!_r(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Gl,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Be(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Qe(e,n,t)}function vu(){return Nl&6?!0:(rd(0,!1),!1)}function yu(){if(Q!==null){if(Il===0)var e=Q.return;else e=Q,zi=Ri=null,xo(e),wa=null,J=0,e=Q;for(;e!==null;)Nc(e.alternate,e),e=e.return;Q=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),au=0,yu(),Pl=e,Q=n=ni(e.current,null),Fl=t,Il=0,Ll=null,Rl=!1,zl=qe(e,t),Bl=!1,ql=Kl=Gl=Wl=Ul=Hl=0,Yl=Jl=null,Xl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Be(r),a=1<<i;t|=e[i],r&=~a}return Vl=t,Kr(),n}function xu(e,t){Y=null,D.H=As,t===ma||t===ga?(t=Sa(),Il=3):t===ha?(t=Sa(),Il=4):Il=t===Js?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ll=t,Q===null&&(Hl=1,Hs(e,ui(t,e.current)))}function Su(){var e=Ja.current;return e===null?!0:(Fl&4194048)===Fl?Ya===null:(Fl&62914560)===Fl||Fl&536870912?e===Ya:!1}function Cu(){var e=D.H;return D.H=As,e===null?As:e}function wu(){var e=D.A;return D.A=jl,e}function Tu(){Hl=4,Rl||(Fl&4194048)!==Fl&&Ja.current!==null||(zl=!0),!(Ul&134217727)&&!(Wl&134217727)||Pl===null||_u(Pl,Fl,Kl,!1)}function Eu(e,t,n){var r=Nl;Nl|=2;var i=Cu(),a=wu();(Pl!==e||Fl!==t)&&(eu=null,bu(e,t)),t=!1;var o=Hl;a:do try{if(Il!==0&&Q!==null){var s=Q,c=Ll;switch(Il){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:Ja.current===null&&(t=!0);var l=Il;if(Il=0,Ll=null,Mu(e,s,c,l),n&&zl){o=0;break a}break;default:l=Il,Il=0,Ll=null,Mu(e,s,c,l)}}Du(),o=Hl;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,zi=Ri=null,Nl=r,D.H=i,D.A=a,Q===null&&(Pl=null,Fl=0,Kr()),o}function Du(){for(;Q!==null;)Au(Q)}function Ou(e,t){var n=Nl;Nl|=2;var r=Cu(),a=wu();Pl!==e||Fl!==t?(eu=null,$l=Ae()+500,bu(e,t)):zl=qe(e,t);a:do try{if(Il!==0&&Q!==null){t=Q;var o=Ll;b:switch(Il){case 1:Il=0,Ll=null,Mu(e,t,o,1);break;case 2:case 9:if(va(o)){Il=0,Ll=null,ju(t);break}t=function(){Il!==2&&Il!==9||Pl!==e||(Il=7),nd(e)},o.then(t,t);break a;case 3:Il=7;break a;case 4:Il=5;break a;case 7:va(o)?(Il=0,Ll=null,ju(t)):(Il=0,Ll=null,Mu(e,t,o,7));break;case 5:var s=null;switch(Q.tag){case 26:s=Q.memoizedState;case 5:case 27:var c=Q;if(s?Wf(s):c.stateNode.complete){Il=0,Ll=null;var l=c.sibling;if(l!==null)Q=l;else{var u=c.return;u===null?Q=null:(Q=u,Nu(u))}break b}}Il=0,Ll=null,Mu(e,t,o,5);break;case 6:Il=0,Ll=null,Mu(e,t,o,6);break;case 8:yu(),Hl=6;break a;default:throw Error(i(462))}}ku();break}catch(t){xu(e,t)}while(1);return zi=Ri=null,D.H=r,D.A=a,Nl=n,Q===null?(Pl=null,Fl=0,Kr(),Hl):0}function ku(){for(;Q!==null&&!Oe();)Au(Q)}function Au(e){var t=wc(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,t===null?Nu(e):Q=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=cc(n,t,t.pendingProps,t.type,void 0,Fl);break;case 11:t=cc(n,t,t.pendingProps,t.type.render,t.ref,Fl);break;case 5:xo(t);default:Nc(n,t),t=Q=ri(t,Vl),t=wc(n,t,Vl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):Q=t}function Mu(e,t,n,r){zi=Ri=null,xo(t),wa=null,J=0;var i=t.return;try{if(qs(e,i,t,n,Fl)){Hl=1,Hs(e,ui(n,e.current)),Q=null;return}}catch(t){if(i!==null)throw Q=i,t;Hl=1,Hs(e,ui(n,e.current)),Q=null;return}t.flags&32768?(q||r===1?e=!0:zl||Fl&536870912?e=!1:(Rl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ja.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,Rl);return}e=t.return;var n=jc(t.alternate,t,Vl);if(n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Hl===0&&(Hl=5)}function Pu(e,t){do{var n=Mc(e.alternate,e);if(n!==null){n.flags&=32767,Q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Q=e;return}Q=e=n}while(e!==null);Hl=6,Q=null}function Fu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Bu();while(nu!==0);if(Nl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Gr,I(e,n,o,s,c,l),e===Pl&&(Q=Pl=null,Fl=0),iu=t,ru=e,au=n,ou=o,su=a,cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(Ne,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=Nl,Nl|=4;try{Qc(e,t,n)}finally{Nl=s,O.p=a,D.T=r}}nu=1,Iu(),Lu(),Ru()}}function Iu(){if(nu===1){nu=0;var e=ru,t=iu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=Nl;Nl|=4;try{dl(t,e);var a=zd,o=Sr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&xr(s.ownerDocument.documentElement,s)){if(c!==null&&Cr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=br(s,h),v=br(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{Nl=i,O.p=r,D.T=n}}e.current=t,nu=2}}function Lu(){if(nu===2){nu=0;var e=ru,t=iu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=Nl;Nl|=4;try{$c(e,t.alternate,t)}finally{Nl=i,O.p=r,D.T=n}}nu=3}}function Ru(){if(nu===4||nu===3){nu=0,ke();var e=ru,t=iu,n=au,r=cu;t.subtreeFlags&10256||t.flags&10256?nu=5:(nu=0,iu=ru=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tu=null),nt(n),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot==`function`)try{Re.onCommitFiberRoot(Le,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}au&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===uu?lu++:(lu=0,uu=e):lu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ta(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(nu!==5)return!1;var e=ru,t=ou;ou=0;var n=nt(au),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=su,su=null;var o=ru,s=au;if(nu=0,iu=ru=null,au=0,Nl&6)throw Error(i(331));var c=Nl;if(Nl|=4,Ol(o.current),bl(o,o.current,s,n),Nl=c,rd(0,!1),Re&&typeof Re.onPostCommitFiberRoot==`function`)try{Re.onPostCommitFiberRoot(Le,o)}catch{}return!0}finally{O.p=a,D.T=r,zu(e,t)}}function Hu(e,t,n){t=ui(n,t),t=Ws(e.stateNode,t,2),e=Fa(e,t,2),e!==null&&(Ze(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(tu===null||!tu.has(r))){e=ui(n,e),n=Gs(2),r=Fa(t,n,2),r!==null&&(Ks(n,r,t,e),Ze(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ml;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Bl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pl===e&&(Fl&n)===n&&(Hl===4||Hl===3&&(Fl&62914560)===Fl&&300>Ae()-Zl?!(Nl&2)&&bu(e,0):Gl|=n,ql===Fl&&(ql=0)),nd(e)}function Ku(e,t){t===0&&(t=Ye()),e=Yr(e,t),e!==null&&(Ze(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return Ee(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Be(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Fl,a=Ke(r,r===Pl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=Ae(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}nu!==0&&nu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Be(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Pl,n=Fl,n=Ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Il===2||Il===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&De(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&De(r),nt(n)){case 2:case 8:n=Me;break;case 32:n=Ne;break;case 268435456:n=Pe;break;default:n=Ne}return r=sd.bind(null,e),n=Ee(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&De(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(nu!==0&&nu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Fl;return r=Ke(e,e===Pl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,Ae()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Yd(function(){Nl&6?Ee(M,id):ad()})}function ud(){if(td===0){var e=ia;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:$t(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[st]||null).action),o=r.submitter;o&&(t=(t=o[st]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new _n(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);gs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),gs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Br.length;md++){var hd=Br[md];Vr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}Vr(Pr,`onAnimationEnd`),Vr(Fr,`onAnimationIteration`),Vr(Ir,`onAnimationStart`),Vr(`dblclick`,`onDoubleClick`),Vr(`focusin`,`onFocus`),Vr(`focusout`,`onBlur`),Vr(Lr,`onTransitionRun`),Vr(Rr,`onTransitionStart`),Vr(G,`onTransitionCancel`),Vr(K,`onTransitionEnd`),Ct(`onMouseEnter`,[`mouseout`,`mouseover`]),Ct(`onMouseLeave`,[`mouseout`,`mouseover`]),Ct(`onPointerEnter`,[`pointerout`,`pointerover`]),Ct(`onPointerLeave`,[`pointerout`,`pointerover`]),xt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),xt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),xt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),xt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Hr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Hr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[ct];n===void 0&&(n=t[ct]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,yt.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!ln||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=mt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}on(function(){var r=a,i=R(n),s=[];a:{var c=zr.get(e);if(c!==void 0){var l=_n,u=e;switch(e){case`keypress`:if(B(n)===0)break a;case`keydown`:case`keyup`:l=Fn;break;case`focusin`:u=`focus`,l=En;break;case`focusout`:u=`blur`,l=En;break;case`beforeblur`:case`afterblur`:l=En;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Tn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Ln;break;case Pr:case Fr:case Ir:l=Dn;break;case K:l=Rn;break;case`scroll`:case`scrollend`:l=yn;break;case`wheel`:l=zn;break;case`copy`:case`cut`:case`paste`:l=On;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=In;break;case`toggle`:case`beforetoggle`:l=Bn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=sn(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==tn&&(u=n.relatedTarget||n.fromElement)&&(mt(u)||u[L]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?mt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=In,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:gt(l),h=u==null?c:gt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,mt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?gt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ar;else if($n(c))if(or)v=hr;else{v=pr;var y=fr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Xt(r.elementType)&&(v=ar):v=mr;if(v&&=v(e,r)){er(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ht(c,`number`,c.value)}switch(y=r?gt(r):window,e){case`focusin`:($n(y)||y.contentEditable===`true`)&&(Tr=y,Er=r,Dr=null);break;case`focusout`:Dr=Er=Tr=null;break;case`mousedown`:Or=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Or=!1,kr(s,n,i);break;case`selectionchange`:if(wr)break;case`keydown`:case`keyup`:kr(s,n,i)}var b;if(Hn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Yn?qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Gn&&n.locale!==`ko`&&(Yn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Yn&&(b=mn()):(dn=i,fn=`value`in dn?dn.value:dn.textContent,Yn=!0)),y=Td(r,x),0<y.length&&(x=new kn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Jn(n),b!==null&&(x.data=b)))),(b=Wn?Xn(e,n):Zn(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new kn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=sn(e,n),i!=null&&r.unshift(wd(e,i,a)),i=sn(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=sn(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=sn(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Kt(e,``+r);break;case`className`:At(e,`class`,r);break;case`tabIndex`:At(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:At(e,n,r);break;case`style`:Yt(e,r,o);break;case`data`:if(t!==`object`){At(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=en);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=$t(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),kt(e,`popover`,r);break;case`xlinkActuate`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:kt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Zt.get(n)||n,kt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Yt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Kt(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=en);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[st]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):kt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Vt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ut(e,!!r,n,!0):Ut(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}Gt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Xt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Bt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ut(e,!!n,n?[]:``,!1):Ut(e,!!n,t,!0)):Ut(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}Wt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Xt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ft]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),pt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ft])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=vu();return e||t}function yf(e){var t=ht(e);t!==null&&t.tag===5&&t.type===`form`?vs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=zt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+zt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+zt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+zt(n.imageSizes)+`"]`)):i+=`[href="`+zt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+zt(r)+`"][href="`+zt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),vt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=_t(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);vt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=_t(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),vt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=_t(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),vt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=_t(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=_t(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=_t(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+zt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),vt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+zt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+zt(n.href)+`"]`);if(r)return t.instance=r,vt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),vt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,vt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),vt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,vt(a),a):(r=n,(a=mf.get(o))&&(r=f({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),vt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ft]||a[ot]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,vt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),vt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:b,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ei(3,null,null,t),e.current=a,a.stateNode=e,t=ea(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ma(a),e}function tp(e){return e?(e=Qr,e):Qr}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Pa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Fa(e,r,t),n!==null&&(pu(n,e,t),Ia(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Yr(e,67108864);t!==null&&pu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=du();t=tt(t);var n=Yr(e,t);n!==null&&pu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=ht(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=F(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Be(o);s.entanglements[1]|=c,o&=~c}nd(a),!(Nl&6)&&($l=Ae()+500,rd(0,!1))}}break;case 31:case 13:s=Yr(a,2),s!==null&&pu(s,a,2),vu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=R(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=mt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(je()){case M:return 2;case Me:return 8;case Ne:case N:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ht(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=mt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,it(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,it(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tn=r,n.target.dispatchEvent(r),tn=null}else return t=ht(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=ht(n);a!==null&&(e.splice(t,3),t-=3,gs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[st]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[st]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,du(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),vu(),t[L]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=rt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Le=zp.inject(Rp),Re=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=zs,s=Bs,c=Vs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[L]=t.current,xd(e),new Fp(t)}})),Et=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Tt()})),Dt=wt(),Ot=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,kt={popup:`styles-module__popup___IhzrD`,enter:`styles-module__enter___L7U7N`,popupEnter:`styles-module__popupEnter___AuQDN`,entered:`styles-module__entered___COX-w`,exit:`styles-module__exit___5eGjE`,popupExit:`styles-module__popupExit___JJKQX`,shake:`styles-module__shake___jdbWe`,header:`styles-module__header___wWsSi`,element:`styles-module__element___fTV2z`,headerToggle:`styles-module__headerToggle___WpW0b`,chevron:`styles-module__chevron___ZZJlR`,expanded:`styles-module__expanded___2Hxgv`,stylesWrapper:`styles-module__stylesWrapper___pnHgy`,stylesInner:`styles-module__stylesInner___YYZe2`,stylesBlock:`styles-module__stylesBlock___VfQKn`,styleLine:`styles-module__styleLine___1YQiD`,styleProperty:`styles-module__styleProperty___84L1i`,styleValue:`styles-module__styleValue___q51-h`,timestamp:`styles-module__timestamp___Dtpsv`,quote:`styles-module__quote___mcMmQ`,textarea:`styles-module__textarea___jrSae`,green:`styles-module__green___99l3h`,actions:`styles-module__actions___D6x3f`,cancel:`styles-module__cancel___hRjnL`,submit:`styles-module__submit___K-mIR`,deleteWrapper:`styles-module__deleteWrapper___oSjdo`,deleteButton:`styles-module__deleteButton___4VuAE`,light:`styles-module__light___6AaSQ`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-popup-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-popup-css-styles`,document.head.appendChild(e)),e.textContent=Ot}var At=kt,jt=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Mt={iconState:`icon-transitions-module__iconState___uqK9J`,iconStateFast:`icon-transitions-module__iconStateFast___HxlMm`,iconFade:`icon-transitions-module__iconFade___nPwXg`,iconFadeFast:`icon-transitions-module__iconFadeFast___Ofb2t`,visible:`icon-transitions-module__visible___PlHsU`,visibleScaled:`icon-transitions-module__visibleScaled___8Qog-`,hidden:`icon-transitions-module__hidden___ETykt`,hiddenScaled:`icon-transitions-module__hiddenScaled___JXn-m`,sending:`icon-transitions-module__sending___uaLN-`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-components-icon-transitions`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-components-icon-transitions`,document.head.appendChild(e)),e.textContent=jt}var Nt=Mt,Pt=({size:e=16})=>(0,N.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),Ft=({size:e=24,style:t={}})=>(0,N.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:t,children:[(0,N.jsxs)(`g`,{clipPath:`url(#clip0_list_sparkle)`,children:[(0,N.jsx)(`path`,{d:`M11.5 12L5.5 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M18.5 6.75L5.5 6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M9.25 17.25L5.5 17.25`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`})]}),(0,N.jsx)(`defs`,{children:(0,N.jsx)(`clipPath`,{id:`clip0_list_sparkle`,children:(0,N.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),It=({size:e=20,...t})=>(0,N.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...t,children:[(0,N.jsx)(`circle`,{cx:`10`,cy:`10`,r:`5.375`,stroke:`currentColor`,strokeWidth:`1.25`}),(0,N.jsx)(`path`,{d:`M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`circle`,{cx:`10`,cy:`12.625`,r:`0.625`,fill:`currentColor`})]}),Lt=({size:e=24,copied:t=!1,tint:n})=>(0,N.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:n?{color:n,transition:`color 0.3s ease`}:void 0,children:[(0,N.jsxs)(`g`,{className:`${Nt.iconState} ${t?Nt.hiddenScaled:Nt.visibleScaled}`,children:[(0,N.jsx)(`path`,{d:`M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,N.jsx)(`path`,{d:`M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,N.jsxs)(`g`,{className:`${Nt.iconState} ${t?Nt.visibleScaled:Nt.hiddenScaled}`,children:[(0,N.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),Rt=({size:e=24,state:t=`idle`})=>{let n=t===`idle`,r=t===`sent`,i=t===`failed`,a=t===`sending`;return(0,N.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsx)(`g`,{className:`${Nt.iconStateFast} ${n?Nt.visibleScaled:a?Nt.sending:Nt.hiddenScaled}`,children:(0,N.jsx)(`path`,{d:`M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,N.jsxs)(`g`,{className:`${Nt.iconStateFast} ${r?Nt.visibleScaled:Nt.hiddenScaled}`,children:[(0,N.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,N.jsxs)(`g`,{className:`${Nt.iconStateFast} ${i?Nt.visibleScaled:Nt.hiddenScaled}`,children:[(0,N.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M12 8V12`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`15`,r:`0.5`,fill:`var(--agentation-color-red)`,stroke:`var(--agentation-color-red)`,strokeWidth:`1`})]})]})},zt=({size:e=24,isOpen:t=!0})=>(0,N.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsxs)(`g`,{className:`${Nt.iconFade} ${t?Nt.visible:Nt.hidden}`,children:[(0,N.jsx)(`path`,{d:`M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,N.jsxs)(`g`,{className:`${Nt.iconFade} ${t?Nt.hidden:Nt.visible}`,children:[(0,N.jsx)(`path`,{d:`M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z`,fill:`currentColor`}),(0,N.jsx)(`path`,{d:`M5 19L19 5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})]}),Bt=({size:e=24,isPaused:t=!1})=>(0,N.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsxs)(`g`,{className:`${Nt.iconFadeFast} ${t?Nt.hidden:Nt.visible}`,children:[(0,N.jsx)(`path`,{d:`M8 6L8 18`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,N.jsx)(`path`,{d:`M16 18L16 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,N.jsx)(`path`,{className:`${Nt.iconFadeFast} ${t?Nt.visible:Nt.hidden}`,d:`M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z`,stroke:`currentColor`,strokeWidth:`1.5`})]}),Vt=({size:e=16})=>(0,N.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`})]}),Ht=({size:e=16})=>(0,N.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),Ut=({size:e=16})=>(0,N.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsxs)(`g`,{clipPath:`url(#clip0_2_53)`,children:[(0,N.jsx)(`path`,{d:`M16.25 16.25L7.75 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M7.75 16.25L16.25 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,N.jsx)(`defs`,{children:(0,N.jsx)(`clipPath`,{id:`clip0_2_53`,children:(0,N.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),Wt=({size:e=24})=>(0,N.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z`,fill:`currentColor`})}),Gt=({size:e=16})=>(0,N.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M10 3.9585V5.05698`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M10 14.9429V16.0414`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M5.7269 5.72656L6.50682 6.50649`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M13.4932 13.4932L14.2731 14.2731`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M3.95834 10H5.05683`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M14.9432 10H16.0417`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M5.7269 14.2731L6.50682 13.4932`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M13.4932 6.50649L14.2731 5.72656`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),Kt=({size:e=16})=>(0,N.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z`,stroke:`currentColor`,strokeWidth:`1.13793`,strokeLinecap:`round`,strokeLinejoin:`round`})}),qt=({size:e=16})=>(0,N.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,N.jsx)(`path`,{d:`M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375`,stroke:`currentColor`,strokeWidth:`0.9`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Jt=({size:e=24})=>(0,N.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,N.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),Yt=({size:e=16})=>(0,N.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,N.jsx)(`path`,{d:`M8.5 3.5L4 8L8.5 12.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Xt=({size:e=24})=>(0,N.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,N.jsx)(`line`,{x1:`3`,y1:`9`,x2:`21`,y2:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,N.jsx)(`line`,{x1:`9`,y1:`9`,x2:`9`,y2:`21`,stroke:`currentColor`,strokeWidth:`1.5`})]}),Zt=[`data-feedback-toolbar`,`data-annotation-popup`,`data-annotation-marker`],Qt=Zt.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(``),$t=`feedback-freeze-styles`,en=`__agentation_freeze`;function tn(){if(typeof window>`u`)return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;return e[en]||(e[en]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[en]}var R=tn();typeof window<`u`&&!R.installed&&(R.origSetTimeout=window.setTimeout.bind(window),R.origSetInterval=window.setInterval.bind(window),R.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e==`string`?R.origSetTimeout(e,t):R.origSetTimeout((...t)=>{R.frozen?R.frozenTimeoutQueue.push(()=>e(...t)):e(...t)},t,...n),window.setInterval=(e,t,...n)=>typeof e==`string`?R.origSetInterval(e,t):R.origSetInterval((...t)=>{R.frozen||e(...t)},t,...n),window.requestAnimationFrame=e=>R.origRAF(t=>{R.frozen?R.frozenRAFQueue.push(e):e(t)}),R.installed=!0);var z=R.origSetTimeout,nn=R.origSetInterval,rn=R.origRAF;function an(e){return e?Zt.some(t=>!!e.closest?.(`[${t}]`)):!1}function on(){if(typeof document>`u`||R.frozen)return;R.frozen=!0,R.frozenTimeoutQueue=[],R.frozenRAFQueue=[];let e=document.getElementById($t);e||(e=document.createElement(`style`),e.id=$t),e.textContent=`
    *${Qt},
    *${Qt}::before,
    *${Qt}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),R.pausedAnimations=[];try{document.getAnimations().forEach(e=>{if(e.playState!==`running`)return;let t=e.effect?.target;an(t)||(e.pause(),R.pausedAnimations.push(e))})}catch{}document.querySelectorAll(`video`).forEach(e=>{e.paused||(e.dataset.wasPaused=`false`,e.pause())})}function sn(){if(typeof document>`u`||!R.frozen)return;R.frozen=!1;let e=R.frozenTimeoutQueue;R.frozenTimeoutQueue=[];for(let t of e)R.origSetTimeout(()=>{if(R.frozen){R.frozenTimeoutQueue.push(t);return}try{t()}catch(e){console.warn(`[agentation] Error replaying queued timeout:`,e)}},0);let t=R.frozenRAFQueue;R.frozenRAFQueue=[];for(let e of t)R.origRAF(t=>{if(R.frozen){R.frozenRAFQueue.push(e);return}e(t)});for(let e of R.pausedAnimations)try{e.play()}catch(e){console.warn(`[agentation] Error resuming animation:`,e)}R.pausedAnimations=[],document.getElementById($t)?.remove(),document.querySelectorAll(`video`).forEach(e=>{e.dataset.wasPaused===`false`&&(e.play().catch(()=>{}),delete e.dataset.wasPaused)})}function cn(e){if(!e)return;let t=e=>e.stopImmediatePropagation();document.addEventListener(`focusin`,t,!0),document.addEventListener(`focusout`,t,!0);try{e.focus()}finally{document.removeEventListener(`focusin`,t,!0),document.removeEventListener(`focusout`,t,!0)}}var ln=(0,I.forwardRef)(function({element:e,timestamp:t,selectedText:n,placeholder:r=`What should change?`,initialValue:i=``,submitLabel:a=`Add`,onSubmit:o,onCancel:s,onDelete:c,style:l,accentColor:u=`#3c82f7`,isExiting:d=!1,lightMode:f=!1,computedStyles:p},m){let[h,g]=(0,I.useState)(i),[_,v]=(0,I.useState)(!1),[y,b]=(0,I.useState)(`initial`),[x,S]=(0,I.useState)(!1),[ee,C]=(0,I.useState)(!1),te=(0,I.useRef)(null),w=(0,I.useRef)(null),ne=(0,I.useRef)(null),T=(0,I.useRef)(null);(0,I.useEffect)(()=>{d&&y!==`exit`&&b(`exit`)},[d,y]),(0,I.useEffect)(()=>{z(()=>{b(`enter`)},0);let e=z(()=>{b(`entered`)},200),t=z(()=>{let e=te.current;e&&(cn(e),e.selectionStart=e.selectionEnd=e.value.length,e.scrollTop=e.scrollHeight)},50);return()=>{clearTimeout(e),clearTimeout(t),ne.current&&clearTimeout(ne.current),T.current&&clearTimeout(T.current)}},[]);let re=(0,I.useCallback)(()=>{T.current&&clearTimeout(T.current),v(!0),T.current=z(()=>{v(!1),cn(te.current)},250)},[]);(0,I.useImperativeHandle)(m,()=>({shake:re}),[re]);let E=(0,I.useCallback)(()=>{b(`exit`),ne.current=z(()=>{s()},150)},[s]),ie=(0,I.useCallback)(()=>{h.trim()&&o(h.trim())},[h,o]),ae=(0,I.useCallback)(e=>{e.stopPropagation(),!e.nativeEvent.isComposing&&(e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),ie()),e.key===`Escape`&&E())},[ie,E]);return(0,N.jsxs)(`div`,{ref:w,className:[At.popup,f?At.light:``,y===`enter`?At.enter:``,y===`entered`?At.entered:``,y===`exit`?At.exit:``,_?At.shake:``].filter(Boolean).join(` `),"data-annotation-popup":!0,style:l,onClick:e=>e.stopPropagation(),children:[(0,N.jsxs)(`div`,{className:At.header,children:[p&&Object.keys(p).length>0?(0,N.jsxs)(`button`,{className:At.headerToggle,onClick:()=>{let e=ee;C(!ee),e&&z(()=>cn(te.current),0)},type:`button`,children:[(0,N.jsx)(`svg`,{className:`${At.chevron} ${ee?At.expanded:``}`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,N.jsx)(`path`,{d:`M5.5 10.25L9 7.25L5.75 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,N.jsx)(`span`,{className:At.element,children:e})]}):(0,N.jsx)(`span`,{className:At.element,children:e}),t&&(0,N.jsx)(`span`,{className:At.timestamp,children:t})]}),p&&Object.keys(p).length>0&&(0,N.jsx)(`div`,{className:`${At.stylesWrapper} ${ee?At.expanded:``}`,children:(0,N.jsx)(`div`,{className:At.stylesInner,children:(0,N.jsx)(`div`,{className:At.stylesBlock,children:Object.entries(p).map(([e,t])=>(0,N.jsxs)(`div`,{className:At.styleLine,children:[(0,N.jsx)(`span`,{className:At.styleProperty,children:e.replace(/([A-Z])/g,`-$1`).toLowerCase()}),`: `,(0,N.jsx)(`span`,{className:At.styleValue,children:t}),`;`]},e))})})}),n&&(0,N.jsxs)(`div`,{className:At.quote,children:[`“`,n.slice(0,80),n.length>80?`...`:``,`”`]}),(0,N.jsx)(`textarea`,{ref:te,className:At.textarea,style:{borderColor:x?u:void 0},placeholder:r,value:h,onChange:e=>g(e.target.value),onFocus:()=>S(!0),onBlur:()=>S(!1),rows:2,onKeyDown:ae}),(0,N.jsxs)(`div`,{className:At.actions,children:[c&&(0,N.jsx)(`div`,{className:At.deleteWrapper,children:(0,N.jsx)(`button`,{className:At.deleteButton,onClick:c,type:`button`,children:(0,N.jsx)(Jt,{size:22})})}),(0,N.jsx)(`button`,{className:At.cancel,onClick:E,children:`Cancel`}),(0,N.jsx)(`button`,{className:At.submit,style:{backgroundColor:u,opacity:h.trim()?1:.4},onClick:ie,disabled:!h.trim(),children:a})]})]})}),un=({content:e,children:t,...n})=>{let[r,i]=(0,I.useState)(!1),[a,o]=(0,I.useState)(!1),[s,c]=(0,I.useState)({top:0,right:0}),l=(0,I.useRef)(null),u=(0,I.useRef)(null),d=(0,I.useRef)(null),f=()=>{if(l.current){let e=l.current.getBoundingClientRect();c({top:e.top+e.height/2,right:window.innerWidth-e.left+8})}};return(0,I.useEffect)(()=>()=>{u.current&&clearTimeout(u.current),d.current&&clearTimeout(d.current)},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{ref:l,onMouseEnter:()=>{o(!0),d.current&&=(clearTimeout(d.current),null),f(),u.current=z(()=>{i(!0)},500)},onMouseLeave:()=>{u.current&&=(clearTimeout(u.current),null),i(!1),d.current=z(()=>{o(!1)},150)},...n,children:t}),a&&(0,Dt.createPortal)((0,N.jsx)(`div`,{"data-feedback-toolbar":!0,style:{position:`fixed`,top:s.top,right:s.right,transform:`translateY(-50%)`,padding:`6px 10px`,background:`#383838`,color:`rgba(255, 255, 255, 0.7)`,fontSize:`11px`,fontWeight:400,lineHeight:`14px`,borderRadius:`10px`,width:`180px`,textAlign:`left`,zIndex:100020,pointerEvents:`none`,boxShadow:`0px 1px 8px rgba(0, 0, 0, 0.28)`,opacity:+!!r,transition:`opacity 0.15s ease`},children:e}),document.body)]})},dn=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,fn={tooltip:`styles-module__tooltip___mcXL2`,tooltipIcon:`styles-module__tooltipIcon___Nq2nD`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-help-tooltip-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-help-tooltip-styles`,document.head.appendChild(e)),e.textContent=dn}var pn=fn,mn=({content:e})=>(0,N.jsx)(un,{className:pn.tooltip,content:e,children:(0,N.jsx)(It,{className:pn.tooltipIcon})}),B={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},hn=[{section:`Layout`,items:[{type:`navigation`,label:`Navigation`,...B.navigation},{type:`header`,label:`Header`,...B.header},{type:`hero`,label:`Hero`,...B.hero},{type:`section`,label:`Section`,...B.section},{type:`sidebar`,label:`Sidebar`,...B.sidebar},{type:`footer`,label:`Footer`,...B.footer},{type:`modal`,label:`Modal`,...B.modal},{type:`banner`,label:`Banner`,...B.banner},{type:`drawer`,label:`Drawer`,...B.drawer},{type:`popover`,label:`Popover`,...B.popover},{type:`divider`,label:`Divider`,...B.divider}]},{section:`Content`,items:[{type:`card`,label:`Card`,...B.card},{type:`text`,label:`Text`,...B.text},{type:`image`,label:`Image`,...B.image},{type:`video`,label:`Video`,...B.video},{type:`table`,label:`Table`,...B.table},{type:`grid`,label:`Grid`,...B.grid},{type:`list`,label:`List`,...B.list},{type:`chart`,label:`Chart`,...B.chart},{type:`codeBlock`,label:`Code Block`,...B.codeBlock},{type:`map`,label:`Map`,...B.map},{type:`timeline`,label:`Timeline`,...B.timeline},{type:`calendar`,label:`Calendar`,...B.calendar},{type:`accordion`,label:`Accordion`,...B.accordion},{type:`carousel`,label:`Carousel`,...B.carousel},{type:`logo`,label:`Logo`,...B.logo},{type:`faq`,label:`FAQ`,...B.faq},{type:`gallery`,label:`Gallery`,...B.gallery}]},{section:`Controls`,items:[{type:`button`,label:`Button`,...B.button},{type:`input`,label:`Input`,...B.input},{type:`search`,label:`Search`,...B.search},{type:`form`,label:`Form`,...B.form},{type:`tabs`,label:`Tabs`,...B.tabs},{type:`dropdown`,label:`Dropdown`,...B.dropdown},{type:`toggle`,label:`Toggle`,...B.toggle},{type:`stepper`,label:`Stepper`,...B.stepper},{type:`rating`,label:`Rating`,...B.rating},{type:`fileUpload`,label:`File Upload`,...B.fileUpload},{type:`checkbox`,label:`Checkbox`,...B.checkbox},{type:`radio`,label:`Radio`,...B.radio},{type:`slider`,label:`Slider`,...B.slider},{type:`datePicker`,label:`Date Picker`,...B.datePicker}]},{section:`Elements`,items:[{type:`avatar`,label:`Avatar`,...B.avatar},{type:`badge`,label:`Badge`,...B.badge},{type:`tag`,label:`Tag`,...B.tag},{type:`breadcrumb`,label:`Breadcrumb`,...B.breadcrumb},{type:`pagination`,label:`Pagination`,...B.pagination},{type:`progress`,label:`Progress`,...B.progress},{type:`alert`,label:`Alert`,...B.alert},{type:`toast`,label:`Toast`,...B.toast},{type:`notification`,label:`Notification`,...B.notification},{type:`tooltip`,label:`Tooltip`,...B.tooltip},{type:`stat`,label:`Stat`,...B.stat},{type:`skeleton`,label:`Skeleton`,...B.skeleton},{type:`chip`,label:`Chip`,...B.chip},{type:`icon`,label:`Icon`,...B.icon},{type:`spinner`,label:`Spinner`,...B.spinner}]},{section:`Blocks`,items:[{type:`pricing`,label:`Pricing`,...B.pricing},{type:`testimonial`,label:`Testimonial`,...B.testimonial},{type:`cta`,label:`CTA`,...B.cta},{type:`productCard`,label:`Product Card`,...B.productCard},{type:`profile`,label:`Profile`,...B.profile},{type:`feature`,label:`Feature`,...B.feature},{type:`team`,label:`Team`,...B.team},{type:`login`,label:`Login`,...B.login},{type:`contact`,label:`Contact`,...B.contact}]}],gn={};for(let e of hn)for(let t of e.items)gn[t.type]=t;function V({w:e,h:t=3,strong:n}){return(0,N.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:t,borderRadius:2,background:n?`var(--agd-bar-strong)`:`var(--agd-bar)`,flexShrink:0}})}function H({w:e,h:t,radius:n=3,style:r}){return(0,N.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:typeof t==`number`?`${t}px`:t,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0,...r}})}function _n({size:e}){return(0,N.jsx)(`div`,{style:{width:e,height:e,borderRadius:`50%`,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0}})}function vn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,padding:`0 ${Math.max(8,t*.2)}px`,gap:e*.02},children:[(0,N.jsx)(H,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginLeft:e*.04},children:[(0,N.jsx)(V,{w:e*.06}),(0,N.jsx)(V,{w:e*.07}),(0,N.jsx)(V,{w:e*.05}),(0,N.jsx)(V,{w:e*.06})]}),(0,N.jsx)(H,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function yn({width:e,height:t,text:n}){return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.05},children:[n?(0,N.jsx)(`span`,{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:`var(--agd-text-3)`,textAlign:`center`,maxWidth:`80%`},children:n}):(0,N.jsx)(V,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,N.jsx)(V,{w:e*.6}),(0,N.jsx)(V,{w:e*.4}),(0,N.jsx)(H,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function bn({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,N.jsxs)(`div`,{style:{padding:e*.08,display:`flex`,flexDirection:`column`,gap:t*.03},children:[(0,N.jsx)(V,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(t,n)=>(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,N.jsx)(H,{w:10,h:10,radius:2}),(0,N.jsx)(V,{w:e*(.4+n*17%30/100)})]},n))]})}function xn({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,N.jsx)(`div`,{style:{display:`flex`,padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(e,t)=>(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,N.jsx)(V,{w:`60%`,h:3,strong:!0}),(0,N.jsx)(V,{w:`80%`,h:2}),(0,N.jsx)(V,{w:`70%`,h:2}),(0,N.jsx)(V,{w:`60%`,h:2})]},t))})}function Sn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,N.jsxs)(`div`,{style:{padding:`10px 12px`,borderBottom:`1px solid var(--agd-stroke)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,N.jsx)(V,{w:e*.3,h:4,strong:!0}),(0,N.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),(0,N.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,N.jsx)(V,{w:`90%`}),(0,N.jsx)(V,{w:`70%`}),(0,N.jsx)(V,{w:`80%`})]}),(0,N.jsxs)(`div`,{style:{padding:`10px 12px`,borderTop:`1px solid var(--agd-stroke)`,display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,N.jsx)(H,{w:70,h:26,radius:4}),(0,N.jsx)(H,{w:70,h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})}function Cn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,N.jsx)(`div`,{style:{height:`40%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,N.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,N.jsx)(V,{w:`70%`,h:4,strong:!0}),(0,N.jsx)(V,{w:`95%`,h:2}),(0,N.jsx)(V,{w:`85%`,h:2}),(0,N.jsx)(V,{w:`50%`,h:2})]})]})}function wn({width:e,height:t,text:n}){if(n)return(0,N.jsx)(`div`,{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:`var(--agd-text-3)`,wordBreak:`break-word`,overflow:`hidden`},children:n});let r=Math.max(2,Math.floor(t/18));return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,padding:4},children:[(0,N.jsx)(V,{w:e*.6,h:5,strong:!0}),Array.from({length:r},(e,t)=>(0,N.jsx)(V,{w:`${70+t*13%25}%`,h:2},t))]})}function Tn({width:e,height:t}){return(0,N.jsx)(`div`,{style:{height:`100%`,position:`relative`},children:(0,N.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:`none`,fill:`none`,children:[(0,N.jsx)(`line`,{x1:`0`,y1:`0`,x2:e,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,N.jsx)(`line`,{x1:e,y1:`0`,x2:`0`,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,N.jsx)(`circle`,{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:`var(--agd-fill)`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`})]})})}function En({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),r=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,N.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid var(--agd-stroke)`,padding:`6px 0`},children:Array.from({length:n},(e,t)=>(0,N.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,N.jsx)(V,{w:`70%`,h:3,strong:!0})},t))}),Array.from({length:r},(e,t)=>(0,N.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid rgba(255,255,255,0.03)`,padding:`6px 0`},children:Array.from({length:n},(e,n)=>(0,N.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,N.jsx)(V,{w:`${50+(t*7+n*13)%40}%`,h:2})},n))},t))]})}function Dn({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,N.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,padding:4},children:Array.from({length:n},(e,t)=>(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,padding:`4px 0`},children:[(0,N.jsx)(_n,{size:8}),(0,N.jsx)(V,{w:`${55+t*17%35}%`,h:2})]},t))})}function On({width:e,height:t,text:n}){return(0,N.jsx)(`div`,{style:{height:`100%`,borderRadius:Math.min(8,t/3),border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:n?(0,N.jsx)(`span`,{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:`var(--agd-text-3)`,letterSpacing:`-0.01em`},children:n}):(0,N.jsx)(V,{w:Math.max(20,e*.5),h:3,strong:!0})})}function kn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,height:`100%`,justifyContent:`center`},children:[(0,N.jsx)(V,{w:Math.min(80,e*.3),h:2}),(0,N.jsx)(`div`,{style:{height:Math.min(36,t*.6),borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,paddingLeft:8},children:(0,N.jsx)(V,{w:`40%`,h:2})})]})}function An({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:t*.04,padding:8},children:[Array.from({length:n},(e,t)=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,N.jsx)(V,{w:60+t*17%30,h:2}),(0,N.jsx)(H,{w:`100%`,h:28,radius:4})]},t)),(0,N.jsx)(H,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}function jn({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,N.jsx)(`div`,{style:{display:`flex`,gap:2,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>(0,N.jsx)(`div`,{style:{padding:`8px 12px`,borderBottom:t===0?`2px solid var(--agd-bar-strong)`:`none`},children:(0,N.jsx)(V,{w:60,h:3,strong:t===0})},t))}),(0,N.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,N.jsx)(V,{w:`80%`,h:2}),(0,N.jsx)(V,{w:`65%`,h:2}),(0,N.jsx)(V,{w:`75%`,h:2})]})]})}function Mn({width:e,height:t}){let n=Math.min(e,t)/2;return(0,N.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:e/2,cy:t/2,r:n-1,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`1.5`,strokeDasharray:`3 2`}),(0,N.jsx)(`circle`,{cx:e/2,cy:t*.38,r:n*.28,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`}),(0,N.jsx)(`path`,{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`})]})}function Nn({width:e,height:t}){return(0,N.jsx)(`div`,{style:{height:`100%`,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,N.jsx)(V,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Pn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,N.jsx)(V,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,N.jsx)(V,{w:e*.35})]})}function Fn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:t*.04,padding:e*.04},children:[(0,N.jsx)(V,{w:e*.3,h:4,strong:!0}),(0,N.jsx)(V,{w:e*.7}),(0,N.jsx)(V,{w:e*.5}),(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginTop:t*.06},children:[(0,N.jsx)(H,{w:`33%`,h:`100%`,radius:4}),(0,N.jsx)(H,{w:`33%`,h:`100%`,radius:4}),(0,N.jsx)(H,{w:`33%`,h:`100%`,radius:4})]})]})}function In({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:6,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,N.jsx)(H,{w:`100%`,h:`100%`,radius:4},t))})}function Ln({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,N.jsx)(`div`,{style:{padding:`6px 8px`,borderBottom:`1px solid var(--agd-stroke)`},children:(0,N.jsx)(V,{w:e*.5,h:3,strong:!0})}),(0,N.jsx)(`div`,{style:{flex:1,padding:4,display:`flex`,flexDirection:`column`,gap:2},children:Array.from({length:n},(e,t)=>(0,N.jsx)(`div`,{style:{padding:`4px 6px`,borderRadius:3,background:t===0?`var(--agd-fill)`:`transparent`},children:(0,N.jsx)(V,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))})]})}function Rn({width:e,height:t}){let n=Math.min(e,t)/2;return(0,N.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`1`,width:e-2,height:t-2,rx:n,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,N.jsx)(`circle`,{cx:e-n,cy:t/2,r:n*.7,fill:`var(--agd-bar)`})]})}function zn({width:e,height:t}){let n=Math.min(t/2,20);return(0,N.jsxs)(`div`,{style:{height:`100%`,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${n*.6}px`,gap:6},children:[(0,N.jsx)(_n,{size:Math.min(14,t*.4)}),(0,N.jsx)(V,{w:`50%`,h:2})]})}function Bn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,N.jsx)(_n,{size:Math.min(20,t*.5)}),(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,N.jsx)(V,{w:`60%`,h:3,strong:!0}),(0,N.jsx)(V,{w:`80%`,h:2})]}),(0,N.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3,flexShrink:0}})]})}function Vn({width:e,height:t}){return(0,N.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`0`,y:`0`,width:e,height:t,rx:t/2,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`}),(0,N.jsx)(`rect`,{x:`1`,y:`1`,width:e*.65,height:t-2,rx:(t-2)/2,fill:`var(--agd-bar)`})]})}function Hn({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),r=e/(n*2);return(0,N.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`flex-end`,justifyContent:`space-around`,padding:`0 4px`,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>(0,N.jsx)(H,{w:r,h:`${30+(t*37+17)%55}%`,radius:2},t))})}function Un({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,N.jsxs)(`div`,{style:{height:`100%`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,N.jsx)(H,{w:`100%`,h:`100%`,radius:4}),(0,N.jsx)(`div`,{style:{position:`absolute`,width:n*2,height:n*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,N.jsx)(`div`,{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function Wn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,N.jsx)(`div`,{style:{flex:1,width:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,N.jsx)(V,{w:`60%`,h:2})}),(0,N.jsx)(`div`,{style:{width:8,height:8,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-5}})]})}function Gn({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[t>0&&(0,N.jsx)(`span`,{style:{color:`var(--agd-stroke)`,fontSize:10},children:`/`}),(0,N.jsx)(V,{w:40+t*13%20,h:2,strong:t===n-1})]},t))})}function U({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),r=Math.min(28,t*.8);return(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,N.jsx)(H,{w:r,h:r,radius:4,style:t===1?{background:`var(--agd-bar)`}:void 0},t))})}function Kn({width:e}){return(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`},children:(0,N.jsx)(`div`,{style:{width:`100%`,height:1,background:`var(--agd-stroke)`}})})}function qn({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,N.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(e,t)=>(0,N.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:t===0?2:1},children:[(0,N.jsx)(V,{w:`${40+t*17%25}%`,h:3,strong:!0}),(0,N.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:t===0?`▼`:`▶`})]},t))})}function Jn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:6},children:[(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:6,alignItems:`center`},children:[(0,N.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`‹`}),(0,N.jsx)(H,{w:`100%`,h:`100%`,radius:4}),(0,N.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`›`})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:4},children:[(0,N.jsx)(_n,{size:5}),(0,N.jsx)(_n,{size:5}),(0,N.jsx)(_n,{size:5})]})]})}function Yn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:10,gap:t*.04},children:[(0,N.jsx)(V,{w:e*.4,h:3,strong:!0}),(0,N.jsx)(V,{w:e*.3,h:6,strong:!0}),(0,N.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4,width:`100%`,padding:`8px 0`},children:Array.from({length:4},(e,t)=>(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,N.jsx)(_n,{size:5}),(0,N.jsx)(V,{w:`${50+t*17%35}%`,h:2})]},t))}),(0,N.jsx)(H,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:`var(--agd-bar)`}})]})}function Xn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:10,gap:8},children:[(0,N.jsx)(`span`,{style:{fontSize:18,lineHeight:1,color:`var(--agd-stroke)`,fontFamily:`serif`},children:`“`}),(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,N.jsx)(V,{w:`90%`,h:2}),(0,N.jsx)(V,{w:`75%`,h:2}),(0,N.jsx)(V,{w:`60%`,h:2})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,N.jsx)(_n,{size:20}),(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,N.jsx)(V,{w:60,h:3,strong:!0}),(0,N.jsx)(V,{w:40,h:2})]})]})]})}function Zn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,N.jsx)(V,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,N.jsx)(V,{w:e*.35}),(0,N.jsx)(H,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:`var(--agd-bar)`}})]})}function Qn({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,N.jsx)(`div`,{style:{width:16,height:16,borderRadius:`50%`,border:`1.5px solid var(--agd-bar-strong)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,N.jsx)(`div`,{style:{width:2,height:6,background:`var(--agd-bar-strong)`,borderRadius:1}})}),(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,N.jsx)(V,{w:`40%`,h:3,strong:!0}),(0,N.jsx)(V,{w:`70%`,h:2})]})]})}function $n({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8,padding:`0 12px`},children:[(0,N.jsx)(V,{w:e*.4,h:3,strong:!0}),(0,N.jsx)(H,{w:60,h:Math.min(24,t*.6),radius:4})]})}function er({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,N.jsx)(V,{w:e*.5,h:2}),(0,N.jsx)(V,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,N.jsx)(V,{w:e*.3,h:2})]})}function tr({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),r=Math.min(12,t*.35);return(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,height:`100%`,padding:`0 8px`},children:Array.from({length:n},(e,t)=>(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:0,flex:1},children:[(0,N.jsx)(`div`,{style:{width:r,height:r,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:t===0?`var(--agd-bar)`:`transparent`,flexShrink:0}}),t<n-1&&(0,N.jsx)(`div`,{style:{flex:1,height:1,background:`var(--agd-stroke)`,margin:`0 4px`}})]},t))})}function nr({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,borderRadius:4,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,padding:`0 6px`},children:[(0,N.jsx)(V,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,N.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0}})]})}function rr({width:e,height:t}){let n=Math.min(t*.7,e/(5*1.5));return(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:n*.2},children:Array.from({length:5},(e,t)=>(0,N.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 16 16`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`,fill:t<3?`var(--agd-bar)`:`none`})},t))})}function ir({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,position:`relative`,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,overflow:`hidden`},children:[(0,N.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,style:{position:`absolute`,inset:0},children:[(0,N.jsx)(`line`,{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.2`}),(0,N.jsx)(`line`,{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`}),(0,N.jsx)(`line`,{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`})]}),(0,N.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`40%`,transform:`translate(-50%, -100%)`},children:(0,N.jsxs)(`svg`,{width:`16`,height:`22`,viewBox:`0 0 16 22`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z`,fill:`var(--agd-bar)`,opacity:`.4`}),(0,N.jsx)(`circle`,{cx:`8`,cy:`8`,r:`3`,fill:`var(--agd-fill)`})]})})]})}function ar({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,N.jsxs)(`div`,{style:{display:`flex`,height:`100%`,padding:`8px 0`},children:[(0,N.jsx)(`div`,{style:{width:16,display:`flex`,flexDirection:`column`,alignItems:`center`},children:Array.from({length:n},(e,t)=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,flex:1},children:[(0,N.jsx)(_n,{size:8}),t<n-1&&(0,N.jsx)(`div`,{style:{flex:1,width:1,background:`var(--agd-stroke)`}})]},t))}),(0,N.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-around`,paddingLeft:8},children:Array.from({length:n},(e,t)=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,N.jsx)(V,{w:`${35+t*13%25}%`,h:3,strong:!0}),(0,N.jsx)(V,{w:`${50+t*17%30}%`,h:2})]},t))})]})}function or({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`2px dashed var(--agd-stroke)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,N.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M12 16V4m0 0l-4 4m4-4l4 4`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,N.jsx)(`path`,{d:`M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`})]}),(0,N.jsx)(V,{w:e*.4,h:2}),(0,N.jsx)(V,{w:e*.25,h:2})]})}function sr({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,N.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,padding:8,display:`flex`,flexDirection:`column`,gap:4},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,gap:3,marginBottom:4},children:[(0,N.jsx)(_n,{size:6}),(0,N.jsx)(_n,{size:6}),(0,N.jsx)(_n,{size:6})]}),Array.from({length:n},(e,t)=>(0,N.jsx)(`div`,{style:{display:`flex`,gap:6,paddingLeft:t>0&&t<n-1?12:0},children:(0,N.jsx)(V,{w:`${25+t*23%50}%`,h:2,strong:t===0})},t))]})}function cr({width:e,height:t}){let n=Math.min((e-16)/7,(t-40)/6);return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`6px 8px`},children:[(0,N.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`‹`}),(0,N.jsx)(V,{w:e*.3,h:3,strong:!0}),(0,N.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`›`})]}),(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:2,padding:`0 4px`,flex:1},children:[Array.from({length:7},(e,t)=>(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n*.6},children:(0,N.jsx)(V,{w:n*.5,h:2})},`h${t}`)),Array.from({length:35},(e,t)=>(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n},children:(0,N.jsx)(`div`,{style:{width:n*.6,height:n*.6,borderRadius:`50%`,background:t===12?`var(--agd-bar)`:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,N.jsx)(`div`,{style:{width:2,height:2,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===12?1:.3}})})},t))]})]})}function lr({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,N.jsx)(_n,{size:Math.min(32,t*.55)}),(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,N.jsx)(V,{w:`50%`,h:3,strong:!0}),(0,N.jsx)(V,{w:`75%`,h:2})]}),(0,N.jsx)(V,{w:30,h:2})]})}function ur({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,N.jsx)(`div`,{style:{height:`50%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,N.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,N.jsx)(V,{w:`65%`,h:4,strong:!0}),(0,N.jsx)(V,{w:`40%`,h:3}),(0,N.jsx)(`div`,{style:{flex:1}}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,N.jsx)(V,{w:`30%`,h:5,strong:!0}),(0,N.jsx)(H,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})]})}function dr({width:e,height:t}){let n=Math.min(48,t*.3);return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,N.jsx)(_n,{size:n}),(0,N.jsx)(V,{w:e*.45,h:4,strong:!0}),(0,N.jsx)(V,{w:e*.3,h:2}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:e*.08,marginTop:t*.04},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,N.jsx)(V,{w:20,h:3,strong:!0}),(0,N.jsx)(V,{w:28,h:2})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,N.jsx)(V,{w:20,h:3,strong:!0}),(0,N.jsx)(V,{w:28,h:2})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,N.jsx)(V,{w:20,h:3,strong:!0}),(0,N.jsx)(V,{w:28,h:2})]})]})]})}function fr({width:e,height:t}){let n=Math.max(e*.6,80),r=Math.max(3,Math.floor(t/40));return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`},children:[(0,N.jsx)(`div`,{style:{width:e-n,background:`var(--agd-fill)`,opacity:.3}}),(0,N.jsxs)(`div`,{style:{flex:1,borderLeft:`1px solid var(--agd-stroke)`,display:`flex`,flexDirection:`column`,padding:e*.04},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:t*.06},children:[(0,N.jsx)(V,{w:n*.4,h:4,strong:!0}),(0,N.jsx)(`div`,{style:{width:12,height:12,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),Array.from({length:r},(e,t)=>(0,N.jsx)(`div`,{style:{padding:`6px 0`},children:(0,N.jsx)(V,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))]})]})}function pr({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,N.jsxs)(`div`,{style:{flex:1,width:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,N.jsx)(V,{w:`70%`,h:3,strong:!0}),(0,N.jsx)(V,{w:`90%`,h:2}),(0,N.jsx)(V,{w:`60%`,h:2})]}),(0,N.jsx)(`div`,{style:{width:10,height:10,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-6}})]})}function mr({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:e*.08},children:[(0,N.jsx)(H,{w:n,h:n,radius:n*.25}),(0,N.jsx)(V,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function hr({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,N.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(t,n)=>(0,N.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:n===0?2:1},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,N.jsx)(`span`,{style:{fontSize:9,fontWeight:700,color:`var(--agd-stroke)`},children:`Q`}),(0,N.jsx)(V,{w:e*(.3+n*13%25/100),h:3,strong:!0})]}),(0,N.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:n===0?`▼`:`▶`})]},n))})}function gr({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:4,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,N.jsx)(`div`,{style:{borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,position:`relative`,overflow:`hidden`},children:(0,N.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,fill:`none`,children:[(0,N.jsx)(`line`,{x1:`0`,y1:`0`,x2:`100`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`}),(0,N.jsx)(`line`,{x1:`100`,y1:`0`,x2:`0`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})},t))})}function _r({width:e,height:t}){let n=Math.min(e,t);return(0,N.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,N.jsx)(`path`,{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:`var(--agd-bar)`,strokeWidth:`1.5`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function vr({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,N.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,N.jsx)(`circle`,{cx:e/2,cy:t/2,r:n*.45,fill:`var(--agd-bar)`})]})}function yr({width:e,height:t}){let n=Math.max(2,t*.12),r=Math.min(t*.35,10),i=e*.55;return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,position:`relative`},children:[(0,N.jsx)(`div`,{style:{width:`100%`,height:n,borderRadius:n/2,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,position:`relative`},children:(0,N.jsx)(`div`,{style:{width:i,height:`100%`,borderRadius:n/2,background:`var(--agd-bar)`}})}),(0,N.jsx)(`div`,{style:{position:`absolute`,left:i-r,width:r*2,height:r*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`}})]})}function br({width:e,height:t}){let n=Math.min(36,t*.15),r=Math.min((e-16)/7,(t-n-40)/5);return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:4},children:[(0,N.jsxs)(`div`,{style:{height:n,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 8px`,justifyContent:`space-between`},children:[(0,N.jsx)(V,{w:`40%`,h:2}),(0,N.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`3`,width:`12`,height:`11`,rx:`1`,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,N.jsx)(`line`,{x1:`2`,y1:`6`,x2:`14`,y2:`6`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})]}),(0,N.jsxs)(`div`,{style:{flex:1,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,flexDirection:`column`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`4px 6px`},children:[(0,N.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`‹`}),(0,N.jsx)(V,{w:e*.25,h:2,strong:!0}),(0,N.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`›`})]}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:1,padding:`0 4px`,flex:1},children:Array.from({length:28},(e,t)=>(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:r},children:(0,N.jsx)(`div`,{style:{width:r*.5,height:r*.5,borderRadius:`50%`,background:t===10?`var(--agd-bar)`:`transparent`},children:(0,N.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,N.jsx)(`div`,{style:{width:1.5,height:1.5,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===10?1:.25}})})})},t))})]})]})}function xr({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:t*.08,padding:4},children:[(0,N.jsx)(`div`,{style:{width:`100%`,height:t*.2,borderRadius:4,background:`var(--agd-fill)`}}),(0,N.jsx)(`div`,{style:{width:`70%`,height:Math.max(6,t*.1),borderRadius:3,background:`var(--agd-fill)`}}),(0,N.jsx)(`div`,{style:{width:`90%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}}),(0,N.jsx)(`div`,{style:{width:`50%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}})]})}function Sr({width:e,height:t}){return(0,N.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:6},children:(0,N.jsxs)(`div`,{style:{height:`100%`,flex:1,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${t*.3}px`,gap:4},children:[(0,N.jsx)(V,{w:`60%`,h:2,strong:!0}),(0,N.jsx)(`div`,{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0,marginLeft:`auto`}})]})})}function Cr({width:e,height:t}){let n=Math.min(e,t);return(0,N.jsx)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:`var(--agd-stroke)`,strokeWidth:`1`,fill:`var(--agd-fill)`})})}function wr({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,N.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`,opacity:`.2`}),(0,N.jsx)(`path`,{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:`var(--agd-bar-strong)`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function Tr({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),r=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,N.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,justifyContent:`space-around`,padding:8},children:Array.from({length:r},(t,r)=>(0,N.jsxs)(`div`,{style:{display:`flex`,gap:e*.04,alignItems:`flex-start`},children:[(0,N.jsx)(H,{w:n,h:n,radius:n*.25}),(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,N.jsx)(V,{w:`${40+r*13%20}%`,h:3,strong:!0}),(0,N.jsx)(V,{w:`${60+r*17%25}%`,h:2})]})]},r))})}function Er({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.min(36,t*.25);return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:t*.06,padding:t*.06},children:[(0,N.jsx)(V,{w:e*.3,h:4,strong:!0}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:e*.06,justifyContent:`center`,flex:1,alignItems:`center`},children:Array.from({length:n},(t,n)=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,N.jsx)(_n,{size:r}),(0,N.jsx)(V,{w:e*.12,h:3,strong:!0}),(0,N.jsx)(V,{w:e*.08,h:2})]},n))})]})}function Dr({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:e*.06,gap:t*.04},children:[(0,N.jsx)(V,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,N.jsx)(V,{w:e*.35,h:2}),(0,N.jsx)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(n,r)=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,N.jsx)(V,{w:Math.min(60,e*.2),h:2}),(0,N.jsx)(H,{w:`100%`,h:Math.min(32,t*.1),radius:4})]},r))}),(0,N.jsx)(H,{w:`100%`,h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:`var(--agd-bar)`}}),(0,N.jsx)(V,{w:e*.4,h:2})]})}function Or({width:e,height:t}){return(0,N.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:e*.04,gap:t*.03},children:[(0,N.jsx)(V,{w:e*.4,h:4,strong:!0}),(0,N.jsx)(V,{w:e*.6,h:2}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:6,marginTop:t*.03},children:[(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,N.jsx)(V,{w:50,h:2}),(0,N.jsx)(H,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,N.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,N.jsx)(V,{w:40,h:2}),(0,N.jsx)(H,{w:`100%`,h:Math.min(28,t*.1),radius:4})]})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,N.jsx)(V,{w:50,h:2}),(0,N.jsx)(H,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3,flex:1},children:[(0,N.jsx)(V,{w:60,h:2}),(0,N.jsx)(H,{w:`100%`,h:`100%`,radius:4})]}),(0,N.jsx)(H,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}var kr={navigation:vn,hero:yn,sidebar:bn,footer:xn,modal:Sn,card:Cn,text:wn,image:Tn,table:En,list:Dn,button:On,input:kn,form:An,tabs:jn,avatar:Mn,badge:Nn,header:Pn,section:Fn,grid:In,dropdown:Ln,toggle:Rn,search:zn,toast:Bn,progress:Vn,chart:Hn,video:Un,tooltip:Wn,breadcrumb:Gn,pagination:U,divider:Kn,accordion:qn,carousel:Jn,pricing:Yn,testimonial:Xn,cta:Zn,alert:Qn,banner:$n,stat:er,stepper:tr,tag:nr,rating:rr,map:ir,timeline:ar,fileUpload:or,codeBlock:sr,calendar:cr,notification:lr,productCard:ur,profile:dr,drawer:fr,popover:pr,logo:mr,faq:hr,gallery:gr,checkbox:_r,radio:vr,slider:yr,datePicker:br,skeleton:xr,chip:Sr,icon:Cr,spinner:wr,feature:Tr,team:Er,login:Dr,contact:Or};function Ar({type:e,width:t,height:n,text:r}){let i=kr[e];return i?(0,N.jsx)(`div`,{style:{width:`100%`,height:`100%`,padding:8,position:`relative`,pointerEvents:`none`},children:(0,N.jsx)(i,{width:t,height:n,text:r})}):(0,N.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,N.jsx)(`span`,{style:{fontSize:10,fontWeight:600,color:`var(--agd-text-3)`,textTransform:`uppercase`,letterSpacing:`0.06em`,opacity:.5},children:e})})}var jr=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,Mr={overlayExiting:`styles-module__overlayExiting___iEmYr`,overlay:`styles-module__overlay___aWh-q`,overlayFadeIn:`styles-module__overlayFadeIn___aECVy`,light:`styles-module__light___ORIft`,wireframe:`styles-module__wireframe___itvQU`,placing:`styles-module__placing___45yD8`,passthrough:`styles-module__passthrough___xaFeE`,blankCanvas:`styles-module__blankCanvas___t2Eue`,visible:`styles-module__visible___OKKqX`,gridActive:`styles-module__gridActive___OZ-cf`,paletteHeader:`styles-module__paletteHeader___-Q5gQ`,paletteHeaderTitle:`styles-module__paletteHeaderTitle___oHqZC`,paletteHeaderDesc:`styles-module__paletteHeaderDesc___6i74T`,wireframePurposeWrap:`styles-module__wireframePurposeWrap___To-tS`,collapsed:`styles-module__collapsed___Ms9vS`,wireframePurposeInner:`styles-module__wireframePurposeInner___Lrahs`,wireframePurposeInput:`styles-module__wireframePurposeInput___7EtBN`,canvasToggle:`styles-module__canvasToggle___-QqSy`,active:`styles-module__active___hosp7`,canvasToggleIcon:`styles-module__canvasToggleIcon___7pJ82`,canvasToggleLabel:`styles-module__canvasToggleLabel___OanpY`,canvasPurposeWrap:`styles-module__canvasPurposeWrap___hj6zk`,canvasPurposeInner:`styles-module__canvasPurposeInner___VWiyu`,canvasPurposeToggle:`styles-module__canvasPurposeToggle___byDH2`,canvasPurposeCheck:`styles-module__canvasPurposeCheck___xqd7l`,checked:`styles-module__checked___-1JGH`,canvasPurposeLabel:`styles-module__canvasPurposeLabel___Zu-tD`,canvasPurposeHelp:`styles-module__canvasPurposeHelp___jijwR`,placement:`styles-module__placement___zcxv8`,placementEnter:`styles-module__placementEnter___TdRhf`,selected:`styles-module__selected___6yrp6`,dragging:`styles-module__dragging___le6KZ`,exiting:`styles-module__exiting___YrM8F`,placementContent:`styles-module__placementContent___f64A4`,placementLabel:`styles-module__placementLabel___0KvWl`,placementAnnotation:`styles-module__placementAnnotation___78pTr`,annotationVisible:`styles-module__annotationVisible___mrUyA`,sectionAnnotation:`styles-module__sectionAnnotation___aUIs0`,handle:`styles-module__handle___Ikbxm`,sectionOutline:`styles-module__sectionOutline___s0hy-`,ghostOutline:`styles-module__ghostOutline___po-kO`,handleNw:`styles-module__handleNw___4TMIj`,handleNe:`styles-module__handleNe___mnsTh`,handleSe:`styles-module__handleSe___oSFnk`,handleSw:`styles-module__handleSw___pi--Z`,handleN:`styles-module__handleN___aBA-Q`,handleE:`styles-module__handleE___0hM5u`,handleS:`styles-module__handleS___JjDRv`,handleW:`styles-module__handleW___ERWGQ`,edgeHandle:`styles-module__edgeHandle___XxXdT`,edgeN:`styles-module__edgeN___-JJDj`,edgeS:`styles-module__edgeS___66lMX`,edgeE:`styles-module__edgeE___1bGDa`,edgeW:`styles-module__edgeW___lHQNo`,deleteButton:`styles-module__deleteButton___LkGCb`,rearrangeOverlay:`styles-module__rearrangeOverlay___-3R3t`,drawBox:`styles-module__drawBox___BrVAa`,selectBox:`styles-module__selectBox___Iu8kB`,sizeIndicator:`styles-module__sizeIndicator___7zJ4y`,guideLine:`styles-module__guideLine___DUQY2`,dragPreview:`styles-module__dragPreview___onPbU`,dragPreviewWireframe:`styles-module__dragPreviewWireframe___jsg0G`,palette:`styles-module__palette___C7iSH`,paletteItem:`styles-module__paletteItem___6TlnA`,paletteItemLabel:`styles-module__paletteItemLabel___6ncO4`,paletteSectionTitle:`styles-module__paletteSectionTitle___PqnjX`,paletteFooter:`styles-module__paletteFooter___QYnAG`,enter:`styles-module__enter___6LYk5`,exit:`styles-module__exit___iSGRw`,paletteSection:`styles-module__paletteSection___V8DEA`,paletteItemIcon:`styles-module__paletteItemIcon___0NPQK`,placeScroll:`styles-module__placeScroll___7sClM`,fadeTop:`styles-module__fadeTop___KT9tF`,fadeBottom:`styles-module__fadeBottom___x3ShT`,paletteFooterWrap:`styles-module__paletteFooterWrap___71-fI`,footerHidden:`styles-module__footerHidden___fJUik`,paletteFooterInnerContent:`styles-module__paletteFooterInnerContent___VC26h`,paletteFooterInner:`styles-module__paletteFooterInner___dfylY`,paletteFooterCount:`styles-module__paletteFooterCount___D3Fia`,paletteFooterClear:`styles-module__paletteFooterClear___ybBoa`,paletteFooterActions:`styles-module__paletteFooterActions___fLzv8`,rollingWrap:`styles-module__rollingWrap___S75jM`,rollingNum:`styles-module__rollingNum___1RKDx`,exitUp:`styles-module__exitUp___AFDRW`,numExitUp:`styles-module__numExitUp___FRQqx`,enterUp:`styles-module__enterUp___CPlXb`,numEnterUp:`styles-module__numEnterUp___2Yd-w`,exitDown:`styles-module__exitDown___-1yAy`,numExitDown:`styles-module__numExitDown___xm5by`,enterDown:`styles-module__enterDown___DDuFR`,numEnterDown:`styles-module__numEnterDown___hpxBk`,hoverHighlight:`styles-module__hoverHighlight___8eT-v`,highlightFadeIn:`styles-module__highlightFadeIn___Lg7KY`,sectionEnter:`styles-module__sectionEnter___-8BXT`,settled:`styles-module__settled___b5U5o`,sectionLabel:`styles-module__sectionLabel___F80HQ`,movedBadge:`styles-module__movedBadge___s8z-q`,sectionDimensions:`styles-module__sectionDimensions___RcJSL`,badgeVisible:`styles-module__badgeVisible___npbdS`,resizedBadge:`styles-module__resizedBadge___u51V8`,wireframeNotice:`styles-module__wireframeNotice___4GJyB`,wireframeOpacityRow:`styles-module__wireframeOpacityRow___CJXzi`,wireframeOpacityLabel:`styles-module__wireframeOpacityLabel___afkfT`,wireframeOpacitySlider:`styles-module__wireframeOpacitySlider___YcoEs`,wireframeNoticeTitleRow:`styles-module__wireframeNoticeTitleRow___PJqyG`,wireframeNoticeTitle:`styles-module__wireframeNoticeTitle___okr08`,wireframeNoticeDivider:`styles-module__wireframeNoticeDivider___PNKQ6`,wireframeStartOver:`styles-module__wireframeStartOver___YFk-I`,ghostEnter:`styles-module__ghostEnter___EC3Mb`,ghostBadge:`styles-module__ghostBadge___tsQUK`,badgeSlideIn:`styles-module__badgeSlideIn___typJ7`,ghostBadgeExtra:`styles-module__ghostBadgeExtra___6CVoD`,badgeExtraIn:`styles-module__badgeExtraIn___i4W8F`,originalOutline:`styles-module__originalOutline___Y6DD1`,originalLabel:`styles-module__originalLabel___HqI9g`,connectorSvg:`styles-module__connectorSvg___Lovld`,connectorLine:`styles-module__connectorLine___XeWh-`,connectorDraw:`styles-module__connectorDraw___8sK5I`,connectorDot:`styles-module__connectorDot___yvf7C`,connectorDotIn:`styles-module__connectorDotIn___NwTUq`,connectorExiting:`styles-module__connectorExiting___2lLOs`,connectorOut:`styles-module__connectorOut___5QoPl`,connectorDotOut:`styles-module__connectorDotOut___FEq7e`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-design-mode-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-design-mode-styles`,document.head.appendChild(e)),e.textContent=jr}var W=Mr,Nr=24,Pr=5;function Fr(e,t,n,r,i){let a=1/0,o=1/0,s=e.x,c=e.x+e.width,l=e.x+e.width/2,u=e.y,d=e.y+e.height,f=e.y+e.height/2,p=!r,m=p?[s,c,l]:[...r.left?[s]:[],...r.right?[c]:[]],h=p?[u,d,f]:[...r.top?[u]:[],...r.bottom?[d]:[]],g=[];for(let e of t)n.has(e.id)||g.push(e);i&&g.push(...i);for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,s=e.y+e.height,c=e.y+e.height/2;for(let e of m)for(let i of[t,n,r]){let t=i-e;Math.abs(t)<Pr&&Math.abs(t)<Math.abs(a)&&(a=t)}for(let e of h)for(let t of[i,s,c]){let n=t-e;Math.abs(n)<Pr&&Math.abs(n)<Math.abs(o)&&(o=n)}}let _=Math.abs(a)<Pr?a:0,v=Math.abs(o)<Pr?o:0,y=[],b=new Set,x=s+_,S=c+_,ee=l+_,C=u+v,te=d+v,w=f+v;for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[x,ee,S])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[C,w,te])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`y`,pos:e}))}}return{dx:_,dy:v,guides:y}}function Ir(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Lr({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:r,isDarkMode:i,exiting:a,onInteractionChange:o,className:s,passthrough:c,extraSnapRects:l,onSelectionChange:u,deselectSignal:d,onDragMove:f,onDragEnd:p,clearSignal:m,wireframe:h}){let[g,_]=(0,I.useState)(new Set),[v,y]=(0,I.useState)(null),[b,x]=(0,I.useState)(null),[S,ee]=(0,I.useState)(null),[C,te]=(0,I.useState)([]),[w,ne]=(0,I.useState)(null),[T,re]=(0,I.useState)(!1),E=(0,I.useRef)(!1),[ie,ae]=(0,I.useState)(new Set),oe=(0,I.useRef)(new Map),D=(0,I.useRef)(null),O=(0,I.useRef)(null),se=(0,I.useRef)(e);se.current=e;let ce=(0,I.useRef)(u);ce.current=u;let le=(0,I.useRef)(f);le.current=f;let ue=(0,I.useRef)(p);ue.current=p;let de=(0,I.useRef)(d);(0,I.useEffect)(()=>{d!==de.current&&(de.current=d,_(new Set))},[d]);let k=(0,I.useRef)(m);(0,I.useEffect)(()=>{if(m!==void 0&&m!==k.current){k.current=m;let e=new Set(se.current.map(e=>e.id));e.size>0&&(ae(e),_(new Set),O.current=null,z(()=>{t([]),ae(new Set)},180))}},[m,t]),(0,I.useEffect)(()=>{let i=i=>{let a=i.target;if(!(a.tagName===`INPUT`||a.tagName===`TEXTAREA`||a.isContentEditable)){if((i.key===`Backspace`||i.key===`Delete`)&&g.size>0){i.preventDefault();let e=new Set(g);ae(e),_(new Set),z(()=>{t(se.current.filter(t=>!e.has(t.id))),ae(new Set)},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(i.key)&&g.size>0){i.preventDefault();let n=i.shiftKey?20:1,r=i.key===`ArrowLeft`?-n:i.key===`ArrowRight`?n:0,a=i.key===`ArrowUp`?-n:i.key===`ArrowDown`?n:0;t(e.map(e=>g.has(e.id)?{...e,x:Math.max(0,e.x+r),y:Math.max(0,e.y+a)}:e));return}if(i.key===`Escape`){n?r(null):g.size>0&&_(new Set);return}}};return document.addEventListener(`keydown`,i),()=>document.removeEventListener(`keydown`,i)},[g,n,e,t,r]);let fe=(0,I.useCallback)(i=>{if(i.button!==0||c||i.target.closest(`.${W.placement}`))return;i.preventDefault(),i.stopPropagation();let a=window.scrollY,s=i.clientX,l=i.clientY;if(n){O.current=`place`,o?.(!0);let i=!1,c=s,u=l,d=e=>{c=e.clientX,u=e.clientY;let t=Math.abs(c-s),n=Math.abs(u-l);if((t>5||n>5)&&(i=!0),i){let t=Math.min(s,c),n=Math.min(l,u),r=Math.abs(c-s),i=Math.abs(u-l);y({x:t,y:n,w:r,h:i}),ee({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(r)} \xD7 ${Math.round(i)}`})}},f=p=>{window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f),y(null),ee(null),O.current=null,o?.(!1);let m=B[n],h,g,v,b;i?(h=Math.min(s,c),g=Math.min(l,u)+a,v=Math.max(Nr,Math.abs(c-s)),b=Math.max(Nr,Math.abs(u-l))):(v=m.width,b=m.height,h=s-v/2,g=l+a-b/2),h=Math.max(0,h),g=Math.max(0,g);let x={id:Ir(),type:n,x:h,y:g,width:v,height:b,scrollY:a,timestamp:Date.now()};t([...e,x]),_(new Set([x.id])),r(null)};window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)}else{i.shiftKey||_(new Set),O.current=`select`;let t=!1,n=e=>{let n=Math.abs(e.clientX-s),r=Math.abs(e.clientY-l);(n>4||r>4)&&(t=!0),t&&x({x:Math.min(s,e.clientX),y:Math.min(l,e.clientY),w:Math.abs(e.clientX-s),h:Math.abs(e.clientY-l)})},r=o=>{if(window.removeEventListener(`mousemove`,n),window.removeEventListener(`mouseup`,r),O.current=null,t){let t=Math.min(s,o.clientX),n=Math.min(l,o.clientY)+a,r=Math.abs(o.clientX-s),c=Math.abs(o.clientY-l),u=new Set(i.shiftKey?g:new Set);for(let i of e)i.y-a,i.x+i.width>t&&i.x<t+r&&i.y+i.height>n&&i.y<n+c&&u.add(i.id);_(u)}x(null)};window.addEventListener(`mousemove`,n),window.addEventListener(`mouseup`,r)}},[n,c,e,t,g]),pe=(0,I.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${W.handle}`)||i.closest(`.${W.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey?(a=new Set(g),a.has(r)?a.delete(r):a.add(r)):a=g.has(r)?new Set(g):new Set([r]),_(a),(a.size!==g.size||[...a].some(e=>!g.has(e)))&&ce.current?.(a,n.shiftKey),window.scrollY;let s=n.clientX,c=n.clientY,u=new Map;for(let t of e)a.has(t.id)&&u.set(t.id,{x:t.x,y:t.y});O.current=`move`,o?.(!0);let d=!1,f=!1,p=e,m=0,h=0,v=new Map;for(let t of e)u.has(t.id)&&v.set(t.id,{w:t.width,h:t.height});let y=n=>{let r=n.clientX-s,i=n.clientY-c;if((Math.abs(r)>2||Math.abs(i)>2)&&(d=!0),!d)return;if(n.altKey&&!f){f=!0;let t=[];for(let n of e)u.has(n.id)&&t.push({...n,id:Ir(),timestamp:Date.now()});p=[...e,...t]}let a=1/0,o=1/0,g=-1/0,_=-1/0;for(let[e,t]of u){let n=v.get(e);n&&(a=Math.min(a,t.x+r),o=Math.min(o,t.y+i),g=Math.max(g,t.x+r+n.w),_=Math.max(_,t.y+i+n.h))}let{dx:y,dy:b,guides:x}=Fr({x:a,y:o,width:g-a,height:_-o},p,new Set(u.keys()),void 0,l);te(x);let S=r+y,ee=i+b;m=S,h=ee,t(p.map(e=>{let t=u.get(e.id);return t?{...e,x:Math.max(0,t.x+S),y:Math.max(0,t.y+ee)}:e})),le.current?.(S,ee)},b=()=>{window.removeEventListener(`mousemove`,y),window.removeEventListener(`mouseup`,b),O.current=null,o?.(!1),te([]),ue.current?.(m,h,d)};window.addEventListener(`mousemove`,y),window.addEventListener(`mouseup`,b)},[g,e,t,o]),me=(0,I.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=e.find(e=>e.id===r);if(!a)return;_(new Set([r])),O.current=`resize`,o?.(!0);let s=n.clientX,c=n.clientY,u=a.width,d=a.height,f=a.x,p=a.y,m={left:i.includes(`w`),right:i.includes(`e`),top:i.includes(`n`),bottom:i.includes(`s`)},h=e=>{let n=e.clientX-s,a=e.clientY-c,o=u,h=d,g=f,_=p;i.includes(`e`)&&(o=Math.max(Nr,u+n)),i.includes(`w`)&&(o=Math.max(Nr,u-n),g=f+u-o),i.includes(`s`)&&(h=Math.max(Nr,d+a)),i.includes(`n`)&&(h=Math.max(Nr,d-a),_=p+d-h);let{dx:v,dy:y,guides:b}=Fr({x:g,y:_,width:o,height:h},se.current,new Set([r]),m,l);te(b),v!==0&&(m.right?o+=v:m.left&&(g+=v,o-=v)),y!==0&&(m.bottom?h+=y:m.top&&(_+=y,h-=y)),t(se.current.map(e=>e.id===r?{...e,x:g,y:_,width:o,height:h}:e)),ee({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(o)} \xD7 ${Math.round(h)}`})},g=()=>{window.removeEventListener(`mousemove`,h),window.removeEventListener(`mouseup`,g),ee(null),O.current=null,o?.(!1),te([])};window.addEventListener(`mousemove`,h),window.addEventListener(`mouseup`,g)},[e,t,o]),he=(0,I.useCallback)(e=>{O.current=null,ae(t=>{let n=new Set(t);return n.add(e),n}),_(t=>{let n=new Set(t);return n.delete(e),n}),z(()=>{t(se.current.filter(t=>t.id!==e)),ae(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),A={hero:`Headline text`,button:`Button label`,badge:`Badge label`,cta:`Call to action text`,toast:`Notification message`,modal:`Dialog title`,card:`Card title`,navigation:`Brand / nav items`,tabs:`Tab labels`,input:`Placeholder text`,search:`Search placeholder`,pricing:`Plan name or price`,testimonial:`Quote text`,alert:`Alert message`,banner:`Banner text`,tag:`Tag label`,notification:`Notification message`,stat:`Metric value`,productCard:`Product name`},ge=(0,I.useCallback)(t=>{let n=e.find(e=>e.id===t);n&&(E.current=!!n.text,ne(t),re(!1))},[e]),_e=(0,I.useCallback)(()=>{w&&(re(!0),z(()=>{ne(null),re(!1)},150))},[w]);(0,I.useEffect)(()=>{a&&w&&_e()},[a]);let ve=(0,I.useCallback)(n=>{w&&(t(e.map(e=>e.id===w?{...e,text:n.trim()||void 0}:e)),_e())},[w,e,t,_e]),ye=typeof window<`u`?window.scrollY:0,be=[`nw`,`ne`,`se`,`sw`],xe=h?`#f97316`:`#3c82f7`,Se=[{dir:`n`,cls:W.edgeN,arrow:(0,N.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M4 0.5L1 4.5h6z`,fill:xe})})},{dir:`e`,cls:W.edgeE,arrow:(0,N.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M5.5 4L1.5 1v6z`,fill:xe})})},{dir:`s`,cls:W.edgeS,arrow:(0,N.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M4 5.5L1 1.5h6z`,fill:xe})})},{dir:`w`,cls:W.edgeW,arrow:(0,N.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M0.5 4L4.5 1v6z`,fill:xe})})}];return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{ref:D,className:`${W.overlay} ${i?``:W.light} ${n?W.placing:``} ${c?W.passthrough:``} ${a?W.overlayExiting:``} ${h?W.wireframe:``}${s?` ${s}`:``}`,"data-feedback-toolbar":!0,onMouseDown:fe,children:e.map(e=>{let t=g.has(e.id),n=gn[e.type]?.label||e.type,r=e.y-ye;return(0,N.jsxs)(`div`,{"data-design-placement":e.id,className:`${W.placement} ${t?W.selected:``} ${ie.has(e.id)?W.exiting:``}`,style:{left:e.x,top:r,width:e.width,height:e.height,position:`fixed`},onMouseDown:t=>pe(t,e.id),onDoubleClick:()=>ge(e.id),children:[(0,N.jsx)(`span`,{className:W.placementLabel,children:n}),(0,N.jsx)(`span`,{className:`${W.placementAnnotation} ${e.text?W.annotationVisible:``}`,children:(e.text&&oe.current.set(e.id,e.text),e.text||oe.current.get(e.id)||``)}),(0,N.jsx)(`div`,{className:W.placementContent,children:(0,N.jsx)(Ar,{type:e.type,width:e.width,height:e.height,text:e.text})}),(0,N.jsx)(`div`,{className:W.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>he(e.id),children:`✕`}),be.map(t=>(0,N.jsx)(`div`,{className:`${W.handle} ${W[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>me(n,e.id,t)},t)),Se.map(({dir:t,cls:n,arrow:r})=>(0,N.jsx)(`div`,{className:`${W.edgeHandle} ${n}`,onMouseDown:n=>me(n,e.id,t),children:r},t))]},e.id)})}),w&&(()=>{let t=e.find(e=>e.id===w);if(!t)return null;let n=t.y-ye,r=t.x+t.width/2,a=n-8,o=n+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,r)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,N.jsx)(ln,{element:gn[t.type]?.label||t.type,placeholder:A[t.type]||`Label or content text`,initialValue:t.text??``,submitLabel:E.current?`Save`:`Set`,onSubmit:ve,onCancel:_e,onDelete:E.current?()=>{ve(``)}:void 0,isExiting:T,lightMode:!i,style:u})})(),v&&(0,N.jsx)(`div`,{className:W.drawBox,style:{left:v.x,top:v.y,width:v.w,height:v.h},"data-feedback-toolbar":!0}),b&&(0,N.jsx)(`div`,{className:W.selectBox,style:{left:b.x,top:b.y,width:b.w,height:b.h},"data-feedback-toolbar":!0}),S&&(0,N.jsx)(`div`,{className:W.sizeIndicator,style:{left:S.x,top:S.y},"data-feedback-toolbar":!0,children:S.text}),C.map((e,t)=>(0,N.jsx)(`div`,{className:W.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,bottom:0}:{position:`fixed`,left:0,top:e.pos-ye,right:0,height:1},"data-feedback-toolbar":!0},`${e.axis}-${e.pos}-${t}`))]})}function Rr(e){if(!e)return``;let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?W.fadeTop:``} ${n?W.fadeBottom:``}`}var G=`currentColor`,K=`0.5`;function zr({type:e}){switch(e){case`navigation`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`4`,width:`18`,height:`8`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`2.5`,y:`7`,width:`3`,height:`1.5`,rx:`.5`,fill:G,opacity:`.4`}),(0,N.jsx)(`rect`,{x:`7`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`11`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:G,opacity:`.25`})]});case`header`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`3`,y:`5.5`,width:`8`,height:`2`,rx:`.5`,fill:G,opacity:`.35`}),(0,N.jsx)(`rect`,{x:`3`,y:`9`,width:`12`,height:`1`,rx:`.5`,fill:G,opacity:`.15`})]});case`hero`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`5`,y:`5`,width:`10`,height:`1.5`,rx:`.5`,fill:G,opacity:`.35`}),(0,N.jsx)(`rect`,{x:`7`,y:`8`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`7.5`,y:`10.5`,width:`5`,height:`2.5`,rx:`1`,stroke:G,strokeWidth:K})]});case`section`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`3`,y:`4`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`3`,y:`6.5`,width:`14`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`3`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:G,opacity:`.15`})]});case`sidebar`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`2.5`,y:`4`,width:`4`,height:`1`,rx:`.5`,fill:G,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`2.5`,y:`6.5`,width:`3.5`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`2.5`,y:`9`,width:`4`,height:`1`,rx:`.5`,fill:G,opacity:`.15`})]});case`footer`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`7`,width:`18`,height:`8`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`3`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`9`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`15`,y:`9.5`,width:`3`,height:`1`,rx:`.5`,fill:G,opacity:`.2`})]});case`modal`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`5`,y:`4.5`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`11`,y:`11`,width:`5`,height:`2`,rx:`.75`,stroke:G,strokeWidth:K})]});case`divider`:return(0,N.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,N.jsx)(`line`,{x1:`2`,y1:`8`,x2:`18`,y2:`8`,stroke:G,strokeWidth:`0.5`,opacity:`.3`})});case`card`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5.5`,rx:`1`,fill:G,opacity:`.04`}),(0,N.jsx)(`rect`,{x:`4`,y:`8.5`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`4`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`text`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`1.5`,rx:`.5`,fill:G,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`11`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`2`,y:`9.5`,width:`13`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`2`,y:`12`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`image`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`line`,{x1:`2`,y1:`2`,x2:`18`,y2:`14`,stroke:G,strokeWidth:`.3`,opacity:`.25`}),(0,N.jsx)(`line`,{x1:`18`,y1:`2`,x2:`2`,y2:`14`,stroke:G,strokeWidth:`.3`,opacity:`.25`})]});case`video`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`path`,{d:`M8.5 5.5v5l4.5-2.5z`,stroke:G,strokeWidth:K,fill:G,opacity:`.15`})]});case`table`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`line`,{x1:`1`,y1:`5.5`,x2:`19`,y2:`5.5`,stroke:G,strokeWidth:`.3`,opacity:`.25`}),(0,N.jsx)(`line`,{x1:`1`,y1:`9`,x2:`19`,y2:`9`,stroke:G,strokeWidth:`.3`,opacity:`.25`}),(0,N.jsx)(`line`,{x1:`7`,y1:`2`,x2:`7`,y2:`14`,stroke:G,strokeWidth:`.3`,opacity:`.25`}),(0,N.jsx)(`line`,{x1:`13`,y1:`2`,x2:`13`,y2:`14`,stroke:G,strokeWidth:`.3`,opacity:`.25`})]});case`grid`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`11.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`11.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:G,strokeWidth:K})]});case`list`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`3.5`,cy:`4.5`,r:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`6.5`,y:`4`,width:`10`,height:`1`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`3.5`,cy:`8`,r:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`3.5`,cy:`11.5`,r:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`6.5`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:G,opacity:`.2`})]});case`chart`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`9`,width:`2.5`,height:`4`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`rect`,{x:`7`,y:`6`,width:`2.5`,height:`7`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`11`,y:`3`,width:`2.5`,height:`10`,rx:`.5`,fill:G,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`15`,y:`5`,width:`2.5`,height:`8`,rx:`.5`,fill:G,opacity:`.2`})]});case`accordion`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1.5`,y:`2`,width:`17`,height:`4`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`3`,y:`3.5`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`1.5`,y:`7.5`,width:`17`,height:`3`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`1.5`,y:`12`,width:`17`,height:`3`,rx:`1`,stroke:G,strokeWidth:K})]});case`carousel`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`10`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`path`,{d:`M1.5 7L3 8.5 1.5 10`,stroke:G,strokeWidth:K,opacity:`.35`}),(0,N.jsx)(`path`,{d:`M18.5 7L17 8.5 18.5 10`,stroke:G,strokeWidth:K,opacity:`.35`}),(0,N.jsx)(`circle`,{cx:`8.5`,cy:`14`,r:`.6`,fill:G,opacity:`.35`}),(0,N.jsx)(`circle`,{cx:`10`,cy:`14`,r:`.6`,fill:G,opacity:`.15`}),(0,N.jsx)(`circle`,{cx:`11.5`,cy:`14`,r:`.6`,fill:G,opacity:`.15`})]});case`button`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`2`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.25`})]});case`input`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`4`,width:`5.5`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`2`,y:`6.5`,width:`16`,height:`5.5`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`3.5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`search`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`4.5`,width:`16`,height:`7`,rx:`3.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:G,strokeWidth:K,opacity:`.3`}),(0,N.jsx)(`line`,{x1:`7.5`,y1:`9.5`,x2:`9`,y2:`11`,stroke:G,strokeWidth:K,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`9.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`form`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`1.5`,width:`5.5`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`2`,y:`3.5`,width:`16`,height:`3`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`2`,y:`8`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`2`,y:`10`,width:`16`,height:`3`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`12`,y:`14`,width:`6`,height:`2`,rx:`.75`,stroke:G,strokeWidth:K})]});case`tabs`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`10`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`1`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`2.5`,y:`3.25`,width:`3`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`7`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:G,strokeWidth:K})]});case`dropdown`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`4`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`3.5`,y:`3.5`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`path`,{d:`M15 3.5l1.5 1.5L18 3.5`,stroke:G,strokeWidth:K,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`7`,rx:`1`,stroke:G,strokeWidth:K,strokeDasharray:`2 1`,opacity:`.3`})]});case`toggle`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`6`,rx:`3`,stroke:G,strokeWidth:K}),(0,N.jsx)(`circle`,{cx:`13`,cy:`8`,r:`2`,fill:G,opacity:`.3`})]});case`avatar`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`10`,cy:`8`,r:`6`,stroke:G,strokeWidth:K}),(0,N.jsx)(`circle`,{cx:`10`,cy:`6.5`,r:`2`,stroke:G,strokeWidth:K}),(0,N.jsx)(`path`,{d:`M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5`,stroke:G,strokeWidth:K})]});case`badge`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`3`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.25`})]});case`breadcrumb`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1.5`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:G,opacity:`.3`}),(0,N.jsx)(`path`,{d:`M6.5 7l1 1-1 1`,stroke:G,strokeWidth:K,opacity:`.2`}),(0,N.jsx)(`rect`,{x:`9`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`path`,{d:`M14 7l1 1-1 1`,stroke:G,strokeWidth:K,opacity:`.2`}),(0,N.jsx)(`rect`,{x:`16.5`,y:`7`,width:`2`,height:`1`,rx:`.5`,fill:G,opacity:`.15`})]});case`pagination`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`6.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`11`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,fill:G,opacity:`.15`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`15.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:G,strokeWidth:K})]});case`progress`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`2`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`1`,fill:G,opacity:`.2`})]});case`toast`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`circle`,{cx:`5`,cy:`8`,r:`1.5`,stroke:G,strokeWidth:K,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`8`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`8`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`tooltip`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`3`,width:`14`,height:`7`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`5.5`,y:`5.5`,width:`9`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`path`,{d:`M9 10l1 2.5 1-2.5`,stroke:G,strokeWidth:K})]});case`pricing`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`7`,y:`5.5`,width:`6`,height:`2`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`5`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:G,opacity:`.1`}),(0,N.jsx)(`rect`,{x:`5`,y:`11`,width:`10`,height:`1`,rx:`.5`,fill:G,opacity:`.1`}),(0,N.jsx)(`rect`,{x:`6`,y:`13`,width:`8`,height:`1.5`,rx:`.5`,fill:G,opacity:`.2`})]});case`testimonial`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`text`,{x:`4`,y:`5.5`,fontSize:`4`,fill:G,opacity:`.2`,fontFamily:`serif`,children:`“`}),(0,N.jsx)(`rect`,{x:`4`,y:`7`,width:`12`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`4`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:G,opacity:`.12`}),(0,N.jsx)(`circle`,{cx:`5.5`,cy:`12.5`,r:`1.5`,stroke:G,strokeWidth:K,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`8`,y:`12`,width:`5`,height:`1`,rx:`.5`,fill:G,opacity:`.15`})]});case`cta`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`5`,y:`4.5`,width:`10`,height:`1.5`,rx:`.5`,fill:G,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`7`,y:`10`,width:`6`,height:`2.5`,rx:`1`,stroke:G,strokeWidth:K})]});case`alert`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:G,strokeWidth:K,opacity:`.3`}),(0,N.jsx)(`line`,{x1:`6`,y1:`7`,x2:`6`,y2:`8.5`,stroke:G,strokeWidth:`0.6`,opacity:`.5`}),(0,N.jsx)(`circle`,{cx:`6`,cy:`9.3`,r:`.3`,fill:G,opacity:`.5`}),(0,N.jsx)(`rect`,{x:`9.5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.2`})]});case`banner`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`6`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`4`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`14`,y:`7`,width:`3.5`,height:`2`,rx:`.75`,stroke:G,strokeWidth:K})]});case`stat`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`6`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`2.5`,rx:`.5`,fill:G,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`7`,y:`11`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`stepper`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`4`,cy:`8`,r:`2`,fill:G,opacity:`.2`,stroke:G,strokeWidth:K}),(0,N.jsx)(`line`,{x1:`6`,y1:`8`,x2:`8`,y2:`8`,stroke:G,strokeWidth:`.4`,opacity:`.3`}),(0,N.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,stroke:G,strokeWidth:K}),(0,N.jsx)(`line`,{x1:`12`,y1:`8`,x2:`14`,y2:`8`,stroke:G,strokeWidth:`.4`,opacity:`.3`}),(0,N.jsx)(`circle`,{cx:`16`,cy:`8`,r:`2`,stroke:G,strokeWidth:K})]});case`tag`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`5.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`line`,{x1:`14`,y1:`6.5`,x2:`15.5`,y2:`9.5`,stroke:G,strokeWidth:K,opacity:`.2`}),(0,N.jsx)(`line`,{x1:`15.5`,y1:`6.5`,x2:`14`,y2:`9.5`,stroke:G,strokeWidth:K,opacity:`.2`})]});case`rating`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z`,fill:G,opacity:`.25`}),(0,N.jsx)(`path`,{d:`M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z`,fill:G,opacity:`.25`}),(0,N.jsx)(`path`,{d:`M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z`,stroke:G,strokeWidth:K,opacity:`.25`})]});case`map`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`line`,{x1:`2`,y1:`6`,x2:`18`,y2:`10`,stroke:G,strokeWidth:`.3`,opacity:`.15`}),(0,N.jsx)(`line`,{x1:`7`,y1:`2`,x2:`11`,y2:`14`,stroke:G,strokeWidth:`.3`,opacity:`.15`}),(0,N.jsx)(`path`,{d:`M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z`,fill:G,opacity:`.15`,stroke:G,strokeWidth:K})]});case`timeline`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`line`,{x1:`5`,y1:`2`,x2:`5`,y2:`14`,stroke:G,strokeWidth:`.4`,opacity:`.25`}),(0,N.jsx)(`circle`,{cx:`5`,cy:`4`,r:`1.5`,fill:G,opacity:`.2`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`8`,y:`3`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`circle`,{cx:`5`,cy:`8.5`,r:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`8`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`circle`,{cx:`5`,cy:`13`,r:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`8`,y:`12`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.15`})]});case`fileUpload`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:G,strokeWidth:K,strokeDasharray:`2 1`}),(0,N.jsx)(`path`,{d:`M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8`,stroke:G,strokeWidth:K,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`7`,y:`11.5`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.15`})]});case`codeBlock`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`circle`,{cx:`4`,cy:`4`,r:`.6`,fill:G,opacity:`.3`}),(0,N.jsx)(`circle`,{cx:`5.5`,cy:`4`,r:`.6`,fill:G,opacity:`.3`}),(0,N.jsx)(`circle`,{cx:`7`,cy:`4`,r:`.6`,fill:G,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`4`,y:`7`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`rect`,{x:`6`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`4`,y:`11`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`calendar`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`12`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`line`,{x1:`2`,y1:`6.5`,x2:`18`,y2:`6.5`,stroke:G,strokeWidth:`.4`,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`5`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:G,opacity:`.2`}),(0,N.jsx)(`rect`,{x:`14`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`7`,cy:`9`,r:`.6`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`10`,cy:`9`,r:`.6`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`13`,cy:`9`,r:`.6`,fill:G,opacity:`.3`}),(0,N.jsx)(`circle`,{cx:`7`,cy:`12`,r:`.6`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`10`,cy:`12`,r:`.6`,fill:G,opacity:`.2`})]});case`notification`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`10`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`circle`,{cx:`5.5`,cy:`8`,r:`2`,stroke:G,strokeWidth:K,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`9`,y:`6`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`9`,y:`8.5`,width:`4.5`,height:`1`,rx:`.5`,fill:G,opacity:`.12`}),(0,N.jsx)(`circle`,{cx:`16.5`,cy:`4.5`,r:`1.5`,fill:G,opacity:`.25`})]});case`productCard`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`6`,rx:`1`,fill:G,opacity:`.04`}),(0,N.jsx)(`rect`,{x:`5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`5`,y:`10.5`,width:`4`,height:`1.5`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`12`,y:`12`,width:`4`,height:`2`,rx:`.75`,stroke:G,strokeWidth:K})]});case`profile`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`10`,cy:`5`,r:`3`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`5`,y:`10`,width:`10`,height:`1.5`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`7`,y:`12.5`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`drawer`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`9`,y:`1`,width:`10`,height:`14`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`10.5`,y:`4`,width:`5`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`10.5`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`10.5`,y:`9`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:G,strokeWidth:K,opacity:`.15`})]});case`popover`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`9`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`5`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`path`,{d:`M9 11l1 2.5 1-2.5`,stroke:G,strokeWidth:K})]});case`logo`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`3`,width:`10`,height:`10`,rx:`2`,stroke:G,strokeWidth:K}),(0,N.jsx)(`path`,{d:`M5 9.5l2-4 2 4`,stroke:G,strokeWidth:K,opacity:`.3`}),(0,N.jsx)(`rect`,{x:`14`,y:`6`,width:`4`,height:`1`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`rect`,{x:`14`,y:`8.5`,width:`3`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`faq`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`text`,{x:`2.5`,y:`5.5`,fontSize:`4`,fill:G,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,N.jsx)(`rect`,{x:`7`,y:`3`,width:`10`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`7`,y:`5.5`,width:`8`,height:`1`,rx:`.5`,fill:G,opacity:`.12`}),(0,N.jsx)(`text`,{x:`2.5`,y:`11.5`,fontSize:`4`,fill:G,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,N.jsx)(`rect`,{x:`7`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`7`,y:`11.5`,width:`7`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`gallery`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`7.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`13.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`7.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`13.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:G,strokeWidth:K})]});case`checkbox`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`5`,y:`4`,width:`8`,height:`8`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`path`,{d:`M7.5 8l1.5 1.5 3-3`,stroke:G,strokeWidth:K,opacity:`.35`})]});case`radio`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`10`,cy:`8`,r:`4`,stroke:G,strokeWidth:K}),(0,N.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,fill:G,opacity:`.3`})]});case`slider`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`7.5`,width:`16`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`2`,y:`7.5`,width:`10`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`8`,r:`2.5`,stroke:G,strokeWidth:K})]});case`datePicker`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5`,rx:`1`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`3.5`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`rect`,{x:`14`,y:`2.5`,width:`2.5`,height:`2`,rx:`.5`,fill:G,opacity:`.12`}),(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`8`,rx:`1`,stroke:G,strokeWidth:K,strokeDasharray:`2 1`,opacity:`.3`}),(0,N.jsx)(`circle`,{cx:`6`,cy:`10`,r:`.6`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`10`,cy:`10`,r:`.6`,fill:G,opacity:`.3`}),(0,N.jsx)(`circle`,{cx:`14`,cy:`10`,r:`.6`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`6`,cy:`13`,r:`.6`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`10`,cy:`13`,r:`.6`,fill:G,opacity:`.2`})]});case`skeleton`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`3`,rx:`1`,fill:G,opacity:`.08`}),(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`.75`,fill:G,opacity:`.08`}),(0,N.jsx)(`rect`,{x:`2`,y:`11`,width:`13`,height:`2`,rx:`.75`,fill:G,opacity:`.08`})]});case`chip`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1.5`,y:`5`,width:`10`,height:`6`,rx:`3`,fill:G,opacity:`.08`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`4`,y:`7.5`,width:`4`,height:`1`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`line`,{x1:`9.5`,y1:`6.5`,x2:`10.5`,y2:`9.5`,stroke:G,strokeWidth:K,opacity:`.2`}),(0,N.jsx)(`line`,{x1:`10.5`,y1:`6.5`,x2:`9.5`,y2:`9.5`,stroke:G,strokeWidth:K,opacity:`.2`}),(0,N.jsx)(`rect`,{x:`13`,y:`5`,width:`5.5`,height:`6`,rx:`3`,stroke:G,strokeWidth:K,opacity:`.25`})]});case`icon`:return(0,N.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z`,stroke:G,strokeWidth:K,opacity:`.3`})});case`spinner`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`10`,cy:`8`,r:`5`,stroke:G,strokeWidth:K,opacity:`.12`}),(0,N.jsx)(`path`,{d:`M10 3a5 5 0 0 1 5 5`,stroke:G,strokeWidth:K,opacity:`.35`,strokeLinecap:`round`})]});case`feature`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`2`,width:`5`,height:`5`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`path`,{d:`M4.5 3.5v3m-1.5-1.5h3`,stroke:G,strokeWidth:K,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`9`,y:`2.5`,width:`8`,height:`1.5`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`9`,y:`5.5`,width:`6`,height:`1`,rx:`.5`,fill:G,opacity:`.12`}),(0,N.jsx)(`rect`,{x:`2`,y:`10`,width:`5`,height:`5`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`9`,y:`10.5`,width:`7`,height:`1.5`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`9`,y:`13.5`,width:`5`,height:`1`,rx:`.5`,fill:G,opacity:`.12`})]});case`team`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`5`,cy:`5`,r:`2.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`2.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`15`,cy:`5`,r:`2.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`12.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`circle`,{cx:`10`,cy:`5`,r:`2.5`,stroke:G,strokeWidth:K,opacity:`.5`}),(0,N.jsx)(`rect`,{x:`7.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:G,opacity:`.15`}),(0,N.jsx)(`rect`,{x:`4`,y:`12`,width:`12`,height:`1`,rx:`.5`,fill:G,opacity:`.1`})]});case`login`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:G,opacity:`.25`}),(0,N.jsx)(`rect`,{x:`5`,y:`5.5`,width:`10`,height:`3`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`5`,y:`9.5`,width:`10`,height:`3`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`6.5`,y:`13.5`,width:`7`,height:`2`,rx:`.75`,fill:G,opacity:`.2`})]});case`contact`:return(0,N.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`4`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:G,opacity:`.2`}),(0,N.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`2.5`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`4`,y:`8.5`,width:`12`,height:`4`,rx:`.75`,stroke:G,strokeWidth:K}),(0,N.jsx)(`rect`,{x:`11`,y:`13.5`,width:`5`,height:`1.5`,rx:`.5`,fill:G,opacity:`.2`})]});default:return null}}function Br({activeType:e,onSelect:t,onDragStart:n,scrollRef:r,fadeClass:i,blankCanvas:a}){return(0,N.jsx)(`div`,{ref:r,className:`${W.placeScroll} ${i||``}`,children:hn.map(r=>(0,N.jsxs)(`div`,{className:W.paletteSection,children:[(0,N.jsx)(`div`,{className:W.paletteSectionTitle,children:r.section}),r.items.map(r=>(0,N.jsxs)(`div`,{className:`${W.paletteItem} ${e===r.type?W.active:``} ${a?W.wireframe:``}`,onClick:()=>t(r.type),onMouseDown:e=>{e.button===0&&n(r.type,e)},children:[(0,N.jsx)(`div`,{className:W.paletteItemIcon,children:(0,N.jsx)(zr,{type:r.type})}),(0,N.jsx)(`span`,{className:W.paletteItemLabel,children:r.label})]},r.type))]},r.section))})}function Vr({value:e,suffix:t}){let[n,r]=(0,I.useState)(null),[i,a]=(0,I.useState)(t),[o,s]=(0,I.useState)(`up`),c=(0,I.useRef)(e),l=(0,I.useRef)(t),u=(0,I.useRef)(),d=n!==null&&i!==t;return(0,I.useEffect)(()=>{if(e!==c.current){if(e===0){c.current=e,l.current=t,r(null);return}s(e>c.current?`up`:`down`),r(c.current),a(l.current),c.current=e,l.current=t,clearTimeout(u.current),u.current=z(()=>r(null),250)}else l.current=t},[e,t]),n===null?(0,N.jsxs)(N.Fragment,{children:[e,t?` ${t}`:``]}):d?(0,N.jsxs)(`span`,{className:W.rollingWrap,children:[(0,N.jsxs)(`span`,{style:{visibility:`hidden`},children:[e,` `,t]}),(0,N.jsxs)(`span`,{className:`${W.rollingNum} ${o===`up`?W.exitUp:W.exitDown}`,children:[n,` `,i]},`o${n}-${e}`),(0,N.jsxs)(`span`,{className:`${W.rollingNum} ${o===`up`?W.enterUp:W.enterDown}`,children:[e,` `,t]},`n${e}`)]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`span`,{className:W.rollingWrap,children:[(0,N.jsx)(`span`,{style:{visibility:`hidden`},children:e}),(0,N.jsx)(`span`,{className:`${W.rollingNum} ${o===`up`?W.exitUp:W.exitDown}`,children:n},`o${n}-${e}`),(0,N.jsx)(`span`,{className:`${W.rollingNum} ${o===`up`?W.enterUp:W.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:``]})}function Hr({activeType:e,onSelect:t,isDarkMode:n,sectionCount:r,onDetectSections:i,visible:a,onExited:o,placementCount:s,onClearPlacements:c,onDragStart:l,blankCanvas:u,onBlankCanvasChange:d,wireframePurpose:f,onWireframePurposeChange:p,Tooltip:m}){let[h,g]=(0,I.useState)(!1),[_,v]=(0,I.useState)(`exit`),[y,b]=(0,I.useState)(!1),[x,S]=(0,I.useState)(!0),ee=(0,I.useRef)(0),C=(0,I.useRef)(``),te=(0,I.useRef)(0),w=(0,I.useRef)(),ne=(0,I.useRef)(null),[T,re]=(0,I.useState)(``);(0,I.useEffect)(()=>(a?(g(!0),clearTimeout(w.current),cancelAnimationFrame(te.current),te.current=rn(()=>{te.current=rn(()=>{v(`enter`)})})):(cancelAnimationFrame(te.current),v(`exit`),clearTimeout(w.current),w.current=z(()=>{g(!1),o?.()},200)),()=>cancelAnimationFrame(te.current)),[a]);let E=s>0||r>0,ie=s+r;if(ie>0&&(ee.current=ie,C.current=u?ie===1?`Component`:`Components`:ie===1?`Change`:`Changes`),(0,I.useEffect)(()=>{if(E)y?S(!1):(S(!0),b(!0),rn(()=>{rn(()=>{S(!1)})}));else{S(!0);let e=z(()=>b(!1),300);return()=>clearTimeout(e)}},[E]),(0,I.useEffect)(()=>{if(!h)return;let e=ne.current;if(!e)return;let t=()=>re(Rr(e));t(),e.addEventListener(`scroll`,t,{passive:!0});let n=new ResizeObserver(t);return n.observe(e),()=>{e.removeEventListener(`scroll`,t),n.disconnect()}},[h]),!h)return null;let ae=[];return s>0&&ae.push(`placed`),r>0&&ae.push(`captured`),(0,N.jsxs)(`div`,{className:`${W.palette} ${W[_]} ${n?``:W.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onTransitionEnd:e=>{e.target===e.currentTarget&&(a||(clearTimeout(w.current),g(!1),v(`exit`),o?.()))},children:[(0,N.jsxs)(`div`,{className:W.paletteHeader,children:[(0,N.jsx)(`div`,{className:W.paletteHeaderTitle,children:`Layout Mode`}),(0,N.jsxs)(`div`,{className:W.paletteHeaderDesc,children:[`Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary.`,` `,(0,N.jsx)(`a`,{href:`https://agentation.dev/features#layout-mode`,target:`_blank`,rel:`noopener noreferrer`,children:`Learn more.`})]})]}),(0,N.jsxs)(`div`,{className:`${W.canvasToggle} ${u?W.active:``}`,onClick:()=>d(!u),children:[(0,N.jsx)(`span`,{className:W.canvasToggleIcon,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 14 14`,width:`14`,height:`14`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,strokeWidth:`1`}),(0,N.jsx)(`circle`,{cx:`4.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,N.jsx)(`circle`,{cx:`7`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,N.jsx)(`circle`,{cx:`9.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,N.jsx)(`circle`,{cx:`4.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,N.jsx)(`circle`,{cx:`7`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,N.jsx)(`circle`,{cx:`9.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,N.jsx)(`circle`,{cx:`4.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,N.jsx)(`circle`,{cx:`7`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,N.jsx)(`circle`,{cx:`9.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`})]})}),(0,N.jsx)(`span`,{className:W.canvasToggleLabel,children:`Wireframe New Page`})]}),(0,N.jsx)(`div`,{className:`${W.wireframePurposeWrap} ${u?``:W.collapsed}`,children:(0,N.jsx)(`div`,{className:W.wireframePurposeInner,children:(0,N.jsx)(`textarea`,{className:W.wireframePurposeInput,placeholder:`Describe this page to provide additional context for your agent.`,value:f,onChange:e=>p(e.target.value),rows:2})})}),(0,N.jsx)(Br,{activeType:e,onSelect:t,onDragStart:l,scrollRef:ne,fadeClass:T,blankCanvas:u}),y&&(0,N.jsx)(`div`,{className:`${W.paletteFooterWrap} ${x?W.footerHidden:``}`,children:(0,N.jsx)(`div`,{className:W.paletteFooterInner,children:(0,N.jsx)(`div`,{className:W.paletteFooterInnerContent,children:(0,N.jsxs)(`div`,{className:W.paletteFooter,children:[(0,N.jsx)(`span`,{className:W.paletteFooterCount,children:(0,N.jsx)(Vr,{value:ee.current,suffix:C.current})}),(0,N.jsx)(`button`,{className:W.paletteFooterClear,onClick:c,children:`Clear`})]})})})})]})}function Ur(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function Wr(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=Ur(n)}return null}function Gr(e,t=4){let n=[],r=e,i=0;for(;r&&i<t;){let e=r.tagName.toLowerCase();if(e===`html`||e===`body`)break;let t=e;if(r.id)t=`#${r.id}`;else if(r.className&&typeof r.className==`string`){let e=r.className.split(/\s+/).find(e=>e.length>2&&!e.match(/^[a-z]{1,2}$/)&&!e.match(/[A-Z0-9]{5,}/));e&&(t=`.${e.split(`_`)[0]}`)}let a=Ur(r);!r.parentElement&&a&&(t=`\u27E8shadow\u27E9 ${t}`),n.unshift(t),r=a,i++}return n.join(` > `)}function Kr(e){let t=Gr(e);if(e.dataset.element)return{name:e.dataset.element,path:t};let n=e.tagName.toLowerCase();if([`path`,`circle`,`rect`,`line`,`g`].includes(n)){let n=Wr(e,`svg`);if(n){let e=Ur(n);if(e instanceof HTMLElement)return{name:`graphic in ${Kr(e).name}`,path:t}}return{name:`graphic element`,path:t}}if(n===`svg`){let n=Ur(e);if(n?.tagName.toLowerCase()===`button`){let e=n.textContent?.trim();return{name:e?`icon in "${e}" button`:`button icon`,path:t}}return{name:`icon`,path:t}}if(n===`button`){let n=e.textContent?.trim(),r=e.getAttribute(`aria-label`);return r?{name:`button [${r}]`,path:t}:{name:n?`button "${n.slice(0,25)}"`:`button`,path:t}}if(n===`a`){let n=e.textContent?.trim(),r=e.getAttribute(`href`);return n?{name:`link "${n.slice(0,25)}"`,path:t}:r?{name:`link to ${r.slice(0,30)}`,path:t}:{name:`link`,path:t}}if(n===`input`){let n=e.getAttribute(`type`)||`text`,r=e.getAttribute(`placeholder`),i=e.getAttribute(`name`);return r?{name:`input "${r}"`,path:t}:i?{name:`input [${i}]`,path:t}:{name:`${n} input`,path:t}}if([`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].includes(n)){let r=e.textContent?.trim();return{name:r?`${n} "${r.slice(0,35)}"`:n,path:t}}if(n===`p`){let n=e.textContent?.trim();return n?{name:`paragraph: "${n.slice(0,40)}${n.length>40?`...`:``}"`,path:t}:{name:`paragraph`,path:t}}if(n===`span`||n===`label`){let r=e.textContent?.trim();return r&&r.length<40?{name:`"${r}"`,path:t}:{name:n,path:t}}if(n===`li`){let n=e.textContent?.trim();return n&&n.length<40?{name:`list item: "${n.slice(0,35)}"`,path:t}:{name:`list item`,path:t}}if(n===`blockquote`)return{name:`blockquote`,path:t};if(n===`code`){let n=e.textContent?.trim();return n&&n.length<30?{name:`code: \`${n}\``,path:t}:{name:`code`,path:t}}if(n===`pre`)return{name:`code block`,path:t};if(n===`img`){let n=e.getAttribute(`alt`);return{name:n?`image "${n.slice(0,30)}"`:`image`,path:t}}if(n===`video`)return{name:`video`,path:t};if([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`].includes(n)){let r=e.className,i=e.getAttribute(`role`),a=e.getAttribute(`aria-label`);if(a)return{name:`${n} [${a}]`,path:t};if(i)return{name:`${i}`,path:t};if(typeof r==`string`&&r){let e=r.split(/[\s_-]+/).map(e=>e.replace(/[A-Z0-9]{5,}.*$/,``)).filter(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e)).slice(0,2);if(e.length>0)return{name:e.join(` `),path:t}}return{name:n===`div`?`container`:n,path:t}}return{name:n,path:t}}function qr(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let r=e.previousElementSibling;if(r){let e=r.textContent?.trim();e&&e.length<50&&t.unshift(`[before: "${e.slice(0,40)}"]`)}let i=e.nextElementSibling;if(i){let e=i.textContent?.trim();e&&e.length<50&&t.push(`[after: "${e.slice(0,40)}"]`)}return t.join(` `)}function Jr(e){let t=Ur(e);if(!t)return``;let n=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(t=>t!==e&&t instanceof HTMLElement);if(n.length===0)return``;let r=n.slice(0,4).map(e=>{let t=e.tagName.toLowerCase(),n=e.className,r=``;if(typeof n==`string`&&n){let e=n.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(r=`.${e}`)}if(t===`button`||t===`a`){let n=e.textContent?.trim().slice(0,15);if(n)return`${t}${r} "${n}"`}return`${t}${r}`}),i=t.tagName.toLowerCase();if(typeof t.className==`string`&&t.className){let e=t.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(i=`.${e}`)}let a=t.children.length,o=a>r.length+1?` (${a} total in ${i})`:``;return r.join(`, `)+o}function Yr(e){let t=e.className;return typeof t!=`string`||!t?``:t.split(/\s+/).filter(e=>e.length>0).map(e=>{let t=e.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return t?t[1]:e}).filter((e,t,n)=>n.indexOf(e)===t).join(`, `)}var Xr=new Set([`none`,`normal`,`auto`,`0px`,`rgba(0, 0, 0, 0)`,`transparent`,`static`,`visible`]),Zr=new Set(`p.span.h1.h2.h3.h4.h5.h6.label.li.td.th.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.a.time.cite.q`.split(`.`)),Qr=new Set([`input`,`textarea`,`select`]),$r=new Set([`img`,`video`,`canvas`,`svg`]),ei=new Set([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`,`ul`,`ol`,`form`,`fieldset`]);function ti(e){if(typeof window>`u`)return{};let t=window.getComputedStyle(e),n={},r=e.tagName.toLowerCase(),i;i=Zr.has(r)?[`color`,`fontSize`,`fontWeight`,`fontFamily`,`lineHeight`]:r===`button`||r===`a`&&e.getAttribute(`role`)===`button`||Qr.has(r)?[`backgroundColor`,`color`,`padding`,`borderRadius`,`fontSize`]:$r.has(r)?[`width`,`height`,`objectFit`,`borderRadius`]:ei.has(r)?[`display`,`padding`,`margin`,`gap`,`backgroundColor`]:[`color`,`fontSize`,`margin`,`padding`,`backgroundColor`];for(let e of i){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!Xr.has(i)&&(n[e]=i)}return n}var ni=`color.backgroundColor.borderColor.fontSize.fontWeight.fontFamily.lineHeight.letterSpacing.textAlign.width.height.padding.margin.border.borderRadius.display.position.top.right.bottom.left.zIndex.flexDirection.justifyContent.alignItems.gap.opacity.visibility.overflow.boxShadow.transform`.split(`.`);function ri(e){if(typeof window>`u`)return``;let t=window.getComputedStyle(e),n=[];for(let e of ni){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!Xr.has(i)&&n.push(`${r}: ${i}`)}return n.join(`; `)}function ii(e){if(!e)return;let t={},n=e.split(`;`).map(e=>e.trim()).filter(Boolean);for(let e of n){let n=e.indexOf(`:`);if(n>0){let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();r&&i&&(t[r]=i)}}return Object.keys(t).length>0?t:void 0}function ai(e){let t=[],n=e.getAttribute(`role`),r=e.getAttribute(`aria-label`),i=e.getAttribute(`aria-describedby`),a=e.getAttribute(`tabindex`),o=e.getAttribute(`aria-hidden`);return n&&t.push(`role="${n}"`),r&&t.push(`aria-label="${r}"`),i&&t.push(`aria-describedby="${i}"`),a&&t.push(`tabindex=${a}`),o===`true`&&t.push(`aria-hidden`),e.matches(`a, button, input, select, textarea, [tabindex]`)&&t.push(`focusable`),t.join(`, `)}function oi(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!==`html`;){let e=n.tagName.toLowerCase(),r=e;if(n.id)r=`${e}#${n.id}`;else if(n.className&&typeof n.className==`string`){let t=n.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2);t&&(r=`${e}.${t}`)}let i=Ur(n);!n.parentElement&&i&&(r=`\u27E8shadow\u27E9 ${r}`),t.unshift(r),n=i}return t.join(` > `)}var si=new Set([`nav`,`header`,`main`,`section`,`article`,`footer`,`aside`]),ci={banner:`Header`,navigation:`Navigation`,main:`Main Content`,contentinfo:`Footer`,complementary:`Sidebar`,region:`Section`},li={nav:`Navigation`,header:`Header`,main:`Main Content`,section:`Section`,article:`Article`,footer:`Footer`,aside:`Sidebar`},ui=new Set([`script`,`style`,`noscript`,`link`,`meta`]),di=40;function fi(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function pi(e){let t=e.tagName.toLowerCase();if([`nav`,`header`,`footer`,`main`].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className==`string`){let n=e.className.split(/\s+/).filter(e=>e.length>0).find(e=>e.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(e)&&!/^[a-z]{1,2}$/.test(e));if(n){let e=`${t}.${CSS.escape(n)}`;if(document.querySelectorAll(e).length===1)return e}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?`body`:pi(n)} > ${t}:nth-child(${r})`}return t}function mi(e){let t=e.tagName.toLowerCase(),n=e.getAttribute(`aria-label`);if(n)return n;let r=e.getAttribute(`role`);if(r&&ci[r])return ci[r];if(li[t])return li[t];let i=e.querySelector(`h1, h2, h3, h4, h5, h6`);if(i){let e=i.textContent?.trim();if(e&&e.length<=50)return e;if(e)return e.slice(0,47)+`...`}let{name:a}=Kr(e);return a.charAt(0).toUpperCase()+a.slice(1)}function hi(e){let t=e.className;return typeof t!=`string`||!t?null:t.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e))||null}function gi(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g,` `);return n.length<=30?n:n.slice(0,30)+`…`}function _i(){let e=document.querySelector(`main`)||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let r=[];return n.forEach((e,t)=>{if(!(e instanceof HTMLElement))return;let n=e.tagName.toLowerCase();if(ui.has(n)||e.hasAttribute(`data-feedback-toolbar`)||e.closest(`[data-feedback-toolbar]`))return;let i=window.getComputedStyle(e);if(i.display===`none`||i.visibility===`hidden`)return;let a=e.getBoundingClientRect();if(a.height<di)return;let o=si.has(n),s=e.getAttribute(`role`)&&ci[e.getAttribute(`role`)],c=n===`div`&&a.height>=60;if(!o&&!s&&!c)return;let l=window.scrollY,u=fi(e),d={x:a.x,y:u?a.y:a.y+l,width:a.width,height:a.height};r.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:mi(e),tagName:n,selector:pi(e),role:e.getAttribute(`role`),className:hi(e),textSnippet:gi(e),originalRect:d,currentRect:{...d},originalIndex:t,isFixed:u})}),r}function vi(e){let t=window.scrollY,n=e.getBoundingClientRect(),r=fi(e),i={x:n.x,y:r?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,o=0;return a&&(o=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:mi(e),tagName:e.tagName.toLowerCase(),selector:pi(e),role:e.getAttribute(`role`),className:hi(e),textSnippet:gi(e),originalRect:i,currentRect:{...i},originalIndex:o,isFixed:r}}var yi={bg:`rgba(59, 130, 246, 0.08)`,border:`rgba(59, 130, 246, 0.5)`,pill:`#3b82f6`},bi=[`nw`,`n`,`ne`,`e`,`se`,`s`,`sw`,`w`],xi=24,Si=16,Ci=5;function wi(e,t,n,r){let i=1/0,a=1/0,o=e.x,s=e.x+e.width,c=e.x+e.width/2,l=e.y,u=e.y+e.height,d=e.y+e.height/2,f=[];for(let e of t)n.has(e.id)||f.push(e.currentRect);r&&f.push(...r);for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,f=e.y,p=e.y+e.height,m=e.y+e.height/2;for(let e of[o,s,c])for(let a of[t,n,r]){let t=a-e;Math.abs(t)<Ci&&Math.abs(t)<Math.abs(i)&&(i=t)}for(let e of[l,u,d])for(let t of[f,p,m]){let n=t-e;Math.abs(n)<Ci&&Math.abs(n)<Math.abs(a)&&(a=n)}}let p=Math.abs(i)<Ci?i:0,m=Math.abs(a)<Ci?a:0,h=[],g=new Set,_=o+p,v=s+p,y=c+p,b=l+m,x=u+m,S=d+m;for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[_,y,v])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[b,S,x])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`y`,pos:e}))}}return{dx:p,dy:m,guides:h}}var Ti=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function Ei(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest(`[data-feedback-toolbar]`))return null;if(Ti.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let e=t.getBoundingClientRect();if(e.width>=Si&&e.height>=Si)return t;t=t.parentElement}return null}function q({rearrangeState:e,onChange:t,isDarkMode:n,exiting:r,className:i,blankCanvas:a,extraSnapRects:o,onSelectionChange:s,deselectSignal:c,onDragMove:l,onDragEnd:u,clearSignal:d}){let{sections:f}=e,p=(0,I.useRef)(e);p.current=e;let[m,h]=(0,I.useState)(new Set),[g,_]=(0,I.useState)(!1),v=(0,I.useRef)(d);(0,I.useEffect)(()=>{d!==void 0&&d!==v.current&&(v.current=d,f.length>0&&_(!0))},[d,f.length]);let y=(0,I.useRef)(c);(0,I.useEffect)(()=>{c!==y.current&&(y.current=c,h(new Set))},[c]);let[b,x]=(0,I.useState)(null),[S,ee]=(0,I.useState)(!1),C=(0,I.useRef)(!1),te=(0,I.useCallback)(e=>{let t=f.find(t=>t.id===e);t&&(C.current=!!t.note,x(e),ee(!1))},[f]),w=(0,I.useCallback)(()=>{b&&(ee(!0),z(()=>{x(null),ee(!1)},150))},[b]),ne=(0,I.useCallback)(n=>{b&&(t({...e,sections:f.map(e=>e.id===b?{...e,note:n.trim()||void 0}:e)}),w())},[b,f,e,t,w]);(0,I.useEffect)(()=>{r&&b&&w()},[r]);let[T,re]=(0,I.useState)(new Set),E=(0,I.useRef)(new Map),[ie,ae]=(0,I.useState)(null),[oe,D]=(0,I.useState)(null),[O,se]=(0,I.useState)([]),[ce,le]=(0,I.useState)(0),ue=(0,I.useRef)(null),de=(0,I.useRef)(new Set),k=(0,I.useRef)(new Map),[fe,pe]=(0,I.useState)(new Map),[me,he]=(0,I.useState)(new Map),A=(0,I.useRef)(new Set),ge=(0,I.useRef)(new Map),_e=(0,I.useRef)(s);_e.current=s;let ve=(0,I.useRef)(l);ve.current=l;let ye=(0,I.useRef)(u);ye.current=u,(0,I.useEffect)(()=>{a&&h(new Set)},[a]);let[be,xe]=(0,I.useState)(()=>!e.sections.some(e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1}));(0,I.useEffect)(()=>{if(!be){let e=z(()=>xe(!0),380);return()=>clearTimeout(e)}},[]);let Se=(0,I.useRef)(new Set);(0,I.useEffect)(()=>{Se.current=new Set(f.map(e=>e.selector))},[f]),(0,I.useEffect)(()=>{let e=()=>le(window.scrollY);return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]),(0,I.useEffect)(()=>{let e=e=>{if(ue.current){ae(null);return}let t=document.elementFromPoint(e.clientX,e.clientY);if(!t){ae(null);return}if(t.closest(`[data-feedback-toolbar]`)){ae(null);return}if(t.closest(`[data-design-placement]`)){ae(null);return}if(t.closest(`[data-annotation-popup]`)){ae(null);return}let n=Ei(t);if(!n){ae(null);return}for(let e of Se.current)try{let t=document.querySelector(e);if(t&&(t===n||n.contains(t))){ae(null);return}}catch{}let r=n.getBoundingClientRect();ae({x:r.x,y:r.y,w:r.width,h:r.height})};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[f]),(0,I.useEffect)(()=>{let e=document.body.style.userSelect;return document.body.style.userSelect=`none`,()=>{document.body.style.userSelect=e}},[]),(0,I.useEffect)(()=>{let n=n=>{if(ue.current||n.button!==0)return;let r=n.target;if(!r||r.closest(`[data-feedback-toolbar]`)||r.closest(`[data-design-placement]`)||r.closest(`[data-annotation-popup]`))return;let i=Ei(r),a=!1;if(i)for(let e of Se.current)try{let t=document.querySelector(e);if(t&&(t===i||i.contains(t))){a=!0;break}}catch{}let s=!!(n.shiftKey||n.metaKey||n.ctrlKey);if(i&&!a){n.preventDefault(),n.stopPropagation();let r=vi(i),a=[...f,r],c=[...e.originalOrder,r.id];t({...e,sections:a,originalOrder:c});let l=new Set([r.id]);h(l),_e.current?.(l,s),ae(null);let u=n.clientX,d=n.clientY,p={x:r.currentRect.x,y:r.currentRect.y};r.originalRect;let m=!1,g=0,_=0;ue.current=`move`;let v=e=>{let t=e.clientX-u,n=e.clientY-d;if(!m&&(Math.abs(t)>2||Math.abs(n)>2)&&(m=!0),!m)return;let i=wi({x:p.x+t,y:p.y+n,width:r.currentRect.width,height:r.currentRect.height},a,new Set([r.id]),o);se(i.guides);let s=t+i.dx,c=n+i.dy;g=s,_=c;let l=document.querySelector(`[data-rearrange-section="${r.id}"]`);l&&(l.style.transform=`translate(${s}px, ${c}px)`),pe(new Map([[r.id,{x:p.x+s,y:p.y+c,width:r.currentRect.width,height:r.currentRect.height}]])),ve.current?.(s,c)},y=()=>{window.removeEventListener(`mousemove`,v),window.removeEventListener(`mouseup`,y),ue.current=null,se([]),pe(new Map);let n=document.querySelector(`[data-rearrange-section="${r.id}"]`);n&&(n.style.transform=``),m&&t({...e,sections:a.map(e=>e.id===r.id?{...e,currentRect:{...e.currentRect,x:Math.max(0,p.x+g),y:Math.max(0,p.y+_)}}:e),originalOrder:c}),ye.current?.(g,_,m)};window.addEventListener(`mousemove`,v),window.addEventListener(`mouseup`,y)}else if(a&&i){n.preventDefault();for(let e of f)try{let t=document.querySelector(e.selector);if(t&&t===i){let t=new Set([e.id]);h(t),_e.current?.(t,s);return}}catch{}s||(h(new Set),_e.current?.(new Set,!1))}else s||(h(new Set),_e.current?.(new Set,!1))};return document.addEventListener(`mousedown`,n,!0),()=>document.removeEventListener(`mousedown`,n,!0)},[f,e,t]),(0,I.useEffect)(()=>{let n=n=>{let r=n.target;if(!(r.tagName===`INPUT`||r.tagName===`TEXTAREA`||r.isContentEditable)){if((n.key===`Backspace`||n.key===`Delete`)&&m.size>0){n.preventDefault();let e=new Set(m);re(t=>{let n=new Set(t);for(let t of e)n.add(t);return n}),h(new Set),z(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>!e.has(t.id)),originalOrder:n.originalOrder.filter(t=>!e.has(t))}),re(t=>{let n=new Set(t);for(let t of e)n.delete(t);return n})},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(n.key)&&m.size>0){n.preventDefault();let r=n.shiftKey?20:1,i=n.key===`ArrowLeft`?-r:n.key===`ArrowRight`?r:0,a=n.key===`ArrowUp`?-r:n.key===`ArrowDown`?r:0;t({...e,sections:f.map(e=>m.has(e.id)?{...e,currentRect:{...e.currentRect,x:Math.max(0,e.currentRect.x+i),y:Math.max(0,e.currentRect.y+a)}}:e)});return}n.key===`Escape`&&m.size>0&&h(new Set)}};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[m,f,e,t]);let j=(0,I.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${W.handle}`)||i.closest(`.${W.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey||n.metaKey||n.ctrlKey?(a=new Set(m),a.has(r)?a.delete(r):a.add(r)):a=m.has(r)?new Set(m):new Set([r]),h(a),(a.size!==m.size||[...a].some(e=>!m.has(e)))&&_e.current?.(a,!!(n.shiftKey||n.metaKey||n.ctrlKey));let s=n.clientX,c=n.clientY,l=new Map;for(let e of f)a.has(e.id)&&l.set(e.id,{x:e.currentRect.x,y:e.currentRect.y});ue.current=`move`;let u=!1,d=0,p=0,g=new Map;for(let e of f)if(a.has(e.id)){let t=document.querySelector(`[data-rearrange-section="${e.id}"]`);g.set(e.id,{outlineEl:t,curW:e.currentRect.width,curH:e.currentRect.height})}let _=e=>{let t=e.clientX-s,n=e.clientY-c;if(t===0&&n===0)return;u=!0;let r=1/0,i=1/0,m=-1/0,h=-1/0;for(let[e,{curW:a,curH:o}]of g){let s=l.get(e);if(!s)continue;let c=s.x+t,u=s.y+n;r=Math.min(r,c),i=Math.min(i,u),m=Math.max(m,c+a),h=Math.max(h,u+o)}let _=wi({x:r,y:i,width:m-r,height:h-i},f,a,o),v=t+_.dx,y=n+_.dy;d=v,p=y,se(_.guides);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=`translate(${v}px, ${y}px)`);let b=new Map;for(let[e,{curW:t,curH:n}]of g){let r=l.get(e);if(r){let i={x:Math.max(0,r.x+v),y:Math.max(0,r.y+y),width:t,height:n};b.set(e,i)}}pe(b),ve.current?.(v,y)},v=n=>{window.removeEventListener(`mousemove`,_),window.removeEventListener(`mouseup`,v),ue.current=null,se([]),pe(new Map);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=``);if(u){let r=n.clientX-s,i=n.clientY-c;if(Math.abs(r)<5&&Math.abs(i)<5)t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:t.x,y:t.y}}:e})});else{t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:Math.max(0,t.x+d),y:Math.max(0,t.y+p)}}:e})}),ye.current?.(d,p,!0);return}}ye.current?.(0,0,!1)};window.addEventListener(`mousemove`,_),window.addEventListener(`mouseup`,v)},[m,f,e,t]),Ce=(0,I.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=f.find(e=>e.id===r);if(!a)return;h(new Set([r])),ue.current=`resize`;let o=n.clientX,s=n.clientY,c={...a.currentRect};a.originalRect;let l=c.width/c.height,u={...c},d=document.querySelector(`[data-rearrange-section="${r}"]`),p=e=>{let t=e.clientX-o,n=e.clientY-s,a=c.x,f=c.y,p=c.width,m=c.height;i.includes(`e`)&&(p=Math.max(xi,c.width+t)),i.includes(`w`)&&(p=Math.max(xi,c.width-t),a=c.x+c.width-p),i.includes(`s`)&&(m=Math.max(xi,c.height+n)),i.includes(`n`)&&(m=Math.max(xi,c.height-n),f=c.y+c.height-m),e.shiftKey&&(i.length===2?(Math.abs(p-c.width)>Math.abs(m-c.height)?m=p/l:p=m*l,i.includes(`w`)&&(a=c.x+c.width-p),i.includes(`n`)&&(f=c.y+c.height-m)):(i===`e`||i===`w`?m=p/l:p=m*l,i===`w`&&(a=c.x+c.width-p),i===`n`&&(f=c.y+c.height-m))),u={x:a,y:f,width:p,height:m},d&&(d.style.left=`${a}px`,d.style.top=`${f-ce}px`,d.style.width=`${p}px`,d.style.height=`${m}px`),D({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(p)} \xD7 ${Math.round(m)}`}),pe(new Map([[r,u]]))},m=()=>{window.removeEventListener(`mousemove`,p),window.removeEventListener(`mouseup`,m),D(null),ue.current=null,pe(new Map),t({...e,sections:f.map(e=>e.id===r?{...e,currentRect:u}:e)})};window.addEventListener(`mousemove`,p),window.addEventListener(`mouseup`,m)},[f,e,t,ce]),we=(0,I.useCallback)(e=>{re(t=>{let n=new Set(t);return n.add(e),n}),h(t=>{let n=new Set(t);return n.delete(e),n}),z(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>t.id!==e),originalOrder:n.originalOrder.filter(t=>t!==e)}),re(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),Te=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1},Ee=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1},De=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1};for(let e of f)k.current.has(e.id)||(Ee(e)?k.current.set(e.id,`move`):De(e)&&k.current.set(e.id,`resize`));for(let e of k.current.keys())f.some(t=>t.id===e)||k.current.delete(e);let Oe=f.filter(e=>{try{if(T.has(e.id)||m.has(e.id))return!0;let t=document.querySelector(e.selector);if(!t)return!1;let n=t.getBoundingClientRect(),r=e.originalRect;return Math.abs(n.width-r.width)+Math.abs(n.height-r.height)<200}catch{return!1}}),ke=Oe.filter(e=>Te(e)),Ae=Oe.filter(e=>!Te(e)),je=new Set(ke.map(e=>e.id));for(let e of de.current)je.has(e)||de.current.delete(e);let M=[...je].sort().join(`,`);for(let e of ke)ge.current.set(e.id,{currentRect:e.currentRect,originalRect:e.originalRect,isFixed:e.isFixed});return(0,I.useEffect)(()=>{let e=A.current;A.current=je;let t=new Map;for(let n of e)if(!je.has(n)){if(!f.some(e=>e.id===n))continue;let e=ge.current.get(n);e&&(t.set(n,{orig:e.originalRect,target:e.currentRect,isFixed:e.isFixed}),ge.current.delete(n))}if(t.size>0){he(e=>{let n=new Map(e);for(let[e,r]of t)n.set(e,r);return n});let e=z(()=>{he(e=>{let n=new Map(e);for(let e of t.keys())n.delete(e);return n})},250);return()=>clearTimeout(e)}},[M,f]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`div`,{className:`${W.rearrangeOverlay} ${n?``:W.light} ${r?W.overlayExiting:``}${i?` ${i}`:``}`,"data-feedback-toolbar":!0,children:[ie&&(0,N.jsx)(`div`,{className:W.hoverHighlight,style:{left:ie.x,top:ie.y,width:ie.w,height:ie.h}}),Ae.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-ce,i=yi,a=m.has(e.id);return(0,N.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${W.sectionOutline} ${a?W.selected:``} ${g||r||T.has(e.id)?W.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,borderColor:i.border,backgroundColor:i.bg,...be?{}:{opacity:0,animation:`none`,transition:`none`}},onMouseDown:t=>j(t,e.id),onDoubleClick:()=>te(e.id),children:[(0,N.jsx)(`span`,{className:W.sectionLabel,style:{backgroundColor:i.pill},children:e.label}),(0,N.jsx)(`span`,{className:`${W.sectionAnnotation} ${e.note?W.annotationVisible:``}`,children:(e.note&&E.current.set(e.id,e.note),e.note||E.current.get(e.id)||``)}),(0,N.jsxs)(`span`,{className:W.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,N.jsx)(`div`,{className:W.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>we(e.id),children:`✕`}),bi.map(t=>(0,N.jsx)(`div`,{className:`${W.handle} ${W[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>Ce(n,e.id,t)},t))]},e.id)}),ke.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-ce,i=m.has(e.id),o=Ee(e),s=De(e);if(a&&!i)return null;let c=!de.current.has(e.id);return c&&de.current.add(e.id),(0,N.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${W.ghostOutline} ${i?W.selected:``} ${g||r||T.has(e.id)?W.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,...be?{}:{opacity:0,animation:`none`,transition:`none`},...c?{}:{animation:`none`}},onMouseDown:t=>j(t,e.id),onDoubleClick:()=>te(e.id),children:[(0,N.jsx)(`span`,{className:W.sectionLabel,style:{backgroundColor:yi.pill},children:e.label}),(0,N.jsx)(`span`,{className:`${W.sectionAnnotation} ${e.note?W.annotationVisible:``}`,children:(e.note&&E.current.set(e.id,e.note),e.note||E.current.get(e.id)||``)}),(0,N.jsxs)(`span`,{className:W.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,N.jsx)(`div`,{className:W.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>we(e.id),children:`✕`}),bi.map(t=>(0,N.jsx)(`div`,{className:`${W.handle} ${W[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>Ce(n,e.id,t)},t)),(0,N.jsx)(`span`,{className:W.ghostBadge,children:(()=>{let t=k.current.get(e.id);if(o&&s){let[e,n]=t===`resize`?[`Resize`,`Move`]:[`Move`,`Resize`];return(0,N.jsxs)(N.Fragment,{children:[`Suggested `,e,` `,(0,N.jsxs)(`span`,{className:W.ghostBadgeExtra,children:[`& `,n]})]})}return`Suggested ${s?`Resize`:`Move`}`})()})]},e.id)})]}),!a&&(()=>{let e=[];for(let t of ke){let n=fe.get(t.id);e.push({id:t.id,orig:t.originalRect,target:n||t.currentRect,isFixed:t.isFixed,isSelected:m.has(t.id),isExiting:T.has(t.id)})}for(let[t,n]of fe)if(!e.some(e=>e.id===t)){let r=f.find(e=>e.id===t);r&&e.push({id:t,orig:r.originalRect,target:n,isFixed:r.isFixed,isSelected:m.has(t)})}for(let[t,n]of me)e.some(e=>e.id===t)||e.push({id:t,orig:n.orig,target:n.target,isFixed:n.isFixed,isSelected:!1,isExiting:!0});return e.length===0?null:(0,N.jsxs)(`svg`,{className:`${W.connectorSvg} ${g||r?W.connectorExiting:``}`,children:[e.map(({id:e,orig:t,target:n,isFixed:r,isSelected:i,isExiting:a})=>{let o=t.x+t.width/2,s=(r?t.y:t.y-ce)+t.height/2,c=n.x+n.width/2,l=(r?n.y:n.y-ce)+n.height/2,u=c-o,d=l-s,f=Math.sqrt(u*u+d*d);if(f<2)return null;let p=Math.min(1,f/40),m=Math.min(f*.3,60),h=f>0?-d/f:0,g=f>0?u/f:0,_=(o+c)/2+h*m,v=(s+l)/2+g*m,y=fe.has(e),b=y||i?1:.4,x=y||i?1:.5;return(0,N.jsxs)(`g`,{className:a?W.connectorExiting:``,children:[(0,N.jsx)(`path`,{className:W.connectorLine,d:`M ${o} ${s} Q ${_} ${v} ${c} ${l}`,fill:`none`,stroke:`rgba(59, 130, 246, 0.45)`,strokeWidth:`1.5`,opacity:b*p}),(0,N.jsx)(`circle`,{className:W.connectorDot,cx:o,cy:s,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:x*p,filter:`url(#connDotShadow)`}),(0,N.jsx)(`circle`,{className:W.connectorDot,cx:c,cy:l,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:x*p,filter:`url(#connDotShadow)`})]},`conn-${e}`)}),(0,N.jsx)(`defs`,{children:(0,N.jsx)(`filter`,{id:`connDotShadow`,x:`-50%`,y:`-50%`,width:`200%`,height:`200%`,children:(0,N.jsx)(`feDropShadow`,{dx:`0`,dy:`0.5`,stdDeviation:`1`,floodOpacity:`0.15`})})})]})})(),b&&(()=>{let e=f.find(e=>e.id===b);if(!e)return null;let t=e.currentRect,r=e.isFixed?t.y:t.y-ce,i=t.x+t.width/2,a=r-8,o=r+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,i)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,N.jsx)(ln,{element:e.label,placeholder:`Add a note about this section`,initialValue:e.note??``,submitLabel:C.current?`Save`:`Set`,onSubmit:ne,onCancel:w,onDelete:C.current?()=>{ne(``)}:void 0,isExiting:S,lightMode:!n,style:u})})(),oe&&(0,N.jsx)(`div`,{className:W.sizeIndicator,style:{left:oe.x,top:oe.y},"data-feedback-toolbar":!0,children:oe.text}),O.map((e,t)=>(0,N.jsx)(`div`,{className:W.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,height:`100vh`}:{position:`fixed`,left:0,top:e.pos-ce,width:`100vw`,height:1}},`${e.axis}-${e.pos}-${t}`))]})}var Di=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function Oi(){let e=document.querySelector(`main`)||document.body,t=[],n=Array.from(e.children),r=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let e of r){if(!(e instanceof HTMLElement)||Di.has(e.tagName.toLowerCase())||e.hasAttribute(`data-feedback-toolbar`))continue;let n=window.getComputedStyle(e);if(n.display===`none`||n.visibility===`hidden`)continue;let r=e.getBoundingClientRect();if(!(r.height<10||r.width<10)){t.push({label:mi(e),selector:pi(e),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height});for(let n of Array.from(e.children)){if(!(n instanceof HTMLElement)||Di.has(n.tagName.toLowerCase())||n.hasAttribute(`data-feedback-toolbar`))continue;let e=window.getComputedStyle(n);if(e.display===`none`||e.visibility===`hidden`)continue;let r=n.getBoundingClientRect();r.height<10||r.width<10||t.push({label:mi(n),selector:pi(n),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height})}}}return t}function ki(e){let t=window.scrollY;return e.map(({label:e,selector:n,rect:r})=>{let i=r.y-t;return{label:e,selector:n,top:i,bottom:i+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function Ai(e){let t=window.scrollY,n=e.y-t,r=e.x;return{top:n,bottom:n+e.height,left:r,right:r+e.width,area:e.width*e.height}}function ji(e,t){let n=t?ki(t):Oi(),r=Ai(e),i=null,a=null,o=null,s=null,c=null;for(let t of n){if(Math.abs(t.left-r.left)<2&&Math.abs(t.top-r.top)<2&&Math.abs(t.right-t.left-e.width)<2&&Math.abs(t.bottom-t.top-e.height)<2)continue;t.left<=r.left+2&&t.right>=r.right-2&&t.top<=r.top+2&&t.bottom>=r.bottom-2&&t.area>r.area*1.5&&(!c||t.area<c._area)&&(c={label:t.label,selector:t.selector,_area:t.area});let n=r.right>t.left+5&&r.left<t.right-5,l=r.bottom>t.top+5&&r.top<t.bottom-5;if(n&&t.bottom<=r.top+5){let e=Math.round(r.top-t.bottom);(!i||e<i._dist)&&(i={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(n&&t.top>=r.bottom-5){let e=Math.round(t.top-r.bottom);(!a||e<a._dist)&&(a={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.right<=r.left+5){let e=Math.round(r.left-t.right);(!o||e<o._dist)&&(o={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.left>=r.right-5){let e=Math.round(t.left-r.right);(!s||e<s._dist)&&(s={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}}let l=window.innerWidth,u=window.innerHeight,d=Ni(e,l),f=e=>e?{label:e.label,selector:e.selector,gap:e.gap}:null,p=Mi(r,e,l,u,c?{label:c.label,selector:c.selector,_area:c._area}:null,n);return{above:f(i),below:f(a),left:f(o),right:f(s),alignment:d,containedIn:c?{label:c.label,selector:c.selector}:null,outOfBounds:p}}function Mi(e,t,n,r,i,a){let o={},s=!1,c=[];if(e.left<-2&&c.push(`left`),e.right>n+2&&c.push(`right`),e.top<-2&&c.push(`top`),e.bottom>r+2&&c.push(`bottom`),c.length>0&&(o.viewport=c,s=!0),i){let t=a.find(e=>e.label===i.label&&e.selector===i.selector&&Math.abs(e.area-i._area)<10);if(t){let n=[];e.left<t.left-2&&n.push(`left`),e.right>t.right+2&&n.push(`right`),e.top<t.top-2&&n.push(`top`),e.bottom>t.bottom+2&&n.push(`bottom`),n.length>0&&(o.container={label:i.label,edges:n},s=!0)}}return s?o:null}function Ni(e,t){if(e.width/t>.85)return`full-width`;let n=e.x+e.width/2-t/2,r=t*.08;return Math.abs(n)<r?`center`:n<0?`left`:`right`}function Pi(e){switch(e){case`full-width`:return`full-width`;case`center`:return`centered`;case`left`:return`left-aligned`;case`right`:return`right-aligned`}}function Fi(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:``}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:``}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:``}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:``}`));let r=Pi(e.alignment);return e.containedIn?n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in \`${e.containedIn.label}\``):n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(`, `)} edge${e.outOfBounds.viewport.length>1?`s`:``})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)} edge${e.outOfBounds.container.edges.length>1?`s`:``})`)),n}function Ii(e,t,n){let r=[];e.above&&r.push(`below \`${e.above.label}\``),e.below&&r.push(`above \`${e.below.label}\``),e.left&&r.push(`right of \`${e.left.label}\``),e.right&&r.push(`left of \`${e.right.label}\``),e.containedIn&&r.push(`inside \`${e.containedIn.label}\``),r.push(Pi(e.alignment)),e.outOfBounds?.viewport&&r.push(`**outside viewport** (${e.outOfBounds.viewport.join(`, `)})`),e.outOfBounds?.container&&r.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)})`);let i=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:``;return`at (${Math.round(t.x)}, ${Math.round(t.y)})${i}: ${r.join(`, `)}`}var Li=15;function Ri(e){if(e.length<2)return[];let t=[],n=new Set;for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.y-e[t].rect.y)<Li&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.x-t.rect.x);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.x-(r[e].rect.x+r[e].rect.width)));let o=Math.round(r.reduce((e,t)=>e+t.rect.y,0)/r.length);t.push({labels:r.map(e=>e.label),type:`row`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.x-e[t].rect.x)<Li&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.y-t.rect.y);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.y-(r[e].rect.y+r[e].rect.height)));let o=Math.round(r.reduce((e,t)=>e+t.rect.x,0)/r.length);t.push({labels:r.map(e=>e.label),type:`column`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}return t}function zi(e){if(e.length<2)return[];let t=Ri(e.map(e=>({label:e.label,rect:e.originalRect}))),n=Ri(e.map(e=>({label:e.label,rect:e.currentRect}))),r=[],i=new Set;for(let e of t){let t=new Set(e.labels),a=null,o=0;for(let e of n){let n=e.labels.filter(e=>t.has(e)).length;n>=2&&n>o&&(a=e,o=n)}if(a){let n=a.labels.filter(e=>t.has(e)),o=n.join(`, `);if(a.type!==e.type){let t=e.type===`row`?`y`:`x`,n=a.type===`row`?`y`:`x`;r.push(`**${o}**: ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps) \u2192 ${a.type} (${n}\u2248${a.sharedEdge}, ${a.avgGap}px gaps)`)}else if(Math.abs(e.sharedEdge-a.sharedEdge)>20||Math.abs(e.avgGap-a.avgGap)>5){let t=e.type===`row`?`y`:`x`,n=Math.abs(e.sharedEdge-a.sharedEdge)>20?` ${t}: ${e.sharedEdge} \u2192 ${a.sharedEdge}`:``,i=Math.abs(e.avgGap-a.avgGap)>5?` gaps: ${e.avgGap}px \u2192 ${a.avgGap}px`:``;r.push(`**${o}**: ${e.type} shifted \u2014${n}${i}`)}n.forEach(e=>i.add(e))}else{let t=e.labels.join(`, `),n=e.type===`row`?`y`:`x`;r.push(`**${t}**: ${e.type} (${n}\u2248${e.sharedEdge}) dissolved`),e.labels.forEach(e=>i.add(e))}}for(let e of n)if(!e.labels.every(e=>i.has(e))&&!(e.labels.filter(e=>!i.has(e)).length<2)&&!t.some(t=>t.labels.filter(t=>e.labels.includes(t)).length>=2)){let t=e.type===`row`?`y`:`x`;r.push(`**${e.labels.join(`, `)}**: new ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps)`),e.labels.forEach(e=>i.add(e))}let a=e.filter(e=>!i.has(e.label));if(a.length>=2){let e={};for(let t of a){let n=Math.round(t.currentRect.x/5)*5;(e[n]??(e[n]=[])).push(t.label)}for(let[t,n]of Object.entries(e))n.length>=2&&r.push(`**${n.join(`, `)}**: shared left edge at x\u2248${t}`)}return r}function Bi(e){if(typeof document>`u`)return{viewport:e,contentArea:null};let t=[],n=new Set,r=e=>{n.has(e)||e instanceof HTMLElement&&(e.hasAttribute(`data-feedback-toolbar`)||Di.has(e.tagName.toLowerCase())||(n.add(e),t.push(e)))},i=document.querySelector(`main`);i&&r(i);let a=document.querySelector(`[role='main']`);a&&r(a);for(let e of Array.from(document.body.children))if(r(e),e.children){for(let t of Array.from(e.children))if(r(t),t.children)for(let e of Array.from(t.children))r(e)}let o=null;for(let n of t){let t=n.getBoundingClientRect();if(t.height<50)continue;let r=getComputedStyle(n);if(r.maxWidth&&r.maxWidth!==`none`&&r.maxWidth!==`0px`){(!o||t.width<o.rect.width)&&(o={el:n,rect:t});continue}!o&&t.width<e.width-20&&t.width>100&&(o={el:n,rect:t})}if(o){let{el:t,rect:n}=o;return{viewport:e,contentArea:{width:Math.round(n.width),left:Math.round(n.left),right:Math.round(n.right),centerX:Math.round(n.left+n.width/2),selector:pi(t)}}}return{viewport:e,contentArea:null}}function Vi(e){if(typeof document>`u`)return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),r={parentDisplay:n.display,parentSelector:pi(t.parentElement)};return n.display.includes(`flex`)&&(r.flexDirection=n.flexDirection),n.display.includes(`grid`)&&n.gridTemplateColumns!==`none`&&(r.gridCols=n.gridTemplateColumns),n.gap&&n.gap!==`normal`&&n.gap!==`0px`&&(r.gap=n.gap),r}function Hi(e,t){let n=t.contentArea,r=n?n.width:t.viewport.width,i=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),o=Math.round(e.x-i),s=Math.round(i+r-(e.x+e.width)),c=(e.width/r*100).toFixed(1),l=e.x+e.width/2,u=Math.abs(l-a)<20,d=e.width/r>.95,f=[];return d?f.push("`width: 100%` of container"):f.push(`left \`${o}px\` in container, right \`${s}px\`, width \`${c}%\` (\`${Math.round(e.width)}px\`)`),u&&!d&&f.push("centered — `margin-inline: auto`"),f.join(` — `)}function Ui(e){let{viewport:t,contentArea:n}=e,r=`### Reference Frame
`;if(r+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let e=n;r+=`- Content area: \`${e.width}px\` wide, left edge at \`x=${e.left}\`, right at \`x=${e.right}\` (\`${e.selector}\`)
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Horizontal position in container**: \`element.x - ${e.left}\` \u2192 use as \`margin-left\` or \`left\`
`,r+=`  - **Width as % of container**: \`element.width / ${e.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",r+=`  - **Centered**: if \`|element.centerX - ${e.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else r+=`- No distinct content container — elements positioned relative to full viewport
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return r+=`
`,r}function Wi(e){let t=Vi(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function Gi(e,t,n,r=`standard`){if(e.length===0)return``;let i=[...e].sort((e,t)=>Math.abs(e.y-t.y)<20?e.x-t.x:e.y-t.y),a=``;if(n?.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length===1?``:`s`} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length===1?``:`s`} placed

`,r===`compact`)return a+=`### Components
`,i.forEach((e,t)=>{let n=gn[e.type]?.label||e.type;a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}),a;let o=Bi(t);a+=Ui(o),a+=`### Components
`,i.forEach((e,t)=>{let n=gn[e.type]?.label||e.type,i={x:e.x,y:e.y,width:e.width,height:e.height};a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`;let s=Fi(ji(i),{includeLeftRight:r===`detailed`||r===`forensic`});for(let e of s)a+=`   - ${e}
`;let c=Hi(i,o);c&&(a+=`   - CSS: ${c}
`)}),a+=`
### Layout Analysis
`;let s=[];for(let e of i){let t=s.find(t=>Math.abs(t.y-e.y)<30);t?t.items.push(e):s.push({y:e.y,items:[e]})}if(s.sort((e,t)=>e.y-t.y),s.forEach((e,n)=>{e.items.sort((e,t)=>e.x-t.x);let r=e.items.map(e=>gn[e.type]?.label||e.type);if(e.items.length===1){let i=e.items[0].width>t.width*.8;a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r[0]}${i?` — full width`:``}
`}else a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r.join(` | `)} \u2014 ${e.items.length} items side by side
`}),r===`detailed`||r===`forensic`){a+=`
### Spacing & Gaps
`;for(let e=0;e<i.length-1;e++){let t=i[e],n=i[e+1],r=gn[t.type]?.label||t.type,o=gn[n.type]?.label||n.type,s=Math.round(n.y-(t.y+t.height)),c=Math.round(n.x-(t.x+t.width));Math.abs(t.y-n.y)<30?a+=`- ${r} \u2192 ${o}: \`${c}px\` horizontal gap
`:a+=`- ${r} \u2192 ${o}: \`${s}px\` vertical gap
`}if(r===`forensic`&&i.length>2){a+=`
### All Pairwise Gaps
`;for(let e=0;e<i.length;e++)for(let t=e+1;t<i.length;t++){let n=i[e],r=i[t],o=gn[n.type]?.label||n.type,s=gn[r.type]?.label||r.type,c=Math.round(r.y-(n.y+n.height)),l=Math.round(r.x-(n.x+n.width));a+=`- ${o} \u2194 ${s}: h=\`${l}px\` v=\`${c}px\`
`}}r===`forensic`&&(a+=`
### Z-Order (placement order)
`,e.forEach((e,t)=>{let n=gn[e.type]?.label||e.type;a+=`${t}. ${n} at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}))}a+=`
### Suggested Implementation
`;let c=i.some(e=>e.type===`navigation`),l=i.some(e=>e.type===`hero`),u=i.some(e=>e.type===`sidebar`),d=i.some(e=>e.type===`footer`),f=i.filter(e=>e.type===`card`),p=i.filter(e=>e.type===`form`),m=i.filter(e=>e.type===`table`),h=i.filter(e=>e.type===`modal`);if(c&&(a+=`- Top navigation bar with logo + nav links + CTA
`),l&&(a+=`- Hero section with heading, subtext, and call-to-action
`),u&&(a+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),f.length>1?a+=`- ${f.length}-column card grid \u2014 use CSS Grid or Flexbox
`:f.length===1&&(a+=`- Card component with image + content area
`),p.length>0&&(a+=`- ${p.length} form${p.length>1?`s`:``} \u2014 add proper labels, validation, and submit handling
`),m.length>0&&(a+=`- Data table — consider sortable columns and pagination
`),h.length>0&&(a+=`- Modal dialog — add overlay backdrop and focus trapping
`),d&&(a+=`- Multi-column footer with links
`),r===`detailed`||r===`forensic`){if(a+=`
### CSS Suggestions
`,u){let e=i.find(e=>e.type===`sidebar`);a+=`- \`display: grid; grid-template-columns: ${Math.round(e.width)}px 1fr;\`
`}if(f.length>1){let e=Math.round(f[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${f.length}, ${e}px); gap: 16px;\`
`}c&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function Ki(e,t=`standard`,n){let{sections:r}=e,i=[];for(let e of r){let n=e.originalRect,r=e.currentRect,a=Math.abs(n.x-r.x)>1||Math.abs(n.y-r.y)>1,o=Math.abs(n.width-r.width)>1||Math.abs(n.height-r.height)>1;if(!a&&!o){t===`forensic`&&i.push({section:e,posMoved:!1,sizeChanged:!1});continue}i.push({section:e,posMoved:a,sizeChanged:o})}if(i.length===0||t!==`forensic`&&i.every(e=>!e.posMoved&&!e.sizeChanged))return``;let a=`## Suggested Layout Changes

`,o=Bi({width:n?n.width:typeof window<`u`?window.innerWidth:0,height:n?n.height:typeof window<`u`?window.innerHeight:0});t!==`compact`&&(a+=Ui(o)),t===`forensic`&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${r.length}

`);let s=e=>r.map(t=>({label:t.label,selector:t.selector,rect:e===`original`?t.originalRect:t.currentRect}));a+=`**Changes:**
`;for(let{section:e,posMoved:n,sizeChanged:r}of i){let i=e.originalRect,c=e.currentRect;if(!n&&!r){a+=`- ${e.label} \u2014 unchanged at (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(t===`compact`){n&&r?a+=`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`:n?a+=`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)})
`:a+=`- Suggested: resize **${e.label}** to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(n&&r?a+=`- Suggested: move and resize **${e.label}**
`:n?a+=`- Suggested: move **${e.label}**
`:a+=`- Suggested: resize **${e.label}** from ${Math.round(i.width)}\xD7${Math.round(i.height)}px to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`,n){let e=ji(i,s(`original`)),n=ji(c,s(`current`)),l=r?{width:i.width,height:i.height}:void 0;a+=`  - Currently ${Ii(e,{x:i.x,y:i.y},l)}
`;let u=r?{width:c.width,height:c.height}:void 0,d=`at (${Math.round(c.x)}, ${Math.round(c.y)})`,f=u?`, ${Math.round(u.width)}\xD7${Math.round(u.height)}px`:``,p=Fi(n,{includeLeftRight:t===`detailed`||t===`forensic`});if(p.length>0){a+=`  - Suggested position ${d}${f}: ${p[0]}
`;for(let e=1;e<p.length;e++)a+=`    ${p[e]}
`}else a+=`  - Suggested position ${d}${f}
`;let m=Hi(c,o);m&&(a+=`  - CSS: ${m}
`)}let l=Wi(e.selector);if(l&&(a+=`  - ${l}
`),a+=`  - Selector: \`${e.selector}\`
`,t===`detailed`||t===`forensic`){let n=e.className?`${e.tagName}.${e.className.split(` `)[0]}`:e.tagName;n!==e.selector&&(a+=`  - Element: \`${n}\`
`),e.role&&(a+=`  - Role: \`${e.role}\`
`),t===`forensic`&&e.textSnippet&&(a+=`  - Text: "${e.textSnippet}"
`)}t===`forensic`&&(a+=`  - Original rect: \`{ x: ${Math.round(i.x)}, y: ${Math.round(i.y)}, w: ${Math.round(i.width)}, h: ${Math.round(i.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(c.x)}, y: ${Math.round(c.y)}, w: ${Math.round(c.width)}, h: ${Math.round(c.height)} }\`
`)}if(t!==`compact`){let e=zi(i.filter(e=>e.posMoved).map(e=>({label:e.section.label,originalRect:e.section.originalRect,currentRect:e.section.currentRect})));if(e.length>0){a+=`
### Layout Summary
`;for(let t of e)a+=`- ${t}
`}}if(t!==`compact`&&r.length>1){a+=`
### All Sections (current positions)
`;let e=[...r].sort((e,t)=>Math.abs(e.currentRect.y-t.currentRect.y)<20?e.currentRect.x-t.currentRect.x:e.currentRect.y-t.currentRect.y);for(let t of e){let e=t.currentRect,n=Math.abs(e.x-t.originalRect.x)>1||Math.abs(e.y-t.originalRect.y)>1||Math.abs(e.width-t.originalRect.width)>1||Math.abs(e.height-t.originalRect.height)>1;a+=`- ${t.label}: \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`${n?` ← suggested`:``}
`}}return a}var qi=`feedback-annotations-`,Ji=7;function Yi(e){return`${qi}${e}`}function Xi(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(Yi(e));if(!t)return[];let n=JSON.parse(t),r=Date.now()-Ji*24*60*60*1e3;return n.filter(e=>!e.timestamp||e.timestamp>r)}catch{return[]}}function Zi(e,t){if(!(typeof window>`u`))try{localStorage.setItem(Yi(e),JSON.stringify(t))}catch{}}function Qi(){let e=new Map;if(typeof window>`u`)return e;try{let t=Date.now()-Ji*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let r=localStorage.key(n);if(r?.startsWith(qi)){let n=r.slice(qi.length),i=localStorage.getItem(r);if(i){let r=JSON.parse(i).filter(e=>!e.timestamp||e.timestamp>t);r.length>0&&e.set(n,r)}}}}catch{}return e}function $i(e,t,n){Zi(e,t.map(e=>({...e,_syncedTo:n})))}var ea=`agentation-design-`;function ta(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(`${ea}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function na(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${ea}${e}`,JSON.stringify(t))}catch{}}function ra(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${ea}${e}`)}catch{}}var ia=`agentation-rearrange-`;function aa(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${ia}${e}`);return t?JSON.parse(t):null}catch{return null}}function oa(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${ia}${e}`,JSON.stringify(t))}catch{}}function sa(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${ia}${e}`)}catch{}}var ca=`agentation-wireframe-`;function la(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${ca}${e}`);return t?JSON.parse(t):null}catch{return null}}function ua(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${ca}${e}`,JSON.stringify(t))}catch{}}function da(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${ca}${e}`)}catch{}}var fa=`agentation-session-`;function pa(e){return`${fa}${e}`}function ma(e){if(typeof window>`u`)return null;try{return localStorage.getItem(pa(e))}catch{return null}}function ha(e,t){if(!(typeof window>`u`))try{localStorage.setItem(pa(e),t)}catch{}}function ga(e){if(!(typeof window>`u`))try{localStorage.removeItem(pa(e))}catch{}}var _a=`${fa}toolbar-hidden`;function va(){if(typeof window>`u`)return!1;try{return sessionStorage.getItem(_a)===`1`}catch{return!1}}function ya(e){if(!(typeof window>`u`))try{e?sessionStorage.setItem(_a,`1`):sessionStorage.removeItem(_a)}catch{}}async function ba(e,t){let n=await fetch(`${e}/sessions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:t})});if(!n.ok)throw Error(`Failed to create session: ${n.status}`);return n.json()}async function xa(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw Error(`Failed to get session: ${n.status}`);return n.json()}async function Sa(e,t,n){let r=await fetch(`${e}/sessions/${t}/annotations`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to sync annotation: ${r.status}`);return r.json()}async function Ca(e,t,n){let r=await fetch(`${e}/annotations/${t}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to update annotation: ${r.status}`);return r.json()}async function wa(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:`DELETE`});if(!n.ok)throw Error(`Failed to delete annotation: ${n.status}`)}var J={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Ta=new Set([`Component`,`PureComponent`,`Fragment`,`Suspense`,`Profiler`,`StrictMode`,`Routes`,`Route`,`Outlet`,`Root`,`ErrorBoundaryHandler`,`HotReload`,`Hot`]),Ea=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Da=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Oa(e){let t=e?.mode??`filtered`,n=Ta;if(e?.skipExact){let t=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...Ta,...t])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...Ea,...e.skipPatterns]:Ea,userPatterns:e?.userPatterns??Da,filter:e?.filter}}function ka(e){return e.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/([A-Z])([A-Z][a-z])/g,`$1-$2`).toLowerCase()}function Aa(e,t=10){let n=new Set,r=e,i=0;for(;r&&i<t;)r.className&&typeof r.className==`string`&&r.className.split(/\s+/).forEach(e=>{if(e.length>1){let t=e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``).toLowerCase();t.length>1&&n.add(t)}}),r=r.parentElement,i++;return n}function ja(e,t){let n=ka(e);for(let e of t){if(e===n)return!0;let t=n.split(`-`).filter(e=>e.length>2),r=e.split(`-`).filter(e=>e.length>2);for(let e of t)for(let t of r)if(e===t||e.includes(t)||t.includes(e))return!0}return!1}function Ma(e,t,n,r){if(n.filter)return n.filter(e,t);switch(n.mode){case`all`:return!0;case`filtered`:return!(n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e)));case`smart`:return n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e))?!1:!!(r&&ja(e,r)||n.userPatterns.some(t=>t.test(e)));default:return!0}}var Na=null,Pa=new WeakMap;function Fa(e){return Object.keys(e).some(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`)||e.startsWith(`__reactProps$`))}function Ia(){if(Na!==null)return Na;if(typeof document>`u`)return!1;if(document.body&&Fa(document.body))return Na=!0,!0;for(let e of[`#root`,`#app`,`#__next`,`[data-reactroot]`]){let t=document.querySelector(e);if(t&&Fa(t))return Na=!0,!0}if(document.body){for(let e of document.body.children)if(Fa(e))return Na=!0,!0}return Na=!1,!1}var La={map:Pa};function Ra(e){return Object.keys(e).find(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`))||null}function za(e){let t=Ra(e);return t?e[t]:null}function Ba(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function Va(e){let{tag:t,type:n,elementType:r}=e;if(t===J.HostComponent||t===J.HostText||t===J.HostHoistable||t===J.HostSingleton||t===J.Fragment||t===J.Mode||t===J.Profiler||t===J.DehydratedFragment||t===J.HostRoot||t===J.HostPortal||t===J.ScopeComponent||t===J.OffscreenComponent||t===J.LegacyHiddenComponent||t===J.CacheComponent||t===J.TracingMarkerComponent||t===J.Throw||t===J.ViewTransitionComponent||t===J.ActivityComponent)return null;if(t===J.ForwardRef){let e=r;if(e?.render){let t=Ba(e.render);if(t)return t}return e?.displayName?e.displayName:Ba(n)}if(t===J.MemoComponent||t===J.SimpleMemoComponent){let e=r;if(e?.type){let t=Ba(e.type);if(t)return t}return e?.displayName?e.displayName:Ba(n)}if(t===J.ContextProvider){let e=n;return e?._context?.displayName?`${e._context.displayName}.Provider`:null}if(t===J.ContextConsumer){let e=n;return e?.displayName?`${e.displayName}.Consumer`:null}if(t===J.LazyComponent){let e=r;return e?._status===1&&e._result?Ba(e._result):null}return t===J.SuspenseComponent||t===J.SuspenseListComponent?null:t===J.IncompleteClassComponent||t===J.IncompleteFunctionComponent||t===J.FunctionComponent||t===J.ClassComponent||t===J.IndeterminateComponent?Ba(n):null}function Ha(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function Ua(e,t){let n=Oa(t),r=n.mode===`all`;if(r){let t=La.map.get(e);if(t!==void 0)return t}if(!Ia()){let t={path:null,components:[]};return r&&La.map.set(e,t),t}let i=n.mode===`smart`?Aa(e):void 0,a=[];try{let t=za(e),r=0;for(;t&&r<n.maxDepth&&a.length<n.maxComponents;){let e=Va(t);e&&!Ha(e)&&Ma(e,r,n,i)&&a.push(e),t=t.return,r++}}catch{let t={path:null,components:[]};return r&&La.map.set(e,t),t}if(a.length===0){let t={path:null,components:[]};return r&&La.map.set(e,t),t}let o={path:a.slice().reverse().map(e=>`<${e}>`).join(` `),components:a};return r&&La.map.set(e,o),o}var Wa={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function Ga(e){if(!e||typeof e!=`object`)return null;let t=Object.keys(e),n=t.find(e=>e.startsWith(`__reactFiber$`));if(n)return e[n]||null;let r=t.find(e=>e.startsWith(`__reactInternalInstance$`));if(r)return e[r]||null;let i=t.find(t=>{if(!t.startsWith(`__react`))return!1;let n=e[t];return n&&typeof n==`object`&&`_debugSource`in n});return i&&e[i]||null}function Ka(e){if(!e.type||typeof e.type==`string`)return null;if(typeof e.type==`object`||typeof e.type==`function`){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function qa(e,t=50){let n=e,r=0;for(;n&&r<t;){if(n._debugSource)return{source:n._debugSource,componentName:Ka(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:Ka(n._debugOwner)};n=n.return,r++}return null}function Ja(e){let t=e,n=0;for(;t&&n<50;){let e=t;for(let n of[`_debugSource`,`__source`,`_source`,`debugSource`]){let r=e[n];if(r&&typeof r==`object`&&`fileName`in r)return{source:r,componentName:Ka(t)}}if(t.memoizedProps){let e=t.memoizedProps;if(e.__source&&typeof e.__source==`object`){let n=e.__source;if(n.fileName&&n.lineNumber)return{source:{fileName:n.fileName,lineNumber:n.lineNumber,columnNumber:n.columnNumber},componentName:Ka(t)}}}t=t.return,n++}return null}var Ya=new Map;function Xa(e){let t=e.tag,n=e.type,r=e.elementType;if(typeof n==`string`||n==null||typeof n==`function`&&n.prototype?.isReactComponent)return null;if((t===Wa.FunctionComponent||t===Wa.IndeterminateComponent)&&typeof n==`function`)return n;if(t===Wa.ForwardRef&&r){let e=r.render;if(typeof e==`function`)return e}if((t===Wa.MemoComponent||t===Wa.SimpleMemoComponent)&&r){let e=r.type;if(typeof e==`function`)return e}return typeof n==`function`?n:null}function Za(){let e=I.default,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&`H`in t)return{get:()=>t.H,set:e=>{t.H=e}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let e=n.ReactCurrentDispatcher;if(e&&`current`in e)return{get:()=>e.current,set:t=>{e.current=t}}}return null}function Qa(e){let t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],r=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,i=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let e of t){let t=e.trim();if(!t||n.some(e=>e.test(t)))continue;let a=r.exec(t)||i.exec(t);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function $a(e){let t=e;return t=t.replace(/[?#].*$/,``),t=t.replace(/^turbopack:\/\/\/\[project\]\//,``),t=t.replace(/^webpack-internal:\/\/\/\.\//,``),t=t.replace(/^webpack-internal:\/\/\//,``),t=t.replace(/^webpack:\/\/\/\.\//,``),t=t.replace(/^webpack:\/\/\//,``),t=t.replace(/^turbopack:\/\/\//,``),t=t.replace(/^https?:\/\/[^/]+\//,``),t=t.replace(/^file:\/\/\//,`/`),t=t.replace(/^\([^)]+\)\/\.\//,``),t=t.replace(/^\.\//,``),t}function eo(e){let t=Xa(e);if(!t)return null;if(Ya.has(t))return Ya.get(t);let n=Za();if(!n)return Ya.set(t,null),null;let r=n.get(),i=null;try{let r=new Proxy({},{get(){throw Error(`probe`)}});n.set(r);try{t({})}catch(t){if(t instanceof Error&&t.message===`probe`&&t.stack){let n=Qa(t.stack);n&&(i={fileName:$a(n.fileName),lineNumber:n.line,columnNumber:n.column,componentName:Ka(e)||void 0})}}}finally{n.set(r)}return Ya.set(t,i),i}function to(e,t=15){let n=e,r=0;for(;n&&r<t;){let e=eo(n);if(e)return e;n=n.return,r++}return null}function no(e){let t=Ga(e);if(!t)return{found:!1,reason:`no-fiber`,isReactApp:!1,isProduction:!1};let n=qa(t);if(n||=Ja(t),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let r=to(t);return r?{found:!0,source:r,isReactApp:!0,isProduction:!1}:{found:!1,reason:`no-debug-source`,isReactApp:!0,isProduction:!1}}function ro(e,t=`path`){let{fileName:n,lineNumber:r,columnNumber:i}=e,a=`${n}:${r}`;return i!==void 0&&(a+=`:${i}`),t===`vscode`?`vscode://file${n.startsWith(`/`)?``:`/`}${a}`:a}function Y(e,t=10){let n=e,r=0;for(;n&&r<t;){let e=no(n);if(e.found)return e;n=n.parentElement,r++}return no(e)}var io=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,ao={toolbar:`styles-module__toolbar___wNsdK`,markersLayer:`styles-module__markersLayer___-25j1`,fixedMarkersLayer:`styles-module__fixedMarkersLayer___ffyX6`,controlsContent:`styles-module__controlsContent___9GJWU`,disableTransitions:`styles-module__disableTransitions___EopxO`,toolbarContainer:`styles-module__toolbarContainer___dIhma`,entrance:`styles-module__entrance___sgHd8`,toolbarEnter:`styles-module__toolbarEnter___u8RRu`,hiding:`styles-module__hiding___1td44`,toolbarHide:`styles-module__toolbarHide___y8kaT`,collapsed:`styles-module__collapsed___Rydsn`,expanded:`styles-module__expanded___ofKPx`,serverConnected:`styles-module__serverConnected___Gfbou`,toggleContent:`styles-module__toggleContent___0yfyP`,visible:`styles-module__visible___KHwEW`,hidden:`styles-module__hidden___Ae8H4`,badge:`styles-module__badge___2XsgF`,fadeOut:`styles-module__fadeOut___6Ut6-`,badgeEnter:`styles-module__badgeEnter___mVQLj`,controlButton:`styles-module__controlButton___8Q0jc`,statusShowing:`styles-module__statusShowing___te6iu`,buttonBadge:`styles-module__buttonBadge___NeFWb`,mcpIndicator:`styles-module__mcpIndicator___zGJeL`,connected:`styles-module__connected___7c28g`,mcpIndicatorPulseConnected:`styles-module__mcpIndicatorPulseConnected___EDodZ`,connecting:`styles-module__connecting___uo-CW`,mcpIndicatorPulseConnecting:`styles-module__mcpIndicatorPulseConnecting___cCYte`,connectionIndicatorWrapper:`styles-module__connectionIndicatorWrapper___L-e-3`,connectionIndicator:`styles-module__connectionIndicator___afk9p`,connectionIndicatorVisible:`styles-module__connectionIndicatorVisible___C-i5B`,connectionIndicatorConnected:`styles-module__connectionIndicatorConnected___IY8pR`,connectionPulse:`styles-module__connectionPulse___-Zycw`,connectionIndicatorDisconnected:`styles-module__connectionIndicatorDisconnected___kmpaZ`,connectionIndicatorConnecting:`styles-module__connectionIndicatorConnecting___QmSLH`,buttonWrapper:`styles-module__buttonWrapper___rBcdv`,buttonTooltip:`styles-module__buttonTooltip___Burd9`,tooltipsInSession:`styles-module__tooltipsInSession___-0lHH`,sendButtonWrapper:`styles-module__sendButtonWrapper___UUxG6`,sendButtonVisible:`styles-module__sendButtonVisible___WPSQU`,shortcut:`styles-module__shortcut___lEAQk`,tooltipBelow:`styles-module__tooltipBelow___m6ats`,tooltipsHidden:`styles-module__tooltipsHidden___VtLJG`,tooltipVisible:`styles-module__tooltipVisible___0jcCv`,buttonWrapperAlignLeft:`styles-module__buttonWrapperAlignLeft___myzIp`,buttonWrapperAlignRight:`styles-module__buttonWrapperAlignRight___HCQFR`,divider:`styles-module__divider___c--s1`,overlay:`styles-module__overlay___Q1O9y`,hoverHighlight:`styles-module__hoverHighlight___ogakW`,enter:`styles-module__enter___WFIki`,hoverHighlightIn:`styles-module__hoverHighlightIn___6WYHY`,multiSelectOutline:`styles-module__multiSelectOutline___cSJ-m`,fadeIn:`styles-module__fadeIn___b9qmf`,exit:`styles-module__exit___fyOJ0`,singleSelectOutline:`styles-module__singleSelectOutline___QhX-O`,hoverTooltip:`styles-module__hoverTooltip___bvLk7`,hoverTooltipIn:`styles-module__hoverTooltipIn___FYGQx`,hoverReactPath:`styles-module__hoverReactPath___gx1IJ`,hoverElementName:`styles-module__hoverElementName___QMLMl`,marker:`styles-module__marker___6sQrs`,clearing:`styles-module__clearing___FQ--7`,markerIn:`styles-module__markerIn___5FaAP`,markerOut:`styles-module__markerOut___GU5jX`,pending:`styles-module__pending___2IHLC`,fixed:`styles-module__fixed___dBMHC`,multiSelect:`styles-module__multiSelect___YWiuz`,hovered:`styles-module__hovered___ZgXIy`,renumber:`styles-module__renumber___nCTxD`,renumberRoll:`styles-module__renumberRoll___Wgbq3`,markerTooltip:`styles-module__markerTooltip___aLJID`,tooltipIn:`styles-module__tooltipIn___0N31w`,markerQuote:`styles-module__markerQuote___FHmrz`,markerNote:`styles-module__markerNote___QkrrS`,markerHint:`styles-module__markerHint___2iF-6`,settingsPanel:`styles-module__settingsPanel___OxX3Y`,settingsHeader:`styles-module__settingsHeader___pwDY9`,settingsBrand:`styles-module__settingsBrand___0gJeM`,settingsBrandSlash:`styles-module__settingsBrandSlash___uTG18`,settingsVersion:`styles-module__settingsVersion___TUcFq`,settingsSection:`styles-module__settingsSection___m-YM2`,settingsLabel:`styles-module__settingsLabel___8UjfX`,cycleButton:`styles-module__cycleButton___FMKfw`,cycleDot:`styles-module__cycleDot___nPgLY`,dropdownButton:`styles-module__dropdownButton___16NPz`,toggleLabel:`styles-module__toggleLabel___Xm8Aa`,customCheckbox:`styles-module__customCheckbox___U39ax`,sliderLabel:`styles-module__sliderLabel___U8sPr`,slider:`styles-module__slider___GLdxp`,themeToggle:`styles-module__themeToggle___2rUjA`,settingsOption:`styles-module__settingsOption___UNa12`,selected:`styles-module__selected___OwRqP`,settingsPanelContainer:`styles-module__settingsPanelContainer___Xksv8`,settingsPage:`styles-module__settingsPage___6YfHH`,slideLeft:`styles-module__slideLeft___Ps01J`,automationsPage:`styles-module__automationsPage___uvCq6`,slideIn:`styles-module__slideIn___4-qXe`,settingsNavLink:`styles-module__settingsNavLink___wCzJt`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___ZWwhj`,mcpNavIndicator:`styles-module__mcpNavIndicator___cl9pO`,mcpPulse:`styles-module__mcpPulse___uNggr`,settingsBackButton:`styles-module__settingsBackButton___bIe2j`,automationHeader:`styles-module__automationHeader___InP0r`,automationDescription:`styles-module__automationDescription___NKlmo`,learnMoreLink:`styles-module__learnMoreLink___8xv-x`,autoSendRow:`styles-module__autoSendRow___UblX5`,autoSendLabel:`styles-module__autoSendLabel___icDc2`,active:`styles-module__active___-zoN6`,webhookUrlInput:`styles-module__webhookUrlInput___2375C`,settingsSectionExtraPadding:`styles-module__settingsSectionExtraPadding___jdhFV`,settingsSectionGrow:`styles-module__settingsSectionGrow___h-5HZ`,settingsRow:`styles-module__settingsRow___3sdhc`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___zA0Sp`,dropdownContainer:`styles-module__dropdownContainer___BVnxe`,settingsRowDisabled:`styles-module__settingsRowDisabled___EgS0V`,toggleSwitch:`styles-module__toggleSwitch___l4Ygm`,cycleButtonText:`styles-module__cycleButtonText___fD1LR`,cycleTextIn:`styles-module__cycleTextIn___Q6zJf`,cycleDots:`styles-module__cycleDots___LWuoQ`,dropdownMenu:`styles-module__dropdownMenu___k73ER`,scaleIn:`styles-module__scaleIn___c-r1K`,dropdownItem:`styles-module__dropdownItem___ylsLj`,settingsLabelMarker:`styles-module__settingsLabelMarker___ewdtV`,settingsOptions:`styles-module__settingsOptions___LyrBA`,sliderContainer:`styles-module__sliderContainer___ducXj`,sliderLabels:`styles-module__sliderLabels___FhLDB`,colorOptions:`styles-module__colorOptions___iHCNX`,colorOption:`styles-module__colorOption___IodiY`,colorOptionRing:`styles-module__colorOptionRing___U2xpo`,settingsToggle:`styles-module__settingsToggle___fBrFn`,settingsToggleMarginBottom:`styles-module__settingsToggleMarginBottom___MZUyF`,checked:`styles-module__checked___mnZLo`,toggleSlider:`styles-module__toggleSlider___wprIn`,disabled:`styles-module__disabled___332Jw`,mcpStatusDot:`styles-module__mcpStatusDot___ibgkc`,disconnected:`styles-module__disconnected___cHPxR`,mcpPulseError:`styles-module__mcpPulseError___fov9B`,drawCanvas:`styles-module__drawCanvas___7cG9U`,dragSelection:`styles-module__dragSelection___kZLq2`,dragCount:`styles-module__dragCount___KM90j`,highlightsContainer:`styles-module__highlightsContainer___-0xzG`,selectedElementHighlight:`styles-module__selectedElementHighlight___fyVlI`,scaleOut:`styles-module__scaleOut___Wctwz`,slideUp:`styles-module__slideUp___kgD36`,slideDown:`styles-module__slideDown___zcdje`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-page-toolbar-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-page-toolbar-css-styles`,document.head.appendChild(e)),e.textContent=io}var X=ao,oo=[{value:`compact`,label:`Compact`},{value:`standard`,label:`Standard`},{value:`detailed`,label:`Detailed`},{value:`forensic`,label:`Forensic`}];function so(e,t,n=`standard`){if(e.length===0)return``;let r=typeof window<`u`?`${window.innerWidth}\xD7${window.innerHeight}`:`unknown`,i=`## Page Feedback: ${t}
`;return n===`forensic`?(i+=`
**Environment:**
`,i+=`- Viewport: ${r}
`,typeof window<`u`&&(i+=`- URL: ${window.location.href}
`,i+=`- User Agent: ${navigator.userAgent}
`,i+=`- Timestamp: ${new Date().toISOString()}
`,i+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),i+=`
---
`):n!==`compact`&&(i+=`**Viewport:** ${r}
`),i+=`
`,e.forEach((e,t)=>{n===`compact`?(i+=`${t+1}. **${e.element}**${e.sourceFile?` (${e.sourceFile})`:``}: ${e.comment}`,e.selectedText&&(i+=` (re: "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}")`),i+=`
`):n===`forensic`?(i+=`### ${t+1}. ${e.element}
`,e.isMultiSelect&&e.fullPath&&(i+=`*Forensic data shown for first element of selection*
`),e.fullPath&&(i+=`**Full DOM Path:** ${e.fullPath}
`),e.cssClasses&&(i+=`**CSS Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** x:${Math.round(e.boundingBox.x)}, y:${Math.round(e.boundingBox.y)} (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`),i+=`**Annotation at:** ${e.x.toFixed(1)}% from left, ${Math.round(e.y)}px from top
`,e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),e.computedStyles&&(i+=`**Computed Styles:** ${e.computedStyles}
`),e.accessibility&&(i+=`**Accessibility:** ${e.accessibility}
`),e.nearbyElements&&(i+=`**Nearby Elements:** ${e.nearbyElements}
`),e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),i+=`**Feedback:** ${e.comment}

`):(i+=`### ${t+1}. ${e.element}
`,i+=`**Location:** ${e.elementPath}
`,e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),n===`detailed`&&(e.cssClasses&&(i+=`**Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** ${Math.round(e.boundingBox.x)}px, ${Math.round(e.boundingBox.y)}px (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`)),e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),n===`detailed`&&e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),i+=`**Feedback:** ${e.comment}

`)}),i.trim()}var co=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,lo={marker:`styles-module__marker___9CKF7`,enter:`styles-module__enter___8kI3q`,exit:`styles-module__exit___KBdR3`,clearing:`styles-module__clearing___8rM7K`,markerIn:`styles-module__markerIn___x4G8D`,markerOut:`styles-module__markerOut___6VhQN`,pending:`styles-module__pending___BiY-U`,fixed:`styles-module__fixed___aKrQO`,multiSelect:`styles-module__multiSelect___CPfTC`,hovered:`styles-module__hovered___-mg2N`,renumber:`styles-module__renumber___16lvD`,renumberRoll:`styles-module__renumberRoll___akV9B`,markerTooltip:`styles-module__markerTooltip___-VUm-`,tooltipIn:`styles-module__tooltipIn___aJslQ`,markerQuote:`styles-module__markerQuote___tQake`,markerNote:`styles-module__markerNote___Rh4eI`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-marker-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-marker-styles`,document.head.appendChild(e)),e.textContent=co}var uo=lo;function fo({annotation:e,globalIndex:t,layerIndex:n,layerSize:r,isExiting:i,isClearing:a,isAnimated:o,isHovered:s,isDeleting:c,isEditingAny:l,renumberFrom:u,markerClickBehavior:d,tooltipStyle:f,onHoverEnter:p,onHoverLeave:m,onClick:h,onContextMenu:g}){let _=(s||c)&&!l,v=_&&d===`delete`,y=e.isMultiSelect,b=y?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,x=i?uo.exit:a?uo.clearing:o?``:uo.enter,S=i?`${(r-1-n)*20}ms`:`${n*20}ms`;return(0,N.jsxs)(`div`,{className:`${uo.marker} ${y?uo.multiSelect:``} ${x} ${v?uo.hovered:``}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:v?void 0:b,animationDelay:S},onMouseEnter:()=>p(e),onMouseLeave:m,onClick:t=>{t.stopPropagation(),i||h(e)},onContextMenu:g?t=>{d===`delete`&&(t.preventDefault(),t.stopPropagation(),i||g(e))}:void 0,children:[_?v?(0,N.jsx)(Ut,{size:y?18:16}):(0,N.jsx)(qt,{size:16}):(0,N.jsx)(`span`,{className:u!==null&&t>=u?uo.renumber:void 0,children:t+1}),s&&!l&&(0,N.jsxs)(`div`,{className:`${uo.markerTooltip} ${uo.enter}`,style:f,children:[(0,N.jsxs)(`span`,{className:uo.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}"`]}),(0,N.jsx)(`span`,{className:uo.markerNote,children:e.comment})]})]})}function po({x:e,y:t,isMultiSelect:n,isExiting:r}){return(0,N.jsx)(`div`,{className:`${uo.marker} ${uo.pending} ${n?uo.multiSelect:``} ${r?uo.exit:uo.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?`var(--agentation-color-green)`:`var(--agentation-color-accent)`},children:(0,N.jsx)(Pt,{size:12})})}function mo({annotation:e,fixed:t}){let n=e.isMultiSelect;return(0,N.jsx)(`div`,{className:`${uo.marker} ${t?uo.fixed:``} ${uo.hovered} ${n?uo.multiSelect:``} ${uo.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:(0,N.jsx)(Ut,{size:n?12:10})})}var ho=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,go={switchContainer:`styles-module__switchContainer___Ka-AB`,switchInput:`styles-module__switchInput___kYDSD`,switchThumb:`styles-module__switchThumb___4sCPH`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-switch-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-switch-styles`,document.head.appendChild(e)),e.textContent=ho}var _o=go,vo=({className:e=``,...t})=>(0,N.jsxs)(`div`,{className:`${_o.switchContainer} ${e}`,children:[(0,N.jsx)(`input`,{className:_o.switchInput,type:`checkbox`,...t}),(0,N.jsx)(`div`,{className:_o.switchThumb})]}),yo=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,bo={checkboxContainer:`styles-module__checkboxContainer___joqZk`,checkboxInput:`styles-module__checkboxInput___ECzzO`,checkboxCheck:`styles-module__checkboxCheck___fUXpr`,checkboxCheckPath:`styles-module__checkboxCheckPath___cDyh8`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-styles`,document.head.appendChild(e)),e.textContent=yo}var xo=bo,So=({className:e=``,...t})=>(0,N.jsxs)(`div`,{className:`${xo.checkboxContainer} ${e}`,children:[(0,N.jsx)(`input`,{className:xo.checkboxInput,type:`checkbox`,...t}),(0,N.jsx)(`svg`,{className:xo.checkboxCheck,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,N.jsx)(`path`,{className:xo.checkboxCheckPath,d:`M3.94 7L6.13 9.19L10.5 4.81`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),Co=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,wo={container:`styles-module__container___w8eAF`,label:`styles-module__label___J5mxE`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-field-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-field-styles`,document.head.appendChild(e)),e.textContent=Co}var To=wo,Eo=({className:e=``,label:t,tooltip:n,checked:r,onChange:i,...a})=>{let o=(0,I.useId)();return(0,N.jsxs)(`div`,{className:`${To.container} ${e}`,...a,children:[(0,N.jsx)(So,{id:o,onChange:i,checked:r}),(0,N.jsx)(`label`,{className:To.label,htmlFor:o,children:t}),n&&(0,N.jsx)(mn,{content:n})]})},Do=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,Oo={settingsPanel:`styles-module__settingsPanel___qNkn-`,settingsHeader:`styles-module__settingsHeader___Fn1DP`,settingsBrand:`styles-module__settingsBrand___OoKlM`,settingsBrandSlash:`styles-module__settingsBrandSlash___Q-AU9`,settingsVersion:`styles-module__settingsVersion___rXmL9`,settingsSection:`styles-module__settingsSection___n5V-4`,settingsLabel:`styles-module__settingsLabel___VCVOQ`,cycleButton:`styles-module__cycleButton___XMBx3`,cycleDot:`styles-module__cycleDot___zgSXY`,dropdownButton:`styles-module__dropdownButton___mKHe8`,sliderLabel:`styles-module__sliderLabel___6K5v1`,slider:`styles-module__slider___v5z-c`,themeToggle:`styles-module__themeToggle___3imlT`,enter:`styles-module__enter___wginS`,exit:`styles-module__exit___A4iJc`,settingsOption:`styles-module__settingsOption___JoyH-`,selected:`styles-module__selected___k1-Vq`,settingsPanelContainer:`styles-module__settingsPanelContainer___5it-H`,settingsPage:`styles-module__settingsPage___BMn-3`,slideLeft:`styles-module__slideLeft___qUvW4`,automationsPage:`styles-module__automationsPage___N7By0`,slideIn:`styles-module__slideIn___uXDSu`,themeIconWrapper:`styles-module__themeIconWrapper___pyaYa`,themeIcon:`styles-module__themeIcon___w7lAm`,themeIconIn:`styles-module__themeIconIn___qUWMV`,settingsSectionGrow:`styles-module__settingsSectionGrow___eZTRw`,settingsRow:`styles-module__settingsRow___y-tDE`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___uLpGb`,settingsRowDisabled:`styles-module__settingsRowDisabled___ydl3Q`,cycleButtonText:`styles-module__cycleButtonText___mbbnD`,cycleTextIn:`styles-module__cycleTextIn___VBNTi`,cycleDots:`styles-module__cycleDots___ehp6i`,active:`styles-module__active___dpAhM`,colorOptions:`styles-module__colorOptions___pbxZx`,colorOption:`styles-module__colorOption___Co955`,settingsNavLink:`styles-module__settingsNavLink___uYIwM`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___XBUzC`,settingsBackButton:`styles-module__settingsBackButton___fflll`,automationHeader:`styles-module__automationHeader___Avra9`,automationDescription:`styles-module__automationDescription___vFTmJ`,learnMoreLink:`styles-module__learnMoreLink___cG7OI`,autoSendContainer:`styles-module__autoSendContainer___VpkXk`,autoSendLabel:`styles-module__autoSendLabel___ngNdC`,disabled:`styles-module__disabled___9AZYS`,mcpStatusDot:`styles-module__mcpStatusDot___8AMxP`,connecting:`styles-module__connecting___QEO1r`,mcpPulse:`styles-module__mcpPulse___5Q3Jj`,connected:`styles-module__connected___WyFkx`,disconnected:`styles-module__disconnected___mvmvQ`,mcpPulseError:`styles-module__mcpPulseError___VHxhx`,mcpNavIndicator:`styles-module__mcpNavIndicator___auBHI`,webhookUrlInput:`styles-module__webhookUrlInput___WDDDC`,checkboxField:`styles-module__checkboxField___ZrSqv`,divider:`styles-module__divider___h6Yux`,scaleIn:`styles-module__scaleIn___QpQ8E`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-settings-panel-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-settings-panel-styles`,document.head.appendChild(e)),e.textContent=Do}var Z=Oo;function ko({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:r,isDevMode:i,connectionStatus:a,endpoint:o,isVisible:s,toolbarNearBottom:c,settingsPage:l,onSettingsPageChange:u,onHideToolbar:d}){return(0,N.jsx)(`div`,{className:`${Z.settingsPanel} ${s?Z.enter:Z.exit}`,style:c?{bottom:`auto`,top:`calc(100% + 0.5rem)`}:void 0,"data-agentation-settings-panel":!0,children:(0,N.jsxs)(`div`,{className:Z.settingsPanelContainer,children:[(0,N.jsxs)(`div`,{className:`${Z.settingsPage} ${l===`automations`?Z.slideLeft:``}`,children:[(0,N.jsxs)(`div`,{className:Z.settingsHeader,children:[(0,N.jsx)(`a`,{className:Z.settingsBrand,href:`https://agentation.com`,target:`_blank`,rel:`noopener noreferrer`,children:(0,N.jsx)(`svg`,{width:`72`,height:`16`,viewBox:`0 0 676 151`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,N.jsx)(`path`,{d:`M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z`,fill:`currentColor`})})}),(0,N.jsxs)(`p`,{className:Z.settingsVersion,children:[`v`,`3.0.2`]}),(0,N.jsx)(`button`,{className:Z.themeToggle,onClick:r,title:n?`Switch to light mode`:`Switch to dark mode`,children:(0,N.jsx)(`span`,{className:Z.themeIconWrapper,children:(0,N.jsx)(`span`,{className:Z.themeIcon,children:n?(0,N.jsx)(Gt,{size:20}):(0,N.jsx)(Kt,{size:20})},n?`sun`:`moon`)})})]}),(0,N.jsx)(`div`,{className:Z.divider}),(0,N.jsxs)(`div`,{className:Z.settingsSection,children:[(0,N.jsxs)(`div`,{className:Z.settingsRow,children:[(0,N.jsxs)(`div`,{className:Z.settingsLabel,children:[`Output Detail`,(0,N.jsx)(mn,{content:`Controls how much detail is included in the copied output`})]}),(0,N.jsxs)(`button`,{className:Z.cycleButton,onClick:()=>{t({outputDetail:oo[(oo.findIndex(t=>t.value===e.outputDetail)+1)%oo.length].value})},children:[(0,N.jsx)(`span`,{className:Z.cycleButtonText,children:oo.find(t=>t.value===e.outputDetail)?.label},e.outputDetail),(0,N.jsx)(`span`,{className:Z.cycleDots,children:oo.map(t=>(0,N.jsx)(`span`,{className:`${Z.cycleDot} ${e.outputDetail===t.value?Z.active:``}`},t.value))})]})]}),(0,N.jsxs)(`div`,{className:`${Z.settingsRow} ${Z.settingsRowMarginTop} ${i?``:Z.settingsRowDisabled}`,children:[(0,N.jsxs)(`div`,{className:Z.settingsLabel,children:[`React Components`,(0,N.jsx)(mn,{content:i?`Include React component names in annotations`:`Disabled — production builds minify component names, making detection unreliable. Use in development mode.`})]}),(0,N.jsx)(vo,{checked:i&&e.reactEnabled,onChange:e=>t({reactEnabled:e.target.checked}),disabled:!i})]}),(0,N.jsxs)(`div`,{className:`${Z.settingsRow} ${Z.settingsRowMarginTop}`,children:[(0,N.jsxs)(`div`,{className:Z.settingsLabel,children:[`Hide Until Restart`,(0,N.jsx)(mn,{content:`Hides the toolbar until you open a new tab`})]}),(0,N.jsx)(vo,{checked:!1,onChange:e=>{e.target.checked&&d()}})]})]}),(0,N.jsx)(`div`,{className:Z.divider}),(0,N.jsxs)(`div`,{className:Z.settingsSection,children:[(0,N.jsx)(`div`,{className:`${Z.settingsLabel} ${Z.settingsLabelMarker}`,children:`Marker Color`}),(0,N.jsx)(`div`,{className:Z.colorOptions,children:Po.map(n=>(0,N.jsx)(`button`,{className:`${Z.colorOption} ${e.annotationColorId===n.id?Z.selected:``}`,style:{"--swatch":n.srgb,"--swatch-p3":n.p3},onClick:()=>t({annotationColorId:n.id}),title:n.label,type:`button`},n.id))})]}),(0,N.jsx)(`div`,{className:Z.divider}),(0,N.jsxs)(`div`,{className:Z.settingsSection,children:[(0,N.jsx)(Eo,{className:`checkbox-field`,label:`Clear on copy/send`,checked:e.autoClearAfterCopy,onChange:e=>t({autoClearAfterCopy:e.target.checked}),tooltip:`Automatically clear annotations after copying`}),(0,N.jsx)(Eo,{className:Z.checkboxField,label:`Block page interactions`,checked:e.blockInteractions,onChange:e=>t({blockInteractions:e.target.checked})})]}),(0,N.jsx)(`div`,{className:Z.divider}),(0,N.jsxs)(`button`,{className:Z.settingsNavLink,onClick:()=>u(`automations`),children:[(0,N.jsx)(`span`,{children:`Manage MCP & Webhooks`}),(0,N.jsxs)(`span`,{className:Z.settingsNavLinkRight,children:[o&&a!==`disconnected`&&(0,N.jsx)(`span`,{className:`${Z.mcpNavIndicator} ${Z[a]}`}),(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,N.jsx)(`path`,{d:`M7.5 12.5L12 8L7.5 3.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]}),(0,N.jsxs)(`div`,{className:`${Z.settingsPage} ${Z.automationsPage} ${l===`automations`?Z.slideIn:``}`,children:[(0,N.jsxs)(`button`,{className:Z.settingsBackButton,onClick:()=>u(`main`),children:[(0,N.jsx)(Yt,{size:16}),(0,N.jsx)(`span`,{children:`Manage MCP & Webhooks`})]}),(0,N.jsx)(`div`,{className:Z.divider}),(0,N.jsxs)(`div`,{className:Z.settingsSection,children:[(0,N.jsxs)(`div`,{className:Z.settingsRow,children:[(0,N.jsxs)(`span`,{className:Z.automationHeader,children:[`MCP Connection`,(0,N.jsx)(mn,{content:`Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.`})]}),o&&(0,N.jsx)(`div`,{className:`${Z.mcpStatusDot} ${Z[a]}`,title:a===`connected`?`Connected`:a===`connecting`?`Connecting...`:`Disconnected`})]}),(0,N.jsxs)(`p`,{className:Z.automationDescription,style:{paddingBottom:6},children:[`MCP connection allows agents to receive and act on annotations.`,` `,(0,N.jsx)(`a`,{href:`https://agentation.dev/mcp`,target:`_blank`,rel:`noopener noreferrer`,className:Z.learnMoreLink,children:`Learn more`})]})]}),(0,N.jsx)(`div`,{className:Z.divider}),(0,N.jsxs)(`div`,{className:`${Z.settingsSection} ${Z.settingsSectionGrow}`,children:[(0,N.jsxs)(`div`,{className:Z.settingsRow,children:[(0,N.jsxs)(`span`,{className:Z.automationHeader,children:[`Webhooks`,(0,N.jsx)(mn,{content:`Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.`})]}),(0,N.jsxs)(`div`,{className:Z.autoSendContainer,children:[(0,N.jsx)(`label`,{htmlFor:`agentation-auto-send`,className:`${Z.autoSendLabel} ${e.webhooksEnabled?Z.active:``} ${e.webhookUrl?``:Z.disabled}`,children:`Auto-Send`}),(0,N.jsx)(vo,{id:`agentation-auto-send`,checked:e.webhooksEnabled,onChange:e=>t({webhooksEnabled:e.target.checked}),disabled:!e.webhookUrl})]})]}),(0,N.jsx)(`p`,{className:Z.automationDescription,children:`The webhook URL will receive live annotation changes and annotation data.`}),(0,N.jsx)(`textarea`,{className:Z.webhookUrlInput,placeholder:`Webhook URL`,value:e.webhookUrl,onKeyDown:e=>e.stopPropagation(),onChange:e=>t({webhookUrl:e.target.value})})]})]})]})})}function Ao(e,t=`filtered`){let{name:n,path:r}=Kr(e);if(t===`off`)return{name:n,elementName:n,path:r,reactComponents:null};let i=Ua(e,{mode:t});return{name:i.path?`${i.path} ${n}`:n,elementName:n,path:r,reactComponents:i.path}}var jo=!1,Mo={outputDetail:`standard`,autoClearAfterCopy:!1,annotationColorId:`blue`,blockInteractions:!0,reactEnabled:!0,markerClickBehavior:`edit`,webhookUrl:``,webhooksEnabled:!0},No=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}},Po=[{id:`indigo`,label:`Indigo`,srgb:`#6155F5`,p3:`color(display-p3 0.38 0.33 0.96)`},{id:`blue`,label:`Blue`,srgb:`#0088FF`,p3:`color(display-p3 0.00 0.53 1.00)`},{id:`cyan`,label:`Cyan`,srgb:`#00C3D0`,p3:`color(display-p3 0.00 0.76 0.82)`},{id:`green`,label:`Green`,srgb:`#34C759`,p3:`color(display-p3 0.20 0.78 0.35)`},{id:`yellow`,label:`Yellow`,srgb:`#FFCC00`,p3:`color(display-p3 1.00 0.80 0.00)`},{id:`orange`,label:`Orange`,srgb:`#FF8D28`,p3:`color(display-p3 1.00 0.55 0.16)`},{id:`red`,label:`Red`,srgb:`#FF383C`,p3:`color(display-p3 1.00 0.22 0.24)`}];(()=>{if(typeof document>`u`||document.getElementById(`agentation-color-tokens`))return;let e=document.createElement(`style`);e.id=`agentation-color-tokens`,e.textContent=[...Po.map(e=>`
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${e.id}"] {
          --agentation-color-accent: ${e.p3};
        }
      }
    `),`:root {
      ${Po.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Po.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
      }
    }`].join(``),document.head.appendChild(e)})();function Fo(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n?.shadowRoot;){let r=n.shadowRoot.elementFromPoint(e,t);if(!r||r===n)break;n=r}return n}function Io(e){let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function Lo(e){return e.status!==`resolved`&&e.status!==`dismissed`}function Ro(e){let t=no(e),n=t.found?t:Y(e);if(n.found&&n.source)return ro(n.source,`path`)}function zo({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:r,onAnnotationDelete:i,onAnnotationUpdate:a,onAnnotationsClear:o,onCopy:s,onSubmit:c,copyToClipboard:l=!0,endpoint:u,sessionId:d,onSessionCreated:f,webhookUrl:p,className:m}={}){let[h,g]=(0,I.useState)(!1),[_,v]=(0,I.useState)([]),[y,b]=(0,I.useState)(!0),[x,S]=(0,I.useState)(()=>va()),[ee,C]=(0,I.useState)(!1),te=(0,I.useRef)(null);(0,I.useEffect)(()=>{let e=e=>{let t=te.current;t&&t.contains(e.target)&&e.stopPropagation()},t=[`mousedown`,`click`,`pointerdown`];return t.forEach(t=>document.body.addEventListener(t,e)),()=>{t.forEach(t=>document.body.removeEventListener(t,e))}},[]);let[w,ne]=(0,I.useState)(!1),[T,re]=(0,I.useState)(!1),[E,ie]=(0,I.useState)(null),[ae,oe]=(0,I.useState)({x:0,y:0}),[D,O]=(0,I.useState)(null),[se,ce]=(0,I.useState)(!1),[le,ue]=(0,I.useState)(`idle`),[de,k]=(0,I.useState)(!1),[fe,pe]=(0,I.useState)(!1),[me,he]=(0,I.useState)(null),[A,ge]=(0,I.useState)(null),[_e,ve]=(0,I.useState)([]),[ye,be]=(0,I.useState)(null),[xe,Se]=(0,I.useState)(null),[j,Ce]=(0,I.useState)(null),[we,Te]=(0,I.useState)(null),[Ee,De]=(0,I.useState)([]),[Oe,ke]=(0,I.useState)(0),[Ae,je]=(0,I.useState)(!1),[M,Me]=(0,I.useState)(!1),[Ne,Pe]=(0,I.useState)(!1),[Fe,Ie]=(0,I.useState)(!1),[Le,Re]=(0,I.useState)(!1),[ze,Be]=(0,I.useState)(`main`),[Ve,He]=(0,I.useState)(!1),[P,Ue]=(0,I.useState)(!1),[We,Ge]=(0,I.useState)(!1),[F,Ke]=(0,I.useState)([]),[qe,Je]=(0,I.useState)(null),Ye=(0,I.useRef)(!1),[Xe,Ze]=(0,I.useState)(!1),[Qe,$e]=(0,I.useState)(!1),[et,tt]=(0,I.useState)(1),[nt,rt]=(0,I.useState)(`new-page`),[it,at]=(0,I.useState)(``),[ot,st]=(0,I.useState)(!1),[L,ct]=(0,I.useState)(null),lt=(0,I.useRef)(!1),ut=(0,I.useRef)({rearrange:null,placements:[]}),dt=(0,I.useRef)({rearrange:null,placements:[]}),[ft,pt]=(0,I.useState)(0),[mt,ht]=(0,I.useState)(0),[gt,_t]=(0,I.useState)(0),[vt,yt]=(0,I.useState)(0),bt=(0,I.useRef)(new Set),xt=(0,I.useRef)(new Set),St=(0,I.useRef)(null),Ct=(0,I.useRef)(),wt=P&&h&&!We&&Xe;(0,I.useEffect)(()=>{if(wt){$e(!1);let e=rn(()=>{$e(!0)});return()=>cancelAnimationFrame(e)}else $e(!1)},[wt]);let Tt=(0,I.useRef)(new Map),Et=(0,I.useRef)(new Map),Ot=(0,I.useRef)(),[kt,At]=(0,I.useState)(!1),[jt,Mt]=(0,I.useState)([]),Nt=(0,I.useRef)(jt);Nt.current=jt;let[Pt,It]=(0,I.useState)(null),Ut=(0,I.useRef)(null);(0,I.useRef)(!1),(0,I.useRef)([]),(0,I.useRef)(0),(0,I.useRef)(null),(0,I.useRef)(null),(0,I.useRef)(1);let[Gt,Kt]=(0,I.useState)(!1),qt=(0,I.useRef)(null),[Jt,Yt]=(0,I.useState)([]),Zt=(0,I.useRef)({cmd:!1,shift:!1}),Qt=()=>{He(!0)},$t=()=>{He(!1)},en=()=>{Gt||(qt.current=z(()=>Kt(!0),850))},tn=()=>{qt.current&&=(clearTimeout(qt.current),null),Kt(!1),$t()};(0,I.useEffect)(()=>()=>{qt.current&&clearTimeout(qt.current)},[]);let[R,an]=(0,I.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`feedback-toolbar-settings`)??``);return{...Mo,...e,annotationColorId:Po.find(t=>t.id===e.annotationColorId)?e.annotationColorId:Mo.annotationColorId}}catch{return Mo}}),[cn,un]=(0,I.useState)(!0),[dn,fn]=(0,I.useState)(!1),pn=()=>{te.current?.classList.add(X.disableTransitions),un(e=>!e),rn(()=>{te.current?.classList.remove(X.disableTransitions)})},[hn,gn]=(0,I.useState)(d??null),V=(0,I.useRef)(!1),[H,_n]=(0,I.useState)(u?`connecting`:`disconnected`),[vn,yn]=(0,I.useState)(null),[bn,xn]=(0,I.useState)(!1),[Sn,Cn]=(0,I.useState)(null),wn=(0,I.useRef)(!1),[Tn,En]=(0,I.useState)(new Set),[Dn,On]=(0,I.useState)(new Set),[kn,An]=(0,I.useState)(!1),[jn,Mn]=(0,I.useState)(!1),[Nn,Pn]=(0,I.useState)(!1),Fn=(0,I.useRef)(null),In=(0,I.useRef)(null),Ln=(0,I.useRef)(null),Rn=(0,I.useRef)(null),zn=(0,I.useRef)(!1),Bn=(0,I.useRef)(0),Vn=(0,I.useRef)(null),Hn=(0,I.useRef)(null),Un=(0,I.useRef)(null),Wn=(0,I.useRef)(null),Gn=(0,I.useRef)(null),U=typeof window<`u`?window.location.pathname:`/`;(0,I.useEffect)(()=>{if(Fe)Re(!0);else{He(!1),Be(`main`);let e=z(()=>Re(!1),0);return()=>clearTimeout(e)}},[Fe]);let Kn=h&&y&&!P;(0,I.useEffect)(()=>{if(Kn){re(!1),ne(!0),En(new Set);let e=z(()=>{En(e=>{let t=new Set(e);return _.forEach(e=>t.add(e.id)),t})},350);return()=>clearTimeout(e)}else if(w){re(!0);let e=z(()=>{ne(!1),re(!1)},250);return()=>clearTimeout(e)}},[Kn]),(0,I.useEffect)(()=>{Me(!0),ke(window.scrollY),v(Xi(U).filter(Lo)),jo||(fn(!0),jo=!0,z(()=>fn(!1),750));try{let e=localStorage.getItem(`feedback-toolbar-theme`);e!==null&&un(e===`dark`)}catch{}try{let e=localStorage.getItem(`feedback-toolbar-position`);if(e){let t=JSON.parse(e);typeof t.x==`number`&&typeof t.y==`number`&&yn(t)}}catch{}},[U]),(0,I.useEffect)(()=>{M&&localStorage.setItem(`feedback-toolbar-settings`,JSON.stringify(R))},[R,M]),(0,I.useEffect)(()=>{M&&localStorage.setItem(`feedback-toolbar-theme`,cn?`dark`:`light`)},[cn,M]);let qn=(0,I.useRef)(!1);(0,I.useEffect)(()=>{let e=qn.current;qn.current=bn,e&&!bn&&vn&&M&&localStorage.setItem(`feedback-toolbar-position`,JSON.stringify(vn))},[bn,vn,M]),(0,I.useEffect)(()=>{!u||!M||V.current||(V.current=!0,_n(`connecting`),(async()=>{try{let e=ma(U),t=d||e,n=!1;if(t)try{let e=await xa(u,t);gn(e.id),_n(`connected`),ha(U,e.id),n=!0;let r=Xi(U),i=new Set(e.annotations.map(e=>e.id)),a=r.filter(e=>!i.has(e.id));if(a.length>0){let t=`${typeof window<`u`?window.location.origin:``}${U}`,n=(await Promise.allSettled(a.map(n=>Sa(u,e.id,{...n,sessionId:e.id,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),a[t])),r=[...e.annotations,...n];v(r.filter(Lo)),$i(U,r.filter(Lo),e.id)}else v(e.annotations.filter(Lo)),$i(U,e.annotations.filter(Lo),e.id)}catch(e){console.warn(`[Agentation] Could not join session, creating new:`,e),ga(U)}if(!n){let e=await ba(u,typeof window<`u`?window.location.href:`/`);gn(e.id),_n(`connected`),ha(U,e.id),f?.(e.id);let t=Qi(),n=typeof window<`u`?window.location.origin:``,r=[];for(let[i,a]of t){let t=a.filter(e=>!e._syncedTo);if(t.length===0)continue;let o=`${n}${i}`,s=i===U;r.push((async()=>{try{let n=s?e:await ba(u,o),r=(await Promise.allSettled(t.map(e=>Sa(u,n.id,{...e,sessionId:n.id,url:o})))).map((e,n)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),t[n])).filter(Lo);if($i(i,r,n.id),s){let e=new Set(t.map(e=>e.id));v(t=>{let n=t.filter(t=>!e.has(t.id));return[...r,...n]})}}catch(e){console.warn(`[Agentation] Failed to sync annotations for ${i}:`,e)}})())}await Promise.allSettled(r)}}catch(e){_n(`disconnected`),console.warn(`[Agentation] Failed to initialize session, using local storage:`,e)}})())},[u,d,M,f,U]),(0,I.useEffect)(()=>{if(!u||!M)return;let e=async()=>{try{(await fetch(`${u}/health`)).ok?_n(`connected`):_n(`disconnected`)}catch{_n(`disconnected`)}};e();let t=nn(e,1e4);return()=>clearInterval(t)},[u,M]),(0,I.useEffect)(()=>{if(!u||!M||!hn)return;let e=new EventSource(`${u}/sessions/${hn}/events`),t=[`resolved`,`dismissed`],n=e=>{try{let n=JSON.parse(e.data);if(t.includes(n.payload?.status)){let e=n.payload.id,t=n.payload.kind;if(t===`placement`){for(let[t,n]of Tt.current)if(n===e){Tt.current.delete(t),Ke(e=>e.filter(e=>e.id!==t));break}}else if(t===`rearrange`){for(let[t,n]of Et.current)if(n===e){Et.current.delete(t),ct(e=>{if(!e)return null;let n=e.sections.filter(e=>e.id!==t);return n.length===0?null:{...e,sections:n}});break}}else On(t=>new Set(t).add(e)),z(()=>{v(t=>t.filter(t=>t.id!==e)),On(t=>{let n=new Set(t);return n.delete(e),n})},150)}}catch{}};return e.addEventListener(`annotation.updated`,n),()=>{e.removeEventListener(`annotation.updated`,n),e.close()}},[u,M,hn]),(0,I.useEffect)(()=>{if(!u||!M)return;let e=Hn.current===`disconnected`,t=H===`connected`;Hn.current=H,e&&t&&(async()=>{try{let e=Xi(U);if(e.length===0)return;let t=`${typeof window<`u`?window.location.origin:``}${U}`,n=hn,r=[];if(n)try{r=(await xa(u,n)).annotations}catch{n=null}n||(n=(await ba(u,t)).id,gn(n),ha(U,n));let i=new Set(r.map(e=>e.id)),a=e.filter(e=>!i.has(e.id));if(a.length>0){let e=(await Promise.allSettled(a.map(e=>Sa(u,n,{...e,sessionId:n,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation on reconnect:`,e.reason),a[t])),i=[...r,...e].filter(Lo);v(i),$i(U,i,n)}}catch(e){console.warn(`[Agentation] Failed to sync on reconnect:`,e)}})()},[H,u,M,hn,U]);let Jn=(0,I.useCallback)(()=>{ee||(C(!0),Ie(!1),g(!1),z(()=>{ya(!0),S(!0),C(!1)},400))},[ee]);(0,I.useEffect)(()=>{if(!n||!M||!e||e.length===0||_.length>0)return;let r=[];return r.push(z(()=>{g(!0)},t-200)),e.forEach((e,n)=>{let i=t+n*300;r.push(z(()=>{let t=document.querySelector(e.selector);if(!t)return;let r=t.getBoundingClientRect(),{name:i,path:a}=Kr(t),o={id:`demo-${Date.now()}-${n}`,x:(r.left+r.width/2)/window.innerWidth*100,y:r.top+r.height/2+window.scrollY,comment:e.comment,element:i,elementPath:a,timestamp:Date.now(),selectedText:e.selectedText,boundingBox:{x:r.left,y:r.top+window.scrollY,width:r.width,height:r.height},nearbyText:qr(t),cssClasses:Yr(t)};v(e=>[...e,o])},i))}),()=>{r.forEach(clearTimeout)}},[n,M,e,t]),(0,I.useEffect)(()=>{let e=()=>{ke(window.scrollY),je(!0),Gn.current&&clearTimeout(Gn.current),Gn.current=z(()=>{je(!1)},150)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),Gn.current&&clearTimeout(Gn.current)}},[]),(0,I.useEffect)(()=>{M&&_.length>0?hn?$i(U,_,hn):Zi(U,_):M&&_.length===0&&localStorage.removeItem(Yi(U))},[_,U,M,hn]),(0,I.useEffect)(()=>{if(M&&!Ye.current){Ye.current=!0;let e=ta(U);e.length>0&&Ke(e)}},[M,U]),(0,I.useEffect)(()=>{M&&Ye.current&&!Xe&&(F.length>0?na(U,F):ra(U))},[F,U,M,Xe]),(0,I.useEffect)(()=>{if(M&&!lt.current){lt.current=!0;let e=aa(U);e&&ct({...e,sections:e.sections.map(e=>({...e,currentRect:e.currentRect??{...e.originalRect}}))})}},[M,U]),(0,I.useEffect)(()=>{M&&lt.current&&!Xe&&(L?oa(U,L):sa(U))},[L,U,M,Xe]);let Yn=(0,I.useRef)(!1);(0,I.useEffect)(()=>{if(M&&!Yn.current){Yn.current=!0;let e=la(U);e&&(dt.current={rearrange:e.rearrange,placements:e.placements||[]},e.purpose&&at(e.purpose))}},[M,U]),(0,I.useEffect)(()=>{if(!M||!Yn.current)return;let e=dt.current;Xe?(L?.sections?.length??0)>0||F.length>0||it?ua(U,{rearrange:L,placements:F,purpose:it}):da(U):(e.rearrange?.sections?.length??0)>0||e.placements.length>0||it?ua(U,{rearrange:e.rearrange,placements:e.placements,purpose:it}):da(U)},[L,F,it,Xe,U,M]),(0,I.useEffect)(()=>{P&&!L&&ct({sections:[],originalOrder:[],detectedAt:Date.now()})},[P,L]),(0,I.useEffect)(()=>{if(!u||!hn)return;let e=Tt.current,t=new Set(F.map(e=>e.id));for(let t of F){if(e.has(t.id))continue;e.set(t.id,``);let n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:U;Sa(u,hn,{id:t.id,x:t.x/window.innerWidth*100,y:t.y,comment:`Place ${t.type} at (${Math.round(t.x)}, ${Math.round(t.y)}), ${t.width}\xD7${t.height}px${t.text?` \u2014 "${t.text}"`:``}`,element:`[design:${t.type}]`,elementPath:`[placement]`,timestamp:t.timestamp,url:n,intent:`change`,severity:`important`,kind:`placement`,placement:{componentType:t.type,width:t.width,height:t.height,scrollY:t.scrollY,text:t.text}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync placement annotation:`,n),e.delete(t.id)})}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&wa(u,r).catch(()=>{}))},[F,u,hn,U]),(0,I.useEffect)(()=>{if(!(!u||!hn))return Ot.current&&clearTimeout(Ot.current),Ot.current=z(()=>{let e=Et.current;if(!L||L.sections.length===0){for(let[,t]of e)t&&wa(u,t).catch(()=>{});e.clear();return}let t=new Set(L.sections.map(e=>e.id)),n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:U;for(let t of L.sections){let r=t.originalRect,i=t.currentRect;if(!(Math.abs(r.x-i.x)>1||Math.abs(r.y-i.y)>1||Math.abs(r.width-i.width)>1||Math.abs(r.height-i.height)>1)){let n=e.get(t.id);n&&(e.delete(t.id),wa(u,n).catch(()=>{}));continue}let a=e.get(t.id);a?Ca(u,a,{comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`}).catch(e=>{console.warn(`[Agentation] Failed to update rearrange annotation:`,e)}):(e.set(t.id,``),Sa(u,hn,{id:t.id,x:i.x/window.innerWidth*100,y:i.y,comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`,element:t.selector,elementPath:`[rearrange]`,timestamp:Date.now(),url:n,intent:`change`,severity:`important`,kind:`rearrange`,rearrange:{selector:t.selector,label:t.label,tagName:t.tagName,originalRect:r,currentRect:i}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync rearrange annotation:`,n),e.delete(t.id)}))}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&wa(u,r).catch(()=>{}))},300),()=>{Ot.current&&clearTimeout(Ot.current)}},[L,u,hn,U]);let Xn=(0,I.useRef)(new Map);(0,I.useLayoutEffect)(()=>{let e=L?.sections??[],t=new Set;if((P||We)&&h)for(let n of e){t.add(n.id);try{let e=document.querySelector(n.selector);if(!e)continue;if(!Xn.current.has(n.id)){let t={transform:e.style.transform,transformOrigin:e.style.transformOrigin,opacity:e.style.opacity,position:e.style.position,zIndex:e.style.zIndex,display:e.style.display},r=[],i=e.parentElement;for(;i&&i!==document.body;){let e=getComputedStyle(i);(e.overflow!==`visible`||e.overflowX!==`visible`||e.overflowY!==`visible`)&&(r.push({el:i,overflow:i.style.overflow}),i.style.overflow=`visible`),i=i.parentElement}getComputedStyle(e).display===`inline`&&(e.style.display=`inline-block`),Xn.current.set(n.id,{el:e,origStyles:t,ancestors:r}),e.style.transformOrigin=`top left`,e.style.zIndex=`9999`}}catch{}}for(let[e,n]of Xn.current)if(!t.has(e)){let{el:t,origStyles:r,ancestors:i}=n;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=r.transform,t.style.transformOrigin=r.transformOrigin,t.style.opacity=r.opacity,t.style.position=r.position,t.style.zIndex=r.zIndex,Xn.current.delete(e),z(()=>{t.style.transition=``,t.style.display=r.display;for(let e of i)e.el.style.overflow=e.overflow},450)}},[L,P,We,h]),(0,I.useEffect)(()=>()=>{for(let[,e]of Xn.current){let{el:t,origStyles:n,ancestors:r}=e;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=n.transform,t.style.transformOrigin=n.transformOrigin,t.style.opacity=n.opacity,t.style.position=n.position,t.style.zIndex=n.zIndex,z(()=>{t.style.transition=``,t.style.display=n.display;for(let e of r)e.el.style.overflow=e.overflow},450)}Xn.current.clear()},[]);let Zn=(0,I.useCallback)(()=>{Ge(!0),Ue(!1),Je(null),clearTimeout(Ct.current),Ct.current=z(()=>{Ge(!1)},300)},[]),Qn=(0,I.useCallback)(()=>{P&&(Ge(!0),Ue(!1),Je(null),clearTimeout(Ct.current),Ct.current=z(()=>{Ge(!1)},300)),g(!1)},[P]),$n=(0,I.useCallback)(()=>{Ne||(on(),Pe(!0))},[Ne]),er=(0,I.useCallback)(()=>{Ne&&(sn(),Pe(!1))},[Ne]),tr=(0,I.useCallback)(()=>{Ne?er():$n()},[Ne,$n,er]),nr=(0,I.useCallback)(()=>{if(Jt.length===0)return;let e=Jt[0],t=e.element,n=Jt.length>1,r=Jt.map(e=>e.element.getBoundingClientRect());if(n){let e={left:Math.min(...r.map(e=>e.left)),top:Math.min(...r.map(e=>e.top)),right:Math.max(...r.map(e=>e.right)),bottom:Math.max(...r.map(e=>e.bottom))},n=Jt.slice(0,5).map(e=>e.name).join(`, `),i=Jt.length>5?` +${Jt.length-5} more`:``,a=r.map(e=>({x:e.left,y:e.top+window.scrollY,width:e.width,height:e.height})),o=Jt[Jt.length-1].element,s=r[r.length-1],c=s.left+s.width/2,l=s.top+s.height/2,u=Io(o);O({x:c/window.innerWidth*100,y:u?l:l+window.scrollY,clientY:l,element:`${Jt.length} elements: ${n}${i}`,elementPath:`multi-select`,boundingBox:{x:e.left,y:e.top+window.scrollY,width:e.right-e.left,height:e.bottom-e.top},isMultiSelect:!0,isFixed:u,elementBoundingBoxes:a,multiSelectElements:Jt.map(e=>e.element),targetElement:o,fullPath:oi(t),accessibility:ai(t),computedStyles:ri(t),computedStylesObj:ti(t),nearbyElements:Jr(t),cssClasses:Yr(t),nearbyText:qr(t),sourceFile:Ro(t)})}else{let n=r[0],i=Io(t);O({x:n.left/window.innerWidth*100,y:i?n.top:n.top+window.scrollY,clientY:n.top,element:e.name,elementPath:e.path,boundingBox:{x:n.left,y:i?n.top:n.top+window.scrollY,width:n.width,height:n.height},isFixed:i,fullPath:oi(t),accessibility:ai(t),computedStyles:ri(t),computedStylesObj:ti(t),nearbyElements:Jr(t),cssClasses:Yr(t),nearbyText:qr(t),reactComponents:e.reactComponents,sourceFile:Ro(t)})}Yt([]),ie(null)},[Jt]);(0,I.useEffect)(()=>{h||(O(null),Ce(null),Te(null),De([]),ie(null),Ie(!1),Yt([]),Zt.current={cmd:!1,shift:!1},Ne&&er())},[h,Ne,er]),(0,I.useEffect)(()=>()=>{sn()},[]),(0,I.useEffect)(()=>{if(!h)return;let e=`p.span.h1.h2.h3.h4.h5.h6.li.td.th.label.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.u.s.a.time.address.cite.q.abbr.dfn.mark.small.sub.sup.[contenteditable]`.split(`.`).join(`, `),t=`:not([data-agentation-root]):not([data-agentation-root] *)`,n=document.createElement(`style`);return n.id=`feedback-cursor-styles`,n.textContent=`
      body ${t} {
        cursor: crosshair !important;
      }

      body :is(${e})${t} {
        cursor: text !important;
      }
    `,document.head.appendChild(n),()=>{let e=document.getElementById(`feedback-cursor-styles`);e&&e.remove()}},[h]),(0,I.useEffect)(()=>{if(Pt!==null&&h)return document.documentElement.setAttribute(`data-drawing-hover`,``),()=>document.documentElement.removeAttribute(`data-drawing-hover`)},[Pt,h]),(0,I.useEffect)(()=>{if(!h||D||kt||P)return;let e=e=>{if(Wr(e.composedPath()[0]||e.target,`[data-feedback-toolbar]`)){ie(null);return}let t=Fo(e.clientX,e.clientY);if(!t||Wr(t,`[data-feedback-toolbar]`)){ie(null);return}let{name:n,elementName:r,path:i,reactComponents:a}=Ao(t,`off`);ie({element:n,elementName:r,elementPath:i,rect:t.getBoundingClientRect(),reactComponents:a}),oe({x:e.clientX,y:e.clientY})};return document.addEventListener(`mousemove`,e),()=>document.removeEventListener(`mousemove`,e)},[h,D,kt,P,`off`,jt]);let rr=(0,I.useCallback)(e=>{if(Ce(e),he(null),ge(null),ve([]),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=Fo(n.x+n.width/2,n.y+n.height/2-window.scrollY);e&&t.push(e)}De(t),Te(null)}else if(e.boundingBox){let t=e.boundingBox,n=Fo(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;Te(r<.5||i<.5?null:n)}else Te(null);De([])}else Te(null),De([])},[]);(0,I.useEffect)(()=>{if(!h||kt||P)return;let e=e=>{if(zn.current){zn.current=!1;return}let t=e.composedPath()[0]||e.target;if(Wr(t,`[data-feedback-toolbar]`)||Wr(t,`[data-annotation-popup]`)||Wr(t,`[data-annotation-marker]`))return;if(e.metaKey&&e.shiftKey&&!D&&!j){e.preventDefault(),e.stopPropagation();let t=Fo(e.clientX,e.clientY);if(!t)return;let n=t.getBoundingClientRect(),{name:r,path:i,reactComponents:a}=Ao(t,`off`),o=Jt.findIndex(e=>e.element===t);Yt(o>=0?e=>e.filter((e,t)=>t!==o):e=>[...e,{element:t,rect:n,name:r,path:i,reactComponents:a??void 0}]);return}let n=Wr(t,`button, a, input, select, textarea, [role='button'], [onclick]`);if(R.blockInteractions&&n&&(e.preventDefault(),e.stopPropagation()),D){if(n&&!R.blockInteractions)return;e.preventDefault(),Un.current?.shake();return}if(j){if(n&&!R.blockInteractions)return;e.preventDefault(),Wn.current?.shake();return}e.preventDefault();let r=Fo(e.clientX,e.clientY);if(!r)return;let{name:i,path:a,reactComponents:o}=Ao(r,`off`),s=r.getBoundingClientRect(),c=e.clientX/window.innerWidth*100,l=Io(r),u=l?e.clientY:e.clientY+window.scrollY,d=window.getSelection(),f;d&&d.toString().trim().length>0&&(f=d.toString().trim().slice(0,500));let p=ti(r),m=ri(r);O({x:c,y:u,clientY:e.clientY,element:i,elementPath:a,selectedText:f,boundingBox:{x:s.left,y:l?s.top:s.top+window.scrollY,width:s.width,height:s.height},nearbyText:qr(r),cssClasses:Yr(r),isFixed:l,fullPath:oi(r),accessibility:ai(r),computedStyles:m,computedStylesObj:p,nearbyElements:Jr(r),reactComponents:o??void 0,sourceFile:Ro(r),targetElement:r}),ie(null)};return document.addEventListener(`click`,e,!0),()=>document.removeEventListener(`click`,e,!0)},[h,kt,P,D,j,R.blockInteractions,`off`,Jt]),(0,I.useEffect)(()=>{if(!h)return;let e=e=>{e.key===`Meta`&&(Zt.current.cmd=!0),e.key===`Shift`&&(Zt.current.shift=!0)},t=e=>{let t=Zt.current.cmd&&Zt.current.shift;e.key===`Meta`&&(Zt.current.cmd=!1),e.key===`Shift`&&(Zt.current.shift=!1);let n=Zt.current.cmd&&Zt.current.shift;t&&!n&&Jt.length>0&&nr()},n=()=>{Zt.current={cmd:!1,shift:!1},Yt([])};return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),window.addEventListener(`blur`,n),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t),window.removeEventListener(`blur`,n)}},[h,Jt,nr]),(0,I.useEffect)(()=>{if(!h||D||kt||P)return;let e=e=>{let t=e.composedPath()[0]||e.target;Wr(t,`[data-feedback-toolbar]`)||Wr(t,`[data-annotation-marker]`)||Wr(t,`[data-annotation-popup]`)||new Set(`P.SPAN.H1.H2.H3.H4.H5.H6.LI.TD.TH.LABEL.BLOCKQUOTE.FIGCAPTION.CAPTION.LEGEND.DT.DD.PRE.CODE.EM.STRONG.B.I.U.S.A.TIME.ADDRESS.CITE.Q.ABBR.DFN.MARK.SMALL.SUB.SUP`.split(`.`)).has(t.tagName)||t.isContentEditable||(e.preventDefault(),Fn.current={x:e.clientX,y:e.clientY})};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[h,D,kt,P]),(0,I.useEffect)(()=>{if(!h||D)return;let e=e=>{if(!Fn.current)return;let t=e.clientX-Fn.current.x,n=e.clientY-Fn.current.y,r=t*t+n*n;if(!Nn&&r>=64&&(In.current=Fn.current,Pn(!0),e.preventDefault()),(Nn||r>=64)&&In.current){if(Ln.current){let t=Math.min(In.current.x,e.clientX),n=Math.min(In.current.y,e.clientY),r=Math.abs(e.clientX-In.current.x),i=Math.abs(e.clientY-In.current.y);Ln.current.style.transform=`translate(${t}px, ${n}px)`,Ln.current.style.width=`${r}px`,Ln.current.style.height=`${i}px`}let t=Date.now();if(t-Bn.current<50)return;Bn.current=t;let n=In.current.x,r=In.current.y,i=Math.min(n,e.clientX),a=Math.min(r,e.clientY),o=Math.max(n,e.clientX),s=Math.max(r,e.clientY),c=(i+o)/2,l=(a+s)/2,u=new Set,d=[[i,a],[o,a],[i,s],[o,s],[c,l],[c,a],[c,s],[i,l],[o,l]];for(let[e,t]of d){let n=document.elementsFromPoint(e,t);for(let e of n)e instanceof HTMLElement&&u.add(e)}let f=document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav`);for(let e of f)if(e instanceof HTMLElement){let t=e.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,c=n>=i&&n<=o&&r>=a&&r<=s,l=Math.min(t.right,o)-Math.max(t.left,i),d=Math.min(t.bottom,s)-Math.max(t.top,a),f=l>0&&d>0?l*d:0,p=t.width*t.height,m=p>0?f/p:0;(c||m>.5)&&u.add(e)}let p=[],m=new Set([`BUTTON`,`A`,`INPUT`,`IMG`,`P`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`LI`,`LABEL`,`TD`,`TH`,`SECTION`,`ARTICLE`,`ASIDE`,`NAV`]);for(let e of u){if(Wr(e,`[data-feedback-toolbar]`)||Wr(e,`[data-annotation-marker]`))continue;let t=e.getBoundingClientRect();if(!(t.width>window.innerWidth*.8&&t.height>window.innerHeight*.5)&&!(t.width<10||t.height<10)&&t.left<o&&t.right>i&&t.top<s&&t.bottom>a){let n=e.tagName,r=m.has(n);if(!r&&(n===`DIV`||n===`SPAN`)){let t=e.textContent&&e.textContent.trim().length>0,n=e.onclick!==null||e.getAttribute(`role`)===`button`||e.getAttribute(`role`)===`link`||e.classList.contains(`clickable`)||e.hasAttribute(`data-clickable`);(t||n)&&!e.querySelector(`p, h1, h2, h3, h4, h5, h6, button, a`)&&(r=!0)}if(r){let e=!1;for(let n of p)if(n.left<=t.left&&n.right>=t.right&&n.top<=t.top&&n.bottom>=t.bottom){e=!0;break}e||p.push(t)}}}if(Rn.current){let e=Rn.current;for(;e.children.length>p.length;)e.removeChild(e.lastChild);p.forEach((t,n)=>{let r=e.children[n];r||(r=document.createElement(`div`),r.className=X.selectedElementHighlight,e.appendChild(r)),r.style.transform=`translate(${t.left}px, ${t.top}px)`,r.style.width=`${t.width}px`,r.style.height=`${t.height}px`})}}};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[h,D,Nn,8]),(0,I.useEffect)(()=>{if(!h)return;let e=e=>{let t=Nn,n=In.current;if(Nn&&n){zn.current=!0;let t=Math.min(n.x,e.clientX),r=Math.min(n.y,e.clientY),i=Math.max(n.x,e.clientX),a=Math.max(n.y,e.clientY),o=[];document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th`).forEach(e=>{if(!(e instanceof HTMLElement)||Wr(e,`[data-feedback-toolbar]`)||Wr(e,`[data-annotation-marker]`))return;let n=e.getBoundingClientRect();n.width>window.innerWidth*.8&&n.height>window.innerHeight*.5||n.width<10||n.height<10||n.left<i&&n.right>t&&n.top<a&&n.bottom>r&&o.push({element:e,rect:n})});let s=o.filter(({element:e})=>!o.some(({element:t})=>t!==e&&e.contains(t))),c=e.clientX/window.innerWidth*100,l=e.clientY+window.scrollY;if(s.length>0){let t=s.reduce((e,{rect:t})=>({left:Math.min(e.left,t.left),top:Math.min(e.top,t.top),right:Math.max(e.right,t.right),bottom:Math.max(e.bottom,t.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),n=s.slice(0,5).map(({element:e})=>Kr(e).name).join(`, `),r=s.length>5?` +${s.length-5} more`:``,i=s[0].element,a=ti(i),o=ri(i);O({x:c,y:l,clientY:e.clientY,element:`${s.length} elements: ${n}${r}`,elementPath:`multi-select`,boundingBox:{x:t.left,y:t.top+window.scrollY,width:t.right-t.left,height:t.bottom-t.top},isMultiSelect:!0,fullPath:oi(i),accessibility:ai(i),computedStyles:o,computedStylesObj:a,nearbyElements:Jr(i),cssClasses:Yr(i),nearbyText:qr(i),sourceFile:Ro(i)})}else{let n=Math.abs(i-t),o=Math.abs(a-r);n>20&&o>20&&O({x:c,y:l,clientY:e.clientY,element:`Area selection`,elementPath:`region at (${Math.round(t)}, ${Math.round(r)})`,boundingBox:{x:t,y:r+window.scrollY,width:n,height:o},isMultiSelect:!0})}ie(null)}else t&&(zn.current=!0);Fn.current=null,In.current=null,Pn(!1),Rn.current&&(Rn.current.innerHTML=``)};return document.addEventListener(`mouseup`,e),()=>document.removeEventListener(`mouseup`,e)},[h,Nn]);let ir=(0,I.useCallback)(async(e,t,n)=>{let r=R.webhookUrl||p;if(!r||!R.webhooksEnabled&&!n)return!1;try{return(await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({event:e,timestamp:Date.now(),url:typeof window<`u`?window.location.href:void 0,...t})})).ok}catch(e){return console.warn(`[Agentation] Webhook failed:`,e),!1}},[p,R.webhookUrl,R.webhooksEnabled]),ar=(0,I.useCallback)(e=>{if(!D)return;let t={id:Date.now().toString(),x:D.x,y:D.y,comment:e,element:D.element,elementPath:D.elementPath,timestamp:Date.now(),selectedText:D.selectedText,boundingBox:D.boundingBox,nearbyText:D.nearbyText,cssClasses:D.cssClasses,isMultiSelect:D.isMultiSelect,isFixed:D.isFixed,fullPath:D.fullPath,accessibility:D.accessibility,computedStyles:D.computedStyles,nearbyElements:D.nearbyElements,reactComponents:D.reactComponents,sourceFile:D.sourceFile,elementBoundingBoxes:D.elementBoundingBoxes,...u&&hn?{sessionId:hn,url:typeof window<`u`?window.location.href:void 0,status:`pending`}:{}};v(e=>[...e,t]),Vn.current=t.id,z(()=>{Vn.current=null},300),z(()=>{En(e=>new Set(e).add(t.id))},250),r?.(t),ir(`annotation.add`,{annotation:t}),An(!0),z(()=>{O(null),An(!1)},150),window.getSelection()?.removeAllRanges(),u&&hn&&Sa(u,hn,t).then(e=>{e.id!==t.id&&(v(n=>n.map(n=>n.id===t.id?{...n,id:e.id}:n)),En(n=>{let r=new Set(n);return r.delete(t.id),r.add(e.id),r}))}).catch(e=>{console.warn(`[Agentation] Failed to sync annotation:`,e)})},[D,r,ir,u,hn]),or=(0,I.useCallback)(()=>{An(!0),z(()=>{O(null),An(!1)},150)},[]),sr=(0,I.useCallback)(e=>{let t=_.findIndex(t=>t.id===e),n=_[t];j?.id===e&&(Mn(!0),z(()=>{Ce(null),Te(null),De([]),Mn(!1)},150)),be(e),On(t=>new Set(t).add(e)),n&&(i?.(n),ir(`annotation.delete`,{annotation:n})),u&&wa(u,e).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)}),z(()=>{v(t=>t.filter(t=>t.id!==e)),On(t=>{let n=new Set(t);return n.delete(e),n}),be(null),t<_.length-1&&(Se(t),z(()=>Se(null),200))},150)},[_,j,i,ir,u]),cr=(0,I.useCallback)(e=>{if(!e){he(null),ge(null),ve([]);return}if(he(e.id),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=n.x+n.width/2,r=n.y+n.height/2-window.scrollY,i=document.elementsFromPoint(e,r).find(e=>!e.closest(`[data-annotation-marker]`)&&!e.closest(`[data-agentation-root]`));i&&t.push(i)}ve(t),ge(null)}else if(e.boundingBox){let t=e.boundingBox,n=Fo(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;ge(r<.5||i<.5?null:n)}else ge(null);ve([])}else ge(null),ve([])},[]),lr=(0,I.useCallback)(e=>{if(!j)return;let t={...j,comment:e};v(e=>e.map(e=>e.id===j.id?t:e)),a?.(t),ir(`annotation.update`,{annotation:t}),u&&Ca(u,j.id,{comment:e}).catch(e=>{console.warn(`[Agentation] Failed to update annotation on server:`,e)}),Mn(!0),z(()=>{Ce(null),Te(null),De([]),Mn(!1)},150)},[j,a,ir,u]),ur=(0,I.useCallback)(()=>{Mn(!0),z(()=>{Ce(null),Te(null),De([]),Mn(!1)},150)},[]),dr=(0,I.useCallback)(()=>{let e=_.length,t=F.length>0||!!L;if(e===0&&jt.length===0&&!t)return;if(o?.(_),ir(`annotations.clear`,{annotations:_}),u){Promise.all(_.map(e=>wa(u,e.id).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)})));for(let[,e]of Tt.current)e&&wa(u,e).catch(()=>{});Tt.current.clear();for(let[,e]of Et.current)e&&wa(u,e).catch(()=>{});Et.current.clear()}pe(!0),k(!0),Mt([]);let n=Ut.current;if(n){let e=n.getContext(`2d`);e&&e.clearRect(0,0,n.width,n.height)}(F.length>0||L)&&(_t(e=>e+1),yt(e=>e+1),z(()=>{Ke([]),ct(null)},200)),Xe&&Ze(!1),it&&at(``),dt.current={rearrange:null,placements:[]},da(U),z(()=>{v([]),En(new Set),localStorage.removeItem(Yi(U)),pe(!1)},e*30+200),z(()=>k(!1),1500)},[U,_,jt,F,L,Xe,it,o,ir,u]),fr=(0,I.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:U,t=P&&Xe,n;if(t){if(F.length===0&&!L&&!it)return;n=``}else{if(n=so(_,e,R.outputDetail),!n&&jt.length===0&&F.length===0&&!L)return;n||=`## Page Feedback: ${e}
`}if(!t&&jt.length>0){let e=new Set;for(let t of _)t.drawingIndex!=null&&e.add(t.drawingIndex);let t=Ut.current;t&&(t.style.visibility=`hidden`);let r=[],i=window.scrollY;for(let t=0;t<jt.length;t++){if(e.has(t))continue;let n=jt[t];if(n.points.length<2)continue;let a=n.fixed?n.points:n.points.map(e=>({x:e.x,y:e.y-i})),o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e of a)o=Math.min(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.x),l=Math.max(l,e.y);let u=c-o,d=l-s,f=Math.hypot(u,d),p=a[0],m=a[a.length-1],h=Math.hypot(m.x-p.x,m.y-p.y),g,_=h<f*.35,v=u/Math.max(d,1);if(_&&f>20){let e=Math.max(u,d)*.15,t=0;for(let n of a){let r=n.x-o<e,i=c-n.x<e,a=n.y-s<e,u=l-n.y<e;(r||i)&&(a||u)&&t++}g=t>a.length*.15?`box`:`circle`}else g=v>3&&d<40?`underline`:h>f*.5?`arrow`:`drawing`;let y=Math.min(10,a.length),b=Math.max(1,Math.floor(a.length/y)),x=new Set,S=[],ee=[p];for(let e=b;e<a.length-1;e+=b)ee.push(a[e]);ee.push(m);for(let e of ee){let t=Fo(e.x,e.y);if(!t||x.has(t)||Wr(t,`[data-feedback-toolbar]`))continue;x.add(t);let{name:n}=Kr(t);S.includes(n)||S.push(n)}let C=`${Math.round(o)},${Math.round(s)} \u2192 ${Math.round(c)},${Math.round(l)}`,te;te=(g===`circle`||g===`box`)&&S.length>0?`${g===`box`?`Boxed`:`Circled`} **${S[0]}**${S.length>1?` (and ${S.slice(1).join(`, `)})`:``} (region: ${C})`:g===`underline`&&S.length>0?`Underlined **${S[0]}** (${C})`:g===`arrow`&&S.length>=2?`Arrow from **${S[0]}** to **${S[S.length-1]}** (${Math.round(p.x)},${Math.round(p.y)} \u2192 ${Math.round(m.x)},${Math.round(m.y)})`:S.length>0?`${g===`arrow`?`Arrow`:`Drawing`} near **${S.join(`**, **`)}** (region: ${C})`:`Drawing at ${C}`,r.push(te)}t&&(t.style.visibility=``),r.length>0&&(n+=`
**Drawings:**
`,r.forEach((e,t)=>{n+=`${t+1}. ${e}
`}))}if((F.length>0||t&&it)&&(n+=`
`+Gi(F,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Xe,wireframePurpose:it||void 0},R.outputDetail)),L){let e=Ki(L,R.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(n+=`
`+e)}if(l)try{await navigator.clipboard.writeText(n)}catch{}s?.(n),ce(!0),z(()=>ce(!1),2e3),R.autoClearAfterCopy&&z(()=>dr(),500)},[_,jt,F,L,Xe,P,nt,it,U,R.outputDetail,`off`,R.autoClearAfterCopy,dr,l,s]),pr=(0,I.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:U,t=so(_,e,R.outputDetail);if(!t&&F.length===0&&!L)return;if(t||=`## Page Feedback: ${e}
`,F.length>0&&(t+=`
`+Gi(F,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Xe,wireframePurpose:it||void 0},R.outputDetail)),L){let e=Ki(L,R.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(t+=`
`+e)}c&&c(t,_),ue(`sending`),await new Promise(e=>z(e,150));let n=await ir(`submit`,{output:t,annotations:_},!0);ue(n?`sent`:`failed`),z(()=>ue(`idle`),2500),n&&R.autoClearAfterCopy&&z(()=>dr(),500)},[c,ir,_,F,L,Xe,nt,U,R.outputDetail,`off`,R.autoClearAfterCopy,dr]);(0,I.useEffect)(()=>{if(!Sn)return;let e=e=>{let t=e.clientX-Sn.x,n=e.clientY-Sn.y,r=Math.sqrt(t*t+n*n);if(!bn&&r>10&&xn(!0),bn||r>10){let e=Sn.toolbarX+t,r=Sn.toolbarY+n,i=20-(337-(h?H===`connected`?297:257:44)),a=window.innerWidth-20-337;e=Math.max(i,Math.min(a,e)),r=Math.max(20,Math.min(window.innerHeight-44-20,r)),yn({x:e,y:r})}},t=()=>{bn&&(wn.current=!0),xn(!1),Cn(null)};return document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)}},[Sn,bn,h,H]);let mr=(0,I.useCallback)(e=>{if(e.target.closest(`button`)||e.target.closest(`[data-agentation-settings-panel]`))return;let t=e.currentTarget.parentElement;if(!t)return;let n=t.getBoundingClientRect(),r=vn?.x??n.left,i=vn?.y??n.top;Cn({x:e.clientX,y:e.clientY,toolbarX:r,toolbarY:i})},[vn]);if((0,I.useEffect)(()=>{if(!vn)return;let e=()=>{let e=vn.x,t=vn.y,n=20-(337-(h?H===`connected`?297:257:44)),r=window.innerWidth-20-337;e=Math.max(n,Math.min(r,e)),t=Math.max(20,Math.min(window.innerHeight-44-20,t)),(e!==vn.x||t!==vn.y)&&yn({x:e,y:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[vn,h,H]),(0,I.useEffect)(()=>{let e=e=>{let t=e.target,n=t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable;if(e.key===`Escape`){if(P){qe?Je(null):Zn();return}if(kt){At(!1);return}if(Jt.length>0){Yt([]);return}D||h&&(Qt(),g(!1))}if((e.metaKey||e.ctrlKey)&&e.shiftKey&&(e.key===`f`||e.key===`F`)){e.preventDefault(),Qt(),h?Qn():g(!0);return}if(!(n||e.metaKey||e.ctrlKey)&&((e.key===`p`||e.key===`P`)&&(e.preventDefault(),Qt(),tr()),(e.key===`l`||e.key===`L`)&&(e.preventDefault(),Qt(),kt&&At(!1),Fe&&Ie(!1),D&&or(),P?Zn():Ue(!0)),(e.key===`h`||e.key===`H`)&&_.length>0&&(e.preventDefault(),Qt(),b(e=>!e)),(e.key===`c`||e.key===`C`)&&(_.length>0||F.length>0||L)&&(e.preventDefault(),Qt(),fr()),(e.key===`x`||e.key===`X`)&&(_.length>0||F.length>0||L)&&(e.preventDefault(),Qt(),dr(),F.length>0&&Ke([]),L&&ct(null)),e.key===`s`||e.key===`S`)){let t=No(R.webhookUrl)||No(p||``);_.length>0&&t&&le===`idle`&&(e.preventDefault(),Qt(),pr())}};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[h,kt,P,qe,F,L,D,_.length,R.webhookUrl,p,le,pr,tr,fr,dr,Jt]),!M||x)return null;let hr=_.length>0,gr=_.filter(e=>!Dn.has(e.id)&&e.kind!==`placement`&&e.kind!==`rearrange`),_r=gr.length>0,vr=_.filter(e=>Dn.has(e.id)),yr=e=>{let t=e.x/100*window.innerWidth,n=typeof e.y==`string`?parseFloat(e.y):e.y,r={};window.innerHeight-n-22-10<80&&(r.top=`auto`,r.bottom=`calc(100% + 10px)`);let i=t-200/2;return i<10?r.left=`calc(50% + ${10-i}px)`:i+200>window.innerWidth-10&&(r.left=`calc(50% - ${i+200-(window.innerWidth-10)}px)`),r};return(0,Dt.createPortal)((0,N.jsxs)(`div`,{ref:te,style:{display:`contents`},"data-agentation-theme":cn?`dark`:`light`,"data-agentation-accent":R.annotationColorId,"data-agentation-root":``,children:[(0,N.jsx)(`div`,{className:`${X.toolbar}${m?` ${m}`:``}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:vn?{left:vn.x,top:vn.y,right:`auto`,bottom:`auto`}:void 0,children:(0,N.jsxs)(`div`,{className:`${X.toolbarContainer} ${h?X.expanded:X.collapsed} ${dn?X.entrance:``} ${ee?X.hiding:``} ${!R.webhooksEnabled&&(No(R.webhookUrl)||No(p||``))?X.serverConnected:``}`,onClick:h?void 0:e=>{if(wn.current){wn.current=!1,e.preventDefault();return}g(!0)},onMouseDown:mr,role:h?void 0:`button`,tabIndex:h?-1:0,title:h?void 0:`Start feedback mode`,children:[(0,N.jsxs)(`div`,{className:`${X.toggleContent} ${h?X.hidden:X.visible}`,children:[(0,N.jsx)(Ft,{size:24}),_r&&(0,N.jsx)(`span`,{className:`${X.badge} ${h?X.fadeOut:``} ${dn?X.entrance:``}`,children:gr.length})]}),(0,N.jsxs)(`div`,{className:`${X.controlsContent} ${h?X.visible:X.hidden} ${vn&&vn.y<100?X.tooltipBelow:``} ${Ve||Fe?X.tooltipsHidden:``} ${Gt?X.tooltipsInSession:``}`,onMouseEnter:en,onMouseLeave:tn,children:[(0,N.jsxs)(`div`,{className:`${X.buttonWrapper} ${vn&&vn.x<120?X.buttonWrapperAlignLeft:``}`,children:[(0,N.jsx)(`button`,{className:X.controlButton,onClick:e=>{e.stopPropagation(),Qt(),tr()},"data-active":Ne,children:(0,N.jsx)(Bt,{size:24,isPaused:Ne})}),(0,N.jsxs)(`span`,{className:X.buttonTooltip,children:[Ne?`Resume animations`:`Pause animations`,(0,N.jsx)(`span`,{className:X.shortcut,children:`P`})]})]}),(0,N.jsxs)(`div`,{className:X.buttonWrapper,children:[(0,N.jsx)(`button`,{className:`${X.controlButton} ${cn?``:X.light}`,onClick:e=>{e.stopPropagation(),Qt(),kt&&At(!1),Fe&&Ie(!1),D&&or(),P?Zn():Ue(!0)},"data-active":P,style:P&&Xe?{color:`#f97316`,background:`rgba(249, 115, 22, 0.25)`}:void 0,children:(0,N.jsx)(Xt,{size:21})}),(0,N.jsxs)(`span`,{className:X.buttonTooltip,children:[P?`Exit layout mode`:`Layout mode`,(0,N.jsx)(`span`,{className:X.shortcut,children:`L`})]})]}),(0,N.jsxs)(`div`,{className:X.buttonWrapper,children:[(0,N.jsx)(`button`,{className:X.controlButton,onClick:e=>{e.stopPropagation(),Qt(),b(!y)},disabled:!hr||P,children:(0,N.jsx)(zt,{size:24,isOpen:y})}),(0,N.jsxs)(`span`,{className:X.buttonTooltip,children:[y?`Hide markers`:`Show markers`,(0,N.jsx)(`span`,{className:X.shortcut,children:`H`})]})]}),(0,N.jsxs)(`div`,{className:X.buttonWrapper,children:[(0,N.jsx)(`button`,{className:`${X.controlButton} ${se?X.statusShowing:``}`,onClick:e=>{e.stopPropagation(),Qt(),fr()},disabled:P&&Xe?F.length===0&&!L?.sections?.length:!hr&&jt.length===0&&F.length===0&&!L?.sections?.length,"data-active":se,children:(0,N.jsx)(Lt,{size:24,copied:se,tint:P&&Xe&&(F.length>0||L?.sections?.length)?`#f97316`:void 0})}),(0,N.jsxs)(`span`,{className:X.buttonTooltip,children:[P&&Xe?`Copy layout`:`Copy feedback`,(0,N.jsx)(`span`,{className:X.shortcut,children:`C`})]})]}),(0,N.jsxs)(`div`,{className:`${X.buttonWrapper} ${X.sendButtonWrapper} ${h&&!R.webhooksEnabled&&(No(R.webhookUrl)||No(p||``))?X.sendButtonVisible:``}`,children:[(0,N.jsxs)(`button`,{className:`${X.controlButton} ${le===`sent`||le===`failed`?X.statusShowing:``}`,onClick:e=>{e.stopPropagation(),Qt(),pr()},disabled:!hr||!No(R.webhookUrl)&&!No(p||``)||le===`sending`,"data-no-hover":le===`sent`||le===`failed`,tabIndex:No(R.webhookUrl)||No(p||``)?0:-1,children:[(0,N.jsx)(Rt,{size:24,state:le}),hr&&le===`idle`&&(0,N.jsx)(`span`,{className:X.buttonBadge,children:_.length})]}),(0,N.jsxs)(`span`,{className:X.buttonTooltip,children:[`Send Annotations`,(0,N.jsx)(`span`,{className:X.shortcut,children:`S`})]})]}),(0,N.jsxs)(`div`,{className:X.buttonWrapper,children:[(0,N.jsx)(`button`,{className:X.controlButton,onClick:e=>{e.stopPropagation(),Qt(),dr()},disabled:!hr&&jt.length===0&&F.length===0&&!L?.sections?.length,"data-danger":!0,children:(0,N.jsx)(Ht,{size:24})}),(0,N.jsxs)(`span`,{className:X.buttonTooltip,children:[`Clear all`,(0,N.jsx)(`span`,{className:X.shortcut,children:`X`})]})]}),(0,N.jsxs)(`div`,{className:X.buttonWrapper,children:[(0,N.jsx)(`button`,{className:X.controlButton,onClick:e=>{e.stopPropagation(),Qt(),P&&Zn(),Ie(!Fe)},children:(0,N.jsx)(Vt,{size:24})}),u&&H!==`disconnected`&&(0,N.jsx)(`span`,{className:`${X.mcpIndicator} ${X[H]} ${Fe?X.hidden:``}`,title:H===`connected`?`MCP Connected`:`MCP Connecting...`}),(0,N.jsx)(`span`,{className:X.buttonTooltip,children:`Settings`})]}),(0,N.jsx)(`div`,{className:X.divider}),(0,N.jsxs)(`div`,{className:`${X.buttonWrapper} ${vn&&typeof window<`u`&&vn.x>window.innerWidth-120?X.buttonWrapperAlignRight:``}`,children:[(0,N.jsx)(`button`,{className:X.controlButton,onClick:e=>{e.stopPropagation(),Qt(),Qn()},children:(0,N.jsx)(Wt,{size:24})}),(0,N.jsxs)(`span`,{className:X.buttonTooltip,children:[`Exit`,(0,N.jsx)(`span`,{className:X.shortcut,children:`Esc`})]})]})]}),(0,N.jsx)(Hr,{visible:P&&h,activeType:qe,onSelect:e=>{Je(qe===e?null:e)},isDarkMode:cn,sectionCount:L?.sections.length??0,onDetectSections:()=>{let e=_i(),t=L?.sections??[],n=new Set(t.map(e=>e.selector)),r=e.filter(e=>!n.has(e.selector));ct({sections:[...t,...r],originalOrder:[...L?.originalOrder??[],...r.map(e=>e.id)],detectedAt:Date.now()})},placementCount:F.length,onClearPlacements:()=>{_t(e=>e+1),yt(e=>e+1),z(()=>{ct({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Xe,onBlankCanvasChange:e=>{let t={sections:[],originalOrder:[],detectedAt:Date.now()};e?(ut.current={rearrange:L,placements:F},ct(dt.current.rearrange||t),Ke(dt.current.placements),Je(null)):(dt.current={rearrange:L,placements:F},ct(ut.current.rearrange||t),Ke(ut.current.placements)),Ze(e)},wireframePurpose:it,onWireframePurposeChange:at,Tooltip:mn,onDragStart:(e,t)=>{t.preventDefault();let n=B[e],r=null,i=!1,a=t.clientX,o=t.clientY,s=t.target.closest(`[data-feedback-toolbar]`)?.getBoundingClientRect().top??window.innerHeight,c=t=>{let c=t.clientX-a,l=t.clientY-o;if(!i&&(Math.abs(c)>4||Math.abs(l)>4)&&(i=!0,r=document.createElement(`div`),r.className=`${W.dragPreview}${Xe?` ${W.dragPreviewWireframe}`:``}`,document.body.appendChild(r)),!r)return;let u=Math.max(0,s-t.clientY),d=1-(1-Math.min(1,u/180))**2,f=Math.min(140,n.width*.18),p=Math.min(90,n.height*.18),m=28+(f-28)*d,h=20+(p-20)*d;r.style.width=`${m}px`,r.style.height=`${h}px`,r.style.left=`${t.clientX-m/2}px`,r.style.top=`${t.clientY-h/2}px`,r.style.opacity=`${.5+.5*d}`,r.textContent=d>.25?e:``},l=t=>{if(window.removeEventListener(`mousemove`,c),window.removeEventListener(`mouseup`,l),r&&document.body.removeChild(r),i){let r=n.width,i=n.height,a=window.scrollY,o=Math.max(0,t.clientX-r/2),s=Math.max(0,t.clientY+a-i/2),c={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:e,x:o,y:s,width:r,height:i,scrollY:a,timestamp:Date.now()};Ke(e=>[...e,c]),Je(null),bt.current=new Set,pt(e=>e+1)}};window.addEventListener(`mousemove`,c),window.addEventListener(`mouseup`,l)}}),(0,N.jsx)(ko,{settings:R,onSettingsChange:e=>an(t=>({...t,...e})),isDarkMode:cn,onToggleTheme:pn,isDevMode:!1,connectionStatus:H,endpoint:u,isVisible:Le,toolbarNearBottom:!!vn&&vn.y<230,settingsPage:ze,onSettingsPageChange:Be,onHideToolbar:Jn})]})}),(P||We)&&(0,N.jsx)(`div`,{className:`${W.blankCanvas} ${Qe?W.visible:``} ${ot?W.gridActive:``}`,style:{"--canvas-opacity":et},"data-feedback-toolbar":!0}),P&&Xe&&Qe&&(0,N.jsxs)(`div`,{className:W.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,N.jsxs)(`div`,{className:W.wireframeOpacityRow,children:[(0,N.jsx)(`span`,{className:W.wireframeOpacityLabel,children:`Toggle Opacity`}),(0,N.jsx)(`input`,{type:`range`,className:W.wireframeOpacitySlider,min:0,max:1,step:.01,value:et,onChange:e=>tt(Number(e.target.value))})]}),(0,N.jsxs)(`div`,{className:W.wireframeNoticeTitleRow,children:[(0,N.jsx)(`span`,{className:W.wireframeNoticeTitle,children:`Wireframe Mode`}),(0,N.jsx)(`span`,{className:W.wireframeNoticeDivider}),(0,N.jsx)(`button`,{className:W.wireframeStartOver,onClick:()=>{_t(e=>e+1),ct({sections:[],originalOrder:[],detectedAt:Date.now()}),dt.current={rearrange:null,placements:[]},at(``),da(U)},children:`Start Over`})]}),`Drag components onto the canvas.`,(0,N.jsx)(`br`,{}),`Copied output will only include the wireframed layout.`]}),(P||We)&&(0,N.jsx)(Lr,{placements:F,onChange:Ke,activeComponent:We?null:qe,onActiveComponentChange:Je,isDarkMode:cn,exiting:We,onInteractionChange:st,passthrough:!qe,extraSnapRects:L?.sections.map(e=>e.currentRect),deselectSignal:ft,clearSignal:gt,wireframe:Xe,onSelectionChange:(e,t)=>{bt.current=e,t||(xt.current=new Set,ht(e=>e+1))},onDragMove:(e,t)=>{let n=xt.current;if(!(!n.size||!L)){if(!St.current){St.current=new Map;for(let e of L.sections)n.has(e.id)&&St.current.set(e.id,{x:e.currentRect.x,y:e.currentRect.y})}for(let r of L.sections){if(!n.has(r.id)||!St.current.get(r.id))continue;let i=document.querySelector(`[data-rearrange-section="${r.id}"]`);i&&(i.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=xt.current,i=St.current;if(St.current=null,!(!r.size||!L||!i)){for(let e of r){let t=document.querySelector(`[data-rearrange-section="${e}"]`);t&&(t.style.transform=``)}n&&ct(n=>n&&{...n,sections:n.sections.map(n=>{let r=i.get(n.id);return r?{...n,currentRect:{...n.currentRect,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}}:n})})}}}),(P||We)&&L&&(0,N.jsx)(q,{rearrangeState:L,onChange:ct,isDarkMode:cn,exiting:We,blankCanvas:Xe,extraSnapRects:F.map(e=>({x:e.x,y:e.y,width:e.width,height:e.height})),clearSignal:vt,deselectSignal:mt,onSelectionChange:(e,t)=>{xt.current=e,t||(bt.current=new Set,pt(e=>e+1))},onDragMove:(e,t)=>{let n=bt.current;if(n.size){if(!St.current){St.current=new Map;for(let e of F)n.has(e.id)&&St.current.set(e.id,{x:e.x,y:e.y})}for(let r of n){let n=document.querySelector(`[data-design-placement="${r}"]`);n&&(n.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=bt.current,i=St.current;if(St.current=null,!(!r.size||!i)){for(let e of r){let t=document.querySelector(`[data-design-placement="${e}"]`);t&&(t.style.transform=``)}n&&Ke(n=>n.map(n=>{let r=i.get(n.id);return r?{...n,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}:n}))}}}),(0,N.jsx)(`canvas`,{ref:Ut,className:`${X.drawCanvas} ${kt?X.active:``}`,style:{opacity:+!!Kn,transition:`opacity 0.15s ease`},"data-feedback-toolbar":!0}),(0,N.jsxs)(`div`,{className:X.markersLayer,"data-feedback-toolbar":!0,children:[w&&gr.filter(e=>!e.isFixed).map((e,t,n)=>(0,N.jsx)(fo,{annotation:e,globalIndex:gr.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:T,isClearing:fe,isAnimated:Tn.has(e.id),isHovered:!T&&me===e.id,isDeleting:ye===e.id,isEditingAny:!!j,renumberFrom:xe,markerClickBehavior:R.markerClickBehavior,tooltipStyle:yr(e),onHoverEnter:e=>!T&&e.id!==Vn.current&&cr(e),onHoverLeave:()=>cr(null),onClick:e=>R.markerClickBehavior===`delete`?sr(e.id):rr(e),onContextMenu:rr},e.id)),w&&!T&&vr.filter(e=>!e.isFixed).map(e=>(0,N.jsx)(mo,{annotation:e},e.id))]}),(0,N.jsxs)(`div`,{className:X.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[w&&gr.filter(e=>e.isFixed).map((e,t,n)=>(0,N.jsx)(fo,{annotation:e,globalIndex:gr.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:T,isClearing:fe,isAnimated:Tn.has(e.id),isHovered:!T&&me===e.id,isDeleting:ye===e.id,isEditingAny:!!j,renumberFrom:xe,markerClickBehavior:R.markerClickBehavior,tooltipStyle:yr(e),onHoverEnter:e=>!T&&e.id!==Vn.current&&cr(e),onHoverLeave:()=>cr(null),onClick:e=>R.markerClickBehavior===`delete`?sr(e.id):rr(e),onContextMenu:rr},e.id)),w&&!T&&vr.filter(e=>e.isFixed).map(e=>(0,N.jsx)(mo,{annotation:e,fixed:!0},e.id))]}),h&&(0,N.jsxs)(`div`,{className:X.overlay,"data-feedback-toolbar":!0,style:D||j?{zIndex:99999}:void 0,children:[E?.rect&&!D&&!Ae&&!Nn&&(0,N.jsx)(`div`,{className:`${X.hoverHighlight} ${X.enter}`,style:{left:E.rect.left,top:E.rect.top,width:E.rect.width,height:E.rect.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)`}}),Jt.filter(e=>document.contains(e.element)).map((e,t)=>{let n=e.element.getBoundingClientRect(),r=Jt.length>1;return(0,N.jsx)(`div`,{className:r?X.multiSelectOutline:X.singleSelectOutline,style:{position:`fixed`,left:n.left,top:n.top,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}},t)}),me&&!D&&(()=>{let e=_.find(e=>e.id===me);if(!e?.boundingBox)return null;if(e.elementBoundingBoxes?.length)return _e.length>0?_e.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,N.jsx)(`div`,{className:`${X.multiSelectOutline} ${X.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`hover-outline-live-${t}`)}):e.elementBoundingBoxes.map((e,t)=>(0,N.jsx)(`div`,{className:`${X.multiSelectOutline} ${X.enter}`,style:{left:e.x,top:e.y-Oe,width:e.width,height:e.height}},`hover-outline-${t}`));let t=A&&document.contains(A)?A.getBoundingClientRect():null,n=t?{x:t.left,y:t.top,width:t.width,height:t.height}:{x:e.boundingBox.x,y:e.isFixed?e.boundingBox.y:e.boundingBox.y-Oe,width:e.boundingBox.width,height:e.boundingBox.height},r=e.isMultiSelect;return(0,N.jsx)(`div`,{className:`${r?X.multiSelectOutline:X.singleSelectOutline} ${X.enter}`,style:{left:n.x,top:n.y,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}})})(),E&&!D&&!Ae&&!Nn&&(0,N.jsxs)(`div`,{className:`${X.hoverTooltip} ${X.enter}`,style:{left:Math.max(8,Math.min(ae.x,window.innerWidth-100)),top:Math.max(ae.y-(E.reactComponents?48:32),8)},children:[E.reactComponents&&(0,N.jsx)(`div`,{className:X.hoverReactPath,children:E.reactComponents}),(0,N.jsx)(`div`,{className:X.hoverElementName,children:E.elementName})]}),D&&(0,N.jsxs)(N.Fragment,{children:[D.multiSelectElements?.length?D.multiSelectElements.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,N.jsx)(`div`,{className:`${X.multiSelectOutline} ${kn?X.exit:X.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`pending-multi-${t}`)}):D.targetElement&&document.contains(D.targetElement)?(()=>{let e=D.targetElement.getBoundingClientRect();return(0,N.jsx)(`div`,{className:`${X.singleSelectOutline} ${kn?X.exit:X.enter}`,style:{left:e.left,top:e.top,width:e.width,height:e.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}})})():D.boundingBox&&(0,N.jsx)(`div`,{className:`${D.isMultiSelect?X.multiSelectOutline:X.singleSelectOutline} ${kn?X.exit:X.enter}`,style:{left:D.boundingBox.x,top:D.boundingBox.y-Oe,width:D.boundingBox.width,height:D.boundingBox.height,...D.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}),(()=>{let e=D.x,t=D.isFixed?D.y:D.y-Oe;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(po,{x:e,y:t,isMultiSelect:D.isMultiSelect,isExiting:kn}),(0,N.jsx)(ln,{ref:Un,element:D.element,selectedText:D.selectedText,computedStyles:D.computedStylesObj,placeholder:D.element===`Area selection`?`What should change in this area?`:D.isMultiSelect?`Feedback for this group of elements...`:`What should change?`,onSubmit:ar,onCancel:or,isExiting:kn,lightMode:!cn,accentColor:D.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:{left:Math.max(160,Math.min(window.innerWidth-160,e/100*window.innerWidth)),...t>window.innerHeight-290?{bottom:window.innerHeight-t+20}:{top:t+20}}})]})})()]}),j&&(0,N.jsxs)(N.Fragment,{children:[j.elementBoundingBoxes?.length?Ee.length>0?Ee.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,N.jsx)(`div`,{className:`${X.multiSelectOutline} ${X.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`edit-multi-live-${t}`)}):j.elementBoundingBoxes.map((e,t)=>(0,N.jsx)(`div`,{className:`${X.multiSelectOutline} ${X.enter}`,style:{left:e.x,top:e.y-Oe,width:e.width,height:e.height}},`edit-multi-${t}`)):(()=>{let e=we&&document.contains(we)?we.getBoundingClientRect():null,t=e?{x:e.left,y:e.top,width:e.width,height:e.height}:j.boundingBox?{x:j.boundingBox.x,y:j.isFixed?j.boundingBox.y:j.boundingBox.y-Oe,width:j.boundingBox.width,height:j.boundingBox.height}:null;return t?(0,N.jsx)(`div`,{className:`${j.isMultiSelect?X.multiSelectOutline:X.singleSelectOutline} ${X.enter}`,style:{left:t.x,top:t.y,width:t.width,height:t.height,...j.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}):null})(),(0,N.jsx)(ln,{ref:Wn,element:j.element,selectedText:j.selectedText,computedStyles:ii(j.computedStyles),placeholder:`Edit your feedback...`,initialValue:j.comment,submitLabel:`Save`,onSubmit:lr,onCancel:ur,onDelete:()=>sr(j.id),isExiting:jn,lightMode:!cn,accentColor:j.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:(()=>{let e=j.isFixed?j.y:j.y-Oe;return{left:Math.max(160,Math.min(window.innerWidth-160,j.x/100*window.innerWidth)),...e>window.innerHeight-290?{bottom:window.innerHeight-e+20}:{top:e+20}}})()})]}),Nn&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{ref:Ln,className:X.dragSelection}),(0,N.jsx)(`div`,{ref:Rn,className:X.highlightsContainer})]})]})]}),document.body)}var Bo=new WeakMap,Vo=new WeakMap,Ho=new WeakMap,Uo=new WeakMap,Wo=Symbol(`anyProducer`),Go=Promise.resolve(),Ko=Symbol(`listenerAdded`),qo=Symbol(`listenerRemoved`),Jo=new WeakMap,Yo=new WeakMap,Xo=Symbol(`suppressAllEnqueue`),Zo=new WeakMap,Qo=!1,$o=e=>typeof e==`string`||typeof e==`symbol`||typeof e==`number`;function es(e){return e[Symbol.dispose]=e,e}function ts(e,t,{swallowErrors:n=!1}={}){if(!e)return()=>{};let r=()=>{if(n){try{t()}catch{}return}t()};return e.aborted?(r(),()=>{}):(e.addEventListener(`abort`,r,{once:!0}),()=>{e.removeEventListener(`abort`,r)})}function ns(e){if(!$o(e))throw TypeError("`eventName` must be a string, symbol, or number")}function rs(e){if(typeof e!=`function`)throw TypeError(`listener must be a function`)}function is(e,t){let n=Vo.get(e);if(n.has(t))return n.get(t)}function as(e,t){let n=$o(t)?t:Wo,r=Ho.get(e);if(r.has(n))return r.get(n)}function os(e,t,n,r){if(ds(e,t))return;let i=Ho.get(e);if(!i.has(t)&&!i.get(Wo)?.size)return;let a=Promise.resolve(n),o=async()=>xs(t,await a,r);if(i.has(t))for(let e of i.get(t))e.enqueue(o());if(i.has(Wo))for(let e of i.get(Wo))e.enqueue(o())}function ss(e,t,{signal:n}={}){t=Array.isArray(t)?t:[t];let r=!1,i=()=>{},a=[],o=()=>{},s={enqueue(e){a.push(e),i()},finish(){r=!0,o(),i()}};for(let n of t){let t=$o(n)?n:Wo,r=as(e,n);r||(r=new Set,Ho.get(e).set(t,r)),r.add(s)}let c=()=>{for(let n of t){let t=$o(n)?n:Wo,r=as(e,n);r&&(r.delete(s),r.size===0&&Ho.get(e).delete(t))}},l=()=>{a&&(a=void 0,o(),c(),i())};return o=ts(n,l),{async next(){if(!a)return{done:!0};if(a.length===0){if(r)return l(),this.next();let{promise:e,resolve:t}=Promise.withResolvers();return i=t,await e,this.next()}return{done:!1,value:await a.shift()}},async return(e){return l(),arguments.length>0?{done:!0,value:await e}:{done:!0}},[Symbol.asyncIterator](){return this},async[Symbol.asyncDispose](){await this.return()}}}function cs(e){if(e===void 0)return ws;if(!Array.isArray(e))throw TypeError("`methodNames` must be an array of strings");for(let t of e)if(!ws.includes(t))throw typeof t==`string`?Error(`${t} is not Emittery method`):TypeError("`methodNames` element must be a string");return e}var ls=e=>e===Ko||e===qo;function us(e,t,n){let r=t.some(e=>!$o(e))?[Xo]:t,i=Zo.get(e);i||(i=new Set,Zo.set(e,i));let a=[];for(let e of r)i.has(e)||(i.add(e),a.push(e));try{return n()}finally{for(let e of a)i.delete(e);i.size===0&&Zo.delete(e)}}function ds(e,t){let n=Zo.get(e);return n?n.has(Xo)||n.has(t):!1}function fs(e,t,n,{eventName:r,set:i}){try{let e=t.initFn();typeof e==`function`&&(t.deinitFn=e)}catch(t){throw i.delete(n),i.size===0&&Vo.get(e).delete(r),t}}function ps(e){let t=e?.deinitFn;t&&(e.deinitFn=void 0,t())}var ms=`subscribe`,hs=`unsubscribe`;function gs(e,{eventName:t,listener:n,action:r,swallowLifecycleError:i=!1,removeResubscribedListener:a=!1}){if(r===ms){let r=is(e,t);r||(r=new Set,Vo.get(e).set(t,r));let i=r.size===0,a=r.has(n);if(r.add(n),!ls(t)&&i&&!ds(e,t)){let i=Uo.get(e).get(t);i&&fs(e,i,n,{eventName:t,set:r})}return{hasSet:!0,changed:!a}}let o=is(e,t);if(!o)return{hasSet:!1,changed:!1};let s=o.delete(n);if(o.size===0){Vo.get(e).delete(t);let r=Uo.get(e).get(t);if(i)try{ps(r)}catch{}else ps(r);if(a){let r=is(e,t);r?.delete(n),r?.size===0&&Vo.get(e).delete(t)}}return{hasSet:!0,changed:s}}function _s(e,{eventName:t,listener:n,action:r,swallowErrors:i=!1}){let a=r===ms,o=a?`subscribe`:`unsubscribe`,s=a?Ko:qo;if(i){try{e.logIfDebugEnabled(o,t,void 0)}catch{}if(!ls(t))try{Ss(e,s,{eventName:t,listener:n})}catch{}return}e.logIfDebugEnabled(o,t,void 0),ls(t)||Ss(e,s,{eventName:t,listener:n})}function vs(e,t,n){us(e,t,()=>{for(let r of t){let{hasSet:t}=gs(e,{eventName:r,listener:n,action:hs,swallowLifecycleError:!0,removeResubscribedListener:!0});t&&_s(e,{eventName:r,listener:n,action:hs,swallowErrors:!0})}})}function ys(e,t){let n=as(e,t);if(n){for(let e of n)e.finish();n.clear()}}function bs(e){let t=Ho.get(e);for(let[e,n]of t.entries()){for(let e of n)e.finish();n.clear(),t.delete(e)}}var xs=(e,t,n)=>n?{name:e,data:t}:{name:e};function Ss(e,t,n){Jo.set(e,(Jo.get(e)??0)+1),Yo.set(e,(Yo.get(e)??0)+1);try{Cs.prototype.emit.call(e,t,n)}finally{Jo.set(e,(Jo.get(e)??0)-1)}}var Cs=class e{static mixin(t,n){return n=cs(n),(r,i)=>{if(typeof r!=`function`)throw TypeError("`target` must be function");for(let e of n)if(r.prototype[e]!==void 0)throw Error(`The property \`${e}\` already exists on \`target\``);function a(){return Object.defineProperty(this,t,{enumerable:!1,value:new e}),this[t]}Object.defineProperty(r.prototype,t,{enumerable:!1,get:a});let o=e=>function(...n){return this[t][e](...n)};for(let e of n)Object.defineProperty(r.prototype,e,{enumerable:!1,value:o(e)});return r}}static get isDebugEnabled(){let{env:e}=globalThis.process??{env:{}};return e.DEBUG===`emittery`||e.DEBUG===`*`||Qo}static set isDebugEnabled(e){Qo=e}constructor(e={}){Bo.set(this,new Set),Vo.set(this,new Map),Ho.set(this,new Map),Uo.set(this,new Map),Ho.get(this).set(Wo,new Set);for(let e of ws)Object.defineProperty(this,e,{value:this[e].bind(this),writable:!0,enumerable:!1,configurable:!0});this.debug=e.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||=(e,t,n,r)=>{try{r=JSON.stringify(r)}catch{r=`Object with the following keys failed to stringify: ${Object.keys(r).join(`,`)}`}(typeof n==`symbol`||typeof n==`number`)&&(n=n.toString());let i=new Date,a=`${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}.${i.getMilliseconds()}`;console.log(`[${a}][emittery:${e}][${t}] Event Name: ${n}\n\tdata: ${r}`)}}logIfDebugEnabled(t,n,r){(e.isDebugEnabled||this.debug.enabled)&&this.debug.logger(t,this.debug.name,n,r)}on(e,t,{signal:n}={}){rs(t),e=Array.isArray(e)?e:[e];let r=[];try{for(let n of e){ns(n);let{changed:e}=gs(this,{eventName:n,listener:t,action:ms});e&&r.push(n),_s(this,{eventName:n,listener:t,action:ms})}}catch(e){throw vs(this,r,t),e}let i=()=>{},a=Symbol(`no-error`),o=()=>{i();let n=a;for(let r of e)try{this.off(r,t)}catch(e){n=n===a?e:n}if(n!==a)throw n};return i=ts(n,o,{swallowErrors:!0}),es(o)}off(e,t){rs(t),e=Array.isArray(e)?e:[e];for(let n of e)ns(n),gs(this,{eventName:n,listener:t,action:hs}),_s(this,{eventName:n,listener:t,action:hs})}once(e,t){let{promise:n,resolve:r,reject:i}=Promise.withResolvers(),a=()=>{},o,s=!1,c=()=>{};e=Array.isArray(e)?[...e]:[e];try{let l;if(typeof t==`function`)l=t;else if(typeof t==`object`&&t)l=t.predicate,o=t.signal;else if(t!==void 0)throw TypeError(`predicate must be a function`);if(l!==void 0&&typeof l!=`function`)throw TypeError(`predicate must be a function`);if(o?.aborted)throw o.reason;let u=()=>{},d=()=>{c();let t=Symbol(`no-error`),n=t;for(let r of e)try{this.off(r,u)}catch(e){n=n===t?e:n}if(n!==t)throw n},f=()=>{d(),s=!0};u=e=>{if(!(l&&!l(e))&&!s){try{f()}catch(e){i(e);return}r(e)}},this.on(e,u),a=d,c=ts(o,()=>{if(!s){try{f()}catch{}s=!0,i(o.reason)}}),n.off=()=>{s||f()}}catch(e){i(e)}return n.off===void 0&&(n.off=a),n}events(e,{signal:t}={}){e=Array.isArray(e)?e:[e];for(let t of e)ns(t);return ss(this,e,{signal:t})}async emit(e,t){if(ns(e),ls(e)){let e=Yo.get(this)??0;if((Jo.get(this)??0)===0||e===0)throw TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");Yo.set(this,e-1)}ls(e)||this.logIfDebugEnabled(`emit`,e,t);let n=arguments.length>1;os(this,e,t,n);let r=is(this,e)??new Set,i=Bo.get(this),a=[...r],o=ls(e)?[]:[...i];await Go;let s=(await Promise.allSettled([...a.map(async i=>{if(r.has(i))return i(xs(e,t,n))}),...o.map(async r=>{if(i.has(r))return r(xs(e,t,n))})])).values().filter(e=>e.status===`rejected`).map(e=>e.reason).toArray();if(s.length>0)throw AggregateError(s,`One or more listeners threw an error`)}async emitSerial(e,t){if(ns(e),ls(e)){let e=Yo.get(this)??0;if((Jo.get(this)??0)===0||e===0)throw TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");Yo.set(this,e-1)}ls(e)||this.logIfDebugEnabled(`emitSerial`,e,t);let n=arguments.length>1;os(this,e,t,n);let r=is(this,e)??new Set,i=Bo.get(this),a=[...r],o=ls(e)?[]:[...i];await Go;for(let i of a)r.has(i)&&await i(xs(e,t,n));for(let r of o)i.has(r)&&await r(xs(e,t,n))}onAny(e,{signal:t}={}){rs(e),this.logIfDebugEnabled(`subscribeAny`,void 0,void 0),Bo.get(this).add(e),Ss(this,Ko,{listener:e});let n=()=>{},r=()=>{n(),this.offAny(e)};return n=ts(t,r,{swallowErrors:!0}),es(r)}anyEvent({signal:e}={}){return ss(this,void 0,{signal:e})}offAny(e){rs(e),this.logIfDebugEnabled(`unsubscribeAny`,void 0,void 0),Ss(this,qo,{listener:e}),Bo.get(this).delete(e)}clearListeners(e){e=Array.isArray(e)?e:[e];let t=e.some(e=>!$o(e));us(this,e,()=>{let n=Symbol(`no-error`),r=n;try{for(let t of e){try{this.logIfDebugEnabled(`clear`,t,void 0)}catch(e){r=r===n?e:r}if($o(t)){let e=is(this,t),i=e?.size>0;e?.clear(),ys(this,t);let a=i?Uo.get(this).get(t):void 0;try{ps(a)}catch(e){r=r===n?e:r}}else{Bo.get(this).clear(),bs(this);for(let[e,t]of Vo.get(this).entries()){let i=t.size>0;t.clear();let a=i?Uo.get(this).get(e):void 0;try{ps(a)}catch(e){r=r===n?e:r}t.clear(),Vo.get(this).delete(e)}Bo.get(this).clear(),bs(this)}}}finally{if(t){Bo.get(this).clear();for(let e of Vo.get(this).values())e.clear();Vo.get(this).clear(),bs(this)}else for(let t of e)$o(t)&&(is(this,t)?.clear(),Vo.get(this).delete(t),ys(this,t))}if(r!==n)throw r})}init(e,t){if(ns(e),ls(e))throw TypeError("`eventName` cannot be a meta event");if(typeof t!=`function`)throw TypeError("`initFn` must be a function");let n=Uo.get(this);if(n.has(e))throw Error("`eventName` already has an init function registered");let r={initFn:t,deinitFn:void 0};if(n.set(e,r),is(this,e)?.size>0)try{let e=t();typeof e==`function`&&(r.deinitFn=e)}catch(t){throw n.delete(e),t}return es(()=>{try{ps(r)}finally{n.get(e)===r&&n.delete(e)}})}listenerCount(e){e=Array.isArray(e)?e:[e];let t=0;for(let n of e){if($o(n)){t+=Bo.get(this).size+(is(this,n)?.size??0)+(as(this,n)?.size??0)+(as(this)?.size??0);continue}n!==void 0&&ns(n),t+=Bo.get(this).size;for(let e of Vo.get(this).values())t+=e.size;for(let e of Ho.get(this).values())t+=e.size}return t}bindMethods(e,t){if(!e||typeof e!=`object`)throw TypeError("`target` must be an object");t=cs(t);for(let n of t){if(e[n]!==void 0)throw Error(`The property \`${n}\` already exists on \`target\``);Object.defineProperty(e,n,{enumerable:!1,value:this[n].bind(this)})}}},ws=Object.getOwnPropertyNames(Cs.prototype).filter(e=>e!==`constructor`);Object.defineProperty(Cs,`listenerAdded`,{value:Ko,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(Cs,`listenerRemoved`,{value:qo,writable:!1,enumerable:!0,configurable:!1});function Ts(e=new Date){return+e}function Es(e){return!(typeof e?.message!=`string`||!e?.message||typeof e?.name!=`string`||!e?.name||typeof e?.stack!=`string`)}var Ds=new Set([...new Set([`name`,`message`,`cause`]),`stack`,`suppressed`]),Os=new Set([...Ds,`code`,`errors`,`statusCode`,`shouldRedirect`,`framesToPop`]),ks=new Set([...Os,`_temp`,`details`]),As=new Set([`stack`,`message`,`name`]);function js(e,t={},n=Error){e=String(e||t.message||`Unknown error!`),e.toLowerCase().includes(`error`)||(e=n.name?.endsWith(`Error`)?n.name+`: `+e:`Error: `+e);let r=new n(e);return Object.keys(t).forEach(e=>{let n=ks.has(e),i=As.has(e);e===`details`?r.details={...r.details,...t[e]}:i||(n?r[e]=t[e]:(r.details=r.details||{},r.details[e]=t[e]))}),r.framesToPop=(r.framesToPop||0)+1,r}function Ms(e=void 0,{alwaysRecreate:t=!1}={}){let n=Es(e);if(n&&!t)return e;if(n||console.warn(`WARNING: normalizeError() saw a non-Error thing thrown!`,{err_like:e}),e==null)return Error(`[non-error: "${e}" thrown!]`);if(typeof e==`string`)return Error(`[non-error of type "${typeof e}" thrown: "${e}"!]`);if(typeof e!=`object`)return Error(`[non-error of type "${typeof e}" thrown!]`);try{return t||!n?(()=>{let t=(()=>{let t=e?.message?String(e.message):`[object with no error shape thrown!]`;try{let n=Object.getPrototypeOf(e),r=n?.constructor?.name?.endsWith(`Error`)?n.constructor:Error,i=new(Function.prototype.bind.call(r,null,t));if(!Es(i))throw Error(`[re-created but still !hasꓽminimal_error_shape: will be caught below]`);return i}catch{return Error(t)}})();return ks.forEach(n=>{if(e[n])switch(n){case`message`:break;case`name`:break;case`framesToPop`:t[n]=Number.parseInt(e[n]);break;default:t[n]=e[n];break}}),t})():e}catch{return console.warn(`WARNING: normalizeError() saw a dangerous thing thrown!`,{err_like:e}),Error(`[non-error: <fancy object> thrown!]`)}}var Ns=`soft-execution-context`,Ps=`_SXC`,Fs=Object.create(null);Fs.emitter=new Cs,Fs.setAnalyticsAndErrorDetails=function(e={}){return this.setAnalyticsDetails(e).setErrorDetails(e)};var Is=0;function Ls(e){return{sid:Is++,parent:e,plugins:{},cache:{}}}function Rs(e,t){let n=e.parent?.plugins?.[t.id],r=t.state.create(n);return{...e,plugins:{...e.plugins,[t.id]:{...r,sid:e.sid}}}}function zs(e,t,n){let r=e.plugins[t],i=n(r);return i===r?e:{...e,plugins:{...e.plugins,[t]:i}}}var Bs=s({create:()=>Vs,set_module:()=>Hs,set_operation:()=>Us});function Vs(e){let t=Object.create(e?e.stack:null);return t.operation=void 0,{stack:t}}function Hs(e,t){if(e.stack.module===t)return e;if(Object.hasOwn(e.stack,`module`))throw Error(`SXC LogicalStack "module" unexpected override!`);return e.stack.module=t,{...e}}function Us(e,t){if(Object.hasOwn(e.stack,`operation`)&&e.stack.operation)throw Error(`SXC LogicalStack "operation" unexpected override!`);return e.stack.operation=t,{...e}}function Ws(e){if(!e)throw Error(`SXC Unexpected case F1!`);if(Array.isArray(e))throw Error(`SXC Unexpected case F2!`);if(typeof e!=`object`)throw Error(`SXC Unexpected case F3!`);let t=Object.create(null);for(let n in e)t[n]=e[n];return t}function Gs(e){return e&&e._SXC}function Ks(e){if(!Gs(e))throw Error(`Unexpected non SXC passed around!`);return e}function qs(e){let t=Ks(e);if(!t._SXC.cache.statePath){let e=[],n=t[Ps];for(;n;)e.unshift(n),n=n.parent;t[Ps].cache.statePath=e}return t[Ps].cache.statePath}var Js=`logical_stack`,Ys={sid:-1,parent:void 0,plugins:{[Js]:{stack:{operation:`…`}}},cache:{}};function Xs(e){let t;return e.reduce((e,n)=>{let{module:r,operation:i}=n.plugins[Js].stack;return r&&r!==t&&(e=e+(e.length?`›`:``)+r,t=r),i&&(e=e+`›`+i),e},``)+``}var Zs={id:Js,state:Bs,augment:e=>{e.setLogicalStack=function({module:e,operation:t}){let n=this,r=n[Ps];return r=zs(r,Js,n=>(e&&(n=Hs(n,e)),t&&(n=Us(n,t)),n)),n[Ps]=r,n},e.getLogicalStack=function(){return Xs(qs(this))},e.getShortLogicalStack=function(){let{stack:e}=this[Ps].plugins[Js];return``+e.module+`…`+e.operation},e._decorateErrorWithLogicalStack=function(e){let t=this;e._temp=e._temp||{},e.details=e.details||{};let n={full:t.getLogicalStack(),short:void 0};if(e._temp.SXC){if(!e.details.logicalStack?.includes(n.full)){let n=e._temp.statePath,r=qs(t),i=0;for(let e=1;e<r.length&&n[e]===r[e];++e)i=e;let a=[...r];a.push(Ys),a=a.concat(n.slice(i+1)),e._temp.statePath=a,e.details.logicalStack=Xs(a)}}else{if(e._temp.SXC=t,e._temp.statePath=qs(t),n.short=t.getShortLogicalStack(),e.message.startsWith(n.short))console.warn(`UNEXPECTED SXC non-decorated error already prefixed??`);else{let t=e.message;e.message=n.short+`: `+t;let r=`${e.name}: ${t}`;e.stack?.startsWith(r)&&(e.stack=`${e.name}: ${e.message}`+e.stack.slice(r.length))}e.details.logicalStack=n.full}return e}}},Qs=s({create:()=>$s,injectDependency:()=>ec});function $s(e){return{context:Object.create(e?e.context:null)}}function ec(e,t,n){return Object.hasOwn(e.context,t)&&e.context[t]===n?e:(e.context[t]=n,{...e})}var tc=`dependency_injection`,nc={id:tc,state:Qs,augment:e=>{e.injectDependencies=function(e){let t=this[Ps];return t=zs(t,tc,t=>(Object.entries(e).forEach(([e,n])=>{if(e===`SXC`)throw Error(`SXC.injectDependencies() forbidden internal property "SXC"!`);t=ec(t,e,n)}),t)),this[Ps]=t,this},e.getInjectedDependencies=function(){let e=this[Ps].plugins[tc];return{...Ws(e.context),SXC:this}}}},rc=s({addDetail:()=>ac,create:()=>ic});function ic(e){return{details:Object.create(e?e.details:null)}}function ac(e,t,n){return Object.hasOwn(e.details,t)&&e.details[t]===n?e:(e.details[t]=n,{...e})}function oc({decorators:e=[],onError:t,debugId:n=`?`}={}){return r=>{if(r=e.reduce((e,t)=>{try{if(e=t(e),!e.message)throw Error()}catch(r){console.error(`catchFactory exec from ${n}: bad decorator!`,{err:e,decoratorErr:r,"decorator.name":t.name})}return e},r),t)return t(r);throw r}}var sc=`error_handling`;function cc(e){return delete e._temp,e}function lc({SXC:e,debugId:t=`?`,shouldRethrow:n=!0},r){oc({debugId:t,decorators:[e=>Ms(e,{alwaysRecreate:!0}),t=>e._decorateErrorWithLogicalStack(t),t=>e._decorateErrorWithDetails(t)],onError:n?void 0:t=>{let n={...e.getInjectedDependencies(),err:cc(t)};e.emitter.emit(`final-error`,n)}})(r)}var uc={id:sc,state:rc,augment:e=>{e._decorateErrorWithDetails=function(e){let t=this,n=t[Ps],r=Ts(),{ENV:i,SESSION_START_TIME_MS:a}=t.getInjectedDependencies(),o={ENV:i,TIME:r,SESSION_DURATION_MS:r-a},s=Ws(n.plugins[sc].details);return e.details={...o,...s,...e.details||{}},e},e.setErrorDetails=function(e){let t=this,n=t[Ps];return n=zs(n,sc,t=>(Object.entries(e).forEach(([e,n])=>{t=ac(t,e,n)}),t)),this[Ps]=n,t},e.getErrorDetails=function(){let e=this[Ps].plugins[sc];return Ws(e.details)},e.createError=function(e,t={}){let n=this,r=js(e,t);return r.framesToPop=(r.framesToPop||0)+1,n._decorateErrorWithLogicalStack(n._decorateErrorWithDetails(r))},e.handleError=function(e,t){lc({SXC:this,debugId:t,shouldRethrow:!1},e)},e.xTry=function(e,t){console.assert(!!e);let n=this.createChild().setLogicalStack({operation:e}),r=n.getInjectedDependencies();try{return t(r)}catch(e){throw lc({SXC:n,debugId:`xTry`,shouldRethrow:!0},e),e}},e.xTryCatch=function(e,t){console.assert(!!e);let n=this.createChild().setLogicalStack({operation:e}),r=n.getInjectedDependencies();try{t(r)}catch(e){lc({SXC:n,debugId:`xTryCatch`,shouldRethrow:!1},e)}},e.xPromiseTry=function(e,t){console.assert(!!e);let n=this.createChild().setLogicalStack({operation:e}),r=n.getInjectedDependencies();return Promise.resolve().then(()=>t(r)).catch(e=>{lc({SXC:n,debugId:`xPromiseTry`,shouldRethrow:!0},e)})}}},dc=s({addDetail:()=>pc,create:()=>fc});function fc(e){return{details:Object.create(e?e.details:null)}}function pc(e,t,n){return Object.hasOwn(e.details,t)&&e.details[t]===n?e:(e.details[t]=n,{...e})}var mc=`analytics`,hc={id:mc,state:dc,augment:e=>{e.setAnalyticsDetails=function(e){let t=this,n=t[Ps];return n=zs(n,mc,t=>(Object.entries(e).forEach(([e,n])=>{t=pc(t,e,n)}),t)),this[Ps]=n,t},e.getAnalyticsDetails=function(){let e=this[Ps].plugins[mc];return Ws(e.details)},e.fireAnalyticsEvent=function(e,t={}){let n=this,r=Ts(),i=n[Ps];if(!e)throw Error(`Incorrect eventId!`);let{ENV:a}=n.getInjectedDependencies(),o={ENV:a,TIME:r,SESSION_DURATION_MS:r-i.plugins[tc].context.SESSION_START_TIME_MS},s=n.getAnalyticsDetails();return t={...o,...s,...t},n.emitter.emit(`analytics`,{SXC:n,eventId:e,details:t}),n}}},gc={[hc.id]:hc,[nc.id]:nc,[uc.id]:uc,[Zs.id]:Zs},_c=Object.values(gc);Fs.createChild=function(){return vc(this)},_c.forEach(e=>{e.augment(Fs)});function vc(e){if(e&&!yc(e))throw Error(`${Ns}›createSXC() argument error: parent must be a valid SXC!`);let t=Object.create(Fs),n=e?.[Ps],r=Ls(n);return _c.forEach(e=>{r=Rs(r,e)}),t[Ps]=r,e||(t.injectDependencies({logger:console}),bc(t)),t}function yc(e){return e&&e._SXC}function bc(e){let t=(()=>{try{return`production`}catch{}return`development`})(),n=Ts();e.injectDependencies({ENV:t,IS_DEV_MODE:!1,IS_VERBOSE:!1,CHANNEL:`dev`,SESSION_START_TIME_MS:n}),e.setAnalyticsAndErrorDetails({ENV:t,CHANNEL:`dev`})}function xc(){let e=globalThis;return e.__global_root_sec||=vc(),e.__global_root_sec}globalThis.process?.nextTick,globalThis.setImmediate;var Sc=2,Cc=50,wc=globalThis.requestIdleCallback?.bind(globalThis)||function(e,{timeout:t}={}){t!==void 0&&(We(t>=Sc,`whats the point in requesting idle with a short timeout??`),We(t<=Cc,`must be an error requesting idle with a timeout of more than 50ms??`));let n=Date.now();function r(){return Math.max(0,(t||50)-(Date.now()-n))}return setTimeout(()=>{e({didTimeout:!1,timeRemaining:r})},Math.min(t||1/0,37))},Tc=50;function Ec(e,t=Tc){return new Promise((n,r)=>{wc(()=>{try{n(e())}catch(e){r(e)}},{timeout:t})})}function Dc(e){return Ec(e,Tc)}function Oc(e){return new Promise((t,n)=>{queueMicrotask(()=>{try{t(e())}catch(e){n(e)}})})}var kc=Number.isNaN||function(e){return typeof e==`number`&&e!==e};function Ac(e,t){return!!(e===t||kc(e)&&kc(t))}function jc(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Ac(e[n],t[n]))return!1;return!0}function Mc(e,t){t===void 0&&(t=jc);var n=null;function r(){var r=[...arguments];if(n&&n.lastThis===this&&t(r,n.lastArgs))return n.lastResult;var i=e.apply(this,r);return n={lastResult:i,lastArgs:r,lastThis:this},i}return r.clear=function(){n=null},r}var Nc=`render_any_children()`;function Pc(e){return e?.render||e?.prototype?.render}var Fc=0;function Ic(e){let{children:t,render:n,...r}=e,i=e.key||e.name||`ra#${Fc++}`;We(t||n,`[${Nc}] "${i}": no children nor render prop!`),We(!(t&&n),`[${Nc}] "${i}": competing children and render prop!`);let a=t||n;return Pc(a)?(0,N.jsx)(a,{...e}):typeof a==`function`?a({...a.defaultProps||{},...r}):a}Mc(Ic);function Lc({name:e,error:t,errorInfo:n}){return(0,N.jsxs)(`div`,{className:`o⋄error-report error-boundary-report-${e}`,style:{padding:`.3em`},children:[(0,N.jsxs)(`h2`,{style:{margin:`0`},children:[`Boundary "`,e,`": Something went wrong`]}),(0,N.jsxs)(`details`,{open:!1,style:{whiteSpace:`pre-wrap`,margin:`.3em 0`},children:[(0,N.jsx)(`summary`,{children:(t||`unknown error`).toString()}),`componentStack = `,(n?.componentStack||`(none)`).trim(),(0,N.jsx)(`br`,{}),`digest = `,(n?.digest||`(none)`).trim()]}),(0,N.jsx)(`a`,{href:`https://github.com/Offirmo/offirmo-monorepo/issues`,target:`_blank`,referrerPolicy:`no-referrer-when-downgrade`,rel:`noopener external`,children:(0,N.jsx)(`strong`,{children:`Report bug`})}),`\xA0`,(0,N.jsx)(`button`,{style:{"--o⋄color⁚fg--main":`var(--o⋄color⁚fg--error)`},onClick:()=>window.location.reload(),children:`Reload page`})]},`error:${e}`)}var Rc=class extends I.Component{mounted=!0;SXC;state={error:void 0,errorInfo:void 0};constructor(e){super(e);let{name:t,SXC:n=xc()}=e;We(t,`ErrorBoundary must have a name!!!`),this.SXC=n.createChild().setLogicalStack({module:`ErrorBoundary:${t}`}).setAnalyticsAndErrorDetails({error_boundary:t})}componentDidMount(){}componentWillUnmount(){this.mounted=!1}componentDidCatch=(e,t)=>{let{name:n}=this.props;this.SXC.xTryCatch(`handling error boundary "${n}"`,({SXC:r,logger:i})=>{this.mounted&&this.setState({error:e,errorInfo:t}),i.error(`Error caught in react-error-boundary@"${n}"`,{error:e,errorInfo:t,isMounted:this.mounted}),r.fireAnalyticsEvent(`react.error-boundary.triggered`,{err:e,isMounted:this.mounted})})};render(){let{name:e}=this.props;if(this.state.error||this.state.errorInfo){let{error:t,errorInfo:n}=this.state;return(0,N.jsx)(Lc,{name:e,error:t,errorInfo:n})}try{return Ic(this.props)}catch(t){Oc(()=>this.componentDidCatch(t,{digest:`crash in ErrorBoundary.render("${e}")`}))}return null}},zc=(()=>{let{promise:e,resolve:t,reject:n}=Promise.withResolvers();return document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>{t()}):t(),e.then(()=>{}),e})(),Bc=(()=>{let{promise:e,resolve:t,reject:n}=Promise.withResolvers();return document.readyState===`complete`?zc.then(()=>{t()}):window.addEventListener(`load`,()=>{zc.then(()=>{t()})}),e.then(()=>{}),e})(),Vc=Et();async function Hc(){xc().xTry(`view`,async({logger:e,SXC:t,CHANNEL:n})=>{console.log(`🔄 scheduling React start later…`),await Bc,await Dc(()=>{console.log(`🔄 now starting view with react…`);let e=document.getElementById(`react-root`)||document.body,r=n===`dev`?I.StrictMode:I.Fragment;(0,Vc.createRoot)(e).render((0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(r,{children:(0,N.jsx)(Rc,{name:`reactᐧroot`,SXC:t,children:(0,N.jsx)(I.Suspense,{fallback:(0,N.jsx)(`span`,{children:`Loading data…`}),children:(0,N.jsx)(bt,{})})})}),n===`dev`&&(0,N.jsx)(zo,{})]}))})})}console.log(`index.tsx`),Hc();export{y as a,Fe as i,Ye as n,Be as r,F as t};