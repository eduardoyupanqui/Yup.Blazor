const t="stencil-app";let n;let e;let s=false;const o=(t,n="")=>{{return()=>{}}};const l=(t,n)=>{{return()=>{}}};const c="{visibility:hidden}.hydrated{visibility:inherit}";const i="slot-fb{display:contents}slot-fb[hidden]{display:none}";const f=t=>t!=null;const r=t=>{t=typeof t;return t==="object"||t==="function"};function u(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const a=(t,n,...e)=>{let s=null;let o=false;let l=false;const c=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!r(s)){s=String(s)}if(o&&l){c[c.length-1].t+=s}else{c.push(o?d(null,s):s)}l=o}}};i(e);const f=d(t,null);f.o=n;if(c.length>0){f.l=c}return f};const d=(t,n)=>{const e={i:0,u:t,t:n,p:null,l:null};return e};const p={};const y=t=>t&&t.u===p;const h=(t,n)=>{if(t!=null&&!r(t)){if(n&1){return String(t)}return t}return t};const v=(t,n,e)=>{const s=lt.ce(n,e);t.dispatchEvent(s);return s};const $=new WeakMap;const m=(t,n,e)=>{let s=et.get(t);if(it&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}et.set(t,s)};const b=(t,n,e)=>{var s;const o=S(n);const l=et.get(o);t=t.nodeType===11?t:ot;if(l){if(typeof l==="string"){t=t.head||t;let e=$.get(t);let c;if(!e){$.set(t,e=new Set)}if(!e.has(o)){{c=ot.createElement("style");c.innerHTML=l;const n=(s=lt.h)!==null&&s!==void 0?s:u(ot);if(n!=null){c.setAttribute("nonce",n)}t.insertBefore(c,t.querySelector("link"))}if(n.i&4){c.innerHTML+=i}if(e){e.add(o)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return o};const w=t=>{const n=t.v;const e=t.$hostElement$;const s=n.i;const l=o("attachStyles",n.$);const c=b(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=c;e.classList.add(c+"-h")}l()};const S=(t,n)=>"sc-"+t.$;const g=(t,s,o,l)=>{const c=s.l[o];let i=0;let r;let u;if(c.t!==null){r=c.p=ot.createTextNode(c.t)}else{r=c.p=ot.createElement(c.u);if(f(n)&&r["s-si"]!==n){r.classList.add(r["s-si"]=n)}if(c.l){for(i=0;i<c.l.length;++i){u=g(t,c,i);if(u){r.appendChild(u)}}}}r["s-hn"]=e;return r};const j=(t,n,s,o,l,c)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===e){i=i.shadowRoot}for(;l<=c;++l){if(o[l]){f=g(null,s,l);if(f){o[l].p=f;i.insertBefore(f,n)}}}};const k=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.p;if(t){t.remove()}}}};const M=(t,n,e,s,o=false)=>{let l=0;let c=0;let i=n.length-1;let f=n[0];let r=n[i];let u=s.length-1;let a=s[0];let d=s[u];let p;while(l<=i&&c<=u){if(f==null){f=n[++l]}else if(r==null){r=n[--i]}else if(a==null){a=s[++c]}else if(d==null){d=s[--u]}else if(C(f,a,o)){O(f,a,o);f=n[++l];a=s[++c]}else if(C(r,d,o)){O(r,d,o);r=n[--i];d=s[--u]}else if(C(f,d,o)){O(f,d,o);t.insertBefore(f.p,r.p.nextSibling);f=n[++l];d=s[--u]}else if(C(r,a,o)){O(r,a,o);t.insertBefore(r.p,f.p);r=n[--i];a=s[++c]}else{{p=g(n&&n[c],e,c);a=s[++c]}if(p){{f.p.parentNode.insertBefore(p,f.p)}}}}if(l>i){j(t,s[u+1]==null?null:s[u+1].p,e,s,c,u)}else if(c>u){k(n,l,i)}};const C=(t,n,e=false)=>{if(t.u===n.u){return true}return false};const O=(t,n,e=false)=>{const s=n.p=t.p;const o=t.l;const l=n.l;const c=n.t;if(c===null){if(o!==null&&l!==null){M(s,o,n,l,e)}else if(l!==null){if(t.t!==null){s.textContent=""}j(s,null,n,l,0,l.length-1)}else if(o!==null){k(o,0,o.length-1)}}else if(t.t!==c){s.data=c}};const P=(t,s,o=false)=>{const l=t.$hostElement$;const c=t.m||d(null,null);const i=y(s)?s:a(null,null,s);e=l.tagName;if(o&&i.o){for(const t of Object.keys(i.o)){if(l.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){i.o[t]=l[t]}}}i.u=null;i.i|=4;t.m=i;i.p=c.p=l.shadowRoot||l;{n=l["s-sc"]}O(c,i,o)};const U=(t,n)=>{if(n&&!t.S&&n["s-p"]){n["s-p"].push(new Promise((n=>t.S=n)))}};const x=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}U(t,t.j);const e=()=>A(t,n);return yt(e)};const A=(t,n)=>{const e=o("scheduleUpdate",t.v.$);const s=t.k;let l;e();return E(l,(()=>T(t,s,n)))};const E=(t,n)=>N(t)?t.then(n):n();const N=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const T=async(t,n,e)=>{var s;const l=t.$hostElement$;const c=o("update",t.v.$);const i=l["s-rc"];if(e){w(t)}const f=o("render",t.v.$);{L(t,n,l,e)}if(i){i.map((t=>t()));l["s-rc"]=undefined}f();c();{const n=(s=l["s-p"])!==null&&s!==void 0?s:[];const e=()=>R(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const L=(t,n,e,s)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{P(t,n,s)}}}}catch(n){Z(n,t.$hostElement$)}return null};const R=t=>{const n=t.v.$;const e=t.$hostElement$;const s=o("postUpdate",n);const l=t.j;if(!(t.i&64)){t.i|=64;{q(e)}s();{t.M(e);if(!l){W()}}}else{s()}{if(t.S){t.S();t.S=undefined}if(t.i&512){pt((()=>x(t,false)))}t.i&=~(4|512)}};const W=n=>{{q(ot.documentElement)}pt((()=>v(st,"appload",{detail:{namespace:t}})))};const q=t=>t.classList.add("hydrated");const F=(t,n)=>Q(t).C.get(n);const H=(t,n,e,s)=>{const o=Q(t);const l=o.C.get(n);const c=o.i;const i=o.k;e=h(e,s.O[n][0]);const f=Number.isNaN(l)&&Number.isNaN(e);const r=e!==l&&!f;if((!(c&8)||l===undefined)&&r){o.C.set(n,e);if(i){if((c&(2|16))===2){x(o,false)}}}};const I=(t,n,e)=>{var s;const o=t.prototype;if(n.O){const l=Object.entries(n.O);l.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return F(this,t)},set(e){H(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const e=new Map;o.attributeChangedCallback=function(t,s,l){lt.jmp((()=>{var c;const i=e.get(t);if(this.hasOwnProperty(i)){l=this[i];delete this[i]}else if(o.hasOwnProperty(i)&&typeof this[i]==="number"&&this[i]==l){return}else if(i==null){const e=Q(this);const o=e===null||e===void 0?void 0:e.i;if(o&&!(o&8)&&o&128&&l!==s){const o=e.k;const i=(c=n.P)===null||c===void 0?void 0:c[t];i===null||i===void 0?void 0:i.forEach((n=>{if(o[n]!=null){o[n].call(o,l,s,t)}}))}return}this[i]=l===null&&typeof this[i]==="boolean"?false:l}))};t.observedAttributes=Array.from(new Set([...Object.keys((s=n.P)!==null&&s!==void 0?s:{}),...l.filter((([t,n])=>n[0]&15)).map((([t,n])=>{const s=n[1]||t;e.set(s,t);return s}))]))}}return t};const V=async(t,n,e,s)=>{let c;if((n.i&32)===0){n.i|=32;{c=nt(e);if(c.then){const t=l();c=await c;t()}if(!c.isProxied){I(c,e,2);c.isProxied=true}const t=o("createInstance",e.$);{n.i|=8}try{new c(n)}catch(t){Z(t)}{n.i&=~8}t()}if(c.style){let t=c.style;const n=S(e);if(!et.has(n)){const s=o("registerStyles",e.$);m(n,t,!!(e.i&1));s()}}}const i=n.j;const f=()=>x(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const _=t=>{};const z=t=>{if((lt.i&1)===0){const n=Q(t);const e=n.v;const s=o("connectedCallback",e.$);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){U(n,n.j=e);break}}}if(e.O){Object.entries(e.O).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{V(t,n,e)}}else{if(n===null||n===void 0?void 0:n.k);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>_()))}}s()}};const B=t=>{};const D=async t=>{if((lt.i&1)===0){const n=Q(t);if(n===null||n===void 0?void 0:n.k);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>B()))}}};const G=(t,n={})=>{var e;const s=o();const l=[];const f=n.exclude||[];const r=st.customElements;const a=ot.head;const d=a.querySelector("meta[charset]");const p=ot.createElement("style");const y=[];let h;let v=true;Object.assign(lt,n);lt.A=new URL(n.resourcesUrl||"./",ot.baseURI).href;let $=false;t.map((t=>{t[1].map((n=>{const e={i:n[0],$:n[1],O:n[2],N:n[3]};if(e.i&4){$=true}{e.O=n[2]}const s=e.$;const o=class extends HTMLElement{constructor(t){super(t);t=this;Y(t,e);if(e.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(h){clearTimeout(h);h=null}if(v){y.push(this)}else{lt.jmp((()=>z(this)))}}disconnectedCallback(){lt.jmp((()=>D(this)))}componentOnReady(){return Q(this).U}};e.T=t[0];if(!f.includes(s)&&!r.get(s)){l.push(s);r.define(s,I(o,e,1))}}))}));if($){p.innerHTML+=i}{p.innerHTML+=l+c}if(p.innerHTML.length){p.setAttribute("data-styles","");const t=(e=lt.h)!==null&&e!==void 0?e:u(ot);if(t!=null){p.setAttribute("nonce",t)}a.insertBefore(p,d?d.nextSibling:a.firstChild)}v=false;if(y.length){y.map((t=>t.connectedCallback()))}else{{lt.jmp((()=>h=setTimeout(W,30)))}}s()};const J=t=>lt.h=t;const K=new WeakMap;const Q=t=>K.get(t);const X=(t,n)=>K.set(n.k=t,n);const Y=(t,n)=>{const e={i:0,$hostElement$:t,v:n,C:new Map};{e.U=new Promise((t=>e.M=t));t["s-p"]=[];t["s-rc"]=[]}return K.set(t,e)};const Z=(t,n)=>(0,console.error)(t,n);const tt=new Map;const nt=(t,n,e)=>{const s=t.$.replace(/-/g,"_");const o=t.T;const l=tt.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{tt.set(o,t)}return t[s]}),Z)};const et=new Map;const st=typeof window!=="undefined"?window:{};const ot=st.document||{head:{}};const lt={i:0,A:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const ct=t=>Promise.resolve(t);const it=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const ft=[];const rt=[];const ut=(t,n)=>e=>{t.push(e);if(!s){s=true;if(n&&lt.i&4){pt(dt)}else{lt.raf(dt)}}};const at=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){Z(t)}}t.length=0};const dt=()=>{at(ft);{at(rt);if(s=ft.length>0){lt.raf(dt)}}};const pt=t=>ct().then(t);const yt=ut(rt,true);export{G as b,a as h,ct as p,X as r,J as s};
//# sourceMappingURL=p-1797735c.js.map