import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import styles from 'styles/LightBoxView.module.css'
import { fetchImageForDownload } from 'utils/helpers'

const LightBoxView = ({ image, fileName }) => {
  const [open, setOpen] = useState(false)

  function DownloadButton() {
    return (
      <button
        type="button"
        onClick={() => fetchImageForDownload(image, fileName)}
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
        onClick={() => fetchImageForDownload(image, fileName)}
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
          mainSrc={image}
          onCloseRequest={() => setOpen(false)}
          toolbarButtons={[<DownloadButton key="download-button" />]}
        />
      )}
    </>
  )
}

export default LightBoxView
