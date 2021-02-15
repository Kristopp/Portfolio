import { FiTwitter as Twitter } from "react-icons/fi";
import { FiFacebook as Facebook } from "react-icons/fi";
import { FiGithub as Github } from "react-icons/fi";
import { FiMail as Email } from "react-icons/fi";
import { css } from "@emotion/react";

const container = css`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  height: 100%;
`;
const iconStyle = css`
  display: flex;
  flex-direction: row;
  font-size: 3em;
  h1 {
    margin: 1ch;
  }
`;

export const contact = () => {
  return (
    <div css={container}>
      <svg width="0" height="0">
        <radialGradient id="gradient" r="150%" cx="30%" cy="107%">
          <stop stop-color="#790909" offset="0.05" />
          <stop stop-color="#fd5949" offset="0.45" />
          <stop stop-color="#d6249f" offset="0.6" />
          <stop stop-color="#790909" offset="0.9" />
        </radialGradient>
      </svg>
      <section>
        <p>U can contact me on my social media or email</p>
      </section>
      <ul css={iconStyle}>
        <h1>
          <Twitter style={{ stroke: "url(#gradient)" }} />
        </h1>
        <h1>
          <Facebook style={{ stroke: "url(#gradient)" }} />
        </h1>
        <h1>
          <Github style={{ stroke: "url(#gradient)" }} />
        </h1>
        <h1>
          <Email style={{ stroke: "url(#gradient)" }} />
        </h1>
      </ul>
    </div>
  );
};

export default contact;
