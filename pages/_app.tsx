import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { isServer } from 'shared/is-server';
import { PageComponent } from 'types/_app';
import { ToastContainer } from 'react-toastify';

import 'styles/globals.css';
import 'nprogress/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore({
  reducer: {},
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  NProgress.settings.showSpinner = false;

  if (
    isServer &&
    !Component.getInitialProps &&
    (Component as PageComponent<unknown>).ws
  ) {
    return null;
  }
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
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
