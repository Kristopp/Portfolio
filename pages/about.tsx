import { css } from "@emotion/react";

const container = css`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  justify-content: space-around;
  align-items: center;
  padding: 0 2ch;
`;

const textStyle = css`
  margin: 0 auto;
  text-align: center;
  font-size: 5ch;
  font-weight: 200;
  > p + p {
    margin-top: 1ch;
  }
`;

const About = () => {
  //meta tags and about text
  return (
    <div css={container}>
      <section css={textStyle}>
        <p >
          Hello, I am a self-taught developer who is looking for a junior front
          end or full stack position my main tools are react,typescript next.js
          node. I use Figma as my design tool
        </p>
        <p>
          Im working full-time in another profession, I still need to pay my
          bills :D ,most of my free time learning and working on my projects to
          get better every day
        </p>
      </section>
    </div>
  );
};

export default About;
