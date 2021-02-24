import { FiTwitter as Twitter } from "react-icons/fi";
import { FiFacebook as Facebook } from "react-icons/fi";
import { FiMail as Email } from "react-icons/fi";
import { css } from "@emotion/react";
import { textStyle } from "@shared/reusableStyles";
import Footer from "@components/footer";
import EmailComponent from "./../components/emailComponent/index";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const iconStyle = css`
  display: flex;
  flex-direction: row;
  font-size: 7ch;
  margin: 0 auto;
  h1 {
    margin: 0.2ch;
  }
`;
const buttonStyle = css`
  border: none;
  text-decoration: none;
  text-align: center;
`;

export const contact = () => {
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
      <section>
        <h1 css={textStyle}>U can contact me on my social media or email</h1>
      </section>
      <EmailComponent />
      <ul css={iconStyle}>
        <h1>
          <Twitter style={{ stroke: "url(#gradient)" }} />
        </h1>
        <h1>
          <Facebook style={{ stroke: "url(#gradient)" }} />
        </h1>
        <h1>
          <Email
            style={{ stroke: "url(#gradient)" }}
            onClick={() => {
              alert("clicked");
            }}
          />
        </h1>
      </ul>
      <Footer />
    </div>
  );
};

export default contact;
