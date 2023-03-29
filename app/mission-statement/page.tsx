import SubLinks from 'components/shared/SubLinks'
import SectionTitle from 'components/shared/SectionTitle'
import home from 'db/home.json'
import MemberGallery from 'components/shared/MemberGallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission Statement | Asbury Park High School Hall of Fame',
  description:
    'Another and equally important portion of our mission is to instill in the current APHS students a feeling that they too can be successful adults irrespective of their often difficult backgrounds.',
}

const MissionStatement = () => (
  <>
    <SubLinks />
    <div className="bg-gray-200 border-t-4 border-black">
      <SectionTitle title="Mission Statement" />
      <div
        className="py-6 px-7 mx-2 lg:mx-8 text-center content"
        dangerouslySetInnerHTML={{ __html: home?.missionStatement }}
      />
      <MemberGallery />
    </div>
  </>
)

export default MissionStatement
