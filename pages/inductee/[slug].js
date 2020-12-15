/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import Head from 'next/head';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubMenu from 'layouts/SubMenu';
import styles from 'styles/SubMenu.module.css';
import memberStyles from 'styles/Biography.module.css';
import { createMarkup } from 'utils/helpers';

export default function Profile({ member }) {
  return (
    <>
      {member && (
        <Container>
          <Head>
            <title>{`${member.name} - Asbury Park High School Hall of Fame`}</title>
            <meta
              name="description"
              content={`${member.name} graduated from Asbury Park High School in ${member.class}, and was inducted to the Asbury Park High School Hall of Fame in ${member.inducted}.`}
            />
          </Head>
          <SubMenu>
            <Row>
              <Col sm={12}>
                <h3 className={styles.subMenuTitle}>
                  <strong>Profile</strong>
                </h3>
              </Col>
            </Row>
          </SubMenu>
          <Row className="mx-2 mt-2 content">
            <Col sm={12} md={6} className="p-4">
              <div className={memberStyles.m6}>
                <Image
                  src={`/c_scale,r_8,w_350/${member.image}`}
                  alt={member.name}
                  width={350}
                  height={420}
                  layout="intrinsic"
                />
              </div>
            </Col>
            <Col sm={12} md={6} className="p-4">
              <h3>
                <strong className={memberStyles.name}>{member.name}</strong>
              </h3>
              <div
                className={`${memberStyles.classInductedContainer} p-2 my-4`}
              >
                <p className="p-0 m-0">
                  <strong>Class:</strong>
                  {' '}
                  {member.class}
                  {' '}
                  <strong>Inducted:</strong>
                  {' '}
                  {member.inducted}
                </p>
              </div>
              <div dangerouslySetInnerHTML={createMarkup(member.biography)} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/get-members/all`,
  ).then((data) => data.json());

  return {
    paths: res.data.map((name) => `/inductee/${name}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(
    `${process.env.BASE_URL}/api/get-members/name/${slug}`,
  ).then((data) => data.json());
  return {
    props: {
      member: res.data,
    },
    revalidate: 1,
  };
}
