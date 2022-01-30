import { Col, Button } from 'react-bootstrap'
const Title = ({ title, details}) => (
  <Col sm={12}>
    <h4 className="my-4 text-center">
      <strong>
       {title}
      </strong>
      <small className="d-block w-100 mt-2">
        {details}
      </small>
    </h4>
  </Col>
)

export default Title
