/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubMenu from 'layouts/SubMenu';
import MemberGrid from 'components/MemberGrid';
import About from 'components/About';
import styles from 'styles/SubMenu.module.css';

export default function History() {
  return (
    <Container className="mx-0 px-0">
      <Head>
        <title>Asbury Park High School Hall of Fame</title>
      </Head>
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
              <a className={styles.subMenuBtn}>
                Latest
              </a>
            </Link>
            <Link href="/history">
              <a className={`${styles.activeBtn} ${styles.subMenuBtn}`}>
                History
              </a>
            </Link>

            <Link href="/mission-statement">
              <a className={styles.subMenuBtn}>
                Mission Statement
              </a>
            </Link>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-2 mt-2 content">
        <Col sm={12} className="px-0">
          <div className="my-4">
            <h3 className={styles.membersTitle}>
              <strong>History & Background</strong>
            </h3>
            <About />
          </div>
        </Col>
      </Row>
      <Row className="mx-2 pt-5 content-no-border">
        <Col sm={12}>
          <h3 className={styles.membersTitle}>
            <strong>Hall of Fame Members</strong>
          </h3>
          <MemberGrid />
        </Col>
      </Row>
    </Container>
  );
}
