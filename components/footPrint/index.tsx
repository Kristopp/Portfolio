import React from "react";
import { BiCopyright as Copy } from "react-icons/bi";
import { containerFlex } from "@shared/reusableStyles";
import { icon } from "./style";

const footPrint = () => {
  return (
    <div css={containerFlex}>
        <svg width="0" height="0">
        <radialGradient id="gradient" r="150%" cx="30%" cy="107%">
          <stop stopColor="#790909" offset="0.05" />
          <stop stopColor="#fd5949" offset="0.45" />
          <stop stopColor="#d6249f" offset="0.6" />
          <stop stopColor="#790909" offset="0.9" />
        </radialGradient>
      </svg>
      <Copy style={{ fill: "url(#gradient)" }} />
    </div>
  );
};

export default footPrint;
