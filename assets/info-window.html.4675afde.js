import{_ as t,r as p,o,c as e,b as C,w as E,a as n,e as a,d as c}from"./app.2fd14709.js";const l={},D=n("h1",{id:"\u4FE1\u606F\u7A97\u4F53-amap-infowindow",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4FE1\u606F\u7A97\u4F53-amap-infowindow","aria-hidden":"true"},"#"),a(" \u4FE1\u606F\u7A97\u4F53(AMap.InfoWindow)")],-1),u=n("p",null,[a("\u7528\u4E8E\u5728\u5730\u56FE\u4E0A\u5C55\u793A\u590D\u6742\u7684\u8BF4\u660E\u6027\u4FE1\u606F\u7684\u7C7B\u578B\u3002"),n("br"),a("\u4FE1\u606F\u7A97\u4F53\uFF0C\u5730\u56FE\u4EC5\u53EF\u540C\u65F6\u5C55\u793A\u4E00\u4E2A\u4FE1\u606F\u7A97\u4F53\uFF0C\u63A8\u8350\u4E3A\u4FE1\u606F\u7A97\u4F53\u901A\u8FC7\u6837\u5F0F\u663E\u793A\u8BBE\u7F6E\u5C3A\u5BF8")],-1),i=n("h2",{id:"\u57FA\u7840\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u7840\u793A\u4F8B","aria-hidden":"true"},"#"),a(" \u57FA\u7840\u793A\u4F8B")],-1),k=n("p",null,"examples/infoWindow/info-window",-1),F=c('<h2 id="\u9759\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027</h2><p>\u4EC5\u4E14\u53EF\u4EE5\u521D\u59CB\u5316\u914D\u7F6E\uFF0C\u4E0D\u652F\u6301\u54CD\u5E94\u5F0F\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>isCustom</td><td>Boolean</td><td>\u662F\u5426\u81EA\u5B9A\u4E49\u7A97\u4F53\u3002\u8BBE\u4E3Atrue\u65F6\uFF0C\u4FE1\u606F\u7A97\u4F53\u5916\u6846\u53CA\u5185\u5BB9\u5B8C\u5168\u6309\u7167content\u6240\u8BBE\u7684\u503C\u6DFB\u52A0\uFF08\u9ED8\u8BA4\u4E3Afalse\uFF0C\u5373\u5728\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u4FE1\u606F\u7A97\u4F53\u5916\u6846\u4E2D\u663E\u793Acontent\u5185\u5BB9\uFF09</td></tr><tr><td>autoMove</td><td>Boolean</td><td>\u662F\u5426\u81EA\u52A8\u8C03\u6574\u7A97\u4F53\u5230\u89C6\u91CE\u5185\uFF08\u5F53\u4FE1\u606F\u7A97\u4F53\u8D85\u51FA\u89C6\u91CE\u8303\u56F4\u65F6\uFF0C\u901A\u8FC7\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u81EA\u52A8\u5E73\u79FB\u5730\u56FE\uFF0C\u4F7F\u4FE1\u606F\u7A97\u4F53\u5B8C\u5168\u663E\u793A\uFF09</td></tr><tr><td>avoid</td><td>Boolean</td><td>autoMove \u4E3A true \u65F6\uFF0C\u81EA\u52A8\u5E73\u79FB\u5230\u89C6\u91CE\u5185\u540E\u7684\u4E0A\u53F3\u4E0B\u5DE6\u7684\u907F\u8BA9\u5BBD\u5EA6\u3002\u9ED8\u8BA4\u503C\uFF1A [20, 20, 20, 20]</td></tr><tr><td>closeWhenClickMap</td><td>Boolean</td><td>\u63A7\u5236\u662F\u5426\u5728\u9F20\u6807\u70B9\u51FB\u5730\u56FE\u540E\u5173\u95ED\u4FE1\u606F\u7A97\u4F53\uFF0C\u9ED8\u8BA4false\uFF0C\u9F20\u6807\u70B9\u51FB\u5730\u56FE\u540E\u4E0D\u5173\u95ED\u4FE1\u606F\u7A97\u4F53</td></tr><tr><td>offset</td><td>Array</td><td>\u4FE1\u606F\u7A97\u4F53\u663E\u793A\u4F4D\u7F6E\u504F\u79FB\u91CF\u3002\u9ED8\u8BA4\u57FA\u51C6\u70B9\u4E3A\u4FE1\u606F\u7A97\u4F53\u7684\u5E95\u90E8\u4E2D\u5FC3\u3002\u9ED8\u8BA4\u503C: [0, 0]</td></tr><tr><td>extraOptions</td><td>Object</td><td>\u989D\u5916\u6269\u5C55\u5C5E\u6027\uFF0C\u4F1A\u76F4\u63A5\u5C06\u5C5E\u6027\u62F7\u8D1D\u5230\u521D\u59CB\u5316\u7684options\u4E2D\uFF0C\u5F53key\u4E0Eprops\u5185\u7684\u4E00\u6837\u65F6\u4F1A\u88ABprops\u8986\u76D6</td></tr></tbody></table><h2 id="\u52A8\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5C5E\u6027" aria-hidden="true">#</a> \u52A8\u6001\u5C5E\u6027</h2><p>\u652F\u6301\u54CD\u5E94\u5F0F\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>visible</td><td>Boolean</td><td>\u662F\u5426\u53EF\u89C1\uFF0C\u9ED8\u8BA4 true\u3002\u652F\u6301sync</td></tr><tr><td>content</td><td>String, HTMLElement</td><td>\u663E\u793A\u5185\u5BB9\uFF0C\u53EF\u4EE5\u662FHTML\u8981\u7D20\u5B57\u7B26\u4E32\u6216\u8005HTMLElement\u5BF9\u8C61\u3002\u4E5F\u53EF\u4EE5\u6839\u636E\u793A\u4F8B\u4E2D\u7684\u65B9\u5F0F\u4F7F\u7528slot\u5B9E\u73B0</td></tr><tr><td>size</td><td>Array</td><td>\u4FE1\u606F\u7A97\u4F53\u5C3A\u5BF8\uFF08isCustom\u4E3Atrue\u65F6\uFF0C\u8BE5\u5C5E\u6027\u65E0\u6548\uFF09</td></tr><tr><td>anchor</td><td>String</td><td>\u4FE1\u606F\u7A97\u4F53\u951A\u70B9\u3002\u9ED8\u8BA4\u503C\uFF1A&#39;bottom-center&#39;\u3002\u53EF\u9009\u503C\uFF1A&#39;top-left&#39;</td></tr><tr><td>position</td><td>Array</td><td>\u4FE1\u606F\u7A97\u4F53\u663E\u793A\u57FA\u70B9\u4F4D\u7F6E</td></tr></tbody></table><h2 id="ref-\u53EF\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#ref-\u53EF\u7528\u65B9\u6CD5" aria-hidden="true">#</a> ref \u53EF\u7528\u65B9\u6CD5</h2><p>\u63D0\u4F9B\u65E0\u526F\u4F5C\u7528\u7684\u540C\u6B65\u5E2E\u52A9\u65B9\u6CD5</p><table><thead><tr><th>\u51FD\u6570</th><th>\u8FD4\u56DE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>$$getInstance()</td><td>AMap.InfoWindow</td><td>\u83B7\u53D6\u5B9E\u4F8B</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>init</td><td>Object</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>open</td><td></td><td>\u4FE1\u606F\u7A97\u4F53\u6253\u5F00\u4E4B\u540E\u89E6\u53D1\u4E8B\u4EF6</td></tr><tr><td>close</td><td></td><td>\u4FE1\u606F\u7A97\u4F53\u5173\u95ED\u4E4B\u540E\u89E6\u53D1\u4E8B\u4EF6</td></tr></tbody></table>',11);function r(d,A){const s=p("vp-demo");return o(),e("div",null,[D,u,i,C(s,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap-page-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Ashow-label%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ezoom%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EclickMap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40init%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EinitMap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40complete%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcompleteMap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40moveend%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EmoveendMap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap-info-window%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Cspan%20class%3D%22token%20namespace%22%3Ev-model%3A%3C%2Fspan%3Evisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Ehello%20world%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-amap-info-window%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etoolbar%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EchangeVisible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%E6%98%BE%E9%9A%90%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EdefineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22vue%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22Map%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Edata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ecenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E120%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E31%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ezoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E16%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emethods%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EclickMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ee%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'click%20map%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20e%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EinitMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Emap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'init%20map%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20map%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EcompleteMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ee%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Ee%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EmoveendMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ee%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'moveendMap%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20e%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EchangeCenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20lng%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Ethis%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E0%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E0.01%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20lat%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Ethis%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E0.01%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ethis%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ecenter%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3Elng%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20lat%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EchangeVisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ethis%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evisible%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E!%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Ethis%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"examples/infoWindow/info-window","raw-source":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22map-page-container%22%3E%0D%0A%20%20%20%20%3Cel-amap%0D%0A%20%20%20%20%20%20%3Ashow-label%3D%22false%22%0D%0A%20%20%20%20%20%20%3Acenter%3D%22center%22%0D%0A%20%20%20%20%20%20%3Azoom%3D%22zoom%22%0D%0A%20%20%20%20%20%20%40click%3D%22clickMap%22%0D%0A%20%20%20%20%20%20%40init%3D%22initMap%22%0D%0A%20%20%20%20%20%20%40complete%3D%22completeMap%22%0D%0A%20%20%20%20%20%20%40moveend%3D%22moveendMap%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cel-amap-info-window%0D%0A%20%20%20%20%20%20%20%20v-model%3Avisible%3D%22visible%22%0D%0A%20%20%20%20%20%20%20%20%3Aposition%3D%22center%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%3Ehello%20world%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%3C%2Fel-amap-info-window%3E%0D%0A%20%20%20%20%3C%2Fel-amap%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%20%20%3Cdiv%20class%3D%22toolbar%22%3E%0D%0A%20%20%20%20%3Cbutton%20%40click%3D%22changeVisible%22%3E%0D%0A%20%20%20%20%20%20%E6%98%BE%E9%9A%90%0D%0A%20%20%20%20%3C%2Fbutton%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%3E%0D%0Aimport%20%7BdefineComponent%7D%20from%20%22vue%22%3B%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20name%3A%20%22Map%22%2C%0D%0A%20%20data()%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20center%3A%20%5B120%2C31%5D%2C%0D%0A%20%20%20%20%20%20zoom%3A%2016%2C%0D%0A%20%20%20%20%20%20visible%3A%20true%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%2C%0D%0A%20%20methods%3A%20%7B%0D%0A%20%20%20%20clickMap(e)%7B%0D%0A%20%20%20%20%20%20console.log('click%20map%3A%20'%2C%20e)%3B%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20initMap(map)%7B%0D%0A%20%20%20%20%20%20console.log('init%20map%3A%20'%2C%20map)%3B%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20completeMap(e)%7B%0D%0A%20%20%20%20%20%20console.log(e)%3B%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20moveendMap(e)%7B%0D%0A%20%20%20%20%20%20console.log('moveendMap%3A%20'%2C%20e)%3B%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20changeCenter()%7B%0D%0A%20%20%20%20%20%20const%20lng%20%3D%20this.center%5B0%5D%2B0.01%3B%0D%0A%20%20%20%20%20%20const%20lat%20%3D%20this.center%5B1%5D%2B0.01%3B%0D%0A%20%20%20%20%20%20this.center%20%3D%20%5Blng%2C%20lat%5D%3B%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20changeVisible()%7B%0D%0A%20%20%20%20%20%20this.visible%20%3D%20!this.visible%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%0D%0A%3C%2Fstyle%3E%0D%0A",description:""},{default:E(()=>[k]),_:1}),F])}var h=t(l,[["render",r],["__file","info-window.html.vue"]]);export{h as default};