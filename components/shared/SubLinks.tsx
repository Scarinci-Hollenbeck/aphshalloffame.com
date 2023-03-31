import Link from 'next/link'
import subNavs from '../../db/sub-navigation.json'
import { useRouter } from 'next/router'

const SubLinks = () => {
  return (
    <div className="py-4 sm:px-8 flex flex-col sm:flex-row sm:justify-between bg-white">
      <p className="font-black text-site-darkBlue text-xl text-center sm:text-left sm:text-2xl sm:w-1/4">
        Welcome
      </p>
      <ul className="flex flex-col sm:flex-row  mt-2 sm:mt-0 sm:justify-center">
        {subNavs.map((link) => {
          return (
            <li key={link.label}>
              <Link
                href={link.url}
                className="font-bold text-site-darkBlue text-base sm:text-lg md:text-2xl mb-4 sm:mb-0 sm:mr-6 underline"
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="hidden sm:block sm:w-1/4"></div>
    </div>
  )
}

export default SubLinks
