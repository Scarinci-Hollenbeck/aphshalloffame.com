import dynamic from 'next/dynamic'
import SiteHead from 'components/shared/SiteHead'
import PageContainer from 'layouts/PageContainer'
const { MongoClient } = require('mongodb')

const ContentBlock = dynamic(() => import('components/Donate/ContentBlock'))
const Title = dynamic(() => import('components/Donate/Title'))

const Donate = ({ pageContent }) => (
  <PageContainer title="Make a donation">
    <SiteHead 
        title="Donate - Asbury Park High School Hall of Fame"
        metaDescription="The Distinguished Hall of Fame is a 501(c)3 non-profit corporation registered with the IRS and the State of New Jersey formed."
      />
    <Title />
    {pageContent &&
      pageContent.map((page) => <ContentBlock {...page} key={page.id} />)}
  </PageContainer>
)

export const getStaticProps = async () => {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = connection.db(process.env.DB_NAME)
  const reqPage = await db.collection('donate').find({}).toArray()

  const pageContent = reqPage.map(({ _id, btnUrl, btnLabel, content }) => ({
    id: _id,
    content,
    url: btnUrl,
    label: btnLabel,
  }))

  return {
    props: {
      pageContent: JSON.parse(JSON.stringify(pageContent)),
    },
  }
}

export default Donate
