import Head from 'next/head'

const SEOHead = ({ title, metaDescription }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={metaDescription} />
  </Head>
)

export default SEOHead
