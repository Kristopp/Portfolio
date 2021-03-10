import { ReactNode } from "react";

import Navigation from "@components/navigation";
import Welcome from "@components/welcomeComponent";
import Footer from "@components/footer";
import SEO, { SEOProps } from "../../components/seo/index";
import { container } from "./style";


type PageProps = {
  /* deconstructed props */
  meta?: SEOProps;
  children?: ReactNode;
};

const GeneralPage = ({ meta, children }: PageProps) => {
  return (
    <div>
      <SEO {...meta} />
      <main css={container}>
        <Welcome />
        <Navigation />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default GeneralPage;
