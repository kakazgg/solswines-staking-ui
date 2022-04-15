"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/router/router.js
var router = __webpack_require__(1003);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: external "next-ga"
const external_next_ga_namespaceObject = require("next-ga");
var external_next_ga_default = /*#__PURE__*/__webpack_require__.n(external_next_ga_namespaceObject);
;// CONCATENATED MODULE: ./styles/preset-base.ts
const basePreset = {
    space: [
        0,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512
    ],
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: "inherit",
        monospace: "Menlo, monospace"
    },
    fontSizes: [
        12,
        14,
        16,
        20,
        24,
        32,
        48,
        64,
        96
    ],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    colors: {
        text: "#000",
        background: "#fff",
        primary: "#07c",
        secondary: "#30c",
        muted: "#f6f6f6"
    },
    styles: {
        root: {
            fontFamily: "body",
            lineHeight: "body",
            fontWeight: "body"
        },
        h1: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 5
        },
        h2: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 4
        },
        h3: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 3
        },
        h4: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 2
        },
        h5: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 1
        },
        TabPanelNFT: {
            color: "#FFFFFF"
        },
        h6: {
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 0
        },
        p: {
            color: "text",
            fontFamily: "body",
            fontWeight: "body",
            lineHeight: "body"
        },
        a: {
            color: "primary"
        },
        pre: {
            fontFamily: "monospace",
            overflowX: "auto",
            code: {
                color: "inherit"
            }
        },
        code: {
            fontFamily: "monospace",
            fontSize: "inherit"
        },
        table: {
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0
        },
        th: {
            textAlign: "left",
            borderBottomStyle: "solid"
        },
        td: {
            textAlign: "left",
            borderBottomStyle: "solid"
        },
        img: {
            maxWidth: "100%"
        }
    }
};
/* harmony default export */ const preset_base = (basePreset);

;// CONCATENATED MODULE: ./styles/react-tabs.ts
const reactTabsStyles = {
    ".react-tabs": {
        WebkitTapHighlightColor: "transparent"
    },
    ".react-tabs__tab-list": {
        borderBottom: "1px solid ",
        borderColor: "background2",
        margin: "0 0 10px",
        padding: "0",
        marginBottom: "1.6rem"
    },
    ".react-tabs__tab": {
        display: "inline-block",
        border: "1px solid transparent",
        borderColor: "primary",
        borderRadius: "5px 5px 0 0",
        borderBottom: "none",
        bottom: "-1px",
        position: "relative",
        listStyle: "none",
        padding: "6px 12px",
        cursor: "pointer"
    },
    ".react-tabs__tab--selected": {
        backgroundColor: "primary",
        borderColor: "background2",
        color: "#202020",
        borderRadius: "5px 5px 0 0"
    },
    ".react-tabs__tab--disabled": {
        color: "GrayText",
        cursor: "default"
    },
    ".react-tabs__tab:focus": {
        boxShadow: "0 0 5px hsl(208, 99%, 50%)",
        borderColor: "background2",
        outline: "none"
    },
    ".react-tabs__tab:focus:after": {
        content: '""',
        position: "absolute",
        height: "5px",
        left: "-4px",
        right: "-4px",
        bottom: "-5px",
        backgroundColor: "primary"
    },
    ".react-tabs__tab-panel": {
        display: "none"
    },
    ".react-tabs__tab-panel--selected": {
        display: "block"
    }
};

;// CONCATENATED MODULE: ./styles/theme.ts
var ref;


const getGradient = (rgb)=>{
    /**
   * Split RGB. Example: rgb(226, 217, 211)
   * Then extract only numbers
   */ const splitted = rgb.split(",").map((raw)=>raw.replace(/\D/g, "")
    );
    return `linear-gradient(225deg, ${rgb} 0%, rgba(${splitted[0]}, ${splitted[1]}, ${splitted[2]}, 0.7) 50%, rgba(${splitted[0]}, ${splitted[1]}, ${splitted[2]}, 0.5) 100%)`;
};
/**
 * rgb(84, 42, 147)
 * rgb(48, 114, 180, .7)
 *
 */ const theme = {
    ...preset_base,
    colors: {
        background: "#0f0e0c",
        text: "rgb(226, 217, 211)",
        primary: "#0BDBB3",
        primaryGradient: getGradient("#0BDBB3"),
        heading: "rgb(226, 217, 211)",
        background2: "#0BDBB3",
        backgroundGradient: getGradient("rgb(4, 4, 3)"),
        // modes: {
        //   light: {
        //     background: "rgb(226, 217, 211)",
        //     text: "rgb(4, 4, 3)",
        //     primary: "rgb(48, 114, 180, .7)",
        //     primaryGradient: getGradient("rgb(48, 114, 180, .7)"),
        //     heading: "#1E1E24",
        //     background2: "#1E1E24",
        //     backgroundGradient: getGradient("rgb(226, 217, 211)")
        //   }
        // }
        error: "#B00020",
        success: "#5cb85c"
    },
    sizes: {
        container: "80rem"
    },
    config: {
        useLocalStorage: true
    },
    fonts: {
        heading: 'AvertaStd-Bold, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    },
    buttons: {
        primary: {
            display: "flex",
            color: "heading",
            background: (theme1)=>{
                var ref1;
                return (ref1 = theme1.colors) === null || ref1 === void 0 ? void 0 : ref1.primaryGradient;
            },
            border: "1px solid transparent",
            transition: "all .125s linear",
            alignItems: "center",
            borderColor: "primary",
            opacity: 1,
            fontWeight: 500,
            "&:not(:disabled):hover": {
                bg: "background",
                borderColor: "primary",
                cursor: "pointer",
                opacity: 0.7
            },
            "&:disabled": {
                cursor: "not-allowed",
                opacity: 0.3
            }
        },
        secondary: {
            display: "flex",
            color: "heading",
            background: (theme2)=>{
                var ref2;
                return (ref2 = theme2.colors) === null || ref2 === void 0 ? void 0 : ref2.backgroundGradient;
            },
            border: "1px solid transparent",
            transition: "all .125s linear",
            alignItems: "center",
            borderColor: "heading",
            opacity: 1,
            fontWeight: 500,
            "&:not(:disabled):hover": {
                bg: "background",
                cursor: "pointer",
                opacity: 0.7
            },
            "&:disabled": {
                cursor: "not-allowed",
                opacity: 0.3
            }
        },
        special: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "heading",
            transform: "perspective(1px) translateZ(0)",
            position: "relative",
            background: "linear-gradient(45deg, rgb(48, 114, 180, .7), grey)",
            borderRadius: ".4rem",
            boxShadow: "0 0 5px 2px #00000054",
            fontSize: "1.6rem",
            padding: "1.2rem 3.2rem",
            textTransform: "capitalize",
            fontWeight: 500,
            textAlign: "center",
            transition: "all .125s linear",
            "&:not(:disabled):hover": {
                background: "linear-gradient(225deg, rgb(48, 114, 180, .7), grey)",
                cursor: "pointer"
            },
            "&:disabled": {
                cursor: "not-allowed",
                opacity: 0.3
            }
        },
        resetted: {
            display: "flex",
            background: "none" /*essential*/ ,
            border: "none" /*essential*/ ,
            padding: "0" /*essential*/ ,
            font: "inherit" /*important as otherwise the text will look slightly different*/ ,
            color: "inherit" /*if you want the span the same colour as the rest of the sentence*/ ,
            cursor: "pointer" /*make sure you add this, but if you really want it to behave like a span you would leave this out*/ ,
            transition: "all .125s linear",
            "&:not(:disabled):hover": {
                cursor: "pointer",
                opacity: 0.7
            },
            "&:disabled": {
                cursor: "not-allowed",
                opacity: 0.3
            }
        }
    },
    lineHeights: {
        body: 1.45
    },
    text: {
        totalswines: {
            marginTop: "5px",
            color: "heading",
            lineHeight: "body",
            fontSize: "3.2rem",
            fontFamily: 'hey-haters, AvertaStd-Bold, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 900
        },
        totalpercentage: {
            marginTop: "5px",
            marginBottom: "15px",
            background: "-webkit-linear-gradient(#FCDAD4, #75A69C); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
            lineHeight: "body",
            fontSize: "4.2rem",
            fontFamily: 'hey-haters, AvertaStd-Bold, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 900
        },
        heading: {
            color: "heading",
            lineHeight: "body",
            fontSize: "2.2rem",
            fontFamily: 'hey-haters, AvertaStd-Bold, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 900
        },
        headingsolswinesearn: {
            color: "heading",
            background: "-webkit-linear-gradient(#FCDAD4, #75A69C); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
            lineHeight: "body",
            fontSize: "4rem",
            fontFamily: 'hey-haters, AvertaStd-Bold, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 900
        },
        headingSpecial: {
            color: "heading",
            lineHeight: "body",
            fontSize: "1.9rem",
            fontFamily: 'PressStart2P-Regular, monospace, AvertaStd-Bold, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 900
        },
        headingSpecialbuildtable: {
            fontSize: "2rem",
            fontFamily: 'hey-haters, monospace, AvertaStd-Bold, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
        },
        headingSpecialheyhaters: {
            fontFamily: 'hey-haters, monospace, AvertaStd-Bold, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
        },
        headingSpecialfarmerstats: {
            fontFamily: 'hey-haters, monospace, AvertaStd-Bold, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontSize: "1.8rem"
        },
        heading2: {
            color: "heading",
            lineHeight: "body",
            fontSize: "1.9rem",
            fontFamily: "heading",
            fontWeight: 600
        },
        heading3inithome: {
            color: "heading",
            lineHeight: "body",
            fontSize: "1.8rem",
            fontWeight: 600
        },
        heading3: {
            color: "heading",
            lineHeight: "body",
            fontSize: "1.7rem",
            fontWeight: 600
        },
        heading4: {
            color: "heading",
            lineHeight: "body",
            fontSize: "1.6rem",
            fontWeight: 600
        },
        base: {
            color: "text",
            lineHeight: "body",
            fontSize: "1.4rem"
        },
        small: {
            color: "text",
            lineHeight: "body",
            fontSize: "1.2rem",
            fontFamily: "hey-haters"
        },
        smallloading: {
            color: "text",
            lineHeight: "body",
            fontSize: "1.2rem",
            fontFamily: "hey-haters"
        },
        xsmall: {
            color: "text",
            lineHeight: "body",
            fontSize: "1rem"
        }
    },
    styles: {
        ...preset_base.styles,
        root: {
            ...(ref = preset_base.styles) === null || ref === void 0 ? void 0 : ref.root,
            fontSize: "62.5%",
            minHeight: "100vh",
            body: {
                /** Default text styles */ fontSize: "1.4rem",
                fontFamily: 'hey-haters, AvertaStd-Regular, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                lineHeight: 1.45,
                minHeight: "100vh",
                color: "text",
                backgroundColor: "background",
                transition: "all .125s linear"
            },
            img: {
                maxWidth: "100%",
                height: "auto"
            },
            p: {
                margin: 0
            },
            a: {
                transition: "all .125s linear",
                color: "text",
                "&:hover": {
                    cursor: "pointer",
                    color: "primary"
                },
                "&:-webkit-any-link": {
                    color: "heading",
                    textDecoration: "none",
                    transition: "all .125s linear",
                    "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underline",
                        opacity: 0.8
                    }
                }
            },
            ul: {
                paddingInlineStart: 0
            },
            ".slick-dots": {
                "li button::before": {
                    color: "text"
                },
                "li.slick-active button::before": {
                    color: "text"
                }
            },
            ...reactTabsStyles
        },
        spinnerSmall: {
            size: "1.2rem!important"
        }
    }
};
/* harmony default export */ const styles_theme = (theme);

;// CONCATENATED MODULE: ./pages/_app.tsx






// import "nprogress/nprogress.css" //styles of nprogress
// import "normalize.css/normalize.css"

// @ts-ignore


const WalletProvider = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "../components/WalletProvider/WalletProvider"
        ]
    },
    ssr: false
});
function App(props) {
    const { Component , pageProps  } = props;
    // const [colorMode, setColorMode] = useColorMode()
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(external_theme_ui_.ThemeProvider, {
        theme: styles_theme,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("title", {
                        children: "Swine Missions"
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("meta", {
                        name: "description",
                        content: "Send your SolSwine on a mission to earn $COINK!"
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("link", {
                        href: "/fonts/fonts.css",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(WalletProvider, {
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (external_next_ga_default()("UA-210303881-1", router["default"])(App));


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8800:
/***/ ((module) => {

module.exports = require("theme-ui");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,3,152], () => (__webpack_exec__(3397)));
module.exports = __webpack_exports__;

})();