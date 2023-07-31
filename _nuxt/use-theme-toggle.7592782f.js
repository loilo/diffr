import{a as U,l as F,E as J,v as b,x as C,f as q,c as fe,r as g,i as ge,o as de,h as P,H as we,S as be,g as Oe,w as Se,D as Pe,J as $e,K as xe,U as Ae,z as S,L as K,V as Te,W as Ee,X as G,Y as X,A as pe,Z as ke,R as Ce,C as Y,$ as je,a0 as Fe,P as Re,B as Ne}from"./entry.747858c6.js";import{_ as Ie}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as Be}from"./nuxt-link.0512d55b.js";const Et=q({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:r}){const n=b(!1);return C(()=>{n.value=!0}),a=>{var l;if(n.value)return(l=t.default)==null?void 0:l.call(t);const o=t.fallback||t.placeholder;if(o)return o();const i=a.fallback||a.placeholder||"",c=a.fallbackTag||a.placeholderTag||"span";return fe(c,r,i)}}}),W=new WeakMap;/*! @__NO_SIDE_EFFECTS__ */function kt(e){if(W.has(e))return W.get(e);const t={...e};return t.render?t.render=(r,...n)=>{if(r.mounted$){const a=e.render(r,...n);return a.children===null||typeof a.children=="string"?U(a.type,a.props,a.children,a.patchFlag,a.dynamicProps,a.shapeFlag):F(a)}else return F("div",J(r.$attrs??r._.attrs,{key:"placeholder-key"}))}:t.template&&(t.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(r,n)=>{var o;const a=b(!1);return C(()=>{a.value=!0}),Promise.resolve(((o=e.setup)==null?void 0:o.call(e,r,n))||{}).then(i=>typeof i!="function"?{...i,mounted$:a}:(...c)=>{if(a.value){const l=i(...c);return l.children===null||typeof l.children=="string"?U(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):F(l)}else return F("div",J(n.attrs,{key:"placeholder-key"}))})},W.set(e,t),t}const De=["src","alt"],ze=q({__name:"Icon",props:{name:{},alt:{}},setup(e){const t=e;let r=g(()=>ge(`icons/${t.name}.svg`)),n=g(()=>`url('${r.value}')`);return(a,o)=>(de(),fe("div",{class:"icon inline-flex",style:we({"--icon-mask":P(n)})},[U("img",{class:"block opacity-0",src:P(r),alt:a.alt,draggable:"false"},null,8,De)],4))}});const Ct=Ie(ze,[["__scopeId","data-v-6d6e32a6"]]),Me={inheritAttrs:!1},jt=q({...Me,__name:"ActionTrigger",props:{link:{default:void 0},disabled:{type:Boolean,default:!1}},setup(e){const t=e;let r=g(()=>typeof t.link<"u"),n=g(()=>typeof t.link=="string"),a=g(()=>n.value&&t.link.startsWith("#")),o=g(()=>n.value&&/^https?:\/\//.test(t.link)),i=g(()=>r.value&&!a.value&&!o.value),c=g(()=>t.disabled?"button":r.value&&!o.value?Be:r.value?"a":"button"),l=be(),d=g(()=>{if(t.disabled)return{disabled:!0};if(i.value)return{to:t.link};if(r.value){let u={href:t.link};return"target"in l&&(u.rel="noopener"),u}else return{type:"button"}});return(u,s)=>(de(),Oe(Ae(P(c)),J({...P(d),...u.$attrs},{class:{"cursor-pointer":!u.disabled,"cursor-default":u.disabled}}),{default:Se(()=>[Pe(u.$slots,"default",$e(xe({link:P(r),external:P(o),anchor:P(a)})))]),_:3},16,["class"]))}});function Ve(e,t){let r,n,a;const o=b(!0),i=()=>{o.value=!0,a()};S(e,i,{flush:"sync"});const c=typeof t=="function"?t:t.get,l=typeof t=="function"?void 0:t.set,d=G((u,s)=>(n=u,a=s,{get(){return o.value&&(r=c(),o.value=!1),n(),r},set(f){l==null||l(f)}}));return Object.isExtensible(d)&&(d.trigger=i),d}function z(e){return Te()?(Ee(e),!0):!1}function Ft(e){return P(e)!=null}function _(e){return typeof e=="function"?e():P(e)}const Z=typeof window<"u",I=()=>{};function ve(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const me=e=>e();function Le(e,t=!0,r=!0,n=!1){let a=0,o,i=!0,c=I,l;const d=()=>{o&&(clearTimeout(o),o=void 0,c(),c=I)};return s=>{const f=_(e),v=Date.now()-a,h=()=>l=s();return d(),f<=0?(a=Date.now(),h()):(v>f&&(r||!i)?(a=Date.now(),h()):t&&(l=new Promise((p,y)=>{c=n?y:p,o=setTimeout(()=>{a=Date.now(),i=!0,p(h()),d()},Math.max(0,f-v))})),!r&&!o&&(o=setTimeout(()=>i=!0,f)),i=!1,l)}}function We(e=me){const t=b(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:K(t),pause:r,resume:n,eventFilter:a}}function ee(e,t=!1,r="Timeout"){return new Promise((n,a)=>{setTimeout(t?()=>a(r):n,e)})}function Ue(e){let t;function r(){return t||(t=e()),t}return r.reset=async()=>{const n=t;t=void 0,n&&await n},r}function Je(...e){if(e.length!==1)return ke(...e);const t=e[0];return typeof t=="function"?K(G(()=>({get:t,set:I}))):b(t)}function Rt(e,t=1e4){return G((r,n)=>{let a=e,o;const i=()=>setTimeout(()=>{a=e,n()},_(t));return z(()=>{clearTimeout(o)}),{get(){return r(),a},set(c){a=c,n(),clearTimeout(o),o=i()}}})}function He(e,t=200,r=!1,n=!0,a=!1){return ve(Le(t,r,n,a),e)}function Nt(e,t=200,r=!0,n=!0){if(t<=0)return e;const a=b(e.value),o=He(()=>{a.value=e.value},t,r,n);return S(e,()=>o()),a}function qe(e,t=!0){X()?C(e):t?e():pe(e)}function H(e,t=!1){function r(s,{flush:f="sync",deep:v=!1,timeout:h,throwOnTimeout:p}={}){let y=null;const k=[new Promise(x=>{y=S(e,$=>{s($)!==t&&(y==null||y(),x($))},{flush:f,deep:v,immediate:!0})})];return h!=null&&k.push(ee(h,p).then(()=>_(e)).finally(()=>y==null?void 0:y())),Promise.race(k)}function n(s,f){if(!Ce(s))return r($=>$===s,f);const{flush:v="sync",deep:h=!1,timeout:p,throwOnTimeout:y}=f??{};let w=null;const x=[new Promise($=>{w=S([e,s],([j,V])=>{t!==(j===V)&&(w==null||w(),$(j))},{flush:v,deep:h,immediate:!0})})];return p!=null&&x.push(ee(p,y).then(()=>_(e)).finally(()=>(w==null||w(),_(e)))),Promise.race(x)}function a(s){return r(f=>!!f,s)}function o(s){return n(null,s)}function i(s){return n(void 0,s)}function c(s){return r(Number.isNaN,s)}function l(s,f){return r(v=>{const h=Array.from(v);return h.includes(s)||h.includes(_(s))},f)}function d(s){return u(1,s)}function u(s=1,f){let v=-1;return r(()=>(v+=1,v>=s),f)}return Array.isArray(_(e))?{toMatch:r,toContains:l,changed:d,changedTimes:u,get not(){return H(e,!t)}}:{toMatch:r,toBe:n,toBeTruthy:a,toBeNull:o,toBeNaN:c,toBeUndefined:i,changed:d,changedTimes:u,get not(){return H(e,!t)}}}function It(e){return H(e)}function Ke(e,t,r={}){const{immediate:n=!0}=r,a=b(!1);let o=null;function i(){o&&(clearTimeout(o),o=null)}function c(){a.value=!1,i()}function l(...d){i(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...d)},_(t))}return n&&(a.value=!0,Z&&l()),z(c),{isPending:K(a),start:l,stop:c}}var te=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,Ye=(e,t)=>{var r={};for(var n in e)Ge.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&te)for(var n of te(e))t.indexOf(n)<0&&Xe.call(e,n)&&(r[n]=e[n]);return r};function Ze(e,t,r={}){const n=r,{eventFilter:a=me}=n,o=Ye(n,["eventFilter"]);return S(e,ve(a,t),o)}var Qe=Object.defineProperty,et=Object.defineProperties,tt=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,re=(e,t,r)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,rt=(e,t)=>{for(var r in t||(t={}))he.call(t,r)&&re(e,r,t[r]);if(B)for(var r of B(t))ye.call(t,r)&&re(e,r,t[r]);return e},nt=(e,t)=>et(e,tt(t)),at=(e,t)=>{var r={};for(var n in e)he.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&B)for(var n of B(e))t.indexOf(n)<0&&ye.call(e,n)&&(r[n]=e[n]);return r};function ot(e,t,r={}){const n=r,{eventFilter:a}=n,o=at(n,["eventFilter"]),{eventFilter:i,pause:c,resume:l,isActive:d}=We(a);return{stop:Ze(e,t,nt(rt({},o),{eventFilter:i})),pause:c,resume:l,isActive:d}}function T(e){var t;const r=_(e);return(t=r==null?void 0:r.$el)!=null?t:r}const E=Z?window:void 0,Q=Z?window.navigator:void 0;function D(...e){let t,r,n,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,a]=e,t=E):[t,r,n,a]=e,!t)return I;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],i=()=>{o.forEach(u=>u()),o.length=0},c=(u,s,f,v)=>(u.addEventListener(s,f,v),()=>u.removeEventListener(s,f,v)),l=S(()=>[T(t),_(a)],([u,s])=>{i(),u&&o.push(...r.flatMap(f=>n.map(v=>c(u,f,v,s))))},{immediate:!0,flush:"post"}),d=()=>{l(),i()};return z(d),d}function lt(){const e=b(!1);return X()&&C(()=>{e.value=!0}),e}function M(e){const t=lt();return g(()=>(t.value,!!e()))}function Bt(e={}){const{navigator:t=Q,read:r=!1,source:n,copiedDuring:a=1500,legacy:o=!1}=e,i=M(()=>t&&"clipboard"in t),c=g(()=>i.value||o),l=b(""),d=b(!1),u=Ke(()=>d.value=!1,a);function s(){i.value?t.clipboard.readText().then(p=>{l.value=p}):l.value=h()}c.value&&r&&D(["copy","cut"],s);async function f(p=_(n)){c.value&&p!=null&&(i.value?await t.clipboard.writeText(p):v(p),l.value=p,d.value=!0,u.start())}function v(p){const y=document.createElement("textarea");y.value=p??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function h(){var p,y,w;return(w=(y=(p=document==null?void 0:document.getSelection)==null?void 0:p.call(document))==null?void 0:y.toString())!=null?w:""}return{isSupported:c,text:l,copied:d,copy:f}}const R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N="__vueuse_ssr_handlers__",st=it();function it(){return N in R||(R[N]=R[N]||{}),R[N]}function ut(e,t){return st[e]||t}function ct(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var ft=Object.defineProperty,ne=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,ae=(e,t,r)=>t in e?ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,oe=(e,t)=>{for(var r in t||(t={}))dt.call(t,r)&&ae(e,r,t[r]);if(ne)for(var r of ne(t))pt.call(t,r)&&ae(e,r,t[r]);return e};const vt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},le="vueuse-storage";function mt(e,t,r,n={}){var a;const{flush:o="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:l=!0,mergeDefaults:d=!1,shallow:u,window:s=E,eventFilter:f,onError:v=m=>{console.error(m)}}=n,h=(u?Y:b)(t);if(!r)try{r=ut("getDefaultStorage",()=>{var m;return(m=E)==null?void 0:m.localStorage})()}catch(m){v(m)}if(!r)return h;const p=_(t),y=ct(p),w=(a=n.serializer)!=null?a:vt[y],{pause:k,resume:x}=ot(h,()=>$(h.value),{flush:o,deep:i,eventFilter:f});return s&&c&&(D(s,"storage",L),D(s,le,V)),L(),h;function $(m){try{if(m==null)r.removeItem(e);else{const O=w.write(m),A=r.getItem(e);A!==O&&(r.setItem(e,O),s&&s.dispatchEvent(new CustomEvent(le,{detail:{key:e,oldValue:A,newValue:O,storageArea:r}})))}}catch(O){v(O)}}function j(m){const O=m?m.newValue:r.getItem(e);if(O==null)return l&&p!==null&&r.setItem(e,w.write(p)),p;if(!m&&d){const A=w.read(O);return typeof d=="function"?d(A,p):y==="object"&&!Array.isArray(A)?oe(oe({},p),A):A}else return typeof O!="string"?O:w.read(O)}function V(m){L(m.detail)}function L(m){if(!(m&&m.storageArea!==r)){if(m&&m.key==null){h.value=p;return}if(!(m&&m.key!==e)){k();try{h.value=j(m)}catch(O){v(O)}finally{m?pe(x):x()}}}}}function ht(){const e=X(),t=Ve(()=>null,()=>e.proxy.$el);return je(t.trigger),C(t.trigger),t}function yt(e,t){const r=Y(d()),n=Je(e),a=g({get(){var u;const s=n.value;let f=t!=null&&t.getIndexOf?t.getIndexOf(r.value,s):s.indexOf(r.value);return f<0&&(f=(u=t==null?void 0:t.fallbackIndex)!=null?u:0),f},set(u){o(u)}});function o(u){const s=n.value,f=s.length,v=(u%f+f)%f,h=s[v];return r.value=h,h}function i(u=1){return o(a.value+u)}function c(u=1){return i(u)}function l(u=1){return i(-u)}function d(){var u,s;return(s=_((u=t==null?void 0:t.initialValue)!=null?u:_(e)[0]))!=null?s:void 0}return S(n,()=>o(a.value)),{state:r,index:a,next:c,prev:l}}function Dt(e,t={}){const{controls:r=!1,navigator:n=Q}=t,a=M(()=>n&&"permissions"in n);let o;const i=typeof e=="string"?{name:e}:e,c=b(),l=()=>{o&&(c.value=o.state)},d=Ue(async()=>{if(a.value){if(!o)try{o=await n.permissions.query(i),D(o,"change",l),l()}catch{c.value="prompt"}return o}});return d(),r?{state:c,isSupported:a,query:d}:c}var se=Object.getOwnPropertySymbols,_t=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,wt=(e,t)=>{var r={};for(var n in e)_t.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&se)for(var n of se(e))t.indexOf(n)<0&&gt.call(e,n)&&(r[n]=e[n]);return r};function bt(e,t,r={}){const n=r,{window:a=E}=n,o=wt(n,["window"]);let i;const c=M(()=>a&&"ResizeObserver"in a),l=()=>{i&&(i.disconnect(),i=void 0)},d=g(()=>Array.isArray(e)?e.map(f=>T(f)):[T(e)]),u=S(d,f=>{if(l(),c.value&&a){i=new ResizeObserver(t);for(const v of f)v&&i.observe(v,o)}},{immediate:!0,flush:"post",deep:!0}),s=()=>{l(),u()};return z(s),{isSupported:c,stop:s}}function zt(e,t={width:0,height:0},r={}){const{window:n=E,box:a="content-box"}=r,o=g(()=>{var l,d;return(d=(l=T(e))==null?void 0:l.namespaceURI)==null?void 0:d.includes("svg")}),i=b(t.width),c=b(t.height);return bt(e,([l])=>{const d=a==="border-box"?l.borderBoxSize:a==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(n&&o.value){const u=T(e);if(u){const s=n.getComputedStyle(u);i.value=Number.parseFloat(s.width),c.value=Number.parseFloat(s.height)}}else if(d){const u=Array.isArray(d)?d:[d];i.value=u.reduce((s,{inlineSize:f})=>s+f,0),c.value=u.reduce((s,{blockSize:f})=>s+f,0)}else i.value=l.contentRect.width,c.value=l.contentRect.height},r),S(()=>T(e),l=>{i.value=l?t.width:0,c.value=l?t.height:0}),{width:i,height:c}}function Mt(e=ht()){const t=Y(),r=()=>{const n=T(e);n&&(t.value=n.parentElement)};return qe(r),S(()=>_(e),r),t}function Vt(e,t,r={}){const{window:n=E}=r;return mt(e,t,n==null?void 0:n.sessionStorage,r)}var Ot=Object.defineProperty,ie=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable,ue=(e,t,r)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ce=(e,t)=>{for(var r in t||(t={}))St.call(t,r)&&ue(e,r,t[r]);if(ie)for(var r of ie(t))Pt.call(t,r)&&ue(e,r,t[r]);return e};function Lt(e={},t={}){const{navigator:r=Q}=t,n=r,a=M(()=>n&&"canShare"in n);return{isSupported:a,share:async(i={})=>{if(a.value){const c=ce(ce({},_(e)),_(i));let l=!0;if(c.files&&n.canShare&&(l=n.canShare({files:c.files})),l)return n.share(c)}}}}const _e=()=>Fe("color-mode").value,$t=Re("color-preference-cycle",()=>{let e=_e();return yt(["light","system","dark"],{initialValue:e.preference})});function Wt(){let e=_e(),t=$t();function r(){t.next(),e.preference=t.state}let n=g(()=>e.preference==="system"?e.value==="dark"?"dark":"light":e.preference==="dark"?"dark":"light");return Ne({auto:g(()=>e.preference==="system"),theme:n,toggle:r})}export{Et as _,Wt as a,Ct as b,jt as c,Mt as d,T as e,D as f,zt as g,It as h,Ft as i,Vt as j,Nt as k,Lt as l,Dt as m,Bt as n,kt as o,Rt as r,lt as u};
