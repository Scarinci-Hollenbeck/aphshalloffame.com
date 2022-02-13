import React, { Suspense } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Col from 'react-bootstrap/Col'
import pageStyle from 'styles/Ceremony.module.css'
import PageContainer from 'layouts/PageContainer'
import SEOHead from 'components/shared/SEOHead'

const GalleryGrid = dynamic(() => import('components/Ceremony/GalleryGrid'), {ssr:false})
const GallerySlider = dynamic(() => import('components/Ceremony/GallerySlider'), { ssr: false })
const LoadingSpinner = dynamic(() => import('components/shared/LoadingSpinner'), { ssr: false })


const cloudinary = require('utils/cloudinary')
const { MongoClient } = require('mongodb')

const Ceremony = ({ ceremony, photos }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <PageContainer title={`Ceremony: ${ceremony}`}>
      <SEOHead
        title={`Asbury Park High School Hall of Fame - ${ceremony} Ceremony`}
        metaDescription={`Photos from the Asbury Park High School Hall of Fame ${ceremony} induction ceremony.`}
      />
      <Col sm={12}>
        <GallerySlider photos={photos} />
      </Col>
      <Col sm={12} className={pageStyle.borderTop}>
        <GalleryGrid year={ceremony} slides={photos} />
      </Col>
    </PageContainer>
  )
}

export const getStaticPaths = async () => {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = connection.db(process.env.DB_NAME)
  const ceremonyYears = await db.collection('years').find({}).toArray()

  return {
    paths: ceremonyYears.map((year) => encodeURI(`/ceremony/${year}`)) || [],
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
  /** Serialize the response */
  const photos = request
    .filter(({ public_id }) => public_id.includes(year))
    .map(({ public_id, height, width, secure_url }) => ({
      altText: public_id,
      height,
      width,
      src: secure_url
    }))
    .sort((a, b) => {
      if (a.height < a.width > (b.height < b.width)) {
        return 1
      }
      return -1
    })


  console.log(photos);

  return {
    props: {
      ceremony: year,
      photos,
    },
  }
}

export default Ceremony
