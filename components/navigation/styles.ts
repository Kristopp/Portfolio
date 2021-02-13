import { css } from "@emotion/react";

const container = css`
  margin: 0.3em;
`;
const navStyle = css`
  display: flex;
  width: 70%;
  max-width: var(--page-width);
  color: var(--text-color);
  margin: 0 1ch;
  padding: 0.5em 0.5em;
  position: relative;
  justify-content: space-between;
  font-size: 3rem;
  background-color: var(--page-background);

  a:hover,
  a:focus {
    color: var(--color-accent);
  }
`;

export { container, navStyle };
