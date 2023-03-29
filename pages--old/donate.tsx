import React from 'react'
import SEOHead from 'components/shared/SEOHead'
import PageTitle from 'components/shared/PageTitle'
import SiteLayout from 'layouts/SiteLayout'
import donate from 'db/donate.json'
import SectionTitle from 'components/shared/SectionTitle'

const Donate = () => {
  return (
    <SiteLayout>
      <SEOHead
        title="Donate | Asbury Park High School Hall of Fame"
        metaDescription="The Distinguished Hall of Fame is a 501(c)3 non-profit corporation registered with the IRS and the State of New Jersey formed.APHS Distinguished Alumni Hall of Fame Induction Ceremony 2020.The Ceremony dinner will be Thursday, October 14, 2021"
      />
      <PageTitle title="Donate" />
      <div className="mx-2 lg:mx-8 py-4">
        <SectionTitle title=" Help impact the lives of future hall of famers by donating now" />
        <br />
        {donate?.map((donate) => (
          <span key={donate?.content}>
            <div
              className="content mb-8"
              dangerouslySetInnerHTML={{ __html: donate?.content }}
            />
            <a
              href={donate?.btnUrl}
              className="mt-3 mb-8 block text-center text-xl text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded"
              download
              style={{
                maxWidth: 225,
              }}
            >
              {donate?.btnLabel}
            </a>
          </span>
        ))}
      </div>
    </SiteLayout>
  )
}

export default Donate
