import { css } from "@emotion/react";

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const navStyle = css`
  display: flex;
  width: 60%;
  font-family: "Rajdhani", sans-serif;
  max-width: var(--page-width);
  color: var(--text-color);
  margin: 0 1ch;
  padding: 0.5em 1em;
  position: relative;
  justify-content: space-between;
  font-size: 5rem;
  background-color: var(--page-background);

  a:hover,
  a:focus {
    background: linear-gradient(
    to left bottom,
    #b80052,
    #c80071,
    #d30e79,
    #df1981,
    #ea2289,
    #f42b78,
    #fa3868,
    #fd4858,
    #fd5949
  );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export { container, navStyle };
