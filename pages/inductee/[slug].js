import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import PageContainer from 'layouts/PageContainer'
import SEOHead from 'components/shared/SEOHead'

const LoadingSpinner = dynamic(() => import('components/shared/LoadingSpinner'))
const Biography = dynamic(() => import('components/Profile/Biography'))
const ProfileImage = dynamic(() => import('components/Profile/ProfileImage'))

const cloudinary = require('utils/cloudinary')
const { MongoClient } = require('mongodb')

const Profile = ({ member, profileImage }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <PageContainer title="Profile">
      <SEOHead
        title={`${member.name} - Asbury Park High School Hall of Fame`}
        metaDescription={`${member.name} graduated from Asbury Park High School in ${member.class}, and was inducted to the Asbury Park High School Hall of Fame in ${member.inducted}.`}
      />
      {Object.keys(profileImage).length > 0 && <ProfileImage image={profileImage} />}
      <Biography {...member} />
    </PageContainer>
  )
}

export const getServerSideProps = async ({ params }) => {
  const { slug } = params
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = connection.db(process.env.DB_NAME)
  const member = await db
    .collection('members')
    .find({ slug: decodeURI(slug) })
    .toArray()

  const request = await cloudinary.search
    .expression(member[0]?.slug).execute().then((res) => res.resources);

  let profileImage = {};

  if (request.length > 0) {
    profileImage = {
      src: request[0]?.url.replace('png', 'webp').replace('jpg', 'webp'),
      width: request[0]?.width,
      height: request[0]?.height,
      alt: request[0]?.filename,
    }
  }


  return {
    props: {
      member: JSON.parse(JSON.stringify(member[0])),
      profileImage,
    },
  }
}

export default Profile
