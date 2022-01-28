import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import PageContainer from 'layouts/PageContainer'

const { MongoClient } = require('mongodb')

const MemberLink = dynamic(() => import('components/Directory/MemberLink'))

const Directory = ({ members }) => {
  return (
    <PageContainer title="APHS Hall of Fame Member Directory">
      <Head>
        <title>Member Directory - Asbury Park High School Hall of Fame</title>
      </Head>

      <ul className="mt-4">
        {members.map((member) => (
          <MemberLink {...member} key={member._id} />
        ))}
      </ul>
      <style jsx>
        {`
          li:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        `}
      </style>
    </PageContainer>
  )
}

export async function getStaticProps() {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = connection.db(process.env.DB_NAME)
  const members = await db.collection('members').find({}).toArray()

  return {
    props: {
      members: JSON.parse(JSON.stringify(members)),
    },
  }
}

export default Directory
