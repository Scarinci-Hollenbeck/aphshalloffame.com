/* eslint-disable @next/next/no-img-element */
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline'
import Slider from 'react-slick'

const PrevArrow = ({ onClick, className }) => (
  <ChevronDoubleLeftIcon
    className={`${className} h-8 w-8 text-black hover:text-black`}
    style={{ left: '-38px' }}
    onClick={onClick}
  />
)

const NextArrow = ({ onClick, className }) => (
  <ChevronDoubleRightIcon
    className={`${className} h-8 w-8 text-black hover:text-black`}
    style={{ right: '-38px' }}
    onClick={onClick}
  />
)

const GallerySlider = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <div className="mx-auto w-100 text-center my-12 my-lg-5">
      <Slider {...settings}>
        {photos?.map(({ altText, src }, index) => (
          <div key={`slide-${index}`}>
            <img
              src={src}
              alt={altText}
              className="mx-auto"
              style={{
                height: 600,
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default GallerySlider
