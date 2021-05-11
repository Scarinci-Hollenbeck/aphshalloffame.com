/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import styles from 'styles/GalleryGrid.module.css';
import LightBoxView from './LightBoxView';

export default function GalleryGrid({ slides, year }) {
  return (
    <div className={styles.gallery}>
      {slides.length > 0
        && slides.map((slide, index) => (
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
  );
}
