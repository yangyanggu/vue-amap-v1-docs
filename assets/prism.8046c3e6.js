import{_ as g,f as b,r as n,o as f,c as v,a as l,b as p,w as r,t as _,F as E}from"./app.60406980.js";let c=null;const k=b({name:"Map",data(){const e={\u4E0A\u6D77\u5E02:"https://a.amap.com/Loca/static/loca-v2/demos/images/top-one.png",\u5317\u4EAC\u5E02:"https://a.amap.com/Loca/static/loca-v2/demos/images/top-two.png",\u5E7F\u5DDE\u5E02:"https://a.amap.com/Loca/static/loca-v2/demos/images/top-three.png"};return{center:[103.594884,36.964587],zoom:2,pitch:55,visible:!0,sourceUrl:"https://a.amap.com/Loca/static/loca-v2/demos/mock_data/gdp.json",layerStyle:{unit:"meter",sideNumber:32,topColor:(a,o)=>o.properties.GDP>7e3?"#E97091":"#2852F1",sideTopColor:(a,o)=>o.properties.GDP>7e3?"#E97091":"#2852F1",sideBottomColor:"#002bb9",radius:15e3,height:(a,o)=>{const t=o.properties,i=Math.max(100,Math.sqrt(t.GDP)*9e3-5e4),s=e[t.\u540D\u79F0];return s&&c.add(new AMap.Marker({anchor:"bottom-center",position:[o.coordinates[0],o.coordinates[1],i],content:`<div style="margin-bottom: 10px; float: left; font-size: 14px;height: 57px; width: 180px; color:#fff; background: no-repeat url(${s}); background-size: 100%;"><p style="margin: 7px 0 0 35px; height: 20px; line-height:20px;">${t.\u540D\u79F0}\u4EBA\u53E3 ${t.\u4EBA\u53E3}</p><p style="margin: 4px 0 0 35px; height: 20px; line-height:20px; color: #00a9ff; font-size: 13px;">${t.GDP} \u5143</p></div>`})),i},altitude:0}}},methods:{clickMap(e){console.log("click map: ",e)},initMap(e){c=e,console.log("init map: ",e)},changeVisible(){this.visible=!this.visible}}}),y={class:"map-page-container"},C={class:"toolbar"};function D(e,a,o,t,i,s){const m=n("el-amap-loca-prism"),u=n("el-amap-loca"),d=n("el-amap");return f(),v(E,null,[l("div",y,[p(d,{"view-mode":"3D",pitch:e.pitch,"show-label":!1,center:e.center,zoom:e.zoom,onClick:e.clickMap,onInit:e.initMap},{default:r(()=>[p(u,null,{default:r(()=>[p(m,{visible:e.visible,"source-url":e.sourceUrl,"layer-style":e.layerStyle,"visible-duration":500},null,8,["visible","source-url","layer-style"])]),_:1})]),_:1},8,["pitch","center","zoom","onClick","onInit"])]),l("div",C,[l("button",{onClick:a[0]||(a[0]=(...h)=>e.changeVisible&&e.changeVisible(...h))},_(e.visible?"\u9690\u85CF":"\u663E\u793A"),1)])],64)}var M=g(k,[["render",D],["__file","prism.vue"]]);export{M as default};
