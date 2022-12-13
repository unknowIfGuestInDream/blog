const e=JSON.parse('{"key":"v-f0611518","path":"/code/mini-app/guide/view/rendering-cache.html","title":"初始渲染缓存","lang":"zh-CN","frontmatter":{"title":"初始渲染缓存","icon":"cache","category":["小程序"],"description":"基础库 2.11.1 开始支持 提示 此部分在初步学习小程序的时候直接略过即可。 初始渲染缓存工作原理 小程序页面的初始化分为两个部分。 逻辑层初始化: 载入必需的小程序代码、初始化页面 this 对象(也包括它涉及到的所有自定义组件的 this 对象)、将相关数据发送给视图层。 视图层初始化: 载入必需的小程序代码，然后等待逻辑层初始化完毕并接收逻辑层发送的数据，最后渲染页面。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/mini-app/guide/view/rendering-cache.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"初始渲染缓存"}],["meta",{"property":"og:description","content":"基础库 2.11.1 开始支持 提示 此部分在初步学习小程序的时候直接略过即可。 初始渲染缓存工作原理 小程序页面的初始化分为两个部分。 逻辑层初始化: 载入必需的小程序代码、初始化页面 this 对象(也包括它涉及到的所有自定义组件的 this 对象)、将相关数据发送给视图层。 视图层初始化: 载入必需的小程序代码，然后等待逻辑层初始化完毕并接收逻辑层发送的数据，最后渲染页面。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-07T16:35:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:modified_time","content":"2022-10-07T16:35:37.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/mini-app/guide/view/rendering-cache.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/code/mini-app/guide/view/rendering-cache.html"}]]},"headers":[{"level":2,"title":"初始渲染缓存工作原理","slug":"初始渲染缓存工作原理","link":"#初始渲染缓存工作原理","children":[]},{"level":2,"title":"支持的组件","slug":"支持的组件","link":"#支持的组件","children":[]},{"level":2,"title":"静态初始渲染缓存","slug":"静态初始渲染缓存","link":"#静态初始渲染缓存","children":[]},{"level":2,"title":"在初始渲染缓存中添加动态内容","slug":"在初始渲染缓存中添加动态内容","link":"#在初始渲染缓存中添加动态内容","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1665160537000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":4.16,"words":1247},"localizedDate":"2022年10月7日","filePathRelative":"code/mini-app/guide/view/rendering-cache.md","excerpt":"<blockquote>\\n<p>基础库 2.11.1 开始支持</p>\\n</blockquote>\\n<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">提示</p>\\n<p>此部分在初步学习小程序的时候直接略过即可。</p>\\n</div>\\n<h2> 初始渲染缓存工作原理</h2>\\n<p>小程序页面的初始化分为两个部分。</p>\\n<ul>\\n<li>逻辑层初始化: 载入必需的小程序代码、初始化页面 <code>this</code> 对象(也包括它涉及到的所有自定义组件的 this 对象)、将相关数据发送给视图层。</li>\\n<li>视图层初始化: 载入必需的小程序代码，然后等待逻辑层初始化完毕并接收逻辑层发送的数据，最后渲染页面。</li>\\n</ul>","autoDesc":true}');export{e as data};
