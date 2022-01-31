import { Col, Button } from 'react-bootstrap'
import eventPageStyles from 'styles/EventPage.module.css'

const FormBlock = ({ btnLabel, btnUrl, formUrl, formTitle, formId }) => (
  <Col sm={12}>
    <div className="d-flex flex-row mb-2 mt-4">
      <Button variant="success" size="sm" className="ms-2" href={btnUrl} download>
        {btnLabel}
      </Button>
    </div>
    <iframe
      title={formTitle}
      src={formUrl}
      className={eventPageStyles.invite}
      id={formId}
    />
  </Col>
)

export default FormBlock
