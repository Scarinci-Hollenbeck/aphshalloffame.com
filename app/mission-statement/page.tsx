import SubLinks from '../../components/shared/SubLinks'
import SectionTitle from '../../components/shared/SectionTitle'
import home from '../../db/home.json'

const MissionStatement = () => (
  <>
    <head>
      <title>Asbury Park High School Hall of Fame</title>
      <meta
        name="description"
        content="Welcome to the Asbury Park High School Distinguished Alumni Hall of Fame. Our mission is to recognize and honor those APHS graduates who as adults in many different and varied fields."
      />
    </head>
    <SubLinks />
    <div className="bg-gray-200 border-t-4 border-black">
      <SectionTitle title="Mission Statement" />
      <div className="py-6 px-7 content" dangerouslySetInnerHTML={{ __html: home?.missionStatement }} />
    </div>
  </>
)

export default MissionStatement
