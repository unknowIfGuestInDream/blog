const e=JSON.parse('{"key":"v-49ddacf5","path":"/ja/code/language/js/es6/reflect.html","title":"Reflect","lang":"ja-JP","frontmatter":{"title":"Reflect","icon":"operate","author":"阮一峰","date":"2019-10-23T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"概述 Reflect 对象与 Proxy 对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect 对象的设计目的有这样几个。 (1) 将 Object 对象的一些明显属于语言内部的方法(比如 Object.defineProperty)，放到 Reflect 对象上。现阶段，某些方法同时在 Object 和 Reflect 对象上部署，未来的新方法将只部署在 Reflect 对象上。也就是说，从 Reflect 对象上可以拿到语言内部的方法。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/code/language/js/es6/reflect.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"Reflect"}],["meta",{"property":"og:description","content":"概述 Reflect 对象与 Proxy 对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect 对象的设计目的有这样几个。 (1) 将 Object 对象的一些明显属于语言内部的方法(比如 Object.defineProperty)，放到 Reflect 对象上。现阶段，某些方法同时在 Object 和 Reflect 对象上部署，未来的新方法将只部署在 Reflect 对象上。也就是说，从 Reflect 对象上可以拿到语言内部的方法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/code/language/js/es6/reflect.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/code/language/js/es6/reflect.html"}]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"静态方法","slug":"静态方法","link":"#静态方法","children":[{"level":3,"title":"Reflect.get(target, name, receiver)","slug":"reflect-get-target-name-receiver","link":"#reflect-get-target-name-receiver","children":[]},{"level":3,"title":"Reflect.set(target, name, value, receiver)","slug":"reflect-set-target-name-value-receiver","link":"#reflect-set-target-name-value-receiver","children":[]},{"level":3,"title":"Reflect.has(obj, name)","slug":"reflect-has-obj-name","link":"#reflect-has-obj-name","children":[]},{"level":3,"title":"Reflect.deleteProperty(obj, name)","slug":"reflect-deleteproperty-obj-name","link":"#reflect-deleteproperty-obj-name","children":[]},{"level":3,"title":"Reflect.construct(target, args)","slug":"reflect-construct-target-args","link":"#reflect-construct-target-args","children":[]},{"level":3,"title":"Reflect.getPrototypeOf(obj)","slug":"reflect-getprototypeof-obj","link":"#reflect-getprototypeof-obj","children":[]},{"level":3,"title":"Reflect.setPrototypeOf(obj, newProto)","slug":"reflect-setprototypeof-obj-newproto","link":"#reflect-setprototypeof-obj-newproto","children":[]},{"level":3,"title":"Reflect.apply(func, thisArg, args)","slug":"reflect-apply-func-thisarg-args","link":"#reflect-apply-func-thisarg-args","children":[]},{"level":3,"title":"Reflect.defineProperty(target, propertyKey, attributes)","slug":"reflect-defineproperty-target-propertykey-attributes","link":"#reflect-defineproperty-target-propertykey-attributes","children":[]},{"level":3,"title":"Reflect.getOwnPropertyDescriptor(target, propertyKey)","slug":"reflect-getownpropertydescriptor-target-propertykey","link":"#reflect-getownpropertydescriptor-target-propertykey","children":[]},{"level":3,"title":"Reflect.isExtensible (target)","slug":"reflect-isextensible-target","link":"#reflect-isextensible-target","children":[]},{"level":3,"title":"Reflect.preventExtensions(target)","slug":"reflect-preventextensions-target","link":"#reflect-preventextensions-target","children":[]},{"level":3,"title":"Reflect.ownKeys (target)","slug":"reflect-ownkeys-target","link":"#reflect-ownkeys-target","children":[]}]},{"level":2,"title":"实例: 使用 Proxy 实现观察者模式","slug":"实例-使用-proxy-实现观察者模式","link":"#实例-使用-proxy-实现观察者模式","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":8.72,"words":2617},"filePathRelative":"ja/code/language/js/es6/reflect.md","localizedDate":"2019年10月23日","excerpt":"<h2> 概述</h2>\\n<p><code>Reflect</code> 对象与 <code>Proxy</code> 对象一样，也是 ES6 为了操作对象而提供的新 API。<code>Reflect</code> 对象的设计目的有这样几个。</p>\\n<p>(1) 将 <code>Object</code> 对象的一些明显属于语言内部的方法(比如 <code>Object.defineProperty</code>)，放到 <code>Reflect</code> 对象上。现阶段，某些方法同时在 <code>Object</code> 和 <code>Reflect</code> 对象上部署，未来的新方法将只部署在 <code>Reflect</code> 对象上。也就是说，从 <code>Reflect</code> 对象上可以拿到语言内部的方法。</p>","autoDesc":true}');export{e as data};
