/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import PageContainer from 'layouts/PageContainer'

const { MongoClient } = require('mongodb')

const LoadingSpinner = dynamic(() => import('components/LoadingSpinner'))
const Biography = dynamic(() => import('components/Profile/Biography'))
const ProfileImage = dynamic(() => import('components/Profile/ProfileImage'))

const Profile = ({ member }) => {
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
      <Head>
        <title>{`${member.name} - Asbury Park High School Hall of Fame`}</title>
        <meta
          name="description"
          content={`${member.name} graduated from Asbury Park High School in ${member.class}, and was inducted to the Asbury Park High School Hall of Fame in ${member.inducted}.`}
        />
      </Head>

      <ProfileImage image={member.image} name={member.name} />
      <Biography {...member} />
    </PageContainer>
  )
}

export const getStaticPaths = async () => {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = connection.db(process.env.DB_NAME)
  const members = await db.collection('members').find({}).toArray()
  const membersSlug = members.map(({ slug }) => slug)

  return {
    paths: membersSlug.map((slug) => encodeURI(`/inductee/${slug}`)) || [],
    fallback: 'blocking',
  }
}

export const getStaticProps = ({ params }) => {
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
  return {
    props: {
      member: JSON.parse(JSON.stringify(member[0])),
    },
  }
}

export default Profile
