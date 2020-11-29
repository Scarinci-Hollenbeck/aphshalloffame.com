/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubMenu from 'layouts/SubMenu';
import styles from 'styles/SubMenu.module.css';

export default function Ceremony({ photos, year }) {
  return (
    <Container>
      <Head>
        <title>{`Asbury Park High School Hall of Fame - ${year} Ceremony`}</title>
        <meta
          name="description"
          content={`Photos from the Asbury Park High School Hall of Fame ${year} induction ceremony.`}
        />
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12}>
            <h3 className={styles.subMenuTitle}>
              <strong>
                Ceremony:
                {' '}
                {year}
              </strong>
            </h3>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-2 mt-2 content">
        <Col sm={12}>
          Carousel view will go here...
          {JSON.stringify(photos)}
        </Col>
        <Col sm={12}>
          Grid gallery view will go here...
        </Col>
      </Row>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const { year } = params;
  return {
    props: {
      year,
      photos: [],
    },
  };
}
