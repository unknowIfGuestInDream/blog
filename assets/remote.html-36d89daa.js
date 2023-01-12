const t=JSON.parse('{"key":"v-6f810d27","path":"/software/git/remote.html","title":"远程仓库","lang":"zh-CN","frontmatter":{"title":"远程仓库","icon":"remote","order":9,"author":"廖雪峰","category":["Git"],"tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"什么是远程仓库 Git 是分布式版本控制系统，同一个 Git 仓库，可以分布到不同的机器上。怎么分布呢? 最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。 实际情况往往是这样，找一台电脑充当服务器的角色，每天 24 小时开机，其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。 完全可以自己搭建一台运行 Git 的服务器，不过现阶段，为了学 Git 先搭个服务器绝对是小题大作。好在这个世界上有个叫 GitHub 的神奇的网站，从名字就可以看出，这个网站就是提供 Git 仓库托管服务的，所以，只要注册一个 GitHub 账号，就可以免费获得 Git 远程仓库。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/software/git/remote.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"远程仓库"}],["meta",{"property":"og:description","content":"什么是远程仓库 Git 是分布式版本控制系统，同一个 Git 仓库，可以分布到不同的机器上。怎么分布呢? 最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。 实际情况往往是这样，找一台电脑充当服务器的角色，每天 24 小时开机，其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。 完全可以自己搭建一台运行 Git 的服务器，不过现阶段，为了学 Git 先搭个服务器绝对是小题大作。好在这个世界上有个叫 GitHub 的神奇的网站，从名字就可以看出，这个网站就是提供 Git 仓库托管服务的，所以，只要注册一个 GitHub 账号，就可以免费获得 Git 远程仓库。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2022-10-07T14:42:08.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-10-07T14:42:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"远程仓库\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-10-07T14:42:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/software/git/remote.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/software/git/remote.html"}]]},"headers":[{"level":2,"title":"什么是远程仓库","slug":"什么是远程仓库","link":"#什么是远程仓库","children":[]},{"level":2,"title":"添加远程库","slug":"添加远程库","link":"#添加远程库","children":[]},{"level":2,"title":"SSH 警告","slug":"ssh-警告","link":"#ssh-警告","children":[{"level":3,"title":"关联小结","slug":"关联小结","link":"#关联小结","children":[]}]},{"level":2,"title":"从远程库克隆","slug":"从远程库克隆","link":"#从远程库克隆","children":[{"level":3,"title":"克隆小结","slug":"克隆小结","link":"#克隆小结","children":[]}]},{"level":2,"title":"从远程仓库中抓取","slug":"从远程仓库中抓取","link":"#从远程仓库中抓取","children":[]},{"level":2,"title":"推送到远程仓库","slug":"推送到远程仓库","link":"#推送到远程仓库","children":[]},{"level":2,"title":"查看某个远程仓库","slug":"查看某个远程仓库","link":"#查看某个远程仓库","children":[]},{"level":2,"title":"远程仓库的重命名与移除","slug":"远程仓库的重命名与移除","link":"#远程仓库的重命名与移除","children":[]}],"git":{"createdTime":1665153728000,"updatedTime":1665153728000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":10.81,"words":3244},"filePathRelative":"software/git/remote.md","localizedDate":"2022年10月7日","excerpt":"<h2> 什么是远程仓库</h2>\\n<p>Git 是分布式版本控制系统，同一个 Git 仓库，可以分布到不同的机器上。怎么分布呢? 最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。</p>\\n<p>实际情况往往是这样，找一台电脑充当服务器的角色，每天 24 小时开机，其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。</p>\\n<p>完全可以自己搭建一台运行 Git 的服务器，不过现阶段，为了学 Git 先搭个服务器绝对是小题大作。好在这个世界上有个叫 GitHub 的神奇的网站，从名字就可以看出，这个网站就是提供 Git 仓库托管服务的，所以，只要注册一个 GitHub 账号，就可以免费获得 Git 远程仓库。</p>","autoDesc":true}');export{t as data};
