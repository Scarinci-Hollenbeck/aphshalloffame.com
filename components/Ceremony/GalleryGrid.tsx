/* eslint-disable no-underscore-dangle */
'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './Grid.module.css'

const LightBoxView = dynamic(() => import('./LightBoxView'), { ssr: false })

const GalleryGrid = ({ slides, year }) => (
  <div className={styles.gallery}>
    {slides?.length > 0 &&
      slides?.map(({ altText, src, height, width }, index) => {
        const fileName = `ceremony-${year}-photo-${index}.png`

        return (
          <div key={`gallery-${index}`} className={styles.galleryImage}>
            <Image
              src={src}
              alt={altText}
              height={height || 3840}
              width={width || 5760}
            />
            <LightBoxView image={src} fileName={fileName} />
          </div>
        )
      })}
  </div>
)

export default GalleryGrid
