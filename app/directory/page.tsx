import Link from 'next/link'
import PageTitle from 'components/shared/PageTitle'
import members from 'db/members.json'
import directory from 'db/directory.json'
import { Metadata } from 'next'
import { getPageSEO } from 'utils/helpers'

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getPageSEO('/directory')

  return {
    title,
    description,
  }
}

const Directory = () => (
  <>
    <PageTitle title={directory.title} />
    <div className="p-4 text-center">
      <p className="text-xl">{directory.content}</p>
    </div>
    <div className="bg-gray-200 my-0 mx-8">
      {members && (
        <ul className="py-4">
          {members
            .sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
            .map((member) => (
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
  </>
)

export default Directory
