import Link from 'next/link'
import PageTitle from 'components/shared/PageTitle'
import members from 'db/members.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Member Directory | Asbury Park High School Hall of Fame',
  description:
    'Here is a list of all the distinguished members of Asbury Park High School Hall of Fame',
}

const Directory = () => (
  <>
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
  </>
)

export default Directory
