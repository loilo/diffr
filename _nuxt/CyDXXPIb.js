import{k as Z,l as Q,R as ee,j as te,v as x,x as N,S as D,f as J,q as pe,c as se,r as S,i as ve,o as ie,a as me,h as C,H as he,U as ge,g as ye,w as be,D as we,V as _e,W as Se,E as Te,X as xe,z as A,J as H,P as le,A as M,Y as ke,Z as Ae,$ as q,a0 as Ce,C as G,a1 as Oe,a2 as Ee,N as Pe,B as Re}from"./CEpLTXMU.js";import{_ as Ne}from"./DlAUqK2U.js";import{_ as Be}from"./CvzAiVhf.js";const je=Symbol.for("nuxt:client-only"),ft=J({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:n}){const r=x(!1);return N(()=>{r.value=!0}),pe(je,!0),s=>{var d;if(r.value)return(d=t.default)==null?void 0:d.call(t);const i=t.fallback||t.placeholder;if(i)return i();const c=s.fallback||s.placeholder||"",u=s.fallbackTag||s.placeholderTag||"span";return se(u,n,c)}}}),I=new WeakMap;function dt(e){if(I.has(e))return I.get(e);const t={...e};return t.render?t.render=(n,r,s,i,c,u)=>{var d;if(i.mounted$??n.mounted$){const a=(d=e.render)==null?void 0:d.bind(n)(n,r,s,i,c,u);return a.children===null||typeof a.children=="string"?Z(a):Q(a)}else{const a=ee(n._.vnode.el??null)??["<div></div>"];return te(a.join(""),a.length)}}:t.template&&(t.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(n,r)=>{var d;const s=D(),i={...s.attrs},c=We(s);for(const a in i)delete s.attrs[a];const u=x(!1);return N(()=>{Object.assign(s.attrs,i),s.vnode.dirs=c,u.value=!0}),Promise.resolve(((d=e.setup)==null?void 0:d.call(e,n,r))||{}).then(a=>typeof a!="function"?(a=a||{},a.mounted$=u,a):(...l)=>{if(u.value){const o=a(...l);return o.children===null||typeof o.children=="string"?Z(o):Q(o)}else{const o=ee((s==null?void 0:s.vnode.el)??null)??["<div></div>"];return te(o.join(""),o.length)}})},I.set(e,t),t}function We(e){if(!e||!e.vnode.dirs)return null;const t=e.vnode.dirs;return e.vnode.dirs=null,t}const Me=["src","alt"],$e=J({__name:"Icon",props:{name:{},alt:{}},setup(e){let t=e,n=S(()=>ve(`icons/${t.name}.svg`)),r=S(()=>`url('${n.value}')`);return(s,i)=>(ie(),se("div",{class:"icon inline-flex",style:he({"--icon-mask":C(r)})},[me("img",{class:"block opacity-0",src:C(n),alt:s.alt,draggable:"false"},null,8,Me)],4))}}),pt=Ne($e,[["__scopeId","data-v-6d6e32a6"]]),Fe={inheritAttrs:!1},vt=J({...Fe,__name:"ActionTrigger",props:{link:{default:void 0},disabled:{type:Boolean,default:!1}},setup(e){let t=e,n=S(()=>typeof t.link<"u"),r=S(()=>typeof t.link=="string"),s=S(()=>r.value&&t.link.startsWith("#")),i=S(()=>r.value&&/^https?:\/\//.test(t.link)),c=S(()=>n.value&&!s.value&&!i.value),u=S(()=>t.disabled?"button":n.value&&!i.value?Be:n.value?"a":"button"),d=ge(),a=S(()=>{if(t.disabled)return{disabled:!0};if(c.value)return{to:t.link};if(n.value){let l={href:t.link};return"target"in d&&(l.rel="noopener"),l}else return{type:"button"}});return(l,o)=>(ie(),ye(xe(C(u)),Te({...C(a),...l.$attrs},{class:{"cursor-pointer":!l.disabled,"cursor-default":l.disabled}}),{default:be(()=>[we(l.$slots,"default",_e(Se({link:C(n),external:C(i),anchor:C(s)})))]),_:3},16,["class"]))}});function De(e,t){let n,r,s;const i=x(!0),c=()=>{i.value=!0,s()};A(e,c,{flush:"sync"});const u=typeof t=="function"?t:t.get,d=typeof t=="function"?void 0:t.set,a=q((l,o)=>(r=l,s=o,{get(){return i.value&&(n=u(n),i.value=!1),r(),n},set(f){d==null||d(f)}}));return Object.isExtensible(a)&&(a.trigger=c),a}function L(e){return ke()?(Ae(e),!0):!1}function mt(e){return C(e)!=null}function b(e){return typeof e=="function"?e():C(e)}const K=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Le=Object.prototype.toString,Ve=e=>Le.call(e)==="[object Object]",$=()=>{};function ae(e,t){function n(...r){return new Promise((s,i)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(s).catch(i)})}return n}const ue=e=>e();function ze(...e){let t=0,n,r=!0,s=$,i,c,u,d,a;!le(e[0])&&typeof e[0]=="object"?{delay:c,trailing:u=!0,leading:d=!0,rejectOnCancel:a=!1}=e[0]:[c,u=!0,d=!0,a=!1]=e;const l=()=>{n&&(clearTimeout(n),n=void 0,s(),s=$)};return f=>{const p=b(c),m=Date.now()-t,g=()=>i=f();return l(),p<=0?(t=Date.now(),g()):(m>p&&(d||!r)?(t=Date.now(),g()):u&&(i=new Promise((y,w)=>{s=a?w:y,n=setTimeout(()=>{t=Date.now(),r=!0,y(g()),l()},Math.max(0,p-m))})),!d&&!n&&(n=setTimeout(()=>r=!0,p)),r=!1,i)}}function Ie(e=ue){const t=x(!0);function n(){t.value=!1}function r(){t.value=!0}const s=(...i)=>{t.value&&e(...i)};return{isActive:H(t),pause:n,resume:r,eventFilter:s}}function ne(e,t=!1,n="Timeout"){return new Promise((r,s)=>{setTimeout(t?()=>s(n):r,e)})}function Ue(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const r=t;t=void 0,r&&await r},n}function Je(e){return D()}function He(...e){if(e.length!==1)return Ce(...e);const t=e[0];return typeof t=="function"?H(q(()=>({get:t,set:$}))):x(t)}function ht(e,t=1e4){return q((n,r)=>{let s=b(e),i;const c=()=>setTimeout(()=>{s=b(e),r()},b(t));return L(()=>{clearTimeout(i)}),{get(){return n(),s},set(u){s=u,r(),clearTimeout(i),i=c()}}})}function qe(e,t=200,n=!1,r=!0,s=!1){return ae(ze(t,n,r,s),e)}function gt(e,t=200,n=!0,r=!0){if(t<=0)return e;const s=x(e.value),i=qe(()=>{s.value=e.value},t,n,r);return A(e,()=>i()),s}function Ge(e,t,n={}){const{eventFilter:r=ue,...s}=n;return A(e,ae(r,t),s)}function Ke(e,t,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:c,resume:u,isActive:d}=Ie(r);return{stop:Ge(e,t,{...s,eventFilter:i}),pause:c,resume:u,isActive:d}}function X(e,t=!0,n){Je()?N(e,n):t?e():M(e)}function U(e,t=!1){function n(o,{flush:f="sync",deep:p=!1,timeout:m,throwOnTimeout:g}={}){let y=null;const h=[new Promise(_=>{y=A(e,k=>{o(k)!==t&&(y?y():M(()=>y==null?void 0:y()),_(k))},{flush:f,deep:p,immediate:!0})})];return m!=null&&h.push(ne(m,g).then(()=>b(e)).finally(()=>y==null?void 0:y())),Promise.race(h)}function r(o,f){if(!le(o))return n(k=>k===o,f);const{flush:p="sync",deep:m=!1,timeout:g,throwOnTimeout:y}=f??{};let w=null;const _=[new Promise(k=>{w=A([e,o],([R,z])=>{t!==(R===z)&&(w?w():M(()=>w==null?void 0:w()),k(R))},{flush:p,deep:m,immediate:!0})})];return g!=null&&_.push(ne(g,y).then(()=>b(e)).finally(()=>(w==null||w(),b(e)))),Promise.race(_)}function s(o){return n(f=>!!f,o)}function i(o){return r(null,o)}function c(o){return r(void 0,o)}function u(o){return n(Number.isNaN,o)}function d(o,f){return n(p=>{const m=Array.from(p);return m.includes(o)||m.includes(b(o))},f)}function a(o){return l(1,o)}function l(o=1,f){let p=-1;return n(()=>(p+=1,p>=o),f)}return Array.isArray(b(e))?{toMatch:n,toContains:d,changed:a,changedTimes:l,get not(){return U(e,!t)}}:{toMatch:n,toBe:r,toBeTruthy:s,toBeNull:i,toBeNaN:u,toBeUndefined:c,changed:a,changedTimes:l,get not(){return U(e,!t)}}}function yt(e){return U(e)}function Xe(e,t,n={}){const{immediate:r=!0}=n,s=x(!1);let i=null;function c(){i&&(clearTimeout(i),i=null)}function u(){s.value=!1,c()}function d(...a){c(),s.value=!0,i=setTimeout(()=>{s.value=!1,i=null,e(...a)},b(t))}return r&&(s.value=!0,K&&d()),L(u),{isPending:H(s),start:d,stop:u}}function E(e){var t;const n=b(e);return(t=n==null?void 0:n.$el)!=null?t:n}const P=K?window:void 0,Y=K?window.navigator:void 0;function F(...e){let t,n,r,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,s]=e,t=P):[t,n,r,s]=e,!t)return $;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],c=()=>{i.forEach(l=>l()),i.length=0},u=(l,o,f,p)=>(l.addEventListener(o,f,p),()=>l.removeEventListener(o,f,p)),d=A(()=>[E(t),b(s)],([l,o])=>{if(c(),!l)return;const f=Ve(o)?{...o}:o;i.push(...n.flatMap(p=>r.map(m=>u(l,p,m,f))))},{immediate:!0,flush:"post"}),a=()=>{d(),c()};return L(a),a}function Ye(){const e=x(!1),t=D();return t&&N(()=>{e.value=!0},t),e}function V(e){const t=Ye();return S(()=>(t.value,!!e()))}function re(e,t={}){const{controls:n=!1,navigator:r=Y}=t,s=V(()=>r&&"permissions"in r);let i;const c=typeof e=="string"?{name:e}:e,u=x(),d=()=>{i&&(u.value=i.state)},a=Ue(async()=>{if(s.value){if(!i)try{i=await r.permissions.query(c),F(i,"change",d),d()}catch{u.value="prompt"}return i}});return a(),n?{state:u,isSupported:s,query:a}:u}function bt(e={}){const{navigator:t=Y,read:n=!1,source:r,copiedDuring:s=1500,legacy:i=!1}=e,c=V(()=>t&&"clipboard"in t),u=re("clipboard-read"),d=re("clipboard-write"),a=S(()=>c.value||i),l=x(""),o=x(!1),f=Xe(()=>o.value=!1,s);function p(){c.value&&w(u.value)?t.clipboard.readText().then(h=>{l.value=h}):l.value=y()}a.value&&n&&F(["copy","cut"],p);async function m(h=b(r)){a.value&&h!=null&&(c.value&&w(d.value)?await t.clipboard.writeText(h):g(h),l.value=h,o.value=!0,f.start())}function g(h){const _=document.createElement("textarea");_.value=h??"",_.style.position="absolute",_.style.opacity="0",document.body.appendChild(_),_.select(),document.execCommand("copy"),_.remove()}function y(){var h,_,k;return(k=(_=(h=document==null?void 0:document.getSelection)==null?void 0:h.call(document))==null?void 0:_.toString())!=null?k:""}function w(h){return h==="granted"||h==="prompt"}return{isSupported:a,text:l,copied:o,copy:m}}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__",Ze=Qe();function Qe(){return W in j||(j[W]=j[W]||{}),j[W]}function et(e,t){return Ze[e]||t}function tt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const nt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},oe="vueuse-storage";function rt(e,t,n,r={}){var s;const{flush:i="pre",deep:c=!0,listenToStorageChanges:u=!0,writeDefaults:d=!0,mergeDefaults:a=!1,shallow:l,window:o=P,eventFilter:f,onError:p=v=>{console.error(v)},initOnMounted:m}=r,g=(l?G:x)(t);if(!n)try{n=et("getDefaultStorage",()=>{var v;return(v=P)==null?void 0:v.localStorage})()}catch(v){p(v)}if(!n)return g;const y=b(t),w=tt(y),h=(s=r.serializer)!=null?s:nt[w],{pause:_,resume:k}=Ke(g,()=>z(g.value),{flush:i,deep:c,eventFilter:f});o&&u&&X(()=>{n instanceof Storage?F(o,"storage",B):F(o,oe,de),m&&B()}),m||B();function R(v,T){o&&!(n instanceof Storage)&&o.dispatchEvent(new CustomEvent(oe,{detail:{key:e,oldValue:v,newValue:T,storageArea:n}}))}function z(v){try{const T=n.getItem(e);if(v==null)R(T,null),n.removeItem(e);else{const O=h.write(v);T!==O&&(n.setItem(e,O),R(T,O))}}catch(T){p(T)}}function fe(v){const T=v?v.newValue:n.getItem(e);if(T==null)return d&&y!=null&&n.setItem(e,h.write(y)),y;if(!v&&a){const O=h.read(T);return typeof a=="function"?a(O,y):w==="object"&&!Array.isArray(O)?{...y,...O}:O}else return typeof T!="string"?T:h.read(T)}function B(v){if(!(v&&v.storageArea!==n)){if(v&&v.key==null){g.value=y;return}if(!(v&&v.key!==e)){_();try{(v==null?void 0:v.newValue)!==h.write(g.value)&&(g.value=fe(v))}catch(T){p(T)}finally{v?M(k):k()}}}}function de(v){B(v.detail)}return g}function ot(e){const t=D(),n=De(()=>null,()=>t.proxy.$el);return Oe(n.trigger),N(n.trigger),n}function st(e,t){const n=G(a()),r=He(e),s=S({get(){var l;const o=r.value;let f=t!=null&&t.getIndexOf?t.getIndexOf(n.value,o):o.indexOf(n.value);return f<0&&(f=(l=t==null?void 0:t.fallbackIndex)!=null?l:0),f},set(l){i(l)}});function i(l){const o=r.value,f=o.length,p=(l%f+f)%f,m=o[p];return n.value=m,m}function c(l=1){return i(s.value+l)}function u(l=1){return c(l)}function d(l=1){return c(-l)}function a(){var l,o;return(o=b((l=t==null?void 0:t.initialValue)!=null?l:b(e)[0]))!=null?o:void 0}return A(r,()=>i(s.value)),{state:n,index:s,next:u,prev:d,go:i}}function it(e,t,n={}){const{window:r=P,...s}=n;let i;const c=V(()=>r&&"ResizeObserver"in r),u=()=>{i&&(i.disconnect(),i=void 0)},d=S(()=>{const o=b(e);return Array.isArray(o)?o.map(f=>E(f)):[E(o)]}),a=A(d,o=>{if(u(),c.value&&r){i=new ResizeObserver(t);for(const f of o)f&&i.observe(f,s)}},{immediate:!0,flush:"post"}),l=()=>{u(),a()};return L(l),{isSupported:c,stop:l}}function wt(e,t={width:0,height:0},n={}){const{window:r=P,box:s="content-box"}=n,i=S(()=>{var o,f;return(f=(o=E(e))==null?void 0:o.namespaceURI)==null?void 0:f.includes("svg")}),c=x(t.width),u=x(t.height),{stop:d}=it(e,([o])=>{const f=s==="border-box"?o.borderBoxSize:s==="content-box"?o.contentBoxSize:o.devicePixelContentBoxSize;if(r&&i.value){const p=E(e);if(p){const m=p.getBoundingClientRect();c.value=m.width,u.value=m.height}}else if(f){const p=Array.isArray(f)?f:[f];c.value=p.reduce((m,{inlineSize:g})=>m+g,0),u.value=p.reduce((m,{blockSize:g})=>m+g,0)}else c.value=o.contentRect.width,u.value=o.contentRect.height},n);X(()=>{const o=E(e);o&&(c.value="offsetWidth"in o?o.offsetWidth:t.width,u.value="offsetHeight"in o?o.offsetHeight:t.height)});const a=A(()=>E(e),o=>{c.value=o?t.width:0,u.value=o?t.height:0});function l(){d(),a()}return{width:c,height:u,stop:l}}function _t(e=ot()){const t=G(),n=()=>{const r=E(e);r&&(t.value=r.parentElement)};return X(n),A(()=>b(e),n),t}function St(e,t,n={}){const{window:r=P}=n;return rt(e,t,r==null?void 0:r.sessionStorage,n)}function Tt(e={},t={}){const{navigator:n=Y}=t,r=n,s=V(()=>r&&"canShare"in r);return{isSupported:s,share:async(c={})=>{if(s.value){const u={...b(e),...b(c)};let d=!0;if(u.files&&r.canShare&&(d=r.canShare({files:u.files})),d)return r.share(u)}}}}const ce=()=>Ee("color-mode").value,lt=Pe("color-preference-cycle",()=>{let e=ce();return st(["light","system","dark"],{initialValue:e.preference})});function xt(){let e=ce(),t=lt();function n(){t.next(),e.preference=t.state}let r=S(()=>e.preference==="system"?e.value==="dark"?"dark":"light":e.preference==="dark"?"dark":"light");return Re({auto:S(()=>e.preference==="system"),theme:r,toggle:n})}export{ft as _,xt as a,pt as b,vt as c,_t as d,E as e,F as f,wt as g,yt as h,mt as i,St as j,gt as k,Tt as l,re as m,bt as n,dt as o,ht as r,Ye as u};
