import { css } from "@emotion/react";

const linkStyle = css`
  width: 90%;
  max-width: var(--page-width);
  color: var(--text-color);
  margin: 0 auto;
  top: -2em;
  padding: 0.5em 0.5em;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  font-size: 1.5rem;
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
const textStyle = css`
  margin: 0 auto;
  text-align: center;
  font-weight: 200;
  font-family: "Rajdhani", sans-serif;
  > p + p {
    margin-top: 1ch;
  }
`;
const gradientTextStyle = css`
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
`;
const containerFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const containerGridMobile = css`
  height: 100vh;
  max-width: 480px;
  display: grid;
  grid-template-columns: auto 80% auto;
  grid-template-rows: 40% auto auto auto;
`;

export { containerFlex, linkStyle, textStyle, gradientTextStyle, containerGridMobile };
