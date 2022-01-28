import { Row, Col, Container } from 'react-bootstrap'
import SubMenu from 'layouts/SubMenu'
import styles from 'styles/SubMenu.module.css'

const PageContainer = ({ title, children }) => (
  <Container>
    <SubMenu>
      <Row>
        <Col sm={12}>
          <h3 className={styles.subMenuTitle}>
            <strong>{title}</strong>
          </h3>
        </Col>
      </Row>
    </SubMenu>
    <Row className="mx-2 mt-2 content">{children}</Row>
  </Container>
)

export default PageContainer
