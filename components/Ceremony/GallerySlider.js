import Image from 'next/image'
import Slider from 'react-slick'
import Arrow from 'components/Ceremony/Arrow'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CLOUDINARY_BASE_URL } from 'utils/constants'
const GallerySlider = ({ photos }) => {
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
  }
  return (
    <Slider {...settings}>
      {photos.map((p) => (
        <div
          key={p.altText}
          className="mx-auto d-block text-center"
          style={{ height: '500px' }}
        >
          <Image
            src={p.image}
            alt={p.altText}
            height={p.height}
            width={p.width}
            layout="intrinsic"
            priority={true}
          />
        </div>
      ))}
    </Slider>
  )
}

export default GallerySlider
