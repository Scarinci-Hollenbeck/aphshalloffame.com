import React from 'react'
import dynamic from 'next/dynamic'
import SEOHead from 'components/shared/SEOHead'
import contacts from 'db/contactMembers.json'
import SiteLayout from 'layouts/SiteLayout'
import PageTitle from 'components/shared/PageTitle'
import SectionTitle from 'components/shared/SectionTitle'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

const ContactForm = dynamic(() => import('components/Contact/ContactForm'))

type Contact = typeof contacts[0]

const Contact = () => {
  console.log(contacts)

  return (
    <SiteLayout>
      <SEOHead
        title="Contact Us | Asbury Park High School Hall of Fame"
        metaDescription="Get in touch to learn more about the distinguished members of Asbury Park High School Hall of Fame"
      />
      <PageTitle title="Contact" />
      <SectionTitle title="To get in touch" />
      <p className="text-lg font-black text-center my-4">
        Contact one of our members
      </p>
      <ul className="flex flex-col max-w-xl mx-auto my-12">
        {contacts?.map((contact: Contact) => (
          <li
            key={contact?.name}
            className="bg-white shadow-lg mb-5 rounded p-4 flex flex-row items-center"
          >
            <EnvelopeIcon className="text-gray-500 h-6 w-6 mr-6" />
            <p className="flex flex-col text-md font-bold">
              <span>{contact?.name}</span>
              <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
            </p>
          </li>
        ))}
      </ul>
      <ContactForm />
    </SiteLayout>
  )
}

export default Contact
