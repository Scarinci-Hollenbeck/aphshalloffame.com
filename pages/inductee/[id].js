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
import { createMarkup, setProfileImage } from 'utils/helpers';

export default function Profile({ bio }) {
  const {
    biography, image, name, inducted,
  } = bio;
  const bioClass = bio.class;
  const bioImage = setProfileImage(image, '/c_scale,e_shadow:40,r_15,w_350');

  return (
    <Container>
      <Head>
        <title>{`${name} - Asbury Park High School Hall of Fame`}</title>
        <meta
          name="description"
          content={`${name} graduated from Asbury Park High School in ${bioClass}, and was inducted to the Asbury Park High School Hall of Fame in ${inducted}.`}
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
        <Col
          sm={{ order: 'last', span: 12 }}
          md={{ order: 'first', span: 6 }}
          className="p-4"
        >
          <h3>
            <strong className={memberStyles.name}>{name}</strong>
          </h3>
          <div className={`${memberStyles.classInductedContainer} p-2 my-4`}>
            <p className="p-0 m-0">
              <strong>Class:</strong>
              {' '}
              {bioClass}
              {' '}
              <strong>Inducted:</strong>
              {' '}
              {inducted}
            </p>
          </div>
          <div dangerouslySetInnerHTML={createMarkup(biography)} />
        </Col>
        <Col
          sm={{ order: 'first', span: 12 }}
          md={{ order: 'last', span: 6 }}
          className="p-4"
        >
          <div className={memberStyles.m6}>
            <Image
              src={bioImage}
              alt={name}
              width="350"
              height="456"
              layout="intrinsic"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const bioId = params.id;
  const allMembers = await fetch(
    `${process.env.BASE_URL}/api/get-members/all`,
  ).then((res) => res.json());

  const bio = allMembers.data.filter((a) => a._id === bioId);

  return {
    props: {
      bio: bio[0],
    },
  };
}

export async function getStaticPaths() {
  const allMembers = await fetch(
    `${process.env.BASE_URL}/api/get-members/all`,
  ).then((res) => res.json());

  return {
    paths: allMembers.data.map((node) => `/inductee/${node._id}`) || [],
    fallback: true,
  };
}
