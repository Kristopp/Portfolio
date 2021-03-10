import React, { useEffect } from "react";
import { navStyle } from "./styles";
import { container } from "@shared/reusableStyles";
import anime from "animejs";
import Link from "next/link";

export const Navigation = () => {
  useEffect(() => {
    anime({
      targets: ".fadeInAnimation",
      // Properties
      translateY: 100,
      opacity: [0, 1],
      
      // Property Parameters
      duration: 2000,
      delay: 200,
      easing: 'easeInOutQuad',
      // Animation Parameters
      
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
