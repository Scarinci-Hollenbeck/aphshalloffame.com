import { Row, Col } from 'react-bootstrap'
import MemberGrid from 'components/Home/MemberGrid'
import styles from 'styles/SubMenu.module.css'

const MemberGridWrapper = () => (
  <Row className="mx-2 pt-5 content-no-border">
    <Col sm={12}>
      <h3 className={styles.membersTitle}>
        <strong>Hall of Fame Members</strong>
      </h3>
      <MemberGrid />
    </Col>
  </Row>
)

export default MemberGridWrapper
