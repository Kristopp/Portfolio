import { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/react";
import { globalStyles } from "../shared/globalCss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italianno&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani&display=swap"
          rel="stylesheet"
        />
        <title>Portfolio</title>
      </Head>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
