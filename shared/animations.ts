import { css, keyframes } from "@emotion/react";
import anime from "animejs";

const bounce = keyframes`
  0% {
    opacity: 0;
    text-shadow: 0px 0px 40px #fff;
    -webkit-transform: scale(1.3);
  }
  50% {
    opacity: 0.5;
    text-shadow: 0px 0px 10px #fff;
    -webkit-transform: scale(1.1);
  }
  100% {
    opacity: 1;
    text-shadow: 0px 0px 1px #fff;
    -webkit-transform: scale(1);
  }
  }
`;


export { bounce };
