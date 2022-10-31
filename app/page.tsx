import Head from 'next/head'
import Latest from '../components/Home/Latest'
import SubLinks from '../components/shared/SubLinks'
import home from '../db/home.json'

const Page = () => (
  <>
    <Head>
      <title>Asbury Park High School Hall of Fame</title>
      <meta
        name="description"
        content="Welcome to the Asbury Park High School Distinguished Alumni Hall of Fame. Our mission is to recognize and honor those APHS graduates who as adults in many different and varied fields."
      />
    </Head>
    <SubLinks />
    <Latest content={home?.latest} />
  </>
)

export default Page
