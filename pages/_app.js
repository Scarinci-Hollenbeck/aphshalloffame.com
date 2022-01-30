import Router from 'next/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import NProgress from 'nprogress'
import SiteContainer from 'layouts/SiteContainer'
import Header from 'components/Header'
import { CeremoniesProvider } from 'contexts/CeremoniesContext'

/**
 *
 * 3rd Party Resources
 *
 * */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import 'react-image-lightbox/style.css'
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
    <link
      rel="preload"
      href="/fonts/OpenSans-Regular.ttf"
      as="font"
      crossOrigin=" "
    />
    <link
      rel="preload"
      href="/fonts/OpenSans-Italic.ttf"
      as="font"
      crossOrigin=" "
    />
    <link
      rel="preload"
      href="/fonts/OpenSans-Bold.ttf"
      as="font"
      crossOrigin=" "
    />
    <link
      rel="preload"
      href="/fonts/Merriweather-Regular.ttf"
      as="font"
      crossOrigin=" "
    />
    <link
      rel="preload"
      href="/fonts/Merriweather-Italic.ttf"
      as="font"
      crossOrigin=" "
    />
    <link
      rel="preload"
      href="/fonts/Merriweather-Bold.ttf"
      as="font"
      crossOrigin=" "
    />
    <link
      rel="preload"
      href="/fonts/Lucida-Calligra-Italic.ttf"
      as="font"
      crossOrigin=" "
    />
  </Head>
)

export default function App({ Component, pageProps }) {
  return (
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
  )
}
