import React from "react";
import { BiCopyright as Copy } from "react-icons/bi";
import { container } from "@shared/reusableStyles";
import { icon } from "./style";

const footPrint = () => {
  return (
    <div css={container}>
      <Copy css={icon} />
    </div>
  );
};

export default footPrint;
