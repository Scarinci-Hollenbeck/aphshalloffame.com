import { Col, Button } from 'react-bootstrap'

const FormBlock = ({ url, label, children }) => (
  <Col sm={12}>
    <div className="d-flex flex-row mb-2 mt-4">
      <Button variant="success" size="sm" href={url} download>
        {label}
      </Button>
    </div>
    {children}
  </Col>
)

export default FormBlock
