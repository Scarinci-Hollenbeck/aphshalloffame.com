import { Col } from 'react-bootstrap'
import contactStyles from 'styles/Contact.module.css'

const Title = () => (
  <Col sm={12} className="p-4">
    <h3 className={contactStyles.title}>
      <strong>
        Help impact the lives of future hall of famers by donating now
      </strong>
    </h3>
  </Col>
)

export default Title
