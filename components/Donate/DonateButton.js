import { Button } from 'react-bootstrap'
const DonateButton = ({ url, label }) => (
  <Button variant="success" size="lg" className="mt-4 mb-5" href={url} download>
    {label}
  </Button>
)

export default DonateButton
