import{_ as g,f as _,j as c,I as v,o as x,c as h,a as P,h as j}from"./app.60406980.js";const y=["value"],S=_({__name:"vp-codepen",props:{css:{type:String,required:!0},cssPreProcessor:{type:String,required:!0},js:{type:String,required:!0},jsPreProcessor:{type:String,required:!0},html:{type:String,required:!0}},setup(a,{expose:i}){const t=a,u={"'vue'":"Vue","'element-plus'":"ElementPlus"},m=c(()=>{const e=decodeURIComponent(t.js||""),s=/(import*) ([^'\n]*) from ([^\n]*)/g,n=[];let p;for(;p=s.exec(e);){const[,,l,f]=p;n.push(`const ${l} = ${u[f]};`)}let r=(e.includes("export default defineComponent")?/export default defineComponent\({([\s\S]*)}\)/g:/export default {([\s\S]*)}/g).exec(e);return r=(r&&r[1]||"").replace(/\n {2}/g,`
`).trim(),`${n.join(`
`)}
var Main = {
  ${r}
};
VueAmap.initAMapApiLoader({
    key: '747f980f217a31ba68d99301045a3fa7'
})
const app = Vue.createApp(Main);
app.use(VueAmap);
app.mount("#app");
`}),d=c(()=>JSON.stringify({html:`<script src="//unpkg.com/vue@next"><\/script>
<script src="//unpkg.com/@vuemap/vue-amap@next/dist/index.js"><\/script>
<div id="app">
  ${decodeURIComponent(t.html).trim()}
</div>
`,css:`@import url("//unpkg.com/@vuemap/vue-amap@next/dist/style.css");
${decodeURIComponent(t.css).trim()}
`,js:m.value,css_pre_processor:t.cssPreProcessor,js_pre_processor:t.jsPreProcessor==="ts"?" typescript":t.jsPreProcessor})),o=v(null);return i({submit:()=>{var e,s;(s=(e=o.value).submit)==null||s.call(e)}}),(e,s)=>(x(),h("form",{ref_key:"formRef",ref:o,action:"https://codepen.io/pen/define/",method:"POST",target:"_blank"},[P("input",{type:"hidden",name:"data",value:j(d)},null,8,y)],512))}});var C=g(S,[["__file","vp-codepen.vue"]]);export{C as default};
