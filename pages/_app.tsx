import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>საქართველოს ბანკი - გზა სულ არის, არ გაჩერდე</title>
        <link
          rel="icon"
          type="image/png"
          href="https://bankofgeorgia.ge/uncompiled-unbundled/assets/favicon.png"
        />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
