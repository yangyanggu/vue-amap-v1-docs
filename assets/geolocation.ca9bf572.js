import{_ as l,f as c,r as n,o as r,c as m,a as o,b as a,w as p,t as _,F as u}from"./app.73ff0094.js";const d=c({data(){return{zoom:12,center:[121.59996,31.197646],visible:!0}},methods:{switchVisible(){this.visible=!this.visible},getLocation(e){console.log("getLocation: ",e)}}}),v={class:"map-page-container"},b={class:"toolbar"};function g(e,t,f,h,C,$){const s=n("el-amap-control-geolocation"),i=n("el-amap");return r(),m(u,null,[o("div",v,[a(i,{center:e.center,zoom:e.zoom},{default:p(()=>[a(s,{visible:e.visible,onComplete:e.getLocation},null,8,["visible","onComplete"])]),_:1},8,["center","zoom"])]),o("div",b,[o("button",{onClick:t[0]||(t[0]=w=>e.switchVisible())},_(e.visible?"\u9690\u85CF":"\u663E\u793A"),1)])],64)}var V=l(d,[["render",g],["__file","geolocation.vue"]]);export{V as default};