/* eslint-disable no-underscore-dangle */
'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const LightBoxView = dynamic(() => import('./LightBoxView'))

const GalleryGrid = ({ slides, year }) => (
  <div className="grid grid-cols-1 lg:m-auto lg:grid-cols-3">
    {slides?.length > 0 &&
      slides?.map(({ altText, src, height, width }, index: number) => {
        const fileName = `ceremony-${year}-photo-${index}.png`

        return (
          <div key={fileName} className="lg:mr-3">
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
