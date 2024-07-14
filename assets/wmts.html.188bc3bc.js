import{_ as o,r as n,o as E,c as C,a,b as t,w as c,e as s,d as l}from"./app.60406980.js";const D={},r=a("h1",{id:"wmts-amap-tilelayer-wmts",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#wmts-amap-tilelayer-wmts","aria-hidden":"true"},"#"),s(" WMTS (AMap.TileLayer.WMTS)")],-1),i=s("\u7528\u4E8E\u52A0\u8F7DOGC\u6807\u51C6\u7684WMS\u5730\u56FE\u670D\u52A1\u7684\u4E00\u79CD\u56FE\u5C42\u7C7B\uFF0C\u4EC5\u652F\u6301EPSG3857\u5750\u6807\u7CFB\u7EDF\u7684WMTS\u56FE\u5C42\u3002 "),u={href:"http://www.opengeospatial.org/standards/wmts",target:"_blank",rel:"noopener noreferrer"},F=s("\u67E5\u770B WMTS \u6807\u51C6"),k=a("h2",{id:"\u57FA\u7840\u793A\u4F8B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u57FA\u7840\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u57FA\u7840\u793A\u4F8B")],-1),d=a("p",null,"examples/layer/standard/wmts",-1),A=l('<h2 id="\u9759\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027</h2><p>\u4EC5\u4E14\u53EF\u4EE5\u521D\u59CB\u5316\u914D\u7F6E\uFF0C\u4E0D\u652F\u6301\u54CD\u5E94\u5F0F\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>blend</td><td>Boolean</td><td>\u5730\u56FE\u7EA7\u522B\u5207\u6362\u65F6\uFF0C\u4E0D\u540C\u7EA7\u522B\u7684\u56FE\u7247\u662F\u5426\u8FDB\u884C\u6DF7\u5408\uFF0C\u5982\u56FE\u5C42\u7684\u56FE\u50CF\u5185\u5BB9\u4E3A\u90E8\u5206\u900F\u660E\u8BF7\u8BBE\u7F6E\u4E3Afalse</td></tr><tr><td>extraOptions</td><td>Object</td><td>\u989D\u5916\u6269\u5C55\u5C5E\u6027\uFF0C\u4F1A\u76F4\u63A5\u5C06\u5C5E\u6027\u62F7\u8D1D\u5230\u521D\u59CB\u5316\u7684options\u4E2D\uFF0C\u5F53key\u4E0Eprops\u5185\u7684\u4E00\u6837\u65F6\u4F1A\u88ABprops\u8986\u76D6</td></tr></tbody></table><h2 id="\u52A8\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5C5E\u6027" aria-hidden="true">#</a> \u52A8\u6001\u5C5E\u6027</h2><p>\u652F\u6301\u54CD\u5E94\u5F0F\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>wmts\u670D\u52A1\u7684url\u5730\u5740\uFF0C\u5982\uFF1A&#39; https://services.arcgisonline.com/arcgis/rest/services/&#39;+ &#39;Demographics/USA_Population_Density/MapServer/WMTS/&#39;</td></tr><tr><td>params</td><td>Object</td><td>OGC\u6807\u51C6\u7684WMS\u5730\u56FE\u670D\u52A1\u7684GetMap\u63A5\u53E3\u7684\u53C2\u6570\uFF0C\u5305\u62ECVERSION\u3001LAYERS\u3001STYLES\u3001FORMAT\u3001TRANSPARENT\u7B49\uFF0C<br>CRS\u3001BBOX\u3001REQUEST\u3001WIDTH\u3001HEIGHT\u7B49\u53C2\u6570\u8BF7\u52FF\u6DFB\u52A0\uFF0C\u4F8B\u5982\uFF1A<br>{ &lt;/br/&gt; LAYERS: &#39;topp:states&#39;,<br> VERSION:&#39;1.3.0&#39;,<br> FORMAT:&#39;image/png&#39;<br> }</td></tr><tr><td>zooms</td><td>Array</td><td>\u652F\u6301\u7684\u7F29\u653E\u7EA7\u522B\u8303\u56F4\uFF0C\u9ED8\u8BA4\u8303\u56F4 [2-30]</td></tr><tr><td>visible</td><td>Boolean</td><td>\u662F\u5426\u663E\u793A\uFF0C\u9ED8\u8BA4 true</td></tr><tr><td>zIndex</td><td>Number</td><td>\u56FE\u5C42\u53E0\u52A0\u7684\u987A\u5E8F\u503C\uFF0C1 \u8868\u793A\u6700\u5E95\u5C42\u3002\u9ED8\u8BA4 zIndex\uFF1A4</td></tr><tr><td>opacity</td><td>Number</td><td>\u900F\u660E\u5EA6\uFF0C\u9ED8\u8BA4 1</td></tr></tbody></table><h2 id="ref-\u53EF\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#ref-\u53EF\u7528\u65B9\u6CD5" aria-hidden="true">#</a> ref \u53EF\u7528\u65B9\u6CD5</h2><p>\u63D0\u4F9B\u65E0\u526F\u4F5C\u7528\u7684\u540C\u6B65\u5E2E\u52A9\u65B9\u6CD5</p><table><thead><tr><th>\u51FD\u6570</th><th>\u8FD4\u56DE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>$$getInstance()</td><td>AMap.TileLayer.WMTS</td><td>\u83B7\u53D6\u5B9E\u4F8B</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>init</td><td>TileLayer.WMTS</td><td>\u5B9E\u4F8B\u521D\u59CB\u5316\u7ED3\u675F</td></tr></tbody></table>',11);function h(m,g){const p=n("ExternalLinkIcon"),e=n("vp-demo");return E(),C("div",null,[r,a("p",null,[i,a("a",u,[F,t(p)])]),k,t(e,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap-page-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ezoom%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap-layer-wmts%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Avisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aurl%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eurl%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Ablend%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aparams%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eparams%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-amap-layer-wmts%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etoolbar%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EswitchVisible()%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%7B%7Bvisible%3F%20'%E9%9A%90%E8%97%8F'%20%3A%20'%E6%98%BE%E7%A4%BA'%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EdefineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22vue%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Edata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ezoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E12%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ecenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E121.59996%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E31.197646%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eurl%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fservices.arcgisonline.com%2Farcgis%2Frest%2Fservices%2FDemographics%2FUSA_Population_Density%2FMapServer%2FWMTS%2F'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eparams%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3ELayer%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'0'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EVersion%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'1.0.0'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EFormat%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'image%2Fpng'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3ETileMatrixSet%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'EPSG%3A3857'%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%0D%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emethods%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EswitchVisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ethis%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evisible%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E!%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Ethis%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"examples/layer/standard/wmts","raw-source":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22map-page-container%22%3E%0D%0A%20%20%20%20%3Cel-amap%20%3Acenter%3D%22center%22%20%3Azoom%3D%22zoom%22%3E%0D%0A%20%20%20%20%20%20%3Cel-amap-layer-wmts%20%3Avisible%3D%22visible%22%20%3Aurl%3D%22url%22%20%3Ablend%3D%22false%22%20%3Aparams%3D%22params%22%3E%3C%2Fel-amap-layer-wmts%3E%0D%0A%20%20%20%20%3C%2Fel-amap%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%20%20%3Cdiv%20class%3D%22toolbar%22%3E%0D%0A%20%20%20%20%3Cbutton%20%40click%3D%22switchVisible()%22%3E%7B%7Bvisible%3F%20'%E9%9A%90%E8%97%8F'%20%3A%20'%E6%98%BE%E7%A4%BA'%7D%7D%3C%2Fbutton%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cstyle%3E%0D%0A%3C%2Fstyle%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%3E%0D%0Aimport%20%7BdefineComponent%7D%20from%20%22vue%22%3B%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20data()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20zoom%3A%2012%2C%0D%0A%20%20%20%20%20%20center%3A%20%5B121.59996%2C%2031.197646%5D%2C%0D%0A%20%20%20%20%20%20visible%3A%20true%2C%0D%0A%20%20%20%20%20%20url%3A%20'https%3A%2F%2Fservices.arcgisonline.com%2Farcgis%2Frest%2Fservices%2FDemographics%2FUSA_Population_Density%2FMapServer%2FWMTS%2F'%2C%0D%0A%20%20%20%20%20%20params%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20Layer%3A%20'0'%2C%0D%0A%20%20%20%20%20%20%20%20Version%3A%20'1.0.0'%2C%0D%0A%20%20%20%20%20%20%20%20Format%3A%20'image%2Fpng'%2C%0D%0A%20%20%20%20%20%20%20%20TileMatrixSet%3A%20'EPSG%3A3857'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%3B%0D%0A%20%20%7D%2C%0D%0A%0D%0A%20%20methods%3A%20%7B%0D%0A%20%20%20%20switchVisible()%20%7B%0D%0A%20%20%20%20%20%20this.visible%20%3D%20!this.visible%3B%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%7D%0D%0A%7D)%3B%0D%0A%3C%2Fscript%3E%0D%0A",description:""},{default:c(()=>[d]),_:1}),A])}var y=o(D,[["render",h],["__file","wmts.html.vue"]]);export{y as default};
