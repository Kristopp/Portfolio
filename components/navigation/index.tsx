import { container, navStyle } from "./styles";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav css={navStyle}>
      <Link href="/about" >
      <a>about</a>
      </Link>
      <a>work</a>
      <Link href="/contact">
      <a>contact</a>
      </Link>
    </nav>
  );
};

export default Navigation;
