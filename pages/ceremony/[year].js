/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import Head from 'next/head';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubMenu from 'layouts/SubMenu';
import styles from 'styles/SubMenu.module.css';
import pageStyle from 'styles/Ceremony.module.css';
import GalleryGrid from 'components/GalleryGrid';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      style={{
        ...style,
        display: 'block',
        color: 'black',
        fontSize: '22px',
      }}
      onKeyPress={() => onClick}
      onClick={onClick}
    />
  );
}

export default function Ceremony({ ceremony, photos }) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    cssEase: 'linear',
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <Container>
      <Head>
        <title>{`Asbury Park High School Hall of Fame - ${ceremony} Ceremony`}</title>
        <meta
          name="description"
          content={`Photos from the Asbury Park High School Hall of Fame ${ceremony} induction ceremony.`}
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12}>
            <h3 className={styles.subMenuTitle}>
              <strong>
                Ceremony:
                {ceremony}
              </strong>
            </h3>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-auto mt-2 pt-5 content">
        <Col sm={12}>
          <Slider {...settings}>
            {photos.map((p) => (
              <img
                key={p._id}
                src={`https://res.cloudinary.com/tumulty-web-services/image/upload${p.image}`}
                alt={p.alt}
                className="mx-auto d-block w-50"
              />
            ))}
          </Slider>
        </Col>
        <Col sm={12} className={pageStyle.borderTop}>
          <GalleryGrid year={ceremony} slides={photos} />
        </Col>
      </Row>
    </Container>
  );
}

export async function getStaticPaths() {
  const years = await fetch(
    `${process.env.BASE_URL}/api/get-ceremony/all`,
  ).then((data) => data.json());

  return {
    paths: years.data.map((year) => `/ceremony/${year}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { year } = params;
  const res = await fetch(
    `${process.env.BASE_URL}/api/get-ceremony/${year}`,
  ).then((data) => data.json());
  const { ceremony, photos } = res.data[0];

  return {
    props: {
      ceremony,
      photos,
    },
  };
}
