import{_ as d,f as b,r as s,o as r,c as l,a as i,b as t,w as c,F as p,l as M,t as u,q as B}from"./app.73ff0094.js";const h=b({name:"Map",data(){return{center:[121.5273285,31.21515044],zoom:16,markers:[{position:[121.5273285,31.21515044],id:1}],componentMarker:{position:[121.5273285,31.21315058],visible:!0,draggable:!1},componentMarker2:{position:[121.5283285,31.21315058],content:"hello world"}}},methods:{clickMap(e){console.log("click map: ",e)},initMap(e){console.log("init map: ",e)},changeCenter(){const e=this.center[0]+.01,o=this.center[1]+.01;this.center=[e,o]},changePosition(){const e=this.componentMarker.position;this.componentMarker.position=[e[0]+.002,e[1]-.002]},changeDraggable(){this.componentMarker.draggable=!this.componentMarker.draggable},toggleVisible(){this.componentMarker.visible=!this.componentMarker.visible},markerInit(e){console.log("marker init: ",e)},clickMarker(){alert("\u70B9\u51FB\u4E86\u6807\u53F7")},clickArrayMarker(e){alert(`\u70B9\u51FB\u4E86\u6807\u53F7,\u6807\u53F7ID\uFF1A ${e.id}`)}}}),f={class:"map-page-container"},F=i("div",{style:{padding:"5px 10px","white-space":"nowrap",background:"blue",color:"#fff"}}," \u6D4B\u8BD5content ",-1),C={class:"control-container"};function v(e,o,D,I,w,A){const a=s("el-amap-marker"),k=s("el-amap");return r(),l(p,null,[i("div",f,[t(k,{"show-label":!1,center:e.center,zoom:e.zoom,onClick:e.clickMap,onInit:e.initMap},{default:c(()=>[t(a,{position:e.componentMarker.position,visible:e.componentMarker.visible,draggable:e.componentMarker.draggable,onInit:e.markerInit,onClick:e.clickMarker},{default:c(()=>[F]),_:1},8,["position","visible","draggable","onInit","onClick"]),t(a,{position:e.componentMarker2.position,content:e.componentMarker2.content},null,8,["position","content"]),(r(!0),l(p,null,M(e.markers,(n,m)=>(r(),B(a,{key:m,position:n.position,onClick:g=>{e.clickArrayMarker(n,g)}},null,8,["position","onClick"]))),128))]),_:1},8,["center","zoom","onClick","onInit"])]),i("div",C,[i("button",{onClick:o[0]||(o[0]=(...n)=>e.changePosition&&e.changePosition(...n))}," \u66F4\u6362\u4F4D\u7F6E "),i("button",{onClick:o[1]||(o[1]=(...n)=>e.toggleVisible&&e.toggleVisible(...n))},u(e.componentMarker.visible?"\u9690\u85CF\u6807\u8BB0":"\u663E\u793A\u6807\u8BB0"),1),i("button",{onClick:o[2]||(o[2]=(...n)=>e.changeDraggable&&e.changeDraggable(...n))},u(e.componentMarker.draggable?"\u7981\u6B62\u6807\u8BB0\u79FB\u52A8":"\u5141\u8BB8\u6807\u8BB0\u79FB\u52A8"),1)])],64)}var E=d(h,[["render",v],["__file","marker.vue"]]);export{E as default};