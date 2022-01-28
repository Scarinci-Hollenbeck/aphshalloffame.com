import Head from 'next/head'
import dynamic from 'next/dynamic'
import PageContainer from 'layouts/PageContainer'

const ContentBlock = dynamic(() => import('components/Donate/ContentBlock'))
const Title = dynamic(() => import('components/Donate/Title'))
const Donate = () => {
  return (
    <PageContainer title="Make a donation">
      <Head>
        <title>Donate - Asbury Park High School Hall of Fame</title>
      </Head>
      <Title />

      <ContentBlock url="/docs/Donation.pdf" label="Print Donation Form">
        <p>
          The Distinguished Hall of Fame is a 501(c)3 non-profit corporation
          registered with the IRS and the State of New Jersey formed to
          recognize alumni who have distinguished themselves in a variety of
          endeavors, thus providing positive role models for current APHS
          students. Virtually all the money we receive goes to the students. Our
          only expenses are mailing, postage, corporate & accounting. A real
          impact has been made by past Hall of Fame inductees who shared their
          life stories with students, including the personal and financial
          hardships they often had to overcome before finally reaching their
          goals. We have, to date, given a total of $162,000 to a total of 162
          students over the past 15 years. We firmly believe that what we have
          done and what we continue to do has helped the resurgence of the City
          of Asbury Park, the health of its school system and the stability of
          the local community. Should you wish to share in the opportunity of
          our scholarship efforts for worthy APHS students, please complete this
          donation page and send it with your check to the address provided.
        </p>
      </ContentBlock>

      <ContentBlock
        url="/docs/2020AdvertiseCeremony.pdf"
        label="Print Advertise Form"
      >
        <p>
          On Thursday evening, October 14, 2021, the postponed 2020 Ceremony
          will take place and ten more outstanding alumni of Asbury Park High
          School will be inducted into the Distinguished Alumni Hall of Fame
          during the ninth induction ceremony dinner to be held at the Sheraton
          in Eatontown.
        </p>
        <p>
          The Hall of Fame Committee will be publishing a commemorative journal
          that will be distributed at the induction event. By purchasing an ad
          in the journal, you will be honoring our Distinguished Alumni, and
          providing additional resources that will enable the Hall of Fame
          Committee to continue this valuable program.
        </p>
        <p>
          <strong>
            Please complete the form and submit, by September 20, 2021, with
            your payment, to Asbury Park High School Distinguished Hall of Fame:
            c/o Marilyn Tomaino, 102 Tanya Circle, Ocean, NJ 07712.
          </strong>
        </p>
      </ContentBlock>
    </PageContainer>
  )
}

export default Donate
