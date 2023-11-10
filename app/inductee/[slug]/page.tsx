import Image from 'next/image'
import PageTitle from 'components/shared/PageTitle'
import { Metadata } from 'next'
import cloudinary from 'utils/cloudinary'
import prisma from '../../../utils/prisma'
import { Member } from '@prisma/client'
import { adjustProfileImageSize } from 'utils/helpers'

async function getMember(slug) {
  const member = await prisma.member.findFirst({
    where: {
      slug,
    },
  })

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

  return { member, profileImage }
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { member } = await getMember(params.slug)
  return {
    title: `${member?.name} | Asbury Park High School Hall of Fame`,
    description: `${member?.name} graduated from Asbury Park High School in ${member?.class}, and was inducted to the Asbury Park High School Hall of Fame in ${member?.inducted}.`,
  }
}

export async function generateStaticParams() {
  const data = await prisma.member.findMany()
  return data.map((c: Member) => `/inductee/${c.slug}`)
}

const Inductee = async ({ params: { slug } }) => {
  const { member, profileImage } = await getMember(slug)
  const { width, height } = await adjustProfileImageSize(
    profileImage.width,
    profileImage.height,
  )
  const altName = member?.name as string

  return (
    <>
      <PageTitle title="Profile" />
      <div className="bg-gray-200 my-0 mx-8 p-2">
        <div className="flex flex-col md:flex-row">
          {profileImage && width && height && (
            <div className="w-full lg:w-1/2 my-6 lg:mr-6 xl:mr-0 xl:ml-8">
              <Image
                src={profileImage?.src}
                alt={altName}
                width={width}
                height={height}
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
              dangerouslySetInnerHTML={{ __html: member?.biography as string }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Inductee
