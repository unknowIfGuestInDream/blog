const t=JSON.parse('{"key":"v-14375261","path":"/ja/software/git/ignore.html","title":"忽略特殊文件","lang":"ja-JP","frontmatter":{"title":"忽略特殊文件","icon":"skin","order":12,"author":"廖雪峰","category":["Git"],"tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"有些时候，您必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次 git status 都会显示 Untracked files ...，有强迫症的童鞋心里肯定不爽。 好在 Git 考虑到了大家的感受，这个问题解决起来也很简单，在 Git 工作区的根目录下创建一个特殊的 .gitignore 文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。 忽略文件的原则是: 忽略操作系统自动生成的文件，比如缩略图等； 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 .class 文件； 忽略您自己的带有敏感信息的配置文件，比如存放口令的配置文件。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/software/git/ignore.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"忽略特殊文件"}],["meta",{"property":"og:description","content":"有些时候，您必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次 git status 都会显示 Untracked files ...，有强迫症的童鞋心里肯定不爽。 好在 Git 考虑到了大家的感受，这个问题解决起来也很简单，在 Git 工作区的根目录下创建一个特殊的 .gitignore 文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。 忽略文件的原则是: 忽略操作系统自动生成的文件，比如缩略图等； 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 .class 文件； 忽略您自己的带有敏感信息的配置文件，比如存放口令的配置文件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/software/git/ignore.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/software/git/ignore.html"}]]},"headers":[{"level":2,"title":"格式规范","slug":"格式规范","link":"#格式规范","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":4.23,"words":1268},"filePathRelative":"ja/software/git/ignore.md","localizedDate":"2022年10月8日","excerpt":"<p>有些时候，您必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次 <code>git status</code> 都会显示 <code>Untracked files</code> ...，有强迫症的童鞋心里肯定不爽。</p>\\n<p>好在 Git 考虑到了大家的感受，这个问题解决起来也很简单，在 Git 工作区的根目录下创建一个特殊的 <code>.gitignore</code> 文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。</p>\\n<p>忽略文件的原则是:</p>\\n<ul>\\n<li>忽略操作系统自动生成的文件，比如缩略图等；</li>\\n<li>忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 <code>.class</code> 文件；</li>\\n<li>忽略您自己的带有敏感信息的配置文件，比如存放口令的配置文件。</li>\\n</ul>","autoDesc":true}');export{t as data};
