import{_ as r,f as l,r as i,o as p,c as m,a as o,b as t,w as c,t as d,F as _}from"./app.60406980.js";const u=l({data(){return{zoom:14,center:[121.5273285,31.21515044],visible:!0}},methods:{switchVisible(){this.visible=!this.visible},init(e){e.showIndoorMap("B000A9VHIG")}}}),v={class:"map-page-container"},b={class:"toolbar"};function f(e,n,h,w,C,V){const a=i("el-amap-layer-indoor-map"),s=i("el-amap");return p(),m(_,null,[o("div",v,[t(s,{center:e.center,zoom:e.zoom},{default:c(()=>[t(a,{visible:e.visible,onInit:e.init},null,8,["visible","onInit"])]),_:1},8,["center","zoom"])]),o("div",b,[o("button",{onClick:n[0]||(n[0]=$=>e.switchVisible())},d(e.visible?"\u9690\u85CF":"\u663E\u793A"),1)])],64)}var B=r(u,[["render",f],["__file","indoor-map.vue"]]);export{B as default};
