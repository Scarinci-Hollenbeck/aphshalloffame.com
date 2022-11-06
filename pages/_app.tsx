import Head from 'next/head'
import { CeremoniesProvider } from 'contexts/CeremoniesContext'

/**
 *
 * 3rd Party Resources
 *
 * */
import 'styles/global.css'

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
    <CeremoniesProvider>
      <SiteHead />
      <Component {...pageProps} />
    </CeremoniesProvider>
  )
}
