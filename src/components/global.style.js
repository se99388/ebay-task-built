import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html{
        box-sizing:border-box;
    }
    
    *, ::after, ::before {
        box-sizing:inherit
    }

    /* reset */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, font, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
    }

    body {
        font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-style: normal;
        color: #333;
        -webkit-font-smoothing: subpixel-antialiased;
        padding: 20px;
    }

    header {
        margin-bottom: 20px;
    }

    button {
        border: 0;
        outline: 0;
        user-select: none;
        background:transparent;

        ::-moz-focus-inner {
            border: 0;
        }
        cursor: pointer;
    }
`;

export default GlobalStyle;
