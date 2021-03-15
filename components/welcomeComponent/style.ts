import { css } from "@emotion/react";

const container = css`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  /* justify-self: center; */
`;
const textContainer = css`
  display: flex;
  flex-direction: column;
  text-align: justify; /* For Edge */
  /* text-align-last: justify; */
 /*  max-width: 40%; */
`;

const fontStyle = css`
  font-size: 2.5ch;
  font-family: "Rajdhani", sans-serif;
`;
export { fontStyle, textContainer, container };
