import{_ as n,o as s,c as a,d as t}from"./app.73ff0094.js";const p={},e=t(`<h1 id="\u81EA\u5B9A\u4E49\u5730\u56FE\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5730\u56FE\u7EC4\u4EF6" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5730\u56FE\u7EC4\u4EF6</h1><p><code>1.1.2\u7248\u672C</code>\u5F00\u59CB\u652F\u6301\u81EA\u5B9A\u4E49\u5730\u56FE\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u52A0\u8F7D<code>registerMixin</code>\u5B9E\u73B0\u81EA\u5DF1\u7684\u7EC4\u4EF6</p><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><p>\u9996\u5148\u9700\u8981\u5BFC\u5165 <code>registerMixin</code>\uFF0C\u518Dmethods\u4E2D\u521B\u5EFA\u4E00\u4E2A__initComponent\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u662F\u5B50\u7EC4\u4EF6\u88AB\u521B\u5EFA\u65F6\u8C03\u7528\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>parentInstance.$amapComponent</code>\u83B7\u53D6\u5230\u4E0A\u7EA7\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5BF9\u8C61</p><h2 id="\u57FA\u7840\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u57FA\u7840\u793A\u4F8B\u4EE3\u7801</h2><p>\u521B\u5EFA<code>test.vue</code>\u7EC4\u4EF6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>registerMixin<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuemap/vue-amap&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>registerMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">__initComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this.parentInstance: &#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parentInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parentInstance<span class="token punctuation">.</span>$amapComponent<span class="token punctuation">;</span>
      <span class="token keyword">let</span> position <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parentInstance<span class="token punctuation">.</span>$amapComponent<span class="token punctuation">.</span><span class="token function">getCenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> marker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Marker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> position
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      map<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>marker<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5730\u56FE\u52A0\u8F7D\u4EE3\u7801</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-amap</span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[116.335036, 39.900082]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>test</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-amap</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> test <span class="token keyword">from</span> <span class="token string">&#39;./components/test.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    test
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">#app</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parentinstance\u7684\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#parentinstance\u7684\u8BF4\u660E" aria-hidden="true">#</a> parentInstance\u7684\u8BF4\u660E</h3><p><code>parentInstance</code>\u901A\u8FC7provide\u4E3A\u6240\u6709\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u5B9E\u4F8B\uFF0CparentInstance\u6307\u5411\u7684\u662F\u6700\u8FD1\u7684\u4E00\u4E2A\u63D0\u4F9B\u3010parentInstance\u3011\u7684vue\u7EC4\u4EF6\uFF0C\u5F53\u524D\u63D0\u4F9BparentInstance\u7684\u7EC4\u4EF6\u6709\u4EE5\u4E0B\u51E0\u4E2A</p><table><thead><tr><th>\u7EC4\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>el-amap</td><td>\u5730\u56FE\u7EC4\u4EF6\uFF0C\u6839\u7EC4\u4EF6\u5B58\u5728\uFF0C\u63D0\u4F9Bmap\u5B9E\u4F8B</td></tr><tr><td>el-loca</td><td>Loca\u5BB9\u5668\uFF0C\u6240\u6709loca\u56FE\u5C42\u7684\u5BB9\u5668\uFF0Cloca\u56FE\u5C42\u5FC5\u987B\u653E\u5728el-loca\u5185</td></tr><tr><td>el-amap-layer-labels</td><td>\u6807\u53F7\u56FE\u5C42\uFF0C\u53EA\u53EF\u4EE5\u653Eel-amap-label\u7EC4\u4EF6</td></tr><tr><td>el-amap-layer-vector</td><td>\u77E2\u91CF\u56FE\u5C42\uFF0C\u53EA\u53EF\u4EE5\u653E\u77E2\u91CF\u7684\u5B50\u56FE\u5C42</td></tr><tr><td>el-amap-layer-three</td><td>\u4E09\u7EF4\u56FE\u5C42\uFF0C\u53EA\u53EF\u4EE5\u653Eel-amap-three-gltf\u7EC4\u4EF6</td></tr></tbody></table>`,12),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","custom-component.html.vue"]]);export{r as default};