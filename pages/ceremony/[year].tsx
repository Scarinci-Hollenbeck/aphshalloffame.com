import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import SEOHead from 'components/shared/SEOHead'
import ceremonies from '../../db/ceremonies.json'
import Image from 'next/image'
import PageTitle from 'components/shared/PageTitle'
import SiteLayout from 'layouts/SiteLayout'
import { InferGetStaticPropsType } from 'next'

const GalleryGrid = dynamic(() => import('components/Ceremony/GalleryGrid'), {
  ssr: false,
})
const GallerySlider = dynamic(
  () => import('components/Ceremony/GallerySlider'),
  { ssr: false }
)
const LoadingSpinner = dynamic(
  () => import('components/shared/LoadingSpinner'),
  { ssr: false }
)

const cloudinary = require('utils/cloudinary')

const Ceremony = ({
  ceremony,
  photos,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <SiteLayout>
      <SEOHead
        title={`Asbury Park High School Hall of Fame - ${ceremony} Ceremony`}
        metaDescription={`Photos from the Asbury Park High School Hall of Fame ${ceremony} induction ceremony.`}
      />
      <PageTitle title={`Ceremony: ${ceremony}`} />
      <div className="bg-gray-200 my-0 mx-8 p-2">
        <GallerySlider photos={photos} />
        <GalleryGrid year={ceremony} slides={photos} />
      </div>
    </SiteLayout>
  )
}

export const getStaticPaths = async () => {
  return {
    paths:
      ceremonies?.map(({ ceremony }) => encodeURI(`/ceremony/${ceremony}`)) ||
      [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const { year } = params
  const request = await cloudinary.api
    .resources({
      resource_type: 'image',
      type: 'upload',
      prefix: `site/ceremonies`,
      max_results: 500,
      context: true,
    })
    .then((res) => res.resources)
  console.log({ request })
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

  return {
    props: {
      ceremony: year,
      photos: photos || null,
    },
  }
}

export default Ceremony
