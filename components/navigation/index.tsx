import React, { useEffect } from "react";
import { navStyle, container } from "./styles";
import anime from "animejs";
import Link from "next/link";

export const Navigation = () => {
  useEffect(() => {
    anime({
      targets: ".fadeInAnimation",
      keyframes: [
        {translateX: -1000, opacity: 0, duration:0},
        {translateX: 100, opacity:1, duration:300},
        {translateX: 0, opacity:1, duration:200},
      ],
      easing: 'linear',
      delay: anime.stagger(200, {start: 200}),
    });
  }, []);

  return (
    <div css={container}>
      <nav css={navStyle}>
        <Link href="/work">
          <a className="fadeInAnimation">github</a>
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
