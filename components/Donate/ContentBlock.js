import { Col } from 'react-bootstrap'
import DonateButton from 'components/Donate/DonateButton'
import { createMarkup } from 'utils/helpers'

const ContentBlock = ({ label, url, content }) => (
  <Col sm={12}>
    <span dangerouslySetInnerHTML={createMarkup(content)} />
    <DonateButton label={label} url={url} />
  </Col>
)

export default ContentBlock
