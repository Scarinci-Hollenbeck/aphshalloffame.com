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
  const page = await primsa?.aphs_pageSEO.findFirst({
    where: {
      slug,
    },
  })

  return {
    title: page?.pageTitle,
    description: page?.pageMetaDescription,
  }
}

export const generateMemberMetaData = (
  name: string | undefined,
  memberClass: string | undefined,
  inducted: string | undefined,
) => {
  return {
    title: `${name} | Asbury Park High School Hall of Fame`,
    description: `${name} graduated from Asbury Park High School in ${memberClass}, and was inducted to the Asbury Park High School Hall of Fame in ${inducted}.`,
  }
}

export const generateCeremonyMetaData = (year: string) => {
  return {
    title: `Asbury Park High School Hall of Fame - ${year} Ceremony`,
    description: `Photos from the Asbury Park High School Hall of Fame ${year} induction ceremony.`,
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
        width: width / 1.4,
        height: height / 1.4,
      }
  }
}
