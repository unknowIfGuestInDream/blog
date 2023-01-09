import{_ as p,W as u,X as k,$ as d,Y as n,a0 as i,a1 as a,Z as s,a2 as l,F as r}from"./framework-d8ef9316.js";const m={},v=n("p",null,"在本课中，您将向 MainActivity 添加一些代码，以便在用户点按 Send 按钮时启动一个显示消息的新 activity。",-1),y=n("h2",{id:"响应-send-按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#响应-send-按钮","aria-hidden":"true"},"#"),s(" 响应“Send”按钮")],-1),b=n("p",null,"您可按照以下步骤，向 MainActivity 类添加一个在用户点按 Send 按钮时调用的方法：",-1),g=n("p",null,"在 app > java > com.example.myfirstapp > MainActivity 文件中，添加以下 sendMessage() 方法桩：",-1),w=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(" MainActivity "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"AppCompatActivity"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),s("savedInstanceState"),n("span",{class:"token operator"},":"),s(" Bundle"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),s("savedInstanceState"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"setContentView"),n("span",{class:"token punctuation"},"("),s("R"),n("span",{class:"token punctuation"},"."),s("layout"),n("span",{class:"token punctuation"},"."),s("activity_main"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"/** Called when the user taps the Send button */"),s(`
    `),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"sendMessage"),n("span",{class:"token punctuation"},"("),s("view"),n("span",{class:"token operator"},":"),s(" View"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Do something in response to button"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MainActivity"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"AppCompatActivity"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Bundle"),s(" savedInstanceState"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),s("savedInstanceState"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"setContentView"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"R"),n("span",{class:"token punctuation"},"."),s("layout"),n("span",{class:"token punctuation"},"."),s("activity_main"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},"/** Called when the user taps the Send button */"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"sendMessage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"View"),s(" view"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Do something in response to button"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("p",null,[s("您可能会看到一条错误，因为 Android Studio 无法解析用作方法参数的 View 类。若要清除错误，请点击 View 声明，将光标置于其上，然后按 "),n("code",null,"Alt + Enter"),s("（在 Mac 上则按 "),n("code",null,"Option + Enter"),s("）进行快速修复。如果出现一个菜单，请选择 Import class。")],-1),x=l("<li><p>返回到 activity_main.xml 文件，并从该按钮调用此方法:</p><ol><li>选择布局编辑器中的相应按钮。</li><li>在 Attributes 窗口中，找到 onClick 属性，并从其下拉列表中选择 <code>sendMessage [MainActivity]</code>。</li></ol><p>现在，当用户点按该按钮时，系统将调用 <code>sendMessage()</code> 方法。</p><p>请注意此方法中提供的详细信息。系统需要这些信息来识别此方法是否与 android:onClick 属性兼容。具体来说，此方法具有以下特性：</p><ol><li>公开。</li><li>返回值为空，或在 Kotlin 中为隐式 Unit。</li><li>View 是唯一的参数。这是您在第 1 步结束时点击的 View 对象。</li></ol></li><li><p>接下来，填写此方法，以读取文本字段的内容，并将该文本传递给另一个 activity。</p></li>",2),_=n("h2",{id:"构建一个-intent",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构建一个-intent","aria-hidden":"true"},"#"),s(" 构建一个 intent")],-1),f=n("p",null,[n("code",null,"Intent"),s(" 是在相互独立的组件（如两个 activity）之间提供运行时绑定功能的对象。Intent 表示应用执行某项操作的意图。您可以使用 intent 执行多种任务，但在本课中，您的 intent 将用于启动另一个 activity。")],-1),S=n("p",null,"在 MainActivity 中，添加 EXTRA_MESSAGE 常量和 sendMessage() 代码，如下所示：",-1),C=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token keyword"},"val"),s(" EXTRA_MESSAGE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"com.example.myfirstapp.MESSAGE"')]),s(`

`),n("span",{class:"token keyword"},"class"),s(" MainActivity "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"AppCompatActivity"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),s("savedInstanceState"),n("span",{class:"token operator"},":"),s(" Bundle"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),s("savedInstanceState"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"setContentView"),n("span",{class:"token punctuation"},"("),s("R"),n("span",{class:"token punctuation"},"."),s("layout"),n("span",{class:"token punctuation"},"."),s("activity_main"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"/** Called when the user taps the Send button */"),s(`
    `),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"sendMessage"),n("span",{class:"token punctuation"},"("),s("view"),n("span",{class:"token operator"},":"),s(" View"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"val"),s(" editText "),n("span",{class:"token operator"},"="),s(" findViewById"),n("span",{class:"token operator"},"<"),s("EditText"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("R"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"."),s("editTextTextPersonName"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"val"),s(" message "),n("span",{class:"token operator"},"="),s(" editText"),n("span",{class:"token punctuation"},"."),s("text"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"val"),s(" intent "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"Intent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(" DisplayMessageActivity"),n("span",{class:"token operator"},"::"),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},"."),s("java"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"putExtra"),n("span",{class:"token punctuation"},"("),s("EXTRA_MESSAGE"),n("span",{class:"token punctuation"},","),s(" message"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token function"},"startActivity"),n("span",{class:"token punctuation"},"("),s("intent"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MainActivity"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"AppCompatActivity"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token constant"},"EXTRA_MESSAGE"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"com.example.myfirstapp.MESSAGE"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Bundle"),s(" savedInstanceState"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),s("savedInstanceState"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"setContentView"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"R"),n("span",{class:"token punctuation"},"."),s("layout"),n("span",{class:"token punctuation"},"."),s("activity_main"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},"/** Called when the user taps the Send button */"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"sendMessage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"View"),s(" view"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Intent"),s(" intent "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Intent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"DisplayMessageActivity"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"EditText"),s(" editText "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"EditText"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"findViewById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"R"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"."),s("editTextTextPersonName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"String"),s(" message "),n("span",{class:"token operator"},"="),s(" editText"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getText"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        intent`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"putExtra"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"EXTRA_MESSAGE"),n("span",{class:"token punctuation"},","),s(" message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"startActivity"),n("span",{class:"token punctuation"},"("),s("intent"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("p",null,"预计 Android Studio 会再次遇到 Cannot resolve symbol 错误。如需清除这些错误，请按 Alt+Enter（在 Mac 上则按 Option+Return）。您最后应导入以下内容：",-1),T=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" androidx"),n("span",{class:"token punctuation"},"."),s("appcompat"),n("span",{class:"token punctuation"},"."),s("app"),n("span",{class:"token punctuation"},"."),s(`AppCompatActivity
`),n("span",{class:"token keyword"},"import"),s(" android"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},"."),s(`Intent
`),n("span",{class:"token keyword"},"import"),s(" android"),n("span",{class:"token punctuation"},"."),s("os"),n("span",{class:"token punctuation"},"."),s(`Bundle
`),n("span",{class:"token keyword"},"import"),s(" android"),n("span",{class:"token punctuation"},"."),s("view"),n("span",{class:"token punctuation"},"."),s(`View
`),n("span",{class:"token keyword"},"import"),s(" android"),n("span",{class:"token punctuation"},"."),s("widget"),n("span",{class:"token punctuation"},"."),s(`EditText
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("androidx"),n("span",{class:"token punctuation"},"."),s("appcompat"),n("span",{class:"token punctuation"},"."),s("app"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"AppCompatActivity")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("android"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Intent")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("android"),n("span",{class:"token punctuation"},"."),s("os"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Bundle")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("android"),n("span",{class:"token punctuation"},"."),s("view"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("android"),n("span",{class:"token punctuation"},"."),s("widget"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"EditText")]),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=l('<p>DisplayMessageActivity 仍有错误，但没有关系。您将在下一部分中修复该错误。</p><p>sendMessage() 将发生以下情况：</p><ul><li><p>Intent 构造函数会获取两个参数：Context 和 Class。</p><p>首先使用 Context 参数，因为 Activity 类是 Context 的子类。</p><p>在本例中，系统将 Intent, 传递到的应用组件的 Class 参数是要启动的 activity。</p></li><li><p>putExtra() 方法将 EditText 的值添加到 intent。Intent 能够以称为“extra”的键值对形式携带数据类型。</p><p>您的键是一个公共常量 EXTRA_MESSAGE，因为下一个 activity 将使用该键检索文本值。为 intent extra 定义键时，最好使用应用的软件包名称作为前缀。这样可以确保这些键是独一无二的，这在您的应用需要与其他应用进行交互时会很重要。</p></li><li><p>startActivity() 方法将启动一个由 Intent 指定的 DisplayMessageActivity 实例。接下来，您需要创建该类。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>导航架构组件允许您使用导航编辑器将一个 activity 与另一个 activity 相关联。建立这种关联后，您可以利用 API 在用户触发关联的操作（例如，用户点击某个按钮时）时启动第二个 activity。如需了解详情，请参阅导航。</p></div><h2 id="创建第二个-activity" tabindex="-1"><a class="header-anchor" href="#创建第二个-activity" aria-hidden="true">#</a> 创建第二个 activity</h2><p>若要创建第二个 activity，请按以下步骤操作：</p><ol><li>在 Project 窗口中，右键点击 app 文件夹，然后依次选择 New &gt; Activity &gt; Empty Activity。</li><li>在 Configure Activity 窗口中，输入“DisplayMessageActivity”作为 Activity Name。将所有其他属性保留为默认设置，然后点击 Finish。</li></ol><p>Android Studio 会自动执行下列三项操作：</p><ol><li>创建 DisplayMessageActivity 文件。</li><li>创建 DisplayMessageActivity 文件对应的布局文件 activity_display_message.xml。</li><li>在 AndroidManifest.xml 中添加所需的 <code>&lt;activity&gt;</code> 元素。</li></ol><p>如果您运行应用并点按第一个 activity 上的按钮，将启动第二个 activity，但它为空。这是因为第二个 activity 使用模板提供的空布局。</p><h2 id="添加文本视图" tabindex="-1"><a class="header-anchor" href="#添加文本视图" aria-hidden="true">#</a> 添加文本视图</h2><p>新 activity 包含一个空白布局文件。请按以下步骤操作，在显示消息的位置添加一个文本视图：</p><ol><li>打开 app &gt; res &gt; layout &gt; activity_display_message.xml 文件。</li><li>点击工具栏中的 Enable Autoconnection to Parent 。系统将启用 Autoconnect。参见图 1。</li><li>在 Palette 面板中，点击 Text，将 TextView 拖动到布局中，然后将其放置在靠近布局顶部中心的位置，使其贴靠到出现的垂直线上。Autoconnect 将添加左侧和右侧约束条件，以便将该视图放置在水平中心位置。</li><li>再创建一个从文本视图顶部到布局顶部的约束条件，使该视图如图 1 中所示。</li></ol><p>或者，您可以对文本样式进行一些调整，方法是在 Attributes 窗口的 Common Attributes 面板中展开 textAppearance，然后更改 textSize 和 textColor 等属性。</p><h2 id="显示消息" tabindex="-1"><a class="header-anchor" href="#显示消息" aria-hidden="true">#</a> 显示消息</h2><p>在此步骤中，您将修改第二个 activity 以显示第一个 activity 传递的消息。</p>',16),R=n("p",null,[s("在 DisplayMessageActivity 中，将以下代码添加到 "),n("code",null,"onCreate()"),s(" 方法中：")],-1),j=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),s("savedInstanceState"),n("span",{class:"token operator"},":"),s(" Bundle"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),s("savedInstanceState"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"setContentView"),n("span",{class:"token punctuation"},"("),s("R"),n("span",{class:"token punctuation"},"."),s("layout"),n("span",{class:"token punctuation"},"."),s("activity_display_message"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// Get the Intent that started this activity and extract the string"),s(`
    `),n("span",{class:"token keyword"},"val"),s(" message "),n("span",{class:"token operator"},"="),s(" intent"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getStringExtra"),n("span",{class:"token punctuation"},"("),s("EXTRA_MESSAGE"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// Capture the layout's TextView and set the string as its text"),s(`
    `),n("span",{class:"token keyword"},"val"),s(" textView "),n("span",{class:"token operator"},"="),s(" findViewById"),n("span",{class:"token operator"},"<"),s("TextView"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("R"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"."),s("textView"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),s(),n("span",{class:"token punctuation"},"{"),s(`
        text `),n("span",{class:"token operator"},"="),s(` message
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@Override"),s(`
`),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Bundle"),s(" savedInstanceState"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onCreate"),n("span",{class:"token punctuation"},"("),s("savedInstanceState"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"setContentView"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"R"),n("span",{class:"token punctuation"},"."),s("layout"),n("span",{class:"token punctuation"},"."),s("activity_display_message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// Get the Intent that started this activity and extract the string"),s(`
    `),n("span",{class:"token class-name"},"Intent"),s(" intent "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getIntent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token class-name"},"String"),s(" message "),n("span",{class:"token operator"},"="),s(" intent"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getStringExtra"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"MainActivity"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"EXTRA_MESSAGE"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// Capture the layout's TextView and set the string as its text"),s(`
    `),n("span",{class:"token class-name"},"TextView"),s(" textView "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"findViewById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"R"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"."),s("textView"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    textView`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setText"),n("span",{class:"token punctuation"},"("),s("message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("p",null,[s("按 "),n("code",null,"Alt + Enter"),s("（在 Mac 上则按 "),n("code",null,"Option + Return"),s("）导入其他所需的类：")],-1),D=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" androidx"),n("span",{class:"token punctuation"},"."),s("appcompat"),n("span",{class:"token punctuation"},"."),s("app"),n("span",{class:"token punctuation"},"."),s(`AppCompatActivity
`),n("span",{class:"token keyword"},"import"),s(" android"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},"."),s(`Intent
`),n("span",{class:"token keyword"},"import"),s(" android"),n("span",{class:"token punctuation"},"."),s("os"),n("span",{class:"token punctuation"},"."),s(`Bundle
`),n("span",{class:"token keyword"},"import"),s(" android"),n("span",{class:"token punctuation"},"."),s("widget"),n("span",{class:"token punctuation"},"."),s(`TextView
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("androidx"),n("span",{class:"token punctuation"},"."),s("appcompat"),n("span",{class:"token punctuation"},"."),s("app"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"AppCompatActivity")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("android"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Intent")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("android"),n("span",{class:"token punctuation"},"."),s("os"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Bundle")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("android"),n("span",{class:"token punctuation"},"."),s("widget"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"TextView")]),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=l(`<h2 id="添加向上导航功能" tabindex="-1"><a class="header-anchor" href="#添加向上导航功能" aria-hidden="true">#</a> 添加向上导航功能</h2><p>在您的应用中，不是主入口点的每个屏幕（所有不是主屏幕的屏幕）都必须提供导航功能，以便将用户引导至应用层次结构中的逻辑父级屏幕。为此，请在应用栏中添加向上按钮。</p><p>若要添加向上按钮，您需要在 <code>AndroidManifest.xml</code> 文件中声明哪个 activity 是逻辑父级。打开 app &gt; manifests &gt; AndroidManifest.xml 文件，找到 DisplayMessageActivity 的 <code>&lt;activity&gt;</code> 标记，然后将其替换为以下代码：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.DisplayMessageActivity<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">android:</span>parentActivityName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.MainActivity<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- The meta-data tag is required if you support API level 15 and lower --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta-data</span>
        <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.support.PARENT_ACTIVITY<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.MainActivity<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Android 系统现在会自动向应用栏添加向上按钮。</p><h2 id="运行应用" tabindex="-1"><a class="header-anchor" href="#运行应用" aria-hidden="true">#</a> 运行应用</h2><p>点击工具栏中的 Apply Changes 以运行应用。当应用打开后，在文本字段中输入一条消息，点按 Send 即会看到该消息显示在第二个 activity 中。</p>`,7);function X(P,K){const c=r("CodeTabs");return u(),k("div",null,[v,d(" more "),y,b,n("ol",null,[n("li",null,[g,i(c,{id:"15",data:[{title:"Kotlin"},{title:"Java"}],"tab-id":"anrdoid"},{tab0:a(({title:t,value:e,isActive:o})=>[w]),tab1:a(({title:t,value:e,isActive:o})=>[h]),_:1}),A]),x]),_,f,S,i(c,{id:"82",data:[{title:"Kotlin"},{title:"Java"}],"tab-id":"anrdoid"},{tab0:a(({title:t,value:e,isActive:o})=>[C]),tab1:a(({title:t,value:e,isActive:o})=>[E]),_:1}),M,i(c,{id:"93",data:[{title:"Kotlin"},{title:"Java"}],"tab-id":"anrdoid"},{tab0:a(({title:t,value:e,isActive:o})=>[T]),tab1:a(({title:t,value:e,isActive:o})=>[I]),_:1}),V,n("ol",null,[n("li",null,[R,i(c,{id:"221",data:[{title:"Kotlin"},{title:"Java"}],"tab-id":"anrdoid"},{tab0:a(({title:t,value:e,isActive:o})=>[j]),tab1:a(({title:t,value:e,isActive:o})=>[B]),_:1})]),n("li",null,[q,i(c,{id:"234",data:[{title:"Kotlin"},{title:"Java"}],"tab-id":"anrdoid"},{tab0:a(({title:t,value:e,isActive:o})=>[D]),tab1:a(({title:t,value:e,isActive:o})=>[G]),_:1})])]),N])}const J=p(m,[["render",X],["__file","activity.html.vue"]]);export{J as default};
