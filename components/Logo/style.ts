import { css } from "@emotion/react";

const logoStyle = css`
  display: flex;
  width: 0;
  height: 0;
  margin-left: 6ch;
  font-family: Italianno;
  font-style: normal;
  font-weight: normal;
  font-size: 10em;
  align-items: center;
  text-align: center;
  letter-spacing: -0.185em;
  .text {
    text-transform: uppercase;
    background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font: {
      size: 20vw;
      family: $font;
    }
  }
`;

export { logoStyle };
