import SiteLayout from 'layouts/SiteLayout'
import PageTitle from 'components/shared/PageTitle'

const Page500 = () => (
  <SiteLayout>
    <PageTitle title="500 Error" />
    <p className="m-4">
      Sorry, there is an issue with our website. We are looking into the issue
      and we&apos;ll have the site working properly soon.
    </p>
  </SiteLayout>
)

export default Page500
