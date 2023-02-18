import{_ as t,X as e,Y as d,a0 as a,Z as r,a3 as n}from"./framework-a4b0319b.js";const l={},i=r("p",null,"Mr.Hope 已为 inNENU Website 开发了一些常规组件。本文介绍了这些组件的配置。",-1),h=n('<h2 id="常规组件" tabindex="-1"><a class="header-anchor" href="#常规组件" aria-hidden="true">#</a> 常规组件</h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>所有以 <code>Base</code> 开头的组件都包含如下属性:</p><p>| 属性 | 必填 | 类型 | 内容 | | ---- | :--: | :--------------: | --------- | --- | | myId | 是 | Number 或 String | 组件的 ID | |</p></div><p>以下是项目中中常用的组件。</p><h3 id="basehead" tabindex="-1"><a class="header-anchor" href="#basehead" aria-hidden="true">#</a> BaseHead</h3><p>页面标题文字</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th></tr></thead><tbody><tr><td>title</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>页面选项卡文字</td></tr></tbody></table><h3 id="basetitle" tabindex="-1"><a class="header-anchor" href="#basetitle" aria-hidden="true">#</a> BaseTitle</h3><p>段落间大标题</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>标题文字</td><td></td></tr><tr><td>myStyle</td><td style="text-align:center;">否</td><td style="text-align:center;">String 或 Style</td><td>标题自定义样式</td><td>填入任意 css 样式</td></tr></tbody></table><h3 id="basep" tabindex="-1"><a class="header-anchor" href="#basep" aria-hidden="true">#</a> BaseP</h3><p>段落文字(可带图)</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>段落的文字</td><td>可以识别连续的空格，使用 <code>\\n</code> 表示回车，也可直接使用 <code>&lt;br /&gt;</code> 换行</td></tr><tr><td>head</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>段落的标题</td><td></td></tr><tr><td>headStyle</td><td style="text-align:center;">否</td><td style="text-align:center;">String 或 Style</td><td>标题自定义样式</td><td>填入任意 css 样式</td></tr><tr><td>myStyle</td><td style="text-align:center;">否</td><td style="text-align:center;">String 或 Style</td><td>标题自定义样式</td><td>填入任意 css 样式</td></tr><tr><td>src</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>图片的路径</td><td>会在段落后渲染一张图片</td></tr><tr><td>desc</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>图片的描述文字</td><td>会自动在文字前加 <code>▲</code></td></tr></tbody></table><h3 id="baseimg" tabindex="-1"><a class="header-anchor" href="#baseimg" aria-hidden="true">#</a> BaseImg</h3><p>图片</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>src</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>图片的路径</td><td></td></tr><tr><td>desc</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>图片的描述文字</td><td>会自动在文字前加 ▲</td></tr></tbody></table><h3 id="baselist" tabindex="-1"><a class="header-anchor" href="#baselist" aria-hidden="true">#</a> BaseList</h3><p>列表</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>content</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>列表内容</td><td></td></tr><tr><td>head</td><td style="text-align:center;">否</td><td style="text-align:center;">String 或 Boolean</td><td>列表的标题</td><td>默认为 <code>&#39;&#39;</code>，设置 <code>false</code> 取消显示列表标题，否则即使不设置也会显示一个空标题</td></tr><tr><td>foot</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>列表的页脚文字</td><td>默认为 <code>&#39;&#39;</code>,不显示页脚</td></tr></tbody></table><h3 id="basegrid" tabindex="-1"><a class="header-anchor" href="#basegrid" aria-hidden="true">#</a> BaseGrid</h3><p>九宫格</p><p>| 属性 | 必填 | 类型 | 内容 | | ------- | :--: | :---------------: | ---------------- | ------------------------------------------------------------------------------ | | content | 是 | GirdItem[] | 九宫格单元内容 | | head | 否 | String 或 Boolean | 九宫格的标题 | 默认为 <code>&#39;&#39;</code>，设置 <code>false</code> 取消显示九宫格标题，否则即使不设置也会显示一个空标题 | | foot | 否 | String | 九宫格的页脚文字 | 默认为 <code>&#39;&#39;</code>,不显示页脚 |</p><ul><li><strong>GirdItem</strong></li></ul><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th></tr></thead><tbody><tr><td>icon</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>图标地址</td></tr><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>文字</td></tr><tr><td>url</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>跳转链接</td></tr></tbody></table><h3 id="basefoot" tabindex="-1"><a class="header-anchor" href="#basefoot" aria-hidden="true">#</a> BaseFoot</h3><p>页脚</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>desc</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>页脚额外描述文字</td><td></td></tr><tr><td>author</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>作者</td><td>默认为 <code>Mr.Hope</code>，如需取消请传入 <code>&#39;&#39;</code></td></tr><tr><td>time</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>最后编辑时间</td><td></td></tr></tbody></table><h3 id="basecarousel" tabindex="-1"><a class="header-anchor" href="#basecarousel" aria-hidden="true">#</a> BaseCarousel</h3><p>轮播图</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>content</td><td style="text-align:center;">是</td><td style="text-align:center;">CarouselItem[]</td><td>轮播图组件内容</td><td></td></tr><tr><td>vertical</td><td style="text-align:center;">否</td><td style="text-align:center;">Boolean</td><td>是否竖直显示</td><td>默认为 <code>false</code></td></tr><tr><td>autoplay</td><td style="text-align:center;">否</td><td style="text-align:center;">Boolean</td><td>是否支持自动播放</td><td>默认为 <code>true</code></td></tr><tr><td>autoplaySpeed</td><td style="text-align:center;">否</td><td style="text-align:center;">Number</td><td>自动播放时间间隔</td><td>默认为 <code>3000</code></td></tr><tr><td>speed</td><td style="text-align:center;">否</td><td style="text-align:center;">Number</td><td>切换速度</td><td>默认为 <code>500</code></td></tr><tr><td>dotDisplay</td><td style="text-align:center;">否</td><td style="text-align:center;">Boolean</td><td>是否显示指示点</td><td>默认为 <code>true</code></td></tr><tr><td>arrowDisplay</td><td style="text-align:center;">否</td><td style="text-align:center;">Boolean</td><td>是否显示切换箭头</td><td>默认为 <code>true</code></td></tr><tr><td>easing</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>切换动画</td><td>默认为 <code>easeInOutQuart</code></td></tr></tbody></table><ul><li><strong>CarouselItem</strong></li></ul><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>caption</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>轮播图的主标题</td><td>请填入核心内容</td></tr><tr><td>subCaption</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>轮播图的副标题</td><td>主标题的进一步解释</td></tr><tr><td>src</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>图片的路径</td><td>所有轮播图图片长宽比例应该相同，推荐值 <code>16: 9</code></td></tr><tr><td>url</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>轮播图点击时的跳转路径</td><td>支持相对路径绝对路径以及 http、https 链接</td></tr><tr><td>enSubhead</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>轮播图的英文副标题</td><td></td></tr><tr><td>alt</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>图片失效时的显示文字</td><td>不填会默认初始化为文字 <code>轮播图背景</code></td></tr><tr><td>desc</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>页面右下角补充说明</td><td>仅在 large 及以上屏幕上显示</td></tr><tr><td>black</td><td style="text-align:center;">否</td><td style="text-align:center;">Boolean</td><td>是否采用黑色文字</td><td>默认文字色为白色</td></tr></tbody></table><h3 id="basephone" tabindex="-1"><a class="header-anchor" href="#basephone" aria-hidden="true">#</a> BasePhone</h3><p>生成拨打电话提示，该组件仅为兼容小程序。</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th></tr></thead><tbody><tr><td>number</td><td style="text-align:center;">是</td><td style="text-align:center;">String 或 Number</td><td>电话号码</td></tr></tbody></table><h2 id="以下是以便复用的不常用组件" tabindex="-1"><a class="header-anchor" href="#以下是以便复用的不常用组件" aria-hidden="true">#</a> 以下是以便复用的不常用组件</h2><h3 id="nav-组件" tabindex="-1"><a class="header-anchor" href="#nav-组件" aria-hidden="true">#</a> Nav 组件</h3><p>网页导航栏</p><h3 id="slide-组件" tabindex="-1"><a class="header-anchor" href="#slide-组件" aria-hidden="true">#</a> Slide 组件</h3><p>网页侧边栏</p><h3 id="footer-组件" tabindex="-1"><a class="header-anchor" href="#footer-组件" aria-hidden="true">#</a> Footer 组件</h3><p>网页页脚</p><h3 id="basemenu-组件" tabindex="-1"><a class="header-anchor" href="#basemenu-组件" aria-hidden="true">#</a> BaseMenu 组件</h3><p>生成竖直菜单</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th></tr></thead><tbody><tr><td>list</td><td style="text-align:center;">是</td><td style="text-align:center;">MenuItem[]</td><td>菜单内容</td></tr></tbody></table><ul><li><strong>MenuItem</strong></li></ul><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>key</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>菜单项的标识符</td><td>不可重复</td></tr><tr><td>title</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>菜单的文字</td><td></td></tr><tr><td>icon</td><td style="text-align:center;">否</td><td style="text-align:center;">String 或 Boolean</td><td>菜单的图标</td><td>填入 <code>true</code> 不显示图标但是图标区留空</td></tr><tr><td>children</td><td style="text-align:center;">否</td><td style="text-align:center;">MenuItem[]</td><td>子菜单</td><td></td></tr></tbody></table><h3 id="basepage-组件" tabindex="-1"><a class="header-anchor" href="#basepage-组件" aria-hidden="true">#</a> BasePage 组件</h3><p>用于渲染小程序 json 生成页面</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th></tr></thead><tbody><tr><td>pagedata</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>小程序页面 json 的字符串</td></tr></tbody></table><h3 id="docview-组件" tabindex="-1"><a class="header-anchor" href="#docview-组件" aria-hidden="true">#</a> DocView 组件</h3><p>用于自动渲染转码的 HTML</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th></tr></thead><tbody><tr><td>docContent</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>Markdown 转 HTML 内容</td></tr></tbody></table><h3 id="basecard-组件" tabindex="-1"><a class="header-anchor" href="#basecard-组件" aria-hidden="true">#</a> BaseCard 组件</h3><p>卡片样式。</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>title</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>卡片的标题</td><td></td></tr><tr><td>price</td><td style="text-align:center;">是</td><td style="text-align:center;">Number</td><td>价格</td><td></td></tr><tr><td>desc</td><td style="text-align:center;">是</td><td style="text-align:center;">Array</td><td>卡片详情</td><td>数组的每一项是卡片详情的每一项内容，支持 rawHtml</td></tr><tr><td>url</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>卡片跳转的地址</td><td></td></tr></tbody></table><h3 id="basetimeaxis-组件" tabindex="-1"><a class="header-anchor" href="#basetimeaxis-组件" aria-hidden="true">#</a> BaseTimeAxis 组件</h3><p>生成时间轴</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th></tr></thead><tbody><tr><td>timeList</td><td style="text-align:center;">是</td><td style="text-align:center;">TimeListItem[]</td><td>Markdown 转 HTML 内容</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">Note</p><p>※ 必须将该组件直接放置在 <code>div.container</code> 中! 否则会造成显示错乱。</p></div><ul><li><strong>TimeListItem</strong>:</li></ul><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>title</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>时间线的标题</td><td></td></tr><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>时间线的段落文字</td><td>可输入 rawhtml，支持 <code>\\n</code> 与连续空格</td></tr><tr><td>icon</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>时间线的图标</td><td>可输入 rawhtml</td></tr><tr><td>url</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>点击当前选项卡跳转的地址</td><td></td></tr></tbody></table><h3 id="mydoc-组件" tabindex="-1"><a class="header-anchor" href="#mydoc-组件" aria-hidden="true">#</a> MyDoc 组件</h3><p>用于自动生成 HTML 页面</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th></tr></thead><tbody><tr><td>baselength</td><td style="text-align:center;">是</td><td style="text-align:center;">Number</td><td>MarkDown 基准路径字符数</td></tr></tbody></table><h3 id="backtop-组件" tabindex="-1"><a class="header-anchor" href="#backtop-组件" aria-hidden="true">#</a> BackTop 组件</h3><p>一个返回顶部按钮，当滚动距离超过 300px 时显示会显示在右下角</p><h3 id="loadingicon" tabindex="-1"><a class="header-anchor" href="#loadingicon" aria-hidden="true">#</a> LoadingIcon</h3><p>一个自定义的齿轮加载图标</p><h3 id="passwordmodal" tabindex="-1"><a class="header-anchor" href="#passwordmodal" aria-hidden="true">#</a> PasswordModal</h3><p>密码弹出框</p><table><thead><tr><th>属性</th><th style="text-align:center;">必填</th><th style="text-align:center;">类型</th><th>内容</th><th>补充说明</th></tr></thead><tbody><tr><td>url</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td>验证地址</td><td>填入绝对路径，不需要填写 php 文件后缀名</td></tr><tr><td>userNameKey</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>用户名的自动填充键值</td><td>填写后会提示输入用户名，默认不输入</td></tr><tr><td>passwordKey</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td>密码的自动填充键值</td><td>默认为 <code>password</code></td></tr></tbody></table>',71);function s(c,o){return e(),d("div",null,[i,a(" more "),h])}const y=t(l,[["render",s],["__file","component.html.vue"]]);export{y as default};
