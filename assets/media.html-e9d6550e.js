import{_ as p,W as e,X as o,Y as n,Z as a,a0 as c,a1 as l,a2 as s,G as i}from"./framework-269d85ce.js";const u={},d=s(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>HTML5 标准推出了 <code>&lt;video&gt;</code> 和 <code>&lt;audio&gt;</code> 标签，以及一些 JavaScript 和 APIs 用于对其进行控制。</p><h2 id="video-元素" tabindex="-1"><a class="header-anchor" href="#video-元素" aria-hidden="true">#</a> <code>&lt;video&gt;</code> 元素</h2><p><code>&lt;video&gt;</code> 允许您轻松地嵌入一段视频。</p><div class="hint-container tip"><p class="hint-container-title">案例</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.webm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    您的浏览器不支持 HTML5 视频。可点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>此链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>观看
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>案例属性解释:</p><ul><li><p>src</p><p>同 <code>&lt;img&gt;</code> 标签使用方式相同，<code>src</code> 属性指向您想要嵌入网页当中的视频资源，他们的使用方式完全相同。</p></li><li><p>controls</p><p>用户必须能够控制视频和音频的回放功能。您可以使用 <code>controls</code> 来包含浏览器提供的控件界面，同时您也可以使用合适的 JavaScript API 创建自己的界面。界面中至少要包含开始、停止以及调整音量的功能。</p></li><li><p><code>&lt;video&gt;</code> 标签内的内容</p><p>此内容叫后备内容。当浏览器不支持 <code>&lt;video&gt;</code> 标签的时候，就会显示这段内容，这使得我们能够对旧的浏览器提供回退内容。您可以添加任何后备内容，在这个例子中我们提供了一个指向这个视频文件的链接，从而使用户至少可以访问到这个文件，而不会局限于浏览器的支持。</p></li></ul><h3 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h3><p>如果您使用 Safari 或者 IE 来访问上面的链接，视频并不会播放，这是因为不同的浏览器对视频格式的支持不同。</p><p>所以 <code>&lt;video&gt;</code> 标签的最佳实践是使用多个播放源以提高兼容性。</p><div class="hint-container tip"><p class="hint-container-title">媒体文件的内容</p><p>像 MP3、MP4、WebM 这些术语叫做容器格式。他们定义了构成媒体文件的音频轨道和视频轨道的储存结构，其中还包含描述这个媒体文件的元数据，以及用于编码的编码译码器等等。</p><p>一个格式为 WebM 的电影包含视频轨道，音频轨道和文本轨道，其中视频轨道包含一个主视频轨道和一个可选的 Angle 轨道。</p><p>为了编解码器(codec)编码媒体，容器中的音频和视频轨道以适合的格式保存。音频轨道和视频轨道使用不同的格式。每个音频轨道都使用音频编解码器进行编码，而视频轨道则使用视频编解码器进行编码。如前所述，不同的浏览器支持不同的视频和音频格式，以及不同的容器格式(如 MP3、MP4 和 WebM，这些格式又可以包含不同类型的视频和音频)。</p><p>例如:</p><ul><li>WebM 容器通常包括了 Opus 或 Vorbis 音频和 VP8/VP9 视频。这在所有的现代浏览器中都支持，除了他们的老版本。</li><li>MP4 容器通常包括 AAC 以及 MP3 音频和 H.264 视频。这在所有的现代浏览器中都支持，还有 Internet Explorer。</li><li>老式的 Ogg 容器往往支持 Ogg Vorbis 音频和 Ogg Theora 视频。主要在 Firefox 和 Chrome 当中支持，不过这个容器已经被更强大的 WebM 容器所取代。</li></ul><p>有一些特殊情况。例如，对于某些类型的音频，通常编解码器的数据存储没有容器或简化容器。其中一个例子就是 FLAC 编解码器，它通常存储在 FLAC 文件中，FLAC 文件只是 FLAC 的原始轨迹。</p><p>另一种情况是一直流行的 MP3 文件。“MP3 文件”实际上是存储在 MPEG 或 MPEG-2 容器中的 MPEG-1 音频层 III(MPEG-1 Audio Layer III ，MP3)音频轨道。这一点特别有趣，因为尽管大多数浏览器不支持在 <code>&lt;video&gt;</code> 和 <code>&lt;audio&gt;</code> 元素中使用 MPEG 媒体，但由于 MP3 的流行，它们可能仍然支持 MP3。</p><p>音频播放器将会直接播放音频文件，例如 MP3 和 Ogg 文件。这些不需要容器。</p></div><p>不同的媒体格式主要用于将音频和视频压缩成可管理的文件(原始的音频和视频文件非常大)。浏览器包含了不同的 Codecs,，如 Vorbis 和 H.264，它们用来将已压缩的音频和视频转化成二进制数字。不同的编码器和不同的容器都有各自的优缺点，在您更了解它们后，您可以自己选择使用哪个编码器和容器。</p><p>浏览器并不全支持相同的 codecs，所以您得使用几个不同格式的文件来兼容不同的浏览器。如果您使用的格式都得不到浏览器的支持，那么媒体文件将不会播放。另外同一款浏览器，移动版可能比桌面版支持的格式可能会有不同。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.webm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/webm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    您的浏览器不支持 HTML5 视频。可点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>此链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>观看
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您需要将 <code>src</code> 属性从 <code>&lt;video&gt;</code> 标签中移除，转而将它放在几个单独的标签 <code>&lt;source&gt;</code> 当中。浏览器将会检查 <code>&lt;source&gt;</code> 标签，并且播放第一个与其自身 codec 相匹配的媒体。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>您的视频应当包括 WebM 和 MP4 两种格式，这两种在目前已经足够支持大多数平台和浏览器。</p></div>`,16),r=n("code",null,"<source>",-1),k=n("code",null,"type",-1),v=n("code",null,"type",-1),g=s(`<h3 id="其他属性" tabindex="-1"><a class="header-anchor" href="#其他属性" aria-hidden="true">#</a> 其他属性</h3><p>这里有许多您可以用在 HTML5 <code>&lt;video&gt;</code> 上的特性。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span>
  <span class="token attr-name">controls</span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">autoplay</span>
  <span class="token attr-name">loop</span>
  <span class="token attr-name">muted</span>
  <span class="token attr-name">poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>poster.png<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.webm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/webm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    您的浏览器不支持 HTML5 视频。可点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rabbit320.mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>此链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>观看
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>width 和 height</p><p>您可以用属性控制视频的尺寸，也可以用 CSS 来控制视频尺寸。 无论使用哪种方式，视频都会保持它原始的长宽比 — 也叫做纵横比。如果您设置的尺寸没有保持视频原始长宽比，那么视频边框将会拉伸，而未被视频内容填充的部分，将会显示默认的背景颜色。</p></li><li><p>autoplay</p><p>这个属性会使音频和视频内容立即播放，即使页面的其他部分还没有加载完全。建议不要应用这个属性在您的网站上，因为用户们会比较反感自动播放的媒体文件。</p></li><li><p>loop</p><p>这个属性可以让音频或者视频文件循环播放。同样不建议使用，除非有必要。</p></li><li><p>muted</p><p>这个属性会导致媒体播放时，默认关闭声音。</p></li><li><p>poster</p><p>这个属性指向了一个图像的 URL，这个图像会在视频播放前显示。通常用于粗略的预览或者广告。</p></li><li><p>preload 这个属性被用来缓冲较大的文件，有 3 个值可选:</p><ul><li><code>none</code>: 不缓冲</li><li><code>auto</code>: 页面加载后缓存媒体文件</li><li><code>metadata</code>: 仅缓冲文件的元数据</li></ul></li></ul><h2 id="audio-标签" tabindex="-1"><a class="header-anchor" href="#audio-标签" aria-hidden="true">#</a> <code>&lt;audio&gt;</code> 标签</h2><p><code>&lt;audio&gt;</code> 标签与 <code>&lt;video&gt;</code> 标签的使用方式几乎完全相同，有一些细微的差别。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viper.mp3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/mp3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viper.ogg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/ogg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>您的浏览器不支持 HTML5 音频，可点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viper.mp3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>此链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>收听。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>音频播放器所占用的空间比视频播放器要小，由于它没有视觉部件 — 您只需要显示出能控制音频播放的控件。一些与 HTML5 <code>&lt;video&gt;</code> 的差异如下:</p><ul><li><code>&lt;audio&gt;</code> 标签不支持 <code>width/height</code> 属性 — 由于其并没有视觉部件，也就没有可以设置 <code>width/height</code> 的内容。</li><li>同时也不支持 <code>poster</code> 属性 — 同样，没有视觉部件。</li></ul><p>除此之外，<code>&lt;audio&gt;</code> 标签支持所有 <code>&lt;video&gt;</code> 标签拥有的特性。</p><h2 id="显示音轨文本" tabindex="-1"><a class="header-anchor" href="#显示音轨文本" aria-hidden="true">#</a> 显示音轨文本</h2><p>文本轨道会使您的网站更容易被搜索引擎抓取到 (SEO)， 由于搜索引擎的文本抓取能力非常强大，使用文本轨道甚至可以让搜索引擎通过视频的内容直接链接。</p><div class="hint-container info"><p class="hint-container-title">WebVTT</p><p>WebVTT 是一个格式，用来编写文本文件，这个文本文件包含了众多的字符串，这些字符串会带有一些元数据，它们可以用来描述这个字符串将会在视频中显示的时间，甚至可以用来描述这些字符串的样式以及定位信息。这些字符串叫做 <strong>cues</strong>，您可以根据不同的需求来显示不同的样式，最常见的如下:</p><ul><li><p>subtitles</p><p>通过添加翻译字幕，来帮助那些听不懂外国语言的人们理解音频当中的内容。</p></li><li><p>captions</p><p>同步翻译对白，或是描述一些有重要信息的声音，来帮助那些不能听音频的人们理解音频中的内容。</p></li><li><p>timed descriptions</p><p>将文字转换为音频，用于服务那些有视觉障碍的人。</p></li></ul><p>一个典型的 WebVTT 文件如下:</p><div class="language-WebVTT line-numbers-mode" data-ext="WebVTT"><pre class="language-WebVTT"><code>WEBVTT

1
00:00:22.230 --&gt; 00:00:24.606
第一段字幕

2
00:00:30.739 --&gt; 00:00:34.074
第二段

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>有了 WebVTT 格式，您可以使用 <code>&lt;track&gt;</code> 标签。</p><p>让其与 HTML 媒体一起显示，您需要做如下工作:</p><ol><li>以 <code>.vtt</code> 后缀名保存文件。</li><li>用 <code>&lt;track&gt;</code> 标签链接 <code>.vtt</code> 文件， <code>&lt;track&gt;</code> 标签需放在 <code>&lt;audio&gt;</code> 或 <code>&lt;video&gt;</code> 标签当中，同时需要放在所有 <code>&lt;source&gt;</code> 标签之后。使用 <code>kind</code> 属性来指明是哪一种类型，如 <code>subtitles</code> 、 <code>captions</code> 、 <code>descriptions</code>。然后，使用 <code>srclang</code> 来告诉浏览器您是用什么语言来编写的 subtitles。</li></ol><div class="hint-container tip"><p class="hint-container-title">案例</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example.webm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/webm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>track</span> <span class="token attr-name">kind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subtitles<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subtitles_en.vtt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">srclang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,17);function m(b,h){const t=i("RouterLink");return e(),o("div",null,[d,n("p",null,[a("每个 "),r,a(" 标签页含有一个 "),k,a(" 属性，这个属性是可选的，但是建议您添加上这个属性 — 它包含了视频文件的 "),c(t,{to:"/ja/code/website/html/definition/mime.html"},{default:l(()=>[a("MIME types")]),_:1}),a(" ，同时浏览器也会通过检查这个属性来迅速的跳过那些不支持的格式。如果您没有添加 "),v,a(" 属性，浏览器会尝试加载每一个文件，直到找到一个能正确播放的格式，这样会消耗掉大量的时间和资源。")]),g])}const M=p(u,[["render",m],["__file","media.html.vue"]]);export{M as default};
