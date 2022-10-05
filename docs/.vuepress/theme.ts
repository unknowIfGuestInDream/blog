import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar/index.js";
import {enSidebar, zhSidebar} from "./sidebar/index.js";

export default hopeTheme({
    hostname: "https://blog.tlcsdm.com",

    author: {
        name: "unknowIfGuestInDream",
        url: "https://www.tlcsdm.com",
    },
    iconAssets: "iconfont",
    logo: "/logo.svg",
    repo: "unknowIfGuestInDream/unknowifguestindream.github.io",
    docsDir: "docs",
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
    themeColor: {
        blue: "#2196f3",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    },
    fullscreen: true,

    locales: {
        /**
         * Chinese locale config
         */
        "/": {
            // navbar
            navbar: zhNavbar,
            // sidebar
            sidebar: zhSidebar,
            footer: "<div style=\"text-align: center\"><span><a href=\"http://beian.miit.gov.cn/\" target=\"_blank\">辽ICP备2021000033号-1</a></span></div>",
            displayFooter: true,
            blog: {
                description: "一名Java开发工程师, 居住在大连",
                intro: "/about/",
                medias: {
                    Blog: [
                        "https://www.tlcsdm.com",
                        '<svg t="1664890752433" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2584" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M1003.988341 920.409302c0 47.254822-38.308713 85.563535-85.563535 85.563535H105.575194c-47.254822 0-85.563535-38.308713-85.563535-85.563535s38.308713-85.563535 85.563535-85.563535h812.849612c47.254822 0 85.563535 38.308713 85.563535 85.563535z" fill="#A5A5A5" p-id="2585"></path><path d="M939.817674 321.464558v470.595473c0 47.254822-38.308713 85.571473-85.571472 85.571473h-684.492404c-47.26276 0-85.571473-38.316651-85.571472-85.571473V321.464558c0-47.254822 38.308713-85.563535 85.571472-85.563535h684.492404c47.26276 0 85.571473 38.308713 85.571472 85.571473z" fill="#CCCAC4" p-id="2586"></path><path d="M854.25414 834.845767H169.74586a42.785736 42.785736 0 0 1-42.785736-42.785736V321.464558a42.785736 42.785736 0 0 1 42.785736-42.785736h684.50828a42.785736 42.785736 0 0 1 42.785736 42.785736v470.595473a42.785736 42.785736 0 0 1-42.785736 42.785736z" fill="#F2EFE2" p-id="2587"></path><path d="M800.775938 412.378295H223.224062a32.085333 32.085333 0 0 1 0-64.170667h577.551876a32.085333 32.085333 0 0 1 0 64.170667zM490.607132 492.591628a32.085333 32.085333 0 0 0-32.085334-32.085333H223.224062a32.085333 32.085333 0 0 0 0 64.170666h235.297736a32.085333 32.085333 0 0 0 32.085334-32.085333z m342.254139 0a32.085333 32.085333 0 0 0-32.085333-32.085333H565.478202a32.085333 32.085333 0 0 0 0 64.170666h235.297736a32.085333 32.085333 0 0 0 32.085333-32.085333z" fill="#BFBBA3" p-id="2588"></path><path d="M800.775938 759.982636H223.224062a32.085333 32.085333 0 0 1-32.085333-32.085334V599.548031a32.085333 32.085333 0 0 1 32.085333-32.085333h577.551876a32.085333 32.085333 0 0 1 32.085333 32.085333v128.349271a32.085333 32.085333 0 0 1-32.085333 32.085334z" fill="#FFD880" p-id="2589"></path><path d="M288.466357 741.201364l-4.477024 4.484962 0.15876 0.158759-36.697302 36.705241a14.050233 14.050233 0 0 1-19.860838 0l-36.697302-36.705241 0.15876-0.158759-4.477023-4.484962a32.863256 32.863256 0 1 1 46.468961-46.468961l4.477023 4.484961 4.477023-4.484961a32.863256 32.863256 0 1 1 46.468962 46.468961z" fill="#FC8059" p-id="2590"></path><path d="M743.019163 583.862574l-42.785737 57.042356a21.392868 21.392868 0 0 1-34.212713 0l-42.785736-57.042356a21.392868 21.392868 0 0 1-4.286512-12.835721V64.773953a42.785736 42.785736 0 0 1 42.785737-42.777798h42.785736a42.785736 42.785736 0 0 1 42.785736 42.785736v506.244962c-0.007938 4.627845-1.508217 9.128682-4.286511 12.835721z" fill="#D6A154" p-id="2591"></path><path d="M731.25507 599.548031l-31.013706 41.356899a21.392868 21.392868 0 0 1-34.228589 0l-31.013705-41.356899h96.256z" fill="#B26932" p-id="2592"></path><path d="M618.956403 513.984496V64.773953a42.785736 42.785736 0 0 1 42.785737-42.777798h42.777798a42.785736 42.785736 0 0 1 42.785736 42.785736V513.984496h-128.357209z" fill="#FFD880" p-id="2593"></path><path d="M683.12707 513.984496V21.996155h21.392868a42.785736 42.785736 0 0 1 42.785736 42.785736V513.984496h-64.178604z" fill="#FCC159" p-id="2594"></path><path d="M747.297736 64.773953v42.785737H618.956403V64.773953a42.785736 42.785736 0 0 1 42.777799-42.777798h42.785736a42.785736 42.785736 0 0 1 42.777798 42.785736z" fill="#FC8059" p-id="2595"></path><path d="M950.708589 824.042171c3.341891-10.057426 5.151752-20.813395 5.151752-31.974202V321.464558c0-56.018357-45.579907-101.606202-101.606201-101.606201H763.340403V64.773953c0-32.426667-26.38586-58.820465-58.820465-58.820465h-42.785736c-32.434605 0-58.820465 26.393798-58.820466 58.820465v155.084404H169.737922c-56.026295 0-101.606202 45.587845-101.606201 101.606201v470.595473c0 11.168744 1.80986 21.916775 5.15969 31.974202A101.49507 101.49507 0 0 0 3.968992 920.409302c0 56.026295 45.579907 101.606202 101.606202 101.606202h812.849612c56.026295 0 101.606202-45.579907 101.606202-101.606202a101.487132 101.487132 0 0 0-69.322419-96.367131zM634.99907 64.773953a26.766884 26.766884 0 0 1 26.735132-26.735131h42.785736a26.766884 26.766884 0 0 1 26.735132 26.743069v26.735132H634.99907V64.773953z m96.256 58.828404v374.339472h-32.085334V123.602357h32.085334z m-96.256 0h32.085333v374.339472h-32.085333V123.602357z m0 406.424806H731.247132v40.99969a5.397829 5.397829 0 0 1-1.071628 3.206945l-42.785737 57.042357a5.247008 5.247008 0 0 1-4.270635 2.143256 5.247008 5.247008 0 0 1-4.286512-2.143256l-42.777798-57.034419a5.397829 5.397829 0 0 1-1.071628-3.214883v-40.99969zM100.224992 321.464558c0-38.332527 31.188341-69.520868 69.520868-69.520868h433.167876v319.083163c0 8.041178 2.651287 16.010915 7.48552 22.464496l42.785736 57.034418a37.110078 37.110078 0 0 0 29.942078 14.971039 37.118016 37.118016 0 0 0 29.950015-14.971039l42.785737-57.034418a37.665736 37.665736 0 0 0 7.485519-22.464496V251.94369h90.913737c38.332527 0 69.51293 31.196279 69.51293 69.528806v470.595473c0 38.332527-31.180403 69.520868-69.51293 69.520868H169.737922c-38.332527 0-69.520868-31.188341-69.520868-69.520868V321.464558zM918.424806 989.930171H105.575194c-38.340465 0-69.520868-31.188341-69.520868-69.520869a69.401798 69.401798 0 0 1 52.446263-67.393488c18.55107 24.671256 48.064496 40.658357 81.245271 40.658357h684.50828c33.180775 0 62.694202-15.987101 81.253209-40.666295a69.409736 69.409736 0 0 1 52.438325 67.401426c0 38.340465-31.188341 69.520868-69.520868 69.520869z m-572.201674-48.128a16.034729 16.034729 0 0 1-16.042667 16.034728H159.053395a16.034729 16.034729 0 1 1 0-32.077395h171.12707a16.034729 16.034729 0 0 1 16.034729 16.034729z m534.766139 0a16.034729 16.034729 0 0 1-16.034728 16.034728H544.077395a16.034729 16.034729 0 1 1 0-32.077395h320.861272a16.034729 16.034729 0 0 1 16.042666 16.034729z m-393.589085 0a16.034729 16.034729 0 0 1-16.042667 16.034728h-2.143255a16.034729 16.034729 0 1 1 0-32.077395h2.143255a16.034729 16.034729 0 0 1 16.042667 16.034729z m-66.313922 0a16.034729 16.034729 0 0 1-16.034729 16.034728h-2.143256a16.034729 16.034729 0 1 1 0-32.077395h2.143256a16.034729 16.034729 0 0 1 16.034729 16.034729z" fill="#4C4C4C" p-id="2596"></path></svg>',
                    ],
                    Email: "mailto:tang97155@163.com",
                    Gmail: "mailto:tang97155@gmail.com",
                    GitHub: "https://github.com/unknowIfGuestInDream",
                    Gitee: "https://gitee.com/unknowIfGuestInDream",
                },
            },
            // page meta
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
        "/en/": {
            // navbar
            navbar: enNavbar,
            // sidebar
            sidebar: enSidebar,
            footer: "<div style=\"text-align: center\"><span><a href=\"http://beian.miit.gov.cn/\" target=\"_blank\">辽ICP备2021000033号-1</a></span></div>",
            displayFooter: true,
            blog: {
                description: "A Java development engineer, living in Dalian",
                intro: "/en/about/",
                medias: {
                    Blog: [
                        "https://www.tlcsdm.com",
                        '<svg t="1664890752433" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2584" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M1003.988341 920.409302c0 47.254822-38.308713 85.563535-85.563535 85.563535H105.575194c-47.254822 0-85.563535-38.308713-85.563535-85.563535s38.308713-85.563535 85.563535-85.563535h812.849612c47.254822 0 85.563535 38.308713 85.563535 85.563535z" fill="#A5A5A5" p-id="2585"></path><path d="M939.817674 321.464558v470.595473c0 47.254822-38.308713 85.571473-85.571472 85.571473h-684.492404c-47.26276 0-85.571473-38.316651-85.571472-85.571473V321.464558c0-47.254822 38.308713-85.563535 85.571472-85.563535h684.492404c47.26276 0 85.571473 38.308713 85.571472 85.571473z" fill="#CCCAC4" p-id="2586"></path><path d="M854.25414 834.845767H169.74586a42.785736 42.785736 0 0 1-42.785736-42.785736V321.464558a42.785736 42.785736 0 0 1 42.785736-42.785736h684.50828a42.785736 42.785736 0 0 1 42.785736 42.785736v470.595473a42.785736 42.785736 0 0 1-42.785736 42.785736z" fill="#F2EFE2" p-id="2587"></path><path d="M800.775938 412.378295H223.224062a32.085333 32.085333 0 0 1 0-64.170667h577.551876a32.085333 32.085333 0 0 1 0 64.170667zM490.607132 492.591628a32.085333 32.085333 0 0 0-32.085334-32.085333H223.224062a32.085333 32.085333 0 0 0 0 64.170666h235.297736a32.085333 32.085333 0 0 0 32.085334-32.085333z m342.254139 0a32.085333 32.085333 0 0 0-32.085333-32.085333H565.478202a32.085333 32.085333 0 0 0 0 64.170666h235.297736a32.085333 32.085333 0 0 0 32.085333-32.085333z" fill="#BFBBA3" p-id="2588"></path><path d="M800.775938 759.982636H223.224062a32.085333 32.085333 0 0 1-32.085333-32.085334V599.548031a32.085333 32.085333 0 0 1 32.085333-32.085333h577.551876a32.085333 32.085333 0 0 1 32.085333 32.085333v128.349271a32.085333 32.085333 0 0 1-32.085333 32.085334z" fill="#FFD880" p-id="2589"></path><path d="M288.466357 741.201364l-4.477024 4.484962 0.15876 0.158759-36.697302 36.705241a14.050233 14.050233 0 0 1-19.860838 0l-36.697302-36.705241 0.15876-0.158759-4.477023-4.484962a32.863256 32.863256 0 1 1 46.468961-46.468961l4.477023 4.484961 4.477023-4.484961a32.863256 32.863256 0 1 1 46.468962 46.468961z" fill="#FC8059" p-id="2590"></path><path d="M743.019163 583.862574l-42.785737 57.042356a21.392868 21.392868 0 0 1-34.212713 0l-42.785736-57.042356a21.392868 21.392868 0 0 1-4.286512-12.835721V64.773953a42.785736 42.785736 0 0 1 42.785737-42.777798h42.785736a42.785736 42.785736 0 0 1 42.785736 42.785736v506.244962c-0.007938 4.627845-1.508217 9.128682-4.286511 12.835721z" fill="#D6A154" p-id="2591"></path><path d="M731.25507 599.548031l-31.013706 41.356899a21.392868 21.392868 0 0 1-34.228589 0l-31.013705-41.356899h96.256z" fill="#B26932" p-id="2592"></path><path d="M618.956403 513.984496V64.773953a42.785736 42.785736 0 0 1 42.785737-42.777798h42.777798a42.785736 42.785736 0 0 1 42.785736 42.785736V513.984496h-128.357209z" fill="#FFD880" p-id="2593"></path><path d="M683.12707 513.984496V21.996155h21.392868a42.785736 42.785736 0 0 1 42.785736 42.785736V513.984496h-64.178604z" fill="#FCC159" p-id="2594"></path><path d="M747.297736 64.773953v42.785737H618.956403V64.773953a42.785736 42.785736 0 0 1 42.777799-42.777798h42.785736a42.785736 42.785736 0 0 1 42.777798 42.785736z" fill="#FC8059" p-id="2595"></path><path d="M950.708589 824.042171c3.341891-10.057426 5.151752-20.813395 5.151752-31.974202V321.464558c0-56.018357-45.579907-101.606202-101.606201-101.606201H763.340403V64.773953c0-32.426667-26.38586-58.820465-58.820465-58.820465h-42.785736c-32.434605 0-58.820465 26.393798-58.820466 58.820465v155.084404H169.737922c-56.026295 0-101.606202 45.587845-101.606201 101.606201v470.595473c0 11.168744 1.80986 21.916775 5.15969 31.974202A101.49507 101.49507 0 0 0 3.968992 920.409302c0 56.026295 45.579907 101.606202 101.606202 101.606202h812.849612c56.026295 0 101.606202-45.579907 101.606202-101.606202a101.487132 101.487132 0 0 0-69.322419-96.367131zM634.99907 64.773953a26.766884 26.766884 0 0 1 26.735132-26.735131h42.785736a26.766884 26.766884 0 0 1 26.735132 26.743069v26.735132H634.99907V64.773953z m96.256 58.828404v374.339472h-32.085334V123.602357h32.085334z m-96.256 0h32.085333v374.339472h-32.085333V123.602357z m0 406.424806H731.247132v40.99969a5.397829 5.397829 0 0 1-1.071628 3.206945l-42.785737 57.042357a5.247008 5.247008 0 0 1-4.270635 2.143256 5.247008 5.247008 0 0 1-4.286512-2.143256l-42.777798-57.034419a5.397829 5.397829 0 0 1-1.071628-3.214883v-40.99969zM100.224992 321.464558c0-38.332527 31.188341-69.520868 69.520868-69.520868h433.167876v319.083163c0 8.041178 2.651287 16.010915 7.48552 22.464496l42.785736 57.034418a37.110078 37.110078 0 0 0 29.942078 14.971039 37.118016 37.118016 0 0 0 29.950015-14.971039l42.785737-57.034418a37.665736 37.665736 0 0 0 7.485519-22.464496V251.94369h90.913737c38.332527 0 69.51293 31.196279 69.51293 69.528806v470.595473c0 38.332527-31.180403 69.520868-69.51293 69.520868H169.737922c-38.332527 0-69.520868-31.188341-69.520868-69.520868V321.464558zM918.424806 989.930171H105.575194c-38.340465 0-69.520868-31.188341-69.520868-69.520869a69.401798 69.401798 0 0 1 52.446263-67.393488c18.55107 24.671256 48.064496 40.658357 81.245271 40.658357h684.50828c33.180775 0 62.694202-15.987101 81.253209-40.666295a69.409736 69.409736 0 0 1 52.438325 67.401426c0 38.340465-31.188341 69.520868-69.520868 69.520869z m-572.201674-48.128a16.034729 16.034729 0 0 1-16.042667 16.034728H159.053395a16.034729 16.034729 0 1 1 0-32.077395h171.12707a16.034729 16.034729 0 0 1 16.034729 16.034729z m534.766139 0a16.034729 16.034729 0 0 1-16.034728 16.034728H544.077395a16.034729 16.034729 0 1 1 0-32.077395h320.861272a16.034729 16.034729 0 0 1 16.042666 16.034729z m-393.589085 0a16.034729 16.034729 0 0 1-16.042667 16.034728h-2.143255a16.034729 16.034729 0 1 1 0-32.077395h2.143255a16.034729 16.034729 0 0 1 16.042667 16.034729z m-66.313922 0a16.034729 16.034729 0 0 1-16.034729 16.034728h-2.143256a16.034729 16.034729 0 1 1 0-32.077395h2.143256a16.034729 16.034729 0 0 1 16.034729 16.034729z" fill="#4C4C4C" p-id="2596"></path></svg>',
                    ],
                    Gmail: "mailto:tang97155@gmail.com",
                    GitHub: "https://github.com/unknowIfGuestInDream",
                    Twitter: "https://twitter.com/unknowIfGuest",
                },
            },
            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },

        // "/ja/": {
        //     // navbar
        //     navbar: jaNavbar,
        //
        //     // sidebar
        //     sidebar: jaSidebar,
        //
        //     footer: "<div style=\"text-align: center\"><span><a href=\"http://beian.miit.gov.cn/\" target=\"_blank\">辽ICP备2021000033号-1</a></span></div>",
        //
        //     displayFooter: true,
        //
        //     blog: {
        //         description: "A FrontEnd programmer",
        //         intro: "/ja/about/",
        //     },
        //
        //     metaLocales: {
        //         editLink: "Edit this page on GitHub",
        //     },
        // },
    },
    copyright: "Copyright © 2022 unknowIfGuestInDream",
    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
            "/en/demo/encrypt.html": ["1234"],
            "/ja/demo/encrypt.html": ["1234"],
        },
    },
    plugins: {
        blog: {
            autoExcerpt: true,
        },
        // If you don't need comment feature, you can remove following option
        // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
        // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
        comment: {
            /**
             * Using Giscus
             */
            provider: "Giscus",
            repo: "unknowIfGuestInDream/giscus-discussions",
            repoId: "R_kgDOIIOJOg",
            category: "Announcements",
            categoryId: "DIC_kwDOIIOJOs4CRybb",

            /**
             * Using Twikoo
             */
            // provider: "Twikoo",
            // envId: "https://twikoo.ccknbc.vercel.app",

            /**
             * Using Waline
             */
            // provider: "Waline",
            // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
        },

        // Disable features you don't want here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            flowchart: true,
            gfm: true,
            imageSize: true,
            include: true,
            katex: true,
            lazyLoad: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommanded",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommanded",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vpre: true,
            vuePlayground: true,
        },

        pwa: {
            favicon: "/favicon.ico",
            themeColor: "#5c92d1",
            cacheHTML: true,
            cachePic: true,
            appendBase: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Demo",
                        short_name: "Demo",
                        url: "/demo/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },
    },
});
