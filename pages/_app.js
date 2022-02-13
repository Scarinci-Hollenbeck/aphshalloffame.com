import Router from 'next/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import NProgress from 'nprogress'
import SSRProvider from 'react-bootstrap/SSRProvider'
import SiteContainer from 'layouts/SiteContainer'
import Header from 'components/shared/Header'
import { CeremoniesProvider } from 'contexts/CeremoniesContext'

/**
 *
 * 3rd Party Resources
 *
 * */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'
import 'styles/styles.css'

const Footer = dynamic(() => import('components/shared/Footer'))

/**
 * Bind nprogress loader to app
 * */
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const SiteHead = () => (
  <Head>
    <meta
      content="width=device-width,initial-scale=1,shrink-to-fit=no"
      name="viewport"
    />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  </Head>
)

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <CeremoniesProvider>
        <SiteHead />
        <SiteContainer>
          <Header />
          <main className="w-100">
            <Component {...pageProps} />
          </main>
          <Footer />
        </SiteContainer>
      </CeremoniesProvider>
    </SSRProvider>
  )
}
