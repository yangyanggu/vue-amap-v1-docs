import{_ as t,r as p,o as i,c as l,a as n,b as e,d as o,e as s}from"./app.73ff0094.js";const c={},u=o(`<h1 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h1><hr><h2 id="\u5B8C\u6574\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u5BFC\u5165" aria-hidden="true">#</a> \u5B8C\u6574\u5BFC\u5165</h2><p>\u4E00\u822C\u9879\u76EE\u4E2D\uFF0C\u5BF9\u4E8E vue-amap \u7684\u521D\u59CB\u5316\u53EA\u9700\u8981\u8C03\u7528 <code>initAMapApiLoader</code> \u65B9\u6CD5\u5373\u53EF\u3002</p><p>NPM \u5B89\u88C5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> VueAMap<span class="token punctuation">,</span> <span class="token punctuation">{</span>initAMapApiLoader<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuemap/vue-amap&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@vuemap/vue-amap/dist/style.css&#39;</span>
<span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_KEY&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueAMap<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CDN \u5F15\u5165\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>VueAMap<span class="token punctuation">.</span><span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_KEY&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u52A8\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5BFC\u5165" aria-hidden="true">#</a> \u81EA\u52A8\u5BFC\u5165</h2><p>\u9996\u5148\u4F60\u9700\u8981\u5B89\u88C5<code>unplugin-vue-components</code> \u3001 <code>unplugin-auto-import</code> \u3001 <code>@vuemap/unplugin-resolver</code>\u8FD9\u4E09\u6B3E\u63D2\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install -D unplugin-vue-components unplugin-auto-import @vuemap/unplugin-resolver@1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u5728main.ts\u4E2D\u5BFC\u5165css\u548C\u8FDB\u884C\u521D\u59CB\u5316key</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import App from &#39;./App.vue&#39;
import {initAMapApiLoader} from &#39;@vuemap/vue-amap&#39;;
import &#39;@vuemap/vue-amap/dist/style.css&#39;
initAMapApiLoader({
    key: &#39;YOUR_KEY&#39;
})

createApp(App)
    .mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u628A\u4E0B\u5217\u4EE3\u7801\u63D2\u5165\u5230\u4F60\u7684 Vite \u6216 Webpack \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import AutoImport from &#39;unplugin-auto-import/vite&#39;
import Components from &#39;unplugin-vue-components/vite&#39;
import {VueAmapResolver} from &#39;@vuemap/unplugin-resolver&#39;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VueAmapResolver()],
    }),
    Components({
      resolvers: [VueAmapResolver()],
    }),
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u5F53\u9879\u76EE\u4E2DElement-Plus\u4E5F\u4F7F\u7528\u81EA\u52A8\u5BFC\u5165\u529F\u80FD\u65F6\u4F1A\u4E0E\u5730\u56FE\u7EC4\u4EF6\u51B2\u7A81\uFF0C\u9700\u8981\u4F7F\u7528unplugin-vue-components@0.17.15\u4E4B\u540E\u7684\u7248\u672C</p></div><p>\u4F7F\u7528Element-plus\u7684\u81EA\u52A8\u5BFC\u5165\u65F6\uFF0C\u914D\u7F6E\u9700\u8981\u4FEE\u6539\u4E3A\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import AutoImport from &#39;unplugin-auto-import/vite&#39;
import Components from &#39;unplugin-vue-components/vite&#39;
import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;
import {VueAmapResolver} from &#39;@vuemap/unplugin-resolver&#39;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({
        exclude: /^ElAmap[A-Z]*/
      }),VueAmapResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        exclude: /^ElAmap[A-Z]*/
      }),VueAmapResolver()],
    }),
  ]
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2><p>\u5728<strong>\u5B9A\u5236\u5316\u7A0B\u5EA6\u8F83\u9AD8</strong>\u7684\u9879\u76EE\u4E2D\uFF0C\u5F00\u53D1\u8005\u53EF\u80FD\u53EA\u60F3\u901A\u8FC7 vue-amap \u5F15\u5165\u9AD8\u5FB7\u5730\u56FE\uFF0C\u800C\u90E8\u5206\u5B9E\u4F8B\u5316\u7684\u64CD\u4F5C\u76F4\u63A5\u57FA\u4E8E\u9AD8\u5FB7\u5730\u56FE\u7684 sdk \u5B8C\u6210\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981 <code>lazyAMapApiLoaderInstance</code>\u3002</p><p>NPM \u5B89\u88C5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> VueAMap<span class="token punctuation">,</span> <span class="token punctuation">{</span>initAMapApiLoader<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuemap/vue-amap&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lazyAMapApiLoaderInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuemap/vue-amap&#39;</span><span class="token punctuation">;</span>

<span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_KEY&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueAMap<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

lazyAMapApiLoaderInstance<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// your code ...</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&#39;amapContainer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>LngLat</span><span class="token punctuation">(</span><span class="token number">121.59996</span><span class="token punctuation">,</span> <span class="token number">31.197646</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CDN \u5F15\u5165\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>VueAMap<span class="token punctuation">.</span><span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_KEY&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>VueAMap<span class="token punctuation">.</span>lazyAMapApiLoaderInstance<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// your code ...</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&#39;amapContainer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>LngLat</span><span class="token punctuation">(</span><span class="token number">121.59996</span><span class="token punctuation">,</span> <span class="token number">31.197646</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2>`,25),r=n("thead",null,[n("tr",null,[n("th",null,"\u53C2\u6570\u540D"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C"),n("th",null,"\u63CF\u8FF0")])],-1),d=n("tr",null,[n("td",null,"key"),n("td",null,[n("code",null,"String")]),n("td",null,"``"),n("td",null,"\u9AD8\u5FB7 Key")],-1),v=n("tr",null,[n("td",null,"version"),n("td",null,[n("code",null,"String")]),n("td",null,[n("code",null,"2.0")]),n("td",null,"\u6307\u5B9A\u8981\u52A0\u8F7D\u7684 JSAPI \u7684\u7248\u672C\uFF0C\u7F3A\u7701\u65F6\u9ED8\u8BA4\u4E3A 2.0")],-1),m=n("td",null,"plugins",-1),k=n("td",null,[n("code",null,"Array")],-1),b=n("td",null,"``",-1),h=s("\u9700\u8981\u4F7F\u7528\u7684\u7684\u63D2\u4EF6\u5217\u8868\uFF0C\u5982\u6BD4\u4F8B\u5C3A'AMap.Scale'\u7B49 "),g={href:"https://lbs.amap.com/api/jsapi-v2/guide/abc/plugins",target:"_blank",rel:"noopener noreferrer"},_=s("\u63D2\u4EF6\u5217\u8868"),A=n("td",null,"AMapUI",-1),f=n("td",null,[n("code",null,"Object({version:1.1,plugins:[]})")],-1),y=n("td",null,"``",-1),M=s("UI\u7684\u53C2\u6570\u914D\u7F6E "),w={href:"https://lbs.amap.com/api/amap-ui/intro",target:"_blank",rel:"noopener noreferrer"},x=s("\u793A\u4F8B"),j=s("\uFF0Cversion\u9ED8\u8BA4\u5C31\u662F1.1\uFF0Cplugins\u662F\u9700\u8981\u52A0\u8F7D\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u770B\u793A\u4F8B\u8FDE\u63A5"),L=n("tr",null,[n("td",null,"Loca"),n("td",null,[n("code",null,"Object")]),n("td",null,[n("code",null,"{version: '2.0.0'}")]),n("td",null,"Loca \u7248\u672C")],-1),V=n("td",null,"serviceHost",-1),E=n("td",null,"String",-1),I=n("td",null,"''",-1),C=n("code",null,"1.1.0\u7248\u672C\u65B0\u589E",-1),R=s("\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u57DF\u540D\u6216ip\u5730\u5740\uFF0C\u65B0\u7248\u672C\u5BC6\u94A5\u5FC5\u987B\u914D\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\u6216\u8005\u5B89\u5168\u5BC6\u94A5\uFF0C\u4F18\u5148\u4F7F\u7528\u8BE5\u914D\u7F6E\uFF0C"),P={href:"https://lbs.amap.com/api/jsapi-v2/guide/abc/load",target:"_blank",rel:"noopener noreferrer"},Y=s("\u53C2\u8003\u7F51\u5740"),S=n("td",null,"securityJsCode",-1),N=n("td",null,"String",-1),O=n("td",null,"''",-1),U=n("code",null,"1.1.0\u7248\u672C\u65B0\u589E",-1),K=s("\uFF0C\u9759\u6001\u5B89\u5168\u5BC6\u94A5(\u4E0D\u5B89\u5168\uFF0C\u5EFA\u8BAE\u5F00\u53D1\u73AF\u5883\u7528),\u65B0\u7248\u672C\u5BC6\u94A5\u5FC5\u987B\u914D\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\u6216\u8005\u5B89\u5168\u5BC6\u94A5\uFF0C"),z={href:"https://lbs.amap.com/api/jsapi-v2/guide/abc/load",target:"_blank",rel:"noopener noreferrer"},B=s("\u53C2\u8003\u7F51\u5740"),J=n("tr",null,[n("td",null,"offline"),n("td",null,[n("code",null,"Boolean")]),n("td",null,[n("code",null,"false")]),n("td",null,[n("code",null,"1.1.5\u7248\u672C\u65B0\u589E"),s("\u662F\u5426\u79BB\u7EBF\u90E8\u7F72\uFF0C\u9ED8\u8BA4false\uFF0C\u5F53\u8BBE\u7F6E\u4E3Atrue\u65F6\u5C06\u4E0D\u52A0\u8F7DJS API\uFF0C\u9700\u8981\u81EA\u5DF1\u5728html\u91CC\u52A0\u8F7D\u6240\u9700\u8981\u7684JS API\u548Cloca\uFF0C\u4E3B\u8981\u7528\u4E8E\u5C40\u57DF\u7F51\u4F7F\u7528")])],-1);function D(Z,H){const a=p("ExternalLinkIcon");return i(),l("div",null,[u,n("table",null,[r,n("tbody",null,[d,v,n("tr",null,[m,k,b,n("td",null,[h,n("a",g,[_,e(a)])])]),n("tr",null,[A,f,y,n("td",null,[M,n("a",w,[x,e(a)]),j])]),L,n("tr",null,[V,E,I,n("td",null,[C,R,n("a",P,[Y,e(a)])])]),n("tr",null,[S,N,O,n("td",null,[U,K,n("a",z,[B,e(a)])])]),J])])])}var W=t(c,[["render",D],["__file","init.html.vue"]]);export{W as default};
