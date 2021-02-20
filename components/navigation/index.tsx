import {  navStyle } from "./styles";
import { container } from "@shared/reusableStyles";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div css={container}>
      <nav css={navStyle}>
        <Link href="/work">
        <a>work</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/contact">
          <a>contact</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
