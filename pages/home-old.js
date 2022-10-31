import dynamic from 'next/dynamic'
import HomeContainer from 'layouts/HomeContainer'
import SEOHead from 'components/shared/SEOHead'
import { Row, Col } from 'react-bootstrap'
const { MongoClient } = require('mongodb')
const Latest = dynamic(() => import('components/Home/Latest'))

const Home = ({ page }) => (
  <HomeContainer>
    <SEOHead
      title="Asbury Park High School Hall of Fame"
      metaDescription="Welcome to the Asbury Park High School Distinguished Alumni Hall of Fame. Our mission is to recognize and honor those APHS graduates who as adults in many different and varied fields. "
    />
    <Row className="mx-2 mt-2 content">
      <Col sm={12} className="px-0">
        <Latest content={page?.latest} />
      </Col>
    </Row>
  </HomeContainer>
)

export const getStaticProps = async () => {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = connection.db(process.env.DB_NAME)
  const reqPage = await db.collection('home').find({}).toArray()
  connection.close()
  return {
    props: {
      page: JSON.parse(JSON.stringify(reqPage[0])),
    },
  }
}

export default Home
