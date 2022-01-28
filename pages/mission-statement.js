import dynamic from 'next/dynamic'
import HomeContainer from 'layouts/HomeContainer'
import { Row, Col } from 'react-bootstrap'
import styles from 'styles/SubMenu.module.css'

const Content = dynamic(() => import('components/MissionStatement/Content'))

const MissionStatement = () => {
  return (
    <HomeContainer>
      <Row className="mx-2 mt-2 content">
        <Col sm={12} className="px-0">
          <div className="my-4">
            <h3 className={styles.membersTitle}>
              <strong>Mission Statement</strong>
            </h3>
            <Content />
          </div>
        </Col>
      </Row>
    </HomeContainer>
  )
}

export default MissionStatement
