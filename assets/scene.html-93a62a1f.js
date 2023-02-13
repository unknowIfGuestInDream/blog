import{_ as t,X as d,Y as r,a0 as e,Z as a,a3 as o}from"./framework-0ff09816.js";const c={},h=a("p",null,"场景值用来描述用户进入小程序的路径。",-1),i=o('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>由于 Android 系统限制，目前还无法获取到按 Home 键退出到桌面，然后从桌面再次进小程序的场景值，对于这种情况，会保留上一次的场景值。</p></div><h2 id="获取场景值" tabindex="-1"><a class="header-anchor" href="#获取场景值" aria-hidden="true">#</a> 获取场景值</h2><p>开发者可以通过下列方式获取场景值:</p><ul><li>对于小程序，可以在 App 的 <code>onLaunch</code> 和 <code>onShow</code>，或 <code>wx.getLaunchOptionsSync</code> 中获取上述场景值。</li><li>对于小游戏，可以在 <code>wx.getLaunchOptionsSync</code> 和 <code>wx.onShow</code> 中获取上述场景值</li></ul><h2 id="场景值列表" tabindex="-1"><a class="header-anchor" href="#场景值列表" aria-hidden="true">#</a> 场景值列表</h2><table><thead><tr><th>场景值 ID</th><th>说明</th></tr></thead><tbody><tr><td>1000</td><td>其他</td></tr><tr><td>1001</td><td>发现栏小程序主入口，「最近使用」列表(基础库 2.2.4 版本起包含「我的小程序」列表)</td></tr><tr><td>1005</td><td>微信首页顶部搜索框的搜索结果页</td></tr><tr><td>1006</td><td>发现栏小程序主入口搜索框的搜索结果页</td></tr><tr><td>1007</td><td>单人聊天会话中的小程序消息卡片</td></tr><tr><td>1008</td><td>群聊会话中的小程序消息卡片</td></tr><tr><td>1010</td><td>收藏夹</td></tr><tr><td>1011</td><td>扫描二维码</td></tr><tr><td>1012</td><td>长按图片识别二维码</td></tr><tr><td>1013</td><td>扫描手机相册中选取的二维码</td></tr><tr><td>1014</td><td>小程序模板消息</td></tr><tr><td>1017</td><td>前往小程序体验版的入口页</td></tr><tr><td>1019</td><td>微信钱包(微信客户端 7.0.0 版本改为支付入口)</td></tr><tr><td>1020</td><td>公众号 profile 页相关小程序列表(已废弃)</td></tr><tr><td>1022</td><td>聊天顶部置顶小程序入口(微信客户端 6.6.1 版本起废弃)</td></tr><tr><td>1023</td><td>安卓系统桌面图标</td></tr><tr><td>1024</td><td>小程序 profile 页</td></tr><tr><td>1025</td><td>扫描一维码</td></tr><tr><td>1026</td><td>发现栏小程序主入口，「附近的小程序」列表</td></tr><tr><td>1027</td><td>微信首页顶部搜索框搜索结果页「使用过的小程序」列表</td></tr><tr><td>1028</td><td>我的卡包</td></tr><tr><td>1029</td><td>小程序中的卡券详情页</td></tr><tr><td>1030</td><td>自动化测试下打开小程序</td></tr><tr><td>1031</td><td>长按图片识别一维码</td></tr><tr><td>1032</td><td>扫描手机相册中选取的一维码</td></tr><tr><td>1034</td><td>微信支付完成页</td></tr><tr><td>1035</td><td>公众号自定义菜单</td></tr><tr><td>1036</td><td>App 分享消息卡片</td></tr><tr><td>1037</td><td>小程序打开小程序</td></tr><tr><td>1038</td><td>从另一个小程序返回</td></tr><tr><td>1039</td><td>摇电视</td></tr><tr><td>1042</td><td>添加好友搜索框的搜索结果页</td></tr><tr><td>1043</td><td>公众号模板消息</td></tr><tr><td>1044</td><td>带 shareTicket 的小程序消息卡片 详情</td></tr><tr><td>1045</td><td>朋友圈广告</td></tr><tr><td>1046</td><td>朋友圈广告详情页</td></tr><tr><td>1047</td><td>扫描小程序码</td></tr><tr><td>1048</td><td>长按图片识别小程序码</td></tr><tr><td>1049</td><td>扫描手机相册中选取的小程序码</td></tr><tr><td>1052</td><td>卡券的适用门店列表</td></tr><tr><td>1053</td><td>搜一搜的结果页</td></tr><tr><td>1054</td><td>顶部搜索框小程序快捷入口(微信客户端版本 6.7.4 起废弃)</td></tr><tr><td>1056</td><td>聊天顶部音乐播放器右上角菜单</td></tr><tr><td>1057</td><td>钱包中的银行卡详情页</td></tr><tr><td>1058</td><td>公众号文章</td></tr><tr><td>1059</td><td>体验版小程序绑定邀请页</td></tr><tr><td>1064</td><td>微信首页连 Wi-Fi 状态栏</td></tr><tr><td>1067</td><td>公众号文章广告</td></tr><tr><td>1068</td><td>附近小程序列表广告(已废弃)</td></tr><tr><td>1069</td><td>移动应用</td></tr><tr><td>1071</td><td>钱包中的银行卡列表页</td></tr><tr><td>1072</td><td>二维码收款页面</td></tr><tr><td>1073</td><td>客服消息列表下发的小程序消息卡片</td></tr><tr><td>1074</td><td>公众号会话下发的小程序消息卡片</td></tr><tr><td>1077</td><td>摇周边</td></tr><tr><td>1078</td><td>微信连 Wi-Fi 成功提示页</td></tr><tr><td>1079</td><td>微信游戏中心</td></tr><tr><td>1081</td><td>客服消息下发的文字链</td></tr><tr><td>1082</td><td>公众号会话下发的文字链</td></tr><tr><td>1084</td><td>朋友圈广告原生页</td></tr><tr><td>1088</td><td>会话中查看系统消息，打开小程序</td></tr><tr><td>1089</td><td>微信聊天主界面下拉，「最近使用」栏(基础库 2.2.4 版本起包含「我的小程序」栏)</td></tr><tr><td>1090</td><td>长按小程序右上角菜单唤出最近使用历史</td></tr><tr><td>1091</td><td>公众号文章商品卡片</td></tr><tr><td>1092</td><td>城市服务入口</td></tr><tr><td>1095</td><td>小程序广告组件</td></tr><tr><td>1096</td><td>聊天记录，打开小程序</td></tr><tr><td>1097</td><td>微信支付签约原生页，打开小程序</td></tr><tr><td>1099</td><td>页面内嵌插件</td></tr><tr><td>1100</td><td>红包封面详情页打开小程序</td></tr><tr><td>1102</td><td>公众号 profile 页服务预览</td></tr><tr><td>1103</td><td>发现栏小程序主入口，「我的小程序」列表(基础库 2.2.4 版本起废弃)</td></tr><tr><td>1104</td><td>微信聊天主界面下拉，「我的小程序」栏(基础库 2.2.4 版本起废弃)</td></tr><tr><td>1106</td><td>聊天主界面下拉，从顶部搜索结果页，打开小程序</td></tr><tr><td>1107</td><td>订阅消息，打开小程序</td></tr><tr><td>1113</td><td>安卓手机负一屏，打开小程序(三星)</td></tr><tr><td>1114</td><td>安卓手机侧边栏，打开小程序(三星)</td></tr><tr><td>1119</td><td>【企业微信】工作台内打开小程序</td></tr><tr><td>1120</td><td>【企业微信】个人资料页内打开小程序</td></tr><tr><td>1121</td><td>【企业微信】聊天加号附件框内打开小程序</td></tr><tr><td>1124</td><td>扫“一物一码”打开小程序</td></tr><tr><td>1125</td><td>长按图片识别“一物一码”</td></tr><tr><td>1126</td><td>扫描手机相册中选取的“一物一码”</td></tr><tr><td>1129</td><td>微信爬虫访问 详情</td></tr><tr><td>1131</td><td>浮窗打开小程序</td></tr><tr><td>1133</td><td>硬件设备打开小程序 详情</td></tr><tr><td>1135</td><td>小程序 profile 页其他小程序列表，打开小程序</td></tr><tr><td>1146</td><td>地理位置信息打开出行类小程序</td></tr><tr><td>1148</td><td>卡包-交通卡，打开小程序</td></tr><tr><td>1150</td><td>扫一扫商品条码结果页打开小程序</td></tr><tr><td>1152</td><td>订阅号视频打开小程序</td></tr><tr><td>1153</td><td>“识物”结果页打开小程序</td></tr><tr><td>1154</td><td>朋友圈内打开“单页模式”</td></tr><tr><td>1155</td><td>“单页模式”打开小程序</td></tr><tr><td>1157</td><td>服务号会话页打开小程序</td></tr><tr><td>1158</td><td>群工具打开小程序</td></tr><tr><td>1167</td><td>H5 通过开放标签打开小程序 详情</td></tr><tr><td>1169</td><td>发现栏小程序主入口，各个生活服务入口(例如快递服务、出行服务等)</td></tr></tbody></table><h2 id="返回来源信息的场景" tabindex="-1"><a class="header-anchor" href="#返回来源信息的场景" aria-hidden="true">#</a> 返回来源信息的场景</h2><p>部分场景值下还可以获取来源应用、公众号或小程序的 appId。获取方式请参考对应 API 的参考文档。</p><table><thead><tr><th>场景值</th><th>场景</th><th>appId 含义</th></tr></thead><tbody><tr><td>1020</td><td>公众号 profile 页相关小程序列表</td><td>来源公众号</td></tr><tr><td>1035</td><td>公众号自定义菜单</td><td>来源公众号</td></tr><tr><td>1036</td><td>App 分享消息卡片</td><td>来源 App</td></tr><tr><td>1037</td><td>小程序打开小程序</td><td>来源小程序</td></tr><tr><td>1038</td><td>从另一个小程序返回</td><td>来源小程序</td></tr><tr><td>1043</td><td>公众号模板消息</td><td>来源公众号</td></tr></tbody></table>',9);function n(l,p){return d(),r("div",null,[h,e(" more "),i])}const f=t(c,[["render",n],["__file","scene.html.vue"]]);export{f as default};
