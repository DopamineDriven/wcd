"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = exports.theme = void 0;
const styled_components_1 = require("styled-components");
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
exports.GlobalStyle = styled_components_1.createGlobalStyle `
    body {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.basic};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::after,
    *::before { box-sizing: border-box; }

    h1, h2, h3, h4, h5, h6 { margin: 0; }
    a { color: ${({ theme }) => theme.colors.blue} }
    a:hover { color: ${({ theme }) => theme.colors.pink} }

    .main {
        padding: 70px 0 20px;
        min-height: calc(100vh - 50px);
    }
`;
//# sourceMappingURL=index.js.map