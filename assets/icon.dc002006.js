import{_ as h,f as g,r as n,o as v,c as f,a as c,b as i,w as r,t as _,F as b}from"./app.60406980.js";const y=g({name:"Map",data(){const a={1:"https://a.amap.com/Loca/static/loca-v2/demos/images/traffic-control.png",2:"https://a.amap.com/Loca/static/loca-v2/demos/images/jam.png",3:"https://a.amap.com/Loca/static/loca-v2/demos/images/construction.png",4:"https://a.amap.com/Loca/static/loca-v2/demos/images/close.png",5:"https://a.amap.com/Loca/static/loca-v2/demos/images/fog.png",0:"https://a.amap.com/Loca/static/loca-v2/demos/images/accident.png"};return{center:[105.601,35.32],zoom:4.8,pitch:55,visible:!0,sourceData:{},layerStyle:{unit:"px",icon:(t,o)=>{const e=o.properties.rawData;return a[e.type%Object.keys(a).length]},iconSize:[40,40],rotation:0}}},methods:{clickMap(a){console.log("click map: ",a)},initMap(a){console.log("init map: ",a),this.createData()},changeVisible(){this.visible=!this.visible},createData(){fetch("/json/events.json").then(a=>a.json()).then(a=>{const o=a[0].events.map(e=>{const s=e.lngLat.split(","),l=[parseFloat(s[0]),parseFloat(s[1])];return{type:"Feature",properties:{rawData:e},geometry:{type:"Point",coordinates:l}}});this.sourceData=Object.freeze({type:"FeatureCollection",features:o})})}}}),k={class:"map-page-container"},D={class:"toolbar"};function C(a,t,o,e,s,l){const p=n("el-amap-loca-icon"),m=n("el-amap-loca"),u=n("el-amap");return v(),f(b,null,[c("div",k,[i(u,{"view-mode":"3D",pitch:a.pitch,"show-label":!1,center:a.center,zoom:a.zoom,onClick:a.clickMap,onInit:a.initMap},{default:r(()=>[i(m,null,{default:r(()=>[i(p,{visible:a.visible,"source-data":a.sourceData,"layer-style":a.layerStyle},null,8,["visible","source-data","layer-style"])]),_:1})]),_:1},8,["pitch","center","zoom","onClick","onInit"])]),c("div",D,[c("button",{onClick:t[0]||(t[0]=(...d)=>a.changeVisible&&a.changeVisible(...d))},_(a.visible?"\u9690\u85CF":"\u663E\u793A"),1)])],64)}var L=h(y,[["render",C],["__file","icon.vue"]]);export{L as default};