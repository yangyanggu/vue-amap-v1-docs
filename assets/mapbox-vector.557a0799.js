import{_ as l,f as n,r as a,o as c,c as m,a as o,b as s,w as p,t as b,F as d}from"./app.60406980.js";const u=n({data(){return{zoom:12,center:[121.59996,31.197646],visible:!0,url:"https://restapi.amap.com/rest/lbs/geohub/tiles/mvt?key=747f980f217a31ba68d99301045a3fa7&z=[z]&x=[x]&y=[y]&size=512&id=1ed4ee90-dd77-11eb-9642-a7be29d36ac6"}},methods:{switchVisible(){this.visible=!this.visible}}}),_={class:"map-page-container"},v={class:"toolbar"};function f(e,t,h,z,y,C){const i=a("el-amap-layer-mapbox-vector-tile"),r=a("el-amap");return c(),m(d,null,[o("div",_,[s(r,{center:e.center,zoom:e.zoom},{default:p(()=>[s(i,{visible:e.visible,url:e.url},null,8,["visible","url"])]),_:1},8,["center","zoom"])]),o("div",v,[o("button",{onClick:t[0]||(t[0]=V=>e.switchVisible())},b(e.visible?"\u9690\u85CF":"\u663E\u793A"),1)])],64)}var g=l(u,[["render",f],["__file","mapbox-vector.vue"]]);export{g as default};
