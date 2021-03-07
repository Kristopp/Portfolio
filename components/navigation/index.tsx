import { navStyle } from "./styles";
import { container } from "@shared/reusableStyles";
import Link from "next/link";
import anime from 'animejs/lib/anime.es.js';

/* anime({
  targets: '.css-selector-demo .el',
  translateX: 250
}); */


export const Navigation = () => {
  return (
    <div css={container} >
      
        <nav className="animation-keyframes-demo .el" css={navStyle}>
          <Link href="/work">
            <a >git Repo</a>
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
