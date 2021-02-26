import { css } from "@emotion/react";

const container = css`
  background-image: linear-gradient(
    to left bottom,
    #790909,
    #900020,
    #a50037,
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
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: solid 2px #790909;
  width: 50ch;
`;

const inputContainer = css`
  display: flex;
  flex-direction: column;
  margin: 0.5ch;
  width: 100%;
  label {
    font-family: "Rajdhani", sans-serif;
    color: var(--page-text);
    margin: 0 5px;
  }
  input {
    border: solid 2px #790909;
    color: var(--page-text);
    background: #343231;
    height: 5ch;

    margin: 5px;
    font-weight: 200;
    font-size: 1rem;
    letter-spacing: 0.08rem;
    border-radius: 10px;
    :hover {
      border: 2px solid red;
      cursor: pointer;
    }
  }
  input:invalid {
    border: 2px solid red;
  }

  textarea {
    height: 20ch;
    margin: 5px;
    color: var(--page-text);
    background: #343231;
    font-weight: 200;
    font-size: 1.2rem;
    letter-spacing: 0.08rem;
    border-radius: 10px;
    border: solid 2px #790909;
    :hover {
      border: 2px solid red;
      cursor: pointer;
    }
  }
  span {
    margin: 5px;
  }
`;
const buttonStyle = css`
  border: solid 2px #790909;
  input:hover {
    border: 2px solid red;
    cursor: pointer;
  }
`;
const messageInputStyle = css``;

export { container, inputContainer, buttonStyle, messageInputStyle };
