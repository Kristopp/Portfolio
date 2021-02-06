import { Global } from "@emotion/react";
import { globalStyles } from "./../shared/globalCss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
