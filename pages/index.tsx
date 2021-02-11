import Head from "next/head";
import Page from "@layouts/landing-page/generalPage";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italianno&display=swap"
          rel="stylesheet"
        />
        <title>Portfolio</title>
      </Head>
      <Page />
    </div>
  );
}
