'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import SectionTitle from './SectionTitle'
import { genCloudinaryUrl } from '../../utils/constants'
import classNames from 'classnames'
import { Member, Years } from '@prisma/client'

const DEFAULT_YEAR = '2021'

const LoadingPlaceholder = () => <div style={{ height: 250 }} />

const MemberGallery = () => {
  const [currentYear, setCurrentYear] = useState(DEFAULT_YEAR)
  const [years, setYears] = useState<Years[]>([])
  const [members, setMembers] = useState<Member[]>([])

  async function getYears() {
    const req = await fetch('/api/years')
    const data = await req?.json()

    setYears(data)
  }

  async function getMembers(year: string) {
    const request = await fetch('/api/members-by-year', {
      method: 'POST',
      body: JSON.stringify({ currentYear: year }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await request?.json()

    setMembers(data)
  }

  useEffect(() => {
    if (years.length <= 0) {
      getYears()
    }
  }, [years])

  useEffect(() => {
    if (members.length <= 0) {
      getMembers(DEFAULT_YEAR)
    }
  }, [members])

  return (
    <div className="w-full">
      <SectionTitle title="Hall of Fame Members" />
      <ul className="flex flex-row flex-wrap px-4 py-8">
        {years?.map(({ year }) => {
          const btnClass = classNames(
            'rounded text-lg px-4 py-1 mr-4 ring-1 hover:ring-0 mb-3 sm:mb-0',
            {
              'text-site-darkBlue hover:bg-site-lightBlue hover:text-white ring-site-darkBlue':
                currentYear !== year,
              'bg-site-lightBlue text-white ring-site-lightBlue':
                currentYear === year,
            },
          )
          return (
            <li key={year.toString()}>
              <button
                onClick={() => {
                  setCurrentYear(year)
                  getMembers(year)
                }}
                className={btnClass}
              >
                {year}
              </button>
            </li>
          )
        })}
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
                'site/Members/',
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
