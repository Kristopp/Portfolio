import { ReactNode } from "react";
import Header from "@components/header";
import Navigation from "@components/navigation";
import Footer from "@components/footer";
import SEO, { SEOProps } from "../../components/seo/index";

type PageProps = {
  /* deconstructed props */
  meta?: SEOProps;
  children?: ReactNode;
};

const GeneralPage = ({ meta, children }: PageProps) => {
  return (
    <div>
     {/*  <SEO {...meta}> */}
        <main /* css={mainContainer} */>
          <Header />
          <Navigation />
          {children}
          <Footer />
        </main>
      {/* </SEO> */}
    </div>
  );
};

export default GeneralPage;
