import{I as w,h as c,a1 as D,a2 as N,J as T,a3 as I,_ as L,f as k,j as h,r as B,o as b,q as O,w as F,a as v,b as m,c as P,m as R,K as V,L as q}from"./app.60406980.js";import H from"./source-code.c2bc8e70.js";import U from"./copy-icon.c0f5560f.js";import W from"./vp-example.cb19f1e6.js";import j from"./vp-source-code.d1f4695a.js";function E(e){return D()?(N(e),!0):!1}const p=typeof window!="undefined",G=e=>typeof e=="string",_=()=>{};function M(e,t,a={}){const{immediate:s=!0}=a,o=w(!1);let n=null;function d(){n&&(clearTimeout(n),n=null)}function r(){o.value=!1,d()}function i(...u){d(),o.value=!0,n=setTimeout(()=>{o.value=!1,n=null,e(...u)},c(t))}return s&&(o.value=!0,p&&i()),E(r),{isPending:o,start:i,stop:r}}const z=p?window:void 0;p&&window.document;const A=p?window.navigator:void 0;p&&window.location;function J(...e){let t,a,s,o;if(G(e[0])?([a,s,o]=e,t=z):[t,a,s,o]=e,!t)return _;let n=_;const d=T(()=>c(t),i=>{n(),i&&(i.addEventListener(a,s,o),n=()=>{i.removeEventListener(a,s,o),n=_})},{immediate:!0,flush:"post"}),r=()=>{d(),n()};return E(r),r}function K(e={}){const{navigator:t=A,read:a=!1,source:s,copiedDuring:o=1500}=e,n=["copy","cut"],d=Boolean(t&&"clipboard"in t),r=w(""),i=w(!1),u=M(()=>i.value=!1,o);function f(){t.clipboard.readText().then(l=>{r.value=l})}if(d&&a)for(const l of n)J(l,f);async function x(l=c(s)){d&&l!=null&&(await t.clipboard.writeText(l),r.value=l,i.value=!0,u.start())}return{isSupported:d,text:r,copied:i,copy:x}}var y;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(y||(y={}));var g,C;p&&(window==null?void 0:window.navigator)&&((g=window==null?void 0:window.navigator)==null?void 0:g.platform)&&/iP(ad|hone|od)/.test((C=window==null?void 0:window.navigator)==null?void 0:C.platform);const S=e=>typeof e=="boolean",Q=e=>{const t=I(e)?e:w(S(e)?e:!1);return[t,a=>{t.value=S(a)?a:!t.value}]};const X=["innerHTML"],Y={class:"example"},Z={class:"op-btns"},$={key:0,class:"split-line"},ee=k({__name:"vp-demo",props:{source:{type:String,required:!0},path:{type:String,required:!0},rawSource:{type:String,required:!0},description:{type:String}},setup(e){const t=e,{copy:a,isSupported:s}=K({source:decodeURIComponent(t.rawSource),read:!1}),[o,n]=Q(),d=h(()=>decodeURIComponent(t.description)),r=async()=>{s||alert("\u590D\u5236\u5931\u8D25");try{await a(),alert("\u590D\u5236\u6210\u529F")}catch(u){alert(u.message)}},i=h(()=>t.path.replaceAll("/","-"));return(u,f)=>{const x=B("ClientOnly");return b(),O(x,null,{default:F(()=>[v("p",{class:"example-description",innerHTML:c(d)},null,8,X),v("div",Y,[v("div",Z,[v("div",{class:"op-btn",title:"\u62F7\u8D1D\u4EE3\u7801",onClick:r},[m(U)]),v("div",{class:"op-btn",title:"\u67E5\u770B\u539F\u7801",onClick:f[0]||(f[0]=(...l)=>c(n)&&c(n)(...l))},[m(H)])]),c(o)?(b(),P("div",$)):R("",!0),m(W,{file:e.path,demo:c(i)},null,8,["file","demo"]),V(m(j,{source:e.source},null,8,["source"]),[[q,c(o)]])])]),_:1})}}});var re=L(ee,[["__scopeId","data-v-9e8dd880"],["__file","vp-demo.vue"]]);export{re as default};
