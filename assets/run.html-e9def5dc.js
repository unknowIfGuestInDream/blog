import{_ as i,W as l,X as p,a2 as o}from"./framework-0e132572.js";const d={},e=o('<h2 id="在真实设备上运行" tabindex="-1"><a class="header-anchor" href="#在真实设备上运行" aria-hidden="true">#</a> 在真实设备上运行</h2><p>按照以下步骤设置设备：</p><ol><li><p>使用一根 USB 线将设备连接到开发机器。如果您是在 Windows 上开发的，则可能需要为设备安装合适的 USB 驱动程序。</p></li><li><p>执行以下步骤，在开发者选项窗口中启用 USB 调试：</p><ol><li><p>打开设置应用。</p></li><li><p>如果您的设备使用 Android v8.0 或更高版本，请选择系统。否则，请继续执行下一步。</p></li><li><p>滚动到底部，然后选择关于手机。</p></li><li><p>滚动到底部，然后点按版本号七次。</p></li><li><p>返回上一屏幕，滚动到底部，然后点按开发者选项。</p></li><li><p>在开发者选项窗口中，向下滚动以查找并启用 USB 调试。</p></li></ol></li></ol><p>按照以下步骤操作，在设备上运行应用：</p><ol><li><p>在 Android Studio 中，从工具栏中的运行/调试配置下拉菜单中选择您的应用。</p></li><li><p>在工具栏中，从目标设备下拉菜单中选择要用来运行应用的设备。</p></li><li><p>点击 Run 。</p><p>Android Studio 会在已连接的设备上安装您的应用并启动它。您现在会看到设备上的应用中显示了“Hello, World!”。</p></li></ol><h2 id="在模拟器上运行" tabindex="-1"><a class="header-anchor" href="#在模拟器上运行" aria-hidden="true">#</a> 在模拟器上运行</h2><p>按照以下步骤操作，在模拟器上运行应用：</p><ol><li><p>在 Android Studio 中创建一个 Android 虚拟设备 (AVD)，模拟器可以使用该设备安装和运行您的应用。</p></li><li><p>在工具栏中，从运行/调试配置下拉菜单中选择您的应用。</p></li><li><p>从目标设备下拉菜单中，选择要用来运行应用的 AVD。</p></li><li><p>点击 Run 图标 。</p><p>Android Studio 会在 AVD 上安装应用并启动模拟器。您现在会看到应用中显示了“Hello, World!”。</p></li></ol>',8),r=[e];function n(a,t){return l(),p("div",null,r)}const s=i(d,[["render",n],["__file","run.html.vue"]]);export{s as default};
