import React from "react";
import { fontStyle, textContainer } from "./style";
import { container } from "@shared/reusableStyles";

const WelcomeText = () => {
  return (
    <div  css={container}>
      <section css={textContainer}>
        <section css={fontStyle}>
          <h1 >
            Hello i am Kristo i am looking for junior front end or junior full
            stack posistion. here is my work contacts and resource i use to
            learn.
          </h1>
        </section>
      </section>
    </div>
  );
};

export default WelcomeText;
