import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function SubMenu({children}) {
  return (
    <Row className="mx-0 my-2">
      <Col sm={12}>
        {children}
      </Col>
    </Row>
  )
}