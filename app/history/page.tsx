import SubLinks from 'components/shared/SubLinks'
import SectionTitle from 'components/shared/SectionTitle'
import home from 'db/home.json'
import { Metadata } from 'next'
import MemberGalleryQueryProvider from 'components/shared/MemberGalleryQueryProvider'

export const metadata: Metadata = {
  title: 'History & Background - Asbury Park High School Hall of Fame',
  description:
    'In the late 90’s, Carl Williams, Mayor of Asbury Park and graduate of Asbury Park High School, conceived of a vehicle where the rich history of the high school and its graduates would be remembered and celebrated.',
}

const History = () => (
  <>
    <SubLinks />
    <div className="bg-gray-200 border-t-4 border-black">
      <SectionTitle title="History" />
      <div
        className="py-6 px-7 text-center content"
        dangerouslySetInnerHTML={{ __html: home?.history }}
      />
      <MemberGalleryQueryProvider />
    </div>
  </>
)

export default History
