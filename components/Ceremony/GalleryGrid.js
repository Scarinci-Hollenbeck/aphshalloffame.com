/* eslint-disable no-underscore-dangle */
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from 'styles/GalleryGrid.module.css'

const LightBoxView = dynamic(() => import('./LightBoxView'), { ssr: false })

const GalleryGrid = ({ slides, year }) => (
  <div className={styles.gallery}>
    {slides.length > 0 &&
      slides.map(({ altText, src, height, width }, index) => (
        <div key={altText} className={styles.galleryImage}>
          <Image
            src={src}
            alt={altText}
            height={height}
            width={width}
          />
          <LightBoxView
            image={src}
            fileName={`ceremony-${year}-photo-${index}.png`}
          />
        </div>
      ))}
  </div>
)

export default GalleryGrid
