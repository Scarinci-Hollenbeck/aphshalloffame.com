import primsa from 'utils/prisma'

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

export const getPageSEO = async (slug: string) => {
  const page = await primsa?.pageSEO.findFirst({
    where: {
      slug,
    },
  })

  return {
    title: page?.pageTitle,
    description: page?.pageMetaDescription,
  }
}

export const adjustProfileImageSize = async (width: number, height: number) => {
  switch (true) {
    case width >= 1000 && height >= 100:
      return {
        width: width / 2.3,
        height: height / 2.3,
      }
    default:
      return {
        width: width / 1.2,
        height: height / 1.2,
      }
  }
}
