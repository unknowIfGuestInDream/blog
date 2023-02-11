import{_ as n,X as a,Y as t,a0 as s,Z as e,a3 as p}from"./framework-56fac175.js";const i={},c=e("p",null,"本章包含了一些关于 Android 开发的基础内容。",-1),o=p(`<p>您可以使用 Kotlin、Java 和 C++ 语言编写 Android 应用。Android SDK 工具会将您的代码连同任何数据和资源文件编译成一个 APK(Android 软件包)，即带有 <code>.apk</code> 后缀的归档文件。一个 APK 文件包含 Android 应用的所有内容，它也是 Android 设备用来安装应用的文件。</p><p>每个 Android 应用都处于各自的安全沙盒中，并受以下 Android 安全功能的保护:</p><ul><li><p>Android 操作系统是一种多用户 Linux 系统，其中的每个应用都是一个不同的用户； 默认情况下，系统会为每个应用分配一个唯一的 Linux 用户 ID(该 ID 仅由系统使用，应用并不知晓)。系统会为应用中的所有文件设置权限，使得只有分配给该应用的用户 ID 才能访问这些文件；</p></li><li><p>每个进程都拥有自己的虚拟机 (VM)，因此应用代码独立于其他应用而运行。</p></li><li><p>默认情况下，每个应用都在其自己的 Linux 进程内运行。Android 系统会在需要执行任何应用组件时启动该进程，然后当不再需要该进程或系统必须为其他应用恢复内存时，其便会关闭该进程。</p></li></ul><p>Android 系统实现了最小权限原则。换言之，默认情况下，每个应用只能访问执行其工作所需的组件，而不能访问其他组件。这样便能创建非常安全的环境，在此环境中，应用无法访问其未获得权限的系统部分。不过，应用仍可通过一些途径与其他应用共享数据以及访问系统服务:</p><ul><li><p>可以安排两个应用共享同一 Linux 用户 ID，在此情况下，二者便能访问彼此的文件。为节省系统资源，也可安排拥有相同用户 ID 的应用在同一 Linux 进程中运行，并共享同一 VM。应用还必须使用相同的证书进行签名。</p></li><li><p>应用可以请求访问设备数据(如用户的联系人、短信消息、可装载存储装置(SD 卡)、相机、蓝牙等)的权限。用户必须明确授予这些权限。如需了解详细信息，请参阅使用系统权限。</p></li></ul><h2 id="应用组件" tabindex="-1"><a class="header-anchor" href="#应用组件" aria-hidden="true">#</a> 应用组件</h2><p>应用组件是 Android 应用的基本构建块。每个组件都是一个入口点，系统或用户可通过该入口点进入您的应用。有些组件会依赖于其他组件。</p><p>共有四种不同的应用组件类型:</p><ul><li>Activity</li><li>服务</li><li>广播接收器</li><li>内容提供程序</li></ul><p>每种类型都有不同的用途和生命周期，后者会定义如何创建和销毁组件。</p><h3 id="activity" tabindex="-1"><a class="header-anchor" href="#activity" aria-hidden="true">#</a> Activity</h3><p>Activity 是与用户交互的入口点。它表示拥有界面的单个屏幕。例如，电子邮件应用可能有一个显示新电子邮件列表的 Activity、一个用于撰写电子邮件的 Activity 以及一个用于阅读电子邮件的 Activity。尽管这些 Activity 通过协作在电子邮件应用中形成一种紧密结合的用户体验，但每个 Activity 都独立于其他 Activity 而存在。因此，其他应用可以启动其中任何一个 Activity(如果电子邮件应用允许)。例如，相机应用可以启动电子邮件应用内用于撰写新电子邮件的 Activity，以便用户共享图片。Activity 有助于完成系统和应用程序之间的以下重要交互:</p><ul><li><p>追踪用户当前关心的内容(屏幕上显示的内容)，以确保系统继续运行托管 Activity 的进程。</p></li><li><p>了解先前使用的进程包含用户可能返回的内容(已停止的 Activity)，从而更优先保留这些进程。</p></li><li><p>帮助应用处理终止其进程的情况，以便用户可以返回已恢复其先前状态的 Activity。</p></li><li><p>提供一种途径，让应用实现彼此之间的用户流，并让系统协调这些用户流。(此处最经典的示例是共享。)</p></li></ul><p>您需将 Activity 作为 Activity 类的子类来实现。如需了解有关 Activity 类的更多信息，请参阅 Activity 开发者指南。</p><h2 id="服务" tabindex="-1"><a class="header-anchor" href="#服务" aria-hidden="true">#</a> 服务</h2><p>服务是一个通用入口点，用于因各种原因使应用在后台保持运行状态。它是一种在后台运行的组件，用于执行长时间运行的操作或为远程进程执行作业。服务不提供界面。例如，当用户使用其他应用时，服务可能会在后台播放音乐或通过网络获取数据，但这不会阻断用户与 Activity 的交互。诸如 Activity 等其他组件可以启动服务，使该服务运行或绑定到该服务，以便与其进行交互。事实上，有两种截然不同的语义服务可以告知系统如何管理应用: 已启动服务会告知系统使其运行至工作完毕。此类工作可以是在后台同步一些数据，或者在用户离开应用后继续播放音乐。在后台同步数据或播放音乐也代表了两种不同类型的已启动服务，而这些服务可以修改系统处理它们的方式:</p><ul><li><p>音乐播放是用户可直接感知的服务，因此，应用会向用户发送通知，表明其希望成为前台，从而告诉系统此消息；在此情况下，系统明白它应尽全力维持该服务进程运行，因为进程消失会令用户感到不快。</p></li><li><p>通常，用户不会意识到常规后台服务正处于运行状态，因此系统可以更自由地管理其进程。如果系统需要使用 RAM 来处理用户更迫切关注的内容，则其可能允许终止服务(然后在稍后的某个时刻重启服务)。</p></li></ul><p>绑定服务之所以能运行，原因是某些其他应用(或系统)已表示希望使用该服务。从根本上讲，这是为另一个进程提供 API 的服务。因此，系统会知晓这些进程之间存在依赖关系，所以如果进程 A 绑定到进程 B 中的服务，系统便知道自己需使进程 B(及其服务)为进程 A 保持运行状态。此外，如果进程 A 是用户关心的内容，系统随即也知道将进程 B 视为用户关心的内容。由于存在灵活性(无论好坏)，服务已成为非常有用的构建块，并且可实现各种高级系统概念。动态壁纸、通知侦听器、屏幕保护程序、输入方法、无障碍功能服务以及众多其他核心系统功能均可构建为在其运行时由应用实现、系统绑定的服务。</p><p>您需将服务作为 Service 的子类来实现。如需了解有关 Service 类的更多信息，请参阅服务开发者指南。</p><h2 id="广播接收器" tabindex="-1"><a class="header-anchor" href="#广播接收器" aria-hidden="true">#</a> 广播接收器</h2><p>借助广播接收器组件，系统能够在常规用户流之外向应用传递事件，从而允许应用响应系统范围内的广播通知。由于广播接收器是另一个明确定义的应用入口，因此系统甚至可以向当前未运行的应用传递广播。例如，应用可通过调度提醒来发布通知，以告知用户即将发生的事件。而且，通过将该提醒传递给应用的广播接收器，应用在提醒响起之前即无需继续运行。许多广播均由系统发起，例如，通知屏幕已关闭、电池电量不足或已拍摄照片的广播。应用也可发起广播，例如，通知其他应用某些数据已下载至设备，并且可供其使用。尽管广播接收器不会显示界面，但其可以创建状态栏通知，在发生广播事件时提醒用户。但广播接收器更常见的用途只是作为通向其他组件的通道，旨在执行极少量的工作。例如，它可能会根据带 JobScheduler 的事件调度 JobService 来执行某项工作 广播接收器作为 BroadcastReceiver 的子类实现，并且每条广播都作为 Intent 对象进行传递。如需了解详细信息，请参阅 BroadcastReceiver 类。</p><h2 id="内容提供程序" tabindex="-1"><a class="header-anchor" href="#内容提供程序" aria-hidden="true">#</a> 内容提供程序</h2><p>内容提供程序管理一组共享的应用数据，您可以将这些数据存储在文件系统、SQLite 数据库、网络中或者您的应用可访问的任何其他持久化存储位置。其他应用可通过内容提供程序查询或修改数据(如果内容提供程序允许)。例如，Android 系统可提供管理用户联系人信息的内容提供程序。因此，任何拥有适当权限的应用均可查询内容提供程序(如 <code>ContactsContract.Data</code>)，以读取和写入特定人员的相关信息。我们很容易将内容提供程序看作数据库上的抽象，因为其内置的大量 API 和支持时常适用于这一情况。但从系统设计的角度看，二者的核心目的不同。对系统而言，内容提供程序是应用的入口点，用于发布由 URI 架构识别的已命名数据项。因此，应用可以决定如何将其包含的数据映射到 URI 命名空间，进而将这些 URI 分发给其他实体。反之，这些实体也可使用分发的 URI 来访问数据。在管理应用的过程中，系统可以执行以下特殊操作:</p><ul><li><p>分配 URI 无需应用保持运行状态，因此 URI 可在其所属的应用退出后继续保留。当系统必须从相应的 URI 检索应用数据时，系统只需确保所属应用仍处于运行状态。</p></li><li><p>这些 URI 还会提供重要的细粒度安全模型。例如，应用可将其所拥有图像的 URI 放到剪贴板上，但将其内容提供程序锁定，以便其他应用程序无法随意访问它。当第二个应用尝试访问剪贴板上的 URI 时，系统可允许该应用通过临时的 URI 授权来访问数据，这样便只能访问 URI 后面的数据，而非第二个应用中的其他任何内容。</p></li></ul><p>内容提供程序也适用于读取和写入您的应用不共享的私有数据。</p><p>内容提供程序作为 ContentProvider 的子类实现，并且其必须实现一组标准 API，以便其他应用能够执行事务。如需了解详细信息，请参阅内容提供程序开发者指南。</p><hr><p>Android 系统设计的独特之处在于，任何应用都可启动其他应用的组件。例如，当您想让用户使用设备相机拍摄照片时，另一个应用可能也可执行该操作，因而您的应用便可使用该应用，而非自行产生一个 Activity 来拍摄照片。您无需加入甚至链接到该相机应用的代码。只需启动拍摄照片的相机应用中的 Activity 即可。完成拍摄时，系统甚至会将照片返回您的应用，以便您使用。对用户而言，这就如同相机是您应用的一部分。</p><p>当系统启动某个组件时，它会启动该应用的进程(如果尚未运行)，并实例化该组件所需的类。例如，如果您的应用启动相机应用中拍摄照片的 Activity，则该 Activity 会在属于相机应用的进程(而非您的应用进程)中运行。因此，与大多数其他系统上的应用不同，Android 应用并没有单个入口点(即没有 main() 函数)。</p><p>由于系统在单独的进程中运行每个应用，且其文件权限会限制对其他应用的访问，因此您的应用无法直接启动其他应用中的组件，但 Android 系统可以。如要启动其他应用中的组件，请向系统传递一条消息，说明启动特定组件的 Intent。系统随后便会为您启动该组件。</p><h2 id="启动组件" tabindex="-1"><a class="header-anchor" href="#启动组件" aria-hidden="true">#</a> 启动组件</h2><p>在四种组件类型中，有三种(Activity、服务和广播接收器)均通过异步消息 Intent 进行启动。Intent 会在运行时对各个组件进行互相绑定。您可以将 Intent 视为从其他组件(无论该组件是属于您的应用还是其他应用)请求操作的信使。</p><p>您需使用 Intent 对象创建 Intent，该对象通过定义消息来启动特定组件(显式 Intent)或特定的组件类型(隐式 Intent)。</p><p>对于 Activity 和服务，Intent 会定义要执行的操作(例如，查看或发送某内容)，并且可指定待操作数据的 URI，以及正在启动的组件可能需要了解的信息。例如，Intent 可能会传达对 Activity 的请求，以便显示图像或打开网页。在某些情况下，您可以通过启动 Activity 来接收结果，这样 Activity 还会返回 Intent 中的结果。例如，您可以发出一个 Intent，让用户选取某位联系人并将其返回给您。返回 Intent 包含指向所选联系人的 URI。</p><p>对于广播接收器，Intent 只会定义待广播的通知。例如，指示设备电池电量不足的广播只包含指示“电池电量不足”的已知操作字符串。</p><p>与 Activity、服务和广播接收器不同，内容提供程序并非由 Intent 启动。相反，它们会在成为 ContentResolver 的请求目标时启动。内容解析程序会通过内容提供程序处理所有直接事务，因此通过提供程序执行事务的组件便无需执行事务，而是改为在 ContentResolver 对象上调用方法。这会在内容提供程序与请求信息的组件之间留出一个抽象层(以确保安全)。</p><p>每种组件都有不同的启动方法:</p><ul><li><p>如要启动 Activity，您可以向 startActivity() 或 startActivityForResult() 传递 Intent(当您想让 Activity 返回结果时)，或者为其安排新任务。</p></li><li><p>在 Android 5.0(API 级别 21)及更高版本中，您可以使用 JobScheduler 类来调度操作。对于早期 Android 版本，您可以通过向 startService() 传递 Intent 来启动服务(或对执行中的服务下达新指令)。您也可通过向将 bindService() 传递 Intent 来绑定到该服务。</p></li><li><p>您可以通过向 <code>sendBroadcast()</code>、<code>sendOrderedBroadcast()</code> 或 <code>sendStickyBroadcast()</code> 等方法传递 Intent 来发起广播。</p></li><li><p>您可以通过在 ContentResolver 上调用 <code>query()</code>，对内容提供程序执行查询。</p></li></ul><p>如需了解有关 Intent 用法的详细信息，请参阅 Intent 和 Intent 过滤器文档。以下文档将为您详细介绍如何启动特定组件: Activity、服务、BroadcastReceiver 和内容提供程序。</p><h2 id="清单文件" tabindex="-1"><a class="header-anchor" href="#清单文件" aria-hidden="true">#</a> 清单文件</h2><p>在 Android 系统启动应用组件之前，系统必须通过读取应用的清单文件 (AndroidManifest.xml) 确认组件存在。您的应用必须在此文件中声明其所有组件，该文件必须位于应用项目目录的根目录中。</p><p>除了声明应用的组件外，清单文件还有许多其他作用，如:</p><ul><li><p>确定应用需要的任何用户权限，如互联网访问权限或对用户联系人的读取权限。</p></li><li><p>根据应用使用的 API，声明应用所需的最低 API 级别。</p></li><li><p>声明应用使用或需要的硬件和软件功能，如相机、蓝牙服务或多点触摸屏幕。</p></li><li><p>声明应用需要链接的 API 库(Android 框架 API 除外)，如 Google 地图库。</p></li></ul><h3 id="声明组件" tabindex="-1"><a class="header-anchor" href="#声明组件" aria-hidden="true">#</a> 声明组件</h3><p>清单文件的主要任务是告知系统应用组件的相关信息。例如，清单文件可按如下所示声明 Activity:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span> <span class="token attr-name">...</span> <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span> <span class="token attr-name"><span class="token namespace">android:</span>icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@drawable/app_icon.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.example.project.ExampleActivity<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">android:</span>label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@string/example_label<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>application</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manifest</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>&lt;application&gt;</code> 元素中，android:icon 属性指向标识应用的图标所对应的资源。</p><p>在 <code>&lt;activity&gt;</code> 元素中，android:name 属性指定 Activity 子类的完全限定类名，<code>android:label</code> 属性指定用作 Activity 的用户可见标签的字符串。</p><p>您必须使用以下元素声明所有应用组件:</p><ul><li><p>Activity 的 <code>&lt;activity&gt;</code> 元素。</p></li><li><p>服务的 <code>&lt;service&gt;</code> 元素。</p></li><li><p>广播接收器的 <code>&lt;receiver&gt;</code> 元素。</p></li><li><p>内容提供程序的 <code>&lt;provider&gt;</code> 元素。</p></li></ul><p>如果未在清单文件中声明源代码中包含的 Activity、服务和内容提供程序，则这些组件对系统不可见，因此也永远不会运行。不过，您可以 BroadcastReceiver 对象的形式，在清单中声明或在代码中动态创建广播接收器；以及通过调用 <code>registerReceiver()</code>，在系统中注册广播接收器。</p><p>如需详细了解如何为您的应用构建清单文件，请参阅 AndroidManifest.xml 文件文档。</p><h3 id="声明组件功能" tabindex="-1"><a class="header-anchor" href="#声明组件功能" aria-hidden="true">#</a> 声明组件功能</h3><p>如上文启动组件中所述，您可以使用 Intent 来启动 Activity、服务和广播接收器。您可以通过在 Intent 中显式命名目标组件(使用组件类名)来使用 Intent。您还可使用隐式 Intent，通过它来描述要执行的操作类型和待操作数据(可选)。借助隐式 Intent，系统能够在设备上找到可执行该操作的组件，并启动该组件。如果有多个组件可以执行 Intent 所描述的操作，则由用户选择使用哪一个组件。</p><div class="hint-container danger"><p class="hint-container-title">Warning</p><p>如果您使用 Intent 来启动 Service，请使用显式 Intent 来确保应用的安全性。使用隐式 Intent 启动服务存在安全隐患，因为您无法确定哪些服务将响应 Intent，且用户无法看到哪些服务已启动。从 Android 5.0 (API 级别 21) 开始，如果使用隐式 Intent 调用 <code>bindService()</code>，系统会抛出异常。请勿为您的服务声明 Intent 过滤器。</p></div><p>通过将收到的 Intent 与设备上其他应用的清单文件中提供的 Intent 过滤器进行比较，系统便可识别能响应 Intent 的组件。</p><p>在应用的清单文件中声明 Activity 时，您可以选择性地加入声明 Activity 功能的 Intent 过滤器，以便响应来自其他应用的 Intent。您可以将 <code>&lt;intent-filter&gt;</code> 元素作为组件声明元素的子项进行添加，从而为您的组件声明 Intent 过滤器。</p><p>例如，如果您构建的电子邮件应用包含用于撰写新电子邮件的 Activity，则可通过声明 Intent 过滤器来响应 “send” Intent(目的是发送新电子邮件)，如下方示例所示:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span> <span class="token attr-name">...</span> <span class="token punctuation">&gt;</span></span>
  ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span> <span class="token attr-name">...</span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.example.project.ComposeEmailActivity<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.action.SEND<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data</span> <span class="token attr-name"><span class="token namespace">android:</span>type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*/*<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.category.DEFAULT<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>application</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manifest</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果另一个应用创建包含 <code>ACTION_SEND</code> 操作的 Intent 并将其传递到 <code>startActivity()</code>，则系统可能会启动您的 Activity，以便用户能够草拟并发送电子邮件。</p><p>如需了解有关创建 Intent 过滤器的详细信息，请参阅 Intent 和 Intent 过滤器文档。</p><h3 id="声明应用要求" tabindex="-1"><a class="header-anchor" href="#声明应用要求" aria-hidden="true">#</a> 声明应用要求</h3><p>Android 设备多种多样，但并非所有设备都提供相同的特性和功能。以防将您的应用安装在缺少应用所需特性的设备上，您必须通过在清单文件中声明设备和软件要求，为该应用支持的设备类型明确定义一个配置文件。其中的大多数声明只是为了提供信息，系统并不会读取它们，但 Google Play 等外部服务会读取它们，以便在用户通过其设备搜索应用时为用户提供过滤功能。</p><p>例如，如果您的应用需要相机功能，并使用 Android 2.1 (API 级别 7) 中引入的 API，您必须在清单文件中声明以下要求，如下方示例所示</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span> <span class="token attr-name">...</span> <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-feature</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.hardware.camera.any<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">android:</span>required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-sdk</span> <span class="token attr-name"><span class="token namespace">android:</span>minSdkVersion</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>7<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">android:</span>targetSdkVersion</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>19<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manifest</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过示例中所述的声明，没有相机且 Android 版本低于 2.1 的设备将无法从 Google Play 安装您的应用。不过，您可以声明您的应用使用相机，但并不要求必须使用。在此情况下，您的应用必须将 required 属性设置为 false，并在运行时检查设备是否拥有相机，然后根据需要停用任何相机功能。</p><p>如需详细了解如何管理应用与不同设备的兼容性，请参阅设备兼容性文档。</p><h2 id="应用资源" tabindex="-1"><a class="header-anchor" href="#应用资源" aria-hidden="true">#</a> 应用资源</h2><p>Android 应用并非仅包含代码，它还需要与源代码分离的资源，如图像、音频文件以及任何与应用的视觉呈现有关的内容。例如，您可以通过 XML 文件定义 Activity 界面的动画、菜单、样式、颜色和布局。借助应用资源，您无需修改代码即可轻松更新应用的各种特性。通过提供备用资源集，您可以针对各种设备配置(如不同的语言和屏幕尺寸)优化您的应用。</p><p>对于您在 Android 项目中加入的每一项资源，SDK 构建工具均会定义唯一的整型 ID，您可以利用此 ID 来引用资源，这些资源或来自应用代码，或来自 XML 中定义的其他资源。例如，如果您的应用包含名为 <code>logo.png</code> 的图像文件(保存在 <code>res/drawable/</code> 目录中)，则 SDK 工具会生成名为 <code>R.drawable.logo</code> 的资源 ID。此 ID 映射到应用特定的整型数，您可以利用它来引用该图像，并将其插入您的界面。</p><p>如果提供与源代码分离的资源，则其中最重要的一个优点在于，您可以提供适用于不同设备配置的备用资源。例如，通过在 XML 中定义界面字符串，您可以将字符串翻译为其他语言，并将这些字符串保存在单独的文件中。然后，Android 系统会根据向资源目录名称追加的语言限定符 (如为法语字符串值追加 <code>res/values-fr/</code>) 和用户的语言设置，对您的界面应用相应的语言字符串。</p><p>Android 支持许多不同的备用资源限定符。限定符是资源目录名称中加入的短字符串，用于定义这些资源适用的设备配置。例如，您应根据设备的屏幕方向和尺寸为 Activity 创建不同的布局。当设备屏幕为纵向(长型)时，您可能想要一种垂直排列按钮的布局；但当屏幕为横向(宽型)时，可以按水平方向排列按钮。如要根据方向更改布局，您可以定义两种不同的布局，然后对每个布局的目录名称应用相应的限定符。然后，系统会根据当前设备方向自动应用相应的布局。</p><p>如需详细了解可以在应用中加入的不同资源类型以及如何针对不同设备配置创建备用资源，请阅读提供资源。如要详细了解最佳做法和设计生产质量的稳健应用，请参阅应用架构指南。</p>`,73);function l(d,u){return a(),t("div",null,[c,s(" more "),o])}const k=n(i,[["render",l],["__file","base.html.vue"]]);export{k as default};
