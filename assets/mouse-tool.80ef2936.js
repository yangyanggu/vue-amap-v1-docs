import{_ as s,f as i,r as u,o as r,c as m,a as n,b as p,w as k,q as d,m as C,t as g,F as v}from"./app.60406980.js";const M=i({name:"Map",data(){return{center:[121.5273285,31.21515044],zoom:16,markers:null,type:"marker",created:!0}},methods:{clickMap(e){console.log("click map: ",e)},initMap(e){console.log("init map: ",e)},draw(e,o){console.log("\u7ED8\u5236\u5B8C\u6210 : ",e,o)},changeMarker(e){this.type=e}}}),B={class:"map-page-container"},E={class:"toolbar"};function $(e,o,b,c,D,f){const a=u("el-amap-mouse-tool"),l=u("el-amap");return r(),m(v,null,[n("div",B,[p(l,{"show-label":!1,center:e.center,zoom:e.zoom,onClick:e.clickMap,onInit:e.initMap},{default:k(()=>[e.created?(r(),d(a,{key:0,type:e.type,"auto-clear":!0,onDraw:e.draw},null,8,["type","onDraw"])):C("",!0)]),_:1},8,["center","zoom","onClick","onInit"])]),n("div",E,[n("button",{onClick:o[0]||(o[0]=t=>e.created=!e.created)},g(e.created?"\u9500\u6BC1":"\u521B\u5EFA"),1),n("button",{onClick:o[1]||(o[1]=t=>e.changeMarker("marker"))}," \u7ED8\u5236\u6807\u53F7 "),n("button",{onClick:o[2]||(o[2]=t=>e.changeMarker("circle"))}," \u7ED8\u5236\u5706 "),n("button",{onClick:o[3]||(o[3]=t=>e.changeMarker("rectangle"))}," \u7ED8\u5236\u77E9\u5F62 "),n("button",{onClick:o[4]||(o[4]=t=>e.changeMarker("polyline"))}," \u7ED8\u5236\u7EBF "),n("button",{onClick:o[5]||(o[5]=t=>e.changeMarker("polygon"))}," \u7ED8\u5236\u9762 "),n("button",{onClick:o[6]||(o[6]=t=>e.changeMarker("measureArea"))}," \u8BA1\u7B97\u9762\u79EF "),n("button",{onClick:o[7]||(o[7]=t=>e.changeMarker("rule"))}," \u8BA1\u7B97\u8DDD\u79BB "),n("button",{onClick:o[8]||(o[8]=t=>e.changeMarker("rectZoomIn"))}," \u6846\u9009\u653E\u5927\u5730\u56FE "),n("button",{onClick:o[9]||(o[9]=t=>e.changeMarker("rectZoomOut"))}," \u6846\u9009\u7F29\u5C0F\u5730\u56FE ")])],64)}var y=s(M,[["render",$],["__file","mouse-tool.vue"]]);export{y as default};