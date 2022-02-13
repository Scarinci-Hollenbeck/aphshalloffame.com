import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import useSWR from 'swr'
import PageContainer from 'layouts/PageContainer'
import SEOHead from 'components/shared/SEOHead'

const MemberLink = dynamic(() => import('components/Directory/MemberLink'), { ssr: false })
const LoadingSpinner = dynamic(() => import('components/shared/LoadingSpinner'), { ssr: false })
const LoadingError = dynamic(() => import('components/shared/LoadingError'), { ssr: false })

const Directory = () => {
  const [members, setMembers] = useState([])

  const { data, error } = useSWR(`/api/get-members-by-year/all`, (url) =>
    fetch(url).then((r) => r.json())
  )

  useEffect(() => {
    if (data?.response) {
      setMembers(data?.response)
    }
  }, [data])

  if (!data) {
    return (
      <div className="my-5 py-5">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    ;<div className="my-5 py-5">
      <LoadingError />
    </div>
  }

  return (
    <PageContainer title="APHS Hall of Fame Member Directory">
      <SEOHead
        title="Member Directory - Asbury Park High School Hall of Fame"
        metaDescription="Here is a list of all the distinguished members of Asbury Park High School Hall of Fame"
      />
      {members && (
        <ul className="m-4">
          {members.map((member) => (
            <MemberLink {...member} key={member._id} />
          ))}
        </ul>
      )}
      <style jsx>
        {`
          li:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        `}
      </style>
    </PageContainer>
  )
}

export default Directory
