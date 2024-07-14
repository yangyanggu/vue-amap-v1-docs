import{_ as e,r as n,o as C,c as E,a as t,b as s,w as c,e as a,d as l}from"./app.60406980.js";const D={},r=t("h1",{id:"\u5B9A\u4F4D\u63D2\u4EF6-amap-geolocation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u5B9A\u4F4D\u63D2\u4EF6-amap-geolocation","aria-hidden":"true"},"#"),a(" \u5B9A\u4F4D\u63D2\u4EF6 (AMap.Geolocation)")],-1),i=a("AMap.Geolocation \u5B9A\u4F4D\u670D\u52A1\u63D2\u4EF6\u3002\u878D\u5408\u4E86\u6D4F\u89C8\u5668\u5B9A\u4F4D\u3001\u9AD8\u7CBE\u5EA6IP\u5B9A\u4F4D\u3001\u5B89\u5353\u5B9A\u4F4Dsdk\u8F85\u52A9\u5B9A\u4F4D\u7B49\u591A\u79CD\u624B\u6BB5\uFF0C\u63D0\u4F9B\u4E86\u83B7\u53D6\u5F53\u524D\u51C6\u786E\u4F4D\u7F6E\u3001\u83B7\u53D6\u5F53\u524D\u57CE\u5E02\u4FE1\u606F\u3001\u6301\u7EED\u5B9A\u4F4D(\u6D4F\u89C8\u5668\u5B9A\u4F4D)\u7B49\u529F\u80FD\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u5F53\u65F6\u83B7\u5F97\u5B9A\u4F4D\u7684\u6210\u8D25\u548C\u7ED3\u679C\uFF0C\u4E00\u79CD\u662F\u5728 getCurrentPosition\u7684\u65F6\u5019\u4F20\u5165\u56DE\u8C03\u51FD\u6570\u6765\u5904\u7406\u5B9A\u4F4D\u7ED3\u679C\uFF0C\u4E00\u79CD\u662F\u901A\u8FC7\u4E8B\u4EF6\u76D1\u542C\u6765\u53D6\u5F97\u5B9A\u4F4D\u7ED3\u679C\u3002 "),d={href:"https://lbs.amap.com/api/jsapi-v2/documentation#geolocation",target:"_blank",rel:"noopener noreferrer"},u=a("\u5B98\u65B9\u6587\u6863"),F=t("h2",{id:"\u57FA\u7840\u793A\u4F8B",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u57FA\u7840\u793A\u4F8B","aria-hidden":"true"},"#"),a(" \u57FA\u7840\u793A\u4F8B")],-1),k=t("p",null,"examples/control/geolocation",-1),A=l('<h2 id="\u9759\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027</h2><p>\u4EC5\u4E14\u53EF\u4EE5\u521D\u59CB\u5316\u914D\u7F6E\uFF0C\u4E0D\u652F\u6301\u54CD\u5E94\u5F0F\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>position</td><td>String</td><td>\u63A7\u4EF6\u505C\u9760\u4F4D\u7F6E,\u9ED8\u8BA4\u4E3A&quot;RB&quot;. &#39;LT&#39;: \u5DE6\u4E0A\u89D2, &#39;RT&#39;: \u53F3\u4E0A\u89D2, &#39;LB&#39;: \u5DE6\u4E0B\u89D2, &#39;RB&#39;: \u53F3\u4E0B\u89D2</td></tr><tr><td>offset</td><td>Array</td><td>\u7F29\u7565\u56FE\u8DDD\u79BB\u60AC\u505C\u4F4D\u7F6E\u7684\u50CF\u7D20\u8DDD\u79BB\uFF0C\u5982 [2,2]</td></tr><tr><td>borderColor</td><td>String</td><td>\u6309\u94AE\u8FB9\u6846\u989C\u8272\u503C\uFF0C\u540CCSS\uFF0C\u5982&#39;silver&#39;</td></tr><tr><td>borderRadius</td><td>String</td><td>\u6309\u94AE\u5706\u89D2\u8FB9\u6846\u503C\uFF0C\u540CCSS\uFF0C\u5982&#39;5px&#39;</td></tr><tr><td>buttonSize</td><td>String</td><td>\u7BAD\u5934\u6309\u94AE\u7684\u50CF\u7D20\u5C3A\u5BF8\uFF0C\u540CCSS\uFF0C\u5982&#39;12px&#39;</td></tr><tr><td>convert</td><td>Boolean</td><td>\u662F\u5426\u5C06\u5B9A\u4F4D\u7ED3\u679C\u8F6C\u6362\u4E3A\u9AD8\u5FB7\u5750\u6807</td></tr><tr><td>enableHighAccuracy</td><td>Boolean</td><td>\u8FDB\u884C\u6D4F\u89C8\u5668\u539F\u751F\u5B9A\u4F4D\u7684\u65F6\u5019\u662F\u5426\u5C1D\u8BD5\u83B7\u53D6\u8F83\u9AD8\u7CBE\u5EA6\uFF0C\u53EF\u80FD\u5F71\u54CD\u5B9A\u4F4D\u6548\u7387\uFF0C\u9ED8\u8BA4\u4E3Afalse</td></tr><tr><td>timeout</td><td>Number</td><td>\u5B9A\u4F4D\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u6BEB\u79D2</td></tr><tr><td>maximumAge</td><td>Number</td><td>\u6D4F\u89C8\u5668\u539F\u751F\u5B9A\u4F4D\u7684\u7F13\u5B58\u65F6\u95F4\uFF0C\u6BEB\u79D2</td></tr><tr><td>showButton</td><td>Boolean</td><td>\u662F\u5426\u663E\u793A\u5B9A\u4F4D\u6309\u94AE\uFF0C\u9ED8\u8BA4\u4E3Atrue</td></tr><tr><td>showCircle</td><td>Boolean</td><td>\u662F\u5426\u663E\u793A\u5B9A\u4F4D\u7CBE\u5EA6\u5706\uFF0C\u9ED8\u8BA4\u4E3Atrue</td></tr><tr><td>showMarker</td><td>Boolean</td><td>\u662F\u5426\u663E\u793A\u5B9A\u4F4D\u70B9\uFF0C\u9ED8\u8BA4\u4E3Atrue</td></tr><tr><td>markerOptions</td><td>MarkerOptions</td><td>\u5B9A\u4F4D\u70B9\u7684\u6837\u5F0F</td></tr><tr><td>circleOptions</td><td>CircleOptions</td><td>\u5B9A\u4F4D\u5706\u7684\u6837\u5F0F</td></tr><tr><td>panToLocation</td><td>Boolean</td><td>\u5B9A\u4F4D\u6210\u529F\u540E\u662F\u5426\u81EA\u52A8\u79FB\u52A8\u5230\u54CD\u5E94\u4F4D\u7F6E</td></tr><tr><td>zoomToAccuracy</td><td>Boolean</td><td>\u5B9A\u4F4D\u6210\u529F\u540E\u662F\u5426\u81EA\u52A8\u8C03\u6574\u7EA7\u522B</td></tr><tr><td>GeoLocationFirst</td><td>Boolean</td><td>\u4F18\u5148\u4F7F\u7528H5\u5B9A\u4F4D\uFF0C\u9ED8\u8BA4\u79FB\u52A8\u7AEF\u4E3Atrue\uFF0CPC\u7AEF\u4E3Afalse</td></tr><tr><td>noIpLocate</td><td>Number</td><td>\u662F\u5426\u7981\u7528IP\u7CBE\u786E\u5B9A\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C0:\u90FD\u7528 1:\u624B\u673A\u4E0A\u4E0D\u7528 2:PC\u4E0A\u4E0D\u7528 3:\u90FD\u4E0D\u7528</td></tr><tr><td>noGeoLocation</td><td>Number</td><td>\u662F\u5426\u7981\u7528\u6D4F\u89C8\u5668\u539F\u751F\u5B9A\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C0:\u90FD\u7528 1:\u624B\u673A\u4E0A\u4E0D\u7528 2:PC\u4E0A\u4E0D\u7528 3:\u90FD\u4E0D\u7528</td></tr><tr><td>useNative</td><td>Boolean</td><td>\u662F\u5426\u4E0E\u9AD8\u5FB7\u5B9A\u4F4DSDK\u80FD\u529B\u7ED3\u5408\uFF0C\u9700\u8981\u540C\u65F6\u4F7F\u7528\u5B89\u5353\u7248\u9AD8\u5FB7\u5B9A\u4F4Dsdk\uFF0C\u5426\u5219\u65E0\u6548</td></tr><tr><td>getCityWhenFail</td><td>Boolean</td><td>\u5B9A\u4F4D\u5931\u8D25\u4E4B\u540E\u662F\u5426\u8FD4\u56DE\u57FA\u672C\u57CE\u5E02\u5B9A\u4F4D\u4FE1\u606F</td></tr><tr><td>needAddress</td><td>Boolean</td><td>\u662F\u5426\u9700\u8981\u5C06\u5B9A\u4F4D\u7ED3\u679C\u8FDB\u884C\u9006\u5730\u7406\u7F16\u7801\u64CD\u4F5C</td></tr><tr><td>extensions</td><td>String</td><td>\u662F\u5426\u9700\u8981\u8BE6\u7EC6\u7684\u9006\u5730\u7406\u7F16\u7801\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3A&#39;base&#39;\u53EA\u8FD4\u56DE\u57FA\u672C\u4FE1\u606F\uFF0C\u53EF\u9009&#39;all&#39;</td></tr><tr><td>extraOptions</td><td>Object</td><td>\u989D\u5916\u6269\u5C55\u5C5E\u6027\uFF0C\u4F1A\u76F4\u63A5\u5C06\u5C5E\u6027\u62F7\u8D1D\u5230\u521D\u59CB\u5316\u7684options\u4E2D\uFF0C\u5F53key\u4E0Eprops\u5185\u7684\u4E00\u6837\u65F6\u4F1A\u88ABprops\u8986\u76D6</td></tr></tbody></table><h2 id="\u52A8\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5C5E\u6027" aria-hidden="true">#</a> \u52A8\u6001\u5C5E\u6027</h2><p>\u652F\u6301\u54CD\u5E94\u5F0F\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>visible</td><td>Boolean</td><td>\u662F\u5426\u663E\u793A\uFF0C\u9ED8\u8BA4true</td></tr></tbody></table><h2 id="ref-\u53EF\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#ref-\u53EF\u7528\u65B9\u6CD5" aria-hidden="true">#</a> ref \u53EF\u7528\u65B9\u6CD5</h2><p>\u63D0\u4F9B\u65E0\u526F\u4F5C\u7528\u7684\u540C\u6B65\u5E2E\u52A9\u65B9\u6CD5</p><table><thead><tr><th>\u51FD\u6570</th><th>\u8FD4\u56DE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>$$getInstance()</td><td>AMap.Geolocation</td><td>\u83B7\u53D6\u5B9E\u4F8B</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>complete</td><td>{statue:&#39;&#39;, result:{}}</td><td>\u5B9A\u4F4D\u7ED3\u675F\u540E\u89E6\u53D1\u7684\u4E8B\u4EF6</td></tr></tbody></table>',11);function h(m,g){const p=n("ExternalLinkIcon"),o=n("vp-demo");return C(),E("div",null,[r,t("p",null,[i,t("a",d,[u,s(p)])]),F,s(o,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap-page-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ezoom%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap-control-geolocation%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Avisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40complete%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EgetLocation%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etoolbar%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EswitchVisible()%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%7B%7B%20visible%3F%20'%E9%9A%90%E8%97%8F'%20%3A%20'%E6%98%BE%E7%A4%BA'%20%7D%7D%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EdefineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22vue%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Edata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ezoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E12%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ecenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E121.59996%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E31.197646%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%0D%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emethods%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EswitchVisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ethis%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evisible%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E!%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Ethis%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EgetLocation%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ee%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'getLocation%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20e%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"examples/control/geolocation","raw-source":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22map-page-container%22%3E%0D%0A%20%20%20%20%3Cel-amap%0D%0A%20%20%20%20%20%20%3Acenter%3D%22center%22%0D%0A%20%20%20%20%20%20%3Azoom%3D%22zoom%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cel-amap-control-geolocation%0D%0A%20%20%20%20%20%20%20%20%3Avisible%3D%22visible%22%0D%0A%20%20%20%20%20%20%20%20%40complete%3D%22getLocation%22%0D%0A%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3C%2Fel-amap%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%20%20%3Cdiv%20class%3D%22toolbar%22%3E%0D%0A%20%20%20%20%3Cbutton%20%40click%3D%22switchVisible()%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20visible%3F%20'%E9%9A%90%E8%97%8F'%20%3A%20'%E6%98%BE%E7%A4%BA'%20%7D%7D%0D%0A%20%20%20%20%3C%2Fbutton%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cstyle%3E%0D%0A%3C%2Fstyle%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%3E%0D%0Aimport%20%7BdefineComponent%7D%20from%20%22vue%22%3B%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20data()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20zoom%3A%2012%2C%0D%0A%20%20%20%20%20%20center%3A%20%5B121.59996%2C%2031.197646%5D%2C%0D%0A%20%20%20%20%20%20visible%3A%20true%0D%0A%20%20%20%20%7D%3B%0D%0A%20%20%7D%2C%0D%0A%0D%0A%20%20methods%3A%20%7B%0D%0A%20%20%20%20switchVisible()%20%7B%0D%0A%20%20%20%20%20%20this.visible%20%3D%20!this.visible%3B%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20getLocation(e)%20%7B%0D%0A%20%20%20%20%20%20console.log('getLocation%3A%20'%2C%20e)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%3B%0D%0A%3C%2Fscript%3E%0D%0A",description:""},{default:c(()=>[k]),_:1}),A])}var b=e(D,[["render",h],["__file","geolocation.html.vue"]]);export{b as default};