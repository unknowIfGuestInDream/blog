const e=JSON.parse('{"key":"v-61ce3210","path":"/ja/software/comsol/mesh/intro.html","title":"有限元网格划分和细化","lang":"ja-JP","frontmatter":{"title":"有限元网格划分和细化","icon":"creative","date":"2020-06-02T00:00:00.000Z","category":["软件"],"tag":["仿真","COMSOL"],"description":"有限元网格划分和细化 基于任何有限元分析模型得到的精度都与所用的有限元网格直接相关。有限元网格用于将 CAD 模型分割为很多较小的域，我们称之为单元，然后在这些单元上求解一组方程，这些方程通过在每个单元上定义的一组多项式函数来近似表示所需的控制方程。随着网格的不断细化，这些单元变得越来越小，从而使求解的结果越来越接近真实解。 网格细化过程是我们验证有限元模型，并对软件、模型和计算结果建立信心的关键步骤。 网格细化过程 通常，我们首先需要了解所研究的物理系统，以及完整描述这一系统的几何结构，才能成功地进行有限元分析。几何结构可以通过 CAD 模型来表示。典型的 CAD 模型能够准确描述研究对象的形状和结构，但通常也包含一些修饰特征或制造细节；事实证明，这些信息往往与有限元建模无关。仿真分析人员应该对 CAD 模型进行一些工程判断，并决定是否可以在网格划分之前移除或简化这些特征和细节。从简单模型开始并逐渐增加复杂性的做法，往往比从复杂模型开始然后进行简化的做法要容易得多。","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://blog.tlcsdm.com/software/comsol/mesh/intro.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/software/comsol/mesh/intro.html"}],["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/ja/software/comsol/mesh/intro.html"}],["meta",{"property":"og:site_name","content":"unknowIfGuestInDream"}],["meta",{"property":"og:title","content":"有限元网格划分和细化"}],["meta",{"property":"og:description","content":"有限元网格划分和细化 基于任何有限元分析模型得到的精度都与所用的有限元网格直接相关。有限元网格用于将 CAD 模型分割为很多较小的域，我们称之为单元，然后在这些单元上求解一组方程，这些方程通过在每个单元上定义的一组多项式函数来近似表示所需的控制方程。随着网格的不断细化，这些单元变得越来越小，从而使求解的结果越来越接近真实解。 网格细化过程是我们验证有限元模型，并对软件、模型和计算结果建立信心的关键步骤。 网格细化过程 通常，我们首先需要了解所研究的物理系统，以及完整描述这一系统的几何结构，才能成功地进行有限元分析。几何结构可以通过 CAD 模型来表示。典型的 CAD 模型能够准确描述研究对象的形状和结构，但通常也包含一些修饰特征或制造细节；事实证明，这些信息往往与有限元建模无关。仿真分析人员应该对 CAD 模型进行一些工程判断，并决定是否可以在网格划分之前移除或简化这些特征和细节。从简单模型开始并逐渐增加复杂性的做法，往往比从复杂模型开始然后进行简化的做法要容易得多。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-10-08T11:40:37.000Z"}],["meta",{"property":"article:tag","content":"仿真"}],["meta",{"property":"article:tag","content":"COMSOL"}],["meta",{"property":"article:published_time","content":"2020-06-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T11:40:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"有限元网格划分和细化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-02T00:00:00.000Z\\",\\"dateModified\\":\\"2022-10-08T11:40:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"有限元网格划分和细化","slug":"有限元网格划分和细化","link":"#有限元网格划分和细化","children":[]},{"level":2,"title":"网格细化过程","slug":"网格细化过程","link":"#网格细化过程","children":[]},{"level":2,"title":"网格细化的不同度量指标","slug":"网格细化的不同度量指标","link":"#网格细化的不同度量指标","children":[]},{"level":2,"title":"不同的网格细化技巧","slug":"不同的网格细化技巧","link":"#不同的网格细化技巧","children":[{"level":3,"title":"减小单元尺寸","slug":"减小单元尺寸","link":"#减小单元尺寸","children":[]},{"level":3,"title":"提高单元阶数","slug":"提高单元阶数","link":"#提高单元阶数","children":[]},{"level":3,"title":"全局自适应网格细化","slug":"全局自适应网格细化","link":"#全局自适应网格细化","children":[]},{"level":3,"title":"局部自适应网格划分","slug":"局部自适应网格划分","link":"#局部自适应网格划分","children":[]},{"level":3,"title":"手动调整网格","slug":"手动调整网格","link":"#手动调整网格","children":[]}]},{"level":2,"title":"时域和频域网格划分","slug":"时域和频域网格划分","link":"#时域和频域网格划分","children":[{"level":3,"title":"时间自适应网格划分","slug":"时间自适应网格划分","link":"#时间自适应网格划分","children":[]},{"level":3,"title":"波长自适应网格划分","slug":"波长自适应网格划分","link":"#波长自适应网格划分","children":[]}]},{"level":2,"title":"有限元网格细化的挑战与发展趋势","slug":"有限元网格细化的挑战与发展趋势","link":"#有限元网格细化的挑战与发展趋势","children":[]}],"git":{"createdTime":1665229237000,"updatedTime":1665229237000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":1}]},"readingTime":{"minutes":12.96,"words":3888},"filePathRelative":"ja/software/comsol/mesh/intro.md","localizedDate":"2020年6月2日","excerpt":"<h2> 有限元网格划分和细化</h2>\\n<p>基于任何有限元分析模型得到的精度都与所用的有限元网格直接相关。有限元网格用于将 CAD 模型分割为很多较小的域，我们称之为单元，然后在这些单元上求解一组方程，这些方程通过在每个单元上定义的一组多项式函数来近似表示所需的控制方程。随着网格的不断细化，这些单元变得越来越小，从而使求解的结果越来越接近真实解。</p>\\n<p>网格细化过程是我们验证有限元模型，并对软件、模型和计算结果建立信心的关键步骤。</p>\\n<h2> 网格细化过程</h2>\\n<p>通常，我们首先需要了解所研究的物理系统，以及完整描述这一系统的几何结构，才能成功地进行有限元分析。几何结构可以通过 CAD 模型来表示。典型的 CAD 模型能够准确描述研究对象的形状和结构，但通常也包含一些修饰特征或制造细节；事实证明，这些信息往往与有限元建模无关。仿真分析人员应该对 CAD 模型进行一些工程判断，并决定是否可以在网格划分之前移除或简化这些特征和细节。从简单模型开始并逐渐增加复杂性的做法，往往比从复杂模型开始然后进行简化的做法要容易得多。</p>","autoDesc":true}');export{e as data};
