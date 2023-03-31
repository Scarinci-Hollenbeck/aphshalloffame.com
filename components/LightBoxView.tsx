'use client'
import { useState } from 'react'
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'
import { fetchImageForDownload } from 'utils/helpers'

const LightBoxView = ({ image, fileName }) => {
  const [open, setOpen] = useState(false)

  function DownloadButton() {
    return (
      <button
        type="button"
        onClick={() => fetchImageForDownload(image, fileName)}
        className="inline mb-1 mr-1 text-white text-base hover:underline cursor-pointer"
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
        className="inline mb-1 mr-1 text-violet-800 text-base hover:underline cursor-pointer"
      >
        Download
      </button>
      <button
        type="button"
        className="inline mb-1 mr-1 text-violet-800 text-base hover:underline cursor-pointer"
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
