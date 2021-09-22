import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubMenu from 'layouts/SubMenu';
import styles from 'styles/SubMenu.module.css';
import dbConnect from 'utils/db-connect';
import Members from 'models/Members';

export default function Directory({ members }) {
  console.log(members);
  return (
    <Container>
      <Head>
        <title>Member Directory - Asbury Park High School Hall of Fame</title>
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12}>
            <h3 className={styles.subMenuTitle}>
              <strong>APHS Hall of Fame Member Directory</strong>
            </h3>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-2 mt-2 content">
        <ul className="mt-4">
          {members.map((member) => (
            <li key={member._id} className="mb-4">
              <Link href={`/inductee/${member.lastName}`}>
                <p>
                  <strong>{member.name}</strong>
                  {' '}
                  -
                  {' '}
                  <small>
                    Class:
                    {member.class}
                    {' '}
                    | Inducted:
                    {member.inducted}
                  </small>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Row>
      <style jsx>
        {`
        li:hover {
          cursor:pointer;
          text-decoration: underline;
        }
      
      `}
      </style>
    </Container>

  );
}

export async function getStaticProps() {
  await dbConnect();
  const members = await Members.find({}).sort({ lastName: 'ASC' }).exec();

  return {
    props: {
      members: JSON.parse(JSON.stringify(members)),
    },
  };
}
