import dynamic from 'next/dynamic'
import PageTitle from 'components/shared/PageTitle'
import cloudinary from 'utils/cloudinary'
import { Metadata } from 'next'
import prisma from '../../../prisma'
import { Ceremony } from '@prisma/client'

const GalleryGrid = dynamic(() => import('components/GalleryGrid'), {})
const GallerySlider = dynamic(() => import('components/GallerySlider'))

const getPhotos = async (year) => {
  const request = await cloudinary.api
    .resources({
      resource_type: 'image',
      type: 'upload',
      prefix: `site/ceremonies`,
      max_results: 500,
      context: true,
    })
    .then((res) => res.resources)

  /** Serialize the response */
  const photos = request
    .filter(({ public_id }) => public_id.includes(year))
    .map(({ public_id, height, width, secure_url }) => ({
      altText: public_id,
      height,
      width,
      src: secure_url,
    }))
    .sort((a, b) => {
      if (b.height < b.width) {
        return 1
      }
      return -1
    })

  return photos
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const year = params.year

  return {
    title: `Asbury Park High School Hall of Fame - ${year} Ceremony`,
    description: `Photos from the Asbury Park High School Hall of Fame ${year} induction ceremony.`,
  }
}

export async function generateStaticParams() {
  const data = await prisma.ceremony.findMany()
  return data.map((c: Ceremony) => `/ceremony/${c.ceremony}`)
}

const Ceremony = async ({ params: { year } }) => {
  const photos = await getPhotos(year)

  return (
    <>
      <PageTitle title={`Ceremony: ${year}`} />
      <div className="bg-gray-200 my-0 mx-8 p-2">
        <GallerySlider photos={photos} />
        <GalleryGrid year={year} slides={photos} />
      </div>
    </>
  )
}

export default Ceremony
