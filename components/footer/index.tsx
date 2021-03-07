import Logo from "@components/Logo";
import CopyLogo from "@components/footPrint";
import { container, footerLogos } from "./styles";

const Footer = () => {
  return (
    <div css={container}>
      
      <div css={footerLogos}>
        <CopyLogo />
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
