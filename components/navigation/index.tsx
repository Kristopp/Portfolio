import React, { useEffect } from "react";
import { navStyle } from "./styles";
import { container } from "@shared/reusableStyles";
import anime from "animejs";
import Link from "next/link";

export const Navigation = () => {
  useEffect(() => {
    anime({
      targets: ".fadeInAnimation",
      keyframes: [
        {translateX: -50, opacity: 0, duration:0},
        {translateX: 0, opacity:1, duration:500},
      ],
      easing: 'linear',
      delay: anime.stagger(100, {start: 0}),
    });
  }, []);

  return (
    <div css={container}>
      <nav css={navStyle}>
        <Link href="/work">
          <a className="fadeInAnimation">git Repo</a>
        </Link>
        <Link href="/about">
          <a className="fadeInAnimation">about</a>
        </Link>
        <Link href="/contact">
          <a className="fadeInAnimation">contact</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
