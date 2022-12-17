import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import SEOHead from 'components/shared/SEOHead'
import PageTitle from 'components/shared/PageTitle'
import SiteLayout from 'layouts/SiteLayout'
import members from 'db/members.json'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

const cloudinary = require('utils/cloudinary')

const LoadingSpinner = dynamic(
  () => import('components/shared/LoadingSpinner'),
  { ssr: false }
)

const Inductee = ({
  member,
  profileImage,
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
        title={`${member.name} | Asbury Park High School Hall of Fame`}
        metaDescription={`${member.name} graduated from Asbury Park High School in ${member.class}, and was inducted to the Asbury Park High School Hall of Fame in ${member.inducted}.`}
      />
      <PageTitle title="Profile" />
      <div className="bg-gray-200 my-0 mx-8 p-2">
        <div className="flex flex-col md:flex-row">
          {profileImage && (
            <div className="w-full lg:w-1/2 my-6 lg:mr-6 xl:mr-0 xl:ml-8">
              <Image
                src={profileImage?.src}
                alt={profileImage?.alt}
                width={profileImage?.width / 1.2}
                height={profileImage?.height / 1.2}
                priority
              />
            </div>
          )}
          <div className="w-full lg:w-1/2">
            <h3 className="my-6">
              <strong className="font-serif text-site-darkBlue text-4xl">
                {member?.name}
              </strong>
            </h3>
            <div className="block p-4 w-full bg-site-lightBlue">
              <p className="p-0 m-0 font-serif text-white text-xl">
                <span className="mr-4">
                  <strong>Class:</strong> {member?.class}
                </span>
                <strong>Inducted:</strong> {member?.inducted}
              </p>
            </div>
            <span
              className="py-4 px-4 content"
              dangerouslySetInnerHTML={{ __html: member?.biography }}
            />
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: members.map(({ slug }) => `/inductee/${slug}`),
    fallback: 'blocking', // can also be true or 'blocking'
  }
}

export const getStaticProps = async (context) => {
  const slug = context?.params?.slug
  const member = members.find((member) => member?.slug === slug)

  const request = await cloudinary.search
    .expression(member?.slug)
    .execute()
    .then((res) => res.resources)

  let profileImage = {
    src: request[0]?.url.replace('png', 'webp').replace('jpg', 'webp'),
    width: request[0]?.width,
    height: request[0]?.height,
    alt: request[0]?.filename,
  }

  return {
    props: { member, profileImage },
  }
}

export default Inductee
