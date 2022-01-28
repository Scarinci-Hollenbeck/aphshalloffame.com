import dynamic from 'next/dynamic'
import HomeContainer from 'layouts/HomeContainer'
import { Row, Col } from 'react-bootstrap'

const Latest = dynamic(() => import('components/Home/Latest'))

const Home = () => {
  return (
    <HomeContainer>
      <Row className="mx-2 mt-2 content">
        <Col sm={12} className="px-0">
          <Latest />
        </Col>
      </Row>
    </HomeContainer>
  )
}

export default Home
