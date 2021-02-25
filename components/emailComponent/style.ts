import { css } from "@emotion/react";

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px black;
`;

const inputContainer = css`
  display: flex;
  flex-direction: column;
  margin: 0.2ch auto;
  input {
    height: 4ch;
    width: 50ch;
    margin: 5px;
  }
  .messageBox {
    height: 20ch;
  }
`;
const inputStyle = css``;
const messageInputStyle = css``;

export { container, inputContainer, inputStyle, messageInputStyle };
