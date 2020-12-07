/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubMenu from 'layouts/SubMenu';
import styles from 'styles/SubMenu.module.css';
import pageStyle from 'styles/Ceremony.module.css';
import GalleryGrid from 'components/GalleryGrid';
import LoadingError from 'components/LoadingError';
import LoadingSpinner from 'components/LoadingSpinner';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      style={{
        ...style, display: 'block', color: 'black', fontSize: '22px',
      }}
      onKeyPress={() => onClick}
      onClick={onClick}
    />
  );
}

export default function Ceremony() {
  const router = useRouter();
  const year = router.asPath.split('/').filter((a) => a !== '')[1];
  const {
    data: ceremony,
    error: ceremonyErr,
  } = useSWR(`/api/get-ceremony/${year}`, (url) => fetch(url).then((r) => r.json()));

  if (ceremonyErr) return <LoadingError />;
  if (!ceremony) return <LoadingSpinner />;

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
        <title>{`Asbury Park High School Hall of Fame - ${year} Ceremony`}</title>
        <meta
          name="description"
          content={`Photos from the Asbury Park High School Hall of Fame ${year} induction ceremony.`}
        />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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
          <Slider {...settings}>
            {ceremony.data[0].photos.map((p) => (
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
          <GalleryGrid year={year} slides={ceremony.data[0].photos} />
        </Col>
      </Row>
    </Container>
  );
}
