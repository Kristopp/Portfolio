import { css } from "@emotion/react";
import Footer from "@components/footer";
import { FiFigma as Figma } from "react-icons/fi";
import { DiReact as ReactIcon } from "react-icons/di";
import { SiTypescript as TypeScriptIcon } from "react-icons/si";
import { SiNextDotJs as NextJsIcon } from "react-icons/si";
import { textStyle } from "@shared/reusableStyles";

const container = css`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  align-items: center;
  justify-content: center;
  padding: 0 4ch;
  min-height: 100vh;
`;
const fontStyle = css`
  font-size: 5ch;
  font-weight: 200;
  font-family: "Rajdhani", sans-serif;
  text-align: center;
`;

const About = () => {
  //meta tags and about text
  return (
    <div css={container}>
          <svg width="0" height="0">
        <radialGradient id="gradient" r="150%" cx="30%" cy="107%">
          <stop stopColor="#790909" offset="0.05" />
          <stop stopColor="#fd5949" offset="0.45" />
          <stop stopColor="#d6249f" offset="0.6" />
          <stop stopColor="#790909" offset="0.9" />
        </radialGradient>
      </svg>
      <section></section>
      <section css={fontStyle}>
        <p>
          Hello, I am a self-taught developer who is looking for a junior front
          end or full stack position my main tools are react 
           <ReactIcon style={{ fill: "url(#gradient)" }}/>,typescript{" "}
          <TypeScriptIcon style={{ fill: "url(#gradient)" }}/> next.js
          <NextJsIcon style={{ fill: "url(#gradient)" }}/> node. I use Figma
          <Figma style={{ stroke: "url(#gradient)" }} /> as my design tool
        </p>
        <p>
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
