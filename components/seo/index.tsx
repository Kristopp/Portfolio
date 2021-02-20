import Head from "next/head";
import { metaData as siteMeta } from "../../config";
//This is meta component that helps with seo
export type SEOProps = {
  title?: string;
  description?: string;
};

const SEO = ({ title, description }: SEOProps) => {
  /*     /* tags for seo */
  const pageTitle = title
    ? `${title} :: ${siteMeta.siteName}`
    : siteMeta.siteName;
  const pageDescription = description ? description : siteMeta.description;
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=ISO-8859-1"
      ></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="og::title" content={title} />
      <meta name="og::description" content={pageDescription} />
    </Head>
  );
};

export default SEO;
