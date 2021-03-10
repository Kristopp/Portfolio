import { css } from "@emotion/react";
/* import { textStyle } from '@shared/reusableStyles'; */

const container = css`
  height: 100%;
  width: 100vh;
  overflow-y: auto;
  position: absolute;
  text-align: left;
  font-family: "Rajdhani", sans-serif;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent;
  }
  ul {
    list-style: none;
    font-size: 1.5rem;
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
  p {
  }
`;

const cardStyle = css`
  display: flex;
  margin: 20px;
  padding: 0 10px 10px 10px;
  width: 50ch;
  background-color: rgba(17, 17, 17, 0.55);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  :hover {
    transform: translate(-50%, -50%);
  }
`;

export { container, cardStyle };
