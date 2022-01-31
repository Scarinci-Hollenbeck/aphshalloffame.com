import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import SEOHead from 'components/shared/SEOHead'
import Title from 'components/Contact/Title'
import ContactMembers from 'components/Contact/ContactMembers'
import PageContainer from 'layouts/PageContainer'

const { MongoClient } = require('mongodb')

const ContactForm = dynamic(() => import('components/Contact/ContactForm'))

const Contact = ({ contactMembers }) => (
  <PageContainer title="Contact">
    <SEOHead
      title="Contact Us - Asbury Park High School Hall of Fame"
      metaDescription="Get in touch to learn more about the distinguished members of Asbury Park High School Hall of Fame"
    />
    <Title />
    <ContactMembers members={contactMembers} />
    <ContactForm />
  </PageContainer>
)

export const getStaticProps = async () => {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = connection.db(process.env.DB_NAME)
  const contactMembers = await db
    .collection('contactMembers')
    .find({})
    .toArray()

  return {
    props: {
      contactMembers: JSON.parse(JSON.stringify(contactMembers)),
    },
  }
}

export default Contact
