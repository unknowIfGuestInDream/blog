import{_ as p,a as t,b as a,c as i,d as s,e as l,f as o,g as r,h as _,i as g,j as m,k as n,l as e,m as y,n as c,o as d,p as H,q as z,r as K,s as h,t as T,u as f,v as P,w as u,x,y as S,z as v,A as k,B,C,D as L,E as b}from"./http32-d6e523b2.js";import{_ as A,W as E,X as j,a2 as q}from"./framework-fec69ff1.js";const w={},D=q('<h2 id="什么是-http-协议" tabindex="-1"><a class="header-anchor" href="#什么是-http-协议" aria-hidden="true">#</a> 什么是 HTTP 协议</h2><p>HTTP 协议全称 Hyper Text Transfer Protocol，翻译过来就是超文本传输协议，位于 TCP/IP 四层模型当中的应用层。</p><p><img src="'+p+'" alt="Http 漫画" loading="lazy"></p><p>HTTP 协议通过 <strong>请求/响应</strong> 的方式，在客户端和服务端之间进行通信。</p><p><img src="'+t+'" alt="Http 漫画" loading="lazy"></p><p>这一切看起来很美好，但是 HTTP 协议有一个致命的缺点: <strong>不够安全</strong>。</p><p>HTTP 协议的信息传输完全以明文方式，不做任何加密，相当于是在网络上“裸奔”。这样会导致什么问题呢? 让我们打一个比方:</p><p>小灰是客户端，小灰的同事小红是服务端，有一天小灰试图给小红发送请求。</p><p><img src="'+a+'" alt="Http 漫画" loading="lazy"></p><p>但是，由于传输信息是明文，这个信息有可能被某个中间人恶意截获甚至篡改。这种行为叫做<strong>中间人攻击</strong>。</p><p><img src="'+i+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+s+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+l+'" alt="Http 漫画" loading="lazy"></p><p>如何进行加密呢?</p><p>小灰和小红可以事先约定一种<strong>对称加密</strong>方式，并且约定一个随机生成的密钥。后续的通信中，信息发送方都使用密钥对信息加密，而信息接收方通过同样的密钥对信息解密。</p><p><img src="'+o+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+r+'" alt="Http 漫画" loading="lazy"></p><p>这样做是不是就绝对安全了呢? 并不是。</p><p>虽然我们在后续的通信中对明文进行了加密，但是第一次约定加密方式和密钥的通信仍然是明文，如果第一次通信就已经被拦截了，那么密钥就会泄露给中间人，中间人仍然可以解密后续所有的通信内容。</p><p><img src="'+_+'" alt="Http 漫画" loading="lazy"></p><p>这可怎么办呢? 别担心，我们可以使用<strong>非对称加密</strong>，为密钥的传输做一层额外的保护。</p><p>非对称加密的一组秘钥对中，包含一个公钥和一个私钥。明文既可以用公钥加密，用私钥解密；也可以用私钥加密，用公钥解密。</p><p>在小灰和小红建立通信的时候，小红首先把自己的公钥 Key1 发给小灰:</p><p><img src="'+g+'" alt="Http 漫画" loading="lazy"></p><p>收到小红的公钥以后，小灰自己生成一个用于对称加密的密钥 Key2，并且用刚才接收的公钥 Key1 对 Key2 进行加密(这里有点绕)，发送给小红:</p><p><img src="'+m+'" alt="Http 漫画" loading="lazy"></p><p>小红利用自己非对称加密的私钥，解开了公钥 Key1 的加密，获得了 Key2 的内容。从此以后，两人就可以利用 Key2 进行对称加密的通信了。</p><p><img src="'+n+'" alt="Http 漫画" loading="lazy"></p><p>在通信过程中，即使中间人在一开始就截获了公钥 Key1，由于不知道私钥是什么，也无从解密。</p><p><img src="'+e+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+y+'" alt="Http 漫画" loading="lazy"></p><p>是什么坏主意呢? 中间人虽然不知道小红的私钥是什么，但是在截获了小红的公钥 Key1 之后，却可以偷天换日，自己另外生成一对公钥私钥，把自己的公钥 Key3 发送给小灰。</p><p><img src="'+c+'" alt="Http 漫画" loading="lazy"></p><p>小灰不知道公钥被偷偷换过，以为 Key3 就是小红的公钥。于是按照先前的流程，用 Key3 加密了自己生成的对称加密密钥 Key2，发送给小红。</p><p>这一次通信再次被中间人截获，中间人先用自己的私钥解开了 Key3 的加密，获得 Key2，然后再用当初小红发来的 Key1 重新加密，再发给小红。</p><p><img src="'+d+'" alt="Http 漫画" loading="lazy"></p><p>这样一来，两个人后续的通信尽管用 Key2 做了对称加密，但是中间人已经掌握了 Key2，所以可以轻松进行解密。</p><p><img src="'+H+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+z+'" alt="Http 漫画" loading="lazy"></p><p>是什么解决方案呢? 难道再把公钥进行一次加密吗? 这样只会陷入鸡生蛋蛋生鸡，永无止境的困局。</p><p>这时候，我们有必要引入第三方，一个权威的证书颁发机构(CA)来解决。</p><p>到底什么是证书呢? 证书包含如下信息:</p><p><img src="'+K+'" alt="Http 漫画" loading="lazy"></p><p>为了便于说明，我们这里做了简化，只列出了一些关键信息。至于这些证书信息的用处，我们看看具体的通信流程就能够弄明白了。</p><p>流程如下:</p><ol><li><p>作为服务端的小红，首先把自己的公钥发给证书颁发机构，向证书颁发机构申请证书。</p><p><img src="'+h+'" alt="Http 漫画" loading="lazy"></p></li><li><p>证书颁发机构自己也有一对公钥私钥。机构利用自己的私钥来加密 Key1，并且通过服务端网址等信息生成一个证书签名，证书签名同样经过机构的私钥加密。证书制作完成后，机构把证书发送给了服务端小红。</p><p><img src="'+T+'" alt="Http 漫画" loading="lazy"></p></li><li><p>当小灰向小红请求通信的时候，小红不再直接返回自己的公钥，而是把自己申请的证书返回给小灰。</p><p><img src="'+f+'" alt="Http 漫画" loading="lazy"></p></li><li><p>小灰收到证书以后，要做的第一件事情是验证证书的真伪。需要说明的是，各大浏览器和操作系统已经维护了所有权威证书机构的名称和公钥。所以小灰只需要知道是</p><p>哪个机构颁布的证书，就可以从本地找到对应的机构公钥，解密出证书签名。</p><p>接下来，小灰按照同样的签名规则，自己也生成一个证书签名，如果两个签名一致，说明证书是有效的。</p><p>验证成功后，小灰就可以放心地再次利用机构公钥，解密出服务端小红的公钥 Key1。</p><p><img src="'+P+'" alt="Http 漫画" loading="lazy"></p></li><li><p>像之前一样，小灰生成自己的对称加密密钥 Key2，并且用服务端公钥 Key1 加密 Key2，发送给小红。</p><p><img src="'+u+'" alt="Http 漫画" loading="lazy"></p></li><li><p>最后，小红用自己的私钥解开加密，得到对称加密密钥 Key2。于是两人开始用 Key2 进行对称加密的通信。</p><p><img src="'+x+'" alt="Http 漫画" loading="lazy"></p></li></ol><p>在这样的流程下，我们不妨想一想，中间人是否还具有使坏的空间呢?</p><p><img src="'+S+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+v+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+k+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+B+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+C+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+L+'" alt="Http 漫画" loading="lazy"></p><p><img src="'+b+'" alt="Http 漫画" loading="lazy"></p><div class="hint-container info"><p class="hint-container-title">関連情報</p><p>最新推出的 TLS 协议，是 SSL 3.0 协议的升级版，和 SSL 协议的大体原理是相同的。</p></div>',55),I=[D];function N(V,W){return E(),j("div",null,I)}const G=A(w,[["render",N],["__file","https.html.vue"]]);export{G as default};
