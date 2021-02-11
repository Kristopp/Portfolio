import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --page-width: 1000px;
    --page-text: #fff;
    --background-accent: rgb(34, 34, 34);
    --color-text-invert: rgb(240, 240, 240);
    --color-accent: rgb(200, 200, 200);
    --reading-width: 60ch;
  }

  html,
  body {
    height: 100vh;
    padding: 10;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif,
      Italianno;
    color: var(--page-text);
    background-image: url("/desktoptemplate1920.png");
    background-size: cover;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;
