import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import styles from 'styles/LightBoxView.module.css'
import { fetchImageForDownload } from 'utils/helpers'

export default function LightBoxView({ image, fileName }) {
  const [open, setOpen] = useState(false)
  const lightBoxLink = `https://res.cloudinary.com/tumulty-web-services/image/upload${image}`

  function DownloadButton() {
    return (
      <button
        type="button"
        onClick={() => fetchImageForDownload(lightBoxLink, fileName)}
        className={`${styles.removeBtnStyles} ${styles.zoomInLink} ${styles.white}`}
      >
        Download
      </button>
    )
  }

  return (
    <>
      <button
        type="button"
        onClick={() => fetchImageForDownload(lightBoxLink, fileName)}
        className={`${styles.removeBtnStyles} ${styles.zoomInLink}`}
      >
        Download
      </button>
      <button
        type="button"
        className={`${styles.removeBtnStyles} ${styles.zoomInLink}`}
        onClick={() => setOpen(true)}
      >
        Zoom In
      </button>
      {open && (
        <Lightbox
          mainSrc={lightBoxLink}
          onCloseRequest={() => setOpen(false)}
          toolbarButtons={[<DownloadButton key="download-button" />]}
        />
      )}
    </>
  )
}
