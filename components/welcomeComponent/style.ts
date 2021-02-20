import { css } from "@emotion/react";

const textContainer = css`
  display: flex;
  flex-direction: column;
  text-align: justify; /* For Edge */
  /* text-align-last: justify; */
  max-width: 40%;
`;

const fontStyle = css`
  font-size: 4ch;
  font-weight: 200;
  font-family: "Rajdhani", sans-serif;
`;
export { fontStyle, textContainer };
