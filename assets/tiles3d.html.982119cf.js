import{_ as o,r as s,o as E,c as C,a,b as t,w as c,e as n,d as l}from"./app.60406980.js";const D={},r=a("h1",{id:"_3dtiles\u56FE\u5C42-amap-3dtileslayer",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3dtiles\u56FE\u5C42-amap-3dtileslayer","aria-hidden":"true"},"#"),n(" 3DTiles\u56FE\u5C42 (AMap.3DTilesLayer)")],-1),u={class:"custom-container warning"},i=a("p",{class:"custom-container-title"},"\u8B66\u544A",-1),F=n("\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BE5\u5B98\u65B9\u63D2\u4EF6\u7F3A\u5C11\u6587\u6863\u548C\u66F4\u65B0\uFF0C\u517C\u5BB9\u6027\u8F83\u5DEE\u3002"),k=a("br",null,null,-1),d=n("\u63A8\u8350\u4F7F\u7528\u81EA\u5B9A\u4E49\u5B9E\u73B0\u76843dtiles\u7EC4\u4EF6\uFF0C"),A={href:"/zh-cn/component/three/three-tiles3d.html",target:"_blank",rel:"noopener noreferrer"},h=n("\u6587\u6863\u5730\u5740"),m=a("p",null,"\u4F7F\u7528 AMap.3DTilesLayer \u56FE\u5C42\u52A0\u8F7D\u6E32\u67D3\u6807\u51C6 3D Tiles \u6570\u636E\uFF0C\u53EF\u652F\u6301 i3dm\u3001b3dm\u3001pnts \u683C\u5F0F\u3002",-1),y=a("h2",{id:"\u57FA\u7840\u793A\u4F8B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u57FA\u7840\u793A\u4F8B","aria-hidden":"true"},"#"),n(" \u57FA\u7840\u793A\u4F8B")],-1),B=a("p",null,"examples/layer/data/tiles3d",-1),g=l('<h2 id="\u9759\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027</h2><p>\u4EC5\u4E14\u53EF\u4EE5\u521D\u59CB\u5316\u914D\u7F6E\uFF0C\u4E0D\u652F\u6301\u54CD\u5E94\u5F0F\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>3d Tiles \u5165\u53E3\u6587\u4EF6</td></tr><tr><td>threeScriptUrl</td><td>String</td><td>ThreeJS\u7684\u6587\u4EF6\u52A0\u8F7D\u5730\u5740</td></tr><tr><td>threeGltfLoader</td><td>String</td><td>threeJS\u7684GltfLoader\u6587\u4EF6\u52A0\u8F7D\u5730\u5740</td></tr><tr><td>layerStyle</td><td>Object</td><td>\u56FE\u5C42\u6837\u5F0F</td></tr><tr><td>extraOptions</td><td>Object</td><td>\u989D\u5916\u6269\u5C55\u5C5E\u6027\uFF0C\u4F1A\u76F4\u63A5\u5C06\u5C5E\u6027\u62F7\u8D1D\u5230\u521D\u59CB\u5316\u7684options\u4E2D\uFF0C\u5F53key\u4E0Eprops\u5185\u7684\u4E00\u6837\u65F6\u4F1A\u88ABprops\u8986\u76D6</td></tr></tbody></table><h2 id="\u52A8\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5C5E\u6027" aria-hidden="true">#</a> \u52A8\u6001\u5C5E\u6027</h2><p>\u652F\u6301\u54CD\u5E94\u5F0F\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead></table><h2 id="ref-\u53EF\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#ref-\u53EF\u7528\u65B9\u6CD5" aria-hidden="true">#</a> ref \u53EF\u7528\u65B9\u6CD5</h2><p>\u63D0\u4F9B\u65E0\u526F\u4F5C\u7528\u7684\u540C\u6B65\u5E2E\u52A9\u65B9\u6CD5</p><table><thead><tr><th>\u51FD\u6570</th><th>\u8FD4\u56DE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>$$getInstance()</td><td>AMap.3DTilesLayer</td><td>\u83B7\u53D6\u5B9E\u4F8B</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>init</td><td>AMap.3DTilesLayer</td><td>\u5B9E\u4F8B\u521D\u59CB\u5316\u7ED3\u675F</td></tr></tbody></table>',11);function _(b,f){const p=s("ExternalLinkIcon"),e=s("vp-demo");return E(),C("div",null,[r,a("div",u,[i,a("p",null,[F,k,d,a("a",A,[h,t(p)])])]),m,y,t(e,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap-page-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ezoom%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eview-mode%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E3D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Apitch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epitch%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40init%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EinitMap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap-layer-tiles3d%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aurl%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eurl%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Alayer-style%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3ElayerStyle%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EdefineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22vue%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Edata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ecenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E121.502325%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E31.238165%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ezoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E15%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Epitch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E90%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eurl%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fa.amap.com%2Fjsapi_demos%2Fstatic%2Fdata3d%2Fsingle.json'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3ElayerStyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ecolor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'rgb(44%2C59%2C75)'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%85%89%E7%85%A7%E9%A2%9C%E8%89%B2%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eintensity%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%85%89%E7%85%A7%E5%BC%BA%E5%BA%A6%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%0D%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emethods%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EinitMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Emap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'init%20map%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20map%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"examples/layer/data/tiles3d","raw-source":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22map-page-container%22%3E%0D%0A%20%20%20%20%3Cel-amap%0D%0A%20%20%20%20%20%20%3Acenter%3D%22center%22%0D%0A%20%20%20%20%20%20%3Azoom%3D%22zoom%22%0D%0A%20%20%20%20%20%20view-mode%3D%223D%22%0D%0A%20%20%20%20%20%20%3Apitch%3D%22pitch%22%0D%0A%20%20%20%20%20%20%40init%3D%22initMap%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cel-amap-layer-tiles3d%0D%0A%20%20%20%20%20%20%20%20%3Aurl%3D%22url%22%0D%0A%20%20%20%20%20%20%20%20%3Alayer-style%3D%22layerStyle%22%0D%0A%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3C%2Fel-amap%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cstyle%3E%0D%0A%3C%2Fstyle%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%3E%0D%0Aimport%20%7BdefineComponent%7D%20from%20%22vue%22%3B%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20data()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20center%3A%20%5B121.502325%2C31.238165%5D%2C%0D%0A%20%20%20%20%20%20zoom%3A%2015%2C%0D%0A%20%20%20%20%20%20pitch%3A%2090%2C%0D%0A%20%20%20%20%20%20url%3A%20'https%3A%2F%2Fa.amap.com%2Fjsapi_demos%2Fstatic%2Fdata3d%2Fsingle.json'%2C%0D%0A%20%20%20%20%20%20layerStyle%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20light%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20color%3A%20'rgb(44%2C59%2C75)'%2C%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%85%89%E7%85%A7%E9%A2%9C%E8%89%B2%0D%0A%20%20%20%20%20%20%20%20%20%20intensity%3A%202%2C%20%2F%2F%20%E8%AE%BE%E7%BD%AE%E5%85%89%E7%85%A7%E5%BC%BA%E5%BA%A6%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7D%3B%0D%0A%20%20%7D%2C%0D%0A%0D%0A%20%20methods%3A%20%7B%0D%0A%20%20%20%20initMap(map)%7B%0D%0A%20%20%20%20%20%20console.log('init%20map%3A%20'%2C%20map)%3B%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%7D%0D%0A%7D)%3B%0D%0A%3C%2Fscript%3E%0D%0A",description:""},{default:c(()=>[B]),_:1}),g])}var x=o(D,[["render",_],["__file","tiles3d.html.vue"]]);export{x as default};
