import { Col } from 'react-bootstrap'
import DonateButton from 'components/Donate/DonateButton'
const ContentBlock = ({ label, url, children }) => (
  <Col sm={12}>
    {children}
    <DonateButton label={label} url={url} />
  </Col>
)

export default ContentBlock
