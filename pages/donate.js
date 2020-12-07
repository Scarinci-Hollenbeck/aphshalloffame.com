import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SubMenu from 'layouts/SubMenu'
import styles from 'styles/SubMenu.module.css'
import contactStyles from 'styles/Contact.module.css'

export default function Donate() {
  return (
    <Container>
      <Head>
        <title>Donate - Asbury Park High School Hall of Fame</title>
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12} md={2}>
            <h3 className={styles.subMenuTitle}>
              <strong>Donate</strong>
            </h3>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-2 mt-2 content">
        <Col sm={12} className="p-4">
          <h3 className={contactStyles.title}>
            <strong>Help Asbury Park High School Hall of Fame grow</strong>
          </h3>
        </Col>
      </Row>
    </Container>
  )
}
