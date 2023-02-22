import{_ as i,a as t}from"./snapshot-674e9f6e.js";import{_ as a,W as e,X as r,a2 as G}from"./framework-d7af73f9.js";const d={},h=G('<p>Git 究竟是怎样的一个系统呢? 尽管 Git 用起来与其它的版本控制系统非常相似，但它在对信息的存储和认知方式上却有很大差异。</p><h2 id="直接记录快照-而非差异比较" tabindex="-1"><a class="header-anchor" href="#直接记录快照-而非差异比较" aria-hidden="true">#</a> 直接记录快照，而非差异比较</h2><p>Git 和其它版本控制系统(包括 Subversion 和近似工具)的主要差别在于 Git 对待数据的方法。从概念上来说，其它大部分系统以文件变更列表的方式存储信息，这类系统(CVS、Subversion、Perforce、Bazaar 等等)将它们存储的信息看作是一组基本文件和每个文件随时间逐步累积的差异 (它们通常称作 基于差异(delta-based) 的版本控制)。</p><p><img src="'+i+'" alt="基于差异" loading="lazy"></p><p>Git 不按照以上方式对待或保存数据。反之，Git 更像是把数据看作是对小型文件系统的一系列快照。在 Git 中，每当您提交更新或保存项目状态时，它基本上就会对当时的全部文件创建一个快照并保存这个快照的索引。为了效率，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。Git 对待数据更像是一个 <strong>快照流</strong>。</p><p><img src="'+t+'" alt="基于快照" loading="lazy"></p><h2 id="近乎所有操作都是本地执行" tabindex="-1"><a class="header-anchor" href="#近乎所有操作都是本地执行" aria-hidden="true">#</a> 近乎所有操作都是本地执行</h2><p>在 Git 中的绝大多数操作都只需要访问本地文件和资源，一般不需要来自网络上其它计算机的信息。如果您习惯于所有操作都有网络延时开销的集中式版本控制系统，Git 在这方面会让您感到速度之神赐给了 Git 超凡的能量。因为您在本地磁盘上就有项目的完整历史，所以大部分操作看起来瞬间完成。举个例子，要浏览项目的历史，Git 不需外连到服务器去获取历史，然后再显示出来——它只需直接从本地数据库中读取。您能立即看到项目历史。如果您想查看当前版本与一个月前的版本之间引入的修改， Git 会查找到一个月前的文件做一次本地的差异计算，而不是由远程服务器处理或从远程服务器拉回旧版本文件再来本地处理。</p><h2 id="git-保证完整性" tabindex="-1"><a class="header-anchor" href="#git-保证完整性" aria-hidden="true">#</a> Git 保证完整性</h2><p>Git 中所有的数据在存储前都计算校验和，然后以校验和来引用。这意味着不可能在 Git 不知情时更改任何文件内容或目录内容。这个功能建构在 Git 底层，是构成 Git 哲学不可或缺的部分。若您在传送过程中丢失信息或损坏文件，Git 就能发现。</p><p>Git 用以计算校验和的机制叫做 SHA-1 散列(hash，哈希)。这是一个由 40 个十六进制字符(0-9 和 a-f)组成的字符串，基于 Git 中文件的内容或目录结构计算出来。Git 中使用这种哈希值的情况很多，您将经常看到这种哈希值。实际上，Git 数据库中保存的信息都是以文件内容的哈希值来索引，而不是文件名。</p><h2 id="git-一般只添加数据" tabindex="-1"><a class="header-anchor" href="#git-一般只添加数据" aria-hidden="true">#</a> Git 一般只添加数据</h2><p>您执行的 Git 操作，几乎只往 Git 数据库中 添加 数据。您很难让 Git 执行任何不可逆操作，或者让它以任何方式清除数据。同别的 VCS 一样，未提交更新时有可能丢失或弄乱修改的内容。但是一旦您提交快照到 Git 中， 就难以再丢失数据，特别是如果您定期的推送数据库到其它仓库的话。</p><p>这使得我们使用 Git 成为一个安心愉悦的过程，因为我们深知可以尽情做各种尝试，而没有把事情弄糟的危险。</p><h2 id="三种状态" tabindex="-1"><a class="header-anchor" href="#三种状态" aria-hidden="true">#</a> 三种状态</h2><p>Git 有三种状态，您的文件可能处于其中之一: 已提交(committed)、已修改(modified) 和 已暂存(staged)。</p><ul><li>已修改表示修改了文件，但还没保存到数据库中。</li><li>已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。</li><li>已提交表示数据已经安全地保存在本地数据库中。</li></ul><p>这会让我们的 Git 项目拥有三个阶段: 工作区、暂存区以及 Git 目录。</p><p>工作区是对项目的某个版本独立提取出来的内容。这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供您使用或修改。 暂存区是一个文件，保存了下次将要提交的文件列表信息，一般在 Git 仓库目录中。按照 Git 的术语叫做“索引”，不过一般说法还是叫“暂存区”。 Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。这是 Git 中最重要的部分，从其它计算机克隆仓库时，复制的就是这里的数据。 基本的 Git 工作流程如下:</p><ol><li>在工作区中修改文件。</li><li>将您想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区。</li><li>提交更新，找到暂存区的文件，将快照永久性存储到 Git 目录。</li></ol><p>如果 Git 目录中保存着特定版本的文件，就属于 已提交 状态。如果文件已修改并放入暂存区，就属于 已暂存 状态。如果自上次检出后，作了修改但还没有放到暂存区域，就是 已修改 状态。</p>',21),l=[h];function o(s,n){return e(),r("div",null,l)}const _=a(d,[["render",o],["__file","working.html.vue"]]);export{_ as default};
