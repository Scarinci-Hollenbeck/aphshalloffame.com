import React from 'react'
import dynamic from 'next/dynamic'
import PageContainer from 'layouts/PageContainer'
import SEOHead from 'components/shared/SEOHead'

const { MongoClient } = require('mongodb')

const MemberLink = dynamic(() => import('components/Directory/MemberLink'))

const Directory = ({ members }) => {
  return (
    <PageContainer title="APHS Hall of Fame Member Directory">
      <SEOHead
        title="Member Directory - Asbury Park High School Hall of Fame"
        metaDescription="Here is a list of all the distinguished members of Asbury Park High School Hall of Fame"
      />

      <ul className="m-4">
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

export const getStaticProps = async () => {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = connection.db(process.env.DB_NAME)
  const members = await db.collection('members').find({}).toArray()
  connection.close()
  return {
    props: {
      members: JSON.parse(JSON.stringify(members)),
    },
  }
}

export default Directory
