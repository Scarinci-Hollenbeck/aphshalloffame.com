import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SubMenu from 'layouts/SubMenu';
import styles from 'styles/SubMenu.module.css';
import contactStyles from 'styles/Contact.module.css';

export default function Donate() {
  return (
    <Container>
      <Head>
        <title>Donate - Asbury Park High School Hall of Fame</title>
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12} md={5}>
            <h3 className={styles.subMenuTitle}>
              <strong>Make a donation</strong>
            </h3>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-2 mt-2 content text-center">
        <Col sm={12} className="p-4">
          <h3 className={contactStyles.title}>
            <strong>Help impact the lives of future hall of famers by donating now</strong>
          </h3>
        </Col>
        <Col sm={12}>
          <p>The Distinguished Hall of Fame is a 501(c)3 non-profit corporation registered with the IRS and the State of New Jersey formed to recognize alumni who have distinguished themselves in a variety of endeavors, thus providing positive role models for current APHS students. Virtually all the money we receive goes to the students. Our only expenses are mailing, postage, corporate & accounting. A real impact has been made by past Hall of Fame inductees who shared their life stories with students, including the personal and financial hardships they often had to overcome before finally reaching their goals. We have, to date, given a total of $162,000 to a total of 162 students over the past 15 years. We firmly believe that what we have done and what we continue to do has helped the resurgence of the City of Asbury Park, the health of its school system and the stability of the local community.</p>
          <p>On Thursday evening, October 14, 2021, the postponed 2020 Ceremony will take place, and ten more outstanding alumni of Asbury Park High School will be inducted into the Distinguished Alumni Hall of Fame during the ninth induction ceremony dinner to be held at the Sheraton in Eatontown.</p>
          <p>The Hall of Fame Committee will be publishing a commemorative journal that will be distributed at the induction event.  By purchasing an ad in the journal, you will be honoring our Distinguished Alumni, and providing additional resources that will enable the Hall of Fame Committee to continue this valuable program.</p>

          <h4>
            <strong>
              Please complete the form and submit, by September 20, 2021, with your payment, to Asbury Park High School Distinguished Hall of Fame: c/o Marilyn Tomaino, 102 Tanya Circle, Ocean, NJ 07712.
            </strong>
          </h4>
          <Button
            variant="success"
            size="lg"
            className="mt-4 mb-5"
          >
            <strong>
              Print Donation Form
            </strong>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
