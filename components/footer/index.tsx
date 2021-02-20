import Logo from "@components/Logo";
import CopyLogo from "@components/footPrint";
import { container, footerLogos } from "./styles";

const Footer = () => {
  return (
    <div css={container}>
      
      <div css={footerLogos}>
        <CopyLogo />
        <Logo style={{ fill: "url(#gradient)" }} />
      </div>
    </div>
  );
};

export default Footer;
