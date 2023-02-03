import{_ as e,W as t,X as d,$ as r,Y as s,a2 as a}from"./framework-4fdeb3a3.js";const n={},c=s("p",null,"资源是指代码使用的附加文件和静态内容，例如位图、布局定义、界面字符串、动画说明等。",-1),i=a(`<p>您应始终外部化应用资源(例如图像和代码中的字符串)，以便单独对其进行维护。此外，您还应为特定设备配置提供备用资源，方法是将其进行分组并放入专门命名的资源目录中。在运行时，Android 会根据当前配置使用合适的资源。例如，您可能需根据屏幕尺寸提供不同的界面布局，或根据语言设置提供不同的字符串。</p><p>外部化应用资源后，您便可使用在项目 R 类中生成的资源 ID 来访问这些资源。本文档会介绍如何对 Android 项目中的资源进行分组，如何为特定的设备配置提供备用资源，以及如何从您的应用代码或其他 XML 文件访问这些资源。</p><h2 id="分组资源类型" tabindex="-1"><a class="header-anchor" href="#分组资源类型" aria-hidden="true">#</a> 分组资源类型</h2><p>您应将各类资源放入项目 <code>res/</code> 目录的特定子目录中。例如，以下是一个简单项目的文件层次结构:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MyProject/
  src/
    MyActivity.java
  res/
    drawable/
      graphic.png
    layout/
      main.xml
      info.xml
    mipmap/
      icon.png
    values/
      strings.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此示例所示，<code>res/</code> 目录包含所有资源(在子目录中): 一个图像资源、两个布局资源、启动器图标的 <code>mipmap/</code> 目录以及一个字符串资源文件。资源目录名称非常重要，具体说明请见表 1。</p><p>表 1. 项目 <code>res/</code> 目录中支持的资源目录。</p><table><thead><tr><th>目录</th><th>资源类型</th></tr></thead><tbody><tr><td>animator/</td><td>用于定义属性动画的 XML 文件。</td></tr><tr><td>anim/</td><td>用于定义渐变动画的 XML 文件。(属性动画也可保存在此目录中，但为了区分这两种类型，属性动画首选 animator/ 目录。)</td></tr><tr><td>color/</td><td>用于定义颜色状态列表的 XML 文件。请参阅颜色状态列表资源</td></tr><tr><td>drawable/</td><td>位图文件(.png、.9.png、.jpg、.gif)或编译为以下可绘制对象资源子类型的 XML 文件: <br>位图文件<br>九宫格(可调整大小的位图)<br>状态列表<br>形状<br>动画可绘制对象<br>其他可绘制对象<br>请参阅 Drawable 资源。</td></tr><tr><td>mipmap/</td><td>适用于不同启动器图标密度的可绘制对象文件。如需了解有关使用 mipmap/ 文件夹管理启动器图标的详细信息，请参阅管理项目概览。</td></tr><tr><td>layout/</td><td>用于定义用户界面布局的 XML 文件。请参阅布局资源。</td></tr><tr><td>menu/</td><td>用于定义应用菜单(如选项菜单、上下文菜单或子菜单)的 XML 文件。请参阅菜单资源。</td></tr><tr><td>raw/</td><td>需以原始形式保存的任意文件。如要使用原始 InputStream 打开这些资源，请使用资源 ID(即 <code>R.raw.filename</code>)调用 <code>Resources.openRawResource()</code>。<br>但是，如需访问原始文件名和文件层次结构，则可以考虑将某些资源保存在 <code>assets/</code> 目录(而非 <code>res/raw/</code>)下。<code>assets/</code> 中的文件没有资源 ID，因此您只能使用 AssetManager 读取这些文件。</td></tr><tr><td>values/</td><td>包含字符串、整型数和颜色等简单值的 XML 文件。<br>其他 <code>res/</code> 子目录中的 XML 资源文件会根据 XML 文件名定义单个资源，而 <code>values/</code> 目录中的文件可描述多个资源。对于此目录中的文件，<code>&lt;resources&gt;</code> 元素的每个子元素均会定义一个资源。例如，<code>&lt;string&gt;</code> 元素会创建 R.string 资源，<code>&lt;color&gt;</code> 元素会创建 R.color 资源。<br>由于每个资源均使用自己的 XML 元素进行定义，因此您可以随意命名文件，并在某个文件中放入不同的资源类型。但是，您可能需要将独特的资源类型放在不同的文件中，使其一目了然。例如，对于可在此目录中创建的资源，下面给出了相应的文件名约定: <br>arrays.xml: 资源数组(类型数组)。<br>colors.xml: 颜色值。<br>dimens.xml: 尺寸值。<br>strings.xml: 字符串值。<br>styles.xml: 样式。<br>请参阅字符串资源、样式资源和更多资源类型。</td></tr><tr><td>xml/</td><td>可在运行时通过调用 Resources.getXML() 读取的任意 XML 文件。各种 XML 配置文件(如可搜索配置)都必须保存在此处。</td></tr><tr><td>font/</td><td>带有扩展名的字体文件(如 .ttf、.otf 或 .ttc)，或包含 <code>&lt;font-family&gt;</code> 元素的 XML 文件。如需详细了解作为资源的字体，请参阅 XML 中的字体。</td></tr></tbody></table><div class="hint-container danger"><p class="hint-container-title">警告</p><p>切勿将资源文件直接保存在 <code>res/</code> 目录内，因为这样会造成编译错误。</p></div>`,9);function o(l,m){return t(),d("div",null,[c,r(" more "),i])}const v=e(n,[["render",o],["__file","resource.html.vue"]]);export{v as default};
