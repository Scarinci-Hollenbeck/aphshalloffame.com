import dynamic from 'next/dynamic'
import HomeContainer from 'layouts/HomeContainer'
import { Row, Col } from 'react-bootstrap'
const { MongoClient } = require('mongodb')
const Latest = dynamic(() => import('components/Home/Latest'))

const Home = ({ page }) => (
  <HomeContainer>
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
  return {
    props: {
      page: JSON.parse(JSON.stringify(reqPage[0])),
    },
  }
}

export default Home
