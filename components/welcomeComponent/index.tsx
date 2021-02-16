import React from "react";
import { fontStyle, textContainer } from "./style";
import { container } from "@shared/reusableStyles";

const WelcomeText = () => {
  return (
    <div css={container}>
      <section css={textContainer}>
        <h1 css={fontStyle}>
          Hello i am Kristo i am looking for junior front end or junior full stack
          posistion.
        </h1>
        <h1>here is my work contacts and resource i use to learn</h1>
      </section>
    </div>
  );
};

export default WelcomeText;
