import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import SubMenu from 'layouts/SubMenu';
import styles from 'styles/SubMenu.module.css';
import contactStyles from 'styles/Contact.module.css';

export default function Contact() {
  return (
    <Container>
      <Head>
        <title>Contact Us - Asbury Park High School Hall of Fame</title>
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12} md={2}>
            <h3 className={styles.subMenuTitle}>
              <strong>Contact</strong>
            </h3>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-2 mt-2 content">
        <Col sm={12} className="p-4">
          <h3 className={contactStyles.title}>
            <strong>Get in touch</strong>
          </h3>
        </Col>
        <Col sm={4}>
          <div className="my-4">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p className="mb-0"><strong>Ira Kreizman</strong></p>
                <p>
                  Email:
                  <a href="mailto:ikreizman@sh-law.com">ikreizman@sh-law.com</a>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="mb-0"><strong>Lorraine Hartigan Nonnenberg</strong></p>
                <p>
                  Email:
                  <a href="mrshankn@gmail.com">mrshankn@gmail.com</a>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="mb-0"><strong>Paul Chaiet</strong></p>
                <p>
                  Email:
                  <a href="pfc401@verizon.net">pfc401@verizon.net</a>
                </p>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
