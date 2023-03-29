/* eslint-disable import/prefer-default-export */

export const createMarkup = (content: string) => ({ __html: content })

export const fetchImageForDownload = (imageUrl: string, fileName: string) =>
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

export function printDoc(doc: string) {
  window.open(doc, 'PRINT', 'height=2000,width=1000')
}

export const aspectRatioConversion = (width: number, height: number) => {
  const aspectRatio = width / height

  return {
    width: height * aspectRatio,
    height,
  }
}