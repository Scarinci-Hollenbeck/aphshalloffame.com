/* eslint-disable max-len */
/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import Head from 'next/head';
import Image from 'next/image';
import useSWR from 'swr';
import { Carousel } from 'react-responsive-carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubMenu from 'layouts/SubMenu';
import styles from 'styles/SubMenu.module.css';
import pageStyle from 'styles/Ceremony.module.css';
import GalleryGrid from 'components/GalleryGrid';

export default function Ceremony({ year }) {
  const {
    data: ceremony,
    error: ceremonyErr,
  } = useSWR(`/api/get-ceremony/${year}`, (url) => fetch(url).then((r) => r.json()));

  if (ceremonyErr) return <div>failed to ceremony photos</div>;
  if (!ceremony) return <div>loading ceremony photos...</div>;


  return (
    <Container>
      <Head>
        <title>{`Asbury Park High School Hall of Fame - ${year} Ceremony`}</title>
        <meta
          name="description"
          content={`Photos from the Asbury Park High School Hall of Fame ${year} induction ceremony.`}
        />
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12}>
            <h3 className={styles.subMenuTitle}>
              <strong>
                Ceremony:
                {year}
              </strong>
            </h3>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-auto mt-2 pt-5 content">
        <Col sm={12}>
        <Carousel>
            {ceremony.data[0].photos.map((p) => (
              <Image
                key={p._id}
                src={p.image}
                height={p.height}
                width={p.width}
                alt={p.alt}
                layout="intrinsic"
                className="mx-3"
              />
            ))}
          </Carousel>
        </Col>
        <Col sm={12} className={pageStyle.borderTop}>
          <GalleryGrid year={year} slides={ceremony.data[0].photos} />
        </Col>
      </Row>
    </Container>
  );
}

export async function getServerSideProps({ params, req }) {
  const { year } = params;

  return {
    props: {
      year: year
    },
  };
}
