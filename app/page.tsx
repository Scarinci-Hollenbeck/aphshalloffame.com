import Head from 'next/head'
import Latest from '../components/Home/Latest'
import SubLinks from '../components/shared/SubLinks'
import MemberGallery from '../components/shared/MemberGallery'
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
    <div className="bg-no-repeat bg-center bg-cover bg-welcome-banner z-30 flex justify-center items-center border-t-4 border-black" style={{ height: 526 }}>
        <div className="bg-black bg-opacity-70 w-full">
          <p className="text-white text-5xl drop-shadow	sm:text-7xl font-bold text-center p-6">Asbury Park High School Distinguished Alumni Hall of Fame</p>
        </div>  
    </div>
    <div className="bg-gray-200">
      <div className="py-6 px-7 content" dangerouslySetInnerHTML={{ __html: home?.latest }} />
      <MemberGallery />
    </div>
  </>
)

export default Page
