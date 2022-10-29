import Image from 'next/image'
import { Carousel } from 'react-bootstrap'
import { aspectRatioConversion } from 'utils/helpers'

const GallerySlider = ({ photos }) => {
  return (
    <div className="mx-auto w-100 text-center my-3 my-lg-5">
      <Carousel fade variant="dark" indicators={false}>
        {photos?.map(({ altText, src }) => (
          <Carousel.Item key={altText}>
            <div
              style={{ minHeight: '60vh', width: '100%', position: 'relative' }}
            >
              <Image
                src={src}
                alt={altText}
                layout="fill"
                priority={true}
                objectFit="contain"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default GallerySlider
