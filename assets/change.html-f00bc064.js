const e=JSON.parse('{"key":"v-4f591c11","path":"/en/software/git/change.html","title":"修改管理","lang":"en-US","frontmatter":{"title":"修改管理","icon":"change","order":8,"author":"廖雪峰","category":["Git"],"tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"管理修改 Git 比其他版本控制系统设计得优秀，因为 Git 跟踪并管理的是修改，而非文件。 您会问，什么是修改? 比如您新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。 为什么说 Git 管理的是修改，而不是文件呢? 我们还是做实验。第一步，对 readme.txt 做一个修改，比如加一行内容: $ cat readme.txt Git is a distributed version control system. Git is free software distributed under the GPL. Git has a mutable index called stage. Git tracks changes.","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/software/git/change.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"修改管理"}],["meta",{"property":"og:description","content":"管理修改 Git 比其他版本控制系统设计得优秀，因为 Git 跟踪并管理的是修改，而非文件。 您会问，什么是修改? 比如您新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。 为什么说 Git 管理的是修改，而不是文件呢? 我们还是做实验。第一步，对 readme.txt 做一个修改，比如加一行内容: $ cat readme.txt Git is a distributed version control system. Git is free software distributed under the GPL. Git has a mutable index called stage. Git tracks changes."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/software/git/change.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/software/git/change.html"}]]},"headers":[{"level":2,"title":"管理修改","slug":"管理修改","link":"#管理修改","children":[{"level":3,"title":"管理小结","slug":"管理小结","link":"#管理小结","children":[]}]},{"level":2,"title":"撤消对文件的修改","slug":"撤消对文件的修改","link":"#撤消对文件的修改","children":[]},{"level":2,"title":"取消暂存的文件","slug":"取消暂存的文件","link":"#取消暂存的文件","children":[{"level":3,"title":"撤销小结","slug":"撤销小结","link":"#撤销小结","children":[]}]},{"level":2,"title":"删除文件","slug":"删除文件","link":"#删除文件","children":[{"level":3,"title":"如何删除文件","slug":"如何删除文件","link":"#如何删除文件","children":[]},{"level":3,"title":"撤销删除","slug":"撤销删除","link":"#撤销删除","children":[]},{"level":3,"title":"删除小结","slug":"删除小结","link":"#删除小结","children":[]}]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":7.86,"words":2357},"localizedDate":"October 8, 2022","filePathRelative":"en/software/git/change.md","excerpt":"<h2> 管理修改</h2>\\n<p>Git 比其他版本控制系统设计得优秀，因为 Git 跟踪并管理的是修改，而非文件。</p>\\n<p>您会问，什么是修改? 比如您新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。</p>\\n<p>为什么说 Git 管理的是修改，而不是文件呢? 我们还是做实验。第一步，对 readme.txt 做一个修改，比如加一行内容:</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">cat</span> readme.txt\\nGit is a distributed version control system.\\nGit is <span class=\\"token function\\">free</span> software distributed under the GPL.\\nGit has a mutable index called stage.\\nGit tracks changes.\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
