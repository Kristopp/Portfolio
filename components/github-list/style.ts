import { css } from "@emotion/react";
/* import { textStyle } from '@shared/reusableStyles'; */

const container = css`
  height: 100%;
  overflow: auto;
  position: absolute;
  text-align: left;
  font-weight: 200;
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

const textStyle = css``;

export { container };
