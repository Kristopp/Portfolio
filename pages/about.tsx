import { css } from "@emotion/react";
import Footer from "@components/footer";

import { textStyle } from "@shared/reusableStyles";

const container = css`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  align-items: center;
  justify-content: center;
  padding: 0 2ch;
  min-height: 100vh;
`;
const textFormat = css``;

const About = () => {
  //meta tags and about text
  return (
    <div css={container}>
      <section css={textStyle}>
        <p>
          Hello, I am a self-taught developer who is looking for a junior front
          end or full stack position my main tools are react,typescript next.js
          node. I use Figma as my design tool
        </p>
        <p >
          Im working full-time in another profession, I still need to pay my
          bills :D ,most of my free time learning and working on my projects to
          get better every day
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
