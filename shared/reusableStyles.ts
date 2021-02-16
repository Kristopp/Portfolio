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
    color: var(--color-accent);
  }
`;
const textStyle = css`
  margin: 0 auto;
  text-align: center;
  font-weight: 200;
  font-family: 'Rajdhani', sans-serif;
  > p + p {
    margin-top: 1ch;
  }
`;
const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { container, linkStyle, textStyle };
