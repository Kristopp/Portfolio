import { css } from "@emotion/react";

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const navStyle = css`
  display: flex;
  width: 100%;
  font-family: 'Rajdhani', sans-serif;
  max-width: var(--page-width);
  color: var(--text-color);
  margin: 0 1ch;
  padding: 0.5em 0.5em;
  position: relative;
  justify-content: space-between;
  font-size: 5rem;
  background-color: var(--page-background);

  a:hover,
  a:focus {
    color: var(--color-accent);
  }
`;

export { container, navStyle };
