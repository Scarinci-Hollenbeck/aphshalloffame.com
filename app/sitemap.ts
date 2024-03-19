import { MetadataRoute } from 'next'
import navigation from 'db/navigation.json'
import { SITE_URL } from 'utils/constants'
import prisma from 'utils/prisma'
import { aphs_ceremony, aphs_member } from '@prisma/client'

export async function generateCeremonyLinks() {
  const data = await prisma.aphs_ceremony.findMany()

  return data.map((c: aphs_ceremony) => ({
    url: `${SITE_URL}/ceremony/${c.ceremony}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))
}

export async function generateInducteeLinks() {
  const data = await prisma.aphs_member.findMany()

  return data.map((c: aphs_member) => ({
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

  //@ts-ignore
  return [
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
