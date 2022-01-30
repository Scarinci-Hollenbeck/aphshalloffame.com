/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Container, Row, Col } from 'react-bootstrap'
import SubMenu from 'layouts/SubMenu'
import styles from 'styles/SubMenu.module.css'

const MemberGridWrapper = dynamic(() =>
  import('components/Home/MemberGridWrapper')
)

const HomeContainer = ({ children }) => {
  return (
    <Container className="mx-0 px-0">
      <SubMenu>
        <Row className="mx-0">
          <Col sm={12} md={2} className="mx-0 px-0">
            <h3 className={styles.subMenuTitle}>
              <strong>Welcome</strong>
            </h3>
          </Col>
          <Col
            sm={12}
            md={{ span: 6, offset: 2 }}
            className={`${styles.subMenuTitle} ${styles.btnContainer}`}
          >
            <Link href="/">
              <a className={`${styles.activeBtn} ${styles.subMenuBtn}`}>
                Latest
              </a>
            </Link>
            <Link href="/history">
              <a className={styles.subMenuBtn}>History</a>
            </Link>

            <Link href="/mission-statement">
              <a className={styles.subMenuBtn}>Mission Statement</a>
            </Link>
          </Col>
        </Row>
      </SubMenu>
      {children}
      <MemberGridWrapper />
    </Container>
  )
}

export default HomeContainer
