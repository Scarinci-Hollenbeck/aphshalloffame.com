import dynamic from 'next/dynamic'
import PageContainer from 'layouts/PageContainer'
import SiteHead from 'components/shared/SiteHead'
const { MongoClient } = require('mongodb')
const Title = dynamic(() => import('components/Events/Title'))
const FormBlock = dynamic(() => import('components/Events/FormBlock'))

const Events = ({ page }) => {
  const { title, details, forms } = page
  return (
    <PageContainer title="Events">
      <SiteHead
        title="Events - Asbury Park High School Hall of Fame"
        metaDescription="APHS Distinguished Alumni Hall of Fame Induction Ceremony 2020.The Ceremony dinner will be Thursday, October 14, 2021"
      />
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
  const reqPage = await db.collection('events').find({}).toArray()

  return {
    props: {
      page: JSON.parse(JSON.stringify(reqPage[0])),
    },
  }
}

export default Events
