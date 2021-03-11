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
  height: 100%;
  width: auto;
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
  margin: 20px 0 0 0;
  padding: 0 0 10px 30px;
  width: 50em;
  background-color: rgba(17, 17, 17, 0.3);
  background-clip: padding-box; /* !importanté */
  border: solid $border transparent; /* !importanté */
  border-radius: 1em;

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
    font-size: 3ch;
  }
`;

const linkStyle = css`
cursor: pointer;
font-size: 3ch;
`;

export { container, cardStyle, row,linkStyle };
