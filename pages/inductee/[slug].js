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
import dbConnect from 'utils/db-connect';
import Members from 'models/Members';

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
            <Col sm={12} md={5} className="pt-5">
              <div className={memberStyles.profile}>
                <Image
                  src={`/c_scale,r_8,w_350/${member.image}`}
                  alt={member.name}
                  width={350}
                  height={420}
                  layout="intrinsic"
                  loading="eager"
                />
              </div>
            </Col>
            <Col sm={12} md={7} className="pt-5">
              <div className="mr-4">
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
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export async function getStaticPaths() {
  await dbConnect();
  const members = await Members.find({}).sort({ inducted: 'DESC' }).exec();
  const membersName = members.map((m) => m.name);

  return {
    paths: membersName.map((name) => `/inductee/${name}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  await dbConnect();
  const { slug } = params;
  const member = await Members.find({ name: slug });

  return {
    props: {
      member: JSON.parse(JSON.stringify(member[0])),
    },
    revalidate: 1,
  };
}
