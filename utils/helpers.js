/* eslint-disable import/prefer-default-export */

export const createMarkup = (content) => ({ __html: content })

export const fetchImageForDownload = (imageUrl, fileName) =>
  fetch(imageUrl)
    .then((response) => response.blob())
    .then((data) => {
      const url = window.URL.createObjectURL(data)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url

      a.download = fileName
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    })

export function printDoc(doc) {
  window.open(doc, 'PRINT', 'height=2000,width=1000')
}

export const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const aspectRatioConversion = (width, height) => {
  const aspectRatio = width / height;

  return {
    width: height * aspectRatio,
    height
  }
}
