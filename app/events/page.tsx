import PageTitle from 'components/shared/PageTitle'
import events from 'db/events.json'
import { Metadata } from 'next'

type Content = (typeof events)[0]

export const metadata: Metadata = {
  title: 'Events | Asbury Park High School Hall of Fame',
  description:
    'APHS Distinguished Alumni Hall of Fame Induction Ceremony 2020.The Ceremony dinner will be Thursday, October 14, 2021',
}

const Events = () => {
  const content = events[0] as Content

  return (
    <>
      <PageTitle title="Events" />
      <div className="p-4 text-center">
        <h4 className="text-3xl font-bold">{content?.title}</h4>
        <p className="text-xl">{content?.details}</p>
      </div>
      <ul className="mx-2 lg:mx-8 py-8">
        {content?.forms &&
          content?.forms.map((form) => (
            <li key={form?.formTitle}>
              <div className="flex flex-row mb-2 mt-4">
                <a
                  href={form?.btnUrl}
                  className="mb-4  text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded"
                  download
                >
                  {form?.btnLabel}
                </a>
              </div>
              <iframe
                title={form?.formTitle}
                src={form?.formUrl}
                id={form?.formId}
                style={{
                  minHeight: '900px',
                  minWidth: '100%',
                }}
              />
            </li>
          ))}
      </ul>
    </>
  )
}

export default Events
