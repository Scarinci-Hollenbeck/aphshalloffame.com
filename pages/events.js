import Head from 'next/head'
import dynamic from 'next/dynamic'
import PageContainer from 'layouts/PageContainer'

const { MongoClient } = require('mongodb')
const Title = dynamic(() => import('components/Events/Title'))
const FormBlock = dynamic(() => import('components/Events/FormBlock'))

const Events = ({ page }) => {
  const { title, details, forms } = page
  return (
    <PageContainer title="Events">
      <Head>
        <title>Events - Asbury Park High School Hall of Fame</title>
      </Head>
      <Title title={title} details={details} />
      {forms && forms.map((form) => <FormBlock {...form} key={form.id} />)}
    </PageContainer>
  )
}

export const getStaticProps = async () => {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = connection.db(process.env.DB_NAME)
  const reqPage = await db
    .collection('events')
    .find({})
    .toArray()

  return {
    props: {
      // pageContent: 
      page: JSON.parse(JSON.stringify(reqPage[0])),
    },
  }
}

export default Events
