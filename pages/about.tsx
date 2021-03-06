import { css } from "@emotion/react";
import Footer from "@components/footer";
import { FiFigma as Figma } from "react-icons/fi";
import { DiReact as ReactIcon } from "react-icons/di";
import { SiTypescript as TypeScriptIcon } from "react-icons/si";
import { SiNextDotJs as NextJsIcon } from "react-icons/si";
import { FaNodeJs as NodeIcon } from "react-icons/fa";
import { DiMongodb as MongoIcon } from "react-icons/di";

const container = css`
  display: flex;
    align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  padding: 0 4ch;
  margin: 0 auto;
  min-height: 100vh;
`;
const fontStyle = css`
  font-size: 5ch;
  font-weight: 200;
  font-family: "Rajdhani", sans-serif;
  text-align: center;
`;
const listSytle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    /*  margin: 0.3ch; */
    animation: animate__fadeIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
  }
  span {
    font-size: 5ch;
  }
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
      <section css={fontStyle}>
        <p>
          Hello, I am a self-taught developer who is looking for a junior front
          end or full stack position tools i use
        </p>
        <ul css={listSytle}>
          <li>
            React
            <span>
              <ReactIcon style={{ fill: "url(#gradient)" }} />
            </span>
          </li>
          <li>
            Typescript
            <span>
              <TypeScriptIcon style={{ fill: "url(#gradient)" }} />
            </span>
          </li>
          <li>
            Next
            <span>
              <NextJsIcon style={{ fill: "url(#gradient)" }} />
            </span>
          </li>
          <li>
            Node
            <span>
              <NodeIcon style={{ fill: "url(#gradient)" }} />
            </span>
          </li>
          <li>
            MongoDb
            <span>
              <MongoIcon style={{ fill: "url(#gradient)" }} />
            </span>
          </li>
          <li>
            Figma
            <span>
              <Figma style={{ stroke: "url(#gradient)" }} />
            </span>
          </li>
        </ul>
        <p>
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
