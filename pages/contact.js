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
            <strong>To get in touch</strong>
          </h3>
        </Col>
        <Col sm={12} md={8}>
          <div className="pr-4">
            <p className="mb-3"><strong>Either email a member</strong></p>
            <ListGroup variant="flush" className={contactStyles.listGroupWidth}>
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
          <div className={contactStyles.form}>
            <p className="mb-3"><strong>Or fill out the form</strong></p>
            <form name="contact" className="pl-2" netlify={true}>
              <Row className="mb-3">
                <Col sm={12} md={6} className="mx-0 px-1">
                  <input type="text" className="form-control mx-0" name="firstName" placeholder="First name" />
                </Col>
                <Col sm={12} md={6} className="mx-0 px-1">
                  <input type="text" className="form-control mx-0" name="lastName" placeholder="Last name" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={12} md={6} className="mx-0 px-1">
                  <input type="email" className="form-control mx-0" name="email" placeholder="Email address" />
                </Col>
                <Col sm={12} md={6} className="mx-0 px-1">
                  <input type="phone" className="form-control mx-0" name="phone" placeholder="Phone number" />
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm={12} className="mx-0 px-1 mb-4">
                  <input type="text" className="form-control mx-0" name="subject" placeholder="Subject" rules="required|max:1000" />
                </Col>
                <Col sm={12} className="mx-0 px-1">
                  <textarea type="textarea" rows="8" cols="4" className="form-control mx-0" name="message" placeholder="Message" rules="required|max:1000" />
                </Col>
              </Row>
              <button className="btn btn-success w-25 mt-2" type="submit">Submit form</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
