import { css } from "@mui/material/styles";

export const globalStyles = css`
  @font-face {
    font-family: "Satoshi-Variable";
    src: url("/fonts/Satoshi-Variable.woff2") format("woff2"),
      url("/fonts/Satoshi-Variable.woff") format("woff"),
      url("/fonts/Satoshi-Variable.ttf") format("truetype");
    font-weight: 300 900;
    font-display: swap;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: "Satoshi-Variable", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    min-height: 100vh;
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  :root {
    body {
      color: #fff;
      background-color: #121212;
    }
  }

  [data-theme="dark"],
  [data-theme="dark"] body {
    color: #fff;
    background-color: #121212;
  }

  iframe {
    color-scheme: light;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: inherit !important;
  }
`;
