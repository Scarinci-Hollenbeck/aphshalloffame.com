'use client'
import { Disclosure } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useSelectedLayoutSegments } from 'next/navigation'
import navigation from 'db/navigation.json'
import Link from 'next/link'
import { merriWeather } from 'app/font'

const currentUrl = (linkUrl, current) => {
  let currentUrl = current

  if (current?.includes('inductee')) {
    currentUrl = '/directory'
  }

  if (current?.includes('ceremony')) {
    currentUrl = '/ceremony'
  }

  if (
    current?.includes('history') ||
    current?.includes('mission-statement') ||
    current === undefined
  ) {
    currentUrl = '/'
  }

  return (
    linkUrl?.replace(/\//g, '').toLowerCase() ===
    currentUrl?.replace(/\//g, '').toLowerCase()
  )
}

const GlobalNav = () => {
  const [selectedLayoutSegments] = useSelectedLayoutSegments()

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl lg:px-6 lg:px-8 mx-2 lg:mx-8 border-b-2 py-6 border-gray-200">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-center">
                  <Link href="/">
                    <h1 className="mt-2 mb-0 text-xl lg:text-3xl text-site-darkBlue font-black font-openSans">
                      Asbury Park High School
                    </h1>
                    <h2
                      className={`mt-0 text-base lg:text-2xl text-site-lightBlue ${merriWeather.className}`}
                    >
                      Distinguished Alumni Hall of Fame
                    </h2>
                  </Link>
                </div>
                <div className="hidden px-2 lg:block">
                  <div className="flex space-x-4 mt-4">
                    {navigation.map((item) =>
                      item.children === null ? (
                        <Link
                          key={item.label || item.url}
                          href={item.url}
                          className={`${
                            currentUrl(item.url, selectedLayoutSegments)
                              ? 'text-site-darkBlue'
                              : 'text-site-lightBlue'
                          } uppercase font-bold`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button
                              className={`${
                                currentUrl(item.url, selectedLayoutSegments)
                                  ? 'text-site-darkBlue'
                                  : 'text-site-lightBlue'
                              } uppercase font-bold flex flex-row"`}
                            >
                              {item.label}
                              <ChevronDownIcon
                                className="-mr-1 ml-1 h-4 w-4 font-bold my-1"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-3">
                              {item.children
                                .sort((a, b) => (a < b ? 1 : -1))
                                .map((year, index) => (
                                  <Menu.Item
                                    key={year.toString() || `year-${index}`}
                                  >
                                    <Link
                                      href={`/ceremony/${year}`}
                                      className="block px-2 mb-1 text-lg"
                                    >
                                      {year}
                                    </Link>
                                  </Menu.Item>
                                ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="flex flex-col m-4">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.label}
                  as="a"
                  href={item.url}
                  className="mb-4"
                >
                  {item.label}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default GlobalNav
