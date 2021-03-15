import React from "react";
import { fontStyle, textContainer, container } from "./style";
import { gradientTextStyle} from "@shared/reusableStyles"

const WelcomeText = () => {
  return (
    <div css={container}>
      <section css={textContainer}>
        <section css={fontStyle}>
          <p>
            Hi my name is <span css={gradientTextStyle}>KRISTO</span>. 
            i am a Web developer who is looking for junior front end or full stack position
          </p>
          <p>
            here is my Git reposetory and more information about me and ways too contact
          </p>
        </section>
      </section>
    </div>
  );
};

export default WelcomeText;
