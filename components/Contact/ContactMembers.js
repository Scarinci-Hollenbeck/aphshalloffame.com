import { ListGroup, Col } from 'react-bootstrap'
import contactStyles from 'styles/Contact.module.css'

const ContactMembers = ({ members }) => (
  <Col sm={12}>
    <div className="pe-4">
      <p className="mb-3">
        <strong>Either email a member</strong>
      </p>
      <ListGroup variant="flush" className={contactStyles.listGroupWidth}>
        {members &&
          members.map(({ name, email }) => (
            <ListGroup.Item key={name}>
              <p className="mb-0">
                <strong>{name}</strong>
              </p>
              <p>
                Email:
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  </Col>
)

export default ContactMembers
