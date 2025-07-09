(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/galery/page.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "anterior": "page-module__i9DUBW__anterior",
  "botaoContainer": "page-module__i9DUBW__botaoContainer",
  "botaoFechar": "page-module__i9DUBW__botaoFechar",
  "botaoNavegacao": "page-module__i9DUBW__botaoNavegacao",
  "botaoVerMais": "page-module__i9DUBW__botaoVerMais",
  "galeriaContainer": "page-module__i9DUBW__galeriaContainer",
  "galeriaWrapper": "page-module__i9DUBW__galeriaWrapper",
  "imageCard": "page-module__i9DUBW__imageCard",
  "imageGrid": "page-module__i9DUBW__imageGrid",
  "imagem": "page-module__i9DUBW__imagem",
  "imagemModal": "page-module__i9DUBW__imagemModal",
  "indicadorPosicao": "page-module__i9DUBW__indicadorPosicao",
  "modalContent": "page-module__i9DUBW__modalContent",
  "modalOverlay": "page-module__i9DUBW__modalOverlay",
  "proximo": "page-module__i9DUBW__proximo",
  "titulo": "page-module__i9DUBW__titulo",
  "tituloBackground": "page-module__i9DUBW__tituloBackground",
  "tituloWrapper": "page-module__i9DUBW__tituloWrapper",
});
}}),
"[next]/internal/font/google/bebas_neue_ae639178.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "bebas_neue_ae639178-module__EaMOaq__className",
});
}}),
"[next]/internal/font/google/bebas_neue_ae639178.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bebas_neue_ae639178$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/bebas_neue_ae639178.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bebas_neue_ae639178$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Bebas Neue', 'Bebas Neue Fallback'",
        fontWeight: 400,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bebas_neue_ae639178$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bebas_neue_ae639178$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/app/components/galery/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GaleriaDeResultadosComModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/galery/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bebas_neue_ae639178$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/bebas_neue_ae639178.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function GaleriaDeResultadosComModal({ imagens }) {
    _s();
    const [quantidadeExibida, setQuantidadeExibida] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(6);
    const [imagemSelecionada, setImagemSelecionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [indexAtual, setIndexAtual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const modalContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imagensExibidas = Array.isArray(imagens) ? imagens.slice(0, quantidadeExibida) : [];
    const carregarMais = ()=>{
        setQuantidadeExibida((prev)=>prev + 6);
    };
    const abrirModal = (imagem, index)=>{
        setImagemSelecionada(imagem);
        setIndexAtual(index);
        document.body.style.overflow = "hidden";
    };
    const fecharModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GaleriaDeResultadosComModal.useCallback[fecharModal]": ()=>{
            setImagemSelecionada(null);
            document.body.style.overflow = "";
        }
    }["GaleriaDeResultadosComModal.useCallback[fecharModal]"], []);
    const proximaImagem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GaleriaDeResultadosComModal.useCallback[proximaImagem]": ()=>{
            if (!Array.isArray(imagens) || imagens.length === 0) return;
            const novoIndex = (indexAtual + 1) % imagens.length;
            setIndexAtual(novoIndex);
            setImagemSelecionada(imagens[novoIndex]);
        }
    }["GaleriaDeResultadosComModal.useCallback[proximaImagem]"], [
        indexAtual,
        imagens
    ]);
    const imagemAnterior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GaleriaDeResultadosComModal.useCallback[imagemAnterior]": ()=>{
            if (!Array.isArray(imagens) || imagens.length === 0) return;
            const novoIndex = (indexAtual - 1 + imagens.length) % imagens.length;
            setIndexAtual(novoIndex);
            setImagemSelecionada(imagens[novoIndex]);
        }
    }["GaleriaDeResultadosComModal.useCallback[imagemAnterior]"], [
        indexAtual,
        imagens
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GaleriaDeResultadosComModal.useEffect": ()=>{
            const handleKeyDown = {
                "GaleriaDeResultadosComModal.useEffect.handleKeyDown": (e)=>{
                    if (!imagemSelecionada) return;
                    if (e.key === "ArrowRight") {
                        proximaImagem();
                    } else if (e.key === "ArrowLeft") {
                        imagemAnterior();
                    } else if (e.key === "Escape") {
                        fecharModal();
                    }
                }
            }["GaleriaDeResultadosComModal.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "GaleriaDeResultadosComModal.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["GaleriaDeResultadosComModal.useEffect"];
        }
    }["GaleriaDeResultadosComModal.useEffect"], [
        imagemSelecionada,
        proximaImagem,
        imagemAnterior,
        fecharModal
    ]);
    const handleWheel = (e)=>{
        if (!modalContentRef.current) return;
        if (e.deltaY !== 0) {
            e.preventDefault();
            if (e.deltaY > 0) {
                proximaImagem();
            } else {
                imagemAnterior();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galeriaContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galeriaWrapper,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tituloWrapper
                }, void 0, false, {
                    fileName: "[project]/src/app/components/galery/page.js",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageGrid,
                    children: imagensExibidas.map((imagem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageCard,
                            onClick: ()=>abrirModal(imagem, index),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: imagem.url,
                                alt: imagem.alt || `Resultado ${index + 1}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagem,
                                width: 500,
                                height: 500,
                                layout: "responsive"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/galery/page.js",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/components/galery/page.js",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/galery/page.js",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                Array.isArray(imagens) && imagens.length > quantidadeExibida && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botaoContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: carregarMais,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botaoVerMais,
                        children: "Ver Mais"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/galery/page.js",
                        lineNumber: 113,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/galery/page.js",
                    lineNumber: 112,
                    columnNumber: 11
                }, this),
                imagemSelecionada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalOverlay,
                    onClick: fecharModal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalContent,
                        onClick: (e)=>e.stopPropagation(),
                        ref: modalContentRef,
                        onWheel: handleWheel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botaoFechar,
                                onClick: fecharModal,
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/galery/page.js",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botaoNavegacao} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].anterior}`,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    imagemAnterior();
                                },
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/galery/page.js",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: imagemSelecionada.url,
                                alt: imagemSelecionada.alt || "Imagem selecionada",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagemModal,
                                width: 1000,
                                height: 800
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/galery/page.js",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botaoNavegacao} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].proximo}`,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    proximaImagem();
                                },
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/galery/page.js",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$galery$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].indicadorPosicao,
                                children: [
                                    indexAtual + 1,
                                    " / ",
                                    Array.isArray(imagens) ? imagens.length : 0
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/galery/page.js",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/galery/page.js",
                        lineNumber: 122,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/galery/page.js",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/galery/page.js",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/galery/page.js",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(GaleriaDeResultadosComModal, "jZw/IoZhr8c9xIkOEMgcUO4o+hI=");
_c = GaleriaDeResultadosComModal;
var _c;
__turbopack_context__.k.register(_c, "GaleriaDeResultadosComModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__74e7f1b0._.js.map