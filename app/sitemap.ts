import { MetadataRoute } from 'next'
import navigation from 'db/navigation.json'
import { SITE_URL } from 'utils/constants'
import prisma from 'utils/prisma'
import { Ceremony, Member } from '@prisma/client'

export async function generateCeremonyLinks() {
  const data = await prisma.ceremony.findMany()

  return data.map((c: Ceremony) => ({
    url: `${SITE_URL}/ceremony/${c.ceremony}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))
}

export async function generateInducteeLinks() {
  const data = await prisma.member.findMany()

  return data.map((c: Member) => ({
    url: `${SITE_URL}/inductee/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))
}

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const siteLinks = [...navigation].map((link) => ({
    url: `${SITE_URL}${link?.url}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  const ceremonyLinks = await generateCeremonyLinks()
  const inducteeLinks = await generateInducteeLinks()

  console.log(inducteeLinks)

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    //@ts-ignore
    ...siteLinks,
    //@ts-ignore
    ...ceremonyLinks,
    //@ts-ignore
    ...inducteeLinks,
  ]

  return []
}

export default sitemap
