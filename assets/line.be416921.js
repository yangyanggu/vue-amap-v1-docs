import{_ as u,f as d,r as n,o as b,c as h,a as t,b as i,w as s,t as _,F as f}from"./app.60406980.js";const v=d({name:"Map",data(){const e=["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"].reverse();return{center:[116.335036,39.900082],zoom:8,pitch:55,visible:!0,sourceUrl:"https://a.amap.com/Loca/static/loca-v2/demos/mock_data/bj_bus.json",layerStyle:{color(o,l){const a=o%e.length;return e[a]},lineWidth:(o,l)=>o%e.length*.1+2,altitude(o,l){const a=o%e.length;return 100*a},dashArray:[10,0,10,0]}}},methods:{clickMap(e){console.log("click map: ",e)},initMap(e){console.log("init map: ",e)},changeVisible(){this.visible=!this.visible}}}),g={class:"map-page-container"},y={class:"toolbar"};function k(e,o,l,a,C,M){const c=n("el-amap-loca-line"),r=n("el-amap-loca"),p=n("el-amap");return b(),h(f,null,[t("div",g,[i(p,{"view-mode":"3D",pitch:e.pitch,"show-label":!1,center:e.center,zoom:e.zoom,onClick:e.clickMap,onInit:e.initMap},{default:s(()=>[i(r,null,{default:s(()=>[i(c,{visible:e.visible,"source-url":e.sourceUrl,"layer-style":e.layerStyle},null,8,["visible","source-url","layer-style"])]),_:1})]),_:1},8,["pitch","center","zoom","onClick","onInit"])]),t("div",y,[t("button",{onClick:o[0]||(o[0]=(...m)=>e.changeVisible&&e.changeVisible(...m))},_(e.visible?"\u9690\u85CF":"\u663E\u793A"),1)])],64)}var w=u(v,[["render",k],["__file","line.vue"]]);export{w as default};
