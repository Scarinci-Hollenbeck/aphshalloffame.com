import SubLinks from 'components/shared/SubLinks'
import home from 'db/home.json'
import { Metadata } from 'next'
import MemberGalleryQueryProvider from 'components/shared/MemberGalleryQueryProvider'
import { getPageSEO } from 'utils/helpers'
import { SITE_TITLE } from 'utils/constants'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageSEO('/')

  return {
    title: page?.title,
    description: page?.description,
  }
}

const Home = () => {
  return (
    <>
      <SubLinks />
      <div
        className="bg-no-repeat bg-center bg-cover bg-welcome-banner z-30 flex justify-center items-center border-t-4 border-black"
        style={{ height: 526 }}
      >
        <div className="bg-black bg-opacity-40 w-full">
          <p
            style={{ textShadow: '2px 3px 4px #000' }}
            className="text-white text-3xl sm:text-7xl font-bold text-center p-6"
          >
            {SITE_TITLE}
          </p>
        </div>
      </div>
      <div className="bg-gray-200 mx-2 lg:mx-8 py-8">
        <div
          className="py-4 px-7 text-center content"
          dangerouslySetInnerHTML={{ __html: home?.latest }}
        />
        <MemberGalleryQueryProvider />
      </div>
    </>
  )
}

export default Home
