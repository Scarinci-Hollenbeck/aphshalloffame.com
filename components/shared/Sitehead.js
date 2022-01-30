import Head from 'next/head'

const SiteHead = ( { title, metaDescription }) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
    </Head>
);

export default SiteHead;