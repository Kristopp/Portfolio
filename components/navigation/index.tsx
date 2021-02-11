import { container, navStyle } from "./styles";

export const Navigation = () => {
  return (
    <nav css={navStyle}>
      <a aria-label="back to home">home</a>
      <a>work</a>
      <a>Git repo</a>
      <a>contact</a>
      <a>about</a>
    </nav>
  );
};

export default Navigation;
