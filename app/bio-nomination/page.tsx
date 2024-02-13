import PageTitle from 'components/shared/PageTitle'
import bioNomination from 'db/bio-nomination.json'
import { Metadata } from 'next'
import { BIO_NOMINATION_TITLE } from 'utils/constants'
import { getPageSEO } from 'utils/helpers'

type Content = (typeof bioNomination)[0]

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getPageSEO('/bio-nomination')

  return {
    title,
    description,
  }
}

const BioNomination = () => {
  const content = bioNomination[0] as Content

  return (
    <>
      <PageTitle title={BIO_NOMINATION_TITLE} />
      <ul className="mx-2 lg:mx-8 py-8">
        <li key={content?.formTitle}>
          <div className="flex flex-row mb-2 mt-4">
            <a
              href={content?.btnUrl}
              className="mb-4  text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded"
              download
            >
              {content?.btnLabel}
            </a>
          </div>
          <iframe
            title={content?.formTitle}
            src={content?.formUrl}
            id={content?.formId}
            style={{
              minHeight: '900px',
              minWidth: '100%',
            }}
          />
        </li>
      </ul>
    </>
  )
}

export default BioNomination
