import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Button } from 'react-bootstrap'

import eventPageStyles from 'styles/EventPage.module.css'
import PageContainer from 'layouts/PageContainer'

const Title = dynamic(() => import('components/Events/Title'))
const FormBlock = dynamic(() => import('components/Events/FormBlock'))

const Events = () => {
  return (
    <PageContainer title="Events">
      <Head>
        <title>Events - Asbury Park High School Hall of Fame</title>
      </Head>
      <Title />
      <FormBlock
        url="/docs/2020CeremonyInvitation.pdf"
        label="Print Reservation"
      >
        <iframe
          title="Reservation - Asbury Park High School Distinguishe Alumni Hall of Fame Induction Ceremony 2020"
          src="https://docs.google.com/document/d/e/2PACX-1vRUZqa2vluFQObv5fFC9UWnB7l4gs54O49KLRNu3DOZtZ23_x5VVyJ8ApI-z5neIA/pub?embedded=true"
          className={eventPageStyles.invite}
          id="invitation-2020"
        />
      </FormBlock>
      <FormBlock
        url="/docs/2020AdvertiseCeremony.pdf"
        label="Print Advertise Form"
      >
        <iframe
          title="Advertise - Asbury Park High School Distinguished Alumni Hall of Fame Induction Ceremony 2020"
          src="https://docs.google.com/document/d/e/2PACX-1vQQDOX6uv9Ff462FqLZ-WgBWySmABEi6UnYH6VeVV6yrC5m9WFPa2VOPtTRg0j7YQ/pub?embedded=true"
          className={eventPageStyles.advertisement}
        />
      </FormBlock>
    </PageContainer>
  )
}

export default Events
