import { css, keyframes } from "@emotion/react";

const floatAnimation = keyframes`
0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.01);
            transform: scale(1.01);
  }
}
`;
const container = css`
  height: 100vh;
  overflow-y: auto;
  width: 480px;
  position: absolute;
  font-family: "Rajdhani", sans-serif;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent;
  }
  ul {
    list-style: none;
    font-size: 1.4rem;
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
  }
`;

const cardStyle = css`
  display: flex;
  width: 90%;
  margin-bottom: 1.3ch;
  background-color: rgba(17, 17, 17, 0.3);
  background-clip: padding-box; /* !importanté */
  border: solid $border transparent; /* !importanté */
  border-radius: 0.5em;

  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.5);
  &:before {
    margin: -$border; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(to right, red, orange);
  }
  :hover {
    animation: ${floatAnimation} 0.5s forwards;
  }
  p {
    margin-right: 1ch;
  }
`;
const row = css`
  display: flex;
  flex-direction: row;
  .languageStyleAndDate {
    font-size: 2ch;
  }
`;

const linkStyle = css`
  cursor: pointer;
  font-size: 2.1ch;
`;

export { container, cardStyle, row, linkStyle };
