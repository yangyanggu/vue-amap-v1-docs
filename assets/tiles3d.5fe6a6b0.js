import{_ as l,f as s,r as t,o as r,c as i,b as o,w as p}from"./app.60406980.js";const c=s({data(){return{center:[121.502325,31.238165],zoom:15,pitch:90,url:"https://a.amap.com/jsapi_demos/static/data3d/single.json",layerStyle:{light:{color:"rgb(44,59,75)",intensity:2}}}},methods:{initMap(e){console.log("init map: ",e)}}}),m={class:"map-page-container"};function d(e,_,u,y,f,h){const a=t("el-amap-layer-tiles3d"),n=t("el-amap");return r(),i("div",m,[o(n,{center:e.center,zoom:e.zoom,"view-mode":"3D",pitch:e.pitch,onInit:e.initMap},{default:p(()=>[o(a,{url:e.url,"layer-style":e.layerStyle},null,8,["url","layer-style"])]),_:1},8,["center","zoom","pitch","onInit"])])}var v=l(c,[["render",d],["__file","tiles3d.vue"]]);export{v as default};
