const e=JSON.parse('{"key":"v-16a7d57c","path":"/ja/code/mini-app/guide/service/run.html","title":"小程序运行机制","lang":"ja-JP","frontmatter":{"title":"小程序运行机制","icon":"play","category":["小程序"],"description":"小程序启动 小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。 热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动； 冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。 小程序没有重启的概念。 前台/后台状态 当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有直接销毁，而是进入了后台状态；","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/code/mini-app/guide/service/run.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"小程序运行机制"}],["meta",{"property":"og:description","content":"小程序启动 小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。 热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动； 冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。 小程序没有重启的概念。 前台/后台状态 当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有直接销毁，而是进入了后台状态；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/mini-app/guide/service/run.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/mini-app/guide/service/run.html"}]]},"headers":[{"level":2,"title":"小程序启动","slug":"小程序启动","link":"#小程序启动","children":[]},{"level":2,"title":"前台/后台状态","slug":"前台-后台状态","link":"#前台-后台状态","children":[]},{"level":2,"title":"小程序销毁","slug":"小程序销毁","link":"#小程序销毁","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":1.55,"words":466},"localizedDate":"2022年10月8日","filePathRelative":"ja/code/mini-app/guide/service/run.md","excerpt":"<h2> 小程序启动</h2>\\n<p>小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。</p>\\n<ul>\\n<li>热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；</li>\\n<li>冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。</li>\\n</ul>\\n<p>小程序没有重启的概念。</p>\\n<h2> 前台/后台状态</h2>\\n<p>当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有直接销毁，而是进入了<strong>后台</strong>状态；</p>","autoDesc":true}');export{e as data};
