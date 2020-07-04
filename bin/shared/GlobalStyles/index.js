"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = exports.theme = void 0;
var styled_components_1 = require("styled-components");
exports.theme = {
    fonts: {
        basic: "Helvetica, sans-serif",
        accent: '"Permanent Marker", cursive'
    },
    colors: {
        orange: "#f4ae40",
        blue: "#387af5",
        pink: "#eb57a3"
    }
};
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    body {\n        margin: 0;\n        font-family: ", ";\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    *,\n    *::after,\n    *::before { box-sizing: border-box; }\n\n    h1, h2, h3, h4, h5, h6 { margin: 0; }\n    a { color: ", " }\n    a:hover { color: ", " }\n\n    .main {\n        padding: 70px 0 20px;\n        min-height: calc(100vh - 50px);\n    }\n"], ["\n    body {\n        margin: 0;\n        font-family: ", ";\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    *,\n    *::after,\n    *::before { box-sizing: border-box; }\n\n    h1, h2, h3, h4, h5, h6 { margin: 0; }\n    a { color: ", " }\n    a:hover { color: ", " }\n\n    .main {\n        padding: 70px 0 20px;\n        min-height: calc(100vh - 50px);\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fonts.basic;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.blue;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.pink;
});
var templateObject_1;
//# sourceMappingURL=index.js.map