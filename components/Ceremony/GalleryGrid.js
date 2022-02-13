/* eslint-disable no-underscore-dangle */
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from 'styles/GalleryGrid.module.css'

const LightBoxView = dynamic(() => import('./LightBoxView'), { ssr: false })

const GalleryGrid = ({ slides, year }) => (
  <div className={styles.gallery}>
    {slides.length > 0 &&
      slides.map((slide, index) => (
        <div key={slide.altText} className={styles.galleryImage}>
          <Image
            src={slide.image}
            alt={slide.altText}
            height={slide.height}
            width={slide.width}
          />
          <LightBoxView
            image={slide.image}
            fileName={`ceremony-${year}-photo-${index}.png`}
          />
        </div>
      ))}
  </div>
)

export default GalleryGrid
