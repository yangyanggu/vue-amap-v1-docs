import{_ as u,f as _,r as l,o as g,c as v,a as s,b as n,w as r,t as b,F as y}from"./app.60406980.js";const f=_({name:"Map",data(){const e=["#FFF8B4","#D3F299","#9FE084","#5ACA70","#00AF53","#00873A","#006B31","#004835","#003829"].reverse(),t=[1e3,2e3,4e3,6e3,8e3,1e4,12e3,14e3,16e3];return{center:[120.109233,30.246411],zoom:11,pitch:55,visible:!0,sourceUrl:"https://a.amap.com/Loca/static/loca-v2/demos/mock_data/hz_gn.json",layerStyle:{topColor(i,a){const o=a.properties.health*100;return o<40?e[8]:o<50?e[7]:o<55?e[6]:o<60?e[5]:o<65?e[4]:o<70?e[3]:o<75?e[2]:o<80?e[1]:o<100?e[0]:"green"},sideTopColor(i,a){const o=a.properties.health*100;return o<40?e[8]:o<50?e[7]:o<55?e[6]:o<60?e[5]:o<65?e[4]:o<70?e[3]:o<75?e[2]:o<80?e[1]:o<100?e[0]:"green"},sideBottomColor(i,a){const o=a.properties.health*100;return o<40?e[8]:o<50?e[7]:o<55?e[6]:o<60?e[5]:o<65?e[4]:o<70?e[3]:o<75?e[2]:o<80?e[1]:o<100?e[0]:"green"},height(i,a){const o=a.properties.health*100;return o<40?t[8]:o<50?t[7]:o<55?t[6]:o<60?t[5]:o<65?t[4]:o<70?t[3]:o<75?t[2]:o<80?t[1]:o<100?t[0]:0},altitude:0}}},methods:{clickMap(e){console.log("click map: ",e)},initMap(e){console.log("init map: ",e)},changeVisible(){this.visible=!this.visible}}}),C={class:"map-page-container"},k={class:"toolbar"};function F(e,t,i,a,o,B){const c=l("el-amap-loca-directional-light"),p=l("el-amap-loca-polygon"),m=l("el-amap-loca"),h=l("el-amap");return g(),v(y,null,[s("div",C,[n(h,{"view-mode":"3D",pitch:e.pitch,"show-label":!1,center:e.center,zoom:e.zoom,onClick:e.clickMap,onInit:e.initMap},{default:r(()=>[n(m,null,{default:r(()=>[n(c,{position:[0,-1,0],target:[0,0,0],color:"rgb(255,255,255)",intensity:.5},null,8,["intensity"]),n(p,{visible:e.visible,"source-url":e.sourceUrl,"layer-style":e.layerStyle,"visible-duration":500},null,8,["visible","source-url","layer-style"])]),_:1})]),_:1},8,["pitch","center","zoom","onClick","onInit"])]),s("div",k,[s("button",{onClick:t[0]||(t[0]=(...d)=>e.changeVisible&&e.changeVisible(...d))},b(e.visible?"\u9690\u85CF":"\u663E\u793A"),1)])],64)}var A=u(f,[["render",F],["__file","directional-light.vue"]]);export{A as default};
