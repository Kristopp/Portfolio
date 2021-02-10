import { AppProps } from "next/app"
import { Global } from "@emotion/react";
import { globalStyles } from "../shared/globalCss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
