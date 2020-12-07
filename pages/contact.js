import React, { useEffect } from 'react'
import kwesforms from 'kwesforms'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SubMenu from 'layouts/SubMenu'
import styles from 'styles/SubMenu.module.css'
import contactStyles from 'styles/Contact.module.css'

export default function Contact() {
  // initalize kwesforms
  useEffect(() => kwesforms.init())
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
          <div className={contactStyles.form}>
            <form
              action="https://kwes.io/api/foreign/forms/JIlKMx20k6Hctyn79F89"
              className="kwes-form d-print-none"
            >
              <Row className="mb-3">
                <Col sm={12} md={6} className="mx-0 px-1">
                  <input
                    type="text"
                    className="form-control mx-0"
                    name="firstName"
                    placeholder="First name"
                    rules="required|max:255"
                  />
                </Col>
                <Col sm={12} md={6} className="mx-0 px-1">
                  <input
                    type="text"
                    className="form-control mx-0"
                    name="lastName"
                    placeholder="Last name"
                    rules="required|max:255"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={12} md={6} className="mx-0 px-1">
                  <input
                    type="email"
                    className="form-control mx-0"
                    name="email"
                    placeholder="Email address"
                    rules="required|max:255"
                  />
                </Col>
                <Col sm={12} md={6} className="mx-0 px-1">
                  <input
                    type="phone"
                    className="form-control mx-0"
                    name="phone"
                    placeholder="Phone number"
                    rules="required|max:255"
                  />
                </Col>
              </Row>
              <Row className="mb-2">
                <Col sm={12} className="mx-0 px-1 mb-4">
                  <input
                    type="text"
                    className="form-control mx-0"
                    name="subject"
                    placeholder="Subject"
                    rules="required|max:1000"
                  />
                </Col>
                <Col sm={12} className="mx-0 px-1">
                  <textarea
                    type="textarea"
                    rows="8"
                    cols="4"
                    className="form-control mx-0"
                    name="message"
                    placeholder="Message"
                    rules="required|max:1000"
                  />
                </Col>
              </Row>
              <button className="btn btn-success w-25 mt-2" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
