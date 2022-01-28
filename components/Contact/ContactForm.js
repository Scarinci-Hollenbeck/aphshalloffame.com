import { useEffect } from 'react'
import kwesforms from 'kwesforms'
import { Row, Col } from 'react-bootstrap'
import contactStyles from 'styles/Contact.module.css'

const ContactForm = () => {
  useEffect(() => {
    kwesforms.init()
  }, [])
  return (
    <Col sm={12} md={8}>
      <div className={contactStyles.form}>
        <p className="mb-3">
          <strong>Or fill out the form</strong>
        </p>
        <form
          name="contact"
          className="pl-2 kwes-form"
          action="https://kwesforms.com/api/foreign/forms/IPwLtcuh8oTCbZ7JmWMo"
        >
          <Row className="mb-3">
            <Col sm={12} md={6} className="mx-0 px-1">
              <input
                type="text"
                className="form-control mx-0"
                name="firstName"
                placeholder="First name"
              />
            </Col>
            <Col sm={12} md={6} className="mx-0 px-1">
              <input
                type="text"
                className="form-control mx-0"
                name="lastName"
                placeholder="Last name"
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
              />
            </Col>
            <Col sm={12} md={6} className="mx-0 px-1">
              <input
                type="phone"
                className="form-control mx-0"
                name="phone"
                placeholder="Phone number"
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
  )
}

export default ContactForm
