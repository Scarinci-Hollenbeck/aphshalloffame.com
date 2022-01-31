import dynamic from 'next/dynamic'
import HomeContainer from 'layouts/HomeContainer'
import SEOHead from 'components/shared/SEOHead'
import { Row, Col } from 'react-bootstrap'
import styles from 'styles/SubMenu.module.css'
const { MongoClient } = require('mongodb')
const TextContent = dynamic(() => import('components/shared/TextContent'))

const MissionStatement = ({ page }) => {
  return (
    <HomeContainer>
      <SEOHead
        title="Mission Statement - Asbury Park High School Hall of Fame"
        metaDescription=" Another and equally important portion of our mission is to instill in the current APHS students a feeling that they too can be successful adults irrespective of their often difficult backgrounds."
      />
      <Row className="mx-2 mt-2 content">
        <Col sm={12} className="px-0">
          <div className="my-4">
            <h3 className={styles.membersTitle}>
              <strong>Mission Statement</strong>
            </h3>
            <TextContent content={page.missionStatement} />
          </div>
        </Col>
      </Row>
    </HomeContainer>
  )
}

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

export default MissionStatement
