import { css, keyframes } from "@emotion/react";
import { bounce } from "@shared/animations";

const container = css`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: center;
`;
const navStyle = css`
  display: flex;
  flex-direction: column;
  font-family: "Rajdhani", sans-serif;
  width: 100%;
  margin: 0 auto;
  font-size: 4rem;
  cursor: pointer;
  a {
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

export { container, navStyle, bounce };
