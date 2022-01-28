import { Col } from 'react-bootstrap'
import contactStyles from 'styles/Contact.module.css'

const Title = () => (
  <Col sm={12} className="py-4">
    <h3 className={contactStyles.title}>
      <strong>To get in touch</strong>
    </h3>
  </Col>
)

export default Title
