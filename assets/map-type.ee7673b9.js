import{_ as l,f as r,r as s,o as p,c,a as o,b as a,w as m,t as _,F as u}from"./app.60406980.js";const d=r({data(){return{zoom:12,center:[121.59996,31.197646],visible:!0}},methods:{switchVisible(){this.visible=!this.visible}}}),v={class:"map-page-container"},b={class:"toolbar"};function f(e,t,h,y,C,$){const n=s("el-amap-control-map-type"),i=s("el-amap");return p(),c(u,null,[o("div",v,[a(i,{center:e.center,zoom:e.zoom},{default:m(()=>[a(n,{visible:e.visible},null,8,["visible"])]),_:1},8,["center","zoom"])]),o("div",b,[o("button",{onClick:t[0]||(t[0]=w=>e.switchVisible())},_(e.visible?"\u9690\u85CF":"\u663E\u793A"),1)])],64)}var V=l(d,[["render",f],["__file","map-type.vue"]]);export{V as default};
