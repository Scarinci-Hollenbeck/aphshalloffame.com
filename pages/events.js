import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SubMenu from 'layouts/SubMenu';
import styles from 'styles/SubMenu.module.css';
import eventPageStyles from 'styles/EventPage.module.css';

export default function Events() {
  return (
    <Container>
      <Head>
        <title>Events - Asbury Park High School Hall of Fame</title>
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12} md={2}>
            <h3 className={styles.subMenuTitle}>
              <strong>Events</strong>
            </h3>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-2 mt-2 content">
        <Col sm={12}>
          <h4 className="my-4 text-center">
            <strong>
              APHS Distinguished Alumni Hall of Fame Induction Ceremony 2020
            </strong>
            <small className="d-block w-100 mt-2">The Ceremony dinner will be Thursday, October 14, 2021</small>
          </h4>
          <div className="d-flex flex-row mb-2">
            <Button
              variant="success"
              size="sm"
              href="/docs/2020CeremonyInvitation.pdf"
              download
            >
              Print Reservation
            </Button>
          </div>

          <iframe
            title="Reservation - Asbury Park High School Distinguishe Alumni Hall of Fame Induction Ceremony 2020"
            src="https://docs.google.com/document/d/e/2PACX-1vRUZqa2vluFQObv5fFC9UWnB7l4gs54O49KLRNu3DOZtZ23_x5VVyJ8ApI-z5neIA/pub?embedded=true"
            className={eventPageStyles.invite}
            id="invitation-2020"
          />
          <div className="d-flex flex-row mb-2 mt-4">
            <Button
              variant="success"
              size="sm"
              href="/docs/2020AdvertiseCeremony.pdf"
              download
            >
              Print Advertise Form
            </Button>
          </div>
          <iframe
            title="Advertise - Asbury Park High School Distinguishe Alumni Hall of Fame Induction Ceremony 2020"
            src="https://docs.google.com/document/d/e/2PACX-1vQQDOX6uv9Ff462FqLZ-WgBWySmABEi6UnYH6VeVV6yrC5m9WFPa2VOPtTRg0j7YQ/pub?embedded=true"
            className={eventPageStyles.advertisement}
          />
        </Col>
      </Row>
    </Container>
  );
}
