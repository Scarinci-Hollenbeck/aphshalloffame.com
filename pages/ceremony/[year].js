/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import Head from 'next/head';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubMenu from 'layouts/SubMenu';
import styles from 'styles/SubMenu.module.css';
import pageStyle from 'styles/Ceremony.module.css';
import GalleryGrid from 'components/GalleryGrid';
import LoadingSpinner from 'components/LoadingSpinner';
import dbConnect from 'utils/db-connect';
import Ceremonies from 'models/Ceremonies';

const cloudinary = require('utils/cloudinary');

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
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <LoadingSpinner />
      </div>
    );
  }

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
                {' '}
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
              <div key={p.altText} style={{ height: '500px' }}>
                <img
                  src={`https://res.cloudinary.com/tumulty-web-services/image/upload/${p.image}`}
                  alt={p.altText}
                  height={p.height}
                  width={p.width}
                  className="mx-auto d-block"
                />
              </div>
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
  await dbConnect();

  const ceremonies = await Ceremonies.find({});
  const ceremonyYears = ceremonies.map((c) => c.ceremony);

  return {
    paths: ceremonyYears.map((year) => encodeURI(`/ceremony/${year}`)) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  await dbConnect();
  const { year } = params;

  // const ceremonies = await Ceremonies.find({ ceremony: decodeURI(year) });
  // const { ceremony, photos } = ceremonies[0];
  const request = await cloudinary.api
    .resources({
      resource_type: 'image',
      type: 'upload',
      prefix: `asburyparkhighschoolhalloffame/Ceremony/${year}`,
      max_results: 500,
      context: true,
    })
    .then((res) => res.resources);

  /** Serialize the response */
  const photos = request.map((photo) => ({
    altText: photo.public_id,
    height: photo.height,
    width: photo.width,
  })).sort((a, b) => (((a.height > a.width) > (b.height > b.width)) ? 1 : -1));

  /** fix the heights to be 350px on all photos */
  const croppedPhotos = photos.map((photo) => {
    const height = 500;
    const imgCropped = cloudinary.image(photo.altText, {
      height,
      crop: 'scale',
    });
    const calculateWidth = height / (photo.height / photo.width);

    photo.image = imgCropped.match(/'([^']+)'/)[1].replace('http://res.cloudinary.com/tumulty-web-services/image/upload/', '');
    photo.width = parseInt(calculateWidth.toFixed(0), 10);
    photo.height = height;
    return photo;
  });

  return {
    props: {
      ceremony: year,
      photos: croppedPhotos,
    },
  };
}
