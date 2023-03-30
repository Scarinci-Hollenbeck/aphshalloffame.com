'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import SectionTitle from './SectionTitle'
import { genCloudinaryUrl } from '../../utils/constants'

const LoadingPlaceholder = () => <div style={{ height: 250 }} />

const MemberGallery = () => {
  const [currentYear, setCurrentYear] = useState('2021')

  const { data: years } = useQuery({
    queryKey: ['years'],
    queryFn: () =>
      fetch('/api/years')
        .then((res) => res.json())
        .then((data) => data?.data)
        .catch((err) => err),
  })

  const { data: members } = useQuery({
    queryKey: ['members', currentYear],
    queryFn: () =>
      fetch('/api/members-by-year', {
        method: 'POST',
        body: JSON.stringify(currentYear),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => data?.data)
        .catch((err) => err),
  })

  return (
    <div className="w-full">
      <SectionTitle title="Hall of Fame Members" />
      <ul className="flex flex-row flex-wrap px-4 py-8">
        {years?.map(({ year }) => (
          <li key={year.toString()}>
            <button
              onClick={() => setCurrentYear(year)}
              className="rounded text-lg text-site-darkBlue px-4 py-1 mr-4 ring-1 ring-site-darkBlue hover:bg-site-lightBlue hover:text-white hover:ring-0"
            >
              {year}
            </button>
          </li>
        ))}
        <li>
          <Link
            href="/directory"
            className="rounded text-lg text-site-darkBlue block px-4 py-1 mr-4 ring-1 ring-site-darkBlue hover:bg-site-lightBlue hover:text-white hover:ring-0"
          >
            Directory
          </Link>
        </li>
      </ul>
      <div className="flex flex-row flex-wrap px-4">
        {members?.length > 0 ? (
          <>
            {members.map((member) => {
              const imgBaseUrl = genCloudinaryUrl(
                '/c_scale,h_191/',
                'site/Members/'
              )
              const imgExtension = `${member?.slug}.webp`

              return (
                <Link
                  key={member?.name}
                  href={encodeURI(`/inductee/${member?.slug}`)}
                >
                  <div
                    className="h-48 w-36 bg-cover bg-center cursor-pointer"
                    style={{
                      backgroundImage: `url(${imgBaseUrl}${imgExtension})`,
                    }}
                  >
                    <div className="bg-black bg-opacity-0 w-full h-full hover:bg-opacity-40 transition-all duration-1000">
                      <div className="opacity-0 hover:opacity-100 duration-1000 flex flex-col w-full h-full m-0 p-0 justify-center items-center text-center">
                        <span className="text-center text-white text-sm">
                          {member?.name}
                        </span>
                        <span className="text-center text-white text-sm">
                          Inducted: {member?.inducted}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </>
        ) : (
          <LoadingPlaceholder />
        )}
      </div>
    </div>
  )
}

export default MemberGallery
