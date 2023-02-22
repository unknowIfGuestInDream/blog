import{_ as i,W as t,X as n,Y as p,Z as e,a0 as r,a2 as h,C as s}from"./framework-d7af73f9.js";const d={},c=p("h2",{id:"有限元分析",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#有限元分析","aria-hidden":"true"},"#"),e(" 有限元分析")],-1),o=p("p",null,"有限元分析(Finite Element Analysis，FEA)软件可以通过仿真减少原型测试的原型数量和测试次数。一旦建立了能够准确预测真实物理参数的有限元分析模型，就可以借助它大幅改进产品或过程的设计和运行。在此基础上，优化算法和自动控制的应用，可以进一步实现仅凭直觉完全无法达到的设计改进。目前的有限元分析软件大多已包含自动控制功能，并将这些功能嵌入数学和数值模型中，而优化算法也通常包含在求解过程中。",-1),l=p("p",null,"基于数学模型表示的物理定律构成了有限元分析软件的基础。对于有限元分析来说，这些定律包括各项守恒定律、经典力学定律和电磁学定律。",-1),_=p("p",null,"通过使用有限元法(FEM)将数学模型离散化，可以得到相应的数值模型；随后求解离散方程，并对结果进行分析，这就是有限元分析 这一术语的含义。",-1),u={class:"hint-container tip"},f=p("p",{class:"hint-container-title"},"FEM",-1),x={href:"http://cn.comsol.com/multiphysics/finite-element-method",target:"_blank",rel:"noopener noreferrer"},v=h('<p>通过数学语言对物理定律在空间和时间进行表述，即产生了偏微分方程(PDE)。偏微分方程的解用因变量表示，如结构位移、速度场、温度场和电势场，等等。解是基于自变量 x、y、z 和 t 在空间和时间尺度上进行描述的。</p><p>求解给定系统的偏微分方程，不仅可以帮助我们理解我们所研究的系统，还可以对其做出合理的预测。有限元分析主要用于理解、预测、优化以及控制产品或过程的设计和运行。</p><ul><li><p>结构力学描述基于力平衡定律以及将应力应变关联的本构关系。传统的有限元分析通常仅限于结构分析。</p></li><li><p>流体流动、传热和传质中的描述基于动量、质量和能量守恒定律，其中的通量往往由对流和耗散或扩散组合而成。耗散和扩散的精确形式由某个本构关系给出，例如，牛顿流体的黏性应力、傅里叶热传导定律和菲克扩散定律。</p></li><li><p>电磁场方面，可以使用高斯定律将静电场与电荷量相关联、使用安培定律确定磁场与电流的关系，使用法拉第定律与麦克斯韦方程组分析动力学。</p></li></ul><p>将结构力学、流体流动、传热、传质和电磁学中使用的定律结合起来，用于描述多种物理现象相互作用的系统，也就是通常所说的多物理场系统。例如，在描述微机电系统(MEMS)时，通常需要结合使用结构力学定律和电磁学定律。在描述流-固耦合(FSI)时，需要结合使用结构力学定律和流体流动定律。</p><h2 id="数学模型和数值模型" tabindex="-1"><a class="header-anchor" href="#数学模型和数值模型" aria-hidden="true">#</a> 数学模型和数值模型</h2><p>系统的数学模型可以包含一个或多个偏微分方程来描述相关定律，同时包含边界条件和初始条件。边界条件用于对解和部分建模域(如表面、边或点)施加额外的条件，同一个模型可以使用多种不同的边界条件。初始条件用于定义系统在时变事件开始时的状态。</p><p>从物理学角度来看，边界条件和初始数据通常是模型的自然组成部分(例如，结构力学中的载荷和约束，流体流动分析中入口和出口的压力水平，以及静电学中的端子电势)。从数学的角度来看，边界条件和初始数据能够从无数的可能解中选出唯一的解。</p><h3 id="适定的数学模型" tabindex="-1"><a class="header-anchor" href="#适定的数学模型" aria-hidden="true">#</a> 适定的数学模型</h3><p>一个正确定义的数学模型往往具有适定性。如果一个数学模型具有唯一解，并且这个解连续依赖于问题的数据(即源项、通量、约束值和初始值)，则该模型是适定的。如果模型不适定，则会在数值模型中反映出来，并会在求解过程中出现问题。</p><p>“适定”可以认为是模型能否用于数值仿真(例如有限元分析)的最低要求。</p><p>从理论的角度来讲，通常很难确定现实中的非线性三维模型是否适定；鉴于此，用于基础分析的模型都经过了大量简化。通过这些简化模型得出的结论可以用来评估更贴近实际的模型的性能表现。即使是适定模型，也可能对模型数据的变化非常敏感，这类模型在本质上是病态或敏感模型。</p><p>通过现代数值方法求解偏微分方程，实现了数学应用的革命性突破。原因在于，只有在非常特殊的情况下(例如方程与简单几何的特定组合中)才能得到数学模型的解析解。尽管这些情况从理论上来说非常重要，但对工程师而言用处并不大。数值方法突破了这个限制，可以处理非线性问题和复杂的几何结构。虽然数值方法还存在其他方面的计算难题，但对新模型和几何的适用性没有任何问题。</p><p>数值方法可以给出适定数学模型的近似解。大部分数值方法都以建模域和所描述因变量的离散为基础。有限差分法、有限体积法和有限元法是最常用的离散化方法。顾名思义，有限元法(FEM)用于进行有限元分析</p><p>对所描述系统的数学模型进行离散化，可以得到对应的数值 模型，后者是前者的离散近似。使用数值模型代替数学模型会引入误差，这种误差称为截断误差。</p><p>截断误差被定义为数值模型与数学模型的解之间的差值。如果数值模型稳定且一致，则截断误差接近于零，这是因为单元尺寸接近于零(即数值解收敛于数学模型的解)。截断误差会以一定的速度收敛；速度由精度阶数测得。如果精度阶数为正数，则说明模型具有一致性。</p><p>有限元法的出发点是数学模型的弱形式。通过引入试函数，并将偏微分方程与这些试函数相乘，然后在建模域中对其进行积分，即可从逐点偏微分方程得到这种形式(也称为强形式)。您可以选择将这一过程与分部积分法结合使用。每个试函数都必须保持积分关系。为了与偏微分方程一致，必须有无穷多的试函数，并且这些试函数必须具有普遍的适用性。如此一来，就必须保持无穷多个积分关系，而建模域中每个点的逐点偏微分方程也必须保持不变。</p><p>有限元法引入的试函数通过计算网格进行定义。每个计算单元或网格单元都有多个局部定义的试函数。此外，有限元法中还定义了形函数，作为其基本组成部分。这些形函数用来表示候选解。对于瞬态问题，有限元法往往只用于空间离散化。在这种情况下，也就是在有限元离散之后得到的方程组是常微分方程组(ODE)。这个方程组转而使用有限差分法或其他类似方法进行离散。</p><p>在为不同的网格单元类型和方程选择试函数和形函数方面，有限元法提供了相当大的自由度。“非结构化”网格的参与单元在尺寸和形状上往往存在较大差异；这种网格的有限元公式使得该方法能以相对较低的成本应用于非常复杂的几何结构，自动生成非结构化网格也更加容易一些。在大多数情况下，形函数和试函数为易于定义和积分的低阶多项式。此外，与弱形式的密切关系为该方法提供了坚实的数学基础，其中的数学理论已经发展得非常成熟。</p><p>一旦将数学模型离散化，便必须求解生成的数值模型中的方程。</p><h2 id="有限元分析过程" tabindex="-1"><a class="header-anchor" href="#有限元分析过程" aria-hidden="true">#</a> 有限元分析过程</h2><p>由于历史原因，传统的有限元分析对象主要是基于结构力学的模型，只在较小范围内涉及传热。随着多物理场建模应用的日益广泛，有限元法在流体流动和电磁仿真中得到了普遍应用，“有限元分析”一词也逐渐被其他工程和科学领域所接受和认可。事实上，无论是在何种应用领域，有限元分析过程都是相同的。</p><p>下面简要概述有限元分析的主要工作流程，涵盖从几何到模型文档的各个过程。</p><h3 id="几何" tabindex="-1"><a class="header-anchor" href="#几何" aria-hidden="true">#</a> 几何</h3><p>有限元分析要求模型几何“紧密相连”。计算机辅助设计(CAD)几何结构并不总是用于分析目的。举个例子，现实生活中的某个物体可以通过 CAD 绘图中一组松散连接的三维表面来描述；然而在有限元分析中，这些表面必须能够形成一个真实的体。</p><p>即使 CAD 绘图中的一组三维表面能够形成一个体，但很可能存在一些表面过于细长，而一些边对于几何尺寸而言又过短的情况。这样一来，这些不理想的几何特征上便会产生不符合要求的单元分布。</p><p>为了准备一个可用于有限元分析的 CAD 几何，通常需要对几何进行修复 和特征去除。修复操作可以修补几何中不“紧密相连”的部分，特征去除操作可以移除细长表面或合并多余的小边。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>一个常规的需要注意的事情就是几何中的曲面或曲边。任何参数化曲线都是不精确的，所以避免问题，在应对包含曲面边界的问题应当注意两个互相贴合的曲面应该是由同一组参数使用同一种方式产生，这样能够保证两个曲面的误差相同进而重合。</p><p>我在模拟中就曾经遇到过这个问题，我当时的两个曲面一个是圆柱体的侧面，另一个是圆弧曲线沿线段扫掠而成，尽管两者在理论上是同样的曲面形状，但 COMOSL 仍然不能正确的进行布尔运算得到正确的几何对象。</p></div><p>为了进行分析而创建、修复 CAD 几何以及去除特征的过程，通常是更大过程的一个环节——在有限元分析中，传统上称之为预处理。</p><h3 id="材料" tabindex="-1"><a class="header-anchor" href="#材料" aria-hidden="true">#</a> 材料</h3><p>数学模型中的本构关系涉及材料的物理属性，这些属性可能与建模变量(“因变量”)相关。例如，在热膨胀分析中，机械属性和热属性往往与温度相关。</p><p>在实际操作中，需要正确估计材料属性和参考点的有效间隔。除此之外，还必须为几何的各个部分指派不同属性的材料。</p><p>在传统的有限元分析中，定义和指派材料属性及材料属性函数的过程，通常也认为是预处理的一部分。</p><h3 id="域设置、边界条件、载荷及约束" tabindex="-1"><a class="header-anchor" href="#域设置、边界条件、载荷及约束" aria-hidden="true">#</a> 域设置、边界条件、载荷及约束</h3><p>在结构力学中，通过为系统选择的材料、载荷及约束可以定义数学模型。一般情况下，设置材料、域方程、边界条件和初始条件，即可定义数学模型。</p><p>这部分的分析涉及选择几何域、边界、边和点，以及为这些几何实体指派方程、载荷或约束。这些设置的定义过程通常也认为是传统有限元分析中预处理的一部分。</p><h3 id="网格" tabindex="-1"><a class="header-anchor" href="#网格" aria-hidden="true">#</a> 网格</h3><p>几何、材料、域设置、边界条件、初始条件、荷载及约束的定义无需离散化即可进行。然而，在许多较旧的有限元分析软件中，仍然是基于离散模型来执行这些操作。</p><p>网格创建完成后，我们便得到一个完整的数值模型。不同的现象和分析需要使用不同的网格设置。例如，在波的传播问题(例如，结构力学中的弹性波建模，或者射频分析中的电磁波建模)中，最大单元的尺寸必须远小于波长才能正确求解问题。在流体流动中，可能需要边界层网格才能解析边界层，而单元雷诺数可以确定流体本体的单元尺寸。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>COMSOL 在这方面还是会做一些工作，对于新手来说，应当直接使用由物理场确定的网格，而不是自己构建一个。基于物理场确定的网格可以确保网格的形状，结构以及必要的优化，如边界层、角细化、狭窄区域分辨率等都依据要求解的物理场处于一个较为合适的状态。但是在模拟一些近似成分较大的模型中，比如非等温流动，可能需要针对几何与物理场，在自动构建的基础上进一步优化网格，以提升结果准确度或降低运算时间。</p></div><p>在许多情况下，CAD 几何的不同部分必须单独进行网格剖分。各部分之间界面处的模型变量必须通过有限元分析软件进行匹配，这一操作可以通过连续性约束(即用于将不同部分的有限元离散相互关联的边界条件)来实现。由于这些条件可能具有非局部特性，它们通常被称为多点约束。</p><p>在传统的有限元分析中，网格剖分被认为是难度最高的预处理任务之一；而在现代有限元分析软件中，初始网格可以在求解过程中自动改变，从而尽可能减小数值解的误差，这种方法称为自适应网格剖分。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>尽管 COMSOL 话说的挺漂亮，但是这里有一定装 13 的成分，所以务必极其用心的设计构建您的网格。</p><p>另外此处以及下文的“现代有限元分析软件”请直接默认为 COMSOL 就行。</p></div><h3 id="解" tabindex="-1"><a class="header-anchor" href="#解" aria-hidden="true">#</a> 解</h3><p>如果说创建网格是一项高难度的任务，那么在合理的计算时间内选择和设置求解器并求得方程的解(构成数值模型)便是一项更加艰巨的工作。这些困难与求解过程中面临的各项挑战紧密相关。</p><p>首先，使用代数方程的离散模型可能非常大。一个三维模型往往拥有数百万个自由度。基于有限元法的数值模型求解过程的中心环节，是求解大型线性代数方程组。非线性、参数化、特征值和瞬态问题则通过迭代法求解，该方法求解一系列大型线性方程组。</p><p>一般来说，大型线性方程组很难进行有效求解。尽管可以使用现成的黑箱法，但这种方法对于实际模型而言往往代价过高，相关示例包括基于 LU 因式分解法的直接求解器，或通用的迭代法。</p><p>为了寻求一个成功且近乎最优的替代方案，必须利用基础系统的某种结构。对于多物理场问题，这种结构可能并不存在，或者难以识别。在这种情况下，一个有用的做法是，将问题按物理成分进行分解，从而使分解的结构能被有效利用。现代有限元分析软件使用几何或代数多重网格法，以加快线性系统的迭代求解过程。</p><p>有限元分析求解器的另一个问题来源是模型的非线性。牛顿方法使用局部导数信息来寻求更好的候选解；但只有在当前的估计解与真正的数值解足够接近 时，这种方法才可靠。实际上，对解的初始猜测值并不总是与真实值足够接近；在这样的情况下，使用牛顿方法通常无法正确求解。对问题进行不同的简化或松弛 可能会有所帮助。通过求解更为简单的相似问题来代替原始问题，可以得到候选解。例如，可以忽略某些非线性来得到一个容易求解的线性问题。为此，我们开发了分离式求解器和连续求解器。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>这点我在流体模拟上深有体会，随着模型几何结构及其雷诺数的不同，需要在八种不同近似的模块中进行选择。</p><p>随着实验条件、参数的不同，模型的流动模型可能也会发生变动。这就意味着模拟的时候也要时刻注意选择模块是否仍然适用。在多个模块的边界处，可能要采取多种近似模型进行多次模拟，然后通过分析讨论模型在不同近似下的现象差异原因，才能给出最终的结果与预估准确度。</p></div><p>有限元分析求解器遇到的第三类困难是，数值模型可能不稳定，或者由于其他原因，没有为数学模型提供较好的近似。与更完善、性能更优的数值模型相比，这些情况下的求解过程要显得困难得多。我们可能很难发现和理解引起这一问题的根本原因。在许多情况下，我们可以采用某种方式修改模型而不是通过设置求解器作为补救措施。更好的自适应网格通常是模型性能改进的重要组成部分。</p><p>总而言之，求解器的设置选项需要非常灵活；同时，还要能调用功能强大的各种方法。我们往往需要在稳定性和性能之间达成折衷。</p><p>通过扰乱数值模型来研究其灵敏度，始终是一个很好的做法。可以到达两个相关目的: 检查模型是否具有数值上的稳定性，以及对当前有限元分析中的一些重要物理量的截断误差进行量化。有限元离散的截断误差通常(但不总是)决定着仿真中的误差。为此，可以将模型中的关键派生值与典型的网格单元尺寸进行比较，然后采用不同的网格(在理想情况下，采用与当前网格明显不同的其他两个网格，且它们彼此也存在较大差异)重复进行计算。</p><p>如果数值模型性能良好，便可以根据比较结果估计精度阶数。如果精度阶数为正数，则所研究的两个最精细网格之间的物理量的差值，可以作为该物理量的截断误差估计值。有时，我们很难创建出满足所有需求的多个网格；在这种情况下，需要使用两个截然不同的网格的比较结果作为替代方法。</p><p>如果差值较小，表明该数值模型表现良好，且这个物理量的截断误差也较小。但是，如果差值较大，则很难得出任何结论。这种差异可能是由于两个网格的不稳定性或精度低造成的。然而，细化网格的解可能是精确的，而粗化网格的解则可能精度较差。即使截断误差估计尚不确定，至少可以排除模型不稳定的风险(例如，使用与该细化网格相当但不同的其他网格)。其他离散参数和求解器设置(如容差)也应进行更改。如果对于所有“扰动”仿真来说，研究的物理量只发生了很小程度的变化，则说明该数值模型具有良好的稳定性。</p><h3 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h3><p>对数值求解器的计算结果进行的分析包括: 研究建模场的三维绘图、横截面图(如 x-y 绘图)以及计算派生值，例如对体、表面或边求积分，或计算沿边或点的表达式的值。</p><p>在较旧的有限元分析软件中，必须先定义要分析的绘图和派生值，才能进行求解。如果遗漏某些关键定义，则意味着需要从头开始重新求解。因此，定义要在后处理 过程中分析的表达式和派生值，也认为是预处理的一部分。</p><p>现代有限元分析软件支持在计算出解之后，动态定义表达式和派生值。在这些软件中，表达式和派生值的定义是后处理的重要组成部分，用于对模型进行深入预测。</p><p>后处理中的一项重要任务是估计数值解中的误差。如上所述，可以通过求解不同网格尺寸的数值模型方程，来估计数值解的收敛性，从而实现误差估计。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>这项在研究中尤其是论文还是比较重要的，尤其是在流体仿真这种采取了大量近似的模拟中、或是存粹的理论模拟，需要使用尺寸比最终优化网格更加小的网格结构进行模拟，通过各物理场结果的差异性，来验证模型的准确程度。如果受条件所限，验证其与实验结果</p></div><p>后处理的另一个重要部分是估计模型对不同数据(如材料属性、初始条件、边界条件、载荷、约束以及数学模型和数值模型所需的其他输入参数)的灵敏度。</p><h3 id="自动生成模型文档" tabindex="-1"><a class="header-anchor" href="#自动生成模型文档" aria-hidden="true">#</a> 自动生成模型文档</h3><p>在运行仿真后，非常重要的一步是将输入数据和仿真结果汇总到报告中，并在其中记录特定的会话。现代有限元分析软件支持定义报告的结构，用户可以在其中选择要记录的输入和输出数据。系统可以自动生成此类报告，您可以将其另存为文档，在将来每次仿真时用作参考。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>这倒是 COMSOL 一个很有用的功能，如果需要使用模型的多个结果数据，可以仔细设置一下导出的选项，就可以很容易的得出不同参数下的结果报告。</p><p>这也是 COMSOL 为 APP 构建提供的功能，在工程师优化编程了一个完整的模型后，可以交付给用户，用户只需要输入对应的参数进行运算，即可得到一份标准的结果报告。</p></div>',64);function m(C,O){const a=s("ExternalLinkIcon");return t(),n("div",null,[c,o,l,_,p("div",u,[f,p("p",null,[e("有限元法的介绍请见 "),p("a",x,[e("有限元法(FEM)"),r(a)]),e("。")])]),v])}const E=i(d,[["render",m],["__file","intro.html.vue"]]);export{E as default};
