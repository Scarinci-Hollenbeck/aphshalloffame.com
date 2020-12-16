import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function SiteContainer({ children }) {
  return (
    <Container className="my-5 bg-white shadow-lg rounded">
      <Row className="p-2 px-3">{children}</Row>
    </Container>
  );
}
