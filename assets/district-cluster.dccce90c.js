import{_ as r,f as c,r as a,o as u,c as p,a as i,b as o,w as m,t as d,F as h}from"./app.60406980.js";const b=c({name:"DistrictCluster",data(){return{center:[116.306206,39.975468],zoom:16,visible:!0,getPosition(e){if(!e)return null;const t=e.split(",");return[parseFloat(t[0]),parseFloat(t[1])]},clusterData:[]}},mounted(){fetch("https://a.amap.com/amap-ui/static/data/10w.txt").then(e=>e.text()).then(e=>{this.clusterData=e.split(`
`)})},methods:{clickMap(e){console.log("click map: ",e)},initMap(e){console.log("init map: ",e)},changeVisible(){this.visible=!this.visible},initLayer(e){console.log("\u805A\u5408\u56FE\u5C42: ",e)},clickFeature(e,t){console.log("\u70B9\u51FB\u533A\u5212\u9762\uFF1A ",e,t)}}}),g={class:"map-page-container"},f={class:"toolbar"};function v(e,t,F,k,C,_){const s=a("el-amap-layer-district-cluster"),n=a("el-amap");return u(),p(h,null,[i("div",g,[o(n,{"show-label":!1,center:e.center,zoom:e.zoom,"view-mode":"3D",pitch:20,onClick:e.clickMap,onInit:e.initMap},{default:m(()=>[o(s,{"get-position":e.getPosition,data:e.clusterData,visible:e.visible,onFeatureClick:e.clickFeature,onInit:e.initLayer},null,8,["get-position","data","visible","onFeatureClick","onInit"])]),_:1},8,["center","zoom","onClick","onInit"])]),i("div",f,[i("button",{onClick:t[0]||(t[0]=(...l)=>e.changeVisible&&e.changeVisible(...l))},d(e.visible?"\u9690\u85CF":"\u663E\u793A"),1)])],64)}var w=r(b,[["render",v],["__file","district-cluster.vue"]]);export{w as default};