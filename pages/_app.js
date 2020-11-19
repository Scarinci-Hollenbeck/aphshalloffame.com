import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

/**
*
* 3rd Party Resources
*
* */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'
import '../styles/styles.css'

/**
* Bind nprogress loader to app
* */
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


/**
 * 
 * Track pageview when route is changed
 */
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

export default function App({ Component, pageProps, posts }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}