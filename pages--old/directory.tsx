import Link from 'next/link'
import React from 'react'
import SEOHead from 'components/shared/SEOHead'
import PageTitle from 'components/shared/PageTitle'
import SiteLayout from 'layouts/SiteLayout'
import members from 'db/members.json'

const Directory = () => {
  return (
    <SiteLayout>
      <SEOHead
        title="Member Directory | Asbury Park High School Hall of Fame"
        metaDescription="Here is a list of all the distinguished members of Asbury Park High School Hall of Fame"
      />
      <PageTitle title="Member Directory" />
      <div className="bg-gray-200 my-0 mx-8">
        {members && (
          <ul className="py-4">
            {members.map((member) => (
              <li key={member?.name} className="mb-4">
                <Link href={encodeURI(`/inductee/${member?.slug}`)}>
                  <>
                    <span className="font-bold underline text-xl mr-2">
                      {member?.name}
                    </span>
                    <span className="font-normal">
                      {' '}
                      Class: {member?.class}, Inducted: {member?.inducted}{' '}
                    </span>
                  </>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SiteLayout>
  )
}

export default Directory
