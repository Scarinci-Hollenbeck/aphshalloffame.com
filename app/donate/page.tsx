import PageTitle from 'components/shared/PageTitle'
import donate from 'db/donate.json'
import SectionTitle from 'components/shared/SectionTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate | Asbury Park High School Hall of Fame',
  description:
    'The Distinguished Hall of Fame is a 501(c)3 non-profit corporation registered with the IRS and the State of New Jersey formed.',
}

const Donate = () => (
  <>
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
  </>
)

export default Donate
