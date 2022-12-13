const e=JSON.parse('{"key":"v-76d8715f","path":"/en/software/git/branch.html","title":"分支管理","lang":"en-US","frontmatter":{"title":"分支管理","icon":"branch","order":10,"author":"廖雪峰","category":["Git"],"tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"概述 分支就是科幻电影里面的平行宇宙，当您正在电脑前努力学习 Git 的时候，另一个您正在另一个平行宇宙里努力学习 SVN。 如果两个平行宇宙互不干扰，那对现在的您也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，您既学会了 Git 又学会了 SVN! 分支在实际中有什么用呢? 假设您准备开发一个新功能，但是需要两周才能完成，第一周您写了 50% 的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/en/software/git/branch.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"分支管理"}],["meta",{"property":"og:description","content":"概述 分支就是科幻电影里面的平行宇宙，当您正在电脑前努力学习 Git 的时候，另一个您正在另一个平行宇宙里努力学习 SVN。 如果两个平行宇宙互不干扰，那对现在的您也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，您既学会了 Git 又学会了 SVN! 分支在实际中有什么用呢? 假设您准备开发一个新功能，但是需要两周才能完成，第一周您写了 50% 的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/software/git/branch.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/software/git/branch.html"}]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"创建与合并分支","slug":"创建与合并分支","link":"#创建与合并分支","children":[{"level":3,"title":"分支小结","slug":"分支小结","link":"#分支小结","children":[]}]},{"level":2,"title":"冲突","slug":"冲突","link":"#冲突","children":[{"level":3,"title":"冲突小结","slug":"冲突小结","link":"#冲突小结","children":[]}]},{"level":2,"title":"分支管理策略","slug":"分支管理策略","link":"#分支管理策略","children":[{"level":3,"title":"分支管理惯例","slug":"分支管理惯例","link":"#分支管理惯例","children":[]},{"level":3,"title":"分支管理小结","slug":"分支管理小结","link":"#分支管理小结","children":[]}]},{"level":2,"title":"Bug 分支","slug":"bug-分支","link":"#bug-分支","children":[{"level":3,"title":"暂存小结","slug":"暂存小结","link":"#暂存小结","children":[]}]},{"level":2,"title":"Feature 分支","slug":"feature-分支","link":"#feature-分支","children":[{"level":3,"title":"删除小结","slug":"删除小结","link":"#删除小结","children":[]}]},{"level":2,"title":"多人协作","slug":"多人协作","link":"#多人协作","children":[{"level":3,"title":"推送分支","slug":"推送分支","link":"#推送分支","children":[]},{"level":3,"title":"抓取分支","slug":"抓取分支","link":"#抓取分支","children":[]},{"level":3,"title":"多人协作小结","slug":"多人协作小结","link":"#多人协作小结","children":[]}]},{"level":2,"title":"Rebase","slug":"rebase","link":"#rebase","children":[]},{"level":2,"title":"Rebase 小结","slug":"rebase-小结","link":"#rebase-小结","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":23.26,"words":6979},"localizedDate":"October 8, 2022","filePathRelative":"en/software/git/branch.md","excerpt":"<h2> 概述</h2>\\n<p>分支就是科幻电影里面的平行宇宙，当您正在电脑前努力学习 Git 的时候，另一个您正在另一个平行宇宙里努力学习 SVN。</p>\\n<p>如果两个平行宇宙互不干扰，那对现在的您也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，您既学会了 Git 又学会了 SVN!</p>\\n<p><img src=\\"/assets/software/git/learn-branches.png\\" alt=\\"Learn branches\\" loading=\\"lazy\\"></p>\\n<p>分支在实际中有什么用呢? 假设您准备开发一个新功能，但是需要两周才能完成，第一周您写了 50% 的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。</p>","autoDesc":true}');export{e as data};
